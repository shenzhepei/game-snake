import { useCallback, useEffect, useState } from "react";
import { createGame, queueDirection, stepGame, type Direction } from "./engine";

export type Difficulty = "calm" | "classic" | "rapid";
const speeds: Record<Difficulty, number> = { calm: 190, classic: 125, rapid: 78 };
const keyDirections: Record<string, Direction> = {
  ArrowUp: "up", w: "up", W: "up", ArrowDown: "down", s: "down", S: "down",
  ArrowLeft: "left", a: "left", A: "left", ArrowRight: "right", d: "right", D: "right",
};

export function useSnakeGame(difficulty: Difficulty) {
  const [game, setGame] = useState(createGame);
  const [best, setBest] = useState(() => Number(localStorage.getItem("game-snake-best")) || 0);

  const turn = useCallback((direction: Direction) => setGame((current) => queueDirection(current, direction)), []);
  const restart = useCallback(() => setGame({ ...createGame(), status: "running" }), []);
  const togglePause = useCallback(() => {
    setGame((current) => ({
      ...current,
      status: current.status === "paused" ? "running" : current.status === "running" ? "paused" : current.status,
    }));
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const direction = keyDirections[event.key];
      if (direction) {
        event.preventDefault();
        turn(direction);
      }
      if (event.key === " " || event.key === "Escape") {
        event.preventDefault();
        togglePause();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [togglePause, turn]);

  useEffect(() => {
    if (game.status !== "running") return;
    const timer = window.setInterval(() => setGame((current) => stepGame(current)), speeds[difficulty]);
    return () => window.clearInterval(timer);
  }, [difficulty, game.status]);

  useEffect(() => {
    if (game.score > best) {
      setBest(game.score);
      localStorage.setItem("game-snake-best", String(game.score));
    }
  }, [best, game.score]);

  return { game, best, turn, restart, togglePause };
}

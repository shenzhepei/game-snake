import { describe, expect, it } from "vitest";
import { BOARD_SIZE, createFood, createGame, queueDirection, stepGame, type GameState } from "./engine";

describe("snake engine", () => {
  it("creates a valid game and deterministic food", () => {
    const game = createGame(() => 0);
    expect(game.snake).toHaveLength(3);
    expect(game.snake).not.toContainEqual(game.food);
    expect(createFood([{ x: 0, y: 0 }], () => 0)).toEqual({ x: 1, y: 0 });
  });

  it("moves and rejects a reverse turn", () => {
    let game: GameState = { ...createGame(), status: "running" };
    expect(queueDirection(game, "left")).toBe(game);
    game = stepGame(queueDirection(game, "up"));
    expect(game.snake[0]).toEqual({ x: 9, y: 8 });
  });

  it("grows and scores when food is eaten", () => {
    const game = { ...createGame(), status: "running" as const, food: { x: 10, y: 9 } };
    const next = stepGame(game, () => 0);
    expect(next.score).toBe(10);
    expect(next.snake).toHaveLength(4);
  });

  it("ends on wall and self collisions", () => {
    const wall = { ...createGame(), status: "running" as const, snake: [{ x: BOARD_SIZE - 1, y: 1 }], direction: "right" as const, queuedDirection: "right" as const };
    expect(stepGame(wall).status).toBe("over");
    const self: GameState = {
      snake: [{ x: 2, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }],
      food: { x: 9, y: 9 }, direction: "left", queuedDirection: "up", score: 0, status: "running",
    };
    expect(stepGame(self).status).toBe("over");
  });

  it("does not advance while paused", () => {
    const game = { ...createGame(), status: "paused" as const };
    expect(stepGame(game)).toBe(game);
  });
});

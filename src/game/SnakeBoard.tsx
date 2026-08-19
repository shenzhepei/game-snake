import { Apple, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Pause, Play, RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BOARD_SIZE, type Direction } from "./engine";
import type { Difficulty } from "./useSnakeGame";
import { useSnakeGame } from "./useSnakeGame";

const directionIcons = { up: ArrowUp, down: ArrowDown, left: ArrowLeft, right: ArrowRight };

export function SnakeBoard({ difficulty }: { difficulty: Difficulty }) {
  const { t } = useTranslation();
  const { game, best, turn, restart, togglePause } = useSnakeGame(difficulty);
  const overlay = game.status === "ready" || game.status === "paused" || game.status === "over";
  const overlayTitle = game.status === "ready" ? "ready" : game.status === "paused" ? "paused" : "over";
  const overlayText = game.status === "ready" ? "readyText" : game.status === "paused" ? "pausedText" : "overText";

  return (
    <section className="game-stage">
      <div className="score-bar">
        <div><span>{t("score")}</span><strong>{String(game.score).padStart(3, "0")}</strong></div>
        <div className="round-indicator"><i /><span>{game.status === "running" ? t("classic") : t(game.status)}</span></div>
        <div><span>{t("best")}</span><strong>{String(best).padStart(3, "0")}</strong></div>
      </div>

      <div className="board-wrap">
        <div className="snake-board" role="application" aria-label={t("title")}>
          <div
            className="food"
            style={{ left: game.food.x * 100 / BOARD_SIZE + "%", top: game.food.y * 100 / BOARD_SIZE + "%" }}
          >
            <Apple />
          </div>
          {game.snake.map((part, index) => (
            <div
              className={"snake-part " + (index === 0 ? "is-head" : "")}
              key={part.x + "-" + part.y + "-" + index}
              style={{ left: part.x * 100 / BOARD_SIZE + "%", top: part.y * 100 / BOARD_SIZE + "%" }}
            >
              {index === 0 && <><i /><i /></>}
            </div>
          ))}
          {overlay && (
            <div className="game-overlay">
              <p>{game.status === "over" && game.score === best && game.score > 0 ? t("newBest") : t("title")}</p>
              <h2>{t(overlayTitle)}</h2>
              <span>{t(overlayText, { score: game.score })}</span>
              <button onClick={game.status === "paused" ? togglePause : restart} type="button">
                {game.status === "paused" ? <Play size={18} /> : <RotateCcw size={18} />}
                {t(game.status === "paused" ? "resume" : game.status === "ready" ? "start" : "restart")}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="game-controls">
        <div className="d-pad" role="group" aria-label={t("controls")}>
          {(["up", "left", "down", "right"] as Direction[]).map((direction) => {
            const Icon = directionIcons[direction];
            return <button className={"control-" + direction} key={direction} onClick={() => turn(direction)} title={direction} type="button"><Icon size={22} /></button>;
          })}
        </div>
        <button className="pause-button" disabled={game.status === "ready" || game.status === "over"} onClick={togglePause} type="button">
          {game.status === "paused" ? <Play size={18} /> : <Pause size={18} />}
          {t(game.status === "paused" ? "resume" : "pause")}
        </button>
      </div>
    </section>
  );
}

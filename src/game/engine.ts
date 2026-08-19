export type Direction = "up" | "down" | "left" | "right";
export type Point = { x: number; y: number };
export type GameStatus = "ready" | "running" | "paused" | "over";
export type GameState = {
  snake: Point[];
  food: Point;
  direction: Direction;
  queuedDirection: Direction;
  score: number;
  status: GameStatus;
};

export const BOARD_SIZE = 18;
const vectors: Record<Direction, Point> = {
  up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 },
};
const opposites: Record<Direction, Direction> = { up: "down", down: "up", left: "right", right: "left" };

export function samePoint(first: Point, second: Point) {
  return first.x === second.x && first.y === second.y;
}

export function createFood(snake: Point[], random: () => number = Math.random): Point {
  const free: Point[] = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      if (!snake.some((part) => samePoint(part, { x, y }))) free.push({ x, y });
    }
  }
  return free[Math.min(free.length - 1, Math.floor(random() * free.length))] ?? { x: 0, y: 0 };
}

export function createGame(random: () => number = Math.random): GameState {
  const snake = [{ x: 9, y: 9 }, { x: 8, y: 9 }, { x: 7, y: 9 }];
  return { snake, food: createFood(snake, random), direction: "right", queuedDirection: "right", score: 0, status: "ready" };
}

export function queueDirection(state: GameState, direction: Direction): GameState {
  if (opposites[state.direction] === direction) return state;
  return { ...state, queuedDirection: direction };
}

export function stepGame(state: GameState, random: () => number = Math.random): GameState {
  if (state.status !== "running") return state;
  const direction = state.queuedDirection;
  const vector = vectors[direction];
  const head = { x: state.snake[0].x + vector.x, y: state.snake[0].y + vector.y };
  const ate = samePoint(head, state.food);
  const collisionBody = ate ? state.snake : state.snake.slice(0, -1);
  const hitWall = head.x < 0 || head.y < 0 || head.x >= BOARD_SIZE || head.y >= BOARD_SIZE;
  const hitSelf = collisionBody.some((part) => samePoint(part, head));
  if (hitWall || hitSelf) return { ...state, direction, queuedDirection: direction, status: "over" };
  const snake = [head, ...state.snake];
  if (!ate) snake.pop();
  return {
    ...state,
    snake,
    direction,
    queuedDirection: direction,
    food: ate ? createFood(snake, random) : state.food,
    score: state.score + (ate ? 10 : 0),
  };
}

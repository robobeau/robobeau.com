import { createContext, Dispatch, SetStateAction } from "react";

interface Position {
  x: number;
  y: number;
}

const initialPosition = { x: 0, y: 0 };

const PositionContext = createContext<
  [Position, Dispatch<SetStateAction<Position>>]
>([initialPosition, () => {}]);

export { PositionContext as default, initialPosition, type Position };

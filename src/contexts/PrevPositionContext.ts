import { createContext, Dispatch, SetStateAction } from "react";
import { Position } from "./PositionContext";

const PrevPositionContext = createContext<
  [Position | null, Dispatch<SetStateAction<Position | null>>]
>([null, () => {}]);

export { PrevPositionContext as default };

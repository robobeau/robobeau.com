import { createContext, Dispatch, SetStateAction } from "react";

const initialZIndex = 0;

const ZIndexContext = createContext<[number, Dispatch<SetStateAction<number>>]>(
  [initialZIndex, () => {}]
);

export { ZIndexContext as default, initialZIndex };

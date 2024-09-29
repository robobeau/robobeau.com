import { createContext, Dispatch, SetStateAction } from "react";
import { Size } from "./SizeContext";

const PrevSizeContext = createContext<
  [Size | null, Dispatch<SetStateAction<Size | null>>]
>([null, () => {}]);

export { PrevSizeContext as default };

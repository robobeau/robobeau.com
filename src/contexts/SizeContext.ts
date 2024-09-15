import { createContext, Dispatch, SetStateAction } from "react";

interface Size {
  height: number;
  width: number;
}

const initialSize = { height: 200, width: 200 };

const SizeContext = createContext<[Size, Dispatch<SetStateAction<Size>>]>([
  initialSize,
  () => {},
]);

export { SizeContext as default, initialSize, type Size };

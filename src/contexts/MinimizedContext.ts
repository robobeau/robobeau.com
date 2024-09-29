import { createContext, Dispatch, SetStateAction } from "react";

const initialIsMinimized = false;

const MinimizedContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([initialIsMinimized, () => {}]);

export { MinimizedContext as default, initialIsMinimized };

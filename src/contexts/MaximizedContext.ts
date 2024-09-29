import { createContext, Dispatch, SetStateAction } from "react";

const initialIsMaximized = false;

const MaximizedContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([initialIsMaximized, () => {}]);

export { MaximizedContext as default, initialIsMaximized };

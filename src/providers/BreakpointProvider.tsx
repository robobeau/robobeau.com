"use client";

import BreakpointContext from "@/contexts/BreakpointContext";
import useBreakpoint from "@/hooks/useBreakpoint";
import { FC, PropsWithChildren } from "react";

const BreakpointProvider: FC<PropsWithChildren> = ({ children }) => {
  const breakpoint = useBreakpoint();

  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
};

export { BreakpointProvider as default };

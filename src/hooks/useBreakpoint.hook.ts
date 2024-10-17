"use client";

import { useEffect, useState } from "react";

import { initialBreakpoint } from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";
import { getCurrentBreakpoint } from "@/utils/breakpoint.util";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(initialBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      const currentBreakpoint = getCurrentBreakpoint();

      if (currentBreakpoint) {
        setBreakpoint(currentBreakpoint);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
}

export { useBreakpoint as default };


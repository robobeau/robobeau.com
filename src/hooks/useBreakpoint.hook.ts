"use client";

import Breakpoint from "@/enums/breakpoint";
import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(Breakpoint.sm);

  useEffect(() => {
    const mediaQueries: Record<Breakpoint, string> = {
      [Breakpoint.sm]: "(max-width: 600px)",
      [Breakpoint.md]: "(max-width: 900px)",
      [Breakpoint.lg]: "(max-width: 1200px)",
      [Breakpoint.xl]: "(max-width: 1536px)",
    };

    const handleResize = () => {
      Object.entries(mediaQueries).forEach(([key, value]) => {
        if (window.matchMedia(value).matches) {
          setBreakpoint(key as Breakpoint);
        }
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export { Breakpoint, useBreakpoint as default };

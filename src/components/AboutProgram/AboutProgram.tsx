"use client";

import { FC, useContext } from "react";

import Program from "@/components/Program/Program";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";

import AboutMe from "./about-me.md";
import aboutProgramIcon from "./programIcon";

const initialOffsets = {
  [Breakpoint.sm]: { x: -40, y: -260 },
  [Breakpoint.md]: { x: -200, y: 0 },
  [Breakpoint.lg]: { x: 125, y: 100 },
  [Breakpoint.xl]: { x: 125, y: 100 },
  [Breakpoint.xxl]: { x: 125, y: 100 },
}

const initialSizes = {
  [Breakpoint.sm]: { height: 300, width: 340 },
  [Breakpoint.md]: { height: 400, width: 325 },
  [Breakpoint.lg]: { height: 400, width: 325 },
  [Breakpoint.xl]: { height: 400, width: 325 },
  [Breakpoint.xxl]: { height: 400, width: 325 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "tl" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const AboutProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      icon={aboutProgramIcon.image}
      initialSize={initialSize}
      offset={initialOffset}
      origin={origin}
      title="About Me"
      zIndexOffset={1}
    >
      <AboutMe />
    </Program>
  );
};

export { AboutProgram as default };


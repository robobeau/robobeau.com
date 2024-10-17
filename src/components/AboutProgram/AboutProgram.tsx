"use client";

import { FC, useContext } from "react";

import Program from "@/components/Program/Program";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";

import AboutMe from "./about-me.md";
import aboutProgramIcon from "./programIcon";

const initialOffsets = {
  [Breakpoint.sm]: { x: 0, y: 100 },
  [Breakpoint.md]: { x: 50, y: 100 },
  [Breakpoint.lg]: { x: 125, y: 100 },
  [Breakpoint.xl]: { x: 125, y: 100 },
  [Breakpoint.xxl]: { x: 125, y: 100 },
}

const initialSizes = {
  [Breakpoint.sm]: { height: 400, width: 325 },
  [Breakpoint.md]: { height: 400, width: 325 },
  [Breakpoint.lg]: { height: 400, width: 325 },
  [Breakpoint.xl]: { height: 400, width: 325 },
  [Breakpoint.xxl]: { height: 400, width: 325 },
};

const AboutProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];

  return (
    <Program
      icon={aboutProgramIcon.image}
      initialSize={initialSize}
      offset={initialOffset}
      origin="tl"
      title="About Me"
      zIndexOffset={1}
    >
      <AboutMe />
    </Program>
  );
};

export { AboutProgram as default };


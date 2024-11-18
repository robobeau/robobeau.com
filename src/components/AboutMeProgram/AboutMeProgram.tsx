"use client";

import { FC, useContext } from "react";

import Program from "@/components/Program/Program";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";

import AboutMe from "./about-me.mdx";
import aboutMeProgramIcon from "./programIcon";

const initialOffsets = {
  [Breakpoint.sm]: { x: -40, y: -260 },
  [Breakpoint.md]: { x: -215, y: 0 },
  [Breakpoint.lg]: { x: -265, y: -50 },
  [Breakpoint.xl]: { x: 100, y: 100 },
  [Breakpoint.xxl]: { x: 100, y: 100 },
}

const initialSizes = {
  [Breakpoint.sm]: { height: 300, width: 350 },
  [Breakpoint.md]: { height: 300, width: 350 },
  [Breakpoint.lg]: { height: 400, width: 435 },
  [Breakpoint.xl]: { height: 400, width: 435 },
  [Breakpoint.xxl]: { height: 400, width: 435 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "m" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const AboutMeProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      icon={aboutMeProgramIcon.image}
      initialSize={initialSize}
      offset={initialOffset}
      origin={origin}
      title="About Me"
      zIndexOffset={1}
    >
      <main>
        <AboutMe />
      </main>
    </Program>
  );
};

export { AboutMeProgram as default };


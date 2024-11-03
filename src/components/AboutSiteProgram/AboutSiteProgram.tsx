"use client";

import { FC, useContext } from "react";

import Program from "@/components/Program/Program";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";
import MSMAI012 from "@/images/MSMAI012.png";

import AboutSite from "./about-site.md";

const initialOffsets = {
  [Breakpoint.sm]: { x: -40, y: -260 },
  [Breakpoint.md]: { x: -152, y: -100 },
  [Breakpoint.lg]: { x: -160, y: -80 },
  [Breakpoint.xl]: { x: 255, y: 155 },
  [Breakpoint.xxl]: { x: 255, y: 155 },
}

const initialSizes = {
  [Breakpoint.sm]: { height: 300, width: 350 },
  [Breakpoint.md]: { height: 220, width: 335 },
  [Breakpoint.lg]: { height: 220, width: 335 },
  [Breakpoint.xl]: { height: 220, width: 335 },
  [Breakpoint.xxl]: { height: 220, width: 335 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "m" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const AboutSiteProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      icon={MSMAI012}
      initialIsMinimized={true}
      initialSize={initialSize}
      offset={initialOffset}
      origin={origin}
      title="About Site"
      zIndexOffset={1}
    >
      <section>
        <AboutSite />
      </section>
    </Program>
  );
};

export { AboutSiteProgram as default };


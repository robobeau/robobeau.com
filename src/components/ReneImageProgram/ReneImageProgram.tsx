"use client";

import Image from "next/image";
import { FC, useContext } from "react";

import Program from "@/components/Program/Program";
import { MY_NAME } from "@/constants";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";
import PROGM013 from "@/images/PROGM013.png";
import ReneMoshed from "@/images/ReneMoshed.gif";

const initialOffsets = {
  [Breakpoint.sm]: { x: -15, y: 150 },
  [Breakpoint.md]: { x: 100, y: -90 },
  [Breakpoint.lg]: { x: 150, y: -140 },
  [Breakpoint.xl]: { x: 502, y: 20 },
  [Breakpoint.xxl]: { x: 502, y: 20 },
};

const initialSizes = {
  [Breakpoint.sm]: { height: 380, width: 300 },
  [Breakpoint.md]: { height: 400, width: 400 },
  [Breakpoint.lg]: { height: 500, width: 500 },
  [Breakpoint.xl]: { height: 600, width: 600 },
  [Breakpoint.xxl]: { height: 600, width: 600 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "m" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const ReneImageProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      hasPadding={false}
      icon={PROGM013}
      initialSize={initialSize}
      isScrollable={false}
      offset={initialOffset}
      origin={origin}
      title="rene.jpeg"
    >
      <aside className="h-full w-full">
        <Image
          alt={MY_NAME}
          className="h-full object-cover w-full"
          priority
          src={ReneMoshed}
          unoptimized
        />
      </aside>
    </Program>
  );
};

export { ReneImageProgram as default };

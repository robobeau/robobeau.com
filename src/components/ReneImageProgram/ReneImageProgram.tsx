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
  [Breakpoint.sm]: { x: -20, y: 150 },
  [Breakpoint.md]: { x: 100, y: -90 },
  [Breakpoint.lg]: { x: 400, y: 0 },
  [Breakpoint.xl]: { x: 400, y: 0 },
  [Breakpoint.xxl]: { x: 400, y: 0 },
};

const initialSizes = {
  [Breakpoint.sm]: { height: 380, width: 300 },
  [Breakpoint.md]: { height: 400, width: 400 },
  [Breakpoint.lg]: { height: 450, width: 450 },
  [Breakpoint.xl]: { height: 450, width: 450 },
  [Breakpoint.xxl]: { height: 450, width: 450 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "tl" as const,
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
      offset={initialOffset}
      origin={origin}
      title="rene.jpeg"
    >
      <Image
        alt={MY_NAME}
        className="absolue h-full inset-0 object-cover w-full"
        priority
        src={ReneMoshed}
        unoptimized
      />
    </Program>
  );
};

export { ReneImageProgram as default };

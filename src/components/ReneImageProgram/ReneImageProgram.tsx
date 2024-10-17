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
  [Breakpoint.sm]: { x: 50, y: 375 },
  [Breakpoint.md]: { x: 100, y: 0 },
  [Breakpoint.lg]: { x: 400, y: 0 },
  [Breakpoint.xl]: { x: 400, y: 0 },
  [Breakpoint.xxl]: { x: 400, y: 0 },
};

const initialSizes = {
  [Breakpoint.sm]: { height: 400, width: 350 },
  [Breakpoint.md]: { height: 450, width: 450 },
  [Breakpoint.lg]: { height: 450, width: 450 },
  [Breakpoint.xl]: { height: 450, width: 450 },
  [Breakpoint.xxl]: { height: 450, width: 450 },
};

const ReneImageProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];

  return (
    <Program
      hasPadding={false}
      icon={PROGM013}
      initialSize={initialSize}
      offset={initialOffset}
      origin="tl"
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

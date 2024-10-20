"use client";

import Link from "next/link";
import { FC, useContext } from "react";

import Program from "@/components/Program/Program";
import ProgramIcon from "@/components/ProgramIcon/ProgramIcon";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";
import MSMAI010 from "@/images/MSMAI010.png";
import SYSED002 from "@/images/SYSED002.png";

const initialOffsets = {
  [Breakpoint.sm]: { x: -95, y: 240 },
  [Breakpoint.md]: { x: 100, y: 156 },
  [Breakpoint.lg]: { x: 100, y: 156 },
  [Breakpoint.xl]: { x: 918, y: 100 },
  [Breakpoint.xxl]: { x: 918, y: 100 },
};

const initialSizes = {
  [Breakpoint.sm]: { height: 160, width: 240 },
  [Breakpoint.md]: { height: 160, width: 240 },
  [Breakpoint.lg]: { height: 160, width: 240 },
  [Breakpoint.xl]: { height: 160, width: 240 },
  [Breakpoint.xxl]: { height: 160, width: 240 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "m" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const DocumentsProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      icon={MSMAI010}
      initialSize={initialSize}
      offset={initialOffset}
      origin={origin}
      title="Documents"
    >
      <div className="flex flex-row gap-x-8 items-end mt-auto">
        <Link href="/Rene Esteves Resume.pdf" target="_blank">
          <ProgramIcon image={SYSED002} label="Resume" />
        </Link>
      </div>
    </Program>
  );
};

export { DocumentsProgram as default };

"use client";

import { Metadata } from "next";
import { FC, useContext } from "react";

import "@/app/globals.css";
import Program from "@/components/Program/Program";
import { MY_HANDLE, MY_NAME } from "@/constants";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";
import BOCOF001 from "@/images/BOCOF001.png";
import Image from "next/image";

const initialOffsets = {
  [Breakpoint.sm]: { x: -40, y: 200 },
  [Breakpoint.md]: { x: -40, y: 200 },
  [Breakpoint.lg]: { x: 300, y: 100 },
  [Breakpoint.xl]: { x: 300, y: 100 },
  [Breakpoint.xxl]: { x: 300, y: 100 },
};

const initialSizes = {
  [Breakpoint.sm]: { height: 160, width: 240 },
  [Breakpoint.md]: { height: 160, width: 240 },
  [Breakpoint.lg]: { height: 160, width: 240 },
  [Breakpoint.xl]: { height: 160, width: 240 },
  [Breakpoint.xxl]: { height: 160, width: 240 },
};

const metadata: Metadata = {
  authors: { name: MY_NAME },
  title: `${MY_HANDLE}.exe`,
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "tl" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const Default: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      icon={BOCOF001}
      initialSize={initialSize}
      offset={initialOffset}
      origin={origin}
      title="Warning"
      zIndexOffset={1}
    >
      <div className="flex gap-x-2 h-full items-center justify-center">
        <Image
          alt="Under Construction!"
          height={32}
          src={BOCOF001}
          width={32}
        />

        <div className="flex flex-col gap-y-0 text-center">
          <h1 className="whitespace-nowrap">Under construction!</h1>

          <span className="text-xs">Please, pardon my dust!</span>
        </div>
      </div>
    </Program>
  );
};

export { Default as default, metadata };

"use client";

import Link from "next/link";
import { FC, useContext } from "react";

import "@/app/globals.css";
import aboutProgramIcon from "@/components/AboutProgram/programIcon";
import blogProgramIcon from "@/components/BlogProgram/programIcon";
import Program from "@/components/Program/Program";
import ProgramIcon, {
  ProgramIconWithUrlProps,
} from "@/components/ProgramIcon/ProgramIcon";
import socialProgramIcon from "@/components/SocialProgram/programIcon";
import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";

const initialOffsets = {
  [Breakpoint.sm]: { x: 50, y: 0 },
  [Breakpoint.md]: { x: 0, y: 50 },
  [Breakpoint.lg]: { x: 0, y: 50 },
  [Breakpoint.xl]: { x: 0, y: 50 },
  [Breakpoint.xxl]: { x: 0, y: 50 },
};

const initialSizes = {
  [Breakpoint.sm]: { height: 180, width: 300 },
  [Breakpoint.md]: { height: 240, width: 480 },
  [Breakpoint.lg]: { height: 240, width: 480 },
  [Breakpoint.xl]: { height: 240, width: 480 },
  [Breakpoint.xxl]: { height: 240, width: 480 },
};

const programIcons: Array<ProgramIconWithUrlProps> = [
  aboutProgramIcon,
  blogProgramIcon,
  socialProgramIcon,
];

const MainProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];

  return (
    <Program
      endSessionOnClose={true}
      initialSize={initialSize}
      offset={initialOffset}
      origin="tl"
      title="robobeau"
    >
      <div className="flex flex-row gap-x-8 items-end mt-auto">
        {programIcons.map(({ target, url, ...programIconProps }, index) => (
          <Link className="shrink-0" href={url} key={index} target={target}>
            <ProgramIcon {...programIconProps} />
          </Link>
        ))}
      </div>
    </Program>
  );
};

export { MainProgram as default };

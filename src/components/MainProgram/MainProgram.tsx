// "use client";

import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import "@/app/globals.css";
import { programIcon as aboutProgramIcon } from "@/components/AboutProgram/AboutProgram";
import { programIcon as blogProgramIcon } from "@/components/BlogProgram/BlogProgram";
import Program from "@/components/Program/Program";
import ProgramIcon, {
  ProgramIconWithUrlProps,
} from "@/components/ProgramIcon/ProgramIcon";
import { programIcon as socialProgramIcon } from "@/components/SocialProgram/SocialProgram";
// import BreakpointContext from "@/contexts/BreakpointContext";
import Breakpoint from "@/enums/breakpoint";

const initialSizes = {
  [Breakpoint.sm]: { height: 240, width: 480 },
  [Breakpoint.md]: { height: 240, width: 480 },
  [Breakpoint.lg]: { height: 240, width: 480 },
  [Breakpoint.xl]: { height: 240, width: 480 },
};

const programIcons: Array<ProgramIconWithUrlProps> = [
  aboutProgramIcon,
  blogProgramIcon,
  socialProgramIcon,
];

const MainProgram: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  // const breakpoint = useContext(BreakpointContext);
  const initialSize = initialSizes[Breakpoint.sm];

  return (
    <>
      <Program
        endSessionOnClose={true}
        initialSize={initialSize}
        offset={{ x: 0, y: 50 }}
        origin="tl"
        title="robobeau.exe"
      >
        <div className="flex flex-row gap-x-8 items-end mt-auto">
          {programIcons.map(({ target, url, ...programIconProps }, index) => (
            <Link className="shrink-0" href={url} key={index} target={target}>
              <ProgramIcon {...programIconProps} />
            </Link>
          ))}
        </div>
      </Program>

      {children}
    </>
  );
};

export { MainProgram as default };


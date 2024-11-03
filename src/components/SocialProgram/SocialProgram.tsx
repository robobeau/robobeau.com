"use client";

import Link from "next/link";
import { FC, useContext } from "react";

import Program from "@/components/Program/Program";
import ProgramIcon, {
  ProgramIconWithUrlProps,
} from "@/components/ProgramIcon/ProgramIcon";
import MORIC036 from "@/images/MORIC036.png";
import MSMAI012 from "@/images/MSMAI012.png";
import PROGM013 from "@/images/PROGM013.png";
import PROGM019 from "@/images/PROGM019.png";
import PROGM021 from "@/images/PROGM021.png";
import SOL001 from "@/images/SOL001.png";
import WINFI001 from "@/images/WINFI001.png";

import programIcon from "./programIcon";
import Breakpoint from "@/enums/breakpoint";
import BreakpointContext from "@/contexts/BreakpointContext";

const initialOffsets = {
  [Breakpoint.sm]: { x: -40, y: 0 },
  [Breakpoint.md]: { x: -40, y: 0 },
  [Breakpoint.lg]: { x: -40, y: 0 },
  [Breakpoint.xl]: { x: 300, y: 100 },
  [Breakpoint.xxl]: { x: 300, y: 100 },
}

const initialSizes = {
  [Breakpoint.sm]: { height: 320, width: 275 },
  [Breakpoint.md]: { height: 320, width: 275 },
  [Breakpoint.lg]: { height: 320, width: 275 },
  [Breakpoint.xl]: { height: 320, width: 275 },
  [Breakpoint.xxl]: { height: 320, width: 275 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "m" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const programIcons: Array<ProgramIconWithUrlProps> = [
  {
    image: WINFI001,
    label: "Backloggd",
    target: "_blank",
    url: "https://backloggd.com/u/robobeau",
  },
  {
    image: MORIC036,
    label: "Bluesky",
    target: "_blank",
    url: "https://bsky.app/profile/robobeau.com",
  },
  {
    image: PROGM013,
    label: "Instagram",
    target: "_blank",
    url: "https://instagram.com/robobeau",
  },
  {
    image: SOL001,
    label: "itch.io",
    target: "_blank",
    url: "https://robobeau.itch.io",
  },
  {
    image: PROGM019,
    label: "Letterboxd",
    target: "_blank",
    url: "https://letterboxd.com/robobeau",
  },
  {
    image: PROGM021,
    label: "LinkedIn",
    target: "_blank",
    url: "https://www.linkedin.com/in/reneesteves",
  },
  {
    image: MSMAI012,
    label: "Twitter",
    target: "_blank",
    url: "https://twitter.com/robobeau",
  },
];

const SocialProgram: FC = () => {
  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      icon={programIcon.image}
      initialSize={initialSize}
      offset={initialOffset}
      origin={origin}
      title={"Social"}
      zIndexOffset={1}
    >
      <nav className="flex flex-row flex-wrap gap-x-8 gap-y-4 items-end mt-auto">
        {programIcons.map(({ target, url, ...programIconProps }, index) => (
          <Link className="shrink-0" href={url} key={index} target={target}>
            <ProgramIcon {...programIconProps} />
          </Link>
        ))}
      </nav>
    </Program>
  );
};

export { SocialProgram as default };

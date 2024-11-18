"use client";

import { FC, PropsWithChildren, useContext } from "react";

import { MenuItem } from "@/components/Program/Menu";
import Program from "@/components/Program/Program";
import { ProgramIconWithUrlProps } from "@/components/ProgramIcon/ProgramIcon";
import NOTEP001 from "@/images/NOTEP001.png";
import Breakpoint from "@/enums/breakpoint";
import BreakpointContext from "@/contexts/BreakpointContext";

const blogMenu: Array<MenuItem> = [
  { label: "Files", key: "F", url: "/blog" },
  { label: "RSS Feed", key: "R", url: "/blog/rss", target: "_blank" },
];

const initialOffsets = {
  [Breakpoint.sm]: { x: -40, y: 0 },
  [Breakpoint.md]: { x: -40, y: 0 },
  [Breakpoint.lg]: { x: -40, y: 0 },
  [Breakpoint.xl]: { x: 200, y: -5 },
  [Breakpoint.xxl]: { x: 200, y: -5 },
};

const initialSizes = {
  [Breakpoint.sm]: { height: 500, width: 350 },
  [Breakpoint.md]: { height: 500, width: 500 },
  [Breakpoint.lg]: { height: 500, width: 500 },
  [Breakpoint.xl]: { height: 500, width: 500 },
  [Breakpoint.xxl]: { height: 500, width: 500 },
};

const origins = {
  [Breakpoint.sm]: "m" as const,
  [Breakpoint.md]: "m" as const,
  [Breakpoint.lg]: "m" as const,
  [Breakpoint.xl]: "tl" as const,
  [Breakpoint.xxl]: "tl" as const,
};

const programIcon: ProgramIconWithUrlProps = {
  image: NOTEP001,
  label: "Blog",
  url: "/blog",
};

const BlogProgram: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const breakpoint = useContext(BreakpointContext);

  const initialOffset = initialOffsets[breakpoint];
  const initialSize = initialSizes[breakpoint];
  const origin = origins[breakpoint];

  return (
    <Program
      icon={programIcon.image}
      initialSize={initialSize}
      menu={blogMenu}
      offset={initialOffset}
      origin={origin}
      title="Blog"
      zIndexOffset={1}
    >
      <main>
        {children}
      </main>
    </Program>
  );
};

export { BlogProgram as default };

import { FC } from "react";

import Program from "@/components/Program/Program";
import { ProgramIconWithUrlProps } from "@/components/ProgramIcon/ProgramIcon";
import PROGM024 from "@/images/PROGM024.png";

import AboutMe from "./about-me.md";

const programIcon: ProgramIconWithUrlProps = {
  image: PROGM024,
  label: "About",
  url: "/about",
};

const AboutProgram: FC = () => {
  return (
    <Program
      icon={programIcon.image}
      initialSize={{ height: 400, width: 325 }}
      offset={{ x: 125, y: 100 }}
      origin="tl"
      title="About Me"
      zIndexOffset={1}
    >
      <AboutMe />
    </Program>
  );
};

export { AboutProgram as default, programIcon };

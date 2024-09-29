import Image from "next/image";
import { FC } from "react";

import Program from "@/components/Program/Program";
import { ProgramIconWithUrlProps } from "@/components/ProgramIcon/ProgramIcon";
import { MY_NAME } from "@/constants";
import PROGM013 from "@/images/PROGM013.png";
import PROGM024 from "@/images/PROGM024.png";
import ReneMoshed from "@/images/ReneMoshed.gif";
import Page from "@/types/page";

import AboutMe from "./about-me.md";

const programIcon: ProgramIconWithUrlProps = {
  image: PROGM024,
  label: "About",
  url: "/about",
};

const About: FC<Page> = () => {
  return (
    <>
      <Program
        hasPadding={false}
        icon={PROGM013}
        initialSize={{ height: 450, width: 450 }}
        offset={{ x: 416, y: 64 }}
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

      <Program
        icon={programIcon.image}
        initialSize={{ height: 384, width: 320 }}
        offset={{ x: 160, y: 192 }}
        origin="tl"
        title="About Me"
        zIndexOffset={1}
      >
        <AboutMe />
      </Program>
    </>
  );
};

export { About as default, programIcon };


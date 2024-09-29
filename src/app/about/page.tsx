import Program from "@/components/Program/Program";
import { ProgramIconWithUrlProps } from "@/components/ProgramIcon/ProgramIcon";
import { MY_NAME } from "@/constants";
import PROGM013 from "@/images/PROGM013.png";
import PROGM024 from "@/images/PROGM024.png";
import ReneMoshed from "@/images/ReneMoshed.gif";
import Page from "@/types/page";
import Image from "next/image";
import { FC } from "react";
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
        // className="z-30"
        icon={programIcon.image}
        origin="tl"
        offset={{ x: 160, y: 192 }}
        initialSize={{ height: 384, width: 320 }}
        title="About Me"
      >
        <AboutMe />
      </Program>

      <Program
        // className="z-20"
        hasPadding={false}
        icon={PROGM013}
        origin="tl"
        offset={{ x: 416, y: 64 }}
        initialSize={{ height: 450, width: 450 }}
        title="rene.jpeg"
      >
        <Image
          alt={MY_NAME}
          className="absolue h-full inset-0 object-cover w-full"
          height={450}
          priority
          src={ReneMoshed}
          unoptimized
          width={450}
        />
      </Program>
    </>
  );
};

export { About as default, programIcon };


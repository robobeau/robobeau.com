import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import Program from "@/components/Program/Program";
import ProgramIcon, {
  ProgramIconWithUrlProps,
} from "@/components/ProgramIcon/ProgramIcon";
import { MY_NAME } from "@/constants";
import PROGM013 from "@/images/PROGM013.png";
import PROGM024 from "@/images/PROGM024.png";
import MSMAI010 from "@/images/MSMAI010.png";
import ReneMoshed from "@/images/ReneMoshed.gif";
import SYSED002 from "@/images/SYSED002.png";
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
        offset={{ x: 400, y: 0 }}
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
        icon={MSMAI010}
        initialSize={{ height: 160, width: 240 }}
        offset={{ x: 700, y: 50 }}
        origin="tl"
        title="Documents"
      >
        <div className="flex flex-row gap-x-8 items-end mt-auto">
          <Link href="/Rene Esteves Resume.pdf" target="_blank">
            <ProgramIcon image={SYSED002} label="Resume" />
          </Link>
        </div>
      </Program>

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
    </>
  );
};

export { About as default, programIcon };

import ProgramWindow from "@/components/ProgramWindow/ProgramWindow";
import { MY_NAME } from "@/constants";
import ReneMoshed from "@/images/ReneMoshed.gif";
import Page from "@/types/page";
import Image from "next/image";
import { FC } from "react";
import AboutMe from "./about-me.md";

const About: FC<Page> = () => {
  return (
    <>
      <ProgramWindow
        className="z-30"
        origin="tl"
        offset={{ x: 160, y: 192 }}
        size={{ height: 384, width: 320 }}
        title="About Me"
      >
        <AboutMe />
      </ProgramWindow>

      <ProgramWindow
        className="z-20"
        hasPadding={false}
        origin="tl"
        offset={{ x: 416, y: 64 }}
        size={{ height: 450, width: 450 }}
        title="rene.jpeg"
      >
        <Image
          alt={MY_NAME}
          className="absolue bottom-0 h-full left-0 object-cover right-0 top-0 w-full"
          height={450}
          src={ReneMoshed}
          width={450}
        />
      </ProgramWindow>
    </>
  );
};

export { About as default };

import { FC } from "react";

import AboutProgram from "@/components/AboutProgram/AboutProgram";
import DocumentsProgram from "@/components/DocumentsProgram/DocumentsProgram";
import ReneImageProgram from "@/components/ReneImageProgram/ReneImageProgram";
import Page from "@/types/page";

const AboutPage: FC<Page> = () => {
  return (
    <>
      <ReneImageProgram />

      <DocumentsProgram />

      <AboutProgram />
    </>
  );
};

export { AboutPage as default };

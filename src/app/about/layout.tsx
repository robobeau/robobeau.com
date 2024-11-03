import { FC, PropsWithChildren } from "react";

import AboutSiteProgram from "@/components/AboutSiteProgram/AboutSiteProgram";
import DocumentsProgram from "@/components/DocumentsProgram/DocumentsProgram";
import ReneImageProgram from "@/components/ReneImageProgram/ReneImageProgram";

const AboutLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <ReneImageProgram />

      <DocumentsProgram />

      {children}

      <AboutSiteProgram />
    </>
  );
};

export { AboutLayout as default };

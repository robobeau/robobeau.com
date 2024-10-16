import { FC, PropsWithChildren } from "react";

import DocumentsProgram from "@/components/DocumentsProgram/DocumentsProgram";
import ReneImageProgram from "@/components/ReneImageProgram/ReneImageProgram";

const AboutLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <ReneImageProgram />

      <DocumentsProgram />

      {children}
    </>
  );
};

export { AboutLayout as default };

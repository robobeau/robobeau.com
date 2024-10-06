import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

import "@/app/globals.css";
import MainProgram from "@/components/MainProgram/MainProgram";
import { MY_HANDLE, MY_NAME } from "@/constants";
import BreakpointProvider from "@/providers/BreakpointProvider";
import ZIndexProvider from "@/providers/ZIndexProvider";

const metadata: Metadata = {
  authors: { name: MY_NAME },
  title: `${MY_HANDLE}.exe`,
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className="bg-teal-700 bg-tokimeki flex flex-row gap-x-8 items-end mt-auto overflow-hidden p-10">
        <BreakpointProvider>
          <ZIndexProvider>
            <MainProgram />

            {children}
          </ZIndexProvider>
        </BreakpointProvider>
      </body>
    </html>
  );
};

export { RootLayout as default, metadata };

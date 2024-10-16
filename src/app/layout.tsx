import { Metadata } from "next";
import { FC, PropsWithChildren, ReactNode } from "react";

import "@/app/globals.css";
import { MY_HANDLE, MY_NAME } from "@/constants";
import BreakpointProvider from "@/providers/BreakpointProvider";
import ZIndexProvider from "@/providers/ZIndexProvider";

const metadata: Metadata = {
  authors: { name: MY_NAME },
  title: `${MY_HANDLE}.exe`,
};

interface RootLayoutProps {
  main: ReactNode;
}

const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = (props) => {
  const { children, main } = props;

  return (
    <html lang="en">
      <body className="bg-teal-700 bg-tokimeki flex flex-row gap-x-2 items-end mt-auto overflow-hidden p-10">
        <BreakpointProvider>
          <ZIndexProvider>
            {main}
            {children}
          </ZIndexProvider>
        </BreakpointProvider>
      </body>
    </html>
  );
};

export { RootLayout as default, metadata };

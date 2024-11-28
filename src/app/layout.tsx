import { FC, PropsWithChildren, ReactNode } from "react";

import "@/app/globals.css";
import { BASE_URL, MY_HANDLE, MY_NAME } from "@/constants";
import "@/fonts/kingdom";
import "@/fonts/w95fa";
import BreakpointProvider from "@/providers/BreakpointProvider";
import ZIndexProvider from "@/providers/ZIndexProvider";
import { Metadata } from "next";

interface RootLayoutProps {
  main: ReactNode;
}

const metadata: Metadata = {
  authors: { name: MY_NAME },
  metadataBase: new URL(BASE_URL),
  title: `${MY_HANDLE}.exe`,
};

const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = (props) => {
  const { children, main } = props;

  return (
    <html lang="en">
      <body className="bg-teal-700 bg-tokimeki flex flex-row font-sans gap-x-2 items-end mt-auto overflow-hidden p-10">
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

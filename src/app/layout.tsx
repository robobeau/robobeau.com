import { programIcon as aboutProgramIcon } from "@/app/about/page";
import { programIcon as blogProgramIcon } from "@/app/blog/layout";
import "@/app/globals.css";
import { programIcon as socialProgramIcon } from "@/app/social/page";
import Program from "@/components/Program/Program";
import ProgramIcon, {
  ProgramIconWithUrlProps,
} from "@/components/ProgramIcon/ProgramIcon";
import { MY_HANDLE, MY_NAME } from "@/constants";
import ZIndexProvider from "@/providers/ZIndexProvider";
import { Metadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";

const metadata: Metadata = {
  authors: { name: MY_NAME },
  title: `${MY_HANDLE}.exe`,
};

const programIcons: Array<ProgramIconWithUrlProps> = [
  aboutProgramIcon,
  blogProgramIcon,
  socialProgramIcon,
];

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className="bg-teal-700 bg-tokimeki flex flex-row gap-x-8 items-end mt-auto overflow-hidden p-10">
        <ZIndexProvider>
          <Program
            endSessionOnClose={true}
            initialSize={{ height: 240, width: 480 }}
            offset={{ x: 32, y: 128 }}
            origin="tl"
            title="robobeau.exe"
          >
            <div className="flex flex-row gap-x-8 items-end mt-auto">
              {programIcons.map(
                ({ target, url, ...programIconProps }, index) => (
                  <Link href={url} key={index} target={target}>
                    <ProgramIcon {...programIconProps} />
                  </Link>
                )
              )}
            </div>
          </Program>

          {children}
        </ZIndexProvider>
      </body>
    </html>
  );
};

export { RootLayout as default, metadata };

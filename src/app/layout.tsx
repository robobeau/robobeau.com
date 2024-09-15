import ProgramIcon, {
  ProgramIconProps,
} from "@/components/ProgramIcon/ProgramIcon";
import ProgramWindow from "@/components/ProgramWindow/ProgramWindow";
import { MY_HANDLE, MY_NAME } from "@/constants";
import NOTEP001 from "@/images/NOTEP001.png";
import PROGM021 from "@/images/PROGM021.png";
import PROGM024 from "@/images/PROGM024.png";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";

const metadata: Metadata = {
  authors: { name: MY_NAME },
  title: `${MY_HANDLE}.exe`,
};

const programs: Array<Omit<ProgramIconProps, "key">> = [
  {
    icon: PROGM024,
    label: "About",
    url: "/about",
  },
  {
    icon: NOTEP001,
    label: "Blog",
    url: "/blog",
  },
  {
    icon: PROGM021,
    label: "Social",
    url: "/social",
  },
  {
    label: "Credits",
    url: "/credits",
  },
];

const RootLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className="bg-teal-700">
        <ProgramWindow
          className="z-10"
          endSessionOnClose={true}
          offset={{ x: 32, y: 128 }}
          origin="tl"
          size={{ height: 240, width: 480 }}
          title={`${metadata.title}`}
        >
          <div className="flex flex-row gap-x-8 items-end mt-auto">
            {programs.map((program, index) => (
              <ProgramIcon key={index} {...program} />
            ))}
          </div>
        </ProgramWindow>

        {children}
      </body>
    </html>
  );
};

export { RootLayout as default, metadata };

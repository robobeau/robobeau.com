import ProgramIcon, {
  ProgramIconProps,
} from "@/components/ProgramIcon/ProgramIcon";
import ProgramWindow from "@/components/ProgramWindow/ProgramWindow";
import MSMAI012 from "@/images/MSMAI012.png";
import PROGM001 from "@/images/PROGM001.png";
import PROGM013 from "@/images/PROGM013.png";
import PROGM019 from "@/images/PROGM019.png";
import WINFI001 from "@/images/WINFI001.png";
import { Metadata } from "next";
import { useRef } from "react";

const metadata: Metadata = {
  title: "Social",
};

const programs: Array<Omit<ProgramIconProps, "key">> = [
  {
    icon: WINFI001,
    label: "Backloggd",
    target: "_blank",
    url: "https://backloggd.com/u/robobeau",
  },
  {
    icon: PROGM001,
    label: "Bluesky",
    target: "_blank",
    url: "https://bsky.app/profile/robobeau.com",
  },
  {
    icon: PROGM013,
    label: "Instagram",
    target: "_blank",
    url: "https://instagram.com/robobeau",
  },
  {
    icon: PROGM019,
    label: "Letterboxd",
    target: "_blank",
    url: "https://letterboxd.com/robobeau",
  },
  {
    icon: MSMAI012,
    label: "Twitter",
    target: "_blank",
    url: "https://twitter.com/robobeau",
  },
];

const Social: React.FC = () => {
  return (
    <ProgramWindow
      className="z-20"
      offset={{ x: 64, y: 192 }}
      origin="tl"
      size={{ height: 320, width: 240 }}
      title={`${metadata.title}`}
    >
      <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 items-end mt-auto">
        {programs.map((program, index) => (
          <ProgramIcon key={index} {...program} />
        ))}
      </div>
    </ProgramWindow>
  );
};

export { Social as default, metadata };

import Link from "next/link";
import { FC } from "react";

import Program from "@/components/Program/Program";
import ProgramIcon, {
  ProgramIconWithUrlProps,
} from "@/components/ProgramIcon/ProgramIcon";
import MORIC036 from "@/images/MORIC036.png";
import MSMAI012 from "@/images/MSMAI012.png";
import PROGM013 from "@/images/PROGM013.png";
import PROGM019 from "@/images/PROGM019.png";
import PROGM021 from "@/images/PROGM021.png";
import SOL001 from "@/images/SOL001.png";
import WINFI001 from "@/images/WINFI001.png";

import programIcon from "./programIcon";

const programIcons: Array<ProgramIconWithUrlProps> = [
  {
    image: WINFI001,
    label: "Backloggd",
    target: "_blank",
    url: "https://backloggd.com/u/robobeau",
  },
  {
    image: MORIC036,
    label: "Bluesky",
    target: "_blank",
    url: "https://bsky.app/profile/robobeau.com",
  },
  {
    image: PROGM013,
    label: "Instagram",
    target: "_blank",
    url: "https://instagram.com/robobeau",
  },
  {
    image: SOL001,
    label: "itch.io",
    target: "_blank",
    url: "https://robobeau.itch.io",
  },
  {
    image: PROGM019,
    label: "Letterboxd",
    target: "_blank",
    url: "https://letterboxd.com/robobeau",
  },
  {
    image: PROGM021,
    label: "LinkedIn",
    target: "_blank",
    url: "https://www.linkedin.com/in/reneesteves",
  },
  {
    image: MSMAI012,
    label: "Twitter",
    target: "_blank",
    url: "https://twitter.com/robobeau",
  },
];

const SocialProgram: FC = () => {
  return (
    <Program
      icon={programIcon.image}
      initialSize={{ height: 320, width: 260 }}
      offset={{ x: 325, y: 100 }}
      origin="tl"
      title={"Social"}
    >
      <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 items-end mt-auto">
        {programIcons.map(({ target, url, ...programIconProps }, index) => (
          <Link className="shrink-0" href={url} key={index} target={target}>
            <ProgramIcon {...programIconProps} />
          </Link>
        ))}
      </div>
    </Program>
  );
};

export { SocialProgram as default };

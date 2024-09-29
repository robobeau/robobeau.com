import Program from "@/components/Program/Program";
import ProgramIcon, {
  ProgramIconWithUrlProps,
} from "@/components/ProgramIcon/ProgramIcon";
import MSMAI012 from "@/images/MSMAI012.png";
import PROGM001 from "@/images/PROGM001.png";
import PROGM013 from "@/images/PROGM013.png";
import PROGM019 from "@/images/PROGM019.png";
import PROGM021 from "@/images/PROGM021.png";
import WINFI001 from "@/images/WINFI001.png";
import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";

const metadata: Metadata = {
  title: "Social",
};

const programIcon: ProgramIconWithUrlProps = {
  image: PROGM021,
  label: "Social",
  url: "/social",
};

const programIcons: Array<ProgramIconWithUrlProps> = [
  {
    image: WINFI001,
    label: "Backloggd",
    target: "_blank",
    url: "https://backloggd.com/u/robobeau",
  },
  {
    image: PROGM001,
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

const Social: FC = () => {
  return (
    <Program
      icon={programIcon.image}
      initialSize={{ height: 320, width: 240 }}
      offset={{ x: 352, y: 192 }}
      origin="tl"
      title={`${metadata.title}`}
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

export { Social as default, metadata, programIcon };

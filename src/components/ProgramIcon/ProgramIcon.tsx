import vt323 from "@/fonts/vt323";
import PROGM008 from "@/images/PROGM008.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from "react";

interface ProgramIconProps extends PropsWithChildren {
  icon?: StaticImageData;
  label: string;
  target?: HTMLAttributeAnchorTarget;
  url: string;
}

const ProgramIcon: FC<ProgramIconProps> = (props) => {
  const { icon = PROGM008, label, target, url } = props;

  return (
    <Link
      className="group/link flex flex-col gap-1 items-center outline-none shrink-0"
      href={url}
      target={target}
    >
      <Image src={icon} alt={`${label} Icon`} />

      <span
        className={`
          leading-4 p-1 text-xl
          group-focus/link:bg-blue-800 group-focus/link:text-white
          ${vt323.className}
        `}
      >
        {label}
      </span>
    </Link>
  );
};

export { ProgramIcon as default, type ProgramIconProps };

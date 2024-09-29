import w95fa from "@/fonts/w95fa";
import PROGM001 from "@/images/PROGM001.png";
import Image, { StaticImageData } from "next/image";
import { FC, HTMLAttributeAnchorTarget, MouseEventHandler } from "react";

interface ProgramIconProps {
  className?: string;
  image?: StaticImageData;
  isMinimized?: boolean;
  label: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

interface ProgramIconWithUrlProps extends ProgramIconProps {
  target?: HTMLAttributeAnchorTarget;
  url: string;
}

const ProgramIcon: FC<ProgramIconProps> = (props) => {
  const {
    className,
    image = PROGM001,
    isMinimized = false,
    label,
    onClick,
  } = props;

  const programIconClasses = `
    group/link flex flex-col gap-1 items-center outline-none shrink-0
    ${className}
  `.trim();
  const labelClasses = `
    leading-4 p-1 select-none
    group-focus/link:bg-blue-800 group-focus/link:text-white
    ${isMinimized ? "bg-blue-800 text-white" : ""}
    ${w95fa.className}
  `.trim();

  return (
    <span className={programIconClasses} onClick={onClick}>
      <Image alt={`${label} Icon`} draggable={false} src={image} />

      <span className={labelClasses}>{label}</span>
    </span>
  );
};

export {
  ProgramIcon as default,
  type ProgramIconProps,
  type ProgramIconWithUrlProps,
};

import Image from "next/image";
import { FC } from "react";

import Program from "@/components/Program/Program";
import { MY_NAME } from "@/constants";
import PROGM013 from "@/images/PROGM013.png";
import ReneMoshed from "@/images/ReneMoshed.gif";

const ReneImageProgram: FC = () => {
  return (
    <Program
      hasPadding={false}
      icon={PROGM013}
      initialSize={{ height: 450, width: 450 }}
      offset={{ x: 400, y: 0 }}
      origin="tl"
      title="rene.jpeg"
    >
      <Image
        alt={MY_NAME}
        className="absolue h-full inset-0 object-cover w-full"
        priority
        src={ReneMoshed}
        unoptimized
      />
    </Program>
  );
};

export { ReneImageProgram as default };

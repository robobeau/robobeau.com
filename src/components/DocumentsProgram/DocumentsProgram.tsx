import Link from "next/link";
import { FC } from "react";

import Program from "@/components/Program/Program";
import ProgramIcon from "@/components/ProgramIcon/ProgramIcon";
import MSMAI010 from "@/images/MSMAI010.png";
import SYSED002 from "@/images/SYSED002.png";

const DocumentsProgram: FC = () => {
  return (
    <Program
      icon={MSMAI010}
      initialSize={{ height: 160, width: 240 }}
      offset={{ x: 700, y: 50 }}
      origin="tl"
      title="Documents"
    >
      <div className="flex flex-row gap-x-8 items-end mt-auto">
        <Link href="/Rene Esteves Resume.pdf" target="_blank">
          <ProgramIcon image={SYSED002} label="Resume" />
        </Link>
      </div>
    </Program>
  );
};

export { DocumentsProgram as default };

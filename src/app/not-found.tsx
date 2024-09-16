"use client";

import Button from "@/components/Button/Button";
import ProgramWindow from "@/components/ProgramWindow/ProgramWindow";
import vt323 from "@/fonts/vt323";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <ProgramWindow
      className="z-50"
      minConstraints={[192, 160]}
      maxConstraints={[192, 160]}
      origin="m"
      size={{ height: 160, width: 192 }}
      title="404"
    >
      <div
        className={`flex flex-col gap-2 h-full justify-center items-center text-xl ${vt323.className}`}
      >
        <span>Not Found</span>

        <Button onClick={router.back}>OK</Button>
      </div>
    </ProgramWindow>
  );
};

export { NotFound as default };

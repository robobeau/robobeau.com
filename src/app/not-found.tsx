"use client";

import Button from "@/components/Button/Button";
import Program from "@/components/Program/Program";
import w95fa from "@/fonts/w95fa";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <Program
      isMaximizable={false}
      isMinimizable={false}
      minConstraints={[192, 160]}
      maxConstraints={[192, 160]}
      origin="m"
      initialSize={{ height: 160, width: 192 }}
      title="404"
    >
      <div
        className={`flex flex-col gap-2 h-full justify-center items-center text-xl ${w95fa.className}`}
      >
        <span>Not Found</span>

        <Button onClick={router.back}>OK</Button>
      </div>
    </Program>
  );
};

export { NotFound as default };

import { FC } from "react";

import Button from "@/components/Button/Button";
import Program from "@/components/Program/Program";
import w95fa from "@/fonts/w95fa";

interface NotFoundProps {
  onConfirm: () => void;
}

const NotFound: FC<NotFoundProps> = (props) => {
  const { onConfirm } = props;

  const programWrapperClasses = `
    flex flex-col gap-2 h-full justify-center items-center text-xl
    ${w95fa.className}
  `.trim();

  return (
    <Program
      initialSize={{ height: 160, width: 192 }}
      isMaximizable={false}
      isMinimizable={false}
      minConstraints={[192, 160]}
      maxConstraints={[192, 160]}
      origin="m"
      title="404"
    >
      <div className={programWrapperClasses}>
        <span>Not Found</span>

        <Button onClick={onConfirm}>OK</Button>
      </div>
    </Program>
  );
};

export { NotFound as default };

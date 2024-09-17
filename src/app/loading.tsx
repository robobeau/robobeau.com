import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="bottom-0 cursor-wait fixed inset-0 z-50"></div>
  );
};

export { Loading as default };

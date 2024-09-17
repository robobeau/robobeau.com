import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="absolute bottom-0 cursor-wait fixed left-0 right-0 top-0 z-50"></div>
  );
};

export { Loading as default };

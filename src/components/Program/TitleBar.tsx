"use client";

import { HANDLE_CLASS } from "@/constants";
import MaximizedContext from "@/contexts/MaximizedContext";
import MinimizedContext from "@/contexts/MinimizedContext";
import PositionContext from "@/contexts/PositionContext";
import PrevPositionContext from "@/contexts/PrevPositionContext";
import w95fa from "@/fonts/w95fa";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";
import Button from "../Button/Button";

interface TitleBarProps {
  isFocused?: boolean;
  isMaximizable?: boolean;
  isMinimizable?: boolean;
  onClose?: () => void;
  title: string;
}

const commonIconClasses =
  "block border-solid border-x-transparent border-x-[6px] h-0 relative w-0";

const MaximizeIcon: FC = () => {
  return (
    <span
      className={`${commonIconClasses} border-b-black border-b-[6px] top-[-1px]`}
    ></span>
  );
};

const MinimizeIcon: FC = () => {
  return (
    <span
      className={`${commonIconClasses} border-t-black border-t-[6px] top-[1px]`}
    ></span>
  );
};

const RestoreIcon: FC = () => {
  return (
    <>
      <span
        className={`${commonIconClasses} border-b-black border-b-[6px] top-[-1px]`}
      ></span>
      <span
        className={`${commonIconClasses} border-t-black border-t-[6px] top-[1px]`}
      ></span>
    </>
  );
};

const TitleBar: React.FC<TitleBarProps> = (props) => {
  const {
    isFocused = false,
    isMaximizable = true,
    isMinimizable = true,
    onClose,
    title,
  } = props;

  const [isMaximized, setIsMaximized] = useContext(MaximizedContext);
  const [isMinimized, setIsMinimized] = useContext(MinimizedContext);
  const [position, setPosition] = useContext(PositionContext);
  const [prevPosition, setPrevPosition] = useContext(PrevPositionContext);
  const router = useRouter();

  const maximizeHandler = () => {
    setIsMaximized(true);
    setPosition({ x: 0, y: 0 });
    setPrevPosition(position);
  };

  const minimizeHandler = () => {
    setIsMinimized(true);
  };

  const restoreHandler = () => {
    setIsMaximized(false);
    setPosition(prevPosition!);
    setPrevPosition(null);
  };

  // #region Classes
  const closeButtonClasses = `
    group/button
    absolute bg-slate-300 border-black border-r bottom-0 cursor-pointer flex items-center justify-center left-0 outline-none text-white top-0 w-7 z-10
    focus:bg-slate-400 focus:text-black
  `.trim();
  const closeButtonIconClasses = `
    bg-white border-black border h-1 shadow-sm shadow-slate-800 w-1/2
    group-focus/button:bg-black group-focus/button:border-white group-focus/button:shadow-white
  `.trim();
  const minMaxButtonClasses = "ml-[-1px] w-7";
  const titleBarClasses = `
    ${isFocused ? "bg-title-bar text-white" : "bg-white text-black"}
    border-black border-b flex items-stretch h-7 relative shrink-0
    ${w95fa.className}
  `.trim();
  const titleClasses = `
    ${HANDLE_CLASS}
    content-center font-bold grow select-none text-center
  `.trim();
  // #endregion

  return (
    <div className={titleBarClasses}>
      <button
        className={closeButtonClasses}
        onClick={onClose ?? router.back}
        title="Go Back"
      >
        <span className={closeButtonIconClasses}></span>
      </button>

      <span className={titleClasses}>{title}</span>

      {(isMaximizable || isMinimizable) && (
        <span className="absolute bottom-[-1px] flex gap-[-1px] right-[-1px] top-[-1px] z-10">
          {isMinimizable && (
            <Button
              className={minMaxButtonClasses}
              hasOutline={false}
              hasRoundedCorners={false}
              hasTextOutline={false}
              onClick={minimizeHandler}
            >
              <MinimizeIcon />
            </Button>
          )}

          {isMaximizable && !isMaximized && (
            <Button
              className={minMaxButtonClasses}
              hasOutline={false}
              hasRoundedCorners={false}
              hasTextOutline={false}
              onClick={maximizeHandler}
            >
              <MaximizeIcon />
            </Button>
          )}

          {isMaximized && (
            <Button
              className={minMaxButtonClasses}
              hasOutline={false}
              hasRoundedCorners={false}
              hasTextOutline={false}
              onClick={restoreHandler}
            >
              <RestoreIcon />
            </Button>
          )}
        </span>
      )}
    </div>
  );
};

export { TitleBar as default, type TitleBarProps };

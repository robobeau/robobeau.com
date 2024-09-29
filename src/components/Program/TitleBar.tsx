"use client";

import { HANDLE_CLASS } from "@/constants";
import MaximizedContext from "@/contexts/MaximizedContext";
import MinimizedContext from "@/contexts/MinimizedContext";
import PositionContext from "@/contexts/PositionContext";
import PrevPositionContext from "@/contexts/PrevPositionContext";
import PrevSizeContext from "@/contexts/PrevSizeContext";
import SizeContext from "@/contexts/SizeContext";
import w95fa from "@/fonts/w95fa";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Button from "../Button/Button";

interface TitleBarProps {
  isMaximizable: boolean;
  isMinimizable: boolean;
  onClose?: () => void;
  title: string;
}

const TitleBar: React.FC<TitleBarProps> = (props) => {
  const { isMaximizable, isMinimizable, onClose, title } = props;

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

  return (
    <div
      className={`
        ${HANDLE_CLASS}
        bg-title-bar border-black border-b flex items-stretch h-7 relative shrink-0
        ${w95fa.className}
      `}
    >
      <button
        className={`
          group/button
          absolute bg-slate-300 border-black border-r bottom-0 cursor-pointer flex items-center justify-center left-0 outline-none text-white top-0 w-7 z-10
          focus:bg-slate-400 focus:text-black
        `}
        onClick={onClose ?? router.back}
        title="Go Back"
      >
        <span
          className={`
            bg-white border-black border h-1 shadow-sm shadow-slate-800 w-1/2
            group-focus/button:bg-black group-focus/button:border-white group-focus/button:shadow-white
          `}
        ></span>
      </button>

      <span
        className={`${HANDLE_CLASS} content-center font-bold grow select-none text-center text-white`}
      >
        {title}
      </span>

      {(isMaximizable || isMinimizable) && (
        <span className="absolute bottom-0 flex right-0 top-0 z-10">
          {isMinimizable && (
            <Button
              className="w-7"
              hasTextOutline={false}
              onClick={minimizeHandler}
            >
              <span className="block border-t-black border-t-[6px] border-solid border-x-transparent border-x-[6px] h-0 relative top-[1px] w-0"></span>
            </Button>
          )}

          {isMaximizable && !isMaximized && (
            <Button
              className="w-7"
              hasTextOutline={false}
              onClick={maximizeHandler}
            >
              <span className="block border-b-black border-b-[6px] border-solid border-x-transparent border-x-[6px] h-0 relative top-[-1px] w-0"></span>
            </Button>
          )}

          {isMaximized && (
            <Button
              className="w-7"
              hasTextOutline={false}
              onClick={restoreHandler}
            >
              <span className="block border-b-black border-b-[6px] border-solid border-x-transparent border-x-[6px] h-0 relative top-[-1px] w-0"></span>
              <span className="block border-t-black border-t-[6px] border-solid border-x-transparent border-x-[6px] h-0 relative top-[1px] w-0"></span>
            </Button>
          )}
        </span>
      )}
    </div>
  );
};

export { TitleBar as default, type TitleBarProps };

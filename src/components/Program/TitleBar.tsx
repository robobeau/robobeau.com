"use client";

import { useRouter } from "next/navigation";
import { FC, useContext } from "react";

import Button from "@/components/Button/Button";
import { HANDLE_CLASS } from "@/constants";
import MaximizedContext from "@/contexts/MaximizedContext";
import MinimizedContext from "@/contexts/MinimizedContext";
import PositionContext from "@/contexts/PositionContext";
import PrevPositionContext from "@/contexts/PrevPositionContext";
import w95fa from "@/fonts/w95fa";
import classNames from "@/utils/classNames.util";

import "./title-bar.css";

interface TitleBarProps {
  isFocused?: boolean;
  isMaximizable?: boolean;
  isMinimizable?: boolean;
  onClose?: () => void;
  title: string;
}

const MaximizeIcon: FC = () => {
  const className = classNames(
    "icon",
    "border-b-black border-b-[6px] top-[-1px]"
  );

  return <span className={className}></span>;
};

const MinimizeIcon: FC = () => {
  const className = classNames(
    "icon",
    "border-t-black border-t-[6px] top-[1px]"
  );

  return <span className={className}></span>;
};

const RestoreIcon: FC = () => {
  const upArrowClassName = classNames(
    "icon",
    "border-b-black border-b-[6px] top-[-1px]"
  );
  const downArrowClassName = classNames(
    "icon",
    "border-t-black border-t-[6px] top-[1px]"
  );

  return (
    <>
      <span className={upArrowClassName}></span>
      <span className={downArrowClassName}></span>
    </>
  );
};

const TitleBar: FC<TitleBarProps> = (props) => {
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
  const minMaxButtonClasses = "ml-[-1px] w-7";
  const titleBarClassNames = classNames(
    "title-bar",
    isFocused && "title-bar--focused",
    w95fa.className
  );
  const titleClassNames = classNames(
    HANDLE_CLASS,
    "content-center font-bold grow select-none text-center"
  );
  // #endregion

  return (
    <div className={titleBarClassNames}>
      <button
        className="close-button"
        onClick={onClose ?? router.back}
        title="Go Back"
      >
        <span className="close-button-icon"></span>
      </button>

      <span className={titleClassNames}>{title}</span>

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

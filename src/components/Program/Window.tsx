import MaximizedContext from "@/contexts/MaximizedContext";
import MinimizedContext from "@/contexts/MinimizedContext";
import PositionContext, { initialPosition } from "@/contexts/PositionContext";
import ZIndexContext from "@/contexts/ZIndexContext";
import classNames from "@/utils/classNames.util";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { ResizableProps } from "react-resizable";
import ProgramIcon from "../ProgramIcon/ProgramIcon";
import Draggable, { HANDLE_CLASS } from "./Draggable";
import Menu, { MenuItem } from "./Menu";
import ResizableBox from "./ResizeableBox";
import TitleBar, { TitleBarProps } from "./TitleBar";

interface WindowProps
  extends PropsWithChildren,
    Pick<ResizableProps, "maxConstraints" | "minConstraints">,
    Partial<Pick<TitleBarProps, "isMaximizable" | "isMinimizable">> {
  className?: string;
  endSessionOnClose?: boolean;
  hasPadding?: boolean;
  icon?: StaticImageData;
  isScrollable?: boolean;
  menu?: Array<MenuItem>;
  onClose?: () => void;
  title: string;
  zIndexOffset?: number;
}

const Window: FC<WindowProps> = (props) => {
  const {
    className,
    children,
    endSessionOnClose = false,
    hasPadding = true,
    icon,
    isMaximizable = true,
    isMinimizable = true,
    isScrollable = true,
    menu,
    maxConstraints,
    minConstraints,
    // onClose,
    title,
    zIndexOffset = 0,
  } = props;

  const [isMaximized, setIsMaximized] = useContext(MaximizedContext);
  const [isMinimized, setIsMinimized] = useContext(MinimizedContext);
  const [globalZIndex, setGlobalZIndex] = useContext(ZIndexContext);
  const router = useRouter();
  const [position, setPosition] = useState(initialPosition);
  const [zIndex, setZIndex] = useState(globalZIndex);
  const isFocused = zIndex === globalZIndex;

  const onCloseHandler = () => {
    if (endSessionOnClose) {
      const shouldEndSession = confirm(
        "This will end your session. Are you sure?"
      );

      if (shouldEndSession) {
        router.push("https://benhoyt.com/writings/the-small-web-is-beautiful");
      }

      return;
    }

    // if (onClose) {
    //   onClose();

    //   return;
    // }

    router.back();
  };

  const updateZIndex = () => {
    const newIndex = globalZIndex + 1 + zIndexOffset;

    setGlobalZIndex(newIndex);
    setZIndex(newIndex);
  };

  const restoreWindow = () => {
    setIsMinimized(false);
    updateZIndex();
  };

  useEffect(updateZIndex, []); // eslint-disable-line react-hooks/exhaustive-deps

  // #region Classes
  const childrenClassNames = classNames(
    "flex flex-col h-full w-full",
    hasPadding && "p-4",
    isScrollable && "overflow-auto touch-auto"
  );
  const draggableClassNames = classNames(
    "absolute self-start shadow-md",
    isMaximized && "inset-0 self-stretch !translate-x-0 !translate-y-0 !z-[9999]",
    className
  );
  const minimizedDraggableClassNames = classNames(
    "absolute",
    !isMinimized && "hidden"
  );
  const resizableBoxClassNames = classNames(isMaximized && "!size-full");
  const windowClassNames = classNames(
    "bg-gray-300 flex h-full w-full",
    !isMaximized && "border-4 border-black border-double"
  );
  // #endregion

  return (
    <>
      <PositionContext.Provider value={[position, setPosition]}>
        <span className="flex h-24 justify-center w-24">
          <Draggable className={minimizedDraggableClassNames}>
            <ProgramIcon
              className={HANDLE_CLASS}
              image={icon}
              isMinimized={true}
              label={title}
              onDoubleClick={restoreWindow}
            />
          </Draggable>
        </span>
      </PositionContext.Provider>

      {!isMinimized && (
        <Draggable
          className={draggableClassNames}
          onStart={updateZIndex}
          style={{ zIndex: zIndex }}
        >
          <ResizableBox
            className={resizableBoxClassNames}
            minConstraints={minConstraints}
            maxConstraints={maxConstraints}
            onResizeStart={updateZIndex}
          >
            <div
              className={windowClassNames}
              onMouseDown={updateZIndex}
              onTouchStart={updateZIndex}
            >
              <div className="bg-white flex flex-col grow overflow-hidden">
                <TitleBar
                  isFocused={isFocused}
                  isMaximizable={isMaximizable}
                  isMinimizable={isMinimizable}
                  onClose={onCloseHandler}
                  title={title}
                />

                {menu && <Menu isFocused={isFocused} menu={menu} />}

                <div className={childrenClassNames}>{children}</div>
              </div>
            </div>
          </ResizableBox>
        </Draggable>
      )}
    </>
  );
};

export { Window as default, type WindowProps };

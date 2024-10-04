import MaximizedContext from "@/contexts/MaximizedContext";
import MinimizedContext from "@/contexts/MinimizedContext";
import PositionContext, { initialPosition } from "@/contexts/PositionContext";
import ZIndexContext from "@/contexts/ZIndexContext";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const windowRef = useRef<HTMLDivElement>(null);
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
  const childrenClasses = `
    flex flex-col h-full w-full
    ${isScrollable ? "overflow-auto" : ""}
    ${hasPadding ? "p-4" : ""}
  `.trim();
  const draggableClasses = `
    absolute self-start shadow-md
    ${isMaximized ? "inset-0" : ""}
    ${className}
  `.trim();
  const minimizedDraggableClasses = `
    absolute
    ${!isMinimized ? "hidden" : ""}
  `.trim();
  const resizableBoxClasses = isMaximized ? "!size-full" : "";
  const windowClasses = `
    bg-slate-300 flex h-full w-full
    ${!isMaximized ? "border-4 border-black border-double" : ""}
  `.trim();
  // #endregion

  return (
    <>
      <PositionContext.Provider value={[position, setPosition]}>
        <span className="flex h-24 justify-center w-24">
          <Draggable className={minimizedDraggableClasses}>
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
          className={draggableClasses}
          onStart={updateZIndex}
          style={{ zIndex: zIndex }}
        >
          <ResizableBox
            className={resizableBoxClasses}
            minConstraints={minConstraints}
            maxConstraints={maxConstraints}
            onResizeStart={updateZIndex}
          >
            <div
              className={windowClasses}
              onMouseDown={updateZIndex}
              ref={windowRef}
            >
              <div className="bg-white flex flex-col grow overflow-hidden">
                <TitleBar
                  isFocused={isFocused}
                  isMaximizable={isMaximizable}
                  isMinimizable={isMinimizable}
                  onClose={onCloseHandler}
                  title={title}
                />

                {menu && <Menu menu={menu} ref={windowRef} />}

                <div className={childrenClasses}>{children}</div>
              </div>
            </div>
          </ResizableBox>
        </Draggable>
      )}
    </>
  );
};

export { Window as default, type WindowProps };

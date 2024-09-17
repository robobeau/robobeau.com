"use client";

import { HANDLE_CLASS } from "@/constants";
import PositionContext, { initialPosition } from "@/contexts/PositionContext";
import SizeContext, { initialSize, Size } from "@/contexts/SizeContext";
import MenuHotkeyEvent from "@/events/MenuHotkey";
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";
import {
  FC,
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ResizableProps } from "react-resizable";
import Draggable from "./Draggable";
import Menu, { MenuItem } from "./Menu";
import ResizableBox from "./ResizeableBox";
import Title from "./Title";

type Origin = "tl" | "t" | "tr" | "l" | "m" | "r" | "bl" | "b" | "br";

interface ProgramWindowProps
  extends PropsWithChildren,
    Pick<ResizableProps, "maxConstraints" | "minConstraints"> {
  className?: string;
  endSessionOnClose?: boolean;
  hasPadding?: boolean;
  isScrollable?: boolean;
  menu?: Array<MenuItem>;
  offset?: { x: number; y: number };
  // onClose?: () => void;
  origin?: Origin;
  size?: Size;
  title: string;
}

function getStartingPosition(
  origin: Origin,
  viewPort: { height: number; width: number },
  offset: { x: number; y: number },
  size: { height: number; width: number }
) {
  const { x: oX, y: oY } = offset;
  const { height: sH, width: sW } = size;
  const { height: vH, width: vW } = viewPort;
  const position = {
    x: 0,
    y: 0,
  };

  switch (origin) {
    case "tl":
      position.x = 0 + oX;
      position.y = 0 + oY;

      break;
    case "t":
      position.x = vW / 2 - sW / 2 + oX;
      position.y = 0 + oY;

      break;
    case "tr":
      position.x = vW - oX - sW;
      position.y = 0 + oY;

      break;
    case "l":
      position.x = 0 + oX;
      position.y = vH / 2 - sH / 2 + oY;

      break;
    case "m":
      position.x = vW / 2 - sW / 2 + oX;
      position.y = vH / 2 - sH / 2 + oY;

      break;
    case "r":
      position.x = vW - oX - sW;
      position.y = vH / 2 - sH / 2 + oY;

      break;
    case "bl":
      position.x = 0 + oX;
      position.y = vH - oY - sH;

      break;
    case "b":
      position.x = vW / 2 - sW / 2;
      position.y = vH - oY - sH;

      break;
    case "br":
      position.x = vW - oX - sW;
      position.y = vH - oY - sH;

      break;
  }

  return {
    x: Math.max(position.x, 0),
    y: Math.max(position.y, 0),
  };
}

function getViewport() {
  return typeof window !== "undefined"
    ? {
        height: window.innerHeight,
        width: window.innerWidth,
      }
    : { height: 0, width: 0 };
}

const ProgramWindow: FC<ProgramWindowProps> = (props) => {
  const {
    className,
    children,
    endSessionOnClose = false,
    hasPadding = true,
    isScrollable = true,
    menu,
    maxConstraints,
    minConstraints,
    offset = initialPosition,
    // onClose,
    origin = "tl",
    size = initialSize,
    title,
  } = props;
  const positionState = useState(() => {
    const viewPort = getViewport();

    return getStartingPosition(origin, viewPort, offset, size);
  });
  const sizeState = useState(size);
  const router = useRouter();

  useEffect(() => {
    const [_, setPosition] = positionState;
    const viewPort = getViewport();
    const newPosition = getStartingPosition(origin, viewPort, offset, size);

    setPosition(newPosition);
  }, []);

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

  const onKeyDownHandler = useCallback(
    debounce(
      (event: KeyboardEvent) => {
        if (event.altKey) {
          const menuHotkeyEvent = new MenuHotkeyEvent(event.key);

          document.dispatchEvent(menuHotkeyEvent);
        }
      },
      100,
      { leading: true, trailing: false }
    ),
    []
  );

  const overflowClass = isScrollable ? "overflow-auto" : "";
  const paddingClass = hasPadding ? "p-4" : "";

  return (
    <PositionContext.Provider value={positionState}>
      <SizeContext.Provider value={sizeState}>
        <Draggable className={`absolute ${className} m-auto`}>
          <ResizableBox
            minConstraints={minConstraints}
            maxConstraints={maxConstraints}
          >
            <div
              className="bg-slate-300 border-double border-black border-4 flex h-full w-full"
              onKeyDown={onKeyDownHandler}
            >
              <div className="bg-white flex flex-col grow overflow-hidden">
                <Title onClose={onCloseHandler} title={title} />

                {menu && <Menu menu={menu} />}

                <div
                  className={`flex flex-col h-full ${overflowClass} ${paddingClass} w-full`}
                >
                  {children}
                </div>
              </div>
            </div>
          </ResizableBox>
        </Draggable>
      </SizeContext.Provider>
    </PositionContext.Provider>
  );
};

export { ProgramWindow as default, HANDLE_CLASS };

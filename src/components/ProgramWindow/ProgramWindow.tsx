"use client";

import { HANDLE_CLASS } from "@/constants";
import PositionContext, { initialPosition } from "@/contexts/PositionContext";
import SizeContext, { initialSize, Size } from "@/contexts/SizeContext";
import MenuHotkeyEvent from "@/events/MenuHotkey";
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";
import {
  forwardRef,
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import Draggable from "./Draggable";
import Menu, { MenuItem } from "./Menu";
import ResizableBox from "./ResizeableBox";
import Title from "./Title";

type Origin = "tl" | "t" | "tr" | "l" | "m" | "r" | "bl" | "b" | "br";

interface ProgramWindowProps extends PropsWithChildren {
  className?: string;
  endSessionOnClose?: boolean;
  hasPadding?: boolean;
  isScrollable?: boolean;
  menu?: Array<MenuItem>;
  offset?: { x: number; y: number };
  onClose?: () => void;
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

  switch (origin) {
    case "tl":
      return { x: 0 + oX, y: 0 + oY };
    case "t":
      return { x: vW / 2 - sW / 2 + oX, y: 0 + oY };
    case "tr":
      return { x: vW - oX - sW, y: 0 + oY };
    case "l":
      return { x: 0 + oX, y: vH / 2 - sH / 2 + oY };
    case "m":
      return { x: vW / 2 - sW / 2 + oX, y: vH / 2 - sH / 2 + oY };
    case "r":
      return {
        x: vW - oX - sW,
        y: vH / 2 - sH / 2 + oY,
      };
    case "bl":
      return { x: 0 + oX, y: vH - oY - sH };
    case "b":
      return {
        x: vW / 2 - sW / 2,
        y: vH - oY - sH,
      };
    case "br":
      return {
        x: vW - oX - sW,
        y: vH - oY - sH,
      };
  }
}

const ProgramWindow = forwardRef<HTMLDivElement, ProgramWindowProps>(
  function ProgramWindow(props, ref) {
    const {
      className,
      children,
      endSessionOnClose = false,
      hasPadding = true,
      isScrollable = true,
      menu,
      offset = initialPosition,
      onClose,
      origin = "tl",
      size = initialSize,
      title,
    } = props;
    const positionState = useState(() =>
      getStartingPosition(origin, { height: 0, width: 0 }, offset, size)
    );
    const sizeState = useState(size);
    const router = useRouter();

    // useEffect(() => {
    //   const { clientHeight, clientWidth } = document.documentElement;
    //   const [_, setPosition] = positionState;
    //   const newPosition = getStartingPosition(
    //     origin,
    //     { height: clientHeight, width: clientWidth },
    //     offset,
    //     size
    //   );

    //   setPosition(newPosition);
    // }, []);

    const onCloseHandler = () => {
      if (endSessionOnClose) {
        const shouldEndSession = confirm(
          "This will end your session. Are you sure?"
        );

        if (shouldEndSession) {
          router.push(
            "https://benhoyt.com/writings/the-small-web-is-beautiful"
          );
        }

        return;
      }

      if (onClose) {
        onClose();

        return;
      }

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
            <ResizableBox>
              <div
                className="bg-slate-300 border-double border-black border-4 flex h-full w-full"
                onKeyDown={onKeyDownHandler}
              >
                <div className="bg-white flex flex-col grow overflow-hidden">
                  <Title onClose={onCloseHandler} title={title} />

                  {menu && <Menu menu={menu} />}

                  <div
                    className={`flex flex-col h-full ${overflowClass} ${paddingClass} w-full`}
                    ref={ref}
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
  }
);

export { ProgramWindow as default, HANDLE_CLASS };

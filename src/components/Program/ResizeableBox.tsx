"use client";

import MaximizedContext from "@/contexts/MaximizedContext";
import PositionContext from "@/contexts/PositionContext";
import { FC, PropsWithChildren, useContext } from "react";
import { ResizableBox as _ResizableBox, ResizableProps } from "react-resizable";
import SizeContext from "../../contexts/SizeContext";

const handleClasses = {
  nw: `absolute cursor-nwse-resize h-[10px] left-[-5px] top-[-5px] w-[10px] z-10`,
  n: `absolute cursor-ns-resize h-[10px] left-[-5px] right-[-5px] top-[-5px]`,
  ne: `absolute cursor-nesw-resize h-[10px] right-[-5px] top-[-5px] w-[10px] z-10`,
  w: `absolute bottom-[-5px] cursor-ew-resize left-[-5px] top-[-5px] w-[10px]`,
  e: `absolute bottom-[-5px] cursor-ew-resize right-[-5px] top-[-5px] w-[10px]`,
  sw: `absolute bottom-[-5px] cursor-nesw-resize h-[10px] left-[-5px] w-[10px] z-10`,
  s: `absolute bottom-[-5px] cursor-ns-resize h-[10px] left-[-5px] right-[-5px]`,
  se: `absolute bottom-[-5px] cursor-nwse-resize h-[10px] right-[-5px] w-[10px] z-10`,
};

interface ResizableBoxProps
  extends PropsWithChildren,
    Pick<
      ResizableProps,
      | "className"
      | "maxConstraints"
      | "minConstraints"
      | "resizeHandles"
      | "onResizeStart"
    > {}

const ResizableBox: FC<ResizableBoxProps> = (props) => {
  const {
    className,
    children,
    minConstraints = [240, 160],
    maxConstraints,
    onResizeStart,
    resizeHandles = ["nw", "n", "ne", "w", "e", "sw", "s", "se"],
  } = props;

  const [position, setPosition] = useContext(PositionContext);
  const [isMaximized] = useContext(MaximizedContext);
  const [size, setSize] = useContext(SizeContext);

  const onResizeHandler: ResizableProps["onResize"] = (event, data) => {
    const {
      handle,
      size: { height, width },
    } = data;
    const deltaX = width - size.width;
    const deltaY = height - size.height;

    if (handle === "n") {
      setPosition({ ...position, y: position.y - deltaY });
    }

    if (handle === "ne") {
      setPosition({
        ...position,
        y: position.y - deltaY,
      });
    }

    if (handle === "nw") {
      setPosition({
        x: position.x - deltaX,
        y: position.y - deltaY,
      });
    }

    if (handle === "sw") {
      setPosition({
        ...position,
        x: position.x - deltaX,
      });
    }

    if (handle === "w") {
      setPosition({ ...position, x: position.x - deltaX });
    }

    setSize({
      height,
      width,
    });
  };

  const resizableCursorClass = isMaximized ? "cursor-default hidden" : "";

  return (
    <_ResizableBox
      className={className}
      handle={(handleAxis, ref) => (
        <span
          className={`${handleClasses[handleAxis]} ${resizableCursorClass}`}
          ref={ref}
        />
      )}
      height={size.height}
      minConstraints={minConstraints}
      maxConstraints={maxConstraints}
      onResize={onResizeHandler}
      onResizeStart={onResizeStart}
      resizeHandles={resizeHandles}
      width={size.width}
    >
      {children}
    </_ResizableBox>
  );
};

export { ResizableBox as default };

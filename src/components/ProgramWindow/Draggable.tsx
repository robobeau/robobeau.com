"use client";

import { HANDLE_CLASS } from "@/constants";
import PositionContext from "@/contexts/PositionContext";
import SizeContext from "@/contexts/SizeContext";
import { PropsWithChildren, useContext, useRef } from "react";
import _Draggable, { DraggableEventHandler } from "react-draggable";

interface DraggableProps extends PropsWithChildren {
  className?: string;
}

const Draggable: React.FC<DraggableProps> = (props) => {
  const { className, children } = props;

  const [position, setPosition] = useContext(PositionContext);
  const [size] = useContext(SizeContext);
  const dragHandleRef = useRef(null);

  const onDragHandler: DraggableEventHandler = (event, data) => {
    const { x, y } = data;

    setPosition({ x, y });
  };

  const onStartHandler: DraggableEventHandler = (event) => {
    if (
      !(event.target instanceof HTMLElement) ||
      !event.target.className.includes(HANDLE_CLASS)
    ) {
      return false;
    }
  };

  return (
    <_Draggable
      defaultClassName={className}
      nodeRef={dragHandleRef}
      position={position}
      onDrag={onDragHandler}
      onStart={onStartHandler}
    >
      <div
        ref={dragHandleRef}
        style={{
          height: `${size.height}px`,
          width: `${size.width}px`,
        }}
      >
        {children}
      </div>
    </_Draggable>
  );
};

export { Draggable as default, HANDLE_CLASS };

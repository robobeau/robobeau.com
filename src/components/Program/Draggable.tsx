"use client";

import { HANDLE_CLASS } from "@/constants";
import MaximizedContext from "@/contexts/MaximizedContext";
import PositionContext from "@/contexts/PositionContext";
import { PropsWithChildren, useContext, useRef } from "react";
import _Draggable, { DraggableEventHandler } from "react-draggable";

interface DraggableProps extends PropsWithChildren {
  className?: string;
  onStart?: () => void;
  style?: React.CSSProperties;
}

const Draggable: React.FC<DraggableProps> = (props) => {
  const { className, children, onStart, style } = props;

  const [position, setPosition] = useContext(PositionContext);
  const [isMaximized, setIsMaximized] = useContext(MaximizedContext);
  const dragHandleRef = useRef(null);

  const onDragHandler: DraggableEventHandler = (event, data) => {
    const { x, y } = data;

    setPosition({ x, y });
  };

  const onStartHandler: DraggableEventHandler = (event) => {
    if (
      !(event.target instanceof HTMLElement) ||
      !event.target.closest(`.${HANDLE_CLASS}`)
    ) {
      return false;
    }

    onStart?.();
  };

  return (
    <_Draggable
      bounds="html"
      cancel="a, button"
      defaultClassName={className}
      disabled={isMaximized}
      nodeRef={dragHandleRef}
      onDrag={onDragHandler}
      onStart={onStartHandler}
      position={position}
    >
      <div ref={dragHandleRef} style={style}>
        {children}
      </div>
    </_Draggable>
  );
};

export { Draggable as default, HANDLE_CLASS };

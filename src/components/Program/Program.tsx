"use client";

import { HANDLE_CLASS } from "@/constants";
import { initialIsMaximized as _initialIsMaximized } from "@/contexts/MaximizedContext";
import { initialIsMinimized as _initialIsMinimized } from "@/contexts/MinimizedContext";
import {
  initialPosition as _initialPosition,
  Position,
} from "@/contexts/PositionContext";
import { initialSize as _initialSize } from "@/contexts/SizeContext";
import {
  ProgramWindowProvider,
  ProgramWindowProviderProps,
} from "@/providers/ProgramWindowProvider";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import Window, { WindowProps } from "./Window";

type Origin = "tl" | "t" | "tr" | "l" | "m" | "r" | "bl" | "b" | "br";

interface ProgramProps
  extends PropsWithChildren,
    WindowProps,
    Partial<ProgramWindowProviderProps> {
  offset?: Position;
  origin?: Origin;
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

const Program: FC<ProgramProps> = (props) => {
  const {
    initialIsMaximized = _initialIsMaximized,
    initialIsMinimized = _initialIsMinimized,
    initialSize = _initialSize,
    offset = _initialPosition,
    origin = "tl",
  } = props;
  const [isMounted, setIsMounted] = useState(false);
  const position = getStartingPosition(
    origin,
    getViewport(),
    offset,
    initialSize
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ProgramWindowProvider
      initialIsMaximized={initialIsMaximized}
      initialIsMinimized={initialIsMinimized}
      initialPosition={position}
      initialSize={initialSize}
    >
      <Window {...props} />
    </ProgramWindowProvider>
  );
};

export {
  Program as default,
  HANDLE_CLASS,
  type ProgramProps as ProgramWindowProps,
};

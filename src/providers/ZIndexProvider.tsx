"use client";

import ZIndexContext, { initialZIndex } from "@/contexts/ZIndexContext";
import { FC, PropsWithChildren, useState } from "react";

const ZIndexProvider: FC<PropsWithChildren> = ({ children }) => {
  const [zIndex, setZIndex] = useState(initialZIndex);

  return (
    <ZIndexContext.Provider value={[zIndex, setZIndex]}>
      {children}
    </ZIndexContext.Provider>
  );
};

export { ZIndexProvider as default };
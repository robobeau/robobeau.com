"use client";

import { EffectCallback, RefObject, useEffect } from "react";

const useDoubleClick = (callback: () => void, ref: RefObject<HTMLElement>) => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const desktopEffect: EffectCallback = () => {
    ref.current?.addEventListener("dblclick", callback);

    return () => {
      ref.current?.removeEventListener("dblclick", callback);
    };
  };

  const mobileEffect: EffectCallback = () => {
    let startTime = 0;
    let timesTapped = 0;

    const touchEndEventListener = () => {
      startTime = Date.now();
    };

    const touchStartEventListener = () => {
      timesTapped++

      const stopTime = Date.now();
      const delta = stopTime - startTime;

      if (timesTapped > 1 && delta < 1000) {
        timesTapped = 0

        callback();
      }
    };

    ref.current?.addEventListener("touchend", touchEndEventListener);
    ref.current?.addEventListener("touchstart", touchStartEventListener);

    return () => {
      ref.current?.removeEventListener("touchend", touchEndEventListener);
      ref.current?.removeEventListener("touchstart", touchStartEventListener);
    };
  };

  const effect = isMobile ? mobileEffect : desktopEffect;

  useEffect(effect, [callback, ref]);
};

export { useDoubleClick as default };

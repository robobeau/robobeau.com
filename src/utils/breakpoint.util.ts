import Breakpoint from "@/enums/breakpoint";

const mediaQueries: Record<Breakpoint, string> = {
  [Breakpoint.sm]: `(max-width: ${Breakpoint.sm}px)`,
  [Breakpoint.md]: `(max-width: ${Breakpoint.md}px)`,
  [Breakpoint.lg]: `(max-width: ${Breakpoint.lg}px)`,
  [Breakpoint.xl]: `(max-width: ${Breakpoint.xl}px)`,
  [Breakpoint.xxl]: `(max-width: ${Breakpoint.xxl}px)`,
};

function getCurrentBreakpoint() {
  const mediaQuery = Object.entries(mediaQueries).find(
    ([key, value]) =>
      globalThis.window && globalThis.window.matchMedia(value).matches
  );

  if (mediaQuery) {
    const [breakpoint] = mediaQuery;

    return breakpoint as unknown as Breakpoint;
  }
}

export { getCurrentBreakpoint, mediaQueries };

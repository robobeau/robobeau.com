import Breakpoint from "@/enums/breakpoint";

const mediaQueries: Record<Breakpoint, string> = {
  [Breakpoint.sm]: "(max-width: 600px)",
  [Breakpoint.md]: "(max-width: 900px)",
  [Breakpoint.lg]: "(max-width: 1200px)",
  [Breakpoint.xl]: "(max-width: 1536px)",
  [Breakpoint.xxl]: "(max-width: 9999px)", // For ultrawide sickos
};

function getCurrentBreakpoint() {
  const mediaQuery = Object.entries(mediaQueries).find(
    ([key, value]) =>
      globalThis.window && globalThis.window.matchMedia(value).matches
  );

  if (mediaQuery) {
    const [breakpoint] = mediaQuery;

    return breakpoint as Breakpoint;
  }
}

export { getCurrentBreakpoint, mediaQueries };

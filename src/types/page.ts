import Context from "./context";

interface Page<P = {}> extends Context<P> {
  searchParams: Record<string, string | string[] | undefined>;
}

export { type Page as default };

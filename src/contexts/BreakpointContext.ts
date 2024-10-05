import Breakpoint from "@/enums/breakpoint";
import { createContext } from "react";

const initialBreakpoint = Breakpoint.sm;

const BreakpointContext = createContext<Breakpoint>(initialBreakpoint);

export { BreakpointContext as default, initialBreakpoint };

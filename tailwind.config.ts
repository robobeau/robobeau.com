// import Hourglass from "./src/images/Hourglass.png";
import path from "path";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      cursor: {
        // wait: `url(data:@file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAWCAMAAAAsJOYWAAAACVBMVEUAAAD///////9zeKVjAAAAA3RSTlP//wDXyg1BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTE1VDEzOjEwOjE0LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0xNVQxMzoyMzo1MC0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0xNVQxMzoyMzo1MC0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjIiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZTY4ZTc2MC1iYTAxLWFiNGItOWY5OC1kYjEzZTZkM2Y1MTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZGU2OGU3NjAtYmEwMS1hYjRiLTlmOTgtZGIxM2U2ZDNmNTE0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZGU2OGU3NjAtYmEwMS1hYjRiLTlmOTgtZGIxM2U2ZDNmNTE0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZTY4ZTc2MC1iYTAxLWFiNGItOWY5OC1kYjEzZTZkM2Y1MTQiIHN0RXZ0OndoZW49IjIwMjQtMDktMTVUMTM6MTA6MTQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7b05l8AAAAXElEQVQYlX2QOxLAUAgCF+5/ZkmBb/IpYuWOg4LwLIFOH94lzz2zXzNXkIoMoChaCiiCgDEBQTAGr87VmSjbfS8MQkxpECmaWedicDOkcbolysOnFn1A36z/n7gAj7ckIO2X2PEAAAAASUVORK5CYII=), wait`,
        wait: "url('~/src/images/Hourglass.png'), wait",
        // wait: `url(${path.resolve(__dirname, 'src/images/Hourglass.png')}), wait`,
      },
    },
  },
  plugins: [],
};
export default config;

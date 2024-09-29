import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasTextOutline?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className, hasTextOutline = true, ...rest } = props;

  const textOutlineClasses = hasTextOutline
    ? `
      rounded-sm
      group-active/button:outline group-active/button:outline-1 group-active/button:outline-dotted group-active/button:outline-slate-400
      group-focus-within/button:outline group-focus-within/button:outline-1 group-focus-within/button:outline-dotted group-focus-within/button:outline-slate-400
    `
    : "";

  return (
    <button
      className={`
        group/button
        bg-slate-200 border border-black leading-4 rounded-sm
        focus-within:outline focus-within:outline-1 focus-within:outline-black
        ${className}
      `}
      {...rest}
    >
      <span
        className={`
          border-2 border-b-slate-400 border-l-white border-r-slate-400 border-t-white flex grow h-full items-center justify-center w-full
          group-active/button:border-b-slate-200 group-active/button:border-l-slate-400 group-active/button:border-r-slate-200 group-active/button:border-t-slate-400
        `}
      >
        <span
          className={`
            px-1 relative
            group-active/button:left-0.5 group-active/button:top-0.5
            ${textOutlineClasses}
          `}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export { Button as default };

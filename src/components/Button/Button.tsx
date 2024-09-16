import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, ...rest } = props;

  return (
    <button
      className={`
        group/button
        bg-slate-200 border border-black flex leading-4 min-w-20 rounded-sm
        focus-within:outline focus-within:outline-1 focus-within:outline-black
      `}
      {...rest}
    >
      <span
        className={`
          border-4 border-b-slate-400 border-l-white border-r-slate-400 border-t-white grow p-1
          group-active/button:border-b-slate-200 group-active/button:border-l-slate-400 group-active/button:border-r-slate-200 group-active/button:border-t-slate-400
        `}
      >
        <span
          className={`
            px-1 relative rounded-sm
            group-active/button:left-0.5 group-active/button:outline group-active/button:outline-1 group-active/button:outline-dotted group-active/button:outline-slate-400 group-active/button:top-0.5
            group-focus-within/button:outline group-focus-within/button:outline-1 group-focus-within/button:outline-dotted group-focus-within/button:outline-slate-400
          `}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export { Button as default };

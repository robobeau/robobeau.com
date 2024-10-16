import { ButtonHTMLAttributes, FC } from "react";

import classNames from "@/utils/classNames.util";

import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasOutline?: boolean;
  hasRoundedCorners?: boolean;
  hasTextOutline?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    hasOutline = true,
    hasRoundedCorners = true,
    hasTextOutline = true,
    ...rest
  } = props;

  // #region Classes
  const buttonClassNames = classNames(
    "button",
    hasOutline && "button--with-outline",
    hasRoundedCorners && "button--with-rounded-corners"
  );
  const textClassNames = classNames(
    "button--text",
    hasTextOutline && "button--text-with-outline"
  );
  // #endregion

  return (
    <button className={`${buttonClassNames} ${className}`} {...rest}>
      <span className="button--text-wrapper">
        <span className={textClassNames}>{children}</span>
      </span>
    </button>
  );
};

export { Button as default };

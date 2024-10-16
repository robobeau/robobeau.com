import { ButtonHTMLAttributes, FC } from "react";

import "@/components/Button/button.css";

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
  const buttonClasses = `
    button
    ${hasOutline ? "button--with-outline" : ""}
    ${hasRoundedCorners ? "button--with-rounded-corners" : ""}
  `.trim();
  const textClasses = `
    button--text
    ${hasTextOutline ? "button--text-with-outline" : ""}
  `.trim();
  // #endregion

  return (
    <button className={`${buttonClasses} ${className}`} {...rest}>
      <span className="button--text-wrapper">
        <span className={textClasses}>{children}</span>
      </span>
    </button>
  );
};

export { Button as default };

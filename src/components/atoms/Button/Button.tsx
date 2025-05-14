import React, { FC, ReactNode } from "react";
// import * as React, { FC } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  leftIcon?: ReactNode;
  handleClick: () => void;
  children: string;
  variant?: string;
}

export const Button: FC<ButtonProps> = ({
  leftIcon,
  handleClick,
  children,
  variant = "Primary",
}) => {
  return (
    <button className={`${styles["button" + variant]}`} onClick={handleClick}>
      {leftIcon}
      {children}
    </button>
  );
};

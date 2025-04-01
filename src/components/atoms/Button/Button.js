import React from "react";

import styles from "./Button.module.css";

export const Button = ({
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

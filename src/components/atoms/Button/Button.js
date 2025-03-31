import React from "react";

import styles from "./Button.module.css";

export const Button = ({ leftIcon, handleClick, children }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {leftIcon}
      {children}
    </button>
  );
};

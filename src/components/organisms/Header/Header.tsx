import React from "react";
import { useNavigate } from "react-router";

import styles from "./Header.module.css";

import logo from "../../../assets/images/logo.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <img
        src={logo}
        className={styles.logo}
        alt="logo"
        height={51}
        width={200}
        style={{
          overflow: "hidden",
          objectFit: "cover",
          height: "51px",
          margin: "0 auto",
        }}
        onClick={() => navigate("/")}
      />
    </header>
  );
};

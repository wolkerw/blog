import React from "react";
import { useNavigate } from "react-router-dom";

import { SearchBar } from "../../molecules/SearchBar";

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
        heigth={24}
        width={204}
        onClick={() => navigate("/")}
      />
      <SearchBar />
    </header>
  );
};

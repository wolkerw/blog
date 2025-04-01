import React, { useState, useContext, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { FilterContext } from "../../../contexts/filterContext/filterContext";

import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const { searchText, setSearchText, loadHomePosts } =
    useContext(FilterContext);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [inputOpened, setInputOpened] = useState(false);

  const handleClickSearchButton = () => {
    if (inputOpened) {
      navigate("/");
      loadHomePosts();
    } else {
      searchInputRef?.current?.focus();
    }
    setInputOpened(!inputOpened);
  };

  return (
    <div className={styles.searchBarButton}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={searchInputRef}
        style={inputOpened ? { width: "calc(100vw - 62px)" } : { width: "0" }}
      />
      <button onClick={() => handleClickSearchButton()}>
        <IoMdSearch />
      </button>
    </div>
  );
};

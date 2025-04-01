import React, { useState, useContext } from "react";
import { IoMdSearch } from "react-icons/io";

import { FilterContext } from "../../../contexts/filterContext/filterContext";

import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const { searchText, setSearchText, loadHomePosts } =
    useContext(FilterContext);
  const [inputOpened, setInputOpened] = useState(false);

  const handleClickSearchButton = () => {
    if (inputOpened) {
      loadHomePosts();
    }
    setInputOpened(!inputOpened);
  };

  return (
    <div className={styles.searchBarButton}>
      {inputOpened && (
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      )}
      <button onClick={() => handleClickSearchButton()}>
        <IoMdSearch />
      </button>
    </div>
  );
};

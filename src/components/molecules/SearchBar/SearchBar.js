import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [inputOpened, setInputOpened] = useState(false);
  const [searchText, setSearchText] = useState();

  const handleClickSearchButton = () => {
    if (inputOpened) {
      // TODO colocar searchText no contextapi e quando tiver valor, fazer a busca da página inicial considerando o texto
      console.log("searchText", searchText);
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

import { createContext, useState } from "react";

import { postsService } from "../../services/Posts";

const FilterContext = createContext({
  searchText: "",
  setSearchText: () => "",
  loadHomePosts: async () => {},
  posts: [],
});

const FilterProvider = ({ children }) => {
  const [searchText, setSearchText] = useState();
  const [posts, setPosts] = useState();
  const { getAll } = postsService;

  const filterPosts = (posts) => {
    const filteredPosts = posts.filter((post) => {
      console.log("post", post);
      if (
        !searchText ||
        post?.title?.toLowerCase()?.includes(searchText.toLowerCase()) ||
        post?.content?.toLowerCase()?.includes(searchText.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    return filteredPosts;
  };

  const loadHomePosts = async () => {
    setPosts([]);
    getAll()
      .then((posts) => {
        const filteredPosts = filterPosts(posts);
        setPosts(filteredPosts);
      })
      .catch((e) => console.log("errors", e));
  };

  return (
    <FilterContext.Provider
      value={{
        searchText,
        setSearchText,
        loadHomePosts,
        posts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };

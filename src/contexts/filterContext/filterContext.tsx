import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { postsService } from "../../services/Posts";
import { IPost } from "../../interfaces/Post";

interface IFilterContext {
  searchText?: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  loadHomePosts: () => void;
  posts: IPost[];
}

const FilterContext = createContext<IFilterContext | undefined>({
  searchText: "",
  setSearchText: () => "",
  loadHomePosts: async () => {},
  posts: [],
});

interface IFilterProvider {
  children: ReactNode;
}

const FilterProvider: FC<IFilterProvider> = ({ children }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const { getAll } = postsService;

  const filterPosts = (posts: IPost[]) => {
    const filteredPosts = posts.filter((post) => {
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

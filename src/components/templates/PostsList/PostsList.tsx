import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { PostCard } from "../../organisms/PostCard";
import { FilterContext } from "../../../contexts/filterContext/filterContext";
import { IPost } from "../../../interfaces/Post";

import styles from "./PostsList.module.css";

export const PostsList = () => {
  const navigate = useNavigate();
  const filterContext = useContext(FilterContext);

  useEffect(() => {
    filterContext?.loadHomePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.postsList}>
      {!filterContext?.posts?.length && (
        <h3 className={styles.noResultText}>No results found.</h3>
      )}

      {filterContext?.posts?.map((post: IPost) => (
        <div onClick={() => navigate(`/post/${post.id}`)}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

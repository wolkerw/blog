import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { PostCard } from "../../organisms/PostCard";
import { FilterContext } from "../../../contexts/filterContext/filterContext";

import styles from "./PostsList.module.css";

export const PostsList = () => {
  const navigate = useNavigate();
  const { loadHomePosts, posts } = useContext(FilterContext);

  useEffect(() => {
    loadHomePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.postsList}>
      {!posts?.length && (
        <h3 className={styles.noResultText}>No results found.</h3>
      )}

      {posts?.map((post) => (
        <div onClick={() => navigate(`/post/${post.id}`)}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

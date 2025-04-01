import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PostCard } from "../../organisms/PostCard";

import { FilterContext } from "../../../contexts/filterContext/filterContext";

export const PostsList = () => {
  const navigate = useNavigate();
  const { loadHomePosts, posts } = useContext(FilterContext);

  useEffect(() => {
    loadHomePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {posts?.map((post) => (
        <div onClick={() => navigate(`/post/${post.id}`)}>
          <PostCard post={post} />
        </div>
      ))}
    </>
  );
};

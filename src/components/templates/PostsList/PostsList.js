import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PostCard } from "../../organisms/PostCard";
import { postsService } from "../../../services/Posts";

export const PostsList = () => {
  const navigate = useNavigate();
  const { getAll } = postsService;
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    getAll()
      .then((posts) => {
        console.log("posts", posts);
        setPosts(posts);
      })
      .catch((e) => console.log("errors", e));
  };

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div onClick={() => navigate(`/post/${post.id}`)}>
          <PostCard post={post} />
        </div>
      ))}
    </>
  );
};

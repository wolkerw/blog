import React, { useEffect, useState, FC } from "react";
import { useParams, useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

import { postsService } from "../../services/Posts";
import { Button } from "../../components/atoms/Button";

import { IPost } from "../../interfaces/Post";

import styles from "./PostDetails.module.css";

export const PostDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { getPost } = postsService;
  const [post, setPost] = useState<IPost>();
  const ArrowIcon = IoMdArrowBack as FC;

  const loadPost = async () => {
    try {
      if (!id) return;

      const post = await getPost(id);
      post && setPost(post);
    } catch (e: unknown) {
      console.error("Error fetching post:", e);
    }
  };

  useEffect(() => {
    loadPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.alignPostDetailsContent}>
      <div className={styles.backButton}>
        <Button leftIcon={<ArrowIcon />} handleClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      {post && (
        <div className={styles.postContent}>
          <h2>{post?.title}</h2>

          <div className={styles.postInfo}>
            <img
              src={post?.author?.profilePicture}
              width={40}
              alt="profilePicture"
            />
            <small>
              Written by: <b>{post?.author?.name}</b>
              <br />
              <span>
                {new Date(post?.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </small>
          </div>

          <img
            className={styles.thumbnailImage}
            src={post.thumbnail_url}
            width="100%"
            alt="post-thumb"
          />
          <p>{post?.content}</p>
          <hr />
        </div>
      )}
      {/* TODO last articles */}
    </div>
  );
};

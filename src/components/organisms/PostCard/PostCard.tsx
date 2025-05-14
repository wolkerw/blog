import "@testing-library/jest-dom";
import React, { FC } from "react";

import { Button } from "../../atoms/Button/Button";
import { IPost } from "../../../interfaces/Post";

import styles from "./PostCard.module.css";

interface PostCardProps {
  post: IPost;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <img src={post.thumbnail_url} height={196} alt="post-thumb" />
      <small>
        {new Date(post?.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}{" "}
        <span className={styles.redDot}></span> {post.author.name}
      </small>
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {post.categories && post.categories?.length > 0 && (
        <div className={styles.categoryButtons}>
          {post.categories?.map((category) => {
            return (
              <Button
                handleClick={() => alert("To be developed...")}
                key={category?.id}
                variant="Secondary"
              >
                {category?.name}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

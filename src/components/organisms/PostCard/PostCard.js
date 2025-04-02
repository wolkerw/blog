import React from "react";

import { Button } from "../../atoms/Button/Button";

import styles from "./PostCard.module.css";

export const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <img src={post.thumbnail_url} heigth={196} alt="post-thumb" />
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

      {post.categories?.length > 0 && (
        <div className={styles.categoryButtons}>
          {post.categories.map((category) => {
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

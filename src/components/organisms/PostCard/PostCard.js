import React from "react";

import styles from "./PostCard.module.css";

export const PostCard = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <img src={post.thumbnail_url} heigth={196} alt="post-thumb" />
      <small>
        {post.createdAt} <span className={styles.redDot}></span>{" "}
        {post.author.name.split(" ")?.[1]}
      </small>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {/* TODO botões de categoria */}
    </div>
  );
};

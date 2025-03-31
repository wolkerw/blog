import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

import { postsService } from "../../services/Posts";
import { Button } from "../../components/atoms/Button";

import styles from "./PostDetails.module.css";
import theme from "../../Theme.module.css";

export const PostDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { getPost } = postsService;
  const [post, setPost] = useState([]);

  const loadPost = async () => {
    getPost(id)
      .then((post) => {
        console.log("post", post);
        setPost(post);
      })
      .catch((e) => console.log("errors", e));
  };

  useEffect(() => {
    loadPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={theme.alignContent}>
      <Button leftIcon={<IoMdArrowBack />} handleClick={() => navigate("/")}>
        Back
      </Button>
      {post && (
        <>
          <h2>{post?.title}</h2>

          <div className={styles.postInfo}>
            <img
              src={post?.author?.profilePicture}
              width={40}
              alt="profilePicture"
            />
            <small>
              Written by: <b>Dentusu</b>
              <br />
              <span>Jan 20, 2024</span>
            </small>
          </div>

          <img
            className={styles.thumbnailImage}
            src={post.thumbnail_url}
            width={343}
            alt="post-thumb"
          />
          <p>{post?.content}</p>
          <hr />
        </>
      )}
      {/* TODO last articles */}
    </div>
  );
};

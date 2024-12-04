import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return <h2>Blog Post ID: {postId}</h2>;
};

export default Post;

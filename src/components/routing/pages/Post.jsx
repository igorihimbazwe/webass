import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

const Post = () => {
  const { postId } = useParams();
  return(
     <>
     <Navbar/>
  <h2>Blog Post ID: {postId}
    </h2>
    </>)
};

export default Post;

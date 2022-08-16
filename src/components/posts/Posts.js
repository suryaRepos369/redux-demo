import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from "../Redux/postSlice/posts";
const Posts = () => {
  const dispatch = useDispatch();
  const postdata = useSelector((state) => state.posts);

  return (
    <div>
      <h1>Post File </h1>
      {postdata.postsArr ? (
        postdata.postsArr.map((data) => <h3>{data}</h3>)
      ) : (
        <h2>data not found</h2>
      )}

      {postdata.loading ? (
        <h1 style={{ padding: "60px", backgroundColor: "grey" }}>
          Loading the page Please wait...
        </h1>
      ) : null}
      <button
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        Click to fetch posts
      </button>
    </div>
  );
};

export default Posts;

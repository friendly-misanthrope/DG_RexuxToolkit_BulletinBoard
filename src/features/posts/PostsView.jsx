import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import PostsExcerptView from "./PostsExcerptView";
import { isFulfilled } from "@reduxjs/toolkit";

const PostsView = () => {
  
  const dispatch = useDispatch();
  const allPosts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  },[postsStatus, dispatch])
  
  const orderedPosts = allPosts.slice().sort((a, b) => 
    b.createdAt.localeCompare(a.createdAt)
  );

  let content;

  if (postsStatus === "pending") {
    content = <p>Loading...</p>
  } else if (postsStatus = "fulfilled") {
    const orderedPosts = allPosts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    content = orderedPosts.map((post) => {
      <PostsExcerptView key={post.id} post={post} />
    });
  } else if (postsStatus === 'rejected') {
    content = <p>{postsError}</p>
  }
  
  return ({ content });
}

export default PostsView;
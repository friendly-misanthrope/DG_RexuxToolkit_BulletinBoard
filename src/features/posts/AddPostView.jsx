import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostView = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  const dispatch = useDispatch();

  const { title, content } = post;

  const changeHandler = (e) => {
    setPost(prevState => {return { ...prevState, [e.target.name]: e.target.value }});
  }

  const addPost = (e) => {
    e.preventDefault();
    dispatch(postAdded(post));
    setPost({
      title: '',
      content: ''
    });
  }

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="title">Post Title: </label>
        <input type="text" name="title" value={title} onChange={changeHandler} />
        
        <label htmlFor="content">Content: </label>
        <input type="text" name='content' value={content} onChange={changeHandler} />
        <button onClick={}></button>
      </form>
    </section>
  );
}

export default AddPostView;
import { useState } from "react";

const AddPostView = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  const { title, content } = post;

  const changeHandler = (e) => {
    setPost(prevState => {return { ...prevState, [e.target.name]: e.target.value }});
  }

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="title">Post Title: </label>
        <input type="text" name="title" value={title} onChange={changeHandler} />
        
        <label htmlFor="content">Content: </label>
        <input type="text" name='content' value={content} onChange={changeHandler} />
      </form>
    </section>
  );
}

export default AddPostView;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostView = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    userId: ''
  });

  const dispatch = useDispatch();

  const { title, content, userId } = post;

  const users = useSelector(selectAllUsers);

  const changeHandler = (e) => {
    setPost(prevState => {return { ...prevState, [e.target.name]: e.target.value }});
  }

  const addPost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setPost({
        title: '',
        content: ''
      });
    }
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="title">Post Title: </label>
        <input type="text" name="title" value={title} onChange={changeHandler} />
        
        <label htmlFor="userId">Select Author</label>
        <select name="userId" id="userId">
          <option value=""></option>
          { usersOptions }
        </select>

        <label htmlFor="content">Content: </label>
        <input type="text" name='content' value={content} onChange={changeHandler} />

        <button onClick={addPost}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPostView;
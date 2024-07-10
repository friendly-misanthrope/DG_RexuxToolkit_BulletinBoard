import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostView = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
    userId: ''
  });

  const { title, body, userId } = post;
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const changeHandler = (e) => {
    setPost(prevState => {return { ...prevState, [e.target.name]: e.target.value }});
  }

  const addPost = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(postAdded(title, body, userId));
      setPost({
        title: '',
        body: '',
        userId: ''
      });
    }
  }

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const isValidPost = Boolean(title) && Boolean(body) && Boolean(userId);

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="title">Post Title: </label>
        <input type="text" name="title" value={title} onChange={changeHandler} />
        
        <label htmlFor="userId">Select Author</label>
        <select name="userId" id="userId" onChange={changeHandler}>
          <option value=""></option>
          { usersOptions }
        </select>

        <label htmlFor="body">Post Content: </label>
        <input type="text" name='body' value={body} onChange={changeHandler} />

        <button type="button" onClick={addPost} disabled={!isValidPost}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPostView;
import { useState } from "react";

const AddPostView = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  const changeHandler = (e) => {
    setPost(prevState => {return { ...prevState, [e.target.name]: e.target.value }});
  }

  return (
    <div>AddPostView</div>
  );
}

export default AddPostView;
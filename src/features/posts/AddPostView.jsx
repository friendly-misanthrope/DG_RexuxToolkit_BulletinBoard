import { useState } from "react";

const AddPostView = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  

  return (
    <div>AddPostView</div>
  );
}

export default AddPostView;
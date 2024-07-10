import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButtonsView = ({ post }) => {
  const reactionEmojis = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
  }

  const emojiClickHandler = (e) => {
    e.preventDefault();
    dispatch(reactionAdded({ postId: post.id, reaction: name }))
  }

  return (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={emojiClickHandler}
    >

    </button>
  );
}

export default ReactionButtonsView;
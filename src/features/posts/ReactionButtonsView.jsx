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

  const dispatch = useDispatch();

  const emojiClickHandler = (e) => {
    e.preventDefault();
    dispatch(reactionAdded({ postId: post.id, reaction: name }));
  }

  const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={emojiClickHandler}
      >
      {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>
}

export default ReactionButtonsView;
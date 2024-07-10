import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButtonsView = () => {
  const reactionEmojis = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
  }
  return (
    <div>ReactionButtonsView</div>
  )
}

export default ReactionButtonsView
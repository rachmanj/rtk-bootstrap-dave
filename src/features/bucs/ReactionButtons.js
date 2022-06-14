import { useDispatch } from "react-redux";
import { reactionAdded } from "./bucsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️",
};

const ReactionButtons = ({ buc }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="btn btn-sm btn-outline-secondary"
        onClick={() =>
          dispatch(reactionAdded({ bucId: buc.id, reaction: name }))
        }
      >
        {emoji} {buc.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;

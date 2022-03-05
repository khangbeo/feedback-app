import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
  const { rating, text, id } = item;
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

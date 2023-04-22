import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "../Resuable-Component/Card";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const iconStyle = {
    color: "#d0e1f9",
  };

  const handleHover = (e) => {
    e.target.style.color = "#ff3377";
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = "#d0e1f9";
  };
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes
          style={iconStyle}
          onPointerEnter={handleHover}
          onPointerLeave={handleMouseLeave}
        />
      </button>

      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit
          style={iconStyle}
          onPointerEnter={handleHover}
          onPointerLeave={handleMouseLeave}
        />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

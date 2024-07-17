import React from "react";
interface detailsProps {
  content: string;
  color: string;
  icon: string;
}
const Details: React.FC<detailsProps> = ({ content, color, icon }) => {
  return (
    <div className="details">
      <div className="details__background">
        <div className={`details__icon details__icon--${color}`}>
          <img src={icon} alt="" />
        </div>
        <p className="details__content">{content}</p>
      </div>
    </div>
  );
};

export default Details;

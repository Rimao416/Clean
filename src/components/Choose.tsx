import React from "react";
import { ChooseDataProps } from "../constants/ChooseData";

const ChooseCard: React.FC<ChooseDataProps> = ({ icon, title, description }) => {
  return (
    <div className="choosen__body--card">
      <img src={icon} alt={icon} />
      <h4 className="choosen__body--title">{title}</h4>
      <p className="choosen__body--description">{description}</p>
    </div>
  );
};

export default ChooseCard;

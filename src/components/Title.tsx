import React from "react";

interface TitleProps {
  title: string;
  color: string;
  traitColor: string;
}
const Title: React.FC<TitleProps> = ({ title, color, traitColor }) => {
  return (
    <div className={`title`}>
      <span className={`title--trait title--trait--${traitColor}`}></span>
      <h4 className={`title--text title--text--${color}`}>{title}</h4>
    </div>
  );
};

export default Title;

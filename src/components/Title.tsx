import React from "react";

interface TitleProps {
  title: string;
  color: string;
}
const Title: React.FC<TitleProps> = ({ title, color }) => {
  return (
    <div className={`title title--${color}`}>
      <h4>{title}</h4>
    </div>
  );
};

export default Title;

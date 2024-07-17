import React from "react";
interface buttonProps {
  content: string;
}
const Button: React.FC<buttonProps> = ({ content }) => {
  return <button className="button">{content}</button>;
};

export default Button;

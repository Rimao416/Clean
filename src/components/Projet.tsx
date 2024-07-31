import React from "react";
import { ProductsProps } from "../constants/ProductsData";
import Title from "./Title";

const Projet: React.FC<ProductsProps> = ({ title, description, image }) => {
  return (
    <div className="projets__body--container">
      <img src={image} alt={image} className="projets__body--image" />
      <div className="projets__body--text">
       <Title title={title} color="black" traitColor="black"/>
        <p className="projets__body--description">{description}</p>
      </div>
    </div>
  );
};

export default Projet;

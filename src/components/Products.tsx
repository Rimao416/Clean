import React from "react";
import { ProductsProps } from "../constants/ProductsData";
import { GoArrowUpRight } from "react-icons/go";
const truncateTitle = (text: string, maxLength: number = 15): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}
const Products: React.FC<ProductsProps> = ({ title, description, image }) => {
  return (
    <div className="products">
      <h4>{title}</h4>
      <p>{truncateTitle(description,120)}</p>
      <div className="products__image">
        <img src={image} alt={image} />
        <span className="products__logo">
<GoArrowUpRight />
        </span>
      </div>
    </div>
  );
};

export default Products;

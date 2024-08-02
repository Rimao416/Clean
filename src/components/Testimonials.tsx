import React from "react";
import { TestimonialsProps } from "../constants/Testimonials";

import { ImQuotesLeft } from "react-icons/im";

const Testimonials: React.FC<TestimonialsProps> = ({
  fullName,
  description,
  image,
  role,
}) => {
  return (
    <div className="testimonials__wrapper">
      <div className="testimonials__wrapper--header">
        <img src={image} alt={image} />
        <div className="testimonials__wrapper--text">
          <h5>{fullName}</h5>
          <p className="testimonials__wrapper--role">{role}</p>
        </div>
        <span className="testimonials__wrapper--quote"><ImQuotesLeft/></span>
      </div>
      <p className="testimonials__wrapper--description">{description}</p>
    </div>
  );
};

export default Testimonials;

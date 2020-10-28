import React from "react";

const Testimonial = ({ testimonial }) => {
  const { quote, name, from, img } = testimonial;
  return (
    <div className="card shadow-sm shadow-sm">
      <div className="card-body">
        <p className="card-text text-center text-secondary">{quote}</p>
      </div>
      <div className="card-footer d-flex align-items-center">
        <img src={img} alt="" width="60" />
        <div className="p-3">
          <h6 className="color-group">{name}</h6>
          <p className="m-0 text-secondary">{from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

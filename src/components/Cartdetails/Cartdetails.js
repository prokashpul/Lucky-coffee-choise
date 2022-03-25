import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cartdetails.css";
const Cartdetails = ({ coffee }) => {
  const { name, image } = coffee;
  return (
    <div className="cart">
      <div className="cart-item">
        <img src={image} alt="no" />
        <h5>{name}</h5>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <div className="btn">Choose 1 for me</div>
      <di className="btn">Choose Again</di>
    </div>
  );
};

export default Cartdetails;

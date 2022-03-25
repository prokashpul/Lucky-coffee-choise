import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cartdetails.css";
const Cartdetails = ({ coffee, deleteItem }) => {
  const { name, image, id } = coffee;
  return (
    <div className="cart">
      <div className="cart-item">
        <img src={image} alt="no" />
        <h5>{name}</h5>
        <FontAwesomeIcon
          className="delete"
          icon={faTrash}
          onClick={() => deleteItem(id)}
        />
      </div>
    </div>
  );
};

export default Cartdetails;

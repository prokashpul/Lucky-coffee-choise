import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Coffeeitems.css";
const Coffeeitems = ({ coffee, addCart }) => {
  const { name, image, price, description } = coffee;
  return (
    <div className="coffee-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <p>{description?.slice(0, 50) + " ..."}</p>
        <strong>${price}</strong>
      </div>
      <button className="btn" onClick={() => addCart(coffee)}>
        Add To cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Coffeeitems;

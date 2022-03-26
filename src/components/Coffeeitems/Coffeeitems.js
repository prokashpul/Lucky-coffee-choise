import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Coffeeitems.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Coffeeitems = ({ coffee, addCart }) => {
  AOS.init();
  const { name, image, price, description } = coffee;
  return (
    <div className="coffee-card" data-aos="fade-up">
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

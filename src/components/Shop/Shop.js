import React, { useEffect, useState } from "react";
import Coffeeitems from "../Coffeeitems/Coffeeitems";
import "./Shop.css";
const Shop = () => {
  // useState and useEffect use and data load
  const [coffeeItems, setCoffeItems] = useState([]);
  useEffect(() => {
    fetch("coffeedata.json")
      .then((res) => res.json())
      .then((data) => setCoffeItems(data));
  }, []);
  return (
    <section className="shop">
      <div className="coffee-items">
        {coffeeItems?.map((coffee) => (
          <Coffeeitems></Coffeeitems>
        ))}
      </div>
      <div className="cart-details">Selected Coffees</div>
    </section>
  );
};

export default Shop;

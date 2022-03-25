import React, { useEffect, useState } from "react";
import Cartdetails from "../Cartdetails/Cartdetails";
import Coffeeitems from "../Coffeeitems/Coffeeitems";
import "./Shop.css";
const Shop = () => {
  // useState and useEffect use and data load
  const [coffeeItems, setCoffeItems] = useState([]);
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    fetch("coffeedata.json")
      .then((res) => res.json())
      .then((data) => setCoffeItems(data));
  }, []);
  //   addcart button click handel add
  const addCart = (coffee) => {
    setCoffee(coffee);
  };
  return (
    <section className="shop">
      <div className="coffee-items">
        {coffeeItems?.map((coffee) => (
          <Coffeeitems
            coffee={coffee}
            key={coffee.id}
            addCart={addCart}
          ></Coffeeitems>
        ))}
      </div>
      <div className="cart-details">
        <h4>Selected Coffees :</h4>
        <Cartdetails coffee={coffee}></Cartdetails>
      </div>
    </section>
  );
};

export default Shop;

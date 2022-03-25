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
  const addCart = (getCoffee) => {
    let coffeeCart = [];
    const exists = coffee.find((c) => c.id === getCoffee.id);
    if (!exists) {
      coffee.quantity = 1;
      coffeeCart = [...coffee, getCoffee];
    } else {
      const rest = coffee.filter((c) => c.id !== getCoffee.id);
      coffee.quantity = coffee.quantity + 1;
      coffeeCart = [...rest, exists];
    }
    if (coffee.length === 4) {
      alert("can't add more item");
    }

    setCoffee(coffeeCart.slice(0, 4));
  };
  const deleteItem = (id) => {
    const deleteItem = coffee.filter((c) => c.id !== id);
    setCoffee(deleteItem);
  };
  //   random item show
  const oneItem = () => {
    const randomCoffee = coffee[Math.floor(Math.random() * coffee.length)];
    if (coffee.length > 0) {
      setCoffee([randomCoffee]);
    } else {
      alert("Pleas cart 1 to 4 item");
    }
  };

  //   clear all cart item
  const clearAll = () => {
    setCoffee([]);
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
        {coffee.map((coffee) => (
          <Cartdetails
            coffee={coffee}
            deleteItem={deleteItem}
            key={coffee.id}
          ></Cartdetails>
        ))}
        <div className="cart-btns">
          <div className="btn" onClick={oneItem}>
            Choose 1 for me
          </div>
          <div className="btn" onClick={clearAll}>
            Choose Again
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

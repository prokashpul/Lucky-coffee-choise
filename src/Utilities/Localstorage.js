const addToCartLocalStore = (id) => {
  console.log(id);
  let saveDataLocalstore = {};

  const getDataLocalStore = localStorage.getItem("coffee-id");
  if (getDataLocalStore) {
    saveDataLocalstore = JSON.parse(localStorage.getItem("coffee-id"));
  }
  //   duplicate item check
  const numberOfCoffee = saveDataLocalstore[id];
  if (!numberOfCoffee) {
    saveDataLocalstore[id] = 1;
  } else {
    saveDataLocalstore[id] = numberOfCoffee + 1;
  }
  localStorage.setItem("coffee-id", JSON.stringify(saveDataLocalstore));
};

export { addToCartLocalStore };

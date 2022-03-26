const addToCartLocalStore = (id) => {
  console.log(id);
  let saveDataLocalstore = getLocalStorageData();

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

// get data
const getLocalStorageData = () => {
  let saveDataLocalstore = {};

  const getDataLocalStore = localStorage.getItem("coffee-id");
  if (getDataLocalStore) {
    saveDataLocalstore = JSON.parse(localStorage.getItem("coffee-id"));
  }
  return saveDataLocalstore;
};

export { addToCartLocalStore, getLocalStorageData };

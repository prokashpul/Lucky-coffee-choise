const addToCartLocalStore = (id) => {
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
// delete items localstore
const removeItemLocalStore = (id) => {
  const removeData = getLocalStorageData();
  if (id in removeData) {
    delete removeData[id];
    localStorage.setItem("coffee-id", JSON.stringify(removeData));
  }
};
// delete all items
const deleteItems = () => {
  localStorage.removeItem("coffee-id");
};
export {
  addToCartLocalStore,
  getLocalStorageData,
  deleteItems,
  removeItemLocalStore as removeItem,
};

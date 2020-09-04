import React, { createContext, useState } from 'react';

const shoeList = []
export const ShoeContext = createContext(shoeList);

const ShoeContextProvider = ({ children }) => {
  const [shoeList, setShoeList] = useState([]);
  let [count, setCount] = useState(0);

  const addShoe = (shoeObj) => {

    let found = 0;
    for (var i = 0; i < shoeList.length; i++) {
      if ((shoeList[i].id === shoeObj.id) && (shoeList[i].inCart === true)) {
        shoeList[i].quantity += 1;
        setShoeList(shoeList);
        setCount(count + 1);
        found = 1;
      }
    }
    if (found === 0) {
      shoeObj["quantity"] = 1;
      setShoeList([...shoeList, { url: shoeObj.url, name: shoeObj.name, id: shoeObj.id, price: shoeObj.price, quantity: shoeObj.quantity, inCart: true }]);
      setCount(count + 1);
    }

  };

  const removeShoe = (id, qty) => {

    setShoeList(shoeList.filter(shoe=>shoe.id !==id));
    setCount(count - qty);
  };

  const lessOneShoe = (id) => {

    for (var jj = 0; jj < shoeList.length; jj++) {
      if (shoeList[jj].id === id) {
        var qty = shoeList[jj].quantity;
        if (qty) {
        shoeList[jj].quantity -= 1
        setShoeList(shoeList);
        setCount(count - 1);
        }
      }
    }
  };


  function shoesCount() {
    let counter = 0;
    for (var i = 0; i < shoeList.length; i++) {
      counter = counter + shoeList[i].quantity;
    }
    setCount(counter);
    return count;
  }

  function timedMsg() {
    var x = document.getElementById("msgContainer");
    var y = document.getElementById("line");
    x.style.display = 'block';
    y.style.display = 'block';
    y.style.width = '240px';
    setTimeout(function () { x.style.display = 'none' }, 2000);
    setTimeout(function () { y.style.width = '0px' }, 1000);
  }

  return (
    <ShoeContext.Provider value={{
      shoeList: shoeList,
      addShoe: addShoe,
      removeShoe: removeShoe,
      lessOneShoe: lessOneShoe,
      shoesCount: shoesCount,
      count: count,
      setCount,
      timedMsg
    }}>
      {children}
    </ShoeContext.Provider>
  )
}


export default ShoeContextProvider;
import React, { useContext } from 'react';
import { ShoeContext } from '../Context/shoesContext';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';


const Cart = () => {
  const { shoeList, addShoe, removeShoe, shoesCount, lessOneShoe } = useContext(ShoeContext);


  function totalPriceCal() {
    let total = 0;
    for (var i = 0; i < shoeList.length; i++) {
      total = total + shoeList[i].price * shoeList[i].quantity;
    }
    return total;
  }

  return shoeList.length ? (
    <div>
      <h3>Shopping List</h3>
      <hr />

      {shoeList.map((shoeObj, ind) => {
        return (
          <div className="shoppingList">

            <DeleteIcon className="del" onClick={() => removeShoe(shoeObj.id, shoeObj.quantity)} />
            <div style={{ width: 170, height: 125 }}>
              <span>{shoeObj.name}</span>
              <img src={shoeObj.url} alt = {'Shoes'} width={100} height={100} />
            </div>
            <span>${shoeObj.price}</span>
            <div className='qty-Container'>
              <span><AddCircleIcon className="del" onClick={() => addShoe(shoeObj)} /></span>
              <span>{shoeObj.quantity}</span>
              <span><IndeterminateCheckBoxIcon className="del" onClick={() => lessOneShoe(shoeObj.id)} /></span>
            </div>
            <div>SubTotal = {shoeObj.price * shoeObj.quantity}</div>
          </div>
        )
      })}
      <div className="shoppingList">
        <h2>Total Number Of Products</h2>
        <h4>{shoesCount()}</h4>
        <h2>Total Price</h2>
        <h4>${totalPriceCal()}</h4>
      </div>
      <button className='chkoutButton'>CHECK OUT</button>
    </div>
  ) : (

      <div className='emptyCart'>
        Your Cart is empty
      </div>


    );
}

export default Cart;
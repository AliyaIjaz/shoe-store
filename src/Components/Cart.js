import React, { useContext, useState } from 'react';
import { ShoeContext } from '../Context/shoesContext';

const Cart=({shoe})=> {
    const {shoeL, removeShoe} = useContext(ShoeContext);
    console.log("shoes are = ",shoeL);
    return(
        
        <div>
            <div>{shoe.name}</div>
            <div>{shoe.url}</div>
        </div>
                  
    );
}
export default Cart;
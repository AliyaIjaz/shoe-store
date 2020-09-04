import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ManShoes from '../manshoes.json';
import WomanShoes from '../womanshoes.json';
import KidsShoes from '../kidsshoes.json';
import { ShoeContext } from '../Context/shoesContext';

function ProductItem() {
    const { id } = useParams();
    const manshoe = ManShoes[id];
    const womanShoe = WomanShoes[id];
    const kidsshoe = KidsShoes[id];

    let {count, setCount, addShoe, timedMsg} = useContext(ShoeContext);

    let fshoe = "";
    if (manshoe) {
        fshoe = manshoe;
    }
    else if (womanShoe) {
        fshoe = womanShoe;
    } else {
        fshoe = kidsshoe;
    }

     function addToCart(fshoe) {
         setCount(count+1);
         addShoe(fshoe);
         timedMsg();
     }
     
    return(
        <div>
            <h4>Product Item</h4>
            <div id='shoe'>
                 <img src={fshoe.url} alt = {'Shoes'} width = {300} height={300}/>
                 <h5> {fshoe.name}</h5> 
                 <h5>Rs. {fshoe.price}</h5>
                 <button className="item" onClick={()=>addToCart(fshoe)}>{fshoe.quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>         
            </div>
            <div id="msgContainer">
             <span><strong>Added To Cart</strong></span>
             </div>
             <div id="line"></div>
        </div>
    );

}

export default ProductItem;
import React from 'react';
import { useParams } from 'react-router-dom';
import ManShoes from '../manshoes.json';
import WomanShoes from '../womanshoes.json';
import KidsShoes from '../kidsshoes.json';

function ProductItem() {
    const { id } = useParams();
    const manshoe = ManShoes[id];
    const womanShoe = WomanShoes[id];
    const kidsshoe = KidsShoes[id];

    let fshoe = "";
    if (manshoe) {
        fshoe = manshoe;
    }
    else if (womanShoe) {
        fshoe = womanShoe;
    } else {
        fshoe = kidsshoe;
    }
      console.log("fshoe = ",fshoe)
    return(
        <div>
            <h4>Product Item</h4>
            <div className='shoe'>
                 <img src={fshoe.url} width = {400} height={400}/>
                 <h5> {fshoe.name}</h5>   
            </div>

        </div>
    );

}

export default ProductItem;
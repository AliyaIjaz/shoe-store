import React, { useContext } from 'react';
import WomanShoes from './../womanshoes.json';
import { Link } from 'react-router-dom';
import { ShoeContext } from '../Context/shoesContext';


function WomanCat() {

    let { addShoe, timedMsg } = useContext(ShoeContext);

    const addToCart = (Shoes) => {
        addShoe(Shoes);
        timedMsg();
    }

    return(
        <div>
            <h1>Shoes For Women</h1>
            <div className='shoeContainer'>
                {Object.keys(WomanShoes).map(keyName=>{
                    return(
                        <div key={keyName} className='link'>
                        <Link key={keyName}
                        className='link'
                        to={'/womanCat/'+keyName}>
                            <img src = {WomanShoes[keyName].url} alt = {'Shoes for women'} width={300} height={300}/>
                            <h5>{WomanShoes[keyName].name}</h5>
                            <h5>Rs. {WomanShoes[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(WomanShoes[keyName])}>{WomanShoes[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                        </div>
                    )
                }
                )
                }
            </div>
            <div id="msgContainer">
             <span><strong>Added To Cart</strong></span>
             </div>
             <div id="line"></div>
        </div>
    );

}

export default WomanCat;
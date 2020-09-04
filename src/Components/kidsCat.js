import React, { useContext } from 'react';
import KidsShoes from './../kidsshoes.json';
import { Link } from 'react-router-dom';
import { ShoeContext } from '../Context/shoesContext';



function KidsCat() {

    let { addShoe, timedMsg } = useContext(ShoeContext);

    const addToCart = (Shoes) => {
        //setCount(count + 1);
        addShoe(Shoes);
        timedMsg();
    }

    return(
        <div>
            <h1>Shoes For Kids</h1>
            <div className='shoeContainer'>
                {Object.keys(KidsShoes).map(keyName=>{
                    return(
                        <div key={keyName} className="link">
                        <Link key={keyName}
                        className='link'
                        to={'/kidsCat/'+keyName}>
                            <img src = {KidsShoes[keyName].url} alt = {'Shoes for kids'} width={300} height={300} />
                            <h5>{KidsShoes[keyName].name}</h5>
                            <h5>Rs. {KidsShoes[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(KidsShoes[keyName])}>{KidsShoes[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                        </div>
                    )
                })
                }

            </div>
            <div id="msgContainer">
             <span><strong>Added To Cart</strong></span>
             </div>
             <div id="line"></div>
        </div>
    );

}

export default KidsCat;
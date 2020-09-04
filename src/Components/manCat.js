import React, { useContext } from 'react';
import ManShoes from './../manshoes.json';
import { Link } from 'react-router-dom';
import { ShoeContext } from '../Context/shoesContext';



function ManCat() {
    
    let { addShoe, timedMsg } = useContext(ShoeContext);

    const addToCart = (Shoes) => {
        //setCount(count + 1);
        addShoe(Shoes);
        timedMsg();
    }

    return(
        <div>
            <h1>Shoes For Men</h1>
            <div className='shoeContainer'>
                {Object.keys(ManShoes).map(keyName=>{
                    return(
                        <div key={keyName} className='link'>
                        <Link key={keyName}
                        className='link'
                        to={'/manCat/'+keyName}>
                           <img src={ManShoes[keyName].url} alt={'Shoes for men'} width = {300} height={300}/>
                           <h5> {ManShoes[keyName].name}</h5>
                           <h5>Rs.  {ManShoes[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(ManShoes[keyName])}>{ManShoes[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>

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

export default ManCat;
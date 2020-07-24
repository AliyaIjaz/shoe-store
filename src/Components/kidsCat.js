import React from 'react';
import KidsShoes from './../kidsshoes.json';
import { Link } from 'react-router-dom';

function KidsCat() {
    return(
        <div>
            <h1>Shoes For Kids</h1>
            <div className='shoeContainer'>
                {Object.keys(KidsShoes).map(keyName=>{
                    return(
                        <Link key={keyName}
                        className='link'
                        to={'/kidsCat/'+keyName}>
                            <img src = {KidsShoes[keyName].url} width={300} height={300} />
                            <h5>{KidsShoes[keyName].name}</h5>
                            <h5>Rs. {KidsShoes[keyName].price}</h5>
                            <button className='button'onClick={()=>{console.log('button clicked')}}>Add to Cart</button>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    );

}

export default KidsCat;
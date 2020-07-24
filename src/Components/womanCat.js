import React from 'react';
import WomanShoes from './../womanshoes.json';
import { Link } from 'react-router-dom';

function WomanCat() {
    return(
        <div>
            <h1>Shoes For Women</h1>
            <div className='shoeContainer'>
                {Object.keys(WomanShoes).map(keyName=>{
                    return(
                        <Link key={keyName}
                        className='link'
                        to={'/womanCat/'+keyName}>
                            <img src = {WomanShoes[keyName].url} width={300} height={300}/>
                            <h5>{WomanShoes[keyName].name}</h5>
                            <h5>Rs. {WomanShoes[keyName].price}</h5>
                            <button className='button'onClick={()=>{console.log('button clicked')}}>Add to Cart</button>
                        </Link>
                    )
                }
                )
                }
            </div>
        </div>
    );

}

export default WomanCat;
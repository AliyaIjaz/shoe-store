import React from 'react';
import ManShoes from './../manshoes.json';
import { Link } from 'react-router-dom';

function ManCat() {
    return(
        <div>
            <h1>Shoes For Men</h1>
            <div className='shoeContainer'>
                {Object.keys(ManShoes).map(keyName=>{
                    return(
                        <Link key={keyName}
                        className='link'
                        to={'/manCat/'+keyName}>
                           <img src={ManShoes[keyName].url} width = {300} height={300}/>
                           <h5> {ManShoes[keyName].name}</h5>
                           <h5>Rs.  {ManShoes[keyName].price}</h5>
                           <button className='button'onClick={()=>{console.log('button clicked')}}>Add to Cart</button>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    );

}

export default ManCat;
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ManShoes from './../manshoes.json';
import WomanShoes from './../womanshoes.json';
import KidsShoes from './../kidsshoes.json';
import { ShoeContext } from '../Context/shoesContext';

function Product() {
    const { shoeList, addShoe } = useContext(ShoeContext);

    const [imgUrl, setImageUrl]=useState("");
    const [imgName, setImageName]=useState("");
    const [imgPrice, setImagePrice]=useState("");

   const addToCart=()=>{
    console.log("shoeList is ",imgUrl,imgName,imgPrice);
     //addShoe(imgUrl,imgName,imgPrice);
     setImageUrl("");
     setImageName("");
     setImagePrice("");
   }
 
    return (
        <div>
            <h2>All Shoes Available</h2>
            <div className="shoeContainer">{Object.keys(ManShoes).map(keyName => {
                return (
                    <Link key={keyName}
                        className="link"
                        to={'/product/' + keyName}>
                        <img src={ManShoes[keyName].url} width={300} height={300} />
                        <h5>{ManShoes[keyName].name}</h5>
                        <h5>Rs. {ManShoes[keyName].price}</h5>
                        <button className='button' onClick={() => {
                            setImageUrl(ManShoes[keyName].url);
                            setImageName(ManShoes[keyName].name);
                            setImagePrice(ManShoes[keyName].price);
                            addToCart();
                             }}>Add to Cart</button>
                    </Link>
                )
            })}
            </div>
            <div className='shoeContainer'>{Object.keys(WomanShoes).map(keyName => {
                return (
                    <Link key={keyName}
                        className="link"
                        to={'/product/' + keyName}>
                        <img src={WomanShoes[keyName].url} width={300} height={300} />
                        <h5>{WomanShoes[keyName].name}</h5>
                        <h5>Rs. {WomanShoes[keyName].price}</h5>
                        <button className='button' onClick={() => { console.log('button clicked') }}>Add to Cart</button>
                    </Link>
                )
            })}
            </div>
            <div className='shoeContainer'>{Object.keys(KidsShoes).map(keyName => {
                return (
                    <Link key={keyName}
                        className="link"
                        to={'/product/' + keyName}>
                        <img src={KidsShoes[keyName].url} width={300} height={300} />
                        <h5>{KidsShoes[keyName].name}</h5>
                        <h5>Rs. {KidsShoes[keyName].price}</h5>
                        <button className='button' onClick={() => { console.log('button clicked') }}>Add to Cart</button>
                    </Link>
                )
            })}

            </div>
        </div>
    );

}

export default Product;
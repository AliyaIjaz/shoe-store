import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ManShoes from './../manshoes.json';
import WomanShoes from './../womanshoes.json';
import KidsShoes from './../kidsshoes.json';
import { ShoeContext } from '../Context/shoesContext';




function Product() {
    let { count, setCount, addShoe, timedMsg } = useContext(ShoeContext);

    const addToCart = (Shoes) => {
        setCount(count + 1);
        addShoe(Shoes);
        timedMsg();
    }

    return (
        <div>
            <h2>All Shoes Available</h2>
            <div className="shoeContainer">{Object.keys(ManShoes).map(keyName => {
                return (
                    <div key={keyName} className="link">
                        <Link key={keyName}
                            to={'/product/' + keyName}>
                            <img src={ManShoes[keyName].url} alt = {'Shoes for men'} width={300} height={300} />
                            <h5>{ManShoes[keyName].name}</h5>
                            <h5>Rs. {ManShoes[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(ManShoes[keyName])}>{ManShoes[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>

                    </div>
                )
            })}
            </div>
            <div className='shoeContainer'>{Object.keys(WomanShoes).map(keyName => {
                return (
                    <div key={keyName} className="link">
                        <Link key={keyName}
                            to={'/product/' + keyName}>
                            <img src={WomanShoes[keyName].url} alt = {'Shoes for women'} width={300} height={300} />
                            <h5>{WomanShoes[keyName].name}</h5>
                            <h5>Rs. {WomanShoes[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(WomanShoes[keyName])}>{WomanShoes[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                    </div>
                )
            })}
            </div>
            <div className='shoeContainer'>{Object.keys(KidsShoes).map(keyName => {
                return (
                    <div key={keyName} className="link">
                        <Link key={keyName}
                            to={'/product/' + keyName}>
                            <img src={KidsShoes[keyName].url} alt = {'Shoes for kids'} width={300} height={300} />
                            <h5>{KidsShoes[keyName].name}</h5>
                            <h5>Rs. {KidsShoes[keyName].price}</h5>
                        </Link>
                        <button className="bt" onClick={() => addToCart(KidsShoes[keyName])}>{KidsShoes[keyName].quantity > 0 ? 'Add More Items' : 'Add To Cart'}</button>
                        <div id="msgContainer">
                            <span><strong>Added To Cart</strong></span>
                        </div>
                        <div id="line"></div>
                    </div>
                )
            })}

            </div>

        </div>
    );

}

export default Product;
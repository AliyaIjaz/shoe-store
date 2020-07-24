import React from 'react';
import { Link } from 'react-router-dom';
import manCategory from './../Assets/manCategory.jpg';
import womanCategory from './../Assets/womanCategory.jpg';
import kidsCategory from './../Assets/kidsCategory.jpeg';

function Home() {
    return (
        <div className="homepage">
            <Link to='/manCat'>
                <div>
                    <h4>Men Category</h4>
                    <img src={manCategory} alt="Men shoes" width={200} height={200} />
                </div>
            </Link>
            <Link to='/womanCat'>
                <div>
                    <h6>Women Category</h6>
                    <img src={womanCategory} alt="Women shoes" width={200} height={200} />
                </div>
            </Link>
            <Link to='kidsCat'>
                <div>
                    <h6>Kids Category</h6>
                    <img src={kidsCategory} alt="Kids shoes" width={200} height={200} />
                </div>
            </Link>

        </div>
    );

}

export default Home;
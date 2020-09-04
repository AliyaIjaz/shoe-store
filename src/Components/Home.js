import React from 'react';
import { Link } from 'react-router-dom';
import manCategory from './../Assets/manCategory.jpg';
import womanCategory from './../Assets/womanCategory.jpg';
import kidsCategory from './../Assets/kidsCategory.jpeg';


function Home() {
    return (
        <div  className="homepage">
            <Link to='/manCat'>
                
                    <h2>Men Category</h2>
                    <img className="img" src={manCategory} alt="Men shoes" width={350} height={350} />
                
            </Link>
            <Link to='/womanCat'>
                <div>
                    <h2>Women Category</h2>
                    <img className="img" src={womanCategory} alt="Women shoes" width={350} height={350} />
                </div>
            </Link>
            <Link to='kidsCat'>
                <div>
                    <h2>Kids Category</h2>
                    <img className="img" src={kidsCategory} alt="Kids shoes" width={350} height={350} />
                </div>
            </Link>

        </div>
    );

}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/product'>All Products</Link>
            <Link to='/manCat'>Men</Link>
            <Link to='/womanCat'>Women</Link>
            <Link to='/kidsCat'>kids</Link>
            <Link to='/cart'>CART</Link>
       </nav>
    );
}
export default NavBar;
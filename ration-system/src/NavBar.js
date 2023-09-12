import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>Rationary</Link>
        <ul>
            <li>
                <Link to='/login'>Login as Consumer</Link>
            </li>
            <li>
                <Link to='/retailer_login'>Login as Retailer</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
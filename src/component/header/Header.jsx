
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// style css
import './header.css';
import axios from 'axios';

export default function Header() {



  return (
    <div className="header">
        <div className="container">
            <nav>
                <Link id='home' className='home' to="/">Home</Link>
                <div className='auth'>
                    <Link id='logout' to="/storage">Storage</Link>
                </div>
            </nav>
        </div>
    </div>
  )
}
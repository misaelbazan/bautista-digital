import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Bautista Digital</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'><Link className='nav-link' to='/noticias'>Noticias</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/recursos'>Recursos</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/testimonios'>Testimonios</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/contacto'>Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
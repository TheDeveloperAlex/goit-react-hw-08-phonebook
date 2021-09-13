import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigathion.module.css';
// import { useLocation } from 'react-router-dom';

const Navigathion = () => {
    // const location = useLocation();
    return (
        <header >
            <nav className={s.nav}>
                <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>Home</NavLink>
            </nav>
        </header>
    );
}

export default Navigathion;
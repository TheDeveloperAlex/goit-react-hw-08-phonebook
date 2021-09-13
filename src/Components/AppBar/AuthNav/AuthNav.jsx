import React from 'react'
import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css'


const AuthNav = () => {
    return (
        <nav>
            <NavLink to="/register" exact className={s.link} activeClassName={s.activeLink}>register</NavLink>
            <NavLink to="/login" exact className={s.link} activeClassName={s.activeLink}>login</NavLink>
        </nav>
    );
}

export default AuthNav;
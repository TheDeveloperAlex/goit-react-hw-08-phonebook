import React from 'react'
import { NavLink } from 'react-router-dom';

import s from './UserMenu.module.css'


const UserMenu = () => {
    return (
        <nav>
            <NavLink to="/contacts" exact className={s.link} activeClassName={s.activeLink}>contacts</NavLink>
        </nav>
    );
}

export default UserMenu;
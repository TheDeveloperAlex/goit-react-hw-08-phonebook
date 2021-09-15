import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authOperation from 'redux/contacts-operation'
import selectors from 'redux/contacts-selectors'

import s from './UserMenu.module.css'

import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';


const UserMenu = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectors.getToken);
    const HandleClick = () => {
        dispatch(authOperation.logout(token));
    }
    return (

        <nav className={s.nav}>
            <NavLink to="/contacts" exact className={s.link} activeClassName={s.activeLink}><AccountBoxIcon style={{ fontSize: 40 }}/></NavLink>
            <button type="button" onClick={HandleClick} className={s.button}><MeetingRoomRoundedIcon style={{ fontSize: 30 }}/></button>
        </nav> 
    );
}

export default UserMenu;
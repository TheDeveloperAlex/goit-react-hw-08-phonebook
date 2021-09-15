import AuthNav from './AuthNav/AuthNav';
import Navigathion from './Navigation/Navigathion';
import UserMenu from './UserMenu/UserMenu';
import selectors from 'redux/contacts-selectors';


import s from './AppBar.module.css';
import { useSelector } from 'react-redux';

const AppBar = () => {
    const isUserLogged = useSelector(selectors.getIsLogged);
    // console.log(isUserLogged);
    return (
        <div className={s.header}>
            <Navigathion />
            {/* <UserMenu /> */}
            {/* <AuthNav /> */}
            {isUserLogged ? <UserMenu /> : <AuthNav />}
        </div>
    );
}

export default AppBar;
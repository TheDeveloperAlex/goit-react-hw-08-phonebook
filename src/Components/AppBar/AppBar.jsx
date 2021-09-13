import AuthNav from './AuthNav/AuthNav';
import Navigathion from './Navigation/Navigathion';
import UserMenu from './UserMenu/UserMenu';


import s from './AppBar.module.css';

const AppBar = () => {
    return (
        <div className={s.header}>
            <Navigathion />
            <AuthNav />
            <UserMenu />
        </div>
    );
}

export default AppBar;
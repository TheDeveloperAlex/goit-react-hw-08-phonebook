
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import selectors from 'redux/contacts-selectors'


const PrivateRoute = ({ children, ...routeProps }) => {
    const isLoggedIn = useSelector(selectors.getIsLogged);
    return (
        // <p></p>
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to="/login" />}
        </Route>
    );
}

export default PrivateRoute;
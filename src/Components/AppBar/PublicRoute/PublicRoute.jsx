import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import selectors from 'redux/contacts-selectors'

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
    const isLoggedIn = useSelector(selectors.getIsLogged);
    const shouldRedirect = isLoggedIn && restricted;
    // console.log(isLoggedIn);
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to="/contacts" /> : children}
        </Route>
    );
}

export default PublicRoute;
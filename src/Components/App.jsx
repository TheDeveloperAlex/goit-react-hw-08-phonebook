import React, { useState, useEffect } from 'react'
import ContactForm from './Forms/ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import AppBar from './AppBar/AppBar';
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login'
import { Route, Switch } from 'react-router-dom';
import s from '../Components/app.module.css';
import { useDispatch } from 'react-redux';
import operation from '../redux/contacts-operation'
import PrivateRoute from './AppBar/PrivateRoute/PrivateRoute'
import PublicRoute from './AppBar/PublicRoute/PublicRoute'
import { useSelector } from 'react-redux';
import selectors from '../redux/contacts-selectors'


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(operation.refreshCurrentUser())
    }, [dispatch]);
    const isFetchingCurrentUser = useSelector(selectors.getIsFetchingCurrenUser);

    return (
        !isFetchingCurrentUser && (<div className={s.section}>
            <AppBar />
            <Switch>
                {/* <Route path="/" exact>
                    <Home />
                </Route> */}
                <PublicRoute path="/" exact>
                    <Home />
                </PublicRoute>

                <PublicRoute path="/register" exact restricted>
                    <Register />
                </PublicRoute>

                <PublicRoute path="/login" exact restricted>
                    <Login />
                </PublicRoute>

                {/* <Route path="/register" >
                    <Register />
                </Route>
                <Route path="/login" >
                    <Login />
                </Route> */}
                {/* <Route path="/contacts" >
                    <Contacts />
                </Route> */}
                <PrivateRoute path="/contacts">
                    <Contacts />
                </PrivateRoute>
            </Switch>
            {/* <ContactForm /> */}
            {/* <Contacts /> */}
        </div>)
    )


}


export default App;

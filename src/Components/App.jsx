import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import AppBar from './AppBar/AppBar';
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login'
import { Route, Switch } from 'react-router-dom';
import s from '../Components/app.module.css';


function App() {

    return (
        <div className={s.section}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/register" >
                    <Register />
                </Route>
                <Route path="/login" >
                    <Login />
                </Route>
                <Route path="/contacts" >
                    <Contacts />
                </Route>
            </Switch>
            {/* <ContactForm /> */}
            {/* <Contacts /> */}
        </div>
    )


}


export default App;

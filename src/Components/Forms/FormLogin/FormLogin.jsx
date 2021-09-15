import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperation from "redux/contacts-operation";

import s from './FormLogin.module.css';

const FormLogin = ({ buttonName }) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const dispatch = useDispatch();

    const handleEmailChange = e => {
        const value = e.target.value;
        setEmail(value);
    }

    const handlePassChange = e => {
        const value = e.target.value;
        setpassword(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // const UserData = {
        //     email: email,
        //     password: pass,
        // }
        dispatch(authOperation.login({ email, password }));

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form}>
                    <label>
                        <p className={s.discrib}>Email</p>
                        <input
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                            id="Loginname"
                            // pattern="^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$"
                            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        className={s.input}
                        />
                    </label>
                    <label>
                        <p className={s.discrib}>Password</p>
                        <input
                            // className={s.inputTel}
                            type="password"
                            name="password"
                            onChange={handlePassChange}
                            id="Loginpassword"
                            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        className={s.input}
                        />
                    </label>
                <button type="submit" className={s.button}>{ buttonName }</button>
                </form>
            </div>  
    );
}

export default FormLogin;
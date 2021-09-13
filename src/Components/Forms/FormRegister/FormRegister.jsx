import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import authOperation from "redux/contacts-operation";



const FormRegister = ({ buttonRegisterName }) => {
    
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const dispatch = useDispatch();

    const handleNameChange = e => {
        const value = e.target.value;
        setname(value);
    }

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
        // const userData = {
        //     name: name,
        //     email: email,
        //     password: pass,
        // }
        console.log( name, email, password);
        dispatch(authOperation.register({ name, email, password }));
        setname('');
        setEmail('');
        setpassword('');

    }

    // const setUserRegistrData = () => {
        
    // }
    return (
            <div>
            <form onSubmit={handleSubmit}>
                    <label>
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            onChange={handleNameChange}
                            id="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                            id="name"
                            // pattern="^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$"
                            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            // className={s.inputTel}
                            type="password"
                            name="password"
                            onChange={handlePassChange}
                            id="password"
                            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                        />
                    </label>
                <button type="submit">{ buttonRegisterName } </button>
                </form>
            </div>
    );
}

export default FormRegister;
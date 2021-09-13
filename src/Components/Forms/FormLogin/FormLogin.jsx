import React, { useState } from 'react'


const FormLogin = ({ buttonName }) => {
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');


    const handleEmailChange = e => {
        const value = e.target.value;
        setEmail(value);
    }

    const handlePassChange = e => {
        const value = e.target.value;
        setpass(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const UserData = {
            email: email,
            password: pass,
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">{ buttonName }</button>
                </form>
            </div>  
    );
}

export default FormLogin;
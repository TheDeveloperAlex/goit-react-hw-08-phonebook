import s from './Contacts.module.css';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import actions from 'redux/contacts-actions';
import operations from 'redux/contacts-operation';

import { useSelector, useDispatch } from 'react-redux';
import sprite from 'img/sprite.svg';
import selectors from 'redux/contacts-selectors';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ContactForm from '../Forms/ContactForm/ContactForm';


import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';




const Contacts = () => {

    const filtredContacts = useSelector(selectors.getFiltredContacts);
    const loading = useSelector(selectors.getloading);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(operations.fetchContacts())
    }, [dispatch,])


    const filter = e => {
        const value = e.target.value;

        dispatch(actions.setFilter(value))
    };

    const removeContact = (id) => {

        return dispatch(operations.deleteContact(id));


    }
    return (
        <div>
            {/* <h2>Contacts</h2> */}
            <div>
                    <ContactForm />
            </div>

            <div className={s.mainConteiner}>
                    {/* <p className={s.discrib}>Filter</p> */}
                <div className={s.filterDiv}>
                    <input type="text" onChange={filter} className={s.input}/>
                    <div className={s.searchContainer}><SearchIcon /></div>
                </div>
                
                
                <div className={s.divLoader}>
                    {loading && (
                        <Loader
                            type="Circles"
                            color="#00BFFF"
                            height={80}
                            width={80}
                            timeout={3000} //3 secs
                        />
                    )}
                </div>
                <ul>
                    {!filtredContacts.length && <p>No contacts</p>  }
                    {
                        
                            
                            filtredContacts.map(item => (
                                <li key={item.id} className={s.li}>
                                    {item.name}: {item.number}
                                    <button type="button" id={item.id} onClick={() => removeContact(item.id)} className={s.button}>
                                        {/* <svg className={s.svg}>
                                            <use href={sprite + "#icon-user-minus"}></use>
                                        </svg> */}
                                        <DeleteIcon />
                                    </button>
                                </li>
                        ))
                    }

                </ul>
            </div>
            
        </div>
    );

}

// const mapStateToProps = state => {
    //     return {
    //         filtredContacts: selectors.getFiltredContacts(state),
    //         loading: selectors.getloading(state),
    //     };
// };


// export default connect(mapStateToProps)(Contacts);
export default Contacts;


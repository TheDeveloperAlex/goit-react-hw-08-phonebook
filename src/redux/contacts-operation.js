import actions from "./contacts-actions";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// import {
//   getContactsApi,
//   addContactApi,
//   deleteContactsApi,
// } from "./contacts-api";

// import { useSelector } from "react-redux";

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    return data;
  } catch {
    console.log("error with auth/register");
  }
});

export default {
  register,
};
// export const addContact = (contact) => async (dispatch) => {
//   dispatch(actions.postContactsRequest());
//   try {
//     const addContactRes = await addContactApi(contact);
//     dispatch(actions.postContactsSuccess(addContactRes));
//   } catch {
//     dispatch(actions.postContactsError(error));
//   }
// };

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(actions.fetchContactsRequest());
//   try {
//     const contacts = await getContactsApi().then((res) => res);
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async () => {
//     const contacts = await getContactsApi().then((res) => res);
//     return contacts;
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (contact) => {
//     const addContactRes = await addContactApi(contact);
//     return addContactRes;
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id) => {
//     // const state = useSelector((state) => state.contacts.enteties);
//     // console.log(1);
//     // console.log(state);
//     const deleteContactRes = await deleteContactsApi(id);

//     // const res = state.filter((contact) => contact.id !== id);

//     // console.log(res);
//     return id;
//   }
// );

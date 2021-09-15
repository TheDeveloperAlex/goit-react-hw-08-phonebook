import actions from "./contacts-actions";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import selectors from "./contacts-selectors";
// import operation from "./contacts-operation";

// const  = useSelector(state => state.)

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// import {
//   getContactsApi,
//   addContactApi,
//   deleteContactsApi,
// } from "./contacts-api";

// import { useSelector } from "react-redux";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch {
    console.log("error with auth/register");
  }
});

const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);

    return data;
  } catch {
    console.log("error with auth/login");
  }
});

const logout = createAsyncThunk("auth/logout", async () => {
  try {
    // const { data } =
    await axios.post("/users/logout");
    token.unset();
    // return data;
  } catch {
    console.log("error with auth/logout");
  }
});

const fetchContacts = createAsyncThunk("get/contacts", async () => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch {
    console.log("error with get/contacts");
  }
});

const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
  console.log(contact);
  try {
    const userContact = await axios.post("/contacts", contact);
    return userContact.data;
  } catch {
    console.log("error with contacts/addContact");
  }
  // const addContactRes = await addContactApi(contact);
  // return addContactRes;
});

const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
  try {
    // const userContacts = useSelector(selectors.getAllContacts);
    // console.log(userContacts);
    await axios.delete(`/contacts/${id}`);
    // const contacts = state.contacts.enteties;
    // const filtredUserContactWithoutDeleted = userContacts.filter(
    // (contact) => contact.id !== id
    // );
    // return filtredUserContactWithoutDeleted;
    return id;
  } catch {
    console.log("error with contacts/deleteContact");
    // console.log(id);
  }
});

const refreshCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    // console.log();
    const persistToken = state.auth.token;
    if (token === null) {
      return thunkApi.rejectWithValue();
    }
    try {
      token.set(persistToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export default {
  register,
  login,
  logout,
  fetchContacts,
  addContact,
  deleteContact,
  refreshCurrentUser,
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

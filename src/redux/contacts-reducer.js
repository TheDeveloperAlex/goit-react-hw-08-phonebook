import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import { combineReducers } from "redux";
import operation from "./contacts-operation";

const enteties = createReducer([], {
  [operation.fetchContacts.fulfilled]: (_, action) => action.payload,
  [operation.addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [operation.deleteContact.fulfilled]: (state, { payload }) =>
    // payload,
    // console.log(payload),
    state.filter((contact) => contact.id !== payload),
});
// })

const isLoading = createReducer(false, {
  [operation.fetchContacts.pending]: () => true,
  [operation.fetchContacts.fulfilled]: () => false,
  [operation.fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [operation.fetchContacts.rejected]: (_, action) => action.payload,
  [operation.fetchContacts.pending]: () => null,

  [operation.addContact.rejected]: (_, action) => action.payload,
  [operation.addContact.pending]: () => null,
});

const filterReducer = createReducer("", {
  [actions.setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  enteties,
  isLoading: isLoading,
  error: error,
  filter: filterReducer,
});

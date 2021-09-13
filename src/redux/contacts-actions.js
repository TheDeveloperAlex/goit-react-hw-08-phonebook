import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const setFilter = createAction("contacts/setFilter");
const filterContactsWithoutDeleted = createAction(
  "contacts/filterContactsWithoutDeleted",
  (state, id) => ({
    payload: state.filter((contact) => contact.id !== id),
  })
);
export default {
  setFilter,
  filterContactsWithoutDeleted,
};

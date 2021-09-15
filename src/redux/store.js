import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts-reducer";
import authReducer from "./contacts-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

// export default store;
export const persistor = persistStore(store);

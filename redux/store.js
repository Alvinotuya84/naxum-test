import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import contactReducer from "./ContactsSlice";



export default configureStore({
  reducer: {
    auth: authReducer,
    contacts:contactReducer

  },
});

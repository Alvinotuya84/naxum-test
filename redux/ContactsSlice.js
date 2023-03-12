import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";
import * as SecureStore from "expo-secure-store";
import { ToastAndroid } from "react-native";
import Toast from 'react-native-toast-message';



export const allContacts = createAsyncThunk(
  "contacts/list-contacts",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await api.allContacts();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const searchContacts = createAsyncThunk(
  "contacts/search-contact",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await api.searchContact(inputs);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/delete-contact",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await api.deleteContact(inputs);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/add-contact",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await api.addContact(inputs);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts:[],
    loading:false,
    addEditContact:false,
    info:{}

  },
  reducers: {
    toggleAddEditContactOverLay:(state, action)=>{
      if(state.addEditContact){
        state.addEditContact=false
      }else{
        state.addEditContact=true
      }

    }
  },
  extraReducers: {
    [addContact.pending]: (state, action) => {
      state.loading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      Toast.show({
        type:"success",
        text1:action.payload.message
      })
      state.contacts=action.payload.contacts
      state.loading = false;
      state.info={}


    },
    [addContact.rejected]: (state, action) => {


      state.loading = false;
      state.info=action.payload

      if((action.payload.message =="Unauthenticated.")){
        state.user = null;
        SecureStore.deleteItemAsync("profile");
        Toast.show(
          {
            type:"error"
            ,
            text1:action.payload.message,
            text2:"Session Expired"
          }
        );
      }{
        Toast.show({
          type:"error",
          text1:action.payload.message
        })
      }


    },
    [allContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [allContacts.fulfilled]: (state, action) => {
      state.contacts=action.payload
      state.loading = false;


    },
    [allContacts.rejected]: (state, action) => {
      Toast.show({
        type:"error",
        text1:action.payload.message
      })

      state.loading = false;


    },
    [searchContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [searchContacts.fulfilled]: (state, action) => {
      state.contacts=action.payload

      state.loading = false;


    },
    [searchContacts.rejected]: (state, action) => {

      state.loading = false;

    },
    [deleteContact.pending]: (state) => {


      state.loading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.loading = false;
      Toast.show({
        type:"success",
        text1:action.payload.message
      })
      state.contacts=action.payload.contacts

    },
    [deleteContact.rejected]: (state, action) => {

      state.loading = false;
      if((action.payload.message =="Unauthenticated.")){
        Toast.show(
          {
            type:"error"
            ,
            text1:action.payload.message,
            text2:"Session Expired"
          }
        );
      }{
        Toast.show({
          type:"error",
          text1:action.payload.message
        })
      }



    },

  },
});
export const { toggleAddEditContactOverLay } = contactsSlice.actions;

export default contactsSlice.reducer;

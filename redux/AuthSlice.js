import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";
import * as SecureStore from "expo-secure-store";
import { ToastAndroid } from "react-native";
import Toast from 'react-native-toast-message';



export const login = createAsyncThunk(
  "auth/login",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await api.login(inputs);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await api.logout();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/update-profile",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await api.updateProfile(inputs);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
    successMessage: "",
    logoutLoadingState:false,
    info:{},
    profileImage:""

  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      state.user = null;
      SecureStore.deleteItemAsync("profile");
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {


      Toast.show({
        text1:`Welcome ${action.payload.user.user_name}! Sign In Successfull`

      })
      state.loading = false;
      SecureStore.setItemAsync(
        "profile",
        JSON.stringify({ ...action.payload })
      );
      state.user = action.payload;
      state.info={}
    },
    [login.rejected]: (state, action) => {


      Toast.show(
        {
          type:"error"
          ,
          text1:action.payload.message
        }
      );
      state.loading = false;
      state.info=action.payload

    },
    [updateProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      Toast.show({
        type:"success",
        text1:action.payload.message
      })
      state.loading = false;
      SecureStore.setItemAsync(
        "profile",
        JSON.stringify({ ...action.payload })
      );
      state.user = action.payload;
      state.info={}


    },
    [updateProfile.rejected]: (state, action) => {
      state.loading = false;
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
      }
         Toast.show({
        type:"error",
        text1:action.payload.message
      })
      state.info=action.payload

    },
    [logout.pending]: (state) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state, action) => {
      Toast.show(
        {
          type:"success"
          ,
          text1:action.payload.message,
        }
      );
      state.loading = false;
      state.user = null;
      SecureStore.deleteItemAsync("profile");
    },
    [logout.rejected]: (state, action) => {
      state.loading = false;
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
      }
      else{
        Toast.show(
          {
            type:"error"
            ,
            text1:action.payload.message,
          }
        );
      }


    },

  },
});

export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;

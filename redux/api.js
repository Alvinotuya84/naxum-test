import axios from "axios";
// import {BASE_URL} from '@env';
import * as SecureStore from "expo-secure-store";

const API = axios.create({
  baseURL: "https://9549-41-212-99-21.ngrok.io/api",
});
API.interceptors.request.use(async (req) => {
  let profile = await SecureStore.getItemAsync("profile");
  if (profile) {
    let profileValue = JSON.parse(profile);
    req.headers.Authorization = `Bearer ${profileValue.token}`;
  }
  return req;
});
export const login = (formdata) => API.post("/login", formdata);
export const updateProfile = (formdata) => API.patch(`/update-profile`, formdata);

export const logout = () => API.post("/logout");


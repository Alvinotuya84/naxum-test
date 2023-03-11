import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { screens } from "../dataUtilities";
import DrawerNavigator from "./DrawerNavigator";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "../screens/LoginScreen";
import { getProfileImage, setUser } from "../redux/AuthSlice";
import * as SecureStore from "expo-secure-store";
import { Colors } from "../constants";

const Stack = createNativeStackNavigator();
function Navigator() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getUser() {
      let profile = await SecureStore.getItemAsync("profile");
      if (profile) {
        let foundProfile = JSON.parse(profile);

        dispatch(setUser(foundProfile));
      }
    }
    getUser();
    if (user) {
      dispatch(getProfileImage(user?.id));
    }
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user && (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
        {user && (
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        )}
        {user &&
          screens.map((item, index) => (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

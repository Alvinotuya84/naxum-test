import React from "react";
import { screens } from "../dataUtilities";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";

import { Colors } from "../constants";
import Menu from "./Menu";

type Props = {};

const DrawerNav = createDrawerNavigator();

const DrawerNavigator = (props: Props) => {
  return (
    <DrawerNav.Navigator
      initialRouteName="HomeScreen"
      drawerContent={(props) => <Menu {...props} />}
      screenOptions={{
        headerTitleAlign: "center",
        drawerPosition: "left",
        headerTintColor: Colors.background,
        headerRight: () => <DrawerToggleButton tintColor="white" />,
        headerLeft: () => null,
        headerStyle: { backgroundColor: Colors.mainTheme },
      }}
    >
      {screens.map((item, index) => (
        <DrawerNav.Screen
          key={index}
          options={{
            title: item.title,
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;

import React from "react";
import { screens } from "../dataUtilities";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";

type Props = {};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
}) {
  return (
    <FontAwesome5
      size={scale(30)}
      style={{ marginBottom: scale(-3) }}
      {...props}
    />
  );
}

const Tab = createBottomTabNavigator();

const BottomNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#90EE90",
      }}
    >
      {screens.map((item, index) => (
        <Tab.Screen
          key={index}
          options={{
            title: item.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={item.iconName} color={color} />
            ),
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;

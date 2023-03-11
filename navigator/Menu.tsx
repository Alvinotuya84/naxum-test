import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button } from "@rneui/themed";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthSlice";

const Menu = (props) => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Colors.mainTheme }}
      >
        <View style={{ padding: 20 }}>
          <Ionicons name="person-circle" size={80} color="black" />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            {user?.user.full_name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                marginRight: 5,
              }}
            >
              {user?.user.email}
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <Button
          title="Sign Out"
          type="clear"
          icon={{
            type: "font-awesome",
            name: "power-off",
            iconStyle: { color: Colors.mainGrey },
          }}
          iconPosition="left"
          loading={loading}
          disabled={loading}
          onPress={() => {
            dispatch(logout());
          }}
        />
      </View>
    </View>
  );
};

export default Menu;

import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { homeNavStyle } from "../Styles";
import { Overlay } from "@rneui/themed";
import { Colors } from "../constants";
import { homeNavItems } from "../dataUtilities";
import { useDispatch } from "react-redux";
import { scale } from "react-native-size-matters";
import AddContactScreen from "../screens/AddContactScreen";
import { ScreenWidth } from "@rneui/base";

type Props = {};

const HomeNav = (props: Props) => {
  const [addEditContact, setAddEditContact] = useState<boolean>(false);

  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: scale(40),
      }}
    >
      <FlatList
        data={homeNavItems}
        contentContainerStyle={homeNavStyle.main}
        horizontal
        renderItem={({ item }) => (
          <View key={item.id} style={homeNavStyle.wrapper}>
            <item.icon
              onPress={() =>
                item.callBack(dispatch, setAddEditContact, addEditContact)
              }
              name={item.iconName}
              size={scale(30)}
              color={Colors.background}
            />
          </View>
        )}
      />

      <Overlay
        onBackdropPress={() => setAddEditContact(!addEditContact)}
        isVisible={addEditContact}
        overlayStyle={{
          flex: 0.8,
          width: ScreenWidth * 0.8,
        }}
      >
        <AddContactScreen />
      </Overlay>
    </View>
  );
};

export default HomeNav;

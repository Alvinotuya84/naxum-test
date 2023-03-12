import { View, Text } from "react-native";
import React, { useState } from "react";
import { contactItemStyles } from "../Styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";
import { Button, Overlay } from "@rneui/themed";
import { BottomSheet, ScreenHeight, ScreenWidth } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/ContactsSlice";
import { scale, moderateScale } from "react-native-size-matters";

type Props = {
  name: string;
  contact: string;
  id: number;
};

const ContactItem = ({ name, contact, id }: Props) => {
  const [deleteOverlay, setDeleteOverlay] = useState(false);
  const { loading }: { loading: boolean } = useSelector(
    (state) => state.contacts
  );
  const dispatch = useDispatch();
  return (
    <View style={contactItemStyles.wrapper}>
      <Ionicons name="person-circle-sharp" size={50} color={Colors.mainGrey} />
      <Text>{name}</Text>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: moderateScale(20),
        }}
      >
        <AntDesign
          name="closecircle"
          onPress={() => setDeleteOverlay(!deleteOverlay)}
          size={50}
          color={"black"}
        />
      </View>
      <BottomSheet
        onBackdropPress={() => setDeleteOverlay(!deleteOverlay)}
        isVisible={deleteOverlay}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.background,
            height: ScreenHeight * 0.3,
            borderRadius: moderateScale(20),
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: Colors.mainTheme,
            }}
          >
            Are you sure you want to delete {name} contact?
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              title={"Yes"}
              containerStyle={{
                marginHorizontal: scale(10),
              }}
              onPress={() => dispatch(deleteContact(id))}
              color="red"
            />
            <Button
              containerStyle={{
                marginHorizontal: scale(10),
              }}
              onPress={() => setDeleteOverlay(!deleteOverlay)}
              title={"No"}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ContactItem;

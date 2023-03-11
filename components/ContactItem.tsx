import { View, Text } from "react-native";
import React from "react";
import { contactItemStyles } from "../Styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";

type Props = {};

const ContactItem = (props: Props) => {
  return (
    <View style={contactItemStyles.wrapper}>
      <Ionicons name="person-circle-sharp" size={50} color={Colors.mainGrey} />
      <Text>Name</Text>
    </View>
  );
};

export default ContactItem;

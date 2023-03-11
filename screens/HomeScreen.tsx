import { View, Text } from "react-native";
import React from "react";
import ContactItem from "../components/ContactItem";
import { homeScreenStyles } from "../Styles";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={homeScreenStyles.main}>
      <Text>Add Contacts</Text>
    </View>
  );
};

export default HomeScreen;

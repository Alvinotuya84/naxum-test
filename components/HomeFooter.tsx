import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { homeScreenStyles } from "../Styles";
import { Colors } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { allContacts } from "../redux/ContactsSlice";
import { moderateScale } from "react-native-size-matters";

type Props = {};

const HomeFooter = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(allContacts())}
      style={homeScreenStyles.footerButton}
    >
      <View>
        <Ionicons
          name="person-circle-sharp"
          size={moderateScale(50)}
          color={Colors.background}
        />
        <Text style={{ color: Colors.background }}>Refresh contacts</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeFooter;

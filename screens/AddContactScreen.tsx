import { View, Text } from "react-native";
import React, { useState } from "react";
import { loginScreenStyles } from "../Styles";
import { Input, Button } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constants";
import { addContact } from "../redux/ContactsSlice";

type Props = {};

const AddContactScreen = (props: Props) => {
  const { loading, info } = useSelector((state) => state.contacts);

  const [inputs, setInputs] = useState({});
  const handleInputChange = (value: string, identifier: string) =>
    setInputs((inputs) => ({ ...inputs, [identifier]: value }));

  const dispatch = useDispatch();
  return (
    <View style={loginScreenStyles.main}>
      <Input
        onChangeText={(value: string) => handleInputChange(value, "name")}
        textContentType="name"
        placeholder={"Contact Name"}
        inputStyle={loginScreenStyles.inputContainer}
        errorMessage={
          info?.errors?.name == undefined ? "" : info.errors?.name[0]
        }
        inputContainerStyle={loginScreenStyles.input}
        leftIcon={{
          type: "font-awesome",
          name: "user",
          iconStyle: { color: Colors.mainGrey },
        }}
      />
      <Input
        onChangeText={(value: string) => handleInputChange(value, "contact")}
        keyboardType={"number-pad"}
        placeholder={"Contact"}
        errorMessage={
          info?.errors?.contact == undefined ? "" : info.errors?.contact[0]
        }
        leftIcon={{
          type: "font-awesome",
          name: "mobile-phone",
          iconStyle: { color: Colors.mainGrey },
        }}
        inputStyle={loginScreenStyles.inputContainer}
        inputContainerStyle={loginScreenStyles.input}
      />
      <Button
        disabled={loading}
        loading={loading}
        title={"Add Contact"}
        containerStyle={loginScreenStyles.submitButton}
        onPress={() => {
          dispatch(addContact(inputs));
        }}
      />
    </View>
  );
};

export default AddContactScreen;

import { View, Text } from "react-native";
import React, { useState } from "react";
import { loginScreenStyles } from "../Styles";
import { LoginInputs } from "../types";
import { Button, Input } from "@rneui/themed";
import { Colors } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/AuthSlice";

type Props = {};

const LoginScreen = (props: Props) => {
  const [inputs, setInputs] = useState<LoginInputs>({});
  const handleInputChange = (value: string, identifier: string) =>
    setInputs((inputs) => ({ ...inputs, [identifier]: value }));

  const { loading, info } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <View style={loginScreenStyles.main}>
      <Input
        onChangeText={(value: string) => handleInputChange(value, "user_name")}
        textContentType="name"
        placeholder={"User Name"}
        inputStyle={loginScreenStyles.inputContainer}
        errorMessage={
          info?.errors?.user_name == undefined ? "" : info.errors?.user_name[0]
        }
        inputContainerStyle={loginScreenStyles.input}
        leftIcon={{
          type: "font-awesome",
          name: "user",
          iconStyle: { color: Colors.mainGrey },
        }}
      />
      <Input
        onChangeText={(value: string) => handleInputChange(value, "password")}
        textContentType="password"
        placeholder={"Password"}
        errorMessage={
          info?.errors?.password == undefined ? "" : info.errors?.password[0]
        }
        leftIcon={{
          type: "font-awesome",
          name: "lock",
          iconStyle: { color: Colors.mainGrey },
        }}
        secureTextEntry
        inputStyle={loginScreenStyles.inputContainer}
        inputContainerStyle={loginScreenStyles.input}
      />
      <Button
        disabled={loading}
        loading={loading}
        title={"Login"}
        containerStyle={loginScreenStyles.submitButton}
        onPress={() => dispatch(login(inputs))}
      />
    </View>
  );
};

export default LoginScreen;

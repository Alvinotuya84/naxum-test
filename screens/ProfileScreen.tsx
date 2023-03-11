import { View, Text } from "react-native";
import React, { useState } from "react";
import { profileScreenStyles } from "../Styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";
import { Button } from "@rneui/themed";
import { updateProfile } from "../redux/AuthSlice";
import { Input } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const ProfileScreen = (props: Props) => {
  const { loading, info, user } = useSelector((state) => state.auth);

  const [inputs, setInputs] = useState({
    user_name: user?.user?.user_name,
    full_name: user?.user?.full_name,
    email: user?.user?.email,
    contact_number: user?.user?.contact_number,
    id: user?.user?.id,
  });
  const handleInputChange = (value: string, identifier: string) =>
    setInputs((inputs) => ({ ...inputs, [identifier]: value }));

  const dispatch = useDispatch();
  return (
    <View style={profileScreenStyles.main}>
      <View style={profileScreenStyles.wrapper}>
        <Ionicons
          name="person-circle-sharp"
          size={150}
          color={Colors.mainGrey}
        />
        <Button title={"Top Badges"} containerStyle={{ width: "90%" }} />
        <Input
          onChangeText={(value: string) =>
            handleInputChange(value, "user_name")
          }
          textContentType="name"
          placeholder={"User Name"}
          errorMessage={
            info?.errors?.user_name == undefined
              ? ""
              : info.errors?.user_name[0]
          }
          value={inputs.user_name}
        />
        <Input
          onChangeText={(value: string) =>
            handleInputChange(value, "full_name")
          }
          textContentType="name"
          placeholder={"Full Name"}
          errorMessage={
            info?.errors?.full_name == undefined
              ? ""
              : info.errors?.full_name[0]
          }
          value={inputs.full_name}
        />
        <Input
          onChangeText={(value: string) =>
            handleInputChange(value, "contact_number")
          }
          placeholder={"Mobile Number"}
          keyboardType="phone-pad"
          errorMessage={
            info?.errors?.contact_number == undefined
              ? ""
              : info.errors?.contact_number[0]
          }
          value={inputs.contact_number}
        />
        <Input
          onChangeText={(value: string) => handleInputChange(value, "email")}
          placeholder={"Email"}
          keyboardType="email-address"
          errorMessage={
            info?.errors?.email == undefined ? "" : info.errors?.email[0]
          }
          value={inputs.email}
        />
        <Button
          title={"Update"}
          loading={loading}
          disabled={loading}
          onPress={() => dispatch(updateProfile(inputs))}
          containerStyle={{ width: "80%" }}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

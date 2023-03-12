import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ContactItem from "../components/ContactItem";
import { homeScreenStyles, mainStyles } from "../Styles";
import HomeNav from "../components/HomeNav";
import { Button, Overlay, SearchBar, Skeleton } from "@rneui/themed";
import { homeNavStyle } from "../Styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";
import { FlatList } from "react-native";
import { ContactItemType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import {
  allContacts,
  searchContacts,
  toggleAddEditContactOverLay,
} from "../redux/ContactsSlice";
import HomeFooter from "../components/HomeFooter";
import ContactList from "../components/ContactList";
import { Adder } from "d3-array";
import AddContactScreen from "./AddContactScreen";
type Props = {};

const HomeScreen = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allContacts());
  }, []);

  const [searchString, setSearchString] = useState("");
  const { loading }: { loading: boolean } = useSelector(
    (state) => state.contacts
  );
  return (
    <View style={homeScreenStyles.main}>
      <Text style={homeScreenStyles.header}>Add Contacts</Text>
      <HomeNav />
      <SearchBar
        containerStyle={homeNavStyle.searchBarContainer}
        round
        value={searchString}
        onChangeText={setSearchString}
        placeholder="Search Contact"
        inputContainerStyle={homeNavStyle.searchInput}
      />
      <Button
        title={"Search Contact"}
        disabled={loading}
        onPress={() =>
          dispatch(
            searchContacts({
              search: searchString,
            })
          )
        }
        containerStyle={mainStyles.mainButton}
      />
      <ContactList />
      <HomeFooter />
    </View>
  );
};

export default HomeScreen;

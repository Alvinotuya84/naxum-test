import { View, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import ContactItem from "./ContactItem";
import { Skeleton } from "@rneui/themed";
import { homeScreenStyles } from "../Styles";
import { ContactItemType } from "../types";
import { moderateScale } from "react-native-size-matters";

type Props = {};

const ContactList = (props: Props) => {
  const {
    contacts,
    loading,
  }: { contacts: ContactItemType[]; loading: boolean } = useSelector(
    (state) => state.contacts
  );
  return (
    <>
      {!loading ? (
        <FlatList
          data={contacts}
          ListEmptyComponent={() => (
            <View style={homeScreenStyles.emptyList}>
              <Text>No Contacts found</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <ContactItem
              key={item.id}
              id={item.id}
              contact={item.contact}
              name={item.name}
            />
          )}
        />
      ) : (
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={(item, index) => (
            <View key={index} style={homeScreenStyles.placeholder}>
              <Skeleton
                circle
                width={moderateScale(50)}
                height={moderateScale(50)}
              />
              <Skeleton width={moderateScale(200)} height={moderateScale(50)} />
            </View>
          )}
        />
      )}
    </>
  );
};

export default ContactList;

import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar as PaperSearchBar } from "react-native-paper";
import { LocationContext } from "../services/location/location.provider";

export const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchText, setSearchText] = useState(keyword);
  return (
    <PaperSearchBar
      value={searchText}
      onChangeText={(text) => {
        setSearchText(text);
      }}
      onSubmitEditing={({ nativeEvent }) => {
        search(nativeEvent.text);
      }}
      inputStyle={styles.inputStyle}
      placeholder="Search"
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
  },
});

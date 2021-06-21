import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar as PaperSearchBar } from "react-native-paper";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <PaperSearchBar
      value={searchText}
      onChangeText={(text) => {
        setSearchText(text);
      }}
      onSubmitEditing={() => {}}
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

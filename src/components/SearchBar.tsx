import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar as PaperSearchBar } from "react-native-paper";
import { LocationContext } from "../services/location/location.provider";

export const SearchBar = ({ icon, onIconPress }: any) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchText, setSearchText] = useState(keyword);

  useEffect(() => {
    setSearchText(keyword);
  }, [keyword]);

  return (
    <PaperSearchBar
      icon={icon}
      onIconPress={onIconPress}
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

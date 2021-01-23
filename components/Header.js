import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text>Add date here</Text>
      <Text>Add three dots for settings</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "blue",

    justifyContent: "space-between",
  },
});

export default Header;

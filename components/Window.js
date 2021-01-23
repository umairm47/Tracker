import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const Window = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 0.5,
    backgroundColor: "lightgreen",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "rgb(54,69,79)",
    fontSize: 24,
  },
});
export default Window;

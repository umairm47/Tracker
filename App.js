import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Feather } from "@expo/vector-icons";
import Window from "./components/Window";
export default function App() {
  const [page, setPage] = useState("HOME");

  return (
    <View style={styles.container}>
      <Header />
      <Window />
      <View style={styles.body}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.button}>
        <Feather name="plus-circle" size={40} color="lightgreen" />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    flex: 1,
    justifyContent: "space-between",
  },
  body: {
    flex: 5,
    backgroundColor: "rgb(54,69,79)",
  },
  header: {
    flex: 1,
  },

  button: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 25,
    alignItems: "center",

    backgroundColor: "rgb(54,69,79)",
  },
});

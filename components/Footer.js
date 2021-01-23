import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
const Footer = (props) => {
  const [home, setHome] = useState(true);
  const [target, setTarget] = useState(false);
  const [list, setList] = useState(false);
  const [setting, setSetting] = useState(false);
  const [color, setColor] = useState(false);

  const Home = () => {
    setHome(true);
    setTarget(false);
    setList(false);
    setSetting(false);
  };
  const Target = () => {
    setTarget(true);
    setHome(false);
    setList(false);
    setSetting(false);
  };
  const List = () => {
    setList(true);
    setHome(false);
    setTarget(false);
    setSetting(false);
  };
  const Settings = () => {
    setSetting(true);
    setHome(false);
    setTarget(false);
    setList(false);
  };
  return (
    <View style={styles.main}>
      <View style={styles.home}>
        <TouchableOpacity onPress={() => Home()}>
          <Feather name="home" size={30} color="rgb(54,69,79)" />
        </TouchableOpacity>
        {home ? <Text>HOME</Text> : null}
      </View>
      <View style={styles.target}>
        <TouchableOpacity onPress={() => Target()}>
          <Feather name="target" size={30} color="rgb(54,69,79)" />
        </TouchableOpacity>
        {target ? <Text>TARGET</Text> : null}
      </View>
      <View style={styles.target}>
        <TouchableOpacity onPress={() => List()}>
          <Feather name="list" size={30} color="rgb(54,69,79)" />
        </TouchableOpacity>
        {list ? <Text>LIST</Text> : null}
      </View>

      <View style={styles.target}>
        <TouchableOpacity onPress={() => Settings()}>
          <Feather
            name="settings"
            size={30}
            color="rgb(54,69,79)"
            alignItems="center"
          />
        </TouchableOpacity>
        {setting ? <Text>SETTING</Text> : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    backgroundColor: "lightgreen",
    justifyContent: "space-between",
    alignItems: "center",
  },
  home: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  target: {
    flex: 1,
    padding: 10,
    borderLeftWidth: 0.5,
    borderLeftColor: "blue",
    alignItems: "center",
  },
});
export default Footer;

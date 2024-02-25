import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Group from "./Group";
import { Color } from "../GlobalStyles";

const Committteeheadpage = () => {
  return (
    <View style={styles.committteeheadpage}>
      <Group />
    </View>
  );
};

const styles = StyleSheet.create({
  committteeheadpage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Committteeheadpage;

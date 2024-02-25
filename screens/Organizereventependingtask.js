import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Organizeeventependingtask = () => {
  return (
    <View style={styles.organizeeventependingtask}>
      <Text style={styles.pendingTasks}>Pending tasks</Text>
      <View style={styles.organizeeventependingtaskChild} />
      <View
        style={[
          styles.organizeeventependingtaskItem,
          styles.organizeeventependingtaskShadowBox,
        ]}
      />
      <View
        style={[
          styles.organizeeventependingtaskInner,
          styles.organizeeventependingtaskShadowBox,
        ]}
      />
      <Image
        style={styles.tasksIcon}
        contentFit="cover"
        source={require("../assets/Tasks.png")}
      />
      <Text style={[styles.taskNameDue, styles.taskTypo]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.taskNameDue1, styles.taskTypo]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  organizeeventependingtaskShadowBox: {
    height: 173,
    width: 256,
    backgroundColor: Color.colorDarkslateblue_400,
    left: 65,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  taskTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  pendingTasks: {
    top: 45,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 274,
    height: 54,
    textAlign: "left",
    color: Color.colorWhite,
    left: 29,
    position: "absolute",
  },
  organizeeventependingtaskChild: {
    top: 140,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite,
    width: 335,
    height: 608,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 29,
    position: "absolute",
  },
  organizeeventependingtaskItem: {
    top: 193,
  },
  organizeeventependingtaskInner: {
    top: 388,
  },
  tasksIcon: {
    top: 34,
    left: 282,
    width: 77,
    height: 75,
    position: "absolute",
  },
  taskNameDue: {
    top: 206,
    left: 94,
  },
  taskNameDue1: {
    top: 403,
    left: 105,
  },
  organizeeventependingtask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Organizeeventependingtask;

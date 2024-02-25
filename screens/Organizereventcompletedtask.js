import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Organizereventcompletedtask = () => {
  return (
    <View style={styles.organizereventcompletedtask}>
      <Text style={styles.completedTasks}>Completed tasks</Text>
      <View style={styles.organizereventcompletedtaskChild} />
      <View
        style={[
          styles.organizereventcompletedtaskItem,
          styles.organizereventcompletedtaskShadowBox,
        ]}
      />
      <View
        style={[
          styles.organizereventcompletedtaskInner,
          styles.organizereventcompletedtaskShadowBox,
        ]}
      />
      <Text style={[styles.taskNameDue, styles.taskTypo]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.uploadedDocs, styles.uploadedTypo]}>
        Uploaded docs
      </Text>
      <Image
        style={[styles.documentsIcon, styles.documentsIconLayout]}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
      <Text style={[styles.taskNameDue1, styles.taskTypo]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.uploadedDocs1, styles.uploadedTypo]}>
        Uploaded docs
      </Text>
      <Image
        style={[styles.documentsIcon1, styles.documentsIconLayout]}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
      <Image
        style={styles.okIcon}
        contentFit="cover"
        source={require("../assets/Ok.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  organizereventcompletedtaskShadowBox: {
    height: 233,
    width: 292,
    backgroundColor: Color.colorDarkslateblue_400,
    left: 51,
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
    left: 66,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  uploadedTypo: {
    height: 48,
    width: 185,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 66,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  documentsIconLayout: {
    height: 59,
    width: 76,
    left: 251,
    position: "absolute",
  },
  completedTasks: {
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
  organizereventcompletedtaskChild: {
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
  organizereventcompletedtaskItem: {
    top: 465,
  },
  organizereventcompletedtaskInner: {
    top: 193,
  },
  taskNameDue: {
    top: 208,
  },
  uploadedDocs: {
    top: 359,
  },
  documentsIcon: {
    top: 342,
  },
  taskNameDue1: {
    top: 495,
  },
  uploadedDocs1: {
    top: 646,
  },
  documentsIcon1: {
    top: 629,
  },
  okIcon: {
    top: 32,
    left: 283,
    width: 81,
    height: 67,
    position: "absolute",
  },
  organizereventcompletedtask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Organizereventcompletedtask;

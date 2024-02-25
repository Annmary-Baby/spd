import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Organizereventmeberslist = () => {
  return (
    <View style={styles.organizereventmeberslist}>
      <Text style={styles.committeeMembers}>Committee members</Text>
      <View
        style={[
          styles.organizereventmeberslistChild,
          styles.organizereventmeberslistShadowBox,
        ]}
      />
      <Image
        style={styles.peopleIcon}
        contentFit="cover"
        source={require("../assets/People.png")}
      />
      <Image
        style={[styles.maleUserIcon, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text style={[styles.eventHeadCourse, styles.eventTypo]}>{`Event Head:
Course name:
 Phone no:


`}</Text>
      <View
        style={[
          styles.organizereventmeberslistItem,
          styles.organizereventmeberslistShadowBox,
        ]}
      />
      <View
        style={[
          styles.organizereventmeberslistInner,
          styles.organizereventmeberslistShadowBox,
        ]}
      />
      <Image
        style={[styles.maleUserIcon1, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text style={[styles.eventMemberCourse, styles.eventTypo]}>{`Event member:
Course name:
 Phone no:


`}</Text>
      <Image
        style={[styles.maleUserIcon2, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text
        style={[styles.eventMemberCourse1, styles.eventTypo]}
      >{`Event member:
Course name:
 Phone no:


`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  organizereventmeberslistShadowBox: {
    height: 140,
    width: 335,
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
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xl,
    left: 29,
    position: "absolute",
  },
  maleIconLayout: {
    height: 90,
    width: 90,
    left: 41,
    position: "absolute",
  },
  eventTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 146,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  committeeMembers: {
    top: 45,
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorWhite,
    width: 274,
    height: 54,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    left: 29,
    position: "absolute",
  },
  organizereventmeberslistChild: {
    top: 140,
  },
  peopleIcon: {
    top: 21,
    left: 287,
    width: 67,
    height: 94,
    position: "absolute",
  },
  maleUserIcon: {
    top: 159,
  },
  eventHeadCourse: {
    top: 168,
  },
  organizereventmeberslistItem: {
    top: 305,
  },
  organizereventmeberslistInner: {
    top: 470,
  },
  maleUserIcon1: {
    top: 489,
  },
  eventMemberCourse: {
    top: 498,
  },
  maleUserIcon2: {
    top: 324,
  },
  eventMemberCourse1: {
    top: 333,
  },
  organizereventmeberslist: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Organizereventmeberslist;

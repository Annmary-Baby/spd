import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Eventheadceventmeberdetails = () => {
  return (
    <View style={styles.eventheadceventmeberdetails}>
      <Text style={styles.eventMembers}>Event members</Text>
      <View
        style={[
          styles.eventheadceventmeberdetailsChild,
          styles.eventheadceventmeberdetailsShadowBox,
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
      <Text style={[styles.eventheadCourseName, styles.eventTypo]}>{`EventHead:
Course name:
 Phone no:


`}</Text>
      <View
        style={[
          styles.eventheadceventmeberdetailsItem,
          styles.eventheadceventmeberdetailsShadowBox,
        ]}
      />
      <View
        style={[
          styles.eventheadceventmeberdetailsInner,
          styles.eventheadceventmeberdetailsShadowBox,
        ]}
      />
      <Image
        style={[styles.maleUserIcon1, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text style={[styles.eventMemberCourse, styles.eventTypo]}>{`Event member
Course name:
 Phone no:


`}</Text>
      <Image
        style={[styles.maleUserIcon2, styles.maleUserIcon2Position]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text
        style={[styles.eventMemberCourse1, styles.maleUserIcon2Position]}
      >{`Event member
Course name:
 Phone no:


`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventheadceventmeberdetailsShadowBox: {
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
  },
  eventTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 133,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  maleUserIcon2Position: {
    top: 324,
    position: "absolute",
  },
  eventMembers: {
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
  eventheadceventmeberdetailsChild: {
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
    position: "absolute",
  },
  eventheadCourseName: {
    top: 159,
    position: "absolute",
  },
  eventheadceventmeberdetailsItem: {
    top: 305,
  },
  eventheadceventmeberdetailsInner: {
    top: 470,
  },
  maleUserIcon1: {
    top: 489,
    position: "absolute",
  },
  eventMemberCourse: {
    top: 498,
    position: "absolute",
  },
  maleUserIcon2: {
    height: 90,
    width: 90,
    left: 41,
  },
  eventMemberCourse1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 133,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  eventheadceventmeberdetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Eventheadceventmeberdetails;

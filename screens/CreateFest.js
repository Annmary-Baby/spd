import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const CreateFest = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.createFest}>
      <Text style={styles.goodMorning}>Good Morning</Text>
      <View style={[styles.createFestChild, styles.createShadowBox]} />
      <View style={styles.createFestItem} />
      <Text style={[styles.daysLeft, styles.daysTypo]}>11 Days left</Text>
      <Text style={[styles.interfaces, styles.gatewaysTypo]}>Interfaces</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('FestDetails')}}>
        <Image
        style={[styles.calendarIcon, styles.calendarIconLayout]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.startDate20012024, styles.startTypo]}>
        Start Date: 20-01-2024
      </Text>
      <Text style={[styles.daysLeft1, styles.daysTypo]}>1 Days left</Text>
      <Text style={[styles.gateways, styles.gatewaysTypo]}>GATEWAYS</Text>
      <Image
        style={[styles.calendarIcon1, styles.calendarIconLayout]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Text style={[styles.startDate200120241, styles.startTypo]}>
        Start Date: 20-01-2024
      </Text>
      <Text style={styles.wannaCreateA}>
        Wanna Create a New Fest ,Click Here...
      </Text>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <View style={[styles.createFestInner, styles.createShadowBox]} />
      <TouchableOpacity onPress={()=>{navigation.navigate('CreateFestForm')}}>
        <Image
        style={styles.duplicateIcon}
        contentFit="cover"
        source={require("../assets/Duplicate.png")}
      />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  createShadowBox: {
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
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  daysTypo: {
    height: 47,
    width: 120,
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_5xl,
    left: 95,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    position: "absolute",
  },
  gatewaysTypo: {
    height: 28,
    width: 72,
    fontSize: FontSize.size_sm,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.itimRegular,
    left: 95,
    textAlign: "left",
    position: "absolute",
  },
  calendarIconLayout: {
    width: 87,
    height: 130,
    position: "absolute",
  },
  startTypo: {
    width: 146,
    height: 28,
    fontSize: FontSize.size_sm,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    position: "absolute",
  },
  goodMorning: {
    top: 34,
    left: 25,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 267,
    height: 43,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  createFestChild: {
    top: 159,
    width: 290,
    height: 111,
    left: 36,
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
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_6xl,
  },
  createFestItem: {
    top: 310,
    width: 287,
    height: 130,
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
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_6xl,
    left: 36,
    position: "absolute",
  },
  daysLeft: {
    top: 352,
  },
  interfaces: {
    top: 339,
  },
  calendarIcon: {
    top: 302,
    left: 214,
  },
  startDate20012024: {
    top: 387,
    left: 61,
  },
  daysLeft1: {
    top: 203,
  },
  gateways: {
    top: 188,
  },
  calendarIcon1: {
    top: 135,
    left: 215,
  },
  startDate200120241: {
    top: 237,
    left: 63,
  },
  wannaCreateA: {
    top: 587,
    left: 11,
    fontSize: FontSize.size_xl,
    width: 343,
    height: 65,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  maleUserIcon: {
    top: 10,
    left: 264,
    width: 90,
    height: 90,
    position: "absolute",
  },
  createFestInner: {
    top: 507,
    left: 138,
    width: 69,
    height: 50,
  },
  duplicateIcon: {
    top: 517,
    left: 144,
    width: 56,
    height: 40,
    position: "absolute",
  },
  createFest: {
    backgroundColor: Color.colorDarkslateblue_300,
    flex: 1,
    width: "100%",
    height: 879,
    overflow: "hidden",
  },
});

export default CreateFest;

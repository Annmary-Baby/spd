import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Addcommitteform = () => {

  return (
    <View style={styles.addcommitteform}>
      <View style={styles.addcommitteformChild} />
      <View
        style={[styles.addcommitteformItem, styles.addcommitteformShadowBox1]}
      />
      <View
        style={[styles.addcommitteformInner, styles.rectangleChildLayout]}
      />
      <View style={[styles.rectangleView, styles.rectangleChildLayout]} />
      <View
        style={[styles.addcommitteformChild1, styles.rectangleChildLayout]}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleChildLayout]}
        contentFit="cover"
        source={require("../assets/Rectangle 3.png")}
      />
      <Image
        style={[styles.addcommitteformChild2, styles.rectangleChildLayout]}
        contentFit="cover"
        source={require("../assets/Rectangle 3.png")}
      />
      <View
        style={[styles.addcommitteformChild3, styles.rectangleChildLayout]}
      />
      <Text style={styles.createCommitttee}>Create Committtee</Text>
      <Text style={[styles.committeeHead, styles.emailTypo]}>
        Committee Head:
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email:</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password:</Text>
      <View
        style={[
          styles.addcommitteformChild4,
          styles.addcommitteformChildShadowBox,
        ]}
      />
      <View
        style={[
          styles.addcommitteformChild5,
          styles.addcommitteformChildShadowBox,
        ]}
      />
      <Text style={[styles.submit, styles.submitLayout]}>Submit</Text>
      <Text style={[styles.generateCode, styles.submitLayout]}>
        Generate code
      </Text>
      <Text style={[styles.courseName, styles.phoneNoTypo]}>Course Name:</Text>
      <Text style={[styles.phoneNo, styles.phoneNoTypo]}>phone no:</Text>
      <Text style={styles.committeeName}>Committee Name:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addcommitteformShadowBox1: {
    backgroundColor: Color.colorDarkslateblue_400,
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
  },
  rectangleChildLayout: {
    height: 56,
    width: 306,
    left: 45,
    position: "absolute",
  },
  emailTypo: {
    height: 36,
    width: 288,
    left: 63,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  addcommitteformChildShadowBox: {
    height: 100,
    top: 628,
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
    borderRadius: Border.br_6xl,
    position: "absolute",
    backgroundColor: Color.colorDarkslateblue_200,
  },
  submitLayout: {
    height: 42,
    width: 95,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  phoneNoTypo: {
    height: 43,
    width: 271,
    left: 58,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  addcommitteformChild: {
    top: 45,
    left: 21,
    backgroundColor: Color.colorWhite,
    width: 351,
    height: 762,
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
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  addcommitteformItem: {
    top: 80,
    left: 71,
    width: 243,
    height: 59,
    borderRadius: Border.br_6xl,
    position: "absolute",
    backgroundColor: Color.colorDarkslateblue_400,
  },
  addcommitteformInner: {
    top: 385,
    borderRadius: Border.br_11xs,
    width: 306,
    backgroundColor: Color.colorDarkslateblue_400,
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
  },
  rectangleView: {
    top: 455,
    borderRadius: Border.br_11xs,
    width: 306,
    backgroundColor: Color.colorDarkslateblue_400,
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
  },
  addcommitteformChild1: {
    top: 530,
    borderRadius: Border.br_11xs,
    width: 306,
    backgroundColor: Color.colorDarkslateblue_400,
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
  },
  rectangleIcon: {
    top: 175,
  },
  addcommitteformChild2: {
    top: 245,
  },
  addcommitteformChild3: {
    top: 315,
    backgroundColor: Color.colorDarkslateblue_400,
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
  },
  createCommitttee: {
    top: 98,
    left: 82,
    width: 212,
    height: 30,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  committeeHead: {
    top: 260,
  },
  email: {
    top: 325,
  },
  password: {
    top: 401,
  },
  addcommitteformChild4: {
    width: 126,
    left: 45,
    height: 100,
    top: 628,
  },
  addcommitteformChild5: {
    left: 208,
    width: 143,
  },
  submit: {
    top: 666,
    left: 54,
    fontSize: FontSize.size_5xl,
    height: 42,
    width: 95,
  },
  generateCode: {
    top: 659,
    left: 238,
    fontSize: FontSize.size_xl,
  },
  courseName: {
    top: 472,
  },
  phoneNo: {
    top: 545,
  },
  committeeName: {
    top: 192,
    left: 58,
    height: 42,
    width: 288,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  addcommitteform: {
    width: 393,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslateblue_200,
  },
});

export default Addcommitteform;

import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AddEvent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.addevent}>
      <Text style={styles.eventsConnect}>Events Connect</Text>
      <View style={[styles.addeventChild, styles.addeventShadowBox]} />
      <View style={[styles.addeventItem, styles.addeventShadowBox]} />
      <Text
        style={[styles.debuggingCommitteeHead, styles.itManagerEventTypo]}
      >{`
Debugging
Committee Head
`}</Text>
      <Text style={[styles.itManagerEvent, styles.itManagerEventTypo]}>{`
IT Manager
Event Head
`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('EventDetails')}}>
  <Image
        style={[styles.businessmanIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Businessman.png")}
      />
</TouchableOpacity>
      
      <Image
        style={[styles.smartphoneBugIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Smartphone Bug.png")}
      />
      <Image
        style={[styles.maleUserIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <View style={styles.addeventInner} />
      <TouchableOpacity onPress={()=>{navigation.navigate('Addeventform')}}>
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
  addeventShadowBox: {
    height: 130,
    width: 287,
    left: 41,
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
  itManagerEventTypo: {
    height: 110,
    width: 234,
    fontSize: FontSize.size_5xl,
    left: 61,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  iconLayout: {
    height: 90,
    width: 90,
    position: "absolute",
  },
  eventsConnect: {
    top: 39,
    left: 20,
    fontSize: FontSize.size_21xl,
    width: 396,
    height: 45,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  addeventChild: {
    top: 148,
  },
  addeventItem: {
    top: 296,
  },
  debuggingCommitteeHead: {
    top: 304,
  },
  itManagerEvent: {
    top: 156,
  },
  businessmanIcon: {
    top: 166,
    left: 238,
  },
  smartphoneBugIcon: {
    top: 310,
    left: 230,
  },
  maleUserIcon: {
    top: 18,
    left: 303,
  },
  addeventInner: {
    top: 554,
    left: 150,
    width: 69,
    height: 50,
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
  duplicateIcon: {
    top: 564,
    left: 156,
    width: 56,
    height: 40,
    position: "absolute",
  },
  addevent: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AddEvent;

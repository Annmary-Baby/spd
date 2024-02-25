import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
// import Tasks from "./Tasks";
// import People from "./People";
// import Ok from "./Ok";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const EventDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.eventDetails}>
      <Text style={[styles.itManager, styles.itManagerTypo]}>IT Manager</Text>
      <Text style={[styles.monitorProgress, styles.itManagerTypo]}>
        Monitor Progress
      </Text>
      <Image
        style={styles.loadingBarIcon}
        contentFit="cover"
        source={require("../assets/Loading Bar.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizereventeaddtask')}}>
<Image
        style={styles.tasklistIcon}
        contentFit="cover"
        source={require("../assets/Tasklist.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizereventcompletedtask')}}>
<Image
        style={styles.tasklistIcon1}
        contentFit="cover"
        source={require("../assets/Ok.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizeeventependingtask')}}>
<Image
        style={styles.tasklistIcon2}
        contentFit="cover"
        source={require("../assets/Tasks.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizereventmeberslist')}}>
<Image
        style={styles.tasklistIcon3}
        contentFit="cover"
        source={require("../assets/People.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.assignTask, styles.tasksLayout]}>Assign Task</Text>
      
      <Text style={[styles.pendingTasks, styles.tasksLayout]}>
        Pending Tasks
      </Text>
      
      <Text style={[styles.committeeMembers, styles.tasksLayout]}>
        Committee members
      </Text>
     
      <Text style={[styles.completedTasks, styles.tasksLayout]}>
        completed Tasks
      </Text>
      <Image
        style={[styles.calendarIcon, styles.calendarIconPosition]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Text
        style={[styles.feb2024Sunday, styles.calendarIconPosition]}
      >{`28   FEB 
 2024
Sunday`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('Organizereventnotification')}}>
  <Image
        style={styles.unreadMessagesIcon}
        contentFit="cover"
        source={require("../assets/Unread messages.png")}
      />
</TouchableOpacity>
      
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itManagerTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
  },
  tasksLayout: {
    height: 54,
    width: 274,
    left: 103,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  calendarIconPosition: {
    top: 184,
    position: "absolute",
  },
  itManager: {
    top: 55,
    fontSize: FontSize.size_17xl,
    width: 294,
    left: 20,
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  monitorProgress: {
    top: 332,
    left: 86,
    width: 267,
    height: 26,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  loadingBarIcon: {
    top: 359,
    left: 58,
    width: 226,
    height: 63,
    position: "absolute",
  },
  tasklistIcon: {
    top: 459,
    left: 0,
    width: 86,
    height: 71,
    position: "absolute",
  },
  tasklistIcon1:{
    top: 559,
    left: 0,
    width: 86,
    height: 71,
    position: "absolute",
  },
  tasklistIcon2:{
    top: 659,
    left: 0,
    width: 86,
    height: 71,
    position: "absolute",
  },
  tasklistIcon3:{
    top: 759,
    left: 0,
    width: 86,
    height: 71,
    position: "absolute",
  },
  assignTask: {
    top: 476,
    fontSize: FontSize.size_13xl,
  },
  pendingTasks: {
    top: 686,
    fontSize: FontSize.size_13xl,
  },
  committeeMembers: {
    top: 786,
    fontSize: FontSize.size_13xl,
  },
  completedTasks: {
    top: 586,
    fontSize: FontSize.size_13xl,
  },
  calendarIcon: {
    left: 134,
    width: 124,
    height: 109,
  },
  feb2024Sunday: {
    width: 321,
    height: 161,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    left: 20,
  },
  unreadMessagesIcon: {
    top: 139,
    left: 314,
    width: 74,
    height: 49,
    position: "absolute",
  },
  maleUserIcon: {
    top: 35,
    left: 269,
    width: 90,
    height: 90,
    position: "absolute",
  },
  eventDetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default EventDetails;

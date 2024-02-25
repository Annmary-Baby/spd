import * as React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import {firebase} from '../firebaseConfig'
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AdminLogin = () => {
    const [registrationData, setRegistrationData] = React.useState({
        username: "",
        password: "",
      });
      
  
const handleInputChange = (name, value) => {
    setRegistrationData({
      ...registrationData,
      [name]: value
    });
  };

  const Register = firebase.firestore().collection('loginData');
  
  
  const handleLogin = async() => {
    // Implement your login logic here
    await Register.add(registrationData).then(()=>{
        console.log('Data added successfully');
        setRegistrationData({
          username: '',
          password: '',
      });
      console.log('Data added successfully--------');
        Keyboard.dismiss();
      }).catch((error) => {
          // Handle errors
          console.log("nnnnnnnnnn",error)
          Alert.alert("Login Failed", error.message);
        });
    
  };

  return (
    <View style={styles.adminlogin}>
      <View style={[styles.adminloginChild, styles.rectangleViewShadowBox]}>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.usernameInput]}
          placeholder="Username"
          value={registrationData.username}
          onChangeText={(text) => handleInputChange('username', text)}
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Password"
          secureTextEntry
          value={registrationData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        </View>
        <TouchableOpacity style={[styles.loginButton, styles.rectangleViewShadowBox]} onPress={handleLogin}>
          <Text style={styles.loginButtonText} onPress={handleLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
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
    paddingTop:100
  },
  adminloginPosition: {
    width: 221,
    left: 90,
    position: "absolute",
  },
  loginTypo: {
    height: 75,
    color: Color.colorWhite,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  adminloginChild: {
    top: 171,
    left: 76,
    backgroundColor: Color.colorWhite,
    width: 248,
    height: 412,
  },
  organizer: {
    top: 243,
    left: 129,
    fontSize: FontSize.size_13xl,
    color: "#100f0f",
    width: 150,
    height: 46,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  adminloginItem: {
    height: 56,
    top: 328,
    width: 221,
    left: 90,
  },
  adminloginInner: {
    height: 49,
    top: 395,
  },
  rectangleView: {
    left: 124,
    backgroundColor: Color.colorDarkslateblue_400,
    width: 155,
    height: 48,
    top: 492,
  },
  field:{
backgroundColor:"#000080",
margin:10
  },
  username: {
    left: 111,
    height: 43,
    width: 193,
    color: Color.colorWhite,
    fontSize: FontSize.size_17xl,
    top: 328,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  password: {
    left: 104,
    width: 193,
    top: 395,
  },
  login: {
    left: 158,
    width: 252,
    top: 492,
  },
  adminlogin: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  inputField: {
    height: 40,
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  usernameInput: {
    top: 8,
    color:Color.colorWhite,
  },
  passwordInput: {
    top: 8,
    color:Color.colorWhite,
  },
  loginButton: {
    backgroundColor: Color.colorDarkslateblue_400,
    width: 155,
    height: 48,
    top: 492,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.itimRegular,
  },
});

export default AdminLogin;

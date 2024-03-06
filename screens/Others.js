import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Others = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = React.useState("Committteeheadpage");

  const handleDropdownChange = (itemValue) => {
    console.log("hqqqqqq")
    setSelectedOption(itemValue);
  };

  const handleLoginPress = () => {
    console.log("Committteeheadpage")
    // Perform navigation based on the selected option
    if (selectedOption === 'Committeeheadpage') {
      console.log("Committteeheadpage")
      navigation.navigate('Committeeheadpage');
    } else if (selectedOption === 'Eventtheadpage') {
      navigation.navigate('Eventtheadpage');
    } else if (selectedOption === 'Committeememberspage') {
      navigation.navigate('Committeememberspage');
    } else if (selectedOption === 'Eventmemberspage') {
      navigation.navigate('Eventmemberspage');
    } else if (selectedOption === 'login') {
      console.log("login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.field}>
          <TextInput
            style={styles.inputField}
            placeholder="Username"
            placeholderTextColor="#c9c9c9"
          />
        </View>

        <View style={styles.field}>
          <TextInput
            style={styles.inputField}
            placeholder="Password"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
          />
        </View>

        <View style={styles.field}>
          <Picker
            selectedValue={selectedOption}
            style={styles.dropdownInput}
            onValueChange={(itemValue) => handleDropdownChange(itemValue)}
          >
            <Picker.Item label="Committee Head" value="Committeeheadpage" />
            <Picker.Item label="Event Head" value="Eventtheadpage" />
            <Picker.Item label="Committee Member" value="Committeememberspage" />
            <Picker.Item label="Event Member" value="Eventmemberspage" />
          </Picker>
        </View>

        <View style={styles.field}>
          <TextInput
            style={styles.inputField}
            placeholder="User Code"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
            <Button onPress={handleLoginPress} title="LOGIN" color="#000080" />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorDarkslateblue_200,
    padding: 16,
  },
  formContainer: {
    top:150,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xl,
    padding: 16,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  title: {
    fontSize: FontSize.size_17xl,
    fontWeight: "bold",
   left:120,
    marginBottom: 16,
  },
  field: {
    backgroundColor: "#000080",
    height:60,
    marginVertical: 10,
  },
  inputField: {
    height: 40,
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    color: Color.colorWhite,
  },
  dropdownInput: {
    backgroundColor: "#000080",
    borderRadius: Border.br_6xl,
    color: Color.colorWhite,
  },
  buttonContainer: {
    justifyContent: "center",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default Others;

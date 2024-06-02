import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//here i will be using 'useNavigation hook' to go back to home screen
const AboutScreen = ({ route,  }) => {
  const navigation =useNavigation();
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Text style={styles.data}>Data Received: {name}</Text>
      {/*
      navigation.setParams is used to update the value of passed prop
      */}
      <Button
        title="change name"
        onPress={() =>
          navigation.setParams({
            name: "Umar",
          })
        }
      />
      <Button
        title="Go Back With Message"
        onPress={() =>
          navigation.navigate("Home", { result: "Hi! From About" })
        }
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
   // backgroundColor: "teal",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  data: {
    fontSize: 20,
    color: "white",
    paddingVertical: 10,
  },
});

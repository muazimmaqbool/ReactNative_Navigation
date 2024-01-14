import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//here i will be using 'useNavigation hook' to go back to home screen
const AboutScreen = ({ route, navigation }) => {
  // const navigation =useNavigation();
  //if useNavigation hook is not used and we want to update props data, then you must use navigation via props
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      {/* <Button title='Go To Home' onPress={()=>navigation.navigate("Home")}/> */}
      <Text style={styles.data}>Data Received: {name}</Text>
      <Button
        title="change name"
        onPress={() =>
          navigation.setParams({
            name: "Umar",
          })
        }
      />
      <Button
        title="Go Back With Data"
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

//this component is used to explain dynamic stack Nav options
import { Button, StyleSheet, Text, View } from "react-native";
import React,{useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";
//here i will be using 'useNavigation hook' to go back to home screen
const Contact = ({ route }) => {
  const navigation =useNavigation();
  const { titleText } = route.params;

  useLayoutEffect(()=>{
    navigation.setOptions({
        title:titleText
    })
  },[navigation,titleText])
  /* 
  we can also use: "useEffect" in place of "useLayoutEffect" but it might show title bit late so
  better to use "useLayoutEffect"
  */
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Screen</Text>
      <Button
        title="Go To Home"
        onPress={() =>
          navigation.navigate("Home")
        }
      />
    </View>
  );
};
/*
Note:
  The useLayoutEffect hook is similar to the useEffect theme
  
  in that it fires synchronously once all 
  DOM loading is completed, rather than asynchronous like the useEffect hook.
  This can be used to re-render the DOM and read its layout concurrently
*/

export default Contact;

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

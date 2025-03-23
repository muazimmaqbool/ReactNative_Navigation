import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

/*
Opening/toggling the drawer using a button
*/

const DashBoardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashBoard Screen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button
        title="Go To Settings"
        onPress={() => navigation.jumpTo("Settings")}
      />
    </View>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

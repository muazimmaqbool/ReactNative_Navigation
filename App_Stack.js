/*
 To work with react navigation properly we need to a wrapping component for the whole app
 i.e the navigation container component
 go back to docs:https://reactnavigation.org/docs/getting-started/
 and go to: Wrapping your app in NavigationContainer and copy the code below this heading and paste it here
 in app.js
 */
//! Rename its name back to App.js to make it work

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
//imported for using Navtive stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/Screens/1_For Stack Navigation/HomeScreen";
import AboutScreen from "./Components/Screens/1_For Stack Navigation/AboutScreen";
import { Pressable, Text } from "react-native";
import Contact from "./Components/Screens/1_For Stack Navigation/Contact";

//making  native stack navigator instance
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "teal" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu Button Pressed")}>
              <Text style={{ color: "black", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "skyblue",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "Guest" }}
          options={{
            headerTitleAlign: "center",
          }}
        />
        {/*used to explain dynamic stack nav options */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          initialParams={{ name: "Guest" }}
          //dynamic change of title uusing options 
          // options={({ route }) => ({
             //passed from HomeScreen
          //   title: route.params.titleText,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
?without using 'initiaRouteName'
 <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/> //! this will be the initial screen as its on top
      <Stack.Screen name="About" component={AboutScreen}/>
  </Stack.Navigator>

?Using 'initialRouteName'
<Stack.Navigator initialRouteName="About">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="About" component={AboutScreen}/> //? now this will be the initial screen as its mentioned in initialRouteName
  </Stack.Navigator>
 */

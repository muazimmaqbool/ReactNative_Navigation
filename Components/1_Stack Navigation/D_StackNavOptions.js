import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
lec: 76
Lets explore the options that the stack navigation supports:
like : screen title, styling headers, content styles

Note: by default header title position is ios is middle and in android is in left

->Title: by default the name prop on the screen is shown as screen title and to customize it specify
         the title option in APP.js
         example: <Stack.Screen name="Home" component={HomeScreen} options={{title:"Welcome Home"}}/> 

-> Styling Headers: like changing font size, background color etc:
        in options add another key headerStyle which is also an object:
        Example:<Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "teal", },
            headerTintColor:"white",
            headerTitleStyle:{fontWeight:"bold"},
          }}
        />
        Also we have headerRight and headerLeft to add content/component on the left and right side of the header text
            <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "teal" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu Button Pressed")}>
                <Text style={{ color: "black", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
          }}
        />
        headerLeft works in same way

-> Styling Content of the screens: using contentStyle Option
exmaple: <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "teal" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu Button Pressed")}>
                <Text style={{ color: "black", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle:{
              backgroundColor:"skyblue",
            }
          }}
        /> 
        
->Note to add styling for all the screen just App screenOptions in <Stack.Navigator> and past all styling their
          but title remains screen level prop
          example:
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


*/


const D_StackNavOptions = () => {
  return (
    <View>
      <Text>D_StackNavOptions</Text>
    </View>
  )
}

export default D_StackNavOptions

const styles = StyleSheet.create({})
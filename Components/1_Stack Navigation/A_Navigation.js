import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/*
Navigation: The mechanism that allows users to move across different screens, access features, and generally use your app effectively.


->A go-to solution for handling navigation is the React Navigation Library
->Expo had its own built-in routing features exlusive for Expo Projects
->Note: React Navigation works both with and without Expo in React Native apps
->We will focus more on React Navigation

->React Navigation: 
    It provides a variety of navigation like Stack, Drawer and Tab navigators.

    1) Stack navigation: provides a way for your app to transition between different screens where each new screen is placed on top of a stack.
    2) Drawer navigation: renders a navigation drawer on the side of the screen which can be opened and closed via gestures.
    3) Tab navigation: a tab navigator at the bottom of the screen lets you easily switch between different routes/screens.

->first install react navigation dependency: npm install @react-navigation/native
 and then also install two more dependencies: npx expo install react-native-screens react-native-safe-area-context
-> visit: https://reactnavigation.org/docs/getting-started/ for more info

->Wrapping your app in NavigationContainer see in App.js/APP_STACKNAV.js
*/

const A_Navigation = () => {
  return (
    <View>
      <Text>A_Navigation</Text>
    </View>
  )
}

export default A_Navigation

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/*
Drawer Navigation:
    -Unlike stack navigator which stacks screens one over the other
    -The Drawer Navigator: introduces a hidden menu sliding from either side of the screen
    -It is particularly beneficial in apps with multiple main sections that require a neat and organized
     navigation structure.

    Drawer navigation docs: https://reactnavigation.org/docs/drawer-navigator
    install drawer package: npm install @react-navigation/drawer
    after installation you need to install the libraries that are required for the drawer navigator
    i.e: npx expo install react-native-gesture-handler react-native-reanimated
    and also add this line: plugins:["react-native-reanimated/plugin"], in babel.config.js file after presets
        (visit: https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)
    ->Also make sure to clear cashe before running the app, lets add this -c in package.json to start the script
    Now see code in App_Drawer.js (rename its name to App.js before working with the drawer navigator)


    Important: 
    ->we can open the drawer programatically using a button (see inside DashBoardScreen.js) using toggleDrawer() on navigation
      example: "navigation" as prop then - <Button title='Toggle drawer' onPress={()=>navigation.toggleDrawer()}/>
    ->We can also use jumpTo method on navigation prop to navigate programatically without using drawer UI
        example: 
*/
const A_DrawerNav = () => {
  return (
    <View>
      <Text>A_DrawerNav</Text>
    </View>
  )
}

export default A_DrawerNav

const styles = StyleSheet.create({})
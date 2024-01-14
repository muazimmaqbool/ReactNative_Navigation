import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
lec:79 
Lets see some of the options of drawer navigation to customize its appearance
    options prop is used on the : Drawer.Screen see in App.js(App_Drawer.js)

    options:{{
        title:"header text" { gets rendered as header title as well as the drawer label}
        {if you want different drawer label then use drawerLabel} 
        drawerLabel:"some text",
         drawerActiveTintColor:"white", //changes the text color of active drawer
        drawerActiveBackgroundColor:"teal", //changes the background color of active drawer
        drawerContentStyle:{
            backgroundColor:"skyblue", //changes the bgcolor of entire drawer
        }
    }}
    see more options on docs, but the above ones are very helfull and mostly used

    this will effect only on current Drawer.Screen if you want to apply for all screens
    use screenOptions in Drawer.navigator but tile is specific for the drawer.screen

*/

const B_DrawerNavOptions = () => {
  return (
    <View>
      <Text>B_DrawerNavOptions</Text>
    </View>
  )
}

export default B_DrawerNavOptions

const styles = StyleSheet.create({})
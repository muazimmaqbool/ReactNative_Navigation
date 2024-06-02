import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Contact</Text>
      <Button title='Home Drawer' onPress={()=>navigation.jumpTo("Dashboard")}/>
      <Button title='Go To Settings' onPress={()=>navigation.jumpTo("Settings")}/>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    gap:10,
  },
  text:{
    fontSize:25,
    fontWeight:"bold",
    marginBottom:16
  }
})
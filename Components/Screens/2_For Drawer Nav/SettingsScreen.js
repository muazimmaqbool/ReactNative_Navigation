import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Button title='Back To Dashboard' onPress={()=>navigation.jumpTo("dashboard")}/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    text:{
      fontSize:25,
      fontWeight:"bold",
      marginBottom:16
    }
  })
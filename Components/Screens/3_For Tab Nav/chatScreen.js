import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </View>
  )
}

export default ChatScreen

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
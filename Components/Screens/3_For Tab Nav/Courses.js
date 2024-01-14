import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Courses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Courses Screen</Text>
    </View>
  )
}

export default Courses

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
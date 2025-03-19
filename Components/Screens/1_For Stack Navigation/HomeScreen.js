import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

/*
here we will first use navigation prop and use its method navigate to navigate from home to about screen
navigation prop is provided automatically from react navigation
*/
/*
when using useNavigation Hook import useNavigation and then do this const navigation=useNavigation()
delete navigation prop and rest remains the same
*/

/* see how to pass data while navigating in code : C_passingData.js */

const HomeScreen = ({navigation,route}) => {
    //const navigation =useNavigation(); //use use this first remove navigation prop : const HomeScreen = () => {...}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Go To About' onPress={()=>navigation.navigate("About",{name:"Muazim"})}/>
      <Text style={styles.text}>{route.params?.result}</Text>
      {/*used to explain dynamic stack nav options */}
      <Button title='Go To Contact' onPress={()=>navigation.navigate("Contact",{
       titleText:"Hp OMEN",
      })}/> 
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:15,
    }
})
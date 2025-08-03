import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
Lec-75:
Passing Data between screens.
Lets see how to pass data while navigating:
Example: let's pass name paramter from Home to About and render that name value in about screen
->The navigation.navigate("About") is used to go to About screen also accepts second parameter(a route paramter object)
  {this object contains data that you want to pass}

  ->In Sending component: here inside Home.js
    onPress={()=>navigation.navigate("About",{
      name:"Muazim"
    })} 

  Accepting it in About screen
  ->we can access this paramter in any screen by using "route" prop
  ->then within the component destructure name from routes i.e const {name}=routes.params;

  Note: we can also set default paramters value in App.js
  <Stack.Screen name="About" component={AboutScreen} initialParams={{name:"Guest}}/>
  Now, if we remove the data when navigating from home screen Guest is passed/displayed

  ->Updating prop value in received component
    we do it using navigation: receive "navigation" prop, if we are useNavigation hook then do use it in props
    Then: <Button title='change name' onPress={()=>navigation.setParams({
        name:"Umar",
      })}/>

    ->We can send data back to Home screen in the same way
*/

const C_PassingData = () => {
  return (
    <View>
      <Text>C_PassingData</Text>
    </View>
  )
}

export default C_PassingData

const styles = StyleSheet.create({})
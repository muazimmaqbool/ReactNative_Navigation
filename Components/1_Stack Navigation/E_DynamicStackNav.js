import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
lec: 77
Dynamic Stack Navigator Options:
 In previous code we see some of these options provided by stack navigator by setting title , font size,color bg color etc
 but sometimes we want to dynamically set certain options like title
 lets create another screen say Contact and the personalize title with the parameter
 1)On way to dynamically set header title is directly from Stack.Screen component by passing  a function
   to the options prop
   example:
    In HomeScreen:
    <Button title='Go To Contact' onPress={()=>navigation.navigate("Contact",{
       titleText:"Hp OMEN",
      })}/> 
    In App.js
     <Stack.Screen
          name="Contact"
          component={Contact}
          initialParams={{ name: "Guest" }}
          options={({ route }) => ({
            title: route.params.titleText,
          })}
        />
    ? the title of Contact Screen is changed from Home screen while calling it
 2) We alsi use react hook to set dynamic title of the contact screen
 Example:
 const Contact = ({ route,navigation }) => {
//   const navigation =useNavigation();
  const { titleText } = route.params;

  useLayoutEffect(()=>{
    navigation.setOptions({
        title:titleText
    })
  },[navigation,titleText])
  // we can also use: "useEffect" in place of "useLayoutEffect" but it might show title bit late so
  better to use "useLayoutEffect"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Screen</Text>
      <Button
        title="Go To Home"
        onPress={() =>
          navigation.navigate("Home")
        }
      />
    </View>
  );
};

Note:
So when to use 1) over 2)
    use 1) "Stack.Screen options" when the title or navigation options are driven by route paramters are static
    go for 2) "useLayoutEffect" when the title or navigation options depend on the screen components, internal logic
    state or props or when they need to be updated post render
*/

const E_DynamicStackNav = () => {
  return (
    <View>
      <Text>E_DynamicStackNav</Text>
    </View>
  )
}

export default E_DynamicStackNav

const styles = StyleSheet.create({})
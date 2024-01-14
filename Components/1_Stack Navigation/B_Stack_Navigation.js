import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
Stack Navigation: Here each new screen is stacked on top of the previous one like a deck of cards.
  ->When you navigate to a new screen, a new screen is placed on top of the stack, and when you navigate back, 
    the top screen is removed, revealing the previous screen.
  ->Its particularly useful in scenarios wheret a linear flow of screens is required
     example: List view to details view to more details view
    
  Note: In Stack Navigation, React Native offers two navigators: Stack Navigator and Native Stack Navigator
    1)Stack Navigator: js based navigator, offers a high degree of customization,making it great choice for apps that reuire
                      a unique navigation experience
              ->But it was bit less performance compared to Native Stack Navigator
    2) Native Stack Navigator: used in both ios and android and provides better performance and more native feel to
                                the transitions and gestures
                      ->It might not offer the same level of customization as the Stack Navigator but its fast
    ->Note: We will keep the things simple and focus on "Native Stack Navigator"

    first intall "Native Stack Navigator" library: npm install @react-navigation/native-stack
    website: https://reactnavigation.org/docs/native-stack-navigator

    after installation go to app.js and import necessary things their (watch at 2:38 from lect 73)


    watch lec-74:
    Lets navigate between two screen i.e HomeScreen and AboutScreen
    their are two ways: 1)Navigation prop and 2)useNavigation hook

    1)Navigation prop: every component in your app is provided with Navigation prop automatically by react navigation
      lets use Navigate method of navigation prop to navigate between HomeScreen and AboutScreen
      watch lec-74: 0:51

    2)useNavigation hook:watch lec-74: at 2:15
      import useNavigation 
      see inside homescreen component

    ?When to use 'navigation prop' and 'useNavigation hook'
    ->navigation prop: its easy to use and doesn't require extra imports if your within the screen components
    ->useNavigation hook: it can be used in any component not just screen components making it more
                flexible option when you use nested components or working with utility components(used to perform specific tasks in a software application)

    !so use 'navigation prop' for all screen components and use 'useNavigation hook' only when its necessary
*/

const B_Stack_Navigation = () => {
  return (
    <View>
      <Text>B_Stack_Navigation</Text>
    </View>
  )
}

export default B_Stack_Navigation

const styles = StyleSheet.create({})
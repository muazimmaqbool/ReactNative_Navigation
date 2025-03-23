import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
  ->Nesting navigators allows us to combine the powers of different types of navigators, creating a seamless
    and organized user experience.
    Its like having a main road with smaller branching lanes, each having its own set of rules yet interconnected

    For Our Example: we will nest stack navigator within the tab navigator
    but we will have two headers one from stack navigator and one from tab navigator
    to hide tab navigator header when stack navigator is invoked do this
    option:{{
      headerShown:false
    }}
    */

const A_NestingNavigators = () => {
  return (
    <View>
      <Text>NestingNavigators</Text>
    </View>
  )
}

export default A_NestingNavigators

const styles = StyleSheet.create({})
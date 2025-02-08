import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../../screens/Home'
import Screen1 from '../../screens/Screen1'
import Screen2 from '../../screens/Screen2'
import {
  StackScreenOptionsWithHeader,
  StackScreenOptionsWithoutHeader,
} from '../ScreenOptions'
import { StackParamList, StackScreenNames } from '../../types/StackType'

const Stack = createStackNavigator<StackParamList>()

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={StackScreenOptionsWithoutHeader}>
      <Stack.Screen name={StackScreenNames.HOME} component={Home} />
      <Stack.Group screenOptions={StackScreenOptionsWithHeader}>
        <Stack.Screen name={StackScreenNames.SCREEN_1} component={Screen1} />
        <Stack.Screen name={StackScreenNames.SCREEN_2} component={Screen2} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator

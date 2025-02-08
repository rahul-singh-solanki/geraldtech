import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Contact from '../../screens/Contact'
import StackNavigator from './StackNavigator'
import DrawerScreenWrapper from '../../components/DrawerScreenWrapper'
import { bottomTabBarScreenOptions } from '../ScreenOptions'
import {
  BottomTabScreenNames,
  BottomTabParamList,
} from '../../types/BottomTabType'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

function BottomTabNavigator() {
  return (
    <DrawerScreenWrapper>
      <BottomTab.Navigator screenOptions={bottomTabBarScreenOptions}>
        <BottomTab.Screen
          name={BottomTabScreenNames.TAB_HOME}
          component={StackNavigator}
        />
        <BottomTab.Screen
          name={BottomTabScreenNames.CONTACT}
          component={Contact}
        />
      </BottomTab.Navigator>
    </DrawerScreenWrapper>
  )
}

export default BottomTabNavigator

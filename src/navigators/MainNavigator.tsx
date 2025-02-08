import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'

import DummyScreen from '../screens/DummyScreen'
import DrawerContent from './SubNavigators/DrawerContent'
import BottomTabNavigator from './SubNavigators/BottomTabNavigator'
import { drawerScreenOptions } from './ScreenOptions'
import { DrawerParamList, DrawerScreenNames } from '../types/DrawerType'

const Drawer = createDrawerNavigator<DrawerParamList>()

const renderDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContent {...props} />
)

function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={DrawerScreenNames.START}
        screenOptions={drawerScreenOptions}
        drawerContent={renderDrawerContent}>
        <Drawer.Screen
          name={DrawerScreenNames.START}
          component={BottomTabNavigator}
        />
        <Drawer.Screen
          name={DrawerScreenNames.YOUR_CART}
          component={DummyScreen}
        />
        <Drawer.Screen
          name={DrawerScreenNames.FAVOURITES}
          component={DummyScreen}
        />
        <Drawer.Screen
          name={DrawerScreenNames.YOUR_ORDERS}
          component={DummyScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

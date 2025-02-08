import React from 'react'

import Colors from '../utils/Colors'
import {
  BottomTabScreenNames,
  BottomTabScreenOptions,
} from '../types/BottomTabType'
import { Image } from 'react-native'
import Images from '../assets'
import { DrawerScreenOptions } from '../types/DrawerType'
import StringConstants from '../constants/StringConstants'
import { StackScreenOptions } from '../types/StackType'

export const drawerScreenOptions: DrawerScreenOptions = props => ({
  headerTitle: StringConstants.SCREENS[props.route.name],
  drawerLabel: StringConstants.SCREENS[props.route.name],
  drawerType: 'back',
  headerShown: false,
  drawerActiveBackgroundColor: Colors.CraterBrown,
  drawerInactiveTintColor: Colors.White,
  drawerActiveTintColor: Colors.Froly,
  drawerStyle: {
    backgroundColor: Colors.Ebony,
    width: '50%',
  },
  sceneContainerStyle: {
    backgroundColor: Colors.Ebony,
  },
  drawerInactiveBackgroundColor: Colors.Ebony,
  overlayColor: Colors.Transparent,
  drawerContentStyle: {
    backgroundColor: Colors.Ebony,
  },
})

export const bottomTabBarScreenOptions: BottomTabScreenOptions = ({
  route,
}) => ({
  headerShown: false,
  tabBarIcon: ({ size, color }) => {
    let icon = Images.homeIcon
    switch (route.name) {
      case BottomTabScreenNames.TAB_HOME:
        icon = Images.homeIcon
        break
      case BottomTabScreenNames.CONTACT:
        icon = Images.contactIcon
        break
    }
    return (
      <Image
        source={icon}
        style={{ tintColor: color, width: size, height: size }}
      />
    )
  },
})

export const StackScreenOptionsWithHeader: StackScreenOptions = ({
  route,
}) => ({
  headerTitle: StringConstants.SCREENS[route.name],
  headerShown: true,
})

export const StackScreenOptionsWithoutHeader: StackScreenOptions = ({
  route,
}) => ({
  headerTitle: StringConstants.SCREENS[route.name],
  headerShown: false,
})

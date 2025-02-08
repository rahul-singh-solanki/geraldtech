import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'

export enum BottomTabScreenNames {
  TAB_HOME = 'HOME',
  CONTACT = 'CONTACT',
}

export type BottomTabParamList = {
  [BottomTabScreenNames.TAB_HOME]: undefined
  [BottomTabScreenNames.CONTACT]: undefined
}

export type BottomTabScreenOptions = (
  props: BottomTabScreenProps<BottomTabParamList>,
) => BottomTabNavigationOptions

export type BottomTabNavigationRoutes = BottomTabNavigationProp<
  BottomTabParamList,
  BottomTabScreenNames
>

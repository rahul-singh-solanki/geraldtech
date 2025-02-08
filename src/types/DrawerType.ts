import {
  DrawerNavigationOptions,
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer'

export enum DrawerScreenNames {
  START = 'START',
  YOUR_CART = 'YOUR_CART',
  FAVOURITES = 'FAVOURITES',
  YOUR_ORDERS = 'YOUR_ORDERS',
}

export type DrawerParamList = {
  [DrawerScreenNames.START]: undefined
  [DrawerScreenNames.YOUR_CART]: undefined
  [DrawerScreenNames.FAVOURITES]: undefined
  [DrawerScreenNames.YOUR_ORDERS]: undefined
}

export type DrawerScreenOptions = (
  props: DrawerScreenProps<DrawerParamList>,
) => DrawerNavigationOptions

export type DrawerNavigationRoutes = DrawerNavigationProp<
  DrawerParamList,
  DrawerScreenNames
>

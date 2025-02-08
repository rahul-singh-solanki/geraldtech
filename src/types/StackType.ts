import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack'

export enum StackScreenNames {
  HOME = 'HOME 1',
  SCREEN_1 = 'SCREEN_1',
  SCREEN_2 = 'SCREEN_2',
}

export type StackParamList = {
  [StackScreenNames.HOME]: undefined
  [StackScreenNames.SCREEN_1]: undefined
  [StackScreenNames.SCREEN_2]: undefined
}

export type StackScreenOptions = (
  props: StackScreenProps<StackParamList>,
) => StackNavigationOptions

export type StackNavigationRoutes = StackNavigationProp<
  StackParamList,
  StackScreenNames
>

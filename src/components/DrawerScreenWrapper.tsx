import React from 'react'
import { useDrawerProgress } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

interface DrawerScreenWrapperProps {
  children: React.ReactNode
}

const DrawerScreenWrapper: React.FC<DrawerScreenWrapperProps> = props => {
  const progress = useDrawerProgress()
  const insets = useSafeAreaInsets()

  const style = useAnimatedStyle(
    () => ({
      flex: 1,
      overflow: 'hidden',
      borderRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
      transform: [
        {
          rotate: `${interpolate(
            progress.value,
            [0, 1],
            [0, -10],
            'clamp',
          )}deg`,
        },
        {
          translateX: interpolate(progress.value, [0, 1], [0, 60], 'clamp'),
        },
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [0, insets.top],
            'clamp',
          ),
        },
      ],
    }),
    [insets.top],
  )

  return <Animated.View style={style}>{props.children}</Animated.View>
}

export default DrawerScreenWrapper

import React, { memo, useCallback } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer'
import Animated, {
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

import Colors from '../../utils/Colors'
import Button from '../../components/Button'
import DrawerItem from './DrawerItem'
import StringConstants from '../../constants/StringConstants'

const styles = StyleSheet.create({
  container: {},
  touchable: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.White,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 36,
  },
  footer: {
    height: 1,
    backgroundColor: Colors.White,
    opacity: 0.2,
    marginVertical: 16,
  },
  itemText: {
    color: Colors.White,
    fontSize: 18,
  },
})

const DrawerContent = memo<DrawerContentComponentProps>(props => {
  const progress = useDrawerProgress()

  const style = useAnimatedStyle(
    () => ({
      marginTop: 62,
      paddingLeft: 20,
      transform: [
        { translateY: interpolate(progress.value, [0, 1], [-62, 0]) },
      ],
    }),
    [],
  )

  const drawerItemPressed = useCallback(
    (routeName: string) => {
      props.navigation.navigate(routeName)
    },
    [props.navigation],
  )

  const onSignOut = useCallback(() => {
    Alert.alert(StringConstants.SIGN_OUT_DOESNT_EXISTS)
  }, [])

  return (
    <Animated.View style={style}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.title}>Beka</Text>
        {props.state.routes.map(route => {
          const descriptor = props.descriptors?.[route.key] ?? {}
          return (
            <DrawerItem
              key={route.key}
              route={route}
              descriptor={descriptor}
              onPress={drawerItemPressed}
            />
          )
        })}
        <View style={styles.footer} />
        <Button
          textStyle={styles.itemText}
          buttonText="SignOut"
          style={styles.touchable}
          onPress={onSignOut}
        />
      </SafeAreaView>
    </Animated.View>
  )
})

export default DrawerContent

import React, { memo, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

import Colors from '../../utils/Colors'
import Button from '../../components/Button'

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  itemText: {
    color: Colors.White,
    fontSize: 18,
  },
})

interface DrawerItemProps {
  route: DrawerContentComponentProps['state']['routes'][number]
  descriptor: DrawerContentComponentProps['descriptors'][string]
  onPress: (routeName: string) => void
}

const DrawerItem = memo<DrawerItemProps>(({ route, descriptor, onPress }) => {
  const {
    drawerActiveBackgroundColor = Colors.White,
    drawerActiveTintColor = Colors.Ebony,
    drawerLabel,
  } = descriptor?.options ?? {}
  const buttonText = typeof drawerLabel === 'string' ? drawerLabel : route.name
  const isFocused = descriptor?.navigation.isFocused?.()

  const onBtnPressed = useCallback(() => {
    onPress(route.name)
  }, [onPress, route.name])

  return (
    <Button
      buttonText={buttonText}
      textStyle={[
        styles.itemText,
        { color: isFocused ? drawerActiveTintColor : Colors.White },
      ]}
      style={[
        styles.touchable,
        {
          backgroundColor: isFocused
            ? drawerActiveBackgroundColor
            : Colors.Transparent,
        },
      ]}
      onPress={onBtnPressed}
    />
  )
})

export default DrawerItem

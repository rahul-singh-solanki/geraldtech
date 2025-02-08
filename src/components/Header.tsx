import React, { memo, useCallback } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import {
  useNavigation,
  DrawerActions,
  useRoute,
} from '@react-navigation/native'

import Images from '../assets'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    alignItems: 'center',
    opacity: 0.5,
  },
  leftBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 4,
    paddingLeft: 25,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
})

interface HeaderProps {
  title?: string
  showTitle?: boolean
}

const Header = memo<HeaderProps>(({ title, showTitle = true }) => {
  const navigation = useNavigation()
  const route = useRoute()
  const headerTitle = title ?? route.name

  const onPress = useCallback(() => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }, [navigation])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftBtnContainer} onPress={onPress}>
        <Image
          style={styles.leftIcon}
          source={Images.hamburger}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {showTitle && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{headerTitle}</Text>
        </View>
      )}
    </View>
  )
})

Header.displayName = 'Header'

export default Header

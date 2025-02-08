import React, { useCallback } from 'react'
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Colors from '../utils/Colors'
import StringConstants from '../constants/StringConstants'
import { StackNavigationRoutes, StackScreenNames } from '../types/StackType'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

interface Screen1Props {}

const Screen1: React.FC<Screen1Props> = () => {
  const navigation = useNavigation<StackNavigationRoutes>()

  const onBtnPressed = useCallback(() => {
    navigation.push(StackScreenNames.SCREEN_2)
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
      <Button
        title={StringConstants.BUTTONS.GO_TO_SCREEN_2}
        onPress={onBtnPressed}
      />
    </SafeAreaView>
  )
}

export default Screen1

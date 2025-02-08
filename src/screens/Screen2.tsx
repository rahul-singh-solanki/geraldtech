import React, { useCallback } from 'react'
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Colors from '../utils/Colors'
import StringConstants from '../constants/StringConstants'
import DrawerScreenWrapper from '../components/DrawerScreenWrapper'
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

interface Screen2Props {}

const Screen2: React.FC<Screen2Props> = () => {
  const navigation = useNavigation<StackNavigationRoutes>()

  const onBtnPressed = useCallback(() => {
    navigation.push(StackScreenNames.SCREEN_1)
  }, [navigation])

  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Screen 2</Text>
        <Button
          title={StringConstants.BUTTONS.GO_TO_SCREEN_1}
          onPress={onBtnPressed}
        />
      </SafeAreaView>
    </DrawerScreenWrapper>
  )
}

export default Screen2

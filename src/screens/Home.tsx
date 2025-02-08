import React, { useCallback } from 'react'
import { StyleSheet, SafeAreaView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { StackNavigationRoutes, StackScreenNames } from '../types/StackType'
import StringConstants from '../constants/StringConstants'
import Header from '../components/Header'
import Colors from '../utils/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
})

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<StackNavigationRoutes>()

  const openScreen1 = useCallback(() => {
    navigation.push(StackScreenNames.SCREEN_1)
  }, [navigation])

  const openScreen2 = useCallback(() => {
    navigation.push(StackScreenNames.SCREEN_2)
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <Header title={StringConstants.SCREENS.START} />
      <Button
        title={StringConstants.BUTTONS.GO_TO_SCREEN_1}
        onPress={openScreen1}
      />
      <Button
        title={StringConstants.BUTTONS.GO_TO_SCREEN_2}
        onPress={openScreen2}
      />
    </SafeAreaView>
  )
}

export default Home

import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import DrawerScreenWrapper from '../components/DrawerScreenWrapper'
import Header from '../components/Header'
import Colors from '../utils/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
})

interface DummyScreenProps {}

const DummyScreen: React.FC<DummyScreenProps> = () => {
  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </DrawerScreenWrapper>
  )
}

export default DummyScreen

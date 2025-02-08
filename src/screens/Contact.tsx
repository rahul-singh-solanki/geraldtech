import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Header from '../components/Header'
import Colors from '../utils/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
})

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}

export default Contact

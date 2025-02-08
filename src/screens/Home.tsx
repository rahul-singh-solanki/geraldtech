import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {},
})

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Home

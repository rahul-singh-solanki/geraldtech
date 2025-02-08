import React from 'react'
import { View, Text } from 'react-native'
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>Hello</Text>
    </View>
  )
}

export default App

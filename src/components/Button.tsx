import React, { memo } from 'react'
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native'

interface ButtonProps {
  style: StyleProp<ViewStyle>
  buttonText: string
  textStyle: StyleProp<TextStyle>
  onPress: () => void
}

const Button: React.FC<ButtonProps> = memo<ButtonProps>(props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Text style={props.textStyle}>{props.buttonText}</Text>
    </TouchableOpacity>
  )
})

export default Button

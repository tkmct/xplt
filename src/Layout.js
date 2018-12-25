import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default ({ children, onNext, onPrevious }) => <TouchableWithoutFeedback onPress={onNext} onLongPress={onPrevious}>
  <View style={style.container}>{children}</View>
</TouchableWithoutFeedback>

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
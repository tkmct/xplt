import React from 'react'
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'

export default class Layout extends React.Component {
  state = {
    fadeAnimation: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnimation,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }

  render () {
    const { children, onNext, onPrevious, direction } = this.props;
    const { fadeAnimation } = this.state;

    const directionStyle = {
      flexDirection: direction || 'column'
    }

    return <TouchableWithoutFeedback onPress={onNext} onLongPress={onPrevious}>
      <Animated.View style={{ ...style.container, ...directionStyle, opacity: fadeAnimation }}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  }
} 

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
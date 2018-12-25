import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  h1: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'grey'
  },
  h2: {
    fontSize: 30,
    fontWeight: '600',
    color: 'grey'
  },
  p: {
    fontSize: 24,
    fontWeight: '400',
    color: 'grey'
  }
})

const H1 = ({ children }) => <Text style={styles.h1}>{children}</Text>
const H2 = ({ children }) => <Text style={styles.h2}>{children}</Text>
const P = ({ children }) => <Text style={styles.p}>{children}</Text>

export {
  H1,
  H2,
  P
}
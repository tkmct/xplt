import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

const base = Platform.OS === 'dom' ? 1.5 : 1

const styles = StyleSheet.create({
  h1: {
    fontSize: 30 * base,
    fontWeight: 'bold',
    color: 'grey'
  },
  h2: {
    fontSize: 24 * base,
    fontWeight: '600',
    color: 'grey'
  },
  p: {
    fontSize: 14 * base,
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
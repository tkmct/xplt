import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('appDev')} onPrevious={() => handlePageChange('title')}>
  <View style={styles.titleContainer}>
    <H2>自己紹介</H2>
  </View>
  <View style={styles.body}>
    <View style={styles.left}>
      <Image source={require('../images/profile.jpg')} style={{ width: 240, height: 240, resizeMode: 'contain' }} />
    </View>
    <View style={styles.right}>
      <P>• 堤 隆道</P>
      <P>• 1994年生まれ</P>
      <P>• ソフトウェア開発(JavaScriptとか)</P>
    </View>
  </View>
</Layout>

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 120,
    flex: 1,
  },
  body: {
    flex: 6,
    justifyContent: 'flex-start',
    flexDirection: Platform.OS === 'dom' ? 'row' : 'column'
  },
  left: {
    marginRight: Platform.OS === 'dom' ? 120 : 0,
  },
})
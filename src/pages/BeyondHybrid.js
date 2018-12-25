import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

const imageSize = Platform.OS === 'dom' ? 500 : 240;

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('reactNative')} onPrevious={() => handlePageChange('hybrid')}>
  <View style={styles.titleContainer}>
    <H2>課題を解決するために</H2>
  </View>
  <View style={styles.body}>
    <View>
      <P>ネイティブのUIをレンダリングできるようにする + 独自Layoutエンジン上で動かすことでハイパフォーマンスを目指すように</P>
      <View style={{ marginBottom: 30 }}></View>
      <P>• ReactNative (yoga)</P>
      <P>• Xamarin</P>
      <P>• Flutter (skia)</P>
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
    flexDirection: Platform.OS === 'dom' ? 'row' : 'column'
  },
  left: {
    marginRight: Platform.OS === 'dom' ? 120 : 0,
  },
})
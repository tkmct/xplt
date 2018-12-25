import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

const imageSize = Platform.OS === 'dom' ? 500 : 240;

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('after')} onPrevious={() => handlePageChange('reactNative')}>
  <View style={styles.titleContainer}>
    <H2>Flutter</H2>
  </View>
  <View style={styles.body}>
    <View style={styles.left}>
      <Image source={require('../images/flutter.png')} style={{ width: imageSize, height: imageSize, resizeMode: 'contain' }} />
    </View>
    <View>
      <P>• Googleが作ったReactNativeっぽいやつ</P>
      <P>• 静的型付け言語であるDartが採用されている (JSに似てる)</P>
      <P>• 完成度がとても高い、開発体験(DX)がめちゃめちゃいい 体感ReactNativeの10倍</P>
      <P>• Hummingbirdというwebをターゲットにできるやつがもうすぐ出るらしい</P>
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
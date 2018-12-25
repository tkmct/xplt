import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

const imageSize = Platform.OS === 'dom' ? 500 : 240;

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('beyondHybrid')} onPrevious={() => handlePageChange('xplatform')}>
  <View style={styles.titleContainer}>
    <H2>ハイブリッドアプリ</H2>
  </View>
  <View style={styles.body}>
    <View style={styles.left}>
      <Image source={require('../images/cordova.png')} style={{ width: imageSize, height: imageSize, resizeMode: 'contain' }} />
    </View>
    <View>
      <P>• HTML, CSS, JSのweb技術でマルチプラットフォームなアプリが書ける</P>
      <P>• レンダリングエンジンはwebviewとか</P>
      <P>• メイトの感じに少しだけ近い</P>
      <View style={{ marginBottom: 30 }}></View>
      <P>• パフォーマンスが劣る</P>
      <P>• PlatformSpecificなUIの構築が困難</P>
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
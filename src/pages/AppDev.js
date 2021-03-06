import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

const imageSize = Platform.OS === 'dom' ? 500 : 240;

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('xplatform')} onPrevious={() => handlePageChange('intro')}>
  <View style={styles.titleContainer}>
    <H2>クライアントサイドアプリケーション開発</H2>
  </View>
  <View style={styles.body}>
    <View style={styles.left}>
      <Image source={require('../images/PlatformSpecific.jpg')} style={{ width: imageSize, height: imageSize, resizeMode: 'contain' }} />
    </View>
    <View>
      <P>• マルチプラットフォーム</P>
      <P>• 異なるコードベース</P>
      <P>• 開発コスト ・ メンテナンスコスト x プラットフォーム数</P>
      <P>• 開発者確保 x プラットフォーム数</P>
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
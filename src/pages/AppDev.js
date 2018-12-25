import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('demo')} onPrevious={() => handlePageChange('title')}>
  <View style={styles.titleContainer}>
    <H2>クライアントサイドアプリケーション開発</H2>
  </View>
  <View style={styles.body}>
    <P>• マルチプラットフォーム</P>
    <P>• 異なるコードベース</P>
    <P>• 開発コスト ・ メンテナンスコスト x プラットフォーム数</P>
    <P>• 開発者確保 x プラットフォーム数</P>
  </View>
</Layout>

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 120,
    flex: 1,
  },
  body: {
    flex: 6,
  },
})
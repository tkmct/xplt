import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

const imageSize = Platform.OS === 'dom' ? 500 : 240;

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('demo')} onPrevious={() => handlePageChange('flutter')}>
  <View style={styles.titleContainer}>
    <H2>採用するにあたっての課題</H2>
  </View>
  <View style={styles.body}>
    <View>
      <P>• ネイティブAPIを使った機能を作るためにはネイティブ(Android, iOS)の知識が必要</P>
      <P>• Web開発者 → ネイティブの敷居は下がるが、ネイティブ開発者 → クロスプラットフォーム開発はあまりメリットが少ない気も</P>
      <P>• FlutterはDartというマイナー言語を勉強する必要がある</P>
      <View style={{ marginBottom: 30 }}></View>
      <H2>それでもクロスプラットフォーム開発には夢が詰まってます。</H2>
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
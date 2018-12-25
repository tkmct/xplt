import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

const imageSize = Platform.OS === 'dom' ? 500 : 240;

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('demo')} onPrevious={() => handlePageChange('appDev')}>
  <View style={styles.titleContainer}>
    <H2>クロスプラットフォーム開発</H2>
  </View>
  <View style={styles.body}>
    <View style={styles.left}>
      <Image source={require('../images/XPlatform.jpg')} style={{ width: imageSize, height: imageSize, resizeMode: 'contain' }} />
    </View>
    <View>
      <P>• 一つのコードベース</P>
      <P>• 開発コストの削減</P>
      <P>• 開発者の確保が容易(だと思う)</P>
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
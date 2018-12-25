import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'

const imageSize = Platform.OS === 'dom' ? 500 : 240;

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('flutter')} onPrevious={() => handlePageChange('hybrid')}>
  <View style={styles.titleContainer}>
    <H2>ReactNative</H2>
  </View>
  <View style={styles.body}>
    <View style={styles.left}>
      <Image source={require('../images/rn.png')} style={{ width: imageSize, height: imageSize, resizeMode: 'contain' }} />
    </View>
    <View>
      <P>• Facebookが作ったReact(JavaScript) でネイティブアプリを書けるフレームワーク</P>
      <P>• Facebookのアプリ内で実際に採用されたりなど、世界的にかなり使わている</P>
      <P>• Reactで書けるのでwebの人間がすぐにアプリ開発に取り組める</P>
      <P>• react-native-webなど、web用のrendererもある</P>
      <P>• ReactNative code pushで簡単にデプロイできる</P>
      <View style={{ marginBottom: 30 }}></View>
      <P>
        公式ドキュメントより引用
      </P>
      <P>
        React Native uses the same fundamental UI building blocks as regular iOS and Android apps.
      </P>
      <P>
        You just put those building blocks together using JavaScript and React.
      </P>
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
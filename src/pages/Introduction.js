import React from 'react'
import Layout from '../Layout'
import { H2, P } from '../Text'
import { View, Text } from 'react-native'

export default ({ handlePageChange }) => <Layout position="top" onNext={() => handlePageChange('demo')} onPrevious={() => handlePageChange('title')}>
  <H2>Self Introduction</H2>
  <P>Takamichi Tsutsumi</P>
</Layout>


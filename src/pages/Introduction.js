import React from 'react'
import Layout from '../Layout'
import { H1, P } from '../Text'
import { View, Text } from 'react-native'

export default ({ handlePageChange }) => <Layout onNext={() => null} onPrevious={() => handlePageChange('title')}>
  <H1>Self Introduction</H1>
  <P>Takamichi Tsutsumi</P>
</Layout>


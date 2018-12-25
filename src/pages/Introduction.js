import React from 'react'
import Layout from '../Layout'
import { View, Text } from 'react-native'

export default ({ handlePageChange }) => <Layout onNext={() => null} onPrevious={() => handlePageChange('title')}>
  <Text>Self Introduction</Text>
  <Text>Takamichi Tsutsumi</Text>
</Layout>


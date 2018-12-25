import React from 'react'
import Layout from '../Layout'
import { View, Text } from 'react-native'

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('intro')} onPrevious={() => null}>
  <Text>Title Page</Text>
</Layout>


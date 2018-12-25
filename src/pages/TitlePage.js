import React from 'react'
import Layout from '../Layout'
import { H1, H2 } from '../Text'

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('intro')} onPrevious={() => null}>
  <H1>Dreams of X-Platform Development</H1>
  <H2>クロスプラットフォーム開発の夢</H2>
</Layout>


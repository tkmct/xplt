import React from 'react'
import Layout from '../Layout'
import { H2 } from '../Text'

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('title')} onPrevious={() => null}>
  <H2>Thank you</H2>
</Layout>

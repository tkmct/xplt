import React from 'react'
import Layout from '../Layout'
import { H2 } from '../Text'

export default ({ handlePageChange }) => <Layout onNext={() => handlePageChange('end')} onPrevious={() => null}>
  <H2>DEMO</H2>
</Layout>

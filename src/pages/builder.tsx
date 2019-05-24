import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BuilderPage from '../components/BuilderPage'
import formData from '../components/constants/formData'
import { useEffect } from 'react'

const Api = ({ location }) => {
  let isMobile

  useEffect(() => {
    isMobile = typeof window === 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  }, [])

  return (
    <Layout location={location}>
      <Seo title="Builder" description="Simple GUI for build forms with validation" />
      <BuilderPage isStatic formData={formData} isMobile={isMobile} />
    </Layout>
  )
}

export default Api

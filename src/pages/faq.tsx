import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { HeadingWithTopMargin, SubHeading, Title } from '../components/styles/typography'
import ApiMenu from '../components/ApiMenu'
import colors from '../components/styles/colors'
import styled from 'styled-components'

const links = []
const goToSection = () => {}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 20px 100px 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
  }
`

const Faq = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="FAQ" />

      <HeadingWithTopMargin>FAQs</HeadingWithTopMargin>
      <SubHeading>frequently asked question.</SubHeading>

      <Wrapper>
        <aside>
          <ApiMenu
            isStatic
            links={links}
            goToSection={goToSection}
          />
        </aside>

        <main>
          <h2>Performance of React Hook Form</h2>
          <p>
            In fact, performance is one of the primary goal for building this custom hook. by using uncontrolled form
            and input, it allows input to interact te actual form without trigger unnecessary component re-rendering.
          </p>

          <h2>How to easily clear form value?</h2>
          <p>Clear form can be archive multiple ways,</p>

          <h2>How to easily clear form value?</h2>
        </main>
      </Wrapper>
    </Layout>
  )
}
export default Faq

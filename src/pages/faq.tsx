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
          <ApiMenu isStatic links={links} goToSection={goToSection} />
        </aside>

        <main>
          <h2>Performance of React Hook Form</h2>
          <p>
            Performance is one of the primary goals for building this custom hook. It relies on uncontrolled component,
            hence the reason why the register function occurred at the ref. This approach will reduce the amount of
            re-rendering which occurred by user typing or value changing. The components mount to the page is much
            quicker too because they are not controlled. For mounting speed, I have completed a quick comparison test
            which you can refer to by this repo link.
          </p>

          <hr />

          <h2>Does it work with React class Component?</h2>

          <hr />

          <h2>How to easily clear form value?</h2>
          <p>Clear form can be archive multiple ways,</p>

          <hr />

          <h2>How to apply validation rules on Custom Inputs?</h2>
          <hr />

          <h2>How to initialize form values?</h2>
          <hr />

          <h2>What if ref need to be used by other actions?</h2>
          <hr />
        </main>
      </Wrapper>
    </Layout>
  )
}
export default Faq

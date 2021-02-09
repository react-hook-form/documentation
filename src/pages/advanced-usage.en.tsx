import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AdvancedUsage from "../components/AdvancedPage"
import AdvancedUsageV6 from "../components/v6/AdvancedPageV6"
import advancedV6 from "../data/V6/en/advanced"
import advanced from "../data/en/advanced"
import { useStateMachine } from "little-state-machine"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  const {
    state: { setting: { version = 7 } = {} },
  } = useStateMachine()

  return (
    <Layout location={location} defaultLang="en">
      <Seo title={advanced.title} location={location} />
      {version === 7 ? (
        <AdvancedUsage defaultLang="en" advanced={advanced} />
      ) : (
        <AdvancedUsageV6 defaultLang="en" advanced={advancedV6} />
      )}
    </Layout>
  )
}

export default Api

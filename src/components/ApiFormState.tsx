import * as React from "react"
import * as typographyStyles from "../styles/typography.module.css"
import FormStateTable from "./FormStateTable"
import TabGroup from "./TabGroup"
import CodeArea from "./CodeArea"
import formStateUseEffect from "./codeExamples/formStateUseEffect"
import formStateUseEffectTs from "./codeExamples/formStateUseEffectTs"

export default React.memo(
  ({ api, currentLanguage }: { currentLanguage: string; api: any }) => {
    return (
      <>
        <code className={typographyStyles.codeHeading}>
          <h2>
            formState: <span className={typographyStyles.typeText}>Object</span>
          </h2>
        </code>
        {api.formState.description}

        <FormStateTable currentLanguage={currentLanguage} api={api} />

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              <code>formState</code> is wrapped with a{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Proxy
              </a>{" "}
              to improve render performance and skip extra logic if specific
              state is not subscribed to. Therefore make sure you invoke or read
              it before a <code>render</code> in order to enable the state
              update.
            </p>
          </li>
          <li>
            <p>
              <code>formState</code> is updated in batch. If you want to
              subscribe to <code>formState</code> via <code>useEffect</code>,
              make sure that you place the entire <code>formState</code> in the
              optional array.
            </p>
            <TabGroup buttonLabels={["snippet", "example"]}>
              <CodeArea
                rawData={`useEffect(() => {
  if (formState.errors.firstName) {
    // do the your logic here
  }
}, [formState]); // ✅ 
// ❌ formState.errors will not trigger the useEffect        
`}
              />
              <CodeArea
                rawData={formStateUseEffect}
                tsRawData={formStateUseEffectTs}
              />
            </TabGroup>
          </li>
          <li>
            <p>
              Pay attention to the logical operator when subscription to{" "}
              <code>formState</code>.
            </p>

            <CodeArea
              rawData={`// ❌ formState.isValid is accessed conditionally, 
// so the Proxy does not subscribe to changes of that state
return <button disabled={!formState.isDirty || !formState.isValid} />;
  
// ✅ read all formState values to subscribe to changes
const { isDirty, isValid } = formState;
return <button disabled={!isDirty || !isValid} />;
`}
            />
          </li>
        </ul>
      </>
    )
  }
)

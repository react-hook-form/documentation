import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import * as containerStyles from "../../../styles/container.module.css"
import * as typographyStyles from "../../../styles/typography.module.css"
import { Menu } from "../../../components/Menu"
import CodeArea from "../../../components/CodeArea"
import {
  formWeb,
  formNative,
} from "../../../components/codeExamples/formComponent"
import StarRepo from "../../../components/StarRepo"
import Footer from "../../../components/Footer"
import TabGroup from "../../../components/TabGroup"
import * as tableStyles from "../../../styles/table.module.css"
import generic from "../../../data/generic"
import { Link } from "gatsby"

const Form = () => {
  return (
    <Layout>
      <Seo title="useForm - control" />
      <div className={containerStyles.container}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          Form <sup style={{ fontSize: 10, top: 0 }}>(BETA)</sup>
        </h1>
        <p className={typographyStyles.subHeading}>Take care form submission</p>

        <div className={containerStyles.wrapper}>
          <Menu />

          <main>
            <section>
              <code className={typographyStyles.codeHeading}>
                <h2>
                  Form:{" "}
                  <span className={typographyStyles.typeText}>Component</span>
                </h2>
              </code>

              <p>
                <b>Note</b>: This component is currently in BETA
              </p>

              <p>
                This component is optional and it takes care of the form
                submission by closely aligning with the standard native form.
              </p>

              <p>
                By default, we will send a POST request with your form
                submission data as{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/FormData"
                  target="_blank"
                  rel="noreferrer"
                >
                  FormData
                </a>
                . You can supply <code>headers</code> prop to avoid FormData to
                be submitted and use <code>application/json</code> instead.
              </p>

              <ul>
                <li>
                  <p>Progressively enhancement for your form.</p>
                </li>
                <li>
                  <p>Support both React Web and React Native.</p>
                </li>
                <li>
                  <p>Take care of form submission handling.</p>
                </li>
              </ul>

              <CodeArea
                rawData={`<Form
  action="/api"
  method="post" // default to post
  onSubmit={() => {}} // function to be called before the request
  onSuccess={() => {}} // valid response
  onError={() => {}} // error response
  validateStatus={status => status >= 200} // validate status code
/>`}
              />

              <h2 className={typographyStyles.subTitle}>Props</h2>

              <div className={tableStyles.tableWrapper}>
                <p>All props all optional</p>
                <table className={tableStyles.table}>
                  <thead>
                    <tr>
                      <th>{generic.name}</th>
                      <th>{generic.type}</th>
                      <th>{generic.description}</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>control</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          Control
                        </code>
                      </td>
                      <td>
                        <p>
                          <Link to="/api/useform/control">
                            <code>control</code>
                          </Link>{" "}
                          object provided by invoking <code>useForm</code>.
                          Optional when using <code>FormProvider</code>.
                        </p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData="<Form control={control} />"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>children</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          React.ReactNode
                        </code>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <code>render</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          Function
                        </code>
                      </td>
                      <td>
                        <p>
                          Render prop function suitable for headless component.
                        </p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData={`<Form 
  render={({ submit }) => <View />} 
/>`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>onSubmit</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          Function
                        </code>
                      </td>
                      <td>
                        <p>Function invoked after successful validation.</p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData={`<Form 
  onSubmit={data => mutation(data)} 
/>`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>onSuccess</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          Function
                        </code>
                      </td>
                      <td>
                        <p>
                          Function called after successful request to the
                          server.
                        </p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData={`<Form 
  onSuccess={({ response }) => {}} 
/>`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>onError</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          Function
                        </code>
                      </td>
                      <td>
                        <p>
                          Function called after failed request to the server.
                        </p>
                        <p>
                          <code>setError</code> function will be called to
                          update errors state.
                        </p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData={`<Form 
  onError={({ response }) => {}} 
/>`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>headers</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          {`Record<string, string>`}
                        </code>
                      </td>
                      <td>
                        <p>Request headers object.</p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData={`<Form 
  headers={{
    accessToken: 'xxx',
    // Json content type 
    // will stringify form data
    'Content-Type': 'application/json'
  }}
/>`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>validateStatus</code>
                      </td>
                      <td>
                        <code className={typographyStyles.typeText}>
                          {`(status: number) => boolean`}
                        </code>
                      </td>
                      <td>
                        <p>Function to validate status code.</p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData={`<Form 
  validateStatus={status => status === 200}
/>`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>fetcher</code>
                      </td>
                      <td>
                        <code
                          className={typographyStyles.typeText}
                        >{`(action: string, options: Object) => void`}</code>
                      </td>
                      <td>
                        <p>Custom fetcher callback function</p>
                      </td>
                      <td>
                        <CodeArea
                          withOutCopy
                          rawData={`// with server state library
<Form 
  fetcher={
   (action, { values }) => axios(action, values})}
/>

// with custom axios
<Form 
  fetcher={
   (action, { values }) => mutation(values)}
/>
`}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="rules" className={typographyStyles.rulesTitle}>
                Rules
              </h2>

              <ul>
                <li>
                  <p>
                    If want to prepare or omit submission data, please use{" "}
                    <Link to="/api/useform/handlesubmit">
                      <code>handleSubmit</code>
                    </Link>{" "}
                    or custom fetcher.
                  </p>

                  <CodeArea
                    rawData={`const { handleSubmit, control } = useForm();
const onSubmit =(data) => callback(prepareData(data))

<form onSubmit={handleSubmit(onSubmit)} />
// or
<Form action="/api" control={control} fetcher={(action, { values }) => onSubmit(values)} />
`}
                  />
                </li>
                <li>
                  <p>
                    Progressive Enhancement only applicable for SSR framework.
                  </p>

                  <CodeArea
                    rawData={`const { handleSubmit, control } = useForm({
  progressive: true                    
});

<Form onSubmit={onSubmit} control={control} action="/api/test" method="post">
  <input {...register('test', { required: true })} />
</Form />

// Renders
<form action="/api/test" method="post">
  <input required name="test" />
</form>
`}
                  />
                </li>
                <li>
                  <p>
                    It's sufficient enough to just use the{" "}
                    <Link to="/api/useform/handlesubmit">
                      <code>handleSubmit</code>
                    </Link>{" "}
                    callback with server state library, but you can use with{" "}
                    <a
                      href="https://swr.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SWR
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://tanstack.com/query/latest"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TanQuery
                    </a>{" "}
                    to support progressively enhancement.
                  </p>

                  <CodeArea
                    rawData={`const { handleSubmit, control } = useForm({
  progressive: true                    
});
const [mounted, setMounted] = useState(false)
const mutation = useMutation();

<form onSubmit={handleSubmit(mutation)} />

<Form fetcher={(action, { values }) => mutation(values)} action={'/api/something'/}>
`}
                  />
                </li>
              </ul>

              <h2 id="example" className={typographyStyles.subTitle}>
                Examples
              </h2>

              <TabGroup buttonLabels={["React Web", "React Native"]}>
                <CodeArea rawData={formWeb} />
                <CodeArea rawData={formNative} />
              </TabGroup>

              <StarRepo />
            </section>

            <Footer />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Form

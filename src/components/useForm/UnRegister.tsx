import * as React from "react"
import Footer from "../Footer"
import { Menu } from "../Menu"
import api from "../../data/en/api"
import * as typographyStyles from "../../styles/typography.module.css"
import * as containerStyles from "../../styles/container.module.css"
import * as tableStyles from "../../styles/table.module.css"
import CodeArea from "../CodeArea"
import unregisterCode from "../codeExamples/unregisterCode"
import unregisterCodeTs from "../codeExamples/unregisterCodeTs"
import generic from "../../data/generic"
import StarRepo from "../StarRepo"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        unregister
      </h1>
      <p className={typographyStyles.subHeading}>
        Unregister uncontrolled/controlled inputs
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section id="unregisterRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                unregister:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(name: string | string[], options) => void`}</span>
              </h2>
            </code>

            {api.unregister.description}

            <h2 id="options" className={typographyStyles.subTitle}>
              Options
            </h2>

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <th>{generic.name[currentLanguage]}</th>
                    <th>{generic.type[currentLanguage]}</th>
                    <th>{generic.description[currentLanguage]}</th>
                    <th>{generic.codeExample[currentLanguage]}</th>
                  </tr>
                  <tr>
                    <td>
                      <code>keepDirty</code>
                    </td>
                    <td>
                      <span className={typographyStyles.typeText}>boolean</span>
                    </td>
                    <td>
                      <p>
                        <code>isDirty</code> and <code>dirtyFields</code> will
                        be remained during this action. However, this is not
                        going to guarantee the next user input will not update{" "}
                        <code>isDirty</code> formState, because{" "}
                        <code>isDirty</code> is measured against the{" "}
                        <code>defaultValues</code>.
                      </p>
                    </td>
                    <td>
                      <CodeArea
                        withOutCopy
                        rawData={`unregister('test',
  { keepDirty: true }
)`}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>keepTouched</code>
                    </td>
                    <td>
                      <span className={typographyStyles.typeText}>boolean</span>
                    </td>
                    <td>
                      <p>
                        <code>touchedFields</code> will no longer remove that
                        input after unregister.
                      </p>
                    </td>
                    <td>
                      <CodeArea
                        withOutCopy
                        rawData={`unregister('test',
  { keepTouched: true }
)`}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>keepIsValid</code>
                    </td>
                    <td>
                      <span className={typographyStyles.typeText}>boolean</span>
                    </td>
                    <td>
                      <p>
                        <code>isValid</code> will be remained during this
                        action. However, this is not going to guarantee the next
                        user input will not update <code>isValid</code> for
                        schema validation, you will have to adjust the schema
                        according with the unregister.
                      </p>
                    </td>
                    <td>
                      <CodeArea
                        withOutCopy
                        rawData={`unregister('test',
  { keepIsValid: true }
)`}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>keepError</code>
                    </td>
                    <td>
                      <span className={typographyStyles.typeText}>boolean</span>
                    </td>
                    <td>
                      <code>errors</code> will not be updated.
                    </td>
                    <td>
                      <CodeArea
                        withOutCopy
                        rawData={`unregister('test',
  { keepError: true }
)`}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>keepValue</code>
                    </td>
                    <td>
                      <span className={typographyStyles.typeText}>boolean</span>
                    </td>
                    <td>
                      input's current <code>value</code> will not be updated.
                    </td>
                    <td>
                      <CodeArea
                        withOutCopy
                        rawData={`unregister('test',
  { keepValue: true }
)`}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>keepDefaultValue</code>
                    </td>
                    <td>
                      <span className={typographyStyles.typeText}>boolean</span>
                    </td>
                    <td>
                      input's <code>defaultValue</code> which defined in{" "}
                      <code>useForm</code> will be remained.
                    </td>
                    <td>
                      <CodeArea
                        withOutCopy
                        rawData={`unregister('test',
  { keepDefaultValue: true }
)`}
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
                  This method will remove input reference and its value which
                  means <b>build-in validation</b> rules will be removed as
                  well.
                </p>
              </li>
              <li>
                <p>
                  By <code>unregister</code> an input, it will not affect the
                  schema validation.
                </p>
                <CodeArea
                  rawData={`const schema = yup.object().shape({
  firstName: yup.string().required()
}).required();

unregister("firstName"); // this will not remove the validation against firstName input
`}
                />
              </li>
              <li>
                <p>
                  Make sure you unmount that input which has{" "}
                  <code>register</code> callback or else the input will get
                  registered again.
                </p>
                <CodeArea
                  rawData={`const [show, setShow] = React.useState(true)

const onClick = () => {
  unregister('test');
  setShow(false); // make sure to unmount that input so register not invoked again.
}

{show && <input {...register('test')} />}`}
                />
              </li>
            </ul>

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-unregister-v6-forked-qs8o6"
              rawData={unregisterCode}
              tsUrl="https://codesandbox.io/s/react-hook-form-unregister-v6-ts-forked-4k2ey"
              tsRawData={unregisterCodeTs}
            />

            <h2 className={typographyStyles.subTitle}>Video</h2>
            <p>
              The following video explain <code>unregister</code> API in detail.
            </p>

            <iframe
              width="100%"
              height="528"
              title="react hook form controller build"
              src="https://www.youtube.com/embed/TM99g_NW5Gk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <StarRepo currentLanguage="en" />
          </section>

          <Footer currentLanguage={currentLanguage || "en"} />
        </main>
      </div>
    </div>
  )
}

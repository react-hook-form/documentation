import Link from "next/link"
import typographyStyles from "../../styles/typography.module.css"
import CodeArea from "../CodeArea"

import tableStyles from "@/styles/table.module.css"

const SetValue = () => {
  return (
    <div className={tableStyles.tableWrapper}>
      <table className={tableStyles.table}>
        <tbody>
          <tr>
            <th>Name</th>
            <th></th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <code>name</code>
            </td>
            <td></td>
            <td>
              <code className={typographyStyles.typeText}>string</code>
            </td>
            <td>
              <ul>
                <li>
                  <p>Target a single field by name.</p>
                </li>
                <li>
                  <p>When used with field array.</p>
                  <ul>
                    <li>
                      <p>
                        You can use methods such as{" "}
                        <Link href="/docs/usefieldarray#replace">
                          <code>replace</code>
                        </Link>{" "}
                        or{" "}
                        <Link href="/docs/usefieldarray#update">
                          <code>update</code>
                        </Link>{" "}
                        for field array, however, they will cause the component
                        to unmount and remount for the targeted field array.
                      </p>

                      <CodeArea
                        rawData={`const { update } = useFieldArray({ name: 'array' });
                            
// unmount fields and remount with updated value
update(0, { test: '1', test1: '2' }) 

// will directly update input value
setValue('array.0.test1', '1');
setValue('array.0.test2', '2');
`}
                      />
                    </li>
                    <li>
                      <p>
                        It will not create a new field when targeting a
                        non-existing field.
                      </p>

                      <CodeArea
                        rawData={`const { replace } = useFieldArray({ name: 'test' })
                          
// ❌ doesn't create new input  
setValue('test.101.data') 

// ✅ work on refresh entire field array
replace([{data: 'test'}]) 
`}
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <code>value</code>
            </td>
            <td></td>
            <td>
              <code className={typographyStyles.typeText}>unknown</code>
            </td>
            <td>
              <p>
                The value for the field. This argument is required and can not
                be <code>undefined</code>.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>options</code>
            </td>
            <td>
              <code>shouldValidate</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <ul>
                <li>
                  <p>
                    Whether to compute if your input is valid or not (subscribed
                    to <code className={typographyStyles.typeText}>errors</code>
                    ).
                  </p>
                </li>
                <li>
                  <p>
                    Whether to compute if your entire form is valid or not
                    (subscribed to{" "}
                    <code className={typographyStyles.typeText}>isValid</code>
                    ).
                  </p>
                </li>
                <li>
                  This option will update <code>touchedFields</code> at the
                  specified field level <b>not</b> the entire form touched
                  fields.
                </li>
              </ul>
              <CodeArea
                rawData={`setValue('name', 'value', { shouldValidate: true })`}
                withOutCopy
              />
            </td>
          </tr>
          <tr>
            <td>
              <code></code>
            </td>
            <td>
              <code>shouldDirty</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <ul>
                <li>
                  <p>
                    Whether to compute if your input is dirty or not against
                    your defaultValues (subscribed to{" "}
                    <code className={typographyStyles.typeText}>
                      dirtyFields
                    </code>
                    ).
                  </p>
                </li>
                <li>
                  <p>
                    Whether to compute if your entire form is dirty or not
                    against your defaultValues (subscribed to{" "}
                    <code className={typographyStyles.typeText}>isDirty</code>
                    ).
                  </p>
                </li>
                <li>
                  This option will update <code>dirtyFields</code> at the
                  specified field level <b>not</b> the entire form dirty fields.
                </li>
              </ul>

              <CodeArea
                rawData={`setValue('name', 'value', { shouldDirty: true })`}
                withOutCopy
              />
            </td>
          </tr>
          <tr>
            <td>
              <code></code>
            </td>
            <td>
              <code>shouldTouch</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Whether to set the input itself to be touched.</p>
              <CodeArea
                rawData={`setValue('name', 'value', { shouldTouch: true })`}
                withOutCopy
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SetValue

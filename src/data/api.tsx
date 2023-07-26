import CodeArea from "../components/CodeArea"
import useFieldArrayArgument from "../components/codeExamples/useFieldArrayArgument"
import generic from "./generic"
import Link from "next/link"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"

export default {
  title: "API Documentation",
  header: {
    description: "focuses on providing the best DX by simplifying the API.",
  },

  register: {
    title: "register",
    description: (
      <>
        <p>
          This method allows you to register an input or select element and
          apply validation rules to React Hook Form. Validation rules are all
          based on the HTML standard and also allow for custom validation
          methods.
        </p>

        <p>
          By invoking the register function and supplying an input's name, you
          will receive the following methods:
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name}</th>
                <th>{generic.type}</th>
                <th>{generic.description}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>onChange</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    ChangeHandler
                  </code>
                </td>
                <td>
                  <p>
                    <code>onChange</code> prop to subscribe the input change
                    event.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onBlur</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    ChangeHandler
                  </code>
                </td>
                <td>
                  <p>
                    <code>onBlur</code> prop to subscribe the input blur event.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>ref</code>
                </td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`React.Ref<any>`}</code>
                </td>
                <td>
                  <p>Input reference for hook form to register.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <p>Input's name being registered.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    example: "Submit Result",
    selectHelp:
      "By selecting the register option, the API table below will get updated.",
    options: {
      title: "Select Options",
      registerWithValidation: "Register with validation",
      registerWithValidationMessage:
        "Register with validation and error message",
      note: (
        <>
          <h2 className={typographyStyles.subTitle}>Tips</h2>

          <h4 className={typographyStyles.questionTitle}>Custom Register</h4>

          <p>
            You can also <code>register</code> inputs with{" "}
            <code>useEffect</code> and treat them as virtual inputs. For
            controlled components, we provide a custom hook{" "}
            <Link href="/docs/usecontroller">useController</Link> and{" "}
            <Link href="/docs/usecontroller/controller">Controller</Link>{" "}
            component to take care this process for you.
          </p>

          <p>
            If you choose to manually register fields, you will need to update
            the input value with{" "}
            <Link href="/docs/useform/setvalue">setValue</Link>.
          </p>

          <CodeArea
            rawData={`register('firstName', { required: true, min: 8 });

<TextInput onTextChange={(value) => setValue('lastChange', value))} />
`}
          />

          <h4 className={typographyStyles.questionTitle}>
            How to work with innerRef, inputRef?
          </h4>

          <p>
            When the custom input component didn't expose ref correctly, you can
            get it working via the following.
          </p>

          <CodeArea
            rawData={`// not working, because ref is not assigned
<TextInput {...register('test')} />

const firstName = register('firstName', { required: true })
<TextInput
  name={firstName.name}
  onChange={firstName.onChange}
  onBlur={firstName.onBlur}
  inputRef={firstName.ref} // you can achieve the same for different ref name such as innerRef
/>

// correct way to forward input's ref
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    <option value="20">20</option>
    <option value="30">30</option>
  </select>
));
`}
          />
        </>
      ),
    },
    validation: {
      required: (
        <>
          <p>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </p>

          <p>
            <b className={typographyStyles.note}>Note:</b> This config aligns
            with web constrained API for required input validation, for{" "}
            <code>object</code> or <code>array</code> type of input use{" "}
            <code>validate</code> function instead.
          </p>
        </>
      ),
      maxLength: "The maximum length of the value to accept for this input.",
      minLength: "The minimum length of the value to accept for this input.",
      max: "The maximum value to accept for this input.",
      min: "The minimum value to accept for this input.",
      pattern: (
        <>
          <p>The regex pattern for the input.</p>
          <p>
            <b className={typographyStyles.note}>Note:</b> A RegExp object with
            the /g flag keeps track of the lastIndex where a match occurred.
          </p>
        </>
      ),
      validate: (
        <>
          <p>
            You can pass a callback function as the argument to validate, or you
            can pass an object of callback functions to validate all of them.
            This function will be executed on its own without depending on other
            validation rules included in the <code>required</code> attribute.
          </p>
          <p>
            <b className={typographyStyles.note}>Note:</b> for{" "}
            <code>object</code> or <code>array</code> input data, it's
            recommended to use the <code>validate</code> function for validation
            as the other rules mostly apply to <code>string</code>,{" "}
            <code>string[]</code>, <code>number</code> and <code>boolean</code>{" "}
            data types.
          </p>
        </>
      ),
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>
          This object contains information about the entire form state. It helps
          you to keep on track with the user's interaction with your form
          application.
        </p>
      </>
    ),
    isSubmitSuccessful: (
      <p>
        Indicate the form was successfully submitted without any runtime error.
      </p>
    ),
    isDirty: (
      <>
        <p>
          Set to <code>true</code> after the user modifies any of the inputs.
        </p>
        <ul>
          <li>
            <p>
              <b>Important:</b> Make sure to provide all inputs' defaultValues
              at the useForm, so hook form can have a single source of truth to
              compare whether the form is dirty.
            </p>
            <CodeArea
              rawData={`const {
  formState: { isDirty, dirtyFields },
  setValue,
} = useForm({ defaultValues: { test: "" } });

// isDirty: true
setValue('test', 'change')
 
// isDirty: false because there getValues() === defaultValues
setValue('test', '') 
`}
            />
          </li>
          <li>
            <p>
              File typed input will need to be managed at the app level due to
              the ability to cancel file selection and{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/FileList"
                target="_blank"
                rel="noopener noreferrer"
              >
                FileList
              </a>{" "}
              object.
            </p>
          </li>
          <li>
            <p>Do not support custom object, Class or File object.</p>
          </li>
        </ul>
      </>
    ),
    isSubmitted: (
      <>
        Set to <code>true</code> after the form is submitted. Will remain{" "}
        <code>true</code> until the <code>reset</code> method is invoked.
      </>
    ),
    dirtyFields: (
      <>
        <p>
          An object with the user-modified fields. Make sure to provide all
          inputs' defaultValues via useForm, so the library can compare against
          the <code>defaultValues</code>.
        </p>
        <ul>
          <li>
            <p>
              <b>Important:</b> Make sure to provide defaultValues at the
              useForm, so hook form can have a single source of truth to compare
              each field's dirtiness.
            </p>
          </li>

          <li>
            <p>
              Dirty fields will <strong>not</strong> represent as{" "}
              <code>isDirty</code> formState, because dirty fields are marked
              field dirty at field level rather the entire form. If you want to
              determine the entire form state use <code>isDirty</code> instead.
            </p>
          </li>
        </ul>
      </>
    ),
    touched:
      "An object containing all the inputs the user has interacted with.",
    defaultValues: (
      <p>
        The value which has been set at{" "}
        <Link href="/docs/useform" aria-label="read more about reset api">
          useForm
        </Link>
        's defaultValues or updated defaultValues via{" "}
        <Link href="/docs/useform/reset" aria-label="read more about reset api">
          reset
        </Link>{" "}
        API.
      </p>
    ),
    isSubmitting: (
      <>
        <code>true</code> if the form is currently being submitted.{" "}
        <code>false</code> otherwise.
      </>
    ),
    isLoading: (
      <>
        <p>
          <code>true</code> if the form is currently loading async default
          values.
        </p>
        <p>
          <b className={typographyStyles.note}>Important:</b> this prop is only
          applicable to async <code>defaultValues</code>
        </p>
        <CodeArea
          rawData={`const { 
  formState: { isLoading } 
} = useForm({ 
  defaultValues: async () => await fetch('/api') 
});
`}
        />
      </>
    ),
    submitCount: "Number of times the form was submitted.",
    isValid: (
      <>
        Set to <code>true</code> if the form doesn't have any errors.
      </>
    ),
    isValidating: (
      <>
        Set to <code>true</code> during validation.
      </>
    ),
  },

  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          Custom hook for working with Field Arrays (dynamic form). The
          motivation is to provide better user experience and performance. You
          can watch{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short video
          </a>{" "}
          to visualize the performance enhancement.
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name}</th>
                <th>{generic.type}</th>
                <th>{generic.required}</th>
                <th>{generic.description}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>✓</td>
                <td>
                  <p>
                    Name of the field array. <b>Note: </b>Do not support dynamic
                    name.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control}</td>
              </tr>
              <tr>
                <td>
                  <code>shouldUnregister</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td></td>
                <td>
                  <p>Whether Field Array will be unregistered after unmount.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string = id</code>
                </td>
                <td></td>
                <td>
                  <p>
                    Name of the attribute with autogenerated identifier to use
                    as the <code>key</code> prop. This prop is no longer
                    required and will be removed in the next major version.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>rules</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>
                  <p>
                    The same validation <code>rules</code> API as for{" "}
                    <Link href="/docs/useform/register">register</Link>, which
                    includes:
                  </p>
                  <p>required, minLength, maxLength, validate</p>
                  <CodeArea
                    url="https://codesandbox.io/s/react-hook-form-usefieldarray-rules-iyejbp?file=/src/index.js"
                    withOutCopy
                    rawData={`useFieldArray({
  rules: { minLength: 4 } 
})
`}
                  />
                  <p>
                    In case of validation error, the <code>root</code> property
                    is appended to{" "}
                    <code>formState.errors?.fieldArray?.root</code> of type{" "}
                    <Link href="/ts/#FieldError">
                      <code>FieldError</code>
                    </Link>
                    <p>
                      <b className={typographyStyles.note}>Important: </b>This
                      is only applicable to <strong>built-in</strong> validation
                      only.
                    </p>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="shouldUnregister-example" className={typographyStyles.subTitle}>
          Examples
        </h3>

        <CodeArea rawData={useFieldArrayArgument} />
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td width={320}>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            This <code>object</code> contains the <code>defaultValue</code> and{" "}
            <code>key</code> for your component.
          </td>
        </tr>
        <tr>
          <td>
            <code id="append">append</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[], focusOptions) =&gt; void
              </code>
            </code>
          </td>
          <td>
            <p>
              Append input/inputs to the end of your fields and focus. The input
              value will be registered during this action.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>append data is
              required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="prepend">prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object | object[], focusOptions) =&gt; void
            </code>
          </td>
          <td>
            <p>
              Prepend input/inputs to the start of your fields and focus. The
              input value will be registered during this action.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>prepend data
              is required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="insert">insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              {`(index: number, value: object | object[], focusOptions) => void`}
            </code>
          </td>
          <td>
            <p>Insert input/inputs at particular position and focus. </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>insert data is
              required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="swap">swap</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>Swap input/inputs position.</td>
        </tr>
        <tr>
          <td>
            <code id="move">move</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>Move input/inputs to another position.</td>
        </tr>
        <tr>
          <td>
            <code id="update">update</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, obj: object) =&gt; void
              </code>
            </code>
          </td>
          <td>
            <p>
              Update input/inputs at a particular position, updated fields will
              get unmount and remount. If this is not desired behavior, please
              use{" "}
              <Link href="/docs/useform/setvalue">
                <code>setValue</code>
              </Link>{" "}
              API instead.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>update data is
              required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="replace">replace</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object[]) =&gt; void
              </code>
            </code>
          </td>
          <td>Replace the entire field array values.</td>
        </tr>
        <tr>
          <td>
            <code id="remove">remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) =&gt; void
              </code>
            </code>
          </td>
          <td>
            Remove input/inputs at particular position, or remove all when no
            index provided.
          </td>
        </tr>
      </>
    ),
  },
  useController: {
    title: "useController",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <Link href="/ts#FieldPath" title="FieldPath type">
              <code className={typographyStyles.typeText}>FieldPath</code>
            </Link>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <Link href="/ts#Control" title="Control type">
              <code className={typographyStyles.typeText}>Control</code>
            </Link>
          </td>
          <td></td>
          <td>
            <Link href="/docs/useform/control">
              <code>control</code>
            </Link>{" "}
            object provided by invoking <code>useForm</code>. Optional when
            using <code>FormProvider</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>unknown</code>
          </td>
          <td></td>
          <td>
            <p>
              <b className={typographyStyles.note}>Important:</b> Can not apply{" "}
              <code>undefined</code> to <code>defaultValue</code> or{" "}
              <code>defaultValues</code> at <code>useForm</code>.
            </p>
            <ul>
              <li>
                <p>
                  You need to either set <code>defaultValue</code> at the
                  field-level or <code>useForm</code>'s{" "}
                  <code>defaultValues</code>. <code>undefined</code> is not a
                  valid value.
                </p>
              </li>
              <li>
                <p>
                  If your form will invoke <code>reset</code> with default
                  values, you will need to provide <code>useForm</code> with{" "}
                  <code>defaultValues</code>.
                </p>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <p>
              Validation rules in the same format for <code>register</code>,
              which includes:
            </p>
            <p>required, min, max, minLength, maxLength, pattern, validate</p>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>shouldUnregister</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>boolean = false</code>
          </td>
          <td></td>
          <td>
            <p>
              Input will be unregistered after unmount and defaultValues will be
              removed as well.
            </p>
            <p>
              <b>Note:</b> this prop should be avoided when using with{" "}
              <code>useFieldArray</code> as <code>unregister</code> function
              gets called after input unmount/remount and reorder.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>disabled</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>boolean = false</code>
          </td>
          <td></td>
          <td>
            <p>
              <code>disabled</code> prop will be returned from `field` prop.
              Controlled input will be disabled and its value will be omitted
              from the submission data.
            </p>
          </td>
        </tr>
      </tbody>
    ),
    tips: (
      <>
        <h2 className={typographyStyles.subTitle}>Tips</h2>

        <ul>
          <li>
            <p>
              It's important to be aware of each prop's responsibility when
              working with external controlled components, such as MUI, AntD,
              Chakra UI. Its job is to spy on the input, report, and set its
              value.
            </p>

            <ul>
              <li>
                <p>
                  <b>onChange</b>: send data back to hook form
                </p>
              </li>
              <li>
                <p>
                  <b>onBlur</b>: report input has been interacted (focus and
                  blur)
                </p>
              </li>
              <li>
                <p>
                  <b>value</b>: set up input initial and updated value
                </p>
              </li>
              <li>
                <p>
                  <b>ref</b>: allow input to be focused with error
                </p>
              </li>
              <li>
                <p>
                  <b>name</b>: give input an unique name
                </p>
              </li>
            </ul>

            <p>
              It's fine to host your state and combined with{" "}
              <code>useController</code>.
            </p>

            <CodeArea
              url="https://codesandbox.io/s/usecontroller-own-state-wncet2?file=/src/App.tsx"
              rawData={`const { field } = useController();
const [value, setValue] = useState(field.value);

onChange={(event) => {
  field.onChange(parseInt(event.target.value)) // data send back to hook form
  setValue(event.target.value) // UI state
}}
`}
            />
          </li>
          <li>
            <p>
              Do not <code>register</code> input again. This custom hook is
              designed to take care of the registration process.
            </p>
            <CodeArea
              rawData={`const { field } = useController({ name: 'test' })

<input {...field} /> // ✅
<input {...field} {...register('test')} /> // ❌ double up the registration
`}
            />
          </li>
          <li>
            <p>
              It's ideal to use a single <code>useController</code> per
              component. If you need to use more than one, make sure you rename
              the prop. May want to consider using <code>Controller</code>{" "}
              instead.
            </p>
            <CodeArea
              rawData={`const { field: input } = useController({ name: 'test' })
const { field: checkbox } = useController({ name: 'test1' })

<input {...input} />
<input {...checkbox} />
`}
            />
          </li>
        </ul>
      </>
    ),
    description: (
      <>
        <p>
          This custom hook powers{" "}
          <Link href="/docs/usecontroller/controller">
            <code>Controller</code>
          </Link>
          . Additionally, it shares the same props and methods as{" "}
          <code>Controller</code>. It's useful for creating reusable Controlled
          input.
        </p>
      </>
    ),
  },
}

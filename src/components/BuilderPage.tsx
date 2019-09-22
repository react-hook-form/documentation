import * as React from "react"
import { Animate } from "react-simple-animate"
import useForm from "react-hook-form"
import styled from "styled-components"
import SortableContainer from "./SortableContainer"
import { useStateMachine } from "little-state-machine"
import { navigate } from "@reach/router"
import colors from "../styles/colors"
import {
  SubHeading,
  HeadingWithTopMargin,
  Error,
  Title,
} from "../styles/typography"
import SyntaxHighlighterWithCopy from "./SyntaxHighlighterWithCopy"
import track from "./utils/track"
import { Container } from "../styles/containers"
import breakpoints from "../styles/breakpoints"
import Footer from "./Footer"

const { useState, useRef, useEffect } = React

const updateStore = (state, payload) => {
  return {
    ...state,
    formData: [...payload],
  }
}

const errorStyle = {
  border: `1px solid ${colors.secondary}`,
  background: colors.errorPink,
}

const Root = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 4;
  color: white;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-column-gap: 60px;
  overflow: hidden;
  margin-bottom: 100px;
  padding: 0 20px 100px 20px;
  color: white;

  & > div:first-child {
    margin-top: 50px;
    order: 3;
  }

  & > form:nth-child(2) {
    order: 1;
  }

  & > div:nth-child(3) {
    order: 2;
  }

  @media (min-width: 768px) {
    & > div:first-child {
      margin-top: 0;
      order: 1;
    }

    & > form:nth-child(2) {
      order: 2;
    }

    & > div:nth-child(3) {
      order: 3;
    }
  }
`

const SubmitButton = styled.input`
  margin-top: 10px;
  height: 55px;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  background: ${props => props.background || colors.lightPink};
  color: ${props => props.color || "white"};
  border: 1px solid
    ${props => (props.color === "white" ? colors.secondary : "transparent")};
`

const Form = styled.form`
  & fieldset {
    border-radius: 4px;
    border: 1px solid #6a6b7f;
    display: flex;
    padding: 10px 20px;
  }

  & fieldset > input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;

    &:hover {
      border: 1px solid ${colors.lightPink};
    }
  }

  & > select,
  & > input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 16px;
  }

  & > select {
    width: 100%;
  }

  & > select:not([multiple]) {
    height: 37px;
  }

  & {
    flex: 1;
  }

  & > input.form-error {
    border: 1px solid #bf1650;
  }

  & label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
  }
`

const CloseButton = styled.button`
  font-size: 30px;
  top: 0;
  right: 0;
  padding: 20px;
  position: absolute;
  cursor: pointer;
  border: none;
  font-weight: 200;
  z-index: 5;
  border-radius: 10px;
  color: white;
  display: none;
  background: rgba(14, 16, 28, 0.5294117647058824);

  @media ${breakpoints.fromMediumScreen} {
    font-size: 35px;
    display: block;
    padding: 20px;
    top: 15px;
    right: 20px;
  }
`

const defaultValue = {
  max: undefined,
  min: undefined,
  pattern: undefined,
  maxLength: undefined,
  minLength: undefined,
  required: undefined,
  name: "",
  type: "",
  options: [],
}

function BuilderPage({
  showBuilder,
  toggleBuilder,
  builderButton,
  HomeRef,
  isMobile,
  isStatic,
}: {
  showBuilder?: boolean
  toggleBuilder?: Function
  builderButton?: any
  HomeRef?: any
  isMobile: boolean
  isStatic?: boolean
}) {
  const {
    state: { formData = [] },
    action: updateFormData,
  } = useStateMachine(updateStore)
  const [editFormData, setFormData] = useState(defaultValue)
  const {
    register,
    handleSubmit,
    errors = {},
    watch,
    setValue,
    reset,
  } = useForm()
  const [editIndex, setEditIndex] = useState(-1)
  const copyFormData = useRef([])
  const closeButton = useRef(null)
  const [showValidation, toggleValidation] = useState(false)
  const onSubmit = data => {
    if (editIndex >= 0) {
      formData[editIndex] = data
      updateFormData([...formData])
      setFormData(defaultValue)
      setEditIndex(-1)
    } else {
      updateFormData([...formData, ...[data]])
    }
    reset()
  }
  const form = useRef(null)
  const type = watch("type")
  const shouldToggleOn =
    editFormData.max ||
    editFormData.min ||
    editFormData.pattern ||
    editFormData.maxLength ||
    editFormData.minLength ||
    editFormData.required
  copyFormData.current = formData
  const editIndexRef = useRef(null)
  editIndexRef.current = editIndex

  const validate = value => {
    return (
      !Object.values(copyFormData.current).find(data => data.name === value) ||
      editIndexRef.current !== -1
    )
  }

  useEffect(() => {
    if (showBuilder && closeButton.current) {
      closeButton.current.focus()
    }
  }, [showBuilder])

  useEffect(() => {
    setValue("toggle", shouldToggleOn)
  }, [shouldToggleOn])

  useEffect(() => {
    if (editFormData.type) setValue("type", editFormData.type)
  }, [editFormData.type])

  useEffect(() => {
    setValue("required", editFormData.required)
  }, [editIndex])

  const child = (
    <Container>
      <HeadingWithTopMargin>Builder</HeadingWithTopMargin>
      <SubHeading>Build your own form with code and example.</SubHeading>

      <Wrapper>
        <div>
          <Title>Form</Title>

          <SortableContainer
            {...{
              updateFormData,
              formData,
              editIndex,
              setEditIndex,
              setFormData,
              editFormData,
              reset,
            }}
          />

          {!formData.length && (
            <p>You can start adding fields with Fields Creator ▸</p>
          )}
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title ref={form}>Input Creator</Title>

          <label>Name: </label>
          <input
            autoComplete="off"
            defaultValue={editFormData.name}
            aria-label="name"
            aria-invalid={errors["name"] ? "true" : "false"}
            name="name"
            style={{
              ...(errors["name"] ? errorStyle : null),
            }}
            ref={register({
              required: true,
              validate,
            })}
          />
          <Animate
            play={!!errors["name"]}
            duration={0.6}
            start={{
              maxHeight: 0,
            }}
            end={{ maxHeight: 20 }}
          >
            {errors.name && errors.name["type"] === "required" && (
              <Error>This is required.</Error>
            )}
            {errors.name && errors.name["type"] === "validate" && (
              <Error>Name required to be unique.</Error>
            )}
          </Animate>

          <label>Type: </label>
          <select
            aria-label="Select type"
            name="type"
            ref={register}
            defaultValue={editFormData.type}
          >
            <option value="text">Text</option>
            <option value="select">Select</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
            <option value="number">Number</option>
            <option value="textarea">Textarea</option>
            <option value="email">Email</option>
            <option value="range">Range</option>
            <option value="search">Search</option>
            <option value="tel">Tel</option>
            <option value="url">url</option>
            <option value="time">Time</option>
            <option value="datetime">datetime</option>
            <option value="datetime-local">datetime-local</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="validate" disabled>
              validate
            </option>
          </select>

          {(type === "select" ||
            type === "radio" ||
            editFormData.type === "select" ||
            editFormData.type === "radio") && (
            <>
              <label>Options:</label>
              <input
                key={editFormData.name}
                defaultValue={editFormData.options}
                type="text"
                name="options"
                placeholder="Enter options separate by ;"
                ref={register}
              />
            </>
          )}

          <label>
            <input
              type="checkbox"
              name="toggle"
              ref={register}
              onClick={() => toggleValidation(!showValidation)}
            />
            &nbsp; Toggle Validation Panel
          </label>

          <Animate
            play={shouldToggleOn || showValidation}
            start={{
              maxHeight: 0,
              overflow: "hidden",
            }}
            end={{
              maxHeight: 800,
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <fieldset>
              <label
                style={{
                  marginTop: 0,
                }}
              >
                <input type="checkbox" name="required" ref={register} />{" "}
                Required
              </label>
              <label>Max</label>
              <input
                defaultValue={editFormData.max}
                aria-label="max"
                autoComplete="false"
                name="max"
                type="number"
                ref={register}
              />
              <label>Min</label>
              <input
                defaultValue={editFormData.min}
                autoComplete="false"
                aria-label="min"
                name="min"
                type="number"
                ref={register}
              />
              <label>MaxLength</label>
              <input
                defaultValue={editFormData.maxLength}
                autoComplete="false"
                aria-label="max length"
                name="maxLength"
                type="number"
                ref={register}
              />
              <label>Pattern</label>
              <input
                autoComplete="false"
                defaultValue={editFormData.pattern}
                style={{
                  marginBottom: "20px",
                }}
                aria-label="pattern"
                name="pattern"
                type="text"
                ref={register}
              />
            </fieldset>
          </Animate>

          <SubmitButton
            onClick={() => {
              track({
                category: "Button",
                label: editIndex >= 0 ? "Update" : "Create",
                action: `Click - Builder ${
                  editIndex >= 0 ? "Update" : "Create"
                }`,
              })
              form.current.scrollIntoView({ behavior: "smooth" })
            }}
            type="submit"
            value={editIndex >= 0 ? "Update" : "Create"}
          />

          <Title
            style={{
              fontSize: 14,
              maxWidth: "80%",
              margin: "10px auto 0",
            }}
          >
            ▼
          </Title>

          <Animate
            play={(formData || []).length > 0}
            start={{
              opacity: 0,
              pointerEvents: "none",
            }}
            end={{
              opacity: 1,
              pointerEvents: "auto",
            }}
            render={({ style }) => (
              <SubmitButton
                style={style}
                type="button"
                color="white"
                onClick={() => {
                  track({
                    category: "Button",
                    label: "Generate form",
                    action: "Click - Generate form",
                  })
                  if (toggleBuilder) {
                    toggleBuilder(false)
                    builderButton.current.focus()
                    document.body.style.overflow = "auto"
                    HomeRef.current.scrollIntoView({ behavior: "smooth" })
                  } else {
                    navigate("/?goToDemo")
                  }
                }}
                background="black"
                value="Generate Form"
              />
            )}
          />
        </Form>

        <div
          style={{
            paddingRight: "20px",
            position: "relative",
          }}
        >
          <Title>Code</Title>

          <SyntaxHighlighterWithCopy data={formData} />
        </div>
      </Wrapper>

      <Footer />
    </Container>
  )

  if (isStatic) return child

  return (
    <Animate
      play={showBuilder || isStatic}
      easeType="ease-in"
      duration={isMobile ? 0.3 : 0.5}
      start={{
        transform: "translateY(100vh)",
      }}
      end={{
        transform: "translateY(0)",
      }}
      render={({ style }) => {
        return (
          <Root style={style}>
            <div
              id="builder"
              style={{
                overflow: "auto",
                height: "100vh",
                background: colors.primary,
              }}
            >
              <CloseButton
                aria-label="close builder"
                ref={closeButton}
                onClick={() => {
                  toggleBuilder(false)
                  builderButton.current.focus()
                }}
              >
                &#10005;
              </CloseButton>
              {child}
            </div>
          </Root>
        )
      }}
    />
  )
}

export default React.memo(BuilderPage)

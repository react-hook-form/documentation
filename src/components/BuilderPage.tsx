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
import CodeArea from "./CodeArea"
import { Container } from "../styles/containers"
import breakpoints from "../styles/breakpoints"
import Footer from "./Footer"
import { PinkButton, DarkButton } from "../styles/buttons"
import Popup from "./Popup"
import LearnMore from "./learnMore"
import goToBuilder from "./utils/goToBuilder"
import builder from "../data/builder"
import generic from "../data/generic"

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

  @media ${breakpoints.fromMediumScreen} {
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

const Form = styled.form`
  & select,
  & input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 6px 10px;
    margin-bottom: 10px;
    font-size: 16px;

    &:hover {
      border: 1px solid ${colors.lightPink};
    }
  }

  & select:not([multiple]) {
    height: 40px;
  }

  & input.form-error {
    border: 1px solid #bf1650;
  }

  & input[type="checkbox"] {
    display: inline-block;
    width: auto;
    margin-right: 10px;
  }

  & label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
  }

  & fieldset {
    border: 1px solid ${colors.lightBlue};
    border-radius: 4px;
  }
`

const CloseButton = styled.button`
  font-size: 25px;
  position: absolute;
  cursor: pointer;
  z-index: 5;
  border-radius: 8px;
  color: white;
  top: 20px;
  right: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  background: ${colors.primary};
  border: 1px solid white;

  &:hover {
    border: 1px solid ${colors.secondary};
  }

  @media ${breakpoints.fromMediumScreen} {
    align-items: center;
    justify-content: center;
    display: flex;
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
  HomeRef,
  isStatic,
  defaultLang,
}: {
  showBuilder?: boolean
  toggleBuilder?: Function
  HomeRef?: any
  isStatic?: boolean
  defaultLang: string
}) {
  const {
    state: { formData = [], language },
    action: updateFormData,
  } = useStateMachine(updateStore)
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
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
      <HeadingWithTopMargin id="main">
        {builder.builder[currentLanguage].title}
      </HeadingWithTopMargin>
      <SubHeading>{builder.builder[currentLanguage].description}</SubHeading>

      <Wrapper>
        <div>
          <Title>{builder.layout[currentLanguage].title}</Title>

          <p style={{ fontSize: 14 }}>
            <Popup iconOnly />
            {builder.layout[currentLanguage].message}
          </p>

          <SortableContainer
            {...{
              updateFormData,
              formData,
              editIndex,
              setEditIndex,
              setFormData,
              editFormData,
              reset,
              currentLanguage,
            }}
          />

          {!formData.length && <p>{builder.layout[currentLanguage].message}</p>}
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title ref={form}>
            {builder.inputCreator[currentLanguage].title}
          </Title>

          <p style={{ fontSize: 14 }}>
            <Popup iconOnly />
            {builder.inputCreator[currentLanguage].description}
          </p>

          <label>{generic.name[currentLanguage]}: </label>
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

          <label>{generic.type[currentLanguage]}: </label>
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
              <label>{builder.inputCreator[currentLanguage].options}:</label>
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
            {builder.inputCreator[currentLanguage].validation}
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
                <input type="checkbox" name="required" ref={register} />
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

          <PinkButton
            onClick={() => {
              form.current.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {editIndex >= 0
              ? generic.update[currentLanguage]
              : generic.create[currentLanguage]}
          </PinkButton>

          {formData.length > 0 && (
            <Title
              style={{
                fontSize: 14,
                maxWidth: "80%",
                margin: "0 auto 0",
              }}
            >
              or
            </Title>
          )}

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
              <DarkButton
                style={style}
                type="button"
                onClick={() => {
                  if (toggleBuilder) {
                    toggleBuilder(false)
                    document.body.style.overflow = "auto"
                    HomeRef.current.scrollIntoView({ behavior: "smooth" })
                  } else {
                    navigate("/?goToDemo&updated=true")
                  }
                }}
              >
                {builder.inputCreator[currentLanguage].generate}
              </DarkButton>
            )}
          />
        </Form>

        <div
          style={{
            paddingRight: "20px",
            position: "relative",
          }}
        >
          <Title>{builder.code[currentLanguage].title}</Title>

          <p style={{ fontSize: 14 }}>
            <Popup iconOnly />
            {builder.code[currentLanguage].description}
          </p>

          <CodeArea data={formData} />
        </div>
      </Wrapper>

      <LearnMore />

      <Footer currentLanguage={currentLanguage} />
    </Container>
  )

  if (isStatic) return child

  return (
    <Animate
      play={showBuilder || isStatic}
      easeType="ease-in"
      duration={0.5}
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
                  goToBuilder(false)
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

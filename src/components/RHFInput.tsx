import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import CodeArea from "./CodeArea"
import formContext from "./codeExamples/formContext"
import generic from "../data/generic"
import api from "../data/api"
import { CodeBlock, TypeText } from "../styles/typography"

export default function FormContext() {
  return (
    <>
      <CodeHeading>
        <h2>
          RHFInput: <TypeText>Component</TypeText>
        </h2>
      </CodeHeading>

      <p>
        React Hook Form embrace uncontrolled components and native inputs,
        however it's hard to avoid working with external controlled component
        such as{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JedWatson/react-select"
        >
          React-Select
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ant-design/ant-design"
        >
          AntD
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/"
        >
          Material-UI
        </a>
        . This wrapper component will make your life easier to work with them.
      </p>
      <p>
        You can read more at{" "}
        <a
          href="https://github.com/react-hook-form/react-hook-form-input"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-hook-form-input repo
        </a>
        .
      </p>
    </>
  )
}

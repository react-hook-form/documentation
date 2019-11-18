import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"

const Buttons = styled.div`
  & > button {
    background: ${colors.primary};
    color: white;
    padding: 5px 8px 5px;
    font-size: 12px;
    border: none;
    border-top: 1px solid ${colors.secondary};
    transition: 0.3s all;
    background: ${colors.black};
    text-transform: uppercase;

    &:hover {
      background: ${colors.secondary};
    }

    &:disabled {
      background: ${colors.primary};
    }

    @media ${breakpoints.fromMediumScreen} {
      padding: 5px 20px 5px;
    }
  }
`

export default ({ children, buttonLabels }) => {
  const [index, setIndex] = React.useState(0)

  return (
    <div>
      <Buttons style={{ marginBottom: -13, marginTop: 30 }}>
        {buttonLabels.map((label, currentIndex) => (
          <button
            key={label}
            style={{
              ...(currentIndex === index
                ? { cursor: "default", borderTop: "1px solid transparent" }
                : {}),
            }}
            disabled={currentIndex === index}
            onClick={() => setIndex(currentIndex)}
          >
            {label}
          </button>
        ))}
      </Buttons>
      {children.map((child, currentIndex) => index === currentIndex && child)}
    </div>
  )
}

import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"

const Buttons = styled.div`
  & > button {
    background: ${colors.primary};
    color: white;
    border: none;
    padding: 5px 15px 5px;
    font-size: 14px;
    border-top: 2px solid transparent;
    transition: 0.3s all;
    background: ${colors.lightPink};
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
            style={{
              ...(currentIndex === index ? { cursor: "default" } : {}),
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

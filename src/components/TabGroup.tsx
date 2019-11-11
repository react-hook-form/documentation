import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"

const Buttons = styled.div`
  & > button {
    background: ${colors.primary};
    color: white;
    border: none;
    padding: 8px 20px 10px;
    font-size: 14px;
    border-top: 2px solid transparent;
    transition: 0.3s all;

    &:active,
    &:hover {
      border-top: 2px solid ${colors.secondary};
    }

    @media ${breakpoints.fromMediumScreen} {
      padding: 8px 25px 10px;
      font-size: 16px;
    }
  }
`

export default ({ children, buttonLabels }) => {
  const [index, setIndex] = React.useState(0)

  return (
    <div>
      <Buttons style={{ marginBottom: -14, marginTop: 20 }}>
        {buttonLabels.map((label, currentIndex) => (
          <button
            style={{
              ...(currentIndex === index
                ? { cursor: "default", borderTop: "2px solid transparent" }
                : { background: colors.lightBlue }),
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

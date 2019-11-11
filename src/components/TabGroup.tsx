import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import breakpoints from "../styles/breakpoints"

const Buttons = styled.div`
  & > button {
    background: ${colors.primary};
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;

    @media ${breakpoints.fromMediumScreen} {
      padding: 10px 25px;
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
                ? { cursor: "default" }
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

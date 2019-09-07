import * as React from "react"
import { Animate } from "react-simple-animate"
import styled from "styled-components"

const Root = styled.span`
  font-weight: bold;
  position: relative;

  & > button {
    border-radius: 50%;
    border: none;
    height: 18px;
    width: 18px;
    font-size: 15px;
    display: inline-flex;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  & > span {
    font-size: 14px !important;
    margin-left: 10px;
    font-weight: 400;
    display: inline-block;
    overflow: hidden;
    position: relative;
    top: 5px;

    & > span {
      display: inline-block;
      position: relative;
      font-family: sans-serif;
    }
  }
`

function Popup({ message, top }: { message?: string; top?: number }) {
  const [tipShow, setTipShow] = React.useState(false)
  return (
    <Root>
      <button onClick={() => setTipShow(!tipShow)}>!</button>
      <span>
        <Animate
          duration={0.2}
          play={tipShow}
          start={{
            transform: "translateX(-100%)",
          }}
          end={{
            transform: "translateX(0)",
          }}
          render={({ style }) => (
            <span style={{ ...style, top }}>
              {message || <>React Native: not compatible (DOM API only)</>}
            </span>
          )}
        />
      </span>
    </Root>
  )
}

export default Popup

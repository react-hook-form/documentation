import styled from "styled-components"
import colors from "./colors"
import breakpoints from "./breakpoints"

const commonStyle = `
  border-radius: 4px;
  transition: 0.3s all;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 300;
  margin: 20px 0;
  width: 100%;
  padding: 20px 40px;
  -webkit-appearance: none;
  line-height: 1;
`

export const PrimaryButton = styled.button`
  box-sizing: border-box;
  background: ${colors.primary};
  border: 1px solid ${colors.lightBlue};
  ${commonStyle}

  &:hover {
    border: 1px solid ${colors.secondary};
  }

  &:active {
    background: ${colors.lightPink};
  }

  @media ${breakpoints.fromMediumScreen} {
    font-size: 20px;
    padding: 12px 20px;
    font-weight: 300;
    margin: 40px 0;
  }
`

export const PinkButton = styled.button`
  background: ${colors.lightPink};
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  border: 1px solid ${colors.lightPink};
  ${commonStyle}

  &:hover {
    background: ${colors.secondary};
  }
`

export const ButtonsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-column-gap: 40px;
  }
`

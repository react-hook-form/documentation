import styled from "styled-components"
import colors from "./colors"
import breakpoints from "./breakpoints"

export const PrimaryButton = styled.button`
  font-size: 14px;
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 40px;
  background: ${colors.primary};
  color: white;
  border: 1px solid ${colors.lightBlue};
  cursor: pointer;
  transition: 0.3s all;
  margin-top: 20px;

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
    margin-bottom: 40px;
    margin-top: 40px;
  }
`

export const PinkButton = styled.button`
  background: ${colors.lightPink};
  height: 55px;
  color: white;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  border: 1px solid transparent;
  -webkit-appearance: none;
  border-radius: 5px;
  line-height: 1;
  transition: 0.3s all;
  cursor: pointer;

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

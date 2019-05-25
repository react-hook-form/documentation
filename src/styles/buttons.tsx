import colors from "./colors";
import styled from 'styled-components';

export const DarkBlueButton = styled.button`
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 40px;
  margin: 40px auto;
  font-size: 18px;
  background: ${colors.primary};
  color: white;
  border: 1px solid ${colors.lightBlue};
  transition: 0.3s all;
`

export const ButtonsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  margin-top: 10px;

  @media (min-width: 768px) {
    grid-column-gap: 40px;
  }

  & > button {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 9px 20px;
    margin-bottom: 10px;
    font-size: 14px;
    background: ${colors.primary};
    color: white;
    border: 1px solid ${colors.lightBlue};
    transition: 0.3s all;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      background: ${colors.lightPink};
    }

    @media (min-width: 768px) {
      font-size: 20px;
      padding: 12px 20px;
      font-weight: 300;
      margin-bottom: 40px;
    }
  }
`

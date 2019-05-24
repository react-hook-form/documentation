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

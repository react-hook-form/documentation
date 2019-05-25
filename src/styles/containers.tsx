import styled from 'styled-components'
import breakpoints from './breakpoints'

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 20px 100px 20px;

  @media ${breakpoints.fromMediumScreen} {
    display: grid;
    grid-template-columns: 250px minmax(0, 1fr);
  }

  @media ${breakpoints.fromLargeScreen} {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
  }
`

export const Container = styled.div`
  padding-top: 60px;

  @media (min-width: 768px) {
    padding-top: 0;
  }
`

export const CenterContent = styled.section`
  margin: 0 auto;
  text-align: center;
  max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : `1024px`};
`

import track from './utils/track'
import * as React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  padding: 40px 0;
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 60px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    text-align: left;
  }
`

export default ({ tabIndex }: any) => (
  <Footer>
    Build with ♡ by{' '}
    <a
      href="https://twitter.com/bluebill1049"
      onClick={() => {
        track({
          category: 'Link',
          label: 'Twitter',
          action: 'Click - go to Twitter',
        })
      }}
      target="_blank"
      tabIndex={tabIndex}
      title="Bill Luo Twitter"
    >
      @Bill Luo
    </a>{' '}
    with{' '}
    <a
      onClick={() => {
        track({
          category: 'Link',
          label: 'RSA',
          action: 'Click - go to RSA',
        })
      }}
      href="https://github.com/bluebill1049/react-simple-animate"
      target="_blank"
      tabIndex={tabIndex}
      title="React Simple Animate Github"
    >
      React Simple Animate
    </a>{' '}
    +{' '}
    <a
      onClick={() => {
        track({
          category: 'Link',
          label: 'RSI',
          action: 'Click - go to RSI',
        })
      }}
      href="https://github.com/bluebill1049/react-simple-img"
      target="_blank"
      tabIndex={tabIndex}
      title="React Simple Img Github"
    >
      React Simple Img
    </a> +{' '}
    <a
      onClick={() => {
        track({
          category: 'Link',
          label: 'little-state-machine',
          action: 'Click - go to LSM',
        })
      }}
      href="https://github.com/bluebill1049/little-state-machine"
      target="_blank"
      tabIndex={tabIndex}
      title="Little state machine"
    >
      Little State Machine
    </a>
    <br />
    <span style={{ fontSize: 12, lineHeight: 2, marginTop: 5, display: 'block' }}>
      [ Please support the repo by leaving ⭐️. Thank you ❤ ️]
    </span>
  </Footer>
)

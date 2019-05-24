import track from './utils/track'
import * as React from 'react'

export default ({ tabIndex }: any) => (
  <>
    Build with ♡ by{' '}
    <a
      href="https://twitter.com/bluebill1049"
      onClick={() => {
        track({
          category: 'Home Footer CTA',
          label: 'Twitter',
          action: 'go to Twitter',
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
          category: 'Home Footer CTA',
          label: 'RSA',
          action: 'go to RSA',
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
          category: 'Home Footer CTA',
          label: 'RSI',
          action: 'go to RSI',
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
          category: 'Home Footer CTA',
          label: 'little-state-machine',
          action: 'go to LSM',
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
  </>
)

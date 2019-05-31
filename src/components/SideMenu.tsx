import * as React from 'react'
import { Title } from '../styles/typography'
import colors from '../styles/colors'
import styled from 'styled-components'
import track from './utils/track'
import breakpoints from '../styles/breakpoints'

const Menu = styled.aside`
  display: none;
  position: relative;

  @media ${breakpoints.fromMediumScreen} {
    display: block;

    & > ul {
      position: fixed;
      list-style: none;
      margin-top: 0;
      max-width: 250px;
      padding: 0 40px 0 0;

      @media ${breakpoints.fromLargeScreen} {
        max-width: 300px;
      }

      & > li {
        line-height: 22px;
        padding-bottom: 14px;
        font-size: 18px;
        display: flex;

        & > a {
          text-decoration: none;
          padding-left: 10px;
        }

        & > a,
        & > button {
          color: white;
          transition: 0.3s all;
          background: none;
          border: none;
          cursor: pointer;
          border-bottom: 1px solid transparent;
          text-align: left;

          &:hover {
            border-bottom: 1px solid ${colors.lightPink};
          }
        }
      }
    }
  }
`

const TitleList = styled.li`
  display: block !important;
`

const Arrow = styled.span`
  position: relative;
  color: ${colors.lightPink};

  ${props =>
    props.last
      ? `
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    border-left: 1px solid #ec5990;
  }
  `
      : ''};
`

const Code = styled.span`
  color: ${colors.lightPink};
  position: relative;
  font-size: 14px;
`

export default function SideMenu({ links, goToSection, tabIndex, isStatic }: any) {
  return (
    <Menu>
      <ul>
        <TitleList>
          <Title
            style={{
              marginBottom: '10px',
              fontSize: 16,
              color: colors.lightBlue,
            }}
          >
            Quick Menu
          </Title>
        </TitleList>
        {links.map((link, index) => {
          if (isStatic) {
            return (
              <li key={link}>
                <Code>{`</>`}</Code>
                <button
                  onClick={() => {
                    track({
                      category: 'Link',
                      label: 'Examples',
                      action: 'Click - go to examples',
                    })
                    goToSection(link, index)
                  }}
                >
                  {link}
                </button>
              </li>
            )
          }

          return (
            <li
              key={link}
              onClick={() => goToSection(link, index)}
              style={{
                ...(index > 0
                  ? {
                      marginLeft: 10,
                      ...(index !== links.length - 1 ? { borderLeft: '1px solid #ec5990' } : null),
                      ...(index === 3 ? { paddingTop: 10, marginTop: -15 } : null),
                    }
                  : null),
              }}
            >
              <Arrow last={index === links.length - 1}>
                {index > 0 && (
                  <span
                    style={{
                      left: 1,
                      top: 2,
                      position: 'relative',
                    }}
                  >
                    ╴
                  </span>
                )}
              </Arrow>
              {link !== 'Quick Start' && <Code>{`</>`}</Code>}{' '}
              <button
                tabIndex={tabIndex}
                style={{
                  top: '-3px',
                  position: 'relative',
                  ...(link === 'Quick Start' ? { paddingLeft: 0 } : null),
                }}
              >
                {link}
              </button>
            </li>
          )
        })}
        <li>
          <Code>{`</>`}</Code>
          <a
            onClick={() => {
              track({
                category: 'Button',
                label: 'Examples',
                action: 'Click - Go to Examples',
              })
            }}
            href="https://github.com/bluebill1049/react-hook-form/tree/master/examples"
            target="_blank"
            tabIndex={tabIndex}
          >
            Code Examples
          </a>
        </li>
      </ul>
    </Menu>
  )
}

import * as React from "react"
import { Title } from "../styles/typography"
import colors from "../styles/colors"
import styled from "styled-components"
import track from "./utils/track"
import breakpoints from "../styles/breakpoints"

const Menu = styled.aside`
  display: none;
  position: relative;

  @media ${breakpoints.fromMediumScreen} {
    display: block;

    & > div {
      position: fixed;

      @media ${breakpoints.fromLargeScreen} {
        margin-top: -40px;
      }

      & > ul {
        list-style: none;
        margin-top: 0;
        max-width: 200px;
        padding: 0 40px 0 0;
        overflow-y: auto;
        height: calc(100vh - 246px);
        overflow-y: auto;

        @media ${breakpoints.fromLargeScreen} {
          max-width: 250px; 
          height: calc(100vh - 200px);
        }

        & > li {
          line-height: 22px;
          padding-bottom: 10px;
          font-size: 16px;
          display: flex;

          & > a {
            text-decoration: none;
            padding-left: 6px;
            line-height: 20px;
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
  }
`

const TitleList = styled.div`
  width: 200px;
  
  @media ${breakpoints.fromLargeScreen} {
    width: 250px;
    margin-bottom: 20px;

    & > h2 {
      padding: 0;
    }
  }
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
    height: 43%;
    border-left: 1px solid #ec5990;
  }
  `
      : ""};
`

const Code = styled.span`
  color: ${colors.lightPink};
  position: relative;
  font-size: 14px;
  top: -2px;
`

export default function SideMenu({ links, goToSection, isStatic }: any) {
  return (
    <Menu>
      <div>
        <TitleList>
          <Title
            style={{
              fontSize: 16,
              color: colors.lightBlue,
            }}
          >
            Menu
          </Title>
        </TitleList>

        <ul>
          {links.map((link, index) => {
            if (
              ["formcontext", "typescript", "react native"].includes(
                link.toLowerCase()
              ) ||
              isStatic
            ) {
              return (
                <li key={link} onClick={() => goToSection(link, index)}>
                  <Code>{`</>`}</Code>
                  {isStatic ? (
                    <button
                      onClick={() => {
                        track({
                          category: "Link",
                          label: "Examples",
                          action: "Click - go to examples",
                        })
                        goToSection(link, index)
                      }}
                      style={{
                        top: "-3px",
                        position: "relative",
                      }}
                    >
                      {link}
                    </button>
                  ) : (
                    <button
                      style={{
                        top: "-3px",
                        position: "relative",
                        ...(link === "Quick Start" ? { paddingLeft: 0 } : null),
                      }}
                    >
                      {link}
                    </button>
                  )}
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
                        ...(index !== links.length - 4
                          ? { borderLeft: `1px solid ${colors.lightPink}` }
                          : null),
                        ...(index === 3
                          ? { paddingTop: 10, marginTop: -15 }
                          : null),
                      }
                    : null),
                }}
              >
                <Arrow last={index === links.length - 4}>
                  {index > 0 && (
                    <span
                      style={{
                        left: 1,
                        top: -1,
                        position: "relative",
                      }}
                    >
                      ╴
                    </span>
                  )}
                </Arrow>
                {link !== "Quick Start" && <Code>{`</>`}</Code>}{" "}
                <button
                  style={{
                    top: "-3px",
                    position: "relative",
                    ...(link === "Quick Start" ? { paddingLeft: 0 } : null),
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
                  category: "Button",
                  label: "Examples",
                  action: "Click - Go to Examples",
                })
              }}
              rel="noopener noreferrer"
              href="https://github.com/bluebill1049/react-hook-form/tree/master/examples"
              target="_blank"
            >
              Code Examples
            </a>
          </li>
        </ul>
      </div>
    </Menu>
  )
}

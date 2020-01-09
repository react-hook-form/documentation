import * as React from "react"
import { Title } from "../styles/typography"
import colors from "../styles/colors"
import styled from "styled-components"
import breakpoints from "../styles/breakpoints"
import generic from "../data/generic"

const Menu = styled.aside`
  display: none;
  position: relative;

  @media ${breakpoints.fromMediumScreen} {
    display: block;

    & > div {
      position: fixed;
      margin-top: -10px;

      @media ${breakpoints.fromLargeScreen} {
        margin-top: -65px;
      }

      & > ul {
        margin-top: 0;
        max-width: 200px;
        padding: 0;
        overflow-y: auto;
        height: calc(100vh - 236px);
        overflow-y: auto;

        @media ${breakpoints.fromLargeScreen} {
          max-width: 250px;
          height: calc(100vh - 200px);
        }

        @media ${breakpoints.fromXlargeScreen} {
          max-width: 270px;
        }

        & > li {
          line-height: 22px;
          padding-bottom: 8px;
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

function SideMenu({
  links,
  goToSection,
  enLinks,
  isStatic,
  currentLanguage,
}: {
  links: any
  goToSection: Function
  isStatic?: boolean
  enLinks: any
  currentLanguage: string
}) {
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
            {generic.menu[currentLanguage]}
          </Title>
        </TitleList>

        <ul className="scrollArea">
          {links.map((rawLink, index) => {
            const link =
              typeof rawLink === "function" ? rawLink().title : rawLink.title
            const enLink =
              typeof enLinks[index] === "function"
                ? enLinks[index]().title
                : enLinks[index].title

            if (
              [
                "formcontext",
                "controller",
                "errormessage",
                "validationschema",
                "browser built-in validation",
              ].includes((link || "").toLowerCase()) ||
              isStatic
            ) {
              return (
                <li key={link}>
                  <Code>{`</>`}</Code>
                  {isStatic ? (
                    <button
                      onClick={() => {
                        goToSection(enLink, index)
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
                      onClick={() => {
                        goToSection(enLink, index)
                      }}
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
                onClick={() => goToSection(enLink, index)}
                style={{
                  ...(index > 0
                    ? {
                        marginLeft: 10,
                        ...(index !== links.length - 6
                          ? { borderLeft: `1px solid ${colors.lightPink}` }
                          : null),
                        ...(index === 3
                          ? { paddingTop: 10, marginTop: -15 }
                          : null),
                      }
                    : null),
                }}
              >
                <Arrow last={index === links.length - 6}>
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
              rel="noopener noreferrer"
              href="https://github.com/bluebill1049/react-hook-form/tree/master/examples"
              target="_blank"
            >
              {generic.codeExample[currentLanguage]}
            </a>
          </li>
        </ul>
      </div>
    </Menu>
  )
}

export default React.memo(SideMenu)

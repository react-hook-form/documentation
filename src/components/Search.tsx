import { useRef, useEffect } from "react"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"
import searchStyles from "./Search.module.css"
import useWindowSize from "./utils/useWindowSize"
import { LARGE_SCREEN } from "../styles/breakpoints"

const Search = () => {
  const timer = useRef<any>({})
  const { actions, state } = useStateMachine({ updateSetting })
  const { width } = useWindowSize()
  const searchRef = useRef(null)

  useEffect(() => {
    window.docsearch({
      appId: "Z2CKVVT2QA",
      apiKey: "c56a3f265ffbf85c2c654f865cb09164",
      indexName: "react-hook-form",
      inputSelector: "#algolia-doc-search",
    })

    return () => {
      clearTimeout(timer.current)
      actions.updateSetting({
        isFocusOnSearch: false,
      })
    }
  }, [])

  useEffect(() => {
    if (LARGE_SCREEN <= width) {
      actions.updateSetting({
        isFocusOnSearch: true,
      })
    } else {
      actions.updateSetting({
        isFocusOnSearch: false,
      })
      searchRef.current.blur()
    }
  }, [width])

  return (
    <>
      <form className={searchStyles.searchForm}>
        <input
          className={`${searchStyles.searchBar} ${
            state.setting?.isFocusOnSearch ? searchStyles.searchBarOpen : null
          }`}
          spellCheck="false"
          type="search"
          placeholder="Search..."
          aria-label="search input"
          id="algolia-doc-search"
          ref={searchRef}
          {...(state.setting?.isFocusOnSearch || width > LARGE_SCREEN
            ? {
                placeholder: "Search ...",
              }
            : {
                style: {
                  color: "white",
                },
              })}
          onFocus={() =>
            actions.updateSetting({
              isFocusOnSearch: true,
            })
          }
          onBlur={() => {
            timer.current && clearTimeout(timer.current)
            if (LARGE_SCREEN > width) {
              actions.updateSetting({
                isFocusOnSearch: false,
              })
            }
          }}
        />
        {!state.setting?.isFocusOnSearch && (
          <span className={`search icon ${searchStyles.icon}`} />
        )}
      </form>
      <input type="hidden" id="fakeSearch" />
    </>
  )
}
export default Search

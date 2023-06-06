import { useRef, useEffect } from "react"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"
import searchStyles from "./Search.module.css"
import useWindowSize from "./utils/useWindowSize"
import { LARGE_SCREEN } from "../styles/breakpoints"

const Search = () => {
  const { actions, state } = useStateMachine({ updateSetting })
  const { width } = useWindowSize()
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    window?.docsearch?.({
      appId: "Z2CKVVT2QA",
      apiKey: "c56a3f265ffbf85c2c654f865cb09164",
      indexName: "react-hook-form",
      inputSelector: "#algolia-doc-search",
    })

    return () => {
      actions.updateSetting({
        isFocusOnSearch: false,
      })
    }
  }, [actions])

  useEffect(() => {
    if (LARGE_SCREEN <= width) {
      actions.updateSetting({
        isFocusOnSearch: true,
      })
    } else {
      actions.updateSetting({
        isFocusOnSearch: false,
      })
      searchRef.current?.blur()
    }
  }, [width, actions])

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
          onFocus={() =>
            actions.updateSetting({
              isFocusOnSearch: true,
            })
          }
          onBlur={() => {
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

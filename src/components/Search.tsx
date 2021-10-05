import * as React from "react"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"
import * as searchStyles from "./Search.module.css"
import useWindowSize from "./utils/useWindowSize"

const Search = () => {
  const timer = React.useRef<any>({})
  const { actions, state } = useStateMachine({ updateSetting })
  const { width } = useWindowSize()
  const searchRef = React.useRef(null)

  React.useEffect(() => {
    window.docsearch({
      apiKey: "953c771d83fb6ffd55fe58da997f2d9d",
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

  React.useEffect(() => {
    if (1650 <= width) {
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
          aria-label="search input"
          id="algolia-doc-search"
          ref={searchRef}
          {...(state.setting?.isFocusOnSearch
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
            timer.current = setTimeout(() => {
              if (1650 > width) {
                actions.updateSetting({
                  isFocusOnSearch: false,
                })
              }
            }, 310)
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

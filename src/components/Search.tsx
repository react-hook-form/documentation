import * as React from "react"
import { useStateMachine } from "little-state-machine"
import { updateSetting } from "../actions/settingActions"
import * as searchStyles from "./Search.module.css"

const Search = () => {
  const timer = React.useRef<any>({})
  const { actions, state } = useStateMachine({ updateSetting })

  React.useEffect(() => {
    window.docsearch({
      apiKey: "953c771d83fb6ffd55fe58da997f2d9d",
      indexName: "react-hook-form",
      inputSelector: "#algolia-doc-search",
    })

    actions.updateSetting({
      isFocusOnSearch: false,
    })

    return () => {
      clearTimeout(timer.current)
      actions.updateSetting({
        isFocusOnSearch: false,
      })
    }
  }, [])

  return (
    <>
      <form className={searchStyles.searchForm}>
        <input
          className={searchStyles.searchBar}
          spellCheck="false"
          type="search"
          aria-label="search input"
          id="algolia-doc-search"
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
            timer.current = setTimeout(
              () =>
                actions.updateSetting({
                  isFocusOnSearch: false,
                }),
              310
            )
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

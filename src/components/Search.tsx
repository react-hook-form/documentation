import { useRef, useEffect } from "react"
import searchStyles from "./Search.module.css"
import useWindowSize from "./utils/useWindowSize"
import { LARGE_SCREEN } from "../styles/breakpoints"

const Search = ({ focus, setFocus }: { focus: boolean; setFocus }) => {
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
      setFocus(false)
    }
  }, [setFocus])

  useEffect(() => {
    if (LARGE_SCREEN <= width) {
      setFocus(true)
    } else {
      setFocus(false)
      searchRef.current?.blur()
    }
  }, [setFocus, width])

  return (
    <>
      <form className={searchStyles.searchForm}>
        <input
          className={`${searchStyles.searchBar} ${
            focus ? searchStyles.searchBarOpen : null
          }`}
          spellCheck="false"
          type="search"
          placeholder="Search..."
          aria-label="search input"
          id="algolia-doc-search"
          ref={searchRef}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            if (LARGE_SCREEN > width) {
              setFocus(false)
            }
          }}
        />
        {!focus && <span className={`search icon ${searchStyles.icon}`} />}
      </form>
      <input type="hidden" id="fakeSearch" />
    </>
  )
}
export default Search

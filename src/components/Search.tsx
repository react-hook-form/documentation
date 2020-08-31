import React from "react"

import searchStyles from "./Search.module.css"

const Search = () => {
  return (
    <form className={searchStyles.searchForm}>
      <input
        className={searchStyles.searchBar}
        spellCheck="false"
        aria-label="search input"
        id="algolia-doc-search"
        placeholder="Search ..."
      />
    </form>
  )
}
export default Search

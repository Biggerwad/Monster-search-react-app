import React from 'react'

function Search({textCheck}) {
  return (
    <div>
      <input className="s-input" onChange={textCheck} placeholder="Search for Monster here" />
    </div>
  )
}

export default Search

import { useState } from "react"

function NoteHeader({notes , onSort , sortBy}) {
  
  return (
      <div className="header">
        <h1 className="note-app__title">My Note ({notes.length})</h1>
        <select id="note-select__box" value={sortBy} onChange={onSort}>
          <option value="latest">sort based on latest </option>
          <option value="earliest">sort based on earliest </option>
          <option value="completed">sort based on completed </option>
        </select>
        
      </div>
  )
}

export default NoteHeader

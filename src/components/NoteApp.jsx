import React from 'react'
import AddNewNote from './AddNewNote'
import NoteStatus from './NoteStatus'
import NoteList from './NoteList'

function NoteApp({ sortBy }) {
    return (
        <div className="note-main__container">
            <AddNewNote />
            <div className="note-list__status">
                <NoteStatus />
                <NoteList sortBy={sortBy} />
            </div>
        </div>
    )
}

export default NoteApp

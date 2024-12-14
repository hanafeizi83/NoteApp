import { useState } from 'react'
import './App.css'
import AddNewNote from './components/AddNewNote'
import NoteHeader from './components/NoteHeader'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'

function App() {
  const [notes, setNotes] = useState([])
  const handelAddNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote])
  }
  const handelDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }
  const handelCompleteNote = (id) => {
    setNotes(prevNotes => prevNotes.map(note => note.id === id ? { ...note, completed: !note.completed } : note))
  }
  return (
    <div className='container'>
      <NoteHeader />
      <div className="note-main__container">
        <AddNewNote onAddNote={handelAddNote} />
        <div className="note-list__status">
          <NoteStatus notes={notes}/>
          <NoteList notes={notes} onDelete={handelDeleteNote} onComplete={handelCompleteNote} />
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import AddNewNote from './components/AddNewNote'
import NoteHeader from './components/NoteHeader'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'
import NotesProvider from './context/NotesContext'
import NoteApp from './components/NoteApp'
import AppProviders from './providers/AppProviders'

function App() {
  const [sortBy, setSortBy] = useState('latest')

  // const handelAddNote = (newNote) => {
  //   dispatch({ type: 'addNewNote', payload: newNote })
  // }
  // const handelDeleteNote = (id) => {
  //   dispatch({ type: 'deleteNote', payload: id })
  // }
  // const handelCompleteNote = (id) => {
  //   dispatch({ type: 'completeNote', payload: id })
  // }


  return (
    <AppProviders>
      <div className='container'>
        <NoteHeader onSort={e => setSortBy(e.target.value)} sortBy={sortBy} />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProviders>
  )
}

export default App

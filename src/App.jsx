import './App.css'
import AddNewNote from './components/AddNewNote'
import NoteHeader from './components/NoteHeader'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'

function App() {
  return (
    <div className='container'>
      <NoteHeader />
      <div className="note-main__container">
        <AddNewNote />
        <div className="note-list__status">
          <NoteStatus />
          <NoteList />
        </div>
      </div>
    </div>
  )
}

export default App

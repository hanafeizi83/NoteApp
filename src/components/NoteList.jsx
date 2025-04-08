import { TrashIcon } from '@heroicons/react/24/outline'
import { useNotes, useNotesDispatch } from '../context/NotesContext';


function NoteList({ sortBy }) {
  const notes = useNotes()
  let sortedNotes = notes;
  if (sortBy === 'latest') {
    sortedNotes = [...notes].sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
  }
  if (sortBy === 'earliest') {
    sortedNotes = [...notes].sort((a, b) => new Date(a.createAt) - new Date(b.createAt))
  }
  if (sortBy === 'completed') {
    sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))
  }
  return (
    <div className="note-list">
      {
        sortedNotes.map(note => (
          <NoteItem note={note} key={note.id} />
        ))
      }

    </div>
  )
}

export default NoteList

function NoteItem({ note }) {
  const dispatch = useNotesDispatch()
  const options = {
    "year": 'numeric',
    'month': 'short',
    'day': 'numeric'
  };
  return <div className="note-item">
    <div className="note-item__header">
      <div className="note-item__detail">
        <h2>{note.title}</h2>
        <p>{note.description} </p>
      </div>
      <div className="note-item__action">
        <TrashIcon className='note-item__delete' onClick={(e) => dispatch({ type: 'deleteNote', payload: note.id })} />
        <input type="checkbox" onChange={(e) => dispatch({ type: 'completeNote', payload: note.id })} />
      </div>
    </div>
    <div className="note-item__footer">
      <p className="note-item__date">{new Date(note.createAt).toLocaleString('en-US', options)}</p>
    </div>
  </div>
}
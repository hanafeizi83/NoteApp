import { TrashIcon } from '@heroicons/react/24/outline'


function NoteList({ notes, onDelete, onComplete }) {
  return (
    <div className="note-list">
      {
        notes.map(note => (
          <NoteItem note={note} key={note.id} onDelete={onDelete} onComplete={onComplete} />
        ))
      }

    </div>
  )
}

export default NoteList

function NoteItem({ note, onDelete, onComplete }) {
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
        <TrashIcon className='note-item__delete' onClick={(e) => onDelete(note.id)} />
        <input type="checkbox" onChange={(e) => onComplete(note.id)} />
      </div>
    </div>
    <div className="note-item__footer">
      <p className="note-item__date">{new Date(note.createAt).toLocaleString('en-US', options)}</p>
    </div>
  </div>
}
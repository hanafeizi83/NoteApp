import {TrashIcon} from '@heroicons/react/24/outline'


function NoteList() {
  const options = {
    "year": 'numeric',
    'month': 'short',
    'day': 'numeric'
  };
  return (
    <div className="note-list">
      <div className="note-item">
        <div className="note-item__header">
          <div className="note-item__detail">
            <h2>note title</h2>
            <p>note description </p>
          </div>
          <div className="note-item__action">
            <TrashIcon className='note-item__delete'/>
            <input type="checkbox" />
          </div>
        </div>
        <div className="note-item__footer">
          <p className="note-item__date">{new Date().toLocaleString('en-US',options)}</p>
        </div>
      </div>
    </div>
  )
}

export default NoteList

import { useNotes } from "../context/NotesContext";

function NoteStatus() {
  const notes  = useNotes()
  const allNotes = notes.length;
  const completedNotes = notes.filter(note => note.completed).length;
  const openNotes = allNotes - completedNotes;
  return (
    <ul className="note-status__container">
      <li className="note-status__item">
        All
        <span>{allNotes}</span>
      </li>
      <li className="note-status__item">
        Completed
        <span>{completedNotes}</span>
      </li>
      <li className="note-status__item">
        Open
        <span>{openNotes}</span>
      </li>
    </ul>
  )
}

export default NoteStatus

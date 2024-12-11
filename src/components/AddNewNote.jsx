import { useState } from "react"

function AddNewNote() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState([])
  const handelAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: new Date().getTime(),
      title,
      description,
      createAt: new Date().toISOString(),
      completed: false
    }
    setTitle('')
    setDescription('')
    setNotes(prevNotes => [...prevNotes, newNote])
  }
  return (
    <div className="new-note__container">
      <h2 className="new-note__title">Add New Note</h2>
      <form className="add-note__form" onSubmit={handelAddNote}>
        <input
          className="add-note__input"
          type="text"
          placeholder="note title ..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="add-note__input"
          type="text"
          placeholder="note description ... "
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit" className="add-note__btn">Add New Note</button>
      </form>
    </div>
  )
}

export default AddNewNote

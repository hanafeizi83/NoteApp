function AddNewNote() {
  return (
    <div className="new-note__container">
      <h2 className="new-note__title">Add New Note</h2>
      <form className="add-note__form">
        <input className="add-note__input" type="text" placeholder="note title ..."/>
        <input className="add-note__input" type="text" placeholder="note description ... "/>
        <button type="submit" className="add-note__btn">Add New Note</button>
      </form>
    </div>
  )
}

export default AddNewNote

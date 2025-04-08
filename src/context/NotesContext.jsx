import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function notesReducer(notes, { type, payload }) {
    switch (type) {
        case 'addNewNote': {
            return [...notes, payload]
        }
        case 'deleteNote': {
            return notes.filter(note => note.id !== payload)
        }
        case 'completeNote': {
            return notes.map(note => note.id === payload ? { ...note, completed: !note.completed } : note)
        }
    }
}

export default function NotesProvider({ children }) {
    const [notes, dispatch] = useReducer(notesReducer, [])

    return (
        <NotesContext.Provider value={notes}>
            <NotesDispatchContext.Provider value={dispatch}>
                {children}
            </NotesDispatchContext.Provider>
        </NotesContext.Provider>
    )
}

export function useNotes() {
    return useContext(NotesContext)
}
export function useNotesDispatch() {
    return useContext(NotesDispatchContext)
}
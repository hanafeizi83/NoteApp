import { render, screen, fireEvent } from "./../../../test-utils";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import NotesProvider from "../../context/NotesContext";
import AppProviders from "../../providers/AppProviders";

function addNote(notes) {
    const inputTitle = screen.getByPlaceholderText(/note title /i);
    const inputDescription = screen.getByPlaceholderText(/note description /i);
    const button = screen.getByRole('button', { name: 'Add New Note' });

    notes.forEach((note) => {
        fireEvent.change(inputTitle, { target: { value: note.title } });
        fireEvent.change(inputDescription, { target: { value: note.description } });
        fireEvent.click(button);
    })
}

test('Note App Test 1: shoud be input empty after submit', () => {
    render(<NoteApp sortBy={'latest'} />);
    addNote([
        { title: 'note one title', description: 'note one description' }
    ])

    const inputTitle = screen.getByPlaceholderText(/note title /i);
    expect(inputTitle.value).toBe('');

})

test('Note App Test 2: shoud have 3 input', () => {
    render(<NoteApp sortBy={'latest'} />);
    addNote([
        { title: 'note one title', description: 'note one description' },
        { title: 'note one title', description: 'note one description' },
        { title: 'note one title', description: 'note one description' }
    ])

    const divElement = screen.getAllByText(/note one title/i);
    expect(divElement.length).toBe(3);

})

test('Note App Test 3: shoud not have active class in initiol render', () => {
    render(<NoteApp sortBy={'latest'} />);
    addNote([
        { title: 'note one title', description: 'note one description' },
    ])

    const divElement = screen.getByTestId('note-item');
    expect(divElement).not.toHaveClass('completed');

})

test('Note App Test 3: shoud have active class in initiol render', () => {
    render(<NoteApp sortBy={'latest'} />);
    addNote([
        { title: 'note one title', description: 'note one description' },
    ])

    const divElement = screen.getByTestId('note-item');
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(divElement).toHaveClass('completed');

})
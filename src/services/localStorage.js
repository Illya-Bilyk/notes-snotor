import { nanoid } from 'nanoid';

export const getNotes = () => {
  return JSON.parse(localStorage.getItem('notes'));
};

export const getNoteById = async id => {
  try {
    const notes = await getNotes();
    const note = notes.filter(n => n.id === id);
    return note[0];
  } catch (error) {
    console.log('getNoteById -> error:', error);
  }
};

export const deleteNote = async id => {
  try {
    const notes = await getNotes();
    const newNotes = notes.filter(n => n.id !== id);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  } catch (error) {
    console.log('getNoteById -> error:', error);
  }
};

export const addNote = async newNote => {
  const id = nanoid();
  const noteToAdd = { ...newNote, id };

  try {
    let newNotes = [noteToAdd];

    const notes = await getNotes();

    if (notes) {
      newNotes = [...notes, noteToAdd];
    }

    localStorage.setItem('notes', JSON.stringify(newNotes));
  } catch (error) {
    console.log(error.message);
  }
};
export const updateNote = async (id, newNote) => {
  try {
    const noteToUpdate = await getNoteById(id);
    const newComments = [...noteToUpdate.comments, newNote.comments];
    const updatedNote = { ...newNote, comments: newComments };

    const notes = await getNotes();
    const notesToUpdate = notes.filter(n => n.id !== id);

    const newNotes = [...notesToUpdate, updatedNote];
    localStorage.setItem('notes', JSON.stringify(newNotes));
  } catch (error) {
    console.log(error);
  }
};

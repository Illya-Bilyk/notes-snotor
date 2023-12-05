import * as API from '../../services/api';
import { useState, useEffect } from 'react';
import { NotesList } from 'components/NotesList/NotesList';

export const Notes = ({ onEdit }) => {
  const [notes, setNotes] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await API.getNotes();
      setNotes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onDelete = async id => {
    try {
      await API.deleteNote(id);
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.log(error.message);
    }
  };

  return <NotesList items={notes} onDelete={onDelete} onEdit={onEdit} />;
};

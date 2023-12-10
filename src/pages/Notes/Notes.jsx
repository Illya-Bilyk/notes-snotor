import * as API from '../../services/api';
import * as LS from '../../services/localStorage';

import { useState, useEffect } from 'react';
import { NotesList } from 'components/NotesList/NotesList';
import { connect } from 'react-redux';

const Notes = ({ onEdit, savedType }) => {
  const [notes, setNotes] = useState([]);
  const [settings, setSettings] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        let response = [];

        savedType === 'ls'
          ? (response = LS.getNotes())
          : (response = await API.getNotes());

        setNotes(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (settings !== savedType) {
      setSettings(savedType);
      fetchTasks();
    }
  }, [savedType, settings]);

  const onDelete = async id => {
    try {
      savedType === 'ls' ? LS.deleteNote(id) : await API.deleteNote(id);
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.log(error.message);
    }
  };

  return notes || notes.length !== 0 ? (
    <NotesList items={notes} onDelete={onDelete} onEdit={onEdit} />
  ) : (
    <p className="text-info">No notes yet...</p>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Notes);

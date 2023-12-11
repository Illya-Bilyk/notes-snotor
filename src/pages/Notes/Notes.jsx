import * as API from '../../services/api';
import * as LS from '../../services/localStorage';

import { useState, useEffect } from 'react';
import { NotesList } from 'components/NotesList/NotesList';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

const Notes = ({ onEdit, savedType, noteToEdit, editing }) => {
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

    if (settings === 'ls' && noteToEdit === null && editing === false) {
      fetchTasks();
    }
  }, [editing, noteToEdit, savedType, settings]);

  const onDelete = async id => {
    try {
      savedType === 'ls' ? LS.deleteNote(id) : await API.deleteNote(id);
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.log(error.message);
    }
  };

  return notes && notes.length !== 0 ? (
    <NotesList items={notes} onDelete={onDelete} onEdit={onEdit} />
  ) : (
    <>
      <h3 className="text-secondary mb-3">No notes yet...</h3>
      <div className="d-flex">
        <LinkContainer to="/">
          <Button variant="primary">Go to adding</Button>
        </LinkContainer>
      </div>
    </>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Notes);

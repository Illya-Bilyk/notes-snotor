import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import AddEditNote from '../pages/AddEditNote/AddEditNote';
import Notes from 'pages/Notes/Notes';
import { About } from 'pages/About/About';
import { useState } from 'react';
import { connect } from 'react-redux';
import {
  END_EDITING,
  SET_DB_SETTINGS,
  SET_LS_SETTINGS,
  START_EDITING,
} from 'store/actions';

const App = ({
  onDataBaseType,
  onLocalStorageType,
  onStartEditing,
  onEndEditing,
}) => {
  const [note, setNote] = useState();

  const onEdit = noteToEdit => {
    setNote(noteToEdit);
    onStartEditing();
  };

  const clearForm = () => {
    setNote(null);
    onEndEditing();
  };

  const lsSettings = localStorage.getItem('settings');

  lsSettings === 'ls' ? onLocalStorageType() : onDataBaseType();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<AddEditNote noteToEdit={note} clearForm={clearForm} />}
          />
          <Route
            path="notes"
            element={<Notes onEdit={onEdit} noteToEdit={note} />}
          />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDataBaseType: () => dispatch({ type: SET_DB_SETTINGS }),
    onLocalStorageType: () => dispatch({ type: SET_LS_SETTINGS }),
    onStartEditing: () => dispatch({ type: START_EDITING }),
    onEndEditing: () => dispatch({ type: END_EDITING }),
  };
};

export default connect(null, mapDispatchToProps)(App);

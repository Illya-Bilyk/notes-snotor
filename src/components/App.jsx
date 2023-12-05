import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AddNote } from '../pages/AddNote/AddNote';
import { Notes } from 'pages/Notes/Notes';
import { About } from 'pages/About/About';
import { useState } from 'react';

export const App = () => {
  const [note, setNote] = useState();

  const onEdit = noteToEdit => {
    setNote(noteToEdit);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AddNote noteToEdit={note} />} />
          <Route path="notes" element={<Notes onEdit={onEdit} />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

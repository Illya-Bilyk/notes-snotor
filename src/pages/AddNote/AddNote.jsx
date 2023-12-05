// import { HomeItem } from './AddNote.styled';
import { Box } from '../../components/Box';
import * as API from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { NoteForm, NoteEditForm } from 'components/NoteForm';

export const AddNote = ({ noteToEdit }) => {
  const navigate = useNavigate();

  const handleSubmit = async note => {
    try {
      await API.addNote(note);
      navigate('/notes');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSubmit = async note => {
    try {
      await API.updateNote(note.id, note);
      navigate('/notes');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      as="section"
      p={4}
      height="100vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <h1>Notes</h1>

      {noteToEdit ? (
        <NoteEditForm noteToEdit={noteToEdit} onSubmit={handleEditSubmit} />
      ) : (
        <NoteForm onSubmit={handleSubmit} />
      )}
      {/* <HomeItem to="tasks">To your tasks</HomeItem> */}
    </Box>
  );
};

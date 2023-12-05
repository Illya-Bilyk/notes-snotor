import { Box } from '../../components/Box';
import * as API from '../../services/api';
import * as LS from '../../services/localStorage';
import { useNavigate } from 'react-router-dom';
import { NoteForm, NoteEditForm } from 'components/NoteForm';
import { connect } from 'react-redux';

const AddEditNote = ({ noteToEdit, savedType, afterSubmitEdit }) => {
  const navigate = useNavigate();

  const handleSubmit = async note => {
    try {
      savedType === 'ls' ? LS.addNote(note) : await API.addNote(note);

      navigate('/notes');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSubmit = async note => {
    try {
      savedType === 'ls'
        ? LS.updateNote(note.id, note)
        : await API.updateNote(note.id, note);
      navigate('/notes');
      afterSubmitEdit();
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
    </Box>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AddEditNote);

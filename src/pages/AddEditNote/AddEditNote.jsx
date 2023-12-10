import * as API from '../../services/api';
import * as LS from '../../services/localStorage';
import { useNavigate } from 'react-router-dom';
import { NoteForm, NoteEditForm } from 'components/NoteForm';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

const AddEditNote = ({ noteToEdit, savedType, clearForm }) => {
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
      clearForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container
      as="section"
      className="flex-column p-0 bg-background border rounded border-secondary w-75"
    >
      <div className="bg-secondary p-2 px-5 d-flex justify-content-between align-items-center">
        <h1 className="text-light">
          {noteToEdit ? 'Edit your note' : 'Add a new note'}
        </h1>
      </div>
      {noteToEdit ? (
        <NoteEditForm
          noteToEdit={noteToEdit}
          onSubmit={handleEditSubmit}
          savedType={savedType}
        />
      ) : (
        <NoteForm onSubmit={handleSubmit} savedType={savedType} />
      )}
    </Container>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AddEditNote);

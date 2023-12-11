import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NoteEditForm = ({ onSubmit, noteToEdit, savedType }) => {
  const errorNotification = () => toast.error('You have to write something!');

  const { name, content, id } = noteToEdit;

  const handleSubmit = values => {
    const { name, content, author, noteComment } = values;

    if (name.length === 0 && content.length === 0) {
      errorNotification();
      return;
    }

    const createdAt = new Date().toLocaleString();

    const newItem = {
      id,
      name,
      content,
      comments: {
        author,
        noteComment,
        createdAt,
      },
    };

    onSubmit(newItem);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name,
      content,
      author: '',
      comment: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <Container className="p-4">
      <p className="text-dark">
        Current storage:
        <strong> {savedType === 'ls' ? 'Local' : 'Firebase'}</strong>
      </p>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FloatingLabel label="Name of your note">
            <FormControl
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              // defaultValue={name}
              placeholder="Enter name of your note..."
              required
              className="mb-3"
            />
          </FloatingLabel>
        </FormGroup>
        <FormGroup>
          <FloatingLabel label="Your note">
            <FormControl
              type="text"
              as="textarea"
              rows={6}
              id="content"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              // defaultValue={content}
              placeholder="Enter your note..."
              required
              className="h-100 mb-3"
            />
          </FloatingLabel>
        </FormGroup>

        <FormGroup>
          <FloatingLabel label="Enter your name...">
            <FormControl
              type="text"
              name="author"
              id="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              placeholder="Enter your name..."
              required
              className="mb-3"
            />
          </FloatingLabel>
        </FormGroup>

        <FormGroup>
          <FloatingLabel label="Enter comment...">
            <FormControl
              type="text"
              name="noteComment"
              id="noteComment"
              value={formik.values.noteComment}
              onChange={formik.handleChange}
              as="textarea"
              rows={3}
              placeholder="Enter your comment..."
              required
              className="h-100 mb-3"
            />
          </FloatingLabel>
        </FormGroup>

        <Button type="submit" variant="secondary">
          Edit note
        </Button>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

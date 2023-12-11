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

export const NoteForm = ({ onSubmit, savedType }) => {
  const errorNotification = () => toast.error('You have to write something!');

  const handleSubmit = values => {
    const { name, content } = values;

    if (name.length === 0 && content.length === 0) {
      errorNotification();
      return;
    }

    const newItem = {
      name,
      content,
      comments: [],
    };

    onSubmit(newItem);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      content: '',
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
          <FloatingLabel label="Name of note">
            <FormControl
              type="text"
              id="name"
              name="name"
              placeholder="Enter name of your note..."
              required
              className="mb-3"
              value={formik.values.name}
              onChange={formik.handleChange}
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
              placeholder="Enter your note..."
              required
              className="h-100 mb-3"
            />
          </FloatingLabel>
        </FormGroup>
        <Button type="submit" variant="secondary">
          Add note
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

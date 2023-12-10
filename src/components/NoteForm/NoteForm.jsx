import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NoteForm = ({ onSubmit }) => {
  const errorNotification = () => toast.error('You have to write something!');

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const noteName = e.target.elements.name.value;
    const noteContent = e.target.elements.content.value;

    if (noteName.length === 0 && noteContent.length === 0) {
      errorNotification();
      return;
    }

    const newItem = {
      name: noteName,
      content: noteContent,
      comments: [],
    };

    onSubmit(newItem);
    form.reset();
  };
  return (
    <Container className="w-75 py-4">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FloatingLabel controlId="floatingName" label="Name of your note">
            <FormControl
              type="text"
              name="name"
              placeholder="Enter name of your note..."
              required
              className="w-75 mb-3"
            />
          </FloatingLabel>
        </FormGroup>
        <FormGroup>
          <FloatingLabel controlId="floatingContent" label="Your note">
            <FormControl
              type="text"
              as="textarea"
              rows={6}
              name="content"
              placeholder="Enter your note..."
              required
              className="h-100 w-75 mb-3"
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

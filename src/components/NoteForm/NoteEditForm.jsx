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

export const NoteEditForm = ({ onSubmit, noteToEdit }) => {
  const errorNotification = () => toast.error('You have to write something!');

  const { name, content, id } = noteToEdit;

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const noteName = e.target.elements.name.value;
    const noteContent = e.target.elements.content.value;
    const noteAuthor = e.target.elements.author.value;
    const noteComment = e.target.elements.comment.value;

    if (noteName.length === 0 && noteContent.length === 0) {
      errorNotification();
      return;
    }

    const createdAt = new Date().toLocaleString();

    const newItem = {
      id,
      name: noteName,
      content: noteContent,
      comments: {
        author: noteAuthor,
        noteComment,
        createdAt,
      },
    };

    onSubmit(newItem);
    form.reset();
  };
  return (
    <Container className="p-4">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FloatingLabel controlId="floatingName" label="Name of your note">
            <FormControl
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter name of your note..."
              required
              className="mb-3"
            />
          </FloatingLabel>
        </FormGroup>
        <FormGroup>
          <FloatingLabel controlId="floatingName" label="Your note">
            <FormControl
              type="text"
              as="textarea"
              rows={6}
              name="content"
              defaultValue={content}
              placeholder="Enter your note..."
              required
              className="h-100 mb-3"
            />
          </FloatingLabel>
        </FormGroup>

        <FormGroup>
          <FloatingLabel controlId="floatingName" label="Enter your name...">
            <FormControl
              type="text"
              name="author"
              placeholder="Enter your name..."
              required
              className="mb-3"
            />
          </FloatingLabel>
        </FormGroup>

        <FormGroup>
          <FloatingLabel controlId="floatingName" label="Enter comment...">
            <FormControl
              type="text"
              name="comment"
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

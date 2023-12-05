import { Form, Field, Button, Textarea } from './NoteForm.styled';
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
    };

    onSubmit(newItem);
    form.reset();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="name"
          placeholder="Enter name of your note..."
          required
        />
        <Textarea
          type="text"
          name="content"
          as="textarea"
          placeholder="Enter your note..."
          required
        />
        <Button type="submit">Add note</Button>
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
    </>
  );
};

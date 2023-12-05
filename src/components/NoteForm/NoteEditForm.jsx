import { Form, Field, Button, Textarea } from './NoteForm.styled';
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
    <>
      <Form onSubmit={handleSubmit}>
        <Field
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Enter name of your note..."
          required
        />
        <Textarea
          type="text"
          name="content"
          as="textarea"
          defaultValue={content}
          placeholder="Enter your note..."
          required
        />

        <Field
          type="text"
          name="author"
          placeholder="Enter your name..."
          required
        />
        <Textarea
          type="text"
          name="comment"
          as="textarea"
          placeholder="Enter your comment..."
          required
        />
        <Button type="submit">Edit note</Button>
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

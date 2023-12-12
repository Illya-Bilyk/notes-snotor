import {
  Button,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
  FormText,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { editingSchema } from 'utils/validationSchemas';

export const NoteEditForm = ({ onSubmit, noteToEdit, savedType }) => {
  const { name, content, id } = noteToEdit;

  const handleSubmit = values => {
    const { name, content, author, noteComment } = values;

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
    validationSchema: editingSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container className="p-4">
      <p className="text-dark">
        Current storage:
        <strong> {savedType === 'ls' ? 'Local' : 'Firebase'}</strong>
      </p>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <FormGroup className="mb-3">
          <FloatingLabel label="Name of your note">
            <FormControl
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter name of your note..."
              required
              isValid={formik.touched.name && !formik.errors.name}
              isInvalid={formik.touched.name && formik.errors.name}
            />
          </FloatingLabel>
          <FormText>
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger p-2">{formik.errors.name}</div>
            ) : null}
          </FormText>
        </FormGroup>
        <FormGroup className="mb-3">
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
              className="h-100"
              isValid={formik.touched.content && !formik.errors.content}
              isInvalid={formik.touched.content && formik.errors.content}
            />
          </FloatingLabel>
          <FormText>
            {formik.touched.content && formik.errors.content ? (
              <div className="text-danger p-2">{formik.errors.content}</div>
            ) : null}
          </FormText>
        </FormGroup>

        <FormGroup className="mb-3">
          <FloatingLabel label="Enter your name...">
            <FormControl
              type="text"
              name="author"
              id="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              placeholder="Enter your name..."
              required
              isValid={formik.touched.author && !formik.errors.author}
              isInvalid={formik.touched.author && formik.errors.author}
            />
          </FloatingLabel>
          <FormText>
            {formik.touched.author && formik.errors.author ? (
              <div className="text-danger p-2">{formik.errors.author}</div>
            ) : null}
          </FormText>
        </FormGroup>

        <FormGroup className="mb-3">
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
              className="h-100"
              isValid={formik.touched.noteComment && !formik.errors.noteComment}
              isInvalid={
                formik.touched.noteComment && formik.errors.noteComment
              }
            />
          </FloatingLabel>
          <FormText>
            {formik.touched.noteComment && formik.errors.noteComment ? (
              <div className="text-danger p-2">{formik.errors.noteComment}</div>
            ) : null}
          </FormText>
        </FormGroup>

        <Button type="submit" variant="secondary">
          Edit note
        </Button>
      </Form>
    </Container>
  );
};

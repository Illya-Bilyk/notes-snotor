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
import { addingSchema } from 'utils/validationSchemas';

export const NoteForm = ({ onSubmit, savedType }) => {
  const handleSubmit = values => {
    const { name, content } = values;

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
    validationSchema: addingSchema,
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
          <FloatingLabel label="Name of note">
            <FormControl
              type="text"
              id="name"
              name="name"
              placeholder="Enter name of your note..."
              required
              value={formik.values.name}
              onChange={formik.handleChange}
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
        <Button type="submit" variant="secondary">
          Add note
        </Button>
      </Form>
    </Container>
  );
};

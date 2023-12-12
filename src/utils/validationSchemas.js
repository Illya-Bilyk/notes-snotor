import * as Yup from 'yup';

export const addingSchema = Yup.object({
  name: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  content: Yup.string().required('Required'),
});

export const editingSchema = Yup.object({
  name: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  content: Yup.string().required('Required'),
  author: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .test(
      'twoUppercaseWords',
      'Please enter two words with an uppercase letter',
      value => {
        const twoUppercaseWords = value
          .split(' ')
          .filter(word => /[A-Z]/.test(word.charAt(0)));

        return twoUppercaseWords.length === 2;
      }
    )
    .required('Required'),
  noteComment: Yup.string().required('Required'),
});

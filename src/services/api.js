import axios from 'axios';

axios.defaults.baseURL = 'https://637676c1b5f0e1eb850c8064.mockapi.io/api/v1/';

export const getNotes = async () => {
  const response = await axios.get('/notes');

  return response.data;
};

export const getNoteById = async id => {
  const response = await axios.get(`/notes/${id}`);

  return response.data;
};

export const deleteNote = async id => {
  const response = await axios.delete(`/notes/${id}`);

  return response.data;
};

export const addNote = async newNote => {
  const response = await axios.post('/notes', newNote);

  return response.data;
};

export const updateNote = async (id, note) => {
  try {
    const res = await getNoteById(id);

    const newComments = [...res.comments, note.comments];
    const updatedNote = { ...note, comments: newComments };

    const response = await axios.put(`/notes/${id}`, updatedNote);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

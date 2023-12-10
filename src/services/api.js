import axios from 'axios';

axios.defaults.baseURL =
  'https://notes-b0fa8-default-rtdb.europe-west1.firebasedatabase.app';

export const getNotes = async () => {
  const response = await axios.get('/notes.json');

  if (response.data) {
    const values = Object.values(response.data);
    const ids = Object.keys(response.data);

    const notes = [];

    ids.forEach((id, index) => {
      values.forEach((value, indexValue) => {
        if (index === indexValue) {
          return notes.push({ id, ...value });
        }
      });
    });

    return notes;
  } else return [];
};

export const getNoteById = async id => {
  const response = await axios.get(`/notes/${id}.json`);

  return response.data;
};

export const deleteNote = async id => {
  const response = await axios.delete(`/notes/${id}.json`);

  return response.data;
};

export const addNote = async newNote => {
  const response = await axios.post('/notes.json', newNote);

  return response.data;
};

export const updateNote = async (id, note) => {
  try {
    const res = await getNoteById(id);

    let newComments = [];
    if (res.comments) {
      newComments = [...res.comments, note.comments];
    } else newComments = [note.comments];

    const updatedNote = { ...note, comments: newComments };

    const response = await axios.put(`/notes/${id}.json`, updatedNote);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

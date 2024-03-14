import axios from 'axios';

export const getNotes = async () => {
  const response = await axios.get('/api/notes');
  return response.data;
};

export const createNote = async (note) => {
  const response = await axios.post('/api/notes', note);
  return response.data;
};

export const deleteNote = async (noteId) => {
  const response = await axios.delete(`/api/notes/${noteId}`);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post('/api/users/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post('/api/users/register', userData);
  return response.data;
};
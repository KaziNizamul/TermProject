import axios from 'axios';

// Set the base URL for the API requests
axios.defaults.baseURL = 'http://localhost:8000/api';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getNotes = async () => {
  const response = await axios.get('/notes');
  return response.data;
};

export const getNoteById = async (noteId) => {
  const response = await axios.get(`/notes/${noteId}`);
  return response.data;
};

export const updateNoteById = async (noteId, updatedNote) => {
  const response = await axios.patch(`/notes/${noteId}`, updatedNote)
  return response.data;
};

export const createNote = async (note) => {
  const response = await axios.post('/notes', note);
  return response.data;
};

export const deleteNote = async (noteId) => {
  const response = await axios.delete(`/notes/${noteId}`);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post('/users/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post('/users/register', userData);
  return response.data;
};
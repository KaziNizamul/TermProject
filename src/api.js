import axios from "axios";
import {
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import userPool from "./core/userPool";

axios.defaults.baseURL =
  "https://4lguhbgta0.execute-api.us-east-1.amazonaws.com/dev";

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const getNotes = async () => {
  const response = await axios.get("/notes");
  return response.data;
};

export const getNoteById = async (noteId) => {
  const response = await axios.get(`/notes/${noteId}`);
  return response.data;
};

export const updateNoteById = async (noteId, updatedNote) => {
  const response = await axios.put(`/notes/${noteId}`, updatedNote);
  return response.data;
};

export const createNote = async (note) => {
  const response = await axios.post("/notes", note);
  return response.data;
};

export const deleteNote = async (noteId) => {
  const response = await axios.delete(`/notes/${noteId}`);
  return response.data;
};

export const login = async (credentials) => {
  // const response = await axios.post('/users/login', credentials);
  // return response.data;
  const { email = "", password = "", otp = "" } = credentials || {};
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        resolve(result);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};

export const register = async (userData) => {
  // const response = await axios.post('/users/register', userData);
  // return response.data;
  const { email = "", name = "", password = "" } = userData || {};
  const attributeList = [
    new CognitoUserAttribute({ Name: "email", Value: email }),
    new CognitoUserAttribute({ Name: "name", Value: name }),
  ];
  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve({ result, needsVerification: true });
      }
    });
  });
};

export const confirmRegistration = (email, code) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

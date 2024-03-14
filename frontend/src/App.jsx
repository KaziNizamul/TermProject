import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Notes from "./components/pages/Notes";
import NewNote from "./components/pages/NewNotes";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import EditNotePage from "./components/pages/EditNotePage";
import ProtectedRoute from './components/routes/protectedRoute';

function App() {
  const getProtectedComponent = (children) => {
    return <ProtectedRoute>{children}</ProtectedRoute>;
  };

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notes" element={getProtectedComponent(<Notes />)} />
          <Route
            path="/notes/:noteId/edit"
            element={getProtectedComponent(<EditNotePage />)}
          />
          <Route
            path="/new-note"
            element={getProtectedComponent(<NewNote />)}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

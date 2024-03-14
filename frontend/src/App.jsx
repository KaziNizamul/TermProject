import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Notes from "./components/pages/Notes";
import NewNote from "./components/pages/NewNotes";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/new-note" element={<NewNote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

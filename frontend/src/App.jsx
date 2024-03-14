import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Notes from "./components/pages/Notes";
import NewNote from "./components/pages/NewNotes";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

const routes = {
  "/": Notes,
  "/notes": Notes,
  "new-note": NewNote,
  "/login": Login,
  "/register": Register,
};

function App() {
  const routeComponents = Object.entries(routes).map(([path, Component]) => ({
    path,
    element: <Component />,
  }));

  const router = createBrowserRouter(routeComponents);

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

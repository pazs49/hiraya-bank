import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return (
    <>
      <button className="btn">Click</button>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

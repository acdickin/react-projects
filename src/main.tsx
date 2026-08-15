import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Guess from "./Pages/ColorGuesser/Guess";
import MemoryBoard from "./Pages/MemoryBoard/MemoryBoard";
import Post from "./Pages/Posts/DisplayPosts";
import Search from "./Pages/SynonymsSearch/SynonymsSearch";
import Todo from "./Pages/Todo/Todo";
import { Users } from "./Pages/Users/Users";
import { Weather } from './Pages/Weather/Weather';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/synonyms",
        element: <Search />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/memory-game",
        element: <MemoryBoard />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/color-guesser",
        element: <Guess />,
      },
       {
        path: "/Users",
        element: <Users />,
      },
      {
        path:"/weather",
        element:<Weather/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

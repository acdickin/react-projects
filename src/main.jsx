import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './Home.tsx'
import Search from './Pages/SynonymsSearch/SynonymsSearch.tsx'
import Post from './Pages/Posts/DisplayPosts.tsx'
import Guess from './Pages/ColorGuesser/Guess.tsx'
import MemoryBoard from './Pages/MemoryBoard/MemoryBoard.tsx'
import Todo from './Pages/Todo/Todo.tsx'
import ImageSlider from './Pages/ImageSlider/ImageSlider.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
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
        path: "/image-slider",
        element: <ImageSlider />,
      },
      {
        path: "/color-guesser",
        element: <Guess />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

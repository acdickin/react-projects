import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './Home.tsx'
import Search from './SynonymsSearch/SynonymsSearch'
import Post from './Posts/DisplayPosts'
import Guess from './GuessColor/Guess'
import MemoryBoard from './MemoryBoard/MemoryBoard'
import Todo from './Todo/Todo'
import ImageSlider from './ImageSlider/ImageSlider'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tree from './Tree/Tree.tsx'
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element:<Home/>
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
        path: "/guess",
        element: <Guess />,
      },
      {
        path: "/slide",
        element: <ImageSlider />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './Home.tsx'
import Search from './SynonymsSearch/SynonymsSearch'
import MemoryBoard from './MemoryBoard/MemoryBoard'
import Todo from './Todo/Todo'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
        path: "/memory-game",
        element: <MemoryBoard />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

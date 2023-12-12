import './App.css'
import Header from './Header'

import { Outlet } from "react-router-dom";


function App() {

 
  return (
    <> 
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App

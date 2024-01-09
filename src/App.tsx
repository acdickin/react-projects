import './App.css'
import Header from './Header'

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

 const clientQuery = new QueryClient
  return (
    <QueryClientProvider client ={clientQuery}> 
      <Header/>
      <main>
        <Outlet/>
      </main>
    </QueryClientProvider>
  )
}

export default App

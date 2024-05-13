import './App.css'


import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './layout/Layout'

function App() {

  const clientQuery = new QueryClient
  return (
    <QueryClientProvider client={clientQuery}>
      <main>
        <Layout>
          <Outlet />
        </Layout>
      </main>
    </QueryClientProvider>
  )
}

export default App

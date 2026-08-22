import { QueryClient, QueryClientProvider } from 'react-query'
import { Outlet } from 'react-router-dom'
import Seo from './components/Seo'
import './index.css'
import Layout from './layout/Layout'

function App() {
  const clientQuery = new QueryClient()
  return (
    <QueryClientProvider client={clientQuery}>
      <Seo />
      <main className="mx-auto w-full max-w-7xl text-center">
        <Layout>
          <Outlet />
        </Layout>
      </main>
    </QueryClientProvider>
  )
}

export default App

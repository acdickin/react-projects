import { useEffect } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }: any) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname])

  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout

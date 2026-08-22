import { useEffect, useState, useRef } from 'react'
import type { UserData } from '../UserData'

export const useUserData = (limit: number) => {
  const baseUrl = 'https://dummyjson.com/users/'

  const [userData, setUserData] = useState<UserData[]>([])
  const [filter, setFilter] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const cache = useRef<Record<string, UserData[]>>({})

  const fetchData = (url: string) => {
    setIsLoading(true)
    const timeout = setTimeout(() => {
      if (cache.current[url]) {
        setUserData(cache.current[url])
        setIsLoading(false)
        return
      }

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data.users)
          cache.current[url] = data.users
          setIsLoading(false)
        })
    }, 2000)
    return () => clearTimeout(timeout)
  }

  useEffect(() => {
    let url = `${baseUrl}`
    if (filter !== '') {
      url = url + 'search?q=' + filter + '&limit=' + limit
    }
    fetchData(url)
  }, [filter])

  return {
    userData,
    setFilter,
    isLoading,
  }
}

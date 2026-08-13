import {useState,useEffect} from 'react'

export const useDebounce = (query: string, delay: number) => {
    const [debouncedQuery, setDebounceQuery] = useState<string>('');
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceQuery(query)
        }, delay)

        return () => clearTimeout(timeout)
    }, [query, delay])
    return debouncedQuery;
}


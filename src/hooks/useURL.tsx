import { useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export const useURL = () => {
  const params = useParams() // Get URL parameters
  const location = useLocation() // Get current location

  const url = useMemo(() => {
    const id = params.id!.split('&')[0]
    const name = params.id!.split('&')[1] // queryParams
    const hash = location.hash.substring(1)
    const pathname = location.pathname

    const updateHash = (newHash: string) => {
      window.location.hash = newHash
    }

    return {
      id,
      name,
      hash,
      pathname,
      updateHash,
    }
  }, [params, location.hash, location.pathname])

  return url
}

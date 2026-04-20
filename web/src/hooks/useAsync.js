import { useCallback, useEffect, useState } from 'react'

export function useAsync(asyncFn, immediate = true) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(immediate)
  const [error, setError] = useState(null)

  const execute = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await asyncFn()
      setData(result)
      return result
    } catch (err) {
      setError(err)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [asyncFn])

  useEffect(() => {
    if (immediate) {
      const timeoutId = setTimeout(() => {
        execute()
      }, 0)
      return () => clearTimeout(timeoutId)
    }
    return undefined
  }, [execute, immediate])

  return { data, isLoading, error, execute }
}

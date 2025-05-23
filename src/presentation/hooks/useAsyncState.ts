import { useCallback, useState } from 'react'

type AsyncState<T> = {
  data?: T
  loading?: boolean
  error?: string
}

export function useAsyncState<T>(initialState?: AsyncState<T>) {
  const { data, loading, error } = initialState ?? {}

  const [state, setState] = useState<AsyncState<T>>({
    data: typeof data === 'function' ? (data as () => T)() : data,
    loading,
    error,
  })

  const startLoading = useCallback(() => {
    setState(prev => ({
      ...prev,
      loading: true,
    }))
  }, [])

  const stopLoading = useCallback(() => {
    setState(prev => ({
      ...prev,
      loading: false,
    }))
  }, [])

  return [state, setState, startLoading, stopLoading] as const
}

type LocalStorageService = {
  setToLS: <T>(key: string, value: T) => void
  getFromLS: <T>(key: string) => T | null
  removeFromLS: (key: string) => void
}

export function useLocalStorage(): LocalStorageService {
  const setToLS = <T>(key: string, value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  const getFromLS = <T>(key: string) => {
    const value = window.localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : null
  }

  const removeFromLS = (key: string) => {
    window.localStorage.removeItem(key)
  }

  return {
    setToLS,
    getFromLS,
    removeFromLS,
  }
}

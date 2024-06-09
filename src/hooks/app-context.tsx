import { getGenres } from '@/services/movie.api'
import FullAppLoading from '@/components/layout/full-app-loading/full-app-loading'
import { Genre } from '@/types/movie'
import { createContext, useContext, useEffect, useState } from 'react'

export type AppContextType = {
  genres: Genre[]
}

const AppDataContext = createContext<AppContextType>({
  genres: []
})
AppDataContext.displayName = 'AppDataContext'

function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState<AppContextType>({
    genres: []
  })

  useEffect(() => {
    getGenres().then((geners) => {
      setTimeout(() => {
        setAppData({
          ...appData,
          genres: geners
        })
      }, 2000)
    })
  }, [])

  if (appData.genres?.length === 0) {
    return <FullAppLoading />
  }

  return (
    <AppDataContext.Provider value={appData}>
      {children}
    </AppDataContext.Provider>
  )
}

function useAppData() {
  const ctx = useContext(AppDataContext)
  if (ctx === undefined) {
    throw new Error('useAppData must be used within a AppDataProvider')
  }
  return ctx
}

export { AppDataProvider, useAppData }

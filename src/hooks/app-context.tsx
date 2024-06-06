import { Genre } from '@/types/movie'
import { createContext, useContext, useEffect, useState } from 'react'
import { getGenres } from '@/api/movie.api'
import FullAppLoading from '@/components/layout/full-app-loading'

export type AppContextType = {
  geners: Genre[]
}

const AppDataContext = createContext<AppContextType>({
  geners: []
})
AppDataContext.displayName = 'AppDataContext'

function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState<AppContextType>({
    geners: []
  })

  useEffect(() => {
    getGenres().then((geners) => {
      setTimeout(() => {
        setAppData({
          ...appData,
          geners: geners
        })
      }, 2000)
    })
  }, [])

  if (appData.geners.length === 0) {
    return <FullAppLoading />
  }

  return <AppDataContext.Provider value={appData}>{children}</AppDataContext.Provider>
}

function useAppData() {
  const ctx = useContext(AppDataContext)
  if (ctx === undefined) {
    throw new Error('useAppData must be used within a AppDataProvider')
  }
  return ctx
}

export { AppDataProvider, useAppData }

import { useEffect, useMemo, useState } from 'react'

import s from './App.module.css'
import './contexts/themes.css'

import { ThemeContext, themes } from './contexts/theme'

import AppRoutes from './routes'

function App() {
  const [user, setUser] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const valueTheme = useMemo(
    () => ({ theme: currentTheme, toggleTheme }),
    [currentTheme]
  )
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div className="App">
        <div className={s.container}>
          <AppRoutes user={user} setUser={setUser} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App

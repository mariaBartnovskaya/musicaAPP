/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect } from 'react'

import s from './App.module.css'

import { ThemeContext, themes } from './contexts/theme'

import AppRoutes from './routes'

function App() {
  const [user, setUser] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div className="App">
        <div className={s.container}>
          <AppRoutes user={user} setUser={setUser} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App

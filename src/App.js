import { useState } from 'react'

import s from './App.module.css'

import AppRoutes from './routes'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <div className={s.container}>
        <AppRoutes user={user} setUser={setUser} />
      </div>
    </div>
  )
}

export default App

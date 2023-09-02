import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './Components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu/>
      <Outlet/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './Components/Menu'
import Rodape from './Components/Rodape'

 function App() {
  

  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App

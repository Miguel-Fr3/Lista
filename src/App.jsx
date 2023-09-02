import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './Components/Menu'

export default function App() {
  

  return (
    <>
    <Menu/>
      <Outlet/>
    </>
  )
}


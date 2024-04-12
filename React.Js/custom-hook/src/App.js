import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Allroutes from './router/Allroutes'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Allroutes/>
    </div>
  )
}

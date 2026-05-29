import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Board from './board'

function App() { //jsx file 
  return (
    <div className ="app">
      <h1>Sudoku App</h1>
      <Board />
    </div>
  )
}
export default App

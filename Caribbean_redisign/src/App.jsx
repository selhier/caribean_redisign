import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Nav'
import Hero from './hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nabvar/>
    <Hero/>
    </>
  )
}

export default App

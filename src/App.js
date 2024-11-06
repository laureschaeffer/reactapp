import React from 'react'
import Header from './Components/Header.js'
import Counter from './Components/Counter.js'
import "./Counter.css"
import Toggle from './Components/Toggle.js'

export default function App() {
  return (
    <main className='main'>
      <Header />
      <Counter />
      <Toggle />
    </main>
  )
}

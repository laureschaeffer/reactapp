import React from 'react'
import Header from './Components/Header.js'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home.js'
import About from './Components/About.js'
import Toggle from './Components/Toggle.js'
import "./Counter.css"
import ErrorPage from './Components/ErrorPage.js'

export default function App() {
  return (
    <main className='main'>
      <Header />
      <Routes>
        {/* lorsque le navigateur est sur le lien '/', l'élément Home est chargé */}
        <Route path='/' element={<Home />} />
        <Route path='/toggle' element={ <Toggle /> } />
        <Route path='/about' element={ <About /> } />

        {/* page par défaut (mauvaise url par exemple) */}
        <Route path='*' element={ <ErrorPage /> } />
      </Routes>
    </main>
  )
}

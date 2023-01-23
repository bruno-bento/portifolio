import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import db from '../db.json'
import { useState } from 'react'

function App() {
  const projects = db.projects
  const [showDefaultDescription ,setShowDefaultDescription] = useState(true)
  return (
    <div className="app">
      <div className="container">
        <Header setShowDefaultDescription={setShowDefaultDescription}/>
        <Main projects={projects} showDefaultDescription={showDefaultDescription} setShowDefaultDescription={setShowDefaultDescription}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

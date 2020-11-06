import React from 'react'
import Header from './Components/Header'
import './App.css'
import HeroSection from './Components/HeroSection';
import ToolsUsed from './Components/ToolsUsed';
import ProgrammingLanguages from './Components/ProgrammingLanguages';
function App() {
    return (
    <div>
      <Header />
      <HeroSection />
      <ToolsUsed />
      <ProgrammingLanguages />
      <div className="test">
      <h1>in Devolopment....</h1>
      </div>
    </div>
  )
}

export default App;

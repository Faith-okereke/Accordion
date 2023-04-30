import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './accordion'
import { AccordionData } from './data'
import arrowdown from './assets/icon-arrow-down.svg'
import bigImage from './assets/illustration-box-desktop.svg'
import  womanDesktop from './assets/illustration-woman-online-desktop.svg'
import pattern from './assets/bg-pattern-desktop.svg'
import womanDesktop2 from './assets/illustration-woman-online-mobile.svg'
import pattern2 from './assets/bg-pattern-mobile.svg'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='App'>
    <div className="all">
      <div className="images">
      <img className='mainImage' src={bigImage} alt="" />
      <img className='womanDesktop' src= {womanDesktop} alt="" />
      <img className='womanDesktop-2' src= {womanDesktop2} alt="" />
      <img className='pattern-2' src={pattern2} alt="" />
      <img className='pattern' src={pattern} alt="" />
      </div>
    <main>
    <h1>Faq</h1>
    {AccordionData.map(item=>{
      return(
        <Accordion
      question = {item.question}
      answer = {item.answer}

      />
      )
      
    })}
     
    </main>
    </div>
    
   
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import SimplecounterComponent from './Component/Simplecountercomponent'
import PureCounterComponent from './Component/Purecountercomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SimplecounterComponent/>
    <PureCounterComponent/>
    </>
  )
}

export default App

// import { useState } from 'react'
// import { locations } from './data/data.js'
import './App.css'
import Button from './components/Button.jsx'
import { useState } from 'react'
import Text from './components/Text.jsx'
// import Form from './components/Form.jsx'

function App() {
  const [local, setLocal] = useState("town square")
  // const [count, setCount] = useState(0)
  // const [xp, setXp] = useState(0)
  // const [health, setHealth] = useState(100)
  // const [gold, setGold] = useState(50)
  // const [currentWeapon, setCurrentWeapon] = useState(0);
  // const [fighting, setFight] = useState(undefined);
  // const  [monsterHealth, setMonsterHealth] = useState(undefined)
  // let inventory = ["stick"];

  
  const getLocal = (l) => {
    setLocal(l)
  }

  

  return (
    
      <>
      {/* <Form/> */}
      <div>
        {/* <span>XP: {xp}</span>
        <span>Health: {health}</span>
        <span>Gold: {gold}</span> */}
        <Button getLocal={getLocal}/>
        <Text local={local}/>
      </div>
      
      </>
  )
}

export default App

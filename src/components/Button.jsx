import { useState } from "react"
import { locations } from "../data/data.js"

// eslint-disable-next-line react/prop-types
function Button({getLocal}) {
    const [location, setLocation] = useState("town square")
    const entity = locations.filter(x => x.name === location)
    let buttonsArray = []

    for(var i = 0; i < entity[0].buttonText.length; i++) {
        buttonsArray.push({name: entity[0].buttonText[i], function: entity[0].buttonFunctions[i]})
    }

    return <>
    {
    buttonsArray.map(x => 
        <button 
        style={{ margin: '10px 20px' }} 
        key={x.name} 
        onClick={() => {setLocation(x.function), getLocal(x.function)}}>
            {x.name}
        </button>)
    } 

    </>
}

export default Button
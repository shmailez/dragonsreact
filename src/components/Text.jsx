import { locations } from "../data/data.js"


const Text = (local) => {
    
    const entity = locations.filter(x => x.name === local.local)
   
    return <>
        <h1>{local.local}</h1>
        <p>{entity[0].text}</p>
    </>
}

export default Text
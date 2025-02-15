import { useState } from 'react'
import './App.css'

function App() {

    // let counter=0;        variable is used but not propagated in UI  (used useState)

    const [counter,setCounter]=useState(0)

    const addValue =()=>{

    // setCounter(counter+1)         
    // console.log(counter)         in console value increases but not in webpage

      // javascript sends codes in batches so same code do 1 work therefore callback is used to note previous value and incremeant it
    // setCounter((Counter)=>Counter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((C)=>C+1)
    // setCounter(C=>C+1)
    
    if(counter==10) return 
    setCounter(counter+1)
    }
    const removeValue =()=>{
      if(counter==0) return 
      setCounter(counter-1)
    }
  return (
    <>
    <h1>React Course</h1>
    <h2>Counter Value : {counter} </h2>
    <button 
    onClick={addValue}>Add Value</button>{"  "}
    <button
    onClick={removeValue}>Decrease Value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App

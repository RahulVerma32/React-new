import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
 let [length,setLength]=useState(8)
 let [numberAllowed,setNumberAllowed] = useState(false)
 let [charAllowed,setCharAllowed] = useState(false)
 let [password,setPassword] = useState("")
 let passwordRef=useRef("")


 const passwordGenerator = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+=`~!@#$%^&*()_+-={}|":><?[]';.,/""`

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)

 },[length,numberAllowed,charAllowed,setPassword])

 const copyPasswordToClipboard = useCallback (()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,51)  // select a specific range of password
  window.navigator.clipboard.writeText(password)
 },[password])
 
 


useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,setPassword,passwordGenerator])

  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
  <h1 className='text-purple-500 text-center my-5'>Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-blue-100">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-3 px-3"
      placeholder="Password"
      readOnly

      ref={passwordRef}
    />
    <button 
    onClick={copyPasswordToClipboard}
     className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-grab hover:bg-purple-500">Copy
    </button>

  </div>

  <div className='flex text-sm gap-x-2 '>
    <div className='flex items-center gap-x-1'>
    <input type="range" 
    min={8}
    max={50}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    />
    <label>Length: {length}</label>
    </div>

    <div className='flex items-center gap-x-1'>
    <input
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>{
      setNumberAllowed((prev)=>!prev);
    }}
    />
    <label htmlFor='numberInput'>Number</label>
    </div>

    <div className='flex items-center gap-x-1'>
    <input
    type="checkbox"
    defaultChecked={charAllowed}
    id="characterInput"
    onChange={()=>{
      setCharAllowed((prev)=>!prev);
    }}
    />
    <label htmlFor='characterInput'>character</label>
    </div>
  </div>
    
</div>
</>
  )
}

export default App

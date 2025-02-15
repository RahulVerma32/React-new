
import './App.css'
import Card from "./components/Card"

function App() {
  let myObj={
    username:"rahul",
    age:22
  }
  let myarr=[1,2,3,4,5,6];

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-md'>Vite + Tailwind</h1>
      <Card  username ="rahul" location="ranchi" />
      <Card username ="verma"  />
    </>
  )
}

export default App

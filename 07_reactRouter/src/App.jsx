import {  } from 'react'
import './App.css'
import Header from './assets/components/header/header'
import Footer from './assets/components/footer/footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App

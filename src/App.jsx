import { useEffect, useState } from 'react'
import './App.css'
import Auth from './components/Authentication'
import {auth} from "./config/firebase"
import { onAuthStateChanged} from 'firebase/auth'
import Home from './components/Home'

function App() {
  const [user, setUser] = useState("")
  const[logged, setLogged] = useState(false)

  // Check logged in.
  useEffect(()=>{
    onAuthStateChanged(auth, (obj)=>{
      if(obj){
        setUser(obj.uid)
        setLogged(true)
      }
    })
  },[])

  return (
    logged ? <Home user={user} setLogged={setLogged}/> :<Auth setLogged={setLogged} setUser={setUser} />
  )
}

export default App

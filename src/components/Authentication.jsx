import React, { useState } from "react";
import {auth, googleProvider} from "../config/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import './Styles/auth.css'

export default function Auth({setLogged, setUser}) {
    const [side, setSide] = useState("LOGIN")

    async function handleSubmit(e){
        e.preventDefault()
        
        let form = e.target
        let email = form[0].value;
        let password = form[1].value;
        
        try{
            await signInWithEmailAndPassword(auth, email, password)
            // await createUserWithEmailAndPassword(auth, email, password)
            
            setUser(auth.currentUser.uid)
            setLogged(true)
        }
        catch(error){
            console.error(error)
        }
        
        form.reset()
    }

    async function googleSign(){
        try{
            await signInWithPopup(auth, googleProvider)
            setLogged(true)
        }
        catch(error){
            console.error(error)
        }
    }
    
    return(
        <div id="auth">
            <div className="authDraw">
                <h4>{side}</h4>
                <form action="submit" className="loginForm" onSubmit={handleSubmit}>
                    <input type="email" placeholder="person@mail.com" required className="log"/>
                    <input type="password" placeholder="Password" className="log" />
                    <input type="submit" className="submit"/>
                </form>

                <div className="logOther">
                    <p>Sign in with</p>
                    <div className="otherOpt">
                        <div className="opts" id="goog"  onClick={googleSign}></div>
                    </div>
                    <p>Don't have an account... <span>Sign Up</span></p>
                </div>
            </div>
        </div>
    )
}
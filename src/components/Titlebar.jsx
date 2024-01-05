import React from "react";
import {auth} from "../config/firebase"
import {signOut } from 'firebase/auth'
import './Styles/titlebar.css'

export default function TitleBar({setLogged}) {

    function logOut(){
        try{
            signOut(auth)
            setLogged(false)
        }
            catch(error){
            console.error(error)
        }
    }

    return(
        <div id="tBar">
            <button id="logout" onClick={logOut}>logout</button>
        </div>
    )
}
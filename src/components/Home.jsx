import React from "react";
import TitleBar from "./Titlebar";
import './Styles/home.css'

export default function Home({user, setLogged}) {

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
        <div id="home">
            <TitleBar setLogged={setLogged}/>
        </div>
    )
}
import React from "react";
import './Styles/titlebar.css'

export default function TitleBar({page, setLogged}) {

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
            <h3>{page}</h3>
            <p>  search Bar</p>
        </div>
    )
}
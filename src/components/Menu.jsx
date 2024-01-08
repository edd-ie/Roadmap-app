import React, { useState } from "react";
import './Styles/menu.css'
import {auth} from "../config/firebase"
import {signOut } from 'firebase/auth'

export default function Menu({setDisplay, setLogged}) {

    const [prev, setPrev] = useState('Dashboard')

    const [active, setActive] = useState({
        Dashboard:true,
        Targets:false,
        Courses:false,
        Stats:false,
    })

    function status(e){
        return e ? " active":'';
    }

    function logOut(){
        try{
            signOut(auth)
            setLogged(false)
        }
            catch(error){
            console.error(error)
        }
    }


    function changeDisplay(name){
        console.log(active[name]);
        //TODO: Fix active toggle
        setActive({...active, [active[prev]]:false, [active[name]]:true})
        
        setPrev(name)
    }
    console.table(active)

    return(
        <div className="menu">
            <div className="logo">
                <h2>RoadMap</h2>
            </div>
            <div className="cabinet" id="card1">
                <div className={`drawer ${active.Dashboard?'active':''}`} onClick={()=>{changeDisplay("Dashboard")}}>
                    <div className="icon">
                        <span class="material-symbols-sharp">
                            dashboard
                        </span>
                    </div>
                    <div className="textBox">Dashboard</div>
                </div>
                <div className={`drawer${status(active.Targets)}`} onClick={(e)=>{changeDisplay("Targets")}}>
                    <div className="icon">
                        <span class="material-symbols-sharp">
                        track_changes
                        </span>
                    </div>
                    <div className="textBox">Targets</div>
                </div>
                <div className={`drawer${status(active.Courses)}`} onClick={()=>{changeDisplay("Courses")}}>
                    <div className="icon">
                        <span class="material-symbols-sharp">
                        library_books
                        </span>
                    </div>
                    <div className="textBox">Courses</div>
                </div>
                <div className={`drawer${status(active.Stats)}`} onClick={()=>{changeDisplay("Stats")}}>
                    <div className="icon">
                        <span class="material-symbols-sharp">
                        monitoring
                        </span>
                    </div>
                    <div className="textBox">Stats</div>
                </div>
            </div>
            <div className="cabinet" id="card2">
                <div className="util">

                </div>
                <div className="exitBtn" onClick={logOut}>
                    <div className="eBtn">
                        <span class="material-symbols-sharp">
                        logout
                        </span>
                    </div>
                    <div className="textBox">Log Out</div>
                </div>
            </div>
        </div>
    )
}
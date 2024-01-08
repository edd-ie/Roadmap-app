import React, { useEffect, useState } from "react";
import {db} from '../config/firebase'
import { getDocs, collection, query, where } from "firebase/firestore";

import './Styles/home.css'
import TitleBar from "./Titlebar";
import Menu from "./Menu";

export default function Home({user, setLogged}) {

    const [courses, setCourses] = useState([])
    const courseCollection = query(collection(db, "courses"), where("userID", "==", user))
    
    const [display, setDisplay] = useState("Dashboard");


    useEffect(()=>{
        // Read data
        const getCourses = async()=>{            
            try{
                const raw = await getDocs(courseCollection)
                const data = raw.docs.map((doc)=>
                    ({...doc.data(), id:doc.id})
                )
                setCourses(data)
            }
            catch(error){
                console.error(error)
            }
        };

        getCourses()
    },[])

    return(
        <div id="home">
            <TitleBar page={display} setLogged={setLogged}/>
            <Menu setDisplay={setDisplay} setLogged={setLogged}/>
        </div>
    )
}
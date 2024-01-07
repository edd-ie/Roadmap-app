import React from "react";
import './Styles/menu.css'

export default function Menu({setDisplay}) {
    
    return(
        <div className="menu">
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <div className="cabinet" id="card1">
                <div className="drawer">
                    <div className="icon"></div>
                    <div className="textBox">Dashboard</div>
                </div>
                <div className="drawer">
                    <div className="icon"></div>
                    <div className="textBox">Goals</div>
                </div>
                <div className="drawer">
                    <div className="icon"></div>
                    <div className="textBox">Courses</div>
                </div>
                <div className="drawer">
                    <div className="icon"></div>
                    <div className="textBox">Stats</div>
                </div>
            </div>
            <div className="cabinet" id="card2">

            </div>
        </div>
    )
}
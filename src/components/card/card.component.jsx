import React from "react"

import "./card.style.css"


function errorFunction(e) {
    //alert("Image not found!!")
    console.log("Image not found!!",e.target);
    e.target.src="https://via.placeholder.com/300/666/FFFFFF/?text=Image Not Found"
}

export const Card = (props) => (
    <div className="card-container">
    <img src={props.image} key={props.image} id={props.image} className="animal-image" alt="Not found" onError={(e) => errorFunction(e)}></img>
    </div>
)
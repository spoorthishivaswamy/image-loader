import React from "react"

import "./card.style.css"


function errorFunction () {
//alert("Image not found!!")
 console.log("Image not found!!");
 //e.target.src 
}

export const Card = (props) => (
    <div className="card-container">
   <div> <img src={props.image} className="animal-image" alt="Not found" onError={errorFunction}></img></div>
    </div>
)
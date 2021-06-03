import React from "react"

import "./card.style.css"


function errorFunction  () {
  alert("Image not found!!")
 console.log("Image not found!!");
}

export const Card = (props) =>(
    
    <div className="card-container">
        <img src={props.image}  width="200" height="340" alt="Not found" onError={errorFunction}></img>
    </div>
)


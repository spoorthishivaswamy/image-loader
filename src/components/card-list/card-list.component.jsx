import React from 'react'
import {Card} from "../card/card.component"
import { Link } from 'react-router-dom'
import "./card-list.style.css"

export const CardList= (props) =>{
    return <div className="card-list">{props.images.map (image =>(
      <Link to='/description' replace><Card key={image} image ={image}/></Link> 
    ))}</div>
}

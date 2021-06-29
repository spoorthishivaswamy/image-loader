import React from 'react'
import "./dark-light-mode.style.css"

class DarkLightMode extends React.Component {  
    render() {
        return(
        <button  onClick= {this.props.callBack}>Toggle dark mode</button> 
        )
    }
}

export default DarkLightMode
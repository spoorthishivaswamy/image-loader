import CardList from "./components/card-list/card-list.component"
import DarkLightMode from "./components/dark-light-mode/dark-light-mode.component"
import {Router} from "./components/route/route.component"
import './App.css';
import React from "react";

let arr = [
  'https://placekitten.com/200/300',
  'https://place.dog/350/250',
  'https://placekittenn.com/600/800',
  'https://place.dog/1000/200',
  'https://placekitten.com/250/900',
  'https://place.dog/100/100',
  'https://placekitten.com/600/300',
  'https://place.dog/800/900'
]
function changeBackground (darkMode){
  console.log("changeBackground",darkMode);
  if(darkMode){
  document.body.style.backgroundColor='#fff'
  }
  else{
    document.body.style.backgroundColor='#121212'
  }
}
class App extends React.Component {
  state = {
    darkMode: false
  }
  toggleMode = () => {
    console.log("toggleMode")
    this.setState(prevState => ( 
      changeBackground(prevState.darkMode),{
      darkMode: !prevState.darkMode
    }))
  }
  render() {
    return (
      <div className={this.state.darkMode.toString()}>
        <Router/>
        <h1 style={{textAlign:"center"}}>Cats and Dogs</h1>
        <div className="dark-light-mode"><DarkLightMode callBack={this.toggleMode}/></div>
        <CardList images={arr} />
      </div>
    )
  }
}

export default App;

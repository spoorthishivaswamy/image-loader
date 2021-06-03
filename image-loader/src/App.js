import {CardList} from "./components/card-list/card-list.component"
import './App.css';

let arr = [
  'https://placekitten.com/200/300',
  'https://place.dog/350/250',
  'https://placekittenn.com/600/800',
  'https://place.dog/1000/200',
  'https://placekitten.com/250/900',
  'https://placee.dog/100/100',
  'https://placekitten.com/600/300',
  'https://place.dog/800/900'
]
function App() {
  return (
    <div className="App">
    <CardList images = {arr}/>
    </div>
  );
}

export default App;

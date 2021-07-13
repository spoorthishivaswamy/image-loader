import React from 'react'
import { Card } from "../card/card.component"
import { Link } from 'react-router-dom'
import Drawer from "../drawer/drawer.component"
import "./card-list.style.css"

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false
    }
  }
  closeDrawer() {
    console.log("CloseDrawer")
    this.setState({
      showDrawer: false
    })
  }

  openDrawer(image) {
    console.log('openDrawer')
    this.setState({
      showDrawer: !this.state.showDrawer,
      image:image
    })
  }
  render() {
    return (
      <div className="card-list">
        {this.props.images.map(image => (
        <span key={image} onClick={() => this.openDrawer(image)}>
          <Card key={image} image={image}/>
        </span>
      ))}

<Drawer show={this.state.showDrawer} onClose={this.closeDrawer.bind(this)} image={this.state.image}/> 
      </div>
    )
  }

}

export default CardList;
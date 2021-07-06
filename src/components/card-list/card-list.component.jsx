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

  openDrawer() {
    console.log('openDrawer')
    this.setState({
      showDrawer: !this.state.showDrawer
    })
  }
  render() {
    return (
      <div className="card-list">{this.props.images.map(image => (
        <Link to='/description' replace>
          <span onClick={() => this.openDrawer()}><Card key={image} image={image} /></span>
          <Drawer show={this.state.showDrawer} onClose={this.closeDrawer.bind(this)} image={image} />
        </Link>
      ))}</div>
    )
  }

}

export default CardList;
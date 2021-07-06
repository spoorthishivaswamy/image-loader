import React from "react"

class Drawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.drawerStyle = {
      position: 'fixed',
      top: '0px',
      right: '-300px',
      height: '100%',
      width: '300px',
      background: '#2f2f2f',
      overflowX: 'hidden',
      overflowY: 'scroll',
      webkitOverflowScrolling: 'touch'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.drawerStyle = Object.assign({}, this.drawerStyle, { right: '0px' })
    }
    console.log(this.drawerStyle, nextProps)
    this.setState({
      nextProps
    })
  }

  render() {
    console.log("image", this.props.image);
    return (
      <div>
        {
          this.props.show &&
          <div id="drawer" style={this.drawerStyle}>
            <div className="drawer-container" style={{ color: "#fff" }}>
              {this.props.image}
            </div>
            <div>
              <button onClick={this.props.onClose} style={{
                position: 'absolute', bottom: '0px',
                height: '40px',
                width: '100px',
                fontSize: '16px',
                margin: '11px'
              }}>close</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Drawer
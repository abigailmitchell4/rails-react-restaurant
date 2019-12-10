import React from 'react'
import MenuForm from './MenuForm'
import { Button, Icon, } from 'semantic-ui-react'

class Menu extends React.Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({editing: !this.state.editing})
  }

  render () {
    return (
      <div style={{display: 'flex'}}>
        {
        this.state.editing ?
        <MenuForm name={this.props.name} time={this.props.time} id={this.props.id} editMenu={this.props.editMenu} toggleEdit={this.toggleEdit}/>
        :
        <div>
          <h3>{this.props.name} {this.props.time}</h3>
        </div>
      }
        <Button
          icon
          color="green"
          size="tiny"
          style={{ marginLeft: "15px" }}
          onClick={this.toggleEdit}
        >
        <Icon name="edit"/>
        </Button>
        <Button
          icon
          color="red"
          size="tiny"
          style={{ marginLeft: "15px" }}
          onClick={() => this.props.removeMenu(this.props.id)}
        >
        <Icon name="trash"/>
      </Button>
    </div>
    )
  }
}

export default Menu
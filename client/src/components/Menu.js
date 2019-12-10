import React from 'react'
import axios from 'axios';
import MenuForm from './MenuForm'
import ItemList from './ItemList'
import ItemForm from './ItemForm'
import { Button, Icon, Segment} from 'semantic-ui-react'

class Menu extends React.Component {
  state = { 
    items: [],
    editing: false } 

  toggleEdit = () => {
    this.setState({editing: !this.state.editing})
  }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.id}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      })
      .catch( err => {
        console.log(err);
    })
  }

  addItem = (name, description) => {
    axios.post(`/api/menus/${this.props.id}/items`, { name }, {description})
      .then( res => {
        this.setState({ items: [...this.state.items, res.data], });
      })
  }

  render () {
    return (
      <div className="padding1">
        <Segment className="padding1">
          {
          this.state.editing ?
          <MenuForm name={this.props.name} time={this.props.time} id={this.props.id} editMenu={this.props.editMenu} toggleEdit={this.toggleEdit}/>
          :
          <div className="flex">
            <h3>{this.props.name} {this.props.time}</h3>
          </div>
        }
          <ItemForm addItem={this.addItem}/>
          <ItemList 
            items={this.state.items}
            removeItem={this.removeItem}
            editItem={this.editItem}
          />
          <Button
            icon
            color="green"
            size="tiny"
            style={{ marginLeft: "15px"}}
            onClick={this.toggleEdit}
          >
          <Icon name="edit"/>
          </Button>
          <Button
            icon
            color="red"
            size="tiny"
            style={{ marginLeft: "15px"}}
            onClick={() => this.props.removeMenu(this.props.id)}
          >
          <Icon name="trash"/>
        </Button>
      </Segment>
    </div>
    )
  }
}

export default Menu
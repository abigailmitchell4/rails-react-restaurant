import React from 'react'
import ItemForm from './ItemForm'
import { Button, Icon, List,} from 'semantic-ui-react'

class Item extends React.Component {
  state = { editingItem: false } 

  toggleItemEdit = () => {
    this.setState({editingItem: !this.state.editingItem})
  }


  render () {
    return (
      <div className="padding1">
        <List className="padding1 flex">
          {
          this.state.editingItem ?
          <ItemForm name={this.props.name} description={this.props.description} id={this.props.id} editItem={this.props.editItem} toggleEditItem={this.toggleEditItem}/>
          :
          <List.Item>
            <h3>{this.props.name} {this.props.description}</h3>
          </List.Item>
        }
          <Button
            icon
            color="green"
            size="tiny"
            style={{ marginLeft: "15px" }}
            onClick={this.toggleEditItem}
          >
          <Icon name="edit"/>
          </Button>
          <Button
            icon
            color="red"
            size="tiny"
            style={{ marginLeft: "15px" }}
            onClick={() => this.props.removeItem(this.props.id)}
          >
          <Icon name="trash"/>
        </Button>
      </List>
    </div>
    )
  }
}

export default Item
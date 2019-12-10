import React from 'react'
import { Form } from 'semantic-ui-react'

class ItemForm extends React.Component {
state = { name: "", description: "" };

handleItemChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, })
}

handleItemSubmit = (e) => {
  e.preventDefault();
  if (this.props.id) {
    this.props.editItem(this.props.id, this.state.name, this.state.description)
    this.props.toggleEditItem()
  }
  else {
    this.props.addItem(this.state.name)
    this.setState({ name: "", description: ""})
  }
}

  render() {
    return (
      <div>
      <Form onSubmit={this.handleItemSubmit} >
      <Form.Input
        label="Item"
        placeholder="Add an Item"
        required
        name="name"
        value={this.state.name}
        onChange={this.handleItemChange}
      />
      </Form>
      
      <Form onSubmit={this.handleItemSubmit}>
      <Form.Input
        label="Description"
        placeholder="Add a description for this item"
        name="description"
        value={this.state.description}
        onChange={this.handleItemChange}
      />
      <Form.Button color="blue" inverted>Submit</Form.Button>
      </Form>
    </div>
    )
  }
}

export default ItemForm
import React from 'react'
import { Form } from 'semantic-ui-react'

class MenuForm extends React.Component {
  state = { name: "", time: "" };

  componentDidMount() {
    if (this.props.id) {
      const { } = this.props;
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editMenu(this.props.id, this.state)
      this.props.toggleEdit()
    }
    else {
      this.props.addMenu(this.state.name)
      this.setState({ name: "", time: ""})
    }
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.handleSubmit} >
      <Form.Input
        label="Menu"
        // placeholder="Add A Menu"
        required
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
      />
      </Form>
      
      <Form onSubmit={this.handleSubmit}>
      <Form.Input
        label="Time"
        // placeholder="Add a time for this menu"
        required
        name="time"
        value={this.state.time}
        onChange={this.handleChange}
      />
      <Form.Button color="blue" inverted>Submit</Form.Button>
      </Form>
    </div>
    )
  }
}

export default MenuForm
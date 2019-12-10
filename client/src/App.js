import React from 'react';
import axios from 'axios';
import MenuForm from './components/MenuForm'
import MenuList from './components/MenuList'
import { Container, } from "semantic-ui-react";
import './App.css';

class App extends React.Component {
  state = { menus: [], }

componentDidMount() {
  axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu = (name) => {
    debugger
    axios.post('/api/menus', { name })
      .then( res => {
        this.setState({ menus: [...this.state.menus, res.data], });
      })
  }

  // updateMenu = (id) => {
  //   axios.put(`/api/menus/${id}`)
  //     .then( res => {
  //       const menus = this.state.menus.map( m => {
  //       if (m.id === id)
  //         return res.data;
  //       return m;
  //     });
  //     this.setState({ menus, });
  //   })
  // }

  editMenu = (id, name, time) => {

    axios.put(`/api/menus/${id}`, {name}, {time})
      .then( res => {
        const menus = this.state.menus.map( m => {
        if (m.id === id)
          return id;
        return res.data;
      });
      this.setState({ menus: [...this.state.menus, res.data], });
    })
    debugger
  }

  removeMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus } = this.state
        this.setState({ menus: menus.filter(m => m.id !== id), })
      })

  }


  render () {
    return (
      <Container style={{ padding: "30px 0", }}>
        <h1>
          Restaurant
        </h1>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList 
          menus={this.state.menus}
          removeMenu={this.removeMenu}
          editMenu={this.editMenu}
          />
      </Container>
    );
  }
}

export default App;

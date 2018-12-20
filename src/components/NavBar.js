import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Menu tabular widths={2} fluid>
          <LinkedItem to="/">Documentation Home</LinkedItem>
          <LinkedItem to="/app">Main Application</LinkedItem>
        </Menu>
      </Container>
    )
  }
}

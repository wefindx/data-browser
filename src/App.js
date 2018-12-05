import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

import {
  Card,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody,
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup, InputGroupAddon, Input,
  ButtonDropdown
} from 'reactstrap';

import ReactMarkdown from 'react-markdown';

class App extends Component {

  state = { body: { results: []}, dropdownOpen: false }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  makeRequest = () => {
    fetch('https://inf.wefindx.com/topics/')
    .then(function(response) {
      return response.json()
    }).then((body) => {
      this.setState({ body })
      console.log(this.state)
    })
  }

  componentWillMount() {
    this.makeRequest();
  }

  render() {
    console.log(this.state.body)
    const items = this.state.body['results'];
    const listItems = items.map((item) =>
      <Card key={item.id}>
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardSubtitle>
            {item.updated_date}
          </CardSubtitle>
          <ReactMarkdown source={item.body} />
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
        </CardBody>
      </Card>
    );
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </InputGroupAddon>
            <Input placeholder="Search" />
          </InputGroup>
        </Navbar>
        <CardColumns>
          {listItems}
        </CardColumns>
      </React.Fragment>
    );
  }
}

export default App;

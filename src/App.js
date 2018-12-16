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
  InputGroup, Input
} from 'reactstrap';

import ReactMarkdown from 'react-markdown';

class App extends Component {

  state = { body: { results: []} }

  makeRequest = () => {
    fetch('https://test.wefindx.io/topics/?lang=cn&only=1&is_draft=0&type__not=4')
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
          {/*<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='480' />*/}
        </CardBody>
      </Card>
    );

    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <InputGroup>
            <Input placeholder="Search..." />
          </InputGroup>
        </Navbar>
        <CardColumns className="CardColumns">
          {listItems}
        </CardColumns>
      </React.Fragment>
    );

  }
}

export default App;

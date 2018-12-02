import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetch as fetchPolyfill} from 'whatwg-fetch'


class App extends Component {

  state = { body: { results: []} }

  makeRequest = () => {
    fetch('https://inf.wefindx.com/topics/')
    .then(function(response) {
      return response.json()
    }).then((body) => {
      this.setState({ body })
    })
  }

  componentWillMount() {
    this.makeRequest();
  }

  render() {
    console.log(this.state.body)
    const items = this.state.body['results'];
    const listItems = items.map((item) =>
      <li key={item.id}>{item.title}</li>
    );
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default App;

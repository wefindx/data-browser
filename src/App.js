import React, { Component } from 'react';
import './App.css';
/* eslint-disable */
import {fetch as fetchPolyfill} from 'whatwg-fetch'
/* eslint-enable */


class App extends Component {

  state = { body: { results: []} }

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

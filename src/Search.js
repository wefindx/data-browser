import React from 'react';
import './App.css';
import queryString from 'query-string';
import { Get } from "restful-react";

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

class Search extends React.PureComponent {
  timeout = 0;

  handleSearch = (searchQuery) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    const search = queryString.stringify(searchQuery);

    this.timeout = setTimeout(
      () =>
        this.props.history.push({
          ...this.props.location,
          search,
        }),
      1500,
    );
  }

  onChangeSearch = (e) => {
    const searchQuery = queryString.parse(this.props.location.search);
    searchQuery.search = e.target.value;
    this.handleSearch(searchQuery);
  }

  render() {
    const queryParams = queryString.parse(this.props.location.search);
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <InputGroup>
            <Input onChange={this.onChangeSearch} placeholder="Search..." />
          </InputGroup>
        </Navbar>
        <Get
          path="/topics/"
          queryParams={queryParams}
        >
          {(data, { loading, error }) => {
            if (loading) {
              return <div>Loading data...</div>;
            }

            if (error) {
              return <div>The request did not succeed.</div>;
            }
            return (
              <CardColumns className="CardColumns">
                {data.results.map((item) => (
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
                ))}
              </CardColumns>
            );
          }}
        </Get>
      </React.Fragment>
    );
  }
}

export default Search;

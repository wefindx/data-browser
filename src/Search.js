import React from 'react';
import './App.css';
import { Fetch } from 'react-request';
import queryString from 'query-string';

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

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Fetch url={`https://test.wefindx.io/topics/${this.props.location.search}`}>
          {({ fetching, failed, data }) => {
            if (fetching) {
              return <div>Loading data...</div>;
            }

            if (failed) {
              return <div>The request did not succeed.</div>;
            }

            if (data) {
              return (
                <React.Fragment>
                  <Navbar color="light" light expand="md">
                    <InputGroup>
                      <Input placeholder="Search..." />
                    </InputGroup>
                  </Navbar>
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
                </React.Fragment>
              );
            }

            return null;
          }}
        </Fetch>
      </React.Fragment>
    );
  }
}

export default Search;

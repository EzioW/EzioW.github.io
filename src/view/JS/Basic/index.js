import React, { Component } from 'react';
import { Table } from 'antd';

import Title from 'component/ModuleTitle';

import Prototype from '../../../images/prototype.jpg';

const Closures = `function init() {
  var name = 'Seraph'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

/*
* Use for Closures
* 1.Get the Variables in Function
* 2.Let these Variables in Memory
*/
`;

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getColumns = this.getColumns.bind(this);
    this.getDataSource = this.getDataSource.bind(this);
  }

  getColumns = () => [{
    key: 'Code',
    dataIndex: 'Code',
    title: 'Code',
  }, {
    key: 'Note',
    dataIndex: 'Note',
    title: 'Note',
  }]

  getDataSource = () => [{
    key: 200,
    Code: 200,
    Note: 'OK',
  }, {
    key: 201,
    Code: 201,
    Note: 'Created',
  }, {
    key: 202,
    Code: 202,
    Note: 'Accepted',
  }, {
    key: 300,
    Code: 300,
    Note: 'Multiple choice',
  }, {
    key: 302,
    Code: 302,
    Note: 'Found',
  }, {
    key: 400,
    Code: 400,
    Note: 'Bad Request',
  }, {
    key: 401,
    Code: 401,
    Note: 'Unauthorized',
  }, {
    key: 402,
    Code: 402,
    Note: 'Payment Required',
  }, {
    key: 403,
    Code: 403,
    Note: 'Forbidden',
  }, {
    key: 404,
    Code: 404,
    Note: 'Not Found',
  }, {
    key: 405,
    Code: 405,
    Note: 'Method Not Allowed',
  }, {
    key: 406,
    Code: 406,
    Note: 'Not Acceptable',
  }, {
    key: 408,
    Code: 408,
    Note: 'Request Timeout',
  }, {
    key: 500,
    Code: 500,
    Note: 'Internal Server Error',
  }, {
    key: 502,
    Code: 502,
    Note: 'Bad Gateway',
  }, {
    key: 503,
    Code: 503,
    Note: 'Service Unavailable',
  }, {
    key: 504,
    Code: 504,
    Note: 'Gateway Timeout',
  }]

  render() {
    return (
      <diiv>
        <Title
          mainTitle="Prototype"
          subTitle="Just one pic (picture is taked from an unnamed blog)"
        />
        <img src={Prototype} />
        <Title
          mainTitle="Closures"
          subTitle="Code from Mozilla"
        />
        <pre>{ Closures }</pre>
        <Title
          mainTitle="HTTP"
          subTitle="Too many here's some of them usually come up"
        />
        <Table
          size="small"
          pagination={false}
          columns={this.getColumns()}
          dataSource={this.getDataSource()}
        />
      </diiv>
    );
  }
}

export default Basic;

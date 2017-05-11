import React, { Component } from 'react';
import CSSGrid from 'component/Grid';
import './style.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 24 }}>Try Something New</span>&emsp;<span>(main with grid layout)</span>
        <CSSGrid />
      </div>
    );
  }
}

export default Home;

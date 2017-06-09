import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
import Title from 'component/ModuleTitle';

import './style.less';

class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonSrc: '',
    };
  }

  handleChangeJson = (e) => {
    this.setState({
      jsonSrc: e.target.value,
    });
  }

  handleTransform = () => {
    this.setState({
      jsonRes: JSON.stringify(this.state.jsonSrc),
    });
  }

  render() {
    return (
      <div className="tip-wrapper">
        <Title mainTitle="Some Tool" />

        <div className="json-wrapper">
          <div className="json-str">
            <Input
              type="textarea"
              autosize
              onChange={this.handleChangeJson}
            />
          </div>
          <div className="json-button">
            <Button onClick={this.handleTransform}>transform</Button>
          </div>
          <div className="json-str">
            <Input
              type="textarea"
              autosize
              value={this.state.jsonRes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tool;

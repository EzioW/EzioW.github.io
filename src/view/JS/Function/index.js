import React, { Component } from 'react';
import { Card, Button, Input, InputNumber } from 'antd';
import GhostFace from 'component/GhostFace';
import './style.less';

class FunctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGhost: 0,
      generateID: 0,
      pasteText: '',
      rate: 5,
      isPrime: false,
    };
  }

  handleCreateGenerateID = () => {
    const generateID = `x${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    this.setState({
      generateID,
    });
  }

  handleCreateTree = (treeData) => {
    const createTree = data => data.map((item) => {
      const newData = {};
      if (item.children.length) {
        newData.children = createTree(item.children);
      }
      return newData;
    });
    return createTree(treeData);
  }

  handleChagePaste = (e) => {
    this.setState({
      showGhost: 0,
      pasteText: e.target.value,
    });
  }

  handlePaste = (e) => {
    e.preventDefault();
    this.setState({
      showGhost: 1,
    });
  }

  handleChageRate = (value) => {
    this.setState({ rate: value });
  }

  handleChangePrime = (value) => {
    this.setState({ isPrime: !(/^.?$|^(..+?)\1+$/).test('1'.repeat(value)) });
  }

  render() {
    const { showGhost, generateID, pasteText, rate, isPrime } = this.state;
    return (
      <div className="function-wrapper">
        <Card
          title="Create A GenerateID"
          className="GenerateID"
        >
          <Button onClick={this.handleCreateGenerateID}>Create</Button>
          <div className="content">{generateID}</div>
        </Card>
        <Card
          title="Paste Forbidden"
          className="Paste"
        >
          <div className="content">Forbid paste with javascript</div>
          <Input
            value={pasteText}
            onChange={this.handleChagePaste}
            placeholder="try paste something"
            onPaste={this.handlePaste}
          />
          <GhostFace visible={showGhost === 1} text="Input Word One By One !" />
        </Card>
        <Card
          title="Create Star"
          className="star"
        >
          <InputNumber
            min={0}
            max={5}
            value={rate}
            onChange={this.handleChageRate}
            placeholder="input a number"
          />
          <div>
            <br />
            <span>{'★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate)}</span>
          </div>
        </Card>
        <Card
          title="Test A Number is Prime"
          className="star"
        >
          <InputNumber
            onChange={this.handleChangePrime}
            defaultValue={0}
          />
          <div>
            <br />
            <span>{`${isPrime}`}</span>
          </div>
        </Card>
      </div>
    );
  }
}

export default FunctionPage;

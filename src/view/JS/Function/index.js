import React, { Component } from 'react';
import { Card, Button, Input } from 'antd';
import GhostFace from 'component/GhostFace';
import './style.less';

class FunctionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGhost: 0,
      generateID: 0,
      pasteText: '',
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

  render() {
    const { showGhost, generateID, pasteText } = this.state;
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
      </div>
    );
  }
}

export default FunctionPage;

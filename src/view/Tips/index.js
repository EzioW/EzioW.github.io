import React, { Component } from 'react';
import { Table, Collapse, Input, Icon, Button } from 'antd';
import Title from 'component/ModuleTitle';

import './style.scss';

const Panel = Collapse.Panel;

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
    };
  }

  componentWillMount() {
    this.DocData = [{
      name: 'Mozilla',
      url: 'https://developer.mozilla.org',
    }, {
      name: 'Mozilla',
      url: 'https://developer.mozilla.org',
    }];
    this.QAData = [{
      description: '',
      type: 'JS',
      problem: '',
      answer: '',
      note: '',
    }, {
      description: '',
      type: 'CSS',
      problem: '',
      answer: '',
      note: '',
    }, {
      description: '',
      type: 'CSS',
      problem: '',
      answer: '',
      note: '',
    }];
    this.setState({
      DocData: this.DocData,
      QAData: this.QAData,
    });
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      DocData: this.DocData.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }

  getDocColumns = () => [{
    key: 'name',
    dataIndex: 'name',
    title: 'name',
    filterDropdown: (
      <div className="custom-filter-dropdown">
        <Input
          ref={ele => this.searchInput = ele}
          placeholder="Search name"
          value={this.state.searchText}
          onChange={this.onInputChange}
          onPressEnter={this.onSearch}
        />
        <Button type="primary" onClick={this.onSearch}>Search</Button>
      </div>
      ),
    filterIcon: <Icon type="search" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
    filterDropdownVisible: this.state.filterDropdownVisible,
    onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }, () => this.searchInput.focus()),
  }, {
    key: 'url',
    dataIndex: 'url',
    title: 'url',
    render: text => <a
      href={text}
      target="_blank"
      rel="noopener noreferrer"
    >{text}</a>,
  }]

  getQAColumns = () => [{
    key: 'description',
    dataIndex: 'description',
    title: 'description',
  }, {
    key: 'type',
    dataIndex: 'type',
    title: 'type',
    sorter: (a, b) => a.type < b.type ? 1 : -1,
  }, {
    key: 'problem',
    dataIndex: 'problem',
    title: 'problem',
  }, {
    key: 'answer',
    dataIndex: 'answer',
    title: 'answer',
  }, {
    key: 'note',
    dataIndex: 'note',
    title: 'note',
  }]

  render() {
    return (
      <div className="tip-wrapper">
        <Title mainTitle="Some Tips" />
        <Collapse bordered={false} style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <Panel header={'DOC Url'} className="seraph-panel">
            <Table columns={this.getDocColumns()} dataSource={this.state.DocData} pagination={false} />
          </Panel>
          <Panel header={'QA List'} className="seraph-panel">
            <Table columns={this.getQAColumns()} dataSource={this.state.QAData} pagination={false} />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default Tips;

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
      name: 'NPM',
      url: 'https://www.npmjs.com/',
    }];
    this.QAData = [{
      description: 'webpack开发配置文件',
      type: 'JS',
      problem: 'webpack-dev-server开发时打包过慢',
      answer: '取消UglifyJsPlugin 这东西凶残的很 耗时不是一般的长',
      note: 'UglifyJsPlugin在开发和生产要注意区别，慎重使用',
    }, {
      description: '依赖ant 的Spin来实现loading画面，需要手动建立全窗口遮罩层',
      type: 'CSS',
      problem: '用padding:50%不能实现height 100%',
      answer: '一层一层设置height:100%',
      note: 'margin 和 padding 用百分比都是基于父级的width 而不能依据 height 需要一层层设置height:100%',
    }, {
      description: 'cookie',
      type: 'JS',
      problem: '后端接口需要cookie',
      answer: '在fetch请求中里加入credentials:"same-origin"',
      note: `credentials 是Request接口的只读属性，用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
      这与XHR的withCredentials 标志相似，不同的是有三个可选值（后者是两个）：
        omit: 从不发送cookies.
        same-origin: 只有当URL与响应脚本同源才发送cookies.
        include: 总是发送cookies, 即使来自跨域的请求`,
    }, {
      description: '折行',
      type: 'CSS',
      problem: '超出部分省略号显示',
      answer: '利用overflow: “hidden“,whiteSpace: “nowrap“,textOverflow: “ellipsis“ 解决',
      note: '三个属性缺一不可',
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
          ref={ele => (this.searchInput = ele)}
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
    onFilterDropdownVisibleChange: visible => this.setState({
      filterDropdownVisible: visible,
    }, () => this.searchInput.focus()),
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
    sorter: (a, b) => (a.type < b.type ? 1 : -1),
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
            <Table
              columns={this.getDocColumns()}
              dataSource={this.state.DocData}
              pagination={false}
            />
          </Panel>
          <Panel header={'QA List'} className="seraph-panel">
            <Table
              columns={this.getQAColumns()}
              dataSource={this.state.QAData}
              pagination={false}
            />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default Tips;

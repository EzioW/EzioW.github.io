import React, { Component } from 'react';
import { Table, Input } from 'antd';
import Title from 'component/ModuleTitle';

import './style.scss';

class CSSGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrapperStyle: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        gridGap: '10px',
      },
      cell: [{}, {}, {}, {}, {}, {}],
    };
    this.expandedRowRender = this.expandedRowRender.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  getColumns() {
    return [{
      key: 'proptype',
      dataIndex: 'proptype',
      title: 'proptype',
    }, {
      key: 'note',
      dataIndex: 'note',
      title: 'note',
    }];
  }

  getDataSource() {
    return [{
      key: 1,
      proptype: 'container',
      note: 'layout container',
    }, {
      key: 2,
      proptype: 'cell',
      note: 'grid cell children',
    }];
  }

  handleChangeValue(value, record, key) {
    if (record.proptype) {
      const newCell = [].concat(this.state.cell);
      newCell[record.key][key] = value;
      this.setState({
        cell: newCell,
      });
    } else {
      const newStyle = Object.assign({}, this.state.wrapperStyle);
      newStyle[record.key] = value;
      this.setState({
        wrapperStyle: newStyle,
      });
    }
  }

  expandedRowRender(info) {
    let columns = [];
    let dataSource = [];
    if (info.proptype === 'container') {
      columns = [{
        key: 'keyNmae',
        dataIndex: 'keyName',
        title: 'keyName',
      }, {
        key: 'value',
        dataIndex: 'value',
        title: 'value',
        render: (text, record) => {
          if (record.keyName === 'display') {
            return <span>{text}</span>;
          }
          return (<Input
            value={this.state.wrapperStyle[record.key]}
            onChange={(e) => {
              this.handleChangeValue(e.target.value, record);
            }}
          />);
        },
      }];
      dataSource = [{
        key: 'display',
        keyName: 'display',
        value: 'grid (cant be changed)',
      }, {
        key: 'gridTemplateColumns',
        keyName: 'grid-template-columns',
        value: '',
      }, {
        key: 'gridAutoRows',
        keyName: 'grid-auto-rows',
        value: '',
      }, {
        key: 'gridGap',
        keyName: 'grid-gap',
        value: '',
      }];
    } else if (info.proptype === 'cell') {
      columns = [
        {
          key: 'proptype',
          dataIndex: 'proptype',
          title: 'proptype',
        }, {
          key: 'grid-column',
          dataIndex: 'grid-column',
          title: 'grid-column',
          render: (text, record) => <Input
            style={{ width: 60 }}
            value={this.state.cell[record.key].gridColumn}
            onChange={(e) => {
              this.handleChangeValue(e.target.value, record, 'gridColumn');
            }}
          />,
        }, {
          key: 'grid-row',
          dataIndex: 'grid-row',
          title: 'grid-row',
          render: (text, record) => <Input
            style={{ width: 60 }}
            value={this.state.cell[record.key].gridRow}
            onChange={(e) => {
              this.handleChangeValue(e.target.value, record, 'gridRow');
            }}
          />,
        }];
      dataSource = this.state.cell.map((item, index) => ({
        key: index,
        proptype: `cell-${index + 1}`,
        gridColumn: item.gridColumn,
        gridRow: item.gridRow,
      }));
    }
    return <Table columns={columns} dataSource={dataSource} pagination={false} size="small" />;
  }

  render() {
    const state = this.state;
    return (
      <div className="css-grid">
        <Title
          mainTitle="Try Something New"
          subTitle="main with grid layout"
        />
        <div className="grid-wrapper">
          <div className="view">
            <div
              className="wrapper"
              style={state.wrapperStyle}
            >
              {
                state.cell.map((item, index) => <div
                  key={index}
                  className={`cell-${index}`}
                  style={state.cell[index]}
                >{`Cell ${index + 1}`}</div>)
              }
            </div>
          </div>
          <div className="note">
            <Table
              columns={this.getColumns()}
              dataSource={this.getDataSource()}
              expandedRowRender={this.expandedRowRender}
              bordered
              pagination={false}
              size="small"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CSSGrid;

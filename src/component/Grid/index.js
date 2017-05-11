import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import './style.less';

class CSSGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getColumns() {
    return [{
      key: 'proptype',
      dataIndex: 'proptype',
      title: 'proptype',
    }, {
      key: 'value',
      dataIndex: 'value',
      title: 'value',
    }, {
      key: 'default',
      dataIndex: 'default',
      title: 'default',
    }, {
      key: 'note',
      dataIndex: 'note',
      title: 'note',
    }];
  }

  getDataSource() {
    return [{
      key: 1,
      proptype: 'display',
      value: 'grid',
      default: '',
    }, {
      key: 2,
      proptype: 'grid-template-columns',
      value: '[column x width], xfr',
      default: '',
    }, {
      key: 3,
      proptype: 'grid-template-rows',
      value: '[row x height], xfr',
      default: 'init',
    }, {
      key: 4,
      proptype: 'grid-area',
      value: '1 / 1 / 2 / 3',
      default: '',
    }, {
      key: '1',
      proptype: 'display',
      value: 'grid',
      default: 'init',
    }, {
      key: '1',
      proptype: 'display',
      value: 'grid',
      default: 'init',
    }, {
      key: '1',
      proptype: 'display',
      value: 'grid',
      default: 'init',
    }, {
      key: '1',
      proptype: 'display',
      value: 'grid',
      default: 'init',
    }, {
      key: '1',
      proptype: 'display',
      value: 'grid',
      default: 'init',
    }, {
      key: '1',
      proptype: 'display',
      value: 'grid',
      default: 'init',
    }];
  }

  render() {
    const tip = `为啥不能这行呢！
    为啥不信个！？！？`;
    const className = this.props.className;
    return (
      <div className={`${className} css-grid`}>
        <span className="title">Grid</span>
        <div className="grid-wrapper">
          <div className="view">
            <div className="wrapper">
              <div className="one">One</div>
              <div className="two">Two</div>
              <div className="three">Three</div>
              <div className="four">Four</div>
              <div className="five">Five</div>
              <div className="six">Six</div>
            </div>
          </div>
          <div className="note">
            <Table
              columns={this.getColumns()}
              dataSource={this.getDataSource()}
              bordered
              pagination={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

CSSGrid.propTypes = {
  className: PropTypes.string,
};


CSSGrid.defaultProps = {
  className: '',
};

export default CSSGrid;

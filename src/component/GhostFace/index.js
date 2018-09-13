import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

import './style.scss';
import ghostface from '../../images/ghostface.jpg';

class GhostFace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { className, visible, text } = this.props;
    return (
      <div className={`${className}`}>
        <Tooltip
          visible={visible}
          title={<div>
            <img className="ghost-face" src={ghostface} alt="" />
            <span>{text}</span>
          </div>}
        />

      </div>
    );
  }
}

GhostFace.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  text: PropTypes.string,
};

GhostFace.defaultProps = {
  className: '',
  visible: false,
  text: '',
};

export default GhostFace;

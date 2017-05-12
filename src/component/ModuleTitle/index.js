import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ModuleTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`${this.props.className} module-title`}>
        <div className="main-title">{this.props.mainTitle}</div>
        <div className="sub-title">{this.props.subTitle}</div>
      </div>
    );
  }
}

ModuleTitle.propTypes = {
  className: PropTypes.string,
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
};

ModuleTitle.defaultProps = {
  className: '',
  mainTitle: '',
  subTitle: '',
};


export default ModuleTitle;

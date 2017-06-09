import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from 'component/ModuleTitle';

class NewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`${className} `}>
        <Title
          mainTitle="Title"
          subTitle="subTitle"
        />
      </div>
    );
  }
}

NewComponent.propTypes = {
  className: PropTypes.string,
};

NewComponent.defaultProps = {
  className: '',
};

export default NewComponent;

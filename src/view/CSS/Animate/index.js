import React, { Component } from 'react';
import { Collapse } from 'antd';

import './style.less';

const Panel = Collapse.Panel;

class CSSAnimate extends Component {

  render() {
    return (
      <div className="css-animate">
        <Collapse>
          <Panel />
        </Collapse>
      </div>
    );
  }
}

export default CSSAnimate;

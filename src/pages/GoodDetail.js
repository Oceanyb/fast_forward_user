import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

class GoodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >商品详情</NavBar>
      </>
    );
  }
}

export default GoodDetail;
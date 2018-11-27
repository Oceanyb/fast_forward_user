import React, { Component } from "react";
import { NavBar } from "antd-mobile";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar>首 页</NavBar>
      </>
    );
  }
}

export default Home;

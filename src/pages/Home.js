import React, { Component } from "react";
import { NavBar, Card, Flex } from "antd-mobile";

class Home extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      ...props
    };
  }

  render() {
    return (
      <>
        <NavBar style={{ backgroundColor: "#44A754" }}>首 页</NavBar>
        <Card
          style={{ margin: 3 }}
          onClick={() => this.props.history.push("/GoodDetail")}
        >
          <Card.Header
            title={
              "微信web开发者工具,微信web开发者工具,微信web开发者工具,微信web开发者工具,微信web开发者工具"
            }
          />
          <Card.Body
            style={{
              marginRight: 16
            }}
          >
            <Flex justify="between">
              <Flex.Item>
                <img
                  src={
                    "http://img.zcool.cn/community/018f19559deb796ac7257aea2d2084.jpg"
                  }
                  alt=""
                  style={{ width: 88, height: 88, borderRadius: 5, flex: 1 }}
                />
              </Flex.Item>
              <Flex.Item>
                <Flex direction='column' align='end'>
                  <span style={{ fontSize: 22, color: "red" }}>￥{"1288"}</span>
                  <span style={{ fontSize: 16, color: "gray", marginTop: 10 }}>库存: {20}</span>
                </Flex>
              </Flex.Item>
            </Flex>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Home;

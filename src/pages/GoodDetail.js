import React, { Component } from "react";
import { NavBar, Icon, Card, Flex } from "antd-mobile";

class GoodDetail extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      ...props,
    };
  }

  render() {
    return (
      <>
        <NavBar
          style={{ backgroundColor: "#44A754" }}
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >
          商品详情
        </NavBar>
        {/* <NoticeBar
          marqueeProps={{ loop: true, style: { padding: "0 7.5px" } }}
          // mode="link"
          // onClick={() => alert("1")}
        >
          Notice: 
        </NoticeBar> */}
        <Card
          style={{ marginTop: 3 }}
          full
        >
          <Card.Header
            title={
              "微信web开发者工具,微信web开发者工具,微信web开发者工具,微信web开发者工具,微信web开发者工具"
            }
          />
          <Card.Body
            style={{
              paddingRight: 16
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
                <Flex direction="column" align="end">
                  <span style={{ fontSize: 22, color: "red" }}>￥{"1288"}</span>
                  <span style={{ fontSize: 16, color: "gray", marginTop: 10 }}>
                    库存: {20}
                  </span>
                </Flex>
              </Flex.Item>
            </Flex>
          </Card.Body>
          <Card.Footer>
            <span>商品详情</span>
          </Card.Footer>
        </Card>
      </>
    );
  }
  componentDidMount() {}
}

export default GoodDetail;

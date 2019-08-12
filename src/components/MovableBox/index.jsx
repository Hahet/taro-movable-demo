import Taro, { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
// 引入 MovableArea, MovableView 组件
import {
  MovableArea,
  MovableView,
  Image,
  View,
  Button
} from "@tarojs/components";

class Index extends Component {
  state = {
    vertex: {
      x: 20,
      y: 20
    }
  };

  handleClick = () => {
    let { vertex } = this.state;
    let { label, src } = this.props;
    let params = {
      image: src,
      label,
      vertex
    };
    console.log("params", params);
    // 这里可以把图片、label以及 他们的位置关系发送给后端
  };

  handleChange = e => {
    console.log("e", e);
    // 移动 标签的时候会触发， 可以取到 MovableView 相对于 MovableArea的位置
    const { x, y } = e.detail;
    const vertex = { x, y };
    this.setState({
      vertex
    });
  };
  render() {
    const { src, label } = this.props;
    const { vertex } = this.state;
    const { x, y } = vertex;
    return (
      <View>
        <MovableArea style="height: 280px; width: 375px; background: #aaa;">
          <Image
            mode="scaleToFill"
            style="height: 280px; width: 375px;"
            src={src}
          ></Image>
          {label && (
            <MovableView
              onChange={this.handleChange}
              x={50}
              y={50}
              style="height: 20px; width: 80px; background: rgba(0,0,0, 0.5); font-size: 12px; color: #fff"
              direction="all"
            >
              {label}
            </MovableView>
          )}
        </MovableArea>
        <Button onClick={this.handleClick}>确认</Button>
      </View>
    );
  }
}

Index.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

Index.defaultProps = {
  label: "",
  src: ""
};

export default Index;

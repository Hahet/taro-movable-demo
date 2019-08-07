import Taro, { Component } from "@tarojs/taro";
// 引入 MovableArea, MovableView 组件
import {
  MovableArea,
  MovableView,
  Image,
  View,
  Button
} from "@tarojs/components";

class App extends Component {
  vertex = {
    x: 0,
    y: 0
  };

  handleClick = () => {
    console.log("vertex", this.vertex);
  };

  handleChange = e => {
    console.log("e", e);
    // 移动 标签的时候会触发， 可以取到 MovableView 相对于 MovableArea的位置
    const { x, y } = e.detail;
    this.vertex = {
      x,
      y
    };
  };
  render() {
    return (
      <View>
        <MovableArea style="height: 300px; width: 375px; background: red;">
          <Image
            mode="scaleToFill"
            style="height: 300px; width: 375px;"
            src="http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg"
          ></Image>
          <MovableView
            onChange={this.handleChange}
            style="height: 20px; width: 80px; background: rgba(0,0,0, 0.5); font-size: 12px; color: #fff"
            direction="all"
          >
            这是一个测试
          </MovableView>
        </MovableArea>
        <Button onClick={this.handleClick}>确认</Button>
      </View>
    );
  }
}

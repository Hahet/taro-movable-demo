import Taro, { Component } from "@tarojs/taro";
// 引入 MovableArea, MovableView 组件
import {
  MovableArea,
  MovableView,
  Image,
  View,
  Button
} from "@tarojs/components";
import "./index.scss";
import MovableBox from "../../components/MovableBox";
class App extends Component {
  state = {
    label: "",
    images: [],
    labels: ["hello world", "flex", "测试用例", "gogogo"]
  };
  handleClick = () => {
    let params = {
      // 只允许选择一张图片
      count: 1
    };
    //
    // https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html
    Taro.chooseImage(params).then(data => {
      console.log("data", data);
      // tempFilePaths 是个数组

      let { tempFilePaths } = data;
      // 将 图片url数组保存到 state的 images里
      // 这个路径只是一个 其实你手机上的位置， 依赖于你的手机， 别人没法看）。 想要真正保存图片需要
      // 上传 到自己服务器 生成一个真正的url：使用uploadFile 上传 https://nervjs.github.io/taro/docs/apis/network/fileTransfer/uploadFile.html#docsNav
      this.setState({
        images: tempFilePaths
      });
    });
  };

  handleLabelClick = label => {
    console.log("label:", label);
    this.setState({
      label
    });
  };
  render() {
    let { images, labels, label } = this.state;
    // 取出图片url
    let image = images[0];

    return (
      <View>
        <Button onClick={this.handleClick}>选择图片</Button>

        <View className="labels">
          {labels.map(item => {
            return (
              <View
                key={item}
                onClick={this.handleLabelClick.bind(this, item)}
                className="label"
              >
                {item}
              </View>
            );
          })}
        </View>
        <MovableBox
          src={image}
          label={label}
          style="width: 375px;height: 250px;background: #aaa;"
        ></MovableBox>
      </View>
    );
  }
}

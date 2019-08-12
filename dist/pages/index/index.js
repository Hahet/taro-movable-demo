"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 引入 MovableArea, MovableView 组件

var _App = (_temp2 = _class = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__5", "labels", "label", "images"], _this.state = {
      label: "",
      images: [],
      labels: ["hello world", "flex", "测试用例", "gogogo"]
    }, _this.handleClick = function () {
      var params = {
        // 只允许选择一张图片
        count: 1
      };
      //
      // https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html
      _index2.default.chooseImage(params).then(function (data) {
        console.log("data", data);
        // tempFilePaths 是个数组

        var tempFilePaths = data.tempFilePaths;
        // 将 图片url数组保存到 state的 images里
        // 这个路径只是一个 其实你手机上的位置， 依赖于你的手机， 别人没法看）。 想要真正保存图片需要
        // 上传 到自己服务器 生成一个真正的url：使用uploadFile 上传 https://nervjs.github.io/taro/docs/apis/network/fileTransfer/uploadFile.html#docsNav

        _this.setState({
          images: tempFilePaths
        });
      });
    }, _this.handleLabelClick = function (label) {
      console.log("label:", label);
      _this.setState({
        label: label
      });
    }, _this.customComponents = ["MovableBox"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(_App.prototype.__proto__ || Object.getPrototypeOf(_App.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__5 = (0, _index.genCompid)(__prefix + "$compid__5");

      var _state = this.__state,
          images = _state.images,
          labels = _state.labels,
          label = _state.label;
      // 取出图片url

      var image = images[0];

      _index.propsManager.set({
        "src": image,
        "label": label,
        "style": "width: 375px;height: 250px;background: #aaa;"
      }, $compid__5);
      Object.assign(this.__state, {
        $compid__5: $compid__5
      });
      return this.__state;
    }
  }]);

  return _App;
}(_index.Component), _class.$$events = ["handleClick", "handleLabelClick"], _class.$$componentPath = "pages/index/index", _temp2);

exports.default = _App;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(_App, true));
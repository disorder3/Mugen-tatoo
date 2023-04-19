"use strict";

var _EspaceTatoueur = _interopRequireDefault(require("./EspaceTatoueur"));
var _Images = _interopRequireDefault(require("./Images"));
var _ImagesManager = _interopRequireDefault(require("./ImagesManager"));
var _login = _interopRequireDefault(require("./login"));
var _Reservation = _interopRequireDefault(require("./Reservation"));
var _Faq = _interopRequireDefault(require("./Faq"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var App = function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_EspaceTatoueur["default"], null), /*#__PURE__*/React.createElement(_Images["default"], null), /*#__PURE__*/React.createElement(_ImagesManager["default"], null), /*#__PURE__*/React.createElement(_login["default"], null), /*#__PURE__*/React.createElement(_Reservation["default"], null), /*#__PURE__*/React.createElement(_Faq["default"], null));
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("EspaceTatoueur"));
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("images"));
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("ImagesManager"));
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("login"));
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("reservation"));
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("Faq"));
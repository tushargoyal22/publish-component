"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MyForm = () => {
  return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h1", null, "Hello"), /*#__PURE__*/_react.default.createElement("p", null, "Enter your name:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }));
};

var _default = MyForm;
exports.default = _default;
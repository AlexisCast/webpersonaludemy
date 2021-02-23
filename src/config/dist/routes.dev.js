"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _LayoutAdmin = _interopRequireDefault(require("../layouts/LayoutAdmin"));

var _LayoutBasic = _interopRequireDefault(require("../layouts/LayoutBasic"));

var _Admin = _interopRequireDefault(require("../pages/Admin"));

var _SignIn = _interopRequireDefault(require("../pages/Admin/SignIn"));

var _Home = _interopRequireDefault(require("../pages/Home"));

var _Contact = _interopRequireDefault(require("../pages/Contact"));

var _Error = _interopRequireDefault(require("../pages/Error404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Layout
//Admin Pages
//Pages
//Other
var routes = [{
  path: "/admin",
  component: _LayoutAdmin["default"],
  exact: false,
  routes: [{
    path: "/admin",
    component: _Admin["default"],
    exact: true
  }, {
    path: "/admin/login",
    component: _SignIn["default"],
    exact: true
  }, {
    component: _Error["default"]
  }]
}, {
  path: "/",
  component: _LayoutBasic["default"],
  exact: false,
  routes: [{
    path: "/",
    component: _Home["default"],
    exact: true
  }, {
    path: "/contact",
    component: _Contact["default"],
    exact: true
  }, {
    component: _Error["default"]
  }]
}];
var _default = routes;
exports["default"] = _default;
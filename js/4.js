(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"131":function(e,t,n){},"51":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=_interopRequireDefault(n(1)),a=n(58),u=_interopRequireDefault(n(61));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(131);var l=function(e){function About(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,About);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(About.__proto__||Object.getPrototypeOf(About)).apply(this,arguments));return e.config={"navigationBarTitleText":"关于"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(About,o.Component),r(About,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return i.default.createElement(a.View,{"className":"flex-wrp"},i.default.createElement(u.default,{"pageType":"关于","fixHead":!0,"needAdd":!0}),i.default.createElement(a.ScrollView,{"className":"about-info","style":"height:100vh"},i.default.createElement("dt",null,"关于项目"),i.default.createElement("dd",null,"该项目是基于 https://cnodejs.org 的api，Taro 编写的 多端App。"),i.default.createElement("dt",null,"源码地址"),i.default.createElement("dd",null,i.default.createElement("a",{"href":"https://github.com/icai/taro-cnode"},"https://github.com/icai/taro-cnode")),i.default.createElement("dt",null,"意见反馈"),i.default.createElement("dd",null,i.default.createElement("a",{"href":"https://github.com/icai/taro-cnode/issues"},"发表意见或者提需求")),i.default.createElement("dt",null,"当前版本"),i.default.createElement("dd",null,"V2.0")))}}]),About}();t.default=l},"60":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(2),a=_interopRequireDefault(i),u=n(58),l=_interopRequireDefault(n(1)),c=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return a.default.navigateTo({"url":t+(n?"?"+c.param(n):"")}),!1},e.defaultProps={"to":{"url":"","params":""}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,i.Component),o(Link,[{"key":"render","value":function render(){var e=this,t=this.props;return l.default.createElement(u.View,r({},t,{"onClick":function onClick(n){e.goTo(t.to)}}),this.props.children)}}]),Link}();t.default=s},"61":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=_interopRequireDefault(o),a=_interopRequireDefault(n(1)),u=_interopRequireDefault(n(59)),l=n(58),c=_interopRequireDefault(n(62));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(70);var s=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e.goToAdd=function(){i.default.navigateTo({"url":"/pages/add/index"})},e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),r(Header,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,o=this.props,i=o.needAdd,s=o.pageType,f=o.fixHead,p=o.messageCount,d=(0,u.default)({"show":t&&f,"fix-header":f,"no-fix":!f});return a.default.createElement(l.View,{"className":"header"},t&&f?a.default.createElement(l.View,null,a.default.createElement(l.View,{"className":"page-cover","onClick":this.showMenus})):"",a.default.createElement(l.View,{"className":d,"id":"hd"},a.default.createElement(l.View,{"className":"nv-toolbar"},f?a.default.createElement(l.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",a.default.createElement(l.Text,null,s),p>0?a.default.createElement(l.Text,{"className":"num"},p):"",i&&!p||p<=0?a.default.createElement("a",{"className":"iconfont add-icon","onClick":this.goToAdd},""):"")),f?a.default.createElement(c.default,{"showMenu":t,"pageType":s,"nickName":n,"profileUrl":r}):"")}}]),Header}();s.defaultProps={"messageCount":0,"scrollTop":0},t.default=s},"62":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=_interopRequireDefault(o),a=_interopRequireDefault(n(1)),u=n(58),l=_interopRequireDefault(n(63)),c=_interopRequireDefault(n(59)),s=_interopRequireDefault(n(67)),f=n(6);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(68);var p=function(e){function NvMenu(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments));return e.listAll=function(){e.toList({"tab":"all"})},e.listGood=function(){e.toList({"tab":"good"})},e.listShare=function(){e.toList({"tab":"share"})},e.listAsk=function(){e.toList({"tab":"ask"})},e.listJob=function(){e.toList({"tab":"job"})},e.listMessage=function(){i.default.navigateTo({"url":"/pages/message/index"})},e.listAbout=function(){i.default.navigateTo({"url":"/pages/about/index"})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.Component),r(NvMenu,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"toList","value":function toList(e){i.default.navigateTo({"url":"/pages/list/index?"+(0,f.param)(e)})}},{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,c.default)({"nav-list":!0,"show":e});return a.default.createElement(u.View,{"id":"sideBar","className":t},a.default.createElement(s.default,{"mask":!1,"show":e},a.default.createElement(l.default,null),a.default.createElement(u.View,{"className":"list-ul"},a.default.createElement(u.View,{"className":"icon-quanbu iconfont item","onClick":this.listAll},"全部"),a.default.createElement(u.View,{"className":"icon-hao iconfont item","onClick":this.listGood},"精华"),a.default.createElement(u.View,{"className":"icon-fenxiang iconfont item","onClick":this.listShare},"分享"),a.default.createElement(u.View,{"className":"icon-wenda iconfont item","onClick":this.listAsk},"问答"),a.default.createElement(u.View,{"className":"icon-zhaopin iconfont item","onClick":this.listJob},"招聘"),a.default.createElement(u.View,{"className":"icon-xiaoxi iconfont item line","onClick":this.listMessage},"消息"),a.default.createElement(u.View,{"className":"icon-about iconfont item","onClick":this.listAbout},"关于"))))}}]),NvMenu}();t.default=p},"63":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireWildcard(n(64)),i=n(2),a=_interopRequireDefault(n(1)),u=n(58),l=_interopRequireDefault(n(60)),c=n(7),s=_interopRequireWildcard(n(8));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(65);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,i.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return a.default.createElement(u.View,{"className":"user-info"},e.loginname?a.default.createElement(l.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},a.default.createElement(u.View,{"className":"avertar"},e.avatar_url?a.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),a.default.createElement(u.View,{"className":"info"},e.loginname?a.default.createElement(u.Text,null,e.loginname):"")):a.default.createElement(l.default,{"className":"login-no","to":{"url":"/pages/login/index"}},a.default.createElement(u.View,{"className":"login"},a.default.createElement("a",null,"登录"))))}}]),UserInfo}();f=o.__decorate([(0,c.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(s.authCheckState())}}})],f),t.default=f},"65":function(e,t,n){},"67":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(2)),_interopRequireDefault(n(1))),i=n(58),a=n(72);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,a.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,a=r.animShow,u=r.show,l=["at-drawer"],c={"display":t?"block":"none","opacity":a?1:0};return n?l.push("at-drawer--right"):l.push("at-drawer--left"),a&&l.push("at-drawer--show"),l=l.filter(function(e){return""!==e}),u&&o.default.createElement(i.View,{"className":l},o.default.createElement(i.View,{"className":"at-drawer__mask","style":c,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(i.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"68":function(e,t,n){},"70":function(e,t,n){}}]);
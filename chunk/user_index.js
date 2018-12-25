(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"42":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=_interopRequireDefault(r(0)),i=_interopRequireWildcard(r(49)),u=_interopRequireDefault(r(1)),l=r(55),s=r(43),c=r(7),f=_interopRequireDefault(r(46)),p=_interopRequireDefault(r(44)),d=_interopRequireDefault(r(45)),h=_interopRequireWildcard(r(8)),m=_interopRequireWildcard(r(5)),_=r(9);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(82);var y=function(e){function User(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(User.__proto__||Object.getPrototypeOf(User)).apply(this,arguments));return e.config={"navigationBarTitleText":"用户信息"},e.changeItem=function(t){var r=1===t?e.state.user.recent_replies:e.state.user.recent_topics;e.setState(function(e){return n({},e,{"selectItem":t,"currentData":r})})},e.state={"currentData":[],"user":{"avatar_url":""},"showMenu":!1,"selectItem":1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(User,l.Component),o(User,[{"key":"componentDidMount","value":function componentDidMount(){this.getUser()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"getUser","value":function getUser(){var e=this,t=this.$router.params.loginname;if(!t)return a.default.showToast({"title":"缺少用户名参数"}),a.default.navigateTo({"url":"/pages/list/index"}),!1;(0,_.get)({"url":"https://cnodejs.org/api/v1/user/"+t}).then(function(t){var r=t.data;if(r&&r.data){var n=r.data;e.setState({"user":n}),n.recent_replies.length>0?e.setState({"currentData":n.recent_replies}):e.setState({"currentData":n.recent_topics,"selectItem":2})}})}},{"key":"render","value":function render(){var e=this.state,t=e.selectItem,r=e.user,n=e.currentData,o=function getLastTimeStr(e,t){return m.getLastTimeStr(e,t)};return u.default.createElement(s.View,{"className":"flex-wrp"},u.default.createElement(f.default,{"pageType":"用户信息","fixHead":!0,"showMenu":!0,"needAdd":!0}),u.default.createElement(s.View,{"className":"userinfo"},u.default.createElement(s.Image,{"className":"u-img","src":r.avatar_url}),u.default.createElement("br",null),u.default.createElement(s.Text,{"className":"u-name"},r.loginname),u.default.createElement(s.View,{"className":"u-bottom"},u.default.createElement(s.Text,{"className":"u-time"},o(r.create_at,!1)),u.default.createElement(s.Text,{"className":"u-score"},"积分：",r.score))),u.default.createElement(s.View,{"className":"topics"},u.default.createElement(s.View,{"className":"user-tabs"},u.default.createElement(s.View,{"className":(0,d.default)({"item":1,"br":1,"selected":1===t}),"onClick":this.changeItem.bind(this,1)},"最近回复"),u.default.createElement(s.View,{"className":(0,d.default)({"item":1,"selected":2===t}),"onClick":this.changeItem.bind(this,2)},"最新发布")),n.map(function(e){return u.default.createElement(s.View,{"className":"message"},u.default.createElement(s.View,{"className":"user"},u.default.createElement(p.default,{"className":"head","to":{"url":"/pages/user/index","params":{"loginname":e.author.loginname}}},u.default.createElement(s.Image,{"class":"head","src":e.author.avatar_url})),u.default.createElement(p.default,{"className":"info","to":{"url":"/pages/topic/index","params":{"id":e.id}}},u.default.createElement(s.View,{"className":"t-title"},e.title),u.default.createElement(s.Text,{"className":"cl mt12"},u.default.createElement(s.Text,{"className":"name"},e.author.loginname)),u.default.createElement(s.Text,{"className":"cr mt12"},u.default.createElement(s.Text,{"className":"name"},o(e.last_reply_at,!0))))))}),0===n.length?u.default.createElement(s.View,{"className":"no-data"},u.default.createElement(s.Text,{"className":"iconfont icon-empty"},""),"暂无数据!"):""))}},{"key":"componentDidShow","value":function componentDidShow(){}}]),User}();y=i.__decorate([(0,c.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(h.authCheckState())}}})],y),t.default=y},"43":function(e,t,r){e.exports=r(3)(18)},"44":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=r(0),i=_interopRequireDefault(a),u=r(43),l=_interopRequireDefault(r(1)),s=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,r=e.params;return i.default.navigateTo({"url":t+(r?"?"+s.param(r):"")}),!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,a.Component),o(Link,[{"key":"render","value":function render(){var e=this.props,t=n({},e,{"style":{"cursor":"pointer"}});return delete t.to,l.default.createElement(u.View,{"className":t.className,"style":t.style,"onClick":this.goTo.bind(this,e.to)},this.props.children)}}]),Link}();c.defaultProps={"to":{"url":"","params":""}},t.default=c},"45":function(e,t,r){e.exports=r(3)(19)},"46":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),a=_interopRequireDefault(r(1)),i=_interopRequireDefault(r(45)),u=r(43),l=_interopRequireDefault(r(47)),s=_interopRequireDefault(r(44));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(53);var c=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),n(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,r=e.nickname,n=e.profileimgurl,o=this.props,c=o.needAdd,f=o.pageType,p=o.fixHead,d=o.messageCount,h=(0,i.default)({"show":t&&p,"fix-header":p,"no-fix":!p});return a.default.createElement(u.View,{"className":"header"},t&&p?a.default.createElement(u.View,null,a.default.createElement(u.View,{"className":"page-cover","onClick":this.showMenus})):"",a.default.createElement(u.View,{"className":h,"id":"hd"},a.default.createElement(u.View,{"className":"nv-toolbar"},p?a.default.createElement(u.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",a.default.createElement(u.Text,null,f),d>0?a.default.createElement(u.Text,{"className":"num"},d):"",c&&!d||d<=0?a.default.createElement(s.default,{"className":"iconfont add-icon","to":{"url":"/pages/add/index"}},""):"")),a.default.createElement(l.default,{"showMenu":t,"pageType":f,"nickName":r,"profileUrl":n}))}}]),Header}();c.defaultProps={"messageCount":0,"scrollTop":0},t.default=c},"47":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(0),a=_interopRequireDefault(r(1)),i=r(43),u=_interopRequireDefault(r(48)),l=_interopRequireDefault(r(45)),s=_interopRequireDefault(r(51)),c=_interopRequireDefault(r(44));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(52);var f=function(e){function NvMenu(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.Component),n(NvMenu,[{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,l.default)({"nav-list":!0,"show":e});return a.default.createElement(i.View,{"id":"sideBar","className":t},a.default.createElement(s.default,{"mask":!1,"show":e},a.default.createElement(u.default,null),a.default.createElement(i.View,{"className":"list-ul"},a.default.createElement(c.default,{"className":"icon-quanbu iconfont item","to":{"url":"/pages/list/index?tab=all"}},"全部"),a.default.createElement(c.default,{"className":"icon-hao iconfont item","to":{"url":"/pages/list/index?tab=good"}},"精华"),a.default.createElement(c.default,{"className":"icon-fenxiang iconfont item","to":{"url":"/pages/list/index?tab=share"}},"分享"),a.default.createElement(c.default,{"className":"icon-wenda iconfont item","to":{"url":"/pages/list/index?tab=ask"}},"问答"),a.default.createElement(c.default,{"className":"icon-zhaopin iconfont item","to":{"url":"/pages/list/index?tab=job"}},"招聘"),a.default.createElement(c.default,{"className":"icon-xiaoxi iconfont item line","to":{"url":"/pages/message/index"}},"消息"),a.default.createElement(c.default,{"className":"icon-about iconfont item","to":{"url":"/pages/about/index"}},"关于"))))}}]),NvMenu}();t.default=f},"48":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=_interopRequireWildcard(r(49)),a=r(0),i=_interopRequireDefault(r(1)),u=r(43),l=_interopRequireDefault(r(44)),s=r(7),c=_interopRequireWildcard(r(8));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}r(50);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,a.Component),n(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return i.default.createElement(u.View,{"className":"user-info"},e.loginname?i.default.createElement(l.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},i.default.createElement(u.View,{"className":"avertar"},e.avatar_url?i.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),i.default.createElement(u.View,{"className":"info"},e.loginname?i.default.createElement(u.Text,null,e.loginname):"")):i.default.createElement(l.default,{"className":"login-no","to":{"url":"/pages/login/index"}},i.default.createElement(u.View,{"className":"login"},i.default.createElement(u.View,null,"登录"))))}}]),UserInfo}();f=o.__decorate([(0,s.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(c.authCheckState())}}})],f),t.default=f},"50":function(e,t,r){},"51":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=(_interopRequireDefault(r(0)),_interopRequireDefault(r(1))),a=r(43),i=r(54);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,i.AtDrawer),n(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"render","value":function render(){var e=this.props,t=e.mask,r=(e.width,e.right),n=this.state,i=n.animShow,u=n.show,l=["at-drawer"],s={"display":t?"block":"none","opacity":i?1:0};return r?l.push("at-drawer--right"):l.push("at-drawer--left"),i&&l.push("at-drawer--show"),l=l.filter(function(e){return""!==e}),u&&o.default.createElement(a.View,{"className":l},o.default.createElement(a.View,{"className":"at-drawer__mask","style":s,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(a.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"52":function(e,t,r){},"53":function(e,t,r){},"55":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0},a=r(0),i=_interopRequireDefault(a),u=_interopRequireWildcard(r(49)),l=(_interopRequireDefault(r(1)),r(7)),s=_interopRequireWildcard(r(8));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=a.Component,t.withUser=function withUser(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=function(r){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),n(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||i.default.redirectTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?o(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return r=u.__decorate([(0,l.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(s.auth.apply(s,arguments))},"authCheckState":function authCheckState(){return e(s.authCheckState())}}})],r)}},"82":function(e,t,r){}}]);
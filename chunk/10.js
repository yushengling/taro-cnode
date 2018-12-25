(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"56":function(e,t,n){"use strict";function throttle(e,t,n,r){var i,a=0;return"boolean"!=typeof t&&(r=n,n=t,t=void 0),function wrapper(){var o=this,s=Number(new Date)-a,l=arguments;function exec(){a=Number(new Date),n.apply(o,l)}r&&!i&&exec(),i&&clearTimeout(i),void 0===r&&s>e?exec():!0!==t&&(i=setTimeout(r?function clear(){i=void 0}:exec,void 0===r?e-s:e))}}Object.defineProperty(t,"__esModule",{"value":!0}),t.throttle=throttle,t.debounce=function debounce(e,t,n){return void 0===n?throttle(e,t,!1):throttle(e,n,!1!==t)}},"60":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=n(75),i=Object.prototype.hasOwnProperty,a=Array.prototype.splice,o=Object.prototype.toString;function type(e){return o.call(e).slice(8,-1)}var s=Object.assign||function(e,t){return l(t).forEach(function(n){i.call(t,n)&&(e[n]=t[n])}),e},l="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function copy(e){return Array.isArray(e)?s(e.constructor(e.length),e):"Map"===type(e)?new Map(e):"Set"===type(e)?new Set(e):e&&"object"==typeof e?s(Object.create(Object.getPrototypeOf(e)),e):e}var c=function(){function Context(){this.commands=s({},u),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new Context).update}}return Object.defineProperty(Context.prototype,"isEquals",{"get":function(){return this.update.isEquals},"set":function(e){this.update.isEquals=e},"enumerable":!0,"configurable":!0}),Context.prototype.extend=function(e,t){this.commands[e]=t},Context.prototype.update=function(e,t){var n=this,a="function"==typeof t?{"$apply":t}:t;Array.isArray(e)&&Array.isArray(a)||r(!Array.isArray(a),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),r("object"==typeof a&&null!==a,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(this.commands).join(", "));var o=e;return l(a).forEach(function(t){if(i.call(n.commands,t)){var r=e===o;o=n.commands[t](a[t],o,a,e),r&&n.isEquals(o,e)&&(o=e)}else{var s="Map"===type(e)?n.update(e.get(t),a[t]):n.update(e[t],a[t]),l="Map"===type(o)?o.get(t):o[t];n.isEquals(s,l)&&(void 0!==s||i.call(e,t))||(o===e&&(o=copy(e)),"Map"===type(o)?o.set(t,s):o[t]=s)}}),o},Context}();t.Context=c;var u={"$push":function(e,t,n){return invariantPushAndUnshift(t,n,"$push"),e.length?t.concat(e):t},"$unshift":function(e,t,n){return invariantPushAndUnshift(t,n,"$unshift"),e.length?e.concat(t):t},"$splice":function(e,t,n,i){return function invariantSplices(e,t){r(Array.isArray(e),"Expected $splice target to be an array; got %s",e),invariantSplice(t.$splice)}(t,n),e.forEach(function(e){invariantSplice(e),t===i&&e.length&&(t=copy(i)),a.apply(t,e)}),t},"$set":function(e,t,n){return function invariantSet(e){r(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(n),e},"$toggle":function(e,t){invariantSpecArray(e,"$toggle");var n=e.length?copy(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},"$unset":function(e,t,n,r){return invariantSpecArray(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=copy(r)),delete t[e])}),t},"$add":function(e,t,n,r){return invariantMapOrSet(t,"$add"),invariantSpecArray(e,"$add"),"Map"===type(t)?e.forEach(function(e){var n=e[0],i=e[1];t===r&&t.get(n)!==i&&(t=copy(r)),t.set(n,i)}):e.forEach(function(e){t!==r||t.has(e)||(t=copy(r)),t.add(e)}),t},"$remove":function(e,t,n,r){return invariantMapOrSet(t,"$remove"),invariantSpecArray(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=copy(r)),t.delete(e)}),t},"$merge":function(e,t,n,i){return function invariantMerge(e,t){r(t&&"object"==typeof t,"update(): $merge expects a spec of type 'object'; got %s",t),r(e&&"object"==typeof e,"update(): $merge expects a target of type 'object'; got %s",e)}(t,e),l(e).forEach(function(n){e[n]!==t[n]&&(t===i&&(t=copy(i)),t[n]=e[n])}),t},"$apply":function(e,t){return function invariantApply(e){r("function"==typeof e,"update(): expected spec of $apply to be a function; got %s.",e)}(e),e(t)}},f=new c;function invariantPushAndUnshift(e,t,n){r(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e),invariantSpecArray(t[n],n)}function invariantSpecArray(e,t){r(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function invariantSplice(e){r(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function invariantMapOrSet(e,t){var n=type(e);r("Map"===n||"Set"===n,"update(): %s expects a target of type Set or Map; got %s",t,n)}t.isEquals=f.update.isEquals,t.extend=f.extend,t.default=f.update,t.default.default=e.exports=s(t.default,t)},"61":function(e,t,n){(function(e,r){var i=/%[sdj%]/g;t.format=function(e){if(!isString(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(inspect(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,a=r.length,o=String(e).replace(i,function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),s=r[n];n<a;s=r[++n])isNull(s)||!isObject(s)?o+=" "+s:o+=" "+inspect(s);return o},t.deprecate=function(n,i){if(isUndefined(e.process))return function(){return t.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var a=!1;return function deprecated(){if(!a){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),a=!0}return n.apply(this,arguments)}};var a,o={};function inspect(e,n){var r={"seen":[],"stylize":stylizeNoColor};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),isBoolean(n)?r.showHidden=n:n&&t._extend(r,n),isUndefined(r.showHidden)&&(r.showHidden=!1),isUndefined(r.depth)&&(r.depth=2),isUndefined(r.colors)&&(r.colors=!1),isUndefined(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=stylizeWithColor),formatValue(r,e,r.depth)}function stylizeWithColor(e,t){var n=inspect.styles[t];return n?"["+inspect.colors[n][0]+"m"+e+"["+inspect.colors[n][1]+"m":e}function stylizeNoColor(e,t){return e}function formatValue(e,n,r){if(e.customInspect&&n&&isFunction(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return isString(i)||(i=formatValue(e,i,r)),i}var a=function formatPrimitive(e,t){if(isUndefined(t))return e.stylize("undefined","undefined");if(isString(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(isNumber(t))return e.stylize(""+t,"number");if(isBoolean(t))return e.stylize(""+t,"boolean");if(isNull(t))return e.stylize("null","null")}(e,n);if(a)return a;var o=Object.keys(n),s=function arrayToHash(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(n)),isError(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return formatError(n);if(0===o.length){if(isFunction(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(isRegExp(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(isDate(n))return e.stylize(Date.prototype.toString.call(n),"date");if(isError(n))return formatError(n)}var c,u="",f=!1,p=["{","}"];(isArray(n)&&(f=!0,p=["[","]"]),isFunction(n))&&(u=" [Function"+(n.name?": "+n.name:"")+"]");return isRegExp(n)&&(u=" "+RegExp.prototype.toString.call(n)),isDate(n)&&(u=" "+Date.prototype.toUTCString.call(n)),isError(n)&&(u=" "+formatError(n)),0!==o.length||f&&0!=n.length?r<0?isRegExp(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=f?function formatArray(e,t,n,r,i){for(var a=[],o=0,s=t.length;o<s;++o)hasOwnProperty(t,String(o))?a.push(formatProperty(e,t,n,r,String(o),!0)):a.push("");return i.forEach(function(i){i.match(/^\d+$/)||a.push(formatProperty(e,t,n,r,i,!0))}),a}(e,n,r,s,o):o.map(function(t){return formatProperty(e,n,r,s,t,f)}),e.seen.pop(),function reduceToSingleString(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(c,u,p)):p[0]+u+p[1]}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatProperty(e,t,n,r,i,a){var o,s,l;if((l=Object.getOwnPropertyDescriptor(t,i)||{"value":t[i]}).get?s=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(s=e.stylize("[Setter]","special")),hasOwnProperty(r,i)||(o="["+i+"]"),s||(e.seen.indexOf(l.value)<0?(s=isNull(n)?formatValue(e,l.value,null):formatValue(e,l.value,n-1)).indexOf("\n")>-1&&(s=a?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),isUndefined(o)){if(a&&i.match(/^\d+$/))return s;(o=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+s}function isArray(e){return Array.isArray(e)}function isBoolean(e){return"boolean"==typeof e}function isNull(e){return null===e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isUndefined(e){return void 0===e}function isRegExp(e){return isObject(e)&&"[object RegExp]"===objectToString(e)}function isObject(e){return"object"==typeof e&&null!==e}function isDate(e){return isObject(e)&&"[object Date]"===objectToString(e)}function isError(e){return isObject(e)&&("[object Error]"===objectToString(e)||e instanceof Error)}function isFunction(e){return"function"==typeof e}function objectToString(e){return Object.prototype.toString.call(e)}function pad(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(isUndefined(a)&&(a=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!o[e])if(new RegExp("\\b"+e+"\\b","i").test(a)){var n=r.pid;o[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else o[e]=function(){};return o[e]},t.inspect=inspect,inspect.colors={"bold":[1,22],"italic":[3,23],"underline":[4,24],"inverse":[7,27],"white":[37,39],"grey":[90,39],"black":[30,39],"blue":[34,39],"cyan":[36,39],"green":[32,39],"magenta":[35,39],"red":[31,39],"yellow":[33,39]},inspect.styles={"special":"cyan","number":"yellow","boolean":"yellow","undefined":"grey","null":"bold","string":"green","date":"magenta","regexp":"red"},t.isArray=isArray,t.isBoolean=isBoolean,t.isNull=isNull,t.isNullOrUndefined=function isNullOrUndefined(e){return null==e},t.isNumber=isNumber,t.isString=isString,t.isSymbol=function isSymbol(e){return"symbol"==typeof e},t.isUndefined=isUndefined,t.isRegExp=isRegExp,t.isObject=isObject,t.isDate=isDate,t.isError=isError,t.isFunction=isFunction,t.isPrimitive=function isPrimitive(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(79);var s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",function timestamp(){var e=new Date,t=[pad(e.getHours()),pad(e.getMinutes()),pad(e.getSeconds())].join(":");return[e.getDate(),s[e.getMonth()],t].join(" ")}(),t.format.apply(t,arguments))},t.inherits=n(80),t._extend=function(e,t){if(!t||!isObject(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(2),n(10))},"75":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i,a,o,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,a,o,s],u=0;(l=new Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},"77":function(e,t,n){t.markdown=n(78),t.parse=t.markdown.toHTML},"78":function(e,t,n){!function(e){var t=e.Markdown=function(e){switch(typeof e){case"undefined":this.dialect=t.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in t.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=t.dialects[e]}this.em_state=[],this.strong_state=[],this.debug_indent=""};function mk_block_toSource(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function mk_block_inspect(){var e=n(61);return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}e.parse=function(e,n){return new t(n).toTree(e)},e.toHTML=function toHTML(t,n,r){var i=e.toHTMLTree(t,n,r);return e.renderJsonML(i)},e.toHTMLTree=function toHTMLTree(e,t,n){"string"==typeof e&&(e=this.parse(e,t));var r=extract_attr(e),i={};r&&r.references&&(i=r.references);var a=function convert_tree_to_html(e,t,n){var r;n=n||{};var i=e.slice(0);"function"==typeof n.preprocessTreeNode&&(i=n.preprocessTreeNode(i,t));var a=extract_attr(i);if(a){for(r in i[1]={},a)i[1][r]=a[r];a=i[1]}if("string"==typeof i)return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",a&&delete a.references;break;case"code_block":i[0]="pre",r=a?2:1;var o=["code"];o.push.apply(o,i.splice(r,i.length-r)),i[r]=o;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var s=t[a.ref];if(!s)return a.original;delete a.ref,a.href=s.href,s.title&&(a.title=s.title),delete a.original;break;case"img_ref":i[0]="img";var s=t[a.ref];if(!s)return a.original;delete a.ref,a.src=s.href,s.title&&(a.title=s.title),delete a.original}r=1;if(a){for(var l in i[1]){r=2;break}1===r&&i.splice(r,1)}for(;r<i.length;++r)i[r]=convert_tree_to_html(i[r],t,n);return i}(e,i,n);return function merge_text_nodes(e){var t=extract_attr(e)?2:1;for(;t<e.length;)"string"==typeof e[t]?t+1<e.length&&"string"==typeof e[t+1]?e[t]+=e.splice(t+1,1)[0]:++t:(merge_text_nodes(e[t]),++t)}(a),a};var r=t.mk_block=function(e,t,n){1==arguments.length&&(t="\n\n");var r=new String(e);return r.trailing=t,r.inspect=mk_block_inspect,r.toSource=mk_block_toSource,void 0!=n&&(r.lineNumber=n),r};function count_lines(e){for(var t=0,n=-1;-1!==(n=e.indexOf("\n",n+1));)t++;return t}function strong_em(e,t){var n=e+"_state",r="strong"==e?"em_state":"strong_state";function CloseTag(e){this.len_after=e,this.name="close_"+t}return function(i,a){if(this[n][0]==t)return this[n].shift(),[i.length,new CloseTag(i.length-t.length)];var o=this[r].slice(),s=this[n].slice();this[n].unshift(t);var l=this.processInline(i.substr(t.length)),c=l[l.length-1];this[n].shift();return c instanceof CloseTag?(l.pop(),[i.length-c.len_after,[e].concat(l)]):(this[r]=o,this[n]=s,[t.length,t])}}t.prototype.split_blocks=function splitBlocks(e,t){e=e.replace(/(\r\n|\n|\r)/g,"\n");var n,i=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,a=[],o=1;for(null!=(n=/^(\s*\n)/.exec(e))&&(o+=count_lines(n[0]),i.lastIndex=n[0].length);null!==(n=i.exec(e));)"\n#"==n[2]&&(n[2]="\n",i.lastIndex--),a.push(r(n[1],n[2],o)),o+=count_lines(n[0]);return a},t.prototype.processBlock=function processBlock(e,t){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,e,t);for(var i=0;i<r.length;i++){var a=n[r[i]].call(this,e,t);if(a)return(!o(a)||a.length>0&&!o(a[0]))&&this.debug(r[i],"didn't return a proper array"),a}return[]},t.prototype.processInline=function processInline(e){return this.dialect.inline.__call__.call(this,String(e))},t.prototype.toTree=function toTree(e,t){var n=e instanceof Array?e:this.split_blocks(e),r=this.tree;try{for(this.tree=t||this.tree||["markdown"];n.length;){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=r)}},t.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,e)},t.prototype.loop_re_over_block=function(e,t,n){for(var r,i=t.valueOf();i.length&&null!=(r=e.exec(i));)i=i.substr(r[0].length),n.call(this,r);return i},t.dialects={},t.dialects.Gruber={"block":{"atxHeader":function atxHeader(e,t){var n=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var i=["header",{"level":n[1].length}];return Array.prototype.push.apply(i,this.processInline(n[2])),n[0].length<e.length&&t.unshift(r(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[i]}},"setextHeader":function setextHeader(e,t){var n=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var i=["header",{"level":"="===n[2]?1:2},n[1]];return n[0].length<e.length&&t.unshift(r(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[i]}},"code":function code(e,t){var n=[],i=/^(?: {0,3}\t| {4})(.*)\n?/;if(e.match(i)){e:for(;;){var a=this.loop_re_over_block(i,e.valueOf(),function(e){n.push(e[1])});if(a.length){t.unshift(r(a,e.trailing));break e}if(!t.length)break e;if(!t[0].match(i))break e;n.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",n.join("\n")]]}},"horizRule":function horizRule(e,t){var n=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var i=[["hr"]];return n[1]&&i.unshift.apply(i,this.processBlock(n[1],[])),n[3]&&t.unshift(r(n[3])),i}},"lists":function(){var e="[*+-]|\\d+\\.",t=/[*+-]/,n=new RegExp("^( {0,3})("+e+")[ \t]+"),a="(?: {0,3}\\t| {4})";function regex_for_depth(t){return new RegExp("(?:^("+a+"{0,"+t+"} {0,3})("+e+")\\s+)|(^"+a+"{0,"+(t-1)+"}[ ]{0,4})")}function expand_tab(e){return e.replace(/ {0,3}\t/g,"    ")}function add(e,t,n,r){if(t)e.push(["para"].concat(n));else{var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;r&&e.length>1&&n.unshift(r);for(var a=0;a<n.length;a++){var o=n[a];"string"==typeof o&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=o:i.push(o)}}}function get_contained_blocks(e,t){for(var n=new RegExp("^("+a+"{"+e+"}.*?\\n?)*$"),i=new RegExp("^"+a+"{"+e+"}","gm"),o=[];t.length>0&&n.exec(t[0]);){var s=t.shift(),l=s.replace(i,"");o.push(r(l,s.trailing,s.lineNumber))}return o}function paragraphify(e,t,n){var r=e.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var a=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),a)}}return function(e,r){var a=e.match(n);if(a){for(var o,s,l=[],c=make_list(a),u=!1,f=[l[0].list];;){for(var p=e.split(/(?=\n)/),h="",g=0;g<p.length;g++){var d="",y=p[g].replace(/^\n/,function(e){return d=e,""}),b=regex_for_depth(l.length);if(void 0!==(a=y.match(b))[1]){h.length&&(add(o,u,this.processInline(h),d),u=!1,h=""),a[1]=expand_tab(a[1]);var v=Math.floor(a[1].length/4)+1;if(v>l.length)c=make_list(a),o.push(c),o=c[1]=["listitem"];else{var m=!1;for(s=0;s<l.length;s++)if(l[s].indent==a[1]){c=l[s].list,l.splice(s+1,l.length-(s+1)),m=!0;break}m||(++v<=l.length?(l.splice(v,l.length-v),c=l[v-1].list):(c=make_list(a),o.push(c))),o=["listitem"],c.push(o)}d=""}y.length>a[0].length&&(h+=d+y.substr(a[0].length))}h.length&&(add(o,u,this.processInline(h),d),u=!1,h="");var _=get_contained_blocks(l.length,r);_.length>0&&(i(l,paragraphify,this),o.push.apply(o,this.toTree(_,[])));var k=r[0]&&r[0].valueOf()||"";if(!k.match(n)&&!k.match(/^ /))break;e=r.shift();var x=this.dialect.block.horizRule(e,r);if(x){f.push.apply(f,x);break}i(l,paragraphify,this),u=!0}return f}function make_list(e){var n=t.exec(e[2])?["bulletlist"]:["numberlist"];return l.push({"list":n,"indent":e[1]}),n}}}(),"blockquote":function blockquote(e,t){if(e.match(/^>/m)){var n=[];if(">"!=e[0]){for(var i=e.split(/\n/),a=[],o=e.lineNumber;i.length&&">"!=i[0][0];)a.push(i.shift()),o++;var l=r(a.join("\n"),"\n",e.lineNumber);n.push.apply(n,this.processBlock(l,[])),e=r(i.join("\n"),e.trailing,o)}for(;t.length&&">"==t[0][0];){var c=t.shift();e=r(e+e.trailing+c,c.trailing,e.lineNumber)}var u=e.replace(/^> ?/gm,""),f=(this.tree,this.toTree(u,["blockquote"])),p=extract_attr(f);return p&&p.references&&(delete p.references,s(p)&&f.splice(1,1)),n.push(f),n}},"referenceDefn":function referenceDefn(e,t){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(e.match(n)){extract_attr(this.tree)||this.tree.splice(1,0,{});var i=extract_attr(this.tree);void 0===i.references&&(i.references={});var a=this.loop_re_over_block(n,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=i.references[e[1].toLowerCase()]={"href":e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return a.length&&t.unshift(r(a,e.trailing)),[]}},"para":function para(e,t){return[["para"].concat(this.processInline(e))]}}},t.dialects.Gruber.inline={"__oneElement__":function oneElement(e,t,n){var r,i;return t=t||this.dialect.inline.__patterns__,(r=new RegExp("([\\s\\S]*?)("+(t.source||t)+")").exec(e))?r[1]?[r[1].length,r[1]]:(r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,e.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]]):[e.length,e]},"__call__":function inline(e,t){var n,r=[];function add(e){"string"==typeof e&&"string"==typeof r[r.length-1]?r[r.length-1]+=e:r.push(e)}for(;e.length>0;)n=this.dialect.inline.__oneElement__.call(this,e,t,r),e=e.substr(n.shift()),i(n,add);return r},"]":function(){},"}":function(){},"__escape__":/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function escaped(e){return this.dialect.inline.__escape__.exec(e)?[2,e.charAt(1)]:[1,"\\"]},"![":function image(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var n={"alt":t[1],"href":t[2]||""};return void 0!==t[4]&&(n.title=t[4]),[t[0].length,["img",n]]}return(t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))?[t[0].length,["img_ref",{"alt":t[1],"ref":t[2].toLowerCase(),"original":t[0]}]]:[2,"!["]},"[":function link(e){var n=String(e),r=t.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!r)return[1,"["];var link,i,a=1+r[0],o=r[1],s=(e=e.substr(a)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(s){var l=s[1];if(a+=s[0].length,l&&"<"==l[0]&&">"==l[l.length-1]&&(l=l.substring(1,l.length-1)),!s[3])for(var c=1,u=0;u<l.length;u++)switch(l[u]){case"(":c++;break;case")":0==--c&&(a-=l.length-u,l=l.substring(0,u))}return i={"href":(l=this.dialect.inline.__call__.call(this,l,/\\/)[0])||""},void 0!==s[3]&&(i.title=s[3]),link=["link",i].concat(o),[a,link]}return(s=e.match(/^\s*\[(.*?)\]/))?(a+=s[0].length,link=["link_ref",i={"ref":(s[1]||String(o)).toLowerCase(),"original":n.substr(0,a)}].concat(o),[a,link]):1==o.length&&"string"==typeof o[0]?(link=["link_ref",i={"ref":o[0].toLowerCase(),"original":n.substr(0,a)},o[0]],[a,link]):[1,"["]},"<":function autoLink(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{"href":"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{"href":t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{"href":t[1]},t[1]]]:[1,"<"]},"`":function inlineCode(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function lineBreak(e){return[3,["linebreak"]]}},t.dialects.Gruber.inline["**"]=strong_em("strong","**"),t.dialects.Gruber.inline.__=strong_em("strong","__"),t.dialects.Gruber.inline["*"]=strong_em("em","*"),t.dialects.Gruber.inline._=strong_em("em","_"),t.buildBlockOrder=function(e){var t=[];for(var n in e)"__order__"!=n&&"__call__"!=n&&t.push(n);e.__order__=t},t.buildInlinePatterns=function(e){var t=[];for(var n in e)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==n.length?r:"(?:"+r+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,n){return void 0!=n?i.call(this,e,n):i.call(this,e,t)}},t.DialectHelpers={},t.DialectHelpers.inline_until_char=function(e,t){for(var n=0,r=[];;){if(e.charAt(n)==t)return[++n,r];if(n>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},t.subclassDialect=function(e){function Block(){}function Inline(){}return Block.prototype=e.block,Inline.prototype=e.inline,{"block":new Block,"inline":new Inline}},t.buildBlockOrder(t.dialects.Gruber.block),t.buildInlinePatterns(t.dialects.Gruber.inline),t.dialects.Maruku=t.subclassDialect(t.dialects.Gruber),t.dialects.Maruku.processMetaHash=function processMetaHash(e){for(var t=function split_meta_hash(e){var t=e.split(""),n=[""],r=!1;for(;t.length;){var i=t.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=t.shift();default:n[n.length-1]+=i}}return n}(e),n={},r=0;r<t.length;++r)if(/^#/.test(t[r]))n.id=t[r].substring(1);else if(/^\./.test(t[r]))n.class?n.class=n.class+t[r].replace(/./," "):n.class=t[r].substring(1);else if(/\=/.test(t[r])){var i=t[r].split(/\=/);n[i[0]]=i[1]}return n},t.dialects.Maruku.block.document_meta=function document_meta(e,t){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){extract_attr(this.tree)||this.tree.splice(1,0,{});var n=e.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),a=r[2];this.tree[1][i]=a}return[]}},t.dialects.Maruku.block.block_meta=function block_meta(e,t){var n=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var o=this.tree[this.tree.length-1];if(r=extract_attr(o),"string"==typeof o)return;for(a in r||(r={},o.splice(1,0,r)),i)r[a]=i[a];return[]}var s=e.replace(/\n.*$/,""),l=this.processBlock(s,[]);for(a in(r=extract_attr(l[0]))||(r={},l[0].splice(1,0,r)),i)r[a]=i[a];return l}},t.dialects.Maruku.block.definition_list=function definition_list(e,t){var n,r=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(s=e.match(r)){for(var a=[e];t.length&&r.exec(t[0]);)a.push(t.shift());for(var o=0;o<a.length;++o){var s,l=(s=a[o].match(r))[1].replace(/\n$/,"").split(/\n/),c=s[2].split(/\n:\s+/);for(n=0;n<l.length;++n)i.push(["dt",l[n]]);for(n=0;n<c.length;++n)i.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[i]}},t.dialects.Maruku.block.table=function table(e,t){var n,r,a=function(e,t){(t=t||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(t="\\"+t);for(var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+t+"])*)"+t+"(.*)");n=e.match(i);)r.push(n[1]),e=n[2];return r.push(e),r};if(r=e.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=e.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/)))return;var table=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var o=[];for(i(r[2],function(e){e.match(/^\s*-+:\s*$/)?o.push({"align":"right"}):e.match(/^\s*:-+\s*$/)?o.push({"align":"left"}):e.match(/^\s*:-+:\s*$/)?o.push({"align":"center"}):o.push({})}),r[1]=a(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)table[1][1].push(["th",o[n]||{}].concat(this.processInline(r[1][n].trim())));return i(r[3].replace(/\|\s*$/gm,"").split("\n"),function(e){var t=["tr"];for(e=a(e,"|"),n=0;n<e.length;n++)t.push(["td",o[n]||{}].concat(this.processInline(e[n].trim())));table[2].push(t)},this),[table]},t.dialects.Maruku.inline["{:"]=function inline_meta(e,t,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"==typeof r)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var a=this.dialect.processMetaHash(i[1]),o=extract_attr(r);for(var s in o||(o={},r.splice(1,0,o)),a)o[s]=a[s];return[i[0].length,""]},t.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,t.buildBlockOrder(t.dialects.Maruku.block),t.buildInlinePatterns(t.dialects.Maruku.inline);var i,o=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};i=Array.prototype.forEach?function(e,t,n){return e.forEach(t,n)}:function(e,t,n){for(var r=0;r<e.length;r++)t.call(n||e,e[r],r,e)};var s=function(e){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0};function extract_attr(e){return o(e)&&e.length>1&&"object"==typeof e[1]&&!o(e[1])?e[1]:void 0}function escapeHTML(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function render_tree(e){if("string"==typeof e)return escapeHTML(e);var t=e.shift(),n={},r=[];for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(n=e.shift());e.length;)r.push(render_tree(e.shift()));var i="";for(var a in n)i+=" "+a+'="'+escapeHTML(n[a])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+r.join("")+"</"+t+">"}e.renderJsonML=function(e,t){(t=t||{}).root=t.root||!1;var n=[];if(t.root)n.push(render_tree(e));else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)n.push(render_tree(e.shift()));return n.join("\n\n")}}(t)},"79":function(e,t){e.exports=function isBuffer(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},"80":function(e,t,n){e.exports=n(61).inherits}}]);
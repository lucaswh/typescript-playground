!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i,r,a,c,s,l=n(1),u=n(3),p=n(4),d=K(u),f=K(p),m=document.getElementById("ts-version"),g=document.getElementById("editor-js"),y=document.getElementById("editor-ts"),v=document.getElementById("editor-html"),h=document.getElementById("editor-less"),w=document.getElementById("run-code"),b=document.getElementById("run-text"),O=document.getElementById("loading"),_=document.getElementById("processing"),E=document.getElementById("shareable-url"),S=document.getElementById("options-toggle"),I=document.getElementById("options"),x=Array.prototype.slice.call(I.getElementsByClassName("option")).map(function(t){return t.firstElementChild}),T=["uiOptions"];function j(t){m.innerText="^3.3.3333";var e=function(){var t=localStorage.getItem("tsp");return t?U(t):{}}(),n=!1;s={compilerOptions:{noImplicitAny:!1,strictNullChecks:!1,strictFunctionTypes:!1,strictPropertyInitialization:!1,noImplicitReturns:!1,noImplicitThis:!1,removeComments:!1,experimentalDecorators:!1,emitDecoratorMetadata:!1,allowNonTsExtensions:!0,target:monaco.languages.typescript.ScriptTarget.ES5},windowOptions:{console:!0},uiOptions:{autoUpdateUrl:!1,localStorageBackup:!0}},window.tsp.options=s,window.tsp.compile=R,window.tsp.emit=R,window.tsp.run=L,window.tsp.share=F,window.tsp.reset=H,window.tsp.sync=N,window.tsp.setCompilerOption=k;var c=["interface Person {","    firstName: string;","    lastName:  string;","}","","function greeter(person: Person) {",'    return "Hello, " + person.firstName + " " + person.lastName;',"}","","let user = {",'    firstName: "Malcolm",','    lastName:  "Reynolds"',"};","",'document.querySelector("#app").innerHTML = greeter(user);',""].join("\n"),u=['<div id="app"></div>',""].join("\n"),p=["body {","    background: #20262E;","    font-family: Helvetica;","    padding: 20px;","}","#app {","    background: #ff00ff;","    border-radius: 4px;","    padding: 20px;","    text-align: center;","    transition: all 0.2s;","}",""].join("\n");if(e&&e.options&&e.options.uiOptions?e.options.uiOptions.localStorageBackup&&(n=!0):n=!0,Y({uiOptions:{localStorageBackup:n}}),n&&e&&e.options)for(var d in T)if(e.options.hasOwnProperty(d)){var f={};f[d]=e.options[d],Y(f)}W(),o=monaco.editor.create(y,{value:c,language:"typescript",theme:"vs-light",automaticLayout:!0,minimap:{enabled:!1},selectionClipboard:!1}),i=monaco.editor.create(g,{value:["",""].join("\n"),language:"javascript",theme:"hc-black",readOnly:!0,automaticLayout:!0,minimap:{enabled:!1},quickSuggestions:!1,parameterHints:!1,autoClosingBrackets:!1,suggestOnTriggerCharacters:!1,snippetSuggestions:"none",wordBasedSuggestions:!1}),r=monaco.editor.create(v,{value:u,language:"html",theme:"vs-light",automaticLayout:!0,minimap:{enabled:!1},selectionClipboard:!1}),a=monaco.editor.create(h,{value:p,language:"less",theme:"vs-light",automaticLayout:!0,minimap:{enabled:!1},selectionClipboard:!1}),o.onDidChangeModelContent(l(R,100)),S.onclick=Q,w.onclick=L,C(),window.onkeydown=B,R(),A(!0),D(!0),function(t,e,n){void 0===e&&(e=5),void 0===n&&(n=.01),t.style.opacity="1";var o=setInterval(function(){parseFloat(t.style.opacity)<.05?(clearInterval(o),t.style.opacity="0",t.style.display="none"):t.style.opacity=""+(parseFloat(t.style.opacity)-n)},e)}(O)}function k(t,e){window.tsp.options.compilerOptions[t]=e,C(),W(),R()}function N(){C(),W()}function B(t){t.ctrlKey&&82===t.which&&L(),(t.ctrlKey||t.metaKey)&&83===t.which&&t.preventDefault()}function C(){for(var t=x,e=0;e<t.length;e++){var n=t[e],o=n.classList.item(0);z()[o].hasOwnProperty(n.name)&&(n instanceof HTMLInputElement?"checkbox"===n.type?n.checked=!!s[o][n.name]:"text"===t[e].type&&(n.value=""+s[o][n.name]):n instanceof HTMLSelectElement&&(n.value=""+s[o][n.name])),n.onchange=M}}function M(t){var e=this.classList.item(0),n=z()[e][this.name];this instanceof HTMLInputElement?"checkbox"===this.type?n=!!this.checked:"text"===this.type&&(n=this.value):n=this instanceof HTMLSelectElement?this.value:this.value||void 0,z()[e][this.name]=n,W(),R(),A(),D(),V()}function R(t){void 0!==t&&(A(),D()),_.style.display="inline-block",monaco.languages.typescript.getTypeScriptWorker().then(function(t){return t(o.getModel().uri)}).then(function(t){return t.getEmitOutput(o.getModel().uri.toString())},X).then(function(t){return!t.emitSkipped&&(!(!t.outputFiles||!t.outputFiles[0])&&t.outputFiles[0].text)},X).then(function(t){return"string"==typeof t&&function(t){i.getModel().setValue(t)}(t),!!t},X).then(function(t){X()},X)}function L(){var t;!c||c.closed?(b.innerText="Run in window",t=window.open("about:blank","","width=800,height=600"),c=t):(t=c,b.innerText="Run in window"),t.onunload=null,t.location.href="about:blank",setTimeout(function(){t.document.open(),t.document.write(r.getValue()),t.document.write(function(t){return console.log("HTML\n"+document.getElementById("injectedHtmlCode")),console.log("less"+a.getValue()),(t=void 0!==t?t:z().windowOptions.console?d:f).replace(/__CODE__/,i.getValue())}()),t.document.close(),t.onunload=P},50)}function P(){b.innerText="Run in new window"}function A(t){window.tsp.options.uiOptions.autoUpdateUrl?t||(window.location.hash=J($(q()))):window.location.hash&&(window.location.hash="")}function D(t){window.tsp.options.uiOptions.localStorageBackup?localStorage.setItem("tsp",J(q())):localStorage.setItem("tsp",J({options:{uiOptions:{localStorageBackup:!1}}}))}function H(t,e){void 0===t&&(t=!1),e&&e.preventDefault(),confirm("Are you sure? All your changes will be lost.")&&(localStorage.removeItem("tsp"),t&&(window.location.href=window.location.href.split("#")[0]))}function V(){E.value=F()}function F(){return window.location.href.replace(window.location.hash,"").replace("#","")+"#"+J($(q()))}function J(t){return btoa(encodeURIComponent(JSON.stringify(t)))}function U(t){return JSON.parse(decodeURIComponent(atob(t)))}function $(t){t=JSON.parse(JSON.stringify(t));for(var e=0,n=T;e<n.length;e++){var o=n[e];t.options[o]=void 0}return t}function q(t){return void 0===t&&(t=!0),{editor:o.getValue(),options:G()}}function W(){var t=G();t.compilerOptions.allowNonTsExtensions=!0,monaco.languages.typescript.typescriptDefaults.setCompilerOptions(t.compilerOptions)}function K(t){return t.replace(new RegExp(/__BASE__/),window.location.href.split("#")[0].replace(/\/?$/,"/")).replace(new RegExp(/__VERSION__/g),"1.6.4")}function Y(t,e){for(var n in void 0===e&&(e=z()),t)null!==t[n]&&"object"==typeof t[n]?Y(t[n],e[n]):e[n]=t[n]}function z(){return window.tsp.options}function G(){return JSON.parse(JSON.stringify(z()))}function Q(t){this.classList.toggle("active")&&V(),I.classList.toggle("visible")}function X(){_.style.display="none"}window.tsp={options:{}},function(){document.getElementById("base").href=window.location.href.split("#")[0].replace(/\/?$/,"/");var t=window;t.require.config({paths:{vs:"https://unpkg.com/monaco-editor@^0.14.3/min/vs"}}),t.MonacoEnvironment={getWorkerUrl:function(t,e){return"proxy.js"}},t.require(["vs/editor/editor.main"],j)}()},function(t,e,n){(function(e){var n="Expected a function",o=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,d=u||p||Function("return this")(),f=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&f.call(t)==i}(t))return o;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=c.test(t);return n||s.test(t)?l(t.slice(2),n?2:8):a.test(t)?o:+t}t.exports=function(t,e,o){var i,r,a,c,s,l,u=0,p=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError(n);function w(e){var n=i,o=r;return i=r=void 0,u=e,c=t.apply(o,n)}function b(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-u>=a}function O(){var t=y();if(b(t))return _(t);s=setTimeout(O,function(t){var n=e-(t-l);return d?g(n,a-(t-u)):n}(t))}function _(t){return s=void 0,f&&i?w(t):(i=r=void 0,c)}function E(){var t=y(),n=b(t);if(i=arguments,r=this,l=t,n){if(void 0===s)return function(t){return u=t,s=setTimeout(O,e),p?w(t):c}(l);if(d)return s=setTimeout(O,e),w(l)}return void 0===s&&(s=setTimeout(O,e)),c}return e=h(e)||0,v(o)&&(p=!!o.leading,a=(d="maxWait"in o)?m(h(o.maxWait)||0,e):a,f="trailing"in o?!!o.trailing:f),E.cancel=function(){void 0!==s&&clearTimeout(s),u=0,i=l=r=s=void 0},E.flush=function(){return void 0===s?c:_(y())},E}}).call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports='<!doctype html>\r\n<html lang="en">\r\n\r\n<head>\r\n  <base id="base" href="__BASE__">\r\n  <meta charset="utf8">\r\n  <title>TypeScript Playground (run code)</title>\r\n  <link rel="icon" href="assets/favicon.ico">\r\n  <link rel="stylesheet" href="style.css?__VERSION__">\r\n  <script>\r\n    window.tsp = window.tsp || {}\r\n  <\/script>\r\n</head>\r\n\r\n<body id="run-window">\r\n  <div id="console" class="grid grid-pad">\r\n    <div class="col-1-1">\r\n      <div id="console-heading">\r\n        Console Output:\r\n      </div>\r\n    </div>\r\n    <div class="col-1-1">\r\n      <div class="console" id="console-content"></div>\r\n    </div>\r\n  </div>\r\n  <div id="loading-window">\r\n    <div class="spinner">\r\n      <div class="double-bounce1"></div>\r\n      <div class="double-bounce2"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <script src="run.js?__VERSION__"><\/script>\r\n  <script id="injectedJsCode">\r\n    (function() {\r\n      __CODE__\r\n    })();\r\n  <\/script>\r\n  <script>\r\n    tsp.fadeOut(document.getElementById(\'loading-window\'));\r\n  <\/script>\r\n</body>\r\n\r\n</html>\r\n'},function(t,e){t.exports='<!doctype html>\r\n<html lang="en">\r\n\r\n<head>\r\n  <meta charset="utf8">\r\n  <title>TypeScript Playground (run code)</title>\r\n  <link rel="icon" href="__BASE__/assets/favicon.ico">\r\n</head>\r\n\r\n<body>\r\n  <script>\r\n    __CODE__\r\n  <\/script>\r\n</body>\r\n\r\n</html>\r\n'}]);
//# sourceMappingURL=app.js.map
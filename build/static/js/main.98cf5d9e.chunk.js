(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(35)},27:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"phrases",function(){return _}),n.d(r,"import_area",function(){return b}),n.d(r,"template",function(){return E}),n.d(r,"export_area",function(){return k}),n.d(r,"last_template",function(){return y});var a=n(0),o=n.n(a),l=n(5),c=n.n(l),u=n(6),i=n(3),s=n(1),p={import_area:"\u0444\u0440\u0430\u0437\u0430 1, \u0444\u0440\u0430\u0437\u0430-2 \u0441 -\u043c\u0438\u043d\u0443\u0441\u0430\u043c\u0438, \u0444\u0440\u0430\u0437\u0430 3",template:"\u0448\u0430\u0431\u043b\u043e\u043d \u0434\u043b\u044f #\u0444\u0440\u0430\u0437\u0430 \u0445\u0437#",phrases:{},export_area:"",last_template:""},m="FILL_IMPORT",f="EDIT_TEMPLATE",d="GENERATE_TABLE",h="KEYWORD_CHANGE",v="REMARK_WORD",g="COLOR_PHRASE",w="DELETE_EXPORT",_=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.phrases,n=arguments.length>1?arguments[1]:void 0,r=n.hash,a=n.value,o=n.word,l=n.based_template,c=n.input_area;switch(n.type){case v:return e=C(t,r,function(e){return Object(s.a)({},e,{words:e.words.map(function(e){return e.word===o?Object(s.a)({},e,{marker:!e.marker}):Object(s.a)({},e)})})}),N(e,r,l);case h:return e=C(t,r,function(e){return Object(s.a)({},e,{keyword:a})}),e=T(e,r,l),N(e,r,l);case d:for(var u in e=O(c,l))e=T(e,u,e[u].based_template),e=N(e,u,e[u].based_template);return e;case g:return C(t,r,function(e){var t=!e.colored;return Object(s.a)({},e,{colored:t})});case w:var i={};for(var m in t)t[m].colored||(i[m]=t[m]);return i;default:return t}},b=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.import_area,n=arguments.length>1?arguments[1]:void 0,r=n.value,a=n.phrases;switch(n.type){case m:return r;case h:for(var o in e=[],a)e.push(a[o].keyword+" "+a[o].minuses);return e.join("\n").trim();case w:for(var l in e=[],a)a[l].colored||e.push(a[l].keyword+" "+a[l].minuses);return e.join("\n").trim();default:return t}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.template,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.value.replace("\u2116","#");default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.export_area,t=arguments.length>1?arguments[1]:void 0,n=t.hash,r=t.phrases;switch(t.type){case g:var a=[];for(var o in r[n]=Object(s.a)({},r[n],{colored:!r[n].colored}),r)a.push(r[o]);return a.filter(function(e){return e.colored}).reduce(function(e,t){return e+t.keyword+" "+t.minuses+"\n"},"").trim();case w:return"";default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.last_template;return(arguments.length>1?arguments[1]:void 0).type,e},C=function(e,t,n){for(var r=Object(s.a)({},e),a=arguments.length,o=new Array(a>3?a-3:0),l=3;l<a;l++)o[l-3]=arguments[l];return r[t]=n.apply(void 0,[r[t]].concat(o)),r},O=function(e,t){return e.split(/(\n|,)/g).filter(function(e){return void 0!==e}).filter(function(e){return null!==e}).filter(function(e){return","!==e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}).reduce(function(e,n){var r=function(e,t){var n={},r=function(e){var t=e.replace(/\s-.*$/,"").trim();return{keyword:t,minuses:e.replace(t,"").trim()}}(e),a=r.keyword,o={based_template:t,keyword:a,colored:!1,minuses:r.minuses,length:0,light:0,words:[]};return n["p"+j(a)]=o,n}(n,t);return Object(s.a)({},e,r)},{})},j=function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t&=t}return t},N=function(e,t,n){var r=Object(s.a)({},e);return r=A(r,t,n),r=S(r,t)},T=function(e,t,n){return C(e,t,function(e){var t=e.keyword,r=x(t,n).text.split(" ").filter(function(e){return""!==e}).map(function(e){return{word:e,marker:W(t,e)}});return Object(s.a)({},e,{words:r})})},W=function(e,t){return e.split(" ").reduce(function(e,n){return e||R(t,n)},!1)},x=function(e,t){var n=t.replace(/#(.)*#/,e),r=n.replace(/(!|\?|\.)$/,"").length;return r>35&&(n=t.replace(/#/g,"")),{text:n,len:r}},A=function(e,t,n){return C(e,t,function(e){var t=x(e.keyword,n).len;return Object(s.a)({},e,{length:t})})},S=function(e,t){return C(e,t,function(e){var t=e.words.reduce(function(e,t){return t.marker?t.word.length+e+1:e},-1),n=e.words.reduce(function(e,t){return t.word.length+e+1},-1);return Object(s.a)({},e,{light:t/n*100|0})})},R=function(e,t){return I(e)===I(t)},I=function(e){for(var t=0,n=L.length;t<n;t++){var r=L[t],a=e.substring(0,e.length-r.length);if(r===e.substring(e.length-r.length))return a}return e},L=["\u0435\u043c\u0443","\u044b\u043c\u0438","\u0438\u043c\u0438","\u0430\u043c\u0438","\u043e\u043c\u0443","\u043e\u0433\u043e","\u043e\u043c\u0443","\u0435\u043c\u0443","\u0438\u043c","\u044b\u043c","\u0435\u0439","\u043e\u0439","\u043e\u044e","\u044e\u044e","\u044b\u0435","\u044b\u0445","\u0438\u0445","\u044b\u0435","\u0438\u0435","\u043e\u043c","\u0435\u043c","\u0430\u044f","\u043e\u0435","\u044f\u044f","\u0443\u044e","\u044b\u0439","\u043e","\u0430","\u044f","\u0435"],P=n(13),D=n(14),K=n(16),M=n(15),J=n(17),U=(n(27),n(28),n(29),function(e){var t=e.template,n=e.onChange,r=e.generateTable,a=e.import_area;return o.a.createElement("div",{className:"templater__template"},o.a.createElement("input",{className:"templater__template_input",value:t,onChange:function(e){return n(e.target.value)}}),o.a.createElement("span",{className:"templater__template_length"},t.replace(/#/g,"").replace(/(!|\?|\.)$/,"").trim().length),o.a.createElement("input",{type:"submit",value:"MIX",onClick:function(e){e.preventDefault(),r(a,t)},className:"templater__template_mix"}))}),$=(n(30),function(e){var t=e.word,n=e.marker,r=e.remarkWord,a=e.hash,l=e.template;return o.a.createElement("span",{className:"templater__word",onContextMenu:function(e){e.preventDefault(),r(a,t,l)}},n?o.a.createElement("b",null,t," "):o.a.createElement("span",null,t," "))}),B=(n(31),function(e){var t=e.phrase,n=e.hash,r=e.remarkWord,a=e.onCheck;return o.a.createElement("div",{className:"templater__phrase",onClick:function(e){return a(n)}},function(e){return e.words.map(function(t,a){return o.a.createElement($,Object.assign({key:a,hash:n,template:e.based_template,remarkWord:r},t))})}(t))}),X=function(e){var t=e.phrases,n=e.onKeywordChange,r=e.remarkWord,a=e.onCheck,l=[],c=function(e,t){return o.a.createElement("tr",{key:t,className:e.colored?"colored":"default"},o.a.createElement("td",{className:"templater__table_keyword"},o.a.createElement("input",{className:"templater__table_input",onChange:function(r){return n(t,r.target.value,e.based_template)},value:e.keyword})),o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",onChange:function(e){return a(t)},checked:e.colored}),o.a.createElement(B,{phrase:e,hash:t,onCheck:a,remarkWord:r})),o.a.createElement("td",{className:"templater__table_length"},e.length),o.a.createElement("td",{className:"templater__table_ligth"},e.light))};return o.a.createElement("tbody",null,function(){for(var e in t)l.push(c(t[e],e));return l.map(function(e){return e})}())};X.defaultProps={phrases:[]};var G=X,H=(n(32),function(e){return o.a.createElement("table",{className:"templater__table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Keyword"),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"length"),o.a.createElement("th",null,"light"))),o.a.createElement(G,e))}),F=(n(33),function(e){var t=e.import_area,n=e.onInputChange;return o.a.createElement("div",{className:"templater__keywords"},o.a.createElement("textarea",{name:"keywords",id:"",cols:"30",rows:"10",onChange:function(e){return n(e.target.value)},value:t}))});var Y=function(e){function t(){return Object(P.a)(this,t),Object(K.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.remarkWord,r=e.fillImport,a=e.onKeywordChange,l=e.generateTable,c=e.colorPhrase,u=e.deleteExport,i=e.onTemplateChange;return o.a.createElement("div",{className:"App",scrolling:"no"},o.a.createElement(F,{onInputChange:r,import_area:t.import_area}),o.a.createElement(U,{template:t.template,import_area:t.import_area,generateTable:l,onChange:i}),o.a.createElement(H,{remarkWord:n,onKeywordChange:a,onCheck:c,phrases:t.phrases}),o.a.createElement("textarea",{rows:"20",onChange:function(e){return e},value:t.export_area}),o.a.createElement("input",{type:"submit",value:"EXCLUDE",onSubmit:function(e){return e.preventDefault()},className:"templater__cleaner",onClick:u}))}}]),t}(a.Component),q=Object(u.b)(function(e){return{data:e}},null,function(e,t){var n=e.data,r=t.dispatch;return{data:n,onTemplateChange:function(e){r(function(e){return{type:f,value:e}}(e))},remarkWord:function(e,t,n){r(function(e,t,n){return{type:v,hash:e,word:t,based_template:n}}(e,t,n))},onKeywordChange:function(e,t,a){var o=n.phrases;r(function(e,t,n,r){return{type:h,hash:e,value:t,based_template:n,phrases:r}}(e,t,a,o))},fillImport:function(e){r(function(e){return{type:m,value:e}}(e))},generateTable:function(e,t){r(function(e,t){return{type:d,input_area:e,based_template:t}}(e,t))},colorPhrase:function(e){r(function(e,t){return{type:g,hash:t,phrases:e}}(n.phrases,e))},deleteExport:function(){var e;r((e=n.phrases,{type:w,phrases:e}))}}})(Y),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(34);var V=Object(i.b)(r,p),Z=Object(i.c)(V,function(){var e=p;void 0!==localStorage.templater&&(e=JSON.parse(localStorage.templater));return e}());Z.subscribe(function(){var e=JSON.stringify(Z.getState());localStorage.templater?localStorage.templater=e:localStorage.setItem("templater",e)}),c.a.render(o.a.createElement(u.a,{store:Z},o.a.createElement(q,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");z?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Q(t,e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.98cf5d9e.chunk.js.map
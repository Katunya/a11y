(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7271)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw i}}return a}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,s=e.priority,g=void 0!==s&&s,v=e.loading,S=e.lazyRoot,A=void 0===S?null:S,k=e.lazyBoundary,O=void 0===k?"200px":k,z=e.className,E=e.quality,I=e.width,N=e.height,P=e.objectFit,R=e.objectPosition,H=e.onLoadingComplete,L=e.loader,M=void 0===L?_:L,C=e.placeholder,q=void 0===C?"empty":C,U=e.blurDataURL,W=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=l.useRef(null),B=l.useContext(h.ImageConfigContext),T=l.useMemo((function(){var e=m||B||d.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[B]),F=W,G=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var J="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var X=w(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(U=U||X.blurDataURL,J=X.src,(!G||"fill"!==G)&&(N=N||X.height,I=I||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:J;var V=x(I),$=x(N),Q=x(E),Y=!g&&("lazy"===v||"undefined"===typeof v);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Y=!1);y.has(t)&&(Y=!1);0;var Z,K=a(f.useIntersection({rootRef:A,rootMargin:O,disabled:!Y}),2),ee=K[0],te=K[1],ne=!Y||te,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae=!1,oe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:R},ce="blur"===q?{filter:"blur(20px)",backgroundSize:P||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:R||"0% 0%"}:{};if("fill"===G)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof V&&"undefined"!==typeof $){var se=$/V,le=isNaN(se)?"100%":"".concat(100*se,"%");"responsive"===G?(re.display="block",re.position="relative",ae=!0,ie.paddingTop=le):"intrinsic"===G?(re.display="inline-block",re.position="relative",re.maxWidth="100%",ae=!0,ie.maxWidth="100%",Z="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(V,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===G&&(re.display="inline-block",re.position="relative",re.width=V,re.height=$)}else 0;var ue={src:b,srcSet:void 0,sizes:void 0};ne&&(ue=j({config:T,src:t,unoptimized:c,layout:G,width:V,quality:Q,sizes:n,loader:M}));var de=t;0;var fe;0;var he=(i(fe={},"imagesrcset",ue.srcSet),i(fe,"imagesizes",ue.sizes),fe),ge=l.default.useLayoutEffect,pe=l.useRef(H);return l.useEffect((function(){pe.current=H}),[H]),ge((function(){ee(D.current)}),[ee]),l.useEffect((function(){!function(e,t,n,r,i){var a=function(){var n=e.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(y.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var a=n.naturalWidth,o=n.naturalHeight;i.current({naturalWidth:a,naturalHeight:o})}})))};e.current&&(e.current.complete?a():e.current.onload=a)}(D,de,0,q,pe)}),[de,G,q,ne]),l.default.createElement("span",{style:re},ae?l.default.createElement("span",{style:ie},Z?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Z}):null):null,l.default.createElement("img",Object.assign({},F,ue,{decoding:"async","data-nimg":G,className:z,ref:D,style:p({},oe,ce)})),Y&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},F,j({config:T,src:t,unoptimized:c,layout:G,width:V,quality:Q,sizes:n,loader:M}),{decoding:"async","data-nimg":G,style:oe,className:z,loading:v||"lazy"}))),g?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ue.src+ue.srcSet+ue.sizes,rel:"preload",as:"image",href:ue.srcSet?void 0:ue.src},he))):null)};var s,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(s=n(5443))&&s.__esModule?s:{default:s},d=n(5809),f=n(7190),h=n(9977);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){g(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t.path).concat(S(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(S(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,c=e.quality,s=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,s=/(^|\s)(1?\d?\d)vw/g,l=[];c=s.exec(r);c)l.push(parseInt(c[2]));if(l.length){var u,d=.01*(u=Math).min.apply(u,o(l));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,s),d=u.widths,f=u.kind,h=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,r){return"".concat(l({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:c,width:d[h]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=v.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e){return"/"===e[0]?e.slice(1):e}},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=a.useRef(),d=i(a.useState(!1),2),f=d[0],h=d[1],g=i(a.useState(t?t.current:null),2),p=g[0],m=g[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),l.push(n));if(t)return t;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:a,elements:i}),t}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),s.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:n}))}),[r,p,n,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&m(t.current)}),[t]),[y,f]};var a=n(7294),o=n(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map,l=[]},7271:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),i=(n(7294),n(9008)),a=n(1036),o=n.n(a),c=n(5675),s={src:"/_next/static/media/logo.61c85486.svg",height:42,width:200},l={src:"/_next/static/media/user.bde5fe2c.svg",height:46,width:46},u={src:"/_next/static/media/search.a93aa3d0.svg",height:19,width:20};var d=function(){return(0,r.jsxs)("header",{className:o().header,children:[(0,r.jsx)("a",{href:"#main",className:o().skipLink,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443"}),(0,r.jsx)(c.default,{src:s,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0437\u0434\u0430\u043d\u0438\u044f - \u043c\u0443\u0437\u0435\u0439 \u0438\u043c\u0435\u043d\u0438 \u0410.\u0421. \u041f\u0443\u0448\u043a\u0438\u043d\u0430",role:"presentation",width:"200",height:"42"}),(0,r.jsxs)("div",{className:o().containerHeader,children:[(0,r.jsx)("form",{action:"/search",role:"search",children:(0,r.jsxs)("div",{className:o().search,children:[(0,r.jsx)("input",{type:"search",className:o().searchInput}),(0,r.jsx)(c.default,{src:u,className:o().logoSearch,alt:"login"})]})}),(0,r.jsxs)("nav",{className:o().languageSwitch,"aria-label":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u044f\u0437\u044b\u043a\u0438",children:[(0,r.jsx)("span",{"aria-current":"true","aria-label":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",children:(0,r.jsx)("span",{"aria-hidden":"true",children:"RU"})}),(0,r.jsx)("a",{href:"/en",hrefLang:"en","aria-label":"English",lang:"en",children:"EN"})]}),(0,r.jsx)("button",{type:"button","aria-label":"\u041b\u043e\u0433\u0438\u043d",className:o().buttonAuth,"aria-haspopup":!0,children:(0,r.jsx)(c.default,{src:l,alt:"login","aria-hidden":!0})})]})]})},f=n(5764),h=n.n(f),g=n(5926),p=n.n(g);var m=function(){return(0,r.jsx)("nav",{className:p().navList,children:(0,r.jsxs)("ul",{"aria-label":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044b",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#museum",children:"\u041c\u0443\u0437\u0435\u0439"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#visitors",children:"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f\u043c"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#events",children:"\u0412\u044b\u0441\u0442\u0430\u0432\u043a\u0438 \u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"})})]})})};var y=function(){return(0,r.jsxs)("div",{className:h().wrapper,children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{id:"main",children:(0,r.jsx)(m,{})})]})};function b(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("html",{lang:"ru"}),(0,r.jsx)("title",{children:"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043c\u0443\u0437\u0435\u0439 \u0438\u0437\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432 \u0438\u043c\u0435\u043d\u0438 \u0410.\u0421. \u041f\u0443\u0448\u043a\u0438\u043d\u0430"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter&display=optional"})]}),(0,r.jsx)("body",{children:(0,r.jsx)(y,{})})]})}},1036:function(e){e.exports={header:"Header_header__CdHFZ",skipLink:"Header_skipLink__XEGmH",search:"Header_search__EUewU",searchInput:"Header_searchInput__gUp_S",languageSwitch:"Header_languageSwitch__Himzx",containerHeader:"Header_containerHeader__oYfLP",buttonAuth:"Header_buttonAuth__5vLb7",logoSearch:"Header_logoSearch__RjErl"}},5764:function(e){e.exports={wrapper:"Main_wrapper__WMpkj"}},5926:function(e){e.exports={navList:"Navigation_navList__IaJ87"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
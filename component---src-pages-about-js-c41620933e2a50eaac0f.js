(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,A){"use strict";A("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"3XHS":function(e,t,A){"use strict";A.r(t);var a=A("q1tI"),r=A.n(a),n=A("Wbzz"),i=A("Bl7J"),c=A("vrFN"),s=A("pMgH"),o=A("WQqN");t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"About Us"}),r.a.createElement("div",{class:"col-md-4",id:"content-desktop"},r.a.createElement(s.a,null)),r.a.createElement("div",{class:"col-md-8"},r.a.createElement("br",null),r.a.createElement("div",{class:"alert alert-secondary",role:"alert"},r.a.createElement("h2",null,"من نحن ",r.a.createElement("i",{class:"fas fa-address-card"}))),r.a.createElement(n.Link,{to:"/",class:"btn btn-secondary btn-sm"},r.a.createElement("i",{class:"far fa-arrow-alt-circle-left"})," العودة للخلف"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"content-mobile"},r.a.createElement("div",{class:"p-3 mb-2 bg-success text-white"},"القائمة البريدية"),r.a.createElement(o.a,null)),r.a.createElement("hr",null)))}},"8oxB":function(e,t){var A,a,r=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(A===setTimeout)return setTimeout(e,0);if((A===n||!A)&&setTimeout)return A=setTimeout,setTimeout(e,0);try{return A(e,0)}catch(t){try{return A.call(null,e,0)}catch(t){return A.call(this,e,0)}}}!function(){try{A="function"==typeof setTimeout?setTimeout:n}catch(e){A=n}try{a="function"==typeof clearTimeout?clearTimeout:i}catch(e){a=i}}();var s,o=[],d=!1,l=-1;function f(){d&&s&&(d=!1,s.length?o=s.concat(o):l=-1,o.length&&u())}function u(){if(!d){var e=c(f);d=!0;for(var t=o.length;t;){for(s=o,o=[];++l<t;)s&&s[l].run();l=-1,t=o.length}s=null,d=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===i||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var A=1;A<arguments.length;A++)t[A-1]=arguments[A];o.push(new g(e,t)),1!==o.length||d||c(u)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8ujH":function(e,t,A){A("pIFo"),A("V+eJ"),A("f3/d");var a=A("GTTd")("jsonp");e.exports=function(e,t,A){"function"==typeof t&&(A=t,t={});t||(t={});var i,c,s=t.prefix||"__jp",o=t.name||s+r++,d=t.param||"callback",l=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,u=document.getElementsByTagName("script")[0]||document.head;l&&(c=setTimeout((function(){g(),A&&A(new Error("Timeout"))}),l));function g(){i.parentNode&&i.parentNode.removeChild(i),window[o]=n,c&&clearTimeout(c)}return window[o]=function(e){a("jsonp got",e),g(),A&&A(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+d+"="+f(o)).replace("?&","?"),a('jsonp req "%s"',e),(i=document.createElement("script")).src=e,u.parentNode.insertBefore(i,u),function(){window[o]&&g()}};var r=0;function n(){}},"9eSz":function(e,t,A){"use strict";A("rGqo"),A("yt8O"),A("Btvt"),A("XfO3"),A("EK0E"),A("0mN4");var a=A("5NKs");t.__esModule=!0,t.default=void 0;var r,n=a(A("v06X")),i=a(A("XEEL")),c=a(A("uDP2")),s=a(A("j8BX")),o=a(A("q1tI")),d=a(A("17x9")),l=function(e){var t=(0,s.default)({},e),A=t.resolutions,a=t.sizes,r=t.critical;return A&&(t.fixed=A,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,A=e.fixed;return(t&&t[0]||A&&A[0]).src},u=Object.create({}),g=function(e){var t=l(e),A=f(t);return u[A]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,h=new WeakMap;function E(e){return e.map((function(e){var t=e.src,A=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},a&&o.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),o.default.createElement("source",{media:r,srcSet:A,sizes:n}))}))}function w(e){var t=[],A=[];return e.forEach((function(e){return(e.media?t:A).push(e)})),[].concat(t,A)}function B(e){return e.map((function(e){var t=e.src,A=e.media,a=e.tracedSVG;return o.default.createElement("source",{key:t,media:A,srcSet:a})}))}function Q(e){return e.map((function(e){var t=e.src,A=e.media,a=e.base64;return o.default.createElement("source",{key:t,media:A,srcSet:a})}))}function v(e,t){var A=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:A)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var A=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return A&&(A.observe(e),h.set(e,t)),function(){A.unobserve(e),h.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',A=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)})).join("")+"<img "+o+i+c+A+a+t+n+r+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,A=e.imageVariants,a=e.generateSources,r=e.spreadProps,n=o.default.createElement(S,(0,s.default)({src:t},r));return A.length>1?o.default.createElement("picture",null,a(A),n):n},S=o.default.forwardRef((function(e,t){var A=e.sizes,a=e.srcSet,r=e.src,n=e.style,i=e.onLoad,d=e.onError,l=e.loading,f=e.draggable,u=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,s.default)({sizes:A,srcSet:a,src:r},u,{onLoad:i,onError:d,ref:t,loading:l,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));S.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var A;(A=e.call(this,t)||this).seenBefore=m&&g(t),A.isCritical="eager"===t.loading||t.critical,A.addNoScript=!(A.isCritical&&!t.fadeIn),A.useIOSupport=!p&&b&&!A.isCritical&&!A.seenBefore;var a=A.isCritical||m&&(p||!A.useIOSupport);return A.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!A.seenBefore&&t.fadeIn},A.imageRef=o.default.createRef(),A.handleImageLoaded=A.handleImageLoaded.bind((0,n.default)(A)),A.handleRef=A.handleRef.bind((0,n.default)(A)),A}(0,i.default)(t,e);var A=t.prototype;return A.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},A.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},A.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},A.handleImageLoaded=function(){var e,t,A;e=this.props,t=l(e),A=f(t),u[A]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},A.render=function(){var e=l(this.props),t=e.title,A=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,i=e.imgStyle,c=void 0===i?{}:i,d=e.placeholderStyle,f=void 0===d?{}:d,u=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,h=e.Tag,w=e.itemProp,v=e.loading,j=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,s.default)({opacity:x?1:0,transition:C?"opacity "+b+"ms":"none"},c),Y="boolean"==typeof m?"lightgray":m,I={transitionDelay:b+"ms"},M=(0,s.default)({opacity:this.state.imgLoaded?0:1},C&&I,{},c,{},f),G={title:t,alt:this.state.isVisible?"":A,style:M,className:u,itemProp:w};if(g){var O=g,F=O[0];return o.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},o.default.createElement(h,{style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),Y&&o.default.createElement(h,{title:t,style:(0,s.default)({backgroundColor:Y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&I)}),F.base64&&o.default.createElement(N,{src:F.base64,spreadProps:G,imageVariants:O,generateSources:Q}),F.tracedSVG&&o.default.createElement(N,{src:F.tracedSVG,spreadProps:G,imageVariants:O,generateSources:B}),this.state.isVisible&&o.default.createElement("picture",null,E(O),o.default.createElement(S,{alt:A,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,s.default)({alt:A,title:t,loading:v},F,{imageVariants:O}))}}))}if(p){var D=p,T=D[0],k=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete k.display,o.default.createElement(h,{className:(a||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},Y&&o.default.createElement(h,{title:t,style:(0,s.default)({backgroundColor:Y,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},C&&I)}),T.base64&&o.default.createElement(N,{src:T.base64,spreadProps:G,imageVariants:D,generateSources:Q}),T.tracedSVG&&o.default.createElement(N,{src:T.tracedSVG,spreadProps:G,imageVariants:D,generateSources:B}),this.state.isVisible&&o.default.createElement("picture",null,E(D),o.default.createElement(S,{alt:A,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,s.default)({alt:A,title:t,loading:v},T,{imageVariants:D}))}}))}return null},t}(o.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});x.propTypes={resolutions:C,sizes:R,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var Y=x;t.default=Y},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Codeit in Arabic","description":"Learn code in arabic, articles in learning programming in arabic. step by step tutorials in arabic for beginners in learning how to code.","author":"waEl Hagag"}}}}')},G04T:function(e,t,A){"use strict";A("pIFo"),A("VRzm"),A("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var a,r=A("8ujH"),n=(a=r)&&a.__esModule?a:{default:a},i=A("H/qo");var c=function(e){return new Promise((function(t,A){return(0,n.default)(e,{param:"c",timeout:3500},(function(e,a){e&&A(e),a&&t(a)}))}))},s=function(e){var t="";for(var A in e)if(Object.prototype.hasOwnProperty.call(e,A)){var a=A.substring(0,6)?A:A.toUpperCase();t=t.concat("&"+a+"="+e[A])}return t};t.default=function(e,t,A){var a=(0,i.validate)(e),r=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var n="https://outlook.us4.list-manage.com/subscribe/post?u=cdd86748878696d20990804bb&amp;id=7585bb0c94";arguments.length<3&&"string"==typeof t?n=t:"string"==typeof A&&(n=A),n=n.replace(/\/post/g,"/post-json");var o="&EMAIL="+r+s(t),d=""+n+o;return c(d)}},GTTd:function(e,t,A){(function(a){function r(){var e;try{e=t.storage.debug}catch(A){}return!e&&void 0!==a&&"env"in a&&(e={}.DEBUG),e}A("pIFo"),A("Oyvg"),A("SRfc"),(t=e.exports=A("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var A=this.useColors;if(e[0]=(A?"%c":"")+this.namespace+(A?" %c":" ")+e[0]+(A?"%c ":" ")+"+"+t.humanize(this.diff),!A)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,n=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(n=r))})),e.splice(n,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(A){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,A("8oxB"))},"H/qo":function(e,t,A){"use strict";A("dZ+Y"),A("KKXr");var a=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!a.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},OGtf:function(e,t,A){var a=A("XKFU"),r=A("eeVq"),n=A("vhPU"),i=/"/g,c=function(e,t,A,a){var r=String(n(e)),c="<"+t;return""!==A&&(c+=" "+A+'="'+String(a).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var A={};A[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",A)}},QXP7:function(e,t){var A=1e3,a=60*A,r=60*a,n=24*r,i=365.25*n;function c(e,t,A){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+A:Math.ceil(e/t)+" "+A+"s"}e.exports=function(e,t){t=t||{};var s,o=typeof e;if("string"===o&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*i;case"days":case"day":case"d":return c*n;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*a;case"seconds":case"second":case"secs":case"sec":case"s":return c*A;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===o&&!1===isNaN(e))return t.long?c(s=e,n,"day")||c(s,r,"hour")||c(s,a,"minute")||c(s,A,"second")||s+" ms":function(e){if(e>=n)return Math.round(e/n)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=A)return Math.round(e/A)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},QxGZ:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"9c35fe2d-dd04-52c8-9c0d-2a1d84269411","fields":{"slug":"/الجملة الشرطية أو if statement"},"frontmatter":{"tags":["إطار العمل","تعلم البرمجة"],"title":"الجملة الشرطية أو if statement ومتي يمكن أستخدامها","date":"2020-03-19","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAePZWglEg//EABgQAAIDAAAAAAAAAAAAAAAAAAABEDFB/9oACAEBAAEFAlKNd//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAAAAgMv/aAAgBAQAGPwIlf//EABsQAQACAgMAAAAAAAAAAAAAAAEAESGRUXHh/9oACAEBAAE/IXnyIrdNR6dx03AGrxMKE//aAAwDAQACAAMAAAAQL/8A/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QCf/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EFn/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMUFhcf/aAAgBAQABPxCq4onVkfsBUPbEw6EIgUThJSCzWsVwAHk//9k=","aspectRatio":1.9090909090909092,"src":"/static/a628fbfc62f548e987f336ecdb5ddb96/4d764/if-stnt.jpg","srcSet":"/static/a628fbfc62f548e987f336ecdb5ddb96/5e7ff/if-stnt.jpg 63w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/3c30d/if-stnt.jpg 125w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/4d764/if-stnt.jpg 250w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/aaebf/if-stnt.jpg 375w,\\n/static/a628fbfc62f548e987f336ecdb5ddb96/201db/if-stnt.jpg 480w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"11a00b4f-9864-596e-8779-77369ae48238","fields":{"slug":"/هل يمكن تطوير تطبيقات المحمول بلغات الويب ؟"},"frontmatter":{"tags":["إطار العمل","تطوير تطبيقات الموبايل","رأكت نيتف","فلاتر جوجل"],"title":"هل يمكن تطوير تطبيقات المحمول بلغات الويب ؟","date":"2020-03-18","category":["تطوير تطبيقات المحمول"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBP/aAAwDAQACEAMQAAABokWXxMRZ/wD/xAAaEAACAgMAAAAAAAAAAAAAAAAAARASERRB/9oACAEBAAEFAqLXqxrByP/EABYRAAMAAAAAAAAAAAAAAAAAAAIQQf/aAAgBAwEBPwE4v//EABURAQEAAAAAAAAAAAAAAAAAAAIQ/9oACAECAQE/ATP/xAAXEAADAQAAAAAAAAAAAAAAAAAREiBB/9oACAEBAAY/AmGV/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAMUEgIf/aAAgBAQABPyE1t624QPyg4QkeH//aAAwDAQACAAMAAAAQv+//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARGR/9oACAEDAQE/EK4S/8QAFxEAAwEAAAAAAAAAAAAAAAAAEBEhcf/aAAgBAgEBPxBro//EABsQAAICAwEAAAAAAAAAAAAAAAERACEQMUGR/9oACAEBAAE/EBg0U1NqSyKg74dGISigfYZ5j//Z","aspectRatio":1.9090909090909092,"src":"/static/1564964e6bc8f5824e638938798f101b/4d764/react-native-crop.jpg","srcSet":"/static/1564964e6bc8f5824e638938798f101b/5e7ff/react-native-crop.jpg 63w,\\n/static/1564964e6bc8f5824e638938798f101b/3c30d/react-native-crop.jpg 125w,\\n/static/1564964e6bc8f5824e638938798f101b/4d764/react-native-crop.jpg 250w,\\n/static/1564964e6bc8f5824e638938798f101b/aaebf/react-native-crop.jpg 375w,\\n/static/1564964e6bc8f5824e638938798f101b/b625a/react-native-crop.jpg 500w,\\n/static/1564964e6bc8f5824e638938798f101b/918f7/react-native-crop.jpg 600w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"437bc1e3-48a8-5efe-ac5b-b7c0ae03db76","fields":{"slug":"/لماذا يجب ان تستخدم إطار عمل؟"},"frontmatter":{"tags":["إطار العمل"],"title":"لماذا يجب ان تستخدم إطار عمل؟","date":"2020-03-14","category":["تطوير تطبيقات الويب"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADHUlEQVQ4y1WTyW9bVRTG/Q8hsWbJgnV3rFgAC1gAi6qrFqmIQtOoUxpSJ3Y8+9luUs+O7dixn6fnOZ7jeUgREYMAqcqCFejHeXZVqYtP9+mee8893/AM7vIUd3nyFoo2wVWZY2/8jLsyW+8dV17hqyzle4SztsDefCU1/fz4HSiVMQa3NpMmMzzSxFOe464uOTprojoc+LJtPLVLEuofRMu/42osCcczqC4rSmmAUpV71alAelQ3gxnWE2pT7GofR7aLtbIipbzg9c0bxPwxnM0r/MUlvvwYc3lJ0/yE6/uf4Y8Xscs9/Y5N4MjJA9LL4NI2Da2ZNgdnLSzFIb7CBZHACUquz14oL68vMUYLPPbGeZnvEA7GcOX7cr7DYbqFOXWOJdOVhjN9wg1lV+OS9J0tkt89xi46WYS+OdvHnG7jLI5wFAZY1C6m/AhbdcV+dsA3Jwu+PZ3zor4SqQTaXNdQdCvNsIvooe3nhJ9aOFAHHLqPSWTz+KIZHh6G2DbLVKES4YSK0e0XJjNunUy5dzrCK0O5dP0FBqtMYUrWsZ7WcVamKOe/sBPSGE3nhIJhPr95mxtf/kD86AuYvw//xAhnWxyetfFVhUVpjDHbE8l0ygud8gKvFG6Fhnx9LIVUk91oleFowsNUnu07X3Fw/wF19S7X9ff4788AsVwH42kDr9qj+WyXaDCJrb5cS2dQtMW684fGNh/sNnFIfH6KlOkMJzz76xq1U2RYb1FZWNgufk/ht79J5DT2CxMiCY1/P/mIlvE51vMrPKXpRkM9f3uZMU/VKU5tzF4wx5MjP48iER6Eo/zolzXg4u5Lha1QjB1fAFO8JtoPJZca3vxANNTNFQ0d4tq+FPUchUoisORRj1G2PiRX7VCs97kc9Jj3h5QaQ4q1Lsn6GKuc24mcY0z3MKUkOskmzsL4jcvC3SkUfg34uQoGJLBzmXSOTX9V4lDorch2L3FKHm3lleyJLIkZH9/ucc9zIeaIy+L6Oja6fjqcglpcpRLPYdf3pKiIFPpqK8q/Xdp869BNNKVnfLp1waPwBJ/k1v3Gi/8B4yg2DiaTh6MAAAAASUVORK5CYII=","aspectRatio":1.9090909090909092,"src":"/static/167c0f10a8e4324466e9b50faf2856b5/750cb/fr-wk-codeit.png","srcSet":"/static/167c0f10a8e4324466e9b50faf2856b5/799c6/fr-wk-codeit.png 63w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/9e38c/fr-wk-codeit.png 125w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/750cb/fr-wk-codeit.png 250w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/72432/fr-wk-codeit.png 375w,\\n/static/167c0f10a8e4324466e9b50faf2856b5/d9b11/fr-wk-codeit.png 383w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"7d012e12-d292-55fd-b02d-74d076f730f6","fields":{"slug":"/أفضل أربعة لغات برمجية لتعلمها في 2020"},"frontmatter":{"tags":["البرمجة","تطوير المواقع","لغات البرمجة"],"title":"أفضل أربعة لغات برمجية لتعلمها في 2020","date":"2020-02-19","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABhElEQVQoz3WS3Y7BUBSF+xZNqN9p/UQpUlRQ8dNBKiLcuHPZCxfiDUhcN/UA3sC9N/EGHsAbzDcOZiYT6+Jk55y91tqru1LyLxKJhKqqmqZxfjwh6uQ/SK9KvQOyYRiDwcCyrHq9zjkej3u9HpfxeFz9hQcZ1VQq9fmE4zjT6XQymQyHw2q12mw2Bb/T6fBk23Y4HA6FQrAkNHRdh5zNZovFoiC0223M+/0+l3AYYTQaua6bz+drtdpms1ksFgwiEQ8OfEaIRCJ0I5TL5bjc7Xb7/d40zUwmgyJMWZYLhcLlcjmdTphL6XSaMVarle/7vEWj0VKphDNN1+v1drtBowcmEszV7XY9z5vNZt9j84AhIbfbrZgCtFot4iB3PB7L5TKDzOdzknMSHk8oNEtiGVSKosA5HA6Q6UYe/0ajwXeGfz6fSQGHqPiJzT1WJSQqlcpyuURovV4HQcCexMIBKZhcu+O18589C38ys2oMiYdhLBYTrxR4vv1JxO8lCiRI8WK+wxdvz4k7hjz6FQAAAABJRU5ErkJggg==","aspectRatio":1.9090909090909092,"src":"/static/61066479675913b437116de832f3eeac/750cb/top_4_language_2020.png","srcSet":"/static/61066479675913b437116de832f3eeac/799c6/top_4_language_2020.png 63w,\\n/static/61066479675913b437116de832f3eeac/9e38c/top_4_language_2020.png 125w,\\n/static/61066479675913b437116de832f3eeac/750cb/top_4_language_2020.png 250w,\\n/static/61066479675913b437116de832f3eeac/72432/top_4_language_2020.png 375w,\\n/static/61066479675913b437116de832f3eeac/56ef7/top_4_language_2020.png 500w,\\n/static/61066479675913b437116de832f3eeac/58666/top_4_language_2020.png 560w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"e02a5cd5-133d-57fa-9426-6ae86c262e83","fields":{"slug":"/ماهي اللغة البرمجية المناسبة الي ابدأ بها تعلم البرمجة؟"},"frontmatter":{"tags":["إطار العمل","تعلم البرمجة","تطوير المواقع","تطوير واجهة المستخدم"],"title":"ماهي اللغة البرمجية المناسبة الي ابدأ بها تعلم البرمجة؟","date":"2020-02-16","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgT/2gAMAwEAAhADEAAAAb97VJMJNL//xAAaEAADAAMBAAAAAAAAAAAAAAAAAQIREiEy/9oACAEBAAEFApyelfK1RTwbtn//xAAXEQADAQAAAAAAAAAAAAAAAAAAERMh/9oACAEDAQE/AXpRH//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAIAQIBAT8BWCg//8QAGxAAAgEFAAAAAAAAAAAAAAAAAAEQETFBUfD/2gAIAQEABj8CtDK5O0Jn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUExUXGR/9oACAEBAAE/IQA2cEQEC/FAYmkH2FwbBdZ7nHAxFJKtDU//2gAMAwEAAgADAAAAEJgP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EEGAlrL/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxAoGBBv/8QAGhABAQEBAQEBAAAAAAAAAAAAAREhADFBUf/aAAgBAQABPxAsyqCMcyvzkzv3IJWt04cTYtfsOniiQsfWckIbRk2ms93lMpJY/O//2Q==","aspectRatio":1.9090909090909092,"src":"/static/da6df8ad71b221837185bbf843d37251/4d764/lang-codeit.jpg","srcSet":"/static/da6df8ad71b221837185bbf843d37251/5e7ff/lang-codeit.jpg 63w,\\n/static/da6df8ad71b221837185bbf843d37251/3c30d/lang-codeit.jpg 125w,\\n/static/da6df8ad71b221837185bbf843d37251/4d764/lang-codeit.jpg 250w,\\n/static/da6df8ad71b221837185bbf843d37251/aaebf/lang-codeit.jpg 375w,\\n/static/da6df8ad71b221837185bbf843d37251/b625a/lang-codeit.jpg 500w,\\n/static/da6df8ad71b221837185bbf843d37251/ee6b0/lang-codeit.jpg 701w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"61d1f386-36ae-50b8-acb8-1637ccef10c9","fields":{"slug":"/كم ساعة يحتاجها المبرمج المبتدأ لتعلم البرمجة؟"},"frontmatter":{"tags":["تعلم البرمجة","تطوير المواقع","تطوير واجهة المستخدم"],"title":"كم ساعة يحتاجها المبرمج المبتدأ لتعلم البرمجة؟","date":"2020-02-15","category":["لغات البرمجة"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABtvK6LiB//8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACIQMREjFB/9oACAEBAAEFArZHkKoYboL/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwGH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAgMAAAAAAAAAAAAAAAAAABESIDH/2gAIAQEABj8CUkbX/8QAHRAAAgIBBQAAAAAAAAAAAAAAABEBIVExQWFxkf/aAAgBAQABPyH2/s03OciyJEl2yqwTcH//2gAMAwEAAgADAAAAEI/v/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QWP/EABcRAQADAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QDbj/xAAcEAEBAQABBQAAAAAAAAAAAAABEQAhMXGBkfH/2gAIAQEAAT8QBzEENB9jAAAn7a/UPdmTQhAnGSvAEh4zLWxm/9k=","aspectRatio":1.9090909090909092,"src":"/static/447c8280fb2b8e3ed950c24f7f24fb5b/4d764/tim-codeit.jpg","srcSet":"/static/447c8280fb2b8e3ed950c24f7f24fb5b/5e7ff/tim-codeit.jpg 63w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/3c30d/tim-codeit.jpg 125w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/4d764/tim-codeit.jpg 250w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/aaebf/tim-codeit.jpg 375w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/b625a/tim-codeit.jpg 500w,\\n/static/447c8280fb2b8e3ed950c24f7f24fb5b/d3a1f/tim-codeit.jpg 626w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"2d65ab3a-55db-5863-9a33-d4c46af073a1","fields":{"slug":"/ما هي مواصفات جهاز الحاسوب الذي يحتاجة المبرمج؟"},"frontmatter":{"tags":["أطار العمل"],"title":"ما هي مواصفات جهاز الحاسوب الذي يحتاجة المبرمج؟","date":"2020-02-12","category":["بيئة العمل"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAABidlOaChg/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAERIx/9oACAEBAAEFAg0prTgRtOC4zU//xAAXEQADAQAAAAAAAAAAAAAAAAAAARED/9oACAEDAQE/AYx4V0//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMREv/aAAgBAgEBPwHSFMqP/8QAHRAAAwAABwAAAAAAAAAAAAAAAAEhAhASIjFhof/aAAgBAQAGPwKYabvctSom50cI/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFBkf/aAAgBAQABPyGto797KgBFLw3HVQ0wXkXDI0yJXCH/2gAMAwEAAgADAAAAEPjf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EGnTV//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEWH/2gAIAQIBAT8Q7wgZf//EABwQAQADAAIDAAAAAAAAAAAAAAEAESFBUTFhkf/aAAgBAQABPxB7Kbu29bBodBcfqKnkA8bEAG7tTYFBFk9t8uxbROWy9n//2Q==","aspectRatio":1.9090909090909092,"src":"/static/871992adb1aebd16d585b4147702c04c/4d764/angular.jpg","srcSet":"/static/871992adb1aebd16d585b4147702c04c/5e7ff/angular.jpg 63w,\\n/static/871992adb1aebd16d585b4147702c04c/3c30d/angular.jpg 125w,\\n/static/871992adb1aebd16d585b4147702c04c/4d764/angular.jpg 250w,\\n/static/871992adb1aebd16d585b4147702c04c/aaebf/angular.jpg 375w,\\n/static/871992adb1aebd16d585b4147702c04c/4116e/angular.jpg 436w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"e12b2ac0-5464-5f76-a0cc-918ca07caa80","fields":{"slug":"/ما هو ال Static Page Generator ولماذا نعيد استخدام ال Static Page مرة أخري؟"},"frontmatter":{"tags":["إطار العمل","تطوير المواقع","رأكت جي اس","تطوير واجهة المستخدم"],"title":"ما هو ال Static Page Generator ولماذا نعيد استخدام ال Static Page مرة أخري؟","date":"2019-01-29","category":["تطوير تطبيقات الويب"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACB0lEQVQoz22S20tUYRTFzx/nH1DgexC+6INIgYFFTBF2o4mMwKBMCwkJqbB7JqSMjTFgNjUeZ6bJidFxnDn325ybv75zrIGkh83m2+y19trr21LXt9lp7hBEHk3XJYxctK6FZmioWoeO2sETbwg4OPD/k0MREeW38zTyi0iea7FVknEjnwUtFtnFUevIlRobpU2Km1u0lXYKSsBHSbuBiymGx68fEOefIe1aLQqtMr5QWih+xXYMGts1fKEqCt0UlBCpAmTaRo8sjg/VqbpKS1WhVQGljrQsb5Bdeo5crTIz+5hvsszTN+/5+GmNlc8FlnJ5yj9rWI5Jq9MmDD1cz6brO2kcKo1YLG1T3NlHmpx7Qf/IOAOZW5y+cZ/hK5OM3pxiNDvF0KU79J8a5/r0EwGK/6wdkFsvUt6upzXL1qk1dhl894vZsoIUxd3U9ECsbLumyA6+UGB7Fl7iZ6JC9OhmAmywXPjCy+U8r1bWUmI/cFLVq02PqhkggY8qJn8Pk9+CBXmThR9l6DroY3fxN+S0bgrCZG1FeKboCh1xAbqlo5mayAa+s49ttpBcoapmGuRUg9B3yTfrrO7ViUVT49oj2usl7ORzeicS/xOJn4qhMl/JkN97iHT53hx9A2McH77IibNZRsYnGbpwm5OZCY6duUrf4HnOTUz3TuZo/B2Sa85QMT/wG4U+iWuu0eNyAAAAAElFTkSuQmCC","aspectRatio":1.9090909090909092,"src":"/static/5ae132f3137c768717fb54ff20380a86/750cb/static_page_gen.png","srcSet":"/static/5ae132f3137c768717fb54ff20380a86/799c6/static_page_gen.png 63w,\\n/static/5ae132f3137c768717fb54ff20380a86/9e38c/static_page_gen.png 125w,\\n/static/5ae132f3137c768717fb54ff20380a86/750cb/static_page_gen.png 250w,\\n/static/5ae132f3137c768717fb54ff20380a86/72432/static_page_gen.png 375w,\\n/static/5ae132f3137c768717fb54ff20380a86/56ef7/static_page_gen.png 500w,\\n/static/5ae132f3137c768717fb54ff20380a86/844e9/static_page_gen.png 640w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}},{"node":{"id":"69a8808e-491b-5490-a5de-fa3681e0332e","fields":{"slug":"/الأنظمة الوهمية Virtualization Technology ماهي ولماذا نحتاج اليها؟"},"frontmatter":{"tags":["إطار العمل","سيرفرات الإستضافة"],"title":"الأنظمة الوهمية Virtualization Technology ماهي ولماذا نحتاج اليها؟","date":"2019-01-29","category":["بيئة العمل"],"image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACeUlEQVQozzWSWVMaURCF+Sd5MOWSRJGdYZuBGYZZWYZdARGVxZJyQ2PKhUSt8JKq5C0/9+TMpfLQdaf63v769OkJRGQD2+EkPkXTCEoFbO7HEc7qqB/NeGr4sLOLnaiEcE5DomBC0mxEFR3zr0s8vf9CnLmMUUHO8pAulRFQ3BY+x9MsDCKhOgimFCRVG0kW2q1jZEpVfAxGsSfJBJYEMJY3cPP4huXqN2IE+jDFaSDlA4vekJA8NkMJJpuiUKt0oNcOqLCIUr0PtdwRCqOyxmYGIvy+eXzF6s9fqjWQd5tQGJLuIlDuXSBrtvAlITPZFmPGCxZCGZUPW0jpZcTzFnKmh1BW5b2K7YiEktdFZzRlXY6qHUhFB7LdQCBjNqlQxVY4BdnpEGYTUqEfVWFBUnWxm1QQTKuiyB93MJ2jd3aOcmcApz2gIL6lFVKRIye0Gruo2NiNIW00mKwQWKXRHjuX6ZvDEUtiUWZzgOrhCSbXD7h8WOLi/gnjqwcucIrGcCrqAvGCS6CCjb0YO9VpcJ3q6sgadcQUkzCd/q1jfPUNd8sVQc9YPL8x3rF4WeH2+ac4/ckCsYKH/YyFrVAKWnUAtXKAtO4R3BAj+8A9Li3EBTndExFW64hq+4wjuAdjlA8nsDsn65GjiiUeb0fS0Gp9QntU6Am1KY7veyqAGQ2V3gS1wRRudwSHALd7hvpwjubokufFWmFYdhHKmfwXZahVAms9+tcQQL+jD4zIJdHUbA5ht49htf+fx6j2ZwJYG5yvFcbythjP98tsn8Jsjbj+Fv/JtliMf5fUXKo5xWTxA+PbJaaLJWaM8e0Lc98xu3/H9O6V4Dn+AZLwn5oSBsQ7AAAAAElFTkSuQmCC","aspectRatio":1.9090909090909092,"src":"/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/750cb/virt_codeit.png","srcSet":"/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/799c6/virt_codeit.png 63w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/9e38c/virt_codeit.png 125w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/750cb/virt_codeit.png 250w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/72432/virt_codeit.png 375w,\\n/static/3002c527ac0d2b8f8a1729e5fe4ca1dc/95ca7/virt_codeit.png 416w","sizes":"(max-width: 250px) 100vw, 250px"}}}}}}]}}}')},WQqN:function(e,t,A){"use strict";A.d(t,"a",(function(){return c}));A("f3/d");var a=A("q1tI"),r=A.n(a),n=A("G04T"),i=A.n(n);var c=function(e){var t,A;function a(){for(var t,A=arguments.length,a=new Array(A),r=0;r<A;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={name:null,email:null},t._handleChange=function(e){var A,a;console.log(((A={})[""+e.target.name]=e.target.value,A)),t.setState(((a={})[""+e.target.name]=e.target.value,a))},t._handleSubmit=function(e){e.preventDefault(),console.log("submit",t.state),i()(t.state.email,t.state).then((function(e){var t=e.msg,A=e.result;if(console.log("msg",A+": "+t),"success"!==A)throw t;alert(t)})).catch((function(e){console.log("err",e),alert(e)}))},t}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h4",{className:"text-success"},"سجل معنا ليصلك كل جديد"),r.a.createElement("b",{className:"text-success"},"احصل على أحدث المواضيع"),r.a.createElement("div",null,r.a.createElement("form",{dir:"rtl",className:"form-group",onSubmit:this._handleSubmit},r.a.createElement("input",{className:"form-control",type:"text",onChange:this._handleChange,placeholder:"إسـمك",name:"name"}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"email",onChange:this._handleChange,placeholder:"بريدك الإليكتروني",name:"email"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-sm"},r.a.createElement("i",{className:"far fa-paper-plane"})," سجــل"))))},a}(r.a.Component)},bRoh:function(e,t,A){var a;function r(e){function A(){if(A.enabled){var e=A,r=+new Date,n=r-(a||r);e.diff=n,e.prev=a,e.curr=r,a=r;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(A,a){if("%%"===A)return A;s++;var r=t.formatters[a];if("function"==typeof r){var n=i[s];A=r.call(e,n),i.splice(s,1),s--}return A})),t.formatArgs.call(e,i),(A.log||t.log||console.log.bind(console)).apply(e,i)}}return A.namespace=e,A.enabled=t.enabled(e),A.useColors=t.useColors(),A.color=function(e){var A,a=0;for(A in e)a=(a<<5)-a+e.charCodeAt(A),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(A),A}A("Oyvg"),A("KKXr"),A("2Spj"),A("pIFo"),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var A=("string"==typeof e?e:"").split(/[\s,]+/),a=A.length,r=0;r<a;r++)A[r]&&("-"===(e=A[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var A,a;for(A=0,a=t.skips.length;A<a;A++)if(t.skips[A].test(e))return!1;for(A=0,a=t.names.length;A<a;A++)if(t.names[A].test(e))return!0;return!1},t.humanize=A("QXP7"),t.names=[],t.skips=[],t.formatters={}},pMgH:function(e,t,A){"use strict";var a=A("QxGZ"),r=A("q1tI"),n=A.n(r),i=A("WQqN"),c=A("Wbzz"),s=A("9eSz"),o=A.n(s),d=function(){var e=a.data.allMarkdownRemark.edges;return n.a.createElement("div",null,n.a.createElement("div",{className:"card my-4"},n.a.createElement("h5",{className:"card-header alert alert-secondary text-dark",role:"alert"},"البحث ",n.a.createElement("i",{className:"fas fa-search"})),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"input-group"},n.a.createElement("span",{className:"input-group-btn"},n.a.createElement("button",{className:"btn btn-success btn-sm",type:"button"},"إذهب!")),n.a.createElement("input",{type:"text",className:"form-control text-left form-control-sm",placeholder:"... أبحن عن"})))),n.a.createElement("div",{className:"card my-4"},n.a.createElement("h5",{className:"card-header alert alert-secondary text-dark",role:"alert"},"موضوعات قد تهمك ",n.a.createElement("i",{className:"fas fa-server"})),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},e.slice(5,7).map((function(e){return n.a.createElement("div",{key:e.node.id},n.a.createElement(c.Link,{to:e.node.fields.slug,style:{textDecoration:"none"}},n.a.createElement(o.a,{className:"articleimg",fluid:e.node.frontmatter.image.childImageSharp.fluid}),n.a.createElement("div",{className:"text-secondary"},n.a.createElement("b",null,e.node.frontmatter.title))))})))))),n.a.createElement("div",{className:"card my-4"},n.a.createElement("h5",{className:"card-header alert alert-secondary",role:"alert"},"قائمتنا البريدية ",n.a.createElement("i",{className:"fas fa-envelope-open-text"})),n.a.createElement("div",{className:"card-body"},n.a.createElement(i.a,null))))};d.defaultProps={siteTitle:""},t.a=d},vrFN:function(e,t,A){"use strict";var a=A("EH9Q"),r=A("q1tI"),n=A.n(r),i=A("TJpk"),c=A.n(i);function s(e){var t=e.description,A=e.lang,r=e.meta,i=e.title,s=a.data.site,o=t||s.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:A},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s}}]);
//# sourceMappingURL=component---src-pages-about-js-c41620933e2a50eaac0f.js.map
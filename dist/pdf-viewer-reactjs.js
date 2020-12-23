"use strict";var e=require("@babel/runtime/helpers/typeof"),t=require("@babel/runtime/helpers/classCallCheck"),a=require("@babel/runtime/helpers/createClass"),n=require("@babel/runtime/helpers/assertThisInitialized"),l=require("@babel/runtime/helpers/inherits"),s=require("@babel/runtime/helpers/possibleConstructorReturn"),i=require("@babel/runtime/helpers/getPrototypeOf"),r=require("react"),o=require("prop-types"),u=require("@babel/runtime/regenerator"),c=require("@babel/runtime/helpers/asyncToGenerator"),d=require("@babel/runtime/helpers/slicedToArray"),f=require("pdfjs-dist"),m=require("pdfjs-dist/build/pdf.worker.entry"),h=require("react-modal"),p=require("@fortawesome/react-fontawesome"),g=require("@fortawesome/free-solid-svg-icons"),b=require("@babel/runtime/helpers/defineProperty");function v(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var R=v(e),E=v(t),y=v(a),k=v(n),x=v(l),w=v(s),C=v(i),N=v(r),S=v(o),q=v(u),P=v(c),Z=v(d),O=v(f),T=v(m),A=v(h),B=v(b),j=function(e){var t=e.message;return N.default.createElement("div",{className:"columns has-text-danger has-margin-top-5 is-mobile"},N.default.createElement("div",{className:"column is-4 has-text-right has-padding-5"},N.default.createElement("span",{className:"icon"},N.default.createElement("i",{className:"material-icons"},"error_outline"))),N.default.createElement("div",{className:"column is-8 has-text-left has-padding-5"},N.default.createElement("small",null,t)))};j.propTypes={message:S.default.string.isRequired},O.default.GlobalWorkerOptions.workerSrc=T.default;var I=null,D=function(e){var t=e.document,a=e.withCredentials,n=e.password,l=e.pageNum,s=e.scale,i=e.rotation,o=e.pageCount,u=e.changePage,c=e.showThumbnail,d=e.protectContent,f=e.watermark,m=e.alert,h=e.canvasCss,p=e.setThumbnails,g=r.useState({status:!1,message:""}),b=Z.default(g,2),v=b[0],R=b[1],E=r.useRef(null),y=r.useRef(null),k=r.useRef(null),x=r.useRef(!0),w=r.useState([]),C=Z.default(w,2),S=C[0],T=C[1],A=r.useState([]),B=Z.default(A,2),D=B[0],L=B[1],z=m||j,_=function(){var e=P.default(q.default.mark((function e(){var l;return q.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l={withCredentials:a,password:n},null==t.url?l.data=atob(t.base64):l.url=t.url,e.next=5,O.default.getDocument(l).promise;case 5:return I=e.sent,e.next=8,F();case 8:return e.next=10,M();case 10:H(),o(I.numPages),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.warn("Error while opening the document !\n",e.t0),R({status:!0,message:"Error while opening the document !"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=P.default(q.default.mark((function e(){var t,a,n,r,o,u,c,d,m,h,p,g,b,v,y;return q.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.getPage(l);case 3:return t=e.sent,a=t.getViewport({scale:s,rotation:i}),(n=E.current).height=a.height,n.width=a.width,r=n.getContext("2d"),o={canvasContext:r,viewport:a},u=t.render(o),e.prev=11,e.next=14,u.promise;case 14:0!==Object.entries(f).length&&(c=f.text,d=f.diagonal,m=f.opacity,h=f.font,p=f.size,g=f.color,r.globalAlpha=m,r.font="".concat(p*s,"px ").concat(""!==h?h:"Comic Sans MS"),r.fillStyle=g,b=r.measureText(c),v=b.width,y=p*s,r.translate(a.width/2,a.height/2),d&&r.rotate(-.785),r.fillText(c,-v/2,y/2)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(11),console.warn("Error occured while rendering !\n",e.t0),R({status:!0,message:"Error occured while rendering !"});case 21:e.next=27;break;case 23:e.prev=23,e.t1=e.catch(0),console.warn("Error while reading the pages !\n",e.t1),R({status:!0,message:"Error while reading the pages !"});case 27:case"end":return e.stop()}}),e,null,[[0,23],[11,17]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=P.default(q.default.mark((function e(){var t,a,n,l,s,i,r,o,u,d,m,h,p,g,b,v,R,E,k;return q.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.entries(c).length){e.next=26;break}t=[],a=.1,n=0,1<=c.scale&&c.scale<=5&&(a=c.scale/10),-90!==c.rotationAngle&&90!==c.rotationAngle||(n=c.rotationAngle),l=1;case 7:if(!(l<=I.numPages)){e.next=25;break}return e.next=10,I.getPage(l);case 10:return s=e.sent,i=s.getViewport({scale:a,rotation:n}),(r=y.current).height=i.height,r.width=i.width,o=r.getContext("2d"),u={canvasContext:o,viewport:i},d=s.render(u),e.next=20,d.promise;case 20:0!==Object.entries(f).length&&(m=f.text,h=f.diagonal,p=f.opacity,g=f.font,b=f.size,v=f.color,o.globalAlpha=p,o.font="".concat(b*a,"px ").concat(""!==g?g:"Comic Sans MS"),o.fillStyle=v,R=o.measureText(m),E=R.width,k=b*a,o.translate(i.width/2,i.height/2),h&&o.rotate(-.785),o.fillText(m,-E/2,k/2)),t.push({image:r.toDataURL("image/png"),height:i.height,width:i.width});case 22:l++,e.next=7;break;case 25:L(t);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){if(0!==Object.entries(c).length){for(var e=[],t=function(t){var a=D[t-1].image,n=D[t-1].height,s=D[t-1].width;e.push(N.default.createElement("img",{style:l===t?{height:n,width:s,display:"flex",cursor:"pointer",margin:"10px 15px",border:"5px solid red"}:{height:n,width:s,display:"flex",cursor:"pointer",margin:"10px 15px",boxShadow:"rgba(0, 0, 0, 0.6) 0px 2px 2px 0px"},onClick:function(){return u(t)},ref:l===t?k:null,key:t,alt:"thumbnail of page ".concat(t),src:a}))},a=1;a<=D.length;a++)t(a);e.push(N.default.createElement("div",{key:0,style:{padding:"0px 10px"}})),T(e),p(e)}};return r.useEffect((function(){_()}),[t,n]),r.useEffect((function(){x.current?x.current=!1:(F(),H())}),[l,s,i,o]),r.useEffect((function(){null!==k.current&&0!==Object.entries(c).length&&k.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})),v.status?(o(-1),N.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},N.default.createElement(z,{message:v.message}))):0!==Object.entries(c).length?N.default.createElement(N.default.Fragment,null,N.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},N.default.createElement("canvas",{onContextMenu:function(e){return d?e.preventDefault():null},ref:E,width:"undefined"!=typeof window&&window.innerWidth,height:"undefined"!=typeof window&&window.innerHeight})),N.default.createElement("div",{style:{backgroundColor:"#EAE6DA",display:"flex",flexDirection:"row",overflowX:"auto"}},S),N.default.createElement("canvas",{ref:y,style:{display:"None"}})):N.default.createElement(N.default.Fragment,null,N.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},N.default.createElement("canvas",{onContextMenu:function(e){return d?e.preventDefault():null},ref:E,width:"undefined"!=typeof window&&window.innerWidth,height:"undefined"!=typeof window&&window.innerHeight})))};D.propTypes={document:S.default.any.isRequired,withCredentials:S.default.bool,password:S.default.string,pageNum:S.default.number.isRequired,scale:S.default.number.isRequired,rotation:S.default.number.isRequired,changePage:S.default.func,pageCount:S.default.func,showThumbnail:S.default.shape({scale:S.default.number,rotationAngle:S.default.number}),protectContent:S.default.bool,watermark:S.default.shape({text:S.default.string,diagonal:S.default.bool,opacity:S.default.string,size:S.default.string,color:S.default.string}),canvasCss:S.default.string,setThumbnails:S.default.func.isRequired},D.defaultProps={changePage:function(){},pageCount:function(){},showThumbnail:{},protectContent:!1,watermark:{},canvasCss:""};var L=function(e){var t=e.css,a=e.page,n=e.pages,l=e.handleNextClick,s=t||"button is-black is-marginless";return a===n?N.default.createElement("button",{className:s,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))):N.default.createElement("button",{className:s,onClick:l},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"keyboard_arrow_right")))};L.propTypes={css:S.default.string,page:S.default.number.isRequired,pages:S.default.number.isRequired,handleNextClick:S.default.func.isRequired};var z=function(e){var t=e.css,a=e.page,n=e.pages,l=t||"is-size-7 is-vcentered has-text-centered is-inline-flex has-padding-top-5 button is-black is-marginless has-margin-left-5 has-margin-right-5";return N.default.createElement("span",{className:l},"Page ".concat(a," / ").concat(n))};z.propTypes={css:S.default.string,page:S.default.number.isRequired,pages:S.default.number.isRequired};var _=function(e){var t=e.css,a=e.page,n=e.handlePrevClick,l=t||"button is-black is-marginless";return 1===a?N.default.createElement("button",{className:l,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"keyboard_arrow_left"))):N.default.createElement("button",{className:l,onClick:n},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"keyboard_arrow_left")))};_.propTypes={css:S.default.string,page:S.default.number.isRequired,handlePrevClick:S.default.func.isRequired};var F=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.maxScale,s=e.handleZoomIn,i=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5",r=l;return n>l&&(r=n),a.toFixed(2)===r.toFixed(2)?N.default.createElement("button",{className:i,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"zoom_in"))):N.default.createElement("button",{className:i,onClick:s},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"zoom_in")))};F.propTypes={css:S.default.string,scale:S.default.number.isRequired,defaultScale:S.default.number.isRequired,maxScale:S.default.number.isRequired,handleZoomIn:S.default.func.isRequired};var M=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.minScale,s=e.handleZoomOut,i=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5",r=l;return n<l&&(r=n),a.toFixed(2)===r.toFixed(2)?N.default.createElement("button",{className:i,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"zoom_out"))):N.default.createElement("button",{className:i,onClick:s},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"zoom_out")))};M.propTypes={css:S.default.string,scale:S.default.number.isRequired,defaultScale:S.default.number.isRequired,minScale:S.default.number.isRequired,handleZoomOut:S.default.func.isRequired};var H=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.handleResetZoom,s=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return a.toFixed(2)===n.toFixed(2)?N.default.createElement("button",{className:s,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"refresh"))):N.default.createElement("button",{className:s,onClick:l},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"refresh")))};H.propTypes={css:S.default.string,scale:S.default.number.isRequired,defaultScale:S.default.number.isRequired,handleResetZoom:S.default.func.isRequired};var W=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateLeft,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return-90===a?N.default.createElement("button",{className:l,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"rotate_left"))):N.default.createElement("button",{className:l,onClick:n},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"rotate_left")))};W.propTypes={css:S.default.string,rotationAngle:S.default.number.isRequired,handleRotateLeft:S.default.func.isRequired};var V=function(e){var t=e.css,a=e.rotationAngle,n=e.handleResetRotation,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 0===a?N.default.createElement("button",{className:l,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"refresh"))):N.default.createElement("button",{className:l,onClick:n},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"refresh")))};V.propTypes={css:S.default.string,rotationAngle:S.default.number.isRequired,handleResetRotation:S.default.func.isRequired};var G=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateRight,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 90===a?N.default.createElement("button",{className:l,disabled:!0},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"rotate_right"))):N.default.createElement("button",{className:l,onClick:n},N.default.createElement("span",{className:"icon is-small"},N.default.createElement("i",{className:"material-icons"},"rotate_right")))};G.propTypes={css:S.default.string,rotationAngle:S.default.number.isRequired,handleRotateRight:S.default.func.isRequired};var U=function(e){var t=e.page,a=e.pages,n=e.scale,l=e.defaultScale,s=e.maxScale,i=e.minScale,o=e.rotationAngle,u=e.hideZoom,c=e.hideRotation,d=e.css,f=e.handlePrevClick,m=e.handleNextClick,h=e.handleZoomIn,b=e.handleResetZoom,v=e.handleZoomOut,R=e.handleRotateLeft,E=e.handleResetRotation,y=e.handleRotateRight,k=e.thumbnails,x=r.useState(!1),w=Z.default(x,2),C=w[0],S=w[1];return N.default.createElement("div",{className:"columns is-gapless ".concat(d.navbarWrapper||"box is-mobile has-text-white has-background-black has-margin-top-15 has-margin-bottom-15")},u?N.default.createElement("div",{className:"column is-2"},N.default.createElement("button",{type:"button"},N.default.createElement(p.FontAwesomeIcon,{icon:g.faTh,onClick:function(){S(!0)}})),N.default.createElement(A.default,{isOpen:C},N.default.createElement("button",{type:"button",onClick:function(){S(!1)}},"Close"),N.default.createElement("div",null,k))):N.default.createElement("div",{className:"column is-2 buttons are-small has-addons"},N.default.createElement(M,{scale:n,minScale:i,defaultScale:l,css:d.zoomOutBtn,handleZoomOut:v}),N.default.createElement(H,{scale:n,defaultScale:l,css:d.resetZoomBtn,handleResetZoom:b}),N.default.createElement(F,{scale:n,maxScale:s,defaultScale:l,css:d.zoomInBtn,handleZoomIn:h})),N.default.createElement("div",{className:"column"}),N.default.createElement("div",{className:"column is-3 buttons are-small has-addons is-centered"},N.default.createElement(_,{css:d.previousPageBtn,page:t,pages:a,handlePrevClick:f}),N.default.createElement(z,{css:d.pageIndicator,page:t,pages:a}),N.default.createElement(L,{css:d.nextPageBtn,page:t,pages:a,handleNextClick:m})),N.default.createElement("div",{className:"column"}),c?N.default.createElement("div",{className:"column is-2"}):N.default.createElement("div",{className:"column is-2 buttons are-small has-addons is-right"},N.default.createElement(W,{css:d.rotateLeftBtn,rotationAngle:o,handleRotateLeft:R}),N.default.createElement(V,{css:d.resetRotationBtn,rotationAngle:o,handleResetRotation:E}),N.default.createElement(G,{css:d.rotateRightBtn,rotationAngle:o,handleRotateRight:y})))};function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){B.default(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}U.propTypes={page:S.default.number.isRequired,pages:S.default.number.isRequired,scale:S.default.number,defaultScale:S.default.number,maxScale:S.default.number,minScale:S.default.number,rotationAngle:S.default.number,hideZoom:S.default.bool,hideRotation:S.default.bool,css:S.default.shape({navbarWrapper:S.default.string,pages:S.default.string,pageIndicator:S.default.string,previousPageBtn:S.default.string,nextPageBtn:S.default.string,zoomOutBtn:S.default.string,resetZoomBtn:S.default.string,zoomInBtn:S.default.string,rotateLeftBtn:S.default.string,resetRotationBtn:S.default.string,rotateRightBtn:S.default.string}),elements:S.default.shape({previousPageBtn:S.default.any,nextPageBtn:S.default.any,pages:S.default.any}),handlePrevClick:S.default.func.isRequired,handleNextClick:S.default.func.isRequired,handleZoomIn:S.default.func.isRequired,handleResetZoom:S.default.func.isRequired,handleZoomOut:S.default.func.isRequired,handleRotateLeft:S.default.func.isRequired,handleResetRotation:S.default.func.isRequired,handleRotateRight:S.default.func.isRequired,thumbnails:S.default.array.isRequired},U.defaultProps={css:{},elements:{}};var K={display:"inline-block",verticalAlign:"text-bottom",backgroundColor:"currentColor",borderRadius:"50%",opacity:0,width:"0.5rem",height:"0.5rem",animationDuration:"0.75s",animationTimingFunction:"linear",animationIterationCount:"infinite",animationDirection:"normal",animationFillMode:"none",animationPlayState:"running",animationName:"spinner-grow"},Q=J(J({},K),{},{animationDelay:"0s"}),Y=J(J({},K),{},{animationDelay:"0.25s"}),$=J(J({},K),{},{animationDelay:"0.5s"}),ee=function(){return N.default.createElement("div",{className:"flex-row has-margin-10 justify-center align-items-flex-end"},N.default.createElement("p",{className:"is-size-3 flex-column is-marginless"},"Loading"),N.default.createElement("div",{className:"flex-column has-padding-10"},N.default.createElement("div",{style:Q})),N.default.createElement("div",{className:"flex-column has-padding-10"},N.default.createElement("div",{style:Y})),N.default.createElement("div",{className:"flex-column has-padding-10"},N.default.createElement("div",{style:$})))};function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C.default(e);if(t){var l=C.default(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return w.default(this,a)}}try{require("bulma/css/bulma.css"),require("bulma-helpers/css/bulma-helpers.min.css"),require("material-design-icons/iconfont/material-icons.css")}catch(e){}var ae=function(e){x.default(a,e);var t=te(a);function a(e){var n;return E.default(this,a),(n=t.call(this,e)).state={page:n.props.page,pages:0,scale:n.props.scale,defaultScale:n.props.scale,rotationAngle:n.props.rotationAngle,isReady:!1,thumbnails:[]},n.getPageCount=n.getPageCount.bind(k.default(n)),n.handleThumbnailClick=n.handleThumbnailClick.bind(k.default(n)),n.handlePrevClick=n.handlePrevClick.bind(k.default(n)),n.handleNextClick=n.handleNextClick.bind(k.default(n)),n.handleZoomIn=n.handleZoomIn.bind(k.default(n)),n.handleResetZoom=n.handleResetZoom.bind(k.default(n)),n.handleZoomOut=n.handleZoomOut.bind(k.default(n)),n.handleRotateLeft=n.handleRotateLeft.bind(k.default(n)),n.handleResetRotation=n.handleResetRotation.bind(k.default(n)),n.handleRotateRight=n.handleRotateRight.bind(k.default(n)),n.handleHotkeysPressed=n.handleHotkeysPressed.bind(k.default(n)),n.setThumbnails=n.setThumbnails.bind(k.default(n)),n}return y.default(a,[{key:"getPageCount",value:function(e){this.state.pages!==e&&(this.setState({pages:e,isReady:!0}),this.props.getMaxPageCount&&this.props.getMaxPageCount(e))}},{key:"handleThumbnailClick",value:function(e){this.state.page!==e&&this.setState({page:e})}},{key:"handlePrevClick",value:function(){1!==this.state.page&&(this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1))}},{key:"handleNextClick",value:function(){this.state.page!==this.pages&&(this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1))}},{key:"handleZoomIn",value:function(){var e=this.props.maxScale;this.state.defaultScale>this.props.maxScale&&(e=this.state.defaultScale),this.state.scale<e&&this.setState({scale:this.state.scale+this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale+this.props.scaleStep)}},{key:"handleResetZoom",value:function(){this.setState({scale:this.state.defaultScale}),this.props.onZoom&&this.props.onZoom(this.state.defaultScale)}},{key:"handleZoomOut",value:function(){var e=this.props.minScale;this.state.defaultScale<this.props.minScale&&(e=this.state.defaultScale),this.state.scale>e&&this.setState({scale:this.state.scale-this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale-this.props.scaleStep)}},{key:"handleRotateLeft",value:function(){-90!==this.state.rotationAngle&&this.setState({rotationAngle:-90}),this.props.onRotation&&this.props.onRotation(-90)}},{key:"handleResetRotation",value:function(){0!==this.state.rotationAngle&&this.setState({rotationAngle:0}),this.props.onRotation&&this.props.onRotation(0)}},{key:"handleRotateRight",value:function(){90!==this.state.rotationAngle&&this.setState({rotationAngle:90}),this.props.onRotation&&this.props.onRotation(90)}},{key:"handleHotkeysPressed",value:function(e){if(37===e.keyCode){if(1===this.state.page)return;this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1)}else if(39===e.keyCode){if(this.state.page===this.state.pages)return;this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1)}}},{key:"setThumbnails",value:function(e){this.setState({thumbnails:e})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleHotkeysPressed)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleHotkeysPressed)}},{key:"render",value:function(){var e=this,t=this.props,a=t.document,n=t.withCredentials,l=t.password,s=t.loader,i=t.maxScale,r=t.minScale,o=t.hideNavbar,u=t.hideZoom,c=t.hideRotation,d=t.navbarOnTop,f=t.navigation,m=t.css,h=t.canvasCss,p=t.onDocumentClick,g=t.showThumbnail,b=t.protectContent,v=t.watermark,E=t.alert,y=this.state,k=y.page,x=y.pages,w=y.scale,C=y.defaultScale,S=y.rotationAngle,q=f,P=N.default.createElement(D,{document:a,withCredentials:n,password:l,pageNum:k,scale:w,rotation:S,changePage:function(t){return e.handleThumbnailClick(t)},pageCount:function(t){return e.getPageCount(t)},showThumbnail:g,protectContent:b,watermark:v,alert:E,canvasCss:h,setThumbnails:this.setThumbnails}),Z=null;return!o&&x>0&&(Z=!f||f&&"object"===R.default(f)?N.default.createElement(U,{page:k,pages:x,scale:w,defaultScale:C,maxScale:i,minScale:r,rotationAngle:S,hideZoom:u,hideRotation:c,css:f?f.css:void 0,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight,thumbnails:this.state.thumbnails}):N.default.createElement(q,{page:k,pages:x,scale:w,defaultScale:C,maxScale:i,minScale:r,rotationAngle:S,hideZoom:u,hideRotation:c,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight})),N.default.createElement("div",{className:m||"container text-center"},N.default.createElement("div",{style:{display:this.state.isReady?"none":"block"}},N.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},s||N.default.createElement(ee,null))),N.default.createElement("div",{style:{display:this.state.isReady?"block":"none"}},d?N.default.createElement("div",null,N.default.createElement("div",null,Z),N.default.createElement("div",{onClick:p},P)):N.default.createElement("div",null,N.default.createElement("div",{onClick:p},P),N.default.createElement("div",null,Z))))}}]),a}(N.default.Component);ae.propTypes={document:S.default.shape({url:S.default.string,base64:S.default.string}).isRequired,withCredentials:S.default.bool,password:S.default.string,loader:S.default.node,page:S.default.number,scale:S.default.number,scaleStep:S.default.number,maxScale:S.default.number,minScale:S.default.number,css:S.default.string,canvasCss:S.default.string,rotationAngle:S.default.number,onDocumentClick:S.default.func,onPrevBtnClick:S.default.func,onNextBtnClick:S.default.func,onZoom:S.default.func,onRotation:S.default.func,getMaxPageCount:S.default.func,hideNavbar:S.default.bool,navbarOnTop:S.default.bool,hideZoom:S.default.bool,hideRotation:S.default.bool,showThumbnail:S.default.shape({scale:S.default.number,rotationAngle:S.default.number}),protectContent:S.default.bool,watermark:S.default.shape({text:S.default.string,diagonal:S.default.bool,opacity:S.default.string,font:S.default.string,size:S.default.string,color:S.default.string}),alert:S.default.any,navigation:S.default.oneOfType([S.default.shape({css:S.default.shape({navbarWrapper:S.default.string,zoomOutBtn:S.default.string,resetZoomBtn:S.default.string,zoomInBtn:S.default.string,previousPageBtn:S.default.string,pageIndicator:S.default.string,nextPageBtn:S.default.string,rotateLeftBtn:S.default.string,resetRotationBtn:S.default.string,rotateRightBtn:S.default.string})}),S.default.any])},ae.defaultProps={page:1,withCredentials:!1,password:"",defaultScale:1,scale:1,scaleStep:1,maxScale:3,minScale:1,rotationAngle:0,hideNavbar:!1,hideZoom:!1,hideRotation:!1,navbarOnTop:!1,canvasCss:""},module.exports=ae;

var R0=Object.defineProperty;var b0=(s,e,t)=>e in s?R0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Oe=(s,e,t)=>b0(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function P0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gc={exports:{}},zo={},Wc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function N0(){if(xm)return pt;xm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(B,re,Pe){this.props=B,this.context=re,this.refs=M,this.updater=Pe||S}x.prototype.isReactComponent={},x.prototype.setState=function(B,re){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,re,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function m(){}m.prototype=x.prototype;function A(B,re,Pe){this.props=B,this.context=re,this.refs=M,this.updater=Pe||S}var P=A.prototype=new m;P.constructor=A,E(P,x.prototype),P.isPureReactComponent=!0;var I=Array.isArray,L=Object.prototype.hasOwnProperty,b={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function k(B,re,Pe){var ee,fe={},ye=null,ge=null;if(re!=null)for(ee in re.ref!==void 0&&(ge=re.ref),re.key!==void 0&&(ye=""+re.key),re)L.call(re,ee)&&!D.hasOwnProperty(ee)&&(fe[ee]=re[ee]);var Te=arguments.length-2;if(Te===1)fe.children=Pe;else if(1<Te){for(var be=Array(Te),$e=0;$e<Te;$e++)be[$e]=arguments[$e+2];fe.children=be}if(B&&B.defaultProps)for(ee in Te=B.defaultProps,Te)fe[ee]===void 0&&(fe[ee]=Te[ee]);return{$$typeof:s,type:B,key:ye,ref:ge,props:fe,_owner:b.current}}function C(B,re){return{$$typeof:s,type:B.type,key:re,ref:B.ref,props:B.props,_owner:B._owner}}function T(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function F(B){var re={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Pe){return re[Pe]})}var W=/\/+/g;function z(B,re){return typeof B=="object"&&B!==null&&B.key!=null?F(""+B.key):re.toString(36)}function oe(B,re,Pe,ee,fe){var ye=typeof B;(ye==="undefined"||ye==="boolean")&&(B=null);var ge=!1;if(B===null)ge=!0;else switch(ye){case"string":case"number":ge=!0;break;case"object":switch(B.$$typeof){case s:case e:ge=!0}}if(ge)return ge=B,fe=fe(ge),B=ee===""?"."+z(ge,0):ee,I(fe)?(Pe="",B!=null&&(Pe=B.replace(W,"$&/")+"/"),oe(fe,re,Pe,"",function($e){return $e})):fe!=null&&(T(fe)&&(fe=C(fe,Pe+(!fe.key||ge&&ge.key===fe.key?"":(""+fe.key).replace(W,"$&/")+"/")+B)),re.push(fe)),1;if(ge=0,ee=ee===""?".":ee+":",I(B))for(var Te=0;Te<B.length;Te++){ye=B[Te];var be=ee+z(ye,Te);ge+=oe(ye,re,Pe,be,fe)}else if(be=y(B),typeof be=="function")for(B=be.call(B),Te=0;!(ye=B.next()).done;)ye=ye.value,be=ee+z(ye,Te++),ge+=oe(ye,re,Pe,be,fe);else if(ye==="object")throw re=String(B),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ge}function J(B,re,Pe){if(B==null)return B;var ee=[],fe=0;return oe(B,ee,"","",function(ye){return re.call(Pe,ye,fe++)}),ee}function se(B){if(B._status===-1){var re=B._result;re=re(),re.then(function(Pe){(B._status===0||B._status===-1)&&(B._status=1,B._result=Pe)},function(Pe){(B._status===0||B._status===-1)&&(B._status=2,B._result=Pe)}),B._status===-1&&(B._status=0,B._result=re)}if(B._status===1)return B._result.default;throw B._result}var ce={current:null},V={transition:null},ae={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:V,ReactCurrentOwner:b};function le(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:J,forEach:function(B,re,Pe){J(B,function(){re.apply(this,arguments)},Pe)},count:function(B){var re=0;return J(B,function(){re++}),re},toArray:function(B){return J(B,function(re){return re})||[]},only:function(B){if(!T(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},pt.Component=x,pt.Fragment=t,pt.Profiler=a,pt.PureComponent=A,pt.StrictMode=r,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,pt.act=le,pt.cloneElement=function(B,re,Pe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var ee=E({},B.props),fe=B.key,ye=B.ref,ge=B._owner;if(re!=null){if(re.ref!==void 0&&(ye=re.ref,ge=b.current),re.key!==void 0&&(fe=""+re.key),B.type&&B.type.defaultProps)var Te=B.type.defaultProps;for(be in re)L.call(re,be)&&!D.hasOwnProperty(be)&&(ee[be]=re[be]===void 0&&Te!==void 0?Te[be]:re[be])}var be=arguments.length-2;if(be===1)ee.children=Pe;else if(1<be){Te=Array(be);for(var $e=0;$e<be;$e++)Te[$e]=arguments[$e+2];ee.children=Te}return{$$typeof:s,type:B.type,key:fe,ref:ye,props:ee,_owner:ge}},pt.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},pt.createElement=k,pt.createFactory=function(B){var re=k.bind(null,B);return re.type=B,re},pt.createRef=function(){return{current:null}},pt.forwardRef=function(B){return{$$typeof:c,render:B}},pt.isValidElement=T,pt.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:se}},pt.memo=function(B,re){return{$$typeof:h,type:B,compare:re===void 0?null:re}},pt.startTransition=function(B){var re=V.transition;V.transition={};try{B()}finally{V.transition=re}},pt.unstable_act=le,pt.useCallback=function(B,re){return ce.current.useCallback(B,re)},pt.useContext=function(B){return ce.current.useContext(B)},pt.useDebugValue=function(){},pt.useDeferredValue=function(B){return ce.current.useDeferredValue(B)},pt.useEffect=function(B,re){return ce.current.useEffect(B,re)},pt.useId=function(){return ce.current.useId()},pt.useImperativeHandle=function(B,re,Pe){return ce.current.useImperativeHandle(B,re,Pe)},pt.useInsertionEffect=function(B,re){return ce.current.useInsertionEffect(B,re)},pt.useLayoutEffect=function(B,re){return ce.current.useLayoutEffect(B,re)},pt.useMemo=function(B,re){return ce.current.useMemo(B,re)},pt.useReducer=function(B,re,Pe){return ce.current.useReducer(B,re,Pe)},pt.useRef=function(B){return ce.current.useRef(B)},pt.useState=function(B){return ce.current.useState(B)},pt.useSyncExternalStore=function(B,re,Pe){return ce.current.useSyncExternalStore(B,re,Pe)},pt.useTransition=function(){return ce.current.useTransition()},pt.version="18.3.1",pt}var Sm;function iu(){return Sm||(Sm=1,Wc.exports=N0()),Wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function L0(){if(Em)return zo;Em=1;var s=iu(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,f,h){var g,v={},y=null,S=null;h!==void 0&&(y=""+h),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)r.call(f,g)&&!l.hasOwnProperty(g)&&(v[g]=f[g]);if(c&&c.defaultProps)for(g in f=c.defaultProps,f)v[g]===void 0&&(v[g]=f[g]);return{$$typeof:e,type:c,key:y,ref:S,props:v,_owner:a.current}}return zo.Fragment=t,zo.jsx=d,zo.jsxs=d,zo}var Mm;function I0(){return Mm||(Mm=1,Gc.exports=L0()),Gc.exports}var un=I0(),dl={},Xc={exports:{}},Un={},Yc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function D0(){return Tm||(Tm=1,function(s){function e(V,ae){var le=V.length;V.push(ae);e:for(;0<le;){var B=le-1>>>1,re=V[B];if(0<a(re,ae))V[B]=ae,V[le]=re,le=B;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ae=V[0],le=V.pop();if(le!==ae){V[0]=le;e:for(var B=0,re=V.length,Pe=re>>>1;B<Pe;){var ee=2*(B+1)-1,fe=V[ee],ye=ee+1,ge=V[ye];if(0>a(fe,le))ye<re&&0>a(ge,fe)?(V[B]=ge,V[ye]=le,B=ye):(V[B]=fe,V[ee]=le,B=ee);else if(ye<re&&0>a(ge,le))V[B]=ge,V[ye]=le,B=ye;else break e}}return ae}function a(V,ae){var le=V.sortIndex-ae.sortIndex;return le!==0?le:V.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();s.unstable_now=function(){return d.now()-c}}var f=[],h=[],g=1,v=null,y=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var ae=t(h);ae!==null;){if(ae.callback===null)r(h);else if(ae.startTime<=V)r(h),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(h)}}function I(V){if(M=!1,P(V),!E)if(t(f)!==null)E=!0,se(L);else{var ae=t(h);ae!==null&&ce(I,ae.startTime-V)}}function L(V,ae){E=!1,M&&(M=!1,m(k),k=-1),S=!0;var le=y;try{for(P(ae),v=t(f);v!==null&&(!(v.expirationTime>ae)||V&&!F());){var B=v.callback;if(typeof B=="function"){v.callback=null,y=v.priorityLevel;var re=B(v.expirationTime<=ae);ae=s.unstable_now(),typeof re=="function"?v.callback=re:v===t(f)&&r(f),P(ae)}else r(f);v=t(f)}if(v!==null)var Pe=!0;else{var ee=t(h);ee!==null&&ce(I,ee.startTime-ae),Pe=!1}return Pe}finally{v=null,y=le,S=!1}}var b=!1,D=null,k=-1,C=5,T=-1;function F(){return!(s.unstable_now()-T<C)}function W(){if(D!==null){var V=s.unstable_now();T=V;var ae=!0;try{ae=D(!0,V)}finally{ae?z():(b=!1,D=null)}}else b=!1}var z;if(typeof A=="function")z=function(){A(W)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,J=oe.port2;oe.port1.onmessage=W,z=function(){J.postMessage(null)}}else z=function(){x(W,0)};function se(V){D=V,b||(b=!0,z())}function ce(V,ae){k=x(function(){V(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,se(L))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var le=y;y=ae;try{return V()}finally{y=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ae){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=y;y=V;try{return ae()}finally{y=le}},s.unstable_scheduleCallback=function(V,ae,le){var B=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?B+le:B):le=B,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,V={id:g++,callback:ae,priorityLevel:V,startTime:le,expirationTime:re,sortIndex:-1},le>B?(V.sortIndex=le,e(h,V),t(f)===null&&V===t(h)&&(M?(m(k),k=-1):M=!0,ce(I,le-B))):(V.sortIndex=re,e(f,V),E||S||(E=!0,se(L))),V},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(V){var ae=y;return function(){var le=y;y=ae;try{return V.apply(this,arguments)}finally{y=le}}}}(jc)),jc}var wm;function U0(){return wm||(wm=1,Yc.exports=D0()),Yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function O0(){if(Am)return Un;Am=1;var s=iu(),e=U0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(n){return f.call(v,n)?!0:f.call(g,n)?!1:h.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,o,u,p,_,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(m,A);x[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(m,A);x[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(m,A);x[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,u){var p=x.hasOwnProperty(i)?x[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,p,u)&&(o=null),u||p===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(i=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(i):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),F=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),V=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,B;function re(n){if(B===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var Pe=!1;function ee(n,i){if(!n||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){u=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var p=ie.stack.split(`
`),_=u.stack.split(`
`),w=p.length-1,O=_.length-1;1<=w&&0<=O&&p[w]!==_[O];)O--;for(;1<=w&&0<=O;w--,O--)if(p[w]!==_[O]){if(w!==1||O!==1)do if(w--,O--,0>O||p[w]!==_[O]){var H=`
`+p[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=O);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function fe(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case b:return"Portal";case C:return"Profiler";case k:return"StrictMode";case z:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,_=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(w){u=""+w,_.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=$e(n))}function Je(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=be(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Tt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function G(n,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function En(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function dt(n,i){gt(n,i);var o=Te(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?bt(n,i.type,o):i.hasOwnProperty("defaultValue")&&bt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function bt(n,i,o){(i!=="number"||Tt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var We=Array.isArray;function U(n,i,o,u){if(n=n.options,i){i={};for(var p=0;p<o.length;p++)i["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=i.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function R(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function te(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(We(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Te(o)}}function pe(n,i){var o=Te(i.value),u=Te(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Ue=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,p)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Ke(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=Ke(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var Be=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,ue=null,he=null;function Le(n){if(n=wo(n)){if(typeof Ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ca(i),Ae(n.stateNode,n.type,i))}}function Ne(n){ue?he?he.push(n):he=[n]:ue=n}function st(){if(ue){var n=ue,i=he;if(he=ue=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Ut(n,i){return n(i)}function $t(){}var St=!1;function bn(n,i,o){if(St)return n(i,o);St=!0;try{return Ut(n,i,o)}finally{St=!1,(ue!==null||he!==null)&&($t(),st())}}function Mn(n,i){var o=n.stateNode;if(o===null)return null;var u=Ca(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ss=!1;if(c)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ss=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ss=!1}function Ci(n,i,o,u,p,_,w,O,H){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ve){this.onError(ve)}}var Ri=!1,Nr=null,Lr=!1,$i=null,sa={onError:function(n){Ri=!0,Nr=n}};function os(n,i,o,u,p,_,w,O,H){Ri=!1,Nr=null,Ci.apply(sa,arguments)}function oa(n,i,o,u,p,_,w,O,H){if(os.apply(this,arguments),Ri){if(Ri){var ie=Nr;Ri=!1,Nr=null}else throw Error(t(198));Lr||(Lr=!0,$i=ie)}}function vi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function aa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function la(n){if(vi(n)!==n)throw Error(t(188))}function du(n){var i=n.alternate;if(!i){if(i=vi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var p=o.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===o)return la(p),n;if(_===u)return la(p),i;_=_.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=_;else{for(var w=!1,O=p.child;O;){if(O===o){w=!0,o=p,u=_;break}if(O===u){w=!0,u=p,o=_;break}O=O.sibling}if(!w){for(O=_.child;O;){if(O===o){w=!0,o=_,u=p;break}if(O===u){w=!0,u=_,o=p;break}O=O.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ua(n){return n=du(n),n!==null?ca(n):null}function ca(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ca(n);if(i!==null)return i;n=n.sibling}return null}var fa=e.unstable_scheduleCallback,N=e.unstable_cancelCallback,j=e.unstable_shouldYield,ne=e.unstable_requestPaint,K=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,ze=e.unstable_LowPriority,nt=e.unstable_IdlePriority,et=null,Ve=null;function vt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:xt,Vt=Math.log,kt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Vt(n)/kt|0)|0}var qe=64,Gt=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,w=o&268435455;if(w!==0){var O=w&~p;O!==0?u=_t(O):(_&=w,_!==0&&(u=_t(_)))}else w=o&~p,w!==0?u=_t(w):_!==0&&(u=_t(_));if(u===0)return 0;if(i!==0&&i!==u&&!(i&p)&&(p=u&-u,_=i&-i,p>=_||p===16&&(_&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ot(i),p=1<<o,u|=n[o],i&=~p;return u}function Ki(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var w=31-ot(_),O=1<<w,H=p[w];H===-1?(!(O&o)||O&u)&&(p[w]=Ki(O,i)):H<=i&&(n.expiredLanes|=O),_&=~O}}function bi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Lt(){var n=qe;return qe<<=1,!(qe&4194240)&&(qe=64),n}function mn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function cn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-ot(o),_=1<<p;i[p]=0,u[p]=-1,n[p]=-1,o&=~_}}function rn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ot(o),p=1<<u;p&i|n[u]&i&&(n[u]|=i),o&=~p}}var Et=0;function yi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Jd,hu,eh,th,nh,pu=!1,da=[],Zi=null,Qi=null,Ji=null,lo=new Map,uo=new Map,er=[],Z_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ih(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function co(n,i,o,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},i!==null&&(i=wo(i),i!==null&&hu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Q_(n,i,o,u,p){switch(i){case"focusin":return Zi=co(Zi,n,i,o,u,p),!0;case"dragenter":return Qi=co(Qi,n,i,o,u,p),!0;case"mouseover":return Ji=co(Ji,n,i,o,u,p),!0;case"pointerover":var _=p.pointerId;return lo.set(_,co(lo.get(_)||null,n,i,o,u,p)),!0;case"gotpointercapture":return _=p.pointerId,uo.set(_,co(uo.get(_)||null,n,i,o,u,p)),!0}return!1}function rh(n){var i=Ir(n.target);if(i!==null){var o=vi(i);if(o!==null){if(i=o.tag,i===13){if(i=aa(o),i!==null){n.blockedOn=i,nh(n.priority,function(){eh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ha(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=gu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ct=u,o.target.dispatchEvent(u),Ct=null}else return i=wo(o),i!==null&&hu(i),n.blockedOn=o,!1;i.shift()}return!0}function sh(n,i,o){ha(n)&&o.delete(i)}function J_(){pu=!1,Zi!==null&&ha(Zi)&&(Zi=null),Qi!==null&&ha(Qi)&&(Qi=null),Ji!==null&&ha(Ji)&&(Ji=null),lo.forEach(sh),uo.forEach(sh)}function fo(n,i){n.blockedOn===i&&(n.blockedOn=null,pu||(pu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,J_)))}function ho(n){function i(p){return fo(p,n)}if(0<da.length){fo(da[0],n);for(var o=1;o<da.length;o++){var u=da[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Zi!==null&&fo(Zi,n),Qi!==null&&fo(Qi,n),Ji!==null&&fo(Ji,n),lo.forEach(i),uo.forEach(i),o=0;o<er.length;o++)u=er[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)rh(o),o.blockedOn===null&&er.shift()}var as=I.ReactCurrentBatchConfig,pa=!0;function ev(n,i,o,u){var p=Et,_=as.transition;as.transition=null;try{Et=1,mu(n,i,o,u)}finally{Et=p,as.transition=_}}function tv(n,i,o,u){var p=Et,_=as.transition;as.transition=null;try{Et=4,mu(n,i,o,u)}finally{Et=p,as.transition=_}}function mu(n,i,o,u){if(pa){var p=gu(n,i,o,u);if(p===null)Iu(n,i,u,ma,o),ih(n,u);else if(Q_(p,n,i,o,u))u.stopPropagation();else if(ih(n,u),i&4&&-1<Z_.indexOf(n)){for(;p!==null;){var _=wo(p);if(_!==null&&Jd(_),_=gu(n,i,o,u),_===null&&Iu(n,i,u,ma,o),_===p)break;p=_}p!==null&&u.stopPropagation()}else Iu(n,i,u,null,o)}}var ma=null;function gu(n,i,o,u){if(ma=null,n=Y(u),n=Ir(n),n!==null)if(i=vi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=aa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ma=n,null}function oh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case Se:return 1;case Ce:return 4;case Ie:case ze:return 16;case nt:return 536870912;default:return 16}default:return 16}}var tr=null,_u=null,ga=null;function ah(){if(ga)return ga;var n,i=_u,o=i.length,u,p="value"in tr?tr.value:tr.textContent,_=p.length;for(n=0;n<o&&i[n]===p[n];n++);var w=o-n;for(u=1;u<=w&&i[o-u]===p[_-u];u++);return ga=p.slice(n,1<u?1-u:void 0)}function _a(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function lh(){return!1}function Vn(n){function i(o,u,p,_,w){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?va:lh,this.isPropagationStopped=lh,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Vn(ls),po=le({},ls,{view:0,detail:0}),nv=Vn(po),yu,xu,mo,ya=le({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(yu=n.screenX-mo.screenX,xu=n.screenY-mo.screenY):xu=yu=0,mo=n),yu)},movementY:function(n){return"movementY"in n?n.movementY:xu}}),uh=Vn(ya),iv=le({},ya,{dataTransfer:0}),rv=Vn(iv),sv=le({},po,{relatedTarget:0}),Su=Vn(sv),ov=le({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Vn(ov),lv=le({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uv=Vn(lv),cv=le({},ls,{data:0}),ch=Vn(cv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hv[n])?!!i[n]:!1}function Eu(){return pv}var mv=le({},po,{key:function(n){if(n.key){var i=fv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(n){return n.type==="keypress"?_a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gv=Vn(mv),_v=le({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Vn(_v),vv=le({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),yv=Vn(vv),xv=le({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=Vn(xv),Ev=le({},ya,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=Vn(Ev),Tv=[9,13,27,32],Mu=c&&"CompositionEvent"in window,go=null;c&&"documentMode"in document&&(go=document.documentMode);var wv=c&&"TextEvent"in window&&!go,dh=c&&(!Mu||go&&8<go&&11>=go),hh=" ",ph=!1;function mh(n,i){switch(n){case"keyup":return Tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var us=!1;function Av(n,i){switch(n){case"compositionend":return gh(i);case"keypress":return i.which!==32?null:(ph=!0,hh);case"textInput":return n=i.data,n===hh&&ph?null:n;default:return null}}function Cv(n,i){if(us)return n==="compositionend"||!Mu&&mh(n,i)?(n=ah(),ga=_u=tr=null,us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dh&&i.locale!=="ko"?null:i.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Rv[n.type]:i==="textarea"}function vh(n,i,o,u){Ne(u),i=Ta(i,"onChange"),0<i.length&&(o=new vu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var _o=null,vo=null;function bv(n){Oh(n,0)}function xa(n){var i=ps(n);if(Je(i))return n}function Pv(n,i){if(n==="change")return i}var yh=!1;if(c){var Tu;if(c){var wu="oninput"in document;if(!wu){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),wu=typeof xh.oninput=="function"}Tu=wu}else Tu=!1;yh=Tu&&(!document.documentMode||9<document.documentMode)}function Sh(){_o&&(_o.detachEvent("onpropertychange",Eh),vo=_o=null)}function Eh(n){if(n.propertyName==="value"&&xa(vo)){var i=[];vh(i,vo,n,Y(n)),bn(bv,i)}}function Nv(n,i,o){n==="focusin"?(Sh(),_o=i,vo=o,_o.attachEvent("onpropertychange",Eh)):n==="focusout"&&Sh()}function Lv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xa(vo)}function Iv(n,i){if(n==="click")return xa(i)}function Dv(n,i){if(n==="input"||n==="change")return xa(i)}function Uv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:Uv;function yo(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!f.call(i,p)||!ri(n[p],i[p]))return!1}return!0}function Mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Th(n,i){var o=Mh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Mh(o)}}function wh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?wh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ah(){for(var n=window,i=Tt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Tt(n.document)}return i}function Au(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ov(n){var i=Ah(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&wh(o.ownerDocument.documentElement,o)){if(u!==null&&Au(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=Th(o,_);var w=Th(o,u);p&&w&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fv=c&&"documentMode"in document&&11>=document.documentMode,cs=null,Cu=null,xo=null,Ru=!1;function Ch(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ru||cs==null||cs!==Tt(u)||(u=cs,"selectionStart"in u&&Au(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&yo(xo,u)||(xo=u,u=Ta(Cu,"onSelect"),0<u.length&&(i=new vu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=cs)))}function Sa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var fs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},bu={},Rh={};c&&(Rh=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Ea(n){if(bu[n])return bu[n];if(!fs[n])return n;var i=fs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Rh)return bu[n]=i[o];return n}var bh=Ea("animationend"),Ph=Ea("animationiteration"),Nh=Ea("animationstart"),Lh=Ea("transitionend"),Ih=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){Ih.set(n,i),l(i,[n])}for(var Pu=0;Pu<Dh.length;Pu++){var Nu=Dh[Pu],kv=Nu.toLowerCase(),Bv=Nu[0].toUpperCase()+Nu.slice(1);nr(kv,"on"+Bv)}nr(bh,"onAnimationEnd"),nr(Ph,"onAnimationIteration"),nr(Nh,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Lh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Uh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,oa(u,i,void 0,n),n.currentTarget=null}function Oh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var _=void 0;if(i)for(var w=u.length-1;0<=w;w--){var O=u[w],H=O.instance,ie=O.currentTarget;if(O=O.listener,H!==_&&p.isPropagationStopped())break e;Uh(p,O,ie),_=H}else for(w=0;w<u.length;w++){if(O=u[w],H=O.instance,ie=O.currentTarget,O=O.listener,H!==_&&p.isPropagationStopped())break e;Uh(p,O,ie),_=H}}}if(Lr)throw n=$i,Lr=!1,$i=null,n}function Ot(n,i){var o=i[Bu];o===void 0&&(o=i[Bu]=new Set);var u=n+"__bubble";o.has(u)||(Fh(i,n,2,!1),o.add(u))}function Lu(n,i,o){var u=0;i&&(u|=4),Fh(o,n,u,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Eo(n){if(!n[Ma]){n[Ma]=!0,r.forEach(function(o){o!=="selectionchange"&&(zv.has(o)||Lu(o,!1,n),Lu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,Lu("selectionchange",!1,i))}}function Fh(n,i,o,u){switch(oh(i)){case 1:var p=ev;break;case 4:p=tv;break;default:p=mu}o=p.bind(null,i,o,n),p=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,o,{capture:!0,passive:p}):n.addEventListener(i,o,!0):p!==void 0?n.addEventListener(i,o,{passive:p}):n.addEventListener(i,o,!1)}function Iu(n,i,o,u,p){var _=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var O=u.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(w===4)for(w=u.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;w=w.return}for(;O!==null;){if(w=Ir(O),w===null)return;if(H=w.tag,H===5||H===6){u=_=w;continue e}O=O.parentNode}}u=u.return}bn(function(){var ie=_,ve=Y(o),xe=[];e:{var me=Ih.get(n);if(me!==void 0){var De=vu,He=n;switch(n){case"keypress":if(_a(o)===0)break e;case"keydown":case"keyup":De=gv;break;case"focusin":He="focus",De=Su;break;case"focusout":He="blur",De=Su;break;case"beforeblur":case"afterblur":De=Su;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=yv;break;case bh:case Ph:case Nh:De=av;break;case Lh:De=Sv;break;case"scroll":De=nv;break;case"wheel":De=Mv;break;case"copy":case"cut":case"paste":De=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=fh}var Ge=(i&4)!==0,Yt=!Ge&&n==="scroll",$=Ge?me!==null?me+"Capture":null:me;Ge=[];for(var X=ie,Q;X!==null;){Q=X;var Me=Q.stateNode;if(Q.tag===5&&Me!==null&&(Q=Me,$!==null&&(Me=Mn(X,$),Me!=null&&Ge.push(Mo(X,Me,Q)))),Yt)break;X=X.return}0<Ge.length&&(me=new De(me,He,null,o,ve),xe.push({event:me,listeners:Ge}))}}if(!(i&7)){e:{if(me=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",me&&o!==Ct&&(He=o.relatedTarget||o.fromElement)&&(Ir(He)||He[Pi]))break e;if((De||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,De?(He=o.relatedTarget||o.toElement,De=ie,He=He?Ir(He):null,He!==null&&(Yt=vi(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(De=null,He=ie),De!==He)){if(Ge=uh,Me="onMouseLeave",$="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=fh,Me="onPointerLeave",$="onPointerEnter",X="pointer"),Yt=De==null?me:ps(De),Q=He==null?me:ps(He),me=new Ge(Me,X+"leave",De,o,ve),me.target=Yt,me.relatedTarget=Q,Me=null,Ir(ve)===ie&&(Ge=new Ge($,X+"enter",He,o,ve),Ge.target=Q,Ge.relatedTarget=Yt,Me=Ge),Yt=Me,De&&He)t:{for(Ge=De,$=He,X=0,Q=Ge;Q;Q=ds(Q))X++;for(Q=0,Me=$;Me;Me=ds(Me))Q++;for(;0<X-Q;)Ge=ds(Ge),X--;for(;0<Q-X;)$=ds($),Q--;for(;X--;){if(Ge===$||$!==null&&Ge===$.alternate)break t;Ge=ds(Ge),$=ds($)}Ge=null}else Ge=null;De!==null&&kh(xe,me,De,Ge,!1),He!==null&&Yt!==null&&kh(xe,Yt,He,Ge,!0)}}e:{if(me=ie?ps(ie):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Ye=Pv;else if(_h(me))if(yh)Ye=Dv;else{Ye=Lv;var Ze=Nv}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ye=Iv);if(Ye&&(Ye=Ye(n,ie))){vh(xe,Ye,o,ve);break e}Ze&&Ze(n,me,ie),n==="focusout"&&(Ze=me._wrapperState)&&Ze.controlled&&me.type==="number"&&bt(me,"number",me.value)}switch(Ze=ie?ps(ie):window,n){case"focusin":(_h(Ze)||Ze.contentEditable==="true")&&(cs=Ze,Cu=ie,xo=null);break;case"focusout":xo=Cu=cs=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Ch(xe,o,ve);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Ch(xe,o,ve)}var Qe;if(Mu)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else us?mh(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(dh&&o.locale!=="ko"&&(us||it!=="onCompositionStart"?it==="onCompositionEnd"&&us&&(Qe=ah()):(tr=ve,_u="value"in tr?tr.value:tr.textContent,us=!0)),Ze=Ta(ie,it),0<Ze.length&&(it=new ch(it,n,null,o,ve),xe.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=gh(o),Qe!==null&&(it.data=Qe)))),(Qe=wv?Av(n,o):Cv(n,o))&&(ie=Ta(ie,"onBeforeInput"),0<ie.length&&(ve=new ch("onBeforeInput","beforeinput",null,o,ve),xe.push({event:ve,listeners:ie}),ve.data=Qe))}Oh(xe,i)})}function Mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ta(n,i){for(var o=i+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Mn(n,o),_!=null&&u.unshift(Mo(n,_,p)),_=Mn(n,i),_!=null&&u.push(Mo(n,_,p))),n=n.return}return u}function ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function kh(n,i,o,u,p){for(var _=i._reactName,w=[];o!==null&&o!==u;){var O=o,H=O.alternate,ie=O.stateNode;if(H!==null&&H===u)break;O.tag===5&&ie!==null&&(O=ie,p?(H=Mn(o,_),H!=null&&w.unshift(Mo(o,H,O))):p||(H=Mn(o,_),H!=null&&w.push(Mo(o,H,O)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var Hv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function Bh(n){return(typeof n=="string"?n:""+n).replace(Hv,`
`).replace(Vv,"")}function wa(n,i,o){if(i=Bh(i),Bh(n)!==i&&o)throw Error(t(425))}function Aa(){}var Du=null,Uu=null;function Ou(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(n){return zh.resolve(null).then(n).catch(Xv)}:Fu;function Xv(n){setTimeout(function(){throw n})}function ku(n,i){var o=i,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),ho(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);ho(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Hh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),xi="__reactFiber$"+hs,To="__reactProps$"+hs,Pi="__reactContainer$"+hs,Bu="__reactEvents$"+hs,Yv="__reactListeners$"+hs,jv="__reactHandles$"+hs;function Ir(n){var i=n[xi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Pi]||o[xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Hh(n);n!==null;){if(o=n[xi])return o;n=Hh(n)}return i}n=o,o=n.parentNode}return null}function wo(n){return n=n[xi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ca(n){return n[To]||null}var zu=[],ms=-1;function rr(n){return{current:n}}function Ft(n){0>ms||(n.current=zu[ms],zu[ms]=null,ms--)}function Dt(n,i){ms++,zu[ms]=n.current,n.current=i}var sr={},gn=rr(sr),Pn=rr(!1),Dr=sr;function gs(n,i){var o=n.type.contextTypes;if(!o)return sr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in o)p[_]=i[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function Nn(n){return n=n.childContextTypes,n!=null}function Ra(){Ft(Pn),Ft(gn)}function Vh(n,i,o){if(gn.current!==sr)throw Error(t(168));Dt(gn,i),Dt(Pn,o)}function Gh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,ge(n)||"Unknown",p));return le({},o,u)}function ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Dr=gn.current,Dt(gn,n),Dt(Pn,Pn.current),!0}function Wh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Gh(n,i,Dr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Pn),Ft(gn),Dt(gn,n)):Ft(Pn),Dt(Pn,o)}var Ni=null,Pa=!1,Hu=!1;function Xh(n){Ni===null?Ni=[n]:Ni.push(n)}function qv(n){Pa=!0,Xh(n)}function or(){if(!Hu&&Ni!==null){Hu=!0;var n=0,i=Et;try{var o=Ni;for(Et=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ni=null,Pa=!1}catch(p){throw Ni!==null&&(Ni=Ni.slice(n+1)),fa(Se,or),p}finally{Et=i,Hu=!1}}return null}var _s=[],vs=0,Na=null,La=0,$n=[],Kn=0,Ur=null,Li=1,Ii="";function Or(n,i){_s[vs++]=La,_s[vs++]=Na,Na=n,La=i}function Yh(n,i,o){$n[Kn++]=Li,$n[Kn++]=Ii,$n[Kn++]=Ur,Ur=n;var u=Li;n=Ii;var p=32-ot(u)-1;u&=~(1<<p),o+=1;var _=32-ot(i)+p;if(30<_){var w=p-p%5;_=(u&(1<<w)-1).toString(32),u>>=w,p-=w,Li=1<<32-ot(i)+p|o<<p|u,Ii=_+n}else Li=1<<_|o<<p|u,Ii=n}function Vu(n){n.return!==null&&(Or(n,1),Yh(n,1,0))}function Gu(n){for(;n===Na;)Na=_s[--vs],_s[vs]=null,La=_s[--vs],_s[vs]=null;for(;n===Ur;)Ur=$n[--Kn],$n[Kn]=null,Ii=$n[--Kn],$n[Kn]=null,Li=$n[--Kn],$n[Kn]=null}var Gn=null,Wn=null,Bt=!1,si=null;function jh(n,i){var o=ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function qh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Li,overflow:Ii}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ei(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Gn=n,Wn=null,!0):!1;default:return!1}}function Wu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xu(n){if(Bt){var i=Wn;if(i){var o=i;if(!qh(n,i)){if(Wu(n))throw Error(t(418));i=ir(o.nextSibling);var u=Gn;i&&qh(n,i)?jh(u,o):(n.flags=n.flags&-4097|2,Bt=!1,Gn=n)}}else{if(Wu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Gn=n}}}function $h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function Ia(n){if(n!==Gn)return!1;if(!Bt)return $h(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ou(n.type,n.memoizedProps)),i&&(i=Wn)){if(Wu(n))throw Kh(),Error(t(418));for(;i;)jh(n,i),i=ir(i.nextSibling)}if($h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Wn=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Gn?ir(n.stateNode.nextSibling):null;return!0}function Kh(){for(var n=Wn;n;)n=ir(n.nextSibling)}function ys(){Wn=Gn=null,Bt=!1}function Yu(n){si===null?si=[n]:si.push(n)}var $v=I.ReactCurrentBatchConfig;function Ao(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(w){var O=p.refs;w===null?delete O[_]:O[_]=w},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Da(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Zh(n){var i=n._init;return i(n._payload)}function Qh(n){function i($,X){if(n){var Q=$.deletions;Q===null?($.deletions=[X],$.flags|=16):Q.push(X)}}function o($,X){if(!n)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function u($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function p($,X){return $=pr($,X),$.index=0,$.sibling=null,$}function _($,X,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<X?($.flags|=2,X):Q):($.flags|=2,X)):($.flags|=1048576,X)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function O($,X,Q,Me){return X===null||X.tag!==6?(X=Fc(Q,$.mode,Me),X.return=$,X):(X=p(X,Q),X.return=$,X)}function H($,X,Q,Me){var Ye=Q.type;return Ye===D?ve($,X,Q.props.children,Me,Q.key):X!==null&&(X.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Zh(Ye)===X.type)?(Me=p(X,Q.props),Me.ref=Ao($,X,Q),Me.return=$,Me):(Me=rl(Q.type,Q.key,Q.props,null,$.mode,Me),Me.ref=Ao($,X,Q),Me.return=$,Me)}function ie($,X,Q,Me){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=kc(Q,$.mode,Me),X.return=$,X):(X=p(X,Q.children||[]),X.return=$,X)}function ve($,X,Q,Me,Ye){return X===null||X.tag!==7?(X=Wr(Q,$.mode,Me,Ye),X.return=$,X):(X=p(X,Q),X.return=$,X)}function xe($,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Fc(""+X,$.mode,Q),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return Q=rl(X.type,X.key,X.props,null,$.mode,Q),Q.ref=Ao($,null,X),Q.return=$,Q;case b:return X=kc(X,$.mode,Q),X.return=$,X;case se:var Me=X._init;return xe($,Me(X._payload),Q)}if(We(X)||ae(X))return X=Wr(X,$.mode,Q,null),X.return=$,X;Da($,X)}return null}function me($,X,Q,Me){var Ye=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ye!==null?null:O($,X,""+Q,Me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:return Q.key===Ye?H($,X,Q,Me):null;case b:return Q.key===Ye?ie($,X,Q,Me):null;case se:return Ye=Q._init,me($,X,Ye(Q._payload),Me)}if(We(Q)||ae(Q))return Ye!==null?null:ve($,X,Q,Me,null);Da($,Q)}return null}function De($,X,Q,Me,Ye){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return $=$.get(Q)||null,O(X,$,""+Me,Ye);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case L:return $=$.get(Me.key===null?Q:Me.key)||null,H(X,$,Me,Ye);case b:return $=$.get(Me.key===null?Q:Me.key)||null,ie(X,$,Me,Ye);case se:var Ze=Me._init;return De($,X,Q,Ze(Me._payload),Ye)}if(We(Me)||ae(Me))return $=$.get(Q)||null,ve(X,$,Me,Ye,null);Da(X,Me)}return null}function He($,X,Q,Me){for(var Ye=null,Ze=null,Qe=X,it=X=0,an=null;Qe!==null&&it<Q.length;it++){Qe.index>it?(an=Qe,Qe=null):an=Qe.sibling;var wt=me($,Qe,Q[it],Me);if(wt===null){Qe===null&&(Qe=an);break}n&&Qe&&wt.alternate===null&&i($,Qe),X=_(wt,X,it),Ze===null?Ye=wt:Ze.sibling=wt,Ze=wt,Qe=an}if(it===Q.length)return o($,Qe),Bt&&Or($,it),Ye;if(Qe===null){for(;it<Q.length;it++)Qe=xe($,Q[it],Me),Qe!==null&&(X=_(Qe,X,it),Ze===null?Ye=Qe:Ze.sibling=Qe,Ze=Qe);return Bt&&Or($,it),Ye}for(Qe=u($,Qe);it<Q.length;it++)an=De(Qe,$,it,Q[it],Me),an!==null&&(n&&an.alternate!==null&&Qe.delete(an.key===null?it:an.key),X=_(an,X,it),Ze===null?Ye=an:Ze.sibling=an,Ze=an);return n&&Qe.forEach(function(mr){return i($,mr)}),Bt&&Or($,it),Ye}function Ge($,X,Q,Me){var Ye=ae(Q);if(typeof Ye!="function")throw Error(t(150));if(Q=Ye.call(Q),Q==null)throw Error(t(151));for(var Ze=Ye=null,Qe=X,it=X=0,an=null,wt=Q.next();Qe!==null&&!wt.done;it++,wt=Q.next()){Qe.index>it?(an=Qe,Qe=null):an=Qe.sibling;var mr=me($,Qe,wt.value,Me);if(mr===null){Qe===null&&(Qe=an);break}n&&Qe&&mr.alternate===null&&i($,Qe),X=_(mr,X,it),Ze===null?Ye=mr:Ze.sibling=mr,Ze=mr,Qe=an}if(wt.done)return o($,Qe),Bt&&Or($,it),Ye;if(Qe===null){for(;!wt.done;it++,wt=Q.next())wt=xe($,wt.value,Me),wt!==null&&(X=_(wt,X,it),Ze===null?Ye=wt:Ze.sibling=wt,Ze=wt);return Bt&&Or($,it),Ye}for(Qe=u($,Qe);!wt.done;it++,wt=Q.next())wt=De(Qe,$,it,wt.value,Me),wt!==null&&(n&&wt.alternate!==null&&Qe.delete(wt.key===null?it:wt.key),X=_(wt,X,it),Ze===null?Ye=wt:Ze.sibling=wt,Ze=wt);return n&&Qe.forEach(function(C0){return i($,C0)}),Bt&&Or($,it),Ye}function Yt($,X,Q,Me){if(typeof Q=="object"&&Q!==null&&Q.type===D&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case L:e:{for(var Ye=Q.key,Ze=X;Ze!==null;){if(Ze.key===Ye){if(Ye=Q.type,Ye===D){if(Ze.tag===7){o($,Ze.sibling),X=p(Ze,Q.props.children),X.return=$,$=X;break e}}else if(Ze.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Zh(Ye)===Ze.type){o($,Ze.sibling),X=p(Ze,Q.props),X.ref=Ao($,Ze,Q),X.return=$,$=X;break e}o($,Ze);break}else i($,Ze);Ze=Ze.sibling}Q.type===D?(X=Wr(Q.props.children,$.mode,Me,Q.key),X.return=$,$=X):(Me=rl(Q.type,Q.key,Q.props,null,$.mode,Me),Me.ref=Ao($,X,Q),Me.return=$,$=Me)}return w($);case b:e:{for(Ze=Q.key;X!==null;){if(X.key===Ze)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){o($,X.sibling),X=p(X,Q.children||[]),X.return=$,$=X;break e}else{o($,X);break}else i($,X);X=X.sibling}X=kc(Q,$.mode,Me),X.return=$,$=X}return w($);case se:return Ze=Q._init,Yt($,X,Ze(Q._payload),Me)}if(We(Q))return He($,X,Q,Me);if(ae(Q))return Ge($,X,Q,Me);Da($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,X!==null&&X.tag===6?(o($,X.sibling),X=p(X,Q),X.return=$,$=X):(o($,X),X=Fc(Q,$.mode,Me),X.return=$,$=X),w($)):o($,X)}return Yt}var xs=Qh(!0),Jh=Qh(!1),Ua=rr(null),Oa=null,Ss=null,ju=null;function qu(){ju=Ss=Oa=null}function $u(n){var i=Ua.current;Ft(Ua),n._currentValue=i}function Ku(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Es(n,i){Oa=n,ju=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Ln=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(ju!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(Oa===null)throw Error(t(308));Ss=n,Oa.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var Fr=null;function Zu(n){Fr===null?Fr=[n]:Fr.push(n)}function ep(n,i,o,u){var p=i.interleaved;return p===null?(o.next=o,Zu(i)):(o.next=p.next,p.next=o),i.interleaved=o,Di(n,u)}function Di(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Qu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Mt&2){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,Di(n,o)}return p=u.interleaved,p===null?(i.next=i,Zu(u)):(i.next=p.next,p.next=i),u.interleaved=i,Di(n,o)}function Fa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}function np(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};_===null?p=_=w:_=_.next=w,o=o.next}while(o!==null);_===null?p=_=i:_=_.next=i}else p=_=i;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function ka(n,i,o,u){var p=n.updateQueue;ar=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var H=O,ie=H.next;H.next=null,w===null?_=ie:w.next=ie,w=H;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,O=ve.lastBaseUpdate,O!==w&&(O===null?ve.firstBaseUpdate=ie:O.next=ie,ve.lastBaseUpdate=H))}if(_!==null){var xe=p.baseState;w=0,ve=ie=H=null,O=_;do{var me=O.lane,De=O.eventTime;if((u&me)===me){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var He=n,Ge=O;switch(me=i,De=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){xe=He.call(De,xe,me);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,me=typeof He=="function"?He.call(De,xe,me):He,me==null)break e;xe=le({},xe,me);break e;case 2:ar=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[O]:me.push(O))}else De={eventTime:De,lane:me,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ve===null?(ie=ve=De,H=xe):ve=ve.next=De,w|=me;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;me=O,O=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(ve===null&&(H=xe),p.baseState=H,p.firstBaseUpdate=ie,p.lastBaseUpdate=ve,i=p.shared.interleaved,i!==null){p=i;do w|=p.lane,p=p.next;while(p!==i)}else _===null&&(p.shared.lanes=0);zr|=w,n.lanes=w,n.memoizedState=xe}}function ip(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Co={},Si=rr(Co),Ro=rr(Co),bo=rr(Co);function kr(n){if(n===Co)throw Error(t(174));return n}function Ju(n,i){switch(Dt(bo,i),Dt(Ro,n),Dt(Si,Co),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Ft(Si),Dt(Si,i)}function Ms(){Ft(Si),Ft(Ro),Ft(bo)}function rp(n){kr(bo.current);var i=kr(Si.current),o=Xe(i,n.type);i!==o&&(Dt(Ro,n),Dt(Si,o))}function ec(n){Ro.current===n&&(Ft(Si),Ft(Ro))}var zt=rr(0);function Ba(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tc=[];function nc(){for(var n=0;n<tc.length;n++)tc[n]._workInProgressVersionPrimary=null;tc.length=0}var za=I.ReactCurrentDispatcher,ic=I.ReactCurrentBatchConfig,Br=0,Ht=null,Kt=null,sn=null,Ha=!1,Po=!1,No=0,Kv=0;function _n(){throw Error(t(321))}function rc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ri(n[o],i[o]))return!1;return!0}function sc(n,i,o,u,p,_){if(Br=_,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=n===null||n.memoizedState===null?e0:t0,n=o(u,p),Po){_=0;do{if(Po=!1,No=0,25<=_)throw Error(t(301));_+=1,sn=Kt=null,i.updateQueue=null,za.current=n0,n=o(u,p)}while(Po)}if(za.current=Wa,i=Kt!==null&&Kt.next!==null,Br=0,sn=Kt=Ht=null,Ha=!1,i)throw Error(t(300));return n}function oc(){var n=No!==0;return No=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=n:sn=sn.next=n,sn}function Qn(){if(Kt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},sn===null?Ht.memoizedState=sn=n:sn=sn.next=n}return sn}function Lo(n,i){return typeof i=="function"?i(n):i}function ac(n){var i=Qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Kt,p=u.baseQueue,_=o.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}u.baseQueue=p=_,o.pending=null}if(p!==null){_=p.next,u=u.baseState;var O=w=null,H=null,ie=_;do{var ve=ie.lane;if((Br&ve)===ve)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var xe={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(O=H=xe,w=u):H=H.next=xe,Ht.lanes|=ve,zr|=ve}ie=ie.next}while(ie!==null&&ie!==_);H===null?w=u:H.next=O,ri(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=H,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do _=p.lane,Ht.lanes|=_,zr|=_,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function lc(n){var i=Qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,_=i.memoizedState;if(p!==null){o.pending=null;var w=p=p.next;do _=n(_,w.action),w=w.next;while(w!==p);ri(_,i.memoizedState)||(Ln=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),o.lastRenderedState=_}return[_,u]}function sp(){}function op(n,i){var o=Ht,u=Qn(),p=i(),_=!ri(u.memoizedState,p);if(_&&(u.memoizedState=p,Ln=!0),u=u.queue,uc(up.bind(null,o,u,n),[n]),u.getSnapshot!==i||_||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Io(9,lp.bind(null,o,u,p,i),void 0,null),on===null)throw Error(t(349));Br&30||ap(o,i,p)}return p}function ap(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function lp(n,i,o,u){i.value=o,i.getSnapshot=u,cp(i)&&fp(n)}function up(n,i,o){return o(function(){cp(i)&&fp(n)})}function cp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ri(n,o)}catch{return!0}}function fp(n){var i=Di(n,1);i!==null&&ui(i,n,1,-1)}function dp(n){var i=Ei();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},i.queue=n,n=n.dispatch=Jv.bind(null,Ht,n),[i.memoizedState,n]}function Io(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function hp(){return Qn().memoizedState}function Va(n,i,o,u){var p=Ei();Ht.flags|=n,p.memoizedState=Io(1|i,o,void 0,u===void 0?null:u)}function Ga(n,i,o,u){var p=Qn();u=u===void 0?null:u;var _=void 0;if(Kt!==null){var w=Kt.memoizedState;if(_=w.destroy,u!==null&&rc(u,w.deps)){p.memoizedState=Io(i,o,_,u);return}}Ht.flags|=n,p.memoizedState=Io(1|i,o,_,u)}function pp(n,i){return Va(8390656,8,n,i)}function uc(n,i){return Ga(2048,8,n,i)}function mp(n,i){return Ga(4,2,n,i)}function gp(n,i){return Ga(4,4,n,i)}function _p(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function vp(n,i,o){return o=o!=null?o.concat([n]):null,Ga(4,4,_p.bind(null,i,n),o)}function cc(){}function yp(n,i){var o=Qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&rc(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function xp(n,i){var o=Qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&rc(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Sp(n,i,o){return Br&21?(ri(o,i)||(o=Lt(),Ht.lanes|=o,zr|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=o)}function Zv(n,i){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var u=ic.transition;ic.transition={};try{n(!1),i()}finally{Et=o,ic.transition=u}}function Ep(){return Qn().memoizedState}function Qv(n,i,o){var u=dr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Mp(n))Tp(i,o);else if(o=ep(n,i,o,u),o!==null){var p=An();ui(o,n,u,p),wp(o,i,u)}}function Jv(n,i,o){var u=dr(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mp(n))Tp(i,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var w=i.lastRenderedState,O=_(w,o);if(p.hasEagerState=!0,p.eagerState=O,ri(O,w)){var H=i.interleaved;H===null?(p.next=p,Zu(i)):(p.next=H.next,H.next=p),i.interleaved=p;return}}catch{}finally{}o=ep(n,i,p,u),o!==null&&(p=An(),ui(o,n,u,p),wp(o,i,u))}}function Mp(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Tp(n,i){Po=Ha=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function wp(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}var Wa={readContext:Zn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},e0={readContext:Zn,useCallback:function(n,i){return Ei().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:pp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Va(4194308,4,_p.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Va(4194308,4,n,i)},useInsertionEffect:function(n,i){return Va(4,2,n,i)},useMemo:function(n,i){var o=Ei();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ei();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Qv.bind(null,Ht,n),[u.memoizedState,n]},useRef:function(n){var i=Ei();return n={current:n},i.memoizedState=n},useState:dp,useDebugValue:cc,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=dp(!1),i=n[0];return n=Zv.bind(null,n[1]),Ei().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Ht,p=Ei();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));Br&30||ap(u,i,o)}p.memoizedState=o;var _={value:o,getSnapshot:i};return p.queue=_,pp(up.bind(null,u,_,n),[n]),u.flags|=2048,Io(9,lp.bind(null,u,_,o,i),void 0,null),o},useId:function(){var n=Ei(),i=on.identifierPrefix;if(Bt){var o=Ii,u=Li;o=(u&~(1<<32-ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=No++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Kv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},t0={readContext:Zn,useCallback:yp,useContext:Zn,useEffect:uc,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:ac,useRef:hp,useState:function(){return ac(Lo)},useDebugValue:cc,useDeferredValue:function(n){var i=Qn();return Sp(i,Kt.memoizedState,n)},useTransition:function(){var n=ac(Lo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:sp,useSyncExternalStore:op,useId:Ep,unstable_isNewReconciler:!1},n0={readContext:Zn,useCallback:yp,useContext:Zn,useEffect:uc,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:lc,useRef:hp,useState:function(){return lc(Lo)},useDebugValue:cc,useDeferredValue:function(n){var i=Qn();return Kt===null?i.memoizedState=n:Sp(i,Kt.memoizedState,n)},useTransition:function(){var n=lc(Lo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:sp,useSyncExternalStore:op,useId:Ep,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function fc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:le({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Xa={isMounted:function(n){return(n=n._reactInternals)?vi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=An(),p=dr(n),_=Ui(u,p);_.payload=i,o!=null&&(_.callback=o),i=lr(n,_,p),i!==null&&(ui(i,n,p,u),Fa(i,n,p))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=An(),p=dr(n),_=Ui(u,p);_.tag=1,_.payload=i,o!=null&&(_.callback=o),i=lr(n,_,p),i!==null&&(ui(i,n,p,u),Fa(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=An(),u=dr(n),p=Ui(o,u);p.tag=2,i!=null&&(p.callback=i),i=lr(n,p,u),i!==null&&(ui(i,n,u,o),Fa(i,n,u))}};function Ap(n,i,o,u,p,_,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,w):i.prototype&&i.prototype.isPureReactComponent?!yo(o,u)||!yo(p,_):!0}function Cp(n,i,o){var u=!1,p=sr,_=i.contextType;return typeof _=="object"&&_!==null?_=Zn(_):(p=Nn(i)?Dr:gn.current,u=i.contextTypes,_=(u=u!=null)?gs(n,p):sr),i=new i(o,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),i}function Rp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Xa.enqueueReplaceState(i,i.state,null)}function dc(n,i,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},Qu(n);var _=i.contextType;typeof _=="object"&&_!==null?p.context=Zn(_):(_=Nn(i)?Dr:gn.current,p.context=gs(n,_)),p.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(fc(n,i,_,o),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&Xa.enqueueReplaceState(p,p.state,null),ka(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ts(n,i){try{var o="",u=i;do o+=fe(u),u=u.return;while(u);var p=o}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:p,digest:null}}function hc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function pc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var i0=typeof WeakMap=="function"?WeakMap:Map;function bp(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Qa||(Qa=!0,bc=u),pc(n,i)},o}function Pp(n,i,o){o=Ui(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;o.payload=function(){return u(p)},o.callback=function(){pc(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(o.callback=function(){pc(n,i),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function Np(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new i0;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(o)||(p.add(o),n=_0.bind(null,n,i,o),i.then(n,n))}function Lp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ip(n,i,o,u,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n)}var r0=I.ReactCurrentOwner,Ln=!1;function wn(n,i,o,u){i.child=n===null?Jh(i,null,o,u):xs(i,n.child,o,u)}function Dp(n,i,o,u,p){o=o.render;var _=i.ref;return Es(i,p),u=sc(n,i,o,u,_,p),o=oc(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Oi(n,i,p)):(Bt&&o&&Vu(i),i.flags|=1,wn(n,i,u,p),i.child)}function Up(n,i,o,u,p){if(n===null){var _=o.type;return typeof _=="function"&&!Oc(_)&&_.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=_,Op(n,i,_,u,p)):(n=rl(o.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,!(n.lanes&p)){var w=_.memoizedProps;if(o=o.compare,o=o!==null?o:yo,o(w,u)&&n.ref===i.ref)return Oi(n,i,p)}return i.flags|=1,n=pr(_,u),n.ref=i.ref,n.return=i,i.child=n}function Op(n,i,o,u,p){if(n!==null){var _=n.memoizedProps;if(yo(_,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=_,(n.lanes&p)!==0)n.flags&131072&&(Ln=!0);else return i.lanes=n.lanes,Oi(n,i,p)}return mc(n,i,o,u,p)}function Fp(n,i,o){var u=i.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(As,Xn),Xn|=o;else{if(!(o&1073741824))return n=_!==null?_.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(As,Xn),Xn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:o,Dt(As,Xn),Xn|=u}else _!==null?(u=_.baseLanes|o,i.memoizedState=null):u=o,Dt(As,Xn),Xn|=u;return wn(n,i,p,o),i.child}function kp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mc(n,i,o,u,p){var _=Nn(o)?Dr:gn.current;return _=gs(i,_),Es(i,p),o=sc(n,i,o,u,_,p),u=oc(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Oi(n,i,p)):(Bt&&u&&Vu(i),i.flags|=1,wn(n,i,o,p),i.child)}function Bp(n,i,o,u,p){if(Nn(o)){var _=!0;ba(i)}else _=!1;if(Es(i,p),i.stateNode===null)ja(n,i),Cp(i,o,u),dc(i,o,u,p),u=!0;else if(n===null){var w=i.stateNode,O=i.memoizedProps;w.props=O;var H=w.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Zn(ie):(ie=Nn(o)?Dr:gn.current,ie=gs(i,ie));var ve=o.getDerivedStateFromProps,xe=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";xe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==u||H!==ie)&&Rp(i,w,u,ie),ar=!1;var me=i.memoizedState;w.state=me,ka(i,u,w,p),H=i.memoizedState,O!==u||me!==H||Pn.current||ar?(typeof ve=="function"&&(fc(i,o,ve,u),H=i.memoizedState),(O=ar||Ap(i,o,O,u,me,H,ie))?(xe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),w.props=u,w.state=H,w.context=ie,u=O):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,tp(n,i),O=i.memoizedProps,ie=i.type===i.elementType?O:oi(i.type,O),w.props=ie,xe=i.pendingProps,me=w.context,H=o.contextType,typeof H=="object"&&H!==null?H=Zn(H):(H=Nn(o)?Dr:gn.current,H=gs(i,H));var De=o.getDerivedStateFromProps;(ve=typeof De=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==xe||me!==H)&&Rp(i,w,u,H),ar=!1,me=i.memoizedState,w.state=me,ka(i,u,w,p);var He=i.memoizedState;O!==xe||me!==He||Pn.current||ar?(typeof De=="function"&&(fc(i,o,De,u),He=i.memoizedState),(ie=ar||Ap(i,o,ie,u,me,He,H)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,He,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,He,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),w.props=u,w.state=He,w.context=H,u=ie):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),u=!1)}return gc(n,i,o,u,_,p)}function gc(n,i,o,u,p,_){kp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return p&&Wh(i,o,!1),Oi(n,i,_);u=i.stateNode,r0.current=i;var O=w&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=xs(i,n.child,null,_),i.child=xs(i,null,O,_)):wn(n,i,O,_),i.memoizedState=u.state,p&&Wh(i,o,!0),i.child}function zp(n){var i=n.stateNode;i.pendingContext?Vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Vh(n,i.context,!1),Ju(n,i.containerInfo)}function Hp(n,i,o,u,p){return ys(),Yu(p),i.flags|=256,wn(n,i,o,u),i.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function vc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vp(n,i,o){var u=i.pendingProps,p=zt.current,_=!1,w=(i.flags&128)!==0,O;if((O=w)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Dt(zt,p&1),n===null)return Xu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(w=u.children,n=u.fallback,_?(u=i.mode,_=i.child,w={mode:"hidden",children:w},!(u&1)&&_!==null?(_.childLanes=0,_.pendingProps=w):_=sl(w,u,0,null),n=Wr(n,u,o,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=vc(o),i.memoizedState=_c,n):yc(i,w));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return s0(n,i,w,u,O,p,o);if(_){_=u.fallback,w=i.mode,p=n.child,O=p.sibling;var H={mode:"hidden",children:u.children};return!(w&1)&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=pr(p,H),u.subtreeFlags=p.subtreeFlags&14680064),O!==null?_=pr(O,_):(_=Wr(_,w,o,null),_.flags|=2),_.return=i,u.return=i,u.sibling=_,i.child=u,u=_,_=i.child,w=n.child.memoizedState,w=w===null?vc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=n.childLanes&~o,i.memoizedState=_c,u}return _=n.child,n=_.sibling,u=pr(_,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function yc(n,i){return i=sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ya(n,i,o,u){return u!==null&&Yu(u),xs(i,n.child,null,o),n=yc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function s0(n,i,o,u,p,_,w){if(o)return i.flags&256?(i.flags&=-257,u=hc(Error(t(422))),Ya(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=u.fallback,p=i.mode,u=sl({mode:"visible",children:u.children},p,0,null),_=Wr(_,p,w,null),_.flags|=2,u.return=i,_.return=i,u.sibling=_,i.child=u,i.mode&1&&xs(i,n.child,null,w),i.child.memoizedState=vc(w),i.memoizedState=_c,_);if(!(i.mode&1))return Ya(n,i,w,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var O=u.dgst;return u=O,_=Error(t(419)),u=hc(_,u,void 0),Ya(n,i,w,u)}if(O=(w&n.childLanes)!==0,Ln||O){if(u=on,u!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(u.suspendedLanes|w)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Di(n,p),ui(u,n,p,-1))}return Uc(),u=hc(Error(t(421))),Ya(n,i,w,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=v0.bind(null,n),p._reactRetry=i,null):(n=_.treeContext,Wn=ir(p.nextSibling),Gn=i,Bt=!0,si=null,n!==null&&($n[Kn++]=Li,$n[Kn++]=Ii,$n[Kn++]=Ur,Li=n.id,Ii=n.overflow,Ur=i),i=yc(i,u.children),i.flags|=4096,i)}function Gp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ku(n.return,i,o)}function xc(n,i,o,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=o,_.tailMode=p)}function Wp(n,i,o){var u=i.pendingProps,p=u.revealOrder,_=u.tail;if(wn(n,i,u.children,o),u=zt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gp(n,o,i);else if(n.tag===19)Gp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(zt,u),!(i.mode&1))i.memoizedState=null;else switch(p){case"forwards":for(o=i.child,p=null;o!==null;)n=o.alternate,n!==null&&Ba(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=i.child,i.child=null):(p=o.sibling,o.sibling=null),xc(i,!1,p,o,_);break;case"backwards":for(o=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ba(n)===null){i.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}xc(i,!0,o,null,_);break;case"together":xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Oi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function o0(n,i,o){switch(i.tag){case 3:zp(i),ys();break;case 5:rp(i);break;case 1:Nn(i.type)&&ba(i);break;case 4:Ju(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Dt(Ua,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(zt,zt.current&1),i.flags|=128,null):o&i.child.childLanes?Vp(n,i,o):(Dt(zt,zt.current&1),n=Oi(n,i,o),n!==null?n.sibling:null);Dt(zt,zt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return Wp(n,i,o);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Dt(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,Fp(n,i,o)}return Oi(n,i,o)}var Xp,Sc,Yp,jp;Xp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Sc=function(){},Yp=function(n,i,o,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,kr(Si.current);var _=null;switch(o){case"input":p=G(n,p),u=G(n,u),_=[];break;case"select":p=le({},p,{value:void 0}),u=le({},u,{value:void 0}),_=[];break;case"textarea":p=R(n,p),u=R(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Aa)}ht(o,u);var w;o=null;for(ie in p)if(!u.hasOwnProperty(ie)&&p.hasOwnProperty(ie)&&p[ie]!=null)if(ie==="style"){var O=p[ie];for(w in O)O.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?_||(_=[]):(_=_||[]).push(ie,null));for(ie in u){var H=u[ie];if(O=p!=null?p[ie]:void 0,u.hasOwnProperty(ie)&&H!==O&&(H!=null||O!=null))if(ie==="style")if(O){for(w in O)!O.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in H)H.hasOwnProperty(w)&&O[w]!==H[w]&&(o||(o={}),o[w]=H[w])}else o||(_||(_=[]),_.push(ie,o)),o=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(_=_||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&Ot("scroll",n),_||O===H||(_=[])):(_=_||[]).push(ie,H))}o&&(_=_||[]).push("style",o);var ie=_;(i.updateQueue=ie)&&(i.flags|=4)}},jp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Do(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function a0(n,i,o){var u=i.pendingProps;switch(Gu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Nn(i.type)&&Ra(),vn(i),null;case 3:return u=i.stateNode,Ms(),Ft(Pn),Ft(gn),nc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ia(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,si!==null&&(Lc(si),si=null))),Sc(n,i),vn(i),null;case 5:ec(i);var p=kr(bo.current);if(o=i.type,n!==null&&i.stateNode!=null)Yp(n,i,o,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=kr(Si.current),Ia(i)){u=i.stateNode,o=i.type;var _=i.memoizedProps;switch(u[xi]=i,u[To]=_,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(p=0;p<So.length;p++)Ot(So[p],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":En(u,_),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},Ot("invalid",u);break;case"textarea":te(u,_),Ot("invalid",u)}ht(o,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var O=_[w];w==="children"?typeof O=="string"?u.textContent!==O&&(_.suppressHydrationWarning!==!0&&wa(u.textContent,O,n),p=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&wa(u.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Ot("scroll",u)}switch(o){case"input":Rt(u),je(u,_,!0);break;case"textarea":Rt(u),_e(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=Aa)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(o,{is:u.is}):(n=w.createElement(o),o==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,o),n[xi]=i,n[To]=u,Xp(n,i,!1,!1),i.stateNode=n;e:{switch(w=rt(o,u),o){case"dialog":Ot("cancel",n),Ot("close",n),p=u;break;case"iframe":case"object":case"embed":Ot("load",n),p=u;break;case"video":case"audio":for(p=0;p<So.length;p++)Ot(So[p],n);p=u;break;case"source":Ot("error",n),p=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),p=u;break;case"details":Ot("toggle",n),p=u;break;case"input":En(n,u),p=G(n,u),Ot("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=le({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":te(n,u),p=R(n,u),Ot("invalid",n);break;default:p=u}ht(o,p),O=p;for(_ in O)if(O.hasOwnProperty(_)){var H=O[_];_==="style"?tt(n,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ue(n,H)):_==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ft(n,H):typeof H=="number"&&ft(n,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Ot("scroll",n):H!=null&&P(n,_,H,w))}switch(o){case"input":Rt(n),je(n,u,!1);break;case"textarea":Rt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Te(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?U(n,!!u.multiple,_,!1):u.defaultValue!=null&&U(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Aa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)jp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=kr(bo.current),kr(Si.current),Ia(i)){if(u=i.stateNode,o=i.memoizedProps,u[xi]=i,(_=u.nodeValue!==o)&&(n=Gn,n!==null))switch(n.tag){case 3:wa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wa(u.nodeValue,o,(n.mode&1)!==0)}_&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[xi]=i,i.stateNode=u}return vn(i),null;case 13:if(Ft(zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Wn!==null&&i.mode&1&&!(i.flags&128))Kh(),ys(),i.flags|=98560,_=!1;else if(_=Ia(i),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[xi]=i}else ys(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;vn(i),_=!1}else si!==null&&(Lc(si),si=null),_=!0;if(!_)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||zt.current&1?Zt===0&&(Zt=3):Uc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Ms(),Sc(n,i),n===null&&Eo(i.stateNode.containerInfo),vn(i),null;case 10:return $u(i.type._context),vn(i),null;case 17:return Nn(i.type)&&Ra(),vn(i),null;case 19:if(Ft(zt),_=i.memoizedState,_===null)return vn(i),null;if(u=(i.flags&128)!==0,w=_.rendering,w===null)if(u)Do(_,!1);else{if(Zt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(w=Ba(n),w!==null){for(i.flags|=128,Do(_,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)_=o,n=u,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,n=w.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Dt(zt,zt.current&1|2),i.child}n=n.sibling}_.tail!==null&&K()>Cs&&(i.flags|=128,u=!0,Do(_,!1),i.lanes=4194304)}else{if(!u)if(n=Ba(w),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!Bt)return vn(i),null}else 2*K()-_.renderingStartTime>Cs&&o!==1073741824&&(i.flags|=128,u=!0,Do(_,!1),i.lanes=4194304);_.isBackwards?(w.sibling=i.child,i.child=w):(o=_.last,o!==null?o.sibling=w:i.child=w,_.last=w)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=K(),i.sibling=null,o=zt.current,Dt(zt,u?o&1|2:o&1),i):(vn(i),null);case 22:case 23:return Dc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Xn&1073741824&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function l0(n,i){switch(Gu(i),i.tag){case 1:return Nn(i.type)&&Ra(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ms(),Ft(Pn),Ft(gn),nc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return ec(i),null;case 13:if(Ft(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ys()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(zt),null;case 4:return Ms(),null;case 10:return $u(i.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var qa=!1,yn=!1,u0=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ws(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(n,i,u)}else o.current=null}function Ec(n,i,o){try{o()}catch(u){Wt(n,i,u)}}var qp=!1;function c0(n,i){if(Du=pa,n=Ah(),Au(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var w=0,O=-1,H=-1,ie=0,ve=0,xe=n,me=null;t:for(;;){for(var De;xe!==o||p!==0&&xe.nodeType!==3||(O=w+p),xe!==_||u!==0&&xe.nodeType!==3||(H=w+u),xe.nodeType===3&&(w+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===n)break t;if(me===o&&++ie===p&&(O=w),me===_&&++ve===u&&(H=w),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}o=O===-1||H===-1?null:{start:O,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uu={focusedElem:n,selectionRange:o},pa=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Yt=He.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:oi(i.type,Ge),Yt);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Wt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return He=qp,qp=!1,He}function Uo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Ec(i,o,_)}p=p.next}while(p!==u)}}function $a(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Mc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function $p(n){var i=n.alternate;i!==null&&(n.alternate=null,$p(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[To],delete i[Bu],delete i[Yv],delete i[jv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Kp(n){return n.tag===5||n.tag===3||n.tag===4}function Zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Aa));else if(u!==4&&(n=n.child,n!==null))for(Tc(n,i,o),n=n.sibling;n!==null;)Tc(n,i,o),n=n.sibling}function wc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(wc(n,i,o),n=n.sibling;n!==null;)wc(n,i,o),n=n.sibling}var fn=null,ai=!1;function ur(n,i,o){for(o=o.child;o!==null;)Qp(n,i,o),o=o.sibling}function Qp(n,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 5:yn||ws(o,i);case 6:var u=fn,p=ai;fn=null,ur(n,i,o),fn=u,ai=p,fn!==null&&(ai?(n=fn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(ai?(n=fn,o=o.stateNode,n.nodeType===8?ku(n.parentNode,o):n.nodeType===1&&ku(n,o),ho(n)):ku(fn,o.stateNode));break;case 4:u=fn,p=ai,fn=o.stateNode.containerInfo,ai=!0,ur(n,i,o),fn=u,ai=p;break;case 0:case 11:case 14:case 15:if(!yn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&(_&2||_&4)&&Ec(o,i,w),p=p.next}while(p!==u)}ur(n,i,o);break;case 1:if(!yn&&(ws(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(O){Wt(o,i,O)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(yn=(u=yn)||o.memoizedState!==null,ur(n,i,o),yn=u):ur(n,i,o);break;default:ur(n,i,o)}}function Jp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new u0),i.forEach(function(u){var p=y0.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function li(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var _=n,w=i,O=w;e:for(;O!==null;){switch(O.tag){case 5:fn=O.stateNode,ai=!1;break e;case 3:fn=O.stateNode.containerInfo,ai=!0;break e;case 4:fn=O.stateNode.containerInfo,ai=!0;break e}O=O.return}if(fn===null)throw Error(t(160));Qp(_,w,p),fn=null,ai=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(ie){Wt(p,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)em(i,n),i=i.sibling}function em(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(i,n),Mi(n),u&4){try{Uo(3,n,n.return),$a(3,n)}catch(Ge){Wt(n,n.return,Ge)}try{Uo(5,n,n.return)}catch(Ge){Wt(n,n.return,Ge)}}break;case 1:li(i,n),Mi(n),u&512&&o!==null&&ws(o,o.return);break;case 5:if(li(i,n),Mi(n),u&512&&o!==null&&ws(o,o.return),n.flags&32){var p=n.stateNode;try{ft(p,"")}catch(Ge){Wt(n,n.return,Ge)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,w=o!==null?o.memoizedProps:_,O=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&gt(p,_),rt(O,w);var ie=rt(O,_);for(w=0;w<H.length;w+=2){var ve=H[w],xe=H[w+1];ve==="style"?tt(p,xe):ve==="dangerouslySetInnerHTML"?Ue(p,xe):ve==="children"?ft(p,xe):P(p,ve,xe,ie)}switch(O){case"input":dt(p,_);break;case"textarea":pe(p,_);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var De=_.value;De!=null?U(p,!!_.multiple,De,!1):me!==!!_.multiple&&(_.defaultValue!=null?U(p,!!_.multiple,_.defaultValue,!0):U(p,!!_.multiple,_.multiple?[]:"",!1))}p[To]=_}catch(Ge){Wt(n,n.return,Ge)}}break;case 6:if(li(i,n),Mi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(Ge){Wt(n,n.return,Ge)}}break;case 3:if(li(i,n),Mi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(Ge){Wt(n,n.return,Ge)}break;case 4:li(i,n),Mi(n);break;case 13:li(i,n),Mi(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Rc=K())),u&4&&Jp(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(yn=(ie=yn)||ve,li(i,n),yn=ie):li(i,n),Mi(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!ve&&n.mode&1)for(Fe=n,ve=n.child;ve!==null;){for(xe=Fe=ve;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:Uo(4,me,me.return);break;case 1:ws(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Wt(u,o,Ge)}}break;case 5:ws(me,me.return);break;case 22:if(me.memoizedState!==null){im(xe);continue}}De!==null?(De.return=me,Fe=De):im(xe)}ve=ve.sibling}e:for(ve=null,xe=n;;){if(xe.tag===5){if(ve===null){ve=xe;try{p=xe.stateNode,ie?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=xe.stateNode,H=xe.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=Ke("display",w))}catch(Ge){Wt(n,n.return,Ge)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=ie?"":xe.memoizedProps}catch(Ge){Wt(n,n.return,Ge)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:li(i,n),Mi(n),u&4&&Jp(n);break;case 21:break;default:li(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Kp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(ft(p,""),u.flags&=-33);var _=Zp(n);wc(n,_,p);break;case 3:case 4:var w=u.stateNode.containerInfo,O=Zp(n);Tc(n,O,w);break;default:throw Error(t(161))}}catch(H){Wt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function f0(n,i,o){Fe=n,tm(n)}function tm(n,i,o){for(var u=(n.mode&1)!==0;Fe!==null;){var p=Fe,_=p.child;if(p.tag===22&&u){var w=p.memoizedState!==null||qa;if(!w){var O=p.alternate,H=O!==null&&O.memoizedState!==null||yn;O=qa;var ie=yn;if(qa=w,(yn=H)&&!ie)for(Fe=p;Fe!==null;)w=Fe,H=w.child,w.tag===22&&w.memoizedState!==null?rm(p):H!==null?(H.return=w,Fe=H):rm(p);for(;_!==null;)Fe=_,tm(_),_=_.sibling;Fe=p,qa=O,yn=ie}nm(n)}else p.subtreeFlags&8772&&_!==null?(_.return=p,Fe=_):nm(n)}}function nm(n){for(;Fe!==null;){var i=Fe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:yn||$a(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(o===null)u.componentDidMount();else{var p=i.elementType===i.type?o.memoizedProps:oi(i.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&ip(i,_,u);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ip(i,w,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&ho(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&Mc(i)}catch(me){Wt(i,i.return,me)}}if(i===n){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function im(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function rm(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{$a(4,i)}catch(H){Wt(i,o,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(H){Wt(i,p,H)}}var _=i.return;try{Mc(i)}catch(H){Wt(i,_,H)}break;case 5:var w=i.return;try{Mc(i)}catch(H){Wt(i,w,H)}}}catch(H){Wt(i,i.return,H)}if(i===n){Fe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Fe=O;break}Fe=i.return}}var d0=Math.ceil,Ka=I.ReactCurrentDispatcher,Ac=I.ReactCurrentOwner,Jn=I.ReactCurrentBatchConfig,Mt=0,on=null,jt=null,dn=0,Xn=0,As=rr(0),Zt=0,Oo=null,zr=0,Za=0,Cc=0,Fo=null,In=null,Rc=0,Cs=1/0,Fi=null,Qa=!1,bc=null,cr=null,Ja=!1,fr=null,el=0,ko=0,Pc=null,tl=-1,nl=0;function An(){return Mt&6?K():tl!==-1?tl:tl=K()}function dr(n){return n.mode&1?Mt&2&&dn!==0?dn&-dn:$v.transition!==null?(nl===0&&(nl=Lt()),nl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:oh(n.type)),n):1}function ui(n,i,o,u){if(50<ko)throw ko=0,Pc=null,Error(t(185));nn(n,o,u),(!(Mt&2)||n!==on)&&(n===on&&(!(Mt&2)&&(Za|=o),Zt===4&&hr(n,dn)),Dn(n,u),o===1&&Mt===0&&!(i.mode&1)&&(Cs=K()+500,Pa&&or()))}function Dn(n,i){var o=n.callbackNode;Tn(n,i);var u=pn(n,n===on?dn:0);if(u===0)o!==null&&N(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&N(o),i===1)n.tag===0?qv(om.bind(null,n)):Xh(om.bind(null,n)),Wv(function(){!(Mt&6)&&or()}),o=null;else{switch(yi(u)){case 1:o=Se;break;case 4:o=Ce;break;case 16:o=Ie;break;case 536870912:o=nt;break;default:o=Ie}o=pm(o,sm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function sm(n,i){if(tl=-1,nl=0,Mt&6)throw Error(t(327));var o=n.callbackNode;if(Rs()&&n.callbackNode!==o)return null;var u=pn(n,n===on?dn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=il(n,u);else{i=u;var p=Mt;Mt|=2;var _=lm();(on!==n||dn!==i)&&(Fi=null,Cs=K()+500,Vr(n,i));do try{m0();break}catch(O){am(n,O)}while(!0);qu(),Ka.current=_,Mt=p,jt!==null?i=0:(on=null,dn=0,i=Zt)}if(i!==0){if(i===2&&(p=bi(n),p!==0&&(u=p,i=Nc(n,p))),i===1)throw o=Oo,Vr(n,0),hr(n,u),Dn(n,K()),o;if(i===6)hr(n,u);else{if(p=n.current.alternate,!(u&30)&&!h0(p)&&(i=il(n,u),i===2&&(_=bi(n),_!==0&&(u=_,i=Nc(n,_))),i===1))throw o=Oo,Vr(n,0),hr(n,u),Dn(n,K()),o;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,In,Fi);break;case 3:if(hr(n,u),(u&130023424)===u&&(i=Rc+500-K(),10<i)){if(pn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){An(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Fu(Gr.bind(null,n,In,Fi),i);break}Gr(n,In,Fi);break;case 4:if(hr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var w=31-ot(u);_=1<<w,w=i[w],w>p&&(p=w),u&=~_}if(u=p,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*d0(u/1960))-u,10<u){n.timeoutHandle=Fu(Gr.bind(null,n,In,Fi),u);break}Gr(n,In,Fi);break;case 5:Gr(n,In,Fi);break;default:throw Error(t(329))}}}return Dn(n,K()),n.callbackNode===o?sm.bind(null,n):null}function Nc(n,i){var o=Fo;return n.current.memoizedState.isDehydrated&&(Vr(n,i).flags|=256),n=il(n,i),n!==2&&(i=In,In=o,i!==null&&Lc(i)),n}function Lc(n){In===null?In=n:In.push.apply(In,n)}function h0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],_=p.getSnapshot;p=p.value;try{if(!ri(_(),p))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~Cc,i&=~Za,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),u=1<<o;n[o]=-1,i&=~u}}function om(n){if(Mt&6)throw Error(t(327));Rs();var i=pn(n,0);if(!(i&1))return Dn(n,K()),null;var o=il(n,i);if(n.tag!==0&&o===2){var u=bi(n);u!==0&&(i=u,o=Nc(n,u))}if(o===1)throw o=Oo,Vr(n,0),hr(n,i),Dn(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,In,Fi),Dn(n,K()),null}function Ic(n,i){var o=Mt;Mt|=1;try{return n(i)}finally{Mt=o,Mt===0&&(Cs=K()+500,Pa&&or())}}function Hr(n){fr!==null&&fr.tag===0&&!(Mt&6)&&Rs();var i=Mt;Mt|=1;var o=Jn.transition,u=Et;try{if(Jn.transition=null,Et=1,n)return n()}finally{Et=u,Jn.transition=o,Mt=i,!(Mt&6)&&or()}}function Dc(){Xn=As.current,Ft(As)}function Vr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Gv(o)),jt!==null)for(o=jt.return;o!==null;){var u=o;switch(Gu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ra();break;case 3:Ms(),Ft(Pn),Ft(gn),nc();break;case 5:ec(u);break;case 4:Ms();break;case 13:Ft(zt);break;case 19:Ft(zt);break;case 10:$u(u.type._context);break;case 22:case 23:Dc()}o=o.return}if(on=n,jt=n=pr(n.current,null),dn=Xn=i,Zt=0,Oo=null,Cc=Za=zr=0,In=Fo=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,_=o.pending;if(_!==null){var w=_.next;_.next=p,u.next=w}o.pending=u}Fr=null}return n}function am(n,i){do{var o=jt;try{if(qu(),za.current=Wa,Ha){for(var u=Ht.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Ha=!1}if(Br=0,sn=Kt=Ht=null,Po=!1,No=0,Ac.current=null,o===null||o.return===null){Zt=1,Oo=i,jt=null;break}e:{var _=n,w=o.return,O=o,H=i;if(i=dn,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,ve=O,xe=ve.tag;if(!(ve.mode&1)&&(xe===0||xe===11||xe===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=Lp(w);if(De!==null){De.flags&=-257,Ip(De,w,O,_,i),De.mode&1&&Np(_,ie,i),i=De,H=ie;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(H),i.updateQueue=Ge}else He.add(H);break e}else{if(!(i&1)){Np(_,ie,i),Uc();break e}H=Error(t(426))}}else if(Bt&&O.mode&1){var Yt=Lp(w);if(Yt!==null){!(Yt.flags&65536)&&(Yt.flags|=256),Ip(Yt,w,O,_,i),Yu(Ts(H,O));break e}}_=H=Ts(H,O),Zt!==4&&(Zt=2),Fo===null?Fo=[_]:Fo.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var $=bp(_,H,i);np(_,$);break e;case 1:O=H;var X=_.type,Q=_.stateNode;if(!(_.flags&128)&&(typeof X.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(cr===null||!cr.has(Q)))){_.flags|=65536,i&=-i,_.lanes|=i;var Me=Pp(_,O,i);np(_,Me);break e}}_=_.return}while(_!==null)}cm(o)}catch(Ye){i=Ye,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function lm(){var n=Ka.current;return Ka.current=Wa,n===null?Wa:n}function Uc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),on===null||!(zr&268435455)&&!(Za&268435455)||hr(on,dn)}function il(n,i){var o=Mt;Mt|=2;var u=lm();(on!==n||dn!==i)&&(Fi=null,Vr(n,i));do try{p0();break}catch(p){am(n,p)}while(!0);if(qu(),Mt=o,Ka.current=u,jt!==null)throw Error(t(261));return on=null,dn=0,Zt}function p0(){for(;jt!==null;)um(jt)}function m0(){for(;jt!==null&&!j();)um(jt)}function um(n){var i=hm(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,i===null?cm(n):jt=i,Ac.current=null}function cm(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=l0(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,jt=null;return}}else if(o=a0(o,i,Xn),o!==null){jt=o;return}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Gr(n,i,o){var u=Et,p=Jn.transition;try{Jn.transition=null,Et=1,g0(n,i,o,u)}finally{Jn.transition=p,Et=u}return null}function g0(n,i,o,u){do Rs();while(fr!==null);if(Mt&6)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=o.lanes|o.childLanes;if(cn(n,_),n===on&&(jt=on=null,dn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Ja||(Ja=!0,pm(Ie,function(){return Rs(),null})),_=(o.flags&15990)!==0,o.subtreeFlags&15990||_){_=Jn.transition,Jn.transition=null;var w=Et;Et=1;var O=Mt;Mt|=4,Ac.current=null,c0(n,o),em(o,n),Ov(Uu),pa=!!Du,Uu=Du=null,n.current=o,f0(o),ne(),Mt=O,Et=w,Jn.transition=_}else n.current=o;if(Ja&&(Ja=!1,fr=n,el=p),_=n.pendingLanes,_===0&&(cr=null),vt(o.stateNode),Dn(n,K()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)p=i[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(Qa)throw Qa=!1,n=bc,bc=null,n;return el&1&&n.tag!==0&&Rs(),_=n.pendingLanes,_&1?n===Pc?ko++:(ko=0,Pc=n):ko=0,or(),null}function Rs(){if(fr!==null){var n=yi(el),i=Jn.transition,o=Et;try{if(Jn.transition=null,Et=16>n?16:n,fr===null)var u=!1;else{if(n=fr,fr=null,el=0,Mt&6)throw Error(t(331));var p=Mt;for(Mt|=4,Fe=n.current;Fe!==null;){var _=Fe,w=_.child;if(Fe.flags&16){var O=_.deletions;if(O!==null){for(var H=0;H<O.length;H++){var ie=O[H];for(Fe=ie;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Uo(8,ve,_)}var xe=ve.child;if(xe!==null)xe.return=ve,Fe=xe;else for(;Fe!==null;){ve=Fe;var me=ve.sibling,De=ve.return;if($p(ve),ve===ie){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var He=_.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Yt=Ge.sibling;Ge.sibling=null,Ge=Yt}while(Ge!==null)}}Fe=_}}if(_.subtreeFlags&2064&&w!==null)w.return=_,Fe=w;else e:for(;Fe!==null;){if(_=Fe,_.flags&2048)switch(_.tag){case 0:case 11:case 15:Uo(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,Fe=$;break e}Fe=_.return}}var X=n.current;for(Fe=X;Fe!==null;){w=Fe;var Q=w.child;if(w.subtreeFlags&2064&&Q!==null)Q.return=w,Fe=Q;else e:for(w=X;Fe!==null;){if(O=Fe,O.flags&2048)try{switch(O.tag){case 0:case 11:case 15:$a(9,O)}}catch(Ye){Wt(O,O.return,Ye)}if(O===w){Fe=null;break e}var Me=O.sibling;if(Me!==null){Me.return=O.return,Fe=Me;break e}Fe=O.return}}if(Mt=p,or(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{Et=o,Jn.transition=i}}return!1}function fm(n,i,o){i=Ts(o,i),i=bp(n,i,1),n=lr(n,i,1),i=An(),n!==null&&(nn(n,1,i),Dn(n,i))}function Wt(n,i,o){if(n.tag===3)fm(n,n,o);else for(;i!==null;){if(i.tag===3){fm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(cr===null||!cr.has(u))){n=Ts(o,n),n=Pp(i,n,1),i=lr(i,n,1),n=An(),i!==null&&(nn(i,1,n),Dn(i,n));break}}i=i.return}}function _0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(dn&o)===o&&(Zt===4||Zt===3&&(dn&130023424)===dn&&500>K()-Rc?Vr(n,0):Cc|=o),Dn(n,i)}function dm(n,i){i===0&&(n.mode&1?(i=Gt,Gt<<=1,!(Gt&130023424)&&(Gt=4194304)):i=1);var o=An();n=Di(n,i),n!==null&&(nn(n,i,o),Dn(n,o))}function v0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),dm(n,o)}function y0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),dm(n,o)}var hm;hm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Ln=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Ln=!1,o0(n,i,o);Ln=!!(n.flags&131072)}else Ln=!1,Bt&&i.flags&1048576&&Yh(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ja(n,i),n=i.pendingProps;var p=gs(i,gn.current);Es(i,o),p=sc(null,i,u,n,p,o);var _=oc();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(u)?(_=!0,ba(i)):_=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Qu(i),p.updater=Xa,i.stateNode=p,p._reactInternals=i,dc(i,u,n,o),i=gc(null,i,u,!0,_,o)):(i.tag=0,Bt&&_&&Vu(i),wn(null,i,p,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ja(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=S0(u),n=oi(u,n),p){case 0:i=mc(null,i,u,n,o);break e;case 1:i=Bp(null,i,u,n,o);break e;case 11:i=Dp(null,i,u,n,o);break e;case 14:i=Up(null,i,u,oi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:oi(u,p),mc(n,i,u,p,o);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:oi(u,p),Bp(n,i,u,p,o);case 3:e:{if(zp(i),n===null)throw Error(t(387));u=i.pendingProps,_=i.memoizedState,p=_.element,tp(n,i),ka(i,u,null,o);var w=i.memoizedState;if(u=w.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){p=Ts(Error(t(423)),i),i=Hp(n,i,u,o,p);break e}else if(u!==p){p=Ts(Error(t(424)),i),i=Hp(n,i,u,o,p);break e}else for(Wn=ir(i.stateNode.containerInfo.firstChild),Gn=i,Bt=!0,si=null,o=Jh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ys(),u===p){i=Oi(n,i,o);break e}wn(n,i,u,o)}i=i.child}return i;case 5:return rp(i),n===null&&Xu(i),u=i.type,p=i.pendingProps,_=n!==null?n.memoizedProps:null,w=p.children,Ou(u,p)?w=null:_!==null&&Ou(u,_)&&(i.flags|=32),kp(n,i),wn(n,i,w,o),i.child;case 6:return n===null&&Xu(i),null;case 13:return Vp(n,i,o);case 4:return Ju(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=xs(i,null,u,o):wn(n,i,u,o),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:oi(u,p),Dp(n,i,u,p,o);case 7:return wn(n,i,i.pendingProps,o),i.child;case 8:return wn(n,i,i.pendingProps.children,o),i.child;case 12:return wn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,_=i.memoizedProps,w=p.value,Dt(Ua,u._currentValue),u._currentValue=w,_!==null)if(ri(_.value,w)){if(_.children===p.children&&!Pn.current){i=Oi(n,i,o);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var O=_.dependencies;if(O!==null){w=_.child;for(var H=O.firstContext;H!==null;){if(H.context===u){if(_.tag===1){H=Ui(-1,o&-o),H.tag=2;var ie=_.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?H.next=H:(H.next=ve.next,ve.next=H),ie.pending=H}}_.lanes|=o,H=_.alternate,H!==null&&(H.lanes|=o),Ku(_.return,o,i),O.lanes|=o;break}H=H.next}}else if(_.tag===10)w=_.type===i.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=o,O=w.alternate,O!==null&&(O.lanes|=o),Ku(w,o,i),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===i){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}wn(n,i,p.children,o),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Es(i,o),p=Zn(p),u=u(p),i.flags|=1,wn(n,i,u,o),i.child;case 14:return u=i.type,p=oi(u,i.pendingProps),p=oi(u.type,p),Up(n,i,u,p,o);case 15:return Op(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:oi(u,p),ja(n,i),i.tag=1,Nn(u)?(n=!0,ba(i)):n=!1,Es(i,o),Cp(i,u,p),dc(i,u,p,o),gc(null,i,u,!0,n,o);case 19:return Wp(n,i,o);case 22:return Fp(n,i,o)}throw Error(t(156,i.tag))};function pm(n,i){return fa(n,i)}function x0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,o,u){return new x0(n,i,o,u)}function Oc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function S0(n){if(typeof n=="function")return Oc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===J)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=ei(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function rl(n,i,o,u,p,_){var w=2;if(u=n,typeof n=="function")Oc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case D:return Wr(o.children,p,_,i);case k:w=8,p|=8;break;case C:return n=ei(12,o,i,p|2),n.elementType=C,n.lanes=_,n;case z:return n=ei(13,o,i,p),n.elementType=z,n.lanes=_,n;case oe:return n=ei(19,o,i,p),n.elementType=oe,n.lanes=_,n;case ce:return sl(o,p,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:w=10;break e;case F:w=9;break e;case W:w=11;break e;case J:w=14;break e;case se:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(w,o,i,p),i.elementType=n,i.type=u,i.lanes=_,i}function Wr(n,i,o,u){return n=ei(7,n,u,i),n.lanes=o,n}function sl(n,i,o,u){return n=ei(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Fc(n,i,o){return n=ei(6,n,null,i),n.lanes=o,n}function kc(n,i,o){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function E0(n,i,o,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Bc(n,i,o,u,p,_,w,O,H){return n=new E0(n,i,o,O,H),i===1?(i=1,_===!0&&(i|=8)):i=0,_=ei(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(_),n}function M0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function mm(n){if(!n)return sr;n=n._reactInternals;e:{if(vi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Nn(o))return Gh(n,o,i)}return i}function gm(n,i,o,u,p,_,w,O,H){return n=Bc(o,u,!0,n,p,_,w,O,H),n.context=mm(null),o=n.current,u=An(),p=dr(o),_=Ui(u,p),_.callback=i??null,lr(o,_,p),n.current.lanes=p,nn(n,p,u),Dn(n,u),n}function ol(n,i,o,u){var p=i.current,_=An(),w=dr(p);return o=mm(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(_,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=lr(p,i,w),n!==null&&(ui(n,p,w,_),Fa(n,p,w)),w}function al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _m(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function zc(n,i){_m(n,i),(n=n.alternate)&&_m(n,i)}var vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hc(n){this._internalRoot=n}ll.prototype.render=Hc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},ll.prototype.unmount=Hc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hr(function(){ol(null,n,null,null)}),i[Pi]=null}};function ll(n){this._internalRoot=n}ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=th();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&rh(n)}};function Vc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ym(){}function T0(n,i,o,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var ie=al(w);_.call(ie)}}var w=gm(i,u,n,0,null,!1,!1,"",ym);return n._reactRootContainer=w,n[Pi]=w.current,Eo(n.nodeType===8?n.parentNode:n),Hr(),w}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var O=u;u=function(){var ie=al(H);O.call(ie)}}var H=Bc(n,0,!1,null,null,!1,!1,"",ym);return n._reactRootContainer=H,n[Pi]=H.current,Eo(n.nodeType===8?n.parentNode:n),Hr(function(){ol(i,H,o,u)}),H}function cl(n,i,o,u,p){var _=o._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var O=p;p=function(){var H=al(w);O.call(H)}}ol(i,w,n,p)}else w=T0(o,i,n,p,u);return al(w)}Jd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=_t(i.pendingLanes);o!==0&&(rn(i,o|1),Dn(i,K()),!(Mt&6)&&(Cs=K()+500,or()))}break;case 13:Hr(function(){var u=Di(n,1);if(u!==null){var p=An();ui(u,n,1,p)}}),zc(n,1)}},hu=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var o=An();ui(i,n,134217728,o)}zc(n,134217728)}},eh=function(n){if(n.tag===13){var i=dr(n),o=Di(n,i);if(o!==null){var u=An();ui(o,n,i,u)}zc(n,i)}},th=function(){return Et},nh=function(n,i){var o=Et;try{return Et=n,i()}finally{Et=o}},Ae=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var p=Ca(u);if(!p)throw Error(t(90));Je(u),dt(u,p)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&U(n,!!o.multiple,i,!1)}},Ut=Ic,$t=Hr;var w0={usingClientEntryPoint:!1,Events:[wo,ps,Ca,Ne,st,Ic]},Bo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ua(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{et=fl.inject(A0),Ve=fl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0,Un.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(i))throw Error(t(200));return M0(n,i,null,o)},Un.createRoot=function(n,i){if(!Vc(n))throw Error(t(299));var o=!1,u="",p=vm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Bc(n,1,!1,null,null,o,!1,u,p),n[Pi]=i.current,Eo(n.nodeType===8?n.parentNode:n),new Hc(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ua(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Hr(n)},Un.hydrate=function(n,i,o){if(!ul(i))throw Error(t(200));return cl(null,n,i,!0,o)},Un.hydrateRoot=function(n,i,o){if(!Vc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,_="",w=vm;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(_=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=gm(i,null,n,1,o??null,p,!1,_,w),n[Pi]=i.current,Eo(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,p]:i.mutableSourceEagerHydrationData.push(o,p);return new ll(i)},Un.render=function(n,i,o){if(!ul(i))throw Error(t(200));return cl(null,n,i,!1,o)},Un.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(Hr(function(){cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Un.unstable_batchedUpdates=Ic,Un.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!ul(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return cl(n,i,o,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Cm;function F0(){if(Cm)return Xc.exports;Cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Xc.exports=O0(),Xc.exports}var Rm;function k0(){if(Rm)return dl;Rm=1;var s=F0();return dl.createRoot=s.createRoot,dl.hydrateRoot=s.hydrateRoot,dl}var B0=k0();const z0=P0(B0);var ct=iu(),qc={exports:{}},$c={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function H0(){if(bm)return $c;bm=1;var s=iu();function e(f,h){return f===h&&(f!==0||1/f===1/h)||f!==f&&h!==h}var t=typeof Object.is=="function"?Object.is:e,r=s.useSyncExternalStore,a=s.useRef,l=s.useEffect,d=s.useMemo,c=s.useDebugValue;return $c.useSyncExternalStoreWithSelector=function(f,h,g,v,y){var S=a(null);if(S.current===null){var E={hasValue:!1,value:null};S.current=E}else E=S.current;S=d(function(){function x(L){if(!m){if(m=!0,A=L,L=v(L),y!==void 0&&E.hasValue){var b=E.value;if(y(b,L))return P=b}return P=L}if(b=P,t(A,L))return b;var D=v(L);return y!==void 0&&y(b,D)?(A=L,b):(A=L,P=D)}var m=!1,A,P,I=g===void 0?null:g;return[function(){return x(h())},I===null?void 0:function(){return x(I())}]},[h,g,v,y]);var M=r(f,S[0],S[1]);return l(function(){E.hasValue=!0,E.value=M},[M]),c(M),M},$c}var Pm;function V0(){return Pm||(Pm=1,qc.exports=H0()),qc.exports}V0();var G0=ct.version.startsWith("19"),W0=Symbol.for(G0?"react.transitional.element":"react.element"),X0=Symbol.for("react.portal"),Y0=Symbol.for("react.fragment"),j0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),$0=Symbol.for("react.consumer"),K0=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),Z0=Symbol.for("react.suspense"),Q0=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),ey=a_,ty=Fd;function ny(s){if(typeof s=="object"&&s!==null){const{$$typeof:e}=s;switch(e){case W0:switch(s=s.type,s){case Y0:case q0:case j0:case Z0:case Q0:return s;default:switch(s=s&&s.$$typeof,s){case K0:case a_:case J0:case Fd:return s;case $0:return s;default:return e}}case X0:return e}}}function iy(s){return ny(s)===Fd}function ry(s,e,t,r,{areStatesEqual:a,areOwnPropsEqual:l,areStatePropsEqual:d}){let c=!1,f,h,g,v,y;function S(A,P){return f=A,h=P,g=s(f,h),v=e(r,h),y=t(g,v,h),c=!0,y}function E(){return g=s(f,h),e.dependsOnOwnProps&&(v=e(r,h)),y=t(g,v,h),y}function M(){return s.dependsOnOwnProps&&(g=s(f,h)),e.dependsOnOwnProps&&(v=e(r,h)),y=t(g,v,h),y}function x(){const A=s(f,h),P=!d(A,g);return g=A,P&&(y=t(g,v,h)),y}function m(A,P){const I=!l(P,h),L=!a(A,f,P,h);return f=A,h=P,I&&L?E():I?M():L?x():y}return function(P,I){return c?m(P,I):S(P,I)}}function sy(s,{initMapStateToProps:e,initMapDispatchToProps:t,initMergeProps:r,...a}){const l=e(s,a),d=t(s,a),c=r(s,a);return ry(l,d,c,s,a)}function oy(s,e){const t={};for(const r in s){const a=s[r];typeof a=="function"&&(t[r]=(...l)=>e(a(...l)))}return t}function jf(s){return function(t){const r=s(t);function a(){return r}return a.dependsOnOwnProps=!1,a}}function Nm(s){return s.dependsOnOwnProps?!!s.dependsOnOwnProps:s.length!==1}function l_(s,e){return function(r,{displayName:a}){const l=function(c,f){return l.dependsOnOwnProps?l.mapToProps(c,f):l.mapToProps(c,void 0)};return l.dependsOnOwnProps=!0,l.mapToProps=function(c,f){l.mapToProps=s,l.dependsOnOwnProps=Nm(s);let h=l(c,f);return typeof h=="function"&&(l.mapToProps=h,l.dependsOnOwnProps=Nm(h),h=l(c,f)),h},l}}function kd(s,e){return(t,r)=>{throw new Error(`Invalid value of type ${typeof s} for ${e} argument when connecting component ${r.wrappedComponentName}.`)}}function ay(s){return s&&typeof s=="object"?jf(e=>oy(s,e)):s?typeof s=="function"?l_(s):kd(s,"mapDispatchToProps"):jf(e=>({dispatch:e}))}function ly(s){return s?typeof s=="function"?l_(s):kd(s,"mapStateToProps"):jf(()=>({}))}function uy(s,e,t){return{...t,...s,...e}}function cy(s){return function(t,{displayName:r,areMergedPropsEqual:a}){let l=!1,d;return function(f,h,g){const v=s(f,h,g);return l?a(v,d)||(d=v):(l=!0,d=v),d}}}function fy(s){return s?typeof s=="function"?cy(s):kd(s,"mergeProps"):()=>uy}function dy(s){s()}function hy(){let s=null,e=null;return{clear(){s=null,e=null},notify(){dy(()=>{let t=s;for(;t;)t.callback(),t=t.next})},get(){const t=[];let r=s;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let r=!0;const a=e={callback:t,next:null,prev:e};return a.prev?a.prev.next=a:s=a,function(){!r||s===null||(r=!1,a.next?a.next.prev=a.prev:e=a.prev,a.prev?a.prev.next=a.next:s=a.next)}}}}var Lm={notify(){},get:()=>[]};function u_(s,e){let t,r=Lm,a=0,l=!1;function d(M){g();const x=r.subscribe(M);let m=!1;return()=>{m||(m=!0,x(),v())}}function c(){r.notify()}function f(){E.onStateChange&&E.onStateChange()}function h(){return l}function g(){a++,t||(t=e?e.addNestedSub(f):s.subscribe(f),r=hy())}function v(){a--,t&&a===0&&(t(),t=void 0,r.clear(),r=Lm)}function y(){l||(l=!0,g())}function S(){l&&(l=!1,v())}const E={addNestedSub:d,notifyNestedSubs:c,handleChangeWrapper:f,isSubscribed:h,trySubscribe:y,tryUnsubscribe:S,getListeners:()=>r};return E}var py=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",my=py(),gy=()=>typeof navigator<"u"&&navigator.product==="ReactNative",_y=gy(),vy=()=>my||_y?ct.useLayoutEffect:ct.useEffect,jl=vy();function Im(s,e){return s===e?s!==0||e!==0||1/s===1/e:s!==s&&e!==e}function Kc(s,e){if(Im(s,e))return!0;if(typeof s!="object"||s===null||typeof e!="object"||e===null)return!1;const t=Object.keys(s),r=Object.keys(e);if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(!Object.prototype.hasOwnProperty.call(e,t[a])||!Im(s[t[a]],e[t[a]]))return!1;return!0}var yy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ey={[ey]:Sy,[ty]:c_};function Dm(s){return iy(s)?c_:Ey[s.$$typeof]||yy}var My=Object.defineProperty,Ty=Object.getOwnPropertyNames,Um=Object.getOwnPropertySymbols,wy=Object.getOwnPropertyDescriptor,Ay=Object.getPrototypeOf,Om=Object.prototype;function qf(s,e){if(typeof e!="string"){if(Om){const l=Ay(e);l&&l!==Om&&qf(s,l)}let t=Ty(e);Um&&(t=t.concat(Um(e)));const r=Dm(s),a=Dm(e);for(let l=0;l<t.length;++l){const d=t[l];if(!xy[d]&&!(a&&a[d])&&!(r&&r[d])){const c=wy(e,d);try{My(s,d,c)}catch{}}}}return s}var Zc=Symbol.for("react-redux-context"),Qc=typeof globalThis<"u"?globalThis:{};function Cy(){if(!ct.createContext)return{};const s=Qc[Zc]??(Qc[Zc]=new Map);let e=s.get(ct.createContext);return e||(e=ct.createContext(null),s.set(ct.createContext,e)),e}var f_=Cy(),Ry=[null,null];function by(s,e,t){jl(()=>s(...e),t)}function Py(s,e,t,r,a,l){s.current=r,t.current=!1,a.current&&(a.current=null,l())}function Ny(s,e,t,r,a,l,d,c,f,h,g){if(!s)return()=>{};let v=!1,y=null;const S=()=>{if(v||!c.current)return;const M=e.getState();let x,m;try{x=r(M,a.current)}catch(A){m=A,y=A}m||(y=null),x===l.current?d.current||h():(l.current=x,f.current=x,d.current=!0,g())};return t.onStateChange=S,t.trySubscribe(),S(),()=>{if(v=!0,t.tryUnsubscribe(),t.onStateChange=null,y)throw y}}function Ly(s,e){return s===e}function Iy(s,e,t,{pure:r,areStatesEqual:a=Ly,areOwnPropsEqual:l=Kc,areStatePropsEqual:d=Kc,areMergedPropsEqual:c=Kc,forwardRef:f=!1,context:h=f_}={}){const g=h,v=ly(s),y=ay(e),S=fy(t),E=!!s;return x=>{const m=x.displayName||x.name||"Component",A=`Connect(${m})`,P={shouldHandleStateChanges:E,displayName:A,wrappedComponentName:m,WrappedComponent:x,initMapStateToProps:v,initMapDispatchToProps:y,initMergeProps:S,areStatesEqual:a,areStatePropsEqual:d,areOwnPropsEqual:l,areMergedPropsEqual:c};function I(D){const[k,C,T]=ct.useMemo(()=>{const{reactReduxForwardedRef:Je,...Tt}=D;return[D.context,Je,Tt]},[D]),F=ct.useMemo(()=>{let Je=g;return k!=null&&k.Consumer,Je},[k,g]),W=ct.useContext(F),z=!!D.store&&!!D.store.getState&&!!D.store.dispatch,oe=!!W&&!!W.store,J=z?D.store:W.store,se=oe?W.getServerState:J.getState,ce=ct.useMemo(()=>sy(J.dispatch,P),[J]),[V,ae]=ct.useMemo(()=>{if(!E)return Ry;const Je=u_(J,z?void 0:W.subscription),Tt=Je.notifyNestedSubs.bind(Je);return[Je,Tt]},[J,z,W]),le=ct.useMemo(()=>z?W:{...W,subscription:V},[z,W,V]),B=ct.useRef(void 0),re=ct.useRef(T),Pe=ct.useRef(void 0),ee=ct.useRef(!1),fe=ct.useRef(!1),ye=ct.useRef(void 0);jl(()=>(fe.current=!0,()=>{fe.current=!1}),[]);const ge=ct.useMemo(()=>()=>Pe.current&&T===re.current?Pe.current:ce(J.getState(),T),[J,T]),Te=ct.useMemo(()=>Tt=>V?Ny(E,J,V,ce,re,B,ee,fe,Pe,ae,Tt):()=>{},[V]);by(Py,[re,B,ee,T,Pe,ae]);let be;try{be=ct.useSyncExternalStore(Te,ge,se?()=>ce(se(),T):ge)}catch(Je){throw ye.current&&(Je.message+=`
The error may be correlated with this previous error:
${ye.current.stack}

`),Je}jl(()=>{ye.current=void 0,Pe.current=void 0,B.current=be});const $e=ct.useMemo(()=>ct.createElement(x,{...be,ref:C}),[C,x,be]);return ct.useMemo(()=>E?ct.createElement(F.Provider,{value:le},$e):$e,[F,$e,le])}const b=ct.memo(I);if(b.WrappedComponent=x,b.displayName=I.displayName=A,f){const k=ct.forwardRef(function(T,F){return ct.createElement(b,{...T,reactReduxForwardedRef:F})});return k.displayName=A,k.WrappedComponent=x,qf(k,x)}return qf(b,x)}}var ru=Iy;function Dy(s){const{children:e,context:t,serverState:r,store:a}=s,l=ct.useMemo(()=>{const f=u_(a);return{store:a,subscription:f,getServerState:r?()=>r:void 0}},[a,r]),d=ct.useMemo(()=>a.getState(),[a]);jl(()=>{const{subscription:f}=l;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),d!==a.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[l,d]);const c=t||f_;return ct.createElement(c.Provider,{value:l},e)}var Uy=Dy;const Oy=()=>un.jsx("div",{className:"loader",children:un.jsx("div",{className:"loader-spin"})}),Fy=s=>({сurrentItemId:s.threeUI.сurrentItemId,сurrentItemType:s.threeUI.сurrentItemType}),ky=ru(Fy),By=({сurrentItemId:s,сurrentItemType:e})=>{const[t,r]=ct.useState({x:0,y:0});return ct.useEffect(()=>{const a=l=>{r({x:l.clientX,y:l.clientY})};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[]),document.body.style.cursor=s?"pointer":"",un.jsx("div",{children:s&&un.jsx("div",{className:"popup-info",style:{left:t.x+"px",top:t.y-60+"px"},children:`${e}: ${s}`})})},zy=ky(By);function hn(s){return`Minified Redux error #${s}; visit https://redux.js.org/Errors?code=${s} for the full message or use the non-minified dev environment for full errors. `}var Hy=typeof Symbol=="function"&&Symbol.observable||"@@observable",Fm=Hy,Jc=()=>Math.random().toString(36).substring(7).split("").join("."),Vy={INIT:`@@redux/INIT${Jc()}`,REPLACE:`@@redux/REPLACE${Jc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Jc()}`},ql=Vy;function d_(s){if(typeof s!="object"||s===null)return!1;let e=s;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(s)===e||Object.getPrototypeOf(s)===null}function h_(s,e,t){if(typeof s!="function")throw new Error(hn(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(hn(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(hn(1));return t(h_)(s,e)}let r=s,a=e,l=new Map,d=l,c=0,f=!1;function h(){d===l&&(d=new Map,l.forEach((x,m)=>{d.set(m,x)}))}function g(){if(f)throw new Error(hn(3));return a}function v(x){if(typeof x!="function")throw new Error(hn(4));if(f)throw new Error(hn(5));let m=!0;h();const A=c++;return d.set(A,x),function(){if(m){if(f)throw new Error(hn(6));m=!1,h(),d.delete(A),l=null}}}function y(x){if(!d_(x))throw new Error(hn(7));if(typeof x.type>"u")throw new Error(hn(8));if(typeof x.type!="string")throw new Error(hn(17));if(f)throw new Error(hn(9));try{f=!0,a=r(a,x)}finally{f=!1}return(l=d).forEach(A=>{A()}),x}function S(x){if(typeof x!="function")throw new Error(hn(10));r=x,y({type:ql.REPLACE})}function E(){const x=v;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(hn(11));function A(){const I=m;I.next&&I.next(g())}return A(),{unsubscribe:x(A)}},[Fm](){return this}}}return y({type:ql.INIT}),{dispatch:y,subscribe:v,getState:g,replaceReducer:S,[Fm]:E}}function Gy(s){Object.keys(s).forEach(e=>{const t=s[e];if(typeof t(void 0,{type:ql.INIT})>"u")throw new Error(hn(12));if(typeof t(void 0,{type:ql.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(hn(13))})}function Wy(s){const e=Object.keys(s),t={};for(let l=0;l<e.length;l++){const d=e[l];typeof s[d]=="function"&&(t[d]=s[d])}const r=Object.keys(t);let a;try{Gy(t)}catch(l){a=l}return function(d={},c){if(a)throw a;let f=!1;const h={};for(let g=0;g<r.length;g++){const v=r[g],y=t[v],S=d[v],E=y(S,c);if(typeof E>"u")throw c&&c.type,new Error(hn(14));h[v]=E,f=f||E!==S}return f=f||r.length!==Object.keys(d).length,f?h:d}}function $l(...s){return s.length===0?e=>e:s.length===1?s[0]:s.reduce((e,t)=>(...r)=>e(t(...r)))}function Xy(...s){return e=>(t,r)=>{const a=e(t,r);let l=()=>{throw new Error(hn(15))};const d={getState:a.getState,dispatch:(f,...h)=>l(f,...h)},c=s.map(f=>f(d));return l=$l(...c)(a.dispatch),{...a,dispatch:l}}}function p_(s){return({dispatch:t,getState:r})=>a=>l=>typeof l=="function"?l(t,r,s):a(l)}var Yy=p_(),jy=p_,qy=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?$l:$l.apply(null,arguments)},m_=class jo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,jo.prototype)}static get[Symbol.species](){return jo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new jo(...e[0].concat(this)):new jo(...e.concat(this))}};function $y(s){return typeof s=="boolean"}var Ky=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:a=!0,actionCreatorCheck:l=!0}=e??{};let d=new m_;return t&&($y(t)?d.push(Yy):d.push(jy(t.extraArgument))),d},Zy="RTK_autoBatch",km=s=>e=>{setTimeout(e,s)},Qy=(s={type:"raf"})=>e=>(...t)=>{const r=e(...t);let a=!0,l=!1,d=!1;const c=new Set,f=s.type==="tick"?queueMicrotask:s.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:km(10):s.type==="callback"?s.queueNotification:km(s.timeout),h=()=>{d=!1,l&&(l=!1,c.forEach(g=>g()))};return Object.assign({},r,{subscribe(g){const v=()=>a&&g(),y=r.subscribe(v);return c.add(g),()=>{y(),c.delete(g)}},dispatch(g){var v;try{return a=!((v=g==null?void 0:g.meta)!=null&&v[Zy]),l=!a,l&&(d||(d=!0,f(h))),r.dispatch(g)}finally{a=!0}}})},Jy=s=>function(t){const{autoBatch:r=!0}=t??{};let a=new m_(s);return r&&a.push(Qy(typeof r=="object"?r:void 0)),a};function ex(s){const e=Ky(),{reducer:t=void 0,middleware:r,devTools:a=!0,preloadedState:l=void 0,enhancers:d=void 0}=s;let c;if(typeof t=="function")c=t;else if(d_(t))c=Wy(t);else throw new Error(tx(1));let f;typeof r=="function"?f=r(e):f=e();let h=$l;a&&(h=qy({trace:!1,...typeof a=="object"&&a}));const g=Xy(...f),v=Jy(g);let y=typeof d=="function"?d(v):v();const S=h(...y);return h_(c,l,S)}function tx(s){return`Minified Redux Toolkit error #${s}; visit https://redux-toolkit.js.org/Errors?code=${s} for the full message or use the non-minified dev environment for full errors. `}const hi={SHOW_APPLICATION:"SHOW_APPLICATION",SET_CURRENT_ITEM:"SET_CURRENT_ITEM",SET_VALUE_POPUP_COORDS:"SET_VALUE_POPUP_COORDS",SET_BUTTONS_HORIZONS:"SET_BUTTONS_MINES",SET_CURRENT_BUTTON_HORIZON:"SET_CURRENT_BUTTON_HORIZON",SHOW_BOTTOM_SECTOR_INFO:"SHOW_BOTTOM_SECTOR_INFO"},nx={isShowComponentLoader:!0,сurrentItemId:null,сurrentItemType:null,buttonsHorizons:[],currentButtonHorizon:"X",bottomInfo:null},ix=(s=nx,e)=>e.type===hi.SHOW_APPLICATION?{...s,isShowComponentLoader:!1}:e.type===hi.SET_CURRENT_ITEM?{...s,сurrentItemId:e.Id,сurrentItemType:e.typeItem}:e.type===hi.SHOW_BOTTOM_SECTOR_INFO?{...s,bottomInfo:e.text}:e.type===hi.SET_BUTTONS_HORIZONS?{...s,buttonsHorizons:["X",...e.value]}:e.type===hi.SET_CURRENT_BUTTON_HORIZON?{...s,currentButtonHorizon:e.value,bottomInfo:null}:s,rx=ex({reducer:{threeUI:ix}}),sx=s=>({buttonsNames:s.threeUI.buttonsHorizons,currentButtonName:s.threeUI.currentButtonHorizon}),ox=s=>({setCurrentButtonName:e=>s({type:hi.SET_CURRENT_BUTTON_HORIZON,value:e})}),ax=ru(sx,ox),lx=s=>un.jsx("div",{className:"horizons-list",children:s.buttonsNames.map(e=>un.jsx("div",{className:"horizon-item",onClick:t=>{t.stopPropagation(),s.setCurrentButtonName(e)},children:`[${s.currentButtonName===e?"V":" "}] ${e}`},e))}),ux=ax(lx),cx=s=>({bottomInfo:s.threeUI.bottomInfo}),fx=s=>({showBottomSectorInfo:e=>s({type:hi.SHOW_BOTTOM_SECTOR_INFO,text:e})}),dx=ru(cx,fx),hx=s=>un.jsx("div",{children:s.bottomInfo&&un.jsxs("div",{className:"bottom-info",children:[un.jsx("div",{className:"close-bottom-info",onClick:()=>{s.showBottomSectorInfo(null)},children:"close"}),un.jsx("p",{children:s.bottomInfo})]})}),px=dx(hx),mx="/250121_mine_view/assets/MIM_Scheme-CqJXBD3k.xml";var ef={},tf={},Bm;function Bd(){return Bm||(Bm=1,function(s){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",t=e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",r="["+e+"]["+t+"]*",a=new RegExp("^"+r+"$"),l=function(c,f){const h=[];let g=f.exec(c);for(;g;){const v=[];v.startIndex=f.lastIndex-g[0].length;const y=g.length;for(let S=0;S<y;S++)v.push(g[S]);h.push(v),g=f.exec(c)}return h},d=function(c){const f=a.exec(c);return!(f===null||typeof f>"u")};s.isExist=function(c){return typeof c<"u"},s.isEmptyObject=function(c){return Object.keys(c).length===0},s.merge=function(c,f,h){if(f){const g=Object.keys(f),v=g.length;for(let y=0;y<v;y++)h==="strict"?c[g[y]]=[f[g[y]]]:c[g[y]]=f[g[y]]}},s.getValue=function(c){return s.isExist(c)?c:""},s.isName=d,s.getAllMatches=l,s.nameRegexp=r}(tf)),tf}var zm;function g_(){if(zm)return ef;zm=1;const s=Bd(),e={allowBooleanAttributes:!1,unpairedTags:[]};ef.validate=function(m,A){A=Object.assign({},e,A);const P=[];let I=!1,L=!1;m[0]==="\uFEFF"&&(m=m.substr(1));for(let b=0;b<m.length;b++)if(m[b]==="<"&&m[b+1]==="?"){if(b+=2,b=r(m,b),b.err)return b}else if(m[b]==="<"){let D=b;if(b++,m[b]==="!"){b=a(m,b);continue}else{let k=!1;m[b]==="/"&&(k=!0,b++);let C="";for(;b<m.length&&m[b]!==">"&&m[b]!==" "&&m[b]!=="	"&&m[b]!==`
`&&m[b]!=="\r";b++)C+=m[b];if(C=C.trim(),C[C.length-1]==="/"&&(C=C.substring(0,C.length-1),b--),!E(C)){let W;return C.trim().length===0?W="Invalid space after '<'.":W="Tag '"+C+"' is an invalid name.",y("InvalidTag",W,M(m,b))}const T=c(m,b);if(T===!1)return y("InvalidAttr","Attributes for '"+C+"' have open quote.",M(m,b));let F=T.value;if(b=T.index,F[F.length-1]==="/"){const W=b-F.length;F=F.substring(0,F.length-1);const z=h(F,A);if(z===!0)I=!0;else return y(z.err.code,z.err.msg,M(m,W+z.err.line))}else if(k)if(T.tagClosed){if(F.trim().length>0)return y("InvalidTag","Closing tag '"+C+"' can't have attributes or invalid starting.",M(m,D));if(P.length===0)return y("InvalidTag","Closing tag '"+C+"' has not been opened.",M(m,D));{const W=P.pop();if(C!==W.tagName){let z=M(m,W.tagStartPos);return y("InvalidTag","Expected closing tag '"+W.tagName+"' (opened in line "+z.line+", col "+z.col+") instead of closing tag '"+C+"'.",M(m,D))}P.length==0&&(L=!0)}}else return y("InvalidTag","Closing tag '"+C+"' doesn't have proper closing.",M(m,b));else{const W=h(F,A);if(W!==!0)return y(W.err.code,W.err.msg,M(m,b-F.length+W.err.line));if(L===!0)return y("InvalidXml","Multiple possible root nodes found.",M(m,b));A.unpairedTags.indexOf(C)!==-1||P.push({tagName:C,tagStartPos:D}),I=!0}for(b++;b<m.length;b++)if(m[b]==="<")if(m[b+1]==="!"){b++,b=a(m,b);continue}else if(m[b+1]==="?"){if(b=r(m,++b),b.err)return b}else break;else if(m[b]==="&"){const W=v(m,b);if(W==-1)return y("InvalidChar","char '&' is not expected.",M(m,b));b=W}else if(L===!0&&!t(m[b]))return y("InvalidXml","Extra text at the end",M(m,b));m[b]==="<"&&b--}}else{if(t(m[b]))continue;return y("InvalidChar","char '"+m[b]+"' is not expected.",M(m,b))}if(I){if(P.length==1)return y("InvalidTag","Unclosed tag '"+P[0].tagName+"'.",M(m,P[0].tagStartPos));if(P.length>0)return y("InvalidXml","Invalid '"+JSON.stringify(P.map(b=>b.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return y("InvalidXml","Start tag expected.",1);return!0};function t(m){return m===" "||m==="	"||m===`
`||m==="\r"}function r(m,A){const P=A;for(;A<m.length;A++)if(m[A]=="?"||m[A]==" "){const I=m.substr(P,A-P);if(A>5&&I==="xml")return y("InvalidXml","XML declaration allowed only at the start of the document.",M(m,A));if(m[A]=="?"&&m[A+1]==">"){A++;break}else continue}return A}function a(m,A){if(m.length>A+5&&m[A+1]==="-"&&m[A+2]==="-"){for(A+=3;A<m.length;A++)if(m[A]==="-"&&m[A+1]==="-"&&m[A+2]===">"){A+=2;break}}else if(m.length>A+8&&m[A+1]==="D"&&m[A+2]==="O"&&m[A+3]==="C"&&m[A+4]==="T"&&m[A+5]==="Y"&&m[A+6]==="P"&&m[A+7]==="E"){let P=1;for(A+=8;A<m.length;A++)if(m[A]==="<")P++;else if(m[A]===">"&&(P--,P===0))break}else if(m.length>A+9&&m[A+1]==="["&&m[A+2]==="C"&&m[A+3]==="D"&&m[A+4]==="A"&&m[A+5]==="T"&&m[A+6]==="A"&&m[A+7]==="["){for(A+=8;A<m.length;A++)if(m[A]==="]"&&m[A+1]==="]"&&m[A+2]===">"){A+=2;break}}return A}const l='"',d="'";function c(m,A){let P="",I="",L=!1;for(;A<m.length;A++){if(m[A]===l||m[A]===d)I===""?I=m[A]:I!==m[A]||(I="");else if(m[A]===">"&&I===""){L=!0;break}P+=m[A]}return I!==""?!1:{value:P,index:A,tagClosed:L}}const f=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function h(m,A){const P=s.getAllMatches(m,f),I={};for(let L=0;L<P.length;L++){if(P[L][1].length===0)return y("InvalidAttr","Attribute '"+P[L][2]+"' has no space in starting.",x(P[L]));if(P[L][3]!==void 0&&P[L][4]===void 0)return y("InvalidAttr","Attribute '"+P[L][2]+"' is without value.",x(P[L]));if(P[L][3]===void 0&&!A.allowBooleanAttributes)return y("InvalidAttr","boolean attribute '"+P[L][2]+"' is not allowed.",x(P[L]));const b=P[L][2];if(!S(b))return y("InvalidAttr","Attribute '"+b+"' is an invalid name.",x(P[L]));if(!I.hasOwnProperty(b))I[b]=1;else return y("InvalidAttr","Attribute '"+b+"' is repeated.",x(P[L]))}return!0}function g(m,A){let P=/\d/;for(m[A]==="x"&&(A++,P=/[\da-fA-F]/);A<m.length;A++){if(m[A]===";")return A;if(!m[A].match(P))break}return-1}function v(m,A){if(A++,m[A]===";")return-1;if(m[A]==="#")return A++,g(m,A);let P=0;for(;A<m.length;A++,P++)if(!(m[A].match(/\w/)&&P<20)){if(m[A]===";")break;return-1}return A}function y(m,A,P){return{err:{code:m,msg:A,line:P.line||P,col:P.col}}}function S(m){return s.isName(m)}function E(m){return s.isName(m)}function M(m,A){const P=m.substring(0,A).split(/\r?\n/);return{line:P.length,col:P[P.length-1].length+1}}function x(m){return m.startIndex+m[1].length}return ef}var hl={},Hm;function gx(){if(Hm)return hl;Hm=1;const s={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,r){return r},attributeValueProcessor:function(t,r){return r},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,r,a){return t}},e=function(t){return Object.assign({},s,t)};return hl.buildOptions=e,hl.defaultOptions=s,hl}var nf,Vm;function _x(){if(Vm)return nf;Vm=1;class s{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,r){t==="__proto__"&&(t="#__proto__"),this.child.push({[t]:r})}addChild(t){t.tagname==="__proto__"&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child})}}return nf=s,nf}var rf,Gm;function vx(){if(Gm)return rf;Gm=1;const s=Bd();function e(f,h){const g={};if(f[h+3]==="O"&&f[h+4]==="C"&&f[h+5]==="T"&&f[h+6]==="Y"&&f[h+7]==="P"&&f[h+8]==="E"){h=h+9;let v=1,y=!1,S=!1,E="";for(;h<f.length;h++)if(f[h]==="<"&&!S){if(y&&r(f,h)){h+=7;let M,x;[M,x,h]=t(f,h+1),x.indexOf("&")===-1&&(g[c(M)]={regx:RegExp(`&${M};`,"g"),val:x})}else y&&a(f,h)||y&&l(f,h)?h+=8:y&&d(f,h)?h+=9:S=!0;v++,E=""}else if(f[h]===">"){if(S?f[h-1]==="-"&&f[h-2]==="-"&&(S=!1,v--):v--,v===0)break}else f[h]==="["?y=!0:E+=f[h];if(v!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:g,i:h}}function t(f,h){let g="";for(;h<f.length&&f[h]!=="'"&&f[h]!=='"';h++)g+=f[h];if(g=g.trim(),g.indexOf(" ")!==-1)throw new Error("External entites are not supported");const v=f[h++];let y="";for(;h<f.length&&f[h]!==v;h++)y+=f[h];return[g,y,h]}function r(f,h){return f[h+1]==="!"&&f[h+2]==="E"&&f[h+3]==="N"&&f[h+4]==="T"&&f[h+5]==="I"&&f[h+6]==="T"&&f[h+7]==="Y"}function a(f,h){return f[h+1]==="!"&&f[h+2]==="E"&&f[h+3]==="L"&&f[h+4]==="E"&&f[h+5]==="M"&&f[h+6]==="E"&&f[h+7]==="N"&&f[h+8]==="T"}function l(f,h){return f[h+1]==="!"&&f[h+2]==="A"&&f[h+3]==="T"&&f[h+4]==="T"&&f[h+5]==="L"&&f[h+6]==="I"&&f[h+7]==="S"&&f[h+8]==="T"}function d(f,h){return f[h+1]==="!"&&f[h+2]==="N"&&f[h+3]==="O"&&f[h+4]==="T"&&f[h+5]==="A"&&f[h+6]==="T"&&f[h+7]==="I"&&f[h+8]==="O"&&f[h+9]==="N"}function c(f){if(s.isName(f))return f;throw new Error(`Invalid entity name ${f}`)}return rf=e,rf}var sf,Wm;function yx(){if(Wm)return sf;Wm=1;const s=/^[-+]?0x[a-fA-F0-9]+$/,e=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const t={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function r(l,d={}){if(d=Object.assign({},t,d),!l||typeof l!="string")return l;let c=l.trim();if(d.skipLike!==void 0&&d.skipLike.test(c))return l;if(d.hex&&s.test(c))return Number.parseInt(c,16);{const f=e.exec(c);if(f){const h=f[1],g=f[2];let v=a(f[3]);const y=f[4]||f[6];if(!d.leadingZeros&&g.length>0&&h&&c[2]!==".")return l;if(!d.leadingZeros&&g.length>0&&!h&&c[1]!==".")return l;{const S=Number(c),E=""+S;return E.search(/[eE]/)!==-1||y?d.eNotation?S:l:c.indexOf(".")!==-1?E==="0"&&v===""||E===v||h&&E==="-"+v?S:l:g?v===E||h+v===E?S:l:c===E||c===h+E?S:l}}else return l}}function a(l){return l&&l.indexOf(".")!==-1&&(l=l.replace(/0+$/,""),l==="."?l="0":l[0]==="."?l="0"+l:l[l.length-1]==="."&&(l=l.substr(0,l.length-1))),l}return sf=r,sf}var of,Xm;function __(){if(Xm)return of;Xm=1;function s(e){return typeof e=="function"?e:Array.isArray(e)?t=>{for(const r of e)if(typeof r=="string"&&t===r||r instanceof RegExp&&r.test(t))return!0}:()=>!1}return of=s,of}var af,Ym;function xx(){if(Ym)return af;Ym=1;const s=Bd(),e=_x(),t=vx(),r=yx(),a=__();class l{constructor(b){this.options=b,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(D,k)=>String.fromCharCode(Number.parseInt(k,10))},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(D,k)=>String.fromCharCode(Number.parseInt(k,16))}},this.addExternalEntities=d,this.parseXml=v,this.parseTextData=c,this.resolveNameSpace=f,this.buildAttributesMap=g,this.isItStopNode=M,this.replaceEntitiesValue=S,this.readStopNodeData=P,this.saveTextToParentTag=E,this.addChild=y,this.ignoreAttributesFn=a(this.options.ignoreAttributes)}}function d(L){const b=Object.keys(L);for(let D=0;D<b.length;D++){const k=b[D];this.lastEntities[k]={regex:new RegExp("&"+k+";","g"),val:L[k]}}}function c(L,b,D,k,C,T,F){if(L!==void 0&&(this.options.trimValues&&!k&&(L=L.trim()),L.length>0)){F||(L=this.replaceEntitiesValue(L));const W=this.options.tagValueProcessor(b,L,D,C,T);return W==null?L:typeof W!=typeof L||W!==L?W:this.options.trimValues?I(L,this.options.parseTagValue,this.options.numberParseOptions):L.trim()===L?I(L,this.options.parseTagValue,this.options.numberParseOptions):L}}function f(L){if(this.options.removeNSPrefix){const b=L.split(":"),D=L.charAt(0)==="/"?"/":"";if(b[0]==="xmlns")return"";b.length===2&&(L=D+b[1])}return L}const h=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function g(L,b,D){if(this.options.ignoreAttributes!==!0&&typeof L=="string"){const k=s.getAllMatches(L,h),C=k.length,T={};for(let F=0;F<C;F++){const W=this.resolveNameSpace(k[F][1]);if(this.ignoreAttributesFn(W,b))continue;let z=k[F][4],oe=this.options.attributeNamePrefix+W;if(W.length)if(this.options.transformAttributeName&&(oe=this.options.transformAttributeName(oe)),oe==="__proto__"&&(oe="#__proto__"),z!==void 0){this.options.trimValues&&(z=z.trim()),z=this.replaceEntitiesValue(z);const J=this.options.attributeValueProcessor(W,z,b);J==null?T[oe]=z:typeof J!=typeof z||J!==z?T[oe]=J:T[oe]=I(z,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(T[oe]=!0)}if(!Object.keys(T).length)return;if(this.options.attributesGroupName){const F={};return F[this.options.attributesGroupName]=T,F}return T}}const v=function(L){L=L.replace(/\r\n?/g,`
`);const b=new e("!xml");let D=b,k="",C="";for(let T=0;T<L.length;T++)if(L[T]==="<")if(L[T+1]==="/"){const W=m(L,">",T,"Closing Tag is not closed.");let z=L.substring(T+2,W).trim();if(this.options.removeNSPrefix){const se=z.indexOf(":");se!==-1&&(z=z.substr(se+1))}this.options.transformTagName&&(z=this.options.transformTagName(z)),D&&(k=this.saveTextToParentTag(k,D,C));const oe=C.substring(C.lastIndexOf(".")+1);if(z&&this.options.unpairedTags.indexOf(z)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${z}>`);let J=0;oe&&this.options.unpairedTags.indexOf(oe)!==-1?(J=C.lastIndexOf(".",C.lastIndexOf(".")-1),this.tagsNodeStack.pop()):J=C.lastIndexOf("."),C=C.substring(0,J),D=this.tagsNodeStack.pop(),k="",T=W}else if(L[T+1]==="?"){let W=A(L,T,!1,"?>");if(!W)throw new Error("Pi Tag is not closed.");if(k=this.saveTextToParentTag(k,D,C),!(this.options.ignoreDeclaration&&W.tagName==="?xml"||this.options.ignorePiTags)){const z=new e(W.tagName);z.add(this.options.textNodeName,""),W.tagName!==W.tagExp&&W.attrExpPresent&&(z[":@"]=this.buildAttributesMap(W.tagExp,C,W.tagName)),this.addChild(D,z,C)}T=W.closeIndex+1}else if(L.substr(T+1,3)==="!--"){const W=m(L,"-->",T+4,"Comment is not closed.");if(this.options.commentPropName){const z=L.substring(T+4,W-2);k=this.saveTextToParentTag(k,D,C),D.add(this.options.commentPropName,[{[this.options.textNodeName]:z}])}T=W}else if(L.substr(T+1,2)==="!D"){const W=t(L,T);this.docTypeEntities=W.entities,T=W.i}else if(L.substr(T+1,2)==="!["){const W=m(L,"]]>",T,"CDATA is not closed.")-2,z=L.substring(T+9,W);k=this.saveTextToParentTag(k,D,C);let oe=this.parseTextData(z,D.tagname,C,!0,!1,!0,!0);oe==null&&(oe=""),this.options.cdataPropName?D.add(this.options.cdataPropName,[{[this.options.textNodeName]:z}]):D.add(this.options.textNodeName,oe),T=W+2}else{let W=A(L,T,this.options.removeNSPrefix),z=W.tagName;const oe=W.rawTagName;let J=W.tagExp,se=W.attrExpPresent,ce=W.closeIndex;this.options.transformTagName&&(z=this.options.transformTagName(z)),D&&k&&D.tagname!=="!xml"&&(k=this.saveTextToParentTag(k,D,C,!1));const V=D;if(V&&this.options.unpairedTags.indexOf(V.tagname)!==-1&&(D=this.tagsNodeStack.pop(),C=C.substring(0,C.lastIndexOf("."))),z!==b.tagname&&(C+=C?"."+z:z),this.isItStopNode(this.options.stopNodes,C,z)){let ae="";if(J.length>0&&J.lastIndexOf("/")===J.length-1)z[z.length-1]==="/"?(z=z.substr(0,z.length-1),C=C.substr(0,C.length-1),J=z):J=J.substr(0,J.length-1),T=W.closeIndex;else if(this.options.unpairedTags.indexOf(z)!==-1)T=W.closeIndex;else{const B=this.readStopNodeData(L,oe,ce+1);if(!B)throw new Error(`Unexpected end of ${oe}`);T=B.i,ae=B.tagContent}const le=new e(z);z!==J&&se&&(le[":@"]=this.buildAttributesMap(J,C,z)),ae&&(ae=this.parseTextData(ae,z,C,!0,se,!0,!0)),C=C.substr(0,C.lastIndexOf(".")),le.add(this.options.textNodeName,ae),this.addChild(D,le,C)}else{if(J.length>0&&J.lastIndexOf("/")===J.length-1){z[z.length-1]==="/"?(z=z.substr(0,z.length-1),C=C.substr(0,C.length-1),J=z):J=J.substr(0,J.length-1),this.options.transformTagName&&(z=this.options.transformTagName(z));const ae=new e(z);z!==J&&se&&(ae[":@"]=this.buildAttributesMap(J,C,z)),this.addChild(D,ae,C),C=C.substr(0,C.lastIndexOf("."))}else{const ae=new e(z);this.tagsNodeStack.push(D),z!==J&&se&&(ae[":@"]=this.buildAttributesMap(J,C,z)),this.addChild(D,ae,C),D=ae}k="",T=ce}}else k+=L[T];return b.child};function y(L,b,D){const k=this.options.updateTag(b.tagname,D,b[":@"]);k===!1||(typeof k=="string"&&(b.tagname=k),L.addChild(b))}const S=function(L){if(this.options.processEntities){for(let b in this.docTypeEntities){const D=this.docTypeEntities[b];L=L.replace(D.regx,D.val)}for(let b in this.lastEntities){const D=this.lastEntities[b];L=L.replace(D.regex,D.val)}if(this.options.htmlEntities)for(let b in this.htmlEntities){const D=this.htmlEntities[b];L=L.replace(D.regex,D.val)}L=L.replace(this.ampEntity.regex,this.ampEntity.val)}return L};function E(L,b,D,k){return L&&(k===void 0&&(k=Object.keys(b.child).length===0),L=this.parseTextData(L,b.tagname,D,!1,b[":@"]?Object.keys(b[":@"]).length!==0:!1,k),L!==void 0&&L!==""&&b.add(this.options.textNodeName,L),L=""),L}function M(L,b,D){const k="*."+D;for(const C in L){const T=L[C];if(k===T||b===T)return!0}return!1}function x(L,b,D=">"){let k,C="";for(let T=b;T<L.length;T++){let F=L[T];if(k)F===k&&(k="");else if(F==='"'||F==="'")k=F;else if(F===D[0])if(D[1]){if(L[T+1]===D[1])return{data:C,index:T}}else return{data:C,index:T};else F==="	"&&(F=" ");C+=F}}function m(L,b,D,k){const C=L.indexOf(b,D);if(C===-1)throw new Error(k);return C+b.length-1}function A(L,b,D,k=">"){const C=x(L,b+1,k);if(!C)return;let T=C.data;const F=C.index,W=T.search(/\s/);let z=T,oe=!0;W!==-1&&(z=T.substring(0,W),T=T.substring(W+1).trimStart());const J=z;if(D){const se=z.indexOf(":");se!==-1&&(z=z.substr(se+1),oe=z!==C.data.substr(se+1))}return{tagName:z,tagExp:T,closeIndex:F,attrExpPresent:oe,rawTagName:J}}function P(L,b,D){const k=D;let C=1;for(;D<L.length;D++)if(L[D]==="<")if(L[D+1]==="/"){const T=m(L,">",D,`${b} is not closed`);if(L.substring(D+2,T).trim()===b&&(C--,C===0))return{tagContent:L.substring(k,D),i:T};D=T}else if(L[D+1]==="?")D=m(L,"?>",D+1,"StopNode is not closed.");else if(L.substr(D+1,3)==="!--")D=m(L,"-->",D+3,"StopNode is not closed.");else if(L.substr(D+1,2)==="![")D=m(L,"]]>",D,"StopNode is not closed.")-2;else{const T=A(L,D,">");T&&((T&&T.tagName)===b&&T.tagExp[T.tagExp.length-1]!=="/"&&C++,D=T.closeIndex)}}function I(L,b,D){if(b&&typeof L=="string"){const k=L.trim();return k==="true"?!0:k==="false"?!1:r(L,D)}else return s.isExist(L)?L:""}return af=l,af}var lf={},jm;function Sx(){if(jm)return lf;jm=1;function s(l,d){return e(l,d)}function e(l,d,c){let f;const h={};for(let g=0;g<l.length;g++){const v=l[g],y=t(v);let S="";if(c===void 0?S=y:S=c+"."+y,y===d.textNodeName)f===void 0?f=v[y]:f+=""+v[y];else{if(y===void 0)continue;if(v[y]){let E=e(v[y],d,S);const M=a(E,d);v[":@"]?r(E,v[":@"],S,d):Object.keys(E).length===1&&E[d.textNodeName]!==void 0&&!d.alwaysCreateTextNode?E=E[d.textNodeName]:Object.keys(E).length===0&&(d.alwaysCreateTextNode?E[d.textNodeName]="":E=""),h[y]!==void 0&&h.hasOwnProperty(y)?(Array.isArray(h[y])||(h[y]=[h[y]]),h[y].push(E)):d.isArray(y,S,M)?h[y]=[E]:h[y]=E}}}return typeof f=="string"?f.length>0&&(h[d.textNodeName]=f):f!==void 0&&(h[d.textNodeName]=f),h}function t(l){const d=Object.keys(l);for(let c=0;c<d.length;c++){const f=d[c];if(f!==":@")return f}}function r(l,d,c,f){if(d){const h=Object.keys(d),g=h.length;for(let v=0;v<g;v++){const y=h[v];f.isArray(y,c+"."+y,!0,!0)?l[y]=[d[y]]:l[y]=d[y]}}}function a(l,d){const{textNodeName:c}=d,f=Object.keys(l).length;return!!(f===0||f===1&&(l[c]||typeof l[c]=="boolean"||l[c]===0))}return lf.prettify=s,lf}var uf,qm;function Ex(){if(qm)return uf;qm=1;const{buildOptions:s}=gx(),e=xx(),{prettify:t}=Sx(),r=g_();class a{constructor(d){this.externalEntities={},this.options=s(d)}parse(d,c){if(typeof d!="string")if(d.toString)d=d.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(c){c===!0&&(c={});const g=r.validate(d,c);if(g!==!0)throw Error(`${g.err.msg}:${g.err.line}:${g.err.col}`)}const f=new e(this.options);f.addExternalEntities(this.externalEntities);const h=f.parseXml(d);return this.options.preserveOrder||h===void 0?h:t(h,this.options)}addEntity(d,c){if(c.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(d.indexOf("&")!==-1||d.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(c==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[d]=c}}return uf=a,uf}var cf,$m;function Mx(){if($m)return cf;$m=1;const s=`
`;function e(c,f){let h="";return f.format&&f.indentBy.length>0&&(h=s),t(c,f,"",h)}function t(c,f,h,g){let v="",y=!1;for(let S=0;S<c.length;S++){const E=c[S],M=r(E);if(M===void 0)continue;let x="";if(h.length===0?x=M:x=`${h}.${M}`,M===f.textNodeName){let L=E[M];l(x,f)||(L=f.tagValueProcessor(M,L),L=d(L,f)),y&&(v+=g),v+=L,y=!1;continue}else if(M===f.cdataPropName){y&&(v+=g),v+=`<![CDATA[${E[M][0][f.textNodeName]}]]>`,y=!1;continue}else if(M===f.commentPropName){v+=g+`<!--${E[M][0][f.textNodeName]}-->`,y=!0;continue}else if(M[0]==="?"){const L=a(E[":@"],f),b=M==="?xml"?"":g;let D=E[M][0][f.textNodeName];D=D.length!==0?" "+D:"",v+=b+`<${M}${D}${L}?>`,y=!0;continue}let m=g;m!==""&&(m+=f.indentBy);const A=a(E[":@"],f),P=g+`<${M}${A}`,I=t(E[M],f,x,m);f.unpairedTags.indexOf(M)!==-1?f.suppressUnpairedNode?v+=P+">":v+=P+"/>":(!I||I.length===0)&&f.suppressEmptyNode?v+=P+"/>":I&&I.endsWith(">")?v+=P+`>${I}${g}</${M}>`:(v+=P+">",I&&g!==""&&(I.includes("/>")||I.includes("</"))?v+=g+f.indentBy+I+g:v+=I,v+=`</${M}>`),y=!0}return v}function r(c){const f=Object.keys(c);for(let h=0;h<f.length;h++){const g=f[h];if(c.hasOwnProperty(g)&&g!==":@")return g}}function a(c,f){let h="";if(c&&!f.ignoreAttributes)for(let g in c){if(!c.hasOwnProperty(g))continue;let v=f.attributeValueProcessor(g,c[g]);v=d(v,f),v===!0&&f.suppressBooleanAttributes?h+=` ${g.substr(f.attributeNamePrefix.length)}`:h+=` ${g.substr(f.attributeNamePrefix.length)}="${v}"`}return h}function l(c,f){c=c.substr(0,c.length-f.textNodeName.length-1);let h=c.substr(c.lastIndexOf(".")+1);for(let g in f.stopNodes)if(f.stopNodes[g]===c||f.stopNodes[g]==="*."+h)return!0;return!1}function d(c,f){if(c&&c.length>0&&f.processEntities)for(let h=0;h<f.entities.length;h++){const g=f.entities[h];c=c.replace(g.regex,g.val)}return c}return cf=e,cf}var ff,Km;function Tx(){if(Km)return ff;Km=1;const s=Mx(),e=__(),t={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(c,f){return f},attributeValueProcessor:function(c,f){return f},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function r(c){this.options=Object.assign({},t,c),this.options.ignoreAttributes===!0||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn=e(this.options.ignoreAttributes),this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=d),this.processTextOrObjNode=a,this.options.format?(this.indentate=l,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}r.prototype.build=function(c){return this.options.preserveOrder?s(c,this.options):(Array.isArray(c)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(c={[this.options.arrayNodeName]:c}),this.j2x(c,0,[]).val)},r.prototype.j2x=function(c,f,h){let g="",v="";const y=h.join(".");for(let S in c)if(Object.prototype.hasOwnProperty.call(c,S))if(typeof c[S]>"u")this.isAttribute(S)&&(v+="");else if(c[S]===null)this.isAttribute(S)?v+="":S[0]==="?"?v+=this.indentate(f)+"<"+S+"?"+this.tagEndChar:v+=this.indentate(f)+"<"+S+"/"+this.tagEndChar;else if(c[S]instanceof Date)v+=this.buildTextValNode(c[S],S,"",f);else if(typeof c[S]!="object"){const E=this.isAttribute(S);if(E&&!this.ignoreAttributesFn(E,y))g+=this.buildAttrPairStr(E,""+c[S]);else if(!E)if(S===this.options.textNodeName){let M=this.options.tagValueProcessor(S,""+c[S]);v+=this.replaceEntitiesValue(M)}else v+=this.buildTextValNode(c[S],S,"",f)}else if(Array.isArray(c[S])){const E=c[S].length;let M="",x="";for(let m=0;m<E;m++){const A=c[S][m];if(!(typeof A>"u"))if(A===null)S[0]==="?"?v+=this.indentate(f)+"<"+S+"?"+this.tagEndChar:v+=this.indentate(f)+"<"+S+"/"+this.tagEndChar;else if(typeof A=="object")if(this.options.oneListGroup){const P=this.j2x(A,f+1,h.concat(S));M+=P.val,this.options.attributesGroupName&&A.hasOwnProperty(this.options.attributesGroupName)&&(x+=P.attrStr)}else M+=this.processTextOrObjNode(A,S,f,h);else if(this.options.oneListGroup){let P=this.options.tagValueProcessor(S,A);P=this.replaceEntitiesValue(P),M+=P}else M+=this.buildTextValNode(A,S,"",f)}this.options.oneListGroup&&(M=this.buildObjectNode(M,S,x,f)),v+=M}else if(this.options.attributesGroupName&&S===this.options.attributesGroupName){const E=Object.keys(c[S]),M=E.length;for(let x=0;x<M;x++)g+=this.buildAttrPairStr(E[x],""+c[S][E[x]])}else v+=this.processTextOrObjNode(c[S],S,f,h);return{attrStr:g,val:v}},r.prototype.buildAttrPairStr=function(c,f){return f=this.options.attributeValueProcessor(c,""+f),f=this.replaceEntitiesValue(f),this.options.suppressBooleanAttributes&&f==="true"?" "+c:" "+c+'="'+f+'"'};function a(c,f,h,g){const v=this.j2x(c,h+1,g.concat(f));return c[this.options.textNodeName]!==void 0&&Object.keys(c).length===1?this.buildTextValNode(c[this.options.textNodeName],f,v.attrStr,h):this.buildObjectNode(v.val,f,v.attrStr,h)}r.prototype.buildObjectNode=function(c,f,h,g){if(c==="")return f[0]==="?"?this.indentate(g)+"<"+f+h+"?"+this.tagEndChar:this.indentate(g)+"<"+f+h+this.closeTag(f)+this.tagEndChar;{let v="</"+f+this.tagEndChar,y="";return f[0]==="?"&&(y="?",v=""),(h||h==="")&&c.indexOf("<")===-1?this.indentate(g)+"<"+f+h+y+">"+c+v:this.options.commentPropName!==!1&&f===this.options.commentPropName&&y.length===0?this.indentate(g)+`<!--${c}-->`+this.newLine:this.indentate(g)+"<"+f+h+y+this.tagEndChar+c+this.indentate(g)+v}},r.prototype.closeTag=function(c){let f="";return this.options.unpairedTags.indexOf(c)!==-1?this.options.suppressUnpairedNode||(f="/"):this.options.suppressEmptyNode?f="/":f=`></${c}`,f},r.prototype.buildTextValNode=function(c,f,h,g){if(this.options.cdataPropName!==!1&&f===this.options.cdataPropName)return this.indentate(g)+`<![CDATA[${c}]]>`+this.newLine;if(this.options.commentPropName!==!1&&f===this.options.commentPropName)return this.indentate(g)+`<!--${c}-->`+this.newLine;if(f[0]==="?")return this.indentate(g)+"<"+f+h+"?"+this.tagEndChar;{let v=this.options.tagValueProcessor(f,c);return v=this.replaceEntitiesValue(v),v===""?this.indentate(g)+"<"+f+h+this.closeTag(f)+this.tagEndChar:this.indentate(g)+"<"+f+h+">"+v+"</"+f+this.tagEndChar}},r.prototype.replaceEntitiesValue=function(c){if(c&&c.length>0&&this.options.processEntities)for(let f=0;f<this.options.entities.length;f++){const h=this.options.entities[f];c=c.replace(h.regex,h.val)}return c};function l(c){return this.options.indentBy.repeat(c)}function d(c){return c.startsWith(this.options.attributeNamePrefix)&&c!==this.options.textNodeName?c.substr(this.attrPrefixLen):!1}return ff=r,ff}var df,Zm;function wx(){if(Zm)return df;Zm=1;const s=g_(),e=Ex(),t=Tx();return df={XMLParser:e,XMLValidator:s,XMLBuilder:t},df}var Ax=wx();const Cx=s=>new Promise(e=>{const t=new FileReader;t.addEventListener("loadend",()=>{const a=new Ax.XMLParser().parse(t.result);e(a)}),fetch(s).then(r=>r.blob()).then(r=>t.readAsText(r,"windows-1251"))}),zl=.001,Jo=3*zl,Rx=8,hf={color:10070783},su=[.7,.7,.7],bx=[1,0,1],Px=[0,0,1],Nx=[1,1,.8],Lx=[.05,.05,.05],Qm=s=>s.split(",").map(e=>parseInt(e,10)).filter(e=>!Number.isNaN(e));class Ix{constructor(){Oe(this,"Horizons",{});Oe(this,"Excavations",{});Oe(this,"Sections",{});Oe(this,"Nodes",{})}parse(e){var c,f,h,g;const t=e==null?void 0:e.Graph;if(!t){console.warn("Неверные данные: отсутствует поле 'Graph'.");return}(((c=t.Horizons)==null?void 0:c.Horizon)??[]).forEach(v=>{const{Altitude:y,Guid:S,Id:E,IsMine:M,Name:x,ObjectId:m,Sections:A}=v;typeof E=="number"&&(this.Horizons[E]={Altitude:y,Guid:S,Id:E,IsMine:M,Name:x,ObjectId:m,Sections:Qm(A)})}),(((f=t.Excavations)==null?void 0:f.Excavation)??[]).forEach(v=>{const{Name:y,Id:S,Guid:E,ExcavationType:M,Sections:x,ObjectId:m}=v;if(typeof S!="number")return;let A;typeof x=="string"?A=Qm(x):A=[Number(x)].filter(P=>!Number.isNaN(P)),this.Excavations[S]={Name:y,Id:S,Guid:E,ExcavationType:M,Sections:A,ObjectId:m}}),(((h=t.Sections)==null?void 0:h.Section)??[]).forEach(v=>{const{EndNodeId:y,Guid:S,Id:E,StartNodeId:M,Thickness:x}=v;typeof E=="number"&&(this.Sections[E]={EndNodeId:y,Guid:S,Id:E,StartNodeId:M,Thickness:x})}),(((g=t.Nodes)==null?void 0:g.Node)??[]).forEach(v=>{const{Id:y,Guid:S,X:E,Y:M,Z:x}=v;typeof y=="number"&&(this.Nodes[y]={Id:y,Guid:S,X:E,Y:M,Z:x,pos:[E*zl,x*zl,M*zl]})}),console.log("Graph parsed:",this)}getHorizonsNames(){return Object.values(this.Horizons).map(e=>e.Name)}getSectionsByHorizonName(e){const t=Object.values(this.Horizons).find(r=>r.Name===e);return t?t.Sections:[]}getItemData(e,t=null){if(!e)return null;if(e==="Section"&&t){const r=this.Sections[t];return r?`Section: ${r.Id}, StartNodeId: ${r.StartNodeId}, EndNodeId: ${r.EndNodeId}, Thickness: ${r.Thickness}, Guid: ${r.Guid}`:null}if(e==="Node"&&t){const r=this.Nodes[t];return r?`Node: ${r.Id}, X: ${r.X}, Y: ${r.Y}, Z: ${r.Z}, Guid: ${r.Guid}`:null}return null}}class Dx{constructor(){Oe(this,"isRunning",!1);Oe(this,"_updates",[]);Oe(this,"_oldTime",Date.now())}start(){this._oldTime=Date.now(),this.isRunning=!0,this.tick()}stop(){this.isRunning=!1}tick(){if(!this.isRunning)return;requestAnimationFrame(this.tick.bind(this));const e=Date.now()-this._oldTime;this._oldTime=Date.now(),this._updates.forEach(t=>t(e))}on(e){return this._updates.push(e),()=>{this._updates.filter(t=>t!==e)}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="172",qs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ux=0,Jm=1,Ox=2,v_=1,Fx=2,Gi=3,Rr=0,kn=1,pi=2,Ar=0,$s=1,eg=2,tg=3,ng=4,kx=5,Qr=100,Bx=101,zx=102,Hx=103,Vx=104,Gx=200,Wx=201,Xx=202,Yx=203,$f=204,Kf=205,jx=206,qx=207,$x=208,Kx=209,Zx=210,Qx=211,Jx=212,eS=213,tS=214,Zf=0,Qf=1,Jf=2,Qs=3,ed=4,td=5,nd=6,id=7,Hd=0,nS=1,iS=2,Cr=0,rS=1,sS=2,oS=3,aS=4,lS=5,uS=6,cS=7,y_=300,Js=301,eo=302,rd=303,sd=304,ou=306,od=1e3,es=1001,ad=1002,_i=1003,fS=1004,pl=1005,wi=1006,pf=1007,ts=1008,ji=1009,x_=1010,S_=1011,ea=1012,Vd=1013,ns=1014,Wi=1015,na=1016,Gd=1017,Wd=1018,to=1020,E_=35902,M_=1021,T_=1022,gi=1023,w_=1024,A_=1025,Ks=1026,no=1027,C_=1028,Xd=1029,R_=1030,Yd=1031,jd=1033,Hl=33776,Vl=33777,Gl=33778,Wl=33779,ld=35840,ud=35841,cd=35842,fd=35843,dd=36196,hd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,yd=37812,xd=37813,Sd=37814,Ed=37815,Md=37816,Td=37817,wd=37818,Ad=37819,Cd=37820,Rd=37821,Xl=36492,bd=36494,Pd=36495,b_=36283,Nd=36284,Ld=36285,Id=36286,dS=3200,hS=3201,P_=0,pS=1,wr="",ni="srgb",io="srgb-linear",Kl="linear",Pt="srgb",bs=7680,ig=519,mS=512,gS=513,_S=514,N_=515,vS=516,yS=517,xS=518,SS=519,rg=35044,sg="300 es",Xi=2e3,Zl=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let og=1234567;const $o=Math.PI/180,ta=180/Math.PI;function so(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function qd(s,e){return(s%e+e)%e}function ES(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function MS(s,e,t){return s!==e?(t-s)/(e-s):0}function Ko(s,e,t){return(1-t)*s+t*e}function TS(s,e,t,r){return Ko(s,e,1-Math.exp(-t*r))}function wS(s,e=1){return e-Math.abs(qd(s,e*2)-e)}function AS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function CS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function RS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bS(s,e){return s+Math.random()*(e-s)}function PS(s){return s*(.5-Math.random())}function NS(s){s!==void 0&&(og=s);let e=og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LS(s){return s*$o}function IS(s){return s*ta}function DS(s){return(s&s-1)===0&&s!==0}function US(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function OS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function FS(s,e,t,r,a){const l=Math.cos,d=Math.sin,c=l(t/2),f=d(t/2),h=l((e+r)/2),g=d((e+r)/2),v=l((e-r)/2),y=d((e-r)/2),S=l((r-e)/2),E=d((r-e)/2);switch(a){case"XYX":s.set(c*g,f*v,f*y,c*h);break;case"YZY":s.set(f*y,c*g,f*v,c*h);break;case"ZXZ":s.set(f*v,f*y,c*g,c*h);break;case"XZX":s.set(c*g,f*E,f*S,c*h);break;case"YXY":s.set(f*S,c*g,f*E,c*h);break;case"ZYZ":s.set(f*E,f*S,c*g,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Gs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kS={DEG2RAD:$o,RAD2DEG:ta,generateUUID:so,clamp:mt,euclideanModulo:qd,mapLinear:ES,inverseLerp:MS,lerp:Ko,damp:TS,pingpong:wS,smoothstep:AS,smootherstep:CS,randInt:RS,randFloat:bS,randFloatSpread:PS,seededRandom:NS,degToRad:LS,radToDeg:IS,isPowerOfTwo:DS,ceilPowerOfTwo:US,floorPowerOfTwo:OS,setQuaternionFromProperEuler:FS,normalize:Cn,denormalize:Gs};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*a+e.x,this.y=l*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,a,l,d,c,f,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,d,c,f,h)}set(e,t,r,a,l,d,c,f,h){const g=this.elements;return g[0]=e,g[1]=a,g[2]=c,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=d,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,d=r[0],c=r[3],f=r[6],h=r[1],g=r[4],v=r[7],y=r[2],S=r[5],E=r[8],M=a[0],x=a[3],m=a[6],A=a[1],P=a[4],I=a[7],L=a[2],b=a[5],D=a[8];return l[0]=d*M+c*A+f*L,l[3]=d*x+c*P+f*b,l[6]=d*m+c*I+f*D,l[1]=h*M+g*A+v*L,l[4]=h*x+g*P+v*b,l[7]=h*m+g*I+v*D,l[2]=y*M+S*A+E*L,l[5]=y*x+S*P+E*b,l[8]=y*m+S*I+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],f=e[6],h=e[7],g=e[8];return t*d*g-t*c*h-r*l*g+r*c*f+a*l*h-a*d*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],f=e[6],h=e[7],g=e[8],v=g*d-c*h,y=c*f-g*l,S=h*l-d*f,E=t*v+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(a*h-g*r)*M,e[2]=(c*r-a*d)*M,e[3]=y*M,e[4]=(g*t-a*f)*M,e[5]=(a*l-c*t)*M,e[6]=S*M,e[7]=(r*f-h*t)*M,e[8]=(d*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,d,c){const f=Math.cos(l),h=Math.sin(l);return this.set(r*f,r*h,-r*(f*d+h*c)+d+e,-a*h,a*f,-a*(-h*d+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(mf.makeScale(e,t)),this}rotate(e){return this.premultiply(mf.makeRotation(-e)),this}translate(e,t){return this.premultiply(mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mf=new lt;function L_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function BS(){const s=Ql("canvas");return s.style.display="block",s}const ag={};function Ws(s){s in ag||(ag[s]=!0,console.warn(s))}function zS(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function HS(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function VS(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lg=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const s={enabled:!0,workingColorSpace:io,spaces:{},convert:function(a,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Pt&&(a.r=Yi(a.r),a.g=Yi(a.g),a.b=Yi(a.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Pt&&(a.r=Zs(a.r),a.g=Zs(a.g),a.b=Zs(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wr?Kl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,d){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[io]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:lg,fromXYZ:ug,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:lg,fromXYZ:ug,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const At=GS();function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class WS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Ql("canvas")),Ps.width=e.width,Ps.height=e.height;const r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=Yi(l[d]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XS=0;class I_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,c=a.length;d<c;d++)a[d].isDataTexture?l.push(gf(a[d].image)):l.push(gf(a[d]))}else l=gf(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function gf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?WS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YS=0;class Bn extends rs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=es,a=es,l=wi,d=ts,c=gi,f=ji,h=Bn.DEFAULT_ANISOTROPY,g=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=so(),this.name="",this.source=new I_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=y_;Bn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*a+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*a+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*a+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*a+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,h=f[0],g=f[4],v=f[8],y=f[1],S=f[5],E=f[9],M=f[2],x=f[6],m=f[10];if(Math.abs(g-y)<.01&&Math.abs(v-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+M)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,I=(S+1)/2,L=(m+1)/2,b=(g+y)/4,D=(v+M)/4,k=(E+x)/4;return P>I&&P>L?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=b/r,l=D/r):I>L?I<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(I),r=b/a,l=k/a):L<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(L),r=D/l,a=k/l),this.set(r,a,l,t),this}let A=Math.sqrt((x-E)*(x-E)+(v-M)*(v-M)+(y-g)*(y-g));return Math.abs(A)<.001&&(A=1),this.x=(x-E)/A,this.y=(v-M)/A,this.z=(y-g)/A,this.w=Math.acos((h+S+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jS extends rs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let c=0;c<d;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new I_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends jS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class D_ extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qS extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,d,c){let f=r[a+0],h=r[a+1],g=r[a+2],v=r[a+3];const y=l[d+0],S=l[d+1],E=l[d+2],M=l[d+3];if(c===0){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(c===1){e[t+0]=y,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(v!==M||f!==y||h!==S||g!==E){let x=1-c;const m=f*y+h*S+g*E+v*M,A=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const L=Math.sqrt(P),b=Math.atan2(L,m*A);x=Math.sin(x*b)/L,c=Math.sin(c*b)/L}const I=c*A;if(f=f*x+y*I,h=h*x+S*I,g=g*x+E*I,v=v*x+M*I,x===1-c){const L=1/Math.sqrt(f*f+h*h+g*g+v*v);f*=L,h*=L,g*=L,v*=L}}e[t]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,d){const c=r[a],f=r[a+1],h=r[a+2],g=r[a+3],v=l[d],y=l[d+1],S=l[d+2],E=l[d+3];return e[t]=c*E+g*v+f*S-h*y,e[t+1]=f*E+g*y+h*v-c*S,e[t+2]=h*E+g*S+c*y-f*v,e[t+3]=g*E-c*v-f*y-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,d=e._order,c=Math.cos,f=Math.sin,h=c(r/2),g=c(a/2),v=c(l/2),y=f(r/2),S=f(a/2),E=f(l/2);switch(d){case"XYZ":this._x=y*g*v+h*S*E,this._y=h*S*v-y*g*E,this._z=h*g*E+y*S*v,this._w=h*g*v-y*S*E;break;case"YXZ":this._x=y*g*v+h*S*E,this._y=h*S*v-y*g*E,this._z=h*g*E-y*S*v,this._w=h*g*v+y*S*E;break;case"ZXY":this._x=y*g*v-h*S*E,this._y=h*S*v+y*g*E,this._z=h*g*E+y*S*v,this._w=h*g*v-y*S*E;break;case"ZYX":this._x=y*g*v-h*S*E,this._y=h*S*v+y*g*E,this._z=h*g*E-y*S*v,this._w=h*g*v+y*S*E;break;case"YZX":this._x=y*g*v+h*S*E,this._y=h*S*v+y*g*E,this._z=h*g*E-y*S*v,this._w=h*g*v-y*S*E;break;case"XZY":this._x=y*g*v-h*S*E,this._y=h*S*v-y*g*E,this._z=h*g*E+y*S*v,this._w=h*g*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],d=t[1],c=t[5],f=t[9],h=t[2],g=t[6],v=t[10],y=r+c+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-f)*S,this._y=(l-h)*S,this._z=(d-a)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(g-f)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(l+h)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(l-h)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(d-a)/S,this._x=(l+h)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,d=e._w,c=t._x,f=t._y,h=t._z,g=t._w;return this._x=r*g+d*c+a*h-l*f,this._y=a*g+d*f+l*c-r*h,this._z=l*g+d*h+r*f-a*c,this._w=d*g-r*c-a*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,d=this._w;let c=d*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=a,this._z=l,this;const f=1-c*c;if(f<=Number.EPSILON){const S=1-t;return this._w=S*d+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),g=Math.atan2(h,c),v=Math.sin((1-t)*g)/h,y=Math.sin(t*g)/h;return this._w=d*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,d=e.y,c=e.z,f=e.w,h=2*(d*a-c*r),g=2*(c*t-l*a),v=2*(l*r-d*t);return this.x=t+f*h+d*v-c*g,this.y=r+f*g+c*h-l*v,this.z=a+f*v+l*g-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,d=t.x,c=t.y,f=t.z;return this.x=a*f-l*c,this.y=l*d-r*f,this.z=r*c-a*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _f.copy(this).projectOnVector(e),this.sub(_f)}reflect(e){return this.sub(_f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _f=new Z,cg=new br;class ia{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,c=l.count;d<c;d++)e.isMesh===!0?e.getVertexPosition(d,ci):ci.fromBufferAttribute(l,d),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ml.copy(r.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),gl.subVectors(this.max,Ho),Ns.subVectors(e.a,Ho),Ls.subVectors(e.b,Ho),Is.subVectors(e.c,Ho),gr.subVectors(Ls,Ns),_r.subVectors(Is,Ls),Xr.subVectors(Ns,Is);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Xr.z,Xr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Xr.z,0,-Xr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Xr.y,Xr.x,0];return!vf(t,Ns,Ls,Is,gl)||(t=[1,0,0,0,1,0,0,0,1],!vf(t,Ns,Ls,Is,gl))?!1:(_l.crossVectors(gr,_r),t=[_l.x,_l.y,_l.z],vf(t,Ns,Ls,Is,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ci=new Z,ml=new ia,Ns=new Z,Ls=new Z,Is=new Z,gr=new Z,_r=new Z,Xr=new Z,Ho=new Z,gl=new Z,_l=new Z,Yr=new Z;function vf(s,e,t,r,a){for(let l=0,d=s.length-3;l<=d;l+=3){Yr.fromArray(s,l);const c=a.x*Math.abs(Yr.x)+a.y*Math.abs(Yr.y)+a.z*Math.abs(Yr.z),f=e.dot(Yr),h=t.dot(Yr),g=r.dot(Yr);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>c)return!1}return!0}const $S=new ia,Vo=new Z,yf=new Z;class au{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):$S.setFromPoints(e).getCenter(r);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Vo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(yf)),this.expandByPoint(Vo.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new Z,xf=new Z,vl=new Z,vr=new Z,Sf=new Z,yl=new Z,Ef=new Z;class lu{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){xf.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(xf);const l=e.distanceTo(t)*.5,d=-this.direction.dot(vl),c=vr.dot(this.direction),f=-vr.dot(vl),h=vr.lengthSq(),g=Math.abs(1-d*d);let v,y,S,E;if(g>0)if(v=d*f-c,y=d*c-f,E=l*g,v>=0)if(y>=-E)if(y<=E){const M=1/g;v*=M,y*=M,S=v*(v+d*y+2*c)+y*(d*v+y+2*f)+h}else y=l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*f)+h;else y=-l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*f)+h;else y<=-E?(v=Math.max(0,-(-d*l+c)),y=v>0?-l:Math.min(Math.max(-l,-f),l),S=-v*v+y*(y+2*f)+h):y<=E?(v=0,y=Math.min(Math.max(-l,-f),l),S=y*(y+2*f)+h):(v=Math.max(0,-(d*l+c)),y=v>0?l:Math.min(Math.max(-l,-f),l),S=-v*v+y*(y+2*f)+h);else y=d>0?-l:l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(xf).addScaledVector(vl,y),S}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const r=Bi.dot(this.direction),a=Bi.dot(Bi)-r*r,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),c=r-d,f=r+d;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,d,c,f;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return h>=0?(r=(e.min.x-y.x)*h,a=(e.max.x-y.x)*h):(r=(e.max.x-y.x)*h,a=(e.min.x-y.x)*h),g>=0?(l=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),r>d||l>a||((l>r||isNaN(r))&&(r=l),(d<a||isNaN(a))&&(a=d),v>=0?(c=(e.min.z-y.z)*v,f=(e.max.z-y.z)*v):(c=(e.max.z-y.z)*v,f=(e.min.z-y.z)*v),r>f||c>a)||((c>r||r!==r)&&(r=c),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,r,a,l){Sf.subVectors(t,e),yl.subVectors(r,e),Ef.crossVectors(Sf,yl);let d=this.direction.dot(Ef),c;if(d>0){if(a)return null;c=1}else if(d<0)c=-1,d=-d;else return null;vr.subVectors(this.origin,e);const f=c*this.direction.dot(yl.crossVectors(vr,yl));if(f<0)return null;const h=c*this.direction.dot(Sf.cross(vr));if(h<0||f+h>d)return null;const g=-c*vr.dot(Ef);return g<0?null:this.at(g/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,r,a,l,d,c,f,h,g,v,y,S,E,M,x){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,d,c,f,h,g,v,y,S,E,M,x)}set(e,t,r,a,l,d,c,f,h,g,v,y,S,E,M,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=a,m[1]=l,m[5]=d,m[9]=c,m[13]=f,m[2]=h,m[6]=g,m[10]=v,m[14]=y,m[3]=S,m[7]=E,m[11]=M,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),d=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,d=Math.cos(r),c=Math.sin(r),f=Math.cos(a),h=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=d*g,S=d*v,E=c*g,M=c*v;t[0]=f*g,t[4]=-f*v,t[8]=h,t[1]=S+E*h,t[5]=y-M*h,t[9]=-c*f,t[2]=M-y*h,t[6]=E+S*h,t[10]=d*f}else if(e.order==="YXZ"){const y=f*g,S=f*v,E=h*g,M=h*v;t[0]=y+M*c,t[4]=E*c-S,t[8]=d*h,t[1]=d*v,t[5]=d*g,t[9]=-c,t[2]=S*c-E,t[6]=M+y*c,t[10]=d*f}else if(e.order==="ZXY"){const y=f*g,S=f*v,E=h*g,M=h*v;t[0]=y-M*c,t[4]=-d*v,t[8]=E+S*c,t[1]=S+E*c,t[5]=d*g,t[9]=M-y*c,t[2]=-d*h,t[6]=c,t[10]=d*f}else if(e.order==="ZYX"){const y=d*g,S=d*v,E=c*g,M=c*v;t[0]=f*g,t[4]=E*h-S,t[8]=y*h+M,t[1]=f*v,t[5]=M*h+y,t[9]=S*h-E,t[2]=-h,t[6]=c*f,t[10]=d*f}else if(e.order==="YZX"){const y=d*f,S=d*h,E=c*f,M=c*h;t[0]=f*g,t[4]=M-y*v,t[8]=E*v+S,t[1]=v,t[5]=d*g,t[9]=-c*g,t[2]=-h*g,t[6]=S*v+E,t[10]=y-M*v}else if(e.order==="XZY"){const y=d*f,S=d*h,E=c*f,M=c*h;t[0]=f*g,t[4]=-v,t[8]=h*g,t[1]=y*v+M,t[5]=d*g,t[9]=S*v-E,t[2]=E*v-S,t[6]=c*g,t[10]=M*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,ZS)}lookAt(e,t,r){const a=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),yr.crossVectors(r,Yn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),yr.crossVectors(r,Yn)),yr.normalize(),xl.crossVectors(Yn,yr),a[0]=yr.x,a[4]=xl.x,a[8]=Yn.x,a[1]=yr.y,a[5]=xl.y,a[9]=Yn.y,a[2]=yr.z,a[6]=xl.z,a[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,d=r[0],c=r[4],f=r[8],h=r[12],g=r[1],v=r[5],y=r[9],S=r[13],E=r[2],M=r[6],x=r[10],m=r[14],A=r[3],P=r[7],I=r[11],L=r[15],b=a[0],D=a[4],k=a[8],C=a[12],T=a[1],F=a[5],W=a[9],z=a[13],oe=a[2],J=a[6],se=a[10],ce=a[14],V=a[3],ae=a[7],le=a[11],B=a[15];return l[0]=d*b+c*T+f*oe+h*V,l[4]=d*D+c*F+f*J+h*ae,l[8]=d*k+c*W+f*se+h*le,l[12]=d*C+c*z+f*ce+h*B,l[1]=g*b+v*T+y*oe+S*V,l[5]=g*D+v*F+y*J+S*ae,l[9]=g*k+v*W+y*se+S*le,l[13]=g*C+v*z+y*ce+S*B,l[2]=E*b+M*T+x*oe+m*V,l[6]=E*D+M*F+x*J+m*ae,l[10]=E*k+M*W+x*se+m*le,l[14]=E*C+M*z+x*ce+m*B,l[3]=A*b+P*T+I*oe+L*V,l[7]=A*D+P*F+I*J+L*ae,l[11]=A*k+P*W+I*se+L*le,l[15]=A*C+P*z+I*ce+L*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],d=e[1],c=e[5],f=e[9],h=e[13],g=e[2],v=e[6],y=e[10],S=e[14],E=e[3],M=e[7],x=e[11],m=e[15];return E*(+l*f*v-a*h*v-l*c*y+r*h*y+a*c*S-r*f*S)+M*(+t*f*S-t*h*y+l*d*y-a*d*S+a*h*g-l*f*g)+x*(+t*h*v-t*c*S-l*d*v+r*d*S+l*c*g-r*h*g)+m*(-a*c*g-t*f*v+t*c*y+a*d*v-r*d*y+r*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],f=e[6],h=e[7],g=e[8],v=e[9],y=e[10],S=e[11],E=e[12],M=e[13],x=e[14],m=e[15],A=v*x*h-M*y*h+M*f*S-c*x*S-v*f*m+c*y*m,P=E*y*h-g*x*h-E*f*S+d*x*S+g*f*m-d*y*m,I=g*M*h-E*v*h+E*c*S-d*M*S-g*c*m+d*v*m,L=E*v*f-g*M*f-E*c*y+d*M*y+g*c*x-d*v*x,b=t*A+r*P+a*I+l*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=A*D,e[1]=(M*y*l-v*x*l-M*a*S+r*x*S+v*a*m-r*y*m)*D,e[2]=(c*x*l-M*f*l+M*a*h-r*x*h-c*a*m+r*f*m)*D,e[3]=(v*f*l-c*y*l-v*a*h+r*y*h+c*a*S-r*f*S)*D,e[4]=P*D,e[5]=(g*x*l-E*y*l+E*a*S-t*x*S-g*a*m+t*y*m)*D,e[6]=(E*f*l-d*x*l-E*a*h+t*x*h+d*a*m-t*f*m)*D,e[7]=(d*y*l-g*f*l+g*a*h-t*y*h-d*a*S+t*f*S)*D,e[8]=I*D,e[9]=(E*v*l-g*M*l-E*r*S+t*M*S+g*r*m-t*v*m)*D,e[10]=(d*M*l-E*c*l+E*r*h-t*M*h-d*r*m+t*c*m)*D,e[11]=(g*c*l-d*v*l-g*r*h+t*v*h+d*r*S-t*c*S)*D,e[12]=L*D,e[13]=(g*M*a-E*v*a+E*r*y-t*M*y-g*r*x+t*v*x)*D,e[14]=(E*c*a-d*M*a-E*r*f+t*M*f+d*r*x-t*c*x)*D,e[15]=(d*v*a-g*c*a+g*r*f-t*v*f-d*r*y+t*c*y)*D,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,d=e.x,c=e.y,f=e.z,h=l*d,g=l*c;return this.set(h*d+r,h*c-a*f,h*f+a*c,0,h*c+a*f,g*c+r,g*f-a*d,0,h*f-a*c,g*f+a*d,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,d){return this.set(1,r,l,0,e,1,d,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,d=t._y,c=t._z,f=t._w,h=l+l,g=d+d,v=c+c,y=l*h,S=l*g,E=l*v,M=d*g,x=d*v,m=c*v,A=f*h,P=f*g,I=f*v,L=r.x,b=r.y,D=r.z;return a[0]=(1-(M+m))*L,a[1]=(S+I)*L,a[2]=(E-P)*L,a[3]=0,a[4]=(S-I)*b,a[5]=(1-(y+m))*b,a[6]=(x+A)*b,a[7]=0,a[8]=(E+P)*D,a[9]=(x-A)*D,a[10]=(1-(y+M))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const d=Ds.set(a[4],a[5],a[6]).length(),c=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const h=1/l,g=1/d,v=1/c;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,t.setFromRotationMatrix(fi),r.x=l,r.y=d,r.z=c,this}makePerspective(e,t,r,a,l,d,c=Xi){const f=this.elements,h=2*l/(t-e),g=2*l/(r-a),v=(t+e)/(t-e),y=(r+a)/(r-a);let S,E;if(c===Xi)S=-(d+l)/(d-l),E=-2*d*l/(d-l);else if(c===Zl)S=-d/(d-l),E=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=h,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,a,l,d,c=Xi){const f=this.elements,h=1/(t-e),g=1/(r-a),v=1/(d-l),y=(t+e)*h,S=(r+a)*g;let E,M;if(c===Xi)E=(d+l)*v,M=-2*v;else if(c===Zl)E=l*v,M=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ds=new Z,fi=new It,KS=new Z(0,0,0),ZS=new Z(1,1,1),yr=new Z,xl=new Z,Yn=new Z,fg=new It,dg=new br;class Ai{constructor(e=0,t=0,r=0,a=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],d=a[4],c=a[8],f=a[1],h=a[5],g=a[9],v=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dg.setFromEuler(this),this.setFromQuaternion(dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class $d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const hg=new Z,Us=new br,zi=new It,Sl=new Z,Go=new Z,JS=new Z,eE=new br,pg=new Z(1,0,0),mg=new Z(0,1,0),gg=new Z(0,0,1),_g={type:"added"},tE={type:"removed"},Os={type:"childadded",child:null},Mf={type:"childremoved",child:null};class Jt extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new Z,t=new Ai,r=new br,a=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new lt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(pg,e)}rotateY(e){return this.rotateOnAxis(mg,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,t){return hg.copy(e).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pg,e)}translateY(e){return this.translateOnAxis(mg,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Go,Sl,this.up):zi.lookAt(Sl,Go,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(zi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tE),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,eE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const v=f[h];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(l(e.materials,this.material[f]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];a.animations.push(l(e.animations,f))}}if(t){const c=d(e.geometries),f=d(e.materials),h=d(e.textures),g=d(e.images),v=d(e.shapes),y=d(e.skeletons),S=d(e.animations),E=d(e.nodes);c.length>0&&(r.geometries=c),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function d(c){const f=[];for(const h in c){const g=c[h];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Jt.DEFAULT_UP=new Z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new Z,Hi=new Z,Tf=new Z,Vi=new Z,Fs=new Z,ks=new Z,vg=new Z,wf=new Z,Af=new Z,Cf=new Z,Rf=new Xt,bf=new Xt,Pf=new Xt;class mi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),di.subVectors(e,t),a.cross(di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){di.subVectors(a,t),Hi.subVectors(r,t),Tf.subVectors(e,t);const d=di.dot(di),c=di.dot(Hi),f=di.dot(Tf),h=Hi.dot(Hi),g=Hi.dot(Tf),v=d*h-c*c;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(h*f-c*g)*y,E=(d*g-c*f)*y;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,r,a,l,d,c,f){return this.getBarycoord(e,t,r,a,Vi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Vi.x),f.addScaledVector(d,Vi.y),f.addScaledVector(c,Vi.z),f)}static getInterpolatedAttribute(e,t,r,a,l,d){return Rf.setScalar(0),bf.setScalar(0),Pf.setScalar(0),Rf.fromBufferAttribute(e,t),bf.fromBufferAttribute(e,r),Pf.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Rf,l.x),d.addScaledVector(bf,l.y),d.addScaledVector(Pf,l.z),d}static isFrontFacing(e,t,r,a){return di.subVectors(r,t),Hi.subVectors(e,t),di.cross(Hi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let d,c;Fs.subVectors(a,r),ks.subVectors(l,r),wf.subVectors(e,r);const f=Fs.dot(wf),h=ks.dot(wf);if(f<=0&&h<=0)return t.copy(r);Af.subVectors(e,a);const g=Fs.dot(Af),v=ks.dot(Af);if(g>=0&&v<=g)return t.copy(a);const y=f*v-g*h;if(y<=0&&f>=0&&g<=0)return d=f/(f-g),t.copy(r).addScaledVector(Fs,d);Cf.subVectors(e,l);const S=Fs.dot(Cf),E=ks.dot(Cf);if(E>=0&&S<=E)return t.copy(l);const M=S*h-f*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(r).addScaledVector(ks,c);const x=g*E-S*v;if(x<=0&&v-g>=0&&S-E>=0)return vg.subVectors(l,a),c=(v-g)/(v-g+(S-E)),t.copy(a).addScaledVector(vg,c);const m=1/(x+M+y);return d=M*m,c=y*m,t.copy(r).addScaledVector(Fs,d).addScaledVector(ks,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},El={h:0,s:0,l:0};function Nf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=qd(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=Nf(d,l,e+1/3),this.g=Nf(d,l,e),this.b=Nf(d,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=ni){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],c=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const r=U_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return At.fromWorkingColorSpace(Sn.copy(this),e),Math.round(mt(Sn.r*255,0,255))*65536+Math.round(mt(Sn.g*255,0,255))*256+Math.round(mt(Sn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,a=Sn.g,l=Sn.b,d=Math.max(r,a,l),c=Math.min(r,a,l);let f,h;const g=(c+d)/2;if(c===d)f=0,h=0;else{const v=d-c;switch(h=g<=.5?v/(d+c):v/(2-d-c),d){case r:f=(a-l)/v+(a<l?6:0);break;case a:f=(l-r)/v+2;break;case l:f=(r-a)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ni){At.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,a=Sn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(El);const r=Ko(xr.h,El.h,t),a=Ko(xr.s,El.s,t),l=Ko(xr.l,El.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new yt;yt.NAMES=U_;let nE=0;class oo extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=so(),this.name="",this.type="Material",this.blending=$s,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$f&&(r.blendSrc=this.blendSrc),this.blendDst!==Kf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const d=[];for(const c in l){const f=l[c];delete f.metadata,d.push(f)}return d}if(t){const l=a(e.textures),d=a(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uu extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Z,Ml=new at;class zn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=rg,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Gs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array),a=Cn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array),a=Cn(a,this.array),l=Cn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}}class O_ extends zn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class F_ extends zn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hn extends zn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let iE=0;const ti=new It,Lf=new Jt,Bs=new Z,jn=new ia,Wo=new ia,ln=new Z;class qn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?F_:O_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return Lf.lookAt(e),Lf.updateMatrix(),this.applyMatrix4(Lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const c=t[l];Wo.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(jn.min,Wo.min),jn.expandByPoint(ln),ln.addVectors(jn.max,Wo.max),jn.expandByPoint(ln)):(jn.expandByPoint(Wo.min),jn.expandByPoint(Wo.max))}jn.getCenter(r);let a=0;for(let l=0,d=e.count;l<d;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(t)for(let l=0,d=t.length;l<d;l++){const c=t[l],f=this.morphTargetsRelative;for(let h=0,g=c.count;h<g;h++)ln.fromBufferAttribute(c,h),f&&(Bs.fromBufferAttribute(e,h),ln.add(Bs)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),c=[],f=[];for(let k=0;k<r.count;k++)c[k]=new Z,f[k]=new Z;const h=new Z,g=new Z,v=new Z,y=new at,S=new at,E=new at,M=new Z,x=new Z;function m(k,C,T){h.fromBufferAttribute(r,k),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,T),y.fromBufferAttribute(l,k),S.fromBufferAttribute(l,C),E.fromBufferAttribute(l,T),g.sub(h),v.sub(h),S.sub(y),E.sub(y);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(M.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(F),x.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(F),c[k].add(M),c[C].add(M),c[T].add(M),f[k].add(x),f[C].add(x),f[T].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,C=A.length;k<C;++k){const T=A[k],F=T.start,W=T.count;for(let z=F,oe=F+W;z<oe;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const P=new Z,I=new Z,L=new Z,b=new Z;function D(k){L.fromBufferAttribute(a,k),b.copy(L);const C=c[k];P.copy(C),P.sub(L.multiplyScalar(L.dot(C))).normalize(),I.crossVectors(b,C);const F=I.dot(f[k])<0?-1:1;d.setXYZW(k,P.x,P.y,P.z,F)}for(let k=0,C=A.length;k<C;++k){const T=A[k],F=T.start,W=T.count;for(let z=F,oe=F+W;z<oe;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new Z,l=new Z,d=new Z,c=new Z,f=new Z,h=new Z,g=new Z,v=new Z;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),M=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),d.fromBufferAttribute(t,x),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),c.fromBufferAttribute(r,E),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,x),c.add(g),f.add(g),h.add(g),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),d.fromBufferAttribute(t,y+2),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(c,f){const h=c.array,g=c.itemSize,v=c.normalized,y=new h.constructor(f.length*g);let S=0,E=0;for(let M=0,x=f.length;M<x;M++){c.isInterleavedBufferAttribute?S=f[M]*c.data.stride+c.offset:S=f[M]*g;for(let m=0;m<g;m++)y[E++]=h[S++]}return new zn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,r=this.index.array,a=this.attributes;for(const c in a){const f=a[c],h=e(f,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const f=[],h=l[c];for(let g=0,v=h.length;g<v;g++){const y=h[g],S=e(y,r);f.push(S)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,f=d.length;c<f;c++){const h=d[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let v=0,y=h.length;v<y;v++){const S=h[v];g.push(S.toJSON(e.data))}g.length>0&&(a[f]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const h in a){const g=a[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],v=l[h];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,g=d.length;h<g;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yg=new It,jr=new lu,Tl=new au,xg=new Z,wl=new Z,Al=new Z,Cl=new Z,If=new Z,Rl=new Z,Sg=new Z,bl=new Z;class Fn extends Jt{constructor(e=new qn,t=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){Rl.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const g=c[f],v=l[f];g!==0&&(If.fromBufferAttribute(v,e),d?Rl.addScaledVector(If,g):Rl.addScaledVector(If.sub(t),g))}t.add(Rl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(Tl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Tl,xg)===null||jr.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(yg.copy(l).invert(),jr.copy(e.ray).applyMatrix4(yg),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,d=this.material,c=l.index,f=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(d))for(let E=0,M=y.length;E<M;E++){const x=y[E],m=d[x.materialIndex],A=Math.max(x.start,S.start),P=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let I=A,L=P;I<L;I+=3){const b=c.getX(I),D=c.getX(I+1),k=c.getX(I+2);a=Pl(this,m,e,r,h,g,v,b,D,k),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let x=E,m=M;x<m;x+=3){const A=c.getX(x),P=c.getX(x+1),I=c.getX(x+2);a=Pl(this,d,e,r,h,g,v,A,P,I),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(d))for(let E=0,M=y.length;E<M;E++){const x=y[E],m=d[x.materialIndex],A=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let I=A,L=P;I<L;I+=3){const b=I,D=I+1,k=I+2;a=Pl(this,m,e,r,h,g,v,b,D,k),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let x=E,m=M;x<m;x+=3){const A=x,P=x+1,I=x+2;a=Pl(this,d,e,r,h,g,v,A,P,I),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function rE(s,e,t,r,a,l,d,c){let f;if(e.side===kn?f=r.intersectTriangle(d,l,a,!0,c):f=r.intersectTriangle(a,l,d,e.side===Rr,c),f===null)return null;bl.copy(c),bl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(bl);return h<t.near||h>t.far?null:{distance:h,point:bl.clone(),object:s}}function Pl(s,e,t,r,a,l,d,c,f,h){s.getVertexPosition(c,wl),s.getVertexPosition(f,Al),s.getVertexPosition(h,Cl);const g=rE(s,e,t,r,wl,Al,Cl,Sg);if(g){const v=new Z;mi.getBarycoord(Sg,wl,Al,Cl,v),a&&(g.uv=mi.getInterpolatedAttribute(a,c,f,h,v,new at)),l&&(g.uv1=mi.getInterpolatedAttribute(l,c,f,h,v,new at)),d&&(g.normal=mi.getInterpolatedAttribute(d,c,f,h,v,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:c,b:f,c:h,normal:new Z,materialIndex:0};mi.getNormal(wl,Al,Cl,y.normal),g.face=y,g.barycoord=v}return g}class ra extends qn{constructor(e=1,t=1,r=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:d};const c=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const f=[],h=[],g=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,r,t,e,d,l,0),E("z","y","x",1,-1,r,t,-e,d,l,1),E("x","z","y",1,1,e,r,t,a,d,2),E("x","z","y",1,-1,e,r,-t,a,d,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(v,2));function E(M,x,m,A,P,I,L,b,D,k,C){const T=I/D,F=L/k,W=I/2,z=L/2,oe=b/2,J=D+1,se=k+1;let ce=0,V=0;const ae=new Z;for(let le=0;le<se;le++){const B=le*F-z;for(let re=0;re<J;re++){const Pe=re*T-W;ae[M]=Pe*A,ae[x]=B*P,ae[m]=oe,h.push(ae.x,ae.y,ae.z),ae[M]=0,ae[x]=0,ae[m]=b>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(re/D),v.push(1-le/k),ce+=1}}for(let le=0;le<k;le++)for(let B=0;B<D;B++){const re=y+B+J*le,Pe=y+B+J*(le+1),ee=y+(B+1)+J*(le+1),fe=y+(B+1)+J*le;f.push(re,Pe,fe),f.push(Pe,ee,fe),V+=6}c.addGroup(S,V,C),S+=V,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Rn(s){const e={};for(let t=0;t<s.length;t++){const r=ro(s[t]);for(const a in r)e[a]=r[a]}return e}function sE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function k_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const oE={clone:ro,merge:Rn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=sE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?t.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[a]={type:"m4",value:d.toArray()}:t.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class B_ extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new Z,Eg=new at,Mg=new at;class ii extends B_{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Eg,Mg),t.subVectors(Mg,Eg)}setViewOffset(e,t,r,a,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const f=d.fullWidth,h=d.fullHeight;l+=d.offsetX*a/f,t-=d.offsetY*r/h,a*=d.width/f,r*=d.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Hs=1;class uE extends Jt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(zs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new ii(zs,Hs,e,t);l.layers=this.layers,this.add(l);const d=new ii(zs,Hs,e,t);d.layers=this.layers,this.add(d);const c=new ii(zs,Hs,e,t);c.layers=this.layers,this.add(c);const f=new ii(zs,Hs,e,t);f.layers=this.layers,this.add(f);const h=new ii(zs,Hs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,d,c,f]=t;for(const h of t)this.remove(h);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Zl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,c,f,h,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,d),e.setRenderTarget(r,2,a),e.render(t,c),e.setRenderTarget(r,3,a),e.render(t,f),e.setRenderTarget(r,4,a),e.render(t,h),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class z_ extends Bn{constructor(e,t,r,a,l,d,c,f,h,g){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,r,a,l,d,c,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cE extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new z_(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ra(5,5,5),l=new Pr({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ar});l.uniforms.tEquirect.value=t;const d=new Fn(a,l),c=t.minFilter;return t.minFilter===ts&&(t.minFilter=wi),new uE(1,10,this).update(e,d),t.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,a);e.setRenderTarget(l)}}class fE extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Df=new Z,dE=new Z,hE=new lt;class Er{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Df.subVectors(r,t).cross(dE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Df),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||hE.getNormalMatrix(e),a=this.coplanarPoint(Df).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new au,Nl=new Z;class Kd{constructor(e=new Er,t=new Er,r=new Er,a=new Er,l=new Er,d=new Er){this.planes=[e,t,r,a,l,d]}set(e,t,r,a,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi){const r=this.planes,a=e.elements,l=a[0],d=a[1],c=a[2],f=a[3],h=a[4],g=a[5],v=a[6],y=a[7],S=a[8],E=a[9],M=a[10],x=a[11],m=a[12],A=a[13],P=a[14],I=a[15];if(r[0].setComponents(f-l,y-h,x-S,I-m).normalize(),r[1].setComponents(f+l,y+h,x+S,I+m).normalize(),r[2].setComponents(f+d,y+g,x+E,I+A).normalize(),r[3].setComponents(f-d,y-g,x-E,I-A).normalize(),r[4].setComponents(f-c,y-v,x-M,I-P).normalize(),t===Xi)r[5].setComponents(f+c,y+v,x+M,I+P).normalize();else if(t===Zl)r[5].setComponents(c,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Nl.x=a.normal.x>0?e.max.x:e.min.x,Nl.y=a.normal.y>0?e.max.y:e.min.y,Nl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H_ extends oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jl=new Z,eu=new Z,Tg=new It,Xo=new lu,Ll=new au,Uf=new Z,wg=new Z;class pE extends Jt{constructor(e=new qn,t=new H_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Jl.fromBufferAttribute(t,a-1),eu.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Jl.distanceTo(eu);e.setAttribute("lineDistance",new Hn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(a),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;Tg.copy(a).invert(),Xo.copy(e.ray).applyMatrix4(Tg);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const S=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let M=S,x=E-1;M<x;M+=h){const m=g.getX(M),A=g.getX(M+1),P=Il(this,e,Xo,f,m,A);P&&t.push(P)}if(this.isLineLoop){const M=g.getX(E-1),x=g.getX(S),m=Il(this,e,Xo,f,M,x);m&&t.push(m)}}else{const S=Math.max(0,d.start),E=Math.min(y.count,d.start+d.count);for(let M=S,x=E-1;M<x;M+=h){const m=Il(this,e,Xo,f,M,M+1);m&&t.push(m)}if(this.isLineLoop){const M=Il(this,e,Xo,f,E-1,S);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Il(s,e,t,r,a,l){const d=s.geometry.attributes.position;if(Jl.fromBufferAttribute(d,a),eu.fromBufferAttribute(d,l),t.distanceSqToSegment(Jl,eu,Uf,wg)>r)return;Uf.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Uf);if(!(f<e.near||f>e.far))return{distance:f,point:wg.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Ag=new Z,Cg=new Z;class mE extends pE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Ag.fromBufferAttribute(t,a),Cg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Ag.distanceTo(Cg);e.setAttribute("lineDistance",new Hn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dl extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class V_ extends Bn{constructor(e,t,r,a,l,d,c,f,h,g=Ks){if(g!==Ks&&g!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ks&&(r=ns),r===void 0&&g===no&&(r=to),super(null,a,l,d,c,f,g,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:_i,this.minFilter=f!==void 0?f:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cu extends qn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,d=t/2,c=Math.floor(r),f=Math.floor(a),h=c+1,g=f+1,v=e/c,y=t/f,S=[],E=[],M=[],x=[];for(let m=0;m<g;m++){const A=m*y-d;for(let P=0;P<h;P++){const I=P*v-l;E.push(I,-A,0),M.push(0,0,1),x.push(P/c),x.push(1-m/f)}}for(let m=0;m<f;m++)for(let A=0;A<c;A++){const P=A+h*m,I=A+h*(m+1),L=A+1+h*(m+1),b=A+1+h*m;S.push(P,I,b),S.push(I,L,b)}this.setIndex(S),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(M,3)),this.setAttribute("uv",new Hn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class tu extends qn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,d=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:d,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(d+c,Math.PI);let h=0;const g=[],v=new Z,y=new Z,S=[],E=[],M=[],x=[];for(let m=0;m<=r;m++){const A=[],P=m/r;let I=0;m===0&&d===0?I=.5/t:m===r&&f===Math.PI&&(I=-.5/t);for(let L=0;L<=t;L++){const b=L/t;v.x=-e*Math.cos(a+b*l)*Math.sin(d+P*c),v.y=e*Math.cos(d+P*c),v.z=e*Math.sin(a+b*l)*Math.sin(d+P*c),E.push(v.x,v.y,v.z),y.copy(v).normalize(),M.push(y.x,y.y,y.z),x.push(b+I,1-P),A.push(h++)}g.push(A)}for(let m=0;m<r;m++)for(let A=0;A<t;A++){const P=g[m][A+1],I=g[m][A],L=g[m+1][A],b=g[m+1][A+1];(m!==0||d>0)&&S.push(P,I,b),(m!==r-1||f<Math.PI)&&S.push(I,L,b)}this.setIndex(S),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(M,3)),this.setAttribute("uv",new Hn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Of extends oo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=P_,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gE extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _E extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class G_ extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vE extends G_{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ff=new It,Rg=new Z,bg=new Z;class yE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rg),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),Ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class W_ extends B_{constructor(e=-1,t=1,r=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,d=r+e,c=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,d=l+h*this.view.width,c-=g*this.view.offsetY,f=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xE extends yE{constructor(){super(new W_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SE extends G_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new xE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EE extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Pg=new It;class ME{constructor(e,t,r=0,a=1/0){this.ray=new lu(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new $d,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pg),this}intersectObject(e,t=!0,r=[]){return Dd(e,this,r,t),r.sort(Ng),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Dd(e[a],this,r,t);return r.sort(Ng),r}}function Ng(s,e){return s.distance-e.distance}function Dd(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let d=0,c=l.length;d<c;d++)Dd(l[d],e,t,!0)}}class Lg{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TE extends mE{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new qn;a.setAttribute("position",new Hn(t,3)),a.setAttribute("color",new Hn(r,3));const l=new H_({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,r){const a=new yt,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(r),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wE extends rs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ig(s,e,t,r){const a=AE(r);switch(t){case M_:return s*e;case w_:return s*e;case A_:return s*e*2;case C_:return s*e/a.components*a.byteLength;case Xd:return s*e/a.components*a.byteLength;case R_:return s*e*2/a.components*a.byteLength;case Yd:return s*e*2/a.components*a.byteLength;case T_:return s*e*3/a.components*a.byteLength;case gi:return s*e*4/a.components*a.byteLength;case jd:return s*e*4/a.components*a.byteLength;case Hl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:case fd:return Math.max(s,16)*Math.max(e,8)/4;case ld:case cd:return Math.max(s,8)*Math.max(e,8)/2;case dd:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xl:case bd:case Pd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case b_:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ld:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AE(s){switch(s){case ji:case x_:return{byteLength:1,components:1};case ea:case S_:case na:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case ns:case Vd:case Wi:return{byteLength:4,components:1};case E_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X_(){let s=null,e=!1,t=null,r=null;function a(l,d){t(l,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function CE(s){const e=new WeakMap;function t(c,f){const h=c.array,g=c.usage,v=h.byteLength,y=s.createBuffer();s.bindBuffer(f,y),s.bufferData(f,h,g),c.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function r(c,f,h){const g=f.array,v=f.updateRanges;if(s.bindBuffer(h,c),v.length===0)s.bufferSubData(h,0,g);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],M=v[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++y,v[y]=M)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const M=v[S];s.bufferSubData(h,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(s.deleteBuffer(f.buffer),e.delete(c))}function d(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=e.get(c);(!g||g.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,f),h.version=c.version}}return{get:a,remove:l,update:d}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ST=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:RE,alphahash_pars_fragment:bE,alphamap_fragment:PE,alphamap_pars_fragment:NE,alphatest_fragment:LE,alphatest_pars_fragment:IE,aomap_fragment:DE,aomap_pars_fragment:UE,batching_pars_vertex:OE,batching_vertex:FE,begin_vertex:kE,beginnormal_vertex:BE,bsdfs:zE,iridescence_fragment:HE,bumpmap_pars_fragment:VE,clipping_planes_fragment:GE,clipping_planes_pars_fragment:WE,clipping_planes_pars_vertex:XE,clipping_planes_vertex:YE,color_fragment:jE,color_pars_fragment:qE,color_pars_vertex:$E,color_vertex:KE,common:ZE,cube_uv_reflection_fragment:QE,defaultnormal_vertex:JE,displacementmap_pars_vertex:eM,displacementmap_vertex:tM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:rM,colorspace_pars_fragment:sM,envmap_fragment:oM,envmap_common_pars_fragment:aM,envmap_pars_fragment:lM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:xM,envmap_vertex:cM,fog_vertex:fM,fog_pars_vertex:dM,fog_fragment:hM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:_M,lights_lambert_pars_fragment:vM,lights_pars_begin:yM,lights_toon_fragment:SM,lights_toon_pars_fragment:EM,lights_phong_fragment:MM,lights_phong_pars_fragment:TM,lights_physical_fragment:wM,lights_physical_pars_fragment:AM,lights_fragment_begin:CM,lights_fragment_maps:RM,lights_fragment_end:bM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:IM,map_fragment:DM,map_pars_fragment:UM,map_particle_fragment:OM,map_particle_pars_fragment:FM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:BM,morphinstance_vertex:zM,morphcolor_vertex:HM,morphnormal_vertex:VM,morphtarget_pars_vertex:GM,morphtarget_vertex:WM,normal_fragment_begin:XM,normal_fragment_maps:YM,normal_pars_fragment:jM,normal_pars_vertex:qM,normal_vertex:$M,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:ZM,clearcoat_normal_fragment_maps:QM,clearcoat_pars_fragment:JM,iridescence_pars_fragment:eT,opaque_fragment:tT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:rT,dithering_fragment:sT,dithering_pars_fragment:oT,roughnessmap_fragment:aT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:cT,shadowmap_vertex:fT,shadowmask_pars_fragment:dT,skinbase_vertex:hT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:vT,tonemapping_fragment:yT,tonemapping_pars_fragment:xT,transmission_fragment:ST,transmission_pars_fragment:ET,uv_pars_fragment:MT,uv_pars_vertex:TT,uv_vertex:wT,worldpos_vertex:AT,background_vert:CT,background_frag:RT,backgroundCube_vert:bT,backgroundCube_frag:PT,cube_vert:NT,cube_frag:LT,depth_vert:IT,depth_frag:DT,distanceRGBA_vert:UT,distanceRGBA_frag:OT,equirect_vert:FT,equirect_frag:kT,linedashed_vert:BT,linedashed_frag:zT,meshbasic_vert:HT,meshbasic_frag:VT,meshlambert_vert:GT,meshlambert_frag:WT,meshmatcap_vert:XT,meshmatcap_frag:YT,meshnormal_vert:jT,meshnormal_frag:qT,meshphong_vert:$T,meshphong_frag:KT,meshphysical_vert:ZT,meshphysical_frag:QT,meshtoon_vert:JT,meshtoon_frag:ew,points_vert:tw,points_frag:nw,shadow_vert:iw,shadow_frag:rw,sprite_vert:sw,sprite_frag:ow},Re={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Rn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Rn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Rn([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Rn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Rn([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Rn([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Rn([Re.common,Re.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Rn([Re.lights,Re.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ul={r:0,b:0,g:0},$r=new Ai,aw=new It;function lw(s,e,t,r,a,l,d){const c=new yt(0);let f=l===!0?0:1,h,g,v=null,y=0,S=null;function E(P){let I=P.isScene===!0?P.background:null;return I&&I.isTexture&&(I=(P.backgroundBlurriness>0?t:e).get(I)),I}function M(P){let I=!1;const L=E(P);L===null?m(c,f):L&&L.isColor&&(m(L,1),I=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?r.buffers.color.setClear(0,0,0,1,d):b==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,I){const L=E(I);L&&(L.isCubeTexture||L.mapping===ou)?(g===void 0&&(g=new Fn(new ra(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:ro(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(b,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),$r.copy(I.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(aw.makeRotationFromEuler($r)),g.material.toneMapped=At.getTransfer(L.colorSpace)!==Pt,(v!==L||y!==L.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=L,y=L.version,S=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Fn(new cu(2,2),new Pr({name:"BackgroundMaterial",uniforms:ro(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=At.getTransfer(L.colorSpace)!==Pt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||y!==L.version||S!==s.toneMapping)&&(h.material.needsUpdate=!0,v=L,y=L.version,S=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function m(P,I){P.getRGB(Ul,k_(s)),r.buffers.color.setClear(Ul.r,Ul.g,Ul.b,I,d)}function A(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(P,I=1){c.set(P),f=I,m(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,m(c,f)},render:M,addToRenderList:x,dispose:A}}function uw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,d=!1;function c(T,F,W,z,oe){let J=!1;const se=v(z,W,F);l!==se&&(l=se,h(l.object)),J=S(T,z,W,oe),J&&E(T,z,W,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(J||d)&&(d=!1,I(T,F,W,z),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function f(){return s.createVertexArray()}function h(T){return s.bindVertexArray(T)}function g(T){return s.deleteVertexArray(T)}function v(T,F,W){const z=W.wireframe===!0;let oe=r[T.id];oe===void 0&&(oe={},r[T.id]=oe);let J=oe[F.id];J===void 0&&(J={},oe[F.id]=J);let se=J[z];return se===void 0&&(se=y(f()),J[z]=se),se}function y(T){const F=[],W=[],z=[];for(let oe=0;oe<t;oe++)F[oe]=0,W[oe]=0,z[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:z,object:T,attributes:{},index:null}}function S(T,F,W,z){const oe=l.attributes,J=F.attributes;let se=0;const ce=W.getAttributes();for(const V in ce)if(ce[V].location>=0){const le=oe[V];let B=J[V];if(B===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(B=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(B=T.instanceColor)),le===void 0||le.attribute!==B||B&&le.data!==B.data)return!0;se++}return l.attributesNum!==se||l.index!==z}function E(T,F,W,z){const oe={},J=F.attributes;let se=0;const ce=W.getAttributes();for(const V in ce)if(ce[V].location>=0){let le=J[V];le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));const B={};B.attribute=le,le&&le.data&&(B.data=le.data),oe[V]=B,se++}l.attributes=oe,l.attributesNum=se,l.index=z}function M(){const T=l.newAttributes;for(let F=0,W=T.length;F<W;F++)T[F]=0}function x(T){m(T,0)}function m(T,F){const W=l.newAttributes,z=l.enabledAttributes,oe=l.attributeDivisors;W[T]=1,z[T]===0&&(s.enableVertexAttribArray(T),z[T]=1),oe[T]!==F&&(s.vertexAttribDivisor(T,F),oe[T]=F)}function A(){const T=l.newAttributes,F=l.enabledAttributes;for(let W=0,z=F.length;W<z;W++)F[W]!==T[W]&&(s.disableVertexAttribArray(W),F[W]=0)}function P(T,F,W,z,oe,J,se){se===!0?s.vertexAttribIPointer(T,F,W,oe,J):s.vertexAttribPointer(T,F,W,z,oe,J)}function I(T,F,W,z){M();const oe=z.attributes,J=W.getAttributes(),se=F.defaultAttributeValues;for(const ce in J){const V=J[ce];if(V.location>=0){let ae=oe[ce];if(ae===void 0&&(ce==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),ce==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor)),ae!==void 0){const le=ae.normalized,B=ae.itemSize,re=e.get(ae);if(re===void 0)continue;const Pe=re.buffer,ee=re.type,fe=re.bytesPerElement,ye=ee===s.INT||ee===s.UNSIGNED_INT||ae.gpuType===Vd;if(ae.isInterleavedBufferAttribute){const ge=ae.data,Te=ge.stride,be=ae.offset;if(ge.isInstancedInterleavedBuffer){for(let $e=0;$e<V.locationSize;$e++)m(V.location+$e,ge.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let $e=0;$e<V.locationSize;$e++)x(V.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let $e=0;$e<V.locationSize;$e++)P(V.location+$e,B/V.locationSize,ee,le,Te*fe,(be+B/V.locationSize*$e)*fe,ye)}else{if(ae.isInstancedBufferAttribute){for(let ge=0;ge<V.locationSize;ge++)m(V.location+ge,ae.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ge=0;ge<V.locationSize;ge++)x(V.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ge=0;ge<V.locationSize;ge++)P(V.location+ge,B/V.locationSize,ee,le,B*fe,B/V.locationSize*ge*fe,ye)}}else if(se!==void 0){const le=se[ce];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(V.location,le);break;case 3:s.vertexAttrib3fv(V.location,le);break;case 4:s.vertexAttrib4fv(V.location,le);break;default:s.vertexAttrib1fv(V.location,le)}}}}A()}function L(){k();for(const T in r){const F=r[T];for(const W in F){const z=F[W];for(const oe in z)g(z[oe].object),delete z[oe];delete F[W]}delete r[T]}}function b(T){if(r[T.id]===void 0)return;const F=r[T.id];for(const W in F){const z=F[W];for(const oe in z)g(z[oe].object),delete z[oe];delete F[W]}delete r[T.id]}function D(T){for(const F in r){const W=r[F];if(W[T.id]===void 0)continue;const z=W[T.id];for(const oe in z)g(z[oe].object),delete z[oe];delete W[T.id]}}function k(){C(),d=!0,l!==a&&(l=a,h(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:k,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:x,disableUnusedAttributes:A}}function cw(s,e,t){let r;function a(h){r=h}function l(h,g){s.drawArrays(r,h,g),t.update(g,r,1)}function d(h,g,v){v!==0&&(s.drawArraysInstanced(r,h,g,v),t.update(g,r,v))}function c(h,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];t.update(S,r,1)}function f(h,g,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)d(h[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,g,0,y,0,v);let E=0;for(let M=0;M<v;M++)E+=g[M]*y[M];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function fw(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(D){return!(D!==gi&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const k=D===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ji&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Wi&&!k)}function f(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=f(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:d,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:I,vertexTextures:L,maxSamples:b}}function dw(s){const e=this;let t=null,r=0,a=!1,l=!1;const d=new Er,c=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||a;return a=y,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=g(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,M=v.clipIntersection,x=v.clipShadows,m=s.get(v);if(!a||E===null||E.length===0||l&&!x)l?g(null):h();else{const A=l?0:r,P=A*4;let I=m.clippingState||null;f.value=I,I=g(E,y,P,S);for(let L=0;L!==P;++L)I[L]=t[L];m.clippingState=I,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,S,E){const M=v!==null?v.length:0;let x=null;if(M!==0){if(x=f.value,E!==!0||x===null){const m=S+M*4,A=y.matrixWorldInverse;c.getNormalMatrix(A),(x===null||x.length<m)&&(x=new Float32Array(m));for(let P=0,I=S;P!==M;++P,I+=4)d.copy(v[P]).applyMatrix4(A,c),d.normal.toArray(x,I),x[I+3]=d.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function hw(s){let e=new WeakMap;function t(d,c){return c===rd?d.mapping=Js:c===sd&&(d.mapping=eo),d}function r(d){if(d&&d.isTexture){const c=d.mapping;if(c===rd||c===sd)if(e.has(d)){const f=e.get(d).texture;return t(f,d.mapping)}else{const f=d.image;if(f&&f.height>0){const h=new cE(f.height);return h.fromEquirectangularTexture(s,d),e.set(d,h),d.addEventListener("dispose",a),t(h.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ys=4,Dg=[.125,.215,.35,.446,.526,.582],Jr=20,kf=new W_,Ug=new yt;let Bf=null,zf=0,Hf=0,Vf=!1;const Zr=(1+Math.sqrt(5))/2,Vs=1/Zr,Og=[new Z(-Zr,Vs,0),new Z(Zr,Vs,0),new Z(-Vs,0,Zr),new Z(Vs,0,Zr),new Z(0,Zr,-Vs),new Z(0,Zr,Vs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,zf,Hf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:na,format:gi,colorSpace:io,depthBuffer:!1},a=kg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pw(l)),this._blurMaterial=mw(l,e,t)}return a}_compileMaterial(e){const t=new Fn(this._lodPlanes[0],e);this._renderer.compile(t,kf)}_sceneToCubeUV(e,t,r,a){const c=new ii(90,1,t,r),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Ug),g.toneMapping=Cr,g.autoClear=!1;const S=new uu({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new Fn(new ra,S);let M=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,M=!0):(S.color.copy(Ug),M=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(c.up.set(0,f[m],0),c.lookAt(h[m],0,0)):A===1?(c.up.set(0,0,f[m]),c.lookAt(0,h[m],0)):(c.up.set(0,f[m],0),c.lookAt(0,0,h[m]));const P=this._cubeSize;Ol(a,A*P,m>2?P:0,P,P),g.setRenderTarget(a),M&&g.render(E,c),g.render(e,c)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Js||e.mapping===eo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new Fn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const f=this._cubeSize;Ol(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(d,kf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const d=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=Og[(a-l-1)%Og.length];this._blur(e,l-1,l,d,c)}t.autoClear=r}_blur(e,t,r,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,a,"latitudinal",l),this._halfBlur(d,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,d,c){const f=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Fn(this._lodPlanes[a],h),y=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),M=l/E,x=isFinite(l)?1+Math.floor(g*M):Jr;x>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Jr}`);const m=[];let A=0;for(let D=0;D<Jr;++D){const k=D/M,C=Math.exp(-k*k/2);m.push(C),D===0?A+=C:D<x&&(A+=2*C)}for(let D=0;D<m.length;D++)m[D]=m[D]/A;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=m,y.latitudinal.value=d==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-r;const I=this._sizeLods[a],L=3*I*(a>P-Ys?a-P+Ys:0),b=4*(this._cubeSize-I);Ol(t,L,b,3*I,2*I),f.setRenderTarget(t),f.render(v,kf)}}function pw(s){const e=[],t=[],r=[];let a=s;const l=s-Ys+1+Dg.length;for(let d=0;d<l;d++){const c=Math.pow(2,a);t.push(c);let f=1/c;d>s-Ys?f=Dg[d-s+Ys-1]:d===0&&(f=0),r.push(f);const h=1/(c-2),g=-h,v=1+h,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,M=3,x=2,m=1,A=new Float32Array(M*E*S),P=new Float32Array(x*E*S),I=new Float32Array(m*E*S);for(let b=0;b<S;b++){const D=b%3*2/3-1,k=b>2?0:-1,C=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];A.set(C,M*E*b),P.set(y,x*E*b);const T=[b,b,b,b,b,b];I.set(T,m*E*b)}const L=new qn;L.setAttribute("position",new zn(A,M)),L.setAttribute("uv",new zn(P,x)),L.setAttribute("faceIndex",new zn(I,m)),e.push(L),a>Ys&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function kg(s,e,t){const r=new is(s,e,t);return r.texture.mapping=ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ol(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function mw(s,e,t){const r=new Float32Array(Jr),a=new Z(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Bg(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function zg(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gw(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const f=c.mapping,h=f===rd||f===sd,g=f===Js||f===eo;if(h||g){let v=e.get(c);const y=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==y)return t===null&&(t=new Fg(s)),v=h?t.fromEquirectangular(c,v):t.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),v.texture;if(v!==void 0)return v.texture;{const S=c.image;return h&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new Fg(s)),v=h?t.fromEquirectangular(c):t.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),c.addEventListener("dispose",l),v.texture):null}}}return c}function a(c){let f=0;const h=6;for(let g=0;g<h;g++)c[g]!==void 0&&f++;return f===h}function l(c){const f=c.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function _w(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ws("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function vw(s,e,t,r){const a={},l=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",d),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function c(v,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,t.memory.geometries++),y}function f(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function h(v){const y=[],S=v.index,E=v.attributes.position;let M=0;if(S!==null){const A=S.array;M=S.version;for(let P=0,I=A.length;P<I;P+=3){const L=A[P+0],b=A[P+1],D=A[P+2];y.push(L,b,b,D,D,L)}}else if(E!==void 0){const A=E.array;M=E.version;for(let P=0,I=A.length/3-1;P<I;P+=3){const L=P+0,b=P+1,D=P+2;y.push(L,b,b,D,D,L)}}else return;const x=new(L_(y)?F_:O_)(y,1);x.version=M;const m=l.get(v);m&&e.remove(m),l.set(v,x)}function g(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&h(v)}else h(v);return l.get(v)}return{get:c,update:f,getWireframeAttribute:g}}function yw(s,e,t){let r;function a(y){r=y}let l,d;function c(y){l=y.type,d=y.bytesPerElement}function f(y,S){s.drawElements(r,S,l,y*d),t.update(S,r,1)}function h(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,y*d,E),t.update(S,r,E))}function g(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,E);let x=0;for(let m=0;m<E;m++)x+=S[m];t.update(x,r,1)}function v(y,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<y.length;m++)h(y[m]/d,S[m],M[m]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,M,0,E);let m=0;for(let A=0;A<E;A++)m+=S[A]*M[A];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function xw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,c){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function Sw(s,e,t){const r=new WeakMap,a=new Xt;function l(d,c,f){const h=d.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(c);if(y===void 0||y.count!==v){let T=function(){k.dispose(),r.delete(c),c.removeEventListener("dispose",T)};var S=T;y!==void 0&&y.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let I=0;E===!0&&(I=1),M===!0&&(I=2),x===!0&&(I=3);let L=c.attributes.position.count*I,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*b*4*v),k=new D_(D,L,b,v);k.type=Wi,k.needsUpdate=!0;const C=I*4;for(let F=0;F<v;F++){const W=m[F],z=A[F],oe=P[F],J=L*b*4*F;for(let se=0;se<W.count;se++){const ce=se*C;E===!0&&(a.fromBufferAttribute(W,se),D[J+ce+0]=a.x,D[J+ce+1]=a.y,D[J+ce+2]=a.z,D[J+ce+3]=0),M===!0&&(a.fromBufferAttribute(z,se),D[J+ce+4]=a.x,D[J+ce+5]=a.y,D[J+ce+6]=a.z,D[J+ce+7]=0),x===!0&&(a.fromBufferAttribute(oe,se),D[J+ce+8]=a.x,D[J+ce+9]=a.y,D[J+ce+10]=a.z,D[J+ce+11]=oe.itemSize===4?a.w:1)}}y={count:v,texture:k,size:new at(L,b)},r.set(c,y),c.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let E=0;for(let x=0;x<h.length;x++)E+=h[x];const M=c.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function Ew(s,e,t,r){let a=new WeakMap;function l(f){const h=r.render.frame,g=f.geometry,v=e.get(f,g);if(a.get(v)!==h&&(e.update(v),a.set(v,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),a.get(f)!==h&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,h))),f.isSkinnedMesh){const y=f.skeleton;a.get(y)!==h&&(y.update(),a.set(y,h))}return v}function d(){a=new WeakMap}function c(f){const h=f.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:d}}const Y_=new Bn,Hg=new V_(1,1),j_=new D_,q_=new qS,$_=new z_,Vg=[],Gg=[],Wg=new Float32Array(16),Xg=new Float32Array(9),Yg=new Float32Array(4);function ao(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Vg[a];if(l===void 0&&(l=new Float32Array(a),Vg[a]=l),e!==0){r.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=t,s[d].toArray(l,c)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function fu(s,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Mw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function Aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function Cw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Yg.set(r),s.uniformMatrix2fv(this.addr,!1,Yg),tn(t,r)}}function Rw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Xg.set(r),s.uniformMatrix3fv(this.addr,!1,Xg),tn(t,r)}}function bw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Wg.set(r),s.uniformMatrix4fv(this.addr,!1,Wg),tn(t,r)}}function Pw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function Lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function Iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function Dw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function Ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function Fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function kw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Hg.compareFunction=N_,l=Hg):l=Y_,t.setTexture2D(e||l,a)}function Bw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||q_,a)}function zw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||$_,a)}function Hw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||j_,a)}function Vw(s){switch(s){case 5126:return Mw;case 35664:return Tw;case 35665:return ww;case 35666:return Aw;case 35674:return Cw;case 35675:return Rw;case 35676:return bw;case 5124:case 35670:return Pw;case 35667:case 35671:return Nw;case 35668:case 35672:return Lw;case 35669:case 35673:return Iw;case 5125:return Dw;case 36294:return Uw;case 36295:return Ow;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return Bw;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Hw}}function Gw(s,e){s.uniform1fv(this.addr,e)}function Ww(s,e){const t=ao(e,this.size,2);s.uniform2fv(this.addr,t)}function Xw(s,e){const t=ao(e,this.size,3);s.uniform3fv(this.addr,t)}function Yw(s,e){const t=ao(e,this.size,4);s.uniform4fv(this.addr,t)}function jw(s,e){const t=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qw(s,e){const t=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $w(s,e){const t=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Kw(s,e){s.uniform1iv(this.addr,e)}function Zw(s,e){s.uniform2iv(this.addr,e)}function Qw(s,e){s.uniform3iv(this.addr,e)}function Jw(s,e){s.uniform4iv(this.addr,e)}function e1(s,e){s.uniform1uiv(this.addr,e)}function t1(s,e){s.uniform2uiv(this.addr,e)}function n1(s,e){s.uniform3uiv(this.addr,e)}function i1(s,e){s.uniform4uiv(this.addr,e)}function r1(s,e,t){const r=this.cache,a=e.length,l=fu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)t.setTexture2D(e[d]||Y_,l[d])}function s1(s,e,t){const r=this.cache,a=e.length,l=fu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)t.setTexture3D(e[d]||q_,l[d])}function o1(s,e,t){const r=this.cache,a=e.length,l=fu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)t.setTextureCube(e[d]||$_,l[d])}function a1(s,e,t){const r=this.cache,a=e.length,l=fu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)t.setTexture2DArray(e[d]||j_,l[d])}function l1(s){switch(s){case 5126:return Gw;case 35664:return Ww;case 35665:return Xw;case 35666:return Yw;case 35674:return jw;case 35675:return qw;case 35676:return $w;case 5124:case 35670:return Kw;case 35667:case 35671:return Zw;case 35668:case 35672:return Qw;case 35669:case 35673:return Jw;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}class u1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Vw(t.type)}}class c1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l1(t.type)}}class f1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function jg(s,e){s.seq.push(e),s.map[e.id]=e}function d1(s,e,t){const r=s.name,a=r.length;for(Gf.lastIndex=0;;){const l=Gf.exec(r),d=Gf.lastIndex;let c=l[1];const f=l[2]==="]",h=l[3];if(f&&(c=c|0),h===void 0||h==="["&&d+2===a){jg(t,h===void 0?new u1(c,s,e):new c1(c,s,e));break}else{let v=t.map[c];v===void 0&&(v=new f1(c),jg(t,v)),t=v}}}class Yl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),d=e.getUniformLocation(t,l.name);d1(l,d,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,d=t.length;l!==d;++l){const c=t[l],f=r[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in t&&r.push(d)}return r}}function qg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const h1=37297;let p1=0;function m1(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=a;d<l;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${t[d]}`)}return r.join(`
`)}const $g=new lt;function g1(s){At._getMatrix($g,At.workingColorSpace,s);const e=`mat3( ${$g.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Kg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+m1(s.getShaderSource(e),d)}else return a}function _1(s,e){const t=g1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function v1(s,e){let t;switch(e){case rS:t="Linear";break;case sS:t="Reinhard";break;case oS:t="Cineon";break;case aS:t="ACESFilmic";break;case uS:t="AgX";break;case cS:t="Neutral";break;case lS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fl=new Z;function y1(){At.getLuminanceCoefficients(Fl);const s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function S1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function E1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),d=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:c}}return t}function qo(s){return s!==""}function Zg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(s){return s.replace(M1,w1)}const T1=new Map;function w1(s,e){let t=ut[e];if(t===void 0){const r=T1.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ud(t)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(s){return s.replace(A1,C1)}function C1(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function e_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function N1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case nS:e="ENVMAP_BLENDING_MIX";break;case iS:e="ENVMAP_BLENDING_ADD";break}return e}function L1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function I1(s,e,t,r){const a=s.getContext(),l=t.defines;let d=t.vertexShader,c=t.fragmentShader;const f=R1(t),h=b1(t),g=P1(t),v=N1(t),y=L1(t),S=x1(t),E=S1(l),M=a.createProgram();let x,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(qo).join(`
`),m.length>0&&(m+=`
`)):(x=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),m=[e_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Cr?v1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,_1("linearToOutputTexel",t.outputColorSpace),y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),d=Ud(d),d=Zg(d,t),d=Qg(d,t),c=Ud(c),c=Zg(c,t),c=Qg(c,t),d=Jg(d),c=Jg(c),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=A+x+d,I=A+m+c,L=qg(a,a.VERTEX_SHADER,P),b=qg(a,a.FRAGMENT_SHADER,I);a.attachShader(M,L),a.attachShader(M,b),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function D(F){if(s.debug.checkShaderErrors){const W=a.getProgramInfoLog(M).trim(),z=a.getShaderInfoLog(L).trim(),oe=a.getShaderInfoLog(b).trim();let J=!0,se=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,M,L,b);else{const ce=Kg(a,L,"vertex"),V=Kg(a,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+ce+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||oe==="")&&(se=!1);se&&(F.diagnostics={runnable:J,programLog:W,vertexShader:{log:z,prefix:x},fragmentShader:{log:oe,prefix:m}})}a.deleteShader(L),a.deleteShader(b),k=new Yl(a,M),C=E1(a,M)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(M,h1)),T},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=b,this}let D1=0;class U1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new O1(e),t.set(e,r)),r}}class O1{constructor(e){this.id=D1++,this.code=e,this.usedTimes=0}}function F1(s,e,t,r,a,l,d){const c=new $d,f=new U1,h=new Set,g=[],v=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,T,F,W,z){const oe=W.fog,J=z.geometry,se=C.isMeshStandardMaterial?W.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),V=ce&&ce.mapping===ou?ce.image.height:null,ae=E[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,B=le!==void 0?le.length:0;let re=0;J.morphAttributes.position!==void 0&&(re=1),J.morphAttributes.normal!==void 0&&(re=2),J.morphAttributes.color!==void 0&&(re=3);let Pe,ee,fe,ye;if(ae){const St=Ti[ae];Pe=St.vertexShader,ee=St.fragmentShader}else Pe=C.vertexShader,ee=C.fragmentShader,f.update(C),fe=f.getVertexShaderID(C),ye=f.getFragmentShaderID(C);const ge=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),be=z.isInstancedMesh===!0,$e=z.isBatchedMesh===!0,Rt=!!C.map,Je=!!C.matcap,Tt=!!ce,G=!!C.aoMap,En=!!C.lightMap,gt=!!C.bumpMap,dt=!!C.normalMap,je=!!C.displacementMap,bt=!!C.emissiveMap,We=!!C.metalnessMap,U=!!C.roughnessMap,R=C.anisotropy>0,te=C.clearcoat>0,pe=C.dispersion>0,_e=C.iridescence>0,de=C.sheen>0,Xe=C.transmission>0,we=R&&!!C.anisotropyMap,Ue=te&&!!C.clearcoatMap,ft=te&&!!C.clearcoatNormalMap,Ee=te&&!!C.clearcoatRoughnessMap,ke=_e&&!!C.iridescenceMap,Ke=_e&&!!C.iridescenceThicknessMap,tt=de&&!!C.sheenColorMap,Be=de&&!!C.sheenRoughnessMap,ht=!!C.specularMap,rt=!!C.specularColorMap,Ct=!!C.specularIntensityMap,Y=Xe&&!!C.transmissionMap,Ae=Xe&&!!C.thicknessMap,ue=!!C.gradientMap,he=!!C.alphaMap,Le=C.alphaTest>0,Ne=!!C.alphaHash,st=!!C.extensions;let Ut=Cr;C.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const $t={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Pe,fragmentShader:ee,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:$e,batchingColor:$e&&z._colorsTexture!==null,instancing:be,instancingColor:be&&z.instanceColor!==null,instancingMorph:be&&z.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:io,alphaToCoverage:!!C.alphaToCoverage,map:Rt,matcap:Je,envMap:Tt,envMapMode:Tt&&ce.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:En,bumpMap:gt,normalMap:dt,displacementMap:y&&je,emissiveMap:bt,normalMapObjectSpace:dt&&C.normalMapType===pS,normalMapTangentSpace:dt&&C.normalMapType===P_,metalnessMap:We,roughnessMap:U,anisotropy:R,anisotropyMap:we,clearcoat:te,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:Ke,sheen:de,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:ht,specularColorMap:rt,specularIntensityMap:Ct,transmission:Xe,transmissionMap:Y,thicknessMap:Ae,gradientMap:ue,opaque:C.transparent===!1&&C.blending===$s&&C.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Ne,combine:C.combine,mapUv:Rt&&M(C.map.channel),aoMapUv:G&&M(C.aoMap.channel),lightMapUv:En&&M(C.lightMap.channel),bumpMapUv:gt&&M(C.bumpMap.channel),normalMapUv:dt&&M(C.normalMap.channel),displacementMapUv:je&&M(C.displacementMap.channel),emissiveMapUv:bt&&M(C.emissiveMap.channel),metalnessMapUv:We&&M(C.metalnessMap.channel),roughnessMapUv:U&&M(C.roughnessMap.channel),anisotropyMapUv:we&&M(C.anisotropyMap.channel),clearcoatMapUv:Ue&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(C.sheenRoughnessMap.channel),specularMapUv:ht&&M(C.specularMap.channel),specularColorMapUv:rt&&M(C.specularColorMap.channel),specularIntensityMapUv:Ct&&M(C.specularIntensityMap.channel),transmissionMapUv:Y&&M(C.transmissionMap.channel),thicknessMapUv:Ae&&M(C.thicknessMap.channel),alphaMapUv:he&&M(C.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(dt||R),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(Rt||he),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Rt&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Pt,decodeVideoTextureEmissive:bt&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Pt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===pi,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:st&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&C.extensions.multiDraw===!0||$e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $t.vertexUv1s=h.has(1),$t.vertexUv2s=h.has(2),$t.vertexUv3s=h.has(3),h.clear(),$t}function m(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)T.push(F),T.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(A(T,C),P(T,C),T.push(s.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function A(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function P(C,T){c.disableAll(),T.supportsVertexTextures&&c.enable(0),T.instancing&&c.enable(1),T.instancingColor&&c.enable(2),T.instancingMorph&&c.enable(3),T.matcap&&c.enable(4),T.envMap&&c.enable(5),T.normalMapObjectSpace&&c.enable(6),T.normalMapTangentSpace&&c.enable(7),T.clearcoat&&c.enable(8),T.iridescence&&c.enable(9),T.alphaTest&&c.enable(10),T.vertexColors&&c.enable(11),T.vertexAlphas&&c.enable(12),T.vertexUv1s&&c.enable(13),T.vertexUv2s&&c.enable(14),T.vertexUv3s&&c.enable(15),T.vertexTangents&&c.enable(16),T.anisotropy&&c.enable(17),T.alphaHash&&c.enable(18),T.batching&&c.enable(19),T.dispersion&&c.enable(20),T.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),T.fog&&c.enable(0),T.useFog&&c.enable(1),T.flatShading&&c.enable(2),T.logarithmicDepthBuffer&&c.enable(3),T.reverseDepthBuffer&&c.enable(4),T.skinning&&c.enable(5),T.morphTargets&&c.enable(6),T.morphNormals&&c.enable(7),T.morphColors&&c.enable(8),T.premultipliedAlpha&&c.enable(9),T.shadowMapEnabled&&c.enable(10),T.doubleSided&&c.enable(11),T.flipSided&&c.enable(12),T.useDepthPacking&&c.enable(13),T.dithering&&c.enable(14),T.transmission&&c.enable(15),T.sheen&&c.enable(16),T.opaque&&c.enable(17),T.pointsUvs&&c.enable(18),T.decodeVideoTexture&&c.enable(19),T.decodeVideoTextureEmissive&&c.enable(20),T.alphaToCoverage&&c.enable(21),C.push(c.mask)}function I(C){const T=E[C.type];let F;if(T){const W=Ti[T];F=oE.clone(W.uniforms)}else F=C.uniforms;return F}function L(C,T){let F;for(let W=0,z=g.length;W<z;W++){const oe=g[W];if(oe.cacheKey===T){F=oe,++F.usedTimes;break}}return F===void 0&&(F=new I1(s,T,C,l),g.push(F)),F}function b(C){if(--C.usedTimes===0){const T=g.indexOf(C);g[T]=g[g.length-1],g.pop(),C.destroy()}}function D(C){f.remove(C)}function k(){f.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:I,acquireProgram:L,releaseProgram:b,releaseShaderCache:D,programs:g,dispose:k}}function k1(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let c=s.get(d);return c===void 0&&(c={},s.set(d,c)),c}function r(d){s.delete(d)}function a(d,c,f){s.get(d)[c]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function B1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function t_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function n_(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function d(v,y,S,E,M,x){let m=s[e];return m===void 0?(m={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:M,group:x},s[e]=m):(m.id=v.id,m.object=v,m.geometry=y,m.material=S,m.groupOrder=E,m.renderOrder=v.renderOrder,m.z=M,m.group=x),e++,m}function c(v,y,S,E,M,x){const m=d(v,y,S,E,M,x);S.transmission>0?r.push(m):S.transparent===!0?a.push(m):t.push(m)}function f(v,y,S,E,M,x){const m=d(v,y,S,E,M,x);S.transmission>0?r.unshift(m):S.transparent===!0?a.unshift(m):t.unshift(m)}function h(v,y){t.length>1&&t.sort(v||B1),r.length>1&&r.sort(y||t_),a.length>1&&a.sort(y||t_)}function g(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:f,finish:g,sort:h}}function z1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let d;return l===void 0?(d=new n_,s.set(r,[d])):a>=l.length?(d=new n_,l.push(d)):d=l[a],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function H1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new yt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function V1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let G1=0;function W1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function X1(s){const e=new H1,t=V1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Z);const a=new Z,l=new It,d=new It;function c(h){let g=0,v=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,E=0,M=0,x=0,m=0,A=0,P=0,I=0,L=0,b=0,D=0;h.sort(W1);for(let C=0,T=h.length;C<T;C++){const F=h[C],W=F.color,z=F.intensity,oe=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=W.r*z,v+=W.g*z,y+=W.b*z;else if(F.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(F.sh.coefficients[se],z);D++}else if(F.isDirectionalLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ce=F.shadow,V=t.get(F);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=F.shadow.matrix,A++}r.directional[S]=se,S++}else if(F.isSpotLight){const se=e.get(F);se.position.setFromMatrixPosition(F.matrixWorld),se.color.copy(W).multiplyScalar(z),se.distance=oe,se.coneCos=Math.cos(F.angle),se.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),se.decay=F.decay,r.spot[M]=se;const ce=F.shadow;if(F.map&&(r.spotLightMap[L]=F.map,L++,ce.updateMatrices(F),F.castShadow&&b++),r.spotLightMatrix[M]=ce.matrix,F.castShadow){const V=t.get(F);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.spotShadow[M]=V,r.spotShadowMap[M]=J,I++}M++}else if(F.isRectAreaLight){const se=e.get(F);se.color.copy(W).multiplyScalar(z),se.halfWidth.set(F.width*.5,0,0),se.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=se,x++}else if(F.isPointLight){const se=e.get(F);if(se.color.copy(F.color).multiplyScalar(F.intensity),se.distance=F.distance,se.decay=F.decay,F.castShadow){const ce=F.shadow,V=t.get(F);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,V.shadowCameraNear=ce.camera.near,V.shadowCameraFar=ce.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=J,r.pointShadowMatrix[E]=F.shadow.matrix,P++}r.point[E]=se,E++}else if(F.isHemisphereLight){const se=e.get(F);se.skyColor.copy(F.color).multiplyScalar(z),se.groundColor.copy(F.groundColor).multiplyScalar(z),r.hemi[m]=se,m++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const k=r.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==x||k.hemiLength!==m||k.numDirectionalShadows!==A||k.numPointShadows!==P||k.numSpotShadows!==I||k.numSpotMaps!==L||k.numLightProbes!==D)&&(r.directional.length=S,r.spot.length=M,r.rectArea.length=x,r.point.length=E,r.hemi.length=m,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=I+L-b,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=D,k.directionalLength=S,k.pointLength=E,k.spotLength=M,k.rectAreaLength=x,k.hemiLength=m,k.numDirectionalShadows=A,k.numPointShadows=P,k.numSpotShadows=I,k.numSpotMaps=L,k.numLightProbes=D,r.version=G1++)}function f(h,g){let v=0,y=0,S=0,E=0,M=0;const x=g.matrixWorldInverse;for(let m=0,A=h.length;m<A;m++){const P=h[m];if(P.isDirectionalLight){const I=r.directional[v];I.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(x),v++}else if(P.isSpotLight){const I=r.spot[S];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(x),I.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const I=r.rectArea[E];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(x),d.identity(),l.copy(P.matrixWorld),l.premultiply(x),d.extractRotation(l),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),E++}else if(P.isPointLight){const I=r.point[y];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const I=r.hemi[M];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(x),M++}}}return{setup:c,setupView:f,state:r}}function i_(s){const e=new X1(s),t=[],r=[];function a(g){h.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function d(g){r.push(g)}function c(){e.setup(t)}function f(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:c,setupLightsView:f,pushLight:l,pushShadow:d}}function Y1(s){let e=new WeakMap;function t(a,l=0){const d=e.get(a);let c;return d===void 0?(c=new i_(s),e.set(a,[c])):l>=d.length?(c=new i_(s),d.push(c)):c=d[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const j1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $1(s,e,t){let r=new Kd;const a=new at,l=new at,d=new Xt,c=new gE({depthPacking:hS}),f=new _E,h={},g=t.maxTextureSize,v={[Rr]:kn,[kn]:Rr,[pi]:pi},y=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:j1,fragmentShader:q1}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Fn(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v_;let m=this.type;this.render=function(b,D,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;const C=s.getRenderTarget(),T=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Ar),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const z=m!==Gi&&this.type===Gi,oe=m===Gi&&this.type!==Gi;for(let J=0,se=b.length;J<se;J++){const ce=b[J],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ae=V.getFrameExtents();if(a.multiply(ae),l.copy(V.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ae.x),a.x=l.x*ae.x,V.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ae.y),a.y=l.y*ae.y,V.mapSize.y=l.y)),V.map===null||z===!0||oe===!0){const B=this.type!==Gi?{minFilter:_i,magFilter:_i}:{};V.map!==null&&V.map.dispose(),V.map=new is(a.x,a.y,B),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const le=V.getViewportCount();for(let B=0;B<le;B++){const re=V.getViewport(B);d.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),W.viewport(d),V.updateMatrices(ce,B),r=V.getFrustum(),I(D,k,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&A(V,k),V.needsUpdate=!1}m=this.type,x.needsUpdate=!1,s.setRenderTarget(C,T,F)};function A(b,D){const k=e.update(M);y.defines.VSM_SAMPLES!==b.blurSamples&&(y.defines.VSM_SAMPLES=b.blurSamples,S.defines.VSM_SAMPLES=b.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new is(a.x,a.y)),y.uniforms.shadow_pass.value=b.map.texture,y.uniforms.resolution.value=b.mapSize,y.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(D,null,k,y,M,null),S.uniforms.shadow_pass.value=b.mapPass.texture,S.uniforms.resolution.value=b.mapSize,S.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(D,null,k,S,M,null)}function P(b,D,k,C){let T=null;const F=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)T=F;else if(T=k.isPointLight===!0?f:c,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const W=T.uuid,z=D.uuid;let oe=h[W];oe===void 0&&(oe={},h[W]=oe);let J=oe[z];J===void 0&&(J=T.clone(),oe[z]=J,D.addEventListener("dispose",L)),T=J}if(T.visible=D.visible,T.wireframe=D.wireframe,C===Gi?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:v[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=s.properties.get(T);W.light=k}return T}function I(b,D,k,C,T){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Gi)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const z=e.update(b),oe=b.material;if(Array.isArray(oe)){const J=z.groups;for(let se=0,ce=J.length;se<ce;se++){const V=J[se],ae=oe[V.materialIndex];if(ae&&ae.visible){const le=P(b,ae,C,T);b.onBeforeShadow(s,b,D,k,z,le,V),s.renderBufferDirect(k,null,z,le,b,V),b.onAfterShadow(s,b,D,k,z,le,V)}}}else if(oe.visible){const J=P(b,oe,C,T);b.onBeforeShadow(s,b,D,k,z,J,null),s.renderBufferDirect(k,null,z,J,b,null),b.onAfterShadow(s,b,D,k,z,J,null)}}const W=b.children;for(let z=0,oe=W.length;z<oe;z++)I(W[z],D,k,C,T)}function L(b){b.target.removeEventListener("dispose",L);for(const k in h){const C=h[k],T=b.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const K1={[Zf]:Qf,[Jf]:nd,[ed]:id,[Qs]:td,[Qf]:Zf,[nd]:Jf,[id]:ed,[td]:Qs};function Z1(s,e){function t(){let Y=!1;const Ae=new Xt;let ue=null;const he=new Xt(0,0,0,0);return{setMask:function(Le){ue!==Le&&!Y&&(s.colorMask(Le,Le,Le,Le),ue=Le)},setLocked:function(Le){Y=Le},setClear:function(Le,Ne,st,Ut,$t){$t===!0&&(Le*=Ut,Ne*=Ut,st*=Ut),Ae.set(Le,Ne,st,Ut),he.equals(Ae)===!1&&(s.clearColor(Le,Ne,st,Ut),he.copy(Ae))},reset:function(){Y=!1,ue=null,he.set(-1,0,0,0)}}}function r(){let Y=!1,Ae=!1,ue=null,he=null,Le=null;return{setReversed:function(Ne){if(Ae!==Ne){const st=e.get("EXT_clip_control");Ae?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}Ae=Ne},getReversed:function(){return Ae},setTest:function(Ne){Ne?ge(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Ne){ue!==Ne&&!Y&&(s.depthMask(Ne),ue=Ne)},setFunc:function(Ne){if(Ae&&(Ne=K1[Ne]),he!==Ne){switch(Ne){case Zf:s.depthFunc(s.NEVER);break;case Qf:s.depthFunc(s.ALWAYS);break;case Jf:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case ed:s.depthFunc(s.EQUAL);break;case td:s.depthFunc(s.GEQUAL);break;case nd:s.depthFunc(s.GREATER);break;case id:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Ne}},setLocked:function(Ne){Y=Ne},setClear:function(Ne){Le!==Ne&&(Ae&&(Ne=1-Ne),s.clearDepth(Ne),Le=Ne)},reset:function(){Y=!1,ue=null,he=null,Le=null,Ae=!1}}}function a(){let Y=!1,Ae=null,ue=null,he=null,Le=null,Ne=null,st=null,Ut=null,$t=null;return{setTest:function(St){Y||(St?ge(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(St){Ae!==St&&!Y&&(s.stencilMask(St),Ae=St)},setFunc:function(St,bn,Mn){(ue!==St||he!==bn||Le!==Mn)&&(s.stencilFunc(St,bn,Mn),ue=St,he=bn,Le=Mn)},setOp:function(St,bn,Mn){(Ne!==St||st!==bn||Ut!==Mn)&&(s.stencilOp(St,bn,Mn),Ne=St,st=bn,Ut=Mn)},setLocked:function(St){Y=St},setClear:function(St){$t!==St&&(s.clearStencil(St),$t=St)},reset:function(){Y=!1,Ae=null,ue=null,he=null,Le=null,Ne=null,st=null,Ut=null,$t=null}}}const l=new t,d=new r,c=new a,f=new WeakMap,h=new WeakMap;let g={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,m=null,A=null,P=null,I=null,L=null,b=null,D=new yt(0,0,0),k=0,C=!1,T=null,F=null,W=null,z=null,oe=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ce=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),se=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),se=ce>=2);let ae=null,le={};const B=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Pe=new Xt().fromArray(B),ee=new Xt().fromArray(re);function fe(Y,Ae,ue,he){const Le=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(Y,Ne),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ue;st++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ae+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ne}const ye={};ye[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),c.setClear(0),ge(s.DEPTH_TEST),d.setFunc(Qs),gt(!1),dt(Jm),ge(s.CULL_FACE),G(Ar);function ge(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Te(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function be(Y,Ae){return v[Y]!==Ae?(s.bindFramebuffer(Y,Ae),v[Y]=Ae,Y===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),Y===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function $e(Y,Ae){let ue=S,he=!1;if(Y){ue=y.get(Ae),ue===void 0&&(ue=[],y.set(Ae,ue));const Le=Y.textures;if(ue.length!==Le.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,st=Le.length;Ne<st;Ne++)ue[Ne]=s.COLOR_ATTACHMENT0+Ne;ue.length=Le.length,he=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,he=!0);he&&s.drawBuffers(ue)}function Rt(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const Je={[Qr]:s.FUNC_ADD,[Bx]:s.FUNC_SUBTRACT,[zx]:s.FUNC_REVERSE_SUBTRACT};Je[Hx]=s.MIN,Je[Vx]=s.MAX;const Tt={[Gx]:s.ZERO,[Wx]:s.ONE,[Xx]:s.SRC_COLOR,[$f]:s.SRC_ALPHA,[Zx]:s.SRC_ALPHA_SATURATE,[$x]:s.DST_COLOR,[jx]:s.DST_ALPHA,[Yx]:s.ONE_MINUS_SRC_COLOR,[Kf]:s.ONE_MINUS_SRC_ALPHA,[Kx]:s.ONE_MINUS_DST_COLOR,[qx]:s.ONE_MINUS_DST_ALPHA,[Qx]:s.CONSTANT_COLOR,[Jx]:s.ONE_MINUS_CONSTANT_COLOR,[eS]:s.CONSTANT_ALPHA,[tS]:s.ONE_MINUS_CONSTANT_ALPHA};function G(Y,Ae,ue,he,Le,Ne,st,Ut,$t,St){if(Y===Ar){M===!0&&(Te(s.BLEND),M=!1);return}if(M===!1&&(ge(s.BLEND),M=!0),Y!==kx){if(Y!==x||St!==C){if((m!==Qr||I!==Qr)&&(s.blendEquation(s.FUNC_ADD),m=Qr,I=Qr),St)switch(Y){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eg:s.blendFunc(s.ONE,s.ONE);break;case tg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ng:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eg:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ng:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}A=null,P=null,L=null,b=null,D.set(0,0,0),k=0,x=Y,C=St}return}Le=Le||Ae,Ne=Ne||ue,st=st||he,(Ae!==m||Le!==I)&&(s.blendEquationSeparate(Je[Ae],Je[Le]),m=Ae,I=Le),(ue!==A||he!==P||Ne!==L||st!==b)&&(s.blendFuncSeparate(Tt[ue],Tt[he],Tt[Ne],Tt[st]),A=ue,P=he,L=Ne,b=st),(Ut.equals(D)===!1||$t!==k)&&(s.blendColor(Ut.r,Ut.g,Ut.b,$t),D.copy(Ut),k=$t),x=Y,C=!1}function En(Y,Ae){Y.side===pi?Te(s.CULL_FACE):ge(s.CULL_FACE);let ue=Y.side===kn;Ae&&(ue=!ue),gt(ue),Y.blending===$s&&Y.transparent===!1?G(Ar):G(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const he=Y.stencilWrite;c.setTest(he),he&&(c.setMask(Y.stencilWriteMask),c.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),c.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),bt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(Y){T!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),T=Y)}function dt(Y){Y!==Ux?(ge(s.CULL_FACE),Y!==F&&(Y===Jm?s.cullFace(s.BACK):Y===Ox?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),F=Y}function je(Y){Y!==W&&(se&&s.lineWidth(Y),W=Y)}function bt(Y,Ae,ue){Y?(ge(s.POLYGON_OFFSET_FILL),(z!==Ae||oe!==ue)&&(s.polygonOffset(Ae,ue),z=Ae,oe=ue)):Te(s.POLYGON_OFFSET_FILL)}function We(Y){Y?ge(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function U(Y){Y===void 0&&(Y=s.TEXTURE0+J-1),ae!==Y&&(s.activeTexture(Y),ae=Y)}function R(Y,Ae,ue){ue===void 0&&(ae===null?ue=s.TEXTURE0+J-1:ue=ae);let he=le[ue];he===void 0&&(he={type:void 0,texture:void 0},le[ue]=he),(he.type!==Y||he.texture!==Ae)&&(ae!==ue&&(s.activeTexture(ue),ae=ue),s.bindTexture(Y,Ae||ye[Y]),he.type=Y,he.texture=Ae)}function te(){const Y=le[ae];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(Y){Pe.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),Pe.copy(Y))}function Be(Y){ee.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),ee.copy(Y))}function ht(Y,Ae){let ue=h.get(Ae);ue===void 0&&(ue=new WeakMap,h.set(Ae,ue));let he=ue.get(Y);he===void 0&&(he=s.getUniformBlockIndex(Ae,Y.name),ue.set(Y,he))}function rt(Y,Ae){const he=h.get(Ae).get(Y);f.get(Ae)!==he&&(s.uniformBlockBinding(Ae,he,Y.__bindingPointIndex),f.set(Ae,he))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ae=null,le={},v={},y=new WeakMap,S=[],E=null,M=!1,x=null,m=null,A=null,P=null,I=null,L=null,b=null,D=new yt(0,0,0),k=0,C=!1,T=null,F=null,W=null,z=null,oe=null,Pe.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),c.reset()}return{buffers:{color:l,depth:d,stencil:c},enable:ge,disable:Te,bindFramebuffer:be,drawBuffers:$e,useProgram:Rt,setBlending:G,setMaterial:En,setFlipSided:gt,setCullFace:dt,setLineWidth:je,setPolygonOffset:bt,setScissorTest:We,activeTexture:U,bindTexture:R,unbindTexture:te,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:ke,texImage3D:Ke,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Xe,compressedTexSubImage2D:we,compressedTexSubImage3D:Ue,scissor:tt,viewport:Be,reset:Ct}}function Q1(s,e,t,r,a,l,d){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,R){return S?new OffscreenCanvas(U,R):Ql("canvas")}function M(U,R,te){let pe=1;const _e=We(U);if((_e.width>te||_e.height>te)&&(pe=te/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(pe*_e.width),Xe=Math.floor(pe*_e.height);v===void 0&&(v=E(de,Xe));const we=R?E(de,Xe):v;return we.width=de,we.height=Xe,we.getContext("2d").drawImage(U,0,0,de,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Xe+")."),we}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function x(U){return U.generateMipmaps}function m(U){s.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(U,R,te,pe,_e=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=R;if(R===s.RED&&(te===s.FLOAT&&(de=s.R32F),te===s.HALF_FLOAT&&(de=s.R16F),te===s.UNSIGNED_BYTE&&(de=s.R8)),R===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.R8UI),te===s.UNSIGNED_SHORT&&(de=s.R16UI),te===s.UNSIGNED_INT&&(de=s.R32UI),te===s.BYTE&&(de=s.R8I),te===s.SHORT&&(de=s.R16I),te===s.INT&&(de=s.R32I)),R===s.RG&&(te===s.FLOAT&&(de=s.RG32F),te===s.HALF_FLOAT&&(de=s.RG16F),te===s.UNSIGNED_BYTE&&(de=s.RG8)),R===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RG8UI),te===s.UNSIGNED_SHORT&&(de=s.RG16UI),te===s.UNSIGNED_INT&&(de=s.RG32UI),te===s.BYTE&&(de=s.RG8I),te===s.SHORT&&(de=s.RG16I),te===s.INT&&(de=s.RG32I)),R===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGB8UI),te===s.UNSIGNED_SHORT&&(de=s.RGB16UI),te===s.UNSIGNED_INT&&(de=s.RGB32UI),te===s.BYTE&&(de=s.RGB8I),te===s.SHORT&&(de=s.RGB16I),te===s.INT&&(de=s.RGB32I)),R===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),te===s.UNSIGNED_INT&&(de=s.RGBA32UI),te===s.BYTE&&(de=s.RGBA8I),te===s.SHORT&&(de=s.RGBA16I),te===s.INT&&(de=s.RGBA32I)),R===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),R===s.RGBA){const Xe=_e?Kl:At.getTransfer(pe);te===s.FLOAT&&(de=s.RGBA32F),te===s.HALF_FLOAT&&(de=s.RGBA16F),te===s.UNSIGNED_BYTE&&(de=Xe===Pt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(U,R){let te;return U?R===null||R===ns||R===to?te=s.DEPTH24_STENCIL8:R===Wi?te=s.DEPTH32F_STENCIL8:R===ea&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ns||R===to?te=s.DEPTH_COMPONENT24:R===Wi?te=s.DEPTH_COMPONENT32F:R===ea&&(te=s.DEPTH_COMPONENT16),te}function L(U,R){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==_i&&U.minFilter!==wi?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function b(U){const R=U.target;R.removeEventListener("dispose",b),k(R),R.isVideoTexture&&g.delete(R)}function D(U){const R=U.target;R.removeEventListener("dispose",D),T(R)}function k(U){const R=r.get(U);if(R.__webglInit===void 0)return;const te=U.source,pe=y.get(te);if(pe){const _e=pe[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(U),Object.keys(pe).length===0&&y.delete(te)}r.remove(U)}function C(U){const R=r.get(U);s.deleteTexture(R.__webglTexture);const te=U.source,pe=y.get(te);delete pe[R.__cacheKey],d.memory.textures--}function T(U){const R=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(R.__webglFramebuffer[pe]))for(let _e=0;_e<R.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(R.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(R.__webglFramebuffer[pe]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[pe])}else{if(Array.isArray(R.__webglFramebuffer))for(let pe=0;pe<R.__webglFramebuffer.length;pe++)s.deleteFramebuffer(R.__webglFramebuffer[pe]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pe=0;pe<R.__webglColorRenderbuffer.length;pe++)R.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[pe]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const te=U.textures;for(let pe=0,_e=te.length;pe<_e;pe++){const de=r.get(te[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(te[pe])}r.remove(U)}let F=0;function W(){F=0}function z(){const U=F;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),F+=1,U}function oe(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function J(U,R){const te=r.get(U);if(U.isVideoTexture&&je(U),U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(te,U,R);return}}t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+R)}function se(U,R){const te=r.get(U);if(U.version>0&&te.__version!==U.version){ee(te,U,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+R)}function ce(U,R){const te=r.get(U);if(U.version>0&&te.__version!==U.version){ee(te,U,R);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+R)}function V(U,R){const te=r.get(U);if(U.version>0&&te.__version!==U.version){fe(te,U,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+R)}const ae={[od]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[ad]:s.MIRRORED_REPEAT},le={[_i]:s.NEAREST,[fS]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[pf]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},B={[mS]:s.NEVER,[SS]:s.ALWAYS,[gS]:s.LESS,[N_]:s.LEQUAL,[_S]:s.EQUAL,[xS]:s.GEQUAL,[vS]:s.GREATER,[yS]:s.NOTEQUAL};function re(U,R){if(R.type===Wi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===wi||R.magFilter===pf||R.magFilter===pl||R.magFilter===ts||R.minFilter===wi||R.minFilter===pf||R.minFilter===pl||R.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ae[R.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ae[R.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ae[R.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,le[R.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,le[R.minFilter]),R.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,B[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_i||R.minFilter!==pl&&R.minFilter!==ts||R.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Pe(U,R){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",b));const pe=R.source;let _e=y.get(pe);_e===void 0&&(_e={},y.set(pe,_e));const de=oe(R);if(de!==U.__cacheKey){_e[de]===void 0&&(_e[de]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),_e[de].usedTimes++;const Xe=_e[U.__cacheKey];Xe!==void 0&&(_e[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&C(R)),U.__cacheKey=de,U.__webglTexture=_e[de].texture}return te}function ee(U,R,te){let pe=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=Pe(U,R),de=R.source;t.bindTexture(pe,U.__webglTexture,s.TEXTURE0+te);const Xe=r.get(de);if(de.version!==Xe.__version||_e===!0){t.activeTexture(s.TEXTURE0+te);const we=At.getPrimaries(At.workingColorSpace),Ue=R.colorSpace===wr?null:At.getPrimaries(R.colorSpace),ft=R.colorSpace===wr||we===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=M(R.image,!1,a.maxTextureSize);Ee=bt(R,Ee);const ke=l.convert(R.format,R.colorSpace),Ke=l.convert(R.type);let tt=P(R.internalFormat,ke,Ke,R.colorSpace,R.isVideoTexture);re(pe,R);let Be;const ht=R.mipmaps,rt=R.isVideoTexture!==!0,Ct=Xe.__version===void 0||_e===!0,Y=de.dataReady,Ae=L(R,Ee);if(R.isDepthTexture)tt=I(R.format===no,R.type),Ct&&(rt?t.texStorage2D(s.TEXTURE_2D,1,tt,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,ke,Ke,null));else if(R.isDataTexture)if(ht.length>0){rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Ae,tt,ht[0].width,ht[0].height);for(let ue=0,he=ht.length;ue<he;ue++)Be=ht[ue],rt?Y&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,ue,tt,Be.width,Be.height,0,ke,Ke,Be.data);R.generateMipmaps=!1}else rt?(Ct&&t.texStorage2D(s.TEXTURE_2D,Ae,tt,Ee.width,Ee.height),Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,Ke,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,ke,Ke,Ee.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){rt&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,tt,ht[0].width,ht[0].height,Ee.depth);for(let ue=0,he=ht.length;ue<he;ue++)if(Be=ht[ue],R.format!==gi)if(ke!==null)if(rt){if(Y)if(R.layerUpdates.size>0){const Le=Ig(Be.width,Be.height,R.format,R.type);for(const Ne of R.layerUpdates){const st=Be.data.subarray(Ne*Le/Be.data.BYTES_PER_ELEMENT,(Ne+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Ne,Be.width,Be.height,1,ke,st)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Be.width,Be.height,Ee.depth,ke,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,tt,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Be.width,Be.height,Ee.depth,ke,Ke,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,tt,Be.width,Be.height,Ee.depth,0,ke,Ke,Be.data)}else{rt&&Ct&&t.texStorage2D(s.TEXTURE_2D,Ae,tt,ht[0].width,ht[0].height);for(let ue=0,he=ht.length;ue<he;ue++)Be=ht[ue],R.format!==gi?ke!==null?rt?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Y&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(s.TEXTURE_2D,ue,tt,Be.width,Be.height,0,ke,Ke,Be.data)}else if(R.isDataArrayTexture)if(rt){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,tt,Ee.width,Ee.height,Ee.depth),Y)if(R.layerUpdates.size>0){const ue=Ig(Ee.width,Ee.height,R.format,R.type);for(const he of R.layerUpdates){const Le=Ee.data.subarray(he*ue/Ee.data.BYTES_PER_ELEMENT,(he+1)*ue/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,ke,Ke,Le)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ke,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Ee.width,Ee.height,Ee.depth,0,ke,Ke,Ee.data);else if(R.isData3DTexture)rt?(Ct&&t.texStorage3D(s.TEXTURE_3D,Ae,tt,Ee.width,Ee.height,Ee.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ke,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,tt,Ee.width,Ee.height,Ee.depth,0,ke,Ke,Ee.data);else if(R.isFramebufferTexture){if(Ct)if(rt)t.texStorage2D(s.TEXTURE_2D,Ae,tt,Ee.width,Ee.height);else{let ue=Ee.width,he=Ee.height;for(let Le=0;Le<Ae;Le++)t.texImage2D(s.TEXTURE_2D,Le,tt,ue,he,0,ke,Ke,null),ue>>=1,he>>=1}}else if(ht.length>0){if(rt&&Ct){const ue=We(ht[0]);t.texStorage2D(s.TEXTURE_2D,Ae,tt,ue.width,ue.height)}for(let ue=0,he=ht.length;ue<he;ue++)Be=ht[ue],rt?Y&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ke,Ke,Be):t.texImage2D(s.TEXTURE_2D,ue,tt,ke,Ke,Be);R.generateMipmaps=!1}else if(rt){if(Ct){const ue=We(Ee);t.texStorage2D(s.TEXTURE_2D,Ae,tt,ue.width,ue.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ke,Ee)}else t.texImage2D(s.TEXTURE_2D,0,tt,ke,Ke,Ee);x(R)&&m(pe),Xe.__version=de.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function fe(U,R,te){if(R.image.length!==6)return;const pe=Pe(U,R),_e=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+te);const de=r.get(_e);if(_e.version!==de.__version||pe===!0){t.activeTexture(s.TEXTURE0+te);const Xe=At.getPrimaries(At.workingColorSpace),we=R.colorSpace===wr?null:At.getPrimaries(R.colorSpace),Ue=R.colorSpace===wr||Xe===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=R.isCompressedTexture||R.image[0].isCompressedTexture,Ee=R.image[0]&&R.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!ft&&!Ee?ke[he]=M(R.image[he],!0,a.maxCubemapSize):ke[he]=Ee?R.image[he].image:R.image[he],ke[he]=bt(R,ke[he]);const Ke=ke[0],tt=l.convert(R.format,R.colorSpace),Be=l.convert(R.type),ht=P(R.internalFormat,tt,Be,R.colorSpace),rt=R.isVideoTexture!==!0,Ct=de.__version===void 0||pe===!0,Y=_e.dataReady;let Ae=L(R,Ke);re(s.TEXTURE_CUBE_MAP,R);let ue;if(ft){rt&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ht,Ke.width,Ke.height);for(let he=0;he<6;he++){ue=ke[he].mipmaps;for(let Le=0;Le<ue.length;Le++){const Ne=ue[Le];R.format!==gi?tt!==null?rt?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,tt,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ht,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,tt,Be,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ht,Ne.width,Ne.height,0,tt,Be,Ne.data)}}}else{if(ue=R.mipmaps,rt&&Ct){ue.length>0&&Ae++;const he=We(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,tt,Be,ke[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,ke[he].width,ke[he].height,0,tt,Be,ke[he].data);for(let Le=0;Le<ue.length;Le++){const st=ue[Le].image[he].image;rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,st.width,st.height,tt,Be,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ht,st.width,st.height,0,tt,Be,st.data)}}else{rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,tt,Be,ke[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,tt,Be,ke[he]);for(let Le=0;Le<ue.length;Le++){const Ne=ue[Le];rt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,tt,Be,Ne.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ht,tt,Be,Ne.image[he])}}}x(R)&&m(s.TEXTURE_CUBE_MAP),de.__version=_e.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ye(U,R,te,pe,_e,de){const Xe=l.convert(te.format,te.colorSpace),we=l.convert(te.type),Ue=P(te.internalFormat,Xe,we,te.colorSpace),ft=r.get(R),Ee=r.get(te);if(Ee.__renderTarget=R,!ft.__hasExternalTextures){const ke=Math.max(1,R.width>>de),Ke=Math.max(1,R.height>>de);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,Ue,ke,Ke,R.depth,0,Xe,we,null):t.texImage2D(_e,de,Ue,ke,Ke,0,Xe,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),dt(R)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,0,gt(R)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(U,R,te){if(s.bindRenderbuffer(s.RENDERBUFFER,U),R.depthBuffer){const pe=R.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,de=I(R.stencilBuffer,_e),Xe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=gt(R);dt(R)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,de,R.width,R.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,de,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,U)}else{const pe=R.textures;for(let _e=0;_e<pe.length;_e++){const de=pe[_e],Xe=l.convert(de.format,de.colorSpace),we=l.convert(de.type),Ue=P(de.internalFormat,Xe,we,de.colorSpace),ft=gt(R);te&&dt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ue,R.width,R.height):dt(R)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ue,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(R.depthTexture);pe.__renderTarget=R,(!pe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),J(R.depthTexture,0);const _e=pe.__webglTexture,de=gt(R);if(R.depthTexture.format===Ks)dt(R)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(R.depthTexture.format===no)dt(R)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function be(U){const R=r.get(U),te=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pe){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=pe}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Te(R.__webglFramebuffer,U)}else if(te){R.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[pe]),R.__webglDepthbuffer[pe]===void 0)R.__webglDepthbuffer[pe]=s.createRenderbuffer(),ge(R.__webglDepthbuffer[pe],U,!1);else{const _e=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),ge(R.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(U,R,te){const pe=r.get(U);R!==void 0&&ye(pe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&be(U)}function Rt(U){const R=U.texture,te=r.get(U),pe=r.get(R);U.addEventListener("dispose",D);const _e=U.textures,de=U.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=R.version,d.memory.textures++),de){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let Ue=0;Ue<R.mipmaps.length;Ue++)te.__webglFramebuffer[we][Ue]=s.createFramebuffer()}else te.__webglFramebuffer[we]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<R.mipmaps.length;we++)te.__webglFramebuffer[we]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let we=0,Ue=_e.length;we<Ue;we++){const ft=r.get(_e[we]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&dt(U)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const Ue=_e[we];te.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const ft=l.convert(Ue.format,Ue.colorSpace),Ee=l.convert(Ue.type),ke=P(Ue.internalFormat,ft,Ee,Ue.colorSpace,U.isXRRenderTarget===!0),Ke=gt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ke,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,te.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(te.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,R);for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)ye(te.__webglFramebuffer[we][Ue],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue);else ye(te.__webglFramebuffer[we],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(R)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let we=0,Ue=_e.length;we<Ue;we++){const ft=_e[we],Ee=r.get(ft);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),re(s.TEXTURE_2D,ft),ye(te.__webglFramebuffer,U,ft,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),x(ft)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),re(we,R),R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)ye(te.__webglFramebuffer[Ue],U,R,s.COLOR_ATTACHMENT0,we,Ue);else ye(te.__webglFramebuffer,U,R,s.COLOR_ATTACHMENT0,we,0);x(R)&&m(we),t.unbindTexture()}U.depthBuffer&&be(U)}function Je(U){const R=U.textures;for(let te=0,pe=R.length;te<pe;te++){const _e=R[te];if(x(_e)){const de=A(U),Xe=r.get(_e).__webglTexture;t.bindTexture(de,Xe),m(de),t.unbindTexture()}}}const Tt=[],G=[];function En(U){if(U.samples>0){if(dt(U)===!1){const R=U.textures,te=U.width,pe=U.height;let _e=s.COLOR_BUFFER_BIT;const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(U),we=R.length>1;if(we)for(let Ue=0;Ue<R.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<R.length;Ue++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ft=r.get(R[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,te,pe,0,0,te,pe,_e,s.NEAREST),f===!0&&(Tt.length=0,G.length=0,Tt.push(s.COLOR_ATTACHMENT0+Ue),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Tt.push(de),G.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ue=0;Ue<R.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ft=r.get(R[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const R=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function gt(U){return Math.min(a.maxSamples,U.samples)}function dt(U){const R=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function je(U){const R=d.render.frame;g.get(U)!==R&&(g.set(U,R),U.update())}function bt(U,R){const te=U.colorSpace,pe=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==io&&te!==wr&&(At.getTransfer(te)===Pt?(pe!==gi||_e!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),R}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=$e,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=dt}function J1(s,e){function t(r,a=wr){let l;const d=At.getTransfer(a);if(r===ji)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===E_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===x_)return s.BYTE;if(r===S_)return s.SHORT;if(r===ea)return s.UNSIGNED_SHORT;if(r===Vd)return s.INT;if(r===ns)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===na)return s.HALF_FLOAT;if(r===M_)return s.ALPHA;if(r===T_)return s.RGB;if(r===gi)return s.RGBA;if(r===w_)return s.LUMINANCE;if(r===A_)return s.LUMINANCE_ALPHA;if(r===Ks)return s.DEPTH_COMPONENT;if(r===no)return s.DEPTH_STENCIL;if(r===C_)return s.RED;if(r===Xd)return s.RED_INTEGER;if(r===R_)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===jd)return s.RGBA_INTEGER;if(r===Hl||r===Vl||r===Gl||r===Wl)if(d===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Hl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Hl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ld||r===ud||r===cd||r===fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ld)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===hd||r===pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===dd||r===hd)return d===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===pd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===md||r===gd||r===_d||r===vd||r===yd||r===xd||r===Sd||r===Ed||r===Md||r===Td||r===wd||r===Ad||r===Cd||r===Rd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===md)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_d)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ad)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rd)return d===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xl||r===bd||r===Pd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xl)return d===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===b_||r===Nd||r===Ld||r===Id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===to?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const eA={type:"move"};class Wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,d=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,r),m=this._getHandJoint(h,M);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,E=.005;h.inputState.pinching&&y>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(eA)))}return c!==null&&(c.visible=a!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Dl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const tA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Pr({vertexShader:tA,fragmentShader:nA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new cu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rA extends rs{constructor(e,t){super();const r=this;let a=null,l=1,d=null,c="local-floor",f=1,h=null,g=null,v=null,y=null,S=null,E=null;const M=new iA,x=t.getContextAttributes();let m=null,A=null;const P=[],I=[],L=new at;let b=null;const D=new ii;D.viewport=new Xt;const k=new ii;k.viewport=new Xt;const C=[D,k],T=new EE;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=P[ee];return fe===void 0&&(fe=new Wf,P[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=P[ee];return fe===void 0&&(fe=new Wf,P[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=P[ee];return fe===void 0&&(fe=new Wf,P[ee]=fe),fe.getHandSpace()};function z(ee){const fe=I.indexOf(ee.inputSource);if(fe===-1)return;const ye=P[fe];ye!==void 0&&(ye.update(ee.inputSource,ee.frame,h||d),ye.dispatchEvent({type:ee.type,data:ee.inputSource}))}function oe(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",J);for(let ee=0;ee<P.length;ee++){const fe=I[ee];fe!==null&&(I[ee]=null,P[ee].disconnect(fe))}F=null,W=null,M.reset(),e.setRenderTarget(m),S=null,y=null,v=null,a=null,A=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){c=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let ye=null,ge=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?no:Ks,ge=x.stencil?to:ns);const be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};v=new XRWebGLBinding(a,t),y=v.createProjectionLayer(be),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),A=new is(y.textureWidth,y.textureHeight,{format:gi,type:ji,depthTexture:new V_(y.textureWidth,y.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ye),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new is(S.framebufferWidth,S.framebufferHeight,{format:gi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}A.isXRRenderTarget=!0,this.setFoveation(f),h=null,d=await a.requestReferenceSpace(c),Pe.setContext(a),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(ee){for(let fe=0;fe<ee.removed.length;fe++){const ye=ee.removed[fe],ge=I.indexOf(ye);ge>=0&&(I[ge]=null,P[ge].disconnect(ye))}for(let fe=0;fe<ee.added.length;fe++){const ye=ee.added[fe];let ge=I.indexOf(ye);if(ge===-1){for(let be=0;be<P.length;be++)if(be>=I.length){I.push(ye),ge=be;break}else if(I[be]===null){I[be]=ye,ge=be;break}if(ge===-1)break}const Te=P[ge];Te&&Te.connect(ye)}}const se=new Z,ce=new Z;function V(ee,fe,ye){se.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const ge=se.distanceTo(ce),Te=fe.projectionMatrix.elements,be=ye.projectionMatrix.elements,$e=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),Je=(Te[9]+1)/Te[5],Tt=(Te[9]-1)/Te[5],G=(Te[8]-1)/Te[0],En=(be[8]+1)/be[0],gt=$e*G,dt=$e*En,je=ge/(-G+En),bt=je*-G;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(bt),ee.translateZ(je),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Te[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const We=$e+je,U=Rt+je,R=gt-bt,te=dt+(ge-bt),pe=Je*Rt/U*We,_e=Tt*Rt/U*We;ee.projectionMatrix.makePerspective(R,te,pe,_e,We,U),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ae(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let fe=ee.near,ye=ee.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),T.near=k.near=D.near=fe,T.far=k.far=D.far=ye,(F!==T.near||W!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,W=T.far),D.layers.mask=ee.layers.mask|2,k.layers.mask=ee.layers.mask|4,T.layers.mask=D.layers.mask|k.layers.mask;const ge=ee.parent,Te=T.cameras;ae(T,ge);for(let be=0;be<Te.length;be++)ae(Te[be],ge);Te.length===2?V(T,D,k):T.projectionMatrix.copy(D.projectionMatrix),le(ee,T,ge)};function le(ee,fe,ye){ye===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(ye.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ta*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&S===null))return f},this.setFoveation=function(ee){f=ee,y!==null&&(y.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let B=null;function re(ee,fe){if(g=fe.getViewerPose(h||d),E=fe,g!==null){const ye=g.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let ge=!1;ye.length!==T.cameras.length&&(T.cameras.length=0,ge=!0);for(let be=0;be<ye.length;be++){const $e=ye[be];let Rt=null;if(S!==null)Rt=S.getViewport($e);else{const Tt=v.getViewSubImage(y,$e);Rt=Tt.viewport,be===0&&(e.setRenderTargetTextures(A,Tt.colorTexture,y.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(A))}let Je=C[be];Je===void 0&&(Je=new ii,Je.layers.enable(be),Je.viewport=new Xt,C[be]=Je),Je.matrix.fromArray($e.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray($e.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),be===0&&(T.matrix.copy(Je.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ge===!0&&T.cameras.push(Je)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const be=v.getDepthInformation(ye[0]);be&&be.isValid&&be.texture&&M.init(e,be,a.renderState)}}for(let ye=0;ye<P.length;ye++){const ge=I[ye],Te=P[ye];ge!==null&&Te!==void 0&&Te.update(ge,fe,h||d)}B&&B(ee,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Pe=new X_;Pe.setAnimationLoop(re),this.setAnimationLoop=function(ee){B=ee},this.dispose=function(){}}}const Kr=new Ai,sA=new It;function oA(s,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function r(x,m){m.color.getRGB(x.fogColor.value,k_(s)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function a(x,m,A,P,I){m.isMeshBasicMaterial||m.isMeshLambertMaterial?l(x,m):m.isMeshToonMaterial?(l(x,m),v(x,m)):m.isMeshPhongMaterial?(l(x,m),g(x,m)):m.isMeshStandardMaterial?(l(x,m),y(x,m),m.isMeshPhysicalMaterial&&S(x,m,I)):m.isMeshMatcapMaterial?(l(x,m),E(x,m)):m.isMeshDepthMaterial?l(x,m):m.isMeshDistanceMaterial?(l(x,m),M(x,m)):m.isMeshNormalMaterial?l(x,m):m.isLineBasicMaterial?(d(x,m),m.isLineDashedMaterial&&c(x,m)):m.isPointsMaterial?f(x,m,A,P):m.isSpriteMaterial?h(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function l(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===kn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===kn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const A=e.get(m),P=A.envMap,I=A.envMapRotation;P&&(x.envMap.value=P,Kr.copy(I),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),x.envMapRotation.value.setFromMatrix4(sA.makeRotationFromEuler(Kr)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function d(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function c(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function f(x,m,A,P){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*A,x.scale.value=P*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function g(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function v(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function y(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function S(x,m,A){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,m){m.matcap&&(x.matcap.value=m.matcap)}function M(x,m){const A=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function aA(s,e,t,r){let a={},l={},d=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(A,P){const I=P.program;r.uniformBlockBinding(A,I)}function h(A,P){let I=a[A.id];I===void 0&&(E(A),I=g(A),a[A.id]=I,A.addEventListener("dispose",x));const L=P.program;r.updateUBOMapping(A,L);const b=e.render.frame;l[A.id]!==b&&(y(A),l[A.id]=b)}function g(A){const P=v();A.__bindingPointIndex=P;const I=s.createBuffer(),L=A.__size,b=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,L,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,I),I}function v(){for(let A=0;A<c;A++)if(d.indexOf(A)===-1)return d.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const P=a[A.id],I=A.uniforms,L=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let b=0,D=I.length;b<D;b++){const k=Array.isArray(I[b])?I[b]:[I[b]];for(let C=0,T=k.length;C<T;C++){const F=k[C];if(S(F,b,C,L)===!0){const W=F.__offset,z=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let J=0;J<z.length;J++){const se=z[J],ce=M(se);typeof se=="number"||typeof se=="boolean"?(F.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,W+oe,F.__data)):se.isMatrix3?(F.__data[0]=se.elements[0],F.__data[1]=se.elements[1],F.__data[2]=se.elements[2],F.__data[3]=0,F.__data[4]=se.elements[3],F.__data[5]=se.elements[4],F.__data[6]=se.elements[5],F.__data[7]=0,F.__data[8]=se.elements[6],F.__data[9]=se.elements[7],F.__data[10]=se.elements[8],F.__data[11]=0):(se.toArray(F.__data,oe),oe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(A,P,I,L){const b=A.value,D=P+"_"+I;if(L[D]===void 0)return typeof b=="number"||typeof b=="boolean"?L[D]=b:L[D]=b.clone(),!0;{const k=L[D];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return L[D]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function E(A){const P=A.uniforms;let I=0;const L=16;for(let D=0,k=P.length;D<k;D++){const C=Array.isArray(P[D])?P[D]:[P[D]];for(let T=0,F=C.length;T<F;T++){const W=C[T],z=Array.isArray(W.value)?W.value:[W.value];for(let oe=0,J=z.length;oe<J;oe++){const se=z[oe],ce=M(se),V=I%L,ae=V%ce.boundary,le=V+ae;I+=ae,le!==0&&L-le<ce.storage&&(I+=L-le),W.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=I,I+=ce.storage}}}const b=I%L;return b>0&&(I+=L-b),A.__size=I,A.__cache={},this}function M(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),P}function x(A){const P=A.target;P.removeEventListener("dispose",x);const I=d.indexOf(P.__bindingPointIndex);d.splice(I,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function m(){for(const A in a)s.deleteBuffer(a[A]);d=[],a={},l={}}return{bind:f,update:h,dispose:m}}class lA{constructor(e={}){const{canvas:t=BS(),context:r=null,depth:a=!0,stencil:l=!1,alpha:d=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,m=null;const A=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Cr,this.toneMappingExposure=1;const I=this;let L=!1,b=0,D=0,k=null,C=-1,T=null;const F=new Xt,W=new Xt;let z=null;const oe=new yt(0);let J=0,se=t.width,ce=t.height,V=1,ae=null,le=null;const B=new Xt(0,0,se,ce),re=new Xt(0,0,se,ce);let Pe=!1;const ee=new Kd;let fe=!1,ye=!1;this.transmissionResolutionScale=1;const ge=new It,Te=new It,be=new Z,$e=new Xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Tt(){return k===null?V:1}let G=r;function En(N,j){return t.getContext(N,j)}try{const N={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),G===null){const j="webgl2";if(G=En(j,N),G===null)throw En(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let gt,dt,je,bt,We,U,R,te,pe,_e,de,Xe,we,Ue,ft,Ee,ke,Ke,tt,Be,ht,rt,Ct,Y;function Ae(){gt=new _w(G),gt.init(),rt=new J1(G,gt),dt=new fw(G,gt,e,rt),je=new Z1(G,gt),dt.reverseDepthBuffer&&y&&je.buffers.depth.setReversed(!0),bt=new xw(G),We=new k1,U=new Q1(G,gt,je,We,dt,rt,bt),R=new hw(I),te=new gw(I),pe=new CE(G),Ct=new uw(G,pe),_e=new vw(G,pe,bt,Ct),de=new Ew(G,_e,pe,bt),tt=new Sw(G,dt,U),Ee=new dw(We),Xe=new F1(I,R,te,gt,dt,Ct,Ee),we=new oA(I,We),Ue=new z1,ft=new Y1(gt),Ke=new lw(I,R,te,je,de,S,f),ke=new $1(I,de,dt),Y=new aA(G,bt,dt,je),Be=new cw(G,gt,bt),ht=new yw(G,gt,bt),bt.programs=Xe.programs,I.capabilities=dt,I.extensions=gt,I.properties=We,I.renderLists=Ue,I.shadowMap=ke,I.state=je,I.info=bt}Ae();const ue=new rA(I,G);this.xr=ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const N=gt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=gt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(N){N!==void 0&&(V=N,this.setSize(se,ce,!1))},this.getSize=function(N){return N.set(se,ce)},this.setSize=function(N,j,ne=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=N,ce=j,t.width=Math.floor(N*V),t.height=Math.floor(j*V),ne===!0&&(t.style.width=N+"px",t.style.height=j+"px"),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(se*V,ce*V).floor()},this.setDrawingBufferSize=function(N,j,ne){se=N,ce=j,V=ne,t.width=Math.floor(N*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,N,j)},this.getCurrentViewport=function(N){return N.copy(F)},this.getViewport=function(N){return N.copy(B)},this.setViewport=function(N,j,ne,K){N.isVector4?B.set(N.x,N.y,N.z,N.w):B.set(N,j,ne,K),je.viewport(F.copy(B).multiplyScalar(V).round())},this.getScissor=function(N){return N.copy(re)},this.setScissor=function(N,j,ne,K){N.isVector4?re.set(N.x,N.y,N.z,N.w):re.set(N,j,ne,K),je.scissor(W.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(N){je.setScissorTest(Pe=N)},this.setOpaqueSort=function(N){ae=N},this.setTransparentSort=function(N){le=N},this.getClearColor=function(N){return N.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(N=!0,j=!0,ne=!0){let K=0;if(N){let q=!1;if(k!==null){const Se=k.texture.format;q=Se===jd||Se===Yd||Se===Xd}if(q){const Se=k.texture.type,Ce=Se===ji||Se===ns||Se===ea||Se===to||Se===Gd||Se===Wd,Ie=Ke.getClearColor(),ze=Ke.getClearAlpha(),nt=Ie.r,et=Ie.g,Ve=Ie.b;Ce?(E[0]=nt,E[1]=et,E[2]=Ve,E[3]=ze,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=nt,M[1]=et,M[2]=Ve,M[3]=ze,G.clearBufferiv(G.COLOR,0,M))}else K|=G.COLOR_BUFFER_BIT}j&&(K|=G.DEPTH_BUFFER_BIT),ne&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ke.dispose(),Ue.dispose(),ft.dispose(),We.dispose(),R.dispose(),te.dispose(),de.dispose(),Ct.dispose(),Y.dispose(),Xe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ss),ue.removeEventListener("sessionend",qi),Ci.stop()};function he(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const N=bt.autoReset,j=ke.enabled,ne=ke.autoUpdate,K=ke.needsUpdate,q=ke.type;Ae(),bt.autoReset=N,ke.enabled=j,ke.autoUpdate=ne,ke.needsUpdate=K,ke.type=q}function Ne(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function st(N){const j=N.target;j.removeEventListener("dispose",st),Ut(j)}function Ut(N){$t(N),We.remove(N)}function $t(N){const j=We.get(N).programs;j!==void 0&&(j.forEach(function(ne){Xe.releaseProgram(ne)}),N.isShaderMaterial&&Xe.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,ne,K,q,Se){j===null&&(j=Rt);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Ie=aa(N,j,ne,K,q);je.setMaterial(K,Ce);let ze=ne.index,nt=1;if(K.wireframe===!0){if(ze=_e.getWireframeAttribute(ne),ze===void 0)return;nt=2}const et=ne.drawRange,Ve=ne.attributes.position;let vt=et.start*nt,ot=(et.start+et.count)*nt;Se!==null&&(vt=Math.max(vt,Se.start*nt),ot=Math.min(ot,(Se.start+Se.count)*nt)),ze!==null?(vt=Math.max(vt,0),ot=Math.min(ot,ze.count)):Ve!=null&&(vt=Math.max(vt,0),ot=Math.min(ot,Ve.count));const Vt=ot-vt;if(Vt<0||Vt===1/0)return;Ct.setup(q,K,Ie,ne,ze);let kt,xt=Be;if(ze!==null&&(kt=pe.get(ze),xt=ht,xt.setIndex(kt)),q.isMesh)K.wireframe===!0?(je.setLineWidth(K.wireframeLinewidth*Tt()),xt.setMode(G.LINES)):xt.setMode(G.TRIANGLES);else if(q.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),je.setLineWidth(qe*Tt()),q.isLineSegments?xt.setMode(G.LINES):q.isLineLoop?xt.setMode(G.LINE_LOOP):xt.setMode(G.LINE_STRIP)}else q.isPoints?xt.setMode(G.POINTS):q.isSprite&&xt.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)xt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const qe=q._multiDrawStarts,Gt=q._multiDrawCounts,_t=q._multiDrawCount,pn=ze?pe.get(ze).bytesPerElement:1,Ki=We.get(K).currentProgram.getUniforms();for(let Tn=0;Tn<_t;Tn++)Ki.setValue(G,"_gl_DrawID",Tn),xt.render(qe[Tn]/pn,Gt[Tn])}else if(q.isInstancedMesh)xt.renderInstances(vt,Vt,q.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Gt=Math.min(ne.instanceCount,qe);xt.renderInstances(vt,Vt,Gt)}else xt.render(vt,Vt)};function St(N,j,ne){N.transparent===!0&&N.side===pi&&N.forceSinglePass===!1?(N.side=kn,N.needsUpdate=!0,os(N,j,ne),N.side=Rr,N.needsUpdate=!0,os(N,j,ne),N.side=pi):os(N,j,ne)}this.compile=function(N,j,ne=null){ne===null&&(ne=N),m=ft.get(ne),m.init(j),P.push(m),ne.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),N!==ne&&N.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return N.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Ie=Se[Ce];St(Ie,ne,q),K.add(Ie)}else St(Se,ne,q),K.add(Se)}),P.pop(),m=null,K},this.compileAsync=function(N,j,ne=null){const K=this.compile(N,j,ne);return new Promise(q=>{function Se(){if(K.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){q(N);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let bn=null;function Mn(N){bn&&bn(N)}function ss(){Ci.stop()}function qi(){Ci.start()}const Ci=new X_;Ci.setAnimationLoop(Mn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(N){bn=N,ue.setAnimationLoop(N),N===null?Ci.stop():Ci.start()},ue.addEventListener("sessionstart",ss),ue.addEventListener("sessionend",qi),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(j),j=ue.getCamera()),N.isScene===!0&&N.onBeforeRender(I,N,j,k),m=ft.get(N,P.length),m.init(j),P.push(m),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ee.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,fe=Ee.init(this.clippingPlanes,ye),x=Ue.get(N,A.length),x.init(),A.push(x),ue.enabled===!0&&ue.isPresenting===!0){const Se=I.xr.getDepthSensingMesh();Se!==null&&Ri(Se,j,-1/0,I.sortObjects)}Ri(N,j,0,I.sortObjects),x.finish(),I.sortObjects===!0&&x.sort(ae,le),Je=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Je&&Ke.addToRenderList(x,N),this.info.render.frame++,fe===!0&&Ee.beginShadows();const ne=m.state.shadowsArray;ke.render(ne,N,j),fe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,q=x.transmissive;if(m.setupLights(),j.isArrayCamera){const Se=j.cameras;if(q.length>0)for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ze=Se[Ce];Lr(K,q,N,ze)}Je&&Ke.render(N);for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ze=Se[Ce];Nr(x,N,ze,ze.viewport)}}else q.length>0&&Lr(K,q,N,j),Je&&Ke.render(N),Nr(x,N,j);k!==null&&D===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),N.isScene===!0&&N.onAfterRender(I,N,j),Ct.resetDefaultState(),C=-1,T=null,P.pop(),P.length>0?(m=P[P.length-1],fe===!0&&Ee.setGlobalState(I.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function Ri(N,j,ne,K){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)ne=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ee.intersectsSprite(N)){K&&$e.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Te);const Ce=de.update(N),Ie=N.material;Ie.visible&&x.push(N,Ce,Ie,ne,$e.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ee.intersectsObject(N))){const Ce=de.update(N),Ie=N.material;if(K&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),$e.copy(N.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),$e.copy(Ce.boundingSphere.center)),$e.applyMatrix4(N.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const ze=Ce.groups;for(let nt=0,et=ze.length;nt<et;nt++){const Ve=ze[nt],vt=Ie[Ve.materialIndex];vt&&vt.visible&&x.push(N,Ce,vt,ne,$e.z,Ve)}}else Ie.visible&&x.push(N,Ce,Ie,ne,$e.z,null)}}const Se=N.children;for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++)Ri(Se[Ce],j,ne,K)}function Nr(N,j,ne,K){const q=N.opaque,Se=N.transmissive,Ce=N.transparent;m.setupLightsView(ne),fe===!0&&Ee.setGlobalState(I.clippingPlanes,ne),K&&je.viewport(F.copy(K)),q.length>0&&$i(q,j,ne),Se.length>0&&$i(Se,j,ne),Ce.length>0&&$i(Ce,j,ne),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Lr(N,j,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new is(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?na:ji,minFilter:ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Se=m.state.transmissionRenderTarget[K.id],Ce=K.viewport||F;Se.setSize(Ce.z*I.transmissionResolutionScale,Ce.w*I.transmissionResolutionScale);const Ie=I.getRenderTarget();I.setRenderTarget(Se),I.getClearColor(oe),J=I.getClearAlpha(),J<1&&I.setClearColor(16777215,.5),I.clear(),Je&&Ke.render(ne);const ze=I.toneMapping;I.toneMapping=Cr;const nt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),fe===!0&&Ee.setGlobalState(I.clippingPlanes,K),$i(N,ne,K),U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ve=0,vt=j.length;Ve<vt;Ve++){const ot=j[Ve],Vt=ot.object,kt=ot.geometry,xt=ot.material,qe=ot.group;if(xt.side===pi&&Vt.layers.test(K.layers)){const Gt=xt.side;xt.side=kn,xt.needsUpdate=!0,sa(Vt,ne,K,kt,xt,qe),xt.side=Gt,xt.needsUpdate=!0,et=!0}}et===!0&&(U.updateMultisampleRenderTarget(Se),U.updateRenderTargetMipmap(Se))}I.setRenderTarget(Ie),I.setClearColor(oe,J),nt!==void 0&&(K.viewport=nt),I.toneMapping=ze}function $i(N,j,ne){const K=j.isScene===!0?j.overrideMaterial:null;for(let q=0,Se=N.length;q<Se;q++){const Ce=N[q],Ie=Ce.object,ze=Ce.geometry,nt=K===null?Ce.material:K,et=Ce.group;Ie.layers.test(ne.layers)&&sa(Ie,j,ne,ze,nt,et)}}function sa(N,j,ne,K,q,Se){N.onBeforeRender(I,j,ne,K,q,Se),N.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),q.onBeforeRender(I,j,ne,K,N,Se),q.transparent===!0&&q.side===pi&&q.forceSinglePass===!1?(q.side=kn,q.needsUpdate=!0,I.renderBufferDirect(ne,j,K,q,N,Se),q.side=Rr,q.needsUpdate=!0,I.renderBufferDirect(ne,j,K,q,N,Se),q.side=pi):I.renderBufferDirect(ne,j,K,q,N,Se),N.onAfterRender(I,j,ne,K,q,Se)}function os(N,j,ne){j.isScene!==!0&&(j=Rt);const K=We.get(N),q=m.state.lights,Se=m.state.shadowsArray,Ce=q.state.version,Ie=Xe.getParameters(N,q.state,Se,j,ne),ze=Xe.getProgramCacheKey(Ie);let nt=K.programs;K.environment=N.isMeshStandardMaterial?j.environment:null,K.fog=j.fog,K.envMap=(N.isMeshStandardMaterial?te:R).get(N.envMap||K.environment),K.envMapRotation=K.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,nt===void 0&&(N.addEventListener("dispose",st),nt=new Map,K.programs=nt);let et=nt.get(ze);if(et!==void 0){if(K.currentProgram===et&&K.lightsStateVersion===Ce)return vi(N,Ie),et}else Ie.uniforms=Xe.getUniforms(N),N.onBeforeCompile(Ie,I),et=Xe.acquireProgram(Ie,ze),nt.set(ze,et),K.uniforms=Ie.uniforms;const Ve=K.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),vi(N,Ie),K.needsLights=du(N),K.lightsStateVersion=Ce,K.needsLights&&(Ve.ambientLightColor.value=q.state.ambient,Ve.lightProbe.value=q.state.probe,Ve.directionalLights.value=q.state.directional,Ve.directionalLightShadows.value=q.state.directionalShadow,Ve.spotLights.value=q.state.spot,Ve.spotLightShadows.value=q.state.spotShadow,Ve.rectAreaLights.value=q.state.rectArea,Ve.ltc_1.value=q.state.rectAreaLTC1,Ve.ltc_2.value=q.state.rectAreaLTC2,Ve.pointLights.value=q.state.point,Ve.pointLightShadows.value=q.state.pointShadow,Ve.hemisphereLights.value=q.state.hemi,Ve.directionalShadowMap.value=q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ve.spotShadowMap.value=q.state.spotShadowMap,Ve.spotLightMatrix.value=q.state.spotLightMatrix,Ve.spotLightMap.value=q.state.spotLightMap,Ve.pointShadowMap.value=q.state.pointShadowMap,Ve.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=et,K.uniformsList=null,et}function oa(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=Yl.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function vi(N,j){const ne=We.get(N);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function aa(N,j,ne,K,q){j.isScene!==!0&&(j=Rt),U.resetTextureUnits();const Se=j.fog,Ce=K.isMeshStandardMaterial?j.environment:null,Ie=k===null?I.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:io,ze=(K.isMeshStandardMaterial?te:R).get(K.envMap||Ce),nt=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,et=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!ne.morphAttributes.position,vt=!!ne.morphAttributes.normal,ot=!!ne.morphAttributes.color;let Vt=Cr;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Vt=I.toneMapping);const kt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=kt!==void 0?kt.length:0,qe=We.get(K),Gt=m.state.lights;if(fe===!0&&(ye===!0||N!==T)){const cn=N===T&&K.id===C;Ee.setState(K,N,cn)}let _t=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Gt.state.version||qe.outputColorSpace!==Ie||q.isBatchedMesh&&qe.batching===!1||!q.isBatchedMesh&&qe.batching===!0||q.isBatchedMesh&&qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&qe.instancing===!1||!q.isInstancedMesh&&qe.instancing===!0||q.isSkinnedMesh&&qe.skinning===!1||!q.isSkinnedMesh&&qe.skinning===!0||q.isInstancedMesh&&qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&qe.instancingMorph===!1&&q.morphTexture!==null||qe.envMap!==ze||K.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==et||qe.morphTargets!==Ve||qe.morphNormals!==vt||qe.morphColors!==ot||qe.toneMapping!==Vt||qe.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,qe.__version=K.version);let pn=qe.currentProgram;_t===!0&&(pn=os(K,j,q));let Ki=!1,Tn=!1,bi=!1;const Lt=pn.getUniforms(),mn=qe.uniforms;if(je.useProgram(pn.program)&&(Ki=!0,Tn=!0,bi=!0),K.id!==C&&(C=K.id,Tn=!0),Ki||T!==N){je.buffers.depth.getReversed()?(ge.copy(N.projectionMatrix),HS(ge),VS(ge),Lt.setValue(G,"projectionMatrix",ge)):Lt.setValue(G,"projectionMatrix",N.projectionMatrix),Lt.setValue(G,"viewMatrix",N.matrixWorldInverse);const rn=Lt.map.cameraPosition;rn!==void 0&&rn.setValue(G,be.setFromMatrixPosition(N.matrixWorld)),dt.logarithmicDepthBuffer&&Lt.setValue(G,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Lt.setValue(G,"isOrthographic",N.isOrthographicCamera===!0),T!==N&&(T=N,Tn=!0,bi=!0)}if(q.isSkinnedMesh){Lt.setOptional(G,q,"bindMatrix"),Lt.setOptional(G,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Lt.setValue(G,"boneTexture",cn.boneTexture,U))}q.isBatchedMesh&&(Lt.setOptional(G,q,"batchingTexture"),Lt.setValue(G,"batchingTexture",q._matricesTexture,U),Lt.setOptional(G,q,"batchingIdTexture"),Lt.setValue(G,"batchingIdTexture",q._indirectTexture,U),Lt.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&Lt.setValue(G,"batchingColorTexture",q._colorsTexture,U));const nn=ne.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&tt.update(q,ne,pn),(Tn||qe.receiveShadow!==q.receiveShadow)&&(qe.receiveShadow=q.receiveShadow,Lt.setValue(G,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(mn.envMap.value=ze,mn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),Tn&&(Lt.setValue(G,"toneMappingExposure",I.toneMappingExposure),qe.needsLights&&la(mn,bi),Se&&K.fog===!0&&we.refreshFogUniforms(mn,Se),we.refreshMaterialUniforms(mn,K,V,ce,m.state.transmissionRenderTarget[N.id]),Yl.upload(G,oa(qe),mn,U)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Yl.upload(G,oa(qe),mn,U),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Lt.setValue(G,"center",q.center),Lt.setValue(G,"modelViewMatrix",q.modelViewMatrix),Lt.setValue(G,"normalMatrix",q.normalMatrix),Lt.setValue(G,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const cn=K.uniformsGroups;for(let rn=0,Et=cn.length;rn<Et;rn++){const yi=cn[rn];Y.update(yi,pn),Y.bind(yi,pn)}}return pn}function la(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function du(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(N,j,ne){We.get(N.texture).__webglTexture=j,We.get(N.depthTexture).__webglTexture=ne;const K=We.get(N);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=ne===void 0,K.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,j){const ne=We.get(N);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const ua=G.createFramebuffer();this.setRenderTarget=function(N,j=0,ne=0){k=N,b=j,D=ne;let K=!0,q=null,Se=!1,Ce=!1;if(N){const ze=We.get(N);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(G.FRAMEBUFFER,null),K=!1;else if(ze.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(ze.__hasExternalTextures)U.rebindTextures(N,We.get(N.texture).__webglTexture,We.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ve=N.depthTexture;if(ze.__boundDepthTexture!==Ve){if(Ve!==null&&We.has(Ve)&&(N.width!==Ve.image.width||N.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}const nt=N.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const et=We.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(et[j])?q=et[j][ne]:q=et[j],Se=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?q=We.get(N).__webglMultisampledFramebuffer:Array.isArray(et)?q=et[ne]:q=et,F.copy(N.viewport),W.copy(N.scissor),z=N.scissorTest}else F.copy(B).multiplyScalar(V).floor(),W.copy(re).multiplyScalar(V).floor(),z=Pe;if(ne!==0&&(q=ua),je.bindFramebuffer(G.FRAMEBUFFER,q)&&K&&je.drawBuffers(N,q),je.viewport(F),je.scissor(W),je.setScissorTest(z),Se){const ze=We.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,ne)}else if(Ce){const ze=We.get(N.texture),nt=j;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.__webglTexture,ne,nt)}else if(N!==null&&ne!==0){const ze=We.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,ne)}C=-1},this.readRenderTargetPixels=function(N,j,ne,K,q,Se,Ce){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){je.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const ze=N.texture,nt=ze.format,et=ze.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-K&&ne>=0&&ne<=N.height-q&&G.readPixels(j,ne,K,q,rt.convert(nt),rt.convert(et),Se)}finally{const ze=k!==null?We.get(k).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(N,j,ne,K,q,Se,Ce){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=We.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const ze=N.texture,nt=ze.format,et=ze.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=N.width-K&&ne>=0&&ne<=N.height-q){je.bindFramebuffer(G.FRAMEBUFFER,Ie);const Ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.bufferData(G.PIXEL_PACK_BUFFER,Se.byteLength,G.STREAM_READ),G.readPixels(j,ne,K,q,rt.convert(nt),rt.convert(et),0);const vt=k!==null?We.get(k).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,vt);const ot=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await zS(G,ot,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Se),G.deleteBuffer(Ve),G.deleteSync(ot),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,j=null,ne=0){N.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,N=arguments[1]);const K=Math.pow(2,-ne),q=Math.floor(N.image.width*K),Se=Math.floor(N.image.height*K),Ce=j!==null?j.x:0,Ie=j!==null?j.y:0;U.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,Ce,Ie,q,Se),je.unbindTexture()};const ca=G.createFramebuffer(),fa=G.createFramebuffer();this.copyTextureToTexture=function(N,j,ne=null,K=null,q=0,Se=null){N.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,N=arguments[1],j=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&(q!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=q,q=0):Se=0);let Ce,Ie,ze,nt,et,Ve,vt,ot,Vt;const kt=N.isCompressedTexture?N.mipmaps[Se]:N.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,et=ne.min.y,Ve=ne.isBox3?ne.min.z:0;else{const nn=Math.pow(2,-q);Ce=Math.floor(kt.width*nn),Ie=Math.floor(kt.height*nn),N.isDataArrayTexture?ze=kt.depth:N.isData3DTexture?ze=Math.floor(kt.depth*nn):ze=1,nt=0,et=0,Ve=0}K!==null?(vt=K.x,ot=K.y,Vt=K.z):(vt=0,ot=0,Vt=0);const xt=rt.convert(j.format),qe=rt.convert(j.type);let Gt;j.isData3DTexture?(U.setTexture3D(j,0),Gt=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(U.setTexture2DArray(j,0),Gt=G.TEXTURE_2D_ARRAY):(U.setTexture2D(j,0),Gt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=G.getParameter(G.UNPACK_ROW_LENGTH),pn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ki=G.getParameter(G.UNPACK_SKIP_PIXELS),Tn=G.getParameter(G.UNPACK_SKIP_ROWS),bi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,kt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,kt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),G.pixelStorei(G.UNPACK_SKIP_ROWS,et),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ve);const Lt=N.isDataArrayTexture||N.isData3DTexture,mn=j.isDataArrayTexture||j.isData3DTexture;if(N.isDepthTexture){const nn=We.get(N),cn=We.get(j),rn=We.get(nn.__renderTarget),Et=We.get(cn.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,rn.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yi=0;yi<ze;yi++)Lt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(N).__webglTexture,q,Ve+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(j).__webglTexture,Se,Vt+yi)),G.blitFramebuffer(nt,et,Ce,Ie,vt,ot,Ce,Ie,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(q!==0||N.isRenderTargetTexture||We.has(N)){const nn=We.get(N),cn=We.get(j);je.bindFramebuffer(G.READ_FRAMEBUFFER,ca),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,fa);for(let rn=0;rn<ze;rn++)Lt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,nn.__webglTexture,q,Ve+rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,nn.__webglTexture,q),mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,cn.__webglTexture,Se,Vt+rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,cn.__webglTexture,Se),q!==0?G.blitFramebuffer(nt,et,Ce,Ie,vt,ot,Ce,Ie,G.COLOR_BUFFER_BIT,G.NEAREST):mn?G.copyTexSubImage3D(Gt,Se,vt,ot,Vt+rn,nt,et,Ce,Ie):G.copyTexSubImage2D(Gt,Se,vt,ot,nt,et,Ce,Ie);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else mn?N.isDataTexture||N.isData3DTexture?G.texSubImage3D(Gt,Se,vt,ot,Vt,Ce,Ie,ze,xt,qe,kt.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,Se,vt,ot,Vt,Ce,Ie,ze,xt,kt.data):G.texSubImage3D(Gt,Se,vt,ot,Vt,Ce,Ie,ze,xt,qe,kt):N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Se,vt,ot,Ce,Ie,xt,qe,kt.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Se,vt,ot,kt.width,kt.height,xt,kt.data):G.texSubImage2D(G.TEXTURE_2D,Se,vt,ot,Ce,Ie,xt,qe,kt);G.pixelStorei(G.UNPACK_ROW_LENGTH,_t),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,bi),Se===0&&j.generateMipmaps&&G.generateMipmap(Gt),je.unbindTexture()},this.copyTextureToTexture3D=function(N,j,ne=null,K=null,q=0){return N.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,K=arguments[1]||null,N=arguments[2],j=arguments[3],q=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,j,ne,K,q)},this.initRenderTarget=function(N){We.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),je.unbindTexture()},this.resetState=function(){b=0,D=0,k=null,je.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class uA{constructor(){Oe(this,"containerDom");Oe(this,"camera");Oe(this,"scene");Oe(this,"pointer",new at);Oe(this,"_renderer");Oe(this,"_hemiLight");Oe(this,"_dirLight");Oe(this,"_meshesForClick",[]);Oe(this,"_raycaster",new ME);Oe(this,"_cbsOnMouseOver",[]);Oe(this,"_currentMeshIdMouseOver",null);this.containerDom=document.createElement("div"),this.containerDom.classList.add("three-viewer"),this.camera=new ii(75,window.innerWidth/window.innerHeight,.001,1e5),this.camera.position.set(0,0,500),this.camera.lookAt(0,0,0),this.scene=new fE,this._hemiLight=new vE(4739914,16777215,6),this._hemiLight.position.set(0,20,0),this.scene.add(this._hemiLight),this._dirLight=new SE(16777215,8),this._dirLight.position.set(-3,10,2),this.scene.add(this._dirLight),this._renderer=new lA({antialias:!0}),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setSize(window.innerWidth,window.innerHeight),this.containerDom.appendChild(this._renderer.domElement),window.addEventListener("resize",this._onWindowResize.bind(this)),this._onWindowResize(),window.addEventListener("pointermove",this._checkMousePointer.bind(this)),window.addEventListener("pointerdown",this._onPointeDown.bind(this)),this.render()}setDomParent(e){e.appendChild(this.containerDom),this._onWindowResize()}render(){this._checkRaycaster(),this._renderer.render(this.scene,this.camera)}_onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this._renderer.setSize(window.innerWidth,window.innerHeight)}_onPointeDown(e){this._checkMousePointer(e),this._checkRaycaster()}_checkMousePointer(e){this.pointer.x=e.clientX/window.innerWidth*2-1,this.pointer.y=-(e.clientY/window.innerHeight)*2+1}_checkRaycaster(){this._raycaster.setFromCamera(this.pointer,this.camera);const e=this._raycaster.intersectObjects(this._meshesForClick,!0),t=e[0]?{Id:e[0].object.userData.Id,typeItem:e[0].object.userData.typeItem}:null;!t&&this._currentMeshIdMouseOver!==null&&(this._currentMeshIdMouseOver=t,this._cbsOnMouseOver.forEach(r=>r(t))),t&&this._currentMeshIdMouseOver&&t.Id!==this._currentMeshIdMouseOver.Id&&(this._currentMeshIdMouseOver=t,this._cbsOnMouseOver.forEach(r=>r(t))),t&&!this._currentMeshIdMouseOver&&(this._currentMeshIdMouseOver=t,this._cbsOnMouseOver.forEach(r=>r(t)))}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}addAxisHelper(){const e=new TE(15);this.scene.add(e)}cameraLookAt(e,t,r){this.camera.lookAt(e,t,r)}setMeshForMouseOver(e){Array.isArray(e)?this._meshesForClick.push(...e):this._meshesForClick.push(e)}setCbOnMouseOver(e){this._cbsOnMouseOver.push(e)}}const r_={type:"change"},Qd={type:"start"},K_={type:"end"},kl=new lu,s_=new Er,cA=Math.cos(70*kS.DEG2RAD),Qt=new Z,On=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xf=1e-6;class fA extends wE{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new br,this._lastTargetPosition=new Z,this._quat=new br().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lg,this._sphericalDelta=new Lg,this._scale=1,this._panOffset=new Z,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new Z,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hA.bind(this),this._onPointerDown=dA.bind(this),this._onPointerUp=pA.bind(this),this._onContextMenu=SA.bind(this),this._onMouseWheel=_A.bind(this),this._onKeyDown=vA.bind(this),this._onTouchStart=yA.bind(this),this._onTouchMove=xA.bind(this),this._onMouseDown=mA.bind(this),this._onMouseMove=gA.bind(this),this._interceptControlDown=EA.bind(this),this._interceptControlUp=MA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(r_),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=On:r>Math.PI&&(r-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const c=Qt.length();d=this._clampDistance(c*this._scale);const f=c-d;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const h=new Z(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),d=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(kl.origin.copy(this.object.position),kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kl.direction))<cA?this.object.lookAt(this.target):(s_.setFromNormalAndCoplanarPoint(this.object.up,this.target),kl.intersectPlane(s_,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Xf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xf||this._lastTargetPosition.distanceToSquared(this.target)>Xf?(this.dispatchEvent(r_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Qt.copy(a).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,d=r.width,c=r.height;this._mouse.x=a/d*2-1,this._mouse.y=-(l/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(d,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function dA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function hA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function pA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(K_),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case qs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case qs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Qd)}function gA(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function _A(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(Qd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(K_))}function vA(s){this.enabled!==!1&&this._handleKeyDown(s)}function yA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Qd)}function xA(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function SA(s){this.enabled!==!1&&s.preventDefault()}function EA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class TA{constructor(){Oe(this,"controls");Oe(this,"isEnabled",!1)}init(e,t){this.controls=new fA(e,t),this.controls.target.set(0,0,0),this.controls.enablePan=!0,this.controls.enableDamping=!0,this.controls.enabled=!1,this.controls.panSpeed=1,this.controls.zoomSpeed=1}setTargetCoords(e,t,r){this.controls.target.set(e,t,r),this.controls.update()}enable(){this.isEnabled=!0,this.controls.enabled=!0}disable(){this.isEnabled=!1,this.controls.enabled=!1}update(){this.controls.enabled&&this.isEnabled&&this.controls.update()}}const nu=(s,e,t,r)=>[...s,...e,...t,...s,...t,...r],js=Jo,o_=Rx,Bl=su,Yf=new Z,Yo=new Z,wA=new Z(1,0,0),AA=[-.003*.5,0,0,-.003*.5,0,js*.5,0,0,js],CA=[0,0,js,js*.5,0,js*.5,js*.5,0,0],RA=({v1:s,v2:e,addToVertexIndex:t})=>{Yf.fromArray(s),Yo.fromArray(e);const r=Yf.distanceTo(Yo),a=[...CA];bA(a,r,0,0);const l=[...AA,...a],d=[];for(let E=0;E<o_;++E){const M=E/o_*Math.PI*2,x=Math.cos(M),m=Math.sin(M),A=[];for(let P=0;P<l.length;P+=3)A.push(l[P],m*l[P+2],x*l[P+2]);d.push(A)}const c=[],f=[],h=[];let g=t+1;for(let E=0;E<d.length;++E){const M=d[E-1]?d[E-1]:d[d.length-1],x=d[E];for(let m=3;m<M.length;m+=3)c.push(M[m-3],M[m-2],M[m-1],M[m],M[m+1],M[m+2],x[m],x[m+1],x[m+2],x[m-3],x[m-2],x[m-1]),f.push(...Bl,...Bl,...Bl,...Bl),h.push(g,g+1,g+2,g,g+2,g+3),g+=4}Yo.sub(Yf),Yo.normalize();const v=new br().setFromUnitVectors(wA,Yo),y=new It().makeRotationFromQuaternion(v);Od(y,c);const S=new It().makeTranslation(...s);return Od(S,c),{vertices:c,colors:f,indices:h,len:r,quaternion:v}},bA=(s,e,t,r)=>{const a=new It().makeTranslation(e,t,r);Od(a,s)},Od=(s,e)=>{const t=new Z;for(let r=0;r<e.length;r+=3)t.fromArray(e,r),t.applyMatrix4(s),e[r]=t.x,e[r+1]=t.y,e[r+2]=t.z},Mr=class Mr{constructor({Id:e,startIndex:t,endIndex:r,startPos:a,endPos:l,len:d,quaternion:c,startNodeId:f,endNodeId:h}){Oe(this,"Id");Oe(this,"startIndex");Oe(this,"endIndex");Oe(this,"startPos");Oe(this,"endPos");Oe(this,"len");Oe(this,"quaternion");Oe(this,"meshForClick");Oe(this,"startNodeId");Oe(this,"endNodeId");Oe(this,"currentColor",su);Oe(this,"isPicked",!1);this.Id=e,this.startIndex=t,this.endIndex=r,this.startPos=a,this.endPos=l,this.len=d,this.startNodeId=f,this.endNodeId=h,this.quaternion=c,this.meshForClick=this._createMeshMouse()}_createMeshMouse(){Mr.materialMeshMouse||(Mr.materialMeshMouse=new uu({color:16776960,side:pi}));const t=Jo*1.4,r=[...nu([0,0,t],[this.len,0,t],[this.len,0,-.0042],[0,0,-.0042]),...nu([0,-.0042,0],[this.len,-.0042,0],[this.len,t,0],[0,t,0])],a=new qn,l=new Float32Array(r);return a.setAttribute("position",new zn(l,3)),this.meshForClick=new Fn(a,Mr.materialMeshMouse),this.meshForClick.position.set(...this.startPos),this.meshForClick.quaternion.copy(this.quaternion),this.meshForClick.userData.Id=this.Id,this.meshForClick.userData.typeItem=Mr.typeItem,this.meshForClick.visible=!1,this.meshForClick}};Oe(Mr,"materialMeshMouse"),Oe(Mr,"typeItem","Section");let Zo=Mr;const Tr=class Tr{constructor({Id:e,pos:t}){Oe(this,"Id");Oe(this,"pos");Oe(this,"currentColor",su);Oe(this,"isPicked",!1);Oe(this,"meshForClick");this.Id=e,this.pos=t,this.meshForClick=this._createMeshMouse()}_createMeshMouse(){Tr.materialMeshMouse||(Tr.materialMeshMouse=new uu({color:16776960,side:pi}));const t=Jo*1.3,r=[...nu([-.0039000000000000003,t,t],[t,t,t],[t,t,-.0039000000000000003],[-.0039000000000000003,t,-.0039000000000000003]),...nu([-.0039000000000000003,-.0039000000000000003,t],[t,-.0039000000000000003,t],[t,-.0039000000000000003,-.0039000000000000003],[-.0039000000000000003,-.0039000000000000003,-.0039000000000000003])],a=new qn,l=new Float32Array(r);return a.setAttribute("position",new zn(l,3)),this.meshForClick=new Fn(a,Tr.materialMeshMouse),this.meshForClick.position.set(...this.pos),this.meshForClick.userData.Id=this.Id,this.meshForClick.userData.typeItem=Tr.typeItem,this.meshForClick.visible=!1,this.meshForClick}};Oe(Tr,"materialMeshMouse"),Oe(Tr,"typeItem","Node");let Qo=Tr;class PA{constructor(){Oe(this,"mesh",new Jt);Oe(this,"tunnelsMesh",null);Oe(this,"nodeLabel",null);Oe(this,"nodeLabelPicked",null);Oe(this,"xMin",1/0);Oe(this,"xMax",-1/0);Oe(this,"yMin",1/0);Oe(this,"yMax",-1/0);Oe(this,"zMin",1/0);Oe(this,"zMax",-1/0);Oe(this,"xCenter",0);Oe(this,"yCenter",0);Oe(this,"zCenter",0);Oe(this,"xW",0);Oe(this,"yW",0);Oe(this,"zW",0);Oe(this,"graph",null);Oe(this,"sections",{});Oe(this,"nodes",{});Oe(this,"_currentSectionIdFocus",null);Oe(this,"_currentSectionIdPicked",null)}init(){}destroy(){}setGraph(e){this.graph=e,this._calculateBounds()}drawTunnels(){if(!this.graph)return;const e=this.graph,t=[],r=[],a=[];let l=-1;for(let g in e.Sections){const{StartNodeId:v,EndNodeId:y}=e.Sections[g];if(!e.Nodes[v]||!e.Nodes[y])continue;const S={v1:e.Nodes[v].pos,v2:e.Nodes[y].pos,addToVertexIndex:l},E=a.length,M=RA(S);t.push(...M.vertices),r.push(...M.colors),a.push(...M.indices),l=M.indices[M.indices.length-1];const x=a.length,m=new Zo({Id:+g,startIndex:E,endIndex:x,startPos:S.v1,endPos:S.v2,len:M.len,quaternion:M.quaternion,startNodeId:v,endNodeId:y});this.mesh.add(m.meshForClick),this.sections[g]=m}const d=new Of({...hf,vertexColors:!0,flatShading:!1});let c=new qn;const f=new Float32Array(t);c.setAttribute("position",new zn(f,3));const h=new Float32Array(r);c.setAttribute("color",new zn(h,3)),c.setIndex(a),c.computeVertexNormals(),this.tunnelsMesh=new Fn(c,d),this.mesh.add(this.tunnelsMesh),this._buildNodes()}_buildNodes(){if(this.graph)for(let e in this.graph.Nodes){const t=new Qo({Id:this.graph.Nodes[e].Id,pos:this.graph.Nodes[e].pos});this.mesh.add(t.meshForClick),this.nodes[e]=t}}_calculateBounds(){if(!this.graph)return;const e=this.graph;for(let t in e.Nodes){const[r,a,l]=e.Nodes[t].pos;r<this.xMin&&(this.xMin=r),r>this.xMax&&(this.xMax=r),a<this.yMin&&(this.yMin=a),a>this.yMax&&(this.yMax=a),l<this.zMin&&(this.zMin=l),l>this.zMax&&(this.zMax=l)}this.xW=Math.abs(this.xMax-this.xMin),this.yW=Math.abs(this.yMax-this.yMin),this.zW=Math.abs(this.zMax-this.zMin),this.xCenter=this.xMin+(this.xMax-this.xMin)*.5,this.yCenter=this.yMin+(this.yMax-this.yMin)*.5,this.zCenter=this.zMin+(this.zMax-this.zMin)*.5}getMeshesForClick(){const e=[];for(let t in this.sections)this.sections[t].meshForClick&&e.push(this.sections[t].meshForClick);for(let t in this.nodes)this.nodes[t].meshForClick&&e.push(this.nodes[t].meshForClick);return e}focusOn(e){if(this.nodeLabel||(this.nodeLabel=new Fn(new tu(Jo*1.5,32,32),new Of({...hf,color:16711935})),this.mesh.add(this.nodeLabel)),this.nodeLabel.visible=!1,(e==null?void 0:e.typeItem)===Qo.typeItem){const t=this.nodes[e.Id],{pos:r}=t;this.nodeLabel.position.set(...r),this.nodeLabel.visible=!0}if(this._currentSectionIdFocus!==null){const{startIndex:t,endIndex:r,currentColor:a,isPicked:l}=this.sections[this._currentSectionIdFocus];!l&&this._fillSegmentByColor(t,r,a)}if(this._currentSectionIdFocus=null,(e==null?void 0:e.typeItem)===Zo.typeItem&&this._currentSectionIdFocus!==e.Id){this._currentSectionIdFocus=e.Id;const{startIndex:t,endIndex:r,isPicked:a}=this.sections[e.Id];!a&&this._fillSegmentByColor(t,r,bx)}}setCurrentItemPicked(e,t){if(this.mesh){if(this.nodeLabelPicked||(this.nodeLabelPicked=new Fn(new tu(Jo*1.5,32,32),new Of({...hf,color:255})),this.mesh.add(this.nodeLabelPicked)),this._currentSectionIdPicked&&(this.sections[this._currentSectionIdPicked].isPicked=!1,this._fillSegmentByColor(this.sections[this._currentSectionIdPicked].startIndex,this.sections[this._currentSectionIdPicked].endIndex,this.sections[this._currentSectionIdPicked].currentColor),this._currentSectionIdPicked=null),this.nodeLabelPicked.visible=!1,e===Qo.typeItem&&t){this.nodeLabelPicked.visible=!0;const r=this.nodes[t],{pos:a}=r;this.nodeLabelPicked.position.set(...a)}e===Zo.typeItem&&t&&(this.sections[t].isPicked=!0,this._fillSegmentByColor(this.sections[t].startIndex,this.sections[t].endIndex,Px),this._currentSectionIdPicked=t)}}highlightSections(e){if(!this.tunnelsMesh||!this.tunnelsMesh.geometry.index)return;const t=e.length>0?Lx:su;for(let r in this.sections){this.sections[r].currentColor=t;const{startIndex:a,endIndex:l,isPicked:d}=this.sections[r];!d&&this._fillSegmentByColor(a,l,t)}for(let r=0;r<e.length;++r){const a=e[r];if(!this.sections[a])continue;this.sections[a].currentColor=Nx;const{startIndex:l,endIndex:d,isPicked:c}=this.sections[a];!c&&this._fillSegmentByColor(l,d,this.sections[a].currentColor)}}_fillSegmentByColor(e,t,r){if(!this.tunnelsMesh)return;const{index:a}=this.tunnelsMesh.geometry;if(!a)return;const{color:l}=this.tunnelsMesh.geometry.attributes;for(let d=a.array[e]*3;d<a.array[t]*3;d+=3)l.array[d]=r[0],l.array[d+1]=r[1],l.array[d+2]=r[2];l.needsUpdate=!0}}class NA{constructor(){Oe(this,"graph",null);Oe(this,"_studio",null);Oe(this,"_meshBuilder",null);Oe(this,"_cbOnMouseOverElement",()=>{})}async build(){const e=new Dx;if(e.start(),this._studio=new uA,this._meshBuilder=new PA,this._meshBuilder.init(),this._studio.add(this._meshBuilder.mesh),!this.graph)return;this._meshBuilder.setGraph(this.graph),this._meshBuilder.drawTunnels(),this._studio.setMeshForMouseOver(this._meshBuilder.getMeshesForClick()),this._studio.setCbOnMouseOver(f=>{this._meshBuilder&&(this._meshBuilder.focusOn(f),this._cbOnMouseOverElement(f))});const{xCenter:t,yCenter:r,zCenter:a,zMax:l,zW:d}=this._meshBuilder;this._studio.camera.position.set(t,r,l+d*.3),this._studio.cameraLookAt(t,r,a);const c=new TA;c.init(this._studio.camera,this._studio.containerDom),c.setTargetCoords(t,r,a),c.enable(),e.on(()=>{this._studio&&(c.update(),this._studio.render())})}setGraph(e){this.graph=e}setCurrentItemPicked(e,t=null){this._meshBuilder&&this._meshBuilder.setCurrentItemPicked(e,t)}setCurrentHorizonName(e){if(!this.graph||!this._meshBuilder)return;const t=this.graph.getSectionsByHorizonName(e);this._meshBuilder.highlightSections(t)}appendParentDomContainer(e){e&&this._studio&&this._studio.setDomParent(e)}onMouseOver(e){this._cbOnMouseOverElement=e}}const LA=s=>({isShowComponentLoader:s.threeUI.isShowComponentLoader,currentHorizon:s.threeUI.currentButtonHorizon,сurrentItemId:s.threeUI.сurrentItemId,сurrentItemType:s.threeUI.сurrentItemType,bottomInfo:s.threeUI.bottomInfo}),IA=s=>({showApplication:()=>s({type:hi.SHOW_APPLICATION}),setCurrentItem:(e,t=null)=>s({type:hi.SET_CURRENT_ITEM,typeItem:e,Id:t}),setHorizonsNames:e=>s({type:hi.SET_BUTTONS_HORIZONS,value:e}),showBottomSectorInfo:e=>s({type:hi.SHOW_BOTTOM_SECTOR_INFO,text:e})}),DA=ru(LA,IA),UA=s=>{const e=ct.useRef(null),t=ct.useRef(null);return ct.useEffect(()=>{if(t.current)return;const r=new NA;t.current=r,(async()=>{const l=await Cx(mx),d=new Ix;d.parse(l),r.setGraph(d),await r.build(),r.onMouseOver(c=>{if(c===null){s.setCurrentItem(null);return}s.setCurrentItem(c.typeItem,c.Id)}),r.appendParentDomContainer(e.current),s.setHorizonsNames(d.getHorizonsNames()),s.showApplication()})().then()},[s.setCurrentItem]),ct.useEffect(()=>{t.current&&t.current.setCurrentHorizonName(s.currentHorizon)},[s.currentHorizon]),ct.useEffect(()=>{if(!e.current)return;let r=Date.now();const a=()=>{r=Date.now()},l=()=>{if(!t.current||!t.current.graph||Date.now()-r>200)return;const d=t.current.graph.getItemData(s.сurrentItemType,s.сurrentItemId);s.showBottomSectorInfo(d)};return e.current.addEventListener("pointerdown",a),e.current.addEventListener("pointerup",l),()=>{e.current&&(e.current.removeEventListener("pointerdown",a),e.current.removeEventListener("pointerup",l))}},[s.сurrentItemId,s.сurrentItemType]),ct.useEffect(()=>{t.current&&(s.bottomInfo?t.current.setCurrentItemPicked(s.сurrentItemType,s.сurrentItemId):t.current.setCurrentItemPicked(null))},[s.bottomInfo]),un.jsxs("div",{className:"App",children:[un.jsx("div",{className:"three-viewer-wrapper",ref:e}),s.isShowComponentLoader&&un.jsx(Oy,{}),un.jsx(zy,{}),un.jsx(ux,{}),un.jsx(px,{})]})},OA=DA(UA),FA=z0.createRoot(document.getElementById("root"));FA.render(un.jsx(Uy,{store:rx,children:un.jsx(OA,{})}));

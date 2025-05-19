var zf=Object.defineProperty;var Hf=(n,e,t)=>e in n?zf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var mt=(n,e,t)=>Hf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function El(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const st={},cr=[],Rn=()=>{},Vf=()=>!1,go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yl=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Tl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gf=Object.prototype.hasOwnProperty,tt=(n,e)=>Gf.call(n,e),Ie=Array.isArray,ur=n=>ns(n)==="[object Map]",vo=n=>ns(n)==="[object Set]",lc=n=>ns(n)==="[object Date]",He=n=>typeof n=="function",xt=n=>typeof n=="string",Cn=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",Wu=n=>(lt(n)||He(n))&&He(n.then)&&He(n.catch),Xu=Object.prototype.toString,ns=n=>Xu.call(n),kf=n=>ns(n).slice(8,-1),qu=n=>ns(n)==="[object Object]",bl=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hr=El(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wf=/-(\w)/g,pi=xo(n=>n.replace(Wf,(e,t)=>t?t.toUpperCase():"")),Xf=/\B([A-Z])/g,Hi=xo(n=>n.replace(Xf,"-$1").toLowerCase()),Yu=xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),No=xo(n=>n?`on${Yu(n)}`:""),ci=(n,e)=>!Object.is(n,e),Vs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ju=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},to=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let cc;const Mo=()=>cc||(cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Al(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=xt(i)?Kf(i):Al(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(xt(n)||lt(n))return n}const qf=/;(?![^(]*\))/g,Yf=/:([^]+)/,jf=/\/\*[^]*?\*\//g;function Kf(n){const e={};return n.replace(jf,"").split(qf).forEach(t=>{if(t){const i=t.split(Yf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wl(n){let e="";if(xt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=wl(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const $f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zf=El($f);function Ku(n){return!!n||n===""}function Jf(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=So(n[i],e[i]);return t}function So(n,e){if(n===e)return!0;let t=lc(n),i=lc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Cn(n),i=Cn(e),t||i)return n===e;if(t=Ie(n),i=Ie(e),t||i)return t&&i?Jf(n,e):!1;if(t=lt(n),i=lt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!So(n[o],e[o]))return!1}}return String(n)===String(e)}function Qf(n,e){return n.findIndex(t=>So(t,e))}const $u=n=>!!(n&&n.__v_isRef===!0),xr=n=>xt(n)?n:n==null?"":Ie(n)||lt(n)&&(n.toString===Xu||!He(n.toString))?$u(n)?xr(n.value):JSON.stringify(n,Zu,2):String(n),Zu=(n,e)=>$u(e)?Zu(n,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Fo(i,s)+" =>"]=r,t),{})}:vo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Fo(t))}:Cn(e)?Fo(e):lt(e)&&!Ie(e)&&!qu(e)?String(e):e,Fo=(n,e="")=>{var t;return Cn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class ed{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Wt;try{return Wt=this,e()}finally{Wt=t}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function td(){return Wt}let at;const Oo=new WeakSet;class Ju{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oo.has(this)&&(Oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uc(this),th(this);const e=at,t=gn;at=this,gn=!0;try{return this.fn()}finally{nh(this),at=e,gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pl(e);this.deps=this.depsTail=void 0,uc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ba(this)&&this.run()}get dirty(){return ba(this)}}let Qu=0,Vr,Gr;function eh(n,e=!1){if(n.flags|=8,e){n.next=Gr,Gr=n;return}n.next=Vr,Vr=n}function Rl(){Qu++}function Cl(){if(--Qu>0)return;if(Gr){let e=Gr;for(Gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vr;){let e=Vr;for(Vr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function th(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Pl(i),nd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ba(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ih(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ih(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qr)||(n.globalVersion=qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ba(n))))return;n.flags|=2;const e=n.dep,t=at,i=gn;at=n,gn=!0;try{th(n);const r=n.fn(n._value);(e.version===0||ci(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{at=t,gn=i,nh(n),n.flags&=-3}}function Pl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Pl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function nd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let gn=!0;const rh=[];function jn(){rh.push(gn),gn=!1}function Kn(){const n=rh.pop();gn=n===void 0?!0:n}function uc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=at;at=void 0;try{e()}finally{at=t}}}let qr=0;class id{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!at||!gn||at===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==at)t=this.activeLink=new id(at,this),at.deps?(t.prevDep=at.depsTail,at.depsTail.nextDep=t,at.depsTail=t):at.deps=at.depsTail=t,sh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=at.depsTail,t.nextDep=void 0,at.depsTail.nextDep=t,at.depsTail=t,at.deps===t&&(at.deps=i)}return t}trigger(e){this.version++,qr++,this.notify(e)}notify(e){Rl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cl()}}}function sh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)sh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const no=new WeakMap,Fi=Symbol(""),Aa=Symbol(""),Yr=Symbol("");function It(n,e,t){if(gn&&at){let i=no.get(n);i||no.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Dl),r.map=i,r.key=t),r.track()}}function Gn(n,e,t,i,r,s){const o=no.get(n);if(!o){qr++;return}const a=l=>{l&&l.trigger()};if(Rl(),e==="clear")o.forEach(a);else{const l=Ie(n),c=l&&bl(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Yr||!Cn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Yr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Fi)),ur(n)&&a(o.get(Aa)));break;case"delete":l||(a(o.get(Fi)),ur(n)&&a(o.get(Aa)));break;case"set":ur(n)&&a(o.get(Fi));break}}Cl()}function rd(n,e){const t=no.get(n);return t&&t.get(e)}function Wi(n){const e=Je(n);return e===n?e:(It(e,"iterate",Yr),an(n)?e:e.map(Rt))}function Eo(n){return It(n=Je(n),"iterate",Yr),n}const sd={__proto__:null,[Symbol.iterator](){return Bo(this,Symbol.iterator,Rt)},concat(...n){return Wi(this).concat(...n.map(e=>Ie(e)?Wi(e):e))},entries(){return Bo(this,"entries",n=>(n[1]=Rt(n[1]),n))},every(n,e){return Un(this,"every",n,e,void 0,arguments)},filter(n,e){return Un(this,"filter",n,e,t=>t.map(Rt),arguments)},find(n,e){return Un(this,"find",n,e,Rt,arguments)},findIndex(n,e){return Un(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Un(this,"findLast",n,e,Rt,arguments)},findLastIndex(n,e){return Un(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Un(this,"forEach",n,e,void 0,arguments)},includes(...n){return zo(this,"includes",n)},indexOf(...n){return zo(this,"indexOf",n)},join(n){return Wi(this).join(n)},lastIndexOf(...n){return zo(this,"lastIndexOf",n)},map(n,e){return Un(this,"map",n,e,void 0,arguments)},pop(){return Pr(this,"pop")},push(...n){return Pr(this,"push",n)},reduce(n,...e){return hc(this,"reduce",n,e)},reduceRight(n,...e){return hc(this,"reduceRight",n,e)},shift(){return Pr(this,"shift")},some(n,e){return Un(this,"some",n,e,void 0,arguments)},splice(...n){return Pr(this,"splice",n)},toReversed(){return Wi(this).toReversed()},toSorted(n){return Wi(this).toSorted(n)},toSpliced(...n){return Wi(this).toSpliced(...n)},unshift(...n){return Pr(this,"unshift",n)},values(){return Bo(this,"values",Rt)}};function Bo(n,e,t){const i=Eo(n),r=i[e]();return i!==n&&!an(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const od=Array.prototype;function Un(n,e,t,i,r,s){const o=Eo(n),a=o!==n&&!an(n),l=o[e];if(l!==od[e]){const h=l.apply(n,s);return a?Rt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Rt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function hc(n,e,t,i){const r=Eo(n);let s=t;return r!==n&&(an(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Rt(a),l,n)}),r[e](s,...i)}function zo(n,e,t){const i=Je(n);It(i,"iterate",Yr);const r=i[e](...t);return(r===-1||r===!1)&&Ul(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Pr(n,e,t=[]){jn(),Rl();const i=Je(n)[e].apply(n,t);return Cl(),Kn(),i}const ad=El("__proto__,__v_isRef,__isVue"),oh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cn));function ld(n){Cn(n)||(n=String(n));const e=Je(this);return It(e,"has",n),e.hasOwnProperty(n)}class ah{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?vd:hh:s?uh:ch).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!r){let l;if(o&&(l=sd[t]))return l;if(t==="hasOwnProperty")return ld}const a=Reflect.get(e,t,Ct(e)?e:i);return(Cn(t)?oh.has(t):ad(t))||(r||It(e,"get",t),s)?a:Ct(a)?o&&bl(t)?a:a.value:lt(a)?r?fh(a):is(a):a}}class lh extends ah{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=mi(s);if(!an(i)&&!mi(i)&&(s=Je(s),i=Je(i)),!Ie(e)&&Ct(s)&&!Ct(i))return l?!1:(s.value=i,!0)}const o=Ie(e)&&bl(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,Ct(e)?e:r);return e===Je(r)&&(o?ci(i,s)&&Gn(e,"set",t,i):Gn(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Gn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Cn(t)||!oh.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",Ie(e)?"length":Fi),Reflect.ownKeys(e)}}class cd extends ah{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ud=new lh,hd=new cd,fd=new lh(!0);const wa=n=>n,ds=n=>Reflect.getPrototypeOf(n);function dd(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),o=ur(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?wa:e?io:Rt;return!e&&It(s,"iterate",l?Aa:Fi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ps(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function pd(n,e){const t={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);n||(ci(r,a)&&It(o,"get",r),It(o,"get",a));const{has:l}=ds(o),c=e?wa:n?io:Rt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&It(Je(r),"iterate",Fi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return n||(ci(r,a)&&It(o,"has",r),It(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Je(a),c=e?wa:n?io:Rt;return!n&&It(l,"iterate",Fi),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return Ut(t,n?{add:ps("add"),set:ps("set"),delete:ps("delete"),clear:ps("clear")}:{add(r){!e&&!an(r)&&!mi(r)&&(r=Je(r));const s=Je(this);return ds(s).has.call(s,r)||(s.add(r),Gn(s,"add",r,r)),this},set(r,s){!e&&!an(s)&&!mi(s)&&(s=Je(s));const o=Je(this),{has:a,get:l}=ds(o);let c=a.call(o,r);c||(r=Je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ci(s,u)&&Gn(o,"set",r,s):Gn(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=ds(s);let l=o.call(s,r);l||(r=Je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Gn(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&Gn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=dd(r,n,e)}),t}function Ll(n,e){const t=pd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(tt(t,r)&&r in i?t:i,r,s)}const md={get:Ll(!1,!1)},_d={get:Ll(!1,!0)},gd={get:Ll(!0,!1)};const ch=new WeakMap,uh=new WeakMap,hh=new WeakMap,vd=new WeakMap;function xd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Md(n){return n.__v_skip||!Object.isExtensible(n)?0:xd(kf(n))}function is(n){return mi(n)?n:Il(n,!1,ud,md,ch)}function Sd(n){return Il(n,!1,fd,_d,uh)}function fh(n){return Il(n,!0,hd,gd,hh)}function Il(n,e,t,i,r){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Md(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function hr(n){return mi(n)?hr(n.__v_raw):!!(n&&n.__v_isReactive)}function mi(n){return!!(n&&n.__v_isReadonly)}function an(n){return!!(n&&n.__v_isShallow)}function Ul(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Ed(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&ju(n,"__v_skip",!0),n}const Rt=n=>lt(n)?is(n):n,io=n=>lt(n)?fh(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function yd(n){return Td(n,!1)}function Td(n,e){return Ct(n)?n:new bd(n,e)}class bd{constructor(e,t){this.dep=new Dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:Rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||an(e)||mi(e);e=i?e:Je(e),ci(e,t)&&(this._rawValue=e,this._value=i?e:Rt(e),this.dep.trigger())}}function Ra(n){return Ct(n)?n.value:n}const Ad={get:(n,e,t)=>e==="__v_raw"?n:Ra(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function dh(n){return hr(n)?n:new Proxy(n,Ad)}function wd(n){const e=Ie(n)?new Array(n.length):{};for(const t in n)e[t]=Cd(n,t);return e}class Rd{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rd(Je(this._object),this._key)}}function Cd(n,e,t){const i=n[e];return Ct(i)?i:new Rd(n,e,t)}class Pd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return eh(this,!0),!0}get value(){const e=this.dep.track();return ih(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dd(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new Pd(i,r,t)}const ms={},ro=new WeakMap;let Ri;function Ld(n,e=!1,t=Ri){if(t){let i=ro.get(t);i||ro.set(t,i=[]),i.push(n)}}function Id(n,e,t=st){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:an(E)||r===!1||r===0?kn(E,1):kn(E);let u,h,f,p,g=!1,v=!1;if(Ct(n)?(h=()=>n.value,g=an(n)):hr(n)?(h=()=>c(n),g=!0):Ie(n)?(v=!0,g=n.some(E=>hr(E)||an(E)),h=()=>n.map(E=>{if(Ct(E))return E.value;if(hr(E))return c(E);if(He(E))return l?l(E,2):E()})):He(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){jn();try{f()}finally{Kn()}}const E=Ri;Ri=u;try{return l?l(n,3,[p]):n(p)}finally{Ri=E}}:h=Rn,e&&r){const E=h,I=r===!0?1/0:r;h=()=>kn(E(),I)}const m=td(),d=()=>{u.stop(),m&&m.active&&Tl(m.effects,u)};if(s&&e){const E=e;e=(...I)=>{E(...I),d()}}let A=v?new Array(n.length).fill(ms):ms;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(r||g||(v?I.some((L,R)=>ci(L,A[R])):ci(I,A))){f&&f();const L=Ri;Ri=u;try{const R=[I,A===ms?void 0:v&&A[0]===ms?[]:A,p];l?l(e,3,R):e(...R),A=I}finally{Ri=L}}}else u.run()};return a&&a(b),u=new Ju(h),u.scheduler=o?()=>o(b,!1):b,p=E=>Ld(E,!1,u),f=u.onStop=()=>{const E=ro.get(u);if(E){if(l)l(E,4);else for(const I of E)I();ro.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function kn(n,e=1/0,t){if(e<=0||!lt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ct(n))kn(n.value,e,t);else if(Ie(n))for(let i=0;i<n.length;i++)kn(n[i],e,t);else if(vo(n)||ur(n))n.forEach(i=>{kn(i,e,t)});else if(qu(n)){for(const i in n)kn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&kn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(n,e,t,i){try{return i?n(...i):n()}catch(r){yo(r,e,t)}}function Pn(n,e,t,i){if(He(n)){const r=rs(n,e,t,i);return r&&Wu(r)&&r.catch(s=>{yo(s,e,t)}),r}if(Ie(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Pn(n[s],e,t,i));return r}}function yo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||st;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){jn(),rs(s,null,10,[n,l,c]),Kn();return}}Ud(n,t,r,i,o)}function Ud(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Bt=[];let En=-1;const fr=[];let ii=null,or=0;const ph=Promise.resolve();let so=null;function mh(n){const e=so||ph;return n?e.then(this?n.bind(this):n):e}function Nd(n){let e=En+1,t=Bt.length;for(;e<t;){const i=e+t>>>1,r=Bt[i],s=jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Nl(n){if(!(n.flags&1)){const e=jr(n),t=Bt[Bt.length-1];!t||!(n.flags&2)&&e>=jr(t)?Bt.push(n):Bt.splice(Nd(e),0,n),n.flags|=1,_h()}}function _h(){so||(so=ph.then(vh))}function Fd(n){Ie(n)?fr.push(...n):ii&&n.id===-1?ii.splice(or+1,0,n):n.flags&1||(fr.push(n),n.flags|=1),_h()}function fc(n,e,t=En+1){for(;t<Bt.length;t++){const i=Bt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Bt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gh(n){if(fr.length){const e=[...new Set(fr)].sort((t,i)=>jr(t)-jr(i));if(fr.length=0,ii){ii.push(...e);return}for(ii=e,or=0;or<ii.length;or++){const t=ii[or];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ii=null,or=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vh(n){try{for(En=0;En<Bt.length;En++){const e=Bt[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Bt.length;En++){const e=Bt[En];e&&(e.flags&=-2)}En=-1,Bt.length=0,gh(),so=null,(Bt.length||fr.length)&&vh()}}let sn=null,xh=null;function oo(n){const e=sn;return sn=n,xh=n&&n.type.__scopeId||null,e}function Od(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Sc(-1);const s=oo(e);let o;try{o=n(...r)}finally{oo(s),i._d&&Sc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Fl(n,e){if(sn===null)return n;const t=wo(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=st]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&kn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Mi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(jn(),Pn(l,t,8,[n.el,a,n,e]),Kn())}}const Bd=Symbol("_vte"),zd=n=>n.__isTeleport;function Ol(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ol(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wr(n,e){return He(n)?Ut({name:n.name},e,{setup:n}):n}function Mh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ao(n,e,t,i,r=!1){if(Ie(n)){n.forEach((g,v)=>ao(g,e&&(Ie(e)?e[v]:e),t,i,r));return}if(kr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ao(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?wo(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,h=a.setupState,f=Je(h),p=h===st?()=>!1:g=>tt(f,g);if(c!=null&&c!==l&&(xt(c)?(u[c]=null,p(c)&&(h[c]=null)):Ct(c)&&(c.value=null)),He(l))rs(l,a,12,[o,u]);else{const g=xt(l),v=Ct(l);if(g||v){const m=()=>{if(n.f){const d=g?p(l)?h[l]:u[l]:l.value;r?Ie(d)&&Tl(d,s):Ie(d)?d.includes(s)||d.push(s):g?(u[l]=[s],p(l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,p(l)&&(h[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Zt(m,t)):m()}}}Mo().requestIdleCallback;Mo().cancelIdleCallback;const kr=n=>!!n.type.__asyncLoader,Sh=n=>n.type.__isKeepAlive;function Hd(n,e){Eh(n,"a",e)}function Vd(n,e){Eh(n,"da",e)}function Eh(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(To(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Sh(r.parent.vnode)&&Gd(i,e,t,r),r=r.parent}}function Gd(n,e,t,i){const r=To(e,n,i,!0);bh(()=>{Tl(i[e],r)},t)}function To(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{jn();const a=ss(t),l=Pn(e,t,n,o);return a(),Kn(),l});return i?r.unshift(s):r.push(s),s}}const $n=n=>(e,t=zt)=>{(!$r||n==="sp")&&To(n,(...i)=>e(...i),t)},kd=$n("bm"),yh=$n("m"),Wd=$n("bu"),Xd=$n("u"),Th=$n("bum"),bh=$n("um"),qd=$n("sp"),Yd=$n("rtg"),jd=$n("rtc");function Kd(n,e=zt){To("ec",n,e)}const $d=Symbol.for("v-ndc");function Zd(n,e,t,i){let r;const s=t,o=Ie(n);if(o||xt(n)){const a=o&&hr(n);let l=!1,c=!1;a&&(l=!an(n),c=mi(n),n=Eo(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(l?c?io(Rt(n[u])):Rt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(lt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ca=n=>n?Xh(n)?wo(n):Ca(n.parent):null,Wr=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ca(n.parent),$root:n=>Ca(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wh(n),$forceUpdate:n=>n.f||(n.f=()=>{Nl(n.update)}),$nextTick:n=>n.n||(n.n=mh.bind(n.proxy)),$watch:n=>xp.bind(n)}),Ho=(n,e)=>n!==st&&!n.__isScriptSetup&&tt(n,e),Jd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ho(i,e))return o[e]=1,i[e];if(r!==st&&tt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(t!==st&&tt(t,e))return o[e]=4,t[e];Pa&&(o[e]=0)}}const u=Wr[e];let h,f;if(u)return e==="$attrs"&&It(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==st&&tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ho(r,e)?(r[e]=t,!0):i!==st&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==st&&tt(n,o)||Ho(e,o)||(a=s[0])&&tt(a,o)||tt(i,o)||tt(Wr,o)||tt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function dc(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Pa=!0;function Qd(n){const e=wh(n),t=n.proxy,i=n.ctx;Pa=!1,e.beforeCreate&&pc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:b,unmounted:E,render:I,renderTracked:L,renderTriggered:R,errorCaptured:U,serverPrefetch:T,expose:S,inheritAttrs:C,components:K,directives:V,filters:ee}=e;if(c&&ep(c,i,null),o)for(const j in o){const B=o[j];He(B)&&(i[j]=B.bind(t))}if(r){const j=r.call(t,t);lt(j)&&(n.data=is(j))}if(Pa=!0,s)for(const j in s){const B=s[j],ue=He(B)?B.bind(t,t):He(B.get)?B.get.bind(t,t):Rn,me=!He(B)&&He(B.set)?B.set.bind(t):Rn,ye=Ro({get:ue,set:me});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ce=>ye.value=Ce})}if(a)for(const j in a)Ah(a[j],i,t,j);if(l){const j=He(l)?l.call(t):l;Reflect.ownKeys(j).forEach(B=>{op(B,j[B])})}u&&pc(u,n,"c");function X(j,B){Ie(B)?B.forEach(ue=>j(ue.bind(t))):B&&j(B.bind(t))}if(X(kd,h),X(yh,f),X(Wd,p),X(Xd,g),X(Hd,v),X(Vd,m),X(Kd,U),X(jd,L),X(Yd,R),X(Th,A),X(bh,E),X(qd,T),Ie(S))if(S.length){const j=n.exposed||(n.exposed={});S.forEach(B=>{Object.defineProperty(j,B,{get:()=>t[B],set:ue=>t[B]=ue})})}else n.exposed||(n.exposed={});I&&n.render===Rn&&(n.render=I),C!=null&&(n.inheritAttrs=C),K&&(n.components=K),V&&(n.directives=V),T&&Mh(n)}function ep(n,e,t=Rn){Ie(n)&&(n=Da(n));for(const i in n){const r=n[i];let s;lt(r)?"default"in r?s=Gs(r.from||i,r.default,!0):s=Gs(r.from||i):s=Gs(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function pc(n,e,t){Pn(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ah(n,e,t,i){let r=i.includes(".")?Hh(t,i):()=>t[i];if(xt(n)){const s=e[n];He(s)&&ks(r,s)}else if(He(n))ks(r,n.bind(t));else if(lt(n))if(Ie(n))n.forEach(s=>Ah(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&ks(r,s,n)}}function wh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>lo(l,c,o,!0)),lo(l,e,o)),lt(e)&&s.set(e,l),l}function lo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&lo(n,s,t,!0),r&&r.forEach(o=>lo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=tp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const tp={data:mc,props:_c,emits:_c,methods:Br,computed:Br,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Br,directives:Br,watch:ip,provide:mc,inject:np};function mc(n,e){return e?n?function(){return Ut(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function np(n,e){return Br(Da(n),Da(e))}function Da(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?Ut(Object.create(null),n,e):e}function _c(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:Ut(Object.create(null),dc(n),dc(e??{})):e}function ip(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=Ft(n[i],e[i]);return t}function Rh(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rp=0;function sp(n,e){return function(i,r=null){He(i)||(i=Ut({},i)),r!=null&&!lt(r)&&(r=null);const s=Rh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:rp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vp,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...h)):He(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||St(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,wo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=dr;dr=c;try{return u()}finally{dr=h}}};return c}}let dr=null;function op(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function Gs(n,e,t=!1){const i=zt||sn;if(i||dr){const r=dr?dr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const Ch={},Ph=()=>Object.create(Ch),Dh=n=>Object.getPrototypeOf(n)===Ch;function ap(n,e,t,i=!1){const r={},s=Ph();n.propsDefaults=Object.create(null),Lh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Sd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function lp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(bo(n.emitsOptions,f))continue;const p=e[f];if(l)if(tt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=pi(f);r[g]=La(l,a,g,p,n,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Lh(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!tt(e,h)&&((u=Hi(h))===h||!tt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=La(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!tt(e,h))&&(delete s[h],c=!0)}c&&Gn(n.attrs,"set","")}function Lh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hr(l))continue;const c=e[l];let u;r&&tt(r,u=pi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:bo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Je(t),c=a||st;for(let u=0;u<s.length;u++){const h=s[u];t[h]=La(r,l,h,c[h],n,!tt(c,h))}}return o}function La(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ss(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Hi(t))&&(i=!0))}return i}const cp=new WeakMap;function Ih(n,e,t=!1){const i=t?cp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=h=>{l=!0;const[f,p]=Ih(h,e,!0);Ut(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return lt(n)&&i.set(n,cr),cr;if(Ie(s))for(let u=0;u<s.length;u++){const h=pi(s[u]);gc(h)&&(o[h]=st)}else if(s)for(const u in s){const h=pi(u);if(gc(h)){const f=s[u],p=o[h]=Ie(f)||He(f)?{type:f}:Ut({},f),g=p.type;let v=!1,m=!0;if(Ie(g))for(let d=0;d<g.length;++d){const A=g[d],b=He(A)&&A.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=He(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||tt(p,"default"))&&a.push(h)}}const c=[o,a];return lt(n)&&i.set(n,c),c}function gc(n){return n[0]!=="$"&&!Hr(n)}const Bl=n=>n[0]==="_"||n==="$stable",zl=n=>Ie(n)?n.map(yn):[yn(n)],up=(n,e,t)=>{if(e._n)return e;const i=Od((...r)=>zl(e(...r)),t);return i._c=!1,i},Uh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Bl(r))continue;const s=n[r];if(He(s))e[r]=up(r,s,i);else if(s!=null){const o=zl(s);e[r]=()=>o}}},Nh=(n,e)=>{const t=zl(e);n.slots.default=()=>t},Fh=(n,e,t)=>{for(const i in e)(t||!Bl(i))&&(n[i]=e[i])},hp=(n,e,t)=>{const i=n.slots=Ph();if(n.vnode.shapeFlag&32){const r=e._;r?(Fh(i,e,t),t&&ju(i,"_",r,!0)):Uh(e,i)}else e&&Nh(n,e)},fp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=st;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Fh(r,e,t):(s=!e.$stable,Uh(e,r)),o=e}else e&&(Nh(n,e),o={default:1});if(s)for(const a in r)!Bl(a)&&o[a]==null&&delete r[a]},Zt=Ap;function dp(n){return pp(n)}function pp(n,e){const t=Mo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Rn,insertStaticContent:g}=n,v=(w,P,M,re=null,$=null,Z=null,J=void 0,se=null,Y=!!P.dynamicChildren)=>{if(w===P)return;w&&!Dr(w,P)&&(re=fe(w),Ce(w,$,Z,!0),w=null),P.patchFlag===-2&&(Y=!1,P.dynamicChildren=null);const{type:x,ref:_,shapeFlag:D}=P;switch(x){case Ao:m(w,P,M,re);break;case Mr:d(w,P,M,re);break;case Go:w==null&&A(P,M,re,J);break;case dn:K(w,P,M,re,$,Z,J,se,Y);break;default:D&1?I(w,P,M,re,$,Z,J,se,Y):D&6?V(w,P,M,re,$,Z,J,se,Y):(D&64||D&128)&&x.process(w,P,M,re,$,Z,J,se,Y,Me)}_!=null&&$&&ao(_,w&&w.ref,Z,P||w,!P)},m=(w,P,M,re)=>{if(w==null)i(P.el=a(P.children),M,re);else{const $=P.el=w.el;P.children!==w.children&&c($,P.children)}},d=(w,P,M,re)=>{w==null?i(P.el=l(P.children||""),M,re):P.el=w.el},A=(w,P,M,re)=>{[w.el,w.anchor]=g(w.children,P,M,re,w.el,w.anchor)},b=({el:w,anchor:P},M,re)=>{let $;for(;w&&w!==P;)$=f(w),i(w,M,re),w=$;i(P,M,re)},E=({el:w,anchor:P})=>{let M;for(;w&&w!==P;)M=f(w),r(w),w=M;r(P)},I=(w,P,M,re,$,Z,J,se,Y)=>{P.type==="svg"?J="svg":P.type==="math"&&(J="mathml"),w==null?L(P,M,re,$,Z,J,se,Y):T(w,P,$,Z,J,se,Y)},L=(w,P,M,re,$,Z,J,se)=>{let Y,x;const{props:_,shapeFlag:D,transition:z,dirs:k}=w;if(Y=w.el=o(w.type,Z,_&&_.is,_),D&8?u(Y,w.children):D&16&&U(w.children,Y,null,re,$,Vo(w,Z),J,se),k&&Mi(w,null,re,"created"),R(Y,w,w.scopeId,J,re),_){for(const he in _)he!=="value"&&!Hr(he)&&s(Y,he,null,_[he],Z,re);"value"in _&&s(Y,"value",null,_.value,Z),(x=_.onVnodeBeforeMount)&&Sn(x,re,w)}k&&Mi(w,null,re,"beforeMount");const G=mp($,z);G&&z.beforeEnter(Y),i(Y,P,M),((x=_&&_.onVnodeMounted)||G||k)&&Zt(()=>{x&&Sn(x,re,w),G&&z.enter(Y),k&&Mi(w,null,re,"mounted")},$)},R=(w,P,M,re,$)=>{if(M&&p(w,M),re)for(let Z=0;Z<re.length;Z++)p(w,re[Z]);if($){let Z=$.subTree;if(P===Z||Gh(Z.type)&&(Z.ssContent===P||Z.ssFallback===P)){const J=$.vnode;R(w,J,J.scopeId,J.slotScopeIds,$.parent)}}},U=(w,P,M,re,$,Z,J,se,Y=0)=>{for(let x=Y;x<w.length;x++){const _=w[x]=se?ri(w[x]):yn(w[x]);v(null,_,P,M,re,$,Z,J,se)}},T=(w,P,M,re,$,Z,J)=>{const se=P.el=w.el;let{patchFlag:Y,dynamicChildren:x,dirs:_}=P;Y|=w.patchFlag&16;const D=w.props||st,z=P.props||st;let k;if(M&&Si(M,!1),(k=z.onVnodeBeforeUpdate)&&Sn(k,M,P,w),_&&Mi(P,w,M,"beforeUpdate"),M&&Si(M,!0),(D.innerHTML&&z.innerHTML==null||D.textContent&&z.textContent==null)&&u(se,""),x?S(w.dynamicChildren,x,se,M,re,Vo(P,$),Z):J||B(w,P,se,null,M,re,Vo(P,$),Z,!1),Y>0){if(Y&16)C(se,D,z,M,$);else if(Y&2&&D.class!==z.class&&s(se,"class",null,z.class,$),Y&4&&s(se,"style",D.style,z.style,$),Y&8){const G=P.dynamicProps;for(let he=0;he<G.length;he++){const oe=G[he],be=D[oe],we=z[oe];(we!==be||oe==="value")&&s(se,oe,be,we,$,M)}}Y&1&&w.children!==P.children&&u(se,P.children)}else!J&&x==null&&C(se,D,z,M,$);((k=z.onVnodeUpdated)||_)&&Zt(()=>{k&&Sn(k,M,P,w),_&&Mi(P,w,M,"updated")},re)},S=(w,P,M,re,$,Z,J)=>{for(let se=0;se<P.length;se++){const Y=w[se],x=P[se],_=Y.el&&(Y.type===dn||!Dr(Y,x)||Y.shapeFlag&70)?h(Y.el):M;v(Y,x,_,null,re,$,Z,J,!0)}},C=(w,P,M,re,$)=>{if(P!==M){if(P!==st)for(const Z in P)!Hr(Z)&&!(Z in M)&&s(w,Z,P[Z],null,$,re);for(const Z in M){if(Hr(Z))continue;const J=M[Z],se=P[Z];J!==se&&Z!=="value"&&s(w,Z,se,J,$,re)}"value"in M&&s(w,"value",P.value,M.value,$)}},K=(w,P,M,re,$,Z,J,se,Y)=>{const x=P.el=w?w.el:a(""),_=P.anchor=w?w.anchor:a("");let{patchFlag:D,dynamicChildren:z,slotScopeIds:k}=P;k&&(se=se?se.concat(k):k),w==null?(i(x,M,re),i(_,M,re),U(P.children||[],M,_,$,Z,J,se,Y)):D>0&&D&64&&z&&w.dynamicChildren?(S(w.dynamicChildren,z,M,$,Z,J,se),(P.key!=null||$&&P===$.subTree)&&Oh(w,P,!0)):B(w,P,M,_,$,Z,J,se,Y)},V=(w,P,M,re,$,Z,J,se,Y)=>{P.slotScopeIds=se,w==null?P.shapeFlag&512?$.ctx.activate(P,M,re,J,Y):ee(P,M,re,$,Z,J,Y):te(w,P,Y)},ee=(w,P,M,re,$,Z,J)=>{const se=w.component=Np(w,re,$);if(Sh(w)&&(se.ctx.renderer=Me),Fp(se,!1,J),se.asyncDep){if($&&$.registerDep(se,X,J),!w.el){const Y=se.subTree=St(Mr);d(null,Y,P,M)}}else X(se,w,P,M,$,Z,J)},te=(w,P,M)=>{const re=P.component=w.component;if(Tp(w,P,M))if(re.asyncDep&&!re.asyncResolved){j(re,P,M);return}else re.next=P,re.update();else P.el=w.el,re.vnode=P},X=(w,P,M,re,$,Z,J)=>{const se=()=>{if(w.isMounted){let{next:D,bu:z,u:k,parent:G,vnode:he}=w;{const _e=Bh(w);if(_e){D&&(D.el=he.el,j(w,D,J)),_e.asyncDep.then(()=>{w.isUnmounted||se()});return}}let oe=D,be;Si(w,!1),D?(D.el=he.el,j(w,D,J)):D=he,z&&Vs(z),(be=D.props&&D.props.onVnodeBeforeUpdate)&&Sn(be,G,D,he),Si(w,!0);const we=xc(w),ae=w.subTree;w.subTree=we,v(ae,we,h(ae.el),fe(ae),w,$,Z),D.el=we.el,oe===null&&bp(w,we.el),k&&Zt(k,$),(be=D.props&&D.props.onVnodeUpdated)&&Zt(()=>Sn(be,G,D,he),$)}else{let D;const{el:z,props:k}=P,{bm:G,m:he,parent:oe,root:be,type:we}=w,ae=kr(P);Si(w,!1),G&&Vs(G),!ae&&(D=k&&k.onVnodeBeforeMount)&&Sn(D,oe,P),Si(w,!0);{be.ce&&be.ce._injectChildStyle(we);const _e=w.subTree=xc(w);v(null,_e,M,re,w,$,Z),P.el=_e.el}if(he&&Zt(he,$),!ae&&(D=k&&k.onVnodeMounted)){const _e=P;Zt(()=>Sn(D,oe,_e),$)}(P.shapeFlag&256||oe&&kr(oe.vnode)&&oe.vnode.shapeFlag&256)&&w.a&&Zt(w.a,$),w.isMounted=!0,P=M=re=null}};w.scope.on();const Y=w.effect=new Ju(se);w.scope.off();const x=w.update=Y.run.bind(Y),_=w.job=Y.runIfDirty.bind(Y);_.i=w,_.id=w.uid,Y.scheduler=()=>Nl(_),Si(w,!0),x()},j=(w,P,M)=>{P.component=w;const re=w.vnode.props;w.vnode=P,w.next=null,lp(w,P.props,re,M),fp(w,P.children,M),jn(),fc(w),Kn()},B=(w,P,M,re,$,Z,J,se,Y=!1)=>{const x=w&&w.children,_=w?w.shapeFlag:0,D=P.children,{patchFlag:z,shapeFlag:k}=P;if(z>0){if(z&128){me(x,D,M,re,$,Z,J,se,Y);return}else if(z&256){ue(x,D,M,re,$,Z,J,se,Y);return}}k&8?(_&16&&Ee(x,$,Z),D!==x&&u(M,D)):_&16?k&16?me(x,D,M,re,$,Z,J,se,Y):Ee(x,$,Z,!0):(_&8&&u(M,""),k&16&&U(D,M,re,$,Z,J,se,Y))},ue=(w,P,M,re,$,Z,J,se,Y)=>{w=w||cr,P=P||cr;const x=w.length,_=P.length,D=Math.min(x,_);let z;for(z=0;z<D;z++){const k=P[z]=Y?ri(P[z]):yn(P[z]);v(w[z],k,M,null,$,Z,J,se,Y)}x>_?Ee(w,$,Z,!0,!1,D):U(P,M,re,$,Z,J,se,Y,D)},me=(w,P,M,re,$,Z,J,se,Y)=>{let x=0;const _=P.length;let D=w.length-1,z=_-1;for(;x<=D&&x<=z;){const k=w[x],G=P[x]=Y?ri(P[x]):yn(P[x]);if(Dr(k,G))v(k,G,M,null,$,Z,J,se,Y);else break;x++}for(;x<=D&&x<=z;){const k=w[D],G=P[z]=Y?ri(P[z]):yn(P[z]);if(Dr(k,G))v(k,G,M,null,$,Z,J,se,Y);else break;D--,z--}if(x>D){if(x<=z){const k=z+1,G=k<_?P[k].el:re;for(;x<=z;)v(null,P[x]=Y?ri(P[x]):yn(P[x]),M,G,$,Z,J,se,Y),x++}}else if(x>z)for(;x<=D;)Ce(w[x],$,Z,!0),x++;else{const k=x,G=x,he=new Map;for(x=G;x<=z;x++){const de=P[x]=Y?ri(P[x]):yn(P[x]);de.key!=null&&he.set(de.key,x)}let oe,be=0;const we=z-G+1;let ae=!1,_e=0;const Pe=new Array(we);for(x=0;x<we;x++)Pe[x]=0;for(x=k;x<=D;x++){const de=w[x];if(be>=we){Ce(de,$,Z,!0);continue}let Fe;if(de.key!=null)Fe=he.get(de.key);else for(oe=G;oe<=z;oe++)if(Pe[oe-G]===0&&Dr(de,P[oe])){Fe=oe;break}Fe===void 0?Ce(de,$,Z,!0):(Pe[Fe-G]=x+1,Fe>=_e?_e=Fe:ae=!0,v(de,P[Fe],M,null,$,Z,J,se,Y),be++)}const Ue=ae?_p(Pe):cr;for(oe=Ue.length-1,x=we-1;x>=0;x--){const de=G+x,Fe=P[de],Be=de+1<_?P[de+1].el:re;Pe[x]===0?v(null,Fe,M,Be,$,Z,J,se,Y):ae&&(oe<0||x!==Ue[oe]?ye(Fe,M,Be,2):oe--)}}},ye=(w,P,M,re,$=null)=>{const{el:Z,type:J,transition:se,children:Y,shapeFlag:x}=w;if(x&6){ye(w.component.subTree,P,M,re);return}if(x&128){w.suspense.move(P,M,re);return}if(x&64){J.move(w,P,M,Me);return}if(J===dn){i(Z,P,M);for(let D=0;D<Y.length;D++)ye(Y[D],P,M,re);i(w.anchor,P,M);return}if(J===Go){b(w,P,M);return}if(re!==2&&x&1&&se)if(re===0)se.beforeEnter(Z),i(Z,P,M),Zt(()=>se.enter(Z),$);else{const{leave:D,delayLeave:z,afterLeave:k}=se,G=()=>{w.ctx.isUnmounted?r(Z):i(Z,P,M)},he=()=>{D(Z,()=>{G(),k&&k()})};z?z(Z,G,he):he()}else i(Z,P,M)},Ce=(w,P,M,re=!1,$=!1)=>{const{type:Z,props:J,ref:se,children:Y,dynamicChildren:x,shapeFlag:_,patchFlag:D,dirs:z,cacheIndex:k}=w;if(D===-2&&($=!1),se!=null&&(jn(),ao(se,null,M,w,!0),Kn()),k!=null&&(P.renderCache[k]=void 0),_&256){P.ctx.deactivate(w);return}const G=_&1&&z,he=!kr(w);let oe;if(he&&(oe=J&&J.onVnodeBeforeUnmount)&&Sn(oe,P,w),_&6)ce(w.component,M,re);else{if(_&128){w.suspense.unmount(M,re);return}G&&Mi(w,null,P,"beforeUnmount"),_&64?w.type.remove(w,P,M,Me,re):x&&!x.hasOnce&&(Z!==dn||D>0&&D&64)?Ee(x,P,M,!1,!0):(Z===dn&&D&384||!$&&_&16)&&Ee(Y,P,M),re&&qe(w)}(he&&(oe=J&&J.onVnodeUnmounted)||G)&&Zt(()=>{oe&&Sn(oe,P,w),G&&Mi(w,null,P,"unmounted")},M)},qe=w=>{const{type:P,el:M,anchor:re,transition:$}=w;if(P===dn){ne(M,re);return}if(P===Go){E(w);return}const Z=()=>{r(M),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:J,delayLeave:se}=$,Y=()=>J(M,Z);se?se(w.el,Z,Y):Y()}else Z()},ne=(w,P)=>{let M;for(;w!==P;)M=f(w),r(w),w=M;r(P)},ce=(w,P,M)=>{const{bum:re,scope:$,job:Z,subTree:J,um:se,m:Y,a:x,parent:_,slots:{__:D}}=w;vc(Y),vc(x),re&&Vs(re),_&&Ie(D)&&D.forEach(z=>{_.renderCache[z]=void 0}),$.stop(),Z&&(Z.flags|=8,Ce(J,w,P,M)),se&&Zt(se,P),Zt(()=>{w.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Ee=(w,P,M,re=!1,$=!1,Z=0)=>{for(let J=Z;J<w.length;J++)Ce(w[J],P,M,re,$)},fe=w=>{if(w.shapeFlag&6)return fe(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=f(w.anchor||w.el),M=P&&P[Bd];return M?f(M):P};let Re=!1;const We=(w,P,M)=>{w==null?P._vnode&&Ce(P._vnode,null,null,!0):v(P._vnode||null,w,P,null,null,null,M),P._vnode=w,Re||(Re=!0,fc(),gh(),Re=!1)},Me={p:v,um:Ce,m:ye,r:qe,mt:ee,mc:U,pc:B,pbc:S,n:fe,o:n};return{render:We,hydrate:void 0,createApp:sp(We)}}function Vo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Si({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function mp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Oh(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ri(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Oh(o,a)),a.type===Ao&&(a.el=o.el),a.type===Mr&&!a.el&&(a.el=o.el)}}function _p(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Bh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bh(e)}function vc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const gp=Symbol.for("v-scx"),vp=()=>Gs(gp);function ks(n,e,t){return zh(n,e,t)}function zh(n,e,t=st){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ut({},t),l=e&&i||!e&&s!=="post";let c;if($r){if(s==="sync"){const p=vp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Rn,p.resume=Rn,p.pause=Rn,p}}const u=zt;a.call=(p,g,v)=>Pn(p,u,g,v);let h=!1;s==="post"?a.scheduler=p=>{Zt(p,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Nl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Id(n,e,a);return $r&&(c?c.push(f):l&&f()),f}function xp(n,e,t){const i=this.proxy,r=xt(n)?n.includes(".")?Hh(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=ss(this),a=zh(r,s.bind(i),t);return o(),a}function Hh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Mp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pi(e)}Modifiers`]||n[`${Hi(e)}Modifiers`];function Sp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let r=t;const s=e.startsWith("update:"),o=s&&Mp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>xt(u)?u.trim():u)),o.number&&(r=t.map(to)));let a,l=i[a=No(e)]||i[a=No(pi(e))];!l&&s&&(l=i[a=No(Hi(e))]),l&&Pn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,r)}}function Vh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=Vh(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(lt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Ut(o,s),lt(n)&&i.set(n,o),o)}function bo(n,e){return!n||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Hi(e))||tt(n,e))}function xc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:v}=n,m=oo(n);let d,A;try{if(t.shapeFlag&4){const E=r||i,I=E;d=yn(c.call(I,E,u,h,p,f,g)),A=a}else{const E=e;d=yn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),A=e.props?a:Ep(a)}}catch(E){Xr.length=0,yo(E,n,1),d=St(Mr)}let b=d;if(A&&v!==!1){const E=Object.keys(A),{shapeFlag:I}=b;E.length&&I&7&&(s&&E.some(yl)&&(A=yp(A,s)),b=Sr(b,A,!1,!0))}return t.dirs&&(b=Sr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Ol(b,t.transition),d=b,oo(m),d}const Ep=n=>{let e;for(const t in n)(t==="class"||t==="style"||go(t))&&((e||(e={}))[t]=n[t]);return e},yp=(n,e)=>{const t={};for(const i in n)(!yl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Tp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Mc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!bo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Mc(i,o,c):!0:!!o;return!1}function Mc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!bo(t,s))return!0}return!1}function bp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Gh=n=>n.__isSuspense;function Ap(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Fd(n)}const dn=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),Mr=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Xr=[];let Qt=null;function ui(n=!1){Xr.push(Qt=n?null:[])}function wp(){Xr.pop(),Qt=Xr[Xr.length-1]||null}let Kr=1;function Sc(n,e=!1){Kr+=n,n<0&&Qt&&e&&(Qt.hasOnce=!0)}function Rp(n){return n.dynamicChildren=Kr>0?Qt||cr:null,wp(),Kr>0&&Qt&&Qt.push(n),n}function hi(n,e,t,i,r,s){return Rp(wt(n,e,t,i,r,s,!0))}function kh(n){return n?n.__v_isVNode===!0:!1}function Dr(n,e){return n.type===e.type&&n.key===e.key}const Wh=({key:n})=>n??null,Ws=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||Ct(n)||He(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function wt(n,e=null,t=null,i=0,r=null,s=n===dn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wh(e),ref:e&&Ws(e),scopeId:xh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(Hl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),Kr>0&&!o&&Qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qt.push(l),l}const St=Cp;function Cp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===$d)&&(n=Mr),kh(n)){const a=Sr(n,e,!0);return t&&Hl(a,t),Kr>0&&!s&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(n)]=a:Qt.push(a)),a.patchFlag=-2,a}if(Hp(n)&&(n=n.__vccOpts),e){e=Pp(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=wl(a)),lt(l)&&(Ul(l)&&!Ie(l)&&(l=Ut({},l)),e.style=Al(l))}const o=xt(n)?1:Gh(n)?128:zd(n)?64:lt(n)?4:He(n)?2:0;return wt(n,e,t,i,r,o,s,!0)}function Pp(n){return n?Ul(n)||Dh(n)?Ut({},n):n:null}function Sr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Lp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wh(c),ref:e&&e.ref?t&&s?Ie(s)?s.concat(Ws(e)):[s,Ws(e)]:Ws(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Sr(n.ssContent),ssFallback:n.ssFallback&&Sr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ol(u,l.clone(u)),u}function Dp(n=" ",e=0){return St(Ao,null,n,e)}function yn(n){return n==null||typeof n=="boolean"?St(Mr):Ie(n)?St(dn,null,n.slice()):kh(n)?ri(n):St(Ao,null,String(n))}function ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Sr(n)}function Hl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Hl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Dh(e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[Dp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Lp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=wl([e.class,i.class]));else if(r==="style")e.style=Al([e.style,i.style]);else if(go(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Sn(n,e,t,i=null){Pn(n,e,7,[t,i])}const Ip=Rh();let Up=0;function Np(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ip,s={uid:Up++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,r),emitsOptions:Vh(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Sp.bind(null,s),n.ce&&n.ce(s),s}let zt=null,co,Ia;{const n=Mo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};co=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),Ia=e("__VUE_SSR_SETTERS__",t=>$r=t)}const ss=n=>{const e=zt;return co(n),n.scope.on(),()=>{n.scope.off(),co(e)}},Ec=()=>{zt&&zt.scope.off(),co(null)};function Xh(n){return n.vnode.shapeFlag&4}let $r=!1;function Fp(n,e=!1,t=!1){e&&Ia(e);const{props:i,children:r}=n.vnode,s=Xh(n);ap(n,i,s,e),hp(n,r,t||e);const o=s?Op(n,e):void 0;return e&&Ia(!1),o}function Op(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jd);const{setup:i}=t;if(i){jn();const r=n.setupContext=i.length>1?zp(n):null,s=ss(n),o=rs(i,n,0,[n.props,r]),a=Wu(o);if(Kn(),s(),(a||n.sp)&&!kr(n)&&Mh(n),a){if(o.then(Ec,Ec),e)return o.then(l=>{yc(n,l)}).catch(l=>{yo(l,n,0)});n.asyncDep=o}else yc(n,o)}else qh(n)}function yc(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=dh(e)),qh(n)}function qh(n,e,t){const i=n.type;n.render||(n.render=i.render||Rn);{const r=ss(n);jn();try{Qd(n)}finally{Kn(),r()}}}const Bp={get(n,e){return It(n,"get",""),n[e]}};function zp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bp),slots:n.slots,emit:n.emit,expose:e}}function wo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dh(Ed(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wr)return Wr[t](n)},has(e,t){return t in e||t in Wr}})):n.proxy}function Hp(n){return He(n)&&"__vccOpts"in n}const Ro=(n,e)=>Dd(n,e,$r),Vp="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ua;const Tc=typeof window<"u"&&window.trustedTypes;if(Tc)try{Ua=Tc.createPolicy("vue",{createHTML:n=>n})}catch{}const Yh=Ua?n=>Ua.createHTML(n):n=>n,Gp="http://www.w3.org/2000/svg",kp="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,bc=Vn&&Vn.createElement("template"),Wp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Vn.createElementNS(Gp,n):e==="mathml"?Vn.createElementNS(kp,n):t?Vn.createElement(n,{is:t}):Vn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Vn.createTextNode(n),createComment:n=>Vn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{bc.innerHTML=Yh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=bc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Xp=Symbol("_vtc");function qp(n,e,t){const i=n[Xp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ac=Symbol("_vod"),Yp=Symbol("_vsh"),jp=Symbol(""),Kp=/(^|;)\s*display\s*:/;function $p(n,e,t){const i=n.style,r=xt(t);let s=!1;if(t&&!r){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Xs(i,a,"")}else for(const o in e)t[o]==null&&Xs(i,o,"");for(const o in t)o==="display"&&(s=!0),Xs(i,o,t[o])}else if(r){if(e!==t){const o=i[jp];o&&(t+=";"+o),i.cssText=t,s=Kp.test(t)}}else e&&n.removeAttribute("style");Ac in n&&(n[Ac]=s?i.display:"",n[Yp]&&(i.display="none"))}const wc=/\s*!important$/;function Xs(n,e,t){if(Ie(t))t.forEach(i=>Xs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Zp(n,e);wc.test(t)?n.setProperty(Hi(i),t.replace(wc,""),"important"):n[i]=t}}const Rc=["Webkit","Moz","ms"],ko={};function Zp(n,e){const t=ko[e];if(t)return t;let i=pi(e);if(i!=="filter"&&i in n)return ko[e]=i;i=Yu(i);for(let r=0;r<Rc.length;r++){const s=Rc[r]+i;if(s in n)return ko[e]=s}return e}const Cc="http://www.w3.org/1999/xlink";function Pc(n,e,t,i,r,s=Zf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cc,e.slice(6,e.length)):n.setAttributeNS(Cc,e,t):t==null||s&&!Ku(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Cn(t)?String(t):t)}function Dc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Yh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ku(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Pi(n,e,t,i){n.addEventListener(e,t,i)}function Jp(n,e,t,i){n.removeEventListener(e,t,i)}const Lc=Symbol("_vei");function Qp(n,e,t,i,r=null){const s=n[Lc]||(n[Lc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=em(e);if(i){const c=s[e]=im(i,r);Pi(n,a,c,l)}else o&&(Jp(n,a,o,l),s[e]=void 0)}}const Ic=/(?:Once|Passive|Capture)$/;function em(n){let e;if(Ic.test(n)){e={};let i;for(;i=n.match(Ic);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Hi(n.slice(2)),e]}let Wo=0;const tm=Promise.resolve(),nm=()=>Wo||(tm.then(()=>Wo=0),Wo=Date.now());function im(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Pn(rm(i,t.value),e,5,[i])};return t.value=n,t.attached=nm(),t}function rm(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Uc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,sm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?qp(n,i,o):e==="style"?$p(n,t,i):go(e)?yl(e)||Qp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):om(n,e,i,o))?(Dc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xt(i))?Dc(n,pi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pc(n,e,i,o))};function om(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uc(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Uc(e)&&xt(t)?!1:e in n}const uo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>Vs(e,t):e};function am(n){n.target.composing=!0}function Nc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pr=Symbol("_assign"),jh={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[pr]=uo(r);const s=i||r.props&&r.props.type==="number";Pi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=to(a)),n[pr](a)}),t&&Pi(n,"change",()=>{n.value=n.value.trim()}),e||(Pi(n,"compositionstart",am),Pi(n,"compositionend",Nc),Pi(n,"change",Nc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[pr]=uo(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?to(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},lm={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=vo(e);Pi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?to(ho(o)):ho(o));n[pr](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,mh(()=>{n._assigning=!1})}),n[pr]=uo(i)},mounted(n,{value:e}){Fc(n,e)},beforeUpdate(n,e,t){n[pr]=uo(t)},updated(n,{value:e}){n._assigning||Fc(n,e)}};function Fc(n,e){const t=n.multiple,i=Ie(e);if(!(t&&!i&&!vo(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=ho(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Qf(e,a)>-1}else o.selected=e.has(a);else if(So(ho(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ho(n){return"_value"in n?n._value:n.value}const cm=Ut({patchProp:sm},Wp);let Oc;function um(){return Oc||(Oc=dp(cm))}const hm=(...n)=>{const e=um().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=dm(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,fm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function fm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dm(n){return xt(n)?document.querySelector(n):n}const pm={class:"flex items-center gap-2"},mm={class:"w-32 shrink-0"},_m=["min","max","step"],gm={class:"w-12 text-right"},Xi=wr({__name:"ControlSlider",props:{modelValue:Number,label:String,min:Number,max:Number,step:{type:Number,default:1}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,r=Ro({get:()=>t.modelValue,set:s=>i("update:modelValue",Number(s))});return(s,o)=>(ui(),hi("label",pm,[wt("span",mm,xr(n.label),1),Fl(wt("input",{type:"range",class:"flex-1","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),min:n.min,max:n.max,step:n.step},null,8,_m),[[jh,r.value,void 0,{number:!0}]]),wt("span",gm,xr(r.value),1)]))}}),vm={class:"flex items-center gap-2"},xm={class:"w-32 shrink-0"},Mm=["value"],Xo=wr({__name:"ControlSelect",props:{modelValue:{},label:{},options:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,{label:i,options:r}=wd(t),s=e,o=Ro({get:()=>t.modelValue,set:a=>s("update:modelValue",a)});return(a,l)=>(ui(),hi("label",vm,[wt("span",xm,xr(Ra(i)),1),Fl(wt("select",{"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c),class:"flex-1 border rounded p-1"},[(ui(!0),hi(dn,null,Zd(Ra(r),c=>(ui(),hi("option",{key:c,value:c},xr(c),9,Mm))),128))],512),[[lm,o.value]])]))}}),Sm={class:"flex items-center gap-2"},Em={class:"w-32 shrink-0"},ym=["min","max","step"],Tm=wr({__name:"ControlNumber",props:{modelValue:Number,label:String,min:Number,max:Number,step:{type:Number,default:1}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,r=Ro({get:()=>t.modelValue,set:s=>i("update:modelValue",Number(s))});return(s,o)=>(ui(),hi("label",Sm,[wt("span",Em,xr(n.label),1),Fl(wt("input",{type:"number",class:"border rounded p-1 w-20 text-right","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),min:n.min,max:n.max,step:n.step},null,8,ym),[[jh,r.value,void 0,{number:!0}]])]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="176",mr={ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bm=0,Bc=1,Am=2,Kh=1,$h=2,Hn=3,_i=0,qt=1,bn=2,fi=0,_r=1,zc=2,Hc=3,Vc=4,wm=5,Di=100,Rm=101,Cm=102,Pm=103,Dm=104,Lm=200,Im=201,Um=202,Nm=203,Na=204,Fa=205,Fm=206,Om=207,Bm=208,zm=209,Hm=210,Vm=211,Gm=212,km=213,Wm=214,Oa=0,Ba=1,za=2,Er=3,Ha=4,Va=5,Ga=6,ka=7,Gl=0,Xm=1,qm=2,di=0,Ym=1,jm=2,Km=3,$m=4,Zm=5,Jm=6,Qm=7,Zh=300,yr=301,Tr=302,Wa=303,Xa=304,Co=306,gr=1e3,Ii=1001,qa=1002,vn=1003,e_=1004,_s=1005,wn=1006,qo=1007,Ui=1008,Dn=1009,Jh=1010,Qh=1011,Zr=1012,kl=1013,Oi=1014,Wn=1015,os=1016,Wl=1017,Xl=1018,Jr=1020,ef=35902,tf=1021,nf=1022,mn=1023,Qr=1026,es=1027,rf=1028,ql=1029,sf=1030,Yl=1031,jl=1033,qs=33776,Ys=33777,js=33778,Ks=33779,Ya=35840,ja=35841,Ka=35842,$a=35843,Za=36196,Ja=37492,Qa=37496,el=37808,tl=37809,nl=37810,il=37811,rl=37812,sl=37813,ol=37814,al=37815,ll=37816,cl=37817,ul=37818,hl=37819,fl=37820,dl=37821,$s=36492,pl=36494,ml=36495,of=36283,_l=36284,gl=36285,vl=36286,t_=3200,n_=3201,af=0,i_=1,oi="",Jt="srgb",br="srgb-linear",fo="linear",it="srgb",qi=7680,Gc=519,r_=512,s_=513,o_=514,lf=515,a_=516,l_=517,c_=518,u_=519,kc=35044,Wc="300 es",Xn=2e3,po=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,xl=180/Math.PI;function as(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function h_(n,e){return(n%e+e)%e}function Yo(n,e,t){return(1-t)*n+t*e}function Lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const f_={DEG2RAD:Zs};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],A=r[1],b=r[4],E=r[7],I=r[2],L=r[5],R=r[8];return s[0]=o*v+a*A+l*I,s[3]=o*m+a*b+l*L,s[6]=o*d+a*E+l*R,s[1]=c*v+u*A+h*I,s[4]=c*m+u*b+h*L,s[7]=c*d+u*E+h*R,s[2]=f*v+p*A+g*I,s[5]=f*m+p*b+g*L,s[8]=f*d+p*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jo=new Ge;function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d_(){const n=ts("canvas");return n.style.display="block",n}const Xc={};function Js(n){n in Xc||(Xc[n]=!0,console.warn(n))}function p_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function m_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function __(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g_(){const n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?fo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const Ze=g_();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class v_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=ts("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x_=0;class Kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ko(r[o].image)):s.push(Ko(r[o]))}else s=Ko(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?v_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let M_=0;class Ht extends Vi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Ii,r=Ii,s=wn,o=Ui,a=mn,l=Dn,c=Ht.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=as(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Zh;Ht.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,I=(d+1)/2,L=(u+f)/4,R=(h+v)/4,U=(g+m)/4;return b>E&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=L/i,s=R/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=U/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-v)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S_ extends Vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends S_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uf extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E_ extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*v,A=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const I=Math.sqrt(b),L=Math.atan2(I,d*A);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const E=a*A;if(l=l*m+f*E,c=c*m+p*E,u=u*m+g*E,h=h*m+v*E,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new H,jc=new zi;class ls{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),vs.subVectors(this.max,Ir),ji.subVectors(e.a,Ir),Ki.subVectors(e.b,Ir),$i.subVectors(e.c,Ir),Zn.subVectors(Ki,ji),Jn.subVectors($i,Ki),Ei.subVectors(ji,$i);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-Ei.z,Ei.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,Ei.z,0,-Ei.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-Ei.y,Ei.x,0];return!Zo(t,ji,Ki,$i,vs)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,ji,Ki,$i,vs))?!1:(xs.crossVectors(Zn,Jn),t=[xs.x,xs.y,xs.z],Zo(t,ji,Ki,$i,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new H,new H,new H,new H,new H,new H,new H,new H],un=new H,gs=new ls,ji=new H,Ki=new H,$i=new H,Zn=new H,Jn=new H,Ei=new H,Ir=new H,vs=new H,xs=new H,yi=new H;function Zo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yi.fromArray(n,s);const a=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=i.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const y_=new ls,Ur=new H,Jo=new H;class Po{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):y_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Jo)),this.expandByPoint(Ur.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new H,Qo=new H,Ms=new H,Qn=new H,ea=new H,Ss=new H,ta=new H;class $l{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qo.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ms),a=Qn.dot(this.direction),l=-Qn.dot(Ms),c=Qn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qo).addScaledVector(Ms,f),p}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){ea.subVectors(t,e),Ss.subVectors(i,e),ta.crossVectors(ea,Ss);let o=this.direction.dot(ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(Ss.crossVectors(Qn,Ss));if(l<0)return null;const c=a*this.direction.dot(ea.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(ta);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,g,v,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T_,e,b_)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ei.crossVectors(i,Kt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ei.crossVectors(i,Kt)),ei.normalize(),Es.crossVectors(Kt,ei),r[0]=ei.x,r[4]=Es.x,r[8]=Kt.x,r[1]=ei.y,r[5]=Es.y,r[9]=Kt.y,r[2]=ei.z,r[6]=Es.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],A=i[3],b=i[7],E=i[11],I=i[15],L=r[0],R=r[4],U=r[8],T=r[12],S=r[1],C=r[5],K=r[9],V=r[13],ee=r[2],te=r[6],X=r[10],j=r[14],B=r[3],ue=r[7],me=r[11],ye=r[15];return s[0]=o*L+a*S+l*ee+c*B,s[4]=o*R+a*C+l*te+c*ue,s[8]=o*U+a*K+l*X+c*me,s[12]=o*T+a*V+l*j+c*ye,s[1]=u*L+h*S+f*ee+p*B,s[5]=u*R+h*C+f*te+p*ue,s[9]=u*U+h*K+f*X+p*me,s[13]=u*T+h*V+f*j+p*ye,s[2]=g*L+v*S+m*ee+d*B,s[6]=g*R+v*C+m*te+d*ue,s[10]=g*U+v*K+m*X+d*me,s[14]=g*T+v*V+m*j+d*ye,s[3]=A*L+b*S+E*ee+I*B,s[7]=A*R+b*C+E*te+I*ue,s[11]=A*U+b*K+E*X+I*me,s[15]=A*T+b*V+E*j+I*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],A=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,b=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,E=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,I=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,L=t*A+i*b+r*E+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=A*R,e[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*R,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*R,e[4]=b*R,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*R,e[8]=E*R,e[9]=(g*h*s-u*v*s-g*i*p+t*v*p+u*i*d-t*h*d)*R,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*d+t*a*d)*R,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=I*R,e[13]=(u*v*r-g*h*r+g*i*f-t*v*f-u*i*m+t*h*m)*R,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,A=l*c,b=l*u,E=l*h,I=i.x,L=i.y,R=i.z;return r[0]=(1-(v+d))*I,r[1]=(p+E)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(p-E)*L,r[5]=(1-(f+d))*L,r[6]=(m+A)*L,r[7]=0,r[8]=(g+b)*R,r[9]=(m-A)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const c=1/s,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Xn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===po)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u;let g,v;if(a===Xn)g=(o+s)*h,v=-2*h;else if(a===po)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new H,hn=new ut,T_=new H(0,0,0),b_=new H(1,1,1),ei=new H,Es=new H,Kt=new H,Kc=new ut,$c=new zi;class Ln{constructor(e=0,t=0,i=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let A_=0;const Zc=new H,Ji=new zi,On=new ut,ys=new H,Nr=new H,w_=new H,R_=new zi,Jc=new H(1,0,0),Qc=new H(0,1,0),eu=new H(0,0,1),tu={type:"added"},C_={type:"removed"},Qi={type:"childadded",child:null},na={type:"childremoved",child:null};class bt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new H,t=new Ln,i=new zi,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Nr,ys,this.up):On.lookAt(ys,Nr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(On),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(C_),na.child=e,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,w_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,R_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new H(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new H,Bn=new H,ia=new H,zn=new H,er=new H,tr=new H,nu=new H,ra=new H,sa=new H,oa=new H,aa=new pt,la=new pt,ca=new pt;class pn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Bn.subVectors(i,t),ia.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Bn),l=fn.dot(ia),c=Bn.dot(Bn),u=Bn.dot(ia),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(e,t),la.fromBufferAttribute(e,i),ca.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(aa,s.x),o.addScaledVector(la,s.y),o.addScaledVector(ca,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Bn.subVectors(e,t),fn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;er.subVectors(r,i),tr.subVectors(s,i),ra.subVectors(e,i);const l=er.dot(ra),c=tr.dot(ra);if(l<=0&&c<=0)return t.copy(i);sa.subVectors(e,r);const u=er.dot(sa),h=tr.dot(sa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(er,o);oa.subVectors(e,s);const p=er.dot(oa),g=tr.dot(oa);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(tr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return nu.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(nu,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(er,o).addScaledVector(tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=h_(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ua(o,s,e+1/3),this.g=ua(o,s,e),this.b=ua(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Xe(Lt.r*255,0,255))*65536+Math.round(Xe(Lt.g*255,0,255))*256+Math.round(Xe(Lt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Jt){Ze.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Ts);const i=Yo(ti.h,Ts.h,t),r=Yo(ti.s,Ts.s,t),s=Yo(ti.l,Ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ye;Ye.NAMES=ff;let P_=0;class Gi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=as(),this.name="",this.type="Material",this.blending=_r,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class df extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new H,bs=new ze;let D_=0;class Yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),e}}class pf extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mf extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xn extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let L_=0;const nn=new ut,ha=new bt,nr=new H,$t=new ls,Fr=new ls,Tt=new H;class Mn extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?mf:pf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors($t.min,Fr.min),$t.expandByPoint(Tt),Tt.addVectors($t.max,Fr.max),$t.expandByPoint(Tt)):($t.expandByPoint(Fr.min),$t.expandByPoint(Fr.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(e,c),Tt.add(nr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new H,l[U]=new H;const c=new H,u=new H,h=new H,f=new ze,p=new ze,g=new ze,v=new H,m=new H;function d(U,T,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[U].add(v),a[T].add(v),a[S].add(v),l[U].add(m),l[T].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,T=A.length;U<T;++U){const S=A[U],C=S.start,K=S.count;for(let V=C,ee=C+K;V<ee;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new H,E=new H,I=new H,L=new H;function R(U){I.fromBufferAttribute(r,U),L.copy(I);const T=a[U];b.copy(T),b.sub(I.multiplyScalar(I.dot(T))).normalize(),E.crossVectors(L,T);const C=E.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,C)}for(let U=0,T=A.length;U<T;++U){const S=A[U],C=S.start,K=S.count;for(let V=C,ee=C+K;V<ee;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Yt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new ut,Ti=new $l,As=new Po,ru=new H,ws=new H,Rs=new H,Cs=new H,fa=new H,Ps=new H,su=new H,Ds=new H;class on extends bt{constructor(e=new Mn,t=new df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(fa.fromBufferAttribute(h,e),o?Ps.addScaledVector(fa,u):Ps.addScaledVector(fa.sub(t),u))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(As.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(As,ru)===null||Ti.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(iu.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(iu),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,I=b;E<I;E+=3){const L=a.getX(E),R=a.getX(E+1),U=a.getX(E+2);r=Ls(this,d,e,i,c,u,h,L,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const A=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);r=Ls(this,o,e,i,c,u,h,A,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,I=b;E<I;E+=3){const L=E,R=E+1,U=E+2;r=Ls(this,d,e,i,c,u,h,L,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const A=m,b=m+1,E=m+2;r=Ls(this,o,e,i,c,u,h,A,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function I_(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:n}}function Ls(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ws),n.getVertexPosition(l,Rs),n.getVertexPosition(c,Cs);const u=I_(n,e,t,i,ws,Rs,Cs,su);if(u){const h=new H;pn.getBarycoord(su,ws,Rs,Cs,h),r&&(u.uv=pn.getInterpolatedAttribute(r,a,l,c,h,new ze)),s&&(u.uv1=pn.getInterpolatedAttribute(s,a,l,c,h,new ze)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};pn.getNormal(ws,Rs,Cs,f.normal),u.face=f,u.barycoord=h}return u}class cs extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(h,2));function g(v,m,d,A,b,E,I,L,R,U,T){const S=E/R,C=I/U,K=E/2,V=I/2,ee=L/2,te=R+1,X=U+1;let j=0,B=0;const ue=new H;for(let me=0;me<X;me++){const ye=me*C-V;for(let Ce=0;Ce<te;Ce++){const qe=Ce*S-K;ue[v]=qe*A,ue[m]=ye*b,ue[d]=ee,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[d]=L>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ce/R),h.push(1-me/U),j+=1}}for(let me=0;me<U;me++)for(let ye=0;ye<R;ye++){const Ce=f+ye+te*me,qe=f+ye+te*(me+1),ne=f+(ye+1)+te*(me+1),ce=f+(ye+1)+te*me;l.push(Ce,qe,ce),l.push(qe,ne,ce),B+=6}a.addGroup(p,B,T),p+=B,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function U_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _f(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const N_={clone:Ar,merge:Ot};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=U_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gf extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new H,ou=new ze,au=new ze;class rn extends gf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,ou,au),t.subVectors(au,ou)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class B_ extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new rn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new rn(ir,rr,e,t);o.layers=this.layers,this.add(o);const a=new rn(ir,rr,e,t);a.layers=this.layers,this.add(a);const l=new rn(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new rn(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zl extends Ht{constructor(e=[],t=yr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cs(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:fi});s.uniforms.tEquirect.value=t;const o=new on(r,s),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=wn),new B_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Is extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class V_ extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pa=new H,G_=new H,k_=new Ge;class si{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pa.subVectors(i,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||k_.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Po,Us=new H;class Jl{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,o=new si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],A=r[13],b=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,m-p,E-d).normalize(),i[1].setComponents(l+s,f+c,m+p,E+d).normalize(),i[2].setComponents(l+o,f+u,m+g,E+A).normalize(),i[3].setComponents(l-o,f-u,m-g,E-A).normalize(),i[4].setComponents(l-a,f-h,m-v,E-b).normalize(),t===Xn)i[5].setComponents(l+a,f+h,m+v,E+b).normalize();else if(t===po)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Us.x=r.normal.x>0?e.max.x:e.min.x,Us.y=r.normal.y>0?e.max.y:e.min.y,Us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vf extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new H,_o=new H,lu=new ut,Or=new $l,Ns=new Po,ma=new H,cu=new H;class W_ extends bt{constructor(e=new Mn,t=new vf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)mo.fromBufferAttribute(t,r-1),_o.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=mo.distanceTo(_o);e.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;lu.copy(r).invert(),Or.copy(e.ray).applyMatrix4(lu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),A=u.getX(v+1),b=Fs(this,e,Or,l,d,A,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=Fs(this,e,Or,l,v,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=Fs(this,e,Or,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=Fs(this,e,Or,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fs(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(mo.fromBufferAttribute(a,r),_o.fromBufferAttribute(a,s),t.distanceSqToSegment(mo,_o,ma,cu)>i)return;ma.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ma);if(!(c<e.near||c>e.far))return{distance:c,point:cu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const uu=new H,hu=new H;class X_ extends W_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)uu.fromBufferAttribute(t,r),hu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+uu.distanceTo(hu);e.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xf extends Ht{constructor(e,t,i=Oi,r,s,o,a=vn,l=vn,c,u=Qr){if(u!==Qr&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class us extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const A=d*f-o;for(let b=0;b<c;b++){const E=b*h-s;g.push(E,-A,0),v.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const b=A+c*d,E=A+c*(d+1),I=A+1+c*(d+1),L=A+1+c*d;p.push(b,E,L),p.push(E,I,L)}this.setIndex(p),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}class q_ extends Gi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class _a extends Gi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y_ extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class K_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const $_=new K_;class Do{constructor(e){this.manager=e!==void 0?e:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Do.DEFAULT_MATERIAL_NAME="__DEFAULT";class Mf extends Do{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ts("img");function l(){u(),fu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Z_ extends Do{constructor(e){super(e)}load(e,t,i,r){const s=new Zl;s.colorSpace=Jt;const o=new Mf(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class J_ extends Do{constructor(e){super(e)}load(e,t,i,r){const s=new Ht,o=new Mf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Sf extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ga=new ut,du=new H,pu=new H;class Q_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ef extends gf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eg extends Q_{constructor(){super(new Ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends Sf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new eg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ng extends Sf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ig extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rg extends X_{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Mn;r.setAttribute("position",new xn(t,3)),r.setAttribute("color",new xn(i,3));const s=new vf({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ye,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sg extends Vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _u(n,e,t,i){const r=og(i);switch(t){case tf:return n*e;case rf:return n*e/r.components*r.byteLength;case ql:return n*e/r.components*r.byteLength;case sf:return n*e*2/r.components*r.byteLength;case Yl:return n*e*2/r.components*r.byteLength;case nf:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case jl:return n*e*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case js:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:case $a:return Math.max(n,16)*Math.max(e,8)/4;case Ya:case Ka:return Math.max(n,8)*Math.max(e,8)/2;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $s:case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case of:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gl:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(n){switch(n){case Dn:case Jh:return{byteLength:1,components:1};case Zr:case Qh:case os:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case Oi:case kl:case Wn:return{byteLength:4,components:1};case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ag(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
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
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
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
#endif`,Eg=`#ifdef USE_BUMPMAP
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
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
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,a0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q0=`float getShadowMask() {
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
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,pv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,_v=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,Ev=`uniform vec3 diffuse;
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
}`,yv=`#define LAMBERT
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
}`,Tv=`#define LAMBERT
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
}`,bv=`#define MATCAP
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
}`,Av=`#define MATCAP
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
}`,wv=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Dv=`#define STANDARD
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
}`,Lv=`#define STANDARD
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
}`,Iv=`#define TOON
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
}`,Uv=`#define TOON
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
}`,Nv=`uniform float size;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Bv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:ug,alphamap_pars_fragment:hg,alphatest_fragment:fg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:_g,batching_vertex:gg,begin_vertex:vg,beginnormal_vertex:xg,bsdfs:Mg,iridescence_fragment:Sg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Ag,color_fragment:wg,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Dg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Ug,displacementmap_vertex:Ng,emissivemap_fragment:Fg,emissivemap_pars_fragment:Og,colorspace_fragment:Bg,colorspace_pars_fragment:zg,envmap_fragment:Hg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Gg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:e0,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:qg,fog_fragment:Yg,fog_pars_fragment:jg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:$g,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:s0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:f0,logdepthbuf_vertex:d0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:_0,map_particle_pars_fragment:g0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:x0,morphinstance_vertex:M0,morphcolor_vertex:S0,morphnormal_vertex:E0,morphtarget_pars_vertex:y0,morphtarget_vertex:T0,normal_fragment_begin:b0,normal_fragment_maps:A0,normal_pars_fragment:w0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:U0,opaque_fragment:N0,packing:F0,premultiplied_alpha_fragment:O0,project_vertex:B0,dithering_fragment:z0,dithering_pars_fragment:H0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:Y0,skinning_pars_vertex:j0,skinning_vertex:K0,skinnormal_vertex:$0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:ov,background_vert:av,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:uv,cube_vert:hv,cube_frag:fv,depth_vert:dv,depth_frag:pv,distanceRGBA_vert:mv,distanceRGBA_frag:_v,equirect_vert:gv,equirect_frag:vv,linedashed_vert:xv,linedashed_frag:Mv,meshbasic_vert:Sv,meshbasic_frag:Ev,meshlambert_vert:yv,meshlambert_frag:Tv,meshmatcap_vert:bv,meshmatcap_frag:Av,meshnormal_vert:wv,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Pv,meshphysical_vert:Dv,meshphysical_frag:Lv,meshtoon_vert:Iv,meshtoon_frag:Uv,points_vert:Nv,points_frag:Fv,shadow_vert:Ov,shadow_frag:Bv,sprite_vert:zv,sprite_frag:Hv},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Tn={basic:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ot([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ot([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ot([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ot([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ot([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ot([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ot([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ot([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Tn.physical={uniforms:Ot([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Os={r:0,b:0,g:0},Ai=new Ln,Vv=new ut;function Gv(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function v(b){let E=!1;const I=g(b);I===null?d(a,l):I&&I.isColor&&(d(I,1),E=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const I=g(E);I&&(I.isCubeTexture||I.mapping===Co)?(u===void 0&&(u=new on(new cs(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ar(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ai.copy(E.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Ai)),u.material.toneMapped=Ze.getTransfer(I.colorSpace)!==it,(h!==I||f!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new on(new us(2,2),new gi({name:"BackgroundMaterial",uniforms:Ar(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(I.colorSpace)!==it,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,E){b.getRGB(Os,_f(n)),i.buffers.color.setClear(Os.r,Os.g,Os.b,E,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:v,addToRenderList:m,dispose:A}}function kv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,C,K,V,ee){let te=!1;const X=h(V,K,C);s!==X&&(s=X,c(s.object)),te=p(S,V,K,ee),te&&g(S,V,K,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,E(S,C,K,V),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,C,K){const V=K.wireframe===!0;let ee=i[S.id];ee===void 0&&(ee={},i[S.id]=ee);let te=ee[C.id];te===void 0&&(te={},ee[C.id]=te);let X=te[V];return X===void 0&&(X=f(l()),te[V]=X),X}function f(S){const C=[],K=[],V=[];for(let ee=0;ee<t;ee++)C[ee]=0,K[ee]=0,V[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:K,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,C,K,V){const ee=s.attributes,te=C.attributes;let X=0;const j=K.getAttributes();for(const B in j)if(j[B].location>=0){const me=ee[B];let ye=te[B];if(ye===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),me===void 0||me.attribute!==ye||ye&&me.data!==ye.data)return!0;X++}return s.attributesNum!==X||s.index!==V}function g(S,C,K,V){const ee={},te=C.attributes;let X=0;const j=K.getAttributes();for(const B in j)if(j[B].location>=0){let me=te[B];me===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const ye={};ye.attribute=me,me&&me.data&&(ye.data=me.data),ee[B]=ye,X++}s.attributes=ee,s.attributesNum=X,s.index=V}function v(){const S=s.newAttributes;for(let C=0,K=S.length;C<K;C++)S[C]=0}function m(S){d(S,0)}function d(S,C){const K=s.newAttributes,V=s.enabledAttributes,ee=s.attributeDivisors;K[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),ee[S]!==C&&(n.vertexAttribDivisor(S,C),ee[S]=C)}function A(){const S=s.newAttributes,C=s.enabledAttributes;for(let K=0,V=C.length;K<V;K++)C[K]!==S[K]&&(n.disableVertexAttribArray(K),C[K]=0)}function b(S,C,K,V,ee,te,X){X===!0?n.vertexAttribIPointer(S,C,K,ee,te):n.vertexAttribPointer(S,C,K,V,ee,te)}function E(S,C,K,V){v();const ee=V.attributes,te=K.getAttributes(),X=C.defaultAttributeValues;for(const j in te){const B=te[j];if(B.location>=0){let ue=ee[j];if(ue===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const me=ue.normalized,ye=ue.itemSize,Ce=e.get(ue);if(Ce===void 0)continue;const qe=Ce.buffer,ne=Ce.type,ce=Ce.bytesPerElement,Ee=ne===n.INT||ne===n.UNSIGNED_INT||ue.gpuType===kl;if(ue.isInterleavedBufferAttribute){const fe=ue.data,Re=fe.stride,We=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let Me=0;Me<B.locationSize;Me++)d(B.location+Me,fe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<B.locationSize;Me++)m(B.location+Me);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Me=0;Me<B.locationSize;Me++)b(B.location+Me,ye/B.locationSize,ne,me,Re*ce,(We+ye/B.locationSize*Me)*ce,Ee)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<B.locationSize;fe++)d(B.location+fe,ue.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<B.locationSize;fe++)m(B.location+fe);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let fe=0;fe<B.locationSize;fe++)b(B.location+fe,ye/B.locationSize,ne,me,ye*ce,ye/B.locationSize*fe*ce,Ee)}}else if(X!==void 0){const me=X[j];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(B.location,me);break;case 3:n.vertexAttrib3fv(B.location,me);break;case 4:n.vertexAttrib4fv(B.location,me);break;default:n.vertexAttrib1fv(B.location,me)}}}}A()}function I(){U();for(const S in i){const C=i[S];for(const K in C){const V=C[K];for(const ee in V)u(V[ee].object),delete V[ee];delete C[K]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const K in C){const V=C[K];for(const ee in V)u(V[ee].object),delete V[ee];delete C[K]}delete i[S.id]}function R(S){for(const C in i){const K=i[C];if(K[S.id]===void 0)continue;const V=K[S.id];for(const ee in V)u(V[ee].object),delete V[ee];delete K[S.id]}}function U(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Wv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Dn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wn&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:I,maxSamples:L}}function qv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new si,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,b=A*4;let E=d.clippingState||null;l.value=E,E=u(g,f,b,p);for(let I=0;I!==b;++I)E[I]=t[I];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,E=p;b!==v;++b,E+=4)o.copy(h[b]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Yv(n){let e=new WeakMap;function t(o,a){return a===Wa?o.mapping=yr:a===Xa&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new z_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const lr=4,gu=[.125,.215,.35,.446,.526,.582],Li=20,va=new Ef,vu=new Ye;let xa=null,Ma=0,Sa=0,Ea=!1;const Ci=(1+Math.sqrt(5))/2,sr=1/Ci,xu=[new H(-Ci,sr,0),new H(Ci,sr,0),new H(-sr,0,Ci),new H(sr,0,Ci),new H(0,Ci,-sr),new H(0,Ci,sr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],jv=new H;class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=jv}=s;xa=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,Ma,Sa),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:os,format:mn,colorSpace:br,depthBuffer:!1},r=Su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kv(s)),this._blurMaterial=$v(s,e,t)}return r}_compileMaterial(e){const t=new on(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,i,r,s){const l=new rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(vu),h.toneMapping=di,h.autoClear=!1;const g=new df({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),v=new on(new cs,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(vu),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const E=this._cubeSize;Bs(r,b*E,A>2?E:0,E,E),h.setRenderTarget(r),m&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yr||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(r-s-1)%xu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new on(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Li-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const d=[];let A=0;for(let R=0;R<Li;++R){const U=R/v,T=Math.exp(-U*U/2);d.push(T),R===0?A+=T:R<m&&(A+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const E=this._sizeLods[r],I=3*E*(r>b-lr?r-b+lr:0),L=4*(this._cubeSize-E);Bs(t,I,L,3*E,2*E),l.setRenderTarget(t),l.render(h,va)}}function Kv(n){const e=[],t=[],i=[];let r=n;const s=n-lr+1+gu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-lr?l=gu[o-n+lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,A=new Float32Array(v*g*p),b=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let L=0;L<p;L++){const R=L%3*2/3-1,U=L>2?0:-1,T=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];A.set(T,v*g*L),b.set(f,m*g*L);const S=[L,L,L,L,L,L];E.set(S,d*g*L)}const I=new Mn;I.setAttribute("position",new Yt(A,v)),I.setAttribute("uv",new Yt(b,m)),I.setAttribute("faceIndex",new Yt(E,d)),e.push(I),r>lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Su(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $v(n,e,t){const i=new Float32Array(Li),r=new H(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Eu(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yu(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function Zv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===Xa,u=l===yr||l===Tr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Mu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Mu(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qv(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let b=0,E=A.length;b<E;b+=3){const I=A[b+0],L=A[b+1],R=A[b+2];f.push(I,L,L,R,R,I)}}else if(g!==void 0){const A=g.array;v=g.version;for(let b=0,E=A.length/3-1;b<E;b+=3){const I=b+0,L=b+1,R=b+2;f.push(I,L,L,R,R,I)}}else return;const m=new(cf(f)?mf:pf)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ex(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*v[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nx(n,e,t){const i=new WeakMap,r=new pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let I=a.attributes.position.count*E,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*L*4*h),U=new uf(R,I,L,h);U.type=Wn,U.needsUpdate=!0;const T=E*4;for(let C=0;C<h;C++){const K=d[C],V=A[C],ee=b[C],te=I*L*4*C;for(let X=0;X<K.count;X++){const j=X*T;g===!0&&(r.fromBufferAttribute(K,X),R[te+j+0]=r.x,R[te+j+1]=r.y,R[te+j+2]=r.z,R[te+j+3]=0),v===!0&&(r.fromBufferAttribute(V,X),R[te+j+4]=r.x,R[te+j+5]=r.y,R[te+j+6]=r.z,R[te+j+7]=0),m===!0&&(r.fromBufferAttribute(ee,X),R[te+j+8]=r.x,R[te+j+9]=r.y,R[te+j+10]=r.z,R[te+j+11]=ee.itemSize===4?r.w:1)}}f={count:h,texture:U,size:new ze(I,L)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function ix(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Tf=new Ht,Tu=new xf(1,1),bf=new uf,Af=new E_,wf=new Zl,bu=[],Au=[],wu=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bu[r];if(s===void 0&&(s=new Float32Array(r),bu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lo(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Cu.set(i),n.uniformMatrix2fv(this.addr,!1,Cu),yt(t,i)}}function cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),yt(t,i)}}function ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),yt(t,i)}}function hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function mx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function xx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=lf,s=Tu):s=Tf,t.setTexture2D(e||s,r)}function Mx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Af,r)}function Sx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wf,r)}function Ex(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bf,r)}function yx(n){switch(n){case 5126:return rx;case 35664:return sx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return ux;case 5124:case 35670:return hx;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return _x;case 36295:return gx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Tx(n,e){n.uniform1fv(this.addr,e)}function bx(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ax(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function wx(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Rx(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cx(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Px(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dx(n,e){n.uniform1iv(this.addr,e)}function Lx(n,e){n.uniform2iv(this.addr,e)}function Ix(n,e){n.uniform3iv(this.addr,e)}function Ux(n,e){n.uniform4iv(this.addr,e)}function Nx(n,e){n.uniform1uiv(this.addr,e)}function Fx(n,e){n.uniform2uiv(this.addr,e)}function Ox(n,e){n.uniform3uiv(this.addr,e)}function Bx(n,e){n.uniform4uiv(this.addr,e)}function zx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tf,s[o])}function Hx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Af,s[o])}function Vx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wf,s[o])}function Gx(n,e,t){const i=this.cache,r=e.length,s=Lo(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bf,s[o])}function kx(n){switch(n){case 5126:return Tx;case 35664:return bx;case 35665:return Ax;case 35666:return wx;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Dx;case 35667:case 35671:return Lx;case 35668:case 35672:return Ix;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}class Wx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yx(t.type)}}class Xx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kx(t.type)}}class qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function Yx(n,e,t){const i=n.name,r=i.length;for(ya.lastIndex=0;;){const s=ya.exec(i),o=ya.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pu(t,c===void 0?new Wx(a,n,e):new Xx(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new qx(a),Pu(t,h)),t=h}}}class Qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Yx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jx=37297;let Kx=0;function $x(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Lu=new Ge;function Zx(n){Ze._getMatrix(Lu,Ze.workingColorSpace,n);const e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case fo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Iu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$x(n.getShaderSource(e),o)}else return r}function Jx(n,e){const t=Zx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qx(n,e){let t;switch(e){case Ym:t="Linear";break;case jm:t="Reinhard";break;case Km:t="Cineon";break;case $m:t="ACESFilmic";break;case Jm:t="AgX";break;case Qm:t="Neutral";break;case Zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zs=new H;function eM(){Ze.getLuminanceCoefficients(zs);const n=zs.x.toFixed(4),e=zs.y.toFixed(4),t=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function nM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zr(n){return n!==""}function Uu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(n){return n.replace(rM,oM)}const sM=new Map;function oM(n,e){let t=ke[e];if(t===void 0){const i=sM.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ml(t)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(n){return n.replace(aM,lM)}function lM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ou(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function uM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Tr:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function fM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case Xm:e="ENVMAP_BLENDING_MIX";break;case qm:e="ENVMAP_BLENDING_ADD";break}return e}function dM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cM(t),c=uM(t),u=hM(t),h=fM(t),f=dM(t),p=tM(t),g=nM(s),v=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),d=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ke.tonemapping_pars_fragment:"",t.toneMapping!==di?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),eM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=Ml(o),o=Uu(o,t),o=Nu(o,t),a=Ml(a),a=Uu(a,t),a=Nu(a,t),o=Fu(o),a=Fu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=A+m+o,E=A+d+a,I=Du(r,r.VERTEX_SHADER,b),L=Du(r,r.FRAGMENT_SHADER,E);r.attachShader(v,I),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(C){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(I).trim(),ee=r.getShaderInfoLog(L).trim();let te=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,L);else{const j=Iu(r,I,"vertex"),B=Iu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+K+`
`+j+`
`+B)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(V===""||ee==="")&&(X=!1);X&&(C.diagnostics={runnable:te,programLog:K,vertexShader:{log:V,prefix:m},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(I),r.deleteShader(L),U=new Qs(r,v),T=iM(r,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,jx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let mM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gM(e),t.set(e,i)),i}}class gM{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(n,e,t,i,r,s,o){const a=new hf,l=new _M,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,C,K,V){const ee=K.fog,te=V.geometry,X=T.isMeshStandardMaterial?K.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||X),B=j&&j.mapping===Co?j.image.height:null,ue=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const me=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ye=me!==void 0?me.length:0;let Ce=0;te.morphAttributes.position!==void 0&&(Ce=1),te.morphAttributes.normal!==void 0&&(Ce=2),te.morphAttributes.color!==void 0&&(Ce=3);let qe,ne,ce,Ee;if(ue){const nt=Tn[ue];qe=nt.vertexShader,ne=nt.fragmentShader}else qe=T.vertexShader,ne=T.fragmentShader,l.update(T),ce=l.getVertexShaderID(T),Ee=l.getFragmentShaderID(T);const fe=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),We=V.isInstancedMesh===!0,Me=V.isBatchedMesh===!0,ht=!!T.map,w=!!T.matcap,P=!!j,M=!!T.aoMap,re=!!T.lightMap,$=!!T.bumpMap,Z=!!T.normalMap,J=!!T.displacementMap,se=!!T.emissiveMap,Y=!!T.metalnessMap,x=!!T.roughnessMap,_=T.anisotropy>0,D=T.clearcoat>0,z=T.dispersion>0,k=T.iridescence>0,G=T.sheen>0,he=T.transmission>0,oe=_&&!!T.anisotropyMap,be=D&&!!T.clearcoatMap,we=D&&!!T.clearcoatNormalMap,ae=D&&!!T.clearcoatRoughnessMap,_e=k&&!!T.iridescenceMap,Pe=k&&!!T.iridescenceThicknessMap,Ue=G&&!!T.sheenColorMap,de=G&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,Be=!!T.specularColorMap,ot=!!T.specularIntensityMap,N=he&&!!T.transmissionMap,ve=he&&!!T.thicknessMap,Q=!!T.gradientMap,ie=!!T.alphaMap,Se=T.alphaTest>0,xe=!!T.alphaHash,Ve=!!T.extensions;let ft=di;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Pt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:ne,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Me,batchingColor:Me&&V._colorsTexture!==null,instancing:We,instancingColor:We&&V.instanceColor!==null,instancingMorph:We&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:br,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:w,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:B,aoMap:M,lightMap:re,bumpMap:$,normalMap:Z,displacementMap:f&&J,emissiveMap:se,normalMapObjectSpace:Z&&T.normalMapType===i_,normalMapTangentSpace:Z&&T.normalMapType===af,metalnessMap:Y,roughnessMap:x,anisotropy:_,anisotropyMap:oe,clearcoat:D,clearcoatMap:be,clearcoatNormalMap:we,clearcoatRoughnessMap:ae,dispersion:z,iridescence:k,iridescenceMap:_e,iridescenceThicknessMap:Pe,sheen:G,sheenColorMap:Ue,sheenRoughnessMap:de,specularMap:Fe,specularColorMap:Be,specularIntensityMap:ot,transmission:he,transmissionMap:N,thicknessMap:ve,gradientMap:Q,opaque:T.transparent===!1&&T.blending===_r&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:Se,alphaHash:xe,combine:T.combine,mapUv:ht&&v(T.map.channel),aoMapUv:M&&v(T.aoMap.channel),lightMapUv:re&&v(T.lightMap.channel),bumpMapUv:$&&v(T.bumpMap.channel),normalMapUv:Z&&v(T.normalMap.channel),displacementMapUv:J&&v(T.displacementMap.channel),emissiveMapUv:se&&v(T.emissiveMap.channel),metalnessMapUv:Y&&v(T.metalnessMap.channel),roughnessMapUv:x&&v(T.roughnessMap.channel),anisotropyMapUv:oe&&v(T.anisotropyMap.channel),clearcoatMapUv:be&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(T.sheenRoughnessMap.channel),specularMapUv:Fe&&v(T.specularMap.channel),specularColorMapUv:Be&&v(T.specularColorMap.channel),specularIntensityMapUv:ot&&v(T.specularIntensityMap.channel),transmissionMapUv:N&&v(T.transmissionMap.channel),thicknessMapUv:ve&&v(T.thicknessMap.channel),alphaMapUv:ie&&v(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Z||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!te.attributes.uv&&(ht||ie),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:V.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===it,decodeVideoTextureEmissive:se&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===it,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bn,flipSided:T.side===qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)S.push(C),S.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(A(S,T),b(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function A(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function b(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const S=g[T.type];let C;if(S){const K=Tn[S];C=N_.clone(K.uniforms)}else C=T.uniforms;return C}function I(T,S){let C;for(let K=0,V=u.length;K<V;K++){const ee=u[K];if(ee.cacheKey===S){C=ee,++C.usedTimes;break}}return C===void 0&&(C=new pM(n,S,T,s),u.push(C)),C}function L(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:I,releaseProgram:L,releaseShaderCache:R,programs:u,dispose:U}}function xM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function MM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||MM),i.length>1&&i.sort(f||Bu),r.length>1&&r.sort(f||Bu)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function SM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zu,n.set(i,[o])):r>=s.length?(o=new zu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ye};break;case"SpotLight":t={position:new H,direction:new H,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function yM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TM=0;function bM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AM(n){const e=new EM,t=yM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ut,o=new ut;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,A=0,b=0,E=0,I=0,L=0,R=0;c.sort(bM);for(let T=0,S=c.length;T<S;T++){const C=c[T],K=C.color,V=C.intensity,ee=C.distance,te=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=K.r*V,h+=K.g*V,f+=K.b*V;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],V);R++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,B=t.get(C);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=X,p++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(K).multiplyScalar(V),X.distance=ee,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[v]=X;const j=C.shadow;if(C.map&&(i.spotLightMap[I]=C.map,I++,j.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[v]=j.matrix,C.castShadow){const B=t.get(C);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=te,E++}v++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(K).multiplyScalar(V),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=X,m++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const j=C.shadow,B=t.get(C);B.shadowIntensity=j.intensity,B.shadowBias=j.bias,B.shadowNormalBias=j.normalBias,B.shadowRadius=j.radius,B.shadowMapSize=j.mapSize,B.shadowCameraNear=j.camera.near,B.shadowCameraFar=j.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(V),X.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==A||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==I||U.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=A,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=I,U.numLightProbes=R,i.version=TM++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const b=c[d];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Hu(n){const e=new AM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hu(n),e.set(r,[a])):s>=o.length?(a=new Hu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`;function PM(n,e,t){let i=new Jl;const r=new ze,s=new ze,o=new pt,a=new Y_({depthPacking:n_}),l=new j_,c={},u=t.maxTextureSize,h={[_i]:qt,[qt]:_i,[bn]:bn},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new on(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let d=this.type;this.render=function(L,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),K=n.state;K.setBlending(fi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const V=d!==Hn&&this.type===Hn,ee=d===Hn&&this.type!==Hn;for(let te=0,X=L.length;te<X;te++){const j=L[te],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ue=B.getFrameExtents();if(r.multiply(ue),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,B.mapSize.y=s.y)),B.map===null||V===!0||ee===!0){const ye=this.type!==Hn?{minFilter:vn,magFilter:vn}:{};B.map!==null&&B.map.dispose(),B.map=new Bi(r.x,r.y,ye),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const me=B.getViewportCount();for(let ye=0;ye<me;ye++){const Ce=B.getViewport(ye);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),K.viewport(o),B.updateMatrices(j,ye),i=B.getFrustum(),E(R,U,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===Hn&&A(B,U),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,C)};function A(L,R){const U=e.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Bi(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(R,null,U,p,v,null)}function b(L,R,U,T){let S=null;const C=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)S=C;else if(S=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const K=S.uuid,V=R.uuid;let ee=c[K];ee===void 0&&(ee={},c[K]=ee);let te=ee[V];te===void 0&&(te=S.clone(),ee[V]=te,R.addEventListener("dispose",I)),S=te}if(S.visible=R.visible,S.wireframe=R.wireframe,T===Hn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=U}return S}function E(L,R,U,T,S){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Hn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const V=e.update(L),ee=L.material;if(Array.isArray(ee)){const te=V.groups;for(let X=0,j=te.length;X<j;X++){const B=te[X],ue=ee[B.materialIndex];if(ue&&ue.visible){const me=b(L,ue,T,S);L.onBeforeShadow(n,L,R,U,V,me,B),n.renderBufferDirect(U,null,V,me,L,B),L.onAfterShadow(n,L,R,U,V,me,B)}}}else if(ee.visible){const te=b(L,ee,T,S);L.onBeforeShadow(n,L,R,U,V,te,null),n.renderBufferDirect(U,null,V,te,L,null),L.onAfterShadow(n,L,R,U,V,te,null)}}const K=L.children;for(let V=0,ee=K.length;V<ee;V++)E(K[V],R,U,T,S)}function I(L){L.target.removeEventListener("dispose",I);for(const U in c){const T=c[U],S=L.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const DM={[Oa]:Ba,[za]:Ga,[Ha]:ka,[Er]:Va,[Ba]:Oa,[Ga]:za,[ka]:Ha,[Va]:Er};function LM(n,e){function t(){let N=!1;const ve=new pt;let Q=null;const ie=new pt(0,0,0,0);return{setMask:function(Se){Q!==Se&&!N&&(n.colorMask(Se,Se,Se,Se),Q=Se)},setLocked:function(Se){N=Se},setClear:function(Se,xe,Ve,ft,Pt){Pt===!0&&(Se*=ft,xe*=ft,Ve*=ft),ve.set(Se,xe,Ve,ft),ie.equals(ve)===!1&&(n.clearColor(Se,xe,Ve,ft),ie.copy(ve))},reset:function(){N=!1,Q=null,ie.set(-1,0,0,0)}}}function i(){let N=!1,ve=!1,Q=null,ie=null,Se=null;return{setReversed:function(xe){if(ve!==xe){const Ve=e.get("EXT_clip_control");xe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ve=xe;const ft=Se;Se=null,this.setClear(ft)}},getReversed:function(){return ve},setTest:function(xe){xe?fe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(xe){Q!==xe&&!N&&(n.depthMask(xe),Q=xe)},setFunc:function(xe){if(ve&&(xe=DM[xe]),ie!==xe){switch(xe){case Oa:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case Ha:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ga:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=xe}},setLocked:function(xe){N=xe},setClear:function(xe){Se!==xe&&(ve&&(xe=1-xe),n.clearDepth(xe),Se=xe)},reset:function(){N=!1,Q=null,ie=null,Se=null,ve=!1}}}function r(){let N=!1,ve=null,Q=null,ie=null,Se=null,xe=null,Ve=null,ft=null,Pt=null;return{setTest:function(nt){N||(nt?fe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(nt){ve!==nt&&!N&&(n.stencilMask(nt),ve=nt)},setFunc:function(nt,ln,In){(Q!==nt||ie!==ln||Se!==In)&&(n.stencilFunc(nt,ln,In),Q=nt,ie=ln,Se=In)},setOp:function(nt,ln,In){(xe!==nt||Ve!==ln||ft!==In)&&(n.stencilOp(nt,ln,In),xe=nt,Ve=ln,ft=In)},setLocked:function(nt){N=nt},setClear:function(nt){Pt!==nt&&(n.clearStencil(nt),Pt=nt)},reset:function(){N=!1,ve=null,Q=null,ie=null,Se=null,xe=null,Ve=null,ft=null,Pt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,b=null,E=null,I=null,L=null,R=new Ye(0,0,0),U=0,T=!1,S=null,C=null,K=null,V=null,ee=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=j>=2);let ue=null,me={};const ye=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),qe=new pt().fromArray(ye),ne=new pt().fromArray(Ce);function ce(N,ve,Q,ie){const Se=new Uint8Array(4),xe=n.createTexture();n.bindTexture(N,xe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<Q;Ve++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ve+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return xe}const Ee={};Ee[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Er),$(!1),Z(Bc),fe(n.CULL_FACE),M(fi);function fe(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Re(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function We(N,ve){return h[N]!==ve?(n.bindFramebuffer(N,ve),h[N]=ve,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ve),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Me(N,ve){let Q=p,ie=!1;if(N){Q=f.get(ve),Q===void 0&&(Q=[],f.set(ve,Q));const Se=N.textures;if(Q.length!==Se.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ve=Se.length;xe<Ve;xe++)Q[xe]=n.COLOR_ATTACHMENT0+xe;Q.length=Se.length,ie=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ie=!0);ie&&n.drawBuffers(Q)}function ht(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const w={[Di]:n.FUNC_ADD,[Rm]:n.FUNC_SUBTRACT,[Cm]:n.FUNC_REVERSE_SUBTRACT};w[Pm]=n.MIN,w[Dm]=n.MAX;const P={[Lm]:n.ZERO,[Im]:n.ONE,[Um]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[Hm]:n.SRC_ALPHA_SATURATE,[Bm]:n.DST_COLOR,[Fm]:n.DST_ALPHA,[Nm]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[zm]:n.ONE_MINUS_DST_COLOR,[Om]:n.ONE_MINUS_DST_ALPHA,[Vm]:n.CONSTANT_COLOR,[Gm]:n.ONE_MINUS_CONSTANT_COLOR,[km]:n.CONSTANT_ALPHA,[Wm]:n.ONE_MINUS_CONSTANT_ALPHA};function M(N,ve,Q,ie,Se,xe,Ve,ft,Pt,nt){if(N===fi){v===!0&&(Re(n.BLEND),v=!1);return}if(v===!1&&(fe(n.BLEND),v=!0),N!==wm){if(N!==m||nt!==T){if((d!==Di||E!==Di)&&(n.blendEquation(n.FUNC_ADD),d=Di,E=Di),nt)switch(N){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,I=null,L=null,R.set(0,0,0),U=0,m=N,T=nt}return}Se=Se||ve,xe=xe||Q,Ve=Ve||ie,(ve!==d||Se!==E)&&(n.blendEquationSeparate(w[ve],w[Se]),d=ve,E=Se),(Q!==A||ie!==b||xe!==I||Ve!==L)&&(n.blendFuncSeparate(P[Q],P[ie],P[xe],P[Ve]),A=Q,b=ie,I=xe,L=Ve),(ft.equals(R)===!1||Pt!==U)&&(n.blendColor(ft.r,ft.g,ft.b,Pt),R.copy(ft),U=Pt),m=N,T=!1}function re(N,ve){N.side===bn?Re(n.CULL_FACE):fe(n.CULL_FACE);let Q=N.side===qt;ve&&(Q=!Q),$(Q),N.blending===_r&&N.transparent===!1?M(fi):M(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ie=N.stencilWrite;a.setTest(ie),ie&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function Z(N){N!==bm?(fe(n.CULL_FACE),N!==C&&(N===Bc?n.cullFace(n.BACK):N===Am?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),C=N}function J(N){N!==K&&(X&&n.lineWidth(N),K=N)}function se(N,ve,Q){N?(fe(n.POLYGON_OFFSET_FILL),(V!==ve||ee!==Q)&&(n.polygonOffset(ve,Q),V=ve,ee=Q)):Re(n.POLYGON_OFFSET_FILL)}function Y(N){N?fe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function x(N){N===void 0&&(N=n.TEXTURE0+te-1),ue!==N&&(n.activeTexture(N),ue=N)}function _(N,ve,Q){Q===void 0&&(ue===null?Q=n.TEXTURE0+te-1:Q=ue);let ie=me[Q];ie===void 0&&(ie={type:void 0,texture:void 0},me[Q]=ie),(ie.type!==N||ie.texture!==ve)&&(ue!==Q&&(n.activeTexture(Q),ue=Q),n.bindTexture(N,ve||Ee[N]),ie.type=N,ie.texture=ve)}function D(){const N=me[ue];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function z(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){qe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function de(N){ne.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function Fe(N,ve){let Q=c.get(ve);Q===void 0&&(Q=new WeakMap,c.set(ve,Q));let ie=Q.get(N);ie===void 0&&(ie=n.getUniformBlockIndex(ve,N.name),Q.set(N,ie))}function Be(N,ve){const ie=c.get(ve).get(N);l.get(ve)!==ie&&(n.uniformBlockBinding(ve,ie,N.__bindingPointIndex),l.set(ve,ie))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,me={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,b=null,E=null,I=null,L=null,R=new Ye(0,0,0),U=0,T=!1,S=null,C=null,K=null,V=null,ee=null,qe.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Re,bindFramebuffer:We,drawBuffers:Me,useProgram:ht,setBlending:M,setMaterial:re,setFlipSided:$,setCullFace:Z,setLineWidth:J,setPolygonOffset:se,setScissorTest:Y,activeTexture:x,bindTexture:_,unbindTexture:D,compressedTexImage2D:z,compressedTexImage3D:k,texImage2D:_e,texImage3D:Pe,updateUBOMapping:Fe,uniformBlockBinding:Be,texStorage2D:we,texStorage3D:ae,texSubImage2D:G,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:be,scissor:Ue,viewport:de,reset:ot}}function IM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,_){return p?new OffscreenCanvas(x,_):ts("canvas")}function v(x,_,D){let z=1;const k=Y(x);if((k.width>D||k.height>D)&&(z=D/Math.max(k.width,k.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(z*k.width),he=Math.floor(z*k.height);h===void 0&&(h=g(G,he));const oe=_?g(G,he):h;return oe.width=G,oe.height=he,oe.getContext("2d").drawImage(x,0,0,G,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+G+"x"+he+")."),oe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),x;return x}function m(x){return x.generateMipmaps}function d(x){n.generateMipmap(x)}function A(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(x,_,D,z,k=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=_;if(_===n.RED&&(D===n.FLOAT&&(G=n.R32F),D===n.HALF_FLOAT&&(G=n.R16F),D===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.R8UI),D===n.UNSIGNED_SHORT&&(G=n.R16UI),D===n.UNSIGNED_INT&&(G=n.R32UI),D===n.BYTE&&(G=n.R8I),D===n.SHORT&&(G=n.R16I),D===n.INT&&(G=n.R32I)),_===n.RG&&(D===n.FLOAT&&(G=n.RG32F),D===n.HALF_FLOAT&&(G=n.RG16F),D===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RG8UI),D===n.UNSIGNED_SHORT&&(G=n.RG16UI),D===n.UNSIGNED_INT&&(G=n.RG32UI),D===n.BYTE&&(G=n.RG8I),D===n.SHORT&&(G=n.RG16I),D===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RGB8UI),D===n.UNSIGNED_SHORT&&(G=n.RGB16UI),D===n.UNSIGNED_INT&&(G=n.RGB32UI),D===n.BYTE&&(G=n.RGB8I),D===n.SHORT&&(G=n.RGB16I),D===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),D===n.UNSIGNED_INT&&(G=n.RGBA32UI),D===n.BYTE&&(G=n.RGBA8I),D===n.SHORT&&(G=n.RGBA16I),D===n.INT&&(G=n.RGBA32I)),_===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),_===n.RGBA){const he=k?fo:Ze.getTransfer(z);D===n.FLOAT&&(G=n.RGBA32F),D===n.HALF_FLOAT&&(G=n.RGBA16F),D===n.UNSIGNED_BYTE&&(G=he===it?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(x,_){let D;return x?_===null||_===Oi||_===Jr?D=n.DEPTH24_STENCIL8:_===Wn?D=n.DEPTH32F_STENCIL8:_===Zr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Oi||_===Jr?D=n.DEPTH_COMPONENT24:_===Wn?D=n.DEPTH_COMPONENT32F:_===Zr&&(D=n.DEPTH_COMPONENT16),D}function I(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==vn&&x.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function L(x){const _=x.target;_.removeEventListener("dispose",L),U(_),_.isVideoTexture&&u.delete(_)}function R(x){const _=x.target;_.removeEventListener("dispose",R),S(_)}function U(x){const _=i.get(x);if(_.__webglInit===void 0)return;const D=x.source,z=f.get(D);if(z){const k=z[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&T(x),Object.keys(z).length===0&&f.delete(D)}i.remove(x)}function T(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const D=x.source,z=f.get(D);delete z[_.__cacheKey],o.memory.textures--}function S(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let k=0;k<_.__webglFramebuffer[z].length;k++)n.deleteFramebuffer(_.__webglFramebuffer[z][k]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=x.textures;for(let z=0,k=D.length;z<k;z++){const G=i.get(D[z]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(D[z])}i.remove(x)}let C=0;function K(){C=0}function V(){const x=C;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),C+=1,x}function ee(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function te(x,_){const D=i.get(x);if(x.isVideoTexture&&J(x),x.isRenderTargetTexture===!1&&x.version>0&&D.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(D,x,_);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function X(x,_){const D=i.get(x);if(x.version>0&&D.__version!==x.version){ne(D,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function j(x,_){const D=i.get(x);if(x.version>0&&D.__version!==x.version){ne(D,x,_);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function B(x,_){const D=i.get(x);if(x.version>0&&D.__version!==x.version){ce(D,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const ue={[gr]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},me={[vn]:n.NEAREST,[e_]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[qo]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},ye={[r_]:n.NEVER,[u_]:n.ALWAYS,[s_]:n.LESS,[lf]:n.LEQUAL,[o_]:n.EQUAL,[c_]:n.GEQUAL,[a_]:n.GREATER,[l_]:n.NOTEQUAL};function Ce(x,_){if(_.type===Wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wn||_.magFilter===qo||_.magFilter===_s||_.magFilter===Ui||_.minFilter===wn||_.minFilter===qo||_.minFilter===_s||_.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ue[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ue[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ue[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,me[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vn||_.minFilter!==_s&&_.minFilter!==Ui||_.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function qe(x,_){let D=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",L));const z=_.source;let k=f.get(z);k===void 0&&(k={},f.set(z,k));const G=ee(_);if(G!==x.__cacheKey){k[G]===void 0&&(k[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),k[G].usedTimes++;const he=k[x.__cacheKey];he!==void 0&&(k[x.__cacheKey].usedTimes--,he.usedTimes===0&&T(_)),x.__cacheKey=G,x.__webglTexture=k[G].texture}return D}function ne(x,_,D){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const k=qe(x,_),G=_.source;t.bindTexture(z,x.__webglTexture,n.TEXTURE0+D);const he=i.get(G);if(G.version!==he.__version||k===!0){t.activeTexture(n.TEXTURE0+D);const oe=Ze.getPrimaries(Ze.workingColorSpace),be=_.colorSpace===oi?null:Ze.getPrimaries(_.colorSpace),we=_.colorSpace===oi||oe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=v(_.image,!1,r.maxTextureSize);ae=se(_,ae);const _e=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Ue=b(_.internalFormat,_e,Pe,_.colorSpace,_.isVideoTexture);Ce(z,_);let de;const Fe=_.mipmaps,Be=_.isVideoTexture!==!0,ot=he.__version===void 0||k===!0,N=G.dataReady,ve=I(_,ae);if(_.isDepthTexture)Ue=E(_.format===es,_.type),ot&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Ue,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,_e,Pe,null));else if(_.isDataTexture)if(Fe.length>0){Be&&ot&&t.texStorage2D(n.TEXTURE_2D,ve,Ue,Fe[0].width,Fe[0].height);for(let Q=0,ie=Fe.length;Q<ie;Q++)de=Fe[Q],Be?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,_e,Pe,de.data):t.texImage2D(n.TEXTURE_2D,Q,Ue,de.width,de.height,0,_e,Pe,de.data);_.generateMipmaps=!1}else Be?(ot&&t.texStorage2D(n.TEXTURE_2D,ve,Ue,ae.width,ae.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,Pe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ae.width,ae.height,0,_e,Pe,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ue,Fe[0].width,Fe[0].height,ae.depth);for(let Q=0,ie=Fe.length;Q<ie;Q++)if(de=Fe[Q],_.format!==mn)if(_e!==null)if(Be){if(N)if(_.layerUpdates.size>0){const Se=_u(de.width,de.height,_.format,_.type);for(const xe of _.layerUpdates){const Ve=de.data.subarray(xe*Se/de.data.BYTES_PER_ELEMENT,(xe+1)*Se/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,xe,de.width,de.height,1,_e,Ve)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,ae.depth,_e,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ue,de.width,de.height,ae.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,ae.depth,_e,Pe,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ue,de.width,de.height,ae.depth,0,_e,Pe,de.data)}else{Be&&ot&&t.texStorage2D(n.TEXTURE_2D,ve,Ue,Fe[0].width,Fe[0].height);for(let Q=0,ie=Fe.length;Q<ie;Q++)de=Fe[Q],_.format!==mn?_e!==null?Be?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,de.width,de.height,_e,Pe,de.data):t.texImage2D(n.TEXTURE_2D,Q,Ue,de.width,de.height,0,_e,Pe,de.data)}else if(_.isDataArrayTexture)if(Be){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ue,ae.width,ae.height,ae.depth),N)if(_.layerUpdates.size>0){const Q=_u(ae.width,ae.height,_.format,_.type);for(const ie of _.layerUpdates){const Se=ae.data.subarray(ie*Q/ae.data.BYTES_PER_ELEMENT,(ie+1)*Q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,_e,Pe,Se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,Pe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ae.width,ae.height,ae.depth,0,_e,Pe,ae.data);else if(_.isData3DTexture)Be?(ot&&t.texStorage3D(n.TEXTURE_3D,ve,Ue,ae.width,ae.height,ae.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,Pe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ae.width,ae.height,ae.depth,0,_e,Pe,ae.data);else if(_.isFramebufferTexture){if(ot)if(Be)t.texStorage2D(n.TEXTURE_2D,ve,Ue,ae.width,ae.height);else{let Q=ae.width,ie=ae.height;for(let Se=0;Se<ve;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ue,Q,ie,0,_e,Pe,null),Q>>=1,ie>>=1}}else if(Fe.length>0){if(Be&&ot){const Q=Y(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ve,Ue,Q.width,Q.height)}for(let Q=0,ie=Fe.length;Q<ie;Q++)de=Fe[Q],Be?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,_e,Pe,de):t.texImage2D(n.TEXTURE_2D,Q,Ue,_e,Pe,de);_.generateMipmaps=!1}else if(Be){if(ot){const Q=Y(ae);t.texStorage2D(n.TEXTURE_2D,ve,Ue,Q.width,Q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Pe,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ue,_e,Pe,ae);m(_)&&d(z),he.__version=G.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ce(x,_,D){if(_.image.length!==6)return;const z=qe(x,_),k=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+D);const G=i.get(k);if(k.version!==G.__version||z===!0){t.activeTexture(n.TEXTURE0+D);const he=Ze.getPrimaries(Ze.workingColorSpace),oe=_.colorSpace===oi?null:Ze.getPrimaries(_.colorSpace),be=_.colorSpace===oi||he===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!we&&!ae?_e[ie]=v(_.image[ie],!0,r.maxCubemapSize):_e[ie]=ae?_.image[ie].image:_.image[ie],_e[ie]=se(_,_e[ie]);const Pe=_e[0],Ue=s.convert(_.format,_.colorSpace),de=s.convert(_.type),Fe=b(_.internalFormat,Ue,de,_.colorSpace),Be=_.isVideoTexture!==!0,ot=G.__version===void 0||z===!0,N=k.dataReady;let ve=I(_,Pe);Ce(n.TEXTURE_CUBE_MAP,_);let Q;if(we){Be&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Fe,Pe.width,Pe.height);for(let ie=0;ie<6;ie++){Q=_e[ie].mipmaps;for(let Se=0;Se<Q.length;Se++){const xe=Q[Se];_.format!==mn?Ue!==null?Be?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,xe.width,xe.height,Ue,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,xe.width,xe.height,Ue,de,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,Fe,xe.width,xe.height,0,Ue,de,xe.data)}}}else{if(Q=_.mipmaps,Be&&ot){Q.length>0&&ve++;const ie=Y(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){Be?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,Ue,de,_e[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,_e[ie].width,_e[ie].height,0,Ue,de,_e[ie].data);for(let Se=0;Se<Q.length;Se++){const Ve=Q[Se].image[ie].image;Be?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,Ve.width,Ve.height,Ue,de,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,Fe,Ve.width,Ve.height,0,Ue,de,Ve.data)}}else{Be?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,de,_e[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Ue,de,_e[ie]);for(let Se=0;Se<Q.length;Se++){const xe=Q[Se];Be?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,Ue,de,xe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,Fe,Ue,de,xe.image[ie])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),G.__version=k.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Ee(x,_,D,z,k,G){const he=s.convert(D.format,D.colorSpace),oe=s.convert(D.type),be=b(D.internalFormat,he,oe,D.colorSpace),we=i.get(_),ae=i.get(D);if(ae.__renderTarget=_,!we.__hasExternalTextures){const _e=Math.max(1,_.width>>G),Pe=Math.max(1,_.height>>G);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,G,be,_e,Pe,_.depth,0,he,oe,null):t.texImage2D(k,G,be,_e,Pe,0,he,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),Z(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,k,ae.__webglTexture,0,$(_)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,k,ae.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(x,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const z=_.depthTexture,k=z&&z.isDepthTexture?z.type:null,G=E(_.stencilBuffer,k),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=$(_);Z(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,G,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,x)}else{const z=_.textures;for(let k=0;k<z.length;k++){const G=z[k],he=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),be=b(G.internalFormat,he,oe,G.colorSpace),we=$(_);D&&Z(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,be,_.width,_.height):Z(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,be,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,be,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),te(_.depthTexture,0);const k=z.__webglTexture,G=$(_);if(_.depthTexture.format===Qr)Z(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(_.depthTexture.format===es)Z(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function We(x){const _=i.get(x),D=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const k=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",k)};z.addEventListener("dispose",k),_.__depthDisposeCallback=k}_.__boundDepthTexture=z}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const z=x.texture.mipmaps;z&&z.length>0?Re(_.__webglFramebuffer[0],x):Re(_.__webglFramebuffer,x)}else if(D){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),fe(_.__webglDepthbuffer[z],x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,G)}}else{const z=x.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),fe(_.__webglDepthbuffer,x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(x,_,D){const z=i.get(x);_!==void 0&&Ee(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&We(x)}function ht(x){const _=x.texture,D=i.get(x),z=i.get(_);x.addEventListener("dispose",R);const k=x.textures,G=x.isWebGLCubeRenderTarget===!0,he=k.length>1;if(he||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),G){D.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[oe]=[];for(let be=0;be<_.mipmaps.length;be++)D.__webglFramebuffer[oe][be]=n.createFramebuffer()}else D.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)D.__webglFramebuffer[oe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(he)for(let oe=0,be=k.length;oe<be;oe++){const we=i.get(k[oe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&Z(x)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let oe=0;oe<k.length;oe++){const be=k[oe];D.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[oe]);const we=s.convert(be.format,be.colorSpace),ae=s.convert(be.type),_e=b(be.internalFormat,we,ae,be.colorSpace,x.isXRRenderTarget===!0),Pe=$(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,_e,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,D.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(D.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)Ee(D.__webglFramebuffer[oe][be],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be);else Ee(D.__webglFramebuffer[oe],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let oe=0,be=k.length;oe<be;oe++){const we=k[oe],ae=i.get(we);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Ce(n.TEXTURE_2D,we),Ee(D.__webglFramebuffer,x,we,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(we)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(oe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,z.__webglTexture),Ce(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let be=0;be<_.mipmaps.length;be++)Ee(D.__webglFramebuffer[be],x,_,n.COLOR_ATTACHMENT0,oe,be);else Ee(D.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,oe,0);m(_)&&d(oe),t.unbindTexture()}x.depthBuffer&&We(x)}function w(x){const _=x.textures;for(let D=0,z=_.length;D<z;D++){const k=_[D];if(m(k)){const G=A(x),he=i.get(k).__webglTexture;t.bindTexture(G,he),d(G),t.unbindTexture()}}}const P=[],M=[];function re(x){if(x.samples>0){if(Z(x)===!1){const _=x.textures,D=x.width,z=x.height;let k=n.COLOR_BUFFER_BIT;const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(x),oe=_.length>1;if(oe)for(let we=0;we<_.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const be=x.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let we=0;we<_.length;we++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[we]);const ae=i.get(_[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,D,z,0,0,D,z,k,n.NEAREST),l===!0&&(P.length=0,M.length=0,P.push(n.COLOR_ATTACHMENT0+we),x.depthBuffer&&x.resolveDepthBuffer===!1&&(P.push(G),M.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<_.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,he.__webglColorRenderbuffer[we]);const ae=i.get(_[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $(x){return Math.min(r.maxSamples,x.samples)}function Z(x){const _=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function J(x){const _=o.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function se(x,_){const D=x.colorSpace,z=x.format,k=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||D!==br&&D!==oi&&(Ze.getTransfer(D)===it?(z!==mn||k!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function Y(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=te,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=B,this.rebindTextures=Me,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Z}function UM(n,e){function t(i,r=oi){let s;const o=Ze.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ef)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return n.BYTE;if(i===Qh)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===kl)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===os)return n.HALF_FLOAT;if(i===tf)return n.ALPHA;if(i===nf)return n.RGB;if(i===mn)return n.RGBA;if(i===Qr)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===rf)return n.RED;if(i===ql)return n.RED_INTEGER;if(i===sf)return n.RG;if(i===Yl)return n.RG_INTEGER;if(i===jl)return n.RGBA_INTEGER;if(i===qs||i===Ys||i===js||i===Ks)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===ja||i===Ka||i===$a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ja||i===Qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Za||i===Ja)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===ul||i===hl||i===fl||i===dl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===el)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$s||i===pl||i===ml)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$s)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===of||i===_l||i===gl||i===vl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$s)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`;class OM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gi({vertexShader:NM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new on(new us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BM extends Vi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=new OM,m=t.getContextAttributes();let d=null,A=null;const b=[],E=[],I=new ze;let L=null;const R=new rn;R.viewport=new pt;const U=new rn;U.viewport=new pt;const T=[R,U],S=new ig;let C=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ce=b[ne];return ce===void 0&&(ce=new da,b[ne]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ne){let ce=b[ne];return ce===void 0&&(ce=new da,b[ne]=ce),ce.getGripSpace()},this.getHand=function(ne){let ce=b[ne];return ce===void 0&&(ce=new da,b[ne]=ce),ce.getHandSpace()};function V(ne){const ce=E.indexOf(ne.inputSource);if(ce===-1)return;const Ee=b[ce];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,c||o),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ee(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",te);for(let ne=0;ne<b.length;ne++){const ce=E[ne];ce!==null&&(E[ne]=null,b[ne].disconnect(ce))}C=null,K=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,A=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,fe=null,Re=null;m.depth&&(Re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=m.stencil?es:Qr,fe=m.stencil?Jr:Oi);const We={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Bi(f.textureWidth,f.textureHeight,{format:mn,type:Dn,depthTexture:new xf(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Bi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te(ne){for(let ce=0;ce<ne.removed.length;ce++){const Ee=ne.removed[ce],fe=E.indexOf(Ee);fe>=0&&(E[fe]=null,b[fe].disconnect(Ee))}for(let ce=0;ce<ne.added.length;ce++){const Ee=ne.added[ce];let fe=E.indexOf(Ee);if(fe===-1){for(let We=0;We<b.length;We++)if(We>=E.length){E.push(Ee),fe=We;break}else if(E[We]===null){E[We]=Ee,fe=We;break}if(fe===-1)break}const Re=b[fe];Re&&Re.connect(Ee)}}const X=new H,j=new H;function B(ne,ce,Ee){X.setFromMatrixPosition(ce.matrixWorld),j.setFromMatrixPosition(Ee.matrixWorld);const fe=X.distanceTo(j),Re=ce.projectionMatrix.elements,We=Ee.projectionMatrix.elements,Me=Re[14]/(Re[10]-1),ht=Re[14]/(Re[10]+1),w=(Re[9]+1)/Re[5],P=(Re[9]-1)/Re[5],M=(Re[8]-1)/Re[0],re=(We[8]+1)/We[0],$=Me*M,Z=Me*re,J=fe/(-M+re),se=J*-M;if(ce.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(J),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Y=Me+J,x=ht+J,_=$-se,D=Z+(fe-se),z=w*ht/x*Y,k=P*ht/x*Y;ne.projectionMatrix.makePerspective(_,D,z,k,Y,x),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ue(ne,ce){ce===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ce.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ce=ne.near,Ee=ne.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),S.near=U.near=R.near=ce,S.far=U.far=R.far=Ee,(C!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,K=S.far),R.layers.mask=ne.layers.mask|2,U.layers.mask=ne.layers.mask|4,S.layers.mask=R.layers.mask|U.layers.mask;const fe=ne.parent,Re=S.cameras;ue(S,fe);for(let We=0;We<Re.length;We++)ue(Re[We],fe);Re.length===2?B(S,R,U):S.projectionMatrix.copy(R.projectionMatrix),me(ne,S,fe)};function me(ne,ce,Ee){Ee===null?ne.matrix.copy(ce.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ce.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=xl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ye=null;function Ce(ne,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let fe=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Me=0;Me<Ee.length;Me++){const ht=Ee[Me];let w=null;if(p!==null)w=p.getViewport(ht);else{const M=h.getViewSubImage(f,ht);w=M.viewport,Me===0&&(e.setRenderTargetTextures(A,M.colorTexture,M.depthStencilTexture),e.setRenderTarget(A))}let P=T[Me];P===void 0&&(P=new rn,P.layers.enable(Me),P.viewport=new pt,T[Me]=P),P.matrix.fromArray(ht.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ht.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(w.x,w.y,w.width,w.height),Me===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(P)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Me=h.getDepthInformation(Ee[0]);Me&&Me.isValid&&Me.texture&&v.init(e,Me,r.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const fe=E[Ee],Re=b[Ee];fe!==null&&Re!==void 0&&Re.update(fe,ce,c||o)}ye&&ye(ne,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const qe=new yf;qe.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const wi=new Ln,zM=new ut;function HM(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,_f(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),b=A.envMap,E=A.envMapRotation;b&&(m.envMap.value=b,wi.copy(E),wi.x*=-1,wi.y*=-1,wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(wi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const E=b.program;i.uniformBlockBinding(A,E)}function c(A,b){let E=r[A.id];E===void 0&&(g(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(A,I);const L=e.render.frame;s[A.id]!==L&&(f(A),s[A.id]=L)}function u(A){const b=h();A.__bindingPointIndex=b;const E=n.createBuffer(),I=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=r[A.id],E=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,R=E.length;L<R;L++){const U=Array.isArray(E[L])?E[L]:[E[L]];for(let T=0,S=U.length;T<S;T++){const C=U[T];if(p(C,L,T,I)===!0){const K=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let ee=0;for(let te=0;te<V.length;te++){const X=V[te],j=v(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,K+ee,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,ee),ee+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,b,E,I){const L=A.value,R=b+"_"+E;if(I[R]===void 0)return typeof L=="number"||typeof L=="boolean"?I[R]=L:I[R]=L.clone(),!0;{const U=I[R];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return I[R]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function g(A){const b=A.uniforms;let E=0;const I=16;for(let R=0,U=b.length;R<U;R++){const T=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,C=T.length;S<C;S++){const K=T[S],V=Array.isArray(K.value)?K.value:[K.value];for(let ee=0,te=V.length;ee<te;ee++){const X=V[ee],j=v(X),B=E%I,ue=B%j.boundary,me=B+ue;E+=ue,me!==0&&I-me<j.storage&&(E+=I-me),K.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=j.storage}}}const L=E%I;return L>0&&(E+=I-L),A.__size=E,A.__cache={},this}function v(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class GM{constructor(e={}){const{canvas:t=d_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=Jt;let L=0,R=0,U=null,T=-1,S=null;const C=new pt,K=new pt;let V=null;const ee=new Ye(0);let te=0,X=t.width,j=t.height,B=1,ue=null,me=null;const ye=new pt(0,0,X,j),Ce=new pt(0,0,X,j);let qe=!1;const ne=new Jl;let ce=!1,Ee=!1;const fe=new ut,Re=new ut,We=new H,Me=new pt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function P(){return U===null?B:1}let M=i;function re(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",xe,!1),M===null){const F="webgl2";if(M=re(F,y),M===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $,Z,J,se,Y,x,_,D,z,k,G,he,oe,be,we,ae,_e,Pe,Ue,de,Fe,Be,ot,N;function ve(){$=new Jv(M),$.init(),Be=new UM(M,$),Z=new Xv(M,$,e,Be),J=new LM(M,$),Z.reverseDepthBuffer&&f&&J.buffers.depth.setReversed(!0),se=new tx(M),Y=new xM,x=new IM(M,$,J,Y,Z,Be,se),_=new Yv(E),D=new Zv(E),z=new ag(M),ot=new kv(M,z),k=new Qv(M,z,se,ot),G=new ix(M,k,z,se),Ue=new nx(M,Z,x),ae=new qv(Y),he=new vM(E,_,D,$,Z,ot,ae),oe=new HM(E,Y),be=new SM,we=new wM($),Pe=new Gv(E,_,D,J,G,p,l),_e=new PM(E,G,Z),N=new VM(M,se,Z,J),de=new Wv(M,$,se),Fe=new ex(M,$,se),se.programs=he.programs,E.capabilities=Z,E.extensions=$,E.properties=Y,E.renderLists=be,E.shadowMap=_e,E.state=J,E.info=se}ve();const Q=new BM(E,M);this.xr=Q,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const y=$.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(y){y!==void 0&&(B=y,this.setSize(X,j,!1))},this.getSize=function(y){return y.set(X,j)},this.setSize=function(y,F,W=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,j=F,t.width=Math.floor(y*B),t.height=Math.floor(F*B),W===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(X*B,j*B).floor()},this.setDrawingBufferSize=function(y,F,W){X=y,j=F,B=W,t.width=Math.floor(y*W),t.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,F,W,q){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,F,W,q),J.viewport(C.copy(ye).multiplyScalar(B).round())},this.getScissor=function(y){return y.copy(Ce)},this.setScissor=function(y,F,W,q){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,F,W,q),J.scissor(K.copy(Ce).multiplyScalar(B).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){J.setScissorTest(qe=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,W=!0){let q=0;if(y){let O=!1;if(U!==null){const le=U.texture.format;O=le===jl||le===Yl||le===ql}if(O){const le=U.texture.type,ge=le===Dn||le===Oi||le===Zr||le===Jr||le===Wl||le===Xl,Te=Pe.getClearColor(),Ae=Pe.getClearAlpha(),Oe=Te.r,Ne=Te.g,De=Te.b;ge?(g[0]=Oe,g[1]=Ne,g[2]=De,g[3]=Ae,M.clearBufferuiv(M.COLOR,0,g)):(v[0]=Oe,v[1]=Ne,v[2]=De,v[3]=Ae,M.clearBufferiv(M.COLOR,0,v))}else q|=M.COLOR_BUFFER_BIT}F&&(q|=M.DEPTH_BUFFER_BIT),W&&(q|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Pe.dispose(),be.dispose(),we.dispose(),Y.dispose(),_.dispose(),D.dispose(),G.dispose(),ot.dispose(),N.dispose(),he.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",tc),Q.removeEventListener("sessionend",nc),vi.stop()};function ie(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const y=se.autoReset,F=_e.enabled,W=_e.autoUpdate,q=_e.needsUpdate,O=_e.type;ve(),se.autoReset=y,_e.enabled=F,_e.autoUpdate=W,_e.needsUpdate=q,_e.type=O}function xe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ve(y){const F=y.target;F.removeEventListener("dispose",Ve),ft(F)}function ft(y){Pt(y),Y.remove(y)}function Pt(y){const F=Y.get(y).programs;F!==void 0&&(F.forEach(function(W){he.releaseProgram(W)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,q,O,le){F===null&&(F=ht);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Te=If(y,F,W,q,O);J.setMaterial(q,ge);let Ae=W.index,Oe=1;if(q.wireframe===!0){if(Ae=k.getWireframeAttribute(W),Ae===void 0)return;Oe=2}const Ne=W.drawRange,De=W.attributes.position;let je=Ne.start*Oe,Qe=(Ne.start+Ne.count)*Oe;le!==null&&(je=Math.max(je,le.start*Oe),Qe=Math.min(Qe,(le.start+le.count)*Oe)),Ae!==null?(je=Math.max(je,0),Qe=Math.min(Qe,Ae.count)):De!=null&&(je=Math.max(je,0),Qe=Math.min(Qe,De.count));const gt=Qe-je;if(gt<0||gt===1/0)return;ot.setup(O,q,Te,W,Ae);let dt,$e=de;if(Ae!==null&&(dt=z.get(Ae),$e=Fe,$e.setIndex(dt)),O.isMesh)q.wireframe===!0?(J.setLineWidth(q.wireframeLinewidth*P()),$e.setMode(M.LINES)):$e.setMode(M.TRIANGLES);else if(O.isLine){let Le=q.linewidth;Le===void 0&&(Le=1),J.setLineWidth(Le*P()),O.isLineSegments?$e.setMode(M.LINES):O.isLineLoop?$e.setMode(M.LINE_LOOP):$e.setMode(M.LINE_STRIP)}else O.isPoints?$e.setMode(M.POINTS):O.isSprite&&$e.setMode(M.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($.get("WEBGL_multi_draw"))$e.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,At=O._multiDrawCounts,et=O._multiDrawCount,cn=Ae?z.get(Ae).bytesPerElement:1,ki=Y.get(q).currentProgram.getUniforms();for(let jt=0;jt<et;jt++)ki.setValue(M,"_gl_DrawID",jt),$e.render(Le[jt]/cn,At[jt])}else if(O.isInstancedMesh)$e.renderInstances(je,gt,O.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,At=Math.min(W.instanceCount,Le);$e.renderInstances(je,gt,At)}else $e.render(je,gt)};function nt(y,F,W){y.transparent===!0&&y.side===bn&&y.forceSinglePass===!1?(y.side=qt,y.needsUpdate=!0,fs(y,F,W),y.side=_i,y.needsUpdate=!0,fs(y,F,W),y.side=bn):fs(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),d=we.get(W),d.init(F),b.push(d),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),y!==W&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const q=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const le=O.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Te=le[ge];nt(Te,W,O),q.add(Te)}else nt(le,W,O),q.add(le)}),d=b.pop(),q},this.compileAsync=function(y,F,W=null){const q=this.compile(y,F,W);return new Promise(O=>{function le(){if(q.forEach(function(ge){Y.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){O(y);return}setTimeout(le,10)}$.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ln=null;function In(y){ln&&ln(y)}function tc(){vi.stop()}function nc(){vi.start()}const vi=new yf;vi.setAnimationLoop(In),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(y){ln=y,Q.setAnimationLoop(y),y===null?vi.stop():vi.start()},Q.addEventListener("sessionstart",tc),Q.addEventListener("sessionend",nc),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,F,U),d=we.get(y,b.length),d.init(F),b.push(d),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(Re),Ee=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Ee),m=be.get(y,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&Io(le,F,-1/0,E.sortObjects)}Io(y,F,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ue,me),w=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,w&&Pe.addToRenderList(m,y),this.info.render.frame++,ce===!0&&ae.beginShadows();const W=d.state.shadowsArray;_e.render(W,y,F),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,O=m.transmissive;if(d.setupLights(),F.isArrayCamera){const le=F.cameras;if(O.length>0)for(let ge=0,Te=le.length;ge<Te;ge++){const Ae=le[ge];rc(q,O,y,Ae)}w&&Pe.render(y);for(let ge=0,Te=le.length;ge<Te;ge++){const Ae=le[ge];ic(m,y,Ae,Ae.viewport)}}else O.length>0&&rc(q,O,y,F),w&&Pe.render(y),ic(m,y,F);U!==null&&R===0&&(x.updateMultisampleRenderTarget(U),x.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(E,y,F),ot.resetDefaultState(),T=-1,S=null,b.pop(),b.length>0?(d=b[b.length-1],ce===!0&&ae.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Io(y,F,W,q){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ne.intersectsSprite(y)){q&&Me.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Re);const ge=G.update(y),Te=y.material;Te.visible&&m.push(y,ge,Te,W,Me.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ne.intersectsObject(y))){const ge=G.update(y),Te=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Me.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Me.copy(ge.boundingSphere.center)),Me.applyMatrix4(y.matrixWorld).applyMatrix4(Re)),Array.isArray(Te)){const Ae=ge.groups;for(let Oe=0,Ne=Ae.length;Oe<Ne;Oe++){const De=Ae[Oe],je=Te[De.materialIndex];je&&je.visible&&m.push(y,ge,je,W,Me.z,De)}}else Te.visible&&m.push(y,ge,Te,W,Me.z,null)}}const le=y.children;for(let ge=0,Te=le.length;ge<Te;ge++)Io(le[ge],F,W,q)}function ic(y,F,W,q){const O=y.opaque,le=y.transmissive,ge=y.transparent;d.setupLightsView(W),ce===!0&&ae.setGlobalState(E.clippingPlanes,W),q&&J.viewport(C.copy(q)),O.length>0&&hs(O,F,W),le.length>0&&hs(le,F,W),ge.length>0&&hs(ge,F,W),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function rc(y,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new Bi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?os:Dn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const le=d.state.transmissionRenderTarget[q.id],ge=q.viewport||C;le.setSize(ge.z*E.transmissionResolutionScale,ge.w*E.transmissionResolutionScale);const Te=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(ee),te=E.getClearAlpha(),te<1&&E.setClearColor(16777215,.5),E.clear(),w&&Pe.render(W);const Ae=E.toneMapping;E.toneMapping=di;const Oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),ce===!0&&ae.setGlobalState(E.clippingPlanes,q),hs(y,W,q),x.updateMultisampleRenderTarget(le),x.updateRenderTargetMipmap(le),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let De=0,je=F.length;De<je;De++){const Qe=F[De],gt=Qe.object,dt=Qe.geometry,$e=Qe.material,Le=Qe.group;if($e.side===bn&&gt.layers.test(q.layers)){const At=$e.side;$e.side=qt,$e.needsUpdate=!0,sc(gt,W,q,dt,$e,Le),$e.side=At,$e.needsUpdate=!0,Ne=!0}}Ne===!0&&(x.updateMultisampleRenderTarget(le),x.updateRenderTargetMipmap(le))}E.setRenderTarget(Te),E.setClearColor(ee,te),Oe!==void 0&&(q.viewport=Oe),E.toneMapping=Ae}function hs(y,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,le=y.length;O<le;O++){const ge=y[O],Te=ge.object,Ae=ge.geometry,Oe=ge.group;let Ne=ge.material;Ne.allowOverride===!0&&q!==null&&(Ne=q),Te.layers.test(W.layers)&&sc(Te,F,W,Ae,Ne,Oe)}}function sc(y,F,W,q,O,le){y.onBeforeRender(E,F,W,q,O,le),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(E,F,W,q,y,le),O.transparent===!0&&O.side===bn&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,E.renderBufferDirect(W,F,q,O,y,le),O.side=_i,O.needsUpdate=!0,E.renderBufferDirect(W,F,q,O,y,le),O.side=bn):E.renderBufferDirect(W,F,q,O,y,le),y.onAfterRender(E,F,W,q,O,le)}function fs(y,F,W){F.isScene!==!0&&(F=ht);const q=Y.get(y),O=d.state.lights,le=d.state.shadowsArray,ge=O.state.version,Te=he.getParameters(y,O.state,le,F,W),Ae=he.getProgramCacheKey(Te);let Oe=q.programs;q.environment=y.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(y.isMeshStandardMaterial?D:_).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",Ve),Oe=new Map,q.programs=Oe);let Ne=Oe.get(Ae);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===ge)return ac(y,Te),Ne}else Te.uniforms=he.getUniforms(y),y.onBeforeCompile(Te,E),Ne=he.acquireProgram(Te,Ae),Oe.set(Ae,Ne),q.uniforms=Te.uniforms;const De=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=ae.uniform),ac(y,Te),q.needsLights=Nf(y),q.lightsStateVersion=ge,q.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Ne,q.uniformsList=null,Ne}function oc(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Qs.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function ac(y,F){const W=Y.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function If(y,F,W,q,O){F.isScene!==!0&&(F=ht),x.resetTextureUnits();const le=F.fog,ge=q.isMeshStandardMaterial?F.environment:null,Te=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:br,Ae=(q.isMeshStandardMaterial?D:_).get(q.envMap||ge),Oe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,Qe=!!W.morphAttributes.color;let gt=di;q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(gt=E.toneMapping);const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$e=dt!==void 0?dt.length:0,Le=Y.get(q),At=d.state.lights;if(ce===!0&&(Ee===!0||y!==S)){const Nt=y===S&&q.id===T;ae.setState(q,y,Nt)}let et=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==At.state.version||Le.outputColorSpace!==Te||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==Ae||q.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ae.numPlanes||Le.numIntersection!==ae.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Ne||Le.morphTargets!==De||Le.morphNormals!==je||Le.morphColors!==Qe||Le.toneMapping!==gt||Le.morphTargetsCount!==$e)&&(et=!0):(et=!0,Le.__version=q.version);let cn=Le.currentProgram;et===!0&&(cn=fs(q,F,O));let ki=!1,jt=!1,Cr=!1;const ct=cn.getUniforms(),en=Le.uniforms;if(J.useProgram(cn.program)&&(ki=!0,jt=!0,Cr=!0),q.id!==T&&(T=q.id,jt=!0),ki||S!==y){J.buffers.depth.getReversed()?(fe.copy(y.projectionMatrix),m_(fe),__(fe),ct.setValue(M,"projectionMatrix",fe)):ct.setValue(M,"projectionMatrix",y.projectionMatrix),ct.setValue(M,"viewMatrix",y.matrixWorldInverse);const Vt=ct.map.cameraPosition;Vt!==void 0&&Vt.setValue(M,We.setFromMatrixPosition(y.matrixWorld)),Z.logarithmicDepthBuffer&&ct.setValue(M,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ct.setValue(M,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,jt=!0,Cr=!0)}if(O.isSkinnedMesh){ct.setOptional(M,O,"bindMatrix"),ct.setOptional(M,O,"bindMatrixInverse");const Nt=O.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ct.setValue(M,"boneTexture",Nt.boneTexture,x))}O.isBatchedMesh&&(ct.setOptional(M,O,"batchingTexture"),ct.setValue(M,"batchingTexture",O._matricesTexture,x),ct.setOptional(M,O,"batchingIdTexture"),ct.setValue(M,"batchingIdTexture",O._indirectTexture,x),ct.setOptional(M,O,"batchingColorTexture"),O._colorsTexture!==null&&ct.setValue(M,"batchingColorTexture",O._colorsTexture,x));const tn=W.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Ue.update(O,W,cn),(jt||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,ct.setValue(M,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(en.envMap.value=Ae,en.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),jt&&(ct.setValue(M,"toneMappingExposure",E.toneMappingExposure),Le.needsLights&&Uf(en,Cr),le&&q.fog===!0&&oe.refreshFogUniforms(en,le),oe.refreshMaterialUniforms(en,q,B,j,d.state.transmissionRenderTarget[y.id]),Qs.upload(M,oc(Le),en,x)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qs.upload(M,oc(Le),en,x),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ct.setValue(M,"center",O.center),ct.setValue(M,"modelViewMatrix",O.modelViewMatrix),ct.setValue(M,"normalMatrix",O.normalMatrix),ct.setValue(M,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Nt=q.uniformsGroups;for(let Vt=0,Uo=Nt.length;Vt<Uo;Vt++){const xi=Nt[Vt];N.update(xi,cn),N.bind(xi,cn)}}return cn}function Uf(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Nf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,F,W){const q=Y.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(y.texture).__webglTexture=F,Y.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const W=Y.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Ff=M.createFramebuffer();this.setRenderTarget=function(y,F=0,W=0){U=y,L=F,R=W;let q=!0,O=null,le=!1,ge=!1;if(y){const Ae=Y.get(y);if(Ae.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(M.FRAMEBUFFER,null),q=!1;else if(Ae.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(Ae.__hasExternalTextures)x.rebindTextures(y,Y.get(y.texture).__webglTexture,Y.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const De=y.depthTexture;if(Ae.__boundDepthTexture!==De){if(De!==null&&Y.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const Ne=Y.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?O=Ne[F][W]:O=Ne[F],le=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?O=Y.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[W]:O=Ne,C.copy(y.viewport),K.copy(y.scissor),V=y.scissorTest}else C.copy(ye).multiplyScalar(B).floor(),K.copy(Ce).multiplyScalar(B).floor(),V=qe;if(W!==0&&(O=Ff),J.bindFramebuffer(M.FRAMEBUFFER,O)&&q&&J.drawBuffers(y,O),J.viewport(C),J.scissor(K),J.setScissorTest(V),le){const Ae=Y.get(y.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,W)}else if(ge){const Ae=Y.get(y.texture),Oe=F;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ae.__webglTexture,W,Oe)}else if(y!==null&&W!==0){const Ae=Y.get(y.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ae.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(y,F,W,q,O,le,ge){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){J.bindFramebuffer(M.FRAMEBUFFER,Te);try{const Ae=y.texture,Oe=Ae.format,Ne=Ae.type;if(!Z.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-q&&W>=0&&W<=y.height-O&&M.readPixels(F,W,q,O,Be.convert(Oe),Be.convert(Ne),le)}finally{const Ae=U!==null?Y.get(U).__webglFramebuffer:null;J.bindFramebuffer(M.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,F,W,q,O,le,ge){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te)if(F>=0&&F<=y.width-q&&W>=0&&W<=y.height-O){J.bindFramebuffer(M.FRAMEBUFFER,Te);const Ae=y.texture,Oe=Ae.format,Ne=Ae.type;if(!Z.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,De),M.bufferData(M.PIXEL_PACK_BUFFER,le.byteLength,M.STREAM_READ),M.readPixels(F,W,q,O,Be.convert(Oe),Be.convert(Ne),0);const je=U!==null?Y.get(U).__webglFramebuffer:null;J.bindFramebuffer(M.FRAMEBUFFER,je);const Qe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await p_(M,Qe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,De),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,le),M.deleteBuffer(De),M.deleteSync(Qe),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,W=0){const q=Math.pow(2,-W),O=Math.floor(y.image.width*q),le=Math.floor(y.image.height*q),ge=F!==null?F.x:0,Te=F!==null?F.y:0;x.setTexture2D(y,0),M.copyTexSubImage2D(M.TEXTURE_2D,W,0,0,ge,Te,O,le),J.unbindTexture()};const Of=M.createFramebuffer(),Bf=M.createFramebuffer();this.copyTextureToTexture=function(y,F,W=null,q=null,O=0,le=null){le===null&&(O!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=O,O=0):le=0);let ge,Te,Ae,Oe,Ne,De,je,Qe,gt;const dt=y.isCompressedTexture?y.mipmaps[le]:y.image;if(W!==null)ge=W.max.x-W.min.x,Te=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,Oe=W.min.x,Ne=W.min.y,De=W.isBox3?W.min.z:0;else{const tn=Math.pow(2,-O);ge=Math.floor(dt.width*tn),Te=Math.floor(dt.height*tn),y.isDataArrayTexture?Ae=dt.depth:y.isData3DTexture?Ae=Math.floor(dt.depth*tn):Ae=1,Oe=0,Ne=0,De=0}q!==null?(je=q.x,Qe=q.y,gt=q.z):(je=0,Qe=0,gt=0);const $e=Be.convert(F.format),Le=Be.convert(F.type);let At;F.isData3DTexture?(x.setTexture3D(F,0),At=M.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),At=M.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),At=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,F.unpackAlignment);const et=M.getParameter(M.UNPACK_ROW_LENGTH),cn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),ki=M.getParameter(M.UNPACK_SKIP_PIXELS),jt=M.getParameter(M.UNPACK_SKIP_ROWS),Cr=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,dt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,dt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Oe),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ne),M.pixelStorei(M.UNPACK_SKIP_IMAGES,De);const ct=y.isDataArrayTexture||y.isData3DTexture,en=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const tn=Y.get(y),Nt=Y.get(F),Vt=Y.get(tn.__renderTarget),Uo=Y.get(Nt.__renderTarget);J.bindFramebuffer(M.READ_FRAMEBUFFER,Vt.__webglFramebuffer),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,Uo.__webglFramebuffer);for(let xi=0;xi<Ae;xi++)ct&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Y.get(y).__webglTexture,O,De+xi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,le,gt+xi)),M.blitFramebuffer(Oe,Ne,ge,Te,je,Qe,ge,Te,M.DEPTH_BUFFER_BIT,M.NEAREST);J.bindFramebuffer(M.READ_FRAMEBUFFER,null),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Y.has(y)){const tn=Y.get(y),Nt=Y.get(F);J.bindFramebuffer(M.READ_FRAMEBUFFER,Of),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,Bf);for(let Vt=0;Vt<Ae;Vt++)ct?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,tn.__webglTexture,O,De+Vt):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,tn.__webglTexture,O),en?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Nt.__webglTexture,le,gt+Vt):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Nt.__webglTexture,le),O!==0?M.blitFramebuffer(Oe,Ne,ge,Te,je,Qe,ge,Te,M.COLOR_BUFFER_BIT,M.NEAREST):en?M.copyTexSubImage3D(At,le,je,Qe,gt+Vt,Oe,Ne,ge,Te):M.copyTexSubImage2D(At,le,je,Qe,Oe,Ne,ge,Te);J.bindFramebuffer(M.READ_FRAMEBUFFER,null),J.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else en?y.isDataTexture||y.isData3DTexture?M.texSubImage3D(At,le,je,Qe,gt,ge,Te,Ae,$e,Le,dt.data):F.isCompressedArrayTexture?M.compressedTexSubImage3D(At,le,je,Qe,gt,ge,Te,Ae,$e,dt.data):M.texSubImage3D(At,le,je,Qe,gt,ge,Te,Ae,$e,Le,dt):y.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,le,je,Qe,ge,Te,$e,Le,dt.data):y.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,le,je,Qe,dt.width,dt.height,$e,dt.data):M.texSubImage2D(M.TEXTURE_2D,le,je,Qe,ge,Te,$e,Le,dt);M.pixelStorei(M.UNPACK_ROW_LENGTH,et),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,cn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ki),M.pixelStorei(M.UNPACK_SKIP_ROWS,jt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Cr),le===0&&F.generateMipmaps&&M.generateMipmap(At),J.unbindTexture()},this.copyTextureToTexture3D=function(y,F,W=null,q=null,O=0){return Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,W,q,O)},this.initRenderTarget=function(y){Y.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),J.unbindTexture()},this.resetState=function(){L=0,R=0,U=null,J.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Vu={type:"change"},ec={type:"start"},Rf={type:"end"},Hs=new $l,Gu=new si,kM=Math.cos(70*f_.DEG2RAD),Mt=new H,kt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ta=1e-6;class WM extends sg{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new zi,this._lastTargetPosition=new H,this._quat=new zi().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mu,this._sphericalDelta=new mu,this._scale=1,this._panOffset=new H,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new H,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qM.bind(this),this._onPointerDown=XM.bind(this),this._onPointerUp=YM.bind(this),this._onContextMenu=eS.bind(this),this._onMouseWheel=$M.bind(this),this._onKeyDown=ZM.bind(this),this._onTouchStart=JM.bind(this),this._onTouchMove=QM.bind(this),this._onMouseDown=jM.bind(this),this._onMouseMove=KM.bind(this),this._interceptControlDown=tS.bind(this),this._interceptControlUp=nS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vu),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=kt:i>Math.PI&&(i-=kt),r<-Math.PI?r+=kt:r>Math.PI&&(r-=kt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hs.origin.copy(this.object.position),Hs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hs.direction))<kM?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hs.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ta||this._lastTargetPosition.distanceToSquared(this.target)>Ta?(this.dispatchEvent(Vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kt/60*this.autoRotateSpeed*e:kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Mt.copy(r).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function XM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function qM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function YM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rf),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rt.DOLLY;break;case mr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}break;case mr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(ec)}function KM(n){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function $M(n){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(n.preventDefault(),this.dispatchEvent(ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rf))}function ZM(n){this.enabled!==!1&&this._handleKeyDown(n)}function JM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=rt.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rt.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(ec)}function QM(n){switch(this._trackPointer(n),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rt.NONE}}function eS(n){this.enabled!==!1&&n.preventDefault()}function tS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class iS{constructor(){mt(this,"containerDom");mt(this,"renderer");mt(this,"scene");mt(this,"camera");mt(this,"controls");this.containerDom=document.createElement("div"),this.renderer=new GM({antialias:!0}),this.renderer.setClearColor(3355443),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$h,this.containerDom.appendChild(this.renderer.domElement),this.scene=new V_;const e=new ng(13421823,30);this.scene.add(e);const t=new tg(16777130,70);t.position.set(500,1e3,700),t.castShadow=!0,t.shadow.camera.top=5e3,t.shadow.camera.bottom=-5e3,t.shadow.camera.left=-5e3,t.shadow.camera.right=5e3,t.shadow.camera.near=.5,t.shadow.camera.far=1e4,this.scene.add(t);const i=new on(new us(2e3,2e3,1,1),new q_({color:17,opacity:.2,side:bn}));i.rotation.x=-Math.PI/2,i.position.y=-1,i.receiveShadow=!0,this.scene.add(i),this.camera=new rn(45,window.innerWidth/window.innerHeight,50,2e4),this.camera.position.set(1e3,600,1e3),this.controls=new WM(this.camera,this.renderer.domElement),this.controls.target.set(200,300,0),this.controls.update(),window.addEventListener("resize",this.onWindowResize.bind(this))}setDomParent(e){e.appendChild(this.containerDom),this.onWindowResize()}removeDomParent(){var e;(e=this.containerDom.parentNode)==null||e.removeChild(this.containerDom)}render(){this.renderer.render(this.scene,this.camera),this.controls.update()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}add(e){this.scene.add(e)}remove(e){this.scene.remove(e)}addAxisHelper(){const e=new rg(15);this.scene.add(e)}cameraLookAt(e,t,i){this.camera.lookAt(e,t,i)}}class rS{constructor(){mt(this,"functionsToUpdate",[]);mt(this,"oldTime",Date.now());mt(this,"isRunning",!1)}on(e){this.functionsToUpdate.push(e)}update(){if(!this.isRunning)return;requestAnimationFrame(this.update.bind(this));const e=Date.now(),t=e-this.oldTime,i=Math.round(t/16);this.oldTime=e;for(let r=0;r<this.functionsToUpdate.length;++r)this.functionsToUpdate[r](i)}start(){this.isRunning=!0,this.update()}stop(){this.isRunning=!1}}const sS="/250121_mine_view/assets/nx-oN-04DO6.png",oS="/250121_mine_view/assets/px-CUI8pdLN.png",aS="/250121_mine_view/assets/nz-BnujoeWg.png",lS="/250121_mine_view/assets/pz-Dv0U2MSs.png",cS="/250121_mine_view/assets/ny-BF6b_tDD.png",uS="/250121_mine_view/assets/py-DLYLH7J3.png",hS="/250121_mine_view/assets/streaky-plywood_albedo-Db8UHUWD.png",fS="/250121_mine_view/assets/streaky-plywood_ao-BV6oFUY2.png",dS="/250121_mine_view/assets/streaky-plywood_height-DovDHiPF.png",pS="/250121_mine_view/assets/streaky-plywood_normal-ogl-DiIgOocD.png";var _t=(n=>(n.SKY="SKY",n.W_MAP="W_MAP",n.W_AO_MAP="W_AO_MAP",n.W_NORMAL_MAP="W_NOMAL_MAP",n.W_HEIGHT_MAP="W_HEIGHT_MAP",n))(_t||{});const mS=[{type:"IMGS_FOR_CUB",filename:[oS,sS,uS,cS,aS,lS],key:"SKY"},{type:"IMGS",filename:hS,key:"W_MAP"},{type:"IMGS",filename:fS,key:"W_AO_MAP"},{type:"IMGS",filename:pS,key:"W_NOMAL_MAP"},{type:"IMGS",filename:dS,key:"W_HEIGHT_MAP"}];class _S{constructor(){mt(this,"texLoader");mt(this,"cubeLoader");mt(this,"assets",{});this.texLoader=new J_,this.cubeLoader=new Z_}async loadAllAssets(){await Promise.all(mS.map(this.loadAsset.bind(this)))}loadAsset(e){const{type:t,filename:i,key:r}=e;return t==="IMGS_FOR_CUB"?new Promise((s,o)=>this.cubeLoader.load(i,a=>{this.assets[r]=a,s(null)},void 0,a=>o(a))):t==="IMGS"?new Promise((s,o)=>this.texLoader.load(i,a=>{this.assets[r]=a,s(null)},void 0,a=>o(a))):Promise.reject(new Error(`Неизвестный тип: ${t}`))}}class gS{constructor(e){mt(this,"redMirrorr");mt(this,"wood");mt(this,"simple");e[_t.W_MAP]!==null&&(e[_t.W_MAP].wrapS=e[_t.W_MAP].wrapT=gr,e[_t.W_MAP].repeat.set(2,2),e[_t.W_MAP].offset.set(.5,.5)),e[_t.W_AO_MAP]!==null&&(e[_t.W_AO_MAP].wrapS=e[_t.W_AO_MAP].wrapT=gr,e[_t.W_AO_MAP].repeat.set(2,2),e[_t.W_AO_MAP].offset.set(.5,.5)),e[_t.W_NORMAL_MAP]!==null&&(e[_t.W_NORMAL_MAP].wrapS=e[_t.W_NORMAL_MAP].wrapT=gr,e[_t.W_NORMAL_MAP].repeat.set(2,2),e[_t.W_NORMAL_MAP].offset.set(.5,.5)),this.wood=new _a({color:3355443,lightMap:e[_t.W_AO_MAP],lightMapIntensity:.35,normalMap:e[_t.W_NORMAL_MAP],normalScale:new ze(.2,.2),envMap:e[_t.SKY],map:e[_t.W_MAP],reflectivity:.002,shininess:100,specular:3355443,flatShading:!0}),this.redMirrorr=new _a({color:16777215,envMap:e[_t.SKY],reflectivity:1,shininess:50,specular:16777215,flatShading:!0}),this.simple=new _a({color:1118481})}}var ai=(n=>(n.FACET11="FACET11",n.FACET12="FACET12",n.FACET13="FACET13",n.FACET14="FACET14",n.FACET22="FACET22",n.FACET33="FACET33",n.FACET44="FACET44",n))(ai||{});const vS=(()=>{const n=Math.PI,e=Math.PI*1.5,t=7,i=6,r=Math.abs(e-n)/(t-1),s=[[0,0]];for(let o=1;o<t;++o)s.push([Math.cos(n+o*r)*i+i,Math.sin(n-o*r)*i]);return s.push([s[s.length-1][0],s[s.length-1][1]+1.5]),{type:"dataFacetPoints",name:"FACET11",h:7.5,w:6,points:s}})(),xS={name:"FACET12",h:10,w:10,points:[[0,0],[5,5],[10,10]]},MS={name:"FACET13",h:10,w:10,points:[[0,0],[10,0],[10,10]]},SS=(()=>{const n=Math.PI*1.5,e=Math.PI,t=12,i=6,r=(e-n)/(t-1),s=[[0,0]];for(let o=1;o<t;o++)s.push([Math.cos(n+o*r)*i+i,Math.sin(n+o*r)*i]);return s.push([s.at(-1)[0],s.at(-1)[1]+1.5]),{name:"FACET14",h:7.5,w:6,points:s}})(),ES={name:"FACET22",h:9,w:26,points:[[0,0],[0,-1],[13,-9],[26,-1],[26,0]]},yS={name:"FACET33",h:9,w:41,points:[[0,0],[0,-1],[1,-1],[14,-9],[29,-9],[39,-1],[41,-1],[41,0]]},TS={name:"FACET44",h:1.5,w:4,points:[[0,0],[2,-1.5],[4,0]]},Ni={FACET11:vS,FACET12:xS,FACET13:MS,FACET14:SS,FACET22:ES,FACET33:yS,FACET44:TS};let Ke=Float32Array;function bS(n){const e=Ke;return Ke=n,e}function AS(n,e,t){t=t||new Ke(16);var i=e[0*4+0],r=e[0*4+1],s=e[0*4+2],o=e[0*4+3],a=e[1*4+0],l=e[1*4+1],c=e[1*4+2],u=e[1*4+3],h=e[2*4+0],f=e[2*4+1],p=e[2*4+2],g=e[2*4+3],v=e[3*4+0],m=e[3*4+1],d=e[3*4+2],A=e[3*4+3],b=n[0*4+0],E=n[0*4+1],I=n[0*4+2],L=n[0*4+3],R=n[1*4+0],U=n[1*4+1],T=n[1*4+2],S=n[1*4+3],C=n[2*4+0],K=n[2*4+1],V=n[2*4+2],ee=n[2*4+3],te=n[3*4+0],X=n[3*4+1],j=n[3*4+2],B=n[3*4+3];return t[0]=i*b+r*R+s*C+o*te,t[1]=i*E+r*U+s*K+o*X,t[2]=i*I+r*T+s*V+o*j,t[3]=i*L+r*S+s*ee+o*B,t[4]=a*b+l*R+c*C+u*te,t[5]=a*E+l*U+c*K+u*X,t[6]=a*I+l*T+c*V+u*j,t[7]=a*L+l*S+c*ee+u*B,t[8]=h*b+f*R+p*C+g*te,t[9]=h*E+f*U+p*K+g*X,t[10]=h*I+f*T+p*V+g*j,t[11]=h*L+f*S+p*ee+g*B,t[12]=v*b+m*R+d*C+A*te,t[13]=v*E+m*U+d*K+A*X,t[14]=v*I+m*T+d*V+A*j,t[15]=v*L+m*S+d*ee+A*B,t}function wS(n,e,t){return t=t||new Ke(3),t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function Cf(n,e,t){return t=t||new Ke(3),t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function RS(n,e,t){return t=t||new Ke(3),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function eo(n,e){e=e||new Ke(3);var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return t>1e-5&&(e[0]=n[0]/t,e[1]=n[1]/t,e[2]=n[2]/t),e}function CS(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}function PS(n){return n[0]*n[0]+n[1]*n[1]+n[2]*n[2]}function Sl(n,e,t){return t=t||new Ke(3),t[0]=n[1]*e[2]-n[2]*e[1],t[1]=n[2]*e[0]-n[0]*e[2],t[2]=n[0]*e[1]-n[1]*e[0],t}function DS(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Pf(n,e){const t=n[0]-e[0],i=n[1]-e[1],r=n[2]-e[2];return t*t+i*i+r*r}function LS(n,e){return Math.sqrt(Pf(n,e))}function IS(n){return n=n||new Ke(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function US(n,e){return e=e||new Ke(16),e[0]=n[0],e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=n[1],e[5]=n[5],e[6]=n[9],e[7]=n[13],e[8]=n[2],e[9]=n[6],e[10]=n[10],e[11]=n[14],e[12]=n[3],e[13]=n[7],e[14]=n[11],e[15]=n[15],e}function NS(n,e,t,i){i=i||new Ke(16);var r=eo(Cf(n,e)),s=eo(Sl(t,r)),o=eo(Sl(r,s));return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=0,i[4]=o[0],i[5]=o[1],i[6]=o[2],i[7]=0,i[8]=r[0],i[9]=r[1],i[10]=r[2],i[11]=0,i[12]=n[0],i[13]=n[1],i[14]=n[2],i[15]=1,i}function FS(n,e,t,i,r){r=r||new Ke(16);var s=Math.tan(Math.PI*.5-.5*n),o=1/(t-i);return r[0]=s/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(t+i)*o,r[11]=-1,r[12]=0,r[13]=0,r[14]=t*i*o*2,r[15]=0,r}function OS(n,e,t,i,r,s,o){return o=o||new Ke(16),o[0]=2/(e-n),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(i-t),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2/(r-s),o[11]=0,o[12]=(n+e)/(n-e),o[13]=(t+i)/(t-i),o[14]=(r+s)/(r-s),o[15]=1,o}function BS(n,e,t,i,r,s,o){o=o||new Ke(16);var a=e-n,l=i-t,c=s-r;return o[0]=2*r/a,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*r/l,o[6]=0,o[7]=0,o[8]=(n+e)/a,o[9]=(i+t)/l,o[10]=-(s+r)/c,o[11]=-1,o[12]=0,o[13]=0,o[14]=-2*r*s/c,o[15]=0,o}function zS(n,e,t,i){return i=i||new Ke(16),i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=n,i[13]=e,i[14]=t,i[15]=1,i}function HS(n,e,t,i,r){r=r||new Ke(16);var s=n[0],o=n[1],a=n[2],l=n[3],c=n[1*4+0],u=n[1*4+1],h=n[1*4+2],f=n[1*4+3],p=n[2*4+0],g=n[2*4+1],v=n[2*4+2],m=n[2*4+3],d=n[3*4+0],A=n[3*4+1],b=n[3*4+2],E=n[3*4+3];return n!==r&&(r[0]=s,r[1]=o,r[2]=a,r[3]=l,r[4]=c,r[5]=u,r[6]=h,r[7]=f,r[8]=p,r[9]=g,r[10]=v,r[11]=m),r[12]=s*e+c*t+p*i+d,r[13]=o*e+u*t+g*i+A,r[14]=a*e+h*t+v*i+b,r[15]=l*e+f*t+m*i+E,r}function VS(n,e){e=e||new Ke(16);var t=Math.cos(n),i=Math.sin(n);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t,e[6]=i,e[7]=0,e[8]=0,e[9]=-i,e[10]=t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function GS(n,e,t){t=t||new Ke(16);var i=n[4],r=n[5],s=n[6],o=n[7],a=n[8],l=n[9],c=n[10],u=n[11],h=Math.cos(e),f=Math.sin(e);return t[4]=h*i+f*a,t[5]=h*r+f*l,t[6]=h*s+f*c,t[7]=h*o+f*u,t[8]=h*a-f*i,t[9]=h*l-f*r,t[10]=h*c-f*s,t[11]=h*u-f*o,n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t}function kS(n,e){e=e||new Ke(16);var t=Math.cos(n),i=Math.sin(n);return e[0]=t,e[1]=0,e[2]=-i,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=i,e[9]=0,e[10]=t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function WS(n,e,t){t=t||new Ke(16);var i=n[0*4+0],r=n[0*4+1],s=n[0*4+2],o=n[0*4+3],a=n[2*4+0],l=n[2*4+1],c=n[2*4+2],u=n[2*4+3],h=Math.cos(e),f=Math.sin(e);return t[0]=h*i-f*a,t[1]=h*r-f*l,t[2]=h*s-f*c,t[3]=h*o-f*u,t[8]=h*a+f*i,t[9]=h*l+f*r,t[10]=h*c+f*s,t[11]=h*u+f*o,n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t}function XS(n,e){e=e||new Ke(16);var t=Math.cos(n),i=Math.sin(n);return e[0]=t,e[1]=i,e[2]=0,e[3]=0,e[4]=-i,e[5]=t,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function qS(n,e,t){t=t||new Ke(16);var i=n[0*4+0],r=n[0*4+1],s=n[0*4+2],o=n[0*4+3],a=n[1*4+0],l=n[1*4+1],c=n[1*4+2],u=n[1*4+3],h=Math.cos(e),f=Math.sin(e);return t[0]=h*i+f*a,t[1]=h*r+f*l,t[2]=h*s+f*c,t[3]=h*o+f*u,t[4]=h*a-f*i,t[5]=h*l-f*r,t[6]=h*c-f*s,t[7]=h*u-f*o,n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t}function YS(n,e,t){t=t||new Ke(16);var i=n[0],r=n[1],s=n[2],o=Math.sqrt(i*i+r*r+s*s);i/=o,r/=o,s/=o;var a=i*i,l=r*r,c=s*s,u=Math.cos(e),h=Math.sin(e),f=1-u;return t[0]=a+(1-a)*u,t[1]=i*r*f+s*h,t[2]=i*s*f-r*h,t[3]=0,t[4]=i*r*f-s*h,t[5]=l+(1-l)*u,t[6]=r*s*f+i*h,t[7]=0,t[8]=i*s*f+r*h,t[9]=r*s*f-i*h,t[10]=c+(1-c)*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function jS(n,e,t,i){i=i||new Ke(16);var r=e[0],s=e[1],o=e[2],a=Math.sqrt(r*r+s*s+o*o);r/=a,s/=a,o/=a;var l=r*r,c=s*s,u=o*o,h=Math.cos(t),f=Math.sin(t),p=1-h,g=l+(1-l)*h,v=r*s*p+o*f,m=r*o*p-s*f,d=r*s*p-o*f,A=c+(1-c)*h,b=s*o*p+r*f,E=r*o*p+s*f,I=s*o*p-r*f,L=u+(1-u)*h,R=n[0],U=n[1],T=n[2],S=n[3],C=n[4],K=n[5],V=n[6],ee=n[7],te=n[8],X=n[9],j=n[10],B=n[11];return i[0]=g*R+v*C+m*te,i[1]=g*U+v*K+m*X,i[2]=g*T+v*V+m*j,i[3]=g*S+v*ee+m*B,i[4]=d*R+A*C+b*te,i[5]=d*U+A*K+b*X,i[6]=d*T+A*V+b*j,i[7]=d*S+A*ee+b*B,i[8]=E*R+I*C+L*te,i[9]=E*U+I*K+L*X,i[10]=E*T+I*V+L*j,i[11]=E*S+I*ee+L*B,n!==i&&(i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15]),i}function KS(n,e,t,i){return i=i||new Ke(16),i[0]=n,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=t,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function $S(n,e,t,i,r){return r=r||new Ke(16),r[0]=e*n[0*4+0],r[1]=e*n[0*4+1],r[2]=e*n[0*4+2],r[3]=e*n[0*4+3],r[4]=t*n[1*4+0],r[5]=t*n[1*4+1],r[6]=t*n[1*4+2],r[7]=t*n[1*4+3],r[8]=i*n[2*4+0],r[9]=i*n[2*4+1],r[10]=i*n[2*4+2],r[11]=i*n[2*4+3],n!==r&&(r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function ZS(n,e,t,i){i=i||new Ke(16);const r=e[0],s=e[1],o=e[2],a=e[3],l=r+r,c=s+s,u=o+o,h=r*l,f=r*c,p=r*u,g=s*c,v=s*u,m=o*u,d=a*l,A=a*c,b=a*u,E=t[0],I=t[1],L=t[2];return i[0]=(1-(g+m))*E,i[1]=(f+b)*E,i[2]=(p-A)*E,i[3]=0,i[4]=(f-b)*I,i[5]=(1-(h+m))*I,i[6]=(v+d)*I,i[7]=0,i[8]=(p+A)*L,i[9]=(v-d)*L,i[10]=(1-(h+g))*L,i[11]=0,i[12]=n[0],i[13]=n[1],i[14]=n[2],i[15]=1,i}function JS(n,e){const t=n[0],i=n[4],r=n[8],s=n[1],o=n[5],a=n[9],l=n[2],c=n[6],u=n[10],h=t+o+u;if(h>0){const f=.5/Math.sqrt(h+1);e[3]=.25/f,e[0]=(c-a)*f,e[1]=(r-l)*f,e[2]=(s-i)*f}else if(t>o&&t>u){const f=2*Math.sqrt(1+t-o-u);e[3]=(c-a)/f,e[0]=.25*f,e[1]=(i+s)/f,e[2]=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-t-u);e[3]=(r-l)/f,e[0]=(i+s)/f,e[1]=.25*f,e[2]=(a+c)/f}else{const f=2*Math.sqrt(1+u-t-o);e[3]=(s-i)/f,e[0]=(r+l)/f,e[1]=(a+c)/f,e[2]=.25*f}}function QS(n,e,t,i){let r=li.length(n.slice(0,3));const s=li.length(n.slice(4,7)),o=li.length(n.slice(8,11));eE(n)<0&&(r=-r),e[0]=n[12],e[1]=n[13],e[2]=n[14];const l=li.copy(n),c=1/r,u=1/s,h=1/o;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=u,l[5]*=u,l[6]*=u,l[8]*=h,l[9]*=h,l[10]*=h,JS(l,t),i[0]=r,i[1]=s,i[2]=o}function eE(n){var e=n[0],t=n[0*4+1],i=n[0*4+2],r=n[0*4+3],s=n[1*4+0],o=n[1*4+1],a=n[1*4+2],l=n[1*4+3],c=n[2*4+0],u=n[2*4+1],h=n[2*4+2],f=n[2*4+3],p=n[3*4+0],g=n[3*4+1],v=n[3*4+2],m=n[3*4+3],d=h*m,A=v*f,b=a*m,E=v*l,I=a*f,L=h*l,R=i*m,U=v*r,T=i*f,S=h*r,C=i*l,K=a*r,V=d*o+E*u+I*g-(A*o+b*u+L*g),ee=A*t+R*u+S*g-(d*t+U*u+T*g),te=b*t+U*o+C*g-(E*t+R*o+K*g),X=L*t+T*o+K*u-(I*t+S*o+C*u);return 1/(e*V+s*ee+c*te+p*X)}function Df(n,e){e=e||new Ke(16);var t=n[0*4+0],i=n[0*4+1],r=n[0*4+2],s=n[0*4+3],o=n[1*4+0],a=n[1*4+1],l=n[1*4+2],c=n[1*4+3],u=n[2*4+0],h=n[2*4+1],f=n[2*4+2],p=n[2*4+3],g=n[3*4+0],v=n[3*4+1],m=n[3*4+2],d=n[3*4+3],A=f*d,b=m*p,E=l*d,I=m*c,L=l*p,R=f*c,U=r*d,T=m*s,S=r*p,C=f*s,K=r*c,V=l*s,ee=u*v,te=g*h,X=o*v,j=g*a,B=o*h,ue=u*a,me=t*v,ye=g*i,Ce=t*h,qe=u*i,ne=t*a,ce=o*i,Ee=A*a+I*h+L*v-(b*a+E*h+R*v),fe=b*i+U*h+C*v-(A*i+T*h+S*v),Re=E*i+T*a+K*v-(I*i+U*a+V*v),We=R*i+S*a+V*h-(L*i+C*a+K*h),Me=1/(t*Ee+o*fe+u*Re+g*We);return e[0]=Me*Ee,e[1]=Me*fe,e[2]=Me*Re,e[3]=Me*We,e[4]=Me*(b*o+E*u+R*g-(A*o+I*u+L*g)),e[5]=Me*(A*t+T*u+S*g-(b*t+U*u+C*g)),e[6]=Me*(I*t+U*o+V*g-(E*t+T*o+K*g)),e[7]=Me*(L*t+C*o+K*u-(R*t+S*o+V*u)),e[8]=Me*(ee*c+j*p+B*d-(te*c+X*p+ue*d)),e[9]=Me*(te*s+me*p+qe*d-(ee*s+ye*p+Ce*d)),e[10]=Me*(X*s+ye*c+ne*d-(j*s+me*c+ce*d)),e[11]=Me*(ue*s+Ce*c+ce*p-(B*s+qe*c+ne*p)),e[12]=Me*(X*f+ue*m+te*l-(B*m+ee*l+j*f)),e[13]=Me*(Ce*m+ee*r+ye*f-(me*f+qe*m+te*r)),e[14]=Me*(me*l+ce*m+j*r-(ne*m+X*r+ye*l)),e[15]=Me*(ne*f+B*r+qe*l-(Ce*l+ce*f+ue*r)),e}function tE(n,e,t){t=t||new Ke(4);for(var i=0;i<4;++i){t[i]=0;for(var r=0;r<4;++r)t[i]+=e[r]*n[r*4+i]}return t}function nE(n,e,t){t=t||new Ke(3);var i=e[0],r=e[1],s=e[2],o=i*n[0*4+3]+r*n[1*4+3]+s*n[2*4+3]+n[3*4+3];return t[0]=(i*n[0*4+0]+r*n[1*4+0]+s*n[2*4+0]+n[3*4+0])/o,t[1]=(i*n[0*4+1]+r*n[1*4+1]+s*n[2*4+1]+n[3*4+1])/o,t[2]=(i*n[0*4+2]+r*n[1*4+2]+s*n[2*4+2]+n[3*4+2])/o,t}function iE(n,e,t){t=t||new Ke(3);var i=e[0],r=e[1],s=e[2];return t[0]=i*n[0*4+0]+r*n[1*4+0]+s*n[2*4+0],t[1]=i*n[0*4+1]+r*n[1*4+1]+s*n[2*4+1],t[2]=i*n[0*4+2]+r*n[1*4+2]+s*n[2*4+2],t}function rE(n,e,t){t=t||new Ke(3);var i=Df(n),r=e[0],s=e[1],o=e[2];return t[0]=r*i[0*4+0]+s*i[0*4+1]+o*i[0*4+2],t[1]=r*i[1*4+0]+s*i[1*4+1]+o*i[1*4+2],t[2]=r*i[2*4+0]+s*i[2*4+1]+o*i[2*4+2],t}function sE(n,e){return e=e||new Ke(16),e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}const li={copy:sE,lookAt:NS,addVectors:wS,subtractVectors:Cf,scaleVector:RS,distance:LS,distanceSq:Pf,normalize:eo,compose:ZS,cross:Sl,decompose:QS,dot:DS,identity:IS,transpose:US,length:CS,lengthSq:PS,orthographic:OS,frustum:BS,perspective:FS,translation:zS,translate:HS,xRotation:VS,yRotation:kS,zRotation:XS,xRotate:GS,yRotate:WS,zRotate:qS,axisRotation:YS,axisRotate:jS,scaling:KS,scale:$S,multiply:AS,inverse:Df,transformVector:tE,transformPoint:nE,transformDirection:iE,transformNormal:rE,setDefaultType:bS},An=(n,e,t,i)=>[...n,...e,...t,...n,...t,...i],qn=(n,e)=>{const t=li.yRotation(e);for(let i=0;i<n.length;i+=3){const r=li.transformPoint(t,[n[i+0],n[i+1],n[i+2],1]);n[i+0]=r[0],n[i+1]=r[1],n[i+2]=r[2]}},_n=(n,e=0,t=0,i=0)=>{const r=li.translation(e,t,i);for(let s=0;s<n.length;s+=3){const o=li.transformPoint(r,[n[s+0],n[s+1],n[s+2],1]);n[s+0]=o[0],n[s+1]=o[1],n[s+2]=o[2]}},oE=n=>{const e=[],{w:t,d:i,h:r,facetS:s}=n,{points:o}=Ni[s.type],a=[0,0,0];for(let L=0;L<o.length;++L)a.push(o[L][0],r-Ni[s.type].h+o[L][1],0);const l=[...a];qn(l,Math.PI/4);const c=[...a];qn(c,-Math.PI/4),_n(c,0,0,-i);const u=[...a];qn(u,Math.PI*.75),_n(u,t,0,0);const h=[...a];qn(h,-Math.PI*.75),_n(h,t,0,-i);const f=[c,l,u,h,c];for(let L=1;L<f.length;++L){const R=f[L-1],U=f[L];for(let T=3;T<R.length;T+=3)e.push(R[T-3],R[T-2],R[T-1],U[T-3],U[T-2],U[T-1],U[T],U[T+1],U[T+2],R[T-3],R[T-2],R[T-1],U[T],U[T+1],U[T+2],R[T],R[T+1],R[T+2])}const p=l.length-3,g=[l[p],l[p+1],l[p+2]],v=[u[p],u[p+1],u[p+2]],m=[h[p],h[p+1],h[p+2]],d=[c[p],c[p+1],c[p+2]],A=[l[0],l[1],l[2]],b=[u[0],u[1],u[2]],E=[h[0],h[1],h[2]],I=[c[0],c[1],c[2]];return{v:e,wst:g,est:v,ent:m,wnt:d,wso:A,eso:b,eno:E,wno:I}},aE=n=>{const e=[],{w:t,d:i,h:r,facetT:s}=n,{offsetX:o,offsetZ:a}=s,{points:l}=Ni[s.type],c=[];for(let U=0;U<l.length;++U)c.push(l[U][0],r+l[U][1],0);const u=[...c];qn(u,Math.PI/4),_n(u,o,0,-a);const h=[...c];qn(h,-Math.PI/4),_n(h,o,0,-i+a);const f=[...c];qn(f,Math.PI*.75),_n(f,t-o,0,-a);const p=[...c];qn(p,-Math.PI*.75),_n(p,t-o,0,-i+a);const g=[h,u,f,p,h];for(let U=1;U<g.length;++U){const T=g[U-1],S=g[U];for(let C=3;C<T.length;C+=3)e.push(T[C-3],T[C-2],T[C-1],S[C-3],S[C-2],S[C-1],S[C],S[C+1],S[C+2],T[C-3],T[C-2],T[C-1],S[C],S[C+1],S[C+2],T[C],T[C+1],T[C+2])}const v=u.length-3,m=[u[0],u[1],u[2]],d=[h[0],h[1],h[2]],A=[f[0],f[1],f[2]],b=[p[0],p[1],p[2]],E=[u[v],u[v+1],u[v+2]],I=[h[v],h[v+1],h[v+2]],L=[f[v],f[v+1],f[v+2]],R=[p[v],p[v+1],p[v+2]];return{v:e,wso:m,wno:d,eso:A,eno:b,wsi:E,wni:I,esi:L,eni:R}},lE=(n,e)=>{const t=[];if(!n.facetInner)t.push(...An(e.wsi,e.esi,e.eni,e.wni));else{const{count:i,rotationY:r}=n.facetInner,s=e.esi[0]-e.wsi[0],o=e.wsi[2]-e.wni[2];if(r===0||r==="0"){const a=Ni[ai.FACET44].w,l=[],{points:c}=Ni[ai.FACET44];for(let f=1;f<c.length;++f){const p=c[f-1],g=c[f];l.push(...An([p[0],p[1]+n.h,-o],[p[0],p[1]+n.h,0],[g[0],g[1]+n.h,0],[g[0],g[1]+n.h,-o]))}const u=(s-a*i)/(i+1),h=u+a;for(let f=0;f<i+1;++f)if(t.push(...An([h*f,n.h,-o],[h*f,n.h,0],[h*f+u,n.h,0],[h*f+u,n.h,-o])),f<i){const p=[...l];_n(p,h*f+u,0,0),t.push(...p)}_n(t,e.wsi[0],0,e.wsi[2])}else{const a=Ni[ai.FACET44].w,l=[],{points:c}=Ni[ai.FACET44];for(let f=1;f<c.length;++f){const p=c[f-1],g=c[f];l.push(...An([p[0],p[1]+n.h,-s],[p[0],p[1]+n.h,0],[g[0],g[1]+n.h,0],[g[0],g[1]+n.h,-s]))}const u=(o-a*i)/(i+1),h=u+a;for(let f=0;f<i+1;++f)if(t.push(...An([h*f,n.h,-s],[h*f,n.h,0],[h*f+u,n.h,0],[h*f+u,n.h,-s])),f<i){const p=[...l];_n(p,h*f+u,0,0),t.push(...p)}qn(t,Math.PI/2),_n(t,e.wsi[0]+s,0,e.wsi[2])}}return{v:t}};class cE{constructor(e,t,i){mt(this,"mesh");const{v:r,indInner:s,fullLen:o}=this.createVerticies(e),a=this.createUV(e,r),l=new Mn,c=new Float32Array(r);l.setAttribute("position",new Yt(c,3)),l.computeVertexNormals();const u=new Float32Array(a);l.setAttribute("uv",new Yt(u,2)),l.rotateX(-Math.PI/2),l.rotateY(-Math.PI),l.rotateZ(-Math.PI),l.clearGroups(),l.addGroup(0,s/3,0),l.addGroup(s/3,o/3,1),this.mesh=new on(l,[t,i]),this.setRotation(e.doorRotation/180*Math.PI),this.mesh.castShadow=!0}redraw(e){const{v:t,indInner:i,fullLen:r}=this.createVerticies(e);for(let o=0;o<this.mesh.geometry.attributes.position.array.length;++o)this.mesh.geometry.attributes.position.array[o]=t[o];this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.clearGroups(),this.mesh.geometry.addGroup(0,i/3,0),this.mesh.geometry.addGroup(i/3,r/3,1),this.mesh.geometry.rotateX(-Math.PI/2),this.mesh.geometry.rotateY(-Math.PI),this.mesh.geometry.rotateZ(-Math.PI);const s=this.createUV(e,t);for(let o=0;o<this.mesh.geometry.attributes.uv.array.length;++o)this.mesh.geometry.attributes.uv.array[o]=s[o];this.mesh.geometry.attributes.uv.needsUpdate=!0}createVerticies(e){const t=[],i=oE(e);t.push(...i.v);const r=aE(e);t.push(...r.v),t.push(...An(i.wst,i.est,r.eso,r.wso)),t.push(...An(i.wnt,i.wst,r.wso,r.wno)),t.push(...An(r.eso,i.est,i.ent,r.eno)),t.push(...An(r.wno,r.eno,i.ent,i.wnt));const s=t.length,o=lE(e,r);t.push(...o.v),t.push(...An([i.eso[0],0,i.eso[2]],[i.wso[0],0,i.wso[2]],[i.wno[0],0,i.wno[2]],[i.eno[0],0,i.eno[2]]));const a=t.length;return{v:t,indInner:s,fullLen:a}}createUV(e,t){const i=[];for(let r=0;r<t.length;r+=3)i.push(Math.abs(t[r]/e.w+t[r+1]/1e3),Math.abs(t[r+2]/e.d));return i}setRotation(e){this.mesh.rotation.y=-e}}const ku=n=>{let e=[],t=[];const s=n.w,o=n.d;e=[],t=[],e.push(0,0,-300,0,0,0,0,o,0,0,o,-300,0,o,0,s,o,0,s,o,-300,0,o,-300,s,0,0,s,0,-300,s,o,-300,s,o,0,s,0,0,0,0,0,0,0,-300,s,0,-300,s,0,-300,0,0,-300,0,o,-300,s,o,-300),e.push(30,30,0,s-30,30,0,s-30,30,-270,30,30,-270,30,30,0,30,30,-270,30,o-30,-270,30,o-30,0,s-30,30,-270,s-30,30,0,s-30,o-30,0,s-30,o-30,-270,30,30,-270,s-30,30,-270,s-30,o-30,-270,30,o-30,-270,s-30,o-30,0,30,o-30,0,30,o-30,-270,s-30,o-30,-270),t.push(0,0,0,0,o,0,s,o,0,s,0,0,0,0,0,0,0,-300,0,o,-300,0,o,0,0,o,-300,s,o,-300,s,o,0,s,o,-300,s,0,-300,s,0,0,s,0,-300,0,0,-300);const a=[],l=[];a.push(0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23,24,25,26,24,26,27,28,29,30,28,30,31,32,33,34,32,34,35,36,37,38,36,38,39,1,8,21,1,21,20,8,11,30,8,30,29,37,36,5,37,5,4,1,24,27,1,27,2);const c=[0,0,1,0,1,1,0,1];return l.push(...c,...c,...c,...c,...c,...c,...c,...c,...c,...c),{v:e,uv:l,i:a}};class uE{constructor(e,t){mt(this,"mesh");const{v:i,uv:r,i:s}=ku(e),o=new Mn,a=new Float32Array(i);o.setAttribute("position",new Yt(a,3));const l=new Float32Array(r);o.setAttribute("uv",new Yt(l,2)),o.setIndex(s),o.computeVertexNormals(),this.mesh=new on(o,t),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0}redraw(e){const{v:t,uv:i}=ku(e);for(let r=0;r<this.mesh.geometry.attributes.position.array.length;++r)this.mesh.geometry.attributes.position.array[r]=t[r];this.mesh.geometry.attributes.position.needsUpdate=!0;for(let r=0;r<this.mesh.geometry.attributes.uv.array.length;++r)this.mesh.geometry.attributes.uv.array[r]=i[r];this.mesh.geometry.attributes.uv.needsUpdate=!0}}class hE{constructor(e,t,i){mt(this,"mesh");mt(this,"w",0);mt(this,"elementDoor");mt(this,"elementSideWalls");this.mesh=new bt,this.w=e.w,this.elementDoor=new cE(e,t,i),this.mesh.add(this.elementDoor.mesh),this.elementSideWalls=new uE(e,t),this.mesh.add(this.elementSideWalls.mesh)}redraw(e){this.w=e.w,this.elementDoor.redraw(e),this.elementDoor.setRotation(e.doorRotation/180*Math.PI),this.elementSideWalls.redraw(e)}}const Lf={currentBox:3,w:300,d:700,h:30,facetS:{type:ai.FACET11},facetT:{type:ai.FACET22,offsetX:57,offsetZ:57},facetInner:{type:ai.FACET44,count:3,rotationY:0},doorRotation:10};let Xt=null;const fE=async n=>{const e=new iS;e.setDomParent(n);const t=new rS;t.on(()=>{e.render()});const i=new _S;await i.loadAllAssets();const r=new gS(i.assets),s=[];for(let l=0;l<5;++l){const c=new hE(Lf,r.wood,r.redMirrorr);e.add(c.mesh),c.mesh.position.x=-3e3+1e3*l,s.push(c)}let o=0;for(let l=0;l<s.length;++l)o+=s[l].w;let a=0;for(let l=0;l<s.length;++l)s[l].mesh.position.x=a-o/2+l*20,a+=s[l].w;return t.start(),{studio:e,loadManager:i,ticker:t,materialsManager:r,elems:s}},dE=n=>{if(Xt===null||Xt.elems===void 0)return;Xt.elems[+n.currentBox-1].redraw(n);let e=0;for(let i=0;i<Xt.elems.length;++i)e+=Xt.elems[i].w;let t=0;for(let i=0;i<Xt.elems.length;++i)Xt.elems[i].mesh.position.x=t-e/2+i*20,t+=Xt.elems[i].w},pE=async n=>(Xt===null?Xt=await fE(n):Xt.studio.setDomParent(n),()=>{Xt==null||Xt.studio.removeDomParent()}),mE={class:"controls"},_E={class:"border p-3 rounded-lg"},gE={class:"border p-3 rounded-lg"},vE={class:"border p-3 rounded-lg"},xE={class:"border p-3 rounded-lg"},ME=wr({__name:"BoxControls",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(n,{emit:e}){const i=is(JSON.parse(JSON.stringify(n.modelValue)));return ks(i,()=>dE(i)),(r,s)=>(ui(),hi("section",mE,[wt("fieldset",_E,[s[10]||(s[10]=wt("legend",{class:"font-semibold mb-2"},"Размеры коробки",-1)),St(Xi,{modelValue:i.w,"onUpdate:modelValue":s[0]||(s[0]=o=>i.w=o),label:"Ширина (w)",min:100,max:1e3},null,8,["modelValue"]),St(Xi,{modelValue:i.d,"onUpdate:modelValue":s[1]||(s[1]=o=>i.d=o),label:"Высота (h)",min:100,max:1e3},null,8,["modelValue"]),St(Xi,{modelValue:i.doorRotation,"onUpdate:modelValue":s[2]||(s[2]=o=>i.doorRotation=o),label:"Открытие двери ()",min:0,max:170},null,8,["modelValue"])]),wt("fieldset",gE,[s[11]||(s[11]=wt("legend",{class:"font-semibold mb-2"},"Боковая фаска (S)",-1)),St(Xi,{modelValue:i.h,"onUpdate:modelValue":s[3]||(s[3]=o=>i.h=o),label:"Толщина (d)",min:20,max:40},null,8,["modelValue"]),St(Xo,{modelValue:i.facetS.type,"onUpdate:modelValue":s[4]||(s[4]=o=>i.facetS.type=o),label:"Тип",options:["FACET11","FACET12","FACET13"]},null,8,["modelValue"])]),wt("fieldset",vE,[s[12]||(s[12]=wt("legend",{class:"font-semibold mb-2"},"Внутренняя фаска (T)",-1)),St(Xi,{modelValue:i.facetT.offsetX,"onUpdate:modelValue":s[5]||(s[5]=o=>i.facetT.offsetX=o),label:"Смещение X",min:0,max:200},null,8,["modelValue"]),St(Xi,{modelValue:i.facetT.offsetZ,"onUpdate:modelValue":s[6]||(s[6]=o=>i.facetT.offsetZ=o),label:"Смещение Z",min:0,max:200},null,8,["modelValue"]),St(Xo,{modelValue:i.facetT.type,"onUpdate:modelValue":s[7]||(s[7]=o=>i.facetT.type=o),label:"Тип",options:["FACET22","FACET33"]},null,8,["modelValue"])]),wt("fieldset",xE,[s[13]||(s[13]=wt("legend",{class:"font-semibold mb-2"},"Фаски зеркала",-1)),St(Tm,{modelValue:i.facetInner.count,"onUpdate:modelValue":s[8]||(s[8]=o=>i.facetInner.count=o),label:"Количество",min:0,max:3,step:1},null,8,["modelValue"]),St(Xo,{modelValue:i.facetInner.rotationY,"onUpdate:modelValue":s[9]||(s[9]=o=>i.facetInner.rotationY=o),label:"Поворот Y",options:["0","90"]},null,8,["modelValue"])])]))}}),SE=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},EE=SE(ME,[["__scopeId","data-v-81802649"]]),yE=wr({__name:"ThreeCanvas",setup(n){const e=yd(null);let t=null;return yh(()=>{if(e.value){const{deattachThreeCanvas:i}=pE(e.value);t=i}}),Th(()=>t==null?void 0:t()),(i,r)=>(ui(),hi("div",{ref_key:"threeWrapper",ref:e},null,512))}}),TE=wr({__name:"App",setup(n){const e=is({...Lf});return(t,i)=>(ui(),hi(dn,null,[St(EE,{modelValue:e,"onUpdate:modelValue":i[0]||(i[0]=r=>e=r)},null,8,["modelValue"]),St(yE)],64))}});hm(TE).mount("#app");

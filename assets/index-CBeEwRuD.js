var Jp=Object.defineProperty;var Qp=(r,e,t)=>e in r?Jp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Oe=(r,e,t)=>Qp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="172",em=0,Bh=1,tm=2,id=1,nm=2,Dr=3,fs=0,ui=1,Ir=2,Or=0,Co=1,zc=2,zh=3,kh=4,im=5,Vs=100,rm=101,sm=102,om=103,am=104,lm=200,cm=201,um=202,hm=203,kc=204,Hc=205,fm=206,dm=207,pm=208,mm=209,_m=210,gm=211,vm=212,xm=213,Sm=214,Vc=0,Gc=1,Wc=2,No=3,Xc=4,Yc=5,qc=6,$c=7,rd=0,Mm=1,Em=2,cs=0,ym=1,Tm=2,bm=3,wm=4,Am=5,Rm=6,Cm=7,sd=300,Fo=301,Oo=302,Kc=303,Zc=304,kl=306,jc=1e3,Ws=1001,Jc=1002,tr=1003,Pm=1004,Ja=1005,hr=1006,ec=1007,Xs=1008,Hr=1009,od=1010,ad=1011,Ma=1012,Gu=1013,Js=1014,Nr=1015,Br=1016,Wu=1017,Xu=1018,Bo=1020,ld=35902,cd=1021,ud=1022,Qi=1023,hd=1024,fd=1025,Po=1026,zo=1027,dd=1028,Yu=1029,pd=1030,qu=1031,$u=1033,Ml=33776,El=33777,yl=33778,Tl=33779,Qc=35840,eu=35841,tu=35842,nu=35843,iu=36196,ru=37492,su=37496,ou=37808,au=37809,lu=37810,cu=37811,uu=37812,hu=37813,fu=37814,du=37815,pu=37816,mu=37817,_u=37818,gu=37819,vu=37820,xu=37821,bl=36492,Su=36494,Mu=36495,md=36283,Eu=36284,yu=36285,Tu=36286,Dm=3200,Lm=3201,Um=0,Im=1,ss="",wi="srgb",ko="srgb-linear",Pl="linear",Bt="srgb",co=7680,Hh=519,Nm=512,Fm=513,Om=514,_d=515,Bm=516,zm=517,km=518,Hm=519,Vh=35044,Gh="300 es",Fr=2e3,Dl=2001;class Ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,bu=180/Math.PI;function Pa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function Vm(r,e){return(r%e+e)%e}function nc(r,e,t){return(1-t)*r+t*e}function la(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,i,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],R=i[1],b=i[4],M=i[7],A=i[2],D=i[5],C=i[8];return s[0]=o*_+a*R+l*A,s[3]=o*p+a*b+l*D,s[6]=o*d+a*M+l*C,s[1]=c*_+u*R+h*A,s[4]=c*p+u*b+h*D,s[7]=c*d+u*M+h*C,s[2]=f*_+m*R+g*A,s[5]=f*p+m*b+g*D,s[8]=f*d+m*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new ht;function gd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gm(){const r=Ea("canvas");return r.style.display="block",r}const Wh={};function bo(r){r in Wh||(Wh[r]=!0,console.warn(r))}function Wm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Xm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ym(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xh=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qm(){const r={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Bt&&(i.r=zr(i.r),i.g=zr(i.g),i.b=zr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Bt&&(i.r=Do(i.r),i.g=Do(i.g),i.b=Do(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ss?Pl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ko]:{primaries:e,whitePoint:n,transfer:Pl,toXYZ:Xh,fromXYZ:Yh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Xh,fromXYZ:Yh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),r}const Pt=qm();function zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Do(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let uo;class $m{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{uo===void 0&&(uo=Ea("canvas")),uo.width=e.width,uo.height=e.height;const n=uo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Km=0;class vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(rc(i[o].image)):s.push(rc(i[o]))}else s=rc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$m.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zm=0;class ri extends Ko{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,n=Ws,i=Ws,s=hr,o=Xs,a=Qi,l=Hr,c=ri.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Pa(),this.name="",this.source=new vd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=sd;ri.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,t=0,n=0,i=1){ln.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(m+1)/2,A=(d+1)/2,D=(u+f)/4,C=(h+_)/4,L=(g+p)/4;return b>M&&b>A?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=D/n,s=C/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=D/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=L/s),this.set(n,i,s,t),this}let R=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(p-g)/R,this.y=(h-_)/R,this.z=(f-u)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jm extends Ko{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ri(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new vd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends jm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xd extends ri{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tr,this.minFilter=tr,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends ri{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tr,this.minFilter=tr,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-a;const d=l*f+c*m+u*g+h*_,R=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const A=Math.sqrt(b),D=Math.atan2(A,d*R);p=Math.sin(p*D)/A,a=Math.sin(a*D)/A}const M=a*R;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+_*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new K,qh=new Da;class La{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$i):$i.fromBufferAttribute(s,o),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),el.subVectors(this.max,ca),ho.subVectors(e.a,ca),fo.subVectors(e.b,ca),po.subVectors(e.c,ca),Jr.subVectors(fo,ho),Qr.subVectors(po,fo),Ds.subVectors(ho,po);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-Ds.z,Ds.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,Ds.z,0,-Ds.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-Ds.y,Ds.x,0];return!oc(t,ho,fo,po,el)||(t=[1,0,0,0,1,0,0,0,1],!oc(t,ho,fo,po,el))?!1:(tl.crossVectors(Jr,Qr),t=[tl.x,tl.y,tl.z],oc(t,ho,fo,po,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new K,new K,new K,new K,new K,new K,new K,new K],$i=new K,Qa=new La,ho=new K,fo=new K,po=new K,Jr=new K,Qr=new K,Ds=new K,ca=new K,el=new K,tl=new K,Ls=new K;function oc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ls.fromArray(r,s);const a=i.x*Math.abs(Ls.x)+i.y*Math.abs(Ls.y)+i.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qm=new La,ua=new K,ac=new K;class Ku{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(ac)),this.expandByPoint(ua.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ar=new K,lc=new K,nl=new K,es=new K,cc=new K,il=new K,uc=new K;class e_{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lc.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),es.copy(this.origin).sub(lc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(nl),a=es.dot(this.direction),l=-es.dot(nl),c=es.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(lc).addScaledVector(nl,f),m}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const n=Ar.dot(this.direction),i=Ar.dot(Ar)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,n,i,s){cc.subVectors(t,e),il.subVectors(n,e),uc.crossVectors(cc,il);let o=this.direction.dot(uc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);const l=a*this.direction.dot(il.crossVectors(es,il));if(l<0)return null;const c=a*this.direction.dot(cc.cross(es));if(c<0||l+c>o)return null;const u=-a*es.dot(uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(e,t,n,i,s,o,a,l,c,u,h,f,m,g,_,p){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,m,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mo.setFromMatrixColumn(e,0).length(),s=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,n){const i=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),ts.crossVectors(n,Ti),ts.lengthSq()===0&&(Math.abs(n.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),ts.crossVectors(n,Ti)),ts.normalize(),rl.crossVectors(Ti,ts),i[0]=ts.x,i[4]=rl.x,i[8]=Ti.x,i[1]=ts.y,i[5]=rl.y,i[9]=Ti.y,i[2]=ts.z,i[6]=rl.z,i[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],R=n[3],b=n[7],M=n[11],A=n[15],D=i[0],C=i[4],L=i[8],x=i[12],E=i[1],I=i[5],W=i[9],k=i[13],ee=i[2],ne=i[6],Z=i[10],ie=i[14],X=i[3],ue=i[7],_e=i[11],Re=i[15];return s[0]=o*D+a*E+l*ee+c*X,s[4]=o*C+a*I+l*ne+c*ue,s[8]=o*L+a*W+l*Z+c*_e,s[12]=o*x+a*k+l*ie+c*Re,s[1]=u*D+h*E+f*ee+m*X,s[5]=u*C+h*I+f*ne+m*ue,s[9]=u*L+h*W+f*Z+m*_e,s[13]=u*x+h*k+f*ie+m*Re,s[2]=g*D+_*E+p*ee+d*X,s[6]=g*C+_*I+p*ne+d*ue,s[10]=g*L+_*W+p*Z+d*_e,s[14]=g*x+_*k+p*ie+d*Re,s[3]=R*D+b*E+M*ee+A*X,s[7]=R*C+b*I+M*ne+A*ue,s[11]=R*L+b*W+M*Z+A*_e,s[15]=R*x+b*k+M*ie+A*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*m-n*l*m)+_*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+d*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],R=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,b=g*f*c-u*p*c-g*l*m+o*p*m+u*l*d-o*f*d,M=u*_*c-g*h*c+g*a*m-o*_*m-u*a*d+o*h*d,A=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,D=t*R+n*b+i*M+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=R*C,e[1]=(_*f*s-h*p*s-_*i*m+n*p*m+h*i*d-n*f*d)*C,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*d+n*l*d)*C,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*m-n*l*m)*C,e[4]=b*C,e[5]=(u*p*s-g*f*s+g*i*m-t*p*m-u*i*d+t*f*d)*C,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*d-t*l*d)*C,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*m+t*l*m)*C,e[8]=M*C,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*d-t*h*d)*C,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*d+t*a*d)*C,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*C,e[12]=A*C,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*C,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*C,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,g=s*h,_=o*u,p=o*h,d=a*h,R=l*c,b=l*u,M=l*h,A=n.x,D=n.y,C=n.z;return i[0]=(1-(_+d))*A,i[1]=(m+M)*A,i[2]=(g-b)*A,i[3]=0,i[4]=(m-M)*D,i[5]=(1-(f+d))*D,i[6]=(p+R)*D,i[7]=0,i[8]=(g+b)*C,i[9]=(p-R)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=mo.set(i[0],i[1],i[2]).length();const o=mo.set(i[4],i[5],i[6]).length(),a=mo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ki.copy(this);const c=1/s,u=1/o,h=1/a;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=u,Ki.elements[5]*=u,Ki.elements[6]*=u,Ki.elements[8]*=h,Ki.elements[9]*=h,Ki.elements[10]*=h,t.setFromRotationMatrix(Ki),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Fr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(a===Fr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Dl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Fr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,m=(n+i)*u;let g,_;if(a===Fr)g=(o+s)*h,_=-2*h;else if(a===Dl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mo=new K,Ki=new _n,t_=new K(0,0,0),n_=new K(1,1,1),ts=new K,rl=new K,Ti=new K,$h=new _n,Kh=new Da;class Vr{constructor(e=0,t=0,n=0,i=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i_=0;const Zh=new K,_o=new Da,Rr=new _n,sl=new K,ha=new K,r_=new K,s_=new Da,jh=new K(1,0,0),Jh=new K(0,1,0),Qh=new K(0,0,1),ef={type:"added"},o_={type:"removed"},go={type:"childadded",child:null},hc={type:"childremoved",child:null};class Pi extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pi.DEFAULT_UP.clone();const e=new K,t=new Vr,n=new Da,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _n},normalMatrix:{value:new ht}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sl.copy(e):sl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(ha,sl,this.up):Rr.lookAt(sl,ha,this.up),this.quaternion.setFromRotationMatrix(Rr),i&&(Rr.extractRotation(i.matrixWorld),_o.setFromRotationMatrix(Rr),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),go.child=e,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o_),hc.child=e,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),go.child=e,this.dispatchEvent(go),go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pi.DEFAULT_UP=new K(0,1,0);Pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new K,Cr=new K,fc=new K,Pr=new K,vo=new K,xo=new K,tf=new K,dc=new K,pc=new K,mc=new K,_c=new ln,gc=new ln,vc=new ln;class Ji{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zi.subVectors(e,t),i.cross(Zi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Zi.subVectors(i,t),Cr.subVectors(n,t),fc.subVectors(e,t);const o=Zi.dot(Zi),a=Zi.dot(Cr),l=Zi.dot(fc),c=Cr.dot(Cr),u=Cr.dot(fc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(o,Pr.y),l.addScaledVector(a,Pr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return _c.setScalar(0),gc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(e,t),gc.fromBufferAttribute(e,n),vc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(_c,s.x),o.addScaledVector(gc,s.y),o.addScaledVector(vc,s.z),o}static isFrontFacing(e,t,n,i){return Zi.subVectors(n,t),Cr.subVectors(e,t),Zi.cross(Cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Zi.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ji.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;vo.subVectors(i,n),xo.subVectors(s,n),dc.subVectors(e,n);const l=vo.dot(dc),c=xo.dot(dc);if(l<=0&&c<=0)return t.copy(n);pc.subVectors(e,i);const u=vo.dot(pc),h=xo.dot(pc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(vo,o);mc.subVectors(e,s);const m=vo.dot(mc),g=xo.dot(mc);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(xo,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return tf.subVectors(s,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(tf,a);const d=1/(p+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(vo,o).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},ol={h:0,s:0,l:0};function xc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Vm(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xc(o,s,e+1/3),this.g=xc(o,s,e),this.b=xc(o,s,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=wi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wi){const n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Pt.fromWorkingColorSpace(Gn.copy(this),e),Math.round(yt(Gn.r*255,0,255))*65536+Math.round(yt(Gn.g*255,0,255))*256+Math.round(yt(Gn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Gn.copy(this),t);const n=Gn.r,i=Gn.g,s=Gn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=wi){Pt.fromWorkingColorSpace(Gn.copy(this),e);const t=Gn.r,n=Gn.g,i=Gn.b;return e!==wi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(ol);const n=nc(ns.h,ol.h,t),i=nc(ns.s,ol.s,t),s=nc(ns.l,ol.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Dt;Dt.NAMES=Md;let a_=0;class Hl extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=Co,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Hc,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==Vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(n.stencilFail=this.stencilFail),this.stencilZFail!==co&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zu extends Hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new K,al=new ft;class dr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=la(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array),i=ci(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),n=ci(n,this.array),i=ci(i,this.array),s=ci(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}}class Ed extends dr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yd extends dr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kr extends dr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let l_=0;const Bi=new _n,Sc=new Pi,So=new K,bi=new La,fa=new La,Cn=new K;class ms extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?yd:Ed)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,n){return Bi.makeTranslation(e,t,n),this.applyMatrix4(Bi),this}scale(e,t,n){return Bi.makeScale(e,t,n),this.applyMatrix4(Bi),this}lookAt(e){return Sc.lookAt(e),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(bi.min,fa.min),bi.expandByPoint(Cn),Cn.addVectors(bi.max,fa.max),bi.expandByPoint(Cn)):(bi.expandByPoint(fa.min),bi.expandByPoint(fa.max))}bi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Cn.fromBufferAttribute(a,c),l&&(So.fromBufferAttribute(e,c),Cn.add(So)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dr(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new K,l[L]=new K;const c=new K,u=new K,h=new K,f=new ft,m=new ft,g=new ft,_=new K,p=new K;function d(L,x,E){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,x),g.fromBufferAttribute(s,E),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(_),a[x].add(_),a[E].add(_),l[L].add(p),l[x].add(p),l[E].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,x=R.length;L<x;++L){const E=R[L],I=E.start,W=E.count;for(let k=I,ee=I+W;k<ee;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new K,M=new K,A=new K,D=new K;function C(L){A.fromBufferAttribute(i,L),D.copy(A);const x=a[L];b.copy(x),b.sub(A.multiplyScalar(A.dot(x))).normalize(),M.crossVectors(D,x);const I=M.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,x=R.length;L<x;++L){const E=R[L],I=E.start,W=E.count;for(let k=I,ee=I+W;k<ee;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,h=new K;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new dr(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ms,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new _n,Us=new e_,ll=new Ku,rf=new K,cl=new K,ul=new K,hl=new K,Mc=new K,fl=new K,sf=new K,dl=new K;class er extends Pi{constructor(e=new ms,t=new Zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Mc.fromBufferAttribute(h,e),o?fl.addScaledVector(Mc,u):fl.addScaledVector(Mc.sub(t),u))}t.add(fl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),Us.copy(e.ray).recast(e.near),!(ll.containsPoint(Us.origin)===!1&&(Us.intersectSphere(ll,rf)===null||Us.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(nf.copy(s).invert(),Us.copy(e.ray).applyMatrix4(nf),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],R=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=R,A=b;M<A;M+=3){const D=a.getX(M),C=a.getX(M+1),L=a.getX(M+2);i=pl(this,d,e,n,c,u,h,D,C,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const R=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);i=pl(this,o,e,n,c,u,h,R,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],R=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=R,A=b;M<A;M+=3){const D=M,C=M+1,L=M+2;i=pl(this,d,e,n,c,u,h,D,C,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const R=p,b=p+1,M=p+2;i=pl(this,o,e,n,c,u,h,R,b,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function c_(r,e,t,n,i,s,o,a){let l;if(e.side===ui?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===fs,a),l===null)return null;dl.copy(a),dl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(dl);return c<t.near||c>t.far?null:{distance:c,point:dl.clone(),object:r}}function pl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,cl),r.getVertexPosition(l,ul),r.getVertexPosition(c,hl);const u=c_(r,e,t,n,cl,ul,hl,sf);if(u){const h=new K;Ji.getBarycoord(sf,cl,ul,hl,h),i&&(u.uv=Ji.getInterpolatedAttribute(i,a,l,c,h,new ft)),s&&(u.uv1=Ji.getInterpolatedAttribute(s,a,l,c,h,new ft)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,h,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};Ji.getNormal(cl,ul,hl,f.normal),u.face=f,u.barycoord=h}return u}class Ua extends ms{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new kr(c,3)),this.setAttribute("normal",new kr(u,3)),this.setAttribute("uv",new kr(h,2));function g(_,p,d,R,b,M,A,D,C,L,x){const E=M/C,I=A/L,W=M/2,k=A/2,ee=D/2,ne=C+1,Z=L+1;let ie=0,X=0;const ue=new K;for(let _e=0;_e<Z;_e++){const Re=_e*I-k;for(let Je=0;Je<ne;Je++){const Mt=Je*E-W;ue[_]=Mt*R,ue[p]=Re*b,ue[d]=ee,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[p]=0,ue[d]=D>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Je/C),h.push(1-_e/L),ie+=1}}for(let _e=0;_e<L;_e++)for(let Re=0;Re<C;Re++){const Je=f+Re+ne*_e,Mt=f+Re+ne*(_e+1),te=f+(Re+1)+ne*(_e+1),de=f+(Re+1)+ne*_e;l.push(Je,Mt,de),l.push(Mt,te,de),X+=6}a.addGroup(m,X,x),m+=X,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ti(r){const e={};for(let t=0;t<r.length;t++){const n=Ho(r[t]);for(const i in n)e[i]=n[i]}return e}function u_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Td(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Ll={clone:Ho,merge:ti};var h_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bd extends Pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=Fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new K,of=new ft,af=new ft;class ji extends bd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bu*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,of,af),t.subVectors(af,of)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,Eo=1;class d_ extends Pi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ji(Mo,Eo,e,t);i.layers=this.layers,this.add(i);const s=new ji(Mo,Eo,e,t);s.layers=this.layers,this.add(s);const o=new ji(Mo,Eo,e,t);o.layers=this.layers,this.add(o);const a=new ji(Mo,Eo,e,t);a.layers=this.layers,this.add(a);const l=new ji(Mo,Eo,e,t);l.layers=this.layers,this.add(l);const c=new ji(Mo,Eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wd extends ri{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p_ extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ua(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ui,blending:Or});s.uniforms.tEquirect.value=t;const o=new er(i,s),a=t.minFilter;return t.minFilter===Xs&&(t.minFilter=hr),new d_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class m_ extends Pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ec=new K,__=new K,g_=new ht;class zs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ec.subVectors(n,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ec),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||g_.getNormalMatrix(e),i=this.coplanarPoint(Ec).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new Ku,ml=new K;class Ad{constructor(e=new zs,t=new zs,n=new zs,i=new zs,s=new zs,o=new zs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],R=i[13],b=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,p-m,M-d).normalize(),n[1].setComponents(l+s,f+c,p+m,M+d).normalize(),n[2].setComponents(l+o,f+u,p+g,M+R).normalize(),n[3].setComponents(l-o,f-u,p-g,M-R).normalize(),n[4].setComponents(l-a,f-h,p-_,M-b).normalize(),t===Fr)n[5].setComponents(l+a,f+h,p+_,M+b).normalize();else if(t===Dl)n[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ml.x=i.normal.x>0?e.max.x:e.min.x,ml.y=i.normal.y>0?e.max.y:e.min.y,ml.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _l extends Pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Rd extends ri{constructor(e,t,n,i,s,o,a,l,c,u=Po){if(u!==Po&&u!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Po&&(n=Js),n===void 0&&u===zo&&(n=Bo),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tr,this.minFilter=l!==void 0?l:tr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ia extends ms{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const R=d*f-o;for(let b=0;b<c;b++){const M=b*h-s;g.push(M,-R,0),_.push(0,0,1),p.push(b/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){const b=R+c*d,M=R+c*(d+1),A=R+1+c*(d+1),D=R+1+c*d;m.push(b,M,D),m.push(M,A,D)}this.setIndex(m),this.setAttribute("position",new kr(g,3)),this.setAttribute("normal",new kr(_,3)),this.setAttribute("uv",new kr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class v_ extends Hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x_ extends Hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class S_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const M_=new S_;class ju{constructor(e){this.manager=e!==void 0?e:M_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ju.DEFAULT_MATERIAL_NAME="__DEFAULT";class E_ extends ju{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=lf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ea("img");function l(){u(),lf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class y_ extends ju{constructor(e){super(e)}load(e,t,n,i){const s=new ri,o=new E_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ju extends bd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class T_ extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class b_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cf(){return performance.now()}function uf(r,e,t,n){const i=w_(n);switch(t){case cd:return r*e;case hd:return r*e;case fd:return r*e*2;case dd:return r*e/i.components*i.byteLength;case Yu:return r*e/i.components*i.byteLength;case pd:return r*e*2/i.components*i.byteLength;case qu:return r*e*2/i.components*i.byteLength;case ud:return r*e*3/i.components*i.byteLength;case Qi:return r*e*4/i.components*i.byteLength;case $u:return r*e*4/i.components*i.byteLength;case Ml:case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yl:case Tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(r,16)*Math.max(e,8)/4;case Qc:case tu:return Math.max(r,8)*Math.max(e,8)/2;case iu:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case hu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case mu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bl:case Su:case Mu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case md:case Eu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yu:case Tu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w_(r){switch(r){case Hr:case od:return{byteLength:1,components:1};case Ma:case ad:case Br:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case Js:case Gu:case Nr:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function A_(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var R_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C_=`#ifdef USE_ALPHAHASH
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
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I_=`#ifdef USE_AOMAP
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
#endif`,N_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F_=`#ifdef USE_BATCHING
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
#endif`,O_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H_=`#ifdef USE_IRIDESCENCE
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
#endif`,V_=`#ifdef USE_BUMPMAP
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j_=`#define PI 3.141592653589793
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
} // validated`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q_=`vec3 transformedNormal = objectNormal;
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
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
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
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xg=`uniform bool receiveShadow;
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
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
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
#endif`,wg=`struct PhysicalMaterial {
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
}`,Ag=`
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
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Og=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
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
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
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
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,ev=`#define TOON
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
}`,tv=`uniform float size;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,rv=`uniform vec3 color;
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
}`,sv=`uniform float rotation;
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
}`,ov=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:R_,alphahash_pars_fragment:C_,alphamap_fragment:P_,alphamap_pars_fragment:D_,alphatest_fragment:L_,alphatest_pars_fragment:U_,aomap_fragment:I_,aomap_pars_fragment:N_,batching_pars_vertex:F_,batching_vertex:O_,begin_vertex:B_,beginnormal_vertex:z_,bsdfs:k_,iridescence_fragment:H_,bumpmap_pars_fragment:V_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:Y_,color_fragment:q_,color_pars_fragment:$_,color_pars_vertex:K_,color_vertex:Z_,common:j_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:eg,displacementmap_vertex:tg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,colorspace_fragment:rg,colorspace_pars_fragment:sg,envmap_fragment:og,envmap_common_pars_fragment:ag,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:Sg,envmap_vertex:ug,fog_vertex:hg,fog_pars_vertex:fg,fog_fragment:dg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_pars_fragment:_g,lights_lambert_fragment:gg,lights_lambert_pars_fragment:vg,lights_pars_begin:xg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Eg,lights_phong_fragment:yg,lights_phong_pars_fragment:Tg,lights_physical_fragment:bg,lights_physical_pars_fragment:wg,lights_fragment_begin:Ag,lights_fragment_maps:Rg,lights_fragment_end:Cg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Ug,map_fragment:Ig,map_pars_fragment:Ng,map_particle_fragment:Fg,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphinstance_vertex:kg,morphcolor_vertex:Hg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:Yg,normal_pars_fragment:qg,normal_pars_vertex:$g,normal_vertex:Kg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:r0,dithering_fragment:s0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:u0,shadowmap_vertex:h0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:_0,specularmap_fragment:g0,specularmap_pars_fragment:v0,tonemapping_fragment:x0,tonemapping_pars_fragment:S0,transmission_fragment:M0,transmission_pars_fragment:E0,uv_pars_fragment:y0,uv_pars_vertex:T0,uv_vertex:b0,worldpos_vertex:w0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:D0,cube_frag:L0,depth_vert:U0,depth_frag:I0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:H0,meshbasic_frag:V0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:Y0,meshnormal_vert:q0,meshnormal_frag:$0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:j0,meshphysical_frag:J0,meshtoon_vert:Q0,meshtoon_frag:ev,points_vert:tv,points_frag:nv,shadow_vert:iv,shadow_frag:rv,sprite_vert:sv,sprite_frag:ov},Me={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},cr={basic:{uniforms:ti([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:ti([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:ti([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:ti([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:ti([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:ti([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:ti([Me.points,Me.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:ti([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:ti([Me.common,Me.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:ti([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:ti([Me.sprite,Me.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:ti([Me.common,Me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:ti([Me.lights,Me.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};cr.physical={uniforms:ti([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const gl={r:0,b:0,g:0},Ns=new Vr,av=new _n;function lv(r,e,t,n,i,s,o){const a=new Dt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function _(b){let M=!1;const A=g(b);A===null?d(a,l):A&&A.isColor&&(d(A,1),M=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(b,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===kl)?(u===void 0&&(u=new er(new Ua(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Ho(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ns.copy(M.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(Ns)),u.material.toneMapped=Pt.getTransfer(A.colorSpace)!==Bt,(h!==A||f!==A.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,m=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new er(new Ia(2,2),new ii({name:"BackgroundMaterial",uniforms:Ho(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(A.colorSpace)!==Bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,m=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(gl,Td(r)),n.buffers.color.setClear(gl.r,gl.g,gl.b,M,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:_,addToRenderList:p,dispose:R}}function cv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(E,I,W,k,ee){let ne=!1;const Z=h(k,W,I);s!==Z&&(s=Z,c(s.object)),ne=m(E,k,W,ee),ne&&g(E,k,W,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,M(E,I,W,k),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function u(E){return r.deleteVertexArray(E)}function h(E,I,W){const k=W.wireframe===!0;let ee=n[E.id];ee===void 0&&(ee={},n[E.id]=ee);let ne=ee[I.id];ne===void 0&&(ne={},ee[I.id]=ne);let Z=ne[k];return Z===void 0&&(Z=f(l()),ne[k]=Z),Z}function f(E){const I=[],W=[],k=[];for(let ee=0;ee<t;ee++)I[ee]=0,W[ee]=0,k[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:k,object:E,attributes:{},index:null}}function m(E,I,W,k){const ee=s.attributes,ne=I.attributes;let Z=0;const ie=W.getAttributes();for(const X in ie)if(ie[X].location>=0){const _e=ee[X];let Re=ne[X];if(Re===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(Re=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(Re=E.instanceColor)),_e===void 0||_e.attribute!==Re||Re&&_e.data!==Re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==k}function g(E,I,W,k){const ee={},ne=I.attributes;let Z=0;const ie=W.getAttributes();for(const X in ie)if(ie[X].location>=0){let _e=ne[X];_e===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor));const Re={};Re.attribute=_e,_e&&_e.data&&(Re.data=_e.data),ee[X]=Re,Z++}s.attributes=ee,s.attributesNum=Z,s.index=k}function _(){const E=s.newAttributes;for(let I=0,W=E.length;I<W;I++)E[I]=0}function p(E){d(E,0)}function d(E,I){const W=s.newAttributes,k=s.enabledAttributes,ee=s.attributeDivisors;W[E]=1,k[E]===0&&(r.enableVertexAttribArray(E),k[E]=1),ee[E]!==I&&(r.vertexAttribDivisor(E,I),ee[E]=I)}function R(){const E=s.newAttributes,I=s.enabledAttributes;for(let W=0,k=I.length;W<k;W++)I[W]!==E[W]&&(r.disableVertexAttribArray(W),I[W]=0)}function b(E,I,W,k,ee,ne,Z){Z===!0?r.vertexAttribIPointer(E,I,W,ee,ne):r.vertexAttribPointer(E,I,W,k,ee,ne)}function M(E,I,W,k){_();const ee=k.attributes,ne=W.getAttributes(),Z=I.defaultAttributeValues;for(const ie in ne){const X=ne[ie];if(X.location>=0){let ue=ee[ie];if(ue===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const _e=ue.normalized,Re=ue.itemSize,Je=e.get(ue);if(Je===void 0)continue;const Mt=Je.buffer,te=Je.type,de=Je.bytesPerElement,Ue=te===r.INT||te===r.UNSIGNED_INT||ue.gpuType===Gu;if(ue.isInterleavedBufferAttribute){const fe=ue.data,se=fe.stride,qe=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let ve=0;ve<X.locationSize;ve++)d(X.location+ve,fe.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ve=0;ve<X.locationSize;ve++)p(X.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let ve=0;ve<X.locationSize;ve++)b(X.location+ve,Re/X.locationSize,te,_e,se*de,(qe+Re/X.locationSize*ve)*de,Ue)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)d(X.location+fe,ue.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<X.locationSize;fe++)p(X.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let fe=0;fe<X.locationSize;fe++)b(X.location+fe,Re/X.locationSize,te,_e,Re*de,Re/X.locationSize*fe*de,Ue)}}else if(Z!==void 0){const _e=Z[ie];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(X.location,_e);break;case 3:r.vertexAttrib3fv(X.location,_e);break;case 4:r.vertexAttrib4fv(X.location,_e);break;default:r.vertexAttrib1fv(X.location,_e)}}}}R()}function A(){L();for(const E in n){const I=n[E];for(const W in I){const k=I[W];for(const ee in k)u(k[ee].object),delete k[ee];delete I[W]}delete n[E]}}function D(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const W in I){const k=I[W];for(const ee in k)u(k[ee].object),delete k[ee];delete I[W]}delete n[E.id]}function C(E){for(const I in n){const W=n[I];if(W[E.id]===void 0)continue;const k=W[E.id];for(const ee in k)u(k[ee].object),delete k[ee];delete W[E.id]}}function L(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:R}}function uv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Qi&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Hr&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nr&&!L)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:A,maxSamples:D}}function fv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zs,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const R=s?0:n,b=R*4;let M=d.clippingState||null;l.value=M,M=u(g,f,b,m);for(let A=0;A!==b;++A)M[A]=t[A];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,M=m;b!==_;++b,M+=4)o.copy(h[b]).applyMatrix4(R,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function dv(r){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=Fo:a===Zc&&(o.mapping=Oo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kc||a===Zc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new p_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const wo=4,hf=[.125,.215,.35,.446,.526,.582],Gs=20,yc=new Ju,ff=new Dt;let Tc=null,bc=0,wc=0,Ac=!1;const ks=(1+Math.sqrt(5))/2,yo=1/ks,df=[new K(-ks,yo,0),new K(ks,yo,0),new K(-yo,0,ks),new K(yo,0,ks),new K(0,ks,-yo),new K(0,ks,yo),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,bc,wc),this._renderer.xr.enabled=Ac,e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fo||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hr,minFilter:hr,generateMipmaps:!1,type:Br,format:Qi,colorSpace:ko,depthBuffer:!1},i=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pv(s)),this._blurMaterial=mv(s,e,t)}return i}_compileMaterial(e){const t=new er(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,i){const a=new ji(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ff),u.toneMapping=cs,u.autoClear=!1;const m=new Zu({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),g=new er(new Ua,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(ff),_=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):R===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;vl(i,R*b,d>2?b:0,b,b),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fo||e.mapping===Oo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new er(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;vl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=df[(i-s-1)%df.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new er(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gs-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Gs;p>Gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gs}`);const d=[];let R=0;for(let C=0;C<Gs;++C){const L=C/_,x=Math.exp(-L*L/2);d.push(x),C===0?R+=x:C<p&&(R+=2*x)}for(let C=0;C<d.length;C++)d[C]=d[C]/R;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[i],A=3*M*(i>b-wo?i-b+wo:0),D=4*(this._cubeSize-M);vl(t,A,D,3*M,2*M),l.setRenderTarget(t),l.render(h,yc)}}function pv(r){const e=[],t=[],n=[];let i=r;const s=r-wo+1+hf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-wo?l=hf[o-r+wo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,R=new Float32Array(_*g*m),b=new Float32Array(p*g*m),M=new Float32Array(d*g*m);for(let D=0;D<m;D++){const C=D%3*2/3-1,L=D>2?0:-1,x=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];R.set(x,_*g*D),b.set(f,p*g*D);const E=[D,D,D,D,D,D];M.set(E,d*g*D)}const A=new ms;A.setAttribute("position",new dr(R,_)),A.setAttribute("uv",new dr(b,p)),A.setAttribute("faceIndex",new dr(M,d)),e.push(A),i>wo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mf(r,e,t){const n=new nr(r,e,t);return n.texture.mapping=kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function mv(r,e,t){const n=new Float32Array(Gs),i=new K(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function _f(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function gf(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Qu(){return`

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
	`}function _v(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kc||l===Zc,u=l===Fo||l===Oo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new pf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new pf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&bo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vv(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],r.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const R=m.array;_=m.version;for(let b=0,M=R.length;b<M;b+=3){const A=R[b+0],D=R[b+1],C=R[b+2];f.push(A,D,D,C,C,A)}}else if(g!==void 0){const R=g.array;_=g.version;for(let b=0,M=R.length/3-1;b<M;b+=3){const A=b+0,D=b+1,C=b+2;f.push(A,D,D,C,C,A)}}else return;const p=new(gd(f)?yd:Ed)(f,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function xv(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){r.drawElements(n,m,s,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function h(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let d=0;for(let R=0;R<g;R++)d+=m[R]*_[R];t.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mv(r,e,t){const n=new WeakMap,i=new ln;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*D*4*h),L=new xd(C,A,D,h);L.type=Nr,L.needsUpdate=!0;const x=M*4;for(let I=0;I<h;I++){const W=d[I],k=R[I],ee=b[I],ne=A*D*4*I;for(let Z=0;Z<W.count;Z++){const ie=Z*x;g===!0&&(i.fromBufferAttribute(W,Z),C[ne+ie+0]=i.x,C[ne+ie+1]=i.y,C[ne+ie+2]=i.z,C[ne+ie+3]=0),_===!0&&(i.fromBufferAttribute(k,Z),C[ne+ie+4]=i.x,C[ne+ie+5]=i.y,C[ne+ie+6]=i.z,C[ne+ie+7]=0),p===!0&&(i.fromBufferAttribute(ee,Z),C[ne+ie+8]=i.x,C[ne+ie+9]=i.y,C[ne+ie+10]=i.z,C[ne+ie+11]=ee.itemSize===4?i.w:1)}}f={count:h,texture:L,size:new ft(A,D)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Ev(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Pd=new ri,vf=new Rd(1,1),Dd=new xd,Ld=new Jm,Ud=new wd,xf=[],Sf=[],Mf=new Float32Array(16),Ef=new Float32Array(9),yf=new Float32Array(4);function Zo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=xf[i];if(s===void 0&&(s=new Float32Array(i),xf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vl(r,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;r.uniform2fv(this.addr,e),Tn(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;r.uniform3fv(this.addr,e),Tn(t,e)}}function wv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;r.uniform4fv(this.addr,e),Tn(t,e)}}function Av(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(yn(t,n))return;yf.set(n),r.uniformMatrix2fv(this.addr,!1,yf),Tn(t,n)}}function Rv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(yn(t,n))return;Ef.set(n),r.uniformMatrix3fv(this.addr,!1,Ef),Tn(t,n)}}function Cv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(yn(t,n))return;Mf.set(n),r.uniformMatrix4fv(this.addr,!1,Mf),Tn(t,n)}}function Pv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Dv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;r.uniform2iv(this.addr,e),Tn(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;r.uniform3iv(this.addr,e),Tn(t,e)}}function Uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;r.uniform4iv(this.addr,e),Tn(t,e)}}function Iv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;r.uniform2uiv(this.addr,e),Tn(t,e)}}function Fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;r.uniform3uiv(this.addr,e),Tn(t,e)}}function Ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;r.uniform4uiv(this.addr,e),Tn(t,e)}}function Bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(vf.compareFunction=_d,s=vf):s=Pd,t.setTexture2D(e||s,i)}function zv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ld,i)}function kv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ud,i)}function Hv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dd,i)}function Vv(r){switch(r){case 5126:return yv;case 35664:return Tv;case 35665:return bv;case 35666:return wv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Dv;case 35668:case 35672:return Lv;case 35669:case 35673:return Uv;case 5125:return Iv;case 36294:return Nv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Gv(r,e){r.uniform1fv(this.addr,e)}function Wv(r,e){const t=Zo(e,this.size,2);r.uniform2fv(this.addr,t)}function Xv(r,e){const t=Zo(e,this.size,3);r.uniform3fv(this.addr,t)}function Yv(r,e){const t=Zo(e,this.size,4);r.uniform4fv(this.addr,t)}function qv(r,e){const t=Zo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function $v(r,e){const t=Zo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Kv(r,e){const t=Zo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zv(r,e){r.uniform1iv(this.addr,e)}function jv(r,e){r.uniform2iv(this.addr,e)}function Jv(r,e){r.uniform3iv(this.addr,e)}function Qv(r,e){r.uniform4iv(this.addr,e)}function ex(r,e){r.uniform1uiv(this.addr,e)}function tx(r,e){r.uniform2uiv(this.addr,e)}function nx(r,e){r.uniform3uiv(this.addr,e)}function ix(r,e){r.uniform4uiv(this.addr,e)}function rx(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);yn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Pd,s[o])}function sx(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);yn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ld,s[o])}function ox(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);yn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ud,s[o])}function ax(r,e,t){const n=this.cache,i=e.length,s=Vl(t,i);yn(n,s)||(r.uniform1iv(this.addr,s),Tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Dd,s[o])}function lx(r){switch(r){case 5126:return Gv;case 35664:return Wv;case 35665:return Xv;case 35666:return Yv;case 35674:return qv;case 35675:return $v;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return jv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}class cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vv(t.type)}}class ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lx(t.type)}}class hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function Tf(r,e){r.seq.push(e),r.map[e.id]=e}function fx(r,e,t){const n=r.name,i=n.length;for(Rc.lastIndex=0;;){const s=Rc.exec(n),o=Rc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Tf(t,c===void 0?new cx(a,r,e):new ux(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new hx(a),Tf(t,h)),t=h}}}class wl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);fx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const dx=37297;let px=0;function mx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const wf=new ht;function _x(r){Pt._getMatrix(wf,Pt.workingColorSpace,r);const e=`mat3( ${wf.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(r)){case Pl:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Af(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+mx(r.getShaderSource(e),o)}else return i}function gx(r,e){const t=_x(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vx(r,e){let t;switch(e){case ym:t="Linear";break;case Tm:t="Reinhard";break;case bm:t="Cineon";break;case wm:t="ACESFilmic";break;case Rm:t="AgX";break;case Cm:t="Neutral";break;case Am:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xl=new K;function xx(){Pt.getLuminanceCoefficients(xl);const r=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Mx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ex(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function pa(r){return r!==""}function Rf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(r){return r.replace(yx,bx)}const Tx=new Map;function bx(r,e){let t=mt[e];if(t===void 0){const n=Tx.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}const wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(r){return r.replace(wx,Ax)}function Ax(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Df(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dr&&(e="SHADOWMAP_TYPE_VSM"),e}function Cx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fo:case Oo:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Px(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function Dx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case Mm:e="ENVMAP_BLENDING_MIX";break;case Em:e="ENVMAP_BLENDING_ADD";break}return e}function Lx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ux(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Rx(t),c=Cx(t),u=Px(t),h=Dx(t),f=Lx(t),m=Sx(t),g=Mx(s),_=i.createProgram();let p,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),d.length>0&&(d+=`
`)):(p=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),d=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?mt.tonemapping_pars_fragment:"",t.toneMapping!==cs?vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=wu(o),o=Rf(o,t),o=Cf(o,t),a=wu(a),a=Rf(a,t),a=Cf(a,t),o=Pf(o),a=Pf(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=R+p+o,M=R+d+a,A=bf(i,i.VERTEX_SHADER,b),D=bf(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,D),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(A).trim(),ee=i.getShaderInfoLog(D).trim();let ne=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,D);else{const ie=Af(i,A,"vertex"),X=Af(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+ie+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||ee==="")&&(Z=!1);Z&&(I.diagnostics={runnable:ne,programLog:W,vertexShader:{log:k,prefix:p},fragmentShader:{log:ee,prefix:d}})}i.deleteShader(A),i.deleteShader(D),L=new wl(i,_),x=Ex(i,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,dx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=px++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=D,this}let Ix=0;class Nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fx(e),t.set(e,n)),n}}class Fx{constructor(e){this.id=Ix++,this.code=e,this.usedTimes=0}}function Ox(r,e,t,n,i,s,o){const a=new Sd,l=new Nx,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,I,W,k){const ee=W.fog,ne=k.geometry,Z=x.isMeshStandardMaterial?W.environment:null,ie=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),X=ie&&ie.mapping===kl?ie.image.height:null,ue=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const _e=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Re=_e!==void 0?_e.length:0;let Je=0;ne.morphAttributes.position!==void 0&&(Je=1),ne.morphAttributes.normal!==void 0&&(Je=2),ne.morphAttributes.color!==void 0&&(Je=3);let Mt,te,de,Ue;if(ue){const Ct=cr[ue];Mt=Ct.vertexShader,te=Ct.fragmentShader}else Mt=x.vertexShader,te=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),Ue=l.getFragmentShaderID(x);const fe=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),qe=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,Ze=!!x.map,nt=!!x.matcap,Ge=!!ie,N=!!x.aoMap,Dn=!!x.lightMap,dt=!!x.bumpMap,pt=!!x.normalMap,Ie=!!x.displacementMap,It=!!x.emissiveMap,be=!!x.metalnessMap,P=!!x.roughnessMap,S=x.anisotropy>0,V=x.clearcoat>0,ae=x.dispersion>0,ce=x.iridescence>0,re=x.sheen>0,Ne=x.transmission>0,Se=S&&!!x.anisotropyMap,Ce=V&&!!x.clearcoatMap,Qe=V&&!!x.clearcoatNormalMap,pe=V&&!!x.clearcoatRoughnessMap,De=ce&&!!x.iridescenceMap,We=ce&&!!x.iridescenceThicknessMap,Be=re&&!!x.sheenColorMap,Pe=re&&!!x.sheenRoughnessMap,gt=!!x.specularMap,it=!!x.specularColorMap,Nt=!!x.specularIntensityMap,F=Ne&&!!x.transmissionMap,xe=Ne&&!!x.thicknessMap,J=!!x.gradientMap,oe=!!x.alphaMap,me=x.alphaTest>0,Ee=!!x.alphaHash,ze=!!x.extensions;let Ft=cs;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const gn={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:Mt,fragmentShader:te,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:Ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:qe,instancingColor:qe&&k.instanceColor!==null,instancingMorph:qe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ko,alphaToCoverage:!!x.alphaToCoverage,map:Ze,matcap:nt,envMap:Ge,envMapMode:Ge&&ie.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:Dn,bumpMap:dt,normalMap:pt,displacementMap:f&&Ie,emissiveMap:It,normalMapObjectSpace:pt&&x.normalMapType===Im,normalMapTangentSpace:pt&&x.normalMapType===Um,metalnessMap:be,roughnessMap:P,anisotropy:S,anisotropyMap:Se,clearcoat:V,clearcoatMap:Ce,clearcoatNormalMap:Qe,clearcoatRoughnessMap:pe,dispersion:ae,iridescence:ce,iridescenceMap:De,iridescenceThicknessMap:We,sheen:re,sheenColorMap:Be,sheenRoughnessMap:Pe,specularMap:gt,specularColorMap:it,specularIntensityMap:Nt,transmission:Ne,transmissionMap:F,thicknessMap:xe,gradientMap:J,opaque:x.transparent===!1&&x.blending===Co&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:me,alphaHash:Ee,combine:x.combine,mapUv:Ze&&_(x.map.channel),aoMapUv:N&&_(x.aoMap.channel),lightMapUv:Dn&&_(x.lightMap.channel),bumpMapUv:dt&&_(x.bumpMap.channel),normalMapUv:pt&&_(x.normalMap.channel),displacementMapUv:Ie&&_(x.displacementMap.channel),emissiveMapUv:It&&_(x.emissiveMap.channel),metalnessMapUv:be&&_(x.metalnessMap.channel),roughnessMapUv:P&&_(x.roughnessMap.channel),anisotropyMapUv:Se&&_(x.anisotropyMap.channel),clearcoatMapUv:Ce&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(x.sheenRoughnessMap.channel),specularMapUv:gt&&_(x.specularMap.channel),specularColorMapUv:it&&_(x.specularColorMap.channel),specularIntensityMapUv:Nt&&_(x.specularIntensityMap.channel),transmissionMapUv:F&&_(x.transmissionMap.channel),thicknessMapUv:xe&&_(x.thicknessMap.channel),alphaMapUv:oe&&_(x.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(pt||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ne.attributes.uv&&(Ze||oe),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:se,skinning:k.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Ze&&x.map.isVideoTexture===!0&&Pt.getTransfer(x.map.colorSpace)===Bt,decodeVideoTextureEmissive:It&&x.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(x.emissiveMap.colorSpace)===Bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ir,flipSided:x.side===ui,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ze&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&x.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gn.vertexUv1s=c.has(1),gn.vertexUv2s=c.has(2),gn.vertexUv3s=c.has(3),c.clear(),gn}function d(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(R(E,x),b(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function R(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const E=g[x.type];let I;if(E){const W=cr[E];I=Ll.clone(W.uniforms)}else I=x.uniforms;return I}function A(x,E){let I;for(let W=0,k=u.length;W<k;W++){const ee=u[W];if(ee.cacheKey===E){I=ee,++I.usedTimes;break}}return I===void 0&&(I=new Ux(r,E,x,s),u.push(I)),I}function D(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:L}}function Bx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function zx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Uf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,_,p){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function a(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||zx),n.length>1&&n.sort(f||Lf),i.length>1&&i.sort(f||Lf)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function kx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Uf,r.set(n,[o])):i>=s.length?(o=new Uf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Hx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Dt};break;case"SpotLight":t={position:new K,direction:new K,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function Vx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gx=0;function Wx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Xx(r){const e=new Hx,t=Vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new _n,o=new _n;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,R=0,b=0,M=0,A=0,D=0,C=0;c.sort(Wx);for(let x=0,E=c.length;x<E;x++){const I=c[x],W=I.color,k=I.intensity,ee=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*k,h+=W.g*k,f+=W.b*k;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],k);C++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,X=t.get(I);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=I.shadow.matrix,R++}n.directional[m]=Z,m++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(W).multiplyScalar(k),Z.distance=ee,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[_]=Z;const ie=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,ie.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[_]=ie.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=ne,M++}_++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(W).multiplyScalar(k),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=Z,p++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const ie=I.shadow,X=t.get(I);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,X.shadowCameraNear=ie.camera.near,X.shadowCameraFar=ie.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=Z,g++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(k),Z.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[d]=Z,d++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==R||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==A||L.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+A-D,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=R,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=A,L.numLightProbes=C,n.version=Gx++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const b=c[d];if(b.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function If(r){const e=new Xx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Yx(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new If(r),e.set(i,[a])):s>=o.length?(a=new If(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;function Kx(r,e,t){let n=new Ad;const i=new ft,s=new ft,o=new ln,a=new v_({depthPacking:Lm}),l=new x_,c={},u=t.maxTextureSize,h={[fs]:ui,[ui]:fs,[Ir]:Ir},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:qx,fragmentShader:$x}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ms;g.setAttribute("position",new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new er(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let d=this.type;this.render=function(D,C,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const x=r.getRenderTarget(),E=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Or),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=d!==Dr&&this.type===Dr,ee=d===Dr&&this.type!==Dr;for(let ne=0,Z=D.length;ne<Z;ne++){const ie=D[ne],X=ie.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ue=X.getFrameExtents();if(i.multiply(ue),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ue.x),i.x=s.x*ue.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ue.y),i.y=s.y*ue.y,X.mapSize.y=s.y)),X.map===null||k===!0||ee===!0){const Re=this.type!==Dr?{minFilter:tr,magFilter:tr}:{};X.map!==null&&X.map.dispose(),X.map=new nr(i.x,i.y,Re),X.map.texture.name=ie.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const _e=X.getViewportCount();for(let Re=0;Re<_e;Re++){const Je=X.getViewport(Re);o.set(s.x*Je.x,s.y*Je.y,s.x*Je.z,s.y*Je.w),W.viewport(o),X.updateMatrices(ie,Re),n=X.getFrustum(),M(C,L,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===Dr&&R(X,L),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(x,E,I)};function R(D,C){const L=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new nr(i.x,i.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(C,null,L,f,_,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(C,null,L,m,_,null)}function b(D,C,L,x){let E=null;const I=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)E=I;else if(E=L.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=E.uuid,k=C.uuid;let ee=c[W];ee===void 0&&(ee={},c[W]=ee);let ne=ee[k];ne===void 0&&(ne=E.clone(),ee[k]=ne,C.addEventListener("dispose",A)),E=ne}if(E.visible=C.visible,E.wireframe=C.wireframe,x===Dr?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=r.properties.get(E);W.light=L}return E}function M(D,C,L,x,E){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===Dr)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const k=e.update(D),ee=D.material;if(Array.isArray(ee)){const ne=k.groups;for(let Z=0,ie=ne.length;Z<ie;Z++){const X=ne[Z],ue=ee[X.materialIndex];if(ue&&ue.visible){const _e=b(D,ue,x,E);D.onBeforeShadow(r,D,C,L,k,_e,X),r.renderBufferDirect(L,null,k,_e,D,X),D.onAfterShadow(r,D,C,L,k,_e,X)}}}else if(ee.visible){const ne=b(D,ee,x,E);D.onBeforeShadow(r,D,C,L,k,ne,null),r.renderBufferDirect(L,null,k,ne,D,null),D.onAfterShadow(r,D,C,L,k,ne,null)}}const W=D.children;for(let k=0,ee=W.length;k<ee;k++)M(W[k],C,L,x,E)}function A(D){D.target.removeEventListener("dispose",A);for(const L in c){const x=c[L],E=D.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}const Zx={[Vc]:Gc,[Wc]:qc,[Xc]:$c,[No]:Yc,[Gc]:Vc,[qc]:Wc,[$c]:Xc,[Yc]:No};function jx(r,e){function t(){let F=!1;const xe=new ln;let J=null;const oe=new ln(0,0,0,0);return{setMask:function(me){J!==me&&!F&&(r.colorMask(me,me,me,me),J=me)},setLocked:function(me){F=me},setClear:function(me,Ee,ze,Ft,gn){gn===!0&&(me*=Ft,Ee*=Ft,ze*=Ft),xe.set(me,Ee,ze,Ft),oe.equals(xe)===!1&&(r.clearColor(me,Ee,ze,Ft),oe.copy(xe))},reset:function(){F=!1,J=null,oe.set(-1,0,0,0)}}}function n(){let F=!1,xe=!1,J=null,oe=null,me=null;return{setReversed:function(Ee){if(xe!==Ee){const ze=e.get("EXT_clip_control");xe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const Ft=me;me=null,this.setClear(Ft)}xe=Ee},getReversed:function(){return xe},setTest:function(Ee){Ee?fe(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(Ee){J!==Ee&&!F&&(r.depthMask(Ee),J=Ee)},setFunc:function(Ee){if(xe&&(Ee=Zx[Ee]),oe!==Ee){switch(Ee){case Vc:r.depthFunc(r.NEVER);break;case Gc:r.depthFunc(r.ALWAYS);break;case Wc:r.depthFunc(r.LESS);break;case No:r.depthFunc(r.LEQUAL);break;case Xc:r.depthFunc(r.EQUAL);break;case Yc:r.depthFunc(r.GEQUAL);break;case qc:r.depthFunc(r.GREATER);break;case $c:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Ee}},setLocked:function(Ee){F=Ee},setClear:function(Ee){me!==Ee&&(xe&&(Ee=1-Ee),r.clearDepth(Ee),me=Ee)},reset:function(){F=!1,J=null,oe=null,me=null,xe=!1}}}function i(){let F=!1,xe=null,J=null,oe=null,me=null,Ee=null,ze=null,Ft=null,gn=null;return{setTest:function(Ct){F||(Ct?fe(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(Ct){xe!==Ct&&!F&&(r.stencilMask(Ct),xe=Ct)},setFunc:function(Ct,_i,Ii){(J!==Ct||oe!==_i||me!==Ii)&&(r.stencilFunc(Ct,_i,Ii),J=Ct,oe=_i,me=Ii)},setOp:function(Ct,_i,Ii){(Ee!==Ct||ze!==_i||Ft!==Ii)&&(r.stencilOp(Ct,_i,Ii),Ee=Ct,ze=_i,Ft=Ii)},setLocked:function(Ct){F=Ct},setClear:function(Ct){gn!==Ct&&(r.clearStencil(Ct),gn=Ct)},reset:function(){F=!1,xe=null,J=null,oe=null,me=null,Ee=null,ze=null,Ft=null,gn=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,R=null,b=null,M=null,A=null,D=null,C=new Dt(0,0,0),L=0,x=!1,E=null,I=null,W=null,k=null,ee=null;const ne=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ie=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=ie>=2);let ue=null,_e={};const Re=r.getParameter(r.SCISSOR_BOX),Je=r.getParameter(r.VIEWPORT),Mt=new ln().fromArray(Re),te=new ln().fromArray(Je);function de(F,xe,J,oe){const me=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(F,Ee),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ze=0;ze<J;ze++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(xe+ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return Ee}const Ue={};Ue[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Ue[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ue[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(r.DEPTH_TEST),o.setFunc(No),dt(!1),pt(Bh),fe(r.CULL_FACE),N(Or);function fe(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function se(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function qe(F,xe){return h[F]!==xe?(r.bindFramebuffer(F,xe),h[F]=xe,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=xe),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function ve(F,xe){let J=m,oe=!1;if(F){J=f.get(xe),J===void 0&&(J=[],f.set(xe,J));const me=F.textures;if(J.length!==me.length||J[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,ze=me.length;Ee<ze;Ee++)J[Ee]=r.COLOR_ATTACHMENT0+Ee;J.length=me.length,oe=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,oe=!0);oe&&r.drawBuffers(J)}function Ze(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const nt={[Vs]:r.FUNC_ADD,[rm]:r.FUNC_SUBTRACT,[sm]:r.FUNC_REVERSE_SUBTRACT};nt[om]=r.MIN,nt[am]=r.MAX;const Ge={[lm]:r.ZERO,[cm]:r.ONE,[um]:r.SRC_COLOR,[kc]:r.SRC_ALPHA,[_m]:r.SRC_ALPHA_SATURATE,[pm]:r.DST_COLOR,[fm]:r.DST_ALPHA,[hm]:r.ONE_MINUS_SRC_COLOR,[Hc]:r.ONE_MINUS_SRC_ALPHA,[mm]:r.ONE_MINUS_DST_COLOR,[dm]:r.ONE_MINUS_DST_ALPHA,[gm]:r.CONSTANT_COLOR,[vm]:r.ONE_MINUS_CONSTANT_COLOR,[xm]:r.CONSTANT_ALPHA,[Sm]:r.ONE_MINUS_CONSTANT_ALPHA};function N(F,xe,J,oe,me,Ee,ze,Ft,gn,Ct){if(F===Or){_===!0&&(se(r.BLEND),_=!1);return}if(_===!1&&(fe(r.BLEND),_=!0),F!==im){if(F!==p||Ct!==x){if((d!==Vs||M!==Vs)&&(r.blendEquation(r.FUNC_ADD),d=Vs,M=Vs),Ct)switch(F){case Co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zc:r.blendFunc(r.ONE,r.ONE);break;case zh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case zh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,b=null,A=null,D=null,C.set(0,0,0),L=0,p=F,x=Ct}return}me=me||xe,Ee=Ee||J,ze=ze||oe,(xe!==d||me!==M)&&(r.blendEquationSeparate(nt[xe],nt[me]),d=xe,M=me),(J!==R||oe!==b||Ee!==A||ze!==D)&&(r.blendFuncSeparate(Ge[J],Ge[oe],Ge[Ee],Ge[ze]),R=J,b=oe,A=Ee,D=ze),(Ft.equals(C)===!1||gn!==L)&&(r.blendColor(Ft.r,Ft.g,Ft.b,gn),C.copy(Ft),L=gn),p=F,x=!1}function Dn(F,xe){F.side===Ir?se(r.CULL_FACE):fe(r.CULL_FACE);let J=F.side===ui;xe&&(J=!J),dt(J),F.blending===Co&&F.transparent===!1?N(Or):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),It(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(F){E!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),E=F)}function pt(F){F!==em?(fe(r.CULL_FACE),F!==I&&(F===Bh?r.cullFace(r.BACK):F===tm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),I=F}function Ie(F){F!==W&&(Z&&r.lineWidth(F),W=F)}function It(F,xe,J){F?(fe(r.POLYGON_OFFSET_FILL),(k!==xe||ee!==J)&&(r.polygonOffset(xe,J),k=xe,ee=J)):se(r.POLYGON_OFFSET_FILL)}function be(F){F?fe(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+ne-1),ue!==F&&(r.activeTexture(F),ue=F)}function S(F,xe,J){J===void 0&&(ue===null?J=r.TEXTURE0+ne-1:J=ue);let oe=_e[J];oe===void 0&&(oe={type:void 0,texture:void 0},_e[J]=oe),(oe.type!==F||oe.texture!==xe)&&(ue!==J&&(r.activeTexture(J),ue=J),r.bindTexture(F,xe||Ue[F]),oe.type=F,oe.texture=xe)}function V(){const F=_e[ue];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){Mt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Mt.copy(F))}function Pe(F){te.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function gt(F,xe){let J=c.get(xe);J===void 0&&(J=new WeakMap,c.set(xe,J));let oe=J.get(F);oe===void 0&&(oe=r.getUniformBlockIndex(xe,F.name),J.set(F,oe))}function it(F,xe){const oe=c.get(xe).get(F);l.get(xe)!==oe&&(r.uniformBlockBinding(xe,oe,F.__bindingPointIndex),l.set(xe,oe))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ue=null,_e={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,R=null,b=null,M=null,A=null,D=null,C=new Dt(0,0,0),L=0,x=!1,E=null,I=null,W=null,k=null,ee=null,Mt.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:se,bindFramebuffer:qe,drawBuffers:ve,useProgram:Ze,setBlending:N,setMaterial:Dn,setFlipSided:dt,setCullFace:pt,setLineWidth:Ie,setPolygonOffset:It,setScissorTest:be,activeTexture:P,bindTexture:S,unbindTexture:V,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:De,texImage3D:We,updateUBOMapping:gt,uniformBlockBinding:it,texStorage2D:Qe,texStorage3D:pe,texSubImage2D:re,texSubImage3D:Ne,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ce,scissor:Be,viewport:Pe,reset:Nt}}function Jx(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return m?new OffscreenCanvas(P,S):Ea("canvas")}function _(P,S,V){let ae=1;const ce=be(P);if((ce.width>V||ce.height>V)&&(ae=V/Math.max(ce.width,ce.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(ae*ce.width),Ne=Math.floor(ae*ce.height);h===void 0&&(h=g(re,Ne));const Se=S?g(re,Ne):h;return Se.width=re,Se.height=Ne,Se.getContext("2d").drawImage(P,0,0,re,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+re+"x"+Ne+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function p(P){return P.generateMipmaps}function d(P){r.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(P,S,V,ae,ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=S;if(S===r.RED&&(V===r.FLOAT&&(re=r.R32F),V===r.HALF_FLOAT&&(re=r.R16F),V===r.UNSIGNED_BYTE&&(re=r.R8)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(re=r.R8UI),V===r.UNSIGNED_SHORT&&(re=r.R16UI),V===r.UNSIGNED_INT&&(re=r.R32UI),V===r.BYTE&&(re=r.R8I),V===r.SHORT&&(re=r.R16I),V===r.INT&&(re=r.R32I)),S===r.RG&&(V===r.FLOAT&&(re=r.RG32F),V===r.HALF_FLOAT&&(re=r.RG16F),V===r.UNSIGNED_BYTE&&(re=r.RG8)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(re=r.RG8UI),V===r.UNSIGNED_SHORT&&(re=r.RG16UI),V===r.UNSIGNED_INT&&(re=r.RG32UI),V===r.BYTE&&(re=r.RG8I),V===r.SHORT&&(re=r.RG16I),V===r.INT&&(re=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(re=r.RGB8UI),V===r.UNSIGNED_SHORT&&(re=r.RGB16UI),V===r.UNSIGNED_INT&&(re=r.RGB32UI),V===r.BYTE&&(re=r.RGB8I),V===r.SHORT&&(re=r.RGB16I),V===r.INT&&(re=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),V===r.UNSIGNED_INT&&(re=r.RGBA32UI),V===r.BYTE&&(re=r.RGBA8I),V===r.SHORT&&(re=r.RGBA16I),V===r.INT&&(re=r.RGBA32I)),S===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),S===r.RGBA){const Ne=ce?Pl:Pt.getTransfer(ae);V===r.FLOAT&&(re=r.RGBA32F),V===r.HALF_FLOAT&&(re=r.RGBA16F),V===r.UNSIGNED_BYTE&&(re=Ne===Bt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(P,S){let V;return P?S===null||S===Js||S===Bo?V=r.DEPTH24_STENCIL8:S===Nr?V=r.DEPTH32F_STENCIL8:S===Ma&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Js||S===Bo?V=r.DEPTH_COMPONENT24:S===Nr?V=r.DEPTH_COMPONENT32F:S===Ma&&(V=r.DEPTH_COMPONENT16),V}function A(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==tr&&P.minFilter!==hr?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function D(P){const S=P.target;S.removeEventListener("dispose",D),L(S),S.isVideoTexture&&u.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),E(S)}function L(P){const S=n.get(P);if(S.__webglInit===void 0)return;const V=P.source,ae=f.get(V);if(ae){const ce=ae[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&x(P),Object.keys(ae).length===0&&f.delete(V)}n.remove(P)}function x(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const V=P.source,ae=f.get(V);delete ae[S.__cacheKey],o.memory.textures--}function E(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let ce=0;ce<S.__webglFramebuffer[ae].length;ce++)r.deleteFramebuffer(S.__webglFramebuffer[ae][ce]);else r.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)r.deleteFramebuffer(S.__webglFramebuffer[ae]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=P.textures;for(let ae=0,ce=V.length;ae<ce;ae++){const re=n.get(V[ae]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(V[ae])}n.remove(P)}let I=0;function W(){I=0}function k(){const P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function ee(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ne(P,S){const V=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(V,P,S);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function Z(P,S){const V=n.get(P);if(P.version>0&&V.__version!==P.version){te(V,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function ie(P,S){const V=n.get(P);if(P.version>0&&V.__version!==P.version){te(V,P,S);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function X(P,S){const V=n.get(P);if(P.version>0&&V.__version!==P.version){de(V,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const ue={[jc]:r.REPEAT,[Ws]:r.CLAMP_TO_EDGE,[Jc]:r.MIRRORED_REPEAT},_e={[tr]:r.NEAREST,[Pm]:r.NEAREST_MIPMAP_NEAREST,[Ja]:r.NEAREST_MIPMAP_LINEAR,[hr]:r.LINEAR,[ec]:r.LINEAR_MIPMAP_NEAREST,[Xs]:r.LINEAR_MIPMAP_LINEAR},Re={[Nm]:r.NEVER,[Hm]:r.ALWAYS,[Fm]:r.LESS,[_d]:r.LEQUAL,[Om]:r.EQUAL,[km]:r.GEQUAL,[Bm]:r.GREATER,[zm]:r.NOTEQUAL};function Je(P,S){if(S.type===Nr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hr||S.magFilter===ec||S.magFilter===Ja||S.magFilter===Xs||S.minFilter===hr||S.minFilter===ec||S.minFilter===Ja||S.minFilter===Xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ue[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ue[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ue[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,_e[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tr||S.minFilter!==Ja&&S.minFilter!==Xs||S.type===Nr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Mt(P,S){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",D));const ae=S.source;let ce=f.get(ae);ce===void 0&&(ce={},f.set(ae,ce));const re=ee(S);if(re!==P.__cacheKey){ce[re]===void 0&&(ce[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ce[re].usedTimes++;const Ne=ce[P.__cacheKey];Ne!==void 0&&(ce[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&x(S)),P.__cacheKey=re,P.__webglTexture=ce[re].texture}return V}function te(P,S,V){let ae=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=r.TEXTURE_3D);const ce=Mt(P,S),re=S.source;t.bindTexture(ae,P.__webglTexture,r.TEXTURE0+V);const Ne=n.get(re);if(re.version!==Ne.__version||ce===!0){t.activeTexture(r.TEXTURE0+V);const Se=Pt.getPrimaries(Pt.workingColorSpace),Ce=S.colorSpace===ss?null:Pt.getPrimaries(S.colorSpace),Qe=S.colorSpace===ss||Se===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let pe=_(S.image,!1,i.maxTextureSize);pe=It(S,pe);const De=s.convert(S.format,S.colorSpace),We=s.convert(S.type);let Be=b(S.internalFormat,De,We,S.colorSpace,S.isVideoTexture);Je(ae,S);let Pe;const gt=S.mipmaps,it=S.isVideoTexture!==!0,Nt=Ne.__version===void 0||ce===!0,F=re.dataReady,xe=A(S,pe);if(S.isDepthTexture)Be=M(S.format===zo,S.type),Nt&&(it?t.texStorage2D(r.TEXTURE_2D,1,Be,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Be,pe.width,pe.height,0,De,We,null));else if(S.isDataTexture)if(gt.length>0){it&&Nt&&t.texStorage2D(r.TEXTURE_2D,xe,Be,gt[0].width,gt[0].height);for(let J=0,oe=gt.length;J<oe;J++)Pe=gt[J],it?F&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Pe.width,Pe.height,De,We,Pe.data):t.texImage2D(r.TEXTURE_2D,J,Be,Pe.width,Pe.height,0,De,We,Pe.data);S.generateMipmaps=!1}else it?(Nt&&t.texStorage2D(r.TEXTURE_2D,xe,Be,pe.width,pe.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe.width,pe.height,De,We,pe.data)):t.texImage2D(r.TEXTURE_2D,0,Be,pe.width,pe.height,0,De,We,pe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){it&&Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Be,gt[0].width,gt[0].height,pe.depth);for(let J=0,oe=gt.length;J<oe;J++)if(Pe=gt[J],S.format!==Qi)if(De!==null)if(it){if(F)if(S.layerUpdates.size>0){const me=uf(Pe.width,Pe.height,S.format,S.type);for(const Ee of S.layerUpdates){const ze=Pe.data.subarray(Ee*me/Pe.data.BYTES_PER_ELEMENT,(Ee+1)*me/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Ee,Pe.width,Pe.height,1,De,ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Pe.width,Pe.height,pe.depth,De,Pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Be,Pe.width,Pe.height,pe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Pe.width,Pe.height,pe.depth,De,We,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,Be,Pe.width,Pe.height,pe.depth,0,De,We,Pe.data)}else{it&&Nt&&t.texStorage2D(r.TEXTURE_2D,xe,Be,gt[0].width,gt[0].height);for(let J=0,oe=gt.length;J<oe;J++)Pe=gt[J],S.format!==Qi?De!==null?it?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,J,Be,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?F&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Pe.width,Pe.height,De,We,Pe.data):t.texImage2D(r.TEXTURE_2D,J,Be,Pe.width,Pe.height,0,De,We,Pe.data)}else if(S.isDataArrayTexture)if(it){if(Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Be,pe.width,pe.height,pe.depth),F)if(S.layerUpdates.size>0){const J=uf(pe.width,pe.height,S.format,S.type);for(const oe of S.layerUpdates){const me=pe.data.subarray(oe*J/pe.data.BYTES_PER_ELEMENT,(oe+1)*J/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,oe,pe.width,pe.height,1,De,We,me)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,De,We,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,pe.width,pe.height,pe.depth,0,De,We,pe.data);else if(S.isData3DTexture)it?(Nt&&t.texStorage3D(r.TEXTURE_3D,xe,Be,pe.width,pe.height,pe.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,De,We,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Be,pe.width,pe.height,pe.depth,0,De,We,pe.data);else if(S.isFramebufferTexture){if(Nt)if(it)t.texStorage2D(r.TEXTURE_2D,xe,Be,pe.width,pe.height);else{let J=pe.width,oe=pe.height;for(let me=0;me<xe;me++)t.texImage2D(r.TEXTURE_2D,me,Be,J,oe,0,De,We,null),J>>=1,oe>>=1}}else if(gt.length>0){if(it&&Nt){const J=be(gt[0]);t.texStorage2D(r.TEXTURE_2D,xe,Be,J.width,J.height)}for(let J=0,oe=gt.length;J<oe;J++)Pe=gt[J],it?F&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,De,We,Pe):t.texImage2D(r.TEXTURE_2D,J,Be,De,We,Pe);S.generateMipmaps=!1}else if(it){if(Nt){const J=be(pe);t.texStorage2D(r.TEXTURE_2D,xe,Be,J.width,J.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,De,We,pe)}else t.texImage2D(r.TEXTURE_2D,0,Be,De,We,pe);p(S)&&d(ae),Ne.__version=re.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function de(P,S,V){if(S.image.length!==6)return;const ae=Mt(P,S),ce=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const re=n.get(ce);if(ce.version!==re.__version||ae===!0){t.activeTexture(r.TEXTURE0+V);const Ne=Pt.getPrimaries(Pt.workingColorSpace),Se=S.colorSpace===ss?null:Pt.getPrimaries(S.colorSpace),Ce=S.colorSpace===ss||Ne===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,pe=S.image[0]&&S.image[0].isDataTexture,De=[];for(let oe=0;oe<6;oe++)!Qe&&!pe?De[oe]=_(S.image[oe],!0,i.maxCubemapSize):De[oe]=pe?S.image[oe].image:S.image[oe],De[oe]=It(S,De[oe]);const We=De[0],Be=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),gt=b(S.internalFormat,Be,Pe,S.colorSpace),it=S.isVideoTexture!==!0,Nt=re.__version===void 0||ae===!0,F=ce.dataReady;let xe=A(S,We);Je(r.TEXTURE_CUBE_MAP,S);let J;if(Qe){it&&Nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,gt,We.width,We.height);for(let oe=0;oe<6;oe++){J=De[oe].mipmaps;for(let me=0;me<J.length;me++){const Ee=J[me];S.format!==Qi?Be!==null?it?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,Ee.width,Ee.height,Be,Ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,gt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,0,0,Ee.width,Ee.height,Be,Pe,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me,gt,Ee.width,Ee.height,0,Be,Pe,Ee.data)}}}else{if(J=S.mipmaps,it&&Nt){J.length>0&&xe++;const oe=be(De[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,gt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(pe){it?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De[oe].width,De[oe].height,Be,Pe,De[oe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,gt,De[oe].width,De[oe].height,0,Be,Pe,De[oe].data);for(let me=0;me<J.length;me++){const ze=J[me].image[oe].image;it?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,ze.width,ze.height,Be,Pe,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,gt,ze.width,ze.height,0,Be,Pe,ze.data)}}else{it?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be,Pe,De[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,gt,Be,Pe,De[oe]);for(let me=0;me<J.length;me++){const Ee=J[me];it?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,0,0,Be,Pe,Ee.image[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me+1,gt,Be,Pe,Ee.image[oe])}}}p(S)&&d(r.TEXTURE_CUBE_MAP),re.__version=ce.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ue(P,S,V,ae,ce,re){const Ne=s.convert(V.format,V.colorSpace),Se=s.convert(V.type),Ce=b(V.internalFormat,Ne,Se,V.colorSpace),Qe=n.get(S),pe=n.get(V);if(pe.__renderTarget=S,!Qe.__hasExternalTextures){const De=Math.max(1,S.width>>re),We=Math.max(1,S.height>>re);ce===r.TEXTURE_3D||ce===r.TEXTURE_2D_ARRAY?t.texImage3D(ce,re,Ce,De,We,S.depth,0,Ne,Se,null):t.texImage2D(ce,re,Ce,De,We,0,Ne,Se,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),pt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ce,pe.__webglTexture,0,dt(S)):(ce===r.TEXTURE_2D||ce>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,ce,pe.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(P,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const ae=S.depthTexture,ce=ae&&ae.isDepthTexture?ae.type:null,re=M(S.stencilBuffer,ce),Ne=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=dt(S);pt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,re,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,re,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,re,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,P)}else{const ae=S.textures;for(let ce=0;ce<ae.length;ce++){const re=ae[ce],Ne=s.convert(re.format,re.colorSpace),Se=s.convert(re.type),Ce=b(re.internalFormat,Ne,Se,re.colorSpace),Qe=dt(S);V&&pt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Ce,S.width,S.height):pt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,Ce,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(S.depthTexture);ae.__renderTarget=S,(!ae.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ne(S.depthTexture,0);const ce=ae.__webglTexture,re=dt(S);if(S.depthTexture.format===Po)pt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ce,0);else if(S.depthTexture.format===zo)pt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function qe(P){const S=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){const ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",ce)};ae.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=ae}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,P)}else if(V){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=r.createRenderbuffer(),fe(S.__webglDepthbuffer[ae],P,!1);else{const ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,re)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),fe(S.__webglDepthbuffer,P,!1);else{const ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,ce)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(P,S,V){const ae=n.get(P);S!==void 0&&Ue(ae.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&qe(P)}function Ze(P){const S=P.texture,V=n.get(P),ae=n.get(S);P.addEventListener("dispose",C);const ce=P.textures,re=P.isWebGLCubeRenderTarget===!0,Ne=ce.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=S.version,o.memory.textures++),re){V.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Se]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)V.__webglFramebuffer[Se][Ce]=r.createFramebuffer()}else V.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)V.__webglFramebuffer[Se]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let Se=0,Ce=ce.length;Se<Ce;Se++){const Qe=n.get(ce[Se]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&pt(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Se=0;Se<ce.length;Se++){const Ce=ce[Se];V.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[Se]);const Qe=s.convert(Ce.format,Ce.colorSpace),pe=s.convert(Ce.type),De=b(Ce.internalFormat,Qe,pe,Ce.colorSpace,P.isXRRenderTarget===!0),We=dt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,We,De,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,V.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Je(r.TEXTURE_CUBE_MAP,S);for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Ue(V.__webglFramebuffer[Se][Ce],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce);else Ue(V.__webglFramebuffer[Se],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);p(S)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Se=0,Ce=ce.length;Se<Ce;Se++){const Qe=ce[Se],pe=n.get(Qe);t.bindTexture(r.TEXTURE_2D,pe.__webglTexture),Je(r.TEXTURE_2D,Qe),Ue(V.__webglFramebuffer,P,Qe,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,0),p(Qe)&&d(r.TEXTURE_2D)}t.unbindTexture()}else{let Se=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,ae.__webglTexture),Je(Se,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Ue(V.__webglFramebuffer[Ce],P,S,r.COLOR_ATTACHMENT0,Se,Ce);else Ue(V.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,Se,0);p(S)&&d(Se),t.unbindTexture()}P.depthBuffer&&qe(P)}function nt(P){const S=P.textures;for(let V=0,ae=S.length;V<ae;V++){const ce=S[V];if(p(ce)){const re=R(P),Ne=n.get(ce).__webglTexture;t.bindTexture(re,Ne),d(re),t.unbindTexture()}}}const Ge=[],N=[];function Dn(P){if(P.samples>0){if(pt(P)===!1){const S=P.textures,V=P.width,ae=P.height;let ce=r.COLOR_BUFFER_BIT;const re=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=n.get(P),Se=S.length>1;if(Se)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=r.STENCIL_BUFFER_BIT)),Se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const Qe=n.get(S[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Qe,0)}r.blitFramebuffer(0,0,V,ae,0,0,V,ae,ce,r.NEAREST),l===!0&&(Ge.length=0,N.length=0,Ge.push(r.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ge.push(re),N.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const Qe=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function dt(P){return Math.min(i.maxSamples,P.samples)}function pt(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ie(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function It(P,S){const V=P.colorSpace,ae=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==ko&&V!==ss&&(Pt.getTransfer(V)===Bt?(ae!==Qi||ce!==Hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=ie,this.setTextureCube=X,this.rebindTextures=ve,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=pt}function Qx(r,e){function t(n,i=ss){let s;const o=Pt.getTransfer(i);if(n===Hr)return r.UNSIGNED_BYTE;if(n===Wu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return r.BYTE;if(n===ad)return r.SHORT;if(n===Ma)return r.UNSIGNED_SHORT;if(n===Gu)return r.INT;if(n===Js)return r.UNSIGNED_INT;if(n===Nr)return r.FLOAT;if(n===Br)return r.HALF_FLOAT;if(n===cd)return r.ALPHA;if(n===ud)return r.RGB;if(n===Qi)return r.RGBA;if(n===hd)return r.LUMINANCE;if(n===fd)return r.LUMINANCE_ALPHA;if(n===Po)return r.DEPTH_COMPONENT;if(n===zo)return r.DEPTH_STENCIL;if(n===dd)return r.RED;if(n===Yu)return r.RED_INTEGER;if(n===pd)return r.RG;if(n===qu)return r.RG_INTEGER;if(n===$u)return r.RGBA_INTEGER;if(n===Ml||n===El||n===yl||n===Tl)if(o===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===eu||n===tu||n===nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===iu||n===ru||n===su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===iu||n===ru)return o===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===su)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ou)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===au)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===Su||n===Mu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bl)return o===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===Eu||n===yu||n===Tu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const eS={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _l;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
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

}`;class iS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new ri,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:tS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new Ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rS extends Ko{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new iS,p=t.getContextAttributes();let d=null,R=null;const b=[],M=[],A=new ft;let D=null;const C=new ji;C.viewport=new ln;const L=new ji;L.viewport=new ln;const x=[C,L],E=new T_;let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=b[te];return de===void 0&&(de=new Cc,b[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=b[te];return de===void 0&&(de=new Cc,b[te]=de),de.getGripSpace()},this.getHand=function(te){let de=b[te];return de===void 0&&(de=new Cc,b[te]=de),de.getHandSpace()};function k(te){const de=M.indexOf(te.inputSource);if(de===-1)return;const Ue=b[de];Ue!==void 0&&(Ue.update(te.inputSource,te.frame,c||o),Ue.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",ne);for(let te=0;te<b.length;te++){const de=M[te];de!==null&&(M[te]=null,b[te].disconnect(de))}I=null,W=null,_.reset(),e.setRenderTarget(d),m=null,f=null,h=null,i=null,R=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Ue=null,fe=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=p.stencil?zo:Po,fe=p.stencil?Bo:Js);const qe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(qe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new nr(f.textureWidth,f.textureHeight,{format:Qi,type:Hr,depthTexture:new Rd(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Ue),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new nr(m.framebufferWidth,m.framebufferHeight,{format:Qi,type:Hr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Mt.setContext(i),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(te){for(let de=0;de<te.removed.length;de++){const Ue=te.removed[de],fe=M.indexOf(Ue);fe>=0&&(M[fe]=null,b[fe].disconnect(Ue))}for(let de=0;de<te.added.length;de++){const Ue=te.added[de];let fe=M.indexOf(Ue);if(fe===-1){for(let qe=0;qe<b.length;qe++)if(qe>=M.length){M.push(Ue),fe=qe;break}else if(M[qe]===null){M[qe]=Ue,fe=qe;break}if(fe===-1)break}const se=b[fe];se&&se.connect(Ue)}}const Z=new K,ie=new K;function X(te,de,Ue){Z.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(Ue.matrixWorld);const fe=Z.distanceTo(ie),se=de.projectionMatrix.elements,qe=Ue.projectionMatrix.elements,ve=se[14]/(se[10]-1),Ze=se[14]/(se[10]+1),nt=(se[9]+1)/se[5],Ge=(se[9]-1)/se[5],N=(se[8]-1)/se[0],Dn=(qe[8]+1)/qe[0],dt=ve*N,pt=ve*Dn,Ie=fe/(-N+Dn),It=Ie*-N;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(It),te.translateZ(Ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),se[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const be=ve+Ie,P=Ze+Ie,S=dt-It,V=pt+(fe-It),ae=nt*Ze/P*be,ce=Ge*Ze/P*be;te.projectionMatrix.makePerspective(S,V,ae,ce,be,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ue(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let de=te.near,Ue=te.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Ue=_.depthFar)),E.near=L.near=C.near=de,E.far=L.far=C.far=Ue,(I!==E.near||W!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,W=E.far),C.layers.mask=te.layers.mask|2,L.layers.mask=te.layers.mask|4,E.layers.mask=C.layers.mask|L.layers.mask;const fe=te.parent,se=E.cameras;ue(E,fe);for(let qe=0;qe<se.length;qe++)ue(se[qe],fe);se.length===2?X(E,C,L):E.projectionMatrix.copy(C.projectionMatrix),_e(te,E,fe)};function _e(te,de,Ue){Ue===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Ue.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=bu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Re=null;function Je(te,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const Ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let fe=!1;Ue.length!==E.cameras.length&&(E.cameras.length=0,fe=!0);for(let qe=0;qe<Ue.length;qe++){const ve=Ue[qe];let Ze=null;if(m!==null)Ze=m.getViewport(ve);else{const Ge=h.getViewSubImage(f,ve);Ze=Ge.viewport,qe===0&&(e.setRenderTargetTextures(R,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(R))}let nt=x[qe];nt===void 0&&(nt=new ji,nt.layers.enable(qe),nt.viewport=new ln,x[qe]=nt),nt.matrix.fromArray(ve.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ve.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),qe===0&&(E.matrix.copy(nt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),fe===!0&&E.cameras.push(nt)}const se=i.enabledFeatures;if(se&&se.includes("depth-sensing")){const qe=h.getDepthInformation(Ue[0]);qe&&qe.isValid&&qe.texture&&_.init(e,qe,i.renderState)}}for(let Ue=0;Ue<b.length;Ue++){const fe=M[Ue],se=b[Ue];fe!==null&&se!==void 0&&se.update(fe,de,c||o)}Re&&Re(te,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const Mt=new Cd;Mt.setAnimationLoop(Je),this.setAnimationLoop=function(te){Re=te},this.dispose=function(){}}}const Fs=new Vr,sS=new _n;function oS(r,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Td(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,R,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,R,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ui&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ui&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const R=e.get(d),b=R.envMap,M=R.envMapRotation;b&&(p.envMap.value=b,Fs.copy(M),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),p.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(Fs)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,R,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*R,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,R){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ui&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const R=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aS(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,b){const M=b.program;n.uniformBlockBinding(R,M)}function c(R,b){let M=i[R.id];M===void 0&&(g(R),M=u(R),i[R.id]=M,R.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(R,A);const D=e.render.frame;s[R.id]!==D&&(f(R),s[R.id]=D)}function u(R){const b=h();R.__bindingPointIndex=b;const M=r.createBuffer(),A=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,M),M}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const b=i[R.id],M=R.uniforms,A=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let D=0,C=M.length;D<C;D++){const L=Array.isArray(M[D])?M[D]:[M[D]];for(let x=0,E=L.length;x<E;x++){const I=L[x];if(m(I,D,x,A)===!0){const W=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let ee=0;for(let ne=0;ne<k.length;ne++){const Z=k[ne],ie=_(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,W+ee,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,ee),ee+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(R,b,M,A){const D=R.value,C=b+"_"+M;if(A[C]===void 0)return typeof D=="number"||typeof D=="boolean"?A[C]=D:A[C]=D.clone(),!0;{const L=A[C];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return A[C]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function g(R){const b=R.uniforms;let M=0;const A=16;for(let C=0,L=b.length;C<L;C++){const x=Array.isArray(b[C])?b[C]:[b[C]];for(let E=0,I=x.length;E<I;E++){const W=x[E],k=Array.isArray(W.value)?W.value:[W.value];for(let ee=0,ne=k.length;ee<ne;ee++){const Z=k[ee],ie=_(Z),X=M%A,ue=X%ie.boundary,_e=X+ue;M+=ue,_e!==0&&A-_e<ie.storage&&(M+=A-_e),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=ie.storage}}}const D=M%A;return D>0&&(M+=A-D),R.__size=M,R.__cache={},this}function _(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function p(R){const b=R.target;b.removeEventListener("dispose",p);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function d(){for(const R in i)r.deleteBuffer(i[R]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class lS{constructor(e={}){const{canvas:t=Gm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const R=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wi,this.toneMapping=cs,this.toneMappingExposure=1;const M=this;let A=!1,D=0,C=0,L=null,x=-1,E=null;const I=new ln,W=new ln;let k=null;const ee=new Dt(0);let ne=0,Z=t.width,ie=t.height,X=1,ue=null,_e=null;const Re=new ln(0,0,Z,ie),Je=new ln(0,0,Z,ie);let Mt=!1;const te=new Ad;let de=!1,Ue=!1;this.transmissionResolutionScale=1;const fe=new _n,se=new _n,qe=new K,ve=new ln,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ge(){return L===null?X:1}let N=n;function Dn(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vu}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),N===null){const O="webgl2";if(N=Dn(O,y),N===null)throw Dn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let dt,pt,Ie,It,be,P,S,V,ae,ce,re,Ne,Se,Ce,Qe,pe,De,We,Be,Pe,gt,it,Nt,F;function xe(){dt=new gv(N),dt.init(),it=new Qx(N,dt),pt=new hv(N,dt,e,it),Ie=new jx(N,dt),pt.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),It=new Sv(N),be=new Bx,P=new Jx(N,dt,Ie,be,pt,it,It),S=new dv(M),V=new _v(M),ae=new A_(N),Nt=new cv(N,ae),ce=new vv(N,ae,It,Nt),re=new Ev(N,ce,ae,It),Be=new Mv(N,pt,P),pe=new fv(be),Ne=new Ox(M,S,V,dt,pt,Nt,pe),Se=new oS(M,be),Ce=new kx,Qe=new Yx(dt),We=new lv(M,S,V,Ie,re,m,l),De=new Kx(M,re,pt),F=new aS(N,It,pt,Ie),Pe=new uv(N,dt,It),gt=new xv(N,dt,It),It.programs=Ne.programs,M.capabilities=pt,M.extensions=dt,M.properties=be,M.renderLists=Ce,M.shadowMap=De,M.state=Ie,M.info=It}xe();const J=new rS(M,N);this.xr=J,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=dt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=dt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(Z,ie,!1))},this.getSize=function(y){return y.set(Z,ie)},this.setSize=function(y,O,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,ie=O,t.width=Math.floor(y*X),t.height=Math.floor(O*X),q===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Z*X,ie*X).floor()},this.setDrawingBufferSize=function(y,O,q){Z=y,ie=O,X=q,t.width=Math.floor(y*q),t.height=Math.floor(O*q),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Re)},this.setViewport=function(y,O,q,$){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,O,q,$),Ie.viewport(I.copy(Re).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Je)},this.setScissor=function(y,O,q,$){y.isVector4?Je.set(y.x,y.y,y.z,y.w):Je.set(y,O,q,$),Ie.scissor(W.copy(Je).multiplyScalar(X).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(y){Ie.setScissorTest(Mt=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(y=!0,O=!0,q=!0){let $=0;if(y){let z=!1;if(L!==null){const he=L.texture.format;z=he===$u||he===qu||he===Yu}if(z){const he=L.texture.type,ge=he===Hr||he===Js||he===Ma||he===Bo||he===Wu||he===Xu,ye=We.getClearColor(),Ae=We.getClearAlpha(),$e=ye.r,je=ye.g,Fe=ye.b;ge?(g[0]=$e,g[1]=je,g[2]=Fe,g[3]=Ae,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=$e,_[1]=je,_[2]=Fe,_[3]=Ae,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}O&&($|=N.DEPTH_BUFFER_BIT),q&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),We.dispose(),Ce.dispose(),Qe.dispose(),be.dispose(),S.dispose(),V.dispose(),re.dispose(),Nt.dispose(),F.dispose(),Ne.dispose(),J.dispose(),J.removeEventListener("sessionstart",jo),J.removeEventListener("sessionend",gi),vi.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=It.autoReset,O=De.enabled,q=De.autoUpdate,$=De.needsUpdate,z=De.type;xe(),It.autoReset=y,De.enabled=O,De.autoUpdate=q,De.needsUpdate=$,De.type=z}function Ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ze(y){const O=y.target;O.removeEventListener("dispose",ze),Ft(O)}function Ft(y){gn(y),be.remove(y)}function gn(y){const O=be.get(y).programs;O!==void 0&&(O.forEach(function(q){Ne.releaseProgram(q)}),y.isShaderMaterial&&Ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,q,$,z,he){O===null&&(O=Ze);const ge=z.isMesh&&z.matrixWorld.determinant()<0,ye=io(y,O,q,$,z);Ie.setMaterial($,ge);let Ae=q.index,$e=1;if($.wireframe===!0){if(Ae=ce.getWireframeAttribute(q),Ae===void 0)return;$e=2}const je=q.drawRange,Fe=q.attributes.position;let ke=je.start*$e,ot=(je.start+je.count)*$e;he!==null&&(ke=Math.max(ke,he.start*$e),ot=Math.min(ot,(he.start+he.count)*$e)),Ae!==null?(ke=Math.max(ke,0),ot=Math.min(ot,Ae.count)):Fe!=null&&(ke=Math.max(ke,0),ot=Math.min(ot,Fe.count));const zt=ot-ke;if(zt<0||zt===1/0)return;Nt.setup(z,$,ye,q,Ae);let Gt,Xe=Pe;if(Ae!==null&&(Gt=ae.get(Ae),Xe=gt,Xe.setIndex(Gt)),z.isMesh)$.wireframe===!0?(Ie.setLineWidth($.wireframeLinewidth*Ge()),Xe.setMode(N.LINES)):Xe.setMode(N.TRIANGLES);else if(z.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),Ie.setLineWidth(Le*Ge()),z.isLineSegments?Xe.setMode(N.LINES):z.isLineLoop?Xe.setMode(N.LINE_LOOP):Xe.setMode(N.LINE_STRIP)}else z.isPoints?Xe.setMode(N.POINTS):z.isSprite&&Xe.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Xe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))Xe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,vn=z._multiDrawCounts,wt=z._multiDrawCount,tn=Ae?ae.get(Ae).bytesPerElement:1,Vi=be.get($).currentProgram.getUniforms();for(let On=0;On<wt;On++)Vi.setValue(N,"_gl_DrawID",On),Xe.render(Le[On]/tn,vn[On])}else if(z.isInstancedMesh)Xe.renderInstances(ke,zt,z.count);else if(q.isInstancedBufferGeometry){const Le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vn=Math.min(q.instanceCount,Le);Xe.renderInstances(ke,zt,vn)}else Xe.render(ke,zt)};function Ct(y,O,q){y.transparent===!0&&y.side===Ir&&y.forceSinglePass===!1?(y.side=ui,y.needsUpdate=!0,no(y,O,q),y.side=fs,y.needsUpdate=!0,no(y,O,q),y.side=Ir):no(y,O,q)}this.compile=function(y,O,q=null){q===null&&(q=y),d=Qe.get(q),d.init(O),b.push(d),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),y!==q&&y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const $=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const ye=he[ge];Ct(ye,q,z),$.add(ye)}else Ct(he,q,z),$.add(he)}),b.pop(),d=null,$},this.compileAsync=function(y,O,q=null){const $=this.compile(y,O,q);return new Promise(z=>{function he(){if($.forEach(function(ge){be.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){z(y);return}setTimeout(he,10)}dt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let _i=null;function Ii(y){_i&&_i(y)}function jo(){vi.stop()}function gi(){vi.start()}const vi=new Cd;vi.setAnimationLoop(Ii),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(y){_i=y,J.setAnimationLoop(y),y===null?vi.stop():vi.start()},J.addEventListener("sessionstart",jo),J.addEventListener("sessionend",gi),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,O,L),d=Qe.get(y,b.length),d.init(O),b.push(d),se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),te.setFromProjectionMatrix(se),Ue=this.localClippingEnabled,de=pe.init(this.clippingPlanes,Ue),p=Ce.get(y,R.length),p.init(),R.push(p),J.enabled===!0&&J.isPresenting===!0){const he=M.xr.getDepthSensingMesh();he!==null&&to(he,O,-1/0,M.sortObjects)}to(y,O,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(ue,_e),nt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,nt&&We.addToRenderList(p,y),this.info.render.frame++,de===!0&&pe.beginShadows();const q=d.state.shadowsArray;De.render(q,y,O),de===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,z=p.transmissive;if(d.setupLights(),O.isArrayCamera){const he=O.cameras;if(z.length>0)for(let ge=0,ye=he.length;ge<ye;ge++){const Ae=he[ge];ir($,z,y,Ae)}nt&&We.render(y);for(let ge=0,ye=he.length;ge<ye;ge++){const Ae=he[ge];Jo(p,y,Ae,Ae.viewport)}}else z.length>0&&ir($,z,y,O),nt&&We.render(y),Jo(p,y,O);L!==null&&C===0&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(M,y,O),Nt.resetDefaultState(),x=-1,E=null,b.pop(),b.length>0?(d=b[b.length-1],de===!0&&pe.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function to(y,O,q,$){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||te.intersectsSprite(y)){$&&ve.setFromMatrixPosition(y.matrixWorld).applyMatrix4(se);const ge=re.update(y),ye=y.material;ye.visible&&p.push(y,ge,ye,q,ve.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||te.intersectsObject(y))){const ge=re.update(y),ye=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ve.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ve.copy(ge.boundingSphere.center)),ve.applyMatrix4(y.matrixWorld).applyMatrix4(se)),Array.isArray(ye)){const Ae=ge.groups;for(let $e=0,je=Ae.length;$e<je;$e++){const Fe=Ae[$e],ke=ye[Fe.materialIndex];ke&&ke.visible&&p.push(y,ge,ke,q,ve.z,Fe)}}else ye.visible&&p.push(y,ge,ye,q,ve.z,null)}}const he=y.children;for(let ge=0,ye=he.length;ge<ye;ge++)to(he[ge],O,q,$)}function Jo(y,O,q,$){const z=y.opaque,he=y.transmissive,ge=y.transparent;d.setupLightsView(q),de===!0&&pe.setGlobalState(M.clippingPlanes,q),$&&Ie.viewport(I.copy($)),z.length>0&&gs(z,O,q),he.length>0&&gs(he,O,q),ge.length>0&&gs(ge,O,q),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function ir(y,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new nr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Br:Hr,minFilter:Xs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const he=d.state.transmissionRenderTarget[$.id],ge=$.viewport||I;he.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);const ye=M.getRenderTarget();M.setRenderTarget(he),M.getClearColor(ee),ne=M.getClearAlpha(),ne<1&&M.setClearColor(16777215,.5),M.clear(),nt&&We.render(q);const Ae=M.toneMapping;M.toneMapping=cs;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),de===!0&&pe.setGlobalState(M.clippingPlanes,$),gs(y,q,$),P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he),dt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Fe=0,ke=O.length;Fe<ke;Fe++){const ot=O[Fe],zt=ot.object,Gt=ot.geometry,Xe=ot.material,Le=ot.group;if(Xe.side===Ir&&zt.layers.test($.layers)){const vn=Xe.side;Xe.side=ui,Xe.needsUpdate=!0,Qo(zt,q,$,Gt,Xe,Le),Xe.side=vn,Xe.needsUpdate=!0,je=!0}}je===!0&&(P.updateMultisampleRenderTarget(he),P.updateRenderTargetMipmap(he))}M.setRenderTarget(ye),M.setClearColor(ee,ne),$e!==void 0&&($.viewport=$e),M.toneMapping=Ae}function gs(y,O,q){const $=O.isScene===!0?O.overrideMaterial:null;for(let z=0,he=y.length;z<he;z++){const ge=y[z],ye=ge.object,Ae=ge.geometry,$e=$===null?ge.material:$,je=ge.group;ye.layers.test(q.layers)&&Qo(ye,O,q,Ae,$e,je)}}function Qo(y,O,q,$,z,he){y.onBeforeRender(M,O,q,$,z,he),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(M,O,q,$,y,he),z.transparent===!0&&z.side===Ir&&z.forceSinglePass===!1?(z.side=ui,z.needsUpdate=!0,M.renderBufferDirect(q,O,$,z,y,he),z.side=fs,z.needsUpdate=!0,M.renderBufferDirect(q,O,$,z,y,he),z.side=Ir):M.renderBufferDirect(q,O,$,z,y,he),y.onAfterRender(M,O,q,$,z,he)}function no(y,O,q){O.isScene!==!0&&(O=Ze);const $=be.get(y),z=d.state.lights,he=d.state.shadowsArray,ge=z.state.version,ye=Ne.getParameters(y,z.state,he,O,q),Ae=Ne.getProgramCacheKey(ye);let $e=$.programs;$.environment=y.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(y.isMeshStandardMaterial?V:S).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,$e===void 0&&(y.addEventListener("dispose",ze),$e=new Map,$.programs=$e);let je=$e.get(Ae);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===ge)return xi(y,ye),je}else ye.uniforms=Ne.getUniforms(y),y.onBeforeCompile(ye,M),je=Ne.acquireProgram(ye,Ae),$e.set(Ae,je),$.uniforms=ye.uniforms;const Fe=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=pe.uniform),xi(y,ye),$.needsLights=bn(y),$.lightsStateVersion=ge,$.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function Oa(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=wl.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function xi(y,O){const q=be.get(y);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function io(y,O,q,$,z){O.isScene!==!0&&(O=Ze),P.resetTextureUnits();const he=O.fog,ge=$.isMeshStandardMaterial?O.environment:null,ye=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ko,Ae=($.isMeshStandardMaterial?V:S).get($.envMap||ge),$e=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Fe=!!q.morphAttributes.position,ke=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let zt=cs;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(zt=M.toneMapping);const Gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xe=Gt!==void 0?Gt.length:0,Le=be.get($),vn=d.state.lights;if(de===!0&&(Ue===!0||y!==E)){const bt=y===E&&$.id===x;pe.setState($,y,bt)}let wt=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==vn.state.version||Le.outputColorSpace!==ye||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Ae||$.fog===!0&&Le.fog!==he||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==pe.numPlanes||Le.numIntersection!==pe.numIntersection)||Le.vertexAlphas!==$e||Le.vertexTangents!==je||Le.morphTargets!==Fe||Le.morphNormals!==ke||Le.morphColors!==ot||Le.toneMapping!==zt||Le.morphTargetsCount!==Xe)&&(wt=!0):(wt=!0,Le.__version=$.version);let tn=Le.currentProgram;wt===!0&&(tn=no($,O,z));let Vi=!1,On=!1,Ss=!1;const Ot=tn.getUniforms(),si=Le.uniforms;if(Ie.useProgram(tn.program)&&(Vi=!0,On=!0,Ss=!0),$.id!==x&&(x=$.id,On=!0),Vi||E!==y){Ie.buffers.depth.getReversed()?(fe.copy(y.projectionMatrix),Xm(fe),Ym(fe),Ot.setValue(N,"projectionMatrix",fe)):Ot.setValue(N,"projectionMatrix",y.projectionMatrix),Ot.setValue(N,"viewMatrix",y.matrixWorldInverse);const At=Ot.map.cameraPosition;At!==void 0&&At.setValue(N,qe.setFromMatrixPosition(y.matrixWorld)),pt.logarithmicDepthBuffer&&Ot.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ot.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,On=!0,Ss=!0)}if(z.isSkinnedMesh){Ot.setOptional(N,z,"bindMatrix"),Ot.setOptional(N,z,"bindMatrixInverse");const bt=z.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Ot.setValue(N,"boneTexture",bt.boneTexture,P))}z.isBatchedMesh&&(Ot.setOptional(N,z,"batchingTexture"),Ot.setValue(N,"batchingTexture",z._matricesTexture,P),Ot.setOptional(N,z,"batchingIdTexture"),Ot.setValue(N,"batchingIdTexture",z._indirectTexture,P),Ot.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Ot.setValue(N,"batchingColorTexture",z._colorsTexture,P));const Ln=q.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Be.update(z,q,tn),(On||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,Ot.setValue(N,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(si.envMap.value=Ae,si.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(si.envMapIntensity.value=O.environmentIntensity),On&&(Ot.setValue(N,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&qn(si,Ss),he&&$.fog===!0&&Se.refreshFogUniforms(si,he),Se.refreshMaterialUniforms(si,$,X,ie,d.state.transmissionRenderTarget[y.id]),wl.upload(N,Oa(Le),si,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wl.upload(N,Oa(Le),si,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ot.setValue(N,"center",z.center),Ot.setValue(N,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(N,"normalMatrix",z.normalMatrix),Ot.setValue(N,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bt=$.uniformsGroups;for(let At=0,Xr=bt.length;At<Xr;At++){const rr=bt[At];F.update(rr,tn),F.bind(rr,tn)}}return tn}function qn(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function bn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,O,q){be.get(y.texture).__webglTexture=O,be.get(y.depthTexture).__webglTexture=q;const $=be.get(y);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const q=be.get(y);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const vs=N.createFramebuffer();this.setRenderTarget=function(y,O=0,q=0){L=y,D=O,C=q;let $=!0,z=null,he=!1,ge=!1;if(y){const Ae=be.get(y);if(Ae.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Ae.__webglFramebuffer===void 0)P.setupRenderTarget(y);else if(Ae.__hasExternalTextures)P.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Fe=y.depthTexture;if(Ae.__boundDepthTexture!==Fe){if(Fe!==null&&be.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(y)}}const $e=y.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ge=!0);const je=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(je[O])?z=je[O][q]:z=je[O],he=!0):y.samples>0&&P.useMultisampledRTT(y)===!1?z=be.get(y).__webglMultisampledFramebuffer:Array.isArray(je)?z=je[q]:z=je,I.copy(y.viewport),W.copy(y.scissor),k=y.scissorTest}else I.copy(Re).multiplyScalar(X).floor(),W.copy(Je).multiplyScalar(X).floor(),k=Mt;if(q!==0&&(z=vs),Ie.bindFramebuffer(N.FRAMEBUFFER,z)&&$&&Ie.drawBuffers(y,z),Ie.viewport(I),Ie.scissor(W),Ie.setScissorTest(k),he){const Ae=be.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,q)}else if(ge){const Ae=be.get(y.texture),$e=O;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,q,$e)}else if(y!==null&&q!==0){const Ae=be.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ae.__webglTexture,q)}x=-1},this.readRenderTargetPixels=function(y,O,q,$,z,he,ge){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){Ie.bindFramebuffer(N.FRAMEBUFFER,ye);try{const Ae=y.texture,$e=Ae.format,je=Ae.type;if(!pt.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-$&&q>=0&&q<=y.height-z&&N.readPixels(O,q,$,z,it.convert($e),it.convert(je),he)}finally{const Ae=L!==null?be.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,O,q,$,z,he,ge){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){const Ae=y.texture,$e=Ae.format,je=Ae.type;if(!pt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-$&&q>=0&&q<=y.height-z){Ie.bindFramebuffer(N.FRAMEBUFFER,ye);const Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(O,q,$,z,it.convert($e),it.convert(je),0);const ke=L!==null?be.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,ke);const ot=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Wm(N,ot,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.deleteBuffer(Fe),N.deleteSync(ot),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,q=0){y.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const $=Math.pow(2,-q),z=Math.floor(y.image.width*$),he=Math.floor(y.image.height*$),ge=O!==null?O.x:0,ye=O!==null?O.y:0;P.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ge,ye,z,he),Ie.unbindTexture()};const gr=N.createFramebuffer(),xs=N.createFramebuffer();this.copyTextureToTexture=function(y,O,q=null,$=null,z=0,he=null){y.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,y=arguments[1],O=arguments[2],he=arguments[3]||0,q=null),he===null&&(z!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let ge,ye,Ae,$e,je,Fe,ke,ot,zt;const Gt=y.isCompressedTexture?y.mipmaps[he]:y.image;if(q!==null)ge=q.max.x-q.min.x,ye=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,$e=q.min.x,je=q.min.y,Fe=q.isBox3?q.min.z:0;else{const Ln=Math.pow(2,-z);ge=Math.floor(Gt.width*Ln),ye=Math.floor(Gt.height*Ln),y.isDataArrayTexture?Ae=Gt.depth:y.isData3DTexture?Ae=Math.floor(Gt.depth*Ln):Ae=1,$e=0,je=0,Fe=0}$!==null?(ke=$.x,ot=$.y,zt=$.z):(ke=0,ot=0,zt=0);const Xe=it.convert(O.format),Le=it.convert(O.type);let vn;O.isData3DTexture?(P.setTexture3D(O,0),vn=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),vn=N.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),vn=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const wt=N.getParameter(N.UNPACK_ROW_LENGTH),tn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Vi=N.getParameter(N.UNPACK_SKIP_PIXELS),On=N.getParameter(N.UNPACK_SKIP_ROWS),Ss=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),N.pixelStorei(N.UNPACK_SKIP_ROWS,je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe);const Ot=y.isDataArrayTexture||y.isData3DTexture,si=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const Ln=be.get(y),bt=be.get(O),At=be.get(Ln.__renderTarget),Xr=be.get(bt.__renderTarget);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,At.__webglFramebuffer),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let rr=0;rr<Ae;rr++)Ot&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(y).__webglTexture,z,Fe+rr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(O).__webglTexture,he,zt+rr)),N.blitFramebuffer($e,je,ge,ye,ke,ot,ge,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||be.has(y)){const Ln=be.get(y),bt=be.get(O);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,gr),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,xs);for(let At=0;At<Ae;At++)Ot?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ln.__webglTexture,z,Fe+At):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ln.__webglTexture,z),si?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,he,zt+At):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,he),z!==0?N.blitFramebuffer($e,je,ge,ye,ke,ot,ge,ye,N.COLOR_BUFFER_BIT,N.NEAREST):si?N.copyTexSubImage3D(vn,he,ke,ot,zt+At,$e,je,ge,ye):N.copyTexSubImage2D(vn,he,ke,ot,$e,je,ge,ye);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else si?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(vn,he,ke,ot,zt,ge,ye,Ae,Xe,Le,Gt.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(vn,he,ke,ot,zt,ge,ye,Ae,Xe,Gt.data):N.texSubImage3D(vn,he,ke,ot,zt,ge,ye,Ae,Xe,Le,Gt):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,ke,ot,ge,ye,Xe,Le,Gt.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,ke,ot,Gt.width,Gt.height,Xe,Gt.data):N.texSubImage2D(N.TEXTURE_2D,he,ke,ot,ge,ye,Xe,Le,Gt);N.pixelStorei(N.UNPACK_ROW_LENGTH,wt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vi),N.pixelStorei(N.UNPACK_SKIP_ROWS,On),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ss),he===0&&O.generateMipmaps&&N.generateMipmap(vn),Ie.unbindTexture()},this.copyTextureToTexture3D=function(y,O,q=null,$=null,z=0){return y.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,y=arguments[2],O=arguments[3],z=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,q,$,z)},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&P.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?P.setTextureCube(y,0):y.isData3DTexture?P.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?P.setTexture2DArray(y,0):P.setTexture2D(y,0),Ie.unbindTexture()},this.resetState=function(){D=0,C=0,L=null,Ie.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}var cS=`varying vec2 vUv;\r
uniform vec2 uImageSize;\r
uniform vec2 uResolution;

 vec2 getCoverUvVert(vec2 uv, vec2 textureSize, vec2 resolution) {\r
       vec2 ratio = vec2(\r
        min((resolution.x / resolution.y) / (textureSize.x / textureSize.y), 1.0),\r
        min((resolution.y / resolution.x) / (textureSize.y / textureSize.x), 1.0)\r
        );

      return vec2(\r
        uv.x * ratio.x + (1.0 - ratio.x) * 0.5,\r
        uv.y * ratio.y + (1.0 - ratio.y) * 0.5\r
      );\r
    }\r

void main() {\r
    vUv = getCoverUvVert(uv, uImageSize , uResolution);\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,uS=`#ifdef GL_ES\r
precision mediump float;\r
#endif

uniform float uTime;\r
uniform float uScroll;\r
uniform vec2 uResolution;\r
uniform sampler2D uTexture;\r
varying vec2 vUv;\r

void main() {\r
    vec2 uv = vUv;\r
    float maxIntensity = 0.017;\r
    float y = uv.y;\r
    if(uScroll < 0.0){\r
        y =1.0 - uv.y;\r
    }\r
    float scroll = abs(uScroll)+ 0.01;\r
    float intenceLocation = 0.9;\r
    float distanceFromLocation = smoothstep(0.0,1.0,(scroll - y));\r
    float validity = 1.0;\r
    float pointer = -2.0/30.0;\r
    float pointerChange = 1.0/30.0;\r
    float intensity = maxIntensity*scroll *distanceFromLocation;

    for( int i = 0 ; i <= 31; i++){\r
        \r
        pointer += pointerChange;\r
        if(pointer < scroll && y < pointer + intensity && y > pointer - intensity){\r
            discard;\r
        }\r
    }

    vec4 Color = texture2D(uTexture, vUv);\r
    \r
    gl_FragColor = vec4(Color);\r
}`;function Lr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Id(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vo={duration:.5,overwrite:!1,delay:0},eh,Fn,qt,pr=1e8,Xn=1/pr,Au=Math.PI*2,hS=Au/4,fS=0,Nd=Math.sqrt,dS=Math.cos,pS=Math.sin,Pn=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},Gr=function(e){return typeof e=="number"},th=function(e){return typeof e>"u"},_r=function(e){return typeof e=="object"},hi=function(e){return e!==!1},nh=function(){return typeof window<"u"},Sl=function(e){return en(e)||Pn(e)},Fd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yn=Array.isArray,Ru=/(?:-?\.?\d|\.)+/gi,Od=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bd=/[+-]=-?[.\d]+/,zd=/[^,'"\[\]\s]+/gi,mS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Zt,lr,Cu,ih,Li={},Ul={},kd,Hd=function(e){return(Ul=Go(e,Li))&&mi},rh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ya=function(e,t){return!t&&console.warn(e)},Vd=function(e,t){return e&&(Li[e]=t)&&Ul&&(Ul[e]=t)||Li},Ta=function(){return 0},_S={suppressEvents:!0,isStart:!0,kill:!1},Al={suppressEvents:!0,kill:!1},gS={suppressEvents:!0},sh={},us=[],Pu={},Gd,Ai={},Dc={},Nf=30,Rl=[],oh="",ah=function(e){var t=e[0],n,i;if(_r(t)||en(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Rl.length;i--&&!Rl[i].targetTest(t););n=Rl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new dp(e[i],n)))||e.splice(i,1);return e},qs=function(e){return e._gsap||ah(Hi(e))[0]._gsap},Wd=function(e,t,n){return(n=e[t])&&en(n)?e[t]():th(n)&&e.getAttribute&&e.getAttribute(t)||n},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},an=function(e){return Math.round(e*1e5)/1e5||0},mn=function(e){return Math.round(e*1e7)/1e7||0},Lo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},vS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Il=function(){var e=us.length,t=us.slice(0),n,i;for(Pu={},us.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xd=function(e,t,n,i){us.length&&!Fn&&Il(),e.render(t,n,Fn&&t<0&&(e._initted||e._startAt)),us.length&&!Fn&&Il()},Yd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zd).length<2?t:Pn(e)?e.trim():e},qd=function(e){return e},Ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Go=function(e,t){for(var n in t)e[n]=t[n];return e},Ff=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_r(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Nl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},va=function(e){var t=e.parent||Zt,n=e.keyframes?xS(Yn(e.keyframes)):Ui;if(hi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},SS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$d=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Gl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ds=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},MS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Du=function(e,t,n,i){return e._startAt&&(Fn?e._startAt.revert(Al):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ES=function r(e){return!e||e._ts&&r(e.parent)},Of=function(e){return e._repeat?Wo(e._tTime,e=e.duration()+e._rDelay)*e:0},Wo=function(e,t){var n=Math.floor(e=mn(e/t));return e&&n===e?n-1:n},Fl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wl=function(e){return e._end=mn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xn)||0))},Xl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=mn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wl(e),n._dirty||$s(n,e)),e},Kd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fl(e.rawTime(),t),(!t._dur||Na(0,t.totalDuration(),n)-t._tTime>Xn)&&t.render(n,!0)),$s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ur=function(e,t,n,i){return t.parent&&ds(t),t._start=mn((Gr(n)?n:n||e!==Zt?zi(e,n,t):e._time)+t._delay),t._end=mn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$d(e,t,"_first","_last",e._sort?"_start":0),Lu(t)||(e._recent=t),i||Kd(e,t),e._ts<0&&Xl(e,e._tTime),e},Zd=function(e,t){return(Li.ScrollTrigger||rh("scrollTrigger",t))&&Li.ScrollTrigger.create(t,e)},jd=function(e,t,n,i,s){if(ch(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gd!==Ri.frame)return us.push(e),e._lazy=[s,i],1},yS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Lu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&yS(e)&&!(!e._initted&&Lu(e))||(e._ts<0||e._dp._ts<0)&&!Lu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Na(0,e._tDur,t),u=Wo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Fn||i||e._zTime===Xn||!t&&e._zTime){if(!e._initted&&jd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Xn:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Du(e,t,n,!0),e._onUpdate&&!n&&Ci(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ds(e,1),!n&&!Fn&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Xo=function(e,t,n,i){var s=e._repeat,o=mn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:mn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Xl(e,e._tTime=e._tDur*a),e.parent&&Wl(e),n||$s(e.parent,e),e},Bf=function(e){return e instanceof ni?$s(e):Xo(e,e._dur)},wS={_start:0,endTime:Ta,totalDuration:Ta},zi=function r(e,t,n){var i=e.labels,s=e._recent||wS,o=e.duration()>=pr?s.endTime(!1):e._dur,a,l,c;return Pn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Yn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},xa=function(e,t,n){var i=Gr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=hi(l.vars.inherit)&&l.parent;o.immediateRender=hi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new pn(t[0],o,t[s+1])},_s=function(e,t){return e||e===0?t(e):t},Na=function(e,t,n){return n<e?e:n>t?t:n},Wn=function(e,t){return!Pn(e)||!(t=mS.exec(e))?"":t[1]},AS=function(e,t,n){return _s(n,function(i){return Na(e,t,i)})},Uu=[].slice,Jd=function(e,t){return e&&_r(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_r(e[0]))&&!e.nodeType&&e!==lr},RS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Pn(i)&&!t||Jd(i,1)?(s=n).push.apply(s,Hi(i)):n.push(i)})||n},Hi=function(e,t,n){return qt&&!t&&qt.selector?qt.selector(e):Pn(e)&&!n&&(Cu||!Yo())?Uu.call((t||ih).querySelectorAll(e),0):Yn(e)?RS(e,n):Jd(e)?Uu.call(e,0):e?[e]:[]},Iu=function(e){return e=Hi(e)[0]||ya("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hi(t,n.querySelectorAll?n:n===e?ya("Invalid scope")||ih.createElement("div"):e)}},Qd=function(e){return e.sort(function(){return .5-Math.random()})},ep=function(e){if(en(e))return e;var t=_r(e)?e:{each:e},n=Ks(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Pn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,m,g){var _=(g||t).length,p=o[_],d,R,b,M,A,D,C,L,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,pr])[1],!x){for(C=-1e8;C<(C=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],d=l?Math.min(x,_)*u-.5:i%x,R=x===pr?0:l?_*h/x-.5:i/x|0,C=0,L=pr,D=0;D<_;D++)b=D%x-d,M=R-(D/x|0),p[D]=A=c?Math.abs(c==="y"?M:b):Nd(b*b+M*M),A>C&&(C=A),A<L&&(L=A);i==="random"&&Qd(p),p.max=C-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Wn(t.amount||t.each)||0,n=n&&_<0?up(n):n}return _=(p[f]-p.min)/p.max||0,mn(p.b+(n?n(_):_)*p.v)+p.u}},Nu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=mn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Gr(n)?0:Wn(n))}},tp=function(e,t){var n=Yn(e),i,s;return!n&&_r(e)&&(i=n=e.radius||pr,e.values?(e=Hi(e.values),(s=!Gr(e[0]))&&(i*=i)):e=Nu(e.increment)),_s(t,n?en(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pr,u=0,h=e.length,f,m;h--;)s?(f=e[h].x-a,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Gr(o)?u:u+Wn(o)}:Nu(e))},np=function(e,t,n,i){return _s(Yn(e)?!t:n===!0?!!(n=0):!i,function(){return Yn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},CS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},PS=function(e,t){return function(n){return e(parseFloat(n))+(t||Wn(n))}},DS=function(e,t,n){return rp(e,t,0,1,n)},ip=function(e,t,n){return _s(n,function(i){return e[~~t(i)]})},LS=function r(e,t,n){var i=t-e;return Yn(e)?ip(e,r(0,e.length),t):_s(n,function(s){return(i+(s-e)%i)%i+e})},US=function r(e,t,n){var i=t-e,s=i*2;return Yn(e)?ip(e,r(0,e.length-1),t):_s(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ba=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?zd:Ru),n+=e.substr(t,i-t)+np(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},rp=function(e,t,n,i,s){var o=t-e,a=i-n;return _s(s,function(l){return n+((l-e)/o*a||0)})},IS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Pn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Yn(e)&&!Yn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Go(Yn(e)?[]:{},e));if(!u){for(l in t)lh.call(a,e,l,"get",t[l]);s=function(g){return fh(g,a)||(o?e.p:e)}}}return _s(n,s)},zf=function(e,t,n){var i=e.labels,s=pr,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,n){var i=e.vars,s=i[t],o=qt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&us.length&&Il(),a&&(qt=a),u=l?s.apply(c,l):s.call(c),qt=o,u},ma=function(e){return ds(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Fn),e.progress()<1&&Ci(e,"onInterrupt"),e},Ro,sp=[],op=function(e){if(e)if(e=!e.name&&e.default||e,nh()||e.headless){var t=e.name,n=en(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ta,render:fh,add:lh,kill:ZS,modifier:KS,rawVars:0},o={targetTest:0,get:0,getSetter:hh,aliases:{},register:0};if(Yo(),e!==i){if(Ai[t])return;Ui(i,Ui(Nl(e,s),o)),Go(i.prototype,Go(s,Nl(e,o))),Ai[i.prop=t]=i,e.targetTest&&(Rl.push(i),sh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vd(t,i),e.register&&e.register(mi,i,di)}else sp.push(e)},Vt=255,_a={aqua:[0,Vt,Vt],lime:[0,Vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Vt],navy:[0,0,128],white:[Vt,Vt,Vt],olive:[128,128,0],yellow:[Vt,Vt,0],orange:[Vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Vt,0,0],pink:[Vt,192,203],cyan:[0,Vt,Vt],transparent:[Vt,Vt,Vt,0]},Lc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Vt+.5|0},ap=function(e,t,n){var i=e?Gr(e)?[e>>16,e>>8&Vt,e&Vt]:0:_a.black,s,o,a,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_a[e])i=_a[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Vt,i&Vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Vt,e&Vt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ru),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Lc(l+1/3,s,o),i[1]=Lc(l,s,o),i[2]=Lc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Od),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ru)||_a.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Vt,o=i[1]/Vt,a=i[2]/Vt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(o-a)/m+(o<a?6:0):h===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lp=function(e){var t=[],n=[],i=-1;return e.split(hs).forEach(function(s){var o=s.match(Ao)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},kf=function(e,t,n){var i="",s=(e+i).match(hs),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=ap(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=lp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(hs,"1").split(Ao),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(hs),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},hs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _a)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),NS=/hsl[a]?\(/,cp=function(e){var t=e.join(" "),n;if(hs.lastIndex=0,hs.test(t))return n=NS.test(t),e[1]=kf(e[1],n),e[0]=kf(e[0],n,lp(e[1])),!0},wa,Ri=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,m,g=function _(p){var d=r()-i,R=p===!0,b,M,A,D;if((d>e||d<0)&&(n+=d-t),i+=d,A=i-n,b=A-o,(b>0||R)&&(D=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=b+(b>=s?4:s-b),M=1),R||(l=c(_)),M)for(m=0;m<a.length;m++)a[m](A,f,D,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){kd&&(!Cu&&nh()&&(lr=Cu=window,ih=lr.document||{},Li.gsap=mi,(lr.gsapVersions||(lr.gsapVersions=[])).push(mi.version),Hd(Ul||lr.GreenSockGlobals||!lr.gsap&&lr||{}),sp.forEach(op)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},wa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),wa=0,c=Ta},lagSmoothing:function(p,d){e=p||1/0,t=Math.min(d||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,d,R){var b=d?function(M,A,D,C){p(M,A,D,C),h.remove(b)}:p;return h.remove(p),a[R?"unshift":"push"](b),Yo(),b},remove:function(p,d){~(d=a.indexOf(p))&&a.splice(d,1)&&m>=d&&m--},_listeners:a},h}(),Yo=function(){return!wa&&Ri.wake()},Tt={},FS=/^[\d.\-M][\d.\-,\s]/,OS=/["']/g,BS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(OS,"").trim():+c,i=l.substr(a+1).trim();return t},zS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},kS=function(e){var t=(e+"").split("("),n=Tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[BS(t[1])]:zS(e).split(",").map(Yd)):Tt._CE&&FS.test(e)?Tt._CE("",e):n},up=function(e){return function(t){return 1-e(1-t)}},hp=function r(e,t){for(var n=e._first,i;n;)n instanceof ni?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ks=function(e,t){return e&&(en(e)?e:Tt[e]||kS(e))||t},eo=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return fi(e,function(a){Tt[a]=Li[a]=s,Tt[o=a.toLowerCase()]=n;for(var l in s)Tt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Tt[a+"."+l]=s[l]}),s},fp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Au*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*pS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:fp(a);return s=Au/s,l.config=function(c,u){return r(e,c,u)},l},Ic=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fp(n);return i.config=function(s){return r(e,s)},i};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;eo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Tt.Linear.easeNone=Tt.none=Tt.Linear.easeIn;eo("Elastic",Uc("in"),Uc("out"),Uc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};eo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);eo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});eo("Circ",function(r){return-(Nd(1-r*r)-1)});eo("Sine",function(r){return r===1?1:-dS(r*hS)+1});eo("Back",Ic("in"),Ic("out"),Ic());Tt.SteppedEase=Tt.steps=Li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Xn;return function(a){return((i*Na(0,o,a)|0)+s)*n}}};Vo.ease=Tt["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return oh+=r+","+r+"Params,"});var dp=function(e,t){this.id=fS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wd,this.set=t?t.getSetter:hh},Aa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,qt&&(this._ctx=qt,qt.data.push(this)),wa||Ri.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Yo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xl(this,n),!s._dp||s.parent||Kd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ur(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Xn||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Of(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Of(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Wo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Na(-Math.abs(this._delay),this._tDur,s),i!==!1),Wl(this),MS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xn&&(this._tTime-=Xn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ur(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(hi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gS);var i=Fn;return Fn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(zi(this,n),hi(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hi(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Xn)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=en(n)?n:qd,a=function(){var c=i.then;i.then=null,en(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ma(this)},r}();Ui(Aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var ni=function(r){Id(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=hi(n.sortChildren),Zt&&ur(n.parent||Zt,Lr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zd(Lr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return xa(0,arguments,this),this},t.from=function(i,s,o){return xa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return xa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,va(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pn(i,s,zi(this,o),1),this},t.call=function(i,s,o){return ur(this,pn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new pn(i,o,zi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,va(o).immediateRender=hi(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,va(a).immediateRender=hi(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:mn(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,p,d,R,b,M,A,D,C;if(this!==Zt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,M=this._start,b=this._ts,d=!b,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=mn(u%p),u===l?(_=this._repeat,f=c):(A=mn(u/p),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Wo(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),D&&_&1&&(f=c-f,C=1),_!==A&&!this._lock){var L=D&&A&1,x=L===(D&&_&1);if(_<A&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(C?0:mn(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;hp(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=bS(this,mn(a),mn(f)),R&&(u-=f-(f=R._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(Ci(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&R!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!d){R=0,g&&(u+=this._zTime=-1e-8);break}}m=g}else{m=this._last;for(var E=i<0?i:f;m;){if(g=m._prev,(m._act||E<=m._end)&&m._ts&&R!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(E-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(E-m._start)*m._ts,s,o||Fn&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!d){R=0,g&&(u+=this._zTime=E?-1e-8:Xn);break}}m=g}}if(R&&!s&&(this.pause(),R.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=M,Wl(this),this.render(i,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ds(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Ci(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Gr(s)||(s=zi(this,s,i)),!(i instanceof Aa)){if(Yn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Pn(i))return this.addLabel(i,s);if(en(i))i=pn.delayedCall(0,i);else return this}return this!==i?ur(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof pn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Pn(i)?this.removeLabel(i):en(i)?this.killTweensOf(i):(i.parent===this&&Gl(this,i),i===this._recent&&(this._recent=this._last),$s(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mn(Ri.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=zi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=pn.delayedCall(0,s||Ta,o);return a.data="isPause",this._hasPause=1,ur(this,a,zi(this,i))},t.removePause=function(i){var s=this._first;for(i=zi(this,i);s;)s._start===i&&s.data==="isPause"&&ds(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)os!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Hi(i),l=this._first,c=Gr(s),u;l;)l instanceof pn?vS(l._targets,a)&&(c?(!os||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=zi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=pn.to(o,Ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Xn,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Xo(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ui({startAt:{time:zi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),zf(this,zi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),zf(this,zi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Xn)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $s(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$s(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=pr,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ur(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xo(o,o===Zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Zt._ts&&(Xd(Zt,Fl(i,Zt)),Gd=Ri.frame),Ri.frame>=Nf){Nf+=Di.autoSleep||120;var s=Zt._first;if((!s||!s._ts)&&Di.autoSleep&&Ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ri.sleep()}}},e}(Aa);Ui(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var HS=function(e,t,n,i,s,o,a){var l=new di(this._pt,e,t,0,1,xp,null,s),c=0,u=0,h,f,m,g,_,p,d,R;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=ba(i)),o&&(R=[n,i],o(R,e,t),n=R[0],i=R[1]),f=n.match(Pc)||[];h=Pc.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Lo(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Pc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bd.test(i)||d)&&(l.e=0),this._pt=l,l},lh=function(e,t,n,i,s,o,a,l,c,u){en(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:en(h)?c?e[t.indexOf("set")||!en(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=en(h)?c?YS:gp:uh,g;if(Pn(i)&&(~i.indexOf("random(")&&(i=ba(i)),i.charAt(1)==="="&&(g=Lo(f,i)+(Wn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Fu)return!isNaN(f*i)&&i!==""?(g=new di(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?$S:vp,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&rh(t,i),HS.call(this,e,t,f,i,m,l||Di.stringFilter,c))},VS=function(e,t,n,i,s){if(en(e)&&(e=Sa(e,s,t,n,i)),!_r(e)||e.style&&e.nodeType||Yn(e)||Fd(e))return Pn(e)?Sa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Sa(e[a],s,t,n,i);return o},pp=function(e,t,n,i,s,o){var a,l,c,u;if(Ai[e]&&(a=new Ai[e]).init(s,a.rawVars?t[e]:VS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new di(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ro))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},os,Fu,ch=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,d=e.parent,R=d&&d.data==="nested"?d.vars.targets:p,b=e._overwrite==="auto"&&!eh,M=e.timeline,A,D,C,L,x,E,I,W,k,ee,ne,Z,ie;if(M&&(!f||!s)&&(s="none"),e._ease=Ks(s,Vo.ease),e._yEase=h?up(Ks(h===!0?s:h,Vo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(W=p[0]?qs(p[0]).harness:0,Z=W&&i[W.prop],A=Nl(i,sh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!m?_.render(-1,!0):_.revert(u&&g?Al:_S),_._lazy=0),o){if(ds(e._startAt=pn.set(p,Ui({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&hi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Fn||!a&&!m)&&e._startAt.revert(Al),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),C=Ui({overwrite:!1,data:"isFromStart",lazy:a&&!_&&hi(l),immediateRender:a,stagger:0,parent:d},A),Z&&(C[W.prop]=Z),ds(e._startAt=pn.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Fn?e._startAt.revert(Al):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Xn,Xn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&hi(l)||l&&!g,D=0;D<p.length;D++){if(x=p[D],I=x._gsap||ah(p)[D]._gsap,e._ptLookup[D]=ee={},Pu[I.id]&&us.length&&Il(),ne=R===p?D:R.indexOf(x),W&&(k=new W).init(x,Z||A,e,ne,R)!==!1&&(e._pt=L=new di(e._pt,x,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(X){ee[X]=L}),k.priority&&(E=1)),!W||Z)for(C in A)Ai[C]&&(k=pp(C,A,e,ne,x,R))?k.priority&&(E=1):ee[C]=L=lh.call(e,x,C,"get",A[C],ne,R,0,i.stringFilter);e._op&&e._op[D]&&e.kill(x,e._op[D]),b&&e._pt&&(os=e,Zt.killTweensOf(x,ee,e.globalTime(t)),ie=!e.parent,os=0),e._pt&&l&&(Pu[I.id]=1)}E&&Sp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ie,f&&t<=0&&M.render(pr,!0,!0)},GS=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(u=f[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Fu=1,e.vars[t]="+=0",ch(e,a),Fu=0,l?ya(t+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=an(n)+Wn(h.e)),h.b&&(h.b=u.s+Wn(h.b))},WS=function(e,t){var n=e[0]?qs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Go({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},XS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Yn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Sa=function(e,t,n,i,s){return en(e)?e.call(t,n,i,s):Pn(e)&&~e.indexOf("random(")?ba(e):e},mp=oh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_p={};fi(mp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _p[r]=1});var pn=function(r){Id(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:va(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,R=i.parent||Zt,b=(Yn(n)||Fd(n)?Gr(n[0]):"length"in i)?[n]:Hi(n),M,A,D,C,L,x,E,I;if(a._targets=b.length?ah(b):ya("GSAP target "+n+" not found. https://gsap.com",!Di.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||Sl(c)||Sl(u)){if(i=a.vars,M=a.timeline=new ni({data:"nested",defaults:_||{},targets:R&&R.data==="nested"?R.vars.targets:b}),M.kill(),M.parent=M._dp=Lr(a),M._start=0,f||Sl(c)||Sl(u)){if(C=b.length,E=f&&ep(f),_r(f))for(L in f)~mp.indexOf(L)&&(I||(I={}),I[L]=f[L]);for(A=0;A<C;A++)D=Nl(i,_p),D.stagger=0,d&&(D.yoyoEase=d),I&&Go(D,I),x=b[A],D.duration=+Sa(c,Lr(a),A,x,b),D.delay=(+Sa(u,Lr(a),A,x,b)||0)-a._delay,!f&&C===1&&D.delay&&(a._delay=u=D.delay,a._start+=u,D.delay=0),M.to(x,D,E?E(A,x,b):0),M._ease=Tt.none;M.duration()?c=u=0:a.timeline=0}else if(g){va(Ui(M.vars.defaults,{ease:"none"})),M._ease=Ks(g.ease||i.ease||"none");var W=0,k,ee,ne;if(Yn(g))g.forEach(function(Z){return M.to(b,Z,">")}),M.duration();else{D={};for(L in g)L==="ease"||L==="easeEach"||XS(L,g[L],D,g.easeEach);for(L in D)for(k=D[L].sort(function(Z,ie){return Z.t-ie.t}),W=0,A=0;A<k.length;A++)ee=k[A],ne={ease:ee.e,duration:(ee.t-(A?k[A-1].t:0))/100*c},ne[L]=ee.v,M.to(b,ne,W),W+=ne.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return m===!0&&!eh&&(os=Lr(a),Zt.killTweensOf(b),os=0),ur(R,Lr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===mn(R._time)&&hi(h)&&ES(Lr(a))&&R.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),p&&Zd(Lr(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Xn&&!u?l:i<Xn?0:i,f,m,g,_,p,d,R,b,M;if(!c)TS(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=mn(h%_),h===l?(g=this._repeat,f=c):(p=mn(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),p=Wo(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(b&&this._yEase&&hp(b,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(mn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(jd(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(M||this._ease)(f/c),this._from&&(this.ratio=R=1-R),f&&!a&&!s&&!g&&(Ci(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(R,m.d),m=m._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Du(this,i,s,o),Ci(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Du(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ds(this,1),!s&&!(u&&!a)&&(h||a||d)&&(Ci(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){wa||Ri.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ch(this,c),u=this._ease(c/this._dur),GS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Xl(this,0),this.parent||$d(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,os&&os.vars.overwrite!==!0)._first||ma(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Hi(i):a,c=this._ptLookup,u=this._pt,h,f,m,g,_,p,d;if((!s||s==="all")&&SS(a,l))return s==="all"&&(this._pt=0),ma(this);for(h=this._op=this._op||[],s!=="all"&&(Pn(s)&&(_={},fi(s,function(R){return _[R]=1}),s=_),s=WS(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(h[d]=s,g=f,m={}):(m=h[d]=h[d]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Gl(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&ma(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return xa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return xa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Zt.killTweensOf(i,s,o)},e}(Aa);Ui(pn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(r){pn[r]=function(){var e=new ni,t=Uu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var uh=function(e,t,n){return e[t]=n},gp=function(e,t,n){return e[t](n)},YS=function(e,t,n,i){return e[t](i.fp,n)},qS=function(e,t,n){return e.setAttribute(t,n)},hh=function(e,t){return en(e[t])?gp:th(e[t])&&e.setAttribute?qS:uh},vp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$S=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},fh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},KS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},ZS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Gl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},jS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Sp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},di=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||vp,this.d=l||this,this.set=c||uh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=jS,this.m=n,this.mt=s,this.tween=i},r}();fi(oh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return sh[r]=1});Li.TweenMax=Li.TweenLite=pn;Li.TimelineLite=Li.TimelineMax=ni;Zt=new ni({sortChildren:!1,defaults:Vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Di.stringFilter=cp;var Zs=[],Cl={},JS=[],Hf=0,QS=0,Nc=function(e){return(Cl[e]||JS).map(function(t){return t()})},Ou=function(){var e=Date.now(),t=[];e-Hf>2&&(Nc("matchMediaInit"),Zs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=lr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Nc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hf=e,Nc("matchMedia"))},Mp=function(){function r(t,n){this.selector=n&&Iu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=QS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){en(n)&&(s=i,i=n,n=en);var o=this,a=function(){var c=qt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Iu(s)),qt=o,h=i.apply(o,arguments),en(h)&&o._r.push(h),qt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===en?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=qt;qt=null,n(this),qt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof pn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ni?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof pn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Zs.length;o--;)Zs[o].id===this.id&&Zs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),eM=function(){function r(t){this.contexts=[],this.scope=t,qt&&qt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){_r(n)||(n={matches:n});var o=new Mp(0,s||this.scope),a=o.conditions={},l,c,u;qt&&!o.selector&&(o.selector=qt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=lr.matchMedia(n[c]),l&&(Zs.indexOf(o)<0&&Zs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ou):l.addEventListener("change",Ou)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return op(i)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return Zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Pn(e)&&(e=Hi(e)[0]);var s=qs(e||{}).get,o=n?qd:Yd;return n==="native"&&(n=""),e&&(t?o((Ai[t]&&Ai[t].get||s)(e,t,n,i)):function(a,l,c){return o((Ai[a]&&Ai[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Hi(e),e.length>1){var i=e.map(function(u){return mi.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Ai[t],a=qs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ro._pt=0,h.init(e,n?u+n:u,Ro,0,[e]),h.render(1,h),Ro._pt&&fh(1,Ro)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=mi.to(e,Ui((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ks(e.ease,Vo.ease)),Ff(Vo,e||{})},config:function(e){return Ff(Di,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ai[a]&&!Li[a]&&ya(t+" effect requires "+a+" plugin.")}),Dc[t]=function(a,l,c){return n(Hi(a),Ui(l||{},s),c)},o&&(ni.prototype[t]=function(a,l,c){return this.add(Dc[t](a,_r(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Tt[e]=Ks(t)},parseEase:function(e,t){return arguments.length?Ks(e,t):Tt},getById:function(e){return Zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ni(e),i,s;for(n.smoothChildTiming=hi(e.smoothChildTiming),Zt.remove(n),n._dp=0,n._time=n._tTime=Zt._time,i=Zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof pn&&i.vars.onComplete===i._targets[0]))&&ur(n,i,i._start-i._delay),i=s;return ur(Zt,n,0),n},context:function(e,t){return e?new Mp(e,t):qt},matchMedia:function(e){return new eM(e)},matchMediaRefresh:function(){return Zs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ou()},addEventListener:function(e,t){var n=Cl[e]||(Cl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Cl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:LS,wrapYoyo:US,distribute:ep,random:np,snap:tp,normalize:DS,getUnit:Wn,clamp:AS,splitColor:ap,toArray:Hi,selector:Iu,mapRange:rp,pipe:CS,unitize:PS,interpolate:IS,shuffle:Qd},install:Hd,effects:Dc,ticker:Ri,updateRoot:ni.updateRoot,plugins:Ai,globalTimeline:Zt,core:{PropTween:di,globals:Vd,Tween:pn,Timeline:ni,Animation:Aa,getCache:qs,_removeLinkedListItem:Gl,reverting:function(){return Fn},context:function(e){return e&&qt&&(qt.data.push(e),e._ctx=qt),qt},suppressOverwrites:function(e){return eh=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ol[r]=pn[r]});Ri.add(ni.updateRoot);Ro=Ol.to({},{duration:0});var tM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nM=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=tM(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Fc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Pn(s)&&(l={},fi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}nM(a,s)}}}},mi=Ol.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fc("roundProps",Nu),Fc("modifiers"),Fc("snap",tp))||Ol;pn.version=ni.version=mi.version="3.12.7";kd=1;nh()&&Yo();Tt.Power0;Tt.Power1;Tt.Power2;Tt.Power3;Tt.Power4;Tt.Linear;Tt.Quad;Tt.Cubic;Tt.Quart;Tt.Quint;Tt.Strong;Tt.Elastic;Tt.Back;Tt.SteppedEase;Tt.Bounce;Tt.Sine;Tt.Expo;Tt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vf,as,Uo,dh,Ys,Gf,ph,iM=function(){return typeof window<"u"},Wr={},Hs=180/Math.PI,Io=Math.PI/180,To=Math.atan2,Wf=1e8,mh=/([A-Z])/g,rM=/(left|right|width|margin|padding|x)/i,sM=/[\s,\(]\S/,fr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ep=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cM=function(e,t,n){return e.style[t]=n},uM=function(e,t,n){return e.style.setProperty(t,n)},hM=function(e,t,n){return e._gsap[t]=n},fM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},dM=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},pM=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},jt="transform",pi=jt+"Origin",mM=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Wr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=fr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ur(i,a)}):this.tfm[e]=o.x?o[e]:Ur(i,e),e===pi&&(this.tfm.zOrigin=o.zOrigin);else return fr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(jt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=jt}(s||t)&&this.props.push(e,t,s[e])},Tp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_M=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(mh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ph(),(!s||!s.isStart)&&!n[jt]&&(Tp(n),i.zOrigin&&n[pi]&&(n[pi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},bp=function(e,t){var n={target:e,props:[],revert:_M,save:mM};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},wp,zu=function(e,t){var n=as.createElementNS?as.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):as.createElement(e);return n&&n.style?n:as.createElement(e)},mr=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(mh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,qo(t)||t,1)||""},Xf="O,Moz,ms,Ms,Webkit".split(","),qo=function(e,t,n){var i=t||Ys,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Xf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Xf[o]:"")+e},ku=function(){iM()&&window.document&&(Vf=window,as=Vf.document,Uo=as.documentElement,Ys=zu("div")||{style:{}},zu("div"),jt=qo(jt),pi=jt+"Origin",Ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wp=!!qo("perspective"),ph=mi.core.reverting,dh=1)},Yf=function(e){var t=e.ownerSVGElement,n=zu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Uo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Uo.removeChild(n),s},qf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ap=function(e){var t,n;try{t=e.getBBox()}catch{t=Yf(e),n=1}return t&&(t.width||t.height)||n||(t=Yf(e)),t&&!t.width&&!t.x&&!t.y?{x:+qf(e,["x","cx","x1"])||0,y:+qf(e,["y","cy","y1"])||0,width:0,height:0}:t},Rp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ap(e))},Qs=function(e,t){if(t){var n=e.style,i;t in Wr&&t!==pi&&(t=jt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(mh,"-$1").toLowerCase())):n.removeAttribute(t)}},ls=function(e,t,n,i,s,o){var a=new di(e._pt,t,n,0,1,o?yp:Ep);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},$f={deg:1,rad:1,turn:1},gM={grid:1,flex:1},ps=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ys.style,l=rM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,_,p,d;if(i===o||!s||$f[i]||$f[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),d=e.getCTM&&Rp(e),(m||o==="%")&&(Wr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[u],an(m?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===as||!_.appendChild)&&(_=as.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Ri.time&&!p.uncache)return an(s/p.width*h);if(m&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=h+i,g=e[u],R?e.style[t]=R:Qs(e,t)}else(m||o==="%")&&!gM[mr(_,"display")]&&(a.position=mr(e,"position")),_===e&&(a.position="static"),_.appendChild(Ys),g=Ys[u],_.removeChild(Ys),a.position="absolute";return l&&m&&(p=qs(_),p.time=Ri.time,p.width=_[u]),an(f?g*s/h:g&&s?h/g*s:0)},Ur=function(e,t,n,i){var s;return dh||ku(),t in fr&&t!=="transform"&&(t=fr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wr[t]&&t!=="transform"?(s=Ca(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zl(mr(e,pi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Bl[t]&&Bl[t](e,t,n)||mr(e,t)||Wd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ps(e,t,s,n)+n:s},vM=function(e,t,n,i){if(!n||n==="none"){var s=qo(t,e,1),o=s&&mr(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=mr(e,"borderTopColor"))}var a=new di(this._pt,e.style,t,0,1,xp),l=0,c=0,u,h,f,m,g,_,p,d,R,b,M,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=mr(e,t)||i,_?e.style[t]=_:Qs(e,t)),u=[n,i],cp(u),n=u[0],i=u[1],f=n.match(Ao)||[],A=i.match(Ao)||[],A.length){for(;h=Ao.exec(i);)p=h[0],R=i.substring(l,h.index),g?g=(g+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),p.charAt(1)==="="&&(p=Lo(m,p)+M),d=parseFloat(p),b=p.substr((d+"").length),l=Ao.lastIndex-b.length,b||(b=b||Di.units[t]||M,l===i.length&&(i+=b,a.e+=b)),M!==b&&(m=ps(e,t,_,b)||0),a._pt={_next:a._pt,p:R||c===1?R:",",s:m,c:d-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?yp:Ep;return Bd.test(i)&&(a.e=0),this._pt=a,a},Kf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Kf[n]||n,t[1]=Kf[i]||i,t.join(" ")},SM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Wr[a]&&(l=1,a=a==="transformOrigin"?pi:jt),Qs(n,a);l&&(Qs(n,jt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ca(n,1),o.uncache=1,Tp(i)))}},Bl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new di(e._pt,t,n,0,0,SM);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ra=[1,0,0,1,0,0],Cp={},Pp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zf=function(e){var t=mr(e,jt);return Pp(t)?Ra:t.substr(7).match(Od).map(an)},_h=function(e,t){var n=e._gsap||qs(e),i=e.style,s=Zf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ra:s):(s===Ra&&!e.offsetParent&&e!==Uo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Uo.appendChild(e)),s=Zf(e),l?i.display=l:Qs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Uo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hu=function(e,t,n,i,s,o){var a=e._gsap,l=s||_h(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],R=l[5],b=t.split(" "),M=parseFloat(b[0])||0,A=parseFloat(b[1])||0,D,C,L,x;n?l!==Ra&&(C=m*p-g*_)&&(L=M*(p/C)+A*(-_/C)+(_*R-p*d)/C,x=M*(-g/C)+A*(m/C)-(m*R-g*d)/C,M=L,A=x):(D=Ap(e),M=D.x+(~b[0].indexOf("%")?M/100*D.width:M),A=D.y+(~(b[1]||b[0]).indexOf("%")?A/100*D.height:A)),i||i!==!1&&a.smooth?(d=M-c,R=A-u,a.xOffset=h+(d*m+R*_)-d,a.yOffset=f+(d*g+R*p)-R):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[pi]="0px 0px",o&&(ls(o,a,"xOrigin",c,M),ls(o,a,"yOrigin",u,A),ls(o,a,"xOffset",h,a.xOffset),ls(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+A)},Ca=function(e,t){var n=e._gsap||new dp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=mr(e,pi)||"0",u,h,f,m,g,_,p,d,R,b,M,A,D,C,L,x,E,I,W,k,ee,ne,Z,ie,X,ue,_e,Re,Je,Mt,te,de;return u=h=f=_=p=d=R=b=M=0,m=g=1,n.svg=!!(e.getCTM&&Rp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[jt]!=="none"?l[jt]:"")),i.scale=i.rotate=i.translate="none"),C=_h(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",ie=""):ie=!t&&e.getAttribute("data-svg-origin"),Hu(e,ie||c,!!ie||n.originIsAbsolute,n.smooth!==!1,C)),A=n.xOrigin||0,D=n.yOrigin||0,C!==Ra&&(I=C[0],W=C[1],k=C[2],ee=C[3],u=ne=C[4],h=Z=C[5],C.length===6?(m=Math.sqrt(I*I+W*W),g=Math.sqrt(ee*ee+k*k),_=I||W?To(W,I)*Hs:0,R=k||ee?To(k,ee)*Hs+_:0,R&&(g*=Math.abs(Math.cos(R*Io))),n.svg&&(u-=A-(A*I+D*k),h-=D-(A*W+D*ee))):(de=C[6],Mt=C[7],_e=C[8],Re=C[9],Je=C[10],te=C[11],u=C[12],h=C[13],f=C[14],L=To(de,Je),p=L*Hs,L&&(x=Math.cos(-L),E=Math.sin(-L),ie=ne*x+_e*E,X=Z*x+Re*E,ue=de*x+Je*E,_e=ne*-E+_e*x,Re=Z*-E+Re*x,Je=de*-E+Je*x,te=Mt*-E+te*x,ne=ie,Z=X,de=ue),L=To(-k,Je),d=L*Hs,L&&(x=Math.cos(-L),E=Math.sin(-L),ie=I*x-_e*E,X=W*x-Re*E,ue=k*x-Je*E,te=ee*E+te*x,I=ie,W=X,k=ue),L=To(W,I),_=L*Hs,L&&(x=Math.cos(L),E=Math.sin(L),ie=I*x+W*E,X=ne*x+Z*E,W=W*x-I*E,Z=Z*x-ne*E,I=ie,ne=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=an(Math.sqrt(I*I+W*W+k*k)),g=an(Math.sqrt(Z*Z+de*de)),L=To(ne,Z),R=Math.abs(L)>2e-4?L*Hs:0,M=te?1/(te<0?-te:te):0),n.svg&&(ie=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Pp(mr(e,jt)),ie&&e.setAttribute("transform",ie))),Math.abs(R)>90&&Math.abs(R)<270&&(s?(m*=-1,R+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=an(m),n.scaleY=an(g),n.rotation=an(_)+a,n.rotationX=an(p)+a,n.rotationY=an(d)+a,n.skewX=R+a,n.skewY=b+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[pi]=zl(c)),n.xOffset=n.yOffset=0,n.force3D=Di.force3D,n.renderTransform=n.svg?EM:wp?Dp:MM,n.uncache=0,n},zl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oc=function(e,t,n){var i=Wn(t);return an(parseFloat(t)+parseFloat(ps(e,"x",n+"px",i)))+i},MM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dp(e,t)},Os="0deg",da="0px",Bs=") ",Dp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,R=n.target,b=n.zOrigin,M="",A=d==="auto"&&e&&e!==1||d===!0;if(b&&(h!==Os||u!==Os)){var D=parseFloat(u)*Io,C=Math.sin(D),L=Math.cos(D),x;D=parseFloat(h)*Io,x=Math.cos(D),o=Oc(R,o,C*x*-b),a=Oc(R,a,-Math.sin(D)*-b),l=Oc(R,l,L*x*-b+b)}p!==da&&(M+="perspective("+p+Bs),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||o!==da||a!==da||l!==da)&&(M+=l!==da||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Bs),c!==Os&&(M+="rotate("+c+Bs),u!==Os&&(M+="rotateY("+u+Bs),h!==Os&&(M+="rotateX("+h+Bs),(f!==Os||m!==Os)&&(M+="skew("+f+", "+m+Bs),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Bs),R.style[jt]=M||"translate(0, 0)"},EM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,R=n.forceCSS,b=parseFloat(o),M=parseFloat(a),A,D,C,L,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Io,c*=Io,A=Math.cos(l)*h,D=Math.sin(l)*h,C=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=Io,x=Math.tan(c-u),x=Math.sqrt(1+x*x),C*=x,L*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),A*=x,D*=x)),A=an(A),D=an(D),C=an(C),L=an(L)):(A=h,L=f,D=C=0),(b&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(b=ps(m,"x",o,"px"),M=ps(m,"y",a,"px")),(g||_||p||d)&&(b=an(b+g-(g*A+_*C)+p),M=an(M+_-(g*D+_*L)+d)),(i||s)&&(x=m.getBBox(),b=an(b+i/100*x.width),M=an(M+s/100*x.height)),x="matrix("+A+","+D+","+C+","+L+","+b+","+M+")",m.setAttribute("transform",x),R&&(m.style[jt]=x)},yM=function(e,t,n,i,s){var o=360,a=Pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Hs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*Wf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Wf)%o-~~(c/o)*o)),e._pt=f=new di(e._pt,t,n,i,c,oM),f.e=u,f.u="deg",e._props.push(n),f},jf=function(e,t){for(var n in t)e[n]=t[n];return e},TM=function(e,t,n){var i=jf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[jt]=t,a=Ca(n,1),Qs(n,jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[jt],o[jt]=t,a=Ca(n,1),o[jt]=c);for(l in Wr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=Wn(c),g=Wn(u),h=m!==g?ps(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new di(e._pt,a,l,h,f-h,Bu),e._pt.u=g||0,e._props.push(l));jf(a,i)};fi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Bl[e>1?"border"+r:r]=function(a,l,c,u,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return Ur(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,m,h)}});var Lp={name:"css",register:ku,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,m,g,_,p,d,R,b,M,A,D,C,L;dh||ku(),this.styles=this.styles||bp(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Ai[_]&&pp(_,t,n,i,e,s)))){if(m=typeof u,g=Bl[_],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=ba(u)),g)g(this,e,_,u,n)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",hs.lastIndex=0,hs.test(c)||(p=Wn(c),d=Wn(u)),d?p!==d&&(c=ps(e,_,c,d)+d):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Pn(c)&&~c.indexOf("random(")&&(c=ba(c)),Wn(c+"")||c==="auto"||(c+=Di.units[_]||Wn(Ur(e,_))||""),(c+"").charAt(1)==="="&&(c=Ur(e,_))):c=Ur(e,_),f=parseFloat(c),R=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),R&&(u=u.substr(2)),h=parseFloat(u),_ in fr&&(_==="autoAlpha"&&(f===1&&Ur(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,a.visibility),ls(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=fr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Wr,b){if(this.styles.save(_),M||(A=e._gsap,A.renderTransform&&!t.parseTransform||Ca(e,t.parseTransform),D=t.smoothOrigin!==!1&&A.smooth,M=this._pt=new di(this._pt,a,jt,0,1,A.renderTransform,A,0,-1),M.dep=1),_==="scale")this._pt=new di(this._pt,A,"scaleY",A.scaleY,(R?Lo(A.scaleY,R+h):h)-A.scaleY||0,Bu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(pi,0,a[pi]),u=xM(u),A.svg?Hu(e,u,0,D,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==A.zOrigin&&ls(this,A,"zOrigin",A.zOrigin,d),ls(this,a,_,zl(c),zl(u)));continue}else if(_==="svgOrigin"){Hu(e,u,1,D,0,this);continue}else if(_ in Cp){yM(this,A,_,f,R?Lo(f,R+u):u);continue}else if(_==="smoothOrigin"){ls(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){TM(this,u,e);continue}}else _ in a||(_=qo(_)||_);if(b||(h||h===0)&&(f||f===0)&&!sM.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),d=Wn(u)||(_ in Di.units?Di.units[_]:p),p!==d&&(f=ps(e,_,c,d)),this._pt=new di(this._pt,b?A:a,_,f,(R?Lo(f,R+h):h)-f,!b&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?lM:Bu),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=aM);else if(_ in a)vM.call(this,e,_,c,R?R+u:u);else if(_ in e)this.add(e,_,c||e[_],R?R+u:u,i,s);else if(_!=="parseTransform"){rh(_,u);continue}b||(_ in a?L.push(_,0,a[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),o.push(_)}}C&&Sp(this)},render:function(e,t){if(t.tween._time||!ph())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ur,aliases:fr,getSetter:function(e,t,n){var i=fr[t];return i&&i.indexOf(",")<0&&(t=i),t in Wr&&t!==pi&&(e._gsap.x||Ur(e,"x"))?n&&Gf===n?t==="scale"?fM:hM:(Gf=n||{})&&(t==="scale"?dM:pM):e.style&&!th(e.style[t])?cM:~t.indexOf("-")?uM:hh(e,t)},core:{_removeProperty:Qs,_getMatrix:_h}};mi.utils.checkPrefix=qo;mi.core.getStyleSaver=bp;(function(r,e,t,n){var i=fi(r+","+e+","+t,function(s){Wr[s]=1});fi(e,function(s){Di.units[s]="deg",Cp[s]=1}),fr[i[13]]=r+","+e,fi(n,function(s){var o=s.split(":");fr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Di.units[r]="px"});mi.registerPlugin(Lp);var gh=mi.registerPlugin(Lp)||mi;gh.core.Tween;var bM="1.3.4";function Up(r,e,t){return Math.max(r,Math.min(e,t))}function wM(r,e,t){return(1-t)*r+t*e}function AM(r,e,t,n){return wM(r,e,1-Math.exp(-t*n))}function RM(r,e){return(r%e+e)%e}var CM=class{constructor(){Oe(this,"isRunning",!1);Oe(this,"value",0);Oe(this,"from",0);Oe(this,"to",0);Oe(this,"currentTime",0);Oe(this,"lerp");Oe(this,"duration");Oe(this,"easing");Oe(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Up(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=AM(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function PM(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var DM=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Oe(this,"width",0);Oe(this,"height",0);Oe(this,"scrollHeight",0);Oe(this,"scrollWidth",0);Oe(this,"debouncedResize");Oe(this,"wrapperResizeObserver");Oe(this,"contentResizeObserver");Oe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Oe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Oe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=PM(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ip=class{constructor(){Oe(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},Jf=100/6,rs={passive:!1},LM=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Oe(this,"touchStart",{x:0,y:0});Oe(this,"lastDelta",{x:0,y:0});Oe(this,"window",{width:0,height:0});Oe(this,"emitter",new Ip);Oe(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Oe(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Oe(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Oe(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Jf:n===2?this.window.width:1,s=n===1?Jf:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Oe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,rs),this.element.addEventListener("touchstart",this.onTouchStart,rs),this.element.addEventListener("touchmove",this.onTouchMove,rs),this.element.addEventListener("touchend",this.onTouchEnd,rs)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,rs),this.element.removeEventListener("touchstart",this.onTouchStart,rs),this.element.removeEventListener("touchmove",this.onTouchMove,rs),this.element.removeEventListener("touchend",this.onTouchEnd,rs)}},Qf=r=>Math.min(1,1.001-Math.pow(2,-10*r)),UM=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:m=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:d,overscroll:R=!0,autoRaf:b=!1,anchors:M=!1,autoToggle:A=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:C=!1}={}){Oe(this,"_isScrolling",!1);Oe(this,"_isStopped",!1);Oe(this,"_isLocked",!1);Oe(this,"_preventNextNativeScrollEvent",!1);Oe(this,"_resetVelocityTimeout",null);Oe(this,"__rafID",null);Oe(this,"isTouching");Oe(this,"time",0);Oe(this,"userData",{});Oe(this,"lastVelocity",0);Oe(this,"velocity",0);Oe(this,"direction",0);Oe(this,"options");Oe(this,"targetScroll");Oe(this,"animatedScroll");Oe(this,"animate",new CM);Oe(this,"emitter",new Ip);Oe(this,"dimensions");Oe(this,"virtualScroll");Oe(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Oe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Oe(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}});Oe(this,"onClick",r=>{const t=r.composedPath().find(n=>{var i,s,o;return n instanceof HTMLAnchorElement&&(((i=n.getAttribute("href"))==null?void 0:i.startsWith("#"))||((s=n.getAttribute("href"))==null?void 0:s.startsWith("/#"))||((o=n.getAttribute("href"))==null?void 0:o.startsWith("./#")))});if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});Oe(this,"onPointerDown",r=>{r.button===1&&this.reset()});Oe(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>{var d,R,b;return p instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(p))||((d=p.hasAttribute)==null?void 0:d.call(p,"data-lenis-prevent"))||i&&((R=p.hasAttribute)==null?void 0:R.call(p,"data-lenis-prevent-touch"))||s&&((b=p.hasAttribute)==null?void 0:b.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const m=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(f)>5;_&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...m?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Oe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Oe(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=bM,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Qf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:m,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:d,overscroll:R,autoRaf:b,anchors:M,autoToggle:A,allowNestedScroll:D,__experimental__naiveDimensions:C},this.dimensions=new DM(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new LM(t,{touchMultiplier:m,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?f=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const m=f.getBoundingClientRect();r=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=Up(0,r,this.limit);if(r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=Qf:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(f,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),m||this.emit(),m&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,f;const m=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);i.computedStyle=A;const D=A.overflowX,C=A.overflowY;if(s=["auto","overlay","scroll"].includes(D),o=["auto","overlay","scroll"].includes(C),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||m==="vertical"&&!o||m==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||m==="vertical"&&(!o||!l)||m==="horizontal"&&(!s||!a))return!1;let g;if(m==="horizontal")g="x";else if(m==="vertical")g="y";else{const A=e!==0,D=t!==0;A&&s&&a&&(g="x"),D&&o&&l&&(g="y")}if(!g)return!1;let _,p,d,R,b;if(g==="x")_=r.scrollLeft,p=c-h,d=e,R=s,b=a;else if(g==="y")_=r.scrollTop,p=u-f,d=t,R=o,b=l;else return!1;return(d>0?_<p:_>0)&&R&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?RM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function IM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ga={exports:{}},NM=ga.exports,ed;function FM(){return ed||(ed=1,function(r,e){(function(t,n){n(e)})(NM,function(t){function n(H,v){for(var U=0;U<v.length;U++){var T=v[U];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(H,T.key,T)}}function i(H,v,U){return n(H.prototype,v),H}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var s,o,a,l,c,u,h,f,m,g,_,p,d,R=function(){return s||typeof window<"u"&&(s=window.gsap)&&s.registerPlugin&&s},b=1,M=[],A=[],D=[],C=Date.now,L=function(v,U){return U},x=function(){var v=m.core,U=v.bridge||{},T=v._scrollers,w=v._proxies;T.push.apply(T,A),w.push.apply(w,D),A=T,D=w,L=function(Q,Y){return U[Q](Y)}},E=function(v,U){return~D.indexOf(v)&&D[D.indexOf(v)+1][U]},I=function(v){return!!~g.indexOf(v)},W=function(v,U,T,w,B){return v.addEventListener(U,T,{passive:w!==!1,capture:!!B})},k=function(v,U,T,w){return v.removeEventListener(U,T,!!w)},ee="scrollLeft",ne="scrollTop",Z=function(){return _&&_.isPressed||A.cache++},ie=function(v,U){var T=function w(B){if(B||B===0){b&&(a.history.scrollRestoration="manual");var Q=_&&_.isPressed;B=w.v=Math.round(B)||(_&&_.iOS?1:0),v(B),w.cacheID=A.cache,Q&&L("ss",B)}else(U||A.cache!==w.cacheID||L("ref"))&&(w.cacheID=A.cache,w.v=v());return w.v+w.offset};return T.offset=0,v&&T},X={s:ee,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ie(function(H){return arguments.length?a.scrollTo(H,ue.sc()):a.pageXOffset||l[ee]||c[ee]||u[ee]||0})},ue={s:ne,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:X,sc:ie(function(H){return arguments.length?a.scrollTo(X.sc(),H):a.pageYOffset||l[ne]||c[ne]||u[ne]||0})},_e=function(v,U){return(U&&U._ctx&&U._ctx.selector||s.utils.toArray)(v)[0]||(typeof v=="string"&&s.config().nullTargetWarn!==!1?console.warn("Element not found:",v):null)},Re=function(v,U){var T=U.s,w=U.sc;I(v)&&(v=l.scrollingElement||c);var B=A.indexOf(v),Q=w===ue.sc?1:2;!~B&&(B=A.push(v)-1),A[B+Q]||W(v,"scroll",Z);var Y=A[B+Q],we=Y||(A[B+Q]=ie(E(v,T),!0)||(I(v)?w:ie(function(tt){return arguments.length?v[T]=tt:v[T]})));return we.target=v,Y||(we.smooth=s.getProperty(v,"scrollBehavior")==="smooth"),we},Je=function(v,U,T){var w=v,B=v,Q=C(),Y=Q,we=U||50,tt=Math.max(500,we*3),Lt=function(Ke,Jt){var Wt=C();Jt||Wt-Q>we?(B=w,w=Ke,Y=Q,Q=Wt):T?w+=Ke:w=B+(Ke-B)/(Wt-Y)*(Q-Y)},xt=function(){B=w=T?0:w,Y=Q=0},Ve=function(Ke){var Jt=Y,Wt=B,xn=C();return(Ke||Ke===0)&&Ke!==w&&Lt(Ke),Q===Y||xn-Y>tt?0:(w+(T?Wt:-Wt))/((T?xn:Q)-Jt)*1e3};return{update:Lt,reset:xt,getVelocity:Ve}},Mt=function(v,U){return U&&!v._gsapAllow&&v.preventDefault(),v.changedTouches?v.changedTouches[0]:v},te=function(v){var U=Math.max.apply(Math,v),T=Math.min.apply(Math,v);return Math.abs(U)>=Math.abs(T)?U:T},de=function(){m=s.core.globals().ScrollTrigger,m&&m.core&&x()},Ue=function(v){return s=v||R(),!o&&s&&typeof document<"u"&&document.body&&(a=window,l=document,c=l.documentElement,u=l.body,g=[a,l,c,u],s.utils.clamp,d=s.core.context||function(){},f="onpointerenter"in u?"pointer":"mouse",h=fe.isTouch=a.matchMedia&&a.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in a||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,p=fe.eventTypes=("ontouchstart"in c?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in c?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return b=0},500),de(),o=1),o};X.op=ue,A.cache=0;var fe=function(){function H(U){this.init(U)}var v=H.prototype;return v.init=function(T){o||Ue(s)||console.warn("Please gsap.registerPlugin(Observer)"),m||de();var w=T.tolerance,B=T.dragMinimum,Q=T.type,Y=T.target,we=T.lineHeight,tt=T.debounce,Lt=T.preventDefault,xt=T.onStop,Ve=T.onStopDelay,le=T.ignore,Ke=T.wheelSpeed,Jt=T.event,Wt=T.onDragStart,xn=T.onDragEnd,$t=T.onDrag,Un=T.onPress,ut=T.onRelease,Ni=T.onRight,Xt=T.onLeft,st=T.onUp,Kn=T.onDown,oi=T.onChangeX,He=T.onChangeY,wn=T.onChange,rt=T.onToggleX,xr=T.onToggleY,Sn=T.onHover,Zn=T.onHoverEnd,jn=T.onMove,kt=T.ignoreCheck,cn=T.isNormalizer,un=T.onGestureStart,G=T.onGestureEnd,Mn=T.onWheel,bs=T.onEnable,Yr=T.onDisable,Fi=T.onClick,Sr=T.scrollSpeed,Jn=T.capture,hn=T.allowClicks,Qn=T.lockAxis,Bn=T.onLockAxis;this.target=Y=_e(Y)||c,this.vars=T,le&&(le=s.utils.toArray(le)),w=w||1e-9,B=B||0,Ke=Ke||1,Sr=Sr||1,Q=Q||"wheel,touch,pointer",tt=tt!==!1,we||(we=parseFloat(a.getComputedStyle(u).lineHeight)||22);var qr,ei,ai,Rt,nn,li,Mi,j=this,Ei=0,Mr=0,$r=T.passive||!Lt&&T.passive!==!1,rn=Re(Y,X),Er=Re(Y,ue),Kr=rn(),ws=Er(),An=~Q.indexOf("touch")&&!~Q.indexOf("pointer")&&p[0]==="pointerdown",Zr=I(Y),sn=Y.ownerDocument||l,Gi=[0,0,0],Oi=[0,0,0],yr=0,ia=function(){return yr=C()},fn=function(et,Ut){return(j.event=et)&&le&&~le.indexOf(et.target)||Ut&&An&&et.pointerType!=="touch"||kt&&kt(et,Ut)},Ka=function(){j._vx.reset(),j._vy.reset(),ei.pause(),xt&&xt(j)},Tr=function(){var et=j.deltaX=te(Gi),Ut=j.deltaY=te(Oi),Te=Math.abs(et)>=w,at=Math.abs(Ut)>=w;wn&&(Te||at)&&wn(j,et,Ut,Gi,Oi),Te&&(Ni&&j.deltaX>0&&Ni(j),Xt&&j.deltaX<0&&Xt(j),oi&&oi(j),rt&&j.deltaX<0!=Ei<0&&rt(j),Ei=j.deltaX,Gi[0]=Gi[1]=Gi[2]=0),at&&(Kn&&j.deltaY>0&&Kn(j),st&&j.deltaY<0&&st(j),He&&He(j),xr&&j.deltaY<0!=Mr<0&&xr(j),Mr=j.deltaY,Oi[0]=Oi[1]=Oi[2]=0),(Rt||ai)&&(jn&&jn(j),ai&&(Wt&&ai===1&&Wt(j),$t&&$t(j),ai=0),Rt=!1),li&&!(li=!1)&&Bn&&Bn(j),nn&&(Mn(j),nn=!1),qr=0},oo=function(et,Ut,Te){Gi[Te]+=et,Oi[Te]+=Ut,j._vx.update(et),j._vy.update(Ut),tt?qr||(qr=requestAnimationFrame(Tr)):Tr()},ao=function(et,Ut){Qn&&!Mi&&(j.axis=Mi=Math.abs(et)>Math.abs(Ut)?"x":"y",li=!0),Mi!=="y"&&(Gi[2]+=et,j._vx.update(et,!0)),Mi!=="x"&&(Oi[2]+=Ut,j._vy.update(Ut,!0)),tt?qr||(qr=requestAnimationFrame(Tr)):Tr()},jr=function(et){if(!fn(et,1)){et=Mt(et,Lt);var Ut=et.clientX,Te=et.clientY,at=Ut-j.x,Ye=Te-j.y,lt=j.isDragging;j.x=Ut,j.y=Te,(lt||(at||Ye)&&(Math.abs(j.startX-Ut)>=B||Math.abs(j.startY-Te)>=B))&&(ai=lt?2:1,lt||(j.isDragging=!0),ao(at,Ye))}},As=j.onPress=function(ct){fn(ct,1)||ct&&ct.button||(j.axis=Mi=null,ei.pause(),j.isPressed=!0,ct=Mt(ct),Ei=Mr=0,j.startX=j.x=ct.clientX,j.startY=j.y=ct.clientY,j._vx.reset(),j._vy.reset(),W(cn?Y:sn,p[1],jr,$r,!0),j.deltaX=j.deltaY=0,Un&&Un(j))},St=j.onRelease=function(ct){if(!fn(ct,1)){k(cn?Y:sn,p[1],jr,!0);var et=!isNaN(j.y-j.startY),Ut=j.isDragging,Te=Ut&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),at=Mt(ct);!Te&&et&&(j._vx.reset(),j._vy.reset(),Lt&&hn&&s.delayedCall(.08,function(){if(C()-yr>300&&!ct.defaultPrevented){if(ct.target.click)ct.target.click();else if(sn.createEvent){var Ye=sn.createEvent("MouseEvents");Ye.initMouseEvent("click",!0,!0,a,1,at.screenX,at.screenY,at.clientX,at.clientY,!1,!1,!1,!1,0,null),ct.target.dispatchEvent(Ye)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,xt&&Ut&&!cn&&ei.restart(!0),ai&&Tr(),xn&&Ut&&xn(j),ut&&ut(j,Te)}},Rs=function(et){return et.touches&&et.touches.length>1&&(j.isGesturing=!0)&&un(et,j.isDragging)},Wi=function(){return(j.isGesturing=!1)||G(j)},Xi=function(et){if(!fn(et)){var Ut=rn(),Te=Er();oo((Ut-Kr)*Sr,(Te-ws)*Sr,1),Kr=Ut,ws=Te,xt&&ei.restart(!0)}},Yi=function(et){if(!fn(et)){et=Mt(et,Lt),Mn&&(nn=!0);var Ut=(et.deltaMode===1?we:et.deltaMode===2?a.innerHeight:1)*Ke;oo(et.deltaX*Ut,et.deltaY*Ut,0),xt&&!cn&&ei.restart(!0)}},Cs=function(et){if(!fn(et)){var Ut=et.clientX,Te=et.clientY,at=Ut-j.x,Ye=Te-j.y;j.x=Ut,j.y=Te,Rt=!0,xt&&ei.restart(!0),(at||Ye)&&ao(at,Ye)}},lo=function(et){j.event=et,Sn(j)},br=function(et){j.event=et,Zn(j)},ra=function(et){return fn(et)||Mt(et,Lt)&&Fi(j)};ei=j._dc=s.delayedCall(Ve||.25,Ka).pause(),j.deltaX=j.deltaY=0,j._vx=Je(0,50,!0),j._vy=Je(0,50,!0),j.scrollX=rn,j.scrollY=Er,j.isDragging=j.isGesturing=j.isPressed=!1,d(this),j.enable=function(ct){return j.isEnabled||(W(Zr?sn:Y,"scroll",Z),Q.indexOf("scroll")>=0&&W(Zr?sn:Y,"scroll",Xi,$r,Jn),Q.indexOf("wheel")>=0&&W(Y,"wheel",Yi,$r,Jn),(Q.indexOf("touch")>=0&&h||Q.indexOf("pointer")>=0)&&(W(Y,p[0],As,$r,Jn),W(sn,p[2],St),W(sn,p[3],St),hn&&W(Y,"click",ia,!0,!0),Fi&&W(Y,"click",ra),un&&W(sn,"gesturestart",Rs),G&&W(sn,"gestureend",Wi),Sn&&W(Y,f+"enter",lo),Zn&&W(Y,f+"leave",br),jn&&W(Y,f+"move",Cs)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Rt=ai=!1,j._vx.reset(),j._vy.reset(),Kr=rn(),ws=Er(),ct&&ct.type&&As(ct),bs&&bs(j)),j},j.disable=function(){j.isEnabled&&(M.filter(function(ct){return ct!==j&&I(ct.target)}).length||k(Zr?sn:Y,"scroll",Z),j.isPressed&&(j._vx.reset(),j._vy.reset(),k(cn?Y:sn,p[1],jr,!0)),k(Zr?sn:Y,"scroll",Xi,Jn),k(Y,"wheel",Yi,Jn),k(Y,p[0],As,Jn),k(sn,p[2],St),k(sn,p[3],St),k(Y,"click",ia,!0),k(Y,"click",ra),k(sn,"gesturestart",Rs),k(sn,"gestureend",Wi),k(Y,f+"enter",lo),k(Y,f+"leave",br),k(Y,f+"move",Cs),j.isEnabled=j.isPressed=j.isDragging=!1,Yr&&Yr(j))},j.kill=j.revert=function(){j.disable();var ct=M.indexOf(j);ct>=0&&M.splice(ct,1),_===j&&(_=0)},M.push(j),cn&&I(Y)&&(_=j),j.enable(Jt)},i(H,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),H}();fe.version="3.12.7",fe.create=function(H){return new fe(H)},fe.register=Ue,fe.getAll=function(){return M.slice()},fe.getById=function(H){return M.filter(function(v){return v.vars.id===H})[0]},R()&&s.registerPlugin(fe);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var se,qe,ve,Ze,nt,Ge,N,Dn,dt,pt,Ie,It,be,P,S,V,ae,ce,re,Ne,Se,Ce,Qe,pe,De,We,Be,Pe,gt,it,Nt,F,xe,J,oe=1,me=Date.now,Ee=me(),ze=0,Ft=0,gn=function(v,U,T){var w=qn(v)&&(v.substr(0,6)==="clamp("||v.indexOf("max")>-1);return T["_"+U+"Clamp"]=w,w?v.substr(6,v.length-7):v},Ct=function(v,U){return U&&(!qn(v)||v.substr(0,6)!=="clamp(")?"clamp("+v+")":v},_i=function H(){return Ft&&requestAnimationFrame(H)},Ii=function(){return P=1},jo=function(){return P=0},gi=function(v){return v},vi=function(v){return Math.round(v*1e5)/1e5||0},to=function(){return typeof window<"u"},Jo=function(){return se||to()&&(se=window.gsap)&&se.registerPlugin&&se},ir=function(v){return!!~N.indexOf(v)},gs=function(v){return(v==="Height"?Nt:ve["inner"+v])||nt["client"+v]||Ge["client"+v]},Qo=function(v){return E(v,"getBoundingClientRect")||(ir(v)?function(){return Ya.width=ve.innerWidth,Ya.height=Nt,Ya}:function(){return tn(v)})},no=function(v,U,T){var w=T.d,B=T.d2,Q=T.a;return(Q=E(v,"getBoundingClientRect"))?function(){return Q()[w]}:function(){return(U?gs(B):v["client"+B])||0}},Oa=function(v,U){return!U||~D.indexOf(v)?Qo(v):function(){return Ya}},xi=function(v,U){var T=U.s,w=U.d2,B=U.d,Q=U.a;return Math.max(0,(T="scroll"+w)&&(Q=E(v,T))?Q()-Qo(v)()[B]:ir(v)?(nt[T]||Ge[T])-gs(w):v[T]-v["offset"+w])},io=function(v,U){for(var T=0;T<re.length;T+=3)(!U||~U.indexOf(re[T+1]))&&v(re[T],re[T+1],re[T+2])},qn=function(v){return typeof v=="string"},bn=function(v){return typeof v=="function"},vs=function(v){return typeof v=="number"},gr=function(v){return typeof v=="object"},xs=function(v,U,T){return v&&v.progress(U?0:1)&&T&&v.pause()},y=function(v,U){if(v.enabled){var T=v._ctx?v._ctx.add(function(){return U(v)}):U(v);T&&T.totalTime&&(v.callbackAnimation=T)}},O=Math.abs,q="left",$="top",z="right",he="bottom",ge="width",ye="height",Ae="Right",$e="Left",je="Top",Fe="Bottom",ke="padding",ot="margin",zt="Width",Gt="Height",Xe="px",Le=function(v){return ve.getComputedStyle(v)},vn=function(v){var U=Le(v).position;v.style.position=U==="absolute"||U==="fixed"?U:"relative"},wt=function(v,U){for(var T in U)T in v||(v[T]=U[T]);return v},tn=function(v,U){var T=U&&Le(v)[S]!=="matrix(1, 0, 0, 1, 0, 0)"&&se.to(v,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),w=v.getBoundingClientRect();return T&&T.progress(0).kill(),w},Vi=function(v,U){var T=U.d2;return v["offset"+T]||v["client"+T]||0},On=function(v){var U=[],T=v.labels,w=v.duration(),B;for(B in T)U.push(T[B]/w);return U},Ss=function(v){return function(U){return se.utils.snap(On(v),U)}},Ot=function(v){var U=se.utils.snap(v),T=Array.isArray(v)&&v.slice(0).sort(function(w,B){return w-B});return T?function(w,B,Q){Q===void 0&&(Q=.001);var Y;if(!B)return U(w);if(B>0){for(w-=Q,Y=0;Y<T.length;Y++)if(T[Y]>=w)return T[Y];return T[Y-1]}else for(Y=T.length,w+=Q;Y--;)if(T[Y]<=w)return T[Y];return T[0]}:function(w,B,Q){Q===void 0&&(Q=.001);var Y=U(w);return!B||Math.abs(Y-w)<Q||Y-w<0==B<0?Y:U(B<0?w-v:w+v)}},si=function(v){return function(U,T){return Ot(On(v))(U,T.direction)}},Ln=function(v,U,T,w){return T.split(",").forEach(function(B){return v(U,B,w)})},bt=function(v,U,T,w,B){return v.addEventListener(U,T,{passive:!w,capture:!!B})},At=function(v,U,T,w){return v.removeEventListener(U,T,!!w)},Xr=function(v,U,T){T=T&&T.wheelHandler,T&&(v(U,"wheel",T),v(U,"touchmove",T))},rr={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ba={toggleActions:"play",anticipatePin:0},za={top:0,left:0,center:.5,bottom:1,right:1},ka=function(v,U){if(qn(v)){var T=v.indexOf("="),w=~T?+(v.charAt(T-1)+1)*parseFloat(v.substr(T+1)):0;~T&&(v.indexOf("%")>T&&(w*=U/100),v=v.substr(0,T-1)),v=w+(v in za?za[v]*U:~v.indexOf("%")?parseFloat(v)*U/100:parseFloat(v)||0)}return v},Ha=function(v,U,T,w,B,Q,Y,we){var tt=B.startColor,Lt=B.endColor,xt=B.fontSize,Ve=B.indent,le=B.fontWeight,Ke=Ze.createElement("div"),Jt=ir(T)||E(T,"pinType")==="fixed",Wt=v.indexOf("scroller")!==-1,xn=Jt?Ge:T,$t=v.indexOf("start")!==-1,Un=$t?tt:Lt,ut="border-color:"+Un+";font-size:"+xt+";color:"+Un+";font-weight:"+le+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return ut+="position:"+((Wt||we)&&Jt?"fixed;":"absolute;"),(Wt||we||!Jt)&&(ut+=(w===ue?z:he)+":"+(Q+parseFloat(Ve))+"px;"),Y&&(ut+="box-sizing:border-box;text-align:left;width:"+Y.offsetWidth+"px;"),Ke._isStart=$t,Ke.setAttribute("class","gsap-marker-"+v+(U?" marker-"+U:"")),Ke.style.cssText=ut,Ke.innerText=U||U===0?v+"-"+U:v,xn.children[0]?xn.insertBefore(Ke,xn.children[0]):xn.appendChild(Ke),Ke._offset=Ke["offset"+w.op.d2],Va(Ke,0,w,$t),Ke},Va=function(v,U,T,w){var B={display:"block"},Q=T[w?"os2":"p2"],Y=T[w?"p2":"os2"];v._isFlipped=w,B[T.a+"Percent"]=w?-100:0,B[T.a]=w?"1px":0,B["border"+Q+zt]=1,B["border"+Y+zt]=0,B[T.p]=U+"px",se.set(v,B)},_t=[],Yl={},ea,Eh=function(){return me()-ze>34&&(ea||(ea=requestAnimationFrame(vr)))},ro=function(){(!Qe||!Qe.isPressed||Qe.startX>Ge.clientWidth)&&(A.cache++,Qe?ea||(ea=requestAnimationFrame(vr)):vr(),ze||Es("scrollStart"),ze=me())},ql=function(){We=ve.innerWidth,De=ve.innerHeight},ta=function(v){A.cache++,(v===!0||!be&&!Ce&&!Ze.fullscreenElement&&!Ze.webkitFullscreenElement&&(!pe||We!==ve.innerWidth||Math.abs(ve.innerHeight-De)>ve.innerHeight*.25))&&Dn.restart(!0)},Ms={},Gp=[],yh=function H(){return At(vt,"scrollEnd",H)||Ts(!0)},Es=function(v){return Ms[v]&&Ms[v].map(function(U){return U()})||Gp},Si=[],Th=function(v){for(var U=0;U<Si.length;U+=5)(!v||Si[U+4]&&Si[U+4].query===v)&&(Si[U].style.cssText=Si[U+1],Si[U].getBBox&&Si[U].setAttribute("transform",Si[U+2]||""),Si[U+3].uncache=1)},$l=function(v,U){var T;for(V=0;V<_t.length;V++)T=_t[V],T&&(!U||T._ctx===U)&&(v?T.kill(1):T.revert(!0,!0));F=!0,U&&Th(U),U||Es("revert")},bh=function(v,U){A.cache++,(U||!$n)&&A.forEach(function(T){return bn(T)&&T.cacheID++&&(T.rec=0)}),qn(v)&&(ve.history.scrollRestoration=gt=v)},$n,ys=0,wh,Wp=function(){if(wh!==ys){var v=wh=ys;requestAnimationFrame(function(){return v===ys&&Ts(!0)})}},Ah=function(){Ge.appendChild(it),Nt=!Qe&&it.offsetHeight||ve.innerHeight,Ge.removeChild(it)},Rh=function(v){return dt(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(U){return U.style.display=v?"none":"block"})},Ts=function(v,U){if(nt=Ze.documentElement,Ge=Ze.body,N=[ve,Ze,nt,Ge],ze&&!v&&!F){bt(vt,"scrollEnd",yh);return}Ah(),$n=vt.isRefreshing=!0,A.forEach(function(w){return bn(w)&&++w.cacheID&&(w.rec=w())});var T=Es("refreshInit");Ne&&vt.sort(),U||$l(),A.forEach(function(w){bn(w)&&(w.smooth&&(w.target.style.scrollBehavior="auto"),w(0))}),_t.slice(0).forEach(function(w){return w.refresh()}),F=!1,_t.forEach(function(w){if(w._subPinOffset&&w.pin){var B=w.vars.horizontal?"offsetWidth":"offsetHeight",Q=w.pin[B];w.revert(!0,1),w.adjustPinSpacing(w.pin[B]-Q),w.refresh()}}),xe=1,Rh(!0),_t.forEach(function(w){var B=xi(w.scroller,w._dir),Q=w.vars.end==="max"||w._endClamp&&w.end>B,Y=w._startClamp&&w.start>=B;(Q||Y)&&w.setPositions(Y?B-1:w.start,Q?Math.max(Y?B:w.start+1,B):w.end,!0)}),Rh(!1),xe=0,T.forEach(function(w){return w&&w.render&&w.render(-1)}),A.forEach(function(w){bn(w)&&(w.smooth&&requestAnimationFrame(function(){return w.target.style.scrollBehavior="smooth"}),w.rec&&w(w.rec))}),bh(gt,1),Dn.pause(),ys++,$n=2,vr(2),_t.forEach(function(w){return bn(w.vars.onRefresh)&&w.vars.onRefresh(w)}),$n=vt.isRefreshing=!1,Es("refresh")},Kl=0,Ga=1,na,vr=function(v){if(v===2||!$n&&!F){vt.isUpdating=!0,na&&na.update(0);var U=_t.length,T=me(),w=T-Ee>=50,B=U&&_t[0].scroll();if(Ga=Kl>B?-1:1,$n||(Kl=B),w&&(ze&&!P&&T-ze>200&&(ze=0,Es("scrollEnd")),Ie=Ee,Ee=T),Ga<0){for(V=U;V-- >0;)_t[V]&&_t[V].update(0,w);Ga=1}else for(V=0;V<U;V++)_t[V]&&_t[V].update(0,w);vt.isUpdating=!1}ea=0},Zl=[q,$,he,z,ot+Fe,ot+Ae,ot+je,ot+$e,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wa=Zl.concat([ge,ye,"boxSizing","max"+zt,"max"+Gt,"position",ot,ke,ke+je,ke+Ae,ke+Fe,ke+$e]),Xp=function(v,U,T){so(T);var w=v._gsap;if(w.spacerIsNative)so(w.spacerState);else if(v._gsap.swappedIn){var B=U.parentNode;B&&(B.insertBefore(v,U),B.removeChild(U))}v._gsap.swappedIn=!1},jl=function(v,U,T,w){if(!v._gsap.swappedIn){for(var B=Zl.length,Q=U.style,Y=v.style,we;B--;)we=Zl[B],Q[we]=T[we];Q.position=T.position==="absolute"?"absolute":"relative",T.display==="inline"&&(Q.display="inline-block"),Y[he]=Y[z]="auto",Q.flexBasis=T.flexBasis||"auto",Q.overflow="visible",Q.boxSizing="border-box",Q[ge]=Vi(v,X)+Xe,Q[ye]=Vi(v,ue)+Xe,Q[ke]=Y[ot]=Y[$]=Y[q]="0",so(w),Y[ge]=Y["max"+zt]=T[ge],Y[ye]=Y["max"+Gt]=T[ye],Y[ke]=T[ke],v.parentNode!==U&&(v.parentNode.insertBefore(U,v),U.appendChild(v)),v._gsap.swappedIn=!0}},Yp=/([A-Z])/g,so=function(v){if(v){var U=v.t.style,T=v.length,w=0,B,Q;for((v.t._gsap||se.core.getCache(v.t)).uncache=1;w<T;w+=2)Q=v[w+1],B=v[w],Q?U[B]=Q:U[B]&&U.removeProperty(B.replace(Yp,"-$1").toLowerCase())}},Xa=function(v){for(var U=Wa.length,T=v.style,w=[],B=0;B<U;B++)w.push(Wa[B],T[Wa[B]]);return w.t=v,w},qp=function(v,U,T){for(var w=[],B=v.length,Q=T?8:0,Y;Q<B;Q+=2)Y=v[Q],w.push(Y,Y in U?U[Y]:v[Q+1]);return w.t=v.t,w},Ya={left:0,top:0},Ch=function(v,U,T,w,B,Q,Y,we,tt,Lt,xt,Ve,le,Ke){bn(v)&&(v=v(we)),qn(v)&&v.substr(0,3)==="max"&&(v=Ve+(v.charAt(4)==="="?ka("0"+v.substr(3),T):0));var Jt=le?le.time():0,Wt,xn,$t;if(le&&le.seek(0),isNaN(v)||(v=+v),vs(v))le&&(v=se.utils.mapRange(le.scrollTrigger.start,le.scrollTrigger.end,0,Ve,v)),Y&&Va(Y,T,w,!0);else{bn(U)&&(U=U(we));var Un=(v||"0").split(" "),ut,Ni,Xt,st;$t=_e(U,we)||Ge,ut=tn($t)||{},(!ut||!ut.left&&!ut.top)&&Le($t).display==="none"&&(st=$t.style.display,$t.style.display="block",ut=tn($t),st?$t.style.display=st:$t.style.removeProperty("display")),Ni=ka(Un[0],ut[w.d]),Xt=ka(Un[1]||"0",T),v=ut[w.p]-tt[w.p]-Lt+Ni+B-Xt,Y&&Va(Y,Xt,w,T-Xt<20||Y._isStart&&Xt>20),T-=T-Xt}if(Ke&&(we[Ke]=v||-.001,v<0&&(v=0)),Q){var Kn=v+T,oi=Q._isStart;Wt="scroll"+w.d2,Va(Q,Kn,w,oi&&Kn>20||!oi&&(xt?Math.max(Ge[Wt],nt[Wt]):Q.parentNode[Wt])<=Kn+1),xt&&(tt=tn(Y),xt&&(Q.style[w.op.p]=tt[w.op.p]-w.op.m-Q._offset+Xe))}return le&&$t&&(Wt=tn($t),le.seek(Ve),xn=tn($t),le._caScrollDist=Wt[w.p]-xn[w.p],v=v/le._caScrollDist*Ve),le&&le.seek(Jt),le?v:Math.round(v)},$p=/(webkit|moz|length|cssText|inset)/i,Ph=function(v,U,T,w){if(v.parentNode!==U){var B=v.style,Q,Y;if(U===Ge){v._stOrig=B.cssText,Y=Le(v);for(Q in Y)!+Q&&!$p.test(Q)&&Y[Q]&&typeof B[Q]=="string"&&Q!=="0"&&(B[Q]=Y[Q]);B.top=T,B.left=w}else B.cssText=v._stOrig;se.core.getCache(v).uncache=1,U.appendChild(v)}},Dh=function(v,U,T){var w=U,B=w;return function(Q){var Y=Math.round(v());return Y!==w&&Y!==B&&Math.abs(Y-w)>3&&Math.abs(Y-B)>3&&(Q=Y,T&&T()),B=w,w=Math.round(Q),w}},qa=function(v,U,T){var w={};w[U.p]="+="+T,se.set(v,w)},Lh=function(v,U){var T=Re(v,U),w="_scroll"+U.p2,B=function Q(Y,we,tt,Lt,xt){var Ve=Q.tween,le=we.onComplete,Ke={};tt=tt||T();var Jt=Dh(T,tt,function(){Ve.kill(),Q.tween=0});return xt=Lt&&xt||0,Lt=Lt||Y-tt,Ve&&Ve.kill(),we[w]=Y,we.inherit=!1,we.modifiers=Ke,Ke[w]=function(){return Jt(tt+Lt*Ve.ratio+xt*Ve.ratio*Ve.ratio)},we.onUpdate=function(){A.cache++,Q.tween&&vr()},we.onComplete=function(){Q.tween=0,le&&le.call(Ve)},Ve=Q.tween=se.to(v,we),Ve};return v[w]=T,T.wheelHandler=function(){return B.tween&&B.tween.kill()&&(B.tween=0)},bt(v,"wheel",T.wheelHandler),vt.isTouch&&bt(v,"touchmove",T.wheelHandler),B},vt=function(){function H(U,T){qe||H.register(se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Pe(this),this.init(U,T)}var v=H.prototype;return v.init=function(T,w){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ft){this.update=this.refresh=this.kill=gi;return}T=wt(qn(T)||vs(T)||T.nodeType?{trigger:T}:T,Ba);var B=T,Q=B.onUpdate,Y=B.toggleClass,we=B.id,tt=B.onToggle,Lt=B.onRefresh,xt=B.scrub,Ve=B.trigger,le=B.pin,Ke=B.pinSpacing,Jt=B.invalidateOnRefresh,Wt=B.anticipatePin,xn=B.onScrubComplete,$t=B.onSnapComplete,Un=B.once,ut=B.snap,Ni=B.pinReparent,Xt=B.pinSpacer,st=B.containerAnimation,Kn=B.fastScrollEnd,oi=B.preventOverlaps,He=T.horizontal||T.containerAnimation&&T.horizontal!==!1?X:ue,wn=!xt&&xt!==0,rt=_e(T.scroller||ve),xr=se.core.getCache(rt),Sn=ir(rt),Zn=("pinType"in T?T.pinType:E(rt,"pinType")||Sn&&"fixed")==="fixed",jn=[T.onEnter,T.onLeave,T.onEnterBack,T.onLeaveBack],kt=wn&&T.toggleActions.split(" "),cn="markers"in T?T.markers:Ba.markers,un=Sn?0:parseFloat(Le(rt)["border"+He.p2+zt])||0,G=this,Mn=T.onRefreshInit&&function(){return T.onRefreshInit(G)},bs=no(rt,Sn,He),Yr=Oa(rt,Sn),Fi=0,Sr=0,Jn=0,hn=Re(rt,He),Qn,Bn,qr,ei,ai,Rt,nn,li,Mi,j,Ei,Mr,$r,rn,Er,Kr,ws,An,Zr,sn,Gi,Oi,yr,ia,fn,Ka,Tr,oo,ao,jr,As,St,Rs,Wi,Xi,Yi,Cs,lo,br;if(G._startClamp=G._endClamp=!1,G._dir=He,Wt*=45,G.scroller=rt,G.scroll=st?st.time.bind(st):hn,ei=hn(),G.vars=T,w=w||T.animation,"refreshPriority"in T&&(Ne=1,T.refreshPriority===-9999&&(na=G)),xr.tweenScroll=xr.tweenScroll||{top:Lh(rt,ue),left:Lh(rt,X)},G.tweenTo=Qn=xr.tweenScroll[He.p],G.scrubDuration=function(Te){Rs=vs(Te)&&Te,Rs?St?St.duration(Te):St=se.to(w,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Rs,paused:!0,onComplete:function(){return xn&&xn(G)}}):(St&&St.progress(1).kill(),St=0)},w&&(w.vars.lazy=!1,w._initted&&!G.isReverted||w.vars.immediateRender!==!1&&T.immediateRender!==!1&&w.duration()&&w.render(0,!0,!0),G.animation=w.pause(),w.scrollTrigger=G,G.scrubDuration(xt),jr=0,we||(we=w.vars.id)),ut&&((!gr(ut)||ut.push)&&(ut={snapTo:ut}),"scrollBehavior"in Ge.style&&se.set(Sn?[Ge,nt]:rt,{scrollBehavior:"auto"}),A.forEach(function(Te){return bn(Te)&&Te.target===(Sn?Ze.scrollingElement||nt:rt)&&(Te.smooth=!1)}),qr=bn(ut.snapTo)?ut.snapTo:ut.snapTo==="labels"?Ss(w):ut.snapTo==="labelsDirectional"?si(w):ut.directional!==!1?function(Te,at){return Ot(ut.snapTo)(Te,me()-Sr<500?0:at.direction)}:se.utils.snap(ut.snapTo),Wi=ut.duration||{min:.1,max:2},Wi=gr(Wi)?pt(Wi.min,Wi.max):pt(Wi,Wi),Xi=se.delayedCall(ut.delay||Rs/2||.1,function(){var Te=hn(),at=me()-Sr<500,Ye=Qn.tween;if((at||Math.abs(G.getVelocity())<10)&&!Ye&&!P&&Fi!==Te){var lt=(Te-Rt)/rn,Rn=w&&!wn?w.totalProgress():lt,Et=at?0:(Rn-As)/(me()-Ie)*1e3||0,on=se.utils.clamp(-lt,1-lt,O(Et/2)*Et/.185),zn=lt+(ut.inertia===!1?0:on),Qt,Yt,Ht=ut,qi=Ht.onStart,Kt=Ht.onInterrupt,yi=Ht.onComplete;if(Qt=qr(zn,G),vs(Qt)||(Qt=zn),Yt=Math.max(0,Math.round(Rt+Qt*rn)),Te<=nn&&Te>=Rt&&Yt!==Te){if(Ye&&!Ye._initted&&Ye.data<=O(Yt-Te))return;ut.inertia===!1&&(on=Qt-lt),Qn(Yt,{duration:Wi(O(Math.max(O(zn-Rn),O(Qt-Rn))*.185/Et/.05||0)),ease:ut.ease||"power3",data:O(Yt-Te),onInterrupt:function(){return Xi.restart(!0)&&Kt&&Kt(G)},onComplete:function(){G.update(),Fi=hn(),w&&!wn&&(St?St.resetTo("totalProgress",Qt,w._tTime/w._tDur):w.progress(Qt)),jr=As=w&&!wn?w.totalProgress():G.progress,$t&&$t(G),yi&&yi(G)}},Te,on*rn,Yt-Te-on*rn),qi&&qi(G,Qn.tween)}}else G.isActive&&Fi!==Te&&Xi.restart(!0)}).pause()),we&&(Yl[we]=G),Ve=G.trigger=_e(Ve||le!==!0&&le),br=Ve&&Ve._gsap&&Ve._gsap.stRevert,br&&(br=br(G)),le=le===!0?Ve:_e(le),qn(Y)&&(Y={targets:Ve,className:Y}),le&&(Ke===!1||Ke===ot||(Ke=!Ke&&le.parentNode&&le.parentNode.style&&Le(le.parentNode).display==="flex"?!1:ke),G.pin=le,Bn=se.core.getCache(le),Bn.spacer?Er=Bn.pinState:(Xt&&(Xt=_e(Xt),Xt&&!Xt.nodeType&&(Xt=Xt.current||Xt.nativeElement),Bn.spacerIsNative=!!Xt,Xt&&(Bn.spacerState=Xa(Xt))),Bn.spacer=An=Xt||Ze.createElement("div"),An.classList.add("pin-spacer"),we&&An.classList.add("pin-spacer-"+we),Bn.pinState=Er=Xa(le)),T.force3D!==!1&&se.set(le,{force3D:!0}),G.spacer=An=Bn.spacer,ao=Le(le),ia=ao[Ke+He.os2],sn=se.getProperty(le),Gi=se.quickSetter(le,He.a,Xe),jl(le,An,ao),ws=Xa(le)),cn){Mr=gr(cn)?wt(cn,rr):rr,j=Ha("scroller-start",we,rt,He,Mr,0),Ei=Ha("scroller-end",we,rt,He,Mr,0,j),Zr=j["offset"+He.op.d2];var ra=_e(E(rt,"content")||rt);li=this.markerStart=Ha("start",we,ra,He,Mr,Zr,0,st),Mi=this.markerEnd=Ha("end",we,ra,He,Mr,Zr,0,st),st&&(lo=se.quickSetter([li,Mi],He.a,Xe)),!Zn&&!(D.length&&E(rt,"fixedMarkers")===!0)&&(vn(Sn?Ge:rt),se.set([j,Ei],{force3D:!0}),Ka=se.quickSetter(j,He.a,Xe),oo=se.quickSetter(Ei,He.a,Xe))}if(st){var ct=st.vars.onUpdate,et=st.vars.onUpdateParams;st.eventCallback("onUpdate",function(){G.update(0,0,1),ct&&ct.apply(st,et||[])})}if(G.previous=function(){return _t[_t.indexOf(G)-1]},G.next=function(){return _t[_t.indexOf(G)+1]},G.revert=function(Te,at){if(!at)return G.kill(!0);var Ye=Te!==!1||!G.enabled,lt=be;Ye!==G.isReverted&&(Ye&&(Yi=Math.max(hn(),G.scroll.rec||0),Jn=G.progress,Cs=w&&w.progress()),li&&[li,Mi,j,Ei].forEach(function(Rn){return Rn.style.display=Ye?"none":"block"}),Ye&&(be=G,G.update(Ye)),le&&(!Ni||!G.isActive)&&(Ye?Xp(le,An,Er):jl(le,An,Le(le),fn)),Ye||G.update(Ye),be=lt,G.isReverted=Ye)},G.refresh=function(Te,at,Ye,lt){if(!((be||!G.enabled)&&!at)){if(le&&Te&&ze){bt(H,"scrollEnd",yh);return}!$n&&Mn&&Mn(G),be=G,Qn.tween&&!Ye&&(Qn.tween.kill(),Qn.tween=0),St&&St.pause(),Jt&&w&&w.revert({kill:!1}).invalidate(),G.isReverted||G.revert(!0,!0),G._subPinOffset=!1;var Rn=bs(),Et=Yr(),on=st?st.duration():xi(rt,He),zn=rn<=.01,Qt=0,Yt=lt||0,Ht=gr(Ye)?Ye.end:T.end,qi=T.endTrigger||Ve,Kt=gr(Ye)?Ye.start:T.start||(T.start===0||!Ve?0:le?"0 0":"0 100%"),yi=G.pinnedContainer=T.pinnedContainer&&_e(T.pinnedContainer,G),sr=Ve&&Math.max(0,_t.indexOf(G))||0,In=sr,Nn,kn,Ps,Za,Hn,En,or,Ql,Oh,sa,ar,oa,ja;for(cn&&gr(Ye)&&(oa=se.getProperty(j,He.p),ja=se.getProperty(Ei,He.p));In-- >0;)En=_t[In],En.end||En.refresh(0,1)||(be=G),or=En.pin,or&&(or===Ve||or===le||or===yi)&&!En.isReverted&&(sa||(sa=[]),sa.unshift(En),En.revert(!0,!0)),En!==_t[In]&&(sr--,In--);for(bn(Kt)&&(Kt=Kt(G)),Kt=gn(Kt,"start",G),Rt=Ch(Kt,Ve,Rn,He,hn(),li,j,G,Et,un,Zn,on,st,G._startClamp&&"_startClamp")||(le?-.001:0),bn(Ht)&&(Ht=Ht(G)),qn(Ht)&&!Ht.indexOf("+=")&&(~Ht.indexOf(" ")?Ht=(qn(Kt)?Kt.split(" ")[0]:"")+Ht:(Qt=ka(Ht.substr(2),Rn),Ht=qn(Kt)?Kt:(st?se.utils.mapRange(0,st.duration(),st.scrollTrigger.start,st.scrollTrigger.end,Rt):Rt)+Qt,qi=Ve)),Ht=gn(Ht,"end",G),nn=Math.max(Rt,Ch(Ht||(qi?"100% 0":on),qi,Rn,He,hn()+Qt,Mi,Ei,G,Et,un,Zn,on,st,G._endClamp&&"_endClamp"))||-.001,Qt=0,In=sr;In--;)En=_t[In],or=En.pin,or&&En.start-En._pinPush<=Rt&&!st&&En.end>0&&(Nn=En.end-(G._startClamp?Math.max(0,En.start):En.start),(or===Ve&&En.start-En._pinPush<Rt||or===yi)&&isNaN(Kt)&&(Qt+=Nn*(1-En.progress)),or===le&&(Yt+=Nn));if(Rt+=Qt,nn+=Qt,G._startClamp&&(G._startClamp+=Qt),G._endClamp&&!$n&&(G._endClamp=nn||-.001,nn=Math.min(nn,xi(rt,He))),rn=nn-Rt||(Rt-=.01)&&.001,zn&&(Jn=se.utils.clamp(0,1,se.utils.normalize(Rt,nn,Yi))),G._pinPush=Yt,li&&Qt&&(Nn={},Nn[He.a]="+="+Qt,yi&&(Nn[He.p]="-="+hn()),se.set([li,Mi],Nn)),le&&!(xe&&G.end>=xi(rt,He)))Nn=Le(le),Za=He===ue,Ps=hn(),Oi=parseFloat(sn(He.a))+Yt,!on&&nn>1&&(ar=(Sn?Ze.scrollingElement||nt:rt).style,ar={style:ar,value:ar["overflow"+He.a.toUpperCase()]},Sn&&Le(Ge)["overflow"+He.a.toUpperCase()]!=="scroll"&&(ar.style["overflow"+He.a.toUpperCase()]="scroll")),jl(le,An,Nn),ws=Xa(le),kn=tn(le,!0),Ql=Zn&&Re(rt,Za?X:ue)(),Ke?(fn=[Ke+He.os2,rn+Yt+Xe],fn.t=An,In=Ke===ke?Vi(le,He)+rn+Yt:0,In&&(fn.push(He.d,In+Xe),An.style.flexBasis!=="auto"&&(An.style.flexBasis=In+Xe)),so(fn),yi&&_t.forEach(function(aa){aa.pin===yi&&aa.vars.pinSpacing!==!1&&(aa._subPinOffset=!0)}),Zn&&hn(Yi)):(In=Vi(le,He),In&&An.style.flexBasis!=="auto"&&(An.style.flexBasis=In+Xe)),Zn&&(Hn={top:kn.top+(Za?Ps-Rt:Ql)+Xe,left:kn.left+(Za?Ql:Ps-Rt)+Xe,boxSizing:"border-box",position:"fixed"},Hn[ge]=Hn["max"+zt]=Math.ceil(kn.width)+Xe,Hn[ye]=Hn["max"+Gt]=Math.ceil(kn.height)+Xe,Hn[ot]=Hn[ot+je]=Hn[ot+Ae]=Hn[ot+Fe]=Hn[ot+$e]="0",Hn[ke]=Nn[ke],Hn[ke+je]=Nn[ke+je],Hn[ke+Ae]=Nn[ke+Ae],Hn[ke+Fe]=Nn[ke+Fe],Hn[ke+$e]=Nn[ke+$e],Kr=qp(Er,Hn,Ni),$n&&hn(0)),w?(Oh=w._initted,Se(1),w.render(w.duration(),!0,!0),yr=sn(He.a)-Oi+rn+Yt,Tr=Math.abs(rn-yr)>1,Zn&&Tr&&Kr.splice(Kr.length-2,2),w.render(0,!0,!0),Oh||w.invalidate(!0),w.parent||w.totalTime(w.totalTime()),Se(0)):yr=rn,ar&&(ar.value?ar.style["overflow"+He.a.toUpperCase()]=ar.value:ar.style.removeProperty("overflow-"+He.a));else if(Ve&&hn()&&!st)for(kn=Ve.parentNode;kn&&kn!==Ge;)kn._pinOffset&&(Rt-=kn._pinOffset,nn-=kn._pinOffset),kn=kn.parentNode;sa&&sa.forEach(function(aa){return aa.revert(!1,!0)}),G.start=Rt,G.end=nn,ei=ai=$n?Yi:hn(),!st&&!$n&&(ei<Yi&&hn(Yi),G.scroll.rec=0),G.revert(!1,!0),Sr=me(),Xi&&(Fi=-1,Xi.restart(!0)),be=0,w&&wn&&(w._initted||Cs)&&w.progress()!==Cs&&w.progress(Cs||0,!0).render(w.time(),!0,!0),(zn||Jn!==G.progress||st||Jt||w&&!w._initted)&&(w&&!wn&&w.totalProgress(st&&Rt<-.001&&!Jn?se.utils.normalize(Rt,nn,0):Jn,!0),G.progress=zn||(ei-Rt)/rn===Jn?0:Jn),le&&Ke&&(An._pinOffset=Math.round(G.progress*yr)),St&&St.invalidate(),isNaN(oa)||(oa-=se.getProperty(j,He.p),ja-=se.getProperty(Ei,He.p),qa(j,He,oa),qa(li,He,oa-(lt||0)),qa(Ei,He,ja),qa(Mi,He,ja-(lt||0))),zn&&!$n&&G.update(),Lt&&!$n&&!$r&&($r=!0,Lt(G),$r=!1)}},G.getVelocity=function(){return(hn()-ai)/(me()-Ie)*1e3||0},G.endAnimation=function(){xs(G.callbackAnimation),w&&(St?St.progress(1):w.paused()?wn||xs(w,G.direction<0,1):xs(w,w.reversed()))},G.labelToScroll=function(Te){return w&&w.labels&&(Rt||G.refresh()||Rt)+w.labels[Te]/w.duration()*rn||0},G.getTrailing=function(Te){var at=_t.indexOf(G),Ye=G.direction>0?_t.slice(0,at).reverse():_t.slice(at+1);return(qn(Te)?Ye.filter(function(lt){return lt.vars.preventOverlaps===Te}):Ye).filter(function(lt){return G.direction>0?lt.end<=Rt:lt.start>=nn})},G.update=function(Te,at,Ye){if(!(st&&!Ye&&!Te)){var lt=$n===!0?Yi:G.scroll(),Rn=Te?0:(lt-Rt)/rn,Et=Rn<0?0:Rn>1?1:Rn||0,on=G.progress,zn,Qt,Yt,Ht,qi,Kt,yi,sr;if(at&&(ai=ei,ei=st?hn():lt,ut&&(As=jr,jr=w&&!wn?w.totalProgress():Et)),Wt&&le&&!be&&!oe&&ze&&(!Et&&Rt<lt+(lt-ai)/(me()-Ie)*Wt?Et=1e-4:Et===1&&nn>lt+(lt-ai)/(me()-Ie)*Wt&&(Et=.9999)),Et!==on&&G.enabled){if(zn=G.isActive=!!Et&&Et<1,Qt=!!on&&on<1,Kt=zn!==Qt,qi=Kt||!!Et!=!!on,G.direction=Et>on?1:-1,G.progress=Et,qi&&!be&&(Yt=Et&&!on?0:Et===1?1:on===1?2:3,wn&&(Ht=!Kt&&kt[Yt+1]!=="none"&&kt[Yt+1]||kt[Yt],sr=w&&(Ht==="complete"||Ht==="reset"||Ht in w))),oi&&(Kt||sr)&&(sr||xt||!w)&&(bn(oi)?oi(G):G.getTrailing(oi).forEach(function(Ps){return Ps.endAnimation()})),wn||(St&&!be&&!oe?(St._dp._time-St._start!==St._time&&St.render(St._dp._time-St._start),St.resetTo?St.resetTo("totalProgress",Et,w._tTime/w._tDur):(St.vars.totalProgress=Et,St.invalidate().restart())):w&&w.totalProgress(Et,!!(be&&(Sr||Te)))),le){if(Te&&Ke&&(An.style[Ke+He.os2]=ia),!Zn)Gi(vi(Oi+yr*Et));else if(qi){if(yi=!Te&&Et>on&&nn+1>lt&&lt+1>=xi(rt,He),Ni)if(!Te&&(zn||yi)){var In=tn(le,!0),Nn=lt-Rt;Ph(le,Ge,In.top+(He===ue?Nn:0)+Xe,In.left+(He===ue?0:Nn)+Xe)}else Ph(le,An);so(zn||yi?Kr:ws),Tr&&Et<1&&zn||Gi(Oi+(Et===1&&!yi?yr:0))}}ut&&!Qn.tween&&!be&&!oe&&Xi.restart(!0),Y&&(Kt||Un&&Et&&(Et<1||!J))&&dt(Y.targets).forEach(function(Ps){return Ps.classList[zn||Un?"add":"remove"](Y.className)}),Q&&!wn&&!Te&&Q(G),qi&&!be?(wn&&(sr&&(Ht==="complete"?w.pause().totalProgress(1):Ht==="reset"?w.restart(!0).pause():Ht==="restart"?w.restart(!0):w[Ht]()),Q&&Q(G)),(Kt||!J)&&(tt&&Kt&&y(G,tt),jn[Yt]&&y(G,jn[Yt]),Un&&(Et===1?G.kill(!1,1):jn[Yt]=0),Kt||(Yt=Et===1?1:3,jn[Yt]&&y(G,jn[Yt]))),Kn&&!zn&&Math.abs(G.getVelocity())>(vs(Kn)?Kn:2500)&&(xs(G.callbackAnimation),St?St.progress(1):xs(w,Ht==="reverse"?1:!Et,1))):wn&&Q&&!be&&Q(G)}if(oo){var kn=st?lt/st.duration()*(st._caScrollDist||0):lt;Ka(kn+(j._isFlipped?1:0)),oo(kn)}lo&&lo(-lt/st.duration()*(st._caScrollDist||0))}},G.enable=function(Te,at){G.enabled||(G.enabled=!0,bt(rt,"resize",ta),Sn||bt(rt,"scroll",ro),Mn&&bt(H,"refreshInit",Mn),Te!==!1&&(G.progress=Jn=0,ei=ai=Fi=hn()),at!==!1&&G.refresh())},G.getTween=function(Te){return Te&&Qn?Qn.tween:St},G.setPositions=function(Te,at,Ye,lt){if(st){var Rn=st.scrollTrigger,Et=st.duration(),on=Rn.end-Rn.start;Te=Rn.start+on*Te/Et,at=Rn.start+on*at/Et}G.refresh(!1,!1,{start:Ct(Te,Ye&&!!G._startClamp),end:Ct(at,Ye&&!!G._endClamp)},lt),G.update()},G.adjustPinSpacing=function(Te){if(fn&&Te){var at=fn.indexOf(He.d)+1;fn[at]=parseFloat(fn[at])+Te+Xe,fn[1]=parseFloat(fn[1])+Te+Xe,so(fn)}},G.disable=function(Te,at){if(G.enabled&&(Te!==!1&&G.revert(!0,!0),G.enabled=G.isActive=!1,at||St&&St.pause(),Yi=0,Bn&&(Bn.uncache=1),Mn&&At(H,"refreshInit",Mn),Xi&&(Xi.pause(),Qn.tween&&Qn.tween.kill()&&(Qn.tween=0)),!Sn)){for(var Ye=_t.length;Ye--;)if(_t[Ye].scroller===rt&&_t[Ye]!==G)return;At(rt,"resize",ta),Sn||At(rt,"scroll",ro)}},G.kill=function(Te,at){G.disable(Te,at),St&&!at&&St.kill(),we&&delete Yl[we];var Ye=_t.indexOf(G);Ye>=0&&_t.splice(Ye,1),Ye===V&&Ga>0&&V--,Ye=0,_t.forEach(function(lt){return lt.scroller===G.scroller&&(Ye=1)}),Ye||$n||(G.scroll.rec=0),w&&(w.scrollTrigger=null,Te&&w.revert({kill:!1}),at||w.kill()),li&&[li,Mi,j,Ei].forEach(function(lt){return lt.parentNode&&lt.parentNode.removeChild(lt)}),na===G&&(na=0),le&&(Bn&&(Bn.uncache=1),Ye=0,_t.forEach(function(lt){return lt.pin===le&&Ye++}),Ye||(Bn.spacer=0)),T.onKill&&T.onKill(G)},_t.push(G),G.enable(!1,!1),br&&br(G),w&&w.add&&!rn){var Ut=G.update;G.update=function(){G.update=Ut,A.cache++,Rt||nn||G.refresh()},se.delayedCall(.01,G.update),rn=.01,Rt=nn=0}else G.refresh();le&&Wp()},H.register=function(T){return qe||(se=T||Jo(),to()&&window.document&&H.enable(),qe=Ft),qe},H.defaults=function(T){if(T)for(var w in T)Ba[w]=T[w];return Ba},H.disable=function(T,w){Ft=0,_t.forEach(function(Q){return Q[w?"kill":"disable"](T)}),At(ve,"wheel",ro),At(Ze,"scroll",ro),clearInterval(It),At(Ze,"touchcancel",gi),At(Ge,"touchstart",gi),Ln(At,Ze,"pointerdown,touchstart,mousedown",Ii),Ln(At,Ze,"pointerup,touchend,mouseup",jo),Dn.kill(),io(At);for(var B=0;B<A.length;B+=3)Xr(At,A[B],A[B+1]),Xr(At,A[B],A[B+2])},H.enable=function(){if(ve=window,Ze=document,nt=Ze.documentElement,Ge=Ze.body,se&&(dt=se.utils.toArray,pt=se.utils.clamp,Pe=se.core.context||gi,Se=se.core.suppressOverwrites||gi,gt=ve.history.scrollRestoration||"auto",Kl=ve.pageYOffset||0,se.core.globals("ScrollTrigger",H),Ge)){Ft=1,it=document.createElement("div"),it.style.height="100vh",it.style.position="absolute",Ah(),_i(),fe.register(se),H.isTouch=fe.isTouch,Be=fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pe=fe.isTouch===1,bt(ve,"wheel",ro),N=[ve,Ze,nt,Ge],se.matchMedia?(H.matchMedia=function(tt){var Lt=se.matchMedia(),xt;for(xt in tt)Lt.add(xt,tt[xt]);return Lt},se.addEventListener("matchMediaInit",function(){return $l()}),se.addEventListener("matchMediaRevert",function(){return Th()}),se.addEventListener("matchMedia",function(){Ts(0,1),Es("matchMedia")}),se.matchMedia().add("(orientation: portrait)",function(){return ql(),ql})):console.warn("Requires GSAP 3.11.0 or later"),ql(),bt(Ze,"scroll",ro);var T=Ge.hasAttribute("style"),w=Ge.style,B=w.borderTopStyle,Q=se.core.Animation.prototype,Y,we;for(Q.revert||Object.defineProperty(Q,"revert",{value:function(){return this.time(-.01,!0)}}),w.borderTopStyle="solid",Y=tn(Ge),ue.m=Math.round(Y.top+ue.sc())||0,X.m=Math.round(Y.left+X.sc())||0,B?w.borderTopStyle=B:w.removeProperty("border-top-style"),T||(Ge.setAttribute("style",""),Ge.removeAttribute("style")),It=setInterval(Eh,250),se.delayedCall(.5,function(){return oe=0}),bt(Ze,"touchcancel",gi),bt(Ge,"touchstart",gi),Ln(bt,Ze,"pointerdown,touchstart,mousedown",Ii),Ln(bt,Ze,"pointerup,touchend,mouseup",jo),S=se.utils.checkPrefix("transform"),Wa.push(S),qe=me(),Dn=se.delayedCall(.2,Ts).pause(),re=[Ze,"visibilitychange",function(){var tt=ve.innerWidth,Lt=ve.innerHeight;Ze.hidden?(ae=tt,ce=Lt):(ae!==tt||ce!==Lt)&&ta()},Ze,"DOMContentLoaded",Ts,ve,"load",Ts,ve,"resize",ta],io(bt),_t.forEach(function(tt){return tt.enable(0,1)}),we=0;we<A.length;we+=3)Xr(At,A[we],A[we+1]),Xr(At,A[we],A[we+2])}},H.config=function(T){"limitCallbacks"in T&&(J=!!T.limitCallbacks);var w=T.syncInterval;w&&clearInterval(It)||(It=w)&&setInterval(Eh,w),"ignoreMobileResize"in T&&(pe=H.isTouch===1&&T.ignoreMobileResize),"autoRefreshEvents"in T&&(io(At)||io(bt,T.autoRefreshEvents||"none"),Ce=(T.autoRefreshEvents+"").indexOf("resize")===-1)},H.scrollerProxy=function(T,w){var B=_e(T),Q=A.indexOf(B),Y=ir(B);~Q&&A.splice(Q,Y?6:2),w&&(Y?D.unshift(ve,w,Ge,w,nt,w):D.unshift(B,w))},H.clearMatchMedia=function(T){_t.forEach(function(w){return w._ctx&&w._ctx.query===T&&w._ctx.kill(!0,!0)})},H.isInViewport=function(T,w,B){var Q=(qn(T)?_e(T):T).getBoundingClientRect(),Y=Q[B?ge:ye]*w||0;return B?Q.right-Y>0&&Q.left+Y<ve.innerWidth:Q.bottom-Y>0&&Q.top+Y<ve.innerHeight},H.positionInViewport=function(T,w,B){qn(T)&&(T=_e(T));var Q=T.getBoundingClientRect(),Y=Q[B?ge:ye],we=w==null?Y/2:w in za?za[w]*Y:~w.indexOf("%")?parseFloat(w)*Y/100:parseFloat(w)||0;return B?(Q.left+we)/ve.innerWidth:(Q.top+we)/ve.innerHeight},H.killAll=function(T){if(_t.slice(0).forEach(function(B){return B.vars.id!=="ScrollSmoother"&&B.kill()}),T!==!0){var w=Ms.killAll||[];Ms={},w.forEach(function(B){return B()})}},H}();vt.version="3.12.7",vt.saveStyles=function(H){return H?dt(H).forEach(function(v){if(v&&v.style){var U=Si.indexOf(v);U>=0&&Si.splice(U,5),Si.push(v,v.style.cssText,v.getBBox&&v.getAttribute("transform"),se.core.getCache(v),Pe())}}):Si},vt.revert=function(H,v){return $l(!H,v)},vt.create=function(H,v){return new vt(H,v)},vt.refresh=function(H){return H?ta(!0):(qe||vt.register())&&Ts(!0)},vt.update=function(H){return++A.cache&&vr(H===!0?2:0)},vt.clearScrollMemory=bh,vt.maxScroll=function(H,v){return xi(H,v?X:ue)},vt.getScrollFunc=function(H,v){return Re(_e(H),v?X:ue)},vt.getById=function(H){return Yl[H]},vt.getAll=function(){return _t.filter(function(H){return H.vars.id!=="ScrollSmoother"})},vt.isScrolling=function(){return!!ze},vt.snapDirectional=Ot,vt.addEventListener=function(H,v){var U=Ms[H]||(Ms[H]=[]);~U.indexOf(v)||U.push(v)},vt.removeEventListener=function(H,v){var U=Ms[H],T=U&&U.indexOf(v);T>=0&&U.splice(T,1)},vt.batch=function(H,v){var U=[],T={},w=v.interval||.016,B=v.batchMax||1e9,Q=function(tt,Lt){var xt=[],Ve=[],le=se.delayedCall(w,function(){Lt(xt,Ve),xt=[],Ve=[]}).pause();return function(Ke){xt.length||le.restart(!0),xt.push(Ke.trigger),Ve.push(Ke),B<=xt.length&&le.progress(1)}},Y;for(Y in v)T[Y]=Y.substr(0,2)==="on"&&bn(v[Y])&&Y!=="onRefreshInit"?Q(Y,v[Y]):v[Y];return bn(B)&&(B=B(),bt(vt,"refresh",function(){return B=v.batchMax()})),dt(H).forEach(function(we){var tt={};for(Y in T)tt[Y]=T[Y];tt.trigger=we,U.push(vt.create(tt))}),U};var Uh=function(v,U,T,w){return U>w?v(w):U<0&&v(0),T>w?(w-U)/(T-U):T<0?U/(U-T):1},Jl=function H(v,U){U===!0?v.style.removeProperty("touch-action"):v.style.touchAction=U===!0?"auto":U?"pan-"+U+(fe.isTouch?" pinch-zoom":""):"none",v===nt&&H(Ge,U)},$a={auto:1,scroll:1},Kp=function(v){var U=v.event,T=v.target,w=v.axis,B=(U.changedTouches?U.changedTouches[0]:U).target,Q=B._gsap||se.core.getCache(B),Y=me(),we;if(!Q._isScrollT||Y-Q._isScrollT>2e3){for(;B&&B!==Ge&&(B.scrollHeight<=B.clientHeight&&B.scrollWidth<=B.clientWidth||!($a[(we=Le(B)).overflowY]||$a[we.overflowX]));)B=B.parentNode;Q._isScroll=B&&B!==T&&!ir(B)&&($a[(we=Le(B)).overflowY]||$a[we.overflowX]),Q._isScrollT=Y}(Q._isScroll||w==="x")&&(U.stopPropagation(),U._gsapAllow=!0)},Ih=function(v,U,T,w){return fe.create({target:v,capture:!0,debounce:!1,lockAxis:!0,type:U,onWheel:w=w&&Kp,onPress:w,onDrag:w,onScroll:w,onEnable:function(){return T&&bt(Ze,fe.eventTypes[0],Fh,!1,!0)},onDisable:function(){return At(Ze,fe.eventTypes[0],Fh,!0)}})},Zp=/(input|label|select|textarea)/i,Nh,Fh=function(v){var U=Zp.test(v.target.tagName);(U||Nh)&&(v._gsapAllow=!0,Nh=U)},jp=function(v){gr(v)||(v={}),v.preventDefault=v.isNormalizer=v.allowClicks=!0,v.type||(v.type="wheel,touch"),v.debounce=!!v.debounce,v.id=v.id||"normalizer";var U=v,T=U.normalizeScrollX,w=U.momentum,B=U.allowNestedScroll,Q=U.onRelease,Y,we,tt=_e(v.target)||nt,Lt=se.core.globals().ScrollSmoother,xt=Lt&&Lt.get(),Ve=Be&&(v.content&&_e(v.content)||xt&&v.content!==!1&&!xt.smooth()&&xt.content()),le=Re(tt,ue),Ke=Re(tt,X),Jt=1,Wt=(fe.isTouch&&ve.visualViewport?ve.visualViewport.scale*ve.visualViewport.width:ve.outerWidth)/ve.innerWidth,xn=0,$t=bn(w)?function(){return w(Y)}:function(){return w||2.8},Un,ut,Ni=Ih(tt,v.type,!0,B),Xt=function(){return ut=!1},st=gi,Kn=gi,oi=function(){we=xi(tt,ue),Kn=pt(Be?1:0,we),T&&(st=pt(0,xi(tt,X))),Un=ys},He=function(){Ve._gsap.y=vi(parseFloat(Ve._gsap.y)+le.offset)+"px",Ve.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(Ve._gsap.y)+", 0, 1)",le.offset=le.cacheID=0},wn=function(){if(ut){requestAnimationFrame(Xt);var cn=vi(Y.deltaY/2),un=Kn(le.v-cn);if(Ve&&un!==le.v+le.offset){le.offset=un-le.v;var G=vi((parseFloat(Ve&&Ve._gsap.y)||0)-le.offset);Ve.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+G+", 0, 1)",Ve._gsap.y=G+"px",le.cacheID=A.cache,vr()}return!0}le.offset&&He(),ut=!0},rt,xr,Sn,Zn,jn=function(){oi(),rt.isActive()&&rt.vars.scrollY>we&&(le()>we?rt.progress(1)&&le(we):rt.resetTo("scrollY",we))};return Ve&&se.set(Ve,{y:"+=0"}),v.ignoreCheck=function(kt){return Be&&kt.type==="touchmove"&&wn()||Jt>1.05&&kt.type!=="touchstart"||Y.isGesturing||kt.touches&&kt.touches.length>1},v.onPress=function(){ut=!1;var kt=Jt;Jt=vi((ve.visualViewport&&ve.visualViewport.scale||1)/Wt),rt.pause(),kt!==Jt&&Jl(tt,Jt>1.01?!0:T?!1:"x"),xr=Ke(),Sn=le(),oi(),Un=ys},v.onRelease=v.onGestureStart=function(kt,cn){if(le.offset&&He(),!cn)Zn.restart(!0);else{A.cache++;var un=$t(),G,Mn;T&&(G=Ke(),Mn=G+un*.05*-kt.velocityX/.227,un*=Uh(Ke,G,Mn,xi(tt,X)),rt.vars.scrollX=st(Mn)),G=le(),Mn=G+un*.05*-kt.velocityY/.227,un*=Uh(le,G,Mn,xi(tt,ue)),rt.vars.scrollY=Kn(Mn),rt.invalidate().duration(un).play(.01),(Be&&rt.vars.scrollY>=we||G>=we-1)&&se.to({},{onUpdate:jn,duration:un})}Q&&Q(kt)},v.onWheel=function(){rt._ts&&rt.pause(),me()-xn>1e3&&(Un=0,xn=me())},v.onChange=function(kt,cn,un,G,Mn){if(ys!==Un&&oi(),cn&&T&&Ke(st(G[2]===cn?xr+(kt.startX-kt.x):Ke()+cn-G[1])),un){le.offset&&He();var bs=Mn[2]===un,Yr=bs?Sn+kt.startY-kt.y:le()+un-Mn[1],Fi=Kn(Yr);bs&&Yr!==Fi&&(Sn+=Fi-Yr),le(Fi)}(un||cn)&&vr()},v.onEnable=function(){Jl(tt,T?!1:"x"),vt.addEventListener("refresh",jn),bt(ve,"resize",jn),le.smooth&&(le.target.style.scrollBehavior="auto",le.smooth=Ke.smooth=!1),Ni.enable()},v.onDisable=function(){Jl(tt,!0),At(ve,"resize",jn),vt.removeEventListener("refresh",jn),Ni.kill()},v.lockAxis=v.lockAxis!==!1,Y=new fe(v),Y.iOS=Be,Be&&!le()&&le(1),Be&&se.ticker.add(gi),Zn=Y._dc,rt=se.to(Y,{ease:"power4",paused:!0,inherit:!1,scrollX:T?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dh(le,le(),function(){return rt.pause()})},onUpdate:vr,onComplete:Zn.vars.onComplete}),Y};vt.sort=function(H){if(bn(H))return _t.sort(H);var v=ve.pageYOffset||0;return vt.getAll().forEach(function(U){return U._sortY=U.trigger?v+U.trigger.getBoundingClientRect().top:U.start+ve.innerHeight}),_t.sort(H||function(U,T){return(U.vars.refreshPriority||0)*-1e6+(U.vars.containerAnimation?1e6:U._sortY)-((T.vars.containerAnimation?1e6:T._sortY)+(T.vars.refreshPriority||0)*-1e6)})},vt.observe=function(H){return new fe(H)},vt.normalizeScroll=function(H){if(typeof H>"u")return Qe;if(H===!0&&Qe)return Qe.enable();if(H===!1){Qe&&Qe.kill(),Qe=H;return}var v=H instanceof fe?H:jp(H);return Qe&&Qe.target===v.target&&Qe.kill(),ir(v.target)&&(Qe=v),v},vt.core={_getVelocityProp:Je,_inputObserver:Ih,_scrollers:A,_proxies:D,bridge:{ss:function(){ze||Es("scrollStart"),ze=me()},ref:function(){return be}}},Jo()&&se.registerPlugin(vt),t.ScrollTrigger=vt,t.default=vt,typeof window>"u"||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete window.default})}(ga,ga.exports)),ga.exports}var OM=FM();const BM=IM(OM),Np={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zM=new Ju(-1,1,1,-1,0,1);class kM extends ms{constructor(){super(),this.setAttribute("position",new kr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kr([0,2,0,0,2,0],2))}}const HM=new kM;class Fp{constructor(e){this._mesh=new er(HM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class VM extends Fa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ii?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ll.clone(e.uniforms),this.material=new ii({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class td extends Fa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class GM extends Fa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class WM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ft);this._width=n.width,this._height=n.height,t=new nr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Br}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new VM(Np),this.copyPass.material.blending=Or,this.clock=new b_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}td!==void 0&&(o instanceof td?n=!0:o instanceof GM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class XM extends Fa{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Dt}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const YM={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $o extends Fa{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ft(e.x,e.y):new ft(256,256),this.clearColor=new Dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nr(s,o,{type:Br}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new nr(s,o,{type:Br});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new nr(s,o,{type:Br});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=YM;this.highPassUniforms=Ll.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ii({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Np;this.copyUniforms=Ll.clone(u.uniforms),this.blendMaterial=new ii({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:zc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Dt,this.oldClearAlpha=1,this.basic=new Zu,this.fsQuad=new Fp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ft(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=$o.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$o.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ii({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ii({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$o.BlurDirectionX=new ft(1,0);$o.BlurDirectionY=new ft(0,1);gh.registerPlugin(BM);const vh=document.querySelectorAll(".projectImg");let xh=[];const Op=new UM({smoothWheel:!0,smooth:!0,wheelMultiplier:.5});Op.on("scroll",Vp());function Bp(r){Op.raf(r),requestAnimationFrame(Bp)}requestAnimationFrame(Bp);const zp=new m_,js=window.innerWidth/window.innerHeight,ki=2,kp=new Ju(-2*js/2,ki*js/2,ki/2,-2/2,.1,10);kp.position.z=1;const Sh=new lS({antialias:!0,canvas:document.getElementById("canvas"),alpha:!0});Sh.setSize(window.innerWidth,window.innerHeight);Sh.setPixelRatio(window.devicePixelRatio);const qM=new y_;vh.forEach((r,e)=>{const t=r.getBoundingClientRect(),n=r.getAttribute("src"),i=qM.load(n,f=>{f.encoding=void 0,f.colorSpace=wi}),s=nd(t.width,window.innerWidth,ki*js),o=nd(t.height,window.innerHeight,ki),a=new Ia(s,o),l=new ii({vertexShader:cS,fragmentShader:uS,uniforms:{uTime:{value:0},uResolution:{value:new ft(window.innerWidth,window.innerHeight)},uTexture:{value:i},uScroll:{value:1.6},uImageSize:{value:new ft(s,o)},uResolution:{value:new ft(window.innerWidth,window.innerHeight)}}}),c=(t.left+t.width/2)/window.innerWidth*ki*js-ki*js/2,u=-((t.top+t.height/2)/window.innerHeight*ki-ki/2),h=new er(a,l);h.position.set(c,u,0),zp.add(h),xh.push({mesh:h,material:l,img:r})});const Mh=new WM(Sh);Mh.addPass(new XM(zp,kp));const Bc={bloomStrength:.8,bloomThreshold:0,bloomRadius:1.15},$M=new $o(new ft(window.innerWidth,window.innerHeight),Bc.bloomStrength,Bc.bloomRadius,Bc.bloomThreshold);Mh.addPass($M);function Hp(){requestAnimationFrame(Hp),Vp(),Mh.render()}Hp();function nd(r,e,t){return r/e*t}function Vp(){xh.forEach((r,e)=>{const n=vh[e].getBoundingClientRect(),i=(n.left+n.width/2)/window.innerWidth*ki*js-ki*js/2,s=-((n.top+n.height/2)/window.innerHeight*ki-ki/2);r.mesh.position.set(i,s,0)})}vh.forEach((r,e)=>{gh.to(r,{scrollTrigger:{trigger:r,start:"top 60%",end:"bottom 25%",scrub:1,onUpdate:t=>{xh[e].material.uniforms.uScroll.value=(.5-t.progress)*2*1.6}},ease:"none"})});

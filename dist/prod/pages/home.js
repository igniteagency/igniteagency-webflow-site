"use strict";(()=>{var Eu=Object.create;var _a=Object.defineProperty,Tu=Object.defineProperties,Au=Object.getOwnPropertyDescriptor,Cu=Object.getOwnPropertyDescriptors,Ru=Object.getOwnPropertyNames,ac=Object.getOwnPropertySymbols,Pu=Object.getPrototypeOf,lc=Object.prototype.hasOwnProperty,Iu=Object.prototype.propertyIsEnumerable;var xa=(s,t,e)=>t in s?_a(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,ya=(s,t)=>{for(var e in t||(t={}))lc.call(t,e)&&xa(s,e,t[e]);if(ac)for(var e of ac(t))Iu.call(t,e)&&xa(s,e,t[e]);return s},cc=(s,t)=>Tu(s,Cu(t));var Lu=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Du=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ru(t))!lc.call(s,i)&&i!==e&&_a(s,i,{get:()=>t[i],enumerable:!(n=Au(t,i))||n.enumerable});return s};var Uu=(s,t,e)=>(e=s!=null?Eu(Pu(s)):{},Du(t||!s||!s.__esModule?_a(e,"default",{value:s,enumerable:!0}):e,s));var $e=(s,t,e)=>(xa(s,typeof t!="symbol"?t+"":t,e),e);var gu=Lu((lr,Ql)=>{(function(t,e){typeof lr=="object"&&typeof Ql=="object"?Ql.exports=e():typeof define=="function"&&define.amd?define("Matter",[],e):typeof lr=="object"?lr.Matter=e():t.Matter=e()})(lr,function(){return function(s){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return s[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=s,e.c=t,e.d=function(n,i,r){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:r})},e.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(i&1&&(n=e(n)),i&8||i&4&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),i&2&&typeof n!="string")for(var o in n)e.d(r,o,function(a){return n[a]}.bind(null,o));return r},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=20)}([function(s,t){var e={};s.exports=e,function(){e._baseDelta=1e3/60,e._nextId=0,e._seed=0,e._nowStartTime=+new Date,e._warnedOnce={},e._decomp=null,e.extend=function(i,r){var o,a,l;typeof r=="boolean"?(o=2,l=r):(o=1,l=!0);for(var h=o;h<arguments.length;h++){var u=arguments[h];if(u)for(var c in u)l&&u[c]&&u[c].constructor===Object&&(!i[c]||i[c].constructor===Object)?(i[c]=i[c]||{},e.extend(i[c],l,u[c])):i[c]=u[c]}return i},e.clone=function(i,r){return e.extend({},r,i)},e.keys=function(i){if(Object.keys)return Object.keys(i);var r=[];for(var o in i)r.push(o);return r},e.values=function(i){var r=[];if(Object.keys){for(var o=Object.keys(i),a=0;a<o.length;a++)r.push(i[o[a]]);return r}for(var l in i)r.push(i[l]);return r},e.get=function(i,r,o,a){r=r.split(".").slice(o,a);for(var l=0;l<r.length;l+=1)i=i[r[l]];return i},e.set=function(i,r,o,a,l){var h=r.split(".").slice(a,l);return e.get(i,r,0,-1)[h[h.length-1]]=o,o},e.shuffle=function(i){for(var r=i.length-1;r>0;r--){var o=Math.floor(e.random()*(r+1)),a=i[r];i[r]=i[o],i[o]=a}return i},e.choose=function(i){return i[Math.floor(e.random()*i.length)]},e.isElement=function(i){return typeof HTMLElement!="undefined"?i instanceof HTMLElement:!!(i&&i.nodeType&&i.nodeName)},e.isArray=function(i){return Object.prototype.toString.call(i)==="[object Array]"},e.isFunction=function(i){return typeof i=="function"},e.isPlainObject=function(i){return typeof i=="object"&&i.constructor===Object},e.isString=function(i){return toString.call(i)==="[object String]"},e.clamp=function(i,r,o){return i<r?r:i>o?o:i},e.sign=function(i){return i<0?-1:1},e.now=function(){if(typeof window!="undefined"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-e._nowStartTime},e.random=function(i,r){return i=typeof i!="undefined"?i:0,r=typeof r!="undefined"?r:1,i+n()*(r-i)};var n=function(){return e._seed=(e._seed*9301+49297)%233280,e._seed/233280};e.colorToNumber=function(i){return i=i.replace("#",""),i.length==3&&(i=i.charAt(0)+i.charAt(0)+i.charAt(1)+i.charAt(1)+i.charAt(2)+i.charAt(2)),parseInt(i,16)},e.logLevel=1,e.log=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.info=function(){console&&e.logLevel>0&&e.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warn=function(){console&&e.logLevel>0&&e.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},e.warnOnce=function(){var i=Array.prototype.slice.call(arguments).join(" ");e._warnedOnce[i]||(e.warn(i),e._warnedOnce[i]=!0)},e.deprecated=function(i,r,o){i[r]=e.chain(function(){e.warnOnce("\u{1F505} deprecated \u{1F505}",o)},i[r])},e.nextId=function(){return e._nextId++},e.indexOf=function(i,r){if(i.indexOf)return i.indexOf(r);for(var o=0;o<i.length;o++)if(i[o]===r)return o;return-1},e.map=function(i,r){if(i.map)return i.map(r);for(var o=[],a=0;a<i.length;a+=1)o.push(r(i[a]));return o},e.topologicalSort=function(i){var r=[],o=[],a=[];for(var l in i)!o[l]&&!a[l]&&e._topologicalSort(l,o,a,i,r);return r},e._topologicalSort=function(i,r,o,a,l){var h=a[i]||[];o[i]=!0;for(var u=0;u<h.length;u+=1){var c=h[u];o[c]||r[c]||e._topologicalSort(c,r,o,a,l)}o[i]=!1,r[i]=!0,l.push(i)},e.chain=function(){for(var i=[],r=0;r<arguments.length;r+=1){var o=arguments[r];o._chained?i.push.apply(i,o._chained):i.push(o)}var a=function(){for(var l,h=new Array(arguments.length),u=0,c=arguments.length;u<c;u++)h[u]=arguments[u];for(u=0;u<i.length;u+=1){var d=i[u].apply(l,h);typeof d!="undefined"&&(l=d)}return l};return a._chained=i,a},e.chainPathBefore=function(i,r,o){return e.set(i,r,e.chain(o,e.get(i,r)))},e.chainPathAfter=function(i,r,o){return e.set(i,r,e.chain(e.get(i,r),o))},e.setDecomp=function(i){e._decomp=i},e.getDecomp=function(){var i=e._decomp;try{!i&&typeof window!="undefined"&&(i=window.decomp),!i&&typeof global!="undefined"&&(i=global.decomp)}catch(r){i=null}return i}}()},function(s,t){var e={};s.exports=e,function(){e.create=function(n){var i={min:{x:0,y:0},max:{x:0,y:0}};return n&&e.update(i,n),i},e.update=function(n,i,r){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var o=0;o<i.length;o++){var a=i[o];a.x>n.max.x&&(n.max.x=a.x),a.x<n.min.x&&(n.min.x=a.x),a.y>n.max.y&&(n.max.y=a.y),a.y<n.min.y&&(n.min.y=a.y)}r&&(r.x>0?n.max.x+=r.x:n.min.x+=r.x,r.y>0?n.max.y+=r.y:n.min.y+=r.y)},e.contains=function(n,i){return i.x>=n.min.x&&i.x<=n.max.x&&i.y>=n.min.y&&i.y<=n.max.y},e.overlaps=function(n,i){return n.min.x<=i.max.x&&n.max.x>=i.min.x&&n.max.y>=i.min.y&&n.min.y<=i.max.y},e.translate=function(n,i){n.min.x+=i.x,n.max.x+=i.x,n.min.y+=i.y,n.max.y+=i.y},e.shift=function(n,i){var r=n.max.x-n.min.x,o=n.max.y-n.min.y;n.min.x=i.x,n.max.x=i.x+r,n.min.y=i.y,n.max.y=i.y+o}}()},function(s,t){var e={};s.exports=e,function(){e.create=function(n,i){return{x:n||0,y:i||0}},e.clone=function(n){return{x:n.x,y:n.y}},e.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},e.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},e.rotate=function(n,i,r){var o=Math.cos(i),a=Math.sin(i);r||(r={});var l=n.x*o-n.y*a;return r.y=n.x*a+n.y*o,r.x=l,r},e.rotateAbout=function(n,i,r,o){var a=Math.cos(i),l=Math.sin(i);o||(o={});var h=r.x+((n.x-r.x)*a-(n.y-r.y)*l);return o.y=r.y+((n.x-r.x)*l+(n.y-r.y)*a),o.x=h,o},e.normalise=function(n){var i=e.magnitude(n);return i===0?{x:0,y:0}:{x:n.x/i,y:n.y/i}},e.dot=function(n,i){return n.x*i.x+n.y*i.y},e.cross=function(n,i){return n.x*i.y-n.y*i.x},e.cross3=function(n,i,r){return(i.x-n.x)*(r.y-n.y)-(i.y-n.y)*(r.x-n.x)},e.add=function(n,i,r){return r||(r={}),r.x=n.x+i.x,r.y=n.y+i.y,r},e.sub=function(n,i,r){return r||(r={}),r.x=n.x-i.x,r.y=n.y-i.y,r},e.mult=function(n,i){return{x:n.x*i,y:n.y*i}},e.div=function(n,i){return{x:n.x/i,y:n.y/i}},e.perp=function(n,i){return i=i===!0?-1:1,{x:i*-n.y,y:i*n.x}},e.neg=function(n){return{x:-n.x,y:-n.y}},e.angle=function(n,i){return Math.atan2(i.y-n.y,i.x-n.x)},e._temp=[e.create(),e.create(),e.create(),e.create(),e.create(),e.create()]}()},function(s,t,e){var n={};s.exports=n;var i=e(2),r=e(0);(function(){n.create=function(o,a){for(var l=[],h=0;h<o.length;h++){var u=o[h],c={x:u.x,y:u.y,index:h,body:a,isInternal:!1};l.push(c)}return l},n.fromPath=function(o,a){var l=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,h=[];return o.replace(l,function(u,c,d){h.push({x:parseFloat(c),y:parseFloat(d)})}),n.create(h,a)},n.centre=function(o){for(var a=n.area(o,!0),l={x:0,y:0},h,u,c,d=0;d<o.length;d++)c=(d+1)%o.length,h=i.cross(o[d],o[c]),u=i.mult(i.add(o[d],o[c]),h),l=i.add(l,u);return i.div(l,6*a)},n.mean=function(o){for(var a={x:0,y:0},l=0;l<o.length;l++)a.x+=o[l].x,a.y+=o[l].y;return i.div(a,o.length)},n.area=function(o,a){for(var l=0,h=o.length-1,u=0;u<o.length;u++)l+=(o[h].x-o[u].x)*(o[h].y+o[u].y),h=u;return a?l/2:Math.abs(l)/2},n.inertia=function(o,a){for(var l=0,h=0,u=o,c,d,f=0;f<u.length;f++)d=(f+1)%u.length,c=Math.abs(i.cross(u[d],u[f])),l+=c*(i.dot(u[d],u[d])+i.dot(u[d],u[f])+i.dot(u[f],u[f])),h+=c;return a/6*(l/h)},n.translate=function(o,a,l){l=typeof l!="undefined"?l:1;var h=o.length,u=a.x*l,c=a.y*l,d;for(d=0;d<h;d++)o[d].x+=u,o[d].y+=c;return o},n.rotate=function(o,a,l){if(a!==0){var h=Math.cos(a),u=Math.sin(a),c=l.x,d=l.y,f=o.length,p,x,v,m;for(m=0;m<f;m++)p=o[m],x=p.x-c,v=p.y-d,p.x=c+(x*h-v*u),p.y=d+(x*u+v*h);return o}},n.contains=function(o,a){for(var l=a.x,h=a.y,u=o.length,c=o[u-1],d,f=0;f<u;f++){if(d=o[f],(l-c.x)*(d.y-c.y)+(h-c.y)*(c.x-d.x)>0)return!1;c=d}return!0},n.scale=function(o,a,l,h){if(a===1&&l===1)return o;h=h||n.centre(o);for(var u,c,d=0;d<o.length;d++)u=o[d],c=i.sub(u,h),o[d].x=h.x+c.x*a,o[d].y=h.y+c.y*l;return o},n.chamfer=function(o,a,l,h,u){typeof a=="number"?a=[a]:a=a||[8],l=typeof l!="undefined"?l:-1,h=h||2,u=u||14;for(var c=[],d=0;d<o.length;d++){var f=o[d-1>=0?d-1:o.length-1],p=o[d],x=o[(d+1)%o.length],v=a[d<a.length?d:a.length-1];if(v===0){c.push(p);continue}var m=i.normalise({x:p.y-f.y,y:f.x-p.x}),b=i.normalise({x:x.y-p.y,y:p.x-x.x}),g=Math.sqrt(2*Math.pow(v,2)),_=i.mult(r.clone(m),v),w=i.normalise(i.mult(i.add(m,b),.5)),M=i.sub(p,i.mult(w,g)),E=l;l===-1&&(E=Math.pow(v,.32)*1.75),E=r.clamp(E,h,u),E%2===1&&(E+=1);for(var T=Math.acos(i.dot(m,b)),y=T/E,S=0;S<E;S++)c.push(i.add(i.rotate(_,y*S),M))}return c},n.clockwiseSort=function(o){var a=n.mean(o);return o.sort(function(l,h){return i.angle(a,l)-i.angle(a,h)}),o},n.isConvex=function(o){var a=0,l=o.length,h,u,c,d;if(l<3)return null;for(h=0;h<l;h++)if(u=(h+1)%l,c=(h+2)%l,d=(o[u].x-o[h].x)*(o[c].y-o[u].y),d-=(o[u].y-o[h].y)*(o[c].x-o[u].x),d<0?a|=1:d>0&&(a|=2),a===3)return!1;return a!==0?!0:null},n.hull=function(o){var a=[],l=[],h,u;for(o=o.slice(0),o.sort(function(c,d){var f=c.x-d.x;return f!==0?f:c.y-d.y}),u=0;u<o.length;u+=1){for(h=o[u];l.length>=2&&i.cross3(l[l.length-2],l[l.length-1],h)<=0;)l.pop();l.push(h)}for(u=o.length-1;u>=0;u-=1){for(h=o[u];a.length>=2&&i.cross3(a[a.length-2],a[a.length-1],h)<=0;)a.pop();a.push(h)}return a.pop(),l.pop(),a.concat(l)}})()},function(s,t,e){var n={};s.exports=n;var i=e(3),r=e(2),o=e(7),a=e(0),l=e(1),h=e(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(c){var d={id:a.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},f=a.extend(d,c);return u(f,c),f},n.nextGroup=function(c){return c?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var u=function(c,d){d=d||{},n.set(c,{bounds:c.bounds||l.create(c.vertices),positionPrev:c.positionPrev||r.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),i.rotate(c.vertices,c.angle,c.position),h.rotate(c.axes,c.angle),l.update(c.bounds,c.vertices,c.velocity),n.set(c,{axes:d.axes||c.axes,area:d.area||c.area,mass:d.mass||c.mass,inertia:d.inertia||c.inertia});var f=c.isStatic?"#14151f":a.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),p=c.isStatic?"#555":"#ccc",x=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||f,c.render.strokeStyle=c.render.strokeStyle||p,c.render.lineWidth=c.render.lineWidth||x,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};n.set=function(c,d,f){var p;typeof d=="string"&&(p=d,d={},d[p]=f);for(p in d)if(Object.prototype.hasOwnProperty.call(d,p))switch(f=d[p],p){case"isStatic":n.setStatic(c,f);break;case"isSleeping":o.set(c,f);break;case"mass":n.setMass(c,f);break;case"density":n.setDensity(c,f);break;case"inertia":n.setInertia(c,f);break;case"vertices":n.setVertices(c,f);break;case"position":n.setPosition(c,f);break;case"angle":n.setAngle(c,f);break;case"velocity":n.setVelocity(c,f);break;case"angularVelocity":n.setAngularVelocity(c,f);break;case"speed":n.setSpeed(c,f);break;case"angularSpeed":n.setAngularSpeed(c,f);break;case"parts":n.setParts(c,f);break;case"centre":n.setCentre(c,f);break;default:c[p]=f}},n.setStatic=function(c,d){for(var f=0;f<c.parts.length;f++){var p=c.parts[f];d?(p.isStatic||(p._original={restitution:p.restitution,friction:p.friction,mass:p.mass,inertia:p.inertia,density:p.density,inverseMass:p.inverseMass,inverseInertia:p.inverseInertia}),p.restitution=0,p.friction=1,p.mass=p.inertia=p.density=1/0,p.inverseMass=p.inverseInertia=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.angularVelocity=0,p.speed=0,p.angularSpeed=0,p.motion=0):p._original&&(p.restitution=p._original.restitution,p.friction=p._original.friction,p.mass=p._original.mass,p.inertia=p._original.inertia,p.density=p._original.density,p.inverseMass=p._original.inverseMass,p.inverseInertia=p._original.inverseInertia,p._original=null),p.isStatic=d}},n.setMass=function(c,d){var f=c.inertia/(c.mass/6);c.inertia=f*(d/6),c.inverseInertia=1/c.inertia,c.mass=d,c.inverseMass=1/c.mass,c.density=c.mass/c.area},n.setDensity=function(c,d){n.setMass(c,d*c.area),c.density=d},n.setInertia=function(c,d){c.inertia=d,c.inverseInertia=1/c.inertia},n.setVertices=function(c,d){d[0].body===c?c.vertices=d:c.vertices=i.create(d,c),c.axes=h.fromVertices(c.vertices),c.area=i.area(c.vertices),n.setMass(c,c.density*c.area);var f=i.centre(c.vertices);i.translate(c.vertices,f,-1),n.setInertia(c,n._inertiaScale*i.inertia(c.vertices,c.mass)),i.translate(c.vertices,c.position),l.update(c.bounds,c.vertices,c.velocity)},n.setParts=function(c,d,f){var p;for(d=d.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,p=0;p<d.length;p++){var x=d[p];x!==c&&(x.parent=c,c.parts.push(x))}if(c.parts.length!==1){if(f=typeof f!="undefined"?f:!0,f){var v=[];for(p=0;p<d.length;p++)v=v.concat(d[p].vertices);i.clockwiseSort(v);var m=i.hull(v),b=i.centre(m);n.setVertices(c,m),i.translate(c.vertices,b)}var g=n._totalProperties(c);c.area=g.area,c.parent=c,c.position.x=g.centre.x,c.position.y=g.centre.y,c.positionPrev.x=g.centre.x,c.positionPrev.y=g.centre.y,n.setMass(c,g.mass),n.setInertia(c,g.inertia),n.setPosition(c,g.centre)}},n.setCentre=function(c,d,f){f?(c.positionPrev.x+=d.x,c.positionPrev.y+=d.y,c.position.x+=d.x,c.position.y+=d.y):(c.positionPrev.x=d.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=d.y-(c.position.y-c.positionPrev.y),c.position.x=d.x,c.position.y=d.y)},n.setPosition=function(c,d,f){var p=r.sub(d,c.position);f?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=p.x,c.velocity.y=p.y,c.speed=r.magnitude(p)):(c.positionPrev.x+=p.x,c.positionPrev.y+=p.y);for(var x=0;x<c.parts.length;x++){var v=c.parts[x];v.position.x+=p.x,v.position.y+=p.y,i.translate(v.vertices,p),l.update(v.bounds,v.vertices,c.velocity)}},n.setAngle=function(c,d,f){var p=d-c.angle;f?(c.anglePrev=c.angle,c.angularVelocity=p,c.angularSpeed=Math.abs(p)):c.anglePrev+=p;for(var x=0;x<c.parts.length;x++){var v=c.parts[x];v.angle+=p,i.rotate(v.vertices,p,c.position),h.rotate(v.axes,p),l.update(v.bounds,v.vertices,c.velocity),x>0&&r.rotateAbout(v.position,p,c.position,v.position)}},n.setVelocity=function(c,d){var f=c.deltaTime/n._baseDelta;c.positionPrev.x=c.position.x-d.x*f,c.positionPrev.y=c.position.y-d.y*f,c.velocity.x=(c.position.x-c.positionPrev.x)/f,c.velocity.y=(c.position.y-c.positionPrev.y)/f,c.speed=r.magnitude(c.velocity)},n.getVelocity=function(c){var d=n._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*d,y:(c.position.y-c.positionPrev.y)*d}},n.getSpeed=function(c){return r.magnitude(n.getVelocity(c))},n.setSpeed=function(c,d){n.setVelocity(c,r.mult(r.normalise(n.getVelocity(c)),d))},n.setAngularVelocity=function(c,d){var f=c.deltaTime/n._baseDelta;c.anglePrev=c.angle-d*f,c.angularVelocity=(c.angle-c.anglePrev)/f,c.angularSpeed=Math.abs(c.angularVelocity)},n.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*n._baseDelta/c.deltaTime},n.getAngularSpeed=function(c){return Math.abs(n.getAngularVelocity(c))},n.setAngularSpeed=function(c,d){n.setAngularVelocity(c,a.sign(n.getAngularVelocity(c))*d)},n.translate=function(c,d,f){n.setPosition(c,r.add(c.position,d),f)},n.rotate=function(c,d,f,p){if(!f)n.setAngle(c,c.angle+d,p);else{var x=Math.cos(d),v=Math.sin(d),m=c.position.x-f.x,b=c.position.y-f.y;n.setPosition(c,{x:f.x+(m*x-b*v),y:f.y+(m*v+b*x)},p),n.setAngle(c,c.angle+d,p)}},n.scale=function(c,d,f,p){var x=0,v=0;p=p||c.position;for(var m=0;m<c.parts.length;m++){var b=c.parts[m];i.scale(b.vertices,d,f,p),b.axes=h.fromVertices(b.vertices),b.area=i.area(b.vertices),n.setMass(b,c.density*b.area),i.translate(b.vertices,{x:-b.position.x,y:-b.position.y}),n.setInertia(b,n._inertiaScale*i.inertia(b.vertices,b.mass)),i.translate(b.vertices,{x:b.position.x,y:b.position.y}),m>0&&(x+=b.area,v+=b.inertia),b.position.x=p.x+(b.position.x-p.x)*d,b.position.y=p.y+(b.position.y-p.y)*f,l.update(b.bounds,b.vertices,c.velocity)}c.parts.length>1&&(c.area=x,c.isStatic||(n.setMass(c,c.density*x),n.setInertia(c,v))),c.circleRadius&&(d===f?c.circleRadius*=d:c.circleRadius=null)},n.update=function(c,d){d=(typeof d!="undefined"?d:1e3/60)*c.timeScale;var f=d*d,p=n._timeCorrection?d/(c.deltaTime||d):1,x=1-c.frictionAir*(d/a._baseDelta),v=(c.position.x-c.positionPrev.x)*p,m=(c.position.y-c.positionPrev.y)*p;c.velocity.x=v*x+c.force.x/c.mass*f,c.velocity.y=m*x+c.force.y/c.mass*f,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=d,c.angularVelocity=(c.angle-c.anglePrev)*x*p+c.torque/c.inertia*f,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var b=0;b<c.parts.length;b++){var g=c.parts[b];i.translate(g.vertices,c.velocity),b>0&&(g.position.x+=c.velocity.x,g.position.y+=c.velocity.y),c.angularVelocity!==0&&(i.rotate(g.vertices,c.angularVelocity,c.position),h.rotate(g.axes,c.angularVelocity),b>0&&r.rotateAbout(g.position,c.angularVelocity,c.position,g.position)),l.update(g.bounds,g.vertices,c.velocity)}},n.updateVelocities=function(c){var d=n._baseDelta/c.deltaTime,f=c.velocity;f.x=(c.position.x-c.positionPrev.x)*d,f.y=(c.position.y-c.positionPrev.y)*d,c.speed=Math.sqrt(f.x*f.x+f.y*f.y),c.angularVelocity=(c.angle-c.anglePrev)*d,c.angularSpeed=Math.abs(c.angularVelocity)},n.applyForce=function(c,d,f){var p={x:d.x-c.position.x,y:d.y-c.position.y};c.force.x+=f.x,c.force.y+=f.y,c.torque+=p.x*f.y-p.y*f.x},n._totalProperties=function(c){for(var d={mass:0,area:0,inertia:0,centre:{x:0,y:0}},f=c.parts.length===1?0:1;f<c.parts.length;f++){var p=c.parts[f],x=p.mass!==1/0?p.mass:1;d.mass+=x,d.area+=p.area,d.inertia+=p.inertia,d.centre=r.add(d.centre,r.mult(p.position,x))}return d.centre=r.div(d.centre,d.mass),d}})()},function(s,t,e){var n={};s.exports=n;var i=e(0);(function(){n.on=function(r,o,a){for(var l=o.split(" "),h,u=0;u<l.length;u++)h=l[u],r.events=r.events||{},r.events[h]=r.events[h]||[],r.events[h].push(a);return a},n.off=function(r,o,a){if(!o){r.events={};return}typeof o=="function"&&(a=o,o=i.keys(r.events).join(" "));for(var l=o.split(" "),h=0;h<l.length;h++){var u=r.events[l[h]],c=[];if(a&&u)for(var d=0;d<u.length;d++)u[d]!==a&&c.push(u[d]);r.events[l[h]]=c}},n.trigger=function(r,o,a){var l,h,u,c,d=r.events;if(d&&i.keys(d).length>0){a||(a={}),l=o.split(" ");for(var f=0;f<l.length;f++)if(h=l[f],u=d[h],u){c=i.clone(a,!1),c.name=h,c.source=r;for(var p=0;p<u.length;p++)u[p].apply(r,[c])}}}})()},function(s,t,e){var n={};s.exports=n;var i=e(5),r=e(0),o=e(1),a=e(4);(function(){n.create=function(l){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},l)},n.setModified=function(l,h,u,c){if(l.isModified=h,h&&l.cache&&(l.cache.allBodies=null,l.cache.allConstraints=null,l.cache.allComposites=null),u&&l.parent&&n.setModified(l.parent,h,u,c),c)for(var d=0;d<l.composites.length;d++){var f=l.composites[d];n.setModified(f,h,u,c)}},n.add=function(l,h){var u=[].concat(h);i.trigger(l,"beforeAdd",{object:h});for(var c=0;c<u.length;c++){var d=u[c];switch(d.type){case"body":if(d.parent!==d){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(l,d);break;case"constraint":n.addConstraint(l,d);break;case"composite":n.addComposite(l,d);break;case"mouseConstraint":n.addConstraint(l,d.constraint);break}}return i.trigger(l,"afterAdd",{object:h}),l},n.remove=function(l,h,u){var c=[].concat(h);i.trigger(l,"beforeRemove",{object:h});for(var d=0;d<c.length;d++){var f=c[d];switch(f.type){case"body":n.removeBody(l,f,u);break;case"constraint":n.removeConstraint(l,f,u);break;case"composite":n.removeComposite(l,f,u);break;case"mouseConstraint":n.removeConstraint(l,f.constraint);break}}return i.trigger(l,"afterRemove",{object:h}),l},n.addComposite=function(l,h){return l.composites.push(h),h.parent=l,n.setModified(l,!0,!0,!1),l},n.removeComposite=function(l,h,u){var c=r.indexOf(l.composites,h);if(c!==-1){var d=n.allBodies(h);n.removeCompositeAt(l,c);for(var f=0;f<d.length;f++)d[f].sleepCounter=0}if(u)for(var f=0;f<l.composites.length;f++)n.removeComposite(l.composites[f],h,!0);return l},n.removeCompositeAt=function(l,h){return l.composites.splice(h,1),n.setModified(l,!0,!0,!1),l},n.addBody=function(l,h){return l.bodies.push(h),n.setModified(l,!0,!0,!1),l},n.removeBody=function(l,h,u){var c=r.indexOf(l.bodies,h);if(c!==-1&&(n.removeBodyAt(l,c),h.sleepCounter=0),u)for(var d=0;d<l.composites.length;d++)n.removeBody(l.composites[d],h,!0);return l},n.removeBodyAt=function(l,h){return l.bodies.splice(h,1),n.setModified(l,!0,!0,!1),l},n.addConstraint=function(l,h){return l.constraints.push(h),n.setModified(l,!0,!0,!1),l},n.removeConstraint=function(l,h,u){var c=r.indexOf(l.constraints,h);if(c!==-1&&n.removeConstraintAt(l,c),u)for(var d=0;d<l.composites.length;d++)n.removeConstraint(l.composites[d],h,!0);return l},n.removeConstraintAt=function(l,h){return l.constraints.splice(h,1),n.setModified(l,!0,!0,!1),l},n.clear=function(l,h,u){if(u)for(var c=0;c<l.composites.length;c++)n.clear(l.composites[c],h,!0);return h?l.bodies=l.bodies.filter(function(d){return d.isStatic}):l.bodies.length=0,l.constraints.length=0,l.composites.length=0,n.setModified(l,!0,!0,!1),l},n.allBodies=function(l){if(l.cache&&l.cache.allBodies)return l.cache.allBodies;for(var h=[].concat(l.bodies),u=0;u<l.composites.length;u++)h=h.concat(n.allBodies(l.composites[u]));return l.cache&&(l.cache.allBodies=h),h},n.allConstraints=function(l){if(l.cache&&l.cache.allConstraints)return l.cache.allConstraints;for(var h=[].concat(l.constraints),u=0;u<l.composites.length;u++)h=h.concat(n.allConstraints(l.composites[u]));return l.cache&&(l.cache.allConstraints=h),h},n.allComposites=function(l){if(l.cache&&l.cache.allComposites)return l.cache.allComposites;for(var h=[].concat(l.composites),u=0;u<l.composites.length;u++)h=h.concat(n.allComposites(l.composites[u]));return l.cache&&(l.cache.allComposites=h),h},n.get=function(l,h,u){var c,d;switch(u){case"body":c=n.allBodies(l);break;case"constraint":c=n.allConstraints(l);break;case"composite":c=n.allComposites(l).concat(l);break}return c?(d=c.filter(function(f){return f.id.toString()===h.toString()}),d.length===0?null:d[0]):null},n.move=function(l,h,u){return n.remove(l,h),n.add(u,h),l},n.rebase=function(l){for(var h=n.allBodies(l).concat(n.allConstraints(l)).concat(n.allComposites(l)),u=0;u<h.length;u++)h[u].id=r.nextId();return l},n.translate=function(l,h,u){for(var c=u?n.allBodies(l):l.bodies,d=0;d<c.length;d++)a.translate(c[d],h);return l},n.rotate=function(l,h,u,c){for(var d=Math.cos(h),f=Math.sin(h),p=c?n.allBodies(l):l.bodies,x=0;x<p.length;x++){var v=p[x],m=v.position.x-u.x,b=v.position.y-u.y;a.setPosition(v,{x:u.x+(m*d-b*f),y:u.y+(m*f+b*d)}),a.rotate(v,h)}return l},n.scale=function(l,h,u,c,d){for(var f=d?n.allBodies(l):l.bodies,p=0;p<f.length;p++){var x=f[p],v=x.position.x-c.x,m=x.position.y-c.y;a.setPosition(x,{x:c.x+v*h,y:c.y+m*u}),a.scale(x,h,u)}return l},n.bounds=function(l){for(var h=n.allBodies(l),u=[],c=0;c<h.length;c+=1){var d=h[c];u.push(d.bounds.min,d.bounds.max)}return o.create(u)}})()},function(s,t,e){var n={};s.exports=n;var i=e(4),r=e(5),o=e(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(a,l){for(var h=l/o._baseDelta,u=n._motionSleepThreshold,c=0;c<a.length;c++){var d=a[c],f=i.getSpeed(d),p=i.getAngularSpeed(d),x=f*f+p*p;if(d.force.x!==0||d.force.y!==0){n.set(d,!1);continue}var v=Math.min(d.motion,x),m=Math.max(d.motion,x);d.motion=n._minBias*v+(1-n._minBias)*m,d.sleepThreshold>0&&d.motion<u?(d.sleepCounter+=1,d.sleepCounter>=d.sleepThreshold/h&&n.set(d,!0)):d.sleepCounter>0&&(d.sleepCounter-=1)}},n.afterCollisions=function(a){for(var l=n._motionSleepThreshold,h=0;h<a.length;h++){var u=a[h];if(u.isActive){var c=u.collision,d=c.bodyA.parent,f=c.bodyB.parent;if(!(d.isSleeping&&f.isSleeping||d.isStatic||f.isStatic)&&(d.isSleeping||f.isSleeping)){var p=d.isSleeping&&!d.isStatic?d:f,x=p===d?f:d;!p.isStatic&&x.motion>l&&n.set(p,!1)}}}},n.set=function(a,l){var h=a.isSleeping;l?(a.isSleeping=!0,a.sleepCounter=a.sleepThreshold,a.positionImpulse.x=0,a.positionImpulse.y=0,a.positionPrev.x=a.position.x,a.positionPrev.y=a.position.y,a.anglePrev=a.angle,a.speed=0,a.angularSpeed=0,a.motion=0,h||r.trigger(a,"sleepStart")):(a.isSleeping=!1,a.sleepCounter=0,h&&r.trigger(a,"sleepEnd"))}})()},function(s,t,e){var n={};s.exports=n;var i=e(3),r=e(9);(function(){var o=[],a={overlap:0,axis:null},l={overlap:0,axis:null};n.create=function(h,u){return{pair:null,collided:!1,bodyA:h,bodyB:u,parentA:h.parent,parentB:u.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},n.collides=function(h,u,c){if(n._overlapAxes(a,h.vertices,u.vertices,h.axes),a.overlap<=0||(n._overlapAxes(l,u.vertices,h.vertices,u.axes),l.overlap<=0))return null;var d=c&&c.table[r.id(h,u)],f;d?f=d.collision:(f=n.create(h,u),f.collided=!0,f.bodyA=h.id<u.id?h:u,f.bodyB=h.id<u.id?u:h,f.parentA=f.bodyA.parent,f.parentB=f.bodyB.parent),h=f.bodyA,u=f.bodyB;var p;a.overlap<l.overlap?p=a:p=l;var x=f.normal,v=f.tangent,m=f.penetration,b=f.supports,g=p.overlap,_=p.axis,w=_.x,M=_.y,E=u.position.x-h.position.x,T=u.position.y-h.position.y;w*E+M*T>=0&&(w=-w,M=-M),x.x=w,x.y=M,v.x=-M,v.y=w,m.x=w*g,m.y=M*g,f.depth=g;var y=n._findSupports(h,u,x,1),S=0;if(i.contains(h.vertices,y[0])&&(b[S++]=y[0]),i.contains(h.vertices,y[1])&&(b[S++]=y[1]),S<2){var A=n._findSupports(u,h,x,-1);i.contains(u.vertices,A[0])&&(b[S++]=A[0]),S<2&&i.contains(u.vertices,A[1])&&(b[S++]=A[1])}return S===0&&(b[S++]=y[0]),f.supportCount=S,f},n._overlapAxes=function(h,u,c,d){var f=u.length,p=c.length,x=u[0].x,v=u[0].y,m=c[0].x,b=c[0].y,g=d.length,_=Number.MAX_VALUE,w=0,M,E,T,y,S,A;for(S=0;S<g;S++){var N=d[S],z=N.x,H=N.y,G=x*z+v*H,B=m*z+b*H,W=G,V=B;for(A=1;A<f;A+=1)y=u[A].x*z+u[A].y*H,y>W?W=y:y<G&&(G=y);for(A=1;A<p;A+=1)y=c[A].x*z+c[A].y*H,y>V?V=y:y<B&&(B=y);if(E=W-B,T=V-G,M=E<T?E:T,M<_&&(_=M,w=S,M<=0))break}h.axis=d[w],h.overlap=_},n._findSupports=function(h,u,c,d){var f=u.vertices,p=f.length,x=h.position.x,v=h.position.y,m=c.x*d,b=c.y*d,g=f[0],_=g,w=m*(x-_.x)+b*(v-_.y),M,E,T;for(T=1;T<p;T+=1)_=f[T],E=m*(x-_.x)+b*(v-_.y),E<w&&(w=E,g=_);return M=f[(p+g.index-1)%p],w=m*(x-M.x)+b*(v-M.y),_=f[(g.index+1)%p],m*(x-_.x)+b*(v-_.y)<w?(o[0]=g,o[1]=_,o):(o[0]=g,o[1]=M,o)}})()},function(s,t,e){var n={};s.exports=n;var i=e(16);(function(){n.create=function(r,o){var a=r.bodyA,l=r.bodyB,h={id:n.id(a,l),bodyA:a,bodyB:l,collision:r,contacts:[i.create(),i.create()],contactCount:0,separation:0,isActive:!0,isSensor:a.isSensor||l.isSensor,timeCreated:o,timeUpdated:o,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(h,r,o),h},n.update=function(r,o,a){var l=o.supports,h=o.supportCount,u=r.contacts,c=o.parentA,d=o.parentB;r.isActive=!0,r.timeUpdated=a,r.collision=o,r.separation=o.depth,r.inverseMass=c.inverseMass+d.inverseMass,r.friction=c.friction<d.friction?c.friction:d.friction,r.frictionStatic=c.frictionStatic>d.frictionStatic?c.frictionStatic:d.frictionStatic,r.restitution=c.restitution>d.restitution?c.restitution:d.restitution,r.slop=c.slop>d.slop?c.slop:d.slop,r.contactCount=h,o.pair=r;var f=l[0],p=u[0],x=l[1],v=u[1];(v.vertex===f||p.vertex===x)&&(u[1]=p,u[0]=p=v,v=u[1]),p.vertex=f,v.vertex=x},n.setActive=function(r,o,a){o?(r.isActive=!0,r.timeUpdated=a):(r.isActive=!1,r.contactCount=0)},n.id=function(r,o){return r.id<o.id?r.id.toString(36)+":"+o.id.toString(36):o.id.toString(36)+":"+r.id.toString(36)}})()},function(s,t,e){var n={};s.exports=n;var i=e(3),r=e(2),o=e(7),a=e(1),l=e(11),h=e(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(u){var c=u;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var d=c.bodyA?r.add(c.bodyA.position,c.pointA):c.pointA,f=c.bodyB?r.add(c.bodyB.position,c.pointB):c.pointB,p=r.magnitude(r.sub(d,f));c.length=typeof c.length!="undefined"?c.length:p,c.id=c.id||h.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var x={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(x.type="pin",x.anchors=!1):c.stiffness<.9&&(x.type="spring"),c.render=h.extend(x,c.render),c},n.preSolveAll=function(u){for(var c=0;c<u.length;c+=1){var d=u[c],f=d.constraintImpulse;d.isStatic||f.x===0&&f.y===0&&f.angle===0||(d.position.x+=f.x,d.position.y+=f.y,d.angle+=f.angle)}},n.solveAll=function(u,c){for(var d=h.clamp(c/h._baseDelta,0,1),f=0;f<u.length;f+=1){var p=u[f],x=!p.bodyA||p.bodyA&&p.bodyA.isStatic,v=!p.bodyB||p.bodyB&&p.bodyB.isStatic;(x||v)&&n.solve(u[f],d)}for(f=0;f<u.length;f+=1)p=u[f],x=!p.bodyA||p.bodyA&&p.bodyA.isStatic,v=!p.bodyB||p.bodyB&&p.bodyB.isStatic,!x&&!v&&n.solve(u[f],d)},n.solve=function(u,c){var d=u.bodyA,f=u.bodyB,p=u.pointA,x=u.pointB;if(!(!d&&!f)){d&&!d.isStatic&&(r.rotate(p,d.angle-u.angleA,p),u.angleA=d.angle),f&&!f.isStatic&&(r.rotate(x,f.angle-u.angleB,x),u.angleB=f.angle);var v=p,m=x;if(d&&(v=r.add(d.position,p)),f&&(m=r.add(f.position,x)),!(!v||!m)){var b=r.sub(v,m),g=r.magnitude(b);g<n._minLength&&(g=n._minLength);var _=(g-u.length)/g,w=u.stiffness>=1||u.length===0,M=w?u.stiffness*c:u.stiffness*c*c,E=u.damping*c,T=r.mult(b,_*M),y=(d?d.inverseMass:0)+(f?f.inverseMass:0),S=(d?d.inverseInertia:0)+(f?f.inverseInertia:0),A=y+S,N,z,H,G,B;if(E>0){var W=r.create();H=r.div(b,g),B=r.sub(f&&r.sub(f.position,f.positionPrev)||W,d&&r.sub(d.position,d.positionPrev)||W),G=r.dot(H,B)}d&&!d.isStatic&&(z=d.inverseMass/y,d.constraintImpulse.x-=T.x*z,d.constraintImpulse.y-=T.y*z,d.position.x-=T.x*z,d.position.y-=T.y*z,E>0&&(d.positionPrev.x-=E*H.x*G*z,d.positionPrev.y-=E*H.y*G*z),N=r.cross(p,T)/A*n._torqueDampen*d.inverseInertia*(1-u.angularStiffness),d.constraintImpulse.angle-=N,d.angle-=N),f&&!f.isStatic&&(z=f.inverseMass/y,f.constraintImpulse.x+=T.x*z,f.constraintImpulse.y+=T.y*z,f.position.x+=T.x*z,f.position.y+=T.y*z,E>0&&(f.positionPrev.x+=E*H.x*G*z,f.positionPrev.y+=E*H.y*G*z),N=r.cross(x,T)/A*n._torqueDampen*f.inverseInertia*(1-u.angularStiffness),f.constraintImpulse.angle+=N,f.angle+=N)}}},n.postSolveAll=function(u){for(var c=0;c<u.length;c++){var d=u[c],f=d.constraintImpulse;if(!(d.isStatic||f.x===0&&f.y===0&&f.angle===0)){o.set(d,!1);for(var p=0;p<d.parts.length;p++){var x=d.parts[p];i.translate(x.vertices,f),p>0&&(x.position.x+=f.x,x.position.y+=f.y),f.angle!==0&&(i.rotate(x.vertices,f.angle,d.position),l.rotate(x.axes,f.angle),p>0&&r.rotateAbout(x.position,f.angle,d.position,x.position)),a.update(x.bounds,x.vertices,d.velocity)}f.angle*=n._warming,f.x*=n._warming,f.y*=n._warming}}},n.pointAWorld=function(u){return{x:(u.bodyA?u.bodyA.position.x:0)+(u.pointA?u.pointA.x:0),y:(u.bodyA?u.bodyA.position.y:0)+(u.pointA?u.pointA.y:0)}},n.pointBWorld=function(u){return{x:(u.bodyB?u.bodyB.position.x:0)+(u.pointB?u.pointB.x:0),y:(u.bodyB?u.bodyB.position.y:0)+(u.pointB?u.pointB.y:0)}},n.currentLength=function(u){var c=(u.bodyA?u.bodyA.position.x:0)+(u.pointA?u.pointA.x:0),d=(u.bodyA?u.bodyA.position.y:0)+(u.pointA?u.pointA.y:0),f=(u.bodyB?u.bodyB.position.x:0)+(u.pointB?u.pointB.x:0),p=(u.bodyB?u.bodyB.position.y:0)+(u.pointB?u.pointB.y:0),x=c-f,v=d-p;return Math.sqrt(x*x+v*v)}})()},function(s,t,e){var n={};s.exports=n;var i=e(2),r=e(0);(function(){n.fromVertices=function(o){for(var a={},l=0;l<o.length;l++){var h=(l+1)%o.length,u=i.normalise({x:o[h].y-o[l].y,y:o[l].x-o[h].x}),c=u.y===0?1/0:u.x/u.y;c=c.toFixed(3).toString(),a[c]=u}return r.values(a)},n.rotate=function(o,a){if(a!==0)for(var l=Math.cos(a),h=Math.sin(a),u=0;u<o.length;u++){var c=o[u],d;d=c.x*l-c.y*h,c.y=c.x*h+c.y*l,c.x=d}}})()},function(s,t,e){var n={};s.exports=n;var i=e(3),r=e(0),o=e(4),a=e(1),l=e(2);(function(){n.rectangle=function(h,u,c,d,f){f=f||{};var p={label:"Rectangle Body",position:{x:h,y:u},vertices:i.fromPath("L 0 0 L "+c+" 0 L "+c+" "+d+" L 0 "+d)};if(f.chamfer){var x=f.chamfer;p.vertices=i.chamfer(p.vertices,x.radius,x.quality,x.qualityMin,x.qualityMax),delete f.chamfer}return o.create(r.extend({},p,f))},n.trapezoid=function(h,u,c,d,f,p){p=p||{},f>=1&&r.warn("Bodies.trapezoid: slope parameter must be < 1."),f*=.5;var x=(1-f*2)*c,v=c*f,m=v+x,b=m+v,g;f<.5?g="L 0 0 L "+v+" "+-d+" L "+m+" "+-d+" L "+b+" 0":g="L 0 0 L "+m+" "+-d+" L "+b+" 0";var _={label:"Trapezoid Body",position:{x:h,y:u},vertices:i.fromPath(g)};if(p.chamfer){var w=p.chamfer;_.vertices=i.chamfer(_.vertices,w.radius,w.quality,w.qualityMin,w.qualityMax),delete p.chamfer}return o.create(r.extend({},_,p))},n.circle=function(h,u,c,d,f){d=d||{};var p={label:"Circle Body",circleRadius:c};f=f||25;var x=Math.ceil(Math.max(10,Math.min(f,c)));return x%2===1&&(x+=1),n.polygon(h,u,x,c,r.extend({},p,d))},n.polygon=function(h,u,c,d,f){if(f=f||{},c<3)return n.circle(h,u,d,f);for(var p=2*Math.PI/c,x="",v=p*.5,m=0;m<c;m+=1){var b=v+m*p,g=Math.cos(b)*d,_=Math.sin(b)*d;x+="L "+g.toFixed(3)+" "+_.toFixed(3)+" "}var w={label:"Polygon Body",position:{x:h,y:u},vertices:i.fromPath(x)};if(f.chamfer){var M=f.chamfer;w.vertices=i.chamfer(w.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete f.chamfer}return o.create(r.extend({},w,f))},n.fromVertices=function(h,u,c,d,f,p,x,v){var m=r.getDecomp(),b,g,_,w,M,E,T,y,S,A,N;for(b=!!(m&&m.quickDecomp),d=d||{},_=[],f=typeof f!="undefined"?f:!1,p=typeof p!="undefined"?p:.01,x=typeof x!="undefined"?x:10,v=typeof v!="undefined"?v:.01,r.isArray(c[0])||(c=[c]),A=0;A<c.length;A+=1)if(E=c[A],w=i.isConvex(E),M=!w,M&&!b&&r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),w||!b)w?E=i.clockwiseSort(E):E=i.hull(E),_.push({position:{x:h,y:u},vertices:E});else{var z=E.map(function(D){return[D.x,D.y]});m.makeCCW(z),p!==!1&&m.removeCollinearPoints(z,p),v!==!1&&m.removeDuplicatePoints&&m.removeDuplicatePoints(z,v);var H=m.quickDecomp(z);for(T=0;T<H.length;T++){var G=H[T],B=G.map(function(D){return{x:D[0],y:D[1]}});x>0&&i.area(B)<x||_.push({position:i.centre(B),vertices:B})}}for(T=0;T<_.length;T++)_[T]=o.create(r.extend(_[T],d));if(f){var W=5;for(T=0;T<_.length;T++){var V=_[T];for(y=T+1;y<_.length;y++){var lt=_[y];if(a.overlaps(V.bounds,lt.bounds)){var st=V.vertices,mt=lt.vertices;for(S=0;S<V.vertices.length;S++)for(N=0;N<lt.vertices.length;N++){var bt=l.magnitudeSquared(l.sub(st[(S+1)%st.length],mt[N])),St=l.magnitudeSquared(l.sub(st[S],mt[(N+1)%mt.length]));bt<W&&St<W&&(st[S].isInternal=!0,mt[N].isInternal=!0)}}}}}return _.length>1?(g=o.create(r.extend({parts:_.slice(0)},d)),o.setPosition(g,{x:h,y:u}),g):_[0]}})()},function(s,t,e){var n={};s.exports=n;var i=e(0),r=e(8);(function(){n.create=function(o){var a={bodies:[],collisions:[],pairs:null};return i.extend(a,o)},n.setBodies=function(o,a){o.bodies=a.slice(0)},n.clear=function(o){o.bodies=[],o.collisions=[]},n.collisions=function(o){var a=o.pairs,l=o.bodies,h=l.length,u=n.canCollide,c=r.collides,d=o.collisions,f=0,p,x;for(l.sort(n._compareBoundsX),p=0;p<h;p++){var v=l[p],m=v.bounds,b=v.bounds.max.x,g=v.bounds.max.y,_=v.bounds.min.y,w=v.isStatic||v.isSleeping,M=v.parts.length,E=M===1;for(x=p+1;x<h;x++){var T=l[x],y=T.bounds;if(y.min.x>b)break;if(!(g<y.min.y||_>y.max.y)&&!(w&&(T.isStatic||T.isSleeping))&&u(v.collisionFilter,T.collisionFilter)){var S=T.parts.length;if(E&&S===1){var A=c(v,T,a);A&&(d[f++]=A)}else for(var N=M>1?1:0,z=S>1?1:0,H=N;H<M;H++)for(var G=v.parts[H],m=G.bounds,B=z;B<S;B++){var W=T.parts[B],y=W.bounds;if(!(m.min.x>y.max.x||m.max.x<y.min.x||m.max.y<y.min.y||m.min.y>y.max.y)){var A=c(G,W,a);A&&(d[f++]=A)}}}}}return d.length!==f&&(d.length=f),d},n.canCollide=function(o,a){return o.group===a.group&&o.group!==0?o.group>0:(o.mask&a.category)!==0&&(a.mask&o.category)!==0},n._compareBoundsX=function(o,a){return o.bounds.min.x-a.bounds.min.x}})()},function(s,t,e){var n={};s.exports=n;var i=e(0);(function(){n.create=function(r){var o={};return r||i.log("Mouse.create: element was undefined, defaulting to document.body","warn"),o.element=r||document.body,o.absolute={x:0,y:0},o.position={x:0,y:0},o.mousedownPosition={x:0,y:0},o.mouseupPosition={x:0,y:0},o.offset={x:0,y:0},o.scale={x:1,y:1},o.wheelDelta=0,o.button=-1,o.pixelRatio=parseInt(o.element.getAttribute("data-pixel-ratio"),10)||1,o.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},o.mousemove=function(a){var l=n._getRelativeMousePosition(a,o.element,o.pixelRatio),h=a.changedTouches;h&&(o.button=0,a.preventDefault()),o.absolute.x=l.x,o.absolute.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.sourceEvents.mousemove=a},o.mousedown=function(a){var l=n._getRelativeMousePosition(a,o.element,o.pixelRatio),h=a.changedTouches;h?(o.button=0,a.preventDefault()):o.button=a.button,o.absolute.x=l.x,o.absolute.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.mousedownPosition.x=o.position.x,o.mousedownPosition.y=o.position.y,o.sourceEvents.mousedown=a},o.mouseup=function(a){var l=n._getRelativeMousePosition(a,o.element,o.pixelRatio),h=a.changedTouches;h&&a.preventDefault(),o.button=-1,o.absolute.x=l.x,o.absolute.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.mouseupPosition.x=o.position.x,o.mouseupPosition.y=o.position.y,o.sourceEvents.mouseup=a},o.mousewheel=function(a){o.wheelDelta=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail)),a.preventDefault(),o.sourceEvents.mousewheel=a},n.setElement(o,o.element),o},n.setElement=function(r,o){r.element=o,o.addEventListener("mousemove",r.mousemove,{passive:!0}),o.addEventListener("mousedown",r.mousedown,{passive:!0}),o.addEventListener("mouseup",r.mouseup,{passive:!0}),o.addEventListener("wheel",r.mousewheel,{passive:!1}),o.addEventListener("touchmove",r.mousemove,{passive:!1}),o.addEventListener("touchstart",r.mousedown,{passive:!1}),o.addEventListener("touchend",r.mouseup,{passive:!1})},n.clearSourceEvents=function(r){r.sourceEvents.mousemove=null,r.sourceEvents.mousedown=null,r.sourceEvents.mouseup=null,r.sourceEvents.mousewheel=null,r.wheelDelta=0},n.setOffset=function(r,o){r.offset.x=o.x,r.offset.y=o.y,r.position.x=r.absolute.x*r.scale.x+r.offset.x,r.position.y=r.absolute.y*r.scale.y+r.offset.y},n.setScale=function(r,o){r.scale.x=o.x,r.scale.y=o.y,r.position.x=r.absolute.x*r.scale.x+r.offset.x,r.position.y=r.absolute.y*r.scale.y+r.offset.y},n._getRelativeMousePosition=function(r,o,a){var l=o.getBoundingClientRect(),h=document.documentElement||document.body.parentNode||document.body,u=window.pageXOffset!==void 0?window.pageXOffset:h.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:h.scrollTop,d=r.changedTouches,f,p;return d?(f=d[0].pageX-l.left-u,p=d[0].pageY-l.top-c):(f=r.pageX-l.left-u,p=r.pageY-l.top-c),{x:f/(o.clientWidth/(o.width||o.clientWidth)*a),y:p/(o.clientHeight/(o.height||o.clientHeight)*a)}}})()},function(s,t,e){var n={};s.exports=n;var i=e(0);(function(){n._registry={},n.register=function(r){if(n.isPlugin(r)||i.warn("Plugin.register:",n.toString(r),"does not implement all required fields."),r.name in n._registry){var o=n._registry[r.name],a=n.versionParse(r.version).number,l=n.versionParse(o.version).number;a>l?(i.warn("Plugin.register:",n.toString(o),"was upgraded to",n.toString(r)),n._registry[r.name]=r):a<l?i.warn("Plugin.register:",n.toString(o),"can not be downgraded to",n.toString(r)):r!==o&&i.warn("Plugin.register:",n.toString(r),"is already registered to different plugin object")}else n._registry[r.name]=r;return r},n.resolve=function(r){return n._registry[n.dependencyParse(r).name]},n.toString=function(r){return typeof r=="string"?r:(r.name||"anonymous")+"@"+(r.version||r.range||"0.0.0")},n.isPlugin=function(r){return r&&r.name&&r.version&&r.install},n.isUsed=function(r,o){return r.used.indexOf(o)>-1},n.isFor=function(r,o){var a=r.for&&n.dependencyParse(r.for);return!r.for||o.name===a.name&&n.versionSatisfies(o.version,a.range)},n.use=function(r,o){if(r.uses=(r.uses||[]).concat(o||[]),r.uses.length===0){i.warn("Plugin.use:",n.toString(r),"does not specify any dependencies to install.");return}for(var a=n.dependencies(r),l=i.topologicalSort(a),h=[],u=0;u<l.length;u+=1)if(l[u]!==r.name){var c=n.resolve(l[u]);if(!c){h.push("\u274C "+l[u]);continue}n.isUsed(r,c.name)||(n.isFor(c,r)||(i.warn("Plugin.use:",n.toString(c),"is for",c.for,"but installed on",n.toString(r)+"."),c._warned=!0),c.install?c.install(r):(i.warn("Plugin.use:",n.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(h.push("\u{1F536} "+n.toString(c)),delete c._warned):h.push("\u2705 "+n.toString(c)),r.used.push(c.name))}h.length>0&&i.info(h.join("  "))},n.dependencies=function(r,o){var a=n.dependencyParse(r),l=a.name;if(o=o||{},!(l in o)){r=n.resolve(r)||r,o[l]=i.map(r.uses||[],function(u){n.isPlugin(u)&&n.register(u);var c=n.dependencyParse(u),d=n.resolve(u);return d&&!n.versionSatisfies(d.version,c.range)?(i.warn("Plugin.dependencies:",n.toString(d),"does not satisfy",n.toString(c),"used by",n.toString(a)+"."),d._warned=!0,r._warned=!0):d||(i.warn("Plugin.dependencies:",n.toString(u),"used by",n.toString(a),"could not be resolved."),r._warned=!0),c.name});for(var h=0;h<o[l].length;h+=1)n.dependencies(o[l][h],o);return o}},n.dependencyParse=function(r){if(i.isString(r)){var o=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return o.test(r)||i.warn("Plugin.dependencyParse:",r,"is not a valid dependency string."),{name:r.split("@")[0],range:r.split("@")[1]||"*"}}return{name:r.name,range:r.range||r.version}},n.versionParse=function(r){var o=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;o.test(r)||i.warn("Plugin.versionParse:",r,"is not a valid version or range.");var a=o.exec(r),l=Number(a[4]),h=Number(a[5]),u=Number(a[6]);return{isRange:!!(a[1]||a[2]),version:a[3],range:r,operator:a[1]||a[2]||"",major:l,minor:h,patch:u,parts:[l,h,u],prerelease:a[7],number:l*1e8+h*1e4+u}},n.versionSatisfies=function(r,o){o=o||"*";var a=n.versionParse(o),l=n.versionParse(r);if(a.isRange){if(a.operator==="*"||r==="*")return!0;if(a.operator===">")return l.number>a.number;if(a.operator===">=")return l.number>=a.number;if(a.operator==="~")return l.major===a.major&&l.minor===a.minor&&l.patch>=a.patch;if(a.operator==="^")return a.major>0?l.major===a.major&&l.number>=a.number:a.minor>0?l.minor===a.minor&&l.patch>=a.patch:l.patch===a.patch}return r===o||r==="*"}})()},function(s,t){var e={};s.exports=e,function(){e.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}}()},function(s,t,e){var n={};s.exports=n;var i=e(7),r=e(18),o=e(13),a=e(19),l=e(5),h=e(6),u=e(10),c=e(0),d=e(4);(function(){n._deltaMax=1e3/60,n.create=function(f){f=f||{};var p={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},x=c.extend(p,f);return x.world=f.world||h.create({label:"World"}),x.pairs=f.pairs||a.create(),x.detector=f.detector||o.create(),x.detector.pairs=x.pairs,x.grid={buckets:[]},x.world.gravity=x.gravity,x.broadphase=x.grid,x.metrics={},x},n.update=function(f,p){var x=c.now(),v=f.world,m=f.detector,b=f.pairs,g=f.timing,_=g.timestamp,w;p>n._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",n._deltaMax.toFixed(3),"ms."),p=typeof p!="undefined"?p:c._baseDelta,p*=g.timeScale,g.timestamp+=p,g.lastDelta=p;var M={timestamp:g.timestamp,delta:p};l.trigger(f,"beforeUpdate",M);var E=h.allBodies(v),T=h.allConstraints(v);for(v.isModified&&(o.setBodies(m,E),h.setModified(v,!1,!1,!0)),f.enableSleeping&&i.update(E,p),n._bodiesApplyGravity(E,f.gravity),p>0&&n._bodiesUpdate(E,p),l.trigger(f,"beforeSolve",M),u.preSolveAll(E),w=0;w<f.constraintIterations;w++)u.solveAll(T,p);u.postSolveAll(E);var y=o.collisions(m);a.update(b,y,_),f.enableSleeping&&i.afterCollisions(b.list),b.collisionStart.length>0&&l.trigger(f,"collisionStart",{pairs:b.collisionStart,timestamp:g.timestamp,delta:p});var S=c.clamp(20/f.positionIterations,0,1);for(r.preSolvePosition(b.list),w=0;w<f.positionIterations;w++)r.solvePosition(b.list,p,S);for(r.postSolvePosition(E),u.preSolveAll(E),w=0;w<f.constraintIterations;w++)u.solveAll(T,p);for(u.postSolveAll(E),r.preSolveVelocity(b.list),w=0;w<f.velocityIterations;w++)r.solveVelocity(b.list,p);return n._bodiesUpdateVelocities(E),b.collisionActive.length>0&&l.trigger(f,"collisionActive",{pairs:b.collisionActive,timestamp:g.timestamp,delta:p}),b.collisionEnd.length>0&&l.trigger(f,"collisionEnd",{pairs:b.collisionEnd,timestamp:g.timestamp,delta:p}),n._bodiesClearForces(E),l.trigger(f,"afterUpdate",M),f.timing.lastElapsed=c.now()-x,f},n.merge=function(f,p){if(c.extend(f,p),p.world){f.world=p.world,n.clear(f);for(var x=h.allBodies(f.world),v=0;v<x.length;v++){var m=x[v];i.set(m,!1),m.id=c.nextId()}}},n.clear=function(f){a.clear(f.pairs),o.clear(f.detector)},n._bodiesClearForces=function(f){for(var p=f.length,x=0;x<p;x++){var v=f[x];v.force.x=0,v.force.y=0,v.torque=0}},n._bodiesApplyGravity=function(f,p){var x=typeof p.scale!="undefined"?p.scale:.001,v=f.length;if(!(p.x===0&&p.y===0||x===0))for(var m=0;m<v;m++){var b=f[m];b.isStatic||b.isSleeping||(b.force.y+=b.mass*p.y*x,b.force.x+=b.mass*p.x*x)}},n._bodiesUpdate=function(f,p){for(var x=f.length,v=0;v<x;v++){var m=f[v];m.isStatic||m.isSleeping||d.update(m,p)}},n._bodiesUpdateVelocities=function(f){for(var p=f.length,x=0;x<p;x++)d.updateVelocities(f[x])}})()},function(s,t,e){var n={};s.exports=n;var i=e(3),r=e(0),o=e(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(a){var l,h,u,c=a.length;for(l=0;l<c;l++)h=a[l],h.isActive&&(u=h.contactCount,h.collision.parentA.totalContacts+=u,h.collision.parentB.totalContacts+=u)},n.solvePosition=function(a,l,h){var u,c,d,f,p,x,v,m,b=n._positionDampen*(h||1),g=r.clamp(l/r._baseDelta,0,1),_=a.length;for(u=0;u<_;u++)c=a[u],!(!c.isActive||c.isSensor)&&(d=c.collision,f=d.parentA,p=d.parentB,x=d.normal,c.separation=d.depth+x.x*(p.positionImpulse.x-f.positionImpulse.x)+x.y*(p.positionImpulse.y-f.positionImpulse.y));for(u=0;u<_;u++)c=a[u],!(!c.isActive||c.isSensor)&&(d=c.collision,f=d.parentA,p=d.parentB,x=d.normal,m=c.separation-c.slop*g,(f.isStatic||p.isStatic)&&(m*=2),f.isStatic||f.isSleeping||(v=b/f.totalContacts,f.positionImpulse.x+=x.x*m*v,f.positionImpulse.y+=x.y*m*v),p.isStatic||p.isSleeping||(v=b/p.totalContacts,p.positionImpulse.x-=x.x*m*v,p.positionImpulse.y-=x.y*m*v))},n.postSolvePosition=function(a){for(var l=n._positionWarming,h=a.length,u=i.translate,c=o.update,d=0;d<h;d++){var f=a[d],p=f.positionImpulse,x=p.x,v=p.y,m=f.velocity;if(f.totalContacts=0,x!==0||v!==0){for(var b=0;b<f.parts.length;b++){var g=f.parts[b];u(g.vertices,p),c(g.bounds,g.vertices,m),g.position.x+=x,g.position.y+=v}f.positionPrev.x+=x,f.positionPrev.y+=v,x*m.x+v*m.y<0?(p.x=0,p.y=0):(p.x*=l,p.y*=l)}}},n.preSolveVelocity=function(a){var l=a.length,h,u;for(h=0;h<l;h++){var c=a[h];if(!(!c.isActive||c.isSensor)){var d=c.contacts,f=c.contactCount,p=c.collision,x=p.parentA,v=p.parentB,m=p.normal,b=p.tangent;for(u=0;u<f;u++){var g=d[u],_=g.vertex,w=g.normalImpulse,M=g.tangentImpulse;if(w!==0||M!==0){var E=m.x*w+b.x*M,T=m.y*w+b.y*M;x.isStatic||x.isSleeping||(x.positionPrev.x+=E*x.inverseMass,x.positionPrev.y+=T*x.inverseMass,x.anglePrev+=x.inverseInertia*((_.x-x.position.x)*T-(_.y-x.position.y)*E)),v.isStatic||v.isSleeping||(v.positionPrev.x-=E*v.inverseMass,v.positionPrev.y-=T*v.inverseMass,v.anglePrev-=v.inverseInertia*((_.x-v.position.x)*T-(_.y-v.position.y)*E))}}}}},n.solveVelocity=function(a,l){var h=l/r._baseDelta,u=h*h,c=u*h,d=-n._restingThresh*h,f=n._restingThreshTangent,p=n._frictionNormalMultiplier*h,x=n._frictionMaxStatic,v=a.length,m,b,g,_;for(g=0;g<v;g++){var w=a[g];if(!(!w.isActive||w.isSensor)){var M=w.collision,E=M.parentA,T=M.parentB,y=M.normal.x,S=M.normal.y,A=M.tangent.x,N=M.tangent.y,z=w.inverseMass,H=w.friction*w.frictionStatic*p,G=w.contacts,B=w.contactCount,W=1/B,V=E.position.x-E.positionPrev.x,lt=E.position.y-E.positionPrev.y,st=E.angle-E.anglePrev,mt=T.position.x-T.positionPrev.x,bt=T.position.y-T.positionPrev.y,St=T.angle-T.anglePrev;for(_=0;_<B;_++){var D=G[_],O=D.vertex,I=O.x-E.position.x,P=O.y-E.position.y,$=O.x-T.position.x,ct=O.y-T.position.y,q=V-P*st,gt=lt+I*st,vt=mt-ct*St,dt=bt+$*St,R=q-vt,j=gt-dt,Q=y*R+S*j,et=A*R+N*j,k=w.separation+Q,U=Math.min(k,1);U=k<0?0:U;var tt=U*H;et<-tt||et>tt?(b=et>0?et:-et,m=w.friction*(et>0?1:-1)*c,m<-b?m=-b:m>b&&(m=b)):(m=et,b=x);var pt=I*S-P*y,Ft=$*S-ct*y,F=W/(z+E.inverseInertia*pt*pt+T.inverseInertia*Ft*Ft),C=(1+w.restitution)*Q*F;if(m*=F,Q<d)D.normalImpulse=0;else{var K=D.normalImpulse;D.normalImpulse+=C,D.normalImpulse>0&&(D.normalImpulse=0),C=D.normalImpulse-K}if(et<-f||et>f)D.tangentImpulse=0;else{var rt=D.tangentImpulse;D.tangentImpulse+=m,D.tangentImpulse<-b&&(D.tangentImpulse=-b),D.tangentImpulse>b&&(D.tangentImpulse=b),m=D.tangentImpulse-rt}var ht=y*C+A*m,ot=S*C+N*m;E.isStatic||E.isSleeping||(E.positionPrev.x+=ht*E.inverseMass,E.positionPrev.y+=ot*E.inverseMass,E.anglePrev+=(I*ot-P*ht)*E.inverseInertia),T.isStatic||T.isSleeping||(T.positionPrev.x-=ht*T.inverseMass,T.positionPrev.y-=ot*T.inverseMass,T.anglePrev-=($*ot-ct*ht)*T.inverseInertia)}}}}})()},function(s,t,e){var n={};s.exports=n;var i=e(9),r=e(0);(function(){n.create=function(o){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},o)},n.update=function(o,a,l){var h=i.update,u=i.create,c=i.setActive,d=o.table,f=o.list,p=f.length,x=p,v=o.collisionStart,m=o.collisionEnd,b=o.collisionActive,g=a.length,_=0,w=0,M=0,E,T,y;for(y=0;y<g;y++)E=a[y],T=E.pair,T?(T.isActive&&(b[M++]=T),h(T,E,l)):(T=u(E,l),d[T.id]=T,v[_++]=T,f[x++]=T);for(x=0,p=f.length,y=0;y<p;y++)T=f[y],T.timeUpdated>=l?f[x++]=T:(c(T,!1,l),T.collision.bodyA.sleepCounter>0&&T.collision.bodyB.sleepCounter>0?f[x++]=T:(m[w++]=T,delete d[T.id]));f.length!==x&&(f.length=x),v.length!==_&&(v.length=_),m.length!==w&&(m.length=w),b.length!==M&&(b.length=M)},n.clear=function(o){return o.table={},o.list.length=0,o.collisionStart.length=0,o.collisionActive.length=0,o.collisionEnd.length=0,o}})()},function(s,t,e){var n=s.exports=e(21);n.Axes=e(11),n.Bodies=e(12),n.Body=e(4),n.Bounds=e(1),n.Collision=e(8),n.Common=e(0),n.Composite=e(6),n.Composites=e(22),n.Constraint=e(10),n.Contact=e(16),n.Detector=e(13),n.Engine=e(17),n.Events=e(5),n.Grid=e(23),n.Mouse=e(14),n.MouseConstraint=e(24),n.Pair=e(9),n.Pairs=e(19),n.Plugin=e(15),n.Query=e(25),n.Render=e(26),n.Resolver=e(18),n.Runner=e(27),n.SAT=e(28),n.Sleeping=e(7),n.Svg=e(29),n.Vector=e(2),n.Vertices=e(3),n.World=e(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run \u27A4 use Matter.Runner.run(engine) instead")},function(s,t,e){var n={};s.exports=n;var i=e(15),r=e(0);(function(){n.name="matter-js",n.version="0.20.0",n.uses=[],n.used=[],n.use=function(){i.use(n,Array.prototype.slice.call(arguments))},n.before=function(o,a){return o=o.replace(/^Matter./,""),r.chainPathBefore(n,o,a)},n.after=function(o,a){return o=o.replace(/^Matter./,""),r.chainPathAfter(n,o,a)}})()},function(s,t,e){var n={};s.exports=n;var i=e(6),r=e(10),o=e(0),a=e(4),l=e(12),h=o.deprecated;(function(){n.stack=function(u,c,d,f,p,x,v){for(var m=i.create({label:"Stack"}),b=u,g=c,_,w=0,M=0;M<f;M++){for(var E=0,T=0;T<d;T++){var y=v(b,g,T,M,_,w);if(y){var S=y.bounds.max.y-y.bounds.min.y,A=y.bounds.max.x-y.bounds.min.x;S>E&&(E=S),a.translate(y,{x:A*.5,y:S*.5}),b=y.bounds.max.x+p,i.addBody(m,y),_=y,w+=1}else b+=p}g+=E+x,b=u}return m},n.chain=function(u,c,d,f,p,x){for(var v=u.bodies,m=1;m<v.length;m++){var b=v[m-1],g=v[m],_=b.bounds.max.y-b.bounds.min.y,w=b.bounds.max.x-b.bounds.min.x,M=g.bounds.max.y-g.bounds.min.y,E=g.bounds.max.x-g.bounds.min.x,T={bodyA:b,pointA:{x:w*c,y:_*d},bodyB:g,pointB:{x:E*f,y:M*p}},y=o.extend(T,x);i.addConstraint(u,r.create(y))}return u.label+=" Chain",u},n.mesh=function(u,c,d,f,p){var x=u.bodies,v,m,b,g,_;for(v=0;v<d;v++){for(m=1;m<c;m++)b=x[m-1+v*c],g=x[m+v*c],i.addConstraint(u,r.create(o.extend({bodyA:b,bodyB:g},p)));if(v>0)for(m=0;m<c;m++)b=x[m+(v-1)*c],g=x[m+v*c],i.addConstraint(u,r.create(o.extend({bodyA:b,bodyB:g},p))),f&&m>0&&(_=x[m-1+(v-1)*c],i.addConstraint(u,r.create(o.extend({bodyA:_,bodyB:g},p)))),f&&m<c-1&&(_=x[m+1+(v-1)*c],i.addConstraint(u,r.create(o.extend({bodyA:_,bodyB:g},p))))}return u.label+=" Mesh",u},n.pyramid=function(u,c,d,f,p,x,v){return n.stack(u,c,d,f,p,x,function(m,b,g,_,w,M){var E=Math.min(f,Math.ceil(d/2)),T=w?w.bounds.max.x-w.bounds.min.x:0;if(!(_>E)){_=E-_;var y=_,S=d-1-_;if(!(g<y||g>S)){M===1&&a.translate(w,{x:(g+(d%2===1?1:-1))*T,y:0});var A=w?g*T:0;return v(u+A+g*p,b,g,_,w,M)}}})},n.newtonsCradle=function(u,c,d,f,p){for(var x=i.create({label:"Newtons Cradle"}),v=0;v<d;v++){var m=1.9,b=l.circle(u+v*(f*m),c+p,f,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),g=r.create({pointA:{x:u+v*(f*m),y:c},bodyB:b});i.addBody(x,b),i.addConstraint(x,g)}return x},h(n,"newtonsCradle","Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),n.car=function(u,c,d,f,p){var x=a.nextGroup(!0),v=20,m=-d*.5+v,b=d*.5-v,g=0,_=i.create({label:"Car"}),w=l.rectangle(u,c,d,f,{collisionFilter:{group:x},chamfer:{radius:f*.5},density:2e-4}),M=l.circle(u+m,c+g,p,{collisionFilter:{group:x},friction:.8}),E=l.circle(u+b,c+g,p,{collisionFilter:{group:x},friction:.8}),T=r.create({bodyB:w,pointB:{x:m,y:g},bodyA:M,stiffness:1,length:0}),y=r.create({bodyB:w,pointB:{x:b,y:g},bodyA:E,stiffness:1,length:0});return i.addBody(_,w),i.addBody(_,M),i.addBody(_,E),i.addConstraint(_,T),i.addConstraint(_,y),_},h(n,"car","Composites.car \u27A4 moved to car example"),n.softBody=function(u,c,d,f,p,x,v,m,b,g){b=o.extend({inertia:1/0},b),g=o.extend({stiffness:.2,render:{type:"line",anchors:!1}},g);var _=n.stack(u,c,d,f,p,x,function(w,M){return l.circle(w,M,m,b)});return n.mesh(_,d,f,v,g),_.label="Soft Body",_},h(n,"softBody","Composites.softBody \u27A4 moved to softBody and cloth examples")})()},function(s,t,e){var n={};s.exports=n;var i=e(9),r=e(0),o=r.deprecated;(function(){n.create=function(a){var l={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return r.extend(l,a)},n.update=function(a,l,h,u){var c,d,f,p=h.world,x=a.buckets,v,m,b=!1;for(c=0;c<l.length;c++){var g=l[c];if(!(g.isSleeping&&!u)&&!(p.bounds&&(g.bounds.max.x<p.bounds.min.x||g.bounds.min.x>p.bounds.max.x||g.bounds.max.y<p.bounds.min.y||g.bounds.min.y>p.bounds.max.y))){var _=n._getRegion(a,g);if(!g.region||_.id!==g.region.id||u){(!g.region||u)&&(g.region=_);var w=n._regionUnion(_,g.region);for(d=w.startCol;d<=w.endCol;d++)for(f=w.startRow;f<=w.endRow;f++){m=n._getBucketId(d,f),v=x[m];var M=d>=_.startCol&&d<=_.endCol&&f>=_.startRow&&f<=_.endRow,E=d>=g.region.startCol&&d<=g.region.endCol&&f>=g.region.startRow&&f<=g.region.endRow;!M&&E&&E&&v&&n._bucketRemoveBody(a,v,g),(g.region===_||M&&!E||u)&&(v||(v=n._createBucket(x,m)),n._bucketAddBody(a,v,g))}g.region=_,b=!0}}}b&&(a.pairsList=n._createActivePairsList(a))},o(n,"update","Grid.update \u27A4 replaced by Matter.Detector"),n.clear=function(a){a.buckets={},a.pairs={},a.pairsList=[]},o(n,"clear","Grid.clear \u27A4 replaced by Matter.Detector"),n._regionUnion=function(a,l){var h=Math.min(a.startCol,l.startCol),u=Math.max(a.endCol,l.endCol),c=Math.min(a.startRow,l.startRow),d=Math.max(a.endRow,l.endRow);return n._createRegion(h,u,c,d)},n._getRegion=function(a,l){var h=l.bounds,u=Math.floor(h.min.x/a.bucketWidth),c=Math.floor(h.max.x/a.bucketWidth),d=Math.floor(h.min.y/a.bucketHeight),f=Math.floor(h.max.y/a.bucketHeight);return n._createRegion(u,c,d,f)},n._createRegion=function(a,l,h,u){return{id:a+","+l+","+h+","+u,startCol:a,endCol:l,startRow:h,endRow:u}},n._getBucketId=function(a,l){return"C"+a+"R"+l},n._createBucket=function(a,l){var h=a[l]=[];return h},n._bucketAddBody=function(a,l,h){var u=a.pairs,c=i.id,d=l.length,f;for(f=0;f<d;f++){var p=l[f];if(!(h.id===p.id||h.isStatic&&p.isStatic)){var x=c(h,p),v=u[x];v?v[2]+=1:u[x]=[h,p,1]}}l.push(h)},n._bucketRemoveBody=function(a,l,h){var u=a.pairs,c=i.id,d;l.splice(r.indexOf(l,h),1);var f=l.length;for(d=0;d<f;d++){var p=u[c(h,l[d])];p&&(p[2]-=1)}},n._createActivePairsList=function(a){var l,h=a.pairs,u=r.keys(h),c=u.length,d=[],f;for(f=0;f<c;f++)l=h[u[f]],l[2]>0?d.push(l):delete h[u[f]];return d}})()},function(s,t,e){var n={};s.exports=n;var i=e(3),r=e(7),o=e(14),a=e(5),l=e(13),h=e(10),u=e(6),c=e(0),d=e(1);(function(){n.create=function(f,p){var x=(f?f.mouse:null)||(p?p.mouse:null);x||(f&&f.render&&f.render.canvas?x=o.create(f.render.canvas):p&&p.element?x=o.create(p.element):(x=o.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var v=h.create({label:"Mouse Constraint",pointA:x.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),m={type:"mouseConstraint",mouse:x,element:null,body:null,constraint:v,collisionFilter:{category:1,mask:4294967295,group:0}},b=c.extend(m,p);return a.on(f,"beforeUpdate",function(){var g=u.allBodies(f.world);n.update(b,g),n._triggerEvents(b)}),b},n.update=function(f,p){var x=f.mouse,v=f.constraint,m=f.body;if(x.button===0){if(v.bodyB)r.set(v.bodyB,!1),v.pointA=x.position;else for(var b=0;b<p.length;b++)if(m=p[b],d.contains(m.bounds,x.position)&&l.canCollide(m.collisionFilter,f.collisionFilter))for(var g=m.parts.length>1?1:0;g<m.parts.length;g++){var _=m.parts[g];if(i.contains(_.vertices,x.position)){v.pointA=x.position,v.bodyB=f.body=m,v.pointB={x:x.position.x-m.position.x,y:x.position.y-m.position.y},v.angleB=m.angle,r.set(m,!1),a.trigger(f,"startdrag",{mouse:x,body:m});break}}}else v.bodyB=f.body=null,v.pointB=null,m&&a.trigger(f,"enddrag",{mouse:x,body:m})},n._triggerEvents=function(f){var p=f.mouse,x=p.sourceEvents;x.mousemove&&a.trigger(f,"mousemove",{mouse:p}),x.mousedown&&a.trigger(f,"mousedown",{mouse:p}),x.mouseup&&a.trigger(f,"mouseup",{mouse:p}),o.clearSourceEvents(p)}})()},function(s,t,e){var n={};s.exports=n;var i=e(2),r=e(8),o=e(1),a=e(12),l=e(3);(function(){n.collides=function(h,u){for(var c=[],d=u.length,f=h.bounds,p=r.collides,x=o.overlaps,v=0;v<d;v++){var m=u[v],b=m.parts.length,g=b===1?0:1;if(x(m.bounds,f))for(var _=g;_<b;_++){var w=m.parts[_];if(x(w.bounds,f)){var M=p(w,h);if(M){c.push(M);break}}}}return c},n.ray=function(h,u,c,d){d=d||1e-100;for(var f=i.angle(u,c),p=i.magnitude(i.sub(u,c)),x=(c.x+u.x)*.5,v=(c.y+u.y)*.5,m=a.rectangle(x,v,p,d,{angle:f}),b=n.collides(m,h),g=0;g<b.length;g+=1){var _=b[g];_.body=_.bodyB=_.bodyA}return b},n.region=function(h,u,c){for(var d=[],f=0;f<h.length;f++){var p=h[f],x=o.overlaps(p.bounds,u);(x&&!c||!x&&c)&&d.push(p)}return d},n.point=function(h,u){for(var c=[],d=0;d<h.length;d++){var f=h[d];if(o.contains(f.bounds,u))for(var p=f.parts.length===1?0:1;p<f.parts.length;p++){var x=f.parts[p];if(o.contains(x.bounds,u)&&l.contains(x.vertices,u)){c.push(f);break}}}return c}})()},function(s,t,e){var n={};s.exports=n;var i=e(4),r=e(0),o=e(6),a=e(1),l=e(5),h=e(2),u=e(14);(function(){var c,d;typeof window!="undefined"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(g){window.setTimeout(function(){g(r.now())},1e3/60)},d=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(g){var _={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!g.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},w=r.extend(_,g);return w.canvas&&(w.canvas.width=w.options.width||w.canvas.width,w.canvas.height=w.options.height||w.canvas.height),w.mouse=g.mouse,w.engine=g.engine,w.canvas=w.canvas||x(w.options.width,w.options.height),w.context=w.canvas.getContext("2d"),w.textures={},w.bounds=w.bounds||{min:{x:0,y:0},max:{x:w.canvas.width,y:w.canvas.height}},w.controller=n,w.options.showBroadphase=!1,w.options.pixelRatio!==1&&n.setPixelRatio(w,w.options.pixelRatio),r.isElement(w.element)&&w.element.appendChild(w.canvas),w},n.run=function(g){(function _(w){g.frameRequestId=c(_),f(g,w),n.world(g,w),g.context.setTransform(g.options.pixelRatio,0,0,g.options.pixelRatio,0,0),(g.options.showStats||g.options.showDebug)&&n.stats(g,g.context,w),(g.options.showPerformance||g.options.showDebug)&&n.performance(g,g.context,w),g.context.setTransform(1,0,0,1,0,0)})()},n.stop=function(g){d(g.frameRequestId)},n.setPixelRatio=function(g,_){var w=g.options,M=g.canvas;_==="auto"&&(_=v(M)),w.pixelRatio=_,M.setAttribute("data-pixel-ratio",_),M.width=w.width*_,M.height=w.height*_,M.style.width=w.width+"px",M.style.height=w.height+"px"},n.setSize=function(g,_,w){g.options.width=_,g.options.height=w,g.bounds.max.x=g.bounds.min.x+_,g.bounds.max.y=g.bounds.min.y+w,g.options.pixelRatio!==1?n.setPixelRatio(g,g.options.pixelRatio):(g.canvas.width=_,g.canvas.height=w)},n.lookAt=function(g,_,w,M){M=typeof M!="undefined"?M:!0,_=r.isArray(_)?_:[_],w=w||{x:0,y:0};for(var E={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},T=0;T<_.length;T+=1){var y=_[T],S=y.bounds?y.bounds.min:y.min||y.position||y,A=y.bounds?y.bounds.max:y.max||y.position||y;S&&A&&(S.x<E.min.x&&(E.min.x=S.x),A.x>E.max.x&&(E.max.x=A.x),S.y<E.min.y&&(E.min.y=S.y),A.y>E.max.y&&(E.max.y=A.y))}var N=E.max.x-E.min.x+2*w.x,z=E.max.y-E.min.y+2*w.y,H=g.canvas.height,G=g.canvas.width,B=G/H,W=N/z,V=1,lt=1;W>B?lt=W/B:V=B/W,g.options.hasBounds=!0,g.bounds.min.x=E.min.x,g.bounds.max.x=E.min.x+N*V,g.bounds.min.y=E.min.y,g.bounds.max.y=E.min.y+z*lt,M&&(g.bounds.min.x+=N*.5-N*V*.5,g.bounds.max.x+=N*.5-N*V*.5,g.bounds.min.y+=z*.5-z*lt*.5,g.bounds.max.y+=z*.5-z*lt*.5),g.bounds.min.x-=w.x,g.bounds.max.x-=w.x,g.bounds.min.y-=w.y,g.bounds.max.y-=w.y,g.mouse&&(u.setScale(g.mouse,{x:(g.bounds.max.x-g.bounds.min.x)/g.canvas.width,y:(g.bounds.max.y-g.bounds.min.y)/g.canvas.height}),u.setOffset(g.mouse,g.bounds.min))},n.startViewTransform=function(g){var _=g.bounds.max.x-g.bounds.min.x,w=g.bounds.max.y-g.bounds.min.y,M=_/g.options.width,E=w/g.options.height;g.context.setTransform(g.options.pixelRatio/M,0,0,g.options.pixelRatio/E,0,0),g.context.translate(-g.bounds.min.x,-g.bounds.min.y)},n.endViewTransform=function(g){g.context.setTransform(g.options.pixelRatio,0,0,g.options.pixelRatio,0,0)},n.world=function(g,_){var w=r.now(),M=g.engine,E=M.world,T=g.canvas,y=g.context,S=g.options,A=g.timing,N=o.allBodies(E),z=o.allConstraints(E),H=S.wireframes?S.wireframeBackground:S.background,G=[],B=[],W,V={timestamp:M.timing.timestamp};if(l.trigger(g,"beforeRender",V),g.currentBackground!==H&&b(g,H),y.globalCompositeOperation="source-in",y.fillStyle="transparent",y.fillRect(0,0,T.width,T.height),y.globalCompositeOperation="source-over",S.hasBounds){for(W=0;W<N.length;W++){var lt=N[W];a.overlaps(lt.bounds,g.bounds)&&G.push(lt)}for(W=0;W<z.length;W++){var st=z[W],mt=st.bodyA,bt=st.bodyB,St=st.pointA,D=st.pointB;mt&&(St=h.add(mt.position,st.pointA)),bt&&(D=h.add(bt.position,st.pointB)),!(!St||!D)&&(a.contains(g.bounds,St)||a.contains(g.bounds,D))&&B.push(st)}n.startViewTransform(g),g.mouse&&(u.setScale(g.mouse,{x:(g.bounds.max.x-g.bounds.min.x)/g.options.width,y:(g.bounds.max.y-g.bounds.min.y)/g.options.height}),u.setOffset(g.mouse,g.bounds.min))}else B=z,G=N,g.options.pixelRatio!==1&&g.context.setTransform(g.options.pixelRatio,0,0,g.options.pixelRatio,0,0);!S.wireframes||M.enableSleeping&&S.showSleeping?n.bodies(g,G,y):(S.showConvexHulls&&n.bodyConvexHulls(g,G,y),n.bodyWireframes(g,G,y)),S.showBounds&&n.bodyBounds(g,G,y),(S.showAxes||S.showAngleIndicator)&&n.bodyAxes(g,G,y),S.showPositions&&n.bodyPositions(g,G,y),S.showVelocity&&n.bodyVelocity(g,G,y),S.showIds&&n.bodyIds(g,G,y),S.showSeparations&&n.separations(g,M.pairs.list,y),S.showCollisions&&n.collisions(g,M.pairs.list,y),S.showVertexNumbers&&n.vertexNumbers(g,G,y),S.showMousePosition&&n.mousePosition(g,g.mouse,y),n.constraints(B,y),S.hasBounds&&n.endViewTransform(g),l.trigger(g,"afterRender",V),A.lastElapsed=r.now()-w},n.stats=function(g,_,w){for(var M=g.engine,E=M.world,T=o.allBodies(E),y=0,S=55,A=44,N=0,z=0,H=0;H<T.length;H+=1)y+=T[H].parts.length;var G={Part:y,Body:T.length,Cons:o.allConstraints(E).length,Comp:o.allComposites(E).length,Pair:M.pairs.list.length};_.fillStyle="#0e0f19",_.fillRect(N,z,S*5.5,A),_.font="12px Arial",_.textBaseline="top",_.textAlign="right";for(var B in G){var W=G[B];_.fillStyle="#aaa",_.fillText(B,N+S,z+8),_.fillStyle="#eee",_.fillText(W,N+S,z+26),N+=S}},n.performance=function(g,_){var w=g.engine,M=g.timing,E=M.deltaHistory,T=M.elapsedHistory,y=M.timestampElapsedHistory,S=M.engineDeltaHistory,A=M.engineUpdatesHistory,N=M.engineElapsedHistory,z=w.timing.lastUpdatesPerFrame,H=w.timing.lastDelta,G=p(E),B=p(T),W=p(S),V=p(A),lt=p(N),st=p(y),mt=st/G||0,bt=Math.round(G/H),St=1e3/G||0,D=4,O=12,I=60,P=34,$=10,ct=69;_.fillStyle="#0e0f19",_.fillRect(0,50,O*5+I*6+22,P),n.status(_,$,ct,I,D,E.length,Math.round(St)+" fps",St/n._goodFps,function(q){return E[q]/G-1}),n.status(_,$+O+I,ct,I,D,S.length,H.toFixed(2)+" dt",n._goodDelta/H,function(q){return S[q]/W-1}),n.status(_,$+(O+I)*2,ct,I,D,A.length,z+" upf",Math.pow(r.clamp(V/bt||1,0,1),4),function(q){return A[q]/V-1}),n.status(_,$+(O+I)*3,ct,I,D,N.length,lt.toFixed(2)+" ut",1-z*lt/n._goodFps,function(q){return N[q]/lt-1}),n.status(_,$+(O+I)*4,ct,I,D,T.length,B.toFixed(2)+" rt",1-B/n._goodFps,function(q){return T[q]/B-1}),n.status(_,$+(O+I)*5,ct,I,D,y.length,mt.toFixed(2)+" x",mt*mt*mt,function(q){return(y[q]/E[q]/mt||0)-1})},n.status=function(g,_,w,M,E,T,y,S,A){g.strokeStyle="#888",g.fillStyle="#444",g.lineWidth=1,g.fillRect(_,w+7,M,1),g.beginPath(),g.moveTo(_,w+7-E*r.clamp(.4*A(0),-2,2));for(var N=0;N<M;N+=1)g.lineTo(_+N,w+7-(N<T?E*r.clamp(.4*A(N),-2,2):0));g.stroke(),g.fillStyle="hsl("+r.clamp(25+95*S,0,120)+",100%,60%)",g.fillRect(_,w-7,4,4),g.font="12px Arial",g.textBaseline="middle",g.textAlign="right",g.fillStyle="#eee",g.fillText(y,_+M,w-5)},n.constraints=function(g,_){for(var w=_,M=0;M<g.length;M++){var E=g[M];if(!(!E.render.visible||!E.pointA||!E.pointB)){var T=E.bodyA,y=E.bodyB,S,A;if(T?S=h.add(T.position,E.pointA):S=E.pointA,E.render.type==="pin")w.beginPath(),w.arc(S.x,S.y,3,0,2*Math.PI),w.closePath();else{if(y?A=h.add(y.position,E.pointB):A=E.pointB,w.beginPath(),w.moveTo(S.x,S.y),E.render.type==="spring")for(var N=h.sub(A,S),z=h.perp(h.normalise(N)),H=Math.ceil(r.clamp(E.length/5,12,20)),G,B=1;B<H;B+=1)G=B%2===0?1:-1,w.lineTo(S.x+N.x*(B/H)+z.x*G*4,S.y+N.y*(B/H)+z.y*G*4);w.lineTo(A.x,A.y)}E.render.lineWidth&&(w.lineWidth=E.render.lineWidth,w.strokeStyle=E.render.strokeStyle,w.stroke()),E.render.anchors&&(w.fillStyle=E.render.strokeStyle,w.beginPath(),w.arc(S.x,S.y,3,0,2*Math.PI),w.arc(A.x,A.y,3,0,2*Math.PI),w.closePath(),w.fill())}}},n.bodies=function(g,_,w){var M=w,E=g.engine,T=g.options,y=T.showInternalEdges||!T.wireframes,S,A,N,z;for(N=0;N<_.length;N++)if(S=_[N],!!S.render.visible){for(z=S.parts.length>1?1:0;z<S.parts.length;z++)if(A=S.parts[z],!!A.render.visible){if(T.showSleeping&&S.isSleeping?M.globalAlpha=.5*A.render.opacity:A.render.opacity!==1&&(M.globalAlpha=A.render.opacity),A.render.sprite&&A.render.sprite.texture&&!T.wireframes){var H=A.render.sprite,G=m(g,H.texture);M.translate(A.position.x,A.position.y),M.rotate(A.angle),M.drawImage(G,G.width*-H.xOffset*H.xScale,G.height*-H.yOffset*H.yScale,G.width*H.xScale,G.height*H.yScale),M.rotate(-A.angle),M.translate(-A.position.x,-A.position.y)}else{if(A.circleRadius)M.beginPath(),M.arc(A.position.x,A.position.y,A.circleRadius,0,2*Math.PI);else{M.beginPath(),M.moveTo(A.vertices[0].x,A.vertices[0].y);for(var B=1;B<A.vertices.length;B++)!A.vertices[B-1].isInternal||y?M.lineTo(A.vertices[B].x,A.vertices[B].y):M.moveTo(A.vertices[B].x,A.vertices[B].y),A.vertices[B].isInternal&&!y&&M.moveTo(A.vertices[(B+1)%A.vertices.length].x,A.vertices[(B+1)%A.vertices.length].y);M.lineTo(A.vertices[0].x,A.vertices[0].y),M.closePath()}T.wireframes?(M.lineWidth=1,M.strokeStyle=g.options.wireframeStrokeStyle,M.stroke()):(M.fillStyle=A.render.fillStyle,A.render.lineWidth&&(M.lineWidth=A.render.lineWidth,M.strokeStyle=A.render.strokeStyle,M.stroke()),M.fill())}M.globalAlpha=1}}},n.bodyWireframes=function(g,_,w){var M=w,E=g.options.showInternalEdges,T,y,S,A,N;for(M.beginPath(),S=0;S<_.length;S++)if(T=_[S],!!T.render.visible)for(N=T.parts.length>1?1:0;N<T.parts.length;N++){for(y=T.parts[N],M.moveTo(y.vertices[0].x,y.vertices[0].y),A=1;A<y.vertices.length;A++)!y.vertices[A-1].isInternal||E?M.lineTo(y.vertices[A].x,y.vertices[A].y):M.moveTo(y.vertices[A].x,y.vertices[A].y),y.vertices[A].isInternal&&!E&&M.moveTo(y.vertices[(A+1)%y.vertices.length].x,y.vertices[(A+1)%y.vertices.length].y);M.lineTo(y.vertices[0].x,y.vertices[0].y)}M.lineWidth=1,M.strokeStyle=g.options.wireframeStrokeStyle,M.stroke()},n.bodyConvexHulls=function(g,_,w){var M=w,E,T,y,S,A;for(M.beginPath(),y=0;y<_.length;y++)if(E=_[y],!(!E.render.visible||E.parts.length===1)){for(M.moveTo(E.vertices[0].x,E.vertices[0].y),S=1;S<E.vertices.length;S++)M.lineTo(E.vertices[S].x,E.vertices[S].y);M.lineTo(E.vertices[0].x,E.vertices[0].y)}M.lineWidth=1,M.strokeStyle="rgba(255,255,255,0.2)",M.stroke()},n.vertexNumbers=function(g,_,w){var M=w,E,T,y;for(E=0;E<_.length;E++){var S=_[E].parts;for(y=S.length>1?1:0;y<S.length;y++){var A=S[y];for(T=0;T<A.vertices.length;T++)M.fillStyle="rgba(255,255,255,0.2)",M.fillText(E+"_"+T,A.position.x+(A.vertices[T].x-A.position.x)*.8,A.position.y+(A.vertices[T].y-A.position.y)*.8)}}},n.mousePosition=function(g,_,w){var M=w;M.fillStyle="rgba(255,255,255,0.8)",M.fillText(_.position.x+"  "+_.position.y,_.position.x+5,_.position.y-5)},n.bodyBounds=function(g,_,w){var M=w,E=g.engine,T=g.options;M.beginPath();for(var y=0;y<_.length;y++){var S=_[y];if(S.render.visible)for(var A=_[y].parts,N=A.length>1?1:0;N<A.length;N++){var z=A[N];M.rect(z.bounds.min.x,z.bounds.min.y,z.bounds.max.x-z.bounds.min.x,z.bounds.max.y-z.bounds.min.y)}}T.wireframes?M.strokeStyle="rgba(255,255,255,0.08)":M.strokeStyle="rgba(0,0,0,0.1)",M.lineWidth=1,M.stroke()},n.bodyAxes=function(g,_,w){var M=w,E=g.engine,T=g.options,y,S,A,N;for(M.beginPath(),S=0;S<_.length;S++){var z=_[S],H=z.parts;if(z.render.visible)if(T.showAxes)for(A=H.length>1?1:0;A<H.length;A++)for(y=H[A],N=0;N<y.axes.length;N++){var G=y.axes[N];M.moveTo(y.position.x,y.position.y),M.lineTo(y.position.x+G.x*20,y.position.y+G.y*20)}else for(A=H.length>1?1:0;A<H.length;A++)for(y=H[A],N=0;N<y.axes.length;N++)M.moveTo(y.position.x,y.position.y),M.lineTo((y.vertices[0].x+y.vertices[y.vertices.length-1].x)/2,(y.vertices[0].y+y.vertices[y.vertices.length-1].y)/2)}T.wireframes?(M.strokeStyle="indianred",M.lineWidth=1):(M.strokeStyle="rgba(255, 255, 255, 0.4)",M.globalCompositeOperation="overlay",M.lineWidth=2),M.stroke(),M.globalCompositeOperation="source-over"},n.bodyPositions=function(g,_,w){var M=w,E=g.engine,T=g.options,y,S,A,N;for(M.beginPath(),A=0;A<_.length;A++)if(y=_[A],!!y.render.visible)for(N=0;N<y.parts.length;N++)S=y.parts[N],M.arc(S.position.x,S.position.y,3,0,2*Math.PI,!1),M.closePath();for(T.wireframes?M.fillStyle="indianred":M.fillStyle="rgba(0,0,0,0.5)",M.fill(),M.beginPath(),A=0;A<_.length;A++)y=_[A],y.render.visible&&(M.arc(y.positionPrev.x,y.positionPrev.y,2,0,2*Math.PI,!1),M.closePath());M.fillStyle="rgba(255,165,0,0.8)",M.fill()},n.bodyVelocity=function(g,_,w){var M=w;M.beginPath();for(var E=0;E<_.length;E++){var T=_[E];if(T.render.visible){var y=i.getVelocity(T);M.moveTo(T.position.x,T.position.y),M.lineTo(T.position.x+y.x,T.position.y+y.y)}}M.lineWidth=3,M.strokeStyle="cornflowerblue",M.stroke()},n.bodyIds=function(g,_,w){var M=w,E,T;for(E=0;E<_.length;E++)if(_[E].render.visible){var y=_[E].parts;for(T=y.length>1?1:0;T<y.length;T++){var S=y[T];M.font="12px Arial",M.fillStyle="rgba(255,255,255,0.5)",M.fillText(S.id,S.position.x+10,S.position.y-10)}}},n.collisions=function(g,_,w){var M=w,E=g.options,T,y,S,A,N,z,H;for(M.beginPath(),z=0;z<_.length;z++)if(T=_[z],!!T.isActive)for(y=T.collision,H=0;H<T.contactCount;H++){var G=T.contacts[H],B=G.vertex;M.rect(B.x-1.5,B.y-1.5,3.5,3.5)}for(E.wireframes?M.fillStyle="rgba(255,255,255,0.7)":M.fillStyle="orange",M.fill(),M.beginPath(),z=0;z<_.length;z++)if(T=_[z],!!T.isActive&&(y=T.collision,T.contactCount>0)){var W=T.contacts[0].vertex.x,V=T.contacts[0].vertex.y;T.contactCount===2&&(W=(T.contacts[0].vertex.x+T.contacts[1].vertex.x)/2,V=(T.contacts[0].vertex.y+T.contacts[1].vertex.y)/2),y.bodyB===y.supports[0].body||y.bodyA.isStatic===!0?M.moveTo(W-y.normal.x*8,V-y.normal.y*8):M.moveTo(W+y.normal.x*8,V+y.normal.y*8),M.lineTo(W,V)}E.wireframes?M.strokeStyle="rgba(255,165,0,0.7)":M.strokeStyle="orange",M.lineWidth=1,M.stroke()},n.separations=function(g,_,w){var M=w,E=g.options,T,y,S,A,N,z,H;for(M.beginPath(),z=0;z<_.length;z++)if(T=_[z],!!T.isActive){y=T.collision,A=y.bodyA,N=y.bodyB;var G=1;!N.isStatic&&!A.isStatic&&(G=.5),N.isStatic&&(G=0),M.moveTo(N.position.x,N.position.y),M.lineTo(N.position.x-y.penetration.x*G,N.position.y-y.penetration.y*G),G=1,!N.isStatic&&!A.isStatic&&(G=.5),A.isStatic&&(G=0),M.moveTo(A.position.x,A.position.y),M.lineTo(A.position.x+y.penetration.x*G,A.position.y+y.penetration.y*G)}E.wireframes?M.strokeStyle="rgba(255,165,0,0.5)":M.strokeStyle="orange",M.stroke()},n.inspector=function(g,_){var w=g.engine,M=g.selected,E=g.render,T=E.options,y;if(T.hasBounds){var S=E.bounds.max.x-E.bounds.min.x,A=E.bounds.max.y-E.bounds.min.y,N=S/E.options.width,z=A/E.options.height;_.scale(1/N,1/z),_.translate(-E.bounds.min.x,-E.bounds.min.y)}for(var H=0;H<M.length;H++){var G=M[H].data;switch(_.translate(.5,.5),_.lineWidth=1,_.strokeStyle="rgba(255,165,0,0.9)",_.setLineDash([1,2]),G.type){case"body":y=G.bounds,_.beginPath(),_.rect(Math.floor(y.min.x-3),Math.floor(y.min.y-3),Math.floor(y.max.x-y.min.x+6),Math.floor(y.max.y-y.min.y+6)),_.closePath(),_.stroke();break;case"constraint":var B=G.pointA;G.bodyA&&(B=G.pointB),_.beginPath(),_.arc(B.x,B.y,10,0,2*Math.PI),_.closePath(),_.stroke();break}_.setLineDash([]),_.translate(-.5,-.5)}g.selectStart!==null&&(_.translate(.5,.5),_.lineWidth=1,_.strokeStyle="rgba(255,165,0,0.6)",_.fillStyle="rgba(255,165,0,0.1)",y=g.selectBounds,_.beginPath(),_.rect(Math.floor(y.min.x),Math.floor(y.min.y),Math.floor(y.max.x-y.min.x),Math.floor(y.max.y-y.min.y)),_.closePath(),_.stroke(),_.fill(),_.translate(-.5,-.5)),T.hasBounds&&_.setTransform(1,0,0,1,0,0)};var f=function(g,_){var w=g.engine,M=g.timing,E=M.historySize,T=w.timing.timestamp;M.delta=_-M.lastTime||n._goodDelta,M.lastTime=_,M.timestampElapsed=T-M.lastTimestamp||0,M.lastTimestamp=T,M.deltaHistory.unshift(M.delta),M.deltaHistory.length=Math.min(M.deltaHistory.length,E),M.engineDeltaHistory.unshift(w.timing.lastDelta),M.engineDeltaHistory.length=Math.min(M.engineDeltaHistory.length,E),M.timestampElapsedHistory.unshift(M.timestampElapsed),M.timestampElapsedHistory.length=Math.min(M.timestampElapsedHistory.length,E),M.engineUpdatesHistory.unshift(w.timing.lastUpdatesPerFrame),M.engineUpdatesHistory.length=Math.min(M.engineUpdatesHistory.length,E),M.engineElapsedHistory.unshift(w.timing.lastElapsed),M.engineElapsedHistory.length=Math.min(M.engineElapsedHistory.length,E),M.elapsedHistory.unshift(M.lastElapsed),M.elapsedHistory.length=Math.min(M.elapsedHistory.length,E)},p=function(g){for(var _=0,w=0;w<g.length;w+=1)_+=g[w];return _/g.length||0},x=function(g,_){var w=document.createElement("canvas");return w.width=g,w.height=_,w.oncontextmenu=function(){return!1},w.onselectstart=function(){return!1},w},v=function(g){var _=g.getContext("2d"),w=window.devicePixelRatio||1,M=_.webkitBackingStorePixelRatio||_.mozBackingStorePixelRatio||_.msBackingStorePixelRatio||_.oBackingStorePixelRatio||_.backingStorePixelRatio||1;return w/M},m=function(g,_){var w=g.textures[_];return w||(w=g.textures[_]=new Image,w.src=_,w)},b=function(g,_){var w=_;/(jpg|gif|png)$/.test(_)&&(w="url("+_+")"),g.canvas.style.background=w,g.canvas.style.backgroundSize="contain",g.currentBackground=_}})()},function(s,t,e){var n={};s.exports=n;var i=e(5),r=e(17),o=e(0);(function(){n._maxFrameDelta=1e3/15,n._frameDeltaFallback=1e3/60,n._timeBufferMargin=1.5,n._elapsedNextEstimate=1,n._smoothingLowerBound=.1,n._smoothingUpperBound=.9,n.create=function(l){var h={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},u=o.extend(h,l);return u.fps=0,u},n.run=function(l,h){return l.timeBuffer=n._frameDeltaFallback,function u(c){l.frameRequestId=n._onNextFrame(l,u),c&&l.enabled&&n.tick(l,h,c)}(),l},n.tick=function(l,h,u){var c=o.now(),d=l.delta,f=0,p=u-l.timeLastTick;if((!p||!l.timeLastTick||p>Math.max(n._maxFrameDelta,l.maxFrameTime))&&(p=l.frameDelta||n._frameDeltaFallback),l.frameDeltaSmoothing){l.frameDeltaHistory.push(p),l.frameDeltaHistory=l.frameDeltaHistory.slice(-l.frameDeltaHistorySize);var x=l.frameDeltaHistory.slice(0).sort(),v=l.frameDeltaHistory.slice(x.length*n._smoothingLowerBound,x.length*n._smoothingUpperBound),m=a(v);p=m||p}l.frameDeltaSnapping&&(p=1e3/Math.round(1e3/p)),l.frameDelta=p,l.timeLastTick=u,l.timeBuffer+=l.frameDelta,l.timeBuffer=o.clamp(l.timeBuffer,0,l.frameDelta+d*n._timeBufferMargin),l.lastUpdatesDeferred=0;var b=l.maxUpdates||Math.ceil(l.maxFrameTime/d),g={timestamp:h.timing.timestamp};i.trigger(l,"beforeTick",g),i.trigger(l,"tick",g);for(var _=o.now();d>0&&l.timeBuffer>=d*n._timeBufferMargin;){i.trigger(l,"beforeUpdate",g),r.update(h,d),i.trigger(l,"afterUpdate",g),l.timeBuffer-=d,f+=1;var w=o.now()-c,M=o.now()-_,E=w+n._elapsedNextEstimate*M/f;if(f>=b||E>l.maxFrameTime){l.lastUpdatesDeferred=Math.round(Math.max(0,l.timeBuffer/d-n._timeBufferMargin));break}}h.timing.lastUpdatesPerFrame=f,i.trigger(l,"afterTick",g),l.frameDeltaHistory.length>=100&&(l.lastUpdatesDeferred&&Math.round(l.frameDelta/d)>b?o.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):l.lastUpdatesDeferred&&o.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof l.isFixed!="undefined"&&o.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(l.deltaMin||l.deltaMax)&&o.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),l.fps!==0&&o.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},n.stop=function(l){n._cancelNextFrame(l)},n._onNextFrame=function(l,h){if(typeof window!="undefined"&&window.requestAnimationFrame)l.frameRequestId=window.requestAnimationFrame(h);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return l.frameRequestId},n._cancelNextFrame=function(l){if(typeof window!="undefined"&&window.cancelAnimationFrame)window.cancelAnimationFrame(l.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var a=function(l){for(var h=0,u=l.length,c=0;c<u;c+=1)h+=l[c];return h/u||0}})()},function(s,t,e){var n={};s.exports=n;var i=e(8),r=e(0),o=r.deprecated;(function(){n.collides=function(a,l){return i.collides(a,l)},o(n,"collides","SAT.collides \u27A4 replaced by Collision.collides")})()},function(s,t,e){var n={};s.exports=n;var i=e(1),r=e(0);(function(){n.pathToVertices=function(o,a){typeof window!="undefined"&&!("SVGPathSeg"in window)&&r.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var l,h,u,c,d,f,p,x,v,m,b=[],g,_,w=0,M=0,E=0;a=a||15;var T=function(S,A,N){var z=N%2===1&&N>1;if(!v||S!=v.x||A!=v.y){v&&z?(g=v.x,_=v.y):(g=0,_=0);var H={x:g+S,y:_+A};(z||!v)&&(v=H),b.push(H),M=g+S,E=_+A}},y=function(S){var A=S.pathSegTypeAsLetter.toUpperCase();if(A!=="Z"){switch(A){case"M":case"L":case"T":case"C":case"S":case"Q":M=S.x,E=S.y;break;case"H":M=S.x;break;case"V":E=S.y;break}T(M,E,S.pathSegType)}};for(n._svgPathToAbsolute(o),u=o.getTotalLength(),f=[],l=0;l<o.pathSegList.numberOfItems;l+=1)f.push(o.pathSegList.getItem(l));for(p=f.concat();w<u;){if(m=o.getPathSegAtLength(w),d=f[m],d!=x){for(;p.length&&p[0]!=d;)y(p.shift());x=d}switch(d.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":c=o.getPointAtLength(w),T(c.x,c.y,0);break}w+=a}for(l=0,h=p.length;l<h;++l)y(p[l]);return b},n._svgPathToAbsolute=function(o){for(var a,l,h,u,c,d,f=o.pathSegList,p=0,x=0,v=f.numberOfItems,m=0;m<v;++m){var b=f.getItem(m),g=b.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(g))"x"in b&&(p=b.x),"y"in b&&(x=b.y);else switch("x1"in b&&(h=p+b.x1),"x2"in b&&(c=p+b.x2),"y1"in b&&(u=x+b.y1),"y2"in b&&(d=x+b.y2),"x"in b&&(p+=b.x),"y"in b&&(x+=b.y),g){case"m":f.replaceItem(o.createSVGPathSegMovetoAbs(p,x),m);break;case"l":f.replaceItem(o.createSVGPathSegLinetoAbs(p,x),m);break;case"h":f.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(p),m);break;case"v":f.replaceItem(o.createSVGPathSegLinetoVerticalAbs(x),m);break;case"c":f.replaceItem(o.createSVGPathSegCurvetoCubicAbs(p,x,h,u,c,d),m);break;case"s":f.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(p,x,c,d),m);break;case"q":f.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(p,x,h,u),m);break;case"t":f.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(p,x),m);break;case"a":f.replaceItem(o.createSVGPathSegArcAbs(p,x,b.r1,b.r2,b.angle,b.largeArcFlag,b.sweepFlag),m);break;case"z":case"Z":p=a,x=l;break}(g=="M"||g=="m")&&(a=p,l=x)}}})()},function(s,t,e){var n={};s.exports=n;var i=e(6),r=e(0);(function(){n.create=i.create,n.add=i.add,n.remove=i.remove,n.clear=i.clear,n.addComposite=i.addComposite,n.addBody=i.addBody,n.addConstraint=i.addConstraint})()}])})});var ur="scriptsLoaded";var Un=class s{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),s.nextNameID=s.nextNameID||0,this.$name.id=`lil-gui-name-${++s.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){let e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Sa=class extends Un{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Ma(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}var Nu={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Ma,toHexString:Ma},hs={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Fu={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){let n=hs.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;let i=s*n<<16^t*n<<8^e*n<<0;return hs.toHexString(i)}},Ou={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){let n=hs.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;let i=s*n<<16^t*n<<8^e*n<<0;return hs.toHexString(i)}},Bu=[Nu,hs,Fu,Ou];function ku(s){return Bu.find(t=>t.match(s))}var ba=class extends Un{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ku(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Ma(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},cs=class extends Un{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},wa=class extends Un{constructor(t,e,n,i,r,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},n=b=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._snapClampSetValue(g+b),this.$input.value=this.getValue())},i=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b)*-1))},r=b=>{this._inputFocused&&(b.preventDefault(),n(this._step*this._normalizeMouseWheel(b)))},o=!1,a,l,h,u,c,d=5,f=b=>{a=b.clientX,l=h=b.clientY,o=!0,u=this.getValue(),c=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",x)},p=b=>{if(o){let g=b.clientX-a,_=b.clientY-l;Math.abs(_)>d?(b.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(g)>d&&x()}if(!o){let g=b.clientY-h;c-=g*this._step*this._arrowKeyMultiplier(b),u+c>this._max?c=this._max-u:u+c<this._min&&(c=this._min-u),this._snapClampSetValue(u+c)}h=b.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",x)},v=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let t=(m,b,g,_,w)=>(m-b)/(g-b)*(w-_)+_,e=m=>{let b=this.$slider.getBoundingClientRect(),g=t(m,b.left,b.right,this._min,this._max);this._snapClampSetValue(g)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)},o=!1,a,l,h=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):h(m),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",d))},c=m=>{if(o){let b=m.touches[0].clientX-a,g=m.touches[0].clientY-l;Math.abs(b)>Math.abs(g)?h(m):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d))}else m.preventDefault(),e(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),p=400,x,v=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();let g=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,p)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Ea=class extends Un{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{let n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}},Ta=class extends Un{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},zu=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Vu(s){let t=document.createElement("style");t.innerHTML=s;let e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}var hc=!1,dr=class s{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!hc&&a&&(Vu(zu),hc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new Ea(this,t,e,n);let o=t[e];switch(typeof o){case"number":return new wa(this,t,e,n,i,r);case"boolean":return new Sa(this,t,e);case"string":return new Ta(this,t,e);case"function":return new cs(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new ba(this,t,e,n)}addFolder(t){let e=new s({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof cs||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){let e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof cs)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");let n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);let i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}};var fo="178",$n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uc=0,ll=1,Nc=2;var cl=1,Fc=2,gn=3,Rn=0,Le=1,je=2,an=0,oi=1,Js=2,hl=3,ul=4,Oc=5,Hn=100,Bc=101,kc=102,zc=103,Vc=104,Hc=200,Gc=201,Wc=202,Xc=203,Nr=204,Fr=205,Yc=206,qc=207,$c=208,Zc=209,Jc=210,Kc=211,jc=212,Qc=213,th=214,po=0,mo=1,go=2,ai=3,vo=4,xo=5,_o=6,yo=7,dl=0,eh=1,nh=2,In=0,ih=1,sh=2,rh=3,So=4,oh=5,ah=6,lh=7;var fl=300,di=301,fi=302,Jn=303,Mo=304,Ks=306,Or=1e3,hn=1001,Br=1002,Ue=1003,ch=1004;var js=1005;var Se=1006,bo=1007;var Ln=1008;var vn=1009,pl=1010,ml=1011,Ki=1012,wo=1013,Kn=1014,Fe=1015,Me=1016,Eo=1017,To=1018,ji=1020,gl=35902,vl=1021,xl=1022,Qe=1023,Bi=1026,Qi=1027,_l=1028,Ao=1029,yl=1030,Co=1031;var Ro=1033,Qs=33776,tr=33777,er=33778,nr=33779,Po=35840,Io=35841,Lo=35842,Do=35843,Uo=36196,No=37492,Fo=37496,Oo=37808,Bo=37809,ko=37810,zo=37811,Vo=37812,Ho=37813,Go=37814,Wo=37815,Xo=37816,Yo=37817,qo=37818,$o=37819,Zo=37820,Jo=37821,ir=36492,Ko=36494,jo=36495,Sl=36283,Qo=36284,ta=36285,ea=36286;var ys=2300,kr=2301,Ur=2302,Ka=2400,ja=2401,Qa=2402;var hh=3200,uh=3201;var Ml=0,dh=1,Dn="",Ie="srgb",Pn="srgb-linear",Ss="linear",Qt="srgb";var si=7680;var tl=519,fh=512,ph=513,mh=514,bl=515,gh=516,vh=517,xh=518,_h=519,el=35044;var wl="300 es",un=2e3,Ms=2001;var fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=1234567,gs=Math.PI/180,ki=180/Math.PI;function pi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function El(s,t){return(s%t+t)%t}function Hu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Gu(s,t,e){return s!==t?(e-s)/(t-s):0}function vs(s,t,e){return(1-e)*s+e*t}function Wu(s,t,e,n){return vs(s,t,1-Math.exp(-e*n))}function Xu(s,t=1){return t-Math.abs(El(s,t*2)-t)}function Yu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function qu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function $u(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Zu(s,t){return s+Math.random()*(t-s)}function Ju(s){return s*(.5-Math.random())}function Ku(s){s!==void 0&&(uc=s);let t=uc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ju(s){return s*gs}function Qu(s){return s*ki}function td(s){return(s&s-1)===0&&s!==0}function ed(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function nd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function id(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),u=o((t+n)/2),c=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*c,l*d,a*h);break;case"YZY":s.set(l*d,a*u,l*c,a*h);break;case"ZXZ":s.set(l*c,l*d,a*u,a*h);break;case"XZX":s.set(a*u,l*p,l*f,a*h);break;case"YXY":s.set(l*f,a*u,l*p,a*h);break;case"ZYZ":s.set(l*p,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var sr={DEG2RAD:gs,RAD2DEG:ki,generateUUID:pi,clamp:qt,euclideanModulo:El,mapLinear:Hu,inverseLerp:Gu,lerp:vs,damp:Wu,pingpong:Xu,smoothstep:Yu,smootherstep:qu,randInt:$u,randFloat:Zu,randFloatSpread:Ju,seededRandom:Ku,degToRad:ju,radToDeg:Qu,isPowerOfTwo:td,ceilPowerOfTwo:ed,floorPowerOfTwo:nd,setQuaternionFromProperEuler:id,normalize:Pe,denormalize:Ni},at=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(c!==x||l!==d||h!==f||u!==p){let v=1-a,m=l*d+h*f+u*p+c*x,b=m>=0?1:-1,g=1-m*m;if(g>Number.EPSILON){let w=Math.sqrt(g),M=Math.atan2(w,m*b);v=Math.sin(v*M)/w,a=Math.sin(a*M)/w}let _=a*b;if(l=l*v+d*_,h=h*v+f*_,u=u*v+p*_,c=c*v+x*_,v===1-a){let w=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=w,h*=w,u*=w,c*=w}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*c+l*f-h*d,t[e+1]=l*p+u*d+h*c-a*f,t[e+2]=h*p+u*f+a*d-l*c,t[e+3]=u*p-a*c-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*c+h*f*p,this._y=h*f*c-d*u*p,this._z=h*u*p+d*f*c,this._w=h*u*c-d*f*p;break;case"YXZ":this._x=d*u*c+h*f*p,this._y=h*f*c-d*u*p,this._z=h*u*p-d*f*c,this._w=h*u*c+d*f*p;break;case"ZXY":this._x=d*u*c-h*f*p,this._y=h*f*c+d*u*p,this._z=h*u*p+d*f*c,this._w=h*u*c-d*f*p;break;case"ZYX":this._x=d*u*c-h*f*p,this._y=h*f*c+d*u*p,this._z=h*u*p-d*f*c,this._w=h*u*c+d*f*p;break;case"YZX":this._x=d*u*c+h*f*p,this._y=h*f*c+d*u*p,this._z=h*u*p-d*f*c,this._w=h*u*c-d*f*p;break;case"XZY":this._x=d*u*c-h*f*p,this._y=h*f*c-d*u*p,this._z=h*u*p+d*f*c,this._w=h*u*c+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=n+a+c;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>c){let f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>c){let f=2*Math.sqrt(1+a-n-c);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+c-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+i*h-r*l,this._y=i*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-i*a,this._w=o*u-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=o*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),u=2*(a*e-r*i),c=2*(r*n-o*e);return this.x=e+l*h+o*c-a*u,this.y=n+l*u+a*h-r*c,this.z=i+l*c+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new Y,dc=new Ke,Vt=class s{constructor(t,e,n,i,r,o,a,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h)}set(t,e,n,i,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],p=n[8],x=i[0],v=i[3],m=i[6],b=i[1],g=i[4],_=i[7],w=i[2],M=i[5],E=i[8];return r[0]=o*x+a*b+l*w,r[3]=o*v+a*g+l*M,r[6]=o*m+a*_+l*E,r[1]=h*x+u*b+c*w,r[4]=h*v+u*g+c*M,r[7]=h*m+u*_+c*E,r[2]=d*x+f*b+p*w,r[5]=d*v+f*g+p*M,r[8]=d*m+f*_+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*l+i*r*h-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=u*o-a*h,d=a*l-u*r,f=h*r-o*l,p=e*c+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=c*x,t[1]=(i*h-u*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new Vt;function Tl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yh(){let s=zi("canvas");return s.style.display="block",s}var fc={};function li(s){s in fc||(fc[s]=!0,console.warn(s))}function Sh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mh(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bh(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var pc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sd(){let s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Ss:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return li("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return li("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:t,whitePoint:n,transfer:Ss,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}var Jt=sd();function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Mi,zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=zi("canvas")),Mi.width=t.width,Mi.height=t.height;let i=Mi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=zi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rd=0,Vi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ra(i[o].image)):r.push(Ra(i[o]))}else r=Ra(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ra(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?zr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var od=0,Pa=new Y,ye=class s extends fn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=hn,i=hn,r=Se,o=Ln,a=Qe,l=vn,h=s.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=pi(),this.name="",this.source=new Vi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=fl;ye.DEFAULT_ANISOTROPY=1;var ue=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],p=l[9],x=l[2],v=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-x)<.01&&Math.abs(p-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+x)<.1&&Math.abs(p+v)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(h+1)/2,_=(f+1)/2,w=(m+1)/2,M=(u+d)/4,E=(c+x)/4,T=(p+v)/4;return g>_&&g>w?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=M/n,r=E/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=T/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=E/r,i=T/r),this.set(n,i,r,e),this}let b=Math.sqrt((v-p)*(v-p)+(c-x)*(c-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(v-p)/b,this.y=(c-x)/b,this.z=(d-u)/b,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vr=class extends fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new ye(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Vi(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Te=class extends Vr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bs=class extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hr=class extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),pr.subVectors(this.max,us),bi.subVectors(t.a,us),wi.subVectors(t.b,us),Ei.subVectors(t.c,us),Nn.subVectors(wi,bi),Fn.subVectors(Ei,wi),ti.subVectors(bi,Ei);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ti.z,ti.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ti.z,0,-ti.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ti.y,ti.x,0];return!Ia(e,bi,wi,Ei,pr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,bi,wi,Ei,pr))?!1:(mr.crossVectors(Nn,Fn),e=[mr.x,mr.y,mr.z],Ia(e,bi,wi,Ei,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],en=new Y,fr=new Gn,bi=new Y,wi=new Y,Ei=new Y,Nn=new Y,Fn=new Y,ti=new Y,us=new Y,pr=new Y,mr=new Y,ei=new Y;function Ia(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ei.fromArray(s,r);let a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),h=e.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var ad=new Gn,ds=new Y,La=new Y,Hi=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ad.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(La)),this.expandByPoint(ds.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sn=new Y,Da=new Y,gr=new Y,On=new Y,Ua=new Y,vr=new Y,Na=new Y,Gi=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Da.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Da);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=On.dot(this.direction),l=-On.dot(gr),h=On.lengthSq(),u=Math.abs(1-o*o),c,d,f,p;if(u>0)if(c=o*l-a,d=o*a-l,p=r*u,c>=0)if(d>=-p)if(d<=p){let x=1/u;c*=x,d*=x,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+h}else d=r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-p?(c=Math.max(0,-(-o*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=p?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(o*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=o>0?-r:r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Da).addScaledVector(gr,d),f}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,r){Ua.subVectors(e,t),vr.subVectors(n,t),Na.crossVectors(Ua,vr);let o=this.direction.dot(Na),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);let l=a*this.direction.dot(vr.crossVectors(On,vr));if(l<0)return null;let h=a*this.direction.dot(Ua.cross(On));if(h<0||l+h>o)return null;let u=-a*On.dot(Na);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class s{constructor(t,e,n,i,r,o,a,l,h,u,c,d,f,p,x,v){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h,u,c,d,f,p,x,v)}set(t,e,n,i,r,o,a,l,h,u,c,d,f,p,x,v){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=c,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*c,p=a*u,x=a*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=f+p*h,e[5]=d-x*h,e[9]=-a*l,e[2]=x-d*h,e[6]=p+f*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,f=l*c,p=h*u,x=h*c;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*h,e[1]=o*c,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,f=l*c,p=h*u,x=h*c;e[0]=d-x*a,e[4]=-o*c,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,f=o*c,p=a*u,x=a*c;e[0]=l*u,e[4]=p*h-f,e[8]=d*h+x,e[1]=l*c,e[5]=x*h+d,e[9]=f*h-p,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*h,p=a*l,x=a*h;e[0]=l*u,e[4]=x-d*c,e[8]=p*c+f,e[1]=c,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=f*c+p,e[10]=d-x*c}else if(t.order==="XZY"){let d=o*l,f=o*h,p=a*l,x=a*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+x,e[5]=o*u,e[9]=f*c-p,e[2]=p*c-f,e[6]=a*u,e[10]=x*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,e,n){let i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Bn.crossVectors(n,ze),Bn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Bn.crossVectors(n,ze)),Bn.normalize(),xr.crossVectors(ze,Bn),i[0]=Bn.x,i[4]=xr.x,i[8]=ze.x,i[1]=Bn.y,i[5]=xr.y,i[9]=ze.y,i[2]=Bn.z,i[6]=xr.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],p=n[2],x=n[6],v=n[10],m=n[14],b=n[3],g=n[7],_=n[11],w=n[15],M=i[0],E=i[4],T=i[8],y=i[12],S=i[1],A=i[5],N=i[9],z=i[13],H=i[2],G=i[6],B=i[10],W=i[14],V=i[3],lt=i[7],st=i[11],mt=i[15];return r[0]=o*M+a*S+l*H+h*V,r[4]=o*E+a*A+l*G+h*lt,r[8]=o*T+a*N+l*B+h*st,r[12]=o*y+a*z+l*W+h*mt,r[1]=u*M+c*S+d*H+f*V,r[5]=u*E+c*A+d*G+f*lt,r[9]=u*T+c*N+d*B+f*st,r[13]=u*y+c*z+d*W+f*mt,r[2]=p*M+x*S+v*H+m*V,r[6]=p*E+x*A+v*G+m*lt,r[10]=p*T+x*N+v*B+m*st,r[14]=p*y+x*z+v*W+m*mt,r[3]=b*M+g*S+_*H+w*V,r[7]=b*E+g*A+_*G+w*lt,r[11]=b*T+g*N+_*B+w*st,r[15]=b*y+g*z+_*W+w*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],f=t[14],p=t[3],x=t[7],v=t[11],m=t[15];return p*(+r*l*c-i*h*c-r*a*d+n*h*d+i*a*f-n*l*f)+x*(+e*l*f-e*h*d+r*o*d-i*o*f+i*h*u-r*l*u)+v*(+e*h*c-e*a*f-r*o*c+n*o*f+r*a*u-n*h*u)+m*(-i*a*u-e*l*c+e*a*d+i*o*c-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],p=t[12],x=t[13],v=t[14],m=t[15],b=c*v*h-x*d*h+x*l*f-a*v*f-c*l*m+a*d*m,g=p*d*h-u*v*h-p*l*f+o*v*f+u*l*m-o*d*m,_=u*x*h-p*c*h+p*a*f-o*x*f-u*a*m+o*c*m,w=p*c*l-u*x*l-p*a*d+o*x*d+u*a*v-o*c*v,M=e*b+n*g+i*_+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/M;return t[0]=b*E,t[1]=(x*d*r-c*v*r-x*i*f+n*v*f+c*i*m-n*d*m)*E,t[2]=(a*v*r-x*l*r+x*i*h-n*v*h-a*i*m+n*l*m)*E,t[3]=(c*l*r-a*d*r-c*i*h+n*d*h+a*i*f-n*l*f)*E,t[4]=g*E,t[5]=(u*v*r-p*d*r+p*i*f-e*v*f-u*i*m+e*d*m)*E,t[6]=(p*l*r-o*v*r-p*i*h+e*v*h+o*i*m-e*l*m)*E,t[7]=(o*d*r-u*l*r+u*i*h-e*d*h-o*i*f+e*l*f)*E,t[8]=_*E,t[9]=(p*c*r-u*x*r-p*n*f+e*x*f+u*n*m-e*c*m)*E,t[10]=(o*x*r-p*a*r+p*n*h-e*x*h-o*n*m+e*a*m)*E,t[11]=(u*a*r-o*c*r-u*n*h+e*c*h+o*n*f-e*a*f)*E,t[12]=w*E,t[13]=(u*x*i-p*c*i+p*n*d-e*x*d-u*n*v+e*c*v)*E,t[14]=(p*a*i-o*x*i-p*n*l+e*x*l+o*n*v-e*a*v)*E,t[15]=(o*c*i-u*a*i+u*n*l-e*c*l-o*n*d+e*a*d)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*o,0,h*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,c=a+a,d=r*h,f=r*u,p=r*c,x=o*u,v=o*c,m=a*c,b=l*h,g=l*u,_=l*c,w=n.x,M=n.y,E=n.z;return i[0]=(1-(x+m))*w,i[1]=(f+_)*w,i[2]=(p-g)*w,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(d+m))*M,i[6]=(v+b)*M,i[7]=0,i[8]=(p+g)*E,i[9]=(v-b)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ti.set(i[0],i[1],i[2]).length(),o=Ti.set(i[4],i[5],i[6]).length(),a=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);let h=1/r,u=1/o,c=1/a;return nn.elements[0]*=h,nn.elements[1]*=h,nn.elements[2]*=h,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=c,nn.elements[9]*=c,nn.elements[10]*=c,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=un){let l=this.elements,h=2*r/(e-t),u=2*r/(n-i),c=(e+t)/(e-t),d=(n+i)/(n-i),f,p;if(a===un)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Ms)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=un){let l=this.elements,h=1/(e-t),u=1/(n-i),c=1/(o-r),d=(e+t)*h,f=(n+i)*u,p,x;if(a===un)p=(o+r)*c,x=-2*c;else if(a===Ms)p=r*c,x=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ti=new Y,nn=new de,ld=new Y(0,0,0),cd=new Y(1,1,1),Bn=new Y,xr=new Y,ze=new Y,gc=new de,vc=new Ke,rn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hd=0,xc=new Y,Ai=new Ke,Mn=new de,_r=new Y,fs=new Y,ud=new Y,dd=new Ke,_c=new Y(1,0,0),yc=new Y(0,1,0),Sc=new Y(0,0,1),Mc={type:"added"},fd={type:"removed"},Ci={type:"childadded",child:null},Fa={type:"childremoved",child:null},Ne=class s extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new Y,e=new rn,n=new Ke,i=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Vt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(fs,_r,this.up):Mn.lookAt(_r,fs,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mc),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mc),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>cc(ya({},a),{boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>ya({},a)),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),c=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ne.DEFAULT_UP=new Y(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new Y,bn=new Y,Oa=new Y,wn=new Y,Ri=new Y,Pi=new Y,bc=new Y,Ba=new Y,ka=new Y,za=new Y,Va=new ue,Ha=new ue,Ga=new ue,Vn=class s{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),bn.subVectors(n,e),Oa.subVectors(t,e);let o=sn.dot(sn),a=sn.dot(bn),l=sn.dot(Oa),h=bn.dot(bn),u=bn.dot(Oa),c=o*h-a*a;if(c===0)return r.set(0,0,0),null;let d=1/c,f=(h*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Va.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),Va.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Ha,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),bn.subVectors(t,e),sn.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ri.subVectors(i,n),Pi.subVectors(r,n),Ba.subVectors(t,n);let l=Ri.dot(Ba),h=Pi.dot(Ba);if(l<=0&&h<=0)return e.copy(n);ka.subVectors(t,i);let u=Ri.dot(ka),c=Pi.dot(ka);if(u>=0&&c<=u)return e.copy(i);let d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ri,o);za.subVectors(t,r);let f=Ri.dot(za),p=Pi.dot(za);if(p>=0&&f<=p)return e.copy(r);let x=f*h-l*p;if(x<=0&&h>=0&&p<=0)return a=h/(h-p),e.copy(n).addScaledVector(Pi,a);let v=u*p-f*c;if(v<=0&&c-u>=0&&f-p>=0)return bc.subVectors(r,i),a=(c-u)/(c-u+(f-p)),e.copy(i).addScaledVector(bc,a);let m=1/(v+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(Ri,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=El(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Jt.workingToColorSpace(we.copy(this),t),Math.round(qt(we.r*255,0,255))*65536+Math.round(qt(we.g*255,0,255))*256+Math.round(qt(we.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(we.copy(this),e);let n=we.r,i=we.g,r=we.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let c=o-a;switch(h=u<=.5?c/(o+a):c/(2-o-a),o){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ie){Jt.workingToColorSpace(we.copy(this),t);let e=we.r,n=we.g,i=we.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(yr);let n=vs(kn.h,yr.h,e),i=vs(kn.s,yr.s,e),r=vs(kn.l,yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new zt;zt.NAMES=wh;var pd=0,Wn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=oi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tn=md();function md(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):h<-14?(n[l]=1024>>-h-14,n[l|256]=1024>>-h-14|32768,i[l]=-h-1,i[l|256]=-h-1):h<=15?(n[l]=h+15<<10,n[l|256]=h+15<<10|32768,i[l]=13,i[l|256]=13):h<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[l]=h|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function gd(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=qt(s,-65504,65504),Tn.floatView[0]=s;let t=Tn.uint32View[0],e=t>>23&511;return Tn.baseTable[e]+((t&8388607)>>Tn.shiftTable[e])}function vd(s){let t=s>>10;return Tn.uint32View[0]=Tn.mantissaTable[Tn.offsetTable[t]+(s&1023)]+Tn.exponentTable[t],Tn.floatView[0]}var Xn=class{static toHalfFloat(t){return gd(t)}static fromHalfFloat(t){return vd(t)}},fe=new Y,Sr=new at,xd=0,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=Fe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),t}};var Es=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ts=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},_d=0,Ze=new de,Xa=new Ne,Ii=new Y,Ve=new Gn,ps=new Gn,_e=new Y,Ge=class s extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tl(t)?Ts:Es)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Ve.min,ps.min),Ve.expandByPoint(_e),_e.addVectors(Ve.max,ps.max),Ve.expandByPoint(_e)):(Ve.expandByPoint(ps.min),Ve.expandByPoint(ps.max))}Ve.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)_e.fromBufferAttribute(a,h),l&&(Ii.fromBufferAttribute(t,h),_e.add(Ii)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new Y,l[T]=new Y;let h=new Y,u=new Y,c=new Y,d=new at,f=new at,p=new at,x=new Y,v=new Y;function m(T,y,S){h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,S),u.sub(h),c.sub(h),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(c,-f.y).multiplyScalar(A),v.copy(c).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[T].add(x),a[y].add(x),a[S].add(x),l[T].add(v),l[y].add(v),l[S].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let T=0,y=b.length;T<y;++T){let S=b[T],A=S.start,N=S.count;for(let z=A,H=A+N;z<H;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let g=new Y,_=new Y,w=new Y,M=new Y;function E(T){w.fromBufferAttribute(i,T),M.copy(w);let y=a[T];g.copy(y),g.sub(w.multiplyScalar(w.dot(y))).normalize(),_.crossVectors(M,y);let A=_.dot(l[T])<0?-1:1;o.setXYZW(T,g.x,g.y,g.z,A)}for(let T=0,y=b.length;T<y;++T){let S=b[T],A=S.start,N=S.count;for(let z=A,H=A+N;z<H;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new Y,r=new Y,o=new Y,a=new Y,l=new Y,h=new Y,u=new Y,c=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),v=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,v),u.subVectors(o,r),c.subVectors(i,r),u.cross(c),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),a.add(u),l.add(u),h.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),c.subVectors(i,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u),f=0,p=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=h[f++]}return new He(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,c=h.length;u<c;u++){let d=h[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){let f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let u=i[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let c=o[h];this.addGroup(c.start,c.count,c.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=new de,ni=new Gi,Mr=new Hi,Ec=new Y,br=new Y,wr=new Y,Er=new Y,Ya=new Y,Tr=new Y,Tc=new Y,Ar=new Y,Ae=class extends Ne{constructor(t=new Ge,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],c=r[l];u!==0&&(Ya.fromBufferAttribute(c,t),o?Tr.addScaledVector(Ya,u):Tr.addScaledVector(Ya.sub(e),u))}e.add(Tr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Mr.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Mr,Ec)===null||ni.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(wc.copy(r).invert(),ni.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let v=d[p],m=o[v.materialIndex],b=Math.max(v.start,f.start),g=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=b,w=g;_<w;_+=3){let M=a.getX(_),E=a.getX(_+1),T=a.getX(_+2);i=Cr(this,m,t,n,h,u,c,M,E,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let v=p,m=x;v<m;v+=3){let b=a.getX(v),g=a.getX(v+1),_=a.getX(v+2);i=Cr(this,o,t,n,h,u,c,b,g,_),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let v=d[p],m=o[v.materialIndex],b=Math.max(v.start,f.start),g=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let _=b,w=g;_<w;_+=3){let M=_,E=_+1,T=_+2;i=Cr(this,m,t,n,h,u,c,M,E,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let v=p,m=x;v<m;v+=3){let b=v,g=v+1,_=v+2;i=Cr(this,o,t,n,h,u,c,b,g,_),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}}};function yd(s,t,e,n,i,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Rn,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Ar);return h<e.near||h>e.far?null:{distance:h,point:Ar.clone(),object:s}}function Cr(s,t,e,n,i,r,o,a,l,h){s.getVertexPosition(a,br),s.getVertexPosition(l,wr),s.getVertexPosition(h,Er);let u=yd(s,t,e,n,br,wr,Er,Tc);if(u){let c=new Y;Vn.getBarycoord(Tc,br,wr,Er,c),i&&(u.uv=Vn.getInterpolatedAttribute(i,a,l,h,c,new at)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,l,h,c,new at)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,h,c,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new Y,materialIndex:0};Vn.getNormal(br,wr,Er,d.normal),u.face=d,u.barycoord=c}return u}var Wi=class s extends Ge{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],c=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(c,2));function p(x,v,m,b,g,_,w,M,E,T,y){let S=_/E,A=w/T,N=_/2,z=w/2,H=M/2,G=E+1,B=T+1,W=0,V=0,lt=new Y;for(let st=0;st<B;st++){let mt=st*A-z;for(let bt=0;bt<G;bt++){let St=bt*S-N;lt[x]=St*b,lt[v]=mt*g,lt[m]=H,h.push(lt.x,lt.y,lt.z),lt[x]=0,lt[v]=0,lt[m]=M>0?1:-1,u.push(lt.x,lt.y,lt.z),c.push(bt/E),c.push(1-st/T),W+=1}}for(let st=0;st<T;st++)for(let mt=0;mt<E;mt++){let bt=d+mt+G*st,St=d+mt+G*(st+1),D=d+(mt+1)+G*(st+1),O=d+(mt+1)+G*st;l.push(bt,St,O),l.push(St,D,O),V+=6}a.addGroup(f,V,y),f+=V,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function mi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){let t={};for(let e=0;e<s.length;e++){let n=mi(s[e]);for(let i in n)t[i]=n[i]}return t}function Sd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Al(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var gi={clone:mi,merge:Ce},Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},As=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new Y,Ac=new at,Cc=new at,Ee=class extends As{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Cc),e.subVectors(Cc,Ac)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Di=1,Gr=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ee(Li,Di,t,e);i.layers=this.layers,this.add(i);let r=new Ee(Li,Di,t,e);r.layers=this.layers,this.add(r);let o=new Ee(Li,Di,t,e);o.layers=this.layers,this.add(o);let a=new Ee(Li,Di,t,e);a.layers=this.layers,this.add(a);let l=new Ee(Li,Di,t,e);l.layers=this.layers,this.add(l);let h=new Ee(Li,Di,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(c,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cs=class extends ye{constructor(t=[],e=di,n,i,r,o,a,l,h,u){super(t,e,n,i,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wr=class extends Te{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:an});r.uniforms.tEquirect.value=e;let o=new Ae(i,r),a=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Se),new Gr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ri=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},wd={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let v=e.getJointPose(x,n),m=this._getHandJoint(h,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,p=.005;h.inputState.pinching&&d>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Rs=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Xr=class extends ye{constructor(t=null,e=1,n=1,i,r,o,a,l,h=Ue,u=Ue,c,d){super(null,o,a,l,h,u,i,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qa=new Y,Ed=new Y,Td=new Vt,Je=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=qa.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Td.getNormalMatrix(t),i=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Hi,Ad=new at(.5,.5),Rr=new Y,Ps=class{constructor(t=new Je,e=new Je,n=new Je,i=new Je,r=new Je,o=new Je){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],p=i[9],x=i[10],v=i[11],m=i[12],b=i[13],g=i[14],_=i[15];if(n[0].setComponents(l-r,d-h,v-f,_-m).normalize(),n[1].setComponents(l+r,d+h,v+f,_+m).normalize(),n[2].setComponents(l+o,d+u,v+p,_+b).normalize(),n[3].setComponents(l-o,d-u,v-p,_-b).normalize(),n[4].setComponents(l-a,d-c,v-x,_-g).normalize(),e===un)n[5].setComponents(l+a,d+c,v+x,_+g).normalize();else if(e===Ms)n[5].setComponents(a,c,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){ii.center.set(0,0,0);let e=Ad.distanceTo(t.center);return ii.radius=.7071067811865476+e,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Rr.x=i.normal.x>0?t.max.x:t.min.x,Rr.y=i.normal.y>0?t.max.y:t.min.y,Rr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Is=class extends ye{constructor(t,e,n,i,r,o,a,l,h){super(t,e,n,i,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ls=class extends ye{constructor(t,e,n=Kn,i,r,o,a=Ue,l=Ue,h,u=Bi,c=1){if(u!==Bi&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:c};super(d,i,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var We=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new at:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Y,i=[],r=[],o=[],a=new Y,l=new de;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new Y)}r[0]=new Y,o[0]=new Y;let h=Number.MAX_VALUE,u=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),c<=h&&(h=c,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(qt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Yi=class extends We{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*u-f*c+this.aX,h=d*c+f*u+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yr=class extends Yi{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,c){let d=(o-r)/h-(a-r)/(h+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+c)+(l-a)/c;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Pr=new Y,$a=new Cl,Za=new Cl,Ja=new Cl,qr=class extends We{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new Y){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=i[(a-1)%r]:(Pr.subVectors(i[0],i[1]).add(i[0]),h=Pr);let c=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Pr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(h.distanceToSquared(c),f),x=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),v<1e-4&&(v=x),$a.initNonuniformCatmullRom(h.x,c.x,d.x,u.x,p,x,v),Za.initNonuniformCatmullRom(h.y,c.y,d.y,u.y,p,x,v),Ja.initNonuniformCatmullRom(h.z,c.z,d.z,u.z,p,x,v)}else this.curveType==="catmullrom"&&($a.initCatmullRom(h.x,c.x,d.x,u.x,this.tension),Za.initCatmullRom(h.y,c.y,d.y,u.y,this.tension),Ja.initCatmullRom(h.z,c.z,d.z,u.z,this.tension));return n.set($a.calc(l),Za.calc(l),Ja.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Y().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rc(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Cd(s,t){let e=1-s;return e*e*t}function Rd(s,t){return 2*(1-s)*s*t}function Pd(s,t){return s*s*t}function xs(s,t,e,n){return Cd(s,t)+Rd(s,e)+Pd(s,n)}function Id(s,t){let e=1-s;return e*e*e*t}function Ld(s,t){let e=1-s;return 3*e*e*s*t}function Dd(s,t){return 3*(1-s)*s*s*t}function Ud(s,t){return s*s*s*t}function _s(s,t,e,n,i){return Id(s,t)+Ld(s,e)+Dd(s,n)+Ud(s,i)}var Ds=class extends We{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,i.x,r.x,o.x,a.x),_s(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$r=class extends We{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,i.x,r.x,o.x,a.x),_s(t,i.y,r.y,o.y,a.y),_s(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Us=class extends We{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends We{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ns=class extends We{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,i.x,r.x,o.x),xs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends We{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,i.x,r.x,o.x),xs(t,i.y,r.y,o.y),xs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fs=class extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],h=i[o],u=i[o>i.length-2?i.length-1:o+1],c=i[o>i.length-3?i.length-1:o+2];return n.set(Rc(a,l.x,h.x,u.x,c.x),Rc(a,l.y,h.y,u.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},nl=Object.freeze({__proto__:null,ArcCurve:Yr,CatmullRomCurve3:qr,CubicBezierCurve:Ds,CubicBezierCurve3:$r,EllipseCurve:Yi,LineCurve:Us,LineCurve3:Zr,QuadraticBezierCurve:Ns,QuadraticBezierCurve3:Jr,SplineCurve:Fs}),Kr=class extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new nl[i.type]().fromJSON(i))}return this}},pn=class extends Kr{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Us(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ns(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ds(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let h=new Yi(t,e,n,i,r,o,a,l);if(this.curves.length>0){let c=h.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cn=class extends pn{constructor(t){super(t),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new pn().fromJSON(i))}return this}};function Nd(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Eh(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=zd(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let u=-1/0,c=-1/0;for(let d=e;d<i;d+=e){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>c&&(c=p)}h=Math.max(u-a,c-l),h=h!==0?32767/h:0}return Os(r,o,e,a,l,h,0),o}function Eh(s,t,e,n,i){let r;if(i===Kd(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Pc(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Pc(o/n|0,s[o],s[o+1],r);return r&&qi(r,r.next)&&(ks(r),r=r.next),r}function hi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(qi(e,e.next)||ce(e.prev,e,e.next)===0)){if(ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Os(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Xd(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,h=s.next;if(r?Od(s,n,i,r):Fd(s)){t.push(l.i,s.i,h.i),ks(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=Bd(hi(s),t),Os(s,t,e,n,i,r,2)):o===2&&kd(s,t,e,n,i,r):Os(hi(s),t,e,n,i,r,1);break}}}function Fd(s){let t=s.prev,e=s,n=s.next;if(ce(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,u=Math.min(i,r,o),c=Math.min(a,l,h),d=Math.max(i,r,o),f=Math.max(a,l,h),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=c&&p.y<=f&&ms(i,a,r,l,o,h,p.x,p.y)&&ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Od(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ce(i,r,o)>=0)return!1;let a=i.x,l=r.x,h=o.x,u=i.y,c=r.y,d=o.y,f=Math.min(a,l,h),p=Math.min(u,c,d),x=Math.max(a,l,h),v=Math.max(u,c,d),m=il(f,p,t,e,n),b=il(x,v,t,e,n),g=s.prevZ,_=s.nextZ;for(;g&&g.z>=m&&_&&_.z<=b;){if(g.x>=f&&g.x<=x&&g.y>=p&&g.y<=v&&g!==i&&g!==o&&ms(a,u,l,c,h,d,g.x,g.y)&&ce(g.prev,g,g.next)>=0||(g=g.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=v&&_!==i&&_!==o&&ms(a,u,l,c,h,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;g&&g.z>=m;){if(g.x>=f&&g.x<=x&&g.y>=p&&g.y<=v&&g!==i&&g!==o&&ms(a,u,l,c,h,d,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=v&&_!==i&&_!==o&&ms(a,u,l,c,h,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Bd(s,t){let e=s;do{let n=e.prev,i=e.next.next;!qi(n,i)&&Ah(n,e,e.next,i)&&Bs(n,i)&&Bs(i,n)&&(t.push(n.i,e.i,i.i),ks(e),ks(e.next),e=s=i),e=e.next}while(e!==s);return hi(e)}function kd(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$d(o,a)){let l=Ch(o,a);o=hi(o,o.next),l=hi(l,l.next),Os(o,t,e,n,i,r,0),Os(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function zd(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,h=Eh(s,a,l,n,!1);h===h.next&&(h.steiner=!0),i.push(qd(h))}i.sort(Vd);for(let r=0;r<i.length;r++)e=Hd(i[r],e);return e}function Vd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Hd(s,t){let e=Gd(s,t);if(!e)return t;let n=Ch(e,s);return hi(n,n.next),hi(e,e.next)}function Gd(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(qi(s,e))return e;do{if(qi(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let c=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=n&&c>r&&(r=c,o=e.x<e.next.x?e:e.next,c===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,h=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Th(i<h?n:r,i,l,h,i<h?r:n,i,e.x,e.y)){let c=Math.abs(i-e.y)/(n-e.x);Bs(e,s)&&(c<u||c===u&&(e.x>o.x||e.x===o.x&&Wd(o,e)))&&(o=e,u=c)}e=e.next}while(e!==a);return o}function Wd(s,t){return ce(s.prev,s,t.prev)<0&&ce(t.next,s,s.next)<0}function Xd(s,t,e,n){let i=s;do i.z===0&&(i.z=il(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Yd(i)}function Yd(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function il(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function qd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Th(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ms(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Th(s,t,e,n,i,r,o,a)}function $d(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Zd(s,t)&&(Bs(s,t)&&Bs(t,s)&&Jd(s,t)&&(ce(s.prev,s,t.prev)||ce(s,t.prev,t))||qi(s,t)&&ce(s.prev,s,s.next)>0&&ce(t.prev,t,t.next)>0)}function ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function qi(s,t){return s.x===t.x&&s.y===t.y}function Ah(s,t,e,n){let i=Lr(ce(s,t,e)),r=Lr(ce(s,t,n)),o=Lr(ce(e,n,s)),a=Lr(ce(e,n,t));return!!(i!==r&&o!==a||i===0&&Ir(s,e,t)||r===0&&Ir(s,n,t)||o===0&&Ir(e,s,n)||a===0&&Ir(e,t,n))}function Ir(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Lr(s){return s>0?1:s<0?-1:0}function Zd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ah(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Bs(s,t){return ce(s.prev,s,s.next)<0?ce(s,t,s.next)>=0&&ce(s,s.prev,t)>=0:ce(s,t,s.prev)<0||ce(s,s.next,t)<0}function Jd(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ch(s,t){let e=sl(s.i,s.x,s.y),n=sl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pc(s,t,e,n){let i=sl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ks(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kd(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var rl=class{static triangulate(t,e,n=2){return Nd(t,e,n)}},dn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Ic(t),Lc(n,t);let o=t.length;e.forEach(Ic);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Lc(n,e[l]);let a=rl.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ic(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Lc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var zs=class s extends Ge{constructor(t=new Cn([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,c=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:jd,g,_=!1,w,M,E,T;m&&(g=m.getSpacedPoints(u),_=!0,d=!1,w=m.computeFrenetFrames(u,!1),M=new Y,E=new Y,T=new Y),d||(v=0,f=0,p=0,x=0);let y=a.extractPoints(h),S=y.shape,A=y.holes;if(!dn.isClockWise(S)){S=S.reverse();for(let R=0,j=A.length;R<j;R++){let Q=A[R];dn.isClockWise(Q)&&(A[R]=Q.reverse())}}function z(R){let Q=10000000000000001e-36,et=R[0];for(let k=1;k<=R.length;k++){let U=k%R.length,tt=R[U],pt=tt.x-et.x,Ft=tt.y-et.y,F=pt*pt+Ft*Ft,C=Math.max(Math.abs(tt.x),Math.abs(tt.y),Math.abs(et.x),Math.abs(et.y)),K=Q*C*C;if(F<=K){R.splice(U,1),k--;continue}et=tt}}z(S),A.forEach(z);let H=A.length,G=S;for(let R=0;R<H;R++){let j=A[R];S=S.concat(j)}function B(R,j,Q){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(j,Q)}let W=S.length;function V(R,j,Q){let et,k,U,tt=R.x-j.x,pt=R.y-j.y,Ft=Q.x-R.x,F=Q.y-R.y,C=tt*tt+pt*pt,K=tt*F-pt*Ft;if(Math.abs(K)>Number.EPSILON){let rt=Math.sqrt(C),ht=Math.sqrt(Ft*Ft+F*F),ot=j.x-pt/rt,It=j.y+tt/rt,Mt=Q.x-F/ht,Pt=Q.y+Ft/ht,Dt=((Mt-ot)*F-(Pt-It)*Ft)/(tt*F-pt*Ft);et=ot+tt*Dt-R.x,k=It+pt*Dt-R.y;let ft=et*et+k*k;if(ft<=2)return new at(et,k);U=Math.sqrt(ft/2)}else{let rt=!1;tt>Number.EPSILON?Ft>Number.EPSILON&&(rt=!0):tt<-Number.EPSILON?Ft<-Number.EPSILON&&(rt=!0):Math.sign(pt)===Math.sign(F)&&(rt=!0),rt?(et=-pt,k=tt,U=Math.sqrt(C)):(et=tt,k=pt,U=Math.sqrt(C/2))}return new at(et/U,k/U)}let lt=[];for(let R=0,j=G.length,Q=j-1,et=R+1;R<j;R++,Q++,et++)Q===j&&(Q=0),et===j&&(et=0),lt[R]=V(G[R],G[Q],G[et]);let st=[],mt,bt=lt.concat();for(let R=0,j=H;R<j;R++){let Q=A[R];mt=[];for(let et=0,k=Q.length,U=k-1,tt=et+1;et<k;et++,U++,tt++)U===k&&(U=0),tt===k&&(tt=0),mt[et]=V(Q[et],Q[U],Q[tt]);st.push(mt),bt=bt.concat(mt)}let St;if(v===0)St=dn.triangulateShape(G,A);else{let R=[],j=[];for(let Q=0;Q<v;Q++){let et=Q/v,k=f*Math.cos(et*Math.PI/2),U=p*Math.sin(et*Math.PI/2)+x;for(let tt=0,pt=G.length;tt<pt;tt++){let Ft=B(G[tt],lt[tt],U);ct(Ft.x,Ft.y,-k),et===0&&R.push(Ft)}for(let tt=0,pt=H;tt<pt;tt++){let Ft=A[tt];mt=st[tt];let F=[];for(let C=0,K=Ft.length;C<K;C++){let rt=B(Ft[C],mt[C],U);ct(rt.x,rt.y,-k),et===0&&F.push(rt)}et===0&&j.push(F)}}St=dn.triangulateShape(R,j)}let D=St.length,O=p+x;for(let R=0;R<W;R++){let j=d?B(S[R],bt[R],O):S[R];_?(E.copy(w.normals[0]).multiplyScalar(j.x),M.copy(w.binormals[0]).multiplyScalar(j.y),T.copy(g[0]).add(E).add(M),ct(T.x,T.y,T.z)):ct(j.x,j.y,0)}for(let R=1;R<=u;R++)for(let j=0;j<W;j++){let Q=d?B(S[j],bt[j],O):S[j];_?(E.copy(w.normals[R]).multiplyScalar(Q.x),M.copy(w.binormals[R]).multiplyScalar(Q.y),T.copy(g[R]).add(E).add(M),ct(T.x,T.y,T.z)):ct(Q.x,Q.y,c/u*R)}for(let R=v-1;R>=0;R--){let j=R/v,Q=f*Math.cos(j*Math.PI/2),et=p*Math.sin(j*Math.PI/2)+x;for(let k=0,U=G.length;k<U;k++){let tt=B(G[k],lt[k],et);ct(tt.x,tt.y,c+Q)}for(let k=0,U=A.length;k<U;k++){let tt=A[k];mt=st[k];for(let pt=0,Ft=tt.length;pt<Ft;pt++){let F=B(tt[pt],mt[pt],et);_?ct(F.x,F.y+g[u-1].y,g[u-1].x+Q):ct(F.x,F.y,c+Q)}}}I(),P();function I(){let R=i.length/3;if(d){let j=0,Q=W*j;for(let et=0;et<D;et++){let k=St[et];q(k[2]+Q,k[1]+Q,k[0]+Q)}j=u+v*2,Q=W*j;for(let et=0;et<D;et++){let k=St[et];q(k[0]+Q,k[1]+Q,k[2]+Q)}}else{for(let j=0;j<D;j++){let Q=St[j];q(Q[2],Q[1],Q[0])}for(let j=0;j<D;j++){let Q=St[j];q(Q[0]+W*u,Q[1]+W*u,Q[2]+W*u)}}n.addGroup(R,i.length/3-R,0)}function P(){let R=i.length/3,j=0;$(G,j),j+=G.length;for(let Q=0,et=A.length;Q<et;Q++){let k=A[Q];$(k,j),j+=k.length}n.addGroup(R,i.length/3-R,1)}function $(R,j){let Q=R.length;for(;--Q>=0;){let et=Q,k=Q-1;k<0&&(k=R.length-1);for(let U=0,tt=u+v*2;U<tt;U++){let pt=W*U,Ft=W*(U+1),F=j+et+pt,C=j+k+pt,K=j+k+Ft,rt=j+et+Ft;gt(F,C,K,rt)}}}function ct(R,j,Q){l.push(R),l.push(j),l.push(Q)}function q(R,j,Q){vt(R),vt(j),vt(Q);let et=i.length/3,k=b.generateTopUV(n,i,et-3,et-2,et-1);dt(k[0]),dt(k[1]),dt(k[2])}function gt(R,j,Q,et){vt(R),vt(j),vt(et),vt(j),vt(Q),vt(et);let k=i.length/3,U=b.generateSideWallUV(n,i,k-6,k-3,k-2,k-1);dt(U[0]),dt(U[1]),dt(U[3]),dt(U[1]),dt(U[2]),dt(U[3])}function vt(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function dt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new nl[i.type]().fromJSON(i)),new s(n,t.options)}},jd={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[i*3],u=t[i*3+1];return[new at(r,o),new at(a,l),new at(h,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],u=t[n*3+1],c=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],v=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new at(o,1-l),new at(h,1-c),new at(d,1-p),new at(x,1-m)]:[new at(a,1-l),new at(u,1-c),new at(f,1-p),new at(v,1-m)]}};function Qd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vs=class s extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=t/a,d=e/l,f=[],p=[],x=[],v=[];for(let m=0;m<u;m++){let b=m*d-o;for(let g=0;g<h;g++){let _=g*c-r;p.push(_,-b,0),x.push(0,0,1),v.push(g/a),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let g=b+h*m,_=b+h*(m+1),w=b+1+h*(m+1),M=b+1+h*m;f.push(g,_,M),f.push(_,w,M)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var jr=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hs=class extends jr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Qr=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},to=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Dr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function tf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ui=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eo=class extends ui{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ka,endingEnd:Ka}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ja:r=t,a=2*e-n;break;case Qa:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ja:o=t,l=2*n-e;break;case Qa:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,v=x*p,m=-d*v+2*d*x-d*p,b=(1+d)*v+(-1.5-2*d)*x+(-.5+d)*p+1,g=(-1-f)*v+(1.5+f)*x+.5*p,_=f*v-f*x;for(let w=0;w!==a;++w)r[w]=m*o[u+w]+b*o[h+w]+g*o[l+w]+_*o[c+w];return r}},no=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(i-e),c=1-u;for(let d=0;d!==a;++d)r[d]=o[h+d]*c+o[l+d]*u;return r}},io=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Xe=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case Ur:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return Ur}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&tf(i))for(let a=0,l=i.length;a!==l;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ur,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(i)l=!0;else{let c=a*n,d=c-n,f=c+n;for(let p=0;p!==n;++p){let x=e[c+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let c=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Xe.prototype.ValueTypeName="";Xe.prototype.TimeBufferType=Float32Array;Xe.prototype.ValueBufferType=Float32Array;Xe.prototype.DefaultInterpolation=kr;var Yn=class extends Xe{constructor(t,e,n){super(t,e,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=ys;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Xe{constructor(t,e,n,i){super(t,e,n,i)}};so.prototype.ValueTypeName="color";var ro=class extends Xe{constructor(t,e,n,i){super(t,e,n,i)}};ro.prototype.ValueTypeName="number";var oo=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),h=t*a;for(let u=h+a;h!==u;h+=4)Ke.slerpFlat(r,0,o,h-a,o,h,l);return r}},Gs=class extends Xe{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Xe{constructor(t,e,n){super(t,e,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=ys;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Xe{constructor(t,e,n,i){super(t,e,n,i)}};ao.prototype.ValueTypeName="vector";var Oi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},lo=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){let f=h[c],p=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},Rh=new lo,mn=class{constructor(t){this.manager=t!==void 0?t:Rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mn.DEFAULT_MATERIAL_NAME="__DEFAULT";var En={},ol=class extends Error{constructor(t,e){super(t),this.response=e}},$i=class extends mn{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Oi.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(En[t]!==void 0){En[t].push({onLoad:e,onProgress:n,onError:i});return}En[t]=[],En[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||h.body===void 0||h.body.getReader===void 0)return h;let u=En[t],c=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,v=new ReadableStream({start(m){b();function b(){c.read().then(({done:g,value:_})=>{if(g)m.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let M=0,E=u.length;M<E;M++){let T=u[M];T.onProgress&&T.onProgress(w)}m.enqueue(_),b()}},g=>{m.error(g)})}}});return new Response(v)}else throw new ol(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a==="")return h.text();{let c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(p=>f.decode(p))}}}).then(h=>{Oi.add(`file:${t}`,h);let u=En[t];delete En[t];for(let c=0,d=u.length;c<d;c++){let f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{let u=En[t];if(u===void 0)throw this.manager.itemError(t),h;delete En[t];for(let c=0,d=u.length;c<d;c++){let f=u[c];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Ui=new WeakMap,co=class extends mn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Oi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let c=Ui.get(o);c===void 0&&(c=[],Ui.set(o,c)),c.push({onLoad:e,onError:i})}return o}let a=zi("img");function l(){u(),e&&e(this);let c=Ui.get(this)||[];for(let d=0;d<c.length;d++){let f=c[d];f.onLoad&&f.onLoad(this)}Ui.delete(this),r.manager.itemEnd(t)}function h(c){u(),i&&i(c),Oi.remove(`image:${t}`);let d=Ui.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(c)}Ui.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Oi.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ws=class extends mn{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Xr,a=new $i(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let h;try{h=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:hn,o.wrapT=h.wrapT!==void 0?h.wrapT:hn,o.magFilter=h.magFilter!==void 0?h.magFilter:Se,o.minFilter=h.minFilter!==void 0?h.minFilter:Se,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=Ln),h.mipmapCount===1&&(o.minFilter=Se),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,e&&e(o,h)},n,i),o}},Xs=class extends mn{constructor(t){super(t)}load(t,e,n,i){let r=new ye,o=new co(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},ho=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ys=class extends ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}};var Zi=class extends As{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var uo=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},qs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Rl="\\[\\]\\.:\\/",ef=new RegExp("["+Rl+"]","g"),Pl="[^"+Rl+"]",nf="[^"+Rl.replace("\\.","")+"]",sf=/((?:WC+[\/:])*)/.source.replace("WC",Pl),rf=/(WCOD+)?/.source.replace("WCOD",nf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),af=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),lf=new RegExp("^"+sf+rf+of+af+"$"),cf=["material","materials","bones","map"],al=class{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ef,"")}static parseTrackName(t){let e=lf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);cf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=al;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pv=new Float32Array(1);var Ji=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dc=new at,$s=class{constructor(t=new at(1/0,1/0),e=new at(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var on=class{constructor(){this.type="ShapePath",this.color=new zt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new pn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){let b=[];for(let g=0,_=m.length;g<_;g++){let w=m[g],M=new Cn;M.curves=w.curves,b.push(M)}return b}function n(m,b){let g=b.length,_=!1;for(let w=g-1,M=0;M<g;w=M++){let E=b[w],T=b[M],y=T.x-E.x,S=T.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=b[M],y=-y,T=b[w],S=-S),m.y<E.y||m.y>T.y)continue;if(m.y===E.y){if(m.x===E.x)return!0}else{let A=S*(m.x-E.x)-y*(m.y-E.y);if(A===0)return!0;if(A<0)continue;_=!_}}else{if(m.y!==E.y)continue;if(T.x<=m.x&&m.x<=E.x||E.x<=m.x&&m.x<=T.x)return!0}}return _}let i=dn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,h=[];if(r.length===1)return a=r[0],l=new Cn,l.curves=a.curves,h.push(l),h;let u=!i(r[0].getPoints());u=t?!u:u;let c=[],d=[],f=[],p=0,x;d[p]=void 0,f[p]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],x=a.getPoints(),o=i(x),o=t?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new Cn,p:x},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:x[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,b=0;for(let g=0,_=d.length;g<_;g++)c[g]=[];for(let g=0,_=d.length;g<_;g++){let w=f[g];for(let M=0;M<w.length;M++){let E=w[M],T=!0;for(let y=0;y<d.length;y++)n(E.p,d[y].p)&&(g!==y&&b++,T?(T=!1,c[y].push(E)):m=!0);T&&c[g].push(E)}}b>0&&m===!1&&(f=c)}let v;for(let m=0,b=d.length;m<b;m++){l=d[m].s,h.push(l),v=f[m];for(let g=0,_=v.length;g<_;g++)l.holes.push(v[g].h)}return h}},Zs=class extends fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Il(s,t,e,n){let i=hf(n);switch(e){case vl:return s*t;case _l:return s*t/i.components*i.byteLength;case Ao:return s*t/i.components*i.byteLength;case yl:return s*t*2/i.components*i.byteLength;case Co:return s*t*2/i.components*i.byteLength;case xl:return s*t*3/i.components*i.byteLength;case Qe:return s*t*4/i.components*i.byteLength;case Ro:return s*t*4/i.components*i.byteLength;case Qs:case tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Io:case Do:return Math.max(s,16)*Math.max(t,8)/4;case Po:case Lo:return Math.max(s,8)*Math.max(t,8)/2;case Uo:case No:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ir:case Ko:case jo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sl:case Qo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ta:case ea:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hf(s){switch(s){case vn:case pl:return{byteLength:1,components:1};case Ki:case ml:case Me:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case Kn:case wo:case Fe:return{byteLength:4,components:1};case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);function Qh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uf(s){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,c=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&h instanceof Float16Array)f=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){let u=l.array,c=l.updateRanges;if(s.bindBuffer(h,a),c.length===0)s.bufferSubData(h,0,u);else{c.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<c.length;f++){let p=c[d],x=c[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,c[d]=x)}c.length=d+1;for(let f=0,p=c.length;f<p;f++){let x=c[f];s.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:o}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Rm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Bm=`#define TOON
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
}`,km=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Gm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:vf,aomap_fragment:xf,aomap_pars_fragment:_f,batching_pars_vertex:yf,batching_vertex:Sf,begin_vertex:Mf,beginnormal_vertex:bf,bsdfs:wf,iridescence_fragment:Ef,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:kf,emissivemap_fragment:zf,emissivemap_pars_fragment:Vf,colorspace_fragment:Hf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:Yf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:sp,envmap_vertex:$f,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Kf,fog_pars_fragment:jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:vp,map_fragment:xp,map_pars_fragment:_p,map_particle_fragment:yp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:bp,morphinstance_vertex:wp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Cp,normal_fragment_begin:Rp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:kp,packing:zp,premultiplied_alpha_fragment:Vp,project_vertex:Hp,dithering_fragment:Gp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:$p,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Kp,skinning_pars_vertex:jp,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:vm,depth_frag:xm,distanceRGBA_vert:_m,distanceRGBA_frag:ym,equirect_vert:Sm,equirect_frag:Mm,linedashed_vert:bm,linedashed_frag:wm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Cm,meshmatcap_vert:Rm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:km,points_frag:zm,shadow_vert:Vm,shadow_frag:Hm,sprite_vert:Gm,sprite_frag:Wm},Et={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},xn={basic:{uniforms:Ce([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ce([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new zt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ce([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ce([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ce([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ce([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ce([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ce([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ce([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ce([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ce([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ce([Et.common,Et.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ce([Et.lights,Et.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};xn.physical={uniforms:Ce([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var na={r:0,b:0,g:0},vi=new rn,Xm=new de;function Ym(s,t,e,n,i,r,o){let a=new zt(0),l=r===!0?0:1,h,u,c=null,d=0,f=null;function p(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?e:t).get(_)),_}function x(g){let _=!1,w=p(g);w===null?m(a,l):w&&w.isColor&&(m(w,1),_=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(g,_){let w=p(_);w&&(w.isCubeTexture||w.mapping===Ks)?(u===void 0&&(u=new Ae(new Wi(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:mi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vi.copy(_.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(vi)),u.material.toneMapped=Jt.getTransfer(w.colorSpace)!==Qt,(c!==w||d!==w.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,c=w,d=w.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Ae(new Vs(2,2),new me({name:"BackgroundMaterial",uniforms:mi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(w.colorSpace)!==Qt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(c!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,c=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function m(g,_){g.getRGB(na,Al(s)),n.buffers.color.setClear(na.r,na.g,na.b,_,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:x,addToRenderList:v,dispose:b}}function qm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,A,N,z,H){let G=!1,B=c(z,N,A);r!==B&&(r=B,h(r.object)),G=f(S,z,N,H),G&&p(S,z,N,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(S,A,N,z),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function h(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function c(S,A,N){let z=N.wireframe===!0,H=n[S.id];H===void 0&&(H={},n[S.id]=H);let G=H[A.id];G===void 0&&(G={},H[A.id]=G);let B=G[z];return B===void 0&&(B=d(l()),G[z]=B),B}function d(S){let A=[],N=[],z=[];for(let H=0;H<e;H++)A[H]=0,N[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:z,object:S,attributes:{},index:null}}function f(S,A,N,z){let H=r.attributes,G=A.attributes,B=0,W=N.getAttributes();for(let V in W)if(W[V].location>=0){let st=H[V],mt=G[V];if(mt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),st===void 0||st.attribute!==mt||mt&&st.data!==mt.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function p(S,A,N,z){let H={},G=A.attributes,B=0,W=N.getAttributes();for(let V in W)if(W[V].location>=0){let st=G[V];st===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));let mt={};mt.attribute=st,st&&st.data&&(mt.data=st.data),H[V]=mt,B++}r.attributes=H,r.attributesNum=B,r.index=z}function x(){let S=r.newAttributes;for(let A=0,N=S.length;A<N;A++)S[A]=0}function v(S){m(S,0)}function m(S,A){let N=r.newAttributes,z=r.enabledAttributes,H=r.attributeDivisors;N[S]=1,z[S]===0&&(s.enableVertexAttribArray(S),z[S]=1),H[S]!==A&&(s.vertexAttribDivisor(S,A),H[S]=A)}function b(){let S=r.newAttributes,A=r.enabledAttributes;for(let N=0,z=A.length;N<z;N++)A[N]!==S[N]&&(s.disableVertexAttribArray(N),A[N]=0)}function g(S,A,N,z,H,G,B){B===!0?s.vertexAttribIPointer(S,A,N,H,G):s.vertexAttribPointer(S,A,N,z,H,G)}function _(S,A,N,z){x();let H=z.attributes,G=N.getAttributes(),B=A.defaultAttributeValues;for(let W in G){let V=G[W];if(V.location>=0){let lt=H[W];if(lt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){let st=lt.normalized,mt=lt.itemSize,bt=t.get(lt);if(bt===void 0)continue;let St=bt.buffer,D=bt.type,O=bt.bytesPerElement,I=D===s.INT||D===s.UNSIGNED_INT||lt.gpuType===wo;if(lt.isInterleavedBufferAttribute){let P=lt.data,$=P.stride,ct=lt.offset;if(P.isInstancedInterleavedBuffer){for(let q=0;q<V.locationSize;q++)m(V.location+q,P.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let q=0;q<V.locationSize;q++)v(V.location+q);s.bindBuffer(s.ARRAY_BUFFER,St);for(let q=0;q<V.locationSize;q++)g(V.location+q,mt/V.locationSize,D,st,$*O,(ct+mt/V.locationSize*q)*O,I)}else{if(lt.isInstancedBufferAttribute){for(let P=0;P<V.locationSize;P++)m(V.location+P,lt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let P=0;P<V.locationSize;P++)v(V.location+P);s.bindBuffer(s.ARRAY_BUFFER,St);for(let P=0;P<V.locationSize;P++)g(V.location+P,mt/V.locationSize,D,st,mt*O,mt/V.locationSize*P*O,I)}}else if(B!==void 0){let st=B[W];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(V.location,st);break;case 3:s.vertexAttrib3fv(V.location,st);break;case 4:s.vertexAttrib4fv(V.location,st);break;default:s.vertexAttrib1fv(V.location,st)}}}}b()}function w(){T();for(let S in n){let A=n[S];for(let N in A){let z=A[N];for(let H in z)u(z[H].object),delete z[H];delete A[N]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;let A=n[S.id];for(let N in A){let z=A[N];for(let H in z)u(z[H].object),delete z[H];delete A[N]}delete n[S.id]}function E(S){for(let A in n){let N=n[A];if(N[S.id]===void 0)continue;let z=N[S.id];for(let H in z)u(z[H].object),delete z[H];delete N[S.id]}}function T(){y(),o=!0,r!==i&&(r=i,h(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:v,disableUnusedAttributes:b}}function $m(s,t,e){let n;function i(h){n=h}function r(h,u){s.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,c){c!==0&&(s.drawArraysInstanced(n,h,u,c),e.update(u,n,c))}function a(h,u,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];e.update(f,n,1)}function l(h,u,c,d){if(c===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h.length;p++)o(h[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let p=0;for(let x=0;x<c;x++)p+=u[x]*d[x];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Qe&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let T=E===Me&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==vn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fe&&!T)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:b,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:w,maxSamples:M}}function Jm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Je,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=u(c,d,0)},this.setState=function(c,d,f){let p=c.clippingPlanes,x=c.clipIntersection,v=c.clipShadows,m=s.get(c);if(!i||p===null||p.length===0||r&&!v)r?u(null):h();else{let b=r?0:n,g=b*4,_=m.clippingState||null;l.value=_,_=u(p,d,g,f);for(let w=0;w!==g;++w)_[w]=e[w];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,d,f,p){let x=c!==null?c.length:0,v=null;if(x!==0){if(v=l.value,p!==!0||v===null){let m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,_=f;g!==x;++g,_+=4)o.copy(c[g]).applyMatrix4(b,a),o.normal.toArray(v,_),v[_+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,v}}function Km(s){let t=new WeakMap;function e(o,a){return a===Jn?o.mapping=di:a===Mo&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jn||a===Mo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Wr(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var es=4,Ph=[.125,.215,.35,.446,.526,.582],yi=20,Ll=new Zi,Ih=new zt,Dl=null,Ul=0,Nl=0,Fl=!1,_i=(1+Math.sqrt(5))/2,ts=1/_i,Lh=[new Y(-_i,ts,0),new Y(_i,ts,0),new Y(-ts,0,_i),new Y(ts,0,_i),new Y(0,_i,-ts),new Y(0,_i,ts),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],jm=new Y,ra=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=jm}=r;Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dl,Ul,Nl),this._renderer.xr.enabled=Fl,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Me,format:Qe,colorSpace:Pn,depthBuffer:!1},i=Dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=tg(r,t,e)}return i}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,n,i,r){let l=new Ee(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Ih),c.toneMapping=In,c.autoClear=!1;let p=new ci({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),x=new Ae(new Wi,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Ih),v=!0);for(let b=0;b<6;b++){let g=b%3;g===0?(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):g===1?(l.up.set(0,0,h[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let _=this._cubeSize;ia(i,g*_,b>2?_:0,_,_),c.setRenderTarget(i),v&&c.render(x,l),c.render(t,l)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===di||t.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lh[(i-r-1)%Lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new Ae(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),x=r/p,v=isFinite(r)?1+Math.floor(u*x):yi;v>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${yi}`);let m=[],b=0;for(let E=0;E<yi;++E){let T=E/x,y=Math.exp(-T*T/2);m.push(y),E===0?b+=y:E<v&&(b+=2*y)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;d.envMap.value=t.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:g}=this;d.dTheta.value=p,d.mipInt.value=g-n;let _=this._sizeLods[i],w=3*_*(i>g-es?i-g+es:0),M=4*(this._cubeSize-_);ia(e,w,M,3*_,2*_),l.setRenderTarget(e),l.render(c,Ll)}};function Qm(s){let t=[],e=[],n=[],i=s,r=s-es+1+Ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-es?l=Ph[o-s+es-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,p=6,x=3,v=2,m=1,b=new Float32Array(x*p*f),g=new Float32Array(v*p*f),_=new Float32Array(m*p*f);for(let M=0;M<f;M++){let E=M%3*2/3-1,T=M>2?0:-1,y=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];b.set(y,x*p*M),g.set(d,v*p*M);let S=[M,M,M,M,M,M];_.set(S,m*p*M)}let w=new Ge;w.setAttribute("position",new He(b,x)),w.setAttribute("uv",new He(g,v)),w.setAttribute("faceIndex",new He(_,m)),t.push(w),i>es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dh(s,t,e){let n=new Te(s,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tg(s,t,e){let n=new Float32Array(yi),i=new Y(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Uh(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Nh(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function eg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===Jn||l===Mo,u=l===di||l===fi;if(h||u){let c=t.get(a),d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ra(s)),c=h?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{let f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new ra(s)),c=h?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function i(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ng(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ig(s,t,e,n){let i={},r=new WeakMap;function o(c){let d=c.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(c){let d=c.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function h(c){let d=[],f=c.index,p=c.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let g=0,_=b.length;g<_;g+=3){let w=b[g+0],M=b[g+1],E=b[g+2];d.push(w,M,M,E,E,w)}}else if(p!==void 0){let b=p.array;x=p.version;for(let g=0,_=b.length/3-1;g<_;g+=3){let w=g+0,M=g+1,E=g+2;d.push(w,M,M,E,E,w)}}else return;let v=new(Tl(d)?Ts:Es)(d,1);v.version=x;let m=r.get(c);m&&t.remove(m),r.set(c,v)}function u(c){let d=r.get(c);if(d){let f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function sg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let v=0;for(let m=0;m<p;m++)v+=f[m];e.update(v,n,1)}function c(d,f,p,x){if(p===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<d.length;m++)h(d[m]/o,f[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*x[b];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function rg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function og(s,t,e){let n=new WeakMap,i=new ue;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==c){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],g=0;f===!0&&(g=1),p===!0&&(g=2),x===!0&&(g=3);let _=a.attributes.position.count*g,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*w*4*c),E=new bs(M,_,w,c);E.type=Fe,E.needsUpdate=!0;let T=g*4;for(let S=0;S<c;S++){let A=v[S],N=m[S],z=b[S],H=_*w*4*S;for(let G=0;G<A.count;G++){let B=G*T;f===!0&&(i.fromBufferAttribute(A,G),M[H+B+0]=i.x,M[H+B+1]=i.y,M[H+B+2]=i.z,M[H+B+3]=0),p===!0&&(i.fromBufferAttribute(N,G),M[H+B+4]=i.x,M[H+B+5]=i.y,M[H+B+6]=i.z,M[H+B+7]=0),x===!0&&(i.fromBufferAttribute(z,G),M[H+B+8]=i.x,M[H+B+9]=i.y,M[H+B+10]=i.z,M[H+B+11]=z.itemSize===4?i.w:1)}}d={count:c,texture:E,size:new at(_,w)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ag(s,t,e,n){let i=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,c=t.get(l,u);if(i.get(c)!==h&&(t.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function o(){i=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var tu=new ye,Fh=new Ls(1,1),eu=new bs,nu=new Hr,iu=new Cs,Oh=[],Bh=[],kh=new Float32Array(16),zh=new Float32Array(9),Vh=new Float32Array(4);function is(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Oh[i];if(r===void 0&&(r=new Float32Array(i),Oh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function aa(s,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function dg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Vh.set(n),s.uniformMatrix2fv(this.addr,!1,Vh),ve(e,n)}}function fg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;zh.set(n),s.uniformMatrix3fv(this.addr,!1,zh),ve(e,n)}}function pg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;kh.set(n),s.uniformMatrix4fv(this.addr,!1,kh),ve(e,n)}}function mg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function _g(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function Mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function bg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Fh.compareFunction=bl,r=Fh):r=tu,e.setTexture2D(t||r,i)}function wg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nu,i)}function Eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||iu,i)}function Tg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||eu,i)}function Ag(s){switch(s){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return yg;case 36295:return Sg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Cg(s,t){s.uniform1fv(this.addr,t)}function Rg(s,t){let e=is(t,this.size,2);s.uniform2fv(this.addr,e)}function Pg(s,t){let e=is(t,this.size,3);s.uniform3fv(this.addr,e)}function Ig(s,t){let e=is(t,this.size,4);s.uniform4fv(this.addr,e)}function Lg(s,t){let e=is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dg(s,t){let e=is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ug(s,t){let e=is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ng(s,t){s.uniform1iv(this.addr,t)}function Fg(s,t){s.uniform2iv(this.addr,t)}function Og(s,t){s.uniform3iv(this.addr,t)}function Bg(s,t){s.uniform4iv(this.addr,t)}function kg(s,t){s.uniform1uiv(this.addr,t)}function zg(s,t){s.uniform2uiv(this.addr,t)}function Vg(s,t){s.uniform3uiv(this.addr,t)}function Hg(s,t){s.uniform4uiv(this.addr,t)}function Gg(s,t,e){let n=this.cache,i=t.length,r=aa(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tu,r[o])}function Wg(s,t,e){let n=this.cache,i=t.length,r=aa(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nu,r[o])}function Xg(s,t,e){let n=this.cache,i=t.length,r=aa(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||iu,r[o])}function Yg(s,t,e){let n=this.cache,i=t.length,r=aa(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||eu,r[o])}function qg(s){switch(s){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Ig;case 35674:return Lg;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return kg;case 36294:return zg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}var Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}},kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}},zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function Hh(s,t){s.seq.push(t),s.map[t.id]=t}function $g(s,t,e){let n=s.name,i=n.length;for(Ol.lastIndex=0;;){let r=Ol.exec(n),o=Ol.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Hh(e,h===void 0?new Bl(a,s,t):new kl(a,s,t));break}else{let c=e.map[a];c===void 0&&(c=new zl(a),Hh(e,c)),e=c}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);$g(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Gh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Zg=37297,Jg=0;function Kg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Wh=new Vt;function jg(s){Jt._getMatrix(Wh,Jt.workingColorSpace,s);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Ss:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Kg(s.getShaderSource(t),o)}else return i}function Qg(s,t){let e=jg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t0(s,t){let e;switch(t){case ih:e="Linear";break;case sh:e="Reinhard";break;case rh:e="Cineon";break;case So:e="ACESFilmic";break;case ah:e="AgX";break;case lh:e="Neutral";break;case oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sa=new Y;function e0(){Jt.getLuminanceCoefficients(sa);let s=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function i0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function rr(s){return s!==""}function Yh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(s){return s.replace(r0,a0)}var o0=new Map;function a0(s,t){let e=$t[t];if(e===void 0){let n=o0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vl(e)}var l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(s){return s.replace(l0,c0)}function c0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zh(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function u0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case Ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function f0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dl:t="ENVMAP_BLENDING_MULTIPLY";break;case eh:t="ENVMAP_BLENDING_MIX";break;case nh:t="ENVMAP_BLENDING_ADD";break}return t}function p0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function m0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=h0(e),h=u0(e),u=d0(e),c=f0(e),d=p0(e),f=n0(e),p=i0(r),x=i.createProgram(),v,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(rr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(v=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?$t.tonemapping_pars_fragment:"",e.toneMapping!==In?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=Vl(o),o=Yh(o,e),o=qh(o,e),a=Vl(a),a=Yh(a,e),a=qh(a,e),o=$h(o),a=$h(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=b+v+o,_=b+m+a,w=Gh(i,i.VERTEX_SHADER,g),M=Gh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,w),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(A){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x).trim(),z=i.getShaderInfoLog(w).trim(),H=i.getShaderInfoLog(M).trim(),G=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,M);else{let W=Xh(i,w,"vertex"),V=Xh(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+W+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||H==="")&&(B=!1);B&&(A.diagnostics={runnable:G,programLog:N,vertexShader:{log:z,prefix:v},fragmentShader:{log:H,prefix:m}})}i.deleteShader(w),i.deleteShader(M),T=new ns(i,x),y=s0(i,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,Zg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=M,this}var g0=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gl(t),e.set(t,n)),n}},Gl=class{constructor(t){this.id=g0++,this.code=t,this.usedTimes=0}};function v0(s,t,e,n,i,r,o){let a=new ws,l=new Hl,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return h.add(y),y===0?"uv":`uv${y}`}function v(y,S,A,N,z){let H=N.fog,G=z.geometry,B=y.isMeshStandardMaterial?N.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||B),V=W&&W.mapping===Ks?W.image.height:null,lt=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=st!==void 0?st.length:0,bt=0;G.morphAttributes.position!==void 0&&(bt=1),G.morphAttributes.normal!==void 0&&(bt=2),G.morphAttributes.color!==void 0&&(bt=3);let St,D,O,I;if(lt){let jt=xn[lt];St=jt.vertexShader,D=jt.fragmentShader}else St=y.vertexShader,D=y.fragmentShader,l.update(y),O=l.getVertexShaderID(y),I=l.getFragmentShaderID(y);let P=s.getRenderTarget(),$=s.state.buffers.depth.getReversed(),ct=z.isInstancedMesh===!0,q=z.isBatchedMesh===!0,gt=!!y.map,vt=!!y.matcap,dt=!!W,R=!!y.aoMap,j=!!y.lightMap,Q=!!y.bumpMap,et=!!y.normalMap,k=!!y.displacementMap,U=!!y.emissiveMap,tt=!!y.metalnessMap,pt=!!y.roughnessMap,Ft=y.anisotropy>0,F=y.clearcoat>0,C=y.dispersion>0,K=y.iridescence>0,rt=y.sheen>0,ht=y.transmission>0,ot=Ft&&!!y.anisotropyMap,It=F&&!!y.clearcoatMap,Mt=F&&!!y.clearcoatNormalMap,Pt=F&&!!y.clearcoatRoughnessMap,Dt=K&&!!y.iridescenceMap,ft=K&&!!y.iridescenceThicknessMap,Ct=rt&&!!y.sheenColorMap,Ht=rt&&!!y.sheenRoughnessMap,kt=!!y.specularMap,wt=!!y.specularColorMap,Xt=!!y.specularIntensityMap,X=ht&&!!y.transmissionMap,Tt=ht&&!!y.thicknessMap,xt=!!y.gradientMap,Lt=!!y.alphaMap,_t=y.alphaTest>0,ut=!!y.alphaHash,Ut=!!y.extensions,Yt=In;y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Yt=s.toneMapping);let se={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:St,fragmentShader:D,defines:y.defines,customVertexShaderID:O,customFragmentShaderID:I,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:q,batchingColor:q&&z._colorsTexture!==null,instancing:ct,instancingColor:ct&&z.instanceColor!==null,instancingMorph:ct&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pn,alphaToCoverage:!!y.alphaToCoverage,map:gt,matcap:vt,envMap:dt,envMapMode:dt&&W.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:j,bumpMap:Q,normalMap:et,displacementMap:d&&k,emissiveMap:U,normalMapObjectSpace:et&&y.normalMapType===dh,normalMapTangentSpace:et&&y.normalMapType===Ml,metalnessMap:tt,roughnessMap:pt,anisotropy:Ft,anisotropyMap:ot,clearcoat:F,clearcoatMap:It,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Pt,dispersion:C,iridescence:K,iridescenceMap:Dt,iridescenceThicknessMap:ft,sheen:rt,sheenColorMap:Ct,sheenRoughnessMap:Ht,specularMap:kt,specularColorMap:wt,specularIntensityMap:Xt,transmission:ht,transmissionMap:X,thicknessMap:Tt,gradientMap:xt,opaque:y.transparent===!1&&y.blending===oi&&y.alphaToCoverage===!1,alphaMap:Lt,alphaTest:_t,alphaHash:ut,combine:y.combine,mapUv:gt&&x(y.map.channel),aoMapUv:R&&x(y.aoMap.channel),lightMapUv:j&&x(y.lightMap.channel),bumpMapUv:Q&&x(y.bumpMap.channel),normalMapUv:et&&x(y.normalMap.channel),displacementMapUv:k&&x(y.displacementMap.channel),emissiveMapUv:U&&x(y.emissiveMap.channel),metalnessMapUv:tt&&x(y.metalnessMap.channel),roughnessMapUv:pt&&x(y.roughnessMap.channel),anisotropyMapUv:ot&&x(y.anisotropyMap.channel),clearcoatMapUv:It&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&x(y.sheenRoughnessMap.channel),specularMapUv:kt&&x(y.specularMap.channel),specularColorMapUv:wt&&x(y.specularColorMap.channel),specularIntensityMapUv:Xt&&x(y.specularIntensityMap.channel),transmissionMapUv:X&&x(y.transmissionMap.channel),thicknessMapUv:Tt&&x(y.thicknessMap.channel),alphaMapUv:Lt&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(et||Ft),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(gt||Lt),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:$,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,decodeVideoTexture:gt&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:U&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===Le,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return se.vertexUv1s=h.has(1),se.vertexUv2s=h.has(2),se.vertexUv3s=h.has(3),h.clear(),se}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)S.push(A),S.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(b(S,y),g(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let S=p[y.type],A;if(S){let N=xn[S];A=gi.clone(N.uniforms)}else A=y.uniforms;return A}function w(y,S){let A;for(let N=0,z=u.length;N<z;N++){let H=u[N];if(H.cacheKey===S){A=H,++A.usedTimes;break}}return A===void 0&&(A=new m0(s,S,y,r),u.push(A)),A}function M(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function E(y){l.remove(y)}function T(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:w,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:T}}function x0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function _0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Jh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(c,d,f,p,x,v){let m=s[t];return m===void 0?(m={id:c.id,object:c,geometry:d,material:f,groupOrder:p,renderOrder:c.renderOrder,z:x,group:v},s[t]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=c.renderOrder,m.z=x,m.group=v),t++,m}function a(c,d,f,p,x,v){let m=o(c,d,f,p,x,v);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(c,d,f,p,x,v){let m=o(c,d,f,p,x,v);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function h(c,d){e.length>1&&e.sort(c||_0),n.length>1&&n.sort(d||Jh),i.length>1&&i.sort(d||Jh)}function u(){for(let c=t,d=s.length;c<d;c++){let f=s[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:h}}function y0(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Kh,s.set(n,[o])):i>=r.length?(o=new Kh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function S0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new zt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[t.id]=e,e}}}function M0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var b0=0;function w0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function E0(s){let t=new S0,e=M0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Y);let i=new Y,r=new de,o=new de;function a(h){let u=0,c=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,p=0,x=0,v=0,m=0,b=0,g=0,_=0,w=0,M=0,E=0;h.sort(w0);for(let y=0,S=h.length;y<S;y++){let A=h[y],N=A.color,z=A.intensity,H=A.distance,G=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*z,c+=N.g*z,d+=N.b*z;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],z);E++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let W=A.shadow,V=e.get(A);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=B,f++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(N).multiplyScalar(z),B.distance=H,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[x]=B;let W=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,W.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[x]=W.matrix,A.castShadow){let V=e.get(A);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=G,_++}x++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(N).multiplyScalar(z),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=B,v++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let W=A.shadow,V=e.get(A);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=A.shadow.matrix,g++}n.point[p]=B,p++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(z),B.groundColor.copy(A.groundColor).multiplyScalar(z),n.hemi[m]=B,m++}}v>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==p||T.spotLength!==x||T.rectAreaLength!==v||T.hemiLength!==m||T.numDirectionalShadows!==b||T.numPointShadows!==g||T.numSpotShadows!==_||T.numSpotMaps!==w||T.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=v,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,T.directionalLength=f,T.pointLength=p,T.spotLength=x,T.rectAreaLength=v,T.hemiLength=m,T.numDirectionalShadows=b,T.numPointShadows=g,T.numSpotShadows=_,T.numSpotMaps=w,T.numLightProbes=E,n.version=b0++)}function l(h,u){let c=0,d=0,f=0,p=0,x=0,v=u.matrixWorldInverse;for(let m=0,b=h.length;m<b;m++){let g=h[m];if(g.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),c++}else if(g.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),f++}else if(g.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),o.identity(),r.copy(g.matrixWorld),r.premultiply(v),o.extractRotation(r),_.halfWidth.set(g.width*.5,0,0),_.halfHeight.set(0,g.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),d++}else if(g.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:n}}function jh(s){let t=new E0(s),e=[],n=[];function i(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function T0(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new jh(s),t.set(i,[a])):r>=o.length?(a=new jh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
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
}`;function R0(s,t,e){let n=new Ps,i=new at,r=new at,o=new ue,a=new Qr({depthPacking:uh}),l=new to,h={},u=e.maxTextureSize,c={[Rn]:Le,[Le]:Rn,[je]:je},d=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:A0,fragmentShader:C0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ge;p.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(p,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let m=this.type;this.render=function(M,E,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;let y=s.getRenderTarget(),S=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),N=s.state;N.setBlending(an),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=m!==gn&&this.type===gn,H=m===gn&&this.type!==gn;for(let G=0,B=M.length;G<B;G++){let W=M[G],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let lt=V.getFrameExtents();if(i.multiply(lt),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/lt.x),i.x=r.x*lt.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/lt.y),i.y=r.y*lt.y,V.mapSize.y=r.y)),V.map===null||z===!0||H===!0){let mt=this.type!==gn?{minFilter:Ue,magFilter:Ue}:{};V.map!==null&&V.map.dispose(),V.map=new Te(i.x,i.y,mt),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let st=V.getViewportCount();for(let mt=0;mt<st;mt++){let bt=V.getViewport(mt);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),N.viewport(o),V.updateMatrices(W,mt),n=V.getFrustum(),_(E,T,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&b(V,T),V.needsUpdate=!1}m=this.type,v.needsUpdate=!1,s.setRenderTarget(y,S,A)};function b(M,E){let T=t.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Te(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,T,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,T,f,x,null)}function g(M,E,T,y){let S=null,A=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let N=S.uuid,z=E.uuid,H=h[N];H===void 0&&(H={},h[N]=H);let G=H[z];G===void 0&&(G=S.clone(),H[z]=G,E.addEventListener("dispose",w)),S=G}if(S.visible=E.visible,S.wireframe=E.wireframe,y===gn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:c[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=s.properties.get(S);N.light=T}return S}function _(M,E,T,y,S){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===gn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);let z=t.update(M),H=M.material;if(Array.isArray(H)){let G=z.groups;for(let B=0,W=G.length;B<W;B++){let V=G[B],lt=H[V.materialIndex];if(lt&&lt.visible){let st=g(M,lt,y,S);M.onBeforeShadow(s,M,E,T,z,st,V),s.renderBufferDirect(T,null,z,st,M,V),M.onAfterShadow(s,M,E,T,z,st,V)}}}else if(H.visible){let G=g(M,H,y,S);M.onBeforeShadow(s,M,E,T,z,G,null),s.renderBufferDirect(T,null,z,G,M,null),M.onAfterShadow(s,M,E,T,z,G,null)}}let N=M.children;for(let z=0,H=N.length;z<H;z++)_(N[z],E,T,y,S)}function w(M){M.target.removeEventListener("dispose",w);for(let T in h){let y=h[T],S=M.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}var P0={[po]:mo,[go]:_o,[vo]:yo,[ai]:xo,[mo]:po,[_o]:go,[yo]:vo,[xo]:ai};function I0(s,t){function e(){let X=!1,Tt=new ue,xt=null,Lt=new ue(0,0,0,0);return{setMask:function(_t){xt!==_t&&!X&&(s.colorMask(_t,_t,_t,_t),xt=_t)},setLocked:function(_t){X=_t},setClear:function(_t,ut,Ut,Yt,se){se===!0&&(_t*=Yt,ut*=Yt,Ut*=Yt),Tt.set(_t,ut,Ut,Yt),Lt.equals(Tt)===!1&&(s.clearColor(_t,ut,Ut,Yt),Lt.copy(Tt))},reset:function(){X=!1,xt=null,Lt.set(-1,0,0,0)}}}function n(){let X=!1,Tt=!1,xt=null,Lt=null,_t=null;return{setReversed:function(ut){if(Tt!==ut){let Ut=t.get("EXT_clip_control");ut?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),Tt=ut;let Yt=_t;_t=null,this.setClear(Yt)}},getReversed:function(){return Tt},setTest:function(ut){ut?P(s.DEPTH_TEST):$(s.DEPTH_TEST)},setMask:function(ut){xt!==ut&&!X&&(s.depthMask(ut),xt=ut)},setFunc:function(ut){if(Tt&&(ut=P0[ut]),Lt!==ut){switch(ut){case po:s.depthFunc(s.NEVER);break;case mo:s.depthFunc(s.ALWAYS);break;case go:s.depthFunc(s.LESS);break;case ai:s.depthFunc(s.LEQUAL);break;case vo:s.depthFunc(s.EQUAL);break;case xo:s.depthFunc(s.GEQUAL);break;case _o:s.depthFunc(s.GREATER);break;case yo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Lt=ut}},setLocked:function(ut){X=ut},setClear:function(ut){_t!==ut&&(Tt&&(ut=1-ut),s.clearDepth(ut),_t=ut)},reset:function(){X=!1,xt=null,Lt=null,_t=null,Tt=!1}}}function i(){let X=!1,Tt=null,xt=null,Lt=null,_t=null,ut=null,Ut=null,Yt=null,se=null;return{setTest:function(jt){X||(jt?P(s.STENCIL_TEST):$(s.STENCIL_TEST))},setMask:function(jt){Tt!==jt&&!X&&(s.stencilMask(jt),Tt=jt)},setFunc:function(jt,tn,_n){(xt!==jt||Lt!==tn||_t!==_n)&&(s.stencilFunc(jt,tn,_n),xt=jt,Lt=tn,_t=_n)},setOp:function(jt,tn,_n){(ut!==jt||Ut!==tn||Yt!==_n)&&(s.stencilOp(jt,tn,_n),ut=jt,Ut=tn,Yt=_n)},setLocked:function(jt){X=jt},setClear:function(jt){se!==jt&&(s.clearStencil(jt),se=jt)},reset:function(){X=!1,Tt=null,xt=null,Lt=null,_t=null,ut=null,Ut=null,Yt=null,se=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,h=new WeakMap,u={},c={},d=new WeakMap,f=[],p=null,x=!1,v=null,m=null,b=null,g=null,_=null,w=null,M=null,E=new zt(0,0,0),T=0,y=!1,S=null,A=null,N=null,z=null,H=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,W=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=W>=2);let lt=null,st={},mt=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),St=new ue().fromArray(mt),D=new ue().fromArray(bt);function O(X,Tt,xt,Lt){let _t=new Uint8Array(4),ut=s.createTexture();s.bindTexture(X,ut),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<xt;Ut++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(Tt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return ut}let I={};I[s.TEXTURE_2D]=O(s.TEXTURE_2D,s.TEXTURE_2D,1),I[s.TEXTURE_CUBE_MAP]=O(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[s.TEXTURE_2D_ARRAY]=O(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),I[s.TEXTURE_3D]=O(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(s.DEPTH_TEST),o.setFunc(ai),Q(!1),et(ll),P(s.CULL_FACE),R(an);function P(X){u[X]!==!0&&(s.enable(X),u[X]=!0)}function $(X){u[X]!==!1&&(s.disable(X),u[X]=!1)}function ct(X,Tt){return c[X]!==Tt?(s.bindFramebuffer(X,Tt),c[X]=Tt,X===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=Tt),X===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function q(X,Tt){let xt=f,Lt=!1;if(X){xt=d.get(Tt),xt===void 0&&(xt=[],d.set(Tt,xt));let _t=X.textures;if(xt.length!==_t.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Ut=_t.length;ut<Ut;ut++)xt[ut]=s.COLOR_ATTACHMENT0+ut;xt.length=_t.length,Lt=!0}}else xt[0]!==s.BACK&&(xt[0]=s.BACK,Lt=!0);Lt&&s.drawBuffers(xt)}function gt(X){return p!==X?(s.useProgram(X),p=X,!0):!1}let vt={[Hn]:s.FUNC_ADD,[Bc]:s.FUNC_SUBTRACT,[kc]:s.FUNC_REVERSE_SUBTRACT};vt[zc]=s.MIN,vt[Vc]=s.MAX;let dt={[Hc]:s.ZERO,[Gc]:s.ONE,[Wc]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[Jc]:s.SRC_ALPHA_SATURATE,[$c]:s.DST_COLOR,[Yc]:s.DST_ALPHA,[Xc]:s.ONE_MINUS_SRC_COLOR,[Fr]:s.ONE_MINUS_SRC_ALPHA,[Zc]:s.ONE_MINUS_DST_COLOR,[qc]:s.ONE_MINUS_DST_ALPHA,[Kc]:s.CONSTANT_COLOR,[jc]:s.ONE_MINUS_CONSTANT_COLOR,[Qc]:s.CONSTANT_ALPHA,[th]:s.ONE_MINUS_CONSTANT_ALPHA};function R(X,Tt,xt,Lt,_t,ut,Ut,Yt,se,jt){if(X===an){x===!0&&($(s.BLEND),x=!1);return}if(x===!1&&(P(s.BLEND),x=!0),X!==Oc){if(X!==v||jt!==y){if((m!==Hn||_!==Hn)&&(s.blendEquation(s.FUNC_ADD),m=Hn,_=Hn),jt)switch(X){case oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFunc(s.ONE,s.ONE);break;case hl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ul:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,g=null,w=null,M=null,E.set(0,0,0),T=0,v=X,y=jt}return}_t=_t||Tt,ut=ut||xt,Ut=Ut||Lt,(Tt!==m||_t!==_)&&(s.blendEquationSeparate(vt[Tt],vt[_t]),m=Tt,_=_t),(xt!==b||Lt!==g||ut!==w||Ut!==M)&&(s.blendFuncSeparate(dt[xt],dt[Lt],dt[ut],dt[Ut]),b=xt,g=Lt,w=ut,M=Ut),(Yt.equals(E)===!1||se!==T)&&(s.blendColor(Yt.r,Yt.g,Yt.b,se),E.copy(Yt),T=se),v=X,y=!1}function j(X,Tt){X.side===je?$(s.CULL_FACE):P(s.CULL_FACE);let xt=X.side===Le;Tt&&(xt=!xt),Q(xt),X.blending===oi&&X.transparent===!1?R(an):R(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Lt=X.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),U(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):$(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(X){S!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),S=X)}function et(X){X!==Uc?(P(s.CULL_FACE),X!==A&&(X===ll?s.cullFace(s.BACK):X===Nc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$(s.CULL_FACE),A=X}function k(X){X!==N&&(B&&s.lineWidth(X),N=X)}function U(X,Tt,xt){X?(P(s.POLYGON_OFFSET_FILL),(z!==Tt||H!==xt)&&(s.polygonOffset(Tt,xt),z=Tt,H=xt)):$(s.POLYGON_OFFSET_FILL)}function tt(X){X?P(s.SCISSOR_TEST):$(s.SCISSOR_TEST)}function pt(X){X===void 0&&(X=s.TEXTURE0+G-1),lt!==X&&(s.activeTexture(X),lt=X)}function Ft(X,Tt,xt){xt===void 0&&(lt===null?xt=s.TEXTURE0+G-1:xt=lt);let Lt=st[xt];Lt===void 0&&(Lt={type:void 0,texture:void 0},st[xt]=Lt),(Lt.type!==X||Lt.texture!==Tt)&&(lt!==xt&&(s.activeTexture(xt),lt=xt),s.bindTexture(X,Tt||I[X]),Lt.type=X,Lt.texture=Tt)}function F(){let X=st[lt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(X){St.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Ht(X){D.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),D.copy(X))}function kt(X,Tt){let xt=h.get(Tt);xt===void 0&&(xt=new WeakMap,h.set(Tt,xt));let Lt=xt.get(X);Lt===void 0&&(Lt=s.getUniformBlockIndex(Tt,X.name),xt.set(X,Lt))}function wt(X,Tt){let Lt=h.get(Tt).get(X);l.get(Tt)!==Lt&&(s.uniformBlockBinding(Tt,Lt,X.__bindingPointIndex),l.set(Tt,Lt))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},lt=null,st={},c={},d=new WeakMap,f=[],p=null,x=!1,v=null,m=null,b=null,g=null,_=null,w=null,M=null,E=new zt(0,0,0),T=0,y=!1,S=null,A=null,N=null,z=null,H=null,St.set(0,0,s.canvas.width,s.canvas.height),D.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:$,bindFramebuffer:ct,drawBuffers:q,useProgram:gt,setBlending:R,setMaterial:j,setFlipSided:Q,setCullFace:et,setLineWidth:k,setPolygonOffset:U,setScissorTest:tt,activeTexture:pt,bindTexture:Ft,unbindTexture:F,compressedTexImage2D:C,compressedTexImage3D:K,texImage2D:Dt,texImage3D:ft,updateUBOMapping:kt,uniformBlockBinding:wt,texStorage2D:Mt,texStorage3D:Pt,texSubImage2D:rt,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:It,scissor:Ct,viewport:Ht,reset:Xt}}function L0(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,u=new WeakMap,c,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(F){}function p(F,C){return f?new OffscreenCanvas(F,C):zi("canvas")}function x(F,C,K){let rt=1,ht=Ft(F);if((ht.width>K||ht.height>K)&&(rt=K/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let ot=Math.floor(rt*ht.width),It=Math.floor(rt*ht.height);c===void 0&&(c=p(ot,It));let Mt=C?p(ot,It):c;return Mt.width=ot,Mt.height=It,Mt.getContext("2d").drawImage(F,0,0,ot,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+It+")."),Mt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),F;return F}function v(F){return F.generateMipmaps}function m(F){s.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function g(F,C,K,rt,ht=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ot=C;if(C===s.RED&&(K===s.FLOAT&&(ot=s.R32F),K===s.HALF_FLOAT&&(ot=s.R16F),K===s.UNSIGNED_BYTE&&(ot=s.R8)),C===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ot=s.R8UI),K===s.UNSIGNED_SHORT&&(ot=s.R16UI),K===s.UNSIGNED_INT&&(ot=s.R32UI),K===s.BYTE&&(ot=s.R8I),K===s.SHORT&&(ot=s.R16I),K===s.INT&&(ot=s.R32I)),C===s.RG&&(K===s.FLOAT&&(ot=s.RG32F),K===s.HALF_FLOAT&&(ot=s.RG16F),K===s.UNSIGNED_BYTE&&(ot=s.RG8)),C===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ot=s.RG8UI),K===s.UNSIGNED_SHORT&&(ot=s.RG16UI),K===s.UNSIGNED_INT&&(ot=s.RG32UI),K===s.BYTE&&(ot=s.RG8I),K===s.SHORT&&(ot=s.RG16I),K===s.INT&&(ot=s.RG32I)),C===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),K===s.UNSIGNED_INT&&(ot=s.RGB32UI),K===s.BYTE&&(ot=s.RGB8I),K===s.SHORT&&(ot=s.RGB16I),K===s.INT&&(ot=s.RGB32I)),C===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),K===s.UNSIGNED_INT&&(ot=s.RGBA32UI),K===s.BYTE&&(ot=s.RGBA8I),K===s.SHORT&&(ot=s.RGBA16I),K===s.INT&&(ot=s.RGBA32I)),C===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),C===s.RGBA){let It=ht?Ss:Jt.getTransfer(rt);K===s.FLOAT&&(ot=s.RGBA32F),K===s.HALF_FLOAT&&(ot=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ot=It===Qt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(F,C){let K;return F?C===null||C===Kn||C===ji?K=s.DEPTH24_STENCIL8:C===Fe?K=s.DEPTH32F_STENCIL8:C===Ki&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Kn||C===ji?K=s.DEPTH_COMPONENT24:C===Fe?K=s.DEPTH_COMPONENT32F:C===Ki&&(K=s.DEPTH_COMPONENT16),K}function w(F,C){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ue&&F.minFilter!==Se?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function M(F){let C=F.target;C.removeEventListener("dispose",M),T(C),C.isVideoTexture&&u.delete(C)}function E(F){let C=F.target;C.removeEventListener("dispose",E),S(C)}function T(F){let C=n.get(F);if(C.__webglInit===void 0)return;let K=F.source,rt=d.get(K);if(rt){let ht=rt[C.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&y(F),Object.keys(rt).length===0&&d.delete(K)}n.remove(F)}function y(F){let C=n.get(F);s.deleteTexture(C.__webglTexture);let K=F.source,rt=d.get(K);delete rt[C.__cacheKey],o.memory.textures--}function S(F){let C=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(C.__webglFramebuffer[rt]))for(let ht=0;ht<C.__webglFramebuffer[rt].length;ht++)s.deleteFramebuffer(C.__webglFramebuffer[rt][ht]);else s.deleteFramebuffer(C.__webglFramebuffer[rt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[rt])}else{if(Array.isArray(C.__webglFramebuffer))for(let rt=0;rt<C.__webglFramebuffer.length;rt++)s.deleteFramebuffer(C.__webglFramebuffer[rt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let rt=0;rt<C.__webglColorRenderbuffer.length;rt++)C.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[rt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let K=F.textures;for(let rt=0,ht=K.length;rt<ht;rt++){let ot=n.get(K[rt]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(K[rt])}n.remove(F)}let A=0;function N(){A=0}function z(){let F=A;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),A+=1,F}function H(F){let C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function G(F,C){let K=n.get(F);if(F.isVideoTexture&&tt(F),F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){let rt=F.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(K,F,C);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+C)}function B(F,C){let K=n.get(F);if(F.version>0&&K.__version!==F.version){I(K,F,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+C)}function W(F,C){let K=n.get(F);if(F.version>0&&K.__version!==F.version){I(K,F,C);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+C)}function V(F,C){let K=n.get(F);if(F.version>0&&K.__version!==F.version){P(K,F,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+C)}let lt={[Or]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[Br]:s.MIRRORED_REPEAT},st={[Ue]:s.NEAREST,[ch]:s.NEAREST_MIPMAP_NEAREST,[js]:s.NEAREST_MIPMAP_LINEAR,[Se]:s.LINEAR,[bo]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},mt={[fh]:s.NEVER,[_h]:s.ALWAYS,[ph]:s.LESS,[bl]:s.LEQUAL,[mh]:s.EQUAL,[xh]:s.GEQUAL,[gh]:s.GREATER,[vh]:s.NOTEQUAL};function bt(F,C){if(C.type===Fe&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Se||C.magFilter===bo||C.magFilter===js||C.magFilter===Ln||C.minFilter===Se||C.minFilter===bo||C.minFilter===js||C.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,lt[C.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,lt[C.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,lt[C.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,st[C.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,st[C.minFilter]),C.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,mt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ue||C.minFilter!==js&&C.minFilter!==Ln||C.type===Fe&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function St(F,C){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",M));let rt=C.source,ht=d.get(rt);ht===void 0&&(ht={},d.set(rt,ht));let ot=H(C);if(ot!==F.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ht[ot].usedTimes++;let It=ht[F.__cacheKey];It!==void 0&&(ht[F.__cacheKey].usedTimes--,It.usedTimes===0&&y(C)),F.__cacheKey=ot,F.__webglTexture=ht[ot].texture}return K}function D(F,C,K){return Math.floor(Math.floor(F/K)/C)}function O(F,C,K,rt){let ot=F.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,K,rt,C.data);else{ot.sort((ft,Ct)=>ft.start-Ct.start);let It=0;for(let ft=1;ft<ot.length;ft++){let Ct=ot[It],Ht=ot[ft],kt=Ct.start+Ct.count,wt=D(Ht.start,C.width,4),Xt=D(Ct.start,C.width,4);Ht.start<=kt+1&&wt===Xt&&D(Ht.start+Ht.count-1,C.width,4)===wt?Ct.count=Math.max(Ct.count,Ht.start+Ht.count-Ct.start):(++It,ot[It]=Ht)}ot.length=It+1;let Mt=s.getParameter(s.UNPACK_ROW_LENGTH),Pt=s.getParameter(s.UNPACK_SKIP_PIXELS),Dt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let ft=0,Ct=ot.length;ft<Ct;ft++){let Ht=ot[ft],kt=Math.floor(Ht.start/4),wt=Math.ceil(Ht.count/4),Xt=kt%C.width,X=Math.floor(kt/C.width),Tt=wt,xt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),e.texSubImage2D(s.TEXTURE_2D,0,Xt,X,Tt,xt,K,rt,C.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Mt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Dt)}}function I(F,C,K){let rt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(rt=s.TEXTURE_3D);let ht=St(F,C),ot=C.source;e.bindTexture(rt,F.__webglTexture,s.TEXTURE0+K);let It=n.get(ot);if(ot.version!==It.__version||ht===!0){e.activeTexture(s.TEXTURE0+K);let Mt=Jt.getPrimaries(Jt.workingColorSpace),Pt=C.colorSpace===Dn?null:Jt.getPrimaries(C.colorSpace),Dt=C.colorSpace===Dn||Mt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ft=x(C.image,!1,i.maxTextureSize);ft=pt(C,ft);let Ct=r.convert(C.format,C.colorSpace),Ht=r.convert(C.type),kt=g(C.internalFormat,Ct,Ht,C.colorSpace,C.isVideoTexture);bt(rt,C);let wt,Xt=C.mipmaps,X=C.isVideoTexture!==!0,Tt=It.__version===void 0||ht===!0,xt=ot.dataReady,Lt=w(C,ft);if(C.isDepthTexture)kt=_(C.format===Qi,C.type),Tt&&(X?e.texStorage2D(s.TEXTURE_2D,1,kt,ft.width,ft.height):e.texImage2D(s.TEXTURE_2D,0,kt,ft.width,ft.height,0,Ct,Ht,null));else if(C.isDataTexture)if(Xt.length>0){X&&Tt&&e.texStorage2D(s.TEXTURE_2D,Lt,kt,Xt[0].width,Xt[0].height);for(let _t=0,ut=Xt.length;_t<ut;_t++)wt=Xt[_t],X?xt&&e.texSubImage2D(s.TEXTURE_2D,_t,0,0,wt.width,wt.height,Ct,Ht,wt.data):e.texImage2D(s.TEXTURE_2D,_t,kt,wt.width,wt.height,0,Ct,Ht,wt.data);C.generateMipmaps=!1}else X?(Tt&&e.texStorage2D(s.TEXTURE_2D,Lt,kt,ft.width,ft.height),xt&&O(C,ft,Ct,Ht)):e.texImage2D(s.TEXTURE_2D,0,kt,ft.width,ft.height,0,Ct,Ht,ft.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){X&&Tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,kt,Xt[0].width,Xt[0].height,ft.depth);for(let _t=0,ut=Xt.length;_t<ut;_t++)if(wt=Xt[_t],C.format!==Qe)if(Ct!==null)if(X){if(xt)if(C.layerUpdates.size>0){let Ut=Il(wt.width,wt.height,C.format,C.type);for(let Yt of C.layerUpdates){let se=wt.data.subarray(Yt*Ut/wt.data.BYTES_PER_ELEMENT,(Yt+1)*Ut/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,Yt,wt.width,wt.height,1,Ct,se)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,0,wt.width,wt.height,ft.depth,Ct,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_t,kt,wt.width,wt.height,ft.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,0,wt.width,wt.height,ft.depth,Ct,Ht,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,_t,kt,wt.width,wt.height,ft.depth,0,Ct,Ht,wt.data)}else{X&&Tt&&e.texStorage2D(s.TEXTURE_2D,Lt,kt,Xt[0].width,Xt[0].height);for(let _t=0,ut=Xt.length;_t<ut;_t++)wt=Xt[_t],C.format!==Qe?Ct!==null?X?xt&&e.compressedTexSubImage2D(s.TEXTURE_2D,_t,0,0,wt.width,wt.height,Ct,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,_t,kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?xt&&e.texSubImage2D(s.TEXTURE_2D,_t,0,0,wt.width,wt.height,Ct,Ht,wt.data):e.texImage2D(s.TEXTURE_2D,_t,kt,wt.width,wt.height,0,Ct,Ht,wt.data)}else if(C.isDataArrayTexture)if(X){if(Tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,kt,ft.width,ft.height,ft.depth),xt)if(C.layerUpdates.size>0){let _t=Il(ft.width,ft.height,C.format,C.type);for(let ut of C.layerUpdates){let Ut=ft.data.subarray(ut*_t/ft.data.BYTES_PER_ELEMENT,(ut+1)*_t/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,ft.width,ft.height,1,Ct,Ht,Ut)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Ht,ft.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,ft.width,ft.height,ft.depth,0,Ct,Ht,ft.data);else if(C.isData3DTexture)X?(Tt&&e.texStorage3D(s.TEXTURE_3D,Lt,kt,ft.width,ft.height,ft.depth),xt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Ht,ft.data)):e.texImage3D(s.TEXTURE_3D,0,kt,ft.width,ft.height,ft.depth,0,Ct,Ht,ft.data);else if(C.isFramebufferTexture){if(Tt)if(X)e.texStorage2D(s.TEXTURE_2D,Lt,kt,ft.width,ft.height);else{let _t=ft.width,ut=ft.height;for(let Ut=0;Ut<Lt;Ut++)e.texImage2D(s.TEXTURE_2D,Ut,kt,_t,ut,0,Ct,Ht,null),_t>>=1,ut>>=1}}else if(Xt.length>0){if(X&&Tt){let _t=Ft(Xt[0]);e.texStorage2D(s.TEXTURE_2D,Lt,kt,_t.width,_t.height)}for(let _t=0,ut=Xt.length;_t<ut;_t++)wt=Xt[_t],X?xt&&e.texSubImage2D(s.TEXTURE_2D,_t,0,0,Ct,Ht,wt):e.texImage2D(s.TEXTURE_2D,_t,kt,Ct,Ht,wt);C.generateMipmaps=!1}else if(X){if(Tt){let _t=Ft(ft);e.texStorage2D(s.TEXTURE_2D,Lt,kt,_t.width,_t.height)}xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,Ht,ft)}else e.texImage2D(s.TEXTURE_2D,0,kt,Ct,Ht,ft);v(C)&&m(rt),It.__version=ot.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function P(F,C,K){if(C.image.length!==6)return;let rt=St(F,C),ht=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+K);let ot=n.get(ht);if(ht.version!==ot.__version||rt===!0){e.activeTexture(s.TEXTURE0+K);let It=Jt.getPrimaries(Jt.workingColorSpace),Mt=C.colorSpace===Dn?null:Jt.getPrimaries(C.colorSpace),Pt=C.colorSpace===Dn||It===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Dt=C.isCompressedTexture||C.image[0].isCompressedTexture,ft=C.image[0]&&C.image[0].isDataTexture,Ct=[];for(let ut=0;ut<6;ut++)!Dt&&!ft?Ct[ut]=x(C.image[ut],!0,i.maxCubemapSize):Ct[ut]=ft?C.image[ut].image:C.image[ut],Ct[ut]=pt(C,Ct[ut]);let Ht=Ct[0],kt=r.convert(C.format,C.colorSpace),wt=r.convert(C.type),Xt=g(C.internalFormat,kt,wt,C.colorSpace),X=C.isVideoTexture!==!0,Tt=ot.__version===void 0||rt===!0,xt=ht.dataReady,Lt=w(C,Ht);bt(s.TEXTURE_CUBE_MAP,C);let _t;if(Dt){X&&Tt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,Xt,Ht.width,Ht.height);for(let ut=0;ut<6;ut++){_t=Ct[ut].mipmaps;for(let Ut=0;Ut<_t.length;Ut++){let Yt=_t[Ut];C.format!==Qe?kt!==null?X?xt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,0,0,Yt.width,Yt.height,kt,Yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,Xt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,0,0,Yt.width,Yt.height,kt,wt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,Xt,Yt.width,Yt.height,0,kt,wt,Yt.data)}}}else{if(_t=C.mipmaps,X&&Tt){_t.length>0&&Lt++;let ut=Ft(Ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,Xt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(ft){X?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ct[ut].width,Ct[ut].height,kt,wt,Ct[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Xt,Ct[ut].width,Ct[ut].height,0,kt,wt,Ct[ut].data);for(let Ut=0;Ut<_t.length;Ut++){let se=_t[Ut].image[ut].image;X?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,0,0,se.width,se.height,kt,wt,se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,Xt,se.width,se.height,0,kt,wt,se.data)}}else{X?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,kt,wt,Ct[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Xt,kt,wt,Ct[ut]);for(let Ut=0;Ut<_t.length;Ut++){let Yt=_t[Ut];X?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,0,0,kt,wt,Yt.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,Xt,kt,wt,Yt.image[ut])}}}v(C)&&m(s.TEXTURE_CUBE_MAP),ot.__version=ht.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function $(F,C,K,rt,ht,ot){let It=r.convert(K.format,K.colorSpace),Mt=r.convert(K.type),Pt=g(K.internalFormat,It,Mt,K.colorSpace),Dt=n.get(C),ft=n.get(K);if(ft.__renderTarget=C,!Dt.__hasExternalTextures){let Ct=Math.max(1,C.width>>ot),Ht=Math.max(1,C.height>>ot);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,Pt,Ct,Ht,C.depth,0,It,Mt,null):e.texImage2D(ht,ot,Pt,Ct,Ht,0,It,Mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,F),U(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,ht,ft.__webglTexture,0,k(C)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,ht,ft.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(F,C,K){if(s.bindRenderbuffer(s.RENDERBUFFER,F),C.depthBuffer){let rt=C.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,ot=_(C.stencilBuffer,ht),It=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=k(C);U(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,ot,C.width,C.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,ot,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,ot,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,F)}else{let rt=C.textures;for(let ht=0;ht<rt.length;ht++){let ot=rt[ht],It=r.convert(ot.format,ot.colorSpace),Mt=r.convert(ot.type),Pt=g(ot.internalFormat,It,Mt,ot.colorSpace),Dt=k(C);K&&U(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,Pt,C.width,C.height):U(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,Pt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function q(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(C.depthTexture);rt.__renderTarget=C,(!rt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),G(C.depthTexture,0);let ht=rt.__webglTexture,ot=k(C);if(C.depthTexture.format===Bi)U(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(C.depthTexture.format===Qi)U(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function gt(F){let C=n.get(F),K=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){let rt=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),rt){let ht=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),C.__depthDisposeCallback=ht}C.__boundDepthTexture=rt}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");let rt=F.texture.mipmaps;rt&&rt.length>0?q(C.__webglFramebuffer[0],F):q(C.__webglFramebuffer,F)}else if(K){C.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[rt]),C.__webglDepthbuffer[rt]===void 0)C.__webglDepthbuffer[rt]=s.createRenderbuffer(),ct(C.__webglDepthbuffer[rt],F,!1);else{let ht=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,ot)}}else{let rt=F.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ct(C.__webglDepthbuffer,F,!1);else{let ht=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,ot)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(F,C,K){let rt=n.get(F);C!==void 0&&$(rt.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&gt(F)}function dt(F){let C=F.texture,K=n.get(F),rt=n.get(C);F.addEventListener("dispose",E);let ht=F.textures,ot=F.isWebGLCubeRenderTarget===!0,It=ht.length>1;if(It||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=C.version,o.memory.textures++),ot){K.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[Mt]=[];for(let Pt=0;Pt<C.mipmaps.length;Pt++)K.__webglFramebuffer[Mt][Pt]=s.createFramebuffer()}else K.__webglFramebuffer[Mt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let Mt=0;Mt<C.mipmaps.length;Mt++)K.__webglFramebuffer[Mt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(It)for(let Mt=0,Pt=ht.length;Mt<Pt;Mt++){let Dt=n.get(ht[Mt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(F.samples>0&&U(F)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ht.length;Mt++){let Pt=ht[Mt];K.__webglColorRenderbuffer[Mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Mt]);let Dt=r.convert(Pt.format,Pt.colorSpace),ft=r.convert(Pt.type),Ct=g(Pt.internalFormat,Dt,ft,Pt.colorSpace,F.isXRRenderTarget===!0),Ht=k(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,Ct,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,K.__webglColorRenderbuffer[Mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(K.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),bt(s.TEXTURE_CUBE_MAP,C);for(let Mt=0;Mt<6;Mt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)$(K.__webglFramebuffer[Mt][Pt],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt);else $(K.__webglFramebuffer[Mt],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);v(C)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let Mt=0,Pt=ht.length;Mt<Pt;Mt++){let Dt=ht[Mt],ft=n.get(Dt);e.bindTexture(s.TEXTURE_2D,ft.__webglTexture),bt(s.TEXTURE_2D,Dt),$(K.__webglFramebuffer,F,Dt,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,0),v(Dt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let Mt=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Mt=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,rt.__webglTexture),bt(Mt,C),C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)$(K.__webglFramebuffer[Pt],F,C,s.COLOR_ATTACHMENT0,Mt,Pt);else $(K.__webglFramebuffer,F,C,s.COLOR_ATTACHMENT0,Mt,0);v(C)&&m(Mt),e.unbindTexture()}F.depthBuffer&&gt(F)}function R(F){let C=F.textures;for(let K=0,rt=C.length;K<rt;K++){let ht=C[K];if(v(ht)){let ot=b(F),It=n.get(ht).__webglTexture;e.bindTexture(ot,It),m(ot),e.unbindTexture()}}}let j=[],Q=[];function et(F){if(F.samples>0){if(U(F)===!1){let C=F.textures,K=F.width,rt=F.height,ht=s.COLOR_BUFFER_BIT,ot=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=n.get(F),Mt=C.length>1;if(Mt)for(let Dt=0;Dt<C.length;Dt++)e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let Pt=F.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Dt=0;Dt<C.length;Dt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),Mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);let ft=n.get(C[Dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,K,rt,0,0,K,rt,ht,s.NEAREST),l===!0&&(j.length=0,Q.length=0,j.push(s.COLOR_ATTACHMENT0+Dt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(j.push(ot),Q.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Mt)for(let Dt=0;Dt<C.length;Dt++){e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);let ft=n.get(C[Dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let C=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function k(F){return Math.min(i.maxSamples,F.samples)}function U(F){let C=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function tt(F){let C=o.render.frame;u.get(F)!==C&&(u.set(F,C),F.update())}function pt(F,C){let K=F.colorSpace,rt=F.format,ht=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==Pn&&K!==Dn&&(Jt.getTransfer(K)===Qt?(rt!==Qe||ht!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),C}function Ft(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=vt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=U}function D0(s,t){function e(n,i=Dn){let r,o=Jt.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===Eo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===To)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return s.BYTE;if(n===ml)return s.SHORT;if(n===Ki)return s.UNSIGNED_SHORT;if(n===wo)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===Fe)return s.FLOAT;if(n===Me)return s.HALF_FLOAT;if(n===vl)return s.ALPHA;if(n===xl)return s.RGB;if(n===Qe)return s.RGBA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===_l)return s.RED;if(n===Ao)return s.RED_INTEGER;if(n===yl)return s.RG;if(n===Co)return s.RG_INTEGER;if(n===Ro)return s.RGBA_INTEGER;if(n===Qs||n===tr||n===er||n===nr)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Io||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===No)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===Yo||n===qo||n===$o||n===Zo||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ir)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===Qo||n===ta||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
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

}`,Wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new me({vertexShader:U0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends fn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,p=null,x=new Wl,v=e.getContextAttributes(),m=null,b=null,g=[],_=[],w=new at,M=null,E=new Ee;E.viewport=new ue;let T=new Ee;T.viewport=new ue;let y=[E,T],S=new uo,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let O=g[D];return O===void 0&&(O=new Xi,g[D]=O),O.getTargetRaySpace()},this.getControllerGrip=function(D){let O=g[D];return O===void 0&&(O=new Xi,g[D]=O),O.getGripSpace()},this.getHand=function(D){let O=g[D];return O===void 0&&(O=new Xi,g[D]=O),O.getHandSpace()};function z(D){let O=_.indexOf(D.inputSource);if(O===-1)return;let I=g[O];I!==void 0&&(I.update(D.inputSource,D.frame,h||o),I.dispatchEvent({type:D.type,data:D.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",G);for(let D=0;D<g.length;D++){let O=_[D];O!==null&&(_[D]=null,g[D].disconnect(O))}A=null,N=null,x.reset(),t.setRenderTarget(m),f=null,d=null,c=null,i=null,b=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(D){h=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let I=null,P=null,$=null;v.depth&&($=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=v.stencil?Qi:Bi,P=v.stencil?ji:Kn);let ct={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};c=new XRWebGLBinding(i,e),d=c.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Te(d.textureWidth,d.textureHeight,{format:Qe,type:vn,depthTexture:new Ls(d.textureWidth,d.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let I={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,I),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Te(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(D){for(let O=0;O<D.removed.length;O++){let I=D.removed[O],P=_.indexOf(I);P>=0&&(_[P]=null,g[P].disconnect(I))}for(let O=0;O<D.added.length;O++){let I=D.added[O],P=_.indexOf(I);if(P===-1){for(let ct=0;ct<g.length;ct++)if(ct>=_.length){_.push(I),P=ct;break}else if(_[ct]===null){_[ct]=I,P=ct;break}if(P===-1)break}let $=g[P];$&&$.connect(I)}}let B=new Y,W=new Y;function V(D,O,I){B.setFromMatrixPosition(O.matrixWorld),W.setFromMatrixPosition(I.matrixWorld);let P=B.distanceTo(W),$=O.projectionMatrix.elements,ct=I.projectionMatrix.elements,q=$[14]/($[10]-1),gt=$[14]/($[10]+1),vt=($[9]+1)/$[5],dt=($[9]-1)/$[5],R=($[8]-1)/$[0],j=(ct[8]+1)/ct[0],Q=q*R,et=q*j,k=P/(-R+j),U=k*-R;if(O.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(U),D.translateZ(k),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),$[10]===-1)D.projectionMatrix.copy(O.projectionMatrix),D.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let tt=q+k,pt=gt+k,Ft=Q-U,F=et+(P-U),C=vt*gt/pt*tt,K=dt*gt/pt*tt;D.projectionMatrix.makePerspective(Ft,F,C,K,tt,pt),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function lt(D,O){O===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(O.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let O=D.near,I=D.far;x.texture!==null&&(x.depthNear>0&&(O=x.depthNear),x.depthFar>0&&(I=x.depthFar)),S.near=T.near=E.near=O,S.far=T.far=E.far=I,(A!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,N=S.far),E.layers.mask=D.layers.mask|2,T.layers.mask=D.layers.mask|4,S.layers.mask=E.layers.mask|T.layers.mask;let P=D.parent,$=S.cameras;lt(S,P);for(let ct=0;ct<$.length;ct++)lt($[ct],P);$.length===2?V(S,E,T):S.projectionMatrix.copy(E.projectionMatrix),st(D,S,P)};function st(D,O,I){I===null?D.matrix.copy(O.matrixWorld):(D.matrix.copy(I.matrixWorld),D.matrix.invert(),D.matrix.multiply(O.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(O.projectionMatrix),D.projectionMatrixInverse.copy(O.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ki*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let mt=null;function bt(D,O){if(u=O.getViewerPose(h||o),p=O,u!==null){let I=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let P=!1;I.length!==S.cameras.length&&(S.cameras.length=0,P=!0);for(let q=0;q<I.length;q++){let gt=I[q],vt=null;if(f!==null)vt=f.getViewport(gt);else{let R=c.getViewSubImage(d,gt);vt=R.viewport,q===0&&(t.setRenderTargetTextures(b,R.colorTexture,R.depthStencilTexture),t.setRenderTarget(b))}let dt=y[q];dt===void 0&&(dt=new Ee,dt.layers.enable(q),dt.viewport=new ue,y[q]=dt),dt.matrix.fromArray(gt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(gt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(vt.x,vt.y,vt.width,vt.height),q===0&&(S.matrix.copy(dt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),P===!0&&S.cameras.push(dt)}let $=i.enabledFeatures;if($&&$.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&c){let q=c.getDepthInformation(I[0]);q&&q.isValid&&q.texture&&x.init(t,q,i.renderState)}}for(let I=0;I<g.length;I++){let P=_[I],$=g[I];P!==null&&$!==void 0&&$.update(P,O,h||o)}mt&&mt(D,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),p=null}let St=new Qh;St.setAnimationLoop(bt),this.setAnimationLoop=function(D){mt=D},this.dispose=function(){}}},xi=new rn,F0=new de;function O0(s,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,Al(s)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function i(v,m,b,g,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(v,m):m.isMeshToonMaterial?(r(v,m),c(v,m)):m.isMeshPhongMaterial?(r(v,m),u(v,m)):m.isMeshStandardMaterial?(r(v,m),d(v,m),m.isMeshPhysicalMaterial&&f(v,m,_)):m.isMeshMatcapMaterial?(r(v,m),p(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),x(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?l(v,m,b,g):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Le&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Le&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let b=t.get(m),g=b.envMap,_=b.envMapRotation;g&&(v.envMap.value=g,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),v.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(xi)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,b,g){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*b,v.scale.value=g*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function c(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function d(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function f(v,m,b){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Le&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function p(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){let b=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B0(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,g){let _=g.program;n.uniformBlockBinding(b,_)}function h(b,g){let _=i[b.id];_===void 0&&(p(b),_=u(b),i[b.id]=_,b.addEventListener("dispose",v));let w=g.program;n.updateUBOMapping(b,w);let M=t.render.frame;r[b.id]!==M&&(d(b),r[b.id]=M)}function u(b){let g=c();b.__bindingPointIndex=g;let _=s.createBuffer(),w=b.__size,M=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,w,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,_),_}function c(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let g=i[b.id],_=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let M=0,E=_.length;M<E;M++){let T=Array.isArray(_[M])?_[M]:[_[M]];for(let y=0,S=T.length;y<S;y++){let A=T[y];if(f(A,M,y,w)===!0){let N=A.__offset,z=Array.isArray(A.value)?A.value:[A.value],H=0;for(let G=0;G<z.length;G++){let B=z[G],W=x(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+H,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,H),H+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,g,_,w){let M=b.value,E=g+"_"+_;if(w[E]===void 0)return typeof M=="number"||typeof M=="boolean"?w[E]=M:w[E]=M.clone(),!0;{let T=w[E];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return w[E]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function p(b){let g=b.uniforms,_=0,w=16;for(let E=0,T=g.length;E<T;E++){let y=Array.isArray(g[E])?g[E]:[g[E]];for(let S=0,A=y.length;S<A;S++){let N=y[S],z=Array.isArray(N.value)?N.value:[N.value];for(let H=0,G=z.length;H<G;H++){let B=z[H],W=x(B),V=_%w,lt=V%W.boundary,st=V+lt;_+=lt,st!==0&&w-st<W.storage&&(_+=w-st),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=W.storage}}}let M=_%w;return M>0&&(_+=w-M),b.__size=_,b.__cache={},this}function x(b){let g={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(g.boundary=4,g.storage=4):b.isVector2?(g.boundary=8,g.storage=8):b.isVector3||b.isColor?(g.boundary=16,g.storage=12):b.isVector4?(g.boundary=16,g.storage=16):b.isMatrix3?(g.boundary=48,g.storage=48):b.isMatrix4?(g.boundary=64,g.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),g}function v(b){let g=b.target;g.removeEventListener("dispose",v);let _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function m(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:h,dispose:m}}var oa=class{constructor(t={}){let{canvas:e=yh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,b=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,w=!1;this._outputColorSpace=Ie;let M=0,E=0,T=null,y=-1,S=null,A=new ue,N=new ue,z=null,H=new zt(0),G=0,B=e.width,W=e.height,V=1,lt=null,st=null,mt=new ue(0,0,B,W),bt=new ue(0,0,B,W),St=!1,D=new Ps,O=!1,I=!1,P=new de,$=new de,ct=new Y,q=new ue,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function dt(){return T===null?V:1}let R=n;function j(L,Z){return e.getContext(L,Z)}try{let L={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){let Z="webgl2";if(R=j(Z,L),R===null)throw j(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Q,et,k,U,tt,pt,Ft,F,C,K,rt,ht,ot,It,Mt,Pt,Dt,ft,Ct,Ht,kt,wt,Xt,X;function Tt(){Q=new ng(R),Q.init(),wt=new D0(R,Q),et=new Zm(R,Q,t,wt),k=new I0(R,Q),et.reverseDepthBuffer&&d&&k.buffers.depth.setReversed(!0),U=new rg(R),tt=new x0,pt=new L0(R,Q,k,tt,et,wt,U),Ft=new Km(_),F=new eg(_),C=new uf(R),Xt=new qm(R,C),K=new ig(R,C,U,Xt),rt=new ag(R,K,C,U),Ct=new og(R,et,pt),Pt=new Jm(tt),ht=new v0(_,Ft,F,Q,et,Xt,Pt),ot=new O0(_,tt),It=new y0,Mt=new T0(Q),ft=new Ym(_,Ft,F,k,rt,f,l),Dt=new R0(_,rt,et),X=new B0(R,U,et,k),Ht=new $m(R,Q,U),kt=new sg(R,Q,U),U.programs=ht.programs,_.capabilities=et,_.extensions=Q,_.properties=tt,_.renderLists=It,_.shadowMap=Dt,_.state=k,_.info=U}Tt();let xt=new Xl(_,R);this.xr=xt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let L=Q.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Q.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(B,W,!1))},this.getSize=function(L){return L.set(B,W)},this.setSize=function(L,Z,nt=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,W=Z,e.width=Math.floor(L*V),e.height=Math.floor(Z*V),nt===!0&&(e.style.width=L+"px",e.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(B*V,W*V).floor()},this.setDrawingBufferSize=function(L,Z,nt){B=L,W=Z,V=nt,e.width=Math.floor(L*nt),e.height=Math.floor(Z*nt),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(mt)},this.setViewport=function(L,Z,nt,it){L.isVector4?mt.set(L.x,L.y,L.z,L.w):mt.set(L,Z,nt,it),k.viewport(A.copy(mt).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(bt)},this.setScissor=function(L,Z,nt,it){L.isVector4?bt.set(L.x,L.y,L.z,L.w):bt.set(L,Z,nt,it),k.scissor(N.copy(bt).multiplyScalar(V).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(L){k.setScissorTest(St=L)},this.setOpaqueSort=function(L){lt=L},this.setTransparentSort=function(L){st=L},this.getClearColor=function(L){return L.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(L=!0,Z=!0,nt=!0){let it=0;if(L){let J=!1;if(T!==null){let yt=T.texture.format;J=yt===Ro||yt===Co||yt===Ao}if(J){let yt=T.texture.type,At=yt===vn||yt===Kn||yt===Ki||yt===ji||yt===Eo||yt===To,Nt=ft.getClearColor(),Rt=ft.getClearAlpha(),Gt=Nt.r,Wt=Nt.g,Ot=Nt.b;At?(p[0]=Gt,p[1]=Wt,p[2]=Ot,p[3]=Rt,R.clearBufferuiv(R.COLOR,0,p)):(x[0]=Gt,x[1]=Wt,x[2]=Ot,x[3]=Rt,R.clearBufferiv(R.COLOR,0,x))}else it|=R.COLOR_BUFFER_BIT}Z&&(it|=R.DEPTH_BUFFER_BIT),nt&&(it|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ft.dispose(),It.dispose(),Mt.dispose(),tt.dispose(),Ft.dispose(),F.dispose(),rt.dispose(),Xt.dispose(),X.dispose(),ht.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",tc),xt.removeEventListener("sessionend",ec),jn.stop()};function Lt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let L=U.autoReset,Z=Dt.enabled,nt=Dt.autoUpdate,it=Dt.needsUpdate,J=Dt.type;Tt(),U.autoReset=L,Dt.enabled=Z,Dt.autoUpdate=nt,Dt.needsUpdate=it,Dt.type=J}function ut(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ut(L){let Z=L.target;Z.removeEventListener("dispose",Ut),Yt(Z)}function Yt(L){se(L),tt.remove(L)}function se(L){let Z=tt.get(L).programs;Z!==void 0&&(Z.forEach(function(nt){ht.releaseProgram(nt)}),L.isShaderMaterial&&ht.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,nt,it,J,yt){Z===null&&(Z=gt);let At=J.isMesh&&J.matrixWorld.determinant()<0,Nt=_u(L,Z,nt,it,J);k.setMaterial(it,At);let Rt=nt.index,Gt=1;if(it.wireframe===!0){if(Rt=K.getWireframeAttribute(nt),Rt===void 0)return;Gt=2}let Wt=nt.drawRange,Ot=nt.attributes.position,Zt=Wt.start*Gt,te=(Wt.start+Wt.count)*Gt;yt!==null&&(Zt=Math.max(Zt,yt.start*Gt),te=Math.min(te,(yt.start+yt.count)*Gt)),Rt!==null?(Zt=Math.max(Zt,0),te=Math.min(te,Rt.count)):Ot!=null&&(Zt=Math.max(Zt,0),te=Math.min(te,Ot.count));let he=te-Zt;if(he<0||he===1/0)return;Xt.setup(J,it,Nt,nt,Rt);let re,ne=Ht;if(Rt!==null&&(re=C.get(Rt),ne=kt,ne.setIndex(re)),J.isMesh)it.wireframe===!0?(k.setLineWidth(it.wireframeLinewidth*dt()),ne.setMode(R.LINES)):ne.setMode(R.TRIANGLES);else if(J.isLine){let Bt=it.linewidth;Bt===void 0&&(Bt=1),k.setLineWidth(Bt*dt()),J.isLineSegments?ne.setMode(R.LINES):J.isLineLoop?ne.setMode(R.LINE_LOOP):ne.setMode(R.LINE_STRIP)}else J.isPoints?ne.setMode(R.POINTS):J.isSprite&&ne.setMode(R.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ne.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Bt=J._multiDrawStarts,le=J._multiDrawCounts,Kt=J._multiDrawCount,Be=Rt?C.get(Rt).bytesPerElement:1,Si=tt.get(it).currentProgram.getUniforms();for(let ke=0;ke<Kt;ke++)Si.setValue(R,"_gl_DrawID",ke),ne.render(Bt[ke]/Be,le[ke])}else if(J.isInstancedMesh)ne.renderInstances(Zt,he,J.count);else if(nt.isInstancedBufferGeometry){let Bt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,le=Math.min(nt.instanceCount,Bt);ne.renderInstances(Zt,he,le)}else ne.render(Zt,he)};function jt(L,Z,nt){L.transparent===!0&&L.side===je&&L.forceSinglePass===!1?(L.side=Le,L.needsUpdate=!0,hr(L,Z,nt),L.side=Rn,L.needsUpdate=!0,hr(L,Z,nt),L.side=je):hr(L,Z,nt)}this.compile=function(L,Z,nt=null){nt===null&&(nt=L),m=Mt.get(nt),m.init(Z),g.push(m),nt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),L!==nt&&L.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights();let it=new Set;return L.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let yt=J.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){let Nt=yt[At];jt(Nt,nt,J),it.add(Nt)}else jt(yt,nt,J),it.add(yt)}),m=g.pop(),it},this.compileAsync=function(L,Z,nt=null){let it=this.compile(L,Z,nt);return new Promise(J=>{function yt(){if(it.forEach(function(At){tt.get(At).currentProgram.isReady()&&it.delete(At)}),it.size===0){J(L);return}setTimeout(yt,10)}Q.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let tn=null;function _n(L){tn&&tn(L)}function tc(){jn.stop()}function ec(){jn.start()}let jn=new Qh;jn.setAnimationLoop(_n),typeof self!="undefined"&&jn.setContext(self),this.setAnimationLoop=function(L){tn=L,xt.setAnimationLoop(L),L===null?jn.stop():jn.start()},xt.addEventListener("sessionstart",tc),xt.addEventListener("sessionend",ec),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Z),Z=xt.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,Z,T),m=Mt.get(L,g.length),m.init(Z),g.push(m),$.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),D.setFromProjectionMatrix($),I=this.localClippingEnabled,O=Pt.init(this.clippingPlanes,I),v=It.get(L,b.length),v.init(),b.push(v),xt.enabled===!0&&xt.isPresenting===!0){let yt=_.xr.getDepthSensingMesh();yt!==null&&ga(yt,Z,-1/0,_.sortObjects)}ga(L,Z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(lt,st),vt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,vt&&ft.addToRenderList(v,L),this.info.render.frame++,O===!0&&Pt.beginShadows();let nt=m.state.shadowsArray;Dt.render(nt,L,Z),O===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=v.opaque,J=v.transmissive;if(m.setupLights(),Z.isArrayCamera){let yt=Z.cameras;if(J.length>0)for(let At=0,Nt=yt.length;At<Nt;At++){let Rt=yt[At];ic(it,J,L,Rt)}vt&&ft.render(L);for(let At=0,Nt=yt.length;At<Nt;At++){let Rt=yt[At];nc(v,L,Rt,Rt.viewport)}}else J.length>0&&ic(it,J,L,Z),vt&&ft.render(L),nc(v,L,Z);T!==null&&E===0&&(pt.updateMultisampleRenderTarget(T),pt.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(_,L,Z),Xt.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?(m=g[g.length-1],O===!0&&Pt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function ga(L,Z,nt,it){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)nt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||D.intersectsSprite(L)){it&&q.setFromMatrixPosition(L.matrixWorld).applyMatrix4($);let At=rt.update(L),Nt=L.material;Nt.visible&&v.push(L,At,Nt,nt,q.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||D.intersectsObject(L))){let At=rt.update(L),Nt=L.material;if(it&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),q.copy(L.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),q.copy(At.boundingSphere.center)),q.applyMatrix4(L.matrixWorld).applyMatrix4($)),Array.isArray(Nt)){let Rt=At.groups;for(let Gt=0,Wt=Rt.length;Gt<Wt;Gt++){let Ot=Rt[Gt],Zt=Nt[Ot.materialIndex];Zt&&Zt.visible&&v.push(L,At,Zt,nt,q.z,Ot)}}else Nt.visible&&v.push(L,At,Nt,nt,q.z,null)}}let yt=L.children;for(let At=0,Nt=yt.length;At<Nt;At++)ga(yt[At],Z,nt,it)}function nc(L,Z,nt,it){let J=L.opaque,yt=L.transmissive,At=L.transparent;m.setupLightsView(nt),O===!0&&Pt.setGlobalState(_.clippingPlanes,nt),it&&k.viewport(A.copy(it)),J.length>0&&cr(J,Z,nt),yt.length>0&&cr(yt,Z,nt),At.length>0&&cr(At,Z,nt),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function ic(L,Z,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[it.id]===void 0&&(m.state.transmissionRenderTarget[it.id]=new Te(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Me:vn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let yt=m.state.transmissionRenderTarget[it.id],At=it.viewport||A;yt.setSize(At.z*_.transmissionResolutionScale,At.w*_.transmissionResolutionScale);let Nt=_.getRenderTarget(),Rt=_.getActiveCubeFace(),Gt=_.getActiveMipmapLevel();_.setRenderTarget(yt),_.getClearColor(H),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),vt&&ft.render(nt);let Wt=_.toneMapping;_.toneMapping=In;let Ot=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),m.setupLightsView(it),O===!0&&Pt.setGlobalState(_.clippingPlanes,it),cr(L,nt,it),pt.updateMultisampleRenderTarget(yt),pt.updateRenderTargetMipmap(yt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let te=0,he=Z.length;te<he;te++){let re=Z[te],ne=re.object,Bt=re.geometry,le=re.material,Kt=re.group;if(le.side===je&&ne.layers.test(it.layers)){let Be=le.side;le.side=Le,le.needsUpdate=!0,sc(ne,nt,it,Bt,le,Kt),le.side=Be,le.needsUpdate=!0,Zt=!0}}Zt===!0&&(pt.updateMultisampleRenderTarget(yt),pt.updateRenderTargetMipmap(yt))}_.setRenderTarget(Nt,Rt,Gt),_.setClearColor(H,G),Ot!==void 0&&(it.viewport=Ot),_.toneMapping=Wt}function cr(L,Z,nt){let it=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,yt=L.length;J<yt;J++){let At=L[J],Nt=At.object,Rt=At.geometry,Gt=At.group,Wt=At.material;Wt.allowOverride===!0&&it!==null&&(Wt=it),Nt.layers.test(nt.layers)&&sc(Nt,Z,nt,Rt,Wt,Gt)}}function sc(L,Z,nt,it,J,yt){L.onBeforeRender(_,Z,nt,it,J,yt),L.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(_,Z,nt,it,L,yt),J.transparent===!0&&J.side===je&&J.forceSinglePass===!1?(J.side=Le,J.needsUpdate=!0,_.renderBufferDirect(nt,Z,it,J,L,yt),J.side=Rn,J.needsUpdate=!0,_.renderBufferDirect(nt,Z,it,J,L,yt),J.side=je):_.renderBufferDirect(nt,Z,it,J,L,yt),L.onAfterRender(_,Z,nt,it,J,yt)}function hr(L,Z,nt){Z.isScene!==!0&&(Z=gt);let it=tt.get(L),J=m.state.lights,yt=m.state.shadowsArray,At=J.state.version,Nt=ht.getParameters(L,J.state,yt,Z,nt),Rt=ht.getProgramCacheKey(Nt),Gt=it.programs;it.environment=L.isMeshStandardMaterial?Z.environment:null,it.fog=Z.fog,it.envMap=(L.isMeshStandardMaterial?F:Ft).get(L.envMap||it.environment),it.envMapRotation=it.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,Gt===void 0&&(L.addEventListener("dispose",Ut),Gt=new Map,it.programs=Gt);let Wt=Gt.get(Rt);if(Wt!==void 0){if(it.currentProgram===Wt&&it.lightsStateVersion===At)return oc(L,Nt),Wt}else Nt.uniforms=ht.getUniforms(L),L.onBeforeCompile(Nt,_),Wt=ht.acquireProgram(Nt,Rt),Gt.set(Rt,Wt),it.uniforms=Nt.uniforms;let Ot=it.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ot.clippingPlanes=Pt.uniform),oc(L,Nt),it.needsLights=Su(L),it.lightsStateVersion=At,it.needsLights&&(Ot.ambientLightColor.value=J.state.ambient,Ot.lightProbe.value=J.state.probe,Ot.directionalLights.value=J.state.directional,Ot.directionalLightShadows.value=J.state.directionalShadow,Ot.spotLights.value=J.state.spot,Ot.spotLightShadows.value=J.state.spotShadow,Ot.rectAreaLights.value=J.state.rectArea,Ot.ltc_1.value=J.state.rectAreaLTC1,Ot.ltc_2.value=J.state.rectAreaLTC2,Ot.pointLights.value=J.state.point,Ot.pointLightShadows.value=J.state.pointShadow,Ot.hemisphereLights.value=J.state.hemi,Ot.directionalShadowMap.value=J.state.directionalShadowMap,Ot.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ot.spotShadowMap.value=J.state.spotShadowMap,Ot.spotLightMatrix.value=J.state.spotLightMatrix,Ot.spotLightMap.value=J.state.spotLightMap,Ot.pointShadowMap.value=J.state.pointShadowMap,Ot.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=Wt,it.uniformsList=null,Wt}function rc(L){if(L.uniformsList===null){let Z=L.currentProgram.getUniforms();L.uniformsList=ns.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function oc(L,Z){let nt=tt.get(L);nt.outputColorSpace=Z.outputColorSpace,nt.batching=Z.batching,nt.batchingColor=Z.batchingColor,nt.instancing=Z.instancing,nt.instancingColor=Z.instancingColor,nt.instancingMorph=Z.instancingMorph,nt.skinning=Z.skinning,nt.morphTargets=Z.morphTargets,nt.morphNormals=Z.morphNormals,nt.morphColors=Z.morphColors,nt.morphTargetsCount=Z.morphTargetsCount,nt.numClippingPlanes=Z.numClippingPlanes,nt.numIntersection=Z.numClipIntersection,nt.vertexAlphas=Z.vertexAlphas,nt.vertexTangents=Z.vertexTangents,nt.toneMapping=Z.toneMapping}function _u(L,Z,nt,it,J){Z.isScene!==!0&&(Z=gt),pt.resetTextureUnits();let yt=Z.fog,At=it.isMeshStandardMaterial?Z.environment:null,Nt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Pn,Rt=(it.isMeshStandardMaterial?F:Ft).get(it.envMap||At),Gt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Wt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ot=!!nt.morphAttributes.position,Zt=!!nt.morphAttributes.normal,te=!!nt.morphAttributes.color,he=In;it.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(he=_.toneMapping);let re=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ne=re!==void 0?re.length:0,Bt=tt.get(it),le=m.state.lights;if(O===!0&&(I===!0||L!==S)){let Re=L===S&&it.id===y;Pt.setState(it,L,Re)}let Kt=!1;it.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==le.state.version||Bt.outputColorSpace!==Nt||J.isBatchedMesh&&Bt.batching===!1||!J.isBatchedMesh&&Bt.batching===!0||J.isBatchedMesh&&Bt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Bt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Bt.instancing===!1||!J.isInstancedMesh&&Bt.instancing===!0||J.isSkinnedMesh&&Bt.skinning===!1||!J.isSkinnedMesh&&Bt.skinning===!0||J.isInstancedMesh&&Bt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Bt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Bt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Bt.instancingMorph===!1&&J.morphTexture!==null||Bt.envMap!==Rt||it.fog===!0&&Bt.fog!==yt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Pt.numPlanes||Bt.numIntersection!==Pt.numIntersection)||Bt.vertexAlphas!==Gt||Bt.vertexTangents!==Wt||Bt.morphTargets!==Ot||Bt.morphNormals!==Zt||Bt.morphColors!==te||Bt.toneMapping!==he||Bt.morphTargetsCount!==ne)&&(Kt=!0):(Kt=!0,Bt.__version=it.version);let Be=Bt.currentProgram;Kt===!0&&(Be=hr(it,Z,J));let Si=!1,ke=!1,ls=!1,ae=Be.getUniforms(),Ye=Bt.uniforms;if(k.useProgram(Be.program)&&(Si=!0,ke=!0,ls=!0),it.id!==y&&(y=it.id,ke=!0),Si||S!==L){k.buffers.depth.getReversed()?(P.copy(L.projectionMatrix),Mh(P),bh(P),ae.setValue(R,"projectionMatrix",P)):ae.setValue(R,"projectionMatrix",L.projectionMatrix),ae.setValue(R,"viewMatrix",L.matrixWorldInverse);let De=ae.map.cameraPosition;De!==void 0&&De.setValue(R,ct.setFromMatrixPosition(L.matrixWorld)),et.logarithmicDepthBuffer&&ae.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ae.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,ke=!0,ls=!0)}if(J.isSkinnedMesh){ae.setOptional(R,J,"bindMatrix"),ae.setOptional(R,J,"bindMatrixInverse");let Re=J.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ae.setValue(R,"boneTexture",Re.boneTexture,pt))}J.isBatchedMesh&&(ae.setOptional(R,J,"batchingTexture"),ae.setValue(R,"batchingTexture",J._matricesTexture,pt),ae.setOptional(R,J,"batchingIdTexture"),ae.setValue(R,"batchingIdTexture",J._indirectTexture,pt),ae.setOptional(R,J,"batchingColorTexture"),J._colorsTexture!==null&&ae.setValue(R,"batchingColorTexture",J._colorsTexture,pt));let qe=nt.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&Ct.update(J,nt,Be),(ke||Bt.receiveShadow!==J.receiveShadow)&&(Bt.receiveShadow=J.receiveShadow,ae.setValue(R,"receiveShadow",J.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Ye.envMap.value=Rt,Ye.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Z.environment!==null&&(Ye.envMapIntensity.value=Z.environmentIntensity),ke&&(ae.setValue(R,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&yu(Ye,ls),yt&&it.fog===!0&&ot.refreshFogUniforms(Ye,yt),ot.refreshMaterialUniforms(Ye,it,V,W,m.state.transmissionRenderTarget[L.id]),ns.upload(R,rc(Bt),Ye,pt)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ns.upload(R,rc(Bt),Ye,pt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ae.setValue(R,"center",J.center),ae.setValue(R,"modelViewMatrix",J.modelViewMatrix),ae.setValue(R,"normalMatrix",J.normalMatrix),ae.setValue(R,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let Re=it.uniformsGroups;for(let De=0,va=Re.length;De<va;De++){let Qn=Re[De];X.update(Qn,Be),X.bind(Qn,Be)}}return Be}function yu(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function Su(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,Z,nt){let it=tt.get(L);it.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),tt.get(L.texture).__webglTexture=Z,tt.get(L.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:nt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Z){let nt=tt.get(L);nt.__webglFramebuffer=Z,nt.__useDefaultFramebuffer=Z===void 0};let Mu=R.createFramebuffer();this.setRenderTarget=function(L,Z=0,nt=0){T=L,M=Z,E=nt;let it=!0,J=null,yt=!1,At=!1;if(L){let Rt=tt.get(L);if(Rt.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(R.FRAMEBUFFER,null),it=!1;else if(Rt.__webglFramebuffer===void 0)pt.setupRenderTarget(L);else if(Rt.__hasExternalTextures)pt.rebindTextures(L,tt.get(L.texture).__webglTexture,tt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Ot=L.depthTexture;if(Rt.__boundDepthTexture!==Ot){if(Ot!==null&&tt.has(Ot)&&(L.width!==Ot.image.width||L.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(L)}}let Gt=L.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(At=!0);let Wt=tt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?J=Wt[Z][nt]:J=Wt[Z],yt=!0):L.samples>0&&pt.useMultisampledRTT(L)===!1?J=tt.get(L).__webglMultisampledFramebuffer:Array.isArray(Wt)?J=Wt[nt]:J=Wt,A.copy(L.viewport),N.copy(L.scissor),z=L.scissorTest}else A.copy(mt).multiplyScalar(V).floor(),N.copy(bt).multiplyScalar(V).floor(),z=St;if(nt!==0&&(J=Mu),k.bindFramebuffer(R.FRAMEBUFFER,J)&&it&&k.drawBuffers(L,J),k.viewport(A),k.scissor(N),k.setScissorTest(z),yt){let Rt=tt.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Rt.__webglTexture,nt)}else if(At){let Rt=tt.get(L.texture),Gt=Z;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rt.__webglTexture,nt,Gt)}else if(L!==null&&nt!==0){let Rt=tt.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rt.__webglTexture,nt)}y=-1},this.readRenderTargetPixels=function(L,Z,nt,it,J,yt,At,Nt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt){k.bindFramebuffer(R.FRAMEBUFFER,Rt);try{let Gt=L.textures[Nt],Wt=Gt.format,Ot=Gt.type;if(!et.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-it&&nt>=0&&nt<=L.height-J&&(L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Nt),R.readPixels(Z,nt,it,J,wt.convert(Wt),wt.convert(Ot),yt))}finally{let Gt=T!==null?tt.get(T).__webglFramebuffer:null;k.bindFramebuffer(R.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(L,Z,nt,it,J,yt,At,Nt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt)if(Z>=0&&Z<=L.width-it&&nt>=0&&nt<=L.height-J){k.bindFramebuffer(R.FRAMEBUFFER,Rt);let Gt=L.textures[Nt],Wt=Gt.format,Ot=Gt.type;if(!et.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.bufferData(R.PIXEL_PACK_BUFFER,yt.byteLength,R.STREAM_READ),L.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Nt),R.readPixels(Z,nt,it,J,wt.convert(Wt),wt.convert(Ot),0);let te=T!==null?tt.get(T).__webglFramebuffer:null;k.bindFramebuffer(R.FRAMEBUFFER,te);let he=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Sh(R,he,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,yt),R.deleteBuffer(Zt),R.deleteSync(he),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Z=null,nt=0){let it=Math.pow(2,-nt),J=Math.floor(L.image.width*it),yt=Math.floor(L.image.height*it),At=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;pt.setTexture2D(L,0),R.copyTexSubImage2D(R.TEXTURE_2D,nt,0,0,At,Nt,J,yt),k.unbindTexture()};let bu=R.createFramebuffer(),wu=R.createFramebuffer();this.copyTextureToTexture=function(L,Z,nt=null,it=null,J=0,yt=null){yt===null&&(J!==0?(li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=J,J=0):yt=0);let At,Nt,Rt,Gt,Wt,Ot,Zt,te,he,re=L.isCompressedTexture?L.mipmaps[yt]:L.image;if(nt!==null)At=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,Rt=nt.isBox3?nt.max.z-nt.min.z:1,Gt=nt.min.x,Wt=nt.min.y,Ot=nt.isBox3?nt.min.z:0;else{let qe=Math.pow(2,-J);At=Math.floor(re.width*qe),Nt=Math.floor(re.height*qe),L.isDataArrayTexture?Rt=re.depth:L.isData3DTexture?Rt=Math.floor(re.depth*qe):Rt=1,Gt=0,Wt=0,Ot=0}it!==null?(Zt=it.x,te=it.y,he=it.z):(Zt=0,te=0,he=0);let ne=wt.convert(Z.format),Bt=wt.convert(Z.type),le;Z.isData3DTexture?(pt.setTexture3D(Z,0),le=R.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(pt.setTexture2DArray(Z,0),le=R.TEXTURE_2D_ARRAY):(pt.setTexture2D(Z,0),le=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Z.unpackAlignment);let Kt=R.getParameter(R.UNPACK_ROW_LENGTH),Be=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Si=R.getParameter(R.UNPACK_SKIP_PIXELS),ke=R.getParameter(R.UNPACK_SKIP_ROWS),ls=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,re.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,re.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ot);let ae=L.isDataArrayTexture||L.isData3DTexture,Ye=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isDepthTexture){let qe=tt.get(L),Re=tt.get(Z),De=tt.get(qe.__renderTarget),va=tt.get(Re.__renderTarget);k.bindFramebuffer(R.READ_FRAMEBUFFER,De.__webglFramebuffer),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let Qn=0;Qn<Rt;Qn++)ae&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tt.get(L).__webglTexture,J,Ot+Qn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tt.get(Z).__webglTexture,yt,he+Qn)),R.blitFramebuffer(Gt,Wt,At,Nt,Zt,te,At,Nt,R.DEPTH_BUFFER_BIT,R.NEAREST);k.bindFramebuffer(R.READ_FRAMEBUFFER,null),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(J!==0||L.isRenderTargetTexture||tt.has(L)){let qe=tt.get(L),Re=tt.get(Z);k.bindFramebuffer(R.READ_FRAMEBUFFER,bu),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,wu);for(let De=0;De<Rt;De++)ae?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qe.__webglTexture,J,Ot+De):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qe.__webglTexture,J),Ye?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.__webglTexture,yt,he+De):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,yt),J!==0?R.blitFramebuffer(Gt,Wt,At,Nt,Zt,te,At,Nt,R.COLOR_BUFFER_BIT,R.NEAREST):Ye?R.copyTexSubImage3D(le,yt,Zt,te,he+De,Gt,Wt,At,Nt):R.copyTexSubImage2D(le,yt,Zt,te,Gt,Wt,At,Nt);k.bindFramebuffer(R.READ_FRAMEBUFFER,null),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ye?L.isDataTexture||L.isData3DTexture?R.texSubImage3D(le,yt,Zt,te,he,At,Nt,Rt,ne,Bt,re.data):Z.isCompressedArrayTexture?R.compressedTexSubImage3D(le,yt,Zt,te,he,At,Nt,Rt,ne,re.data):R.texSubImage3D(le,yt,Zt,te,he,At,Nt,Rt,ne,Bt,re):L.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,yt,Zt,te,At,Nt,ne,Bt,re.data):L.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,yt,Zt,te,re.width,re.height,ne,re.data):R.texSubImage2D(R.TEXTURE_2D,yt,Zt,te,At,Nt,ne,Bt,re);R.pixelStorei(R.UNPACK_ROW_LENGTH,Kt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Be),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Si),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ls),yt===0&&Z.generateMipmaps&&R.generateMipmap(le),k.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,nt=null,it=null,J=0){return li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Z,nt,it,J)},this.initRenderTarget=function(L){tt.get(L).__webglFramebuffer===void 0&&pt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?pt.setTextureCube(L,0):L.isData3DTexture?pt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?pt.setTexture2DArray(L,0):pt.setTexture2D(L,0),k.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,k.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var su={type:"change"},$l={type:"start"},ou={type:"end"},la=new Gi,ru=new Je,z0=Math.cos(70*sr.DEG2RAD),xe=new Y,Oe=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ql=1e-6,ca=class extends Zs{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Ke,this._lastTargetPosition=new Y,this._quat=new Ke().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ji,this._sphericalDelta=new Ji,this._scale=1,this._panOffset=new Y,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new Y,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=H0.bind(this),this._onPointerDown=V0.bind(this),this._onPointerUp=G0.bind(this),this._onContextMenu=J0.bind(this),this._onMouseWheel=Y0.bind(this),this._onKeyDown=q0.bind(this),this._onTouchStart=$0.bind(this),this._onTouchMove=Z0.bind(this),this._onMouseDown=W0.bind(this),this._onMouseMove=X0.bind(this),this._interceptControlDown=K0.bind(this),this._interceptControlUp=j0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(su),this.update(),this.state=ee.NONE}update(t=null){let e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),i<-Math.PI?i+=Oe:i>Math.PI&&(i-=Oe),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=xe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new Y(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<z0?this.object.lookAt(this.target):(ru.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(ru,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ql||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ql||this._lastTargetPosition.distanceToSquared(this.target)>ql?(this.dispatchEvent(su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;xe.copy(i).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function V0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function H0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function G0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ou),this.state=ee.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function W0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ee.DOLLY;break;case $n.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ee.ROTATE}break;case $n.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent($l)}function X0(s){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Y0(s){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(s.preventDefault(),this.dispatchEvent($l),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ou))}function q0(s){this.enabled!==!1&&this._handleKeyDown(s)}function $0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Zn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ee.TOUCH_ROTATE;break;case Zn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Zn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ee.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent($l)}function Z0(s){switch(this._trackPointer(s),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ee.NONE}}function J0(s){this.enabled!==!1&&s.preventDefault()}function K0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ha=class extends Ws{constructor(t){super(t),this.type=Me}parse(t){let o=function(T,y){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},u=`
`,c=function(T,y,S){y=y||1024;let N=T.pos,z=-1,H=0,G="",B=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));for(;0>(z=B.indexOf(u))&&H<y&&N<T.byteLength;)G+=B,H+=B.length,N+=128,B+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));return-1<z?(S!==!1&&(T.pos+=H+z+1),G+B.slice(0,z)):!1},d=function(T){let y=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},G,B;for((T.pos>=T.byteLength||!(G=c(T)))&&o(1,"no header found"),(B=G.match(y))||o(3,"bad initial token"),H.valid|=1,H.programtype=B[1],H.string+=G+`
`;G=c(T),G!==!1;){if(H.string+=G+`
`,G.charAt(0)==="#"){H.comments+=G+`
`;continue}if((B=G.match(S))&&(H.gamma=parseFloat(B[1])),(B=G.match(A))&&(H.exposure=parseFloat(B[1])),(B=G.match(N))&&(H.valid|=2,H.format=B[1]),(B=G.match(z))&&(H.valid|=4,H.height=parseInt(B[1],10),H.width=parseInt(B[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},f=function(T,y,S){let A=y;if(A<8||A>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);A!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");let N=new Uint8Array(4*y*S);N.length||o(4,"unable to allocate buffer space");let z=0,H=0,G=4*A,B=new Uint8Array(4),W=new Uint8Array(G),V=S;for(;V>0&&H<T.byteLength;){H+4>T.byteLength&&o(1),B[0]=T[H++],B[1]=T[H++],B[2]=T[H++],B[3]=T[H++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=A)&&o(3,"bad rgbe scanline format");let lt=0,st;for(;lt<G&&H<T.byteLength;){st=T[H++];let bt=st>128;if(bt&&(st-=128),(st===0||lt+st>G)&&o(3,"bad scanline data"),bt){let St=T[H++];for(let D=0;D<st;D++)W[lt++]=St}else W.set(T.subarray(H,H+st),lt),lt+=st,H+=st}let mt=A;for(let bt=0;bt<mt;bt++){let St=0;N[z]=W[bt+St],St+=A,N[z+1]=W[bt+St],St+=A,N[z+2]=W[bt+St],St+=A,N[z+3]=W[bt+St],z+=4}V--}return N},p=function(T,y,S,A){let N=T[y+3],z=Math.pow(2,N-128)/255;S[A+0]=T[y+0]*z,S[A+1]=T[y+1]*z,S[A+2]=T[y+2]*z,S[A+3]=1},x=function(T,y,S,A){let N=T[y+3],z=Math.pow(2,N-128)/255;S[A+0]=Xn.toHalfFloat(Math.min(T[y+0]*z,65504)),S[A+1]=Xn.toHalfFloat(Math.min(T[y+1]*z,65504)),S[A+2]=Xn.toHalfFloat(Math.min(T[y+2]*z,65504)),S[A+3]=Xn.toHalfFloat(1)},v=new Uint8Array(t);v.pos=0;let m=d(v),b=m.width,g=m.height,_=f(v.subarray(v.pos),b,g),w,M,E;switch(this.type){case Fe:E=_.length/4;let T=new Float32Array(E*4);for(let S=0;S<E;S++)p(_,S*4,T,S*4);w=T,M=Fe;break;case Me:E=_.length/4;let y=new Uint16Array(E*4);for(let S=0;S<E;S++)x(_,S*4,y,S*4);w=y,M=Me;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:g,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:M}}setDataType(t){return this.type=t,this}load(t,e,n,i){function r(o,a){switch(o.type){case Fe:case Me:o.colorSpace=Pn,o.minFilter=Se,o.magFilter=Se,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,r,n,i)}};var Q0=Ie,or=class s extends mn{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){let r=this,o=new $i(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this;function n(D,O){if(D.nodeType!==1)return;let I=_(D),P=!1,$=null;switch(D.nodeName){case"svg":O=p(D,O);break;case"style":r(D);break;case"g":O=p(D,O);break;case"path":O=p(D,O),D.hasAttribute("d")&&($=i(D));break;case"rect":O=p(D,O),$=l(D);break;case"polygon":O=p(D,O),$=h(D);break;case"polyline":O=p(D,O),$=u(D);break;case"circle":O=p(D,O),$=c(D);break;case"ellipse":O=p(D,O),$=d(D);break;case"line":O=p(D,O),$=f(D);break;case"defs":P=!0;break;case"use":O=p(D,O);let gt=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),vt=D.viewportElement.getElementById(gt);vt?n(vt,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+gt);break;default:}$&&(O.fill!==void 0&&O.fill!=="none"&&$.color.setStyle(O.fill,Q0),M($,mt),N.push($),$.userData={node:D,style:O});let ct=D.childNodes;for(let q=0;q<ct.length;q++){let gt=ct[q];P&&gt.nodeName!=="style"&&gt.nodeName!=="defs"||n(gt,O)}I&&(H.pop(),H.length>0?mt.copy(H[H.length-1]):mt.identity())}function i(D){let O=new on,I=new at,P=new at,$=new at,ct=!0,q=!1,gt=D.getAttribute("d");if(gt===""||gt==="none")return null;let vt=gt.match(/[a-df-z][^a-df-z]*/ig);for(let dt=0,R=vt.length;dt<R;dt++){let j=vt[dt],Q=j.charAt(0),et=j.slice(1).trim();ct===!0&&(q=!0,ct=!1);let k;switch(Q){case"M":k=v(et);for(let U=0,tt=k.length;U<tt;U+=2)I.x=k[U+0],I.y=k[U+1],P.x=I.x,P.y=I.y,U===0?O.moveTo(I.x,I.y):O.lineTo(I.x,I.y),U===0&&$.copy(I);break;case"H":k=v(et);for(let U=0,tt=k.length;U<tt;U++)I.x=k[U],P.x=I.x,P.y=I.y,O.lineTo(I.x,I.y),U===0&&q===!0&&$.copy(I);break;case"V":k=v(et);for(let U=0,tt=k.length;U<tt;U++)I.y=k[U],P.x=I.x,P.y=I.y,O.lineTo(I.x,I.y),U===0&&q===!0&&$.copy(I);break;case"L":k=v(et);for(let U=0,tt=k.length;U<tt;U+=2)I.x=k[U+0],I.y=k[U+1],P.x=I.x,P.y=I.y,O.lineTo(I.x,I.y),U===0&&q===!0&&$.copy(I);break;case"C":k=v(et);for(let U=0,tt=k.length;U<tt;U+=6)O.bezierCurveTo(k[U+0],k[U+1],k[U+2],k[U+3],k[U+4],k[U+5]),P.x=k[U+2],P.y=k[U+3],I.x=k[U+4],I.y=k[U+5],U===0&&q===!0&&$.copy(I);break;case"S":k=v(et);for(let U=0,tt=k.length;U<tt;U+=4)O.bezierCurveTo(x(I.x,P.x),x(I.y,P.y),k[U+0],k[U+1],k[U+2],k[U+3]),P.x=k[U+0],P.y=k[U+1],I.x=k[U+2],I.y=k[U+3],U===0&&q===!0&&$.copy(I);break;case"Q":k=v(et);for(let U=0,tt=k.length;U<tt;U+=4)O.quadraticCurveTo(k[U+0],k[U+1],k[U+2],k[U+3]),P.x=k[U+0],P.y=k[U+1],I.x=k[U+2],I.y=k[U+3],U===0&&q===!0&&$.copy(I);break;case"T":k=v(et);for(let U=0,tt=k.length;U<tt;U+=2){let pt=x(I.x,P.x),Ft=x(I.y,P.y);O.quadraticCurveTo(pt,Ft,k[U+0],k[U+1]),P.x=pt,P.y=Ft,I.x=k[U+0],I.y=k[U+1],U===0&&q===!0&&$.copy(I)}break;case"A":k=v(et,[3,4],7);for(let U=0,tt=k.length;U<tt;U+=7){if(k[U+5]==I.x&&k[U+6]==I.y)continue;let pt=I.clone();I.x=k[U+5],I.y=k[U+6],P.x=I.x,P.y=I.y,o(O,k[U],k[U+1],k[U+2],k[U+3],k[U+4],pt,I),U===0&&q===!0&&$.copy(I)}break;case"m":k=v(et);for(let U=0,tt=k.length;U<tt;U+=2)I.x+=k[U+0],I.y+=k[U+1],P.x=I.x,P.y=I.y,U===0?O.moveTo(I.x,I.y):O.lineTo(I.x,I.y),U===0&&$.copy(I);break;case"h":k=v(et);for(let U=0,tt=k.length;U<tt;U++)I.x+=k[U],P.x=I.x,P.y=I.y,O.lineTo(I.x,I.y),U===0&&q===!0&&$.copy(I);break;case"v":k=v(et);for(let U=0,tt=k.length;U<tt;U++)I.y+=k[U],P.x=I.x,P.y=I.y,O.lineTo(I.x,I.y),U===0&&q===!0&&$.copy(I);break;case"l":k=v(et);for(let U=0,tt=k.length;U<tt;U+=2)I.x+=k[U+0],I.y+=k[U+1],P.x=I.x,P.y=I.y,O.lineTo(I.x,I.y),U===0&&q===!0&&$.copy(I);break;case"c":k=v(et);for(let U=0,tt=k.length;U<tt;U+=6)O.bezierCurveTo(I.x+k[U+0],I.y+k[U+1],I.x+k[U+2],I.y+k[U+3],I.x+k[U+4],I.y+k[U+5]),P.x=I.x+k[U+2],P.y=I.y+k[U+3],I.x+=k[U+4],I.y+=k[U+5],U===0&&q===!0&&$.copy(I);break;case"s":k=v(et);for(let U=0,tt=k.length;U<tt;U+=4)O.bezierCurveTo(x(I.x,P.x),x(I.y,P.y),I.x+k[U+0],I.y+k[U+1],I.x+k[U+2],I.y+k[U+3]),P.x=I.x+k[U+0],P.y=I.y+k[U+1],I.x+=k[U+2],I.y+=k[U+3],U===0&&q===!0&&$.copy(I);break;case"q":k=v(et);for(let U=0,tt=k.length;U<tt;U+=4)O.quadraticCurveTo(I.x+k[U+0],I.y+k[U+1],I.x+k[U+2],I.y+k[U+3]),P.x=I.x+k[U+0],P.y=I.y+k[U+1],I.x+=k[U+2],I.y+=k[U+3],U===0&&q===!0&&$.copy(I);break;case"t":k=v(et);for(let U=0,tt=k.length;U<tt;U+=2){let pt=x(I.x,P.x),Ft=x(I.y,P.y);O.quadraticCurveTo(pt,Ft,I.x+k[U+0],I.y+k[U+1]),P.x=pt,P.y=Ft,I.x=I.x+k[U+0],I.y=I.y+k[U+1],U===0&&q===!0&&$.copy(I)}break;case"a":k=v(et,[3,4],7);for(let U=0,tt=k.length;U<tt;U+=7){if(k[U+5]==0&&k[U+6]==0)continue;let pt=I.clone();I.x+=k[U+5],I.y+=k[U+6],P.x=I.x,P.y=I.y,o(O,k[U],k[U+1],k[U+2],k[U+3],k[U+4],pt,I),U===0&&q===!0&&$.copy(I)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(I.copy($),O.currentPath.currentPoint.copy(I),ct=!0);break;default:console.warn(j)}q=!1}return O}function r(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let O=0;O<D.sheet.cssRules.length;O++){let I=D.sheet.cssRules[O];if(I.type!==1)continue;let P=I.selectorText.split(/,/gm).filter(Boolean).map($=>$.trim());for(let $=0;$<P.length;$++){let ct=Object.fromEntries(Object.entries(I.style).filter(([,q])=>q!==""));z[P[$]]=Object.assign(z[P[$]]||{},ct)}}}function o(D,O,I,P,$,ct,q,gt){if(O==0||I==0){D.lineTo(gt.x,gt.y);return}P=P*Math.PI/180,O=Math.abs(O),I=Math.abs(I);let vt=(q.x-gt.x)/2,dt=(q.y-gt.y)/2,R=Math.cos(P)*vt+Math.sin(P)*dt,j=-Math.sin(P)*vt+Math.cos(P)*dt,Q=O*O,et=I*I,k=R*R,U=j*j,tt=k/Q+U/et;if(tt>1){let Mt=Math.sqrt(tt);O=Mt*O,I=Mt*I,Q=O*O,et=I*I}let pt=Q*U+et*k,Ft=(Q*et-pt)/pt,F=Math.sqrt(Math.max(0,Ft));$===ct&&(F=-F);let C=F*O*j/I,K=-F*I*R/O,rt=Math.cos(P)*C-Math.sin(P)*K+(q.x+gt.x)/2,ht=Math.sin(P)*C+Math.cos(P)*K+(q.y+gt.y)/2,ot=a(1,0,(R-C)/O,(j-K)/I),It=a((R-C)/O,(j-K)/I,(-R-C)/O,(-j-K)/I)%(Math.PI*2);D.currentPath.absellipse(rt,ht,O,I,ot,ot+It,ct===0,P)}function a(D,O,I,P){let $=D*I+O*P,ct=Math.sqrt(D*D+O*O)*Math.sqrt(I*I+P*P),q=Math.acos(Math.max(-1,Math.min(1,$/ct)));return D*P-O*I<0&&(q=-q),q}function l(D){let O=g(D.getAttribute("x")||0),I=g(D.getAttribute("y")||0),P=g(D.getAttribute("rx")||D.getAttribute("ry")||0),$=g(D.getAttribute("ry")||D.getAttribute("rx")||0),ct=g(D.getAttribute("width")),q=g(D.getAttribute("height")),gt=1-.551915024494,vt=new on;return vt.moveTo(O+P,I),vt.lineTo(O+ct-P,I),(P!==0||$!==0)&&vt.bezierCurveTo(O+ct-P*gt,I,O+ct,I+$*gt,O+ct,I+$),vt.lineTo(O+ct,I+q-$),(P!==0||$!==0)&&vt.bezierCurveTo(O+ct,I+q-$*gt,O+ct-P*gt,I+q,O+ct-P,I+q),vt.lineTo(O+P,I+q),(P!==0||$!==0)&&vt.bezierCurveTo(O+P*gt,I+q,O,I+q-$*gt,O,I+q-$),vt.lineTo(O,I+$),(P!==0||$!==0)&&vt.bezierCurveTo(O,I+$*gt,O+P*gt,I,O+P,I),vt}function h(D){function O(ct,q,gt){let vt=g(q),dt=g(gt);$===0?P.moveTo(vt,dt):P.lineTo(vt,dt),$++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,P=new on,$=0;return D.getAttribute("points").replace(I,O),P.currentPath.autoClose=!0,P}function u(D){function O(ct,q,gt){let vt=g(q),dt=g(gt);$===0?P.moveTo(vt,dt):P.lineTo(vt,dt),$++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,P=new on,$=0;return D.getAttribute("points").replace(I,O),P.currentPath.autoClose=!1,P}function c(D){let O=g(D.getAttribute("cx")||0),I=g(D.getAttribute("cy")||0),P=g(D.getAttribute("r")||0),$=new pn;$.absarc(O,I,P,0,Math.PI*2);let ct=new on;return ct.subPaths.push($),ct}function d(D){let O=g(D.getAttribute("cx")||0),I=g(D.getAttribute("cy")||0),P=g(D.getAttribute("rx")||0),$=g(D.getAttribute("ry")||0),ct=new pn;ct.absellipse(O,I,P,$,0,Math.PI*2);let q=new on;return q.subPaths.push(ct),q}function f(D){let O=g(D.getAttribute("x1")||0),I=g(D.getAttribute("y1")||0),P=g(D.getAttribute("x2")||0),$=g(D.getAttribute("y2")||0),ct=new on;return ct.moveTo(O,I),ct.lineTo(P,$),ct.currentPath.autoClose=!1,ct}function p(D,O){O=Object.assign({},O);let I={};if(D.hasAttribute("class")){let q=D.getAttribute("class").split(/\s/).filter(Boolean).map(gt=>gt.trim());for(let gt=0;gt<q.length;gt++)I=Object.assign(I,z["."+q[gt]])}D.hasAttribute("id")&&(I=Object.assign(I,z["#"+D.getAttribute("id")]));function P(q,gt,vt){vt===void 0&&(vt=function(R){return R.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),R}),D.hasAttribute(q)&&(O[gt]=vt(D.getAttribute(q))),I[q]&&(O[gt]=vt(I[q])),D.style&&D.style[q]!==""&&(O[gt]=vt(D.style[q]))}function $(q){return Math.max(0,Math.min(1,g(q)))}function ct(q){return Math.max(0,g(q))}return P("fill","fill"),P("fill-opacity","fillOpacity",$),P("fill-rule","fillRule"),P("opacity","opacity",$),P("stroke","stroke"),P("stroke-opacity","strokeOpacity",$),P("stroke-width","strokeWidth",ct),P("stroke-linejoin","strokeLineJoin"),P("stroke-linecap","strokeLineCap"),P("stroke-miterlimit","strokeMiterLimit",ct),P("visibility","visibility"),O}function x(D,O){return D-(O-D)}function v(D,O,I){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);let P={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},$=0,ct=1,q=2,gt=3,vt=$,dt=!0,R="",j="",Q=[];function et(pt,Ft,F){let C=new SyntaxError('Unexpected character "'+pt+'" at index '+Ft+".");throw C.partial=F,C}function k(){R!==""&&(j===""?Q.push(Number(R)):Q.push(Number(R)*Math.pow(10,Number(j)))),R="",j=""}let U,tt=D.length;for(let pt=0;pt<tt;pt++){if(U=D[pt],Array.isArray(O)&&O.includes(Q.length%I)&&P.FLAGS.test(U)){vt=ct,R=U,k();continue}if(vt===$){if(P.WHITESPACE.test(U))continue;if(P.DIGIT.test(U)||P.SIGN.test(U)){vt=ct,R=U;continue}if(P.POINT.test(U)){vt=q,R=U;continue}P.COMMA.test(U)&&(dt&&et(U,pt,Q),dt=!0)}if(vt===ct){if(P.DIGIT.test(U)){R+=U;continue}if(P.POINT.test(U)){R+=U,vt=q;continue}if(P.EXP.test(U)){vt=gt;continue}P.SIGN.test(U)&&R.length===1&&P.SIGN.test(R[0])&&et(U,pt,Q)}if(vt===q){if(P.DIGIT.test(U)){R+=U;continue}if(P.EXP.test(U)){vt=gt;continue}P.POINT.test(U)&&R[R.length-1]==="."&&et(U,pt,Q)}if(vt===gt){if(P.DIGIT.test(U)){j+=U;continue}if(P.SIGN.test(U)){if(j===""){j+=U;continue}j.length===1&&P.SIGN.test(j)&&et(U,pt,Q)}}P.WHITESPACE.test(U)?(k(),vt=$,dt=!1):P.COMMA.test(U)?(k(),vt=$,dt=!0):P.SIGN.test(U)?(k(),vt=ct,R=U):P.POINT.test(U)?(k(),vt=q,R=U):et(U,pt,Q)}return k(),Q}let m=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(D){let O="px";if(typeof D=="string"||D instanceof String)for(let P=0,$=m.length;P<$;P++){let ct=m[P];if(D.endsWith(ct)){O=ct,D=D.substring(0,D.length-ct.length);break}}let I;return O==="px"&&e.defaultUnit!=="px"?I=b.in[e.defaultUnit]/e.defaultDPI:(I=b[O][e.defaultUnit],I<0&&(I=b[O].in*e.defaultDPI)),I*parseFloat(D)}function _(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;let O=w(D);return H.length>0&&O.premultiply(H[H.length-1]),mt.copy(O),H.push(O),O}function w(D){let O=new Vt,I=G;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){let P=g(D.getAttribute("x")),$=g(D.getAttribute("y"));O.translate(P,$)}if(D.hasAttribute("transform")){let P=D.getAttribute("transform").split(")");for(let $=P.length-1;$>=0;$--){let ct=P[$].trim();if(ct==="")continue;let q=ct.indexOf("("),gt=ct.length;if(q>0&&q<gt){let vt=ct.slice(0,q),dt=v(ct.slice(q+1));switch(I.identity(),vt){case"translate":if(dt.length>=1){let R=dt[0],j=0;dt.length>=2&&(j=dt[1]),I.translate(R,j)}break;case"rotate":if(dt.length>=1){let R=0,j=0,Q=0;R=dt[0]*Math.PI/180,dt.length>=3&&(j=dt[1],Q=dt[2]),B.makeTranslation(-j,-Q),W.makeRotation(R),V.multiplyMatrices(W,B),B.makeTranslation(j,Q),I.multiplyMatrices(B,V)}break;case"scale":if(dt.length>=1){let R=dt[0],j=R;dt.length>=2&&(j=dt[1]),I.scale(R,j)}break;case"skewX":dt.length===1&&I.set(1,Math.tan(dt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":dt.length===1&&I.set(1,0,0,Math.tan(dt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":dt.length===6&&I.set(dt[0],dt[2],dt[4],dt[1],dt[3],dt[5],0,0,1);break}}O.premultiply(I)}}return O}function M(D,O){function I(q){st.set(q.x,q.y,1).applyMatrix3(O),q.set(st.x,st.y)}function P(q){let gt=q.xRadius,vt=q.yRadius,dt=Math.cos(q.aRotation),R=Math.sin(q.aRotation),j=new Y(gt*dt,gt*R,0),Q=new Y(-vt*R,vt*dt,0),et=j.applyMatrix3(O),k=Q.applyMatrix3(O),U=G.set(et.x,k.x,0,et.y,k.y,0,0,0,1),tt=B.copy(U).invert(),F=W.copy(tt).transpose().multiply(tt).elements,C=A(F[0],F[1],F[4]),K=Math.sqrt(C.rt1),rt=Math.sqrt(C.rt2);if(q.xRadius=1/K,q.yRadius=1/rt,q.aRotation=Math.atan2(C.sn,C.cs),!((q.aEndAngle-q.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let ot=B.set(K,0,0,0,rt,0,0,0,1),It=W.set(C.cs,C.sn,0,-C.sn,C.cs,0,0,0,1),Mt=ot.multiply(It).multiply(U),Pt=Dt=>{let{x:ft,y:Ct}=new Y(Math.cos(Dt),Math.sin(Dt),0).applyMatrix3(Mt);return Math.atan2(Ct,ft)};q.aStartAngle=Pt(q.aStartAngle),q.aEndAngle=Pt(q.aEndAngle),E(O)&&(q.aClockwise=!q.aClockwise)}}function $(q){let gt=y(O),vt=S(O);q.xRadius*=gt,q.yRadius*=vt;let dt=gt>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);q.aRotation+=dt,E(O)&&(q.aStartAngle*=-1,q.aEndAngle*=-1,q.aClockwise=!q.aClockwise)}let ct=D.subPaths;for(let q=0,gt=ct.length;q<gt;q++){let dt=ct[q].curves;for(let R=0;R<dt.length;R++){let j=dt[R];j.isLineCurve?(I(j.v1),I(j.v2)):j.isCubicBezierCurve?(I(j.v0),I(j.v1),I(j.v2),I(j.v3)):j.isQuadraticBezierCurve?(I(j.v0),I(j.v1),I(j.v2)):j.isEllipseCurve&&(lt.set(j.aX,j.aY),I(lt),j.aX=lt.x,j.aY=lt.y,T(O)?P(j):$(j))}}}function E(D){let O=D.elements;return O[0]*O[4]-O[1]*O[3]<0}function T(D){let O=D.elements,I=O[0]*O[3]+O[1]*O[4];if(I===0)return!1;let P=y(D),$=S(D);return Math.abs(I/(P*$))>Number.EPSILON}function y(D){let O=D.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function S(D){let O=D.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function A(D,O,I){let P,$,ct,q,gt,vt=D+I,dt=D-I,R=Math.sqrt(dt*dt+4*O*O);return vt>0?(P=.5*(vt+R),gt=1/P,$=D*gt*I-O*gt*O):vt<0?$=.5*(vt-R):(P=.5*R,$=-.5*R),dt>0?ct=dt+R:ct=dt-R,Math.abs(ct)>2*Math.abs(O)?(gt=-2*O/ct,q=1/Math.sqrt(1+gt*gt),ct=gt*q):Math.abs(O)===0?(ct=1,q=0):(gt=-.5*ct/O,ct=1/Math.sqrt(1+gt*gt),q=gt*ct),dt>0&&(gt=ct,ct=-q,q=gt),{rt1:P,rt2:$,cs:ct,sn:q}}let N=[],z={},H=[],G=new Vt,B=new Vt,W=new Vt,V=new Vt,lt=new at,st=new Y,mt=new Vt,bt=new DOMParser().parseFromString(t,"image/svg+xml");return n(bt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:N,xml:bt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(x,v,m,b){let g=x.x,_=v.x,w=m.x,M=b.x,E=x.y,T=v.y,y=m.y,S=b.y,A=(M-w)*(E-y)-(S-y)*(g-w),N=(_-g)*(E-y)-(T-E)*(g-w),z=(S-y)*(_-g)-(M-w)*(T-E),H=A/z,G=N/z;if(z===0&&A!==0||H<=0||H>=1||G<0||G>1)return null;if(A===0&&z===0){for(let B=0;B<2;B++)if(o(B===0?m:b,x,v),i.loc==n.ORIGIN){let W=B===0?m:b;return{x:W.x,y:W.y,t:i.t}}else if(i.loc==n.BETWEEN){let W=+(g+i.t*(_-g)).toPrecision(10),V=+(E+i.t*(T-E)).toPrecision(10);return{x:W,y:V,t:i.t}}return null}else{for(let V=0;V<2;V++)if(o(V===0?m:b,x,v),i.loc==n.ORIGIN){let lt=V===0?m:b;return{x:lt.x,y:lt.y,t:i.t}}let B=+(g+H*(_-g)).toPrecision(10),W=+(E+H*(T-E)).toPrecision(10);return{x:B,y:W,t:H}}}function o(x,v,m){let b=m.x-v.x,g=m.y-v.y,_=x.x-v.x,w=x.y-v.y,M=b*w-_*g;if(x.x===v.x&&x.y===v.y){i.loc=n.ORIGIN,i.t=0;return}if(x.x===m.x&&x.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(M<-Number.EPSILON){i.loc=n.LEFT;return}if(M>Number.EPSILON){i.loc=n.RIGHT;return}if(b*_<0||g*w<0){i.loc=n.BEHIND;return}if(Math.sqrt(b*b+g*g)<Math.sqrt(_*_+w*w)){i.loc=n.BEYOND;return}let E;b!==0?E=_/b:E=w/g,i.loc=n.BETWEEN,i.t=E}function a(x,v){let m=[],b=[];for(let g=1;g<x.length;g++){let _=x[g-1],w=x[g];for(let M=1;M<v.length;M++){let E=v[M-1],T=v[M],y=r(_,w,E,T);y!==null&&m.find(S=>S.t<=y.t+Number.EPSILON&&S.t>=y.t-Number.EPSILON)===void 0&&(m.push(y),b.push(new at(y.x,y.y)))}}return b}function l(x,v,m){let b=new at;v.getCenter(b);let g=[];return m.forEach(_=>{_.boundingBox.containsPoint(b)&&a(x,_.points).forEach(M=>{g.push({identifier:_.identifier,isCW:_.isCW,point:M})})}),g.sort((_,w)=>_.point.x-w.point.x),g}function h(x,v,m,b,g){(g==null||g==="")&&(g="nonzero");let _=new at;x.boundingBox.getCenter(_);let w=[new at(m,_.y),new at(b,_.y)],M=l(w,x.boundingBox,v);M.sort((N,z)=>N.point.x-z.point.x);let E=[],T=[];M.forEach(N=>{N.identifier===x.identifier?E.push(N):T.push(N)});let y=E[0].point.x,S=[],A=0;for(;A<T.length&&T[A].point.x<y;)S.length>0&&S[S.length-1]===T[A].identifier?S.pop():S.push(T[A].identifier),A++;if(S.push(x.identifier),g==="evenodd"){let N=S.length%2===0,z=S[S.length-2];return{identifier:x.identifier,isHole:N,for:z}}else if(g==="nonzero"){let N=!0,z=null,H=null;for(let G=0;G<S.length;G++){let B=S[G];N?(H=v[B].isCW,N=!1,z=B):H!==v[B].isCW&&(H=v[B].isCW,N=!0)}return{identifier:x.identifier,isHole:N,for:z}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let u=999999999,c=-999999999,d=t.subPaths.map(x=>{let v=x.getPoints(),m=-999999999,b=999999999,g=-999999999,_=999999999;for(let w=0;w<v.length;w++){let M=v[w];M.y>m&&(m=M.y),M.y<b&&(b=M.y),M.x>g&&(g=M.x),M.x<_&&(_=M.x)}return c<=g&&(c=g+1),u>=_&&(u=_-1),{curves:x.curves,points:v,isCW:dn.isClockWise(v),identifier:-1,boundingBox:new $s(new at(_,b),new at(g,m))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;let f=d.map(x=>h(x,d,u,c,t.userData?t.userData.style.fillRule:void 0)),p=[];return d.forEach(x=>{if(!f[x.identifier].isHole){let m=new Cn;m.curves=x.curves,f.filter(g=>g.isHole&&g.for===x.identifier).forEach(g=>{let _=d[g.identifier],w=new pn;w.curves=_.curves,m.holes.push(w)}),p.push(m)}}),p}static getStrokeStyle(t,e,n,i,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(t,e,n,i){let r=[],o=[],a=[];if(s.pointsToStrokeWithBuffers(t,e,n,i,r,o,a)===0)return null;let l=new Ge;return l.setAttribute("position",new pe(r,3)),l.setAttribute("normal",new pe(o,3)),l.setAttribute("uv",new pe(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,r,o,a,l){let h=new at,u=new at,c=new at,d=new at,f=new at,p=new at,x=new at,v=new at,m=new at,b=new at,g=new at,_=new at,w=new at,M=new at,E=new at,T=new at,y=new at;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=dt(t);let S=t.length;if(S<2)return 0;let A=t[0].equals(t[S-1]),N,z=t[0],H,G=e.strokeWidth/2,B=1/(S-1),W=0,V,lt,st,mt,bt=!1,St=0,D=l*3,O=l*2;I(t[0],t[1],h).multiplyScalar(G),v.copy(t[0]).sub(h),m.copy(t[0]).add(h),b.copy(v),g.copy(m);for(let R=1;R<S;R++){N=t[R],R===S-1?A?H=t[1]:H=void 0:H=t[R+1];let j=h;if(I(z,N,j),c.copy(j).multiplyScalar(G),_.copy(N).sub(c),w.copy(N).add(c),V=W+B,lt=!1,H!==void 0){I(N,H,u),c.copy(u).multiplyScalar(G),M.copy(N).sub(c),E.copy(N).add(c),st=!0,c.subVectors(H,z),j.dot(c)<0&&(st=!1),R===1&&(bt=st),c.subVectors(H,N),c.normalize();let Q=Math.abs(j.dot(c));if(Q>Number.EPSILON){let et=G/Q;c.multiplyScalar(-et),d.subVectors(N,z),f.copy(d).setLength(et).add(c),T.copy(f).negate();let k=f.length(),U=d.length();d.divideScalar(U),p.subVectors(H,N);let tt=p.length();switch(p.divideScalar(tt),d.dot(T)<U&&p.dot(T)<tt&&(lt=!0),y.copy(f).add(N),T.add(N),mt=!1,lt?st?(E.copy(T),w.copy(T)):(M.copy(T),_.copy(T)):ct(),e.strokeLineJoin){case"bevel":q(st,lt,V);break;case"round":gt(st,lt),st?$(N,_,M,V,0):$(N,E,w,V,1);break;case"miter":case"miter-clip":default:let pt=G*e.strokeMiterLimit/k;if(pt<1)if(e.strokeLineJoin!=="miter-clip"){q(st,lt,V);break}else gt(st,lt),st?(p.subVectors(y,_).multiplyScalar(pt).add(_),x.subVectors(y,M).multiplyScalar(pt).add(M),P(_,V,0),P(p,V,0),P(N,V,.5),P(N,V,.5),P(p,V,0),P(x,V,0),P(N,V,.5),P(x,V,0),P(M,V,0)):(p.subVectors(y,w).multiplyScalar(pt).add(w),x.subVectors(y,E).multiplyScalar(pt).add(E),P(w,V,1),P(p,V,1),P(N,V,.5),P(N,V,.5),P(p,V,1),P(x,V,1),P(N,V,.5),P(x,V,1),P(E,V,1));else lt?(st?(P(m,W,1),P(v,W,0),P(y,V,0),P(m,W,1),P(y,V,0),P(T,V,1)):(P(m,W,1),P(v,W,0),P(y,V,1),P(v,W,0),P(T,V,0),P(y,V,1)),st?M.copy(y):E.copy(y)):st?(P(_,V,0),P(y,V,0),P(N,V,.5),P(N,V,.5),P(y,V,0),P(M,V,0)):(P(w,V,1),P(y,V,1),P(N,V,.5),P(N,V,.5),P(y,V,1),P(E,V,1)),mt=!0;break}}else ct()}else ct();!A&&R===S-1&&vt(t[0],b,g,st,!0,W),W=V,z=N,v.copy(M),m.copy(E)}if(!A)vt(N,_,w,st,!1,V);else if(lt&&r){let R=y,j=T;bt!==st&&(R=T,j=y),st?(mt||bt)&&(j.toArray(r,0*3),j.toArray(r,3*3),mt&&R.toArray(r,1*3)):(mt||!bt)&&(j.toArray(r,1*3),j.toArray(r,3*3),mt&&R.toArray(r,0*3))}return St;function I(R,j,Q){return Q.subVectors(j,R),Q.set(-Q.y,Q.x).normalize()}function P(R,j,Q){r&&(r[D]=R.x,r[D+1]=R.y,r[D+2]=0,o&&(o[D]=0,o[D+1]=0,o[D+2]=1),D+=3,a&&(a[O]=j,a[O+1]=Q,O+=2)),St+=3}function $(R,j,Q,et,k){h.copy(j).sub(R).normalize(),u.copy(Q).sub(R).normalize();let U=Math.PI,tt=h.dot(u);Math.abs(tt)<1&&(U=Math.abs(Math.acos(tt))),U/=n,c.copy(j);for(let pt=0,Ft=n-1;pt<Ft;pt++)d.copy(c).rotateAround(R,U),P(c,et,k),P(d,et,k),P(R,et,.5),c.copy(d);P(d,et,k),P(Q,et,k),P(R,et,.5)}function ct(){P(m,W,1),P(v,W,0),P(_,V,0),P(m,W,1),P(_,V,0),P(w,V,1)}function q(R,j,Q){j?R?(P(m,W,1),P(v,W,0),P(_,V,0),P(m,W,1),P(_,V,0),P(T,V,1),P(_,Q,0),P(M,Q,0),P(T,Q,.5)):(P(m,W,1),P(v,W,0),P(w,V,1),P(v,W,0),P(T,V,0),P(w,V,1),P(w,Q,1),P(T,Q,0),P(E,Q,1)):R?(P(_,Q,0),P(M,Q,0),P(N,Q,.5)):(P(w,Q,1),P(E,Q,0),P(N,Q,.5))}function gt(R,j){j&&(R?(P(m,W,1),P(v,W,0),P(_,V,0),P(m,W,1),P(_,V,0),P(T,V,1),P(_,W,0),P(N,V,.5),P(T,V,1),P(N,V,.5),P(M,W,0),P(T,V,1)):(P(m,W,1),P(v,W,0),P(w,V,1),P(v,W,0),P(T,V,0),P(w,V,1),P(w,W,1),P(T,V,0),P(N,V,.5),P(N,V,.5),P(T,V,0),P(E,W,1)))}function vt(R,j,Q,et,k,U){switch(e.strokeLineCap){case"round":k?$(R,Q,j,U,.5):$(R,j,Q,U,.5);break;case"square":if(k)h.subVectors(j,R),u.set(h.y,-h.x),c.addVectors(h,u).add(R),d.subVectors(u,h).add(R),et?(c.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(c.toArray(r,1*3),a[3*2+1]===1?d.toArray(r,3*3):c.toArray(r,3*3),d.toArray(r,0*3));else{h.subVectors(Q,R),u.set(h.y,-h.x),c.addVectors(h,u).add(R),d.subVectors(u,h).add(R);let tt=r.length;et?(c.toArray(r,tt-1*3),d.toArray(r,tt-2*3),d.toArray(r,tt-4*3)):(d.toArray(r,tt-2*3),c.toArray(r,tt-1*3),d.toArray(r,tt-4*3))}break;case"butt":default:break}}function dt(R){let j=!1;for(let et=1,k=R.length-1;et<k;et++)if(R[et].distanceTo(R[et+1])<i){j=!0;break}if(!j)return R;let Q=[];Q.push(R[0]);for(let et=1,k=R.length-1;et<k;et++)R[et].distanceTo(R[et+1])>=i&&Q.push(R[et]);return Q.push(R[R.length-1]),Q}}};var ss={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tv=new Zi(-1,1,1,-1,0,1),Zl=class extends Ge{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}},ev=new Zl,rs=class{constructor(t){this._mesh=new Ae(ev,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var os=class extends ln{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new rs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ar=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},ua=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var da=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new Te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Me}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new os(ss),this.copyPass.material.blending=an,this.clock=new qs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ar!==void 0&&(o instanceof ar?n=!0:o instanceof ua&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fa=class extends ln{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new zt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var au={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var as=class s extends ln{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Te(r,o,{type:Me}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let c=new Te(r,o,{type:Me});c.texture.name="UnrealBloomPass.h"+u,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);let d=new Te(r,o,{type:Me});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=au;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(ss.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:ss.vertexShader,fragmentShader:ss.fragmentShader,blending:Js,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new zt,this._oldClearAlpha=1,this._basic=new ci,this._fsQuad=new rs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};as.BlurDirectionX=new at(1,0);as.BlurDirectionY=new at(0,1);var pa=!1;window.addEventListener(ur,()=>{let s=new Rs;s.background=new zt(0);let t=new Ee(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=5;let e=new at,n=new at(0,0),i=new at(0,0),r=.7,o=.05,a={active:!0,rotationFactor:1,mouseTrackingFactor:.3},l=0;function h(B){e.x=B.clientX/window.innerWidth*2-1,e.y=-(B.clientY/window.innerHeight*2-1),n.x=-e.y*r,n.y=e.x*r}window.addEventListener("mousemove",h,!1);let u=new oa({antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio),u.toneMapping=So,u.toneMappingExposure=1,document.getElementById("three-container").appendChild(u.domElement);let c=new ca(t,u.domElement);c.enableDamping=!0,c.enableZoom=!1,c.enablePan=!1;let d=new Ys(11184810,0,.3);s.add(d);let f;pa&&(f=new dr);let p={uniforms:{tDiffuse:{value:null},overlayColor:{value:new zt(1,0,0)},intensity:{value:1},blendMode:{value:1}},vertexShader:`
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec3 overlayColor;
        uniform float intensity;
        uniform int blendMode;
        
        varying vec2 vUv;
        
        vec3 multiply(vec3 base, vec3 overlay) {
            return base * overlay;
        }
        
        vec3 overlay(vec3 base, vec3 overlay) {
            return mix(
                2.0 * base * overlay,
                1.0 - 2.0 * (1.0 - base) * (1.0 - overlay),
                step(0.5, base)
            );
        }
        
        vec3 screen(vec3 base, vec3 overlay) {
            return 1.0 - (1.0 - base) * (1.0 - overlay);
        }
        
        void main() {
            vec4 texel = texture2D(tDiffuse, vUv);
            vec3 color = texel.rgb;
            
            vec3 blended;
            if (blendMode == 0) {
                blended = multiply(color, overlayColor);
            } else if (blendMode == 1) {
                blended = overlay(color, overlayColor);
            } else {
                blended = screen(color, overlayColor);
            }
            
            // Mix original and blended based on intensity
            vec3 result = mix(color, blended, intensity);
            
            gl_FragColor = vec4(result, texel.a);
        }
    `},x={roughness:.01,envMapIntensity:.7},v={rotationY:0};if(pa&&f){let B=f.addFolder("Environment");B.add(v,"rotationY",0,360,15).name("Rotate Y (degrees)").onChange(G),B.add(x,"envMapIntensity",0,5).name("Env Intensity").onChange(V=>{w&&w.material&&(w.material.envMapIntensity=V,w.material.needsUpdate=!0)}),f.addFolder("Material").add(x,"roughness",0,1).onChange(V=>{w&&w.material&&(w.material.roughness=V)})}let m=new fa(s,t),b=new as(new at(window.innerWidth,window.innerHeight),1.5,.4,.85);b.threshold=.4,b.strength=1.3,b.radius=1;let g=new os(p),_=new da(u);if(_.addPass(m),_.addPass(b),_.addPass(g),pa&&f){let B=f.addFolder("Bloom"),W={threshold:b.threshold,strength:b.strength,radius:b.radius};B.add(W,"threshold",0,1).onChange(st=>{b.threshold=st}),B.add(W,"strength",0,3).onChange(st=>{b.strength=st}),B.add(W,"radius",0,1).onChange(st=>{b.radius=st});let V=f.addFolder("Color Overlay"),lt={intensity:1,color:{r:1,g:0,b:.17},blendMode:1};V.add(lt,"intensity",0,1).onChange(st=>{g.uniforms.intensity.value=st}),V.addColor(lt,"color").onChange(st=>{g.uniforms.overlayColor.value.setRGB(st.r,st.g,st.b)}),V.add(lt,"blendMode",{Multiply:0,Overlay:1,Screen:2}).onChange(st=>{g.uniforms.blendMode.value=parseInt(st)})}let w;function M(){let B=document.createElement("canvas");B.width=256,B.height=256;let W=B.getContext("2d"),V=W.createRadialGradient(128,128,0,128,128,128);V.addColorStop(0,"#ffffff"),V.addColorStop(.4,"#ff3454"),V.addColorStop(1,"#330000"),W.fillStyle=V,W.fillRect(0,0,256,256);let lt=new Is(B);return lt.mapping=Jn,lt}let E=new ha,T=new Xs,y=null,S;S=M(),E.load("https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr",B=>{B.mapping=Jn,y=B,s.environment=B,A()},void 0,B=>{console.error("HDR Load Error:",B),y=new ye,A()}),T.load("https://cdn.prod.website-files.com/66260e4321c76d6302aa74e5/6888330ec0c777db9ab94299_matcap4.png",B=>{B.mapping=Jn,w&&w.material?(w.material.envMap=B,w.material.needsUpdate=!0):S=B},void 0,B=>{console.error("matcap load error:",B)});function A(){let B=`<svg width="47" height="164" viewBox="0 0 47 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.82956 0.839229C3.57839 0.328028 2.80464 0.567309 2.88591 1.13105L13.678 75.9958C13.7214 76.2972 13.4876 76.5671 13.1831 76.5671H1.06043C0.690294 76.5671 0.448468 76.9553 0.611639 77.2875L42.6881 162.959C42.9394 163.47 43.7137 163.23 43.6317 162.666L32.7564 87.9406C32.7125 87.639 32.9464 87.3686 33.2512 87.3686H45.5414C45.9115 87.3686 46.1534 86.9803 45.9901 86.6481L3.82956 0.839229Z" fill="white"/>
</svg>`;try{let lt=new or().parse(B).paths[0],mt=or.createShapes(lt)[0],bt={steps:2,depth:10,bevelEnabled:!0,bevelThickness:4,bevelSize:2,bevelOffset:0,bevelSegments:16},St=new zs(mt,bt);St.center();let D=.02;St.scale(D,-D,D),St.rotateX(Math.PI);let O=new Hs({roughness:x.roughness,transparent:!0,envMap:S,envMapIntensity:x.envMapIntensity,side:je});w=new Ae(St,O),s.add(w),z(),H()}catch(W){console.error("Error building the scene:",W)}}window.addEventListener("resize",N,!1);function N(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),_.setSize(window.innerWidth,window.innerHeight)}function z(){a.active&&window.gsap.to({rotation:0},{rotation:Math.PI*2*a.rotationFactor,ease:"none",scrollTrigger:{trigger:"#scroll-container",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:B=>{l=Math.PI*2*a.rotationFactor*B.progress}}})}function H(){if(requestAnimationFrame(H),w){i.x+=(n.x-i.x)*o,i.y+=(n.y-i.y)*o;let B=i.x*(a.active?a.mouseTrackingFactor:1),W=i.y*(a.active?a.mouseTrackingFactor:1)+l;w.rotation.set(B,W,0)}c.update();try{_.render(),window.hasRendered||(window.hasRendered=!0)}catch(B){console.error("Error in render:",B)}}function G(){let B=sr.degToRad(v.rotationY);s.environment&&s.environment.isTexture&&(s.environment.needsUpdate=!0,w&&w.material&&w.material.envMap&&(w.material.envMap.needsUpdate=!0,w.material.needsUpdate=!0))}if(pa&&f){let B=f.addFolder("Scroll Control");B.add(a,"active").name("Scroll Rotation Active").onChange(()=>{window.ScrollTrigger.refresh()}),B.add(a,"rotationFactor",0,5).name("Rotations per Scroll").onChange(()=>{window.ScrollTrigger.refresh()}),B.add(a,"mouseTrackingFactor",0,1).name("Mouse Effect During Scroll")}});function Jl(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function lu(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Kl(s,t,e){return t&&lu(s.prototype,t),e&&lu(s,e),s}function cu(s){return+s.replace(/px/,"")}function nv(s){var t=window.devicePixelRatio,e=getComputedStyle(s),n=cu(e.getPropertyValue("width")),i=cu(e.getPropertyValue("height"));s.setAttribute("width",(n*t).toString()),s.setAttribute("height",(i*t).toString())}function cn(s,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=Math.random()*(t-s)+s;return Math.floor(n*Math.pow(10,e))/Math.pow(10,e)}function hu(s){return s[cn(0,s.length)]}var iv=.00125,sv=5e-4,rv=9e-4,ov=1e-5,av=6,lv=80,cv=.9,hv=1.7,uv=.2,dv=.6,fv=.03,pv=.07,uu=15,du=82,mv=150,gv=100,vv=250,xv=40,_v=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function fu(s){var t=1920;return Math.log(s)/Math.log(t)}var pu=function(){function s(t){Jl(this,s);var e=t.initialPosition,n=t.direction,i=t.confettiRadius,r=t.confettiColors,o=t.emojis,a=t.emojiSize,l=t.canvasWidth,h=cn(cv,hv,3),u=h*fu(l);this.confettiSpeed={x:u,y:u},this.finalConfettiSpeedX=cn(uv,dv,3),this.rotationSpeed=o.length?.01:cn(fv,pv,3)*fu(l),this.dragForceCoefficient=cn(sv,rv,6),this.radius={x:i,y:i},this.initialRadius=i,this.rotationAngle=n==="left"?cn(0,.2,3):cn(-.2,0,3),this.emojiSize=a,this.emojiRotationAngle=cn(0,2*Math.PI),this.radiusYUpdateDirection="down";var c=n==="left"?cn(du,uu)*Math.PI/180:cn(-uu,-du)*Math.PI/180;this.absCos=Math.abs(Math.cos(c)),this.absSin=Math.abs(Math.sin(c));var d=cn(-mv,0),f={x:e.x+(n==="left"?-d:d)*this.absCos,y:e.y-d*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=o.length?null:hu(r),this.emoji=o.length?hu(o):null,this.createdAt=new Date().getTime(),this.direction=n}return Kl(s,[{key:"draw",value:function(e){var n=this.currentPosition,i=this.radius,r=this.color,o=this.emoji,a=this.rotationAngle,l=this.emojiRotationAngle,h=this.emojiSize,u=window.devicePixelRatio;r?(e.fillStyle=r,e.beginPath(),e.ellipse(n.x*u,n.y*u,i.x*u,i.y*u,a,0,2*Math.PI),e.fill()):o&&(e.font="".concat(h,"px serif"),e.save(),e.translate(u*n.x,u*n.y),e.rotate(l),e.textAlign="center",e.fillText(o,0,0),e.restore())}},{key:"updatePosition",value:function(e,n){var i=this.confettiSpeed,r=this.dragForceCoefficient,o=this.finalConfettiSpeedX,a=this.radiusYUpdateDirection,l=this.rotationSpeed,h=this.createdAt,u=this.direction,c=n-h;if(i.x>o&&(this.confettiSpeed.x-=r*e),this.currentPosition.x+=i.x*(u==="left"?-this.absCos:this.absCos)*e,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*c+iv*Math.pow(c,2)/2,this.rotationSpeed-=this.emoji?1e-4:ov*e,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*e%(2*Math.PI);return}a==="down"?(this.radius.y-=e*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=e*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(e){return this.currentPosition.y<e+gv}}]),s}();function yv(){var s=document.createElement("canvas");return s.style.position="fixed",s.style.width="100%",s.style.height="100%",s.style.top="0",s.style.left="0",s.style.zIndex="1000",s.style.pointerEvents="none",document.body.appendChild(s),s}function Sv(s){var t=s.confettiRadius,e=t===void 0?av:t,n=s.confettiNumber,i=n===void 0?s.confettiesNumber||(s.emojis?xv:vv):n,r=s.confettiColors,o=r===void 0?_v:r,a=s.emojis,l=a===void 0?s.emojies||[]:a,h=s.emojiSize,u=h===void 0?lv:h;return s.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),s.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:e,confettiNumber:i,confettiColors:o,emojis:l,emojiSize:u}}var Mv=function(){function s(t){var e=this;Jl(this,s),this.canvasContext=t,this.shapes=[],this.promise=new Promise(function(n){return e.resolvePromise=n})}return Kl(s,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var e;(e=this.shapes).push.apply(e,arguments)}},{key:"complete",value:function(){var e;return this.shapes.length?!1:((e=this.resolvePromise)===null||e===void 0||e.call(this),!0)}},{key:"processShapes",value:function(e,n,i){var r=this,o=e.timeDelta,a=e.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(o,a),l.draw(r.canvasContext),i?l.getIsVisibleOnCanvas(n):!0})}}]),s}(),bv=function(){function s(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Jl(this,s),this.activeConfettiBatches=[],this.canvas=t.canvas||yv(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return Kl(s,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,nv(this.canvas);var e=new Date().getTime(),n=e-this.lastUpdated,i=this.canvas.offsetHeight,r=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(o){return o.processShapes({timeDelta:n,currentTime:e},i,r),r?!o.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(e)}},{key:"queueAnimationFrameIfNeeded",value:function(e){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=e||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Sv(e),i=n.confettiRadius,r=n.confettiNumber,o=n.confettiColors,a=n.emojis,l=n.emojiSize,h=this.canvas.getBoundingClientRect(),u=h.width,c=h.height,d=c*5/7,f={x:0,y:d},p={x:u,y:d},x=new Mv(this.canvasContext),v=0;v<r/2;v++){var m=new pu({initialPosition:f,direction:"right",confettiRadius:i,confettiColors:o,confettiNumber:r,emojis:a,emojiSize:l,canvasWidth:u}),b=new pu({initialPosition:p,direction:"left",confettiRadius:i,confettiColors:o,confettiNumber:r,emojis:a,emojiSize:l,canvasWidth:u});x.addShapes(m,b)}return this.activeConfettiBatches.push(x),this.queueAnimationFrameIfNeeded(),x.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),s}(),jl=bv;function mu(s){let t=typeof s=="string"?document.querySelector(s):s;if(!t)return console.error("Confetti canvas not found:",s),null;let e=null,n=!1,i=()=>{if(!e)try{console.log("Initializing JSConfetti on demand for canvas:",t),e=new jl({canvas:t})}catch(l){console.error("Error initializing JSConfetti",{error:l},{canvasEl:t});return}e.addConfetti({emojis:["\u{1F60E}","\u26A1\uFE0F","\u{1F389}","\u{1F308}","\u{1F440}","\u{1F984}"],emojiSize:100,confettiNumber:50})},r=()=>{if(!e)try{console.log("Initializing JSConfetti proactively for canvas:",t),e=new jl({canvas:t})}catch(l){console.error("Error initializing JSConfetti",{error:l},{canvasEl:t});return}n?console.log("Confetti listener already active."):(console.log("Activating confetti click listener."),t.addEventListener("click",i),n=!0)},o=()=>{n?(console.log("Deactivating confetti click listener."),t.removeEventListener("click",i),n=!1):console.log("Confetti listener already inactive.")};return{activate:r,deactivate:o,destroy:()=>{console.log("Destroying confetti controller."),o(),e=null}}}var ie=Uu(gu(),1);var ma=class{constructor(t=!0){this.autoStart=t;$e(this,"canvas",null);$e(this,"engine",null);$e(this,"render",null);$e(this,"runner",null);$e(this,"mouseCollider",null);$e(this,"ground",null);$e(this,"isInitialized",!1);$e(this,"observer",null);$e(this,"rainTimeout",null);$e(this,"config",{objectSizeHeightBased:window.innerHeight*.1,objectSizeWidthBased:window.innerWidth*.08,colliderScale:.8,rainDuration:1e4,rainIntervalMin:50,rainIntervalMax:300,wallMargin:100,mouseColliderSize:40});$e(this,"textures",["https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc22ca6be309b888b1c855_cash.png","https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e70406bb29f57b2e82d_sales.png","https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e5b406bb29f57b2daea_moneybag.png"]);if(this.canvas=document.querySelector("#matter-canvas-target"),!this.canvas){console.warn("Matter canvas not found for emoji rain");return}this.updateWallMargin(),this.setupIntersectionObserver()}updateWallMargin(){let t=this.config.objectSizeWidthBased*this.config.colliderScale;this.config.wallMargin=Math.max(t,window.innerWidth*.05)}setupIntersectionObserver(){this.canvas&&(this.observer=new IntersectionObserver(t=>{t.forEach(e=>{var n;e.isIntersecting&&!this.isInitialized&&(this.initialize(),(n=this.observer)==null||n.disconnect())})},{threshold:.1}),this.observer.observe(this.canvas))}initialize(){this.canvas&&(this.engine=ie.default.Engine.create(),this.render=ie.default.Render.create({canvas:this.canvas,engine:this.engine,options:{background:"transparent",wireframes:!1,width:window.innerWidth,height:window.innerHeight}}),this.initializeComponents(),this.isInitialized=!0,this.autoStart&&this.startRain())}initializeComponents(){this.updateConfiguration(),this.createBoundaries(),this.setupMouseInteraction(),this.setupResizeHandler(),!(!this.engine||!this.render)&&(this.runner||(this.runner=ie.default.Runner.create()),ie.default.Runner.run(this.runner,this.engine),ie.default.Render.run(this.render))}createBoundaries(){if(!this.engine)return;let t=ie.default.Bodies.rectangle(window.innerWidth/2,window.innerHeight,window.innerWidth,60,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}}),e=ie.default.Bodies.rectangle(this.config.wallMargin/2,window.innerHeight/2,60,window.innerHeight,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}}),n=ie.default.Bodies.rectangle(window.innerWidth-this.config.wallMargin/2,window.innerHeight/2,60,window.innerHeight,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}});ie.default.Composite.add(this.engine.world,[t,e,n]),this.ground=t}setupMouseInteraction(){if(!this.canvas||!this.engine)return;this.mouseCollider=ie.default.Bodies.circle(0,0,this.config.mouseColliderSize,{isStatic:!0,friction:.1,restitution:.6,render:{fillStyle:"rgba(255, 0, 0, 0)",visible:!0}}),ie.default.Composite.add(this.engine.world,this.mouseCollider);let t=e=>{if(!this.canvas||!this.mouseCollider)return;let n=this.canvas.getBoundingClientRect(),i=this.canvas.width/n.width,r=this.canvas.height/n.height,o=(e.clientX-n.left)*i,a=(e.clientY-n.top)*r;ie.default.Body.setPosition(this.mouseCollider,{x:o,y:a})};document.addEventListener("mousemove",t),document.addEventListener("mouseleave",()=>{this.mouseCollider&&ie.default.Body.setPosition(this.mouseCollider,{x:-100,y:-100})})}setupResizeHandler(){if(!this.render||!this.engine)return;let t=()=>{!this.render||!this.engine||(this.render.canvas.width=window.innerWidth,this.render.canvas.height=window.innerHeight,this.updateConfiguration(),this.reinitializeComponents(),this.restartRainEffect())};window.addEventListener("resize",t)}updateConfiguration(){this.config.objectSizeHeightBased=window.innerHeight*.1,this.config.objectSizeWidthBased=window.innerWidth*.08,this.updateWallMargin()}reinitializeComponents(){this.engine&&(ie.default.World.clear(this.engine.world,!1),this.createBoundaries(),this.setupMouseInteraction())}restartRainEffect(){this.rainTimeout&&(window.clearTimeout(this.rainTimeout),this.rainTimeout=null),this.startRain()}calculateMaxEmojis(){let t=this.config.objectSizeWidthBased*this.config.colliderScale,e=2,n=Math.floor(window.innerWidth/t);return e*n}createObject(){if(!this.engine)return;let t=this.engine.world.bodies.length,e=this.calculateMaxEmojis();if(t>=e)return;let n=this.config.wallMargin+Math.random()*(window.innerWidth-2*this.config.wallMargin),i=this.textures[Math.floor(Math.random()*this.textures.length)],r=ie.default.Bodies.circle(n,-100,this.config.objectSizeWidthBased/2*this.config.colliderScale,{restitution:.6,friction:.1,render:{sprite:{texture:i,xScale:this.config.objectSizeWidthBased/100,yScale:this.config.objectSizeWidthBased/100}}});ie.default.Composite.add(this.engine.world,r)}recreateFloor(){this.engine&&!this.ground?(this.ground=ie.default.Bodies.rectangle(window.innerWidth/2,window.innerHeight,window.innerWidth,60,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}}),ie.default.Composite.add(this.engine.world,this.ground),console.log("Matter.js floor recreated.")):this.ground?console.log("Floor already exists, not recreating."):console.warn("Could not recreate floor: Engine missing.")}startRain(){if(console.log("Attempting to start rain..."),this.rainTimeout&&(console.log("Clearing existing rain timeout:",this.rainTimeout),window.clearTimeout(this.rainTimeout),this.rainTimeout=null),!this.isInitialized||!this.engine){console.warn("Cannot start rain: Not initialized or engine missing.",{isInitialized:this.isInitialized,engineExists:!!this.engine});return}console.log("Starting emoji rain loop.");let t=Date.now()+this.config.rainDuration;console.log(`Rain end time calculated: ${new Date(t).toLocaleTimeString()}`);let e=()=>{if(Date.now()>t){console.log("Rain loop check: Time has ended.");return}console.log("Rain loop check: Time OK, creating object."),this.createObject();let n=Math.random()*(this.config.rainIntervalMax-this.config.rainIntervalMin)+this.config.rainIntervalMin;this.rainTimeout=window.setTimeout(e,n)};e()}stopRain(){this.rainTimeout&&(window.clearTimeout(this.rainTimeout),this.rainTimeout=null,console.log("Emoji rain stopped."))}removeFloor(){var t;this.engine&&this.ground?(console.log("Attempting to remove floor. Runner enabled:",(t=this.runner)==null?void 0:t.enabled),ie.default.Composite.remove(this.engine.world,this.ground),this.ground=null,console.log("Matter.js floor removed."),ie.default.Composite.allBodies(this.engine.world).forEach(n=>{n.isStatic||ie.default.Sleeping.set(n,!1)}),console.log("Woke up all non-static bodies.")):console.warn("Could not remove floor: Engine or ground body missing.")}clearDynamicBodies(){if(this.engine){let e=ie.default.Composite.allBodies(this.engine.world).filter(n=>!n.isStatic);e.length>0&&(ie.default.Composite.remove(this.engine.world,e),console.log(`Cleared ${e.length} dynamic bodies.`))}else console.warn("Could not clear dynamic bodies: Engine missing.")}destroy(){this.observer&&(this.observer.disconnect(),this.observer=null),this.rainTimeout&&(window.clearTimeout(this.rainTimeout),this.rainTimeout=null),this.engine&&(ie.default.Engine.clear(this.engine),this.engine=null),this.render&&(ie.default.Render.stop(this.render),this.render=null),this.runner&&(ie.default.Runner.stop(this.runner),this.runner=null),this.isInitialized=!1}};gsap.registerPlugin(ScrollTrigger);function vu(){let s=new ma(!1),t=mu("#canvas-target"),e=document.querySelector(".delight_section-wrapper"),n=document.querySelector(".delight_sticky-wrapper");if(!e||!n)return console.error("Required wrapper elements (.delight_section-wrapper, .delight_sticky-wrapper) not found."),()=>{};let i=gsap.utils.toArray(":scope > .section_delight_new",n);if(i.length<3)return console.error("Expected at least 3 direct children .section_delight_new elements inside .delight_sticky-wrapper. Found:",i.length),()=>{};let r=window.innerHeight,o=i.length*r;console.log(`Delight Setup: scrollPerSection: ${r}, totalScrollDurationForPin: ${o}`),e&&(console.log(`Delight Setup: sectionWrapper.offsetTop (initial): ${e.offsetTop}`),console.log(`Delight Setup: sectionWrapper.scrollHeight (initial): ${e.scrollHeight}`)),n&&console.log(`Delight Setup: stickyWrapper.offsetHeight (initial): ${n.offsetHeight}`);let a=new AbortController,l=[],h=[],u=i[0],c=i[1],d=i[2],f=n.querySelector("#cursor-delight.cursor-content"),p=f==null?void 0:f.querySelector(".cursor-image"),x=f==null?void 0:f.querySelector(".cursor_content-wrap"),v=n.querySelector("#cursor-edit.cursor-content"),m=v==null?void 0:v.querySelector(".cursor-image"),b=v==null?void 0:v.querySelector(".cursor_content-wrap"),g=P=>{let $=P.clientX,ct=P.clientY;f&&gsap.to(f,{x:$,y:ct,duration:.3,ease:"power1.out",overwrite:"auto"}),v&&gsap.to(v,{x:$,y:ct,duration:.3,ease:"power1.out",overwrite:"auto"})};document.body.addEventListener("mousemove",g,{signal:a.signal});let _=c.querySelector(".delight_tap-prompt");e.setAttribute("data-active-section","leads"),p&&gsap.set(p,{scale:0,rotationZ:-50,transformOrigin:"center center"}),x&&gsap.set(x,{scale:0}),m&&gsap.set(m,{scale:0,rotationZ:-50,transformOrigin:"center center"}),b&&gsap.set(b,{scale:0}),_&&gsap.set(_,{scale:0,rotation:30,transformOrigin:"center center"});let w=window.innerWidth/2,M=window.innerHeight/2;f&&gsap.set(f,{x:w,y:M}),v&&gsap.set(v,{x:w,y:M});let E=.6,T=.03,y=.5,S=.05,A="expo.inOut",N=0,z=.1,H=.3,G=.4,B=z+y,W=.4,V=gsap.timeline({paused:!0,defaults:{ease:A}}),lt=u.querySelector(".heading-style-h1");if(lt){let P=new SplitText(lt,{type:"words,chars",tag:"span"});gsap.set(P.words,{overflow:"hidden",display:"inline-block"}),gsap.set(P.chars,{display:"inline-block"}),h.push(P),V.to(P.chars,{yPercent:-100,stagger:T,duration:E},N)}let st=u.querySelectorAll(".text-style-subtitle, .text-size-large");st.length>0&&V.to(st,{scale:0,opacity:0,stagger:S,duration:y},z),t&&V.call(t.activate,[],G+y-.1);let mt=c.querySelector(".heading-style-h1");if(mt){let P=new SplitText(mt,{type:"words,chars",tag:"span"});gsap.set(P.words,{overflow:"hidden",display:"inline-block"}),gsap.set(P.chars,{display:"inline-block",yPercent:100}),h.push(P),V.to(P.chars,{yPercent:0,stagger:T,duration:E},H)}let bt=c.querySelectorAll(".text-style-subtitle, .text-size-large");bt.length>0&&(gsap.set(bt,{scale:2,opacity:0}),V.to(bt,{scale:1,opacity:1,stagger:S,duration:y},G)),_&&V.to(_,{scale:1,rotation:0,duration:y},G),p&&V.fromTo(p,{scale:0,rotationZ:-50},{scale:1,rotationZ:0,duration:y},G),x&&V.to(x,{scale:1,duration:y},G);let St=gsap.timeline({paused:!0,defaults:{ease:A}});if(t&&St.call(t.deactivate,[],N),mt){let P=h.find($=>$.elements[0]===mt);P&&P.chars&&St.to(P.chars,{yPercent:-100,stagger:T,duration:E},N)}bt.length>0&&St.to(bt,{scale:0,opacity:0,stagger:S,duration:y},z),_&&St.to(_,{scale:0,rotation:30,duration:y},z),p&&St.to(p,{scale:0,rotationZ:-50,duration:y},z),x&&St.to(x,{scale:0,duration:y},z);let D=d.querySelector(".heading-style-h1");if(D){let P=new SplitText(D,{type:"words,chars",tag:"span"});gsap.set(P.words,{overflow:"hidden",display:"inline-block"}),gsap.set(P.chars,{display:"inline-block",yPercent:100}),h.push(P),St.to(P.chars,{yPercent:0,stagger:T,duration:E},H),D.classList.contains("is-text-editable")&&(gsap.set(D,{"--pseudo-opacity":0}),St.to(D,{"--pseudo-opacity":1,duration:y},H))}let O=d.querySelectorAll(".text-style-subtitle, .text-size-large");O.length>0&&(gsap.set(O,{scale:2,opacity:0}),St.to(O,{scale:1,opacity:1,stagger:S,duration:y},G)),m&&St.fromTo(m,{scale:0,rotationZ:-50},{scale:1,rotationZ:0,duration:y},B+W),b&&St.to(b,{scale:1,duration:y},B+W);let I=null;if(e&&n&&(I=ScrollTrigger.create({trigger:e,pin:n,start:"top top",end:()=>`+=${o}`,markers:{startColor:"purple",endColor:"purple",indent:120},id:"delight-main-pin",invalidateOnRefresh:!0}),I&&l.push(I)),e){let P=ScrollTrigger.create({trigger:e,start:"top top",onEnter:()=>{console.log("Initial rain start trigger entered."),s&&s.isInitialized?s.startRain():console.warn("Tried to start rain, but emojiRain not initialized yet.")},once:!0,id:"delight-initial-rain-start"});l.push(P)}if(e&&I){let P=ScrollTrigger.create({trigger:e,start:()=>I?I.start+o/3-2:0,end:()=>I?I.start+o/3+2:0,markers:{startColor:"green",endColor:"green",indent:40},id:"delight-leads-delight",onEnter:()=>{console.log(`ST1 onEnter: Playing tl1. ScrollY: ${window.scrollY}, pinST progress: ${I?I.progress.toFixed(3):"N/A"}`),e==null||e.setAttribute("data-active-section","delight"),s&&(s.stopRain(),s.removeFloor()),gsap.killTweensOf(V.progress),V.play()},onEnterBack:()=>{console.log(`ST1 onEnterBack: Reversing tl1. ScrollY: ${window.scrollY}, pinST progress: ${I?I.progress.toFixed(3):"N/A"}`),e==null||e.setAttribute("data-active-section","leads"),t&&t.deactivate(),s&&(s.clearDynamicBodies(),s.recreateFloor(),s.startRain()),gsap.killTweensOf(V.progress),V.reverse()},invalidateOnRefresh:!0});l.push(P)}if(e&&I){let P=ScrollTrigger.create({trigger:e,start:()=>I?I.start+o*2/3-2:0,end:()=>I?I.start+o*2/3+2:0,markers:{startColor:"orange",endColor:"orange",indent:80},id:"delight-delight-edit",onEnter:()=>{console.log(`ST2 onEnter: Playing tl2. ScrollY: ${window.scrollY}, pinST progress: ${I?I.progress.toFixed(3):"N/A"}`),e==null||e.setAttribute("data-active-section","edit"),t&&t.deactivate(),gsap.killTweensOf(St.progress),St.play()},onLeaveBack:()=>{console.log(`ST2 onLeaveBack: Reversing tl2. ScrollY: ${window.scrollY}, pinST progress: ${I?I.progress.toFixed(3):"N/A"}`),e==null||e.setAttribute("data-active-section","delight"),t&&t.activate(),gsap.killTweensOf(St.progress),St.reverse()},invalidateOnRefresh:!0});l.push(P)}return()=>{console.log("Cleaning up Delight transitions..."),V.kill(),St.kill(),l.forEach(P=>P.kill()),l.length=0,h.forEach(P=>P.revert()),h.length=0,a.abort(),s&&s.destroy(),t&&t.destroy(),console.log("Delight cleanup complete.")}}function xu(){let s=document.getElementById("supercharge"),t=document.querySelector(".section-home-hero");if(!s||!t){console.debug("Supercharge button or hero section not found");return}s.addEventListener("click",()=>{let e=t.getAttribute("data-supercharge");!e||e===""?t.setAttribute("data-supercharge","true"):t.removeAttribute("data-supercharge")})}window.addEventListener(ur,()=>{var s;(s=window.Webflow)==null||s.push(()=>{Tv(),Ev(),wv(),xu(),vu()})});function wv(){let s=document.querySelectorAll(".scrub-intro_paragraph-wrapper"),t=document.querySelector(".scrub-intro_scroll-container"),e=document.querySelector(".scrub-intro_image-wrapper");if(!t){console.warn("Scroll container not found for intro scrub text");return}e&&gsap.to(e,{scrollTrigger:{trigger:t,start:"top 20%",end:"top top",scrub:!0},scale:.8,opacity:.5});let n=[],i=0,r=40;s.forEach((l,h)=>{let u=l.querySelector(".scrub-intro_paragraph");if(!u)return;let c=new SplitText(u,{type:"words,chars",tag:"span"}),d=c.chars,f=Math.max(d.length,r);n.push({split:c,paragraph:u,wrapper:l,charCount:d.length,effectiveCharCount:f}),i+=f,gsap.set(d,{opacity:.3}),gsap.set(l,{opacity:h===0?1:0})}),i>0&&(t.children[0].style.height=`${s.length*100}vh`);let o=gsap.timeline({scrollTrigger:{trigger:t,start:"top top",end:"bottom bottom",scrub:.5}}),a=0;n.forEach(({split:l,paragraph:h,wrapper:u,charCount:c,effectiveCharCount:d},f)=>{let p=l.chars,x=f===n.length-1,v=f===0,m=d/i,b=gsap.timeline(),g=.05,_=.1,w=.7,M=.15,E=.003;v||b.to(u,{opacity:1,duration:m*g,ease:"power1.in"},0),b.to(p,{opacity:1,duration:m*_,stagger:{each:E,from:"start"},ease:"none"},v?0:m*g),b.to({},{duration:m*w},m*(v?_:g+_)),x||b.to(u,{opacity:0,duration:m*M,ease:"power1.out"},m*(v?_+w:g+_+w)),o.add(b,a),a+=m})}function Ev(){let s=".section_reveal-wrapper",t=document.querySelector(s);if(!t){console.warn(`Horizontal scroll section reveal wrapper not found: ${s}`);return}let e=t.children;function n(){gsap.set(t,{height:()=>Array.from(e).reduce((i,r)=>i+r.offsetHeight,0)})}n(),ScrollTrigger.addEventListener("refresh",()=>{gsap.delayedCall(.05,()=>{n()})})}function Tv(){let s="ignitewebsiteleadmagnetform",t='dialog[data-el="form-dialog"][open]',e='[data-form-el="success-message"]',n='[data-form-el="error-message"]';if(typeof MauticFormCallback=="undefined"&&(window.MauticFormCallback={}),window.MauticFormCallback[s]={onResponse:function(o){console.debug("Mautic form callback",{response:o});let a=document.querySelector(t),l=a==null?void 0:a.querySelector("form");if(!a||!l){console.error("Current form element not found in mautic response callback",{response:o});return}let h=a.querySelector(e),u=a.querySelector(n);return o.success&&(console.debug({successEl:h}),h&&(l.style.display="none",h.style.display="block"),setTimeout(()=>{a.close()},5e3)),o.errorMessage&&u&&(u.style.display="block"),!0}},typeof MauticSDKLoaded=="undefined"){window.MauticSDKLoaded=!0;var i=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.src="https://m.igniteagency.com/media/js/mautic-form.js?vd43a7f62",r.onload=function(){MauticSDK.onLoad()},i.appendChild(r),window.MauticDomain="https://m.igniteagency.com",window.MauticLang={submittingMessage:"Please wait..."}}else typeof MauticSDK!="undefined"&&MauticSDK.onLoad()}})();
/*! Bundled license information:

matter-js/build/matter.js:
  (*!
   * matter-js 0.20.0 by @liabru
   * http://brm.io/matter-js/
   * License MIT
   * 
   * The MIT License (MIT)
   * 
   * Copyright (c) Liam Brummitt and contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

lil-gui/dist/lil-gui.esm.js:
  (**
   * lil-gui
   * https://lil-gui.georgealways.com
   * @version 0.20.0
   * @author George Michael Brower
   * @license MIT
   *)

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

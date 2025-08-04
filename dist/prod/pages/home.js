"use strict";(()=>{var Du=Object.create;var Sa=Object.defineProperty,Uu=Object.defineProperties,Nu=Object.getOwnPropertyDescriptor,Fu=Object.getOwnPropertyDescriptors,Ou=Object.getOwnPropertyNames,hc=Object.getOwnPropertySymbols,Bu=Object.getPrototypeOf,uc=Object.prototype.hasOwnProperty,ku=Object.prototype.propertyIsEnumerable;var ya=(s,e,t)=>e in s?Sa(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ma=(s,e)=>{for(var t in e||(e={}))uc.call(e,t)&&ya(s,t,e[t]);if(hc)for(var t of hc(e))ku.call(e,t)&&ya(s,t,e[t]);return s},dc=(s,e)=>Uu(s,Fu(e));var zu=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var Vu=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ou(e))!uc.call(s,i)&&i!==t&&Sa(s,i,{get:()=>e[i],enumerable:!(n=Nu(e,i))||n.enumerable});return s};var Hu=(s,e,t)=>(t=s!=null?Du(Bu(s)):{},Vu(e||!s||!s.__esModule?Sa(t,"default",{value:s,enumerable:!0}):t,s));var Je=(s,e,t)=>(ya(s,typeof e!="symbol"?e+"":e,t),t);var _u=zu((cr,tc)=>{(function(e,t){typeof cr=="object"&&typeof tc=="object"?tc.exports=t():typeof define=="function"&&define.amd?define("Matter",[],t):typeof cr=="object"?cr.Matter=t():e.Matter=t()})(cr,function(){return function(s){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return s[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=s,t.c=e,t.d=function(n,i,r){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:r})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){if(i&1&&(n=t(n)),i&8||i&4&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),i&2&&typeof n!="string")for(var o in n)t.d(r,o,function(a){return n[a]}.bind(null,o));return r},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},t.p="",t(t.s=20)}([function(s,e){var t={};s.exports=t,function(){t._baseDelta=1e3/60,t._nextId=0,t._seed=0,t._nowStartTime=+new Date,t._warnedOnce={},t._decomp=null,t.extend=function(i,r){var o,a,l;typeof r=="boolean"?(o=2,l=r):(o=1,l=!0);for(var h=o;h<arguments.length;h++){var u=arguments[h];if(u)for(var c in u)l&&u[c]&&u[c].constructor===Object&&(!i[c]||i[c].constructor===Object)?(i[c]=i[c]||{},t.extend(i[c],l,u[c])):i[c]=u[c]}return i},t.clone=function(i,r){return t.extend({},r,i)},t.keys=function(i){if(Object.keys)return Object.keys(i);var r=[];for(var o in i)r.push(o);return r},t.values=function(i){var r=[];if(Object.keys){for(var o=Object.keys(i),a=0;a<o.length;a++)r.push(i[o[a]]);return r}for(var l in i)r.push(i[l]);return r},t.get=function(i,r,o,a){r=r.split(".").slice(o,a);for(var l=0;l<r.length;l+=1)i=i[r[l]];return i},t.set=function(i,r,o,a,l){var h=r.split(".").slice(a,l);return t.get(i,r,0,-1)[h[h.length-1]]=o,o},t.shuffle=function(i){for(var r=i.length-1;r>0;r--){var o=Math.floor(t.random()*(r+1)),a=i[r];i[r]=i[o],i[o]=a}return i},t.choose=function(i){return i[Math.floor(t.random()*i.length)]},t.isElement=function(i){return typeof HTMLElement!="undefined"?i instanceof HTMLElement:!!(i&&i.nodeType&&i.nodeName)},t.isArray=function(i){return Object.prototype.toString.call(i)==="[object Array]"},t.isFunction=function(i){return typeof i=="function"},t.isPlainObject=function(i){return typeof i=="object"&&i.constructor===Object},t.isString=function(i){return toString.call(i)==="[object String]"},t.clamp=function(i,r,o){return i<r?r:i>o?o:i},t.sign=function(i){return i<0?-1:1},t.now=function(){if(typeof window!="undefined"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-t._nowStartTime},t.random=function(i,r){return i=typeof i!="undefined"?i:0,r=typeof r!="undefined"?r:1,i+n()*(r-i)};var n=function(){return t._seed=(t._seed*9301+49297)%233280,t._seed/233280};t.colorToNumber=function(i){return i=i.replace("#",""),i.length==3&&(i=i.charAt(0)+i.charAt(0)+i.charAt(1)+i.charAt(1)+i.charAt(2)+i.charAt(2)),parseInt(i,16)},t.logLevel=1,t.log=function(){console&&t.logLevel>0&&t.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},t.info=function(){console&&t.logLevel>0&&t.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},t.warn=function(){console&&t.logLevel>0&&t.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},t.warnOnce=function(){var i=Array.prototype.slice.call(arguments).join(" ");t._warnedOnce[i]||(t.warn(i),t._warnedOnce[i]=!0)},t.deprecated=function(i,r,o){i[r]=t.chain(function(){t.warnOnce("\u{1F505} deprecated \u{1F505}",o)},i[r])},t.nextId=function(){return t._nextId++},t.indexOf=function(i,r){if(i.indexOf)return i.indexOf(r);for(var o=0;o<i.length;o++)if(i[o]===r)return o;return-1},t.map=function(i,r){if(i.map)return i.map(r);for(var o=[],a=0;a<i.length;a+=1)o.push(r(i[a]));return o},t.topologicalSort=function(i){var r=[],o=[],a=[];for(var l in i)!o[l]&&!a[l]&&t._topologicalSort(l,o,a,i,r);return r},t._topologicalSort=function(i,r,o,a,l){var h=a[i]||[];o[i]=!0;for(var u=0;u<h.length;u+=1){var c=h[u];o[c]||r[c]||t._topologicalSort(c,r,o,a,l)}o[i]=!1,r[i]=!0,l.push(i)},t.chain=function(){for(var i=[],r=0;r<arguments.length;r+=1){var o=arguments[r];o._chained?i.push.apply(i,o._chained):i.push(o)}var a=function(){for(var l,h=new Array(arguments.length),u=0,c=arguments.length;u<c;u++)h[u]=arguments[u];for(u=0;u<i.length;u+=1){var d=i[u].apply(l,h);typeof d!="undefined"&&(l=d)}return l};return a._chained=i,a},t.chainPathBefore=function(i,r,o){return t.set(i,r,t.chain(o,t.get(i,r)))},t.chainPathAfter=function(i,r,o){return t.set(i,r,t.chain(t.get(i,r),o))},t.setDecomp=function(i){t._decomp=i},t.getDecomp=function(){var i=t._decomp;try{!i&&typeof window!="undefined"&&(i=window.decomp),!i&&typeof global!="undefined"&&(i=global.decomp)}catch(r){i=null}return i}}()},function(s,e){var t={};s.exports=t,function(){t.create=function(n){var i={min:{x:0,y:0},max:{x:0,y:0}};return n&&t.update(i,n),i},t.update=function(n,i,r){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var o=0;o<i.length;o++){var a=i[o];a.x>n.max.x&&(n.max.x=a.x),a.x<n.min.x&&(n.min.x=a.x),a.y>n.max.y&&(n.max.y=a.y),a.y<n.min.y&&(n.min.y=a.y)}r&&(r.x>0?n.max.x+=r.x:n.min.x+=r.x,r.y>0?n.max.y+=r.y:n.min.y+=r.y)},t.contains=function(n,i){return i.x>=n.min.x&&i.x<=n.max.x&&i.y>=n.min.y&&i.y<=n.max.y},t.overlaps=function(n,i){return n.min.x<=i.max.x&&n.max.x>=i.min.x&&n.max.y>=i.min.y&&n.min.y<=i.max.y},t.translate=function(n,i){n.min.x+=i.x,n.max.x+=i.x,n.min.y+=i.y,n.max.y+=i.y},t.shift=function(n,i){var r=n.max.x-n.min.x,o=n.max.y-n.min.y;n.min.x=i.x,n.max.x=i.x+r,n.min.y=i.y,n.max.y=i.y+o}}()},function(s,e){var t={};s.exports=t,function(){t.create=function(n,i){return{x:n||0,y:i||0}},t.clone=function(n){return{x:n.x,y:n.y}},t.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},t.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},t.rotate=function(n,i,r){var o=Math.cos(i),a=Math.sin(i);r||(r={});var l=n.x*o-n.y*a;return r.y=n.x*a+n.y*o,r.x=l,r},t.rotateAbout=function(n,i,r,o){var a=Math.cos(i),l=Math.sin(i);o||(o={});var h=r.x+((n.x-r.x)*a-(n.y-r.y)*l);return o.y=r.y+((n.x-r.x)*l+(n.y-r.y)*a),o.x=h,o},t.normalise=function(n){var i=t.magnitude(n);return i===0?{x:0,y:0}:{x:n.x/i,y:n.y/i}},t.dot=function(n,i){return n.x*i.x+n.y*i.y},t.cross=function(n,i){return n.x*i.y-n.y*i.x},t.cross3=function(n,i,r){return(i.x-n.x)*(r.y-n.y)-(i.y-n.y)*(r.x-n.x)},t.add=function(n,i,r){return r||(r={}),r.x=n.x+i.x,r.y=n.y+i.y,r},t.sub=function(n,i,r){return r||(r={}),r.x=n.x-i.x,r.y=n.y-i.y,r},t.mult=function(n,i){return{x:n.x*i,y:n.y*i}},t.div=function(n,i){return{x:n.x/i,y:n.y/i}},t.perp=function(n,i){return i=i===!0?-1:1,{x:i*-n.y,y:i*n.x}},t.neg=function(n){return{x:-n.x,y:-n.y}},t.angle=function(n,i){return Math.atan2(i.y-n.y,i.x-n.x)},t._temp=[t.create(),t.create(),t.create(),t.create(),t.create(),t.create()]}()},function(s,e,t){var n={};s.exports=n;var i=t(2),r=t(0);(function(){n.create=function(o,a){for(var l=[],h=0;h<o.length;h++){var u=o[h],c={x:u.x,y:u.y,index:h,body:a,isInternal:!1};l.push(c)}return l},n.fromPath=function(o,a){var l=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,h=[];return o.replace(l,function(u,c,d){h.push({x:parseFloat(c),y:parseFloat(d)})}),n.create(h,a)},n.centre=function(o){for(var a=n.area(o,!0),l={x:0,y:0},h,u,c,d=0;d<o.length;d++)c=(d+1)%o.length,h=i.cross(o[d],o[c]),u=i.mult(i.add(o[d],o[c]),h),l=i.add(l,u);return i.div(l,6*a)},n.mean=function(o){for(var a={x:0,y:0},l=0;l<o.length;l++)a.x+=o[l].x,a.y+=o[l].y;return i.div(a,o.length)},n.area=function(o,a){for(var l=0,h=o.length-1,u=0;u<o.length;u++)l+=(o[h].x-o[u].x)*(o[h].y+o[u].y),h=u;return a?l/2:Math.abs(l)/2},n.inertia=function(o,a){for(var l=0,h=0,u=o,c,d,f=0;f<u.length;f++)d=(f+1)%u.length,c=Math.abs(i.cross(u[d],u[f])),l+=c*(i.dot(u[d],u[d])+i.dot(u[d],u[f])+i.dot(u[f],u[f])),h+=c;return a/6*(l/h)},n.translate=function(o,a,l){l=typeof l!="undefined"?l:1;var h=o.length,u=a.x*l,c=a.y*l,d;for(d=0;d<h;d++)o[d].x+=u,o[d].y+=c;return o},n.rotate=function(o,a,l){if(a!==0){var h=Math.cos(a),u=Math.sin(a),c=l.x,d=l.y,f=o.length,p,x,v,m;for(m=0;m<f;m++)p=o[m],x=p.x-c,v=p.y-d,p.x=c+(x*h-v*u),p.y=d+(x*u+v*h);return o}},n.contains=function(o,a){for(var l=a.x,h=a.y,u=o.length,c=o[u-1],d,f=0;f<u;f++){if(d=o[f],(l-c.x)*(d.y-c.y)+(h-c.y)*(c.x-d.x)>0)return!1;c=d}return!0},n.scale=function(o,a,l,h){if(a===1&&l===1)return o;h=h||n.centre(o);for(var u,c,d=0;d<o.length;d++)u=o[d],c=i.sub(u,h),o[d].x=h.x+c.x*a,o[d].y=h.y+c.y*l;return o},n.chamfer=function(o,a,l,h,u){typeof a=="number"?a=[a]:a=a||[8],l=typeof l!="undefined"?l:-1,h=h||2,u=u||14;for(var c=[],d=0;d<o.length;d++){var f=o[d-1>=0?d-1:o.length-1],p=o[d],x=o[(d+1)%o.length],v=a[d<a.length?d:a.length-1];if(v===0){c.push(p);continue}var m=i.normalise({x:p.y-f.y,y:f.x-p.x}),b=i.normalise({x:x.y-p.y,y:p.x-x.x}),g=Math.sqrt(2*Math.pow(v,2)),_=i.mult(r.clone(m),v),E=i.normalise(i.mult(i.add(m,b),.5)),M=i.sub(p,i.mult(E,g)),w=l;l===-1&&(w=Math.pow(v,.32)*1.75),w=r.clamp(w,h,u),w%2===1&&(w+=1);for(var T=Math.acos(i.dot(m,b)),y=T/w,S=0;S<w;S++)c.push(i.add(i.rotate(_,y*S),M))}return c},n.clockwiseSort=function(o){var a=n.mean(o);return o.sort(function(l,h){return i.angle(a,l)-i.angle(a,h)}),o},n.isConvex=function(o){var a=0,l=o.length,h,u,c,d;if(l<3)return null;for(h=0;h<l;h++)if(u=(h+1)%l,c=(h+2)%l,d=(o[u].x-o[h].x)*(o[c].y-o[u].y),d-=(o[u].y-o[h].y)*(o[c].x-o[u].x),d<0?a|=1:d>0&&(a|=2),a===3)return!1;return a!==0?!0:null},n.hull=function(o){var a=[],l=[],h,u;for(o=o.slice(0),o.sort(function(c,d){var f=c.x-d.x;return f!==0?f:c.y-d.y}),u=0;u<o.length;u+=1){for(h=o[u];l.length>=2&&i.cross3(l[l.length-2],l[l.length-1],h)<=0;)l.pop();l.push(h)}for(u=o.length-1;u>=0;u-=1){for(h=o[u];a.length>=2&&i.cross3(a[a.length-2],a[a.length-1],h)<=0;)a.pop();a.push(h)}return a.pop(),l.pop(),a.concat(l)}})()},function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(2),o=t(7),a=t(0),l=t(1),h=t(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(c){var d={id:a.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},f=a.extend(d,c);return u(f,c),f},n.nextGroup=function(c){return c?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var u=function(c,d){d=d||{},n.set(c,{bounds:c.bounds||l.create(c.vertices),positionPrev:c.positionPrev||r.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),i.rotate(c.vertices,c.angle,c.position),h.rotate(c.axes,c.angle),l.update(c.bounds,c.vertices,c.velocity),n.set(c,{axes:d.axes||c.axes,area:d.area||c.area,mass:d.mass||c.mass,inertia:d.inertia||c.inertia});var f=c.isStatic?"#14151f":a.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),p=c.isStatic?"#555":"#ccc",x=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||f,c.render.strokeStyle=c.render.strokeStyle||p,c.render.lineWidth=c.render.lineWidth||x,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};n.set=function(c,d,f){var p;typeof d=="string"&&(p=d,d={},d[p]=f);for(p in d)if(Object.prototype.hasOwnProperty.call(d,p))switch(f=d[p],p){case"isStatic":n.setStatic(c,f);break;case"isSleeping":o.set(c,f);break;case"mass":n.setMass(c,f);break;case"density":n.setDensity(c,f);break;case"inertia":n.setInertia(c,f);break;case"vertices":n.setVertices(c,f);break;case"position":n.setPosition(c,f);break;case"angle":n.setAngle(c,f);break;case"velocity":n.setVelocity(c,f);break;case"angularVelocity":n.setAngularVelocity(c,f);break;case"speed":n.setSpeed(c,f);break;case"angularSpeed":n.setAngularSpeed(c,f);break;case"parts":n.setParts(c,f);break;case"centre":n.setCentre(c,f);break;default:c[p]=f}},n.setStatic=function(c,d){for(var f=0;f<c.parts.length;f++){var p=c.parts[f];d?(p.isStatic||(p._original={restitution:p.restitution,friction:p.friction,mass:p.mass,inertia:p.inertia,density:p.density,inverseMass:p.inverseMass,inverseInertia:p.inverseInertia}),p.restitution=0,p.friction=1,p.mass=p.inertia=p.density=1/0,p.inverseMass=p.inverseInertia=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.angularVelocity=0,p.speed=0,p.angularSpeed=0,p.motion=0):p._original&&(p.restitution=p._original.restitution,p.friction=p._original.friction,p.mass=p._original.mass,p.inertia=p._original.inertia,p.density=p._original.density,p.inverseMass=p._original.inverseMass,p.inverseInertia=p._original.inverseInertia,p._original=null),p.isStatic=d}},n.setMass=function(c,d){var f=c.inertia/(c.mass/6);c.inertia=f*(d/6),c.inverseInertia=1/c.inertia,c.mass=d,c.inverseMass=1/c.mass,c.density=c.mass/c.area},n.setDensity=function(c,d){n.setMass(c,d*c.area),c.density=d},n.setInertia=function(c,d){c.inertia=d,c.inverseInertia=1/c.inertia},n.setVertices=function(c,d){d[0].body===c?c.vertices=d:c.vertices=i.create(d,c),c.axes=h.fromVertices(c.vertices),c.area=i.area(c.vertices),n.setMass(c,c.density*c.area);var f=i.centre(c.vertices);i.translate(c.vertices,f,-1),n.setInertia(c,n._inertiaScale*i.inertia(c.vertices,c.mass)),i.translate(c.vertices,c.position),l.update(c.bounds,c.vertices,c.velocity)},n.setParts=function(c,d,f){var p;for(d=d.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,p=0;p<d.length;p++){var x=d[p];x!==c&&(x.parent=c,c.parts.push(x))}if(c.parts.length!==1){if(f=typeof f!="undefined"?f:!0,f){var v=[];for(p=0;p<d.length;p++)v=v.concat(d[p].vertices);i.clockwiseSort(v);var m=i.hull(v),b=i.centre(m);n.setVertices(c,m),i.translate(c.vertices,b)}var g=n._totalProperties(c);c.area=g.area,c.parent=c,c.position.x=g.centre.x,c.position.y=g.centre.y,c.positionPrev.x=g.centre.x,c.positionPrev.y=g.centre.y,n.setMass(c,g.mass),n.setInertia(c,g.inertia),n.setPosition(c,g.centre)}},n.setCentre=function(c,d,f){f?(c.positionPrev.x+=d.x,c.positionPrev.y+=d.y,c.position.x+=d.x,c.position.y+=d.y):(c.positionPrev.x=d.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=d.y-(c.position.y-c.positionPrev.y),c.position.x=d.x,c.position.y=d.y)},n.setPosition=function(c,d,f){var p=r.sub(d,c.position);f?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=p.x,c.velocity.y=p.y,c.speed=r.magnitude(p)):(c.positionPrev.x+=p.x,c.positionPrev.y+=p.y);for(var x=0;x<c.parts.length;x++){var v=c.parts[x];v.position.x+=p.x,v.position.y+=p.y,i.translate(v.vertices,p),l.update(v.bounds,v.vertices,c.velocity)}},n.setAngle=function(c,d,f){var p=d-c.angle;f?(c.anglePrev=c.angle,c.angularVelocity=p,c.angularSpeed=Math.abs(p)):c.anglePrev+=p;for(var x=0;x<c.parts.length;x++){var v=c.parts[x];v.angle+=p,i.rotate(v.vertices,p,c.position),h.rotate(v.axes,p),l.update(v.bounds,v.vertices,c.velocity),x>0&&r.rotateAbout(v.position,p,c.position,v.position)}},n.setVelocity=function(c,d){var f=c.deltaTime/n._baseDelta;c.positionPrev.x=c.position.x-d.x*f,c.positionPrev.y=c.position.y-d.y*f,c.velocity.x=(c.position.x-c.positionPrev.x)/f,c.velocity.y=(c.position.y-c.positionPrev.y)/f,c.speed=r.magnitude(c.velocity)},n.getVelocity=function(c){var d=n._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*d,y:(c.position.y-c.positionPrev.y)*d}},n.getSpeed=function(c){return r.magnitude(n.getVelocity(c))},n.setSpeed=function(c,d){n.setVelocity(c,r.mult(r.normalise(n.getVelocity(c)),d))},n.setAngularVelocity=function(c,d){var f=c.deltaTime/n._baseDelta;c.anglePrev=c.angle-d*f,c.angularVelocity=(c.angle-c.anglePrev)/f,c.angularSpeed=Math.abs(c.angularVelocity)},n.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*n._baseDelta/c.deltaTime},n.getAngularSpeed=function(c){return Math.abs(n.getAngularVelocity(c))},n.setAngularSpeed=function(c,d){n.setAngularVelocity(c,a.sign(n.getAngularVelocity(c))*d)},n.translate=function(c,d,f){n.setPosition(c,r.add(c.position,d),f)},n.rotate=function(c,d,f,p){if(!f)n.setAngle(c,c.angle+d,p);else{var x=Math.cos(d),v=Math.sin(d),m=c.position.x-f.x,b=c.position.y-f.y;n.setPosition(c,{x:f.x+(m*x-b*v),y:f.y+(m*v+b*x)},p),n.setAngle(c,c.angle+d,p)}},n.scale=function(c,d,f,p){var x=0,v=0;p=p||c.position;for(var m=0;m<c.parts.length;m++){var b=c.parts[m];i.scale(b.vertices,d,f,p),b.axes=h.fromVertices(b.vertices),b.area=i.area(b.vertices),n.setMass(b,c.density*b.area),i.translate(b.vertices,{x:-b.position.x,y:-b.position.y}),n.setInertia(b,n._inertiaScale*i.inertia(b.vertices,b.mass)),i.translate(b.vertices,{x:b.position.x,y:b.position.y}),m>0&&(x+=b.area,v+=b.inertia),b.position.x=p.x+(b.position.x-p.x)*d,b.position.y=p.y+(b.position.y-p.y)*f,l.update(b.bounds,b.vertices,c.velocity)}c.parts.length>1&&(c.area=x,c.isStatic||(n.setMass(c,c.density*x),n.setInertia(c,v))),c.circleRadius&&(d===f?c.circleRadius*=d:c.circleRadius=null)},n.update=function(c,d){d=(typeof d!="undefined"?d:1e3/60)*c.timeScale;var f=d*d,p=n._timeCorrection?d/(c.deltaTime||d):1,x=1-c.frictionAir*(d/a._baseDelta),v=(c.position.x-c.positionPrev.x)*p,m=(c.position.y-c.positionPrev.y)*p;c.velocity.x=v*x+c.force.x/c.mass*f,c.velocity.y=m*x+c.force.y/c.mass*f,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=d,c.angularVelocity=(c.angle-c.anglePrev)*x*p+c.torque/c.inertia*f,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var b=0;b<c.parts.length;b++){var g=c.parts[b];i.translate(g.vertices,c.velocity),b>0&&(g.position.x+=c.velocity.x,g.position.y+=c.velocity.y),c.angularVelocity!==0&&(i.rotate(g.vertices,c.angularVelocity,c.position),h.rotate(g.axes,c.angularVelocity),b>0&&r.rotateAbout(g.position,c.angularVelocity,c.position,g.position)),l.update(g.bounds,g.vertices,c.velocity)}},n.updateVelocities=function(c){var d=n._baseDelta/c.deltaTime,f=c.velocity;f.x=(c.position.x-c.positionPrev.x)*d,f.y=(c.position.y-c.positionPrev.y)*d,c.speed=Math.sqrt(f.x*f.x+f.y*f.y),c.angularVelocity=(c.angle-c.anglePrev)*d,c.angularSpeed=Math.abs(c.angularVelocity)},n.applyForce=function(c,d,f){var p={x:d.x-c.position.x,y:d.y-c.position.y};c.force.x+=f.x,c.force.y+=f.y,c.torque+=p.x*f.y-p.y*f.x},n._totalProperties=function(c){for(var d={mass:0,area:0,inertia:0,centre:{x:0,y:0}},f=c.parts.length===1?0:1;f<c.parts.length;f++){var p=c.parts[f],x=p.mass!==1/0?p.mass:1;d.mass+=x,d.area+=p.area,d.inertia+=p.inertia,d.centre=r.add(d.centre,r.mult(p.position,x))}return d.centre=r.div(d.centre,d.mass),d}})()},function(s,e,t){var n={};s.exports=n;var i=t(0);(function(){n.on=function(r,o,a){for(var l=o.split(" "),h,u=0;u<l.length;u++)h=l[u],r.events=r.events||{},r.events[h]=r.events[h]||[],r.events[h].push(a);return a},n.off=function(r,o,a){if(!o){r.events={};return}typeof o=="function"&&(a=o,o=i.keys(r.events).join(" "));for(var l=o.split(" "),h=0;h<l.length;h++){var u=r.events[l[h]],c=[];if(a&&u)for(var d=0;d<u.length;d++)u[d]!==a&&c.push(u[d]);r.events[l[h]]=c}},n.trigger=function(r,o,a){var l,h,u,c,d=r.events;if(d&&i.keys(d).length>0){a||(a={}),l=o.split(" ");for(var f=0;f<l.length;f++)if(h=l[f],u=d[h],u){c=i.clone(a,!1),c.name=h,c.source=r;for(var p=0;p<u.length;p++)u[p].apply(r,[c])}}}})()},function(s,e,t){var n={};s.exports=n;var i=t(5),r=t(0),o=t(1),a=t(4);(function(){n.create=function(l){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},l)},n.setModified=function(l,h,u,c){if(l.isModified=h,h&&l.cache&&(l.cache.allBodies=null,l.cache.allConstraints=null,l.cache.allComposites=null),u&&l.parent&&n.setModified(l.parent,h,u,c),c)for(var d=0;d<l.composites.length;d++){var f=l.composites[d];n.setModified(f,h,u,c)}},n.add=function(l,h){var u=[].concat(h);i.trigger(l,"beforeAdd",{object:h});for(var c=0;c<u.length;c++){var d=u[c];switch(d.type){case"body":if(d.parent!==d){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(l,d);break;case"constraint":n.addConstraint(l,d);break;case"composite":n.addComposite(l,d);break;case"mouseConstraint":n.addConstraint(l,d.constraint);break}}return i.trigger(l,"afterAdd",{object:h}),l},n.remove=function(l,h,u){var c=[].concat(h);i.trigger(l,"beforeRemove",{object:h});for(var d=0;d<c.length;d++){var f=c[d];switch(f.type){case"body":n.removeBody(l,f,u);break;case"constraint":n.removeConstraint(l,f,u);break;case"composite":n.removeComposite(l,f,u);break;case"mouseConstraint":n.removeConstraint(l,f.constraint);break}}return i.trigger(l,"afterRemove",{object:h}),l},n.addComposite=function(l,h){return l.composites.push(h),h.parent=l,n.setModified(l,!0,!0,!1),l},n.removeComposite=function(l,h,u){var c=r.indexOf(l.composites,h);if(c!==-1){var d=n.allBodies(h);n.removeCompositeAt(l,c);for(var f=0;f<d.length;f++)d[f].sleepCounter=0}if(u)for(var f=0;f<l.composites.length;f++)n.removeComposite(l.composites[f],h,!0);return l},n.removeCompositeAt=function(l,h){return l.composites.splice(h,1),n.setModified(l,!0,!0,!1),l},n.addBody=function(l,h){return l.bodies.push(h),n.setModified(l,!0,!0,!1),l},n.removeBody=function(l,h,u){var c=r.indexOf(l.bodies,h);if(c!==-1&&(n.removeBodyAt(l,c),h.sleepCounter=0),u)for(var d=0;d<l.composites.length;d++)n.removeBody(l.composites[d],h,!0);return l},n.removeBodyAt=function(l,h){return l.bodies.splice(h,1),n.setModified(l,!0,!0,!1),l},n.addConstraint=function(l,h){return l.constraints.push(h),n.setModified(l,!0,!0,!1),l},n.removeConstraint=function(l,h,u){var c=r.indexOf(l.constraints,h);if(c!==-1&&n.removeConstraintAt(l,c),u)for(var d=0;d<l.composites.length;d++)n.removeConstraint(l.composites[d],h,!0);return l},n.removeConstraintAt=function(l,h){return l.constraints.splice(h,1),n.setModified(l,!0,!0,!1),l},n.clear=function(l,h,u){if(u)for(var c=0;c<l.composites.length;c++)n.clear(l.composites[c],h,!0);return h?l.bodies=l.bodies.filter(function(d){return d.isStatic}):l.bodies.length=0,l.constraints.length=0,l.composites.length=0,n.setModified(l,!0,!0,!1),l},n.allBodies=function(l){if(l.cache&&l.cache.allBodies)return l.cache.allBodies;for(var h=[].concat(l.bodies),u=0;u<l.composites.length;u++)h=h.concat(n.allBodies(l.composites[u]));return l.cache&&(l.cache.allBodies=h),h},n.allConstraints=function(l){if(l.cache&&l.cache.allConstraints)return l.cache.allConstraints;for(var h=[].concat(l.constraints),u=0;u<l.composites.length;u++)h=h.concat(n.allConstraints(l.composites[u]));return l.cache&&(l.cache.allConstraints=h),h},n.allComposites=function(l){if(l.cache&&l.cache.allComposites)return l.cache.allComposites;for(var h=[].concat(l.composites),u=0;u<l.composites.length;u++)h=h.concat(n.allComposites(l.composites[u]));return l.cache&&(l.cache.allComposites=h),h},n.get=function(l,h,u){var c,d;switch(u){case"body":c=n.allBodies(l);break;case"constraint":c=n.allConstraints(l);break;case"composite":c=n.allComposites(l).concat(l);break}return c?(d=c.filter(function(f){return f.id.toString()===h.toString()}),d.length===0?null:d[0]):null},n.move=function(l,h,u){return n.remove(l,h),n.add(u,h),l},n.rebase=function(l){for(var h=n.allBodies(l).concat(n.allConstraints(l)).concat(n.allComposites(l)),u=0;u<h.length;u++)h[u].id=r.nextId();return l},n.translate=function(l,h,u){for(var c=u?n.allBodies(l):l.bodies,d=0;d<c.length;d++)a.translate(c[d],h);return l},n.rotate=function(l,h,u,c){for(var d=Math.cos(h),f=Math.sin(h),p=c?n.allBodies(l):l.bodies,x=0;x<p.length;x++){var v=p[x],m=v.position.x-u.x,b=v.position.y-u.y;a.setPosition(v,{x:u.x+(m*d-b*f),y:u.y+(m*f+b*d)}),a.rotate(v,h)}return l},n.scale=function(l,h,u,c,d){for(var f=d?n.allBodies(l):l.bodies,p=0;p<f.length;p++){var x=f[p],v=x.position.x-c.x,m=x.position.y-c.y;a.setPosition(x,{x:c.x+v*h,y:c.y+m*u}),a.scale(x,h,u)}return l},n.bounds=function(l){for(var h=n.allBodies(l),u=[],c=0;c<h.length;c+=1){var d=h[c];u.push(d.bounds.min,d.bounds.max)}return o.create(u)}})()},function(s,e,t){var n={};s.exports=n;var i=t(4),r=t(5),o=t(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(a,l){for(var h=l/o._baseDelta,u=n._motionSleepThreshold,c=0;c<a.length;c++){var d=a[c],f=i.getSpeed(d),p=i.getAngularSpeed(d),x=f*f+p*p;if(d.force.x!==0||d.force.y!==0){n.set(d,!1);continue}var v=Math.min(d.motion,x),m=Math.max(d.motion,x);d.motion=n._minBias*v+(1-n._minBias)*m,d.sleepThreshold>0&&d.motion<u?(d.sleepCounter+=1,d.sleepCounter>=d.sleepThreshold/h&&n.set(d,!0)):d.sleepCounter>0&&(d.sleepCounter-=1)}},n.afterCollisions=function(a){for(var l=n._motionSleepThreshold,h=0;h<a.length;h++){var u=a[h];if(u.isActive){var c=u.collision,d=c.bodyA.parent,f=c.bodyB.parent;if(!(d.isSleeping&&f.isSleeping||d.isStatic||f.isStatic)&&(d.isSleeping||f.isSleeping)){var p=d.isSleeping&&!d.isStatic?d:f,x=p===d?f:d;!p.isStatic&&x.motion>l&&n.set(p,!1)}}}},n.set=function(a,l){var h=a.isSleeping;l?(a.isSleeping=!0,a.sleepCounter=a.sleepThreshold,a.positionImpulse.x=0,a.positionImpulse.y=0,a.positionPrev.x=a.position.x,a.positionPrev.y=a.position.y,a.anglePrev=a.angle,a.speed=0,a.angularSpeed=0,a.motion=0,h||r.trigger(a,"sleepStart")):(a.isSleeping=!1,a.sleepCounter=0,h&&r.trigger(a,"sleepEnd"))}})()},function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(9);(function(){var o=[],a={overlap:0,axis:null},l={overlap:0,axis:null};n.create=function(h,u){return{pair:null,collided:!1,bodyA:h,bodyB:u,parentA:h.parent,parentB:u.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},n.collides=function(h,u,c){if(n._overlapAxes(a,h.vertices,u.vertices,h.axes),a.overlap<=0||(n._overlapAxes(l,u.vertices,h.vertices,u.axes),l.overlap<=0))return null;var d=c&&c.table[r.id(h,u)],f;d?f=d.collision:(f=n.create(h,u),f.collided=!0,f.bodyA=h.id<u.id?h:u,f.bodyB=h.id<u.id?u:h,f.parentA=f.bodyA.parent,f.parentB=f.bodyB.parent),h=f.bodyA,u=f.bodyB;var p;a.overlap<l.overlap?p=a:p=l;var x=f.normal,v=f.tangent,m=f.penetration,b=f.supports,g=p.overlap,_=p.axis,E=_.x,M=_.y,w=u.position.x-h.position.x,T=u.position.y-h.position.y;E*w+M*T>=0&&(E=-E,M=-M),x.x=E,x.y=M,v.x=-M,v.y=E,m.x=E*g,m.y=M*g,f.depth=g;var y=n._findSupports(h,u,x,1),S=0;if(i.contains(h.vertices,y[0])&&(b[S++]=y[0]),i.contains(h.vertices,y[1])&&(b[S++]=y[1]),S<2){var A=n._findSupports(u,h,x,-1);i.contains(u.vertices,A[0])&&(b[S++]=A[0]),S<2&&i.contains(u.vertices,A[1])&&(b[S++]=A[1])}return S===0&&(b[S++]=y[0]),f.supportCount=S,f},n._overlapAxes=function(h,u,c,d){var f=u.length,p=c.length,x=u[0].x,v=u[0].y,m=c[0].x,b=c[0].y,g=d.length,_=Number.MAX_VALUE,E=0,M,w,T,y,S,A;for(S=0;S<g;S++){var N=d[S],B=N.x,z=N.y,G=x*B+v*z,H=m*B+b*z,q=G,V=H;for(A=1;A<f;A+=1)y=u[A].x*B+u[A].y*z,y>q?q=y:y<G&&(G=y);for(A=1;A<p;A+=1)y=c[A].x*B+c[A].y*z,y>V?V=y:y<H&&(H=y);if(w=q-H,T=V-G,M=w<T?w:T,M<_&&(_=M,E=S,M<=0))break}h.axis=d[E],h.overlap=_},n._findSupports=function(h,u,c,d){var f=u.vertices,p=f.length,x=h.position.x,v=h.position.y,m=c.x*d,b=c.y*d,g=f[0],_=g,E=m*(x-_.x)+b*(v-_.y),M,w,T;for(T=1;T<p;T+=1)_=f[T],w=m*(x-_.x)+b*(v-_.y),w<E&&(E=w,g=_);return M=f[(p+g.index-1)%p],E=m*(x-M.x)+b*(v-M.y),_=f[(g.index+1)%p],m*(x-_.x)+b*(v-_.y)<E?(o[0]=g,o[1]=_,o):(o[0]=g,o[1]=M,o)}})()},function(s,e,t){var n={};s.exports=n;var i=t(16);(function(){n.create=function(r,o){var a=r.bodyA,l=r.bodyB,h={id:n.id(a,l),bodyA:a,bodyB:l,collision:r,contacts:[i.create(),i.create()],contactCount:0,separation:0,isActive:!0,isSensor:a.isSensor||l.isSensor,timeCreated:o,timeUpdated:o,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(h,r,o),h},n.update=function(r,o,a){var l=o.supports,h=o.supportCount,u=r.contacts,c=o.parentA,d=o.parentB;r.isActive=!0,r.timeUpdated=a,r.collision=o,r.separation=o.depth,r.inverseMass=c.inverseMass+d.inverseMass,r.friction=c.friction<d.friction?c.friction:d.friction,r.frictionStatic=c.frictionStatic>d.frictionStatic?c.frictionStatic:d.frictionStatic,r.restitution=c.restitution>d.restitution?c.restitution:d.restitution,r.slop=c.slop>d.slop?c.slop:d.slop,r.contactCount=h,o.pair=r;var f=l[0],p=u[0],x=l[1],v=u[1];(v.vertex===f||p.vertex===x)&&(u[1]=p,u[0]=p=v,v=u[1]),p.vertex=f,v.vertex=x},n.setActive=function(r,o,a){o?(r.isActive=!0,r.timeUpdated=a):(r.isActive=!1,r.contactCount=0)},n.id=function(r,o){return r.id<o.id?r.id.toString(36)+":"+o.id.toString(36):o.id.toString(36)+":"+r.id.toString(36)}})()},function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(2),o=t(7),a=t(1),l=t(11),h=t(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(u){var c=u;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var d=c.bodyA?r.add(c.bodyA.position,c.pointA):c.pointA,f=c.bodyB?r.add(c.bodyB.position,c.pointB):c.pointB,p=r.magnitude(r.sub(d,f));c.length=typeof c.length!="undefined"?c.length:p,c.id=c.id||h.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var x={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(x.type="pin",x.anchors=!1):c.stiffness<.9&&(x.type="spring"),c.render=h.extend(x,c.render),c},n.preSolveAll=function(u){for(var c=0;c<u.length;c+=1){var d=u[c],f=d.constraintImpulse;d.isStatic||f.x===0&&f.y===0&&f.angle===0||(d.position.x+=f.x,d.position.y+=f.y,d.angle+=f.angle)}},n.solveAll=function(u,c){for(var d=h.clamp(c/h._baseDelta,0,1),f=0;f<u.length;f+=1){var p=u[f],x=!p.bodyA||p.bodyA&&p.bodyA.isStatic,v=!p.bodyB||p.bodyB&&p.bodyB.isStatic;(x||v)&&n.solve(u[f],d)}for(f=0;f<u.length;f+=1)p=u[f],x=!p.bodyA||p.bodyA&&p.bodyA.isStatic,v=!p.bodyB||p.bodyB&&p.bodyB.isStatic,!x&&!v&&n.solve(u[f],d)},n.solve=function(u,c){var d=u.bodyA,f=u.bodyB,p=u.pointA,x=u.pointB;if(!(!d&&!f)){d&&!d.isStatic&&(r.rotate(p,d.angle-u.angleA,p),u.angleA=d.angle),f&&!f.isStatic&&(r.rotate(x,f.angle-u.angleB,x),u.angleB=f.angle);var v=p,m=x;if(d&&(v=r.add(d.position,p)),f&&(m=r.add(f.position,x)),!(!v||!m)){var b=r.sub(v,m),g=r.magnitude(b);g<n._minLength&&(g=n._minLength);var _=(g-u.length)/g,E=u.stiffness>=1||u.length===0,M=E?u.stiffness*c:u.stiffness*c*c,w=u.damping*c,T=r.mult(b,_*M),y=(d?d.inverseMass:0)+(f?f.inverseMass:0),S=(d?d.inverseInertia:0)+(f?f.inverseInertia:0),A=y+S,N,B,z,G,H;if(w>0){var q=r.create();z=r.div(b,g),H=r.sub(f&&r.sub(f.position,f.positionPrev)||q,d&&r.sub(d.position,d.positionPrev)||q),G=r.dot(z,H)}d&&!d.isStatic&&(B=d.inverseMass/y,d.constraintImpulse.x-=T.x*B,d.constraintImpulse.y-=T.y*B,d.position.x-=T.x*B,d.position.y-=T.y*B,w>0&&(d.positionPrev.x-=w*z.x*G*B,d.positionPrev.y-=w*z.y*G*B),N=r.cross(p,T)/A*n._torqueDampen*d.inverseInertia*(1-u.angularStiffness),d.constraintImpulse.angle-=N,d.angle-=N),f&&!f.isStatic&&(B=f.inverseMass/y,f.constraintImpulse.x+=T.x*B,f.constraintImpulse.y+=T.y*B,f.position.x+=T.x*B,f.position.y+=T.y*B,w>0&&(f.positionPrev.x+=w*z.x*G*B,f.positionPrev.y+=w*z.y*G*B),N=r.cross(x,T)/A*n._torqueDampen*f.inverseInertia*(1-u.angularStiffness),f.constraintImpulse.angle+=N,f.angle+=N)}}},n.postSolveAll=function(u){for(var c=0;c<u.length;c++){var d=u[c],f=d.constraintImpulse;if(!(d.isStatic||f.x===0&&f.y===0&&f.angle===0)){o.set(d,!1);for(var p=0;p<d.parts.length;p++){var x=d.parts[p];i.translate(x.vertices,f),p>0&&(x.position.x+=f.x,x.position.y+=f.y),f.angle!==0&&(i.rotate(x.vertices,f.angle,d.position),l.rotate(x.axes,f.angle),p>0&&r.rotateAbout(x.position,f.angle,d.position,x.position)),a.update(x.bounds,x.vertices,d.velocity)}f.angle*=n._warming,f.x*=n._warming,f.y*=n._warming}}},n.pointAWorld=function(u){return{x:(u.bodyA?u.bodyA.position.x:0)+(u.pointA?u.pointA.x:0),y:(u.bodyA?u.bodyA.position.y:0)+(u.pointA?u.pointA.y:0)}},n.pointBWorld=function(u){return{x:(u.bodyB?u.bodyB.position.x:0)+(u.pointB?u.pointB.x:0),y:(u.bodyB?u.bodyB.position.y:0)+(u.pointB?u.pointB.y:0)}},n.currentLength=function(u){var c=(u.bodyA?u.bodyA.position.x:0)+(u.pointA?u.pointA.x:0),d=(u.bodyA?u.bodyA.position.y:0)+(u.pointA?u.pointA.y:0),f=(u.bodyB?u.bodyB.position.x:0)+(u.pointB?u.pointB.x:0),p=(u.bodyB?u.bodyB.position.y:0)+(u.pointB?u.pointB.y:0),x=c-f,v=d-p;return Math.sqrt(x*x+v*v)}})()},function(s,e,t){var n={};s.exports=n;var i=t(2),r=t(0);(function(){n.fromVertices=function(o){for(var a={},l=0;l<o.length;l++){var h=(l+1)%o.length,u=i.normalise({x:o[h].y-o[l].y,y:o[l].x-o[h].x}),c=u.y===0?1/0:u.x/u.y;c=c.toFixed(3).toString(),a[c]=u}return r.values(a)},n.rotate=function(o,a){if(a!==0)for(var l=Math.cos(a),h=Math.sin(a),u=0;u<o.length;u++){var c=o[u],d;d=c.x*l-c.y*h,c.y=c.x*h+c.y*l,c.x=d}}})()},function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(0),o=t(4),a=t(1),l=t(2);(function(){n.rectangle=function(h,u,c,d,f){f=f||{};var p={label:"Rectangle Body",position:{x:h,y:u},vertices:i.fromPath("L 0 0 L "+c+" 0 L "+c+" "+d+" L 0 "+d)};if(f.chamfer){var x=f.chamfer;p.vertices=i.chamfer(p.vertices,x.radius,x.quality,x.qualityMin,x.qualityMax),delete f.chamfer}return o.create(r.extend({},p,f))},n.trapezoid=function(h,u,c,d,f,p){p=p||{},f>=1&&r.warn("Bodies.trapezoid: slope parameter must be < 1."),f*=.5;var x=(1-f*2)*c,v=c*f,m=v+x,b=m+v,g;f<.5?g="L 0 0 L "+v+" "+-d+" L "+m+" "+-d+" L "+b+" 0":g="L 0 0 L "+m+" "+-d+" L "+b+" 0";var _={label:"Trapezoid Body",position:{x:h,y:u},vertices:i.fromPath(g)};if(p.chamfer){var E=p.chamfer;_.vertices=i.chamfer(_.vertices,E.radius,E.quality,E.qualityMin,E.qualityMax),delete p.chamfer}return o.create(r.extend({},_,p))},n.circle=function(h,u,c,d,f){d=d||{};var p={label:"Circle Body",circleRadius:c};f=f||25;var x=Math.ceil(Math.max(10,Math.min(f,c)));return x%2===1&&(x+=1),n.polygon(h,u,x,c,r.extend({},p,d))},n.polygon=function(h,u,c,d,f){if(f=f||{},c<3)return n.circle(h,u,d,f);for(var p=2*Math.PI/c,x="",v=p*.5,m=0;m<c;m+=1){var b=v+m*p,g=Math.cos(b)*d,_=Math.sin(b)*d;x+="L "+g.toFixed(3)+" "+_.toFixed(3)+" "}var E={label:"Polygon Body",position:{x:h,y:u},vertices:i.fromPath(x)};if(f.chamfer){var M=f.chamfer;E.vertices=i.chamfer(E.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete f.chamfer}return o.create(r.extend({},E,f))},n.fromVertices=function(h,u,c,d,f,p,x,v){var m=r.getDecomp(),b,g,_,E,M,w,T,y,S,A,N;for(b=!!(m&&m.quickDecomp),d=d||{},_=[],f=typeof f!="undefined"?f:!1,p=typeof p!="undefined"?p:.01,x=typeof x!="undefined"?x:10,v=typeof v!="undefined"?v:.01,r.isArray(c[0])||(c=[c]),A=0;A<c.length;A+=1)if(w=c[A],E=i.isConvex(w),M=!E,M&&!b&&r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),E||!b)E?w=i.clockwiseSort(w):w=i.hull(w),_.push({position:{x:h,y:u},vertices:w});else{var B=w.map(function(D){return[D.x,D.y]});m.makeCCW(B),p!==!1&&m.removeCollinearPoints(B,p),v!==!1&&m.removeDuplicatePoints&&m.removeDuplicatePoints(B,v);var z=m.quickDecomp(B);for(T=0;T<z.length;T++){var G=z[T],H=G.map(function(D){return{x:D[0],y:D[1]}});x>0&&i.area(H)<x||_.push({position:i.centre(H),vertices:H})}}for(T=0;T<_.length;T++)_[T]=o.create(r.extend(_[T],d));if(f){var q=5;for(T=0;T<_.length;T++){var V=_[T];for(y=T+1;y<_.length;y++){var ce=_[y];if(a.overlaps(V.bounds,ce.bounds)){var Q=V.vertices,ue=ce.vertices;for(S=0;S<V.vertices.length;S++)for(N=0;N<ce.vertices.length;N++){var Se=l.magnitudeSquared(l.sub(Q[(S+1)%Q.length],ue[N])),Ae=l.magnitudeSquared(l.sub(Q[S],ue[(N+1)%ue.length]));Se<q&&Ae<q&&(Q[S].isInternal=!0,ue[N].isInternal=!0)}}}}}return _.length>1?(g=o.create(r.extend({parts:_.slice(0)},d)),o.setPosition(g,{x:h,y:u}),g):_[0]}})()},function(s,e,t){var n={};s.exports=n;var i=t(0),r=t(8);(function(){n.create=function(o){var a={bodies:[],collisions:[],pairs:null};return i.extend(a,o)},n.setBodies=function(o,a){o.bodies=a.slice(0)},n.clear=function(o){o.bodies=[],o.collisions=[]},n.collisions=function(o){var a=o.pairs,l=o.bodies,h=l.length,u=n.canCollide,c=r.collides,d=o.collisions,f=0,p,x;for(l.sort(n._compareBoundsX),p=0;p<h;p++){var v=l[p],m=v.bounds,b=v.bounds.max.x,g=v.bounds.max.y,_=v.bounds.min.y,E=v.isStatic||v.isSleeping,M=v.parts.length,w=M===1;for(x=p+1;x<h;x++){var T=l[x],y=T.bounds;if(y.min.x>b)break;if(!(g<y.min.y||_>y.max.y)&&!(E&&(T.isStatic||T.isSleeping))&&u(v.collisionFilter,T.collisionFilter)){var S=T.parts.length;if(w&&S===1){var A=c(v,T,a);A&&(d[f++]=A)}else for(var N=M>1?1:0,B=S>1?1:0,z=N;z<M;z++)for(var G=v.parts[z],m=G.bounds,H=B;H<S;H++){var q=T.parts[H],y=q.bounds;if(!(m.min.x>y.max.x||m.max.x<y.min.x||m.max.y<y.min.y||m.min.y>y.max.y)){var A=c(G,q,a);A&&(d[f++]=A)}}}}}return d.length!==f&&(d.length=f),d},n.canCollide=function(o,a){return o.group===a.group&&o.group!==0?o.group>0:(o.mask&a.category)!==0&&(a.mask&o.category)!==0},n._compareBoundsX=function(o,a){return o.bounds.min.x-a.bounds.min.x}})()},function(s,e,t){var n={};s.exports=n;var i=t(0);(function(){n.create=function(r){var o={};return r||i.log("Mouse.create: element was undefined, defaulting to document.body","warn"),o.element=r||document.body,o.absolute={x:0,y:0},o.position={x:0,y:0},o.mousedownPosition={x:0,y:0},o.mouseupPosition={x:0,y:0},o.offset={x:0,y:0},o.scale={x:1,y:1},o.wheelDelta=0,o.button=-1,o.pixelRatio=parseInt(o.element.getAttribute("data-pixel-ratio"),10)||1,o.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},o.mousemove=function(a){var l=n._getRelativeMousePosition(a,o.element,o.pixelRatio),h=a.changedTouches;h&&(o.button=0,a.preventDefault()),o.absolute.x=l.x,o.absolute.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.sourceEvents.mousemove=a},o.mousedown=function(a){var l=n._getRelativeMousePosition(a,o.element,o.pixelRatio),h=a.changedTouches;h?(o.button=0,a.preventDefault()):o.button=a.button,o.absolute.x=l.x,o.absolute.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.mousedownPosition.x=o.position.x,o.mousedownPosition.y=o.position.y,o.sourceEvents.mousedown=a},o.mouseup=function(a){var l=n._getRelativeMousePosition(a,o.element,o.pixelRatio),h=a.changedTouches;h&&a.preventDefault(),o.button=-1,o.absolute.x=l.x,o.absolute.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.mouseupPosition.x=o.position.x,o.mouseupPosition.y=o.position.y,o.sourceEvents.mouseup=a},o.mousewheel=function(a){o.wheelDelta=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail)),a.preventDefault(),o.sourceEvents.mousewheel=a},n.setElement(o,o.element),o},n.setElement=function(r,o){r.element=o,o.addEventListener("mousemove",r.mousemove,{passive:!0}),o.addEventListener("mousedown",r.mousedown,{passive:!0}),o.addEventListener("mouseup",r.mouseup,{passive:!0}),o.addEventListener("wheel",r.mousewheel,{passive:!1}),o.addEventListener("touchmove",r.mousemove,{passive:!1}),o.addEventListener("touchstart",r.mousedown,{passive:!1}),o.addEventListener("touchend",r.mouseup,{passive:!1})},n.clearSourceEvents=function(r){r.sourceEvents.mousemove=null,r.sourceEvents.mousedown=null,r.sourceEvents.mouseup=null,r.sourceEvents.mousewheel=null,r.wheelDelta=0},n.setOffset=function(r,o){r.offset.x=o.x,r.offset.y=o.y,r.position.x=r.absolute.x*r.scale.x+r.offset.x,r.position.y=r.absolute.y*r.scale.y+r.offset.y},n.setScale=function(r,o){r.scale.x=o.x,r.scale.y=o.y,r.position.x=r.absolute.x*r.scale.x+r.offset.x,r.position.y=r.absolute.y*r.scale.y+r.offset.y},n._getRelativeMousePosition=function(r,o,a){var l=o.getBoundingClientRect(),h=document.documentElement||document.body.parentNode||document.body,u=window.pageXOffset!==void 0?window.pageXOffset:h.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:h.scrollTop,d=r.changedTouches,f,p;return d?(f=d[0].pageX-l.left-u,p=d[0].pageY-l.top-c):(f=r.pageX-l.left-u,p=r.pageY-l.top-c),{x:f/(o.clientWidth/(o.width||o.clientWidth)*a),y:p/(o.clientHeight/(o.height||o.clientHeight)*a)}}})()},function(s,e,t){var n={};s.exports=n;var i=t(0);(function(){n._registry={},n.register=function(r){if(n.isPlugin(r)||i.warn("Plugin.register:",n.toString(r),"does not implement all required fields."),r.name in n._registry){var o=n._registry[r.name],a=n.versionParse(r.version).number,l=n.versionParse(o.version).number;a>l?(i.warn("Plugin.register:",n.toString(o),"was upgraded to",n.toString(r)),n._registry[r.name]=r):a<l?i.warn("Plugin.register:",n.toString(o),"can not be downgraded to",n.toString(r)):r!==o&&i.warn("Plugin.register:",n.toString(r),"is already registered to different plugin object")}else n._registry[r.name]=r;return r},n.resolve=function(r){return n._registry[n.dependencyParse(r).name]},n.toString=function(r){return typeof r=="string"?r:(r.name||"anonymous")+"@"+(r.version||r.range||"0.0.0")},n.isPlugin=function(r){return r&&r.name&&r.version&&r.install},n.isUsed=function(r,o){return r.used.indexOf(o)>-1},n.isFor=function(r,o){var a=r.for&&n.dependencyParse(r.for);return!r.for||o.name===a.name&&n.versionSatisfies(o.version,a.range)},n.use=function(r,o){if(r.uses=(r.uses||[]).concat(o||[]),r.uses.length===0){i.warn("Plugin.use:",n.toString(r),"does not specify any dependencies to install.");return}for(var a=n.dependencies(r),l=i.topologicalSort(a),h=[],u=0;u<l.length;u+=1)if(l[u]!==r.name){var c=n.resolve(l[u]);if(!c){h.push("\u274C "+l[u]);continue}n.isUsed(r,c.name)||(n.isFor(c,r)||(i.warn("Plugin.use:",n.toString(c),"is for",c.for,"but installed on",n.toString(r)+"."),c._warned=!0),c.install?c.install(r):(i.warn("Plugin.use:",n.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(h.push("\u{1F536} "+n.toString(c)),delete c._warned):h.push("\u2705 "+n.toString(c)),r.used.push(c.name))}h.length>0&&i.info(h.join("  "))},n.dependencies=function(r,o){var a=n.dependencyParse(r),l=a.name;if(o=o||{},!(l in o)){r=n.resolve(r)||r,o[l]=i.map(r.uses||[],function(u){n.isPlugin(u)&&n.register(u);var c=n.dependencyParse(u),d=n.resolve(u);return d&&!n.versionSatisfies(d.version,c.range)?(i.warn("Plugin.dependencies:",n.toString(d),"does not satisfy",n.toString(c),"used by",n.toString(a)+"."),d._warned=!0,r._warned=!0):d||(i.warn("Plugin.dependencies:",n.toString(u),"used by",n.toString(a),"could not be resolved."),r._warned=!0),c.name});for(var h=0;h<o[l].length;h+=1)n.dependencies(o[l][h],o);return o}},n.dependencyParse=function(r){if(i.isString(r)){var o=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return o.test(r)||i.warn("Plugin.dependencyParse:",r,"is not a valid dependency string."),{name:r.split("@")[0],range:r.split("@")[1]||"*"}}return{name:r.name,range:r.range||r.version}},n.versionParse=function(r){var o=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;o.test(r)||i.warn("Plugin.versionParse:",r,"is not a valid version or range.");var a=o.exec(r),l=Number(a[4]),h=Number(a[5]),u=Number(a[6]);return{isRange:!!(a[1]||a[2]),version:a[3],range:r,operator:a[1]||a[2]||"",major:l,minor:h,patch:u,parts:[l,h,u],prerelease:a[7],number:l*1e8+h*1e4+u}},n.versionSatisfies=function(r,o){o=o||"*";var a=n.versionParse(o),l=n.versionParse(r);if(a.isRange){if(a.operator==="*"||r==="*")return!0;if(a.operator===">")return l.number>a.number;if(a.operator===">=")return l.number>=a.number;if(a.operator==="~")return l.major===a.major&&l.minor===a.minor&&l.patch>=a.patch;if(a.operator==="^")return a.major>0?l.major===a.major&&l.number>=a.number:a.minor>0?l.minor===a.minor&&l.patch>=a.patch:l.patch===a.patch}return r===o||r==="*"}})()},function(s,e){var t={};s.exports=t,function(){t.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}}()},function(s,e,t){var n={};s.exports=n;var i=t(7),r=t(18),o=t(13),a=t(19),l=t(5),h=t(6),u=t(10),c=t(0),d=t(4);(function(){n._deltaMax=1e3/60,n.create=function(f){f=f||{};var p={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},x=c.extend(p,f);return x.world=f.world||h.create({label:"World"}),x.pairs=f.pairs||a.create(),x.detector=f.detector||o.create(),x.detector.pairs=x.pairs,x.grid={buckets:[]},x.world.gravity=x.gravity,x.broadphase=x.grid,x.metrics={},x},n.update=function(f,p){var x=c.now(),v=f.world,m=f.detector,b=f.pairs,g=f.timing,_=g.timestamp,E;p>n._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",n._deltaMax.toFixed(3),"ms."),p=typeof p!="undefined"?p:c._baseDelta,p*=g.timeScale,g.timestamp+=p,g.lastDelta=p;var M={timestamp:g.timestamp,delta:p};l.trigger(f,"beforeUpdate",M);var w=h.allBodies(v),T=h.allConstraints(v);for(v.isModified&&(o.setBodies(m,w),h.setModified(v,!1,!1,!0)),f.enableSleeping&&i.update(w,p),n._bodiesApplyGravity(w,f.gravity),p>0&&n._bodiesUpdate(w,p),l.trigger(f,"beforeSolve",M),u.preSolveAll(w),E=0;E<f.constraintIterations;E++)u.solveAll(T,p);u.postSolveAll(w);var y=o.collisions(m);a.update(b,y,_),f.enableSleeping&&i.afterCollisions(b.list),b.collisionStart.length>0&&l.trigger(f,"collisionStart",{pairs:b.collisionStart,timestamp:g.timestamp,delta:p});var S=c.clamp(20/f.positionIterations,0,1);for(r.preSolvePosition(b.list),E=0;E<f.positionIterations;E++)r.solvePosition(b.list,p,S);for(r.postSolvePosition(w),u.preSolveAll(w),E=0;E<f.constraintIterations;E++)u.solveAll(T,p);for(u.postSolveAll(w),r.preSolveVelocity(b.list),E=0;E<f.velocityIterations;E++)r.solveVelocity(b.list,p);return n._bodiesUpdateVelocities(w),b.collisionActive.length>0&&l.trigger(f,"collisionActive",{pairs:b.collisionActive,timestamp:g.timestamp,delta:p}),b.collisionEnd.length>0&&l.trigger(f,"collisionEnd",{pairs:b.collisionEnd,timestamp:g.timestamp,delta:p}),n._bodiesClearForces(w),l.trigger(f,"afterUpdate",M),f.timing.lastElapsed=c.now()-x,f},n.merge=function(f,p){if(c.extend(f,p),p.world){f.world=p.world,n.clear(f);for(var x=h.allBodies(f.world),v=0;v<x.length;v++){var m=x[v];i.set(m,!1),m.id=c.nextId()}}},n.clear=function(f){a.clear(f.pairs),o.clear(f.detector)},n._bodiesClearForces=function(f){for(var p=f.length,x=0;x<p;x++){var v=f[x];v.force.x=0,v.force.y=0,v.torque=0}},n._bodiesApplyGravity=function(f,p){var x=typeof p.scale!="undefined"?p.scale:.001,v=f.length;if(!(p.x===0&&p.y===0||x===0))for(var m=0;m<v;m++){var b=f[m];b.isStatic||b.isSleeping||(b.force.y+=b.mass*p.y*x,b.force.x+=b.mass*p.x*x)}},n._bodiesUpdate=function(f,p){for(var x=f.length,v=0;v<x;v++){var m=f[v];m.isStatic||m.isSleeping||d.update(m,p)}},n._bodiesUpdateVelocities=function(f){for(var p=f.length,x=0;x<p;x++)d.updateVelocities(f[x])}})()},function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(0),o=t(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(a){var l,h,u,c=a.length;for(l=0;l<c;l++)h=a[l],h.isActive&&(u=h.contactCount,h.collision.parentA.totalContacts+=u,h.collision.parentB.totalContacts+=u)},n.solvePosition=function(a,l,h){var u,c,d,f,p,x,v,m,b=n._positionDampen*(h||1),g=r.clamp(l/r._baseDelta,0,1),_=a.length;for(u=0;u<_;u++)c=a[u],!(!c.isActive||c.isSensor)&&(d=c.collision,f=d.parentA,p=d.parentB,x=d.normal,c.separation=d.depth+x.x*(p.positionImpulse.x-f.positionImpulse.x)+x.y*(p.positionImpulse.y-f.positionImpulse.y));for(u=0;u<_;u++)c=a[u],!(!c.isActive||c.isSensor)&&(d=c.collision,f=d.parentA,p=d.parentB,x=d.normal,m=c.separation-c.slop*g,(f.isStatic||p.isStatic)&&(m*=2),f.isStatic||f.isSleeping||(v=b/f.totalContacts,f.positionImpulse.x+=x.x*m*v,f.positionImpulse.y+=x.y*m*v),p.isStatic||p.isSleeping||(v=b/p.totalContacts,p.positionImpulse.x-=x.x*m*v,p.positionImpulse.y-=x.y*m*v))},n.postSolvePosition=function(a){for(var l=n._positionWarming,h=a.length,u=i.translate,c=o.update,d=0;d<h;d++){var f=a[d],p=f.positionImpulse,x=p.x,v=p.y,m=f.velocity;if(f.totalContacts=0,x!==0||v!==0){for(var b=0;b<f.parts.length;b++){var g=f.parts[b];u(g.vertices,p),c(g.bounds,g.vertices,m),g.position.x+=x,g.position.y+=v}f.positionPrev.x+=x,f.positionPrev.y+=v,x*m.x+v*m.y<0?(p.x=0,p.y=0):(p.x*=l,p.y*=l)}}},n.preSolveVelocity=function(a){var l=a.length,h,u;for(h=0;h<l;h++){var c=a[h];if(!(!c.isActive||c.isSensor)){var d=c.contacts,f=c.contactCount,p=c.collision,x=p.parentA,v=p.parentB,m=p.normal,b=p.tangent;for(u=0;u<f;u++){var g=d[u],_=g.vertex,E=g.normalImpulse,M=g.tangentImpulse;if(E!==0||M!==0){var w=m.x*E+b.x*M,T=m.y*E+b.y*M;x.isStatic||x.isSleeping||(x.positionPrev.x+=w*x.inverseMass,x.positionPrev.y+=T*x.inverseMass,x.anglePrev+=x.inverseInertia*((_.x-x.position.x)*T-(_.y-x.position.y)*w)),v.isStatic||v.isSleeping||(v.positionPrev.x-=w*v.inverseMass,v.positionPrev.y-=T*v.inverseMass,v.anglePrev-=v.inverseInertia*((_.x-v.position.x)*T-(_.y-v.position.y)*w))}}}}},n.solveVelocity=function(a,l){var h=l/r._baseDelta,u=h*h,c=u*h,d=-n._restingThresh*h,f=n._restingThreshTangent,p=n._frictionNormalMultiplier*h,x=n._frictionMaxStatic,v=a.length,m,b,g,_;for(g=0;g<v;g++){var E=a[g];if(!(!E.isActive||E.isSensor)){var M=E.collision,w=M.parentA,T=M.parentB,y=M.normal.x,S=M.normal.y,A=M.tangent.x,N=M.tangent.y,B=E.inverseMass,z=E.friction*E.frictionStatic*p,G=E.contacts,H=E.contactCount,q=1/H,V=w.position.x-w.positionPrev.x,ce=w.position.y-w.positionPrev.y,Q=w.angle-w.anglePrev,ue=T.position.x-T.positionPrev.x,Se=T.position.y-T.positionPrev.y,Ae=T.angle-T.anglePrev;for(_=0;_<H;_++){var D=G[_],O=D.vertex,L=O.x-w.position.x,P=O.y-w.position.y,J=O.x-T.position.x,le=O.y-T.position.y,Y=V-P*Q,ge=ce+L*Q,ve=ue-le*Ae,fe=Se+J*Ae,R=Y-ve,j=ge-fe,ee=y*R+S*j,ne=A*R+N*j,k=E.separation+ee,U=Math.min(k,1);U=k<0?0:U;var te=U*z;ne<-te||ne>te?(b=ne>0?ne:-ne,m=E.friction*(ne>0?1:-1)*c,m<-b?m=-b:m>b&&(m=b)):(m=ne,b=x);var me=L*S-P*y,Fe=J*S-le*y,F=q/(B+w.inverseInertia*me*me+T.inverseInertia*Fe*Fe),C=(1+E.restitution)*ee*F;if(m*=F,ee<d)D.normalImpulse=0;else{var K=D.normalImpulse;D.normalImpulse+=C,D.normalImpulse>0&&(D.normalImpulse=0),C=D.normalImpulse-K}if(ne<-f||ne>f)D.tangentImpulse=0;else{var re=D.tangentImpulse;D.tangentImpulse+=m,D.tangentImpulse<-b&&(D.tangentImpulse=-b),D.tangentImpulse>b&&(D.tangentImpulse=b),m=D.tangentImpulse-re}var he=y*C+A*m,oe=S*C+N*m;w.isStatic||w.isSleeping||(w.positionPrev.x+=he*w.inverseMass,w.positionPrev.y+=oe*w.inverseMass,w.anglePrev+=(L*oe-P*he)*w.inverseInertia),T.isStatic||T.isSleeping||(T.positionPrev.x-=he*T.inverseMass,T.positionPrev.y-=oe*T.inverseMass,T.anglePrev-=(J*oe-le*he)*T.inverseInertia)}}}}})()},function(s,e,t){var n={};s.exports=n;var i=t(9),r=t(0);(function(){n.create=function(o){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},o)},n.update=function(o,a,l){var h=i.update,u=i.create,c=i.setActive,d=o.table,f=o.list,p=f.length,x=p,v=o.collisionStart,m=o.collisionEnd,b=o.collisionActive,g=a.length,_=0,E=0,M=0,w,T,y;for(y=0;y<g;y++)w=a[y],T=w.pair,T?(T.isActive&&(b[M++]=T),h(T,w,l)):(T=u(w,l),d[T.id]=T,v[_++]=T,f[x++]=T);for(x=0,p=f.length,y=0;y<p;y++)T=f[y],T.timeUpdated>=l?f[x++]=T:(c(T,!1,l),T.collision.bodyA.sleepCounter>0&&T.collision.bodyB.sleepCounter>0?f[x++]=T:(m[E++]=T,delete d[T.id]));f.length!==x&&(f.length=x),v.length!==_&&(v.length=_),m.length!==E&&(m.length=E),b.length!==M&&(b.length=M)},n.clear=function(o){return o.table={},o.list.length=0,o.collisionStart.length=0,o.collisionActive.length=0,o.collisionEnd.length=0,o}})()},function(s,e,t){var n=s.exports=t(21);n.Axes=t(11),n.Bodies=t(12),n.Body=t(4),n.Bounds=t(1),n.Collision=t(8),n.Common=t(0),n.Composite=t(6),n.Composites=t(22),n.Constraint=t(10),n.Contact=t(16),n.Detector=t(13),n.Engine=t(17),n.Events=t(5),n.Grid=t(23),n.Mouse=t(14),n.MouseConstraint=t(24),n.Pair=t(9),n.Pairs=t(19),n.Plugin=t(15),n.Query=t(25),n.Render=t(26),n.Resolver=t(18),n.Runner=t(27),n.SAT=t(28),n.Sleeping=t(7),n.Svg=t(29),n.Vector=t(2),n.Vertices=t(3),n.World=t(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run \u27A4 use Matter.Runner.run(engine) instead")},function(s,e,t){var n={};s.exports=n;var i=t(15),r=t(0);(function(){n.name="matter-js",n.version="0.20.0",n.uses=[],n.used=[],n.use=function(){i.use(n,Array.prototype.slice.call(arguments))},n.before=function(o,a){return o=o.replace(/^Matter./,""),r.chainPathBefore(n,o,a)},n.after=function(o,a){return o=o.replace(/^Matter./,""),r.chainPathAfter(n,o,a)}})()},function(s,e,t){var n={};s.exports=n;var i=t(6),r=t(10),o=t(0),a=t(4),l=t(12),h=o.deprecated;(function(){n.stack=function(u,c,d,f,p,x,v){for(var m=i.create({label:"Stack"}),b=u,g=c,_,E=0,M=0;M<f;M++){for(var w=0,T=0;T<d;T++){var y=v(b,g,T,M,_,E);if(y){var S=y.bounds.max.y-y.bounds.min.y,A=y.bounds.max.x-y.bounds.min.x;S>w&&(w=S),a.translate(y,{x:A*.5,y:S*.5}),b=y.bounds.max.x+p,i.addBody(m,y),_=y,E+=1}else b+=p}g+=w+x,b=u}return m},n.chain=function(u,c,d,f,p,x){for(var v=u.bodies,m=1;m<v.length;m++){var b=v[m-1],g=v[m],_=b.bounds.max.y-b.bounds.min.y,E=b.bounds.max.x-b.bounds.min.x,M=g.bounds.max.y-g.bounds.min.y,w=g.bounds.max.x-g.bounds.min.x,T={bodyA:b,pointA:{x:E*c,y:_*d},bodyB:g,pointB:{x:w*f,y:M*p}},y=o.extend(T,x);i.addConstraint(u,r.create(y))}return u.label+=" Chain",u},n.mesh=function(u,c,d,f,p){var x=u.bodies,v,m,b,g,_;for(v=0;v<d;v++){for(m=1;m<c;m++)b=x[m-1+v*c],g=x[m+v*c],i.addConstraint(u,r.create(o.extend({bodyA:b,bodyB:g},p)));if(v>0)for(m=0;m<c;m++)b=x[m+(v-1)*c],g=x[m+v*c],i.addConstraint(u,r.create(o.extend({bodyA:b,bodyB:g},p))),f&&m>0&&(_=x[m-1+(v-1)*c],i.addConstraint(u,r.create(o.extend({bodyA:_,bodyB:g},p)))),f&&m<c-1&&(_=x[m+1+(v-1)*c],i.addConstraint(u,r.create(o.extend({bodyA:_,bodyB:g},p))))}return u.label+=" Mesh",u},n.pyramid=function(u,c,d,f,p,x,v){return n.stack(u,c,d,f,p,x,function(m,b,g,_,E,M){var w=Math.min(f,Math.ceil(d/2)),T=E?E.bounds.max.x-E.bounds.min.x:0;if(!(_>w)){_=w-_;var y=_,S=d-1-_;if(!(g<y||g>S)){M===1&&a.translate(E,{x:(g+(d%2===1?1:-1))*T,y:0});var A=E?g*T:0;return v(u+A+g*p,b,g,_,E,M)}}})},n.newtonsCradle=function(u,c,d,f,p){for(var x=i.create({label:"Newtons Cradle"}),v=0;v<d;v++){var m=1.9,b=l.circle(u+v*(f*m),c+p,f,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),g=r.create({pointA:{x:u+v*(f*m),y:c},bodyB:b});i.addBody(x,b),i.addConstraint(x,g)}return x},h(n,"newtonsCradle","Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),n.car=function(u,c,d,f,p){var x=a.nextGroup(!0),v=20,m=-d*.5+v,b=d*.5-v,g=0,_=i.create({label:"Car"}),E=l.rectangle(u,c,d,f,{collisionFilter:{group:x},chamfer:{radius:f*.5},density:2e-4}),M=l.circle(u+m,c+g,p,{collisionFilter:{group:x},friction:.8}),w=l.circle(u+b,c+g,p,{collisionFilter:{group:x},friction:.8}),T=r.create({bodyB:E,pointB:{x:m,y:g},bodyA:M,stiffness:1,length:0}),y=r.create({bodyB:E,pointB:{x:b,y:g},bodyA:w,stiffness:1,length:0});return i.addBody(_,E),i.addBody(_,M),i.addBody(_,w),i.addConstraint(_,T),i.addConstraint(_,y),_},h(n,"car","Composites.car \u27A4 moved to car example"),n.softBody=function(u,c,d,f,p,x,v,m,b,g){b=o.extend({inertia:1/0},b),g=o.extend({stiffness:.2,render:{type:"line",anchors:!1}},g);var _=n.stack(u,c,d,f,p,x,function(E,M){return l.circle(E,M,m,b)});return n.mesh(_,d,f,v,g),_.label="Soft Body",_},h(n,"softBody","Composites.softBody \u27A4 moved to softBody and cloth examples")})()},function(s,e,t){var n={};s.exports=n;var i=t(9),r=t(0),o=r.deprecated;(function(){n.create=function(a){var l={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return r.extend(l,a)},n.update=function(a,l,h,u){var c,d,f,p=h.world,x=a.buckets,v,m,b=!1;for(c=0;c<l.length;c++){var g=l[c];if(!(g.isSleeping&&!u)&&!(p.bounds&&(g.bounds.max.x<p.bounds.min.x||g.bounds.min.x>p.bounds.max.x||g.bounds.max.y<p.bounds.min.y||g.bounds.min.y>p.bounds.max.y))){var _=n._getRegion(a,g);if(!g.region||_.id!==g.region.id||u){(!g.region||u)&&(g.region=_);var E=n._regionUnion(_,g.region);for(d=E.startCol;d<=E.endCol;d++)for(f=E.startRow;f<=E.endRow;f++){m=n._getBucketId(d,f),v=x[m];var M=d>=_.startCol&&d<=_.endCol&&f>=_.startRow&&f<=_.endRow,w=d>=g.region.startCol&&d<=g.region.endCol&&f>=g.region.startRow&&f<=g.region.endRow;!M&&w&&w&&v&&n._bucketRemoveBody(a,v,g),(g.region===_||M&&!w||u)&&(v||(v=n._createBucket(x,m)),n._bucketAddBody(a,v,g))}g.region=_,b=!0}}}b&&(a.pairsList=n._createActivePairsList(a))},o(n,"update","Grid.update \u27A4 replaced by Matter.Detector"),n.clear=function(a){a.buckets={},a.pairs={},a.pairsList=[]},o(n,"clear","Grid.clear \u27A4 replaced by Matter.Detector"),n._regionUnion=function(a,l){var h=Math.min(a.startCol,l.startCol),u=Math.max(a.endCol,l.endCol),c=Math.min(a.startRow,l.startRow),d=Math.max(a.endRow,l.endRow);return n._createRegion(h,u,c,d)},n._getRegion=function(a,l){var h=l.bounds,u=Math.floor(h.min.x/a.bucketWidth),c=Math.floor(h.max.x/a.bucketWidth),d=Math.floor(h.min.y/a.bucketHeight),f=Math.floor(h.max.y/a.bucketHeight);return n._createRegion(u,c,d,f)},n._createRegion=function(a,l,h,u){return{id:a+","+l+","+h+","+u,startCol:a,endCol:l,startRow:h,endRow:u}},n._getBucketId=function(a,l){return"C"+a+"R"+l},n._createBucket=function(a,l){var h=a[l]=[];return h},n._bucketAddBody=function(a,l,h){var u=a.pairs,c=i.id,d=l.length,f;for(f=0;f<d;f++){var p=l[f];if(!(h.id===p.id||h.isStatic&&p.isStatic)){var x=c(h,p),v=u[x];v?v[2]+=1:u[x]=[h,p,1]}}l.push(h)},n._bucketRemoveBody=function(a,l,h){var u=a.pairs,c=i.id,d;l.splice(r.indexOf(l,h),1);var f=l.length;for(d=0;d<f;d++){var p=u[c(h,l[d])];p&&(p[2]-=1)}},n._createActivePairsList=function(a){var l,h=a.pairs,u=r.keys(h),c=u.length,d=[],f;for(f=0;f<c;f++)l=h[u[f]],l[2]>0?d.push(l):delete h[u[f]];return d}})()},function(s,e,t){var n={};s.exports=n;var i=t(3),r=t(7),o=t(14),a=t(5),l=t(13),h=t(10),u=t(6),c=t(0),d=t(1);(function(){n.create=function(f,p){var x=(f?f.mouse:null)||(p?p.mouse:null);x||(f&&f.render&&f.render.canvas?x=o.create(f.render.canvas):p&&p.element?x=o.create(p.element):(x=o.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var v=h.create({label:"Mouse Constraint",pointA:x.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),m={type:"mouseConstraint",mouse:x,element:null,body:null,constraint:v,collisionFilter:{category:1,mask:4294967295,group:0}},b=c.extend(m,p);return a.on(f,"beforeUpdate",function(){var g=u.allBodies(f.world);n.update(b,g),n._triggerEvents(b)}),b},n.update=function(f,p){var x=f.mouse,v=f.constraint,m=f.body;if(x.button===0){if(v.bodyB)r.set(v.bodyB,!1),v.pointA=x.position;else for(var b=0;b<p.length;b++)if(m=p[b],d.contains(m.bounds,x.position)&&l.canCollide(m.collisionFilter,f.collisionFilter))for(var g=m.parts.length>1?1:0;g<m.parts.length;g++){var _=m.parts[g];if(i.contains(_.vertices,x.position)){v.pointA=x.position,v.bodyB=f.body=m,v.pointB={x:x.position.x-m.position.x,y:x.position.y-m.position.y},v.angleB=m.angle,r.set(m,!1),a.trigger(f,"startdrag",{mouse:x,body:m});break}}}else v.bodyB=f.body=null,v.pointB=null,m&&a.trigger(f,"enddrag",{mouse:x,body:m})},n._triggerEvents=function(f){var p=f.mouse,x=p.sourceEvents;x.mousemove&&a.trigger(f,"mousemove",{mouse:p}),x.mousedown&&a.trigger(f,"mousedown",{mouse:p}),x.mouseup&&a.trigger(f,"mouseup",{mouse:p}),o.clearSourceEvents(p)}})()},function(s,e,t){var n={};s.exports=n;var i=t(2),r=t(8),o=t(1),a=t(12),l=t(3);(function(){n.collides=function(h,u){for(var c=[],d=u.length,f=h.bounds,p=r.collides,x=o.overlaps,v=0;v<d;v++){var m=u[v],b=m.parts.length,g=b===1?0:1;if(x(m.bounds,f))for(var _=g;_<b;_++){var E=m.parts[_];if(x(E.bounds,f)){var M=p(E,h);if(M){c.push(M);break}}}}return c},n.ray=function(h,u,c,d){d=d||1e-100;for(var f=i.angle(u,c),p=i.magnitude(i.sub(u,c)),x=(c.x+u.x)*.5,v=(c.y+u.y)*.5,m=a.rectangle(x,v,p,d,{angle:f}),b=n.collides(m,h),g=0;g<b.length;g+=1){var _=b[g];_.body=_.bodyB=_.bodyA}return b},n.region=function(h,u,c){for(var d=[],f=0;f<h.length;f++){var p=h[f],x=o.overlaps(p.bounds,u);(x&&!c||!x&&c)&&d.push(p)}return d},n.point=function(h,u){for(var c=[],d=0;d<h.length;d++){var f=h[d];if(o.contains(f.bounds,u))for(var p=f.parts.length===1?0:1;p<f.parts.length;p++){var x=f.parts[p];if(o.contains(x.bounds,u)&&l.contains(x.vertices,u)){c.push(f);break}}}return c}})()},function(s,e,t){var n={};s.exports=n;var i=t(4),r=t(0),o=t(6),a=t(1),l=t(5),h=t(2),u=t(14);(function(){var c,d;typeof window!="undefined"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(g){window.setTimeout(function(){g(r.now())},1e3/60)},d=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(g){var _={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!g.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},E=r.extend(_,g);return E.canvas&&(E.canvas.width=E.options.width||E.canvas.width,E.canvas.height=E.options.height||E.canvas.height),E.mouse=g.mouse,E.engine=g.engine,E.canvas=E.canvas||x(E.options.width,E.options.height),E.context=E.canvas.getContext("2d"),E.textures={},E.bounds=E.bounds||{min:{x:0,y:0},max:{x:E.canvas.width,y:E.canvas.height}},E.controller=n,E.options.showBroadphase=!1,E.options.pixelRatio!==1&&n.setPixelRatio(E,E.options.pixelRatio),r.isElement(E.element)&&E.element.appendChild(E.canvas),E},n.run=function(g){(function _(E){g.frameRequestId=c(_),f(g,E),n.world(g,E),g.context.setTransform(g.options.pixelRatio,0,0,g.options.pixelRatio,0,0),(g.options.showStats||g.options.showDebug)&&n.stats(g,g.context,E),(g.options.showPerformance||g.options.showDebug)&&n.performance(g,g.context,E),g.context.setTransform(1,0,0,1,0,0)})()},n.stop=function(g){d(g.frameRequestId)},n.setPixelRatio=function(g,_){var E=g.options,M=g.canvas;_==="auto"&&(_=v(M)),E.pixelRatio=_,M.setAttribute("data-pixel-ratio",_),M.width=E.width*_,M.height=E.height*_,M.style.width=E.width+"px",M.style.height=E.height+"px"},n.setSize=function(g,_,E){g.options.width=_,g.options.height=E,g.bounds.max.x=g.bounds.min.x+_,g.bounds.max.y=g.bounds.min.y+E,g.options.pixelRatio!==1?n.setPixelRatio(g,g.options.pixelRatio):(g.canvas.width=_,g.canvas.height=E)},n.lookAt=function(g,_,E,M){M=typeof M!="undefined"?M:!0,_=r.isArray(_)?_:[_],E=E||{x:0,y:0};for(var w={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},T=0;T<_.length;T+=1){var y=_[T],S=y.bounds?y.bounds.min:y.min||y.position||y,A=y.bounds?y.bounds.max:y.max||y.position||y;S&&A&&(S.x<w.min.x&&(w.min.x=S.x),A.x>w.max.x&&(w.max.x=A.x),S.y<w.min.y&&(w.min.y=S.y),A.y>w.max.y&&(w.max.y=A.y))}var N=w.max.x-w.min.x+2*E.x,B=w.max.y-w.min.y+2*E.y,z=g.canvas.height,G=g.canvas.width,H=G/z,q=N/B,V=1,ce=1;q>H?ce=q/H:V=H/q,g.options.hasBounds=!0,g.bounds.min.x=w.min.x,g.bounds.max.x=w.min.x+N*V,g.bounds.min.y=w.min.y,g.bounds.max.y=w.min.y+B*ce,M&&(g.bounds.min.x+=N*.5-N*V*.5,g.bounds.max.x+=N*.5-N*V*.5,g.bounds.min.y+=B*.5-B*ce*.5,g.bounds.max.y+=B*.5-B*ce*.5),g.bounds.min.x-=E.x,g.bounds.max.x-=E.x,g.bounds.min.y-=E.y,g.bounds.max.y-=E.y,g.mouse&&(u.setScale(g.mouse,{x:(g.bounds.max.x-g.bounds.min.x)/g.canvas.width,y:(g.bounds.max.y-g.bounds.min.y)/g.canvas.height}),u.setOffset(g.mouse,g.bounds.min))},n.startViewTransform=function(g){var _=g.bounds.max.x-g.bounds.min.x,E=g.bounds.max.y-g.bounds.min.y,M=_/g.options.width,w=E/g.options.height;g.context.setTransform(g.options.pixelRatio/M,0,0,g.options.pixelRatio/w,0,0),g.context.translate(-g.bounds.min.x,-g.bounds.min.y)},n.endViewTransform=function(g){g.context.setTransform(g.options.pixelRatio,0,0,g.options.pixelRatio,0,0)},n.world=function(g,_){var E=r.now(),M=g.engine,w=M.world,T=g.canvas,y=g.context,S=g.options,A=g.timing,N=o.allBodies(w),B=o.allConstraints(w),z=S.wireframes?S.wireframeBackground:S.background,G=[],H=[],q,V={timestamp:M.timing.timestamp};if(l.trigger(g,"beforeRender",V),g.currentBackground!==z&&b(g,z),y.globalCompositeOperation="source-in",y.fillStyle="transparent",y.fillRect(0,0,T.width,T.height),y.globalCompositeOperation="source-over",S.hasBounds){for(q=0;q<N.length;q++){var ce=N[q];a.overlaps(ce.bounds,g.bounds)&&G.push(ce)}for(q=0;q<B.length;q++){var Q=B[q],ue=Q.bodyA,Se=Q.bodyB,Ae=Q.pointA,D=Q.pointB;ue&&(Ae=h.add(ue.position,Q.pointA)),Se&&(D=h.add(Se.position,Q.pointB)),!(!Ae||!D)&&(a.contains(g.bounds,Ae)||a.contains(g.bounds,D))&&H.push(Q)}n.startViewTransform(g),g.mouse&&(u.setScale(g.mouse,{x:(g.bounds.max.x-g.bounds.min.x)/g.options.width,y:(g.bounds.max.y-g.bounds.min.y)/g.options.height}),u.setOffset(g.mouse,g.bounds.min))}else H=B,G=N,g.options.pixelRatio!==1&&g.context.setTransform(g.options.pixelRatio,0,0,g.options.pixelRatio,0,0);!S.wireframes||M.enableSleeping&&S.showSleeping?n.bodies(g,G,y):(S.showConvexHulls&&n.bodyConvexHulls(g,G,y),n.bodyWireframes(g,G,y)),S.showBounds&&n.bodyBounds(g,G,y),(S.showAxes||S.showAngleIndicator)&&n.bodyAxes(g,G,y),S.showPositions&&n.bodyPositions(g,G,y),S.showVelocity&&n.bodyVelocity(g,G,y),S.showIds&&n.bodyIds(g,G,y),S.showSeparations&&n.separations(g,M.pairs.list,y),S.showCollisions&&n.collisions(g,M.pairs.list,y),S.showVertexNumbers&&n.vertexNumbers(g,G,y),S.showMousePosition&&n.mousePosition(g,g.mouse,y),n.constraints(H,y),S.hasBounds&&n.endViewTransform(g),l.trigger(g,"afterRender",V),A.lastElapsed=r.now()-E},n.stats=function(g,_,E){for(var M=g.engine,w=M.world,T=o.allBodies(w),y=0,S=55,A=44,N=0,B=0,z=0;z<T.length;z+=1)y+=T[z].parts.length;var G={Part:y,Body:T.length,Cons:o.allConstraints(w).length,Comp:o.allComposites(w).length,Pair:M.pairs.list.length};_.fillStyle="#0e0f19",_.fillRect(N,B,S*5.5,A),_.font="12px Arial",_.textBaseline="top",_.textAlign="right";for(var H in G){var q=G[H];_.fillStyle="#aaa",_.fillText(H,N+S,B+8),_.fillStyle="#eee",_.fillText(q,N+S,B+26),N+=S}},n.performance=function(g,_){var E=g.engine,M=g.timing,w=M.deltaHistory,T=M.elapsedHistory,y=M.timestampElapsedHistory,S=M.engineDeltaHistory,A=M.engineUpdatesHistory,N=M.engineElapsedHistory,B=E.timing.lastUpdatesPerFrame,z=E.timing.lastDelta,G=p(w),H=p(T),q=p(S),V=p(A),ce=p(N),Q=p(y),ue=Q/G||0,Se=Math.round(G/z),Ae=1e3/G||0,D=4,O=12,L=60,P=34,J=10,le=69;_.fillStyle="#0e0f19",_.fillRect(0,50,O*5+L*6+22,P),n.status(_,J,le,L,D,w.length,Math.round(Ae)+" fps",Ae/n._goodFps,function(Y){return w[Y]/G-1}),n.status(_,J+O+L,le,L,D,S.length,z.toFixed(2)+" dt",n._goodDelta/z,function(Y){return S[Y]/q-1}),n.status(_,J+(O+L)*2,le,L,D,A.length,B+" upf",Math.pow(r.clamp(V/Se||1,0,1),4),function(Y){return A[Y]/V-1}),n.status(_,J+(O+L)*3,le,L,D,N.length,ce.toFixed(2)+" ut",1-B*ce/n._goodFps,function(Y){return N[Y]/ce-1}),n.status(_,J+(O+L)*4,le,L,D,T.length,H.toFixed(2)+" rt",1-H/n._goodFps,function(Y){return T[Y]/H-1}),n.status(_,J+(O+L)*5,le,L,D,y.length,ue.toFixed(2)+" x",ue*ue*ue,function(Y){return(y[Y]/w[Y]/ue||0)-1})},n.status=function(g,_,E,M,w,T,y,S,A){g.strokeStyle="#888",g.fillStyle="#444",g.lineWidth=1,g.fillRect(_,E+7,M,1),g.beginPath(),g.moveTo(_,E+7-w*r.clamp(.4*A(0),-2,2));for(var N=0;N<M;N+=1)g.lineTo(_+N,E+7-(N<T?w*r.clamp(.4*A(N),-2,2):0));g.stroke(),g.fillStyle="hsl("+r.clamp(25+95*S,0,120)+",100%,60%)",g.fillRect(_,E-7,4,4),g.font="12px Arial",g.textBaseline="middle",g.textAlign="right",g.fillStyle="#eee",g.fillText(y,_+M,E-5)},n.constraints=function(g,_){for(var E=_,M=0;M<g.length;M++){var w=g[M];if(!(!w.render.visible||!w.pointA||!w.pointB)){var T=w.bodyA,y=w.bodyB,S,A;if(T?S=h.add(T.position,w.pointA):S=w.pointA,w.render.type==="pin")E.beginPath(),E.arc(S.x,S.y,3,0,2*Math.PI),E.closePath();else{if(y?A=h.add(y.position,w.pointB):A=w.pointB,E.beginPath(),E.moveTo(S.x,S.y),w.render.type==="spring")for(var N=h.sub(A,S),B=h.perp(h.normalise(N)),z=Math.ceil(r.clamp(w.length/5,12,20)),G,H=1;H<z;H+=1)G=H%2===0?1:-1,E.lineTo(S.x+N.x*(H/z)+B.x*G*4,S.y+N.y*(H/z)+B.y*G*4);E.lineTo(A.x,A.y)}w.render.lineWidth&&(E.lineWidth=w.render.lineWidth,E.strokeStyle=w.render.strokeStyle,E.stroke()),w.render.anchors&&(E.fillStyle=w.render.strokeStyle,E.beginPath(),E.arc(S.x,S.y,3,0,2*Math.PI),E.arc(A.x,A.y,3,0,2*Math.PI),E.closePath(),E.fill())}}},n.bodies=function(g,_,E){var M=E,w=g.engine,T=g.options,y=T.showInternalEdges||!T.wireframes,S,A,N,B;for(N=0;N<_.length;N++)if(S=_[N],!!S.render.visible){for(B=S.parts.length>1?1:0;B<S.parts.length;B++)if(A=S.parts[B],!!A.render.visible){if(T.showSleeping&&S.isSleeping?M.globalAlpha=.5*A.render.opacity:A.render.opacity!==1&&(M.globalAlpha=A.render.opacity),A.render.sprite&&A.render.sprite.texture&&!T.wireframes){var z=A.render.sprite,G=m(g,z.texture);M.translate(A.position.x,A.position.y),M.rotate(A.angle),M.drawImage(G,G.width*-z.xOffset*z.xScale,G.height*-z.yOffset*z.yScale,G.width*z.xScale,G.height*z.yScale),M.rotate(-A.angle),M.translate(-A.position.x,-A.position.y)}else{if(A.circleRadius)M.beginPath(),M.arc(A.position.x,A.position.y,A.circleRadius,0,2*Math.PI);else{M.beginPath(),M.moveTo(A.vertices[0].x,A.vertices[0].y);for(var H=1;H<A.vertices.length;H++)!A.vertices[H-1].isInternal||y?M.lineTo(A.vertices[H].x,A.vertices[H].y):M.moveTo(A.vertices[H].x,A.vertices[H].y),A.vertices[H].isInternal&&!y&&M.moveTo(A.vertices[(H+1)%A.vertices.length].x,A.vertices[(H+1)%A.vertices.length].y);M.lineTo(A.vertices[0].x,A.vertices[0].y),M.closePath()}T.wireframes?(M.lineWidth=1,M.strokeStyle=g.options.wireframeStrokeStyle,M.stroke()):(M.fillStyle=A.render.fillStyle,A.render.lineWidth&&(M.lineWidth=A.render.lineWidth,M.strokeStyle=A.render.strokeStyle,M.stroke()),M.fill())}M.globalAlpha=1}}},n.bodyWireframes=function(g,_,E){var M=E,w=g.options.showInternalEdges,T,y,S,A,N;for(M.beginPath(),S=0;S<_.length;S++)if(T=_[S],!!T.render.visible)for(N=T.parts.length>1?1:0;N<T.parts.length;N++){for(y=T.parts[N],M.moveTo(y.vertices[0].x,y.vertices[0].y),A=1;A<y.vertices.length;A++)!y.vertices[A-1].isInternal||w?M.lineTo(y.vertices[A].x,y.vertices[A].y):M.moveTo(y.vertices[A].x,y.vertices[A].y),y.vertices[A].isInternal&&!w&&M.moveTo(y.vertices[(A+1)%y.vertices.length].x,y.vertices[(A+1)%y.vertices.length].y);M.lineTo(y.vertices[0].x,y.vertices[0].y)}M.lineWidth=1,M.strokeStyle=g.options.wireframeStrokeStyle,M.stroke()},n.bodyConvexHulls=function(g,_,E){var M=E,w,T,y,S,A;for(M.beginPath(),y=0;y<_.length;y++)if(w=_[y],!(!w.render.visible||w.parts.length===1)){for(M.moveTo(w.vertices[0].x,w.vertices[0].y),S=1;S<w.vertices.length;S++)M.lineTo(w.vertices[S].x,w.vertices[S].y);M.lineTo(w.vertices[0].x,w.vertices[0].y)}M.lineWidth=1,M.strokeStyle="rgba(255,255,255,0.2)",M.stroke()},n.vertexNumbers=function(g,_,E){var M=E,w,T,y;for(w=0;w<_.length;w++){var S=_[w].parts;for(y=S.length>1?1:0;y<S.length;y++){var A=S[y];for(T=0;T<A.vertices.length;T++)M.fillStyle="rgba(255,255,255,0.2)",M.fillText(w+"_"+T,A.position.x+(A.vertices[T].x-A.position.x)*.8,A.position.y+(A.vertices[T].y-A.position.y)*.8)}}},n.mousePosition=function(g,_,E){var M=E;M.fillStyle="rgba(255,255,255,0.8)",M.fillText(_.position.x+"  "+_.position.y,_.position.x+5,_.position.y-5)},n.bodyBounds=function(g,_,E){var M=E,w=g.engine,T=g.options;M.beginPath();for(var y=0;y<_.length;y++){var S=_[y];if(S.render.visible)for(var A=_[y].parts,N=A.length>1?1:0;N<A.length;N++){var B=A[N];M.rect(B.bounds.min.x,B.bounds.min.y,B.bounds.max.x-B.bounds.min.x,B.bounds.max.y-B.bounds.min.y)}}T.wireframes?M.strokeStyle="rgba(255,255,255,0.08)":M.strokeStyle="rgba(0,0,0,0.1)",M.lineWidth=1,M.stroke()},n.bodyAxes=function(g,_,E){var M=E,w=g.engine,T=g.options,y,S,A,N;for(M.beginPath(),S=0;S<_.length;S++){var B=_[S],z=B.parts;if(B.render.visible)if(T.showAxes)for(A=z.length>1?1:0;A<z.length;A++)for(y=z[A],N=0;N<y.axes.length;N++){var G=y.axes[N];M.moveTo(y.position.x,y.position.y),M.lineTo(y.position.x+G.x*20,y.position.y+G.y*20)}else for(A=z.length>1?1:0;A<z.length;A++)for(y=z[A],N=0;N<y.axes.length;N++)M.moveTo(y.position.x,y.position.y),M.lineTo((y.vertices[0].x+y.vertices[y.vertices.length-1].x)/2,(y.vertices[0].y+y.vertices[y.vertices.length-1].y)/2)}T.wireframes?(M.strokeStyle="indianred",M.lineWidth=1):(M.strokeStyle="rgba(255, 255, 255, 0.4)",M.globalCompositeOperation="overlay",M.lineWidth=2),M.stroke(),M.globalCompositeOperation="source-over"},n.bodyPositions=function(g,_,E){var M=E,w=g.engine,T=g.options,y,S,A,N;for(M.beginPath(),A=0;A<_.length;A++)if(y=_[A],!!y.render.visible)for(N=0;N<y.parts.length;N++)S=y.parts[N],M.arc(S.position.x,S.position.y,3,0,2*Math.PI,!1),M.closePath();for(T.wireframes?M.fillStyle="indianred":M.fillStyle="rgba(0,0,0,0.5)",M.fill(),M.beginPath(),A=0;A<_.length;A++)y=_[A],y.render.visible&&(M.arc(y.positionPrev.x,y.positionPrev.y,2,0,2*Math.PI,!1),M.closePath());M.fillStyle="rgba(255,165,0,0.8)",M.fill()},n.bodyVelocity=function(g,_,E){var M=E;M.beginPath();for(var w=0;w<_.length;w++){var T=_[w];if(T.render.visible){var y=i.getVelocity(T);M.moveTo(T.position.x,T.position.y),M.lineTo(T.position.x+y.x,T.position.y+y.y)}}M.lineWidth=3,M.strokeStyle="cornflowerblue",M.stroke()},n.bodyIds=function(g,_,E){var M=E,w,T;for(w=0;w<_.length;w++)if(_[w].render.visible){var y=_[w].parts;for(T=y.length>1?1:0;T<y.length;T++){var S=y[T];M.font="12px Arial",M.fillStyle="rgba(255,255,255,0.5)",M.fillText(S.id,S.position.x+10,S.position.y-10)}}},n.collisions=function(g,_,E){var M=E,w=g.options,T,y,S,A,N,B,z;for(M.beginPath(),B=0;B<_.length;B++)if(T=_[B],!!T.isActive)for(y=T.collision,z=0;z<T.contactCount;z++){var G=T.contacts[z],H=G.vertex;M.rect(H.x-1.5,H.y-1.5,3.5,3.5)}for(w.wireframes?M.fillStyle="rgba(255,255,255,0.7)":M.fillStyle="orange",M.fill(),M.beginPath(),B=0;B<_.length;B++)if(T=_[B],!!T.isActive&&(y=T.collision,T.contactCount>0)){var q=T.contacts[0].vertex.x,V=T.contacts[0].vertex.y;T.contactCount===2&&(q=(T.contacts[0].vertex.x+T.contacts[1].vertex.x)/2,V=(T.contacts[0].vertex.y+T.contacts[1].vertex.y)/2),y.bodyB===y.supports[0].body||y.bodyA.isStatic===!0?M.moveTo(q-y.normal.x*8,V-y.normal.y*8):M.moveTo(q+y.normal.x*8,V+y.normal.y*8),M.lineTo(q,V)}w.wireframes?M.strokeStyle="rgba(255,165,0,0.7)":M.strokeStyle="orange",M.lineWidth=1,M.stroke()},n.separations=function(g,_,E){var M=E,w=g.options,T,y,S,A,N,B,z;for(M.beginPath(),B=0;B<_.length;B++)if(T=_[B],!!T.isActive){y=T.collision,A=y.bodyA,N=y.bodyB;var G=1;!N.isStatic&&!A.isStatic&&(G=.5),N.isStatic&&(G=0),M.moveTo(N.position.x,N.position.y),M.lineTo(N.position.x-y.penetration.x*G,N.position.y-y.penetration.y*G),G=1,!N.isStatic&&!A.isStatic&&(G=.5),A.isStatic&&(G=0),M.moveTo(A.position.x,A.position.y),M.lineTo(A.position.x+y.penetration.x*G,A.position.y+y.penetration.y*G)}w.wireframes?M.strokeStyle="rgba(255,165,0,0.5)":M.strokeStyle="orange",M.stroke()},n.inspector=function(g,_){var E=g.engine,M=g.selected,w=g.render,T=w.options,y;if(T.hasBounds){var S=w.bounds.max.x-w.bounds.min.x,A=w.bounds.max.y-w.bounds.min.y,N=S/w.options.width,B=A/w.options.height;_.scale(1/N,1/B),_.translate(-w.bounds.min.x,-w.bounds.min.y)}for(var z=0;z<M.length;z++){var G=M[z].data;switch(_.translate(.5,.5),_.lineWidth=1,_.strokeStyle="rgba(255,165,0,0.9)",_.setLineDash([1,2]),G.type){case"body":y=G.bounds,_.beginPath(),_.rect(Math.floor(y.min.x-3),Math.floor(y.min.y-3),Math.floor(y.max.x-y.min.x+6),Math.floor(y.max.y-y.min.y+6)),_.closePath(),_.stroke();break;case"constraint":var H=G.pointA;G.bodyA&&(H=G.pointB),_.beginPath(),_.arc(H.x,H.y,10,0,2*Math.PI),_.closePath(),_.stroke();break}_.setLineDash([]),_.translate(-.5,-.5)}g.selectStart!==null&&(_.translate(.5,.5),_.lineWidth=1,_.strokeStyle="rgba(255,165,0,0.6)",_.fillStyle="rgba(255,165,0,0.1)",y=g.selectBounds,_.beginPath(),_.rect(Math.floor(y.min.x),Math.floor(y.min.y),Math.floor(y.max.x-y.min.x),Math.floor(y.max.y-y.min.y)),_.closePath(),_.stroke(),_.fill(),_.translate(-.5,-.5)),T.hasBounds&&_.setTransform(1,0,0,1,0,0)};var f=function(g,_){var E=g.engine,M=g.timing,w=M.historySize,T=E.timing.timestamp;M.delta=_-M.lastTime||n._goodDelta,M.lastTime=_,M.timestampElapsed=T-M.lastTimestamp||0,M.lastTimestamp=T,M.deltaHistory.unshift(M.delta),M.deltaHistory.length=Math.min(M.deltaHistory.length,w),M.engineDeltaHistory.unshift(E.timing.lastDelta),M.engineDeltaHistory.length=Math.min(M.engineDeltaHistory.length,w),M.timestampElapsedHistory.unshift(M.timestampElapsed),M.timestampElapsedHistory.length=Math.min(M.timestampElapsedHistory.length,w),M.engineUpdatesHistory.unshift(E.timing.lastUpdatesPerFrame),M.engineUpdatesHistory.length=Math.min(M.engineUpdatesHistory.length,w),M.engineElapsedHistory.unshift(E.timing.lastElapsed),M.engineElapsedHistory.length=Math.min(M.engineElapsedHistory.length,w),M.elapsedHistory.unshift(M.lastElapsed),M.elapsedHistory.length=Math.min(M.elapsedHistory.length,w)},p=function(g){for(var _=0,E=0;E<g.length;E+=1)_+=g[E];return _/g.length||0},x=function(g,_){var E=document.createElement("canvas");return E.width=g,E.height=_,E.oncontextmenu=function(){return!1},E.onselectstart=function(){return!1},E},v=function(g){var _=g.getContext("2d"),E=window.devicePixelRatio||1,M=_.webkitBackingStorePixelRatio||_.mozBackingStorePixelRatio||_.msBackingStorePixelRatio||_.oBackingStorePixelRatio||_.backingStorePixelRatio||1;return E/M},m=function(g,_){var E=g.textures[_];return E||(E=g.textures[_]=new Image,E.src=_,E)},b=function(g,_){var E=_;/(jpg|gif|png)$/.test(_)&&(E="url("+_+")"),g.canvas.style.background=E,g.canvas.style.backgroundSize="contain",g.currentBackground=_}})()},function(s,e,t){var n={};s.exports=n;var i=t(5),r=t(17),o=t(0);(function(){n._maxFrameDelta=1e3/15,n._frameDeltaFallback=1e3/60,n._timeBufferMargin=1.5,n._elapsedNextEstimate=1,n._smoothingLowerBound=.1,n._smoothingUpperBound=.9,n.create=function(l){var h={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},u=o.extend(h,l);return u.fps=0,u},n.run=function(l,h){return l.timeBuffer=n._frameDeltaFallback,function u(c){l.frameRequestId=n._onNextFrame(l,u),c&&l.enabled&&n.tick(l,h,c)}(),l},n.tick=function(l,h,u){var c=o.now(),d=l.delta,f=0,p=u-l.timeLastTick;if((!p||!l.timeLastTick||p>Math.max(n._maxFrameDelta,l.maxFrameTime))&&(p=l.frameDelta||n._frameDeltaFallback),l.frameDeltaSmoothing){l.frameDeltaHistory.push(p),l.frameDeltaHistory=l.frameDeltaHistory.slice(-l.frameDeltaHistorySize);var x=l.frameDeltaHistory.slice(0).sort(),v=l.frameDeltaHistory.slice(x.length*n._smoothingLowerBound,x.length*n._smoothingUpperBound),m=a(v);p=m||p}l.frameDeltaSnapping&&(p=1e3/Math.round(1e3/p)),l.frameDelta=p,l.timeLastTick=u,l.timeBuffer+=l.frameDelta,l.timeBuffer=o.clamp(l.timeBuffer,0,l.frameDelta+d*n._timeBufferMargin),l.lastUpdatesDeferred=0;var b=l.maxUpdates||Math.ceil(l.maxFrameTime/d),g={timestamp:h.timing.timestamp};i.trigger(l,"beforeTick",g),i.trigger(l,"tick",g);for(var _=o.now();d>0&&l.timeBuffer>=d*n._timeBufferMargin;){i.trigger(l,"beforeUpdate",g),r.update(h,d),i.trigger(l,"afterUpdate",g),l.timeBuffer-=d,f+=1;var E=o.now()-c,M=o.now()-_,w=E+n._elapsedNextEstimate*M/f;if(f>=b||w>l.maxFrameTime){l.lastUpdatesDeferred=Math.round(Math.max(0,l.timeBuffer/d-n._timeBufferMargin));break}}h.timing.lastUpdatesPerFrame=f,i.trigger(l,"afterTick",g),l.frameDeltaHistory.length>=100&&(l.lastUpdatesDeferred&&Math.round(l.frameDelta/d)>b?o.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):l.lastUpdatesDeferred&&o.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof l.isFixed!="undefined"&&o.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(l.deltaMin||l.deltaMax)&&o.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),l.fps!==0&&o.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},n.stop=function(l){n._cancelNextFrame(l)},n._onNextFrame=function(l,h){if(typeof window!="undefined"&&window.requestAnimationFrame)l.frameRequestId=window.requestAnimationFrame(h);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return l.frameRequestId},n._cancelNextFrame=function(l){if(typeof window!="undefined"&&window.cancelAnimationFrame)window.cancelAnimationFrame(l.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var a=function(l){for(var h=0,u=l.length,c=0;c<u;c+=1)h+=l[c];return h/u||0}})()},function(s,e,t){var n={};s.exports=n;var i=t(8),r=t(0),o=r.deprecated;(function(){n.collides=function(a,l){return i.collides(a,l)},o(n,"collides","SAT.collides \u27A4 replaced by Collision.collides")})()},function(s,e,t){var n={};s.exports=n;var i=t(1),r=t(0);(function(){n.pathToVertices=function(o,a){typeof window!="undefined"&&!("SVGPathSeg"in window)&&r.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var l,h,u,c,d,f,p,x,v,m,b=[],g,_,E=0,M=0,w=0;a=a||15;var T=function(S,A,N){var B=N%2===1&&N>1;if(!v||S!=v.x||A!=v.y){v&&B?(g=v.x,_=v.y):(g=0,_=0);var z={x:g+S,y:_+A};(B||!v)&&(v=z),b.push(z),M=g+S,w=_+A}},y=function(S){var A=S.pathSegTypeAsLetter.toUpperCase();if(A!=="Z"){switch(A){case"M":case"L":case"T":case"C":case"S":case"Q":M=S.x,w=S.y;break;case"H":M=S.x;break;case"V":w=S.y;break}T(M,w,S.pathSegType)}};for(n._svgPathToAbsolute(o),u=o.getTotalLength(),f=[],l=0;l<o.pathSegList.numberOfItems;l+=1)f.push(o.pathSegList.getItem(l));for(p=f.concat();E<u;){if(m=o.getPathSegAtLength(E),d=f[m],d!=x){for(;p.length&&p[0]!=d;)y(p.shift());x=d}switch(d.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":c=o.getPointAtLength(E),T(c.x,c.y,0);break}E+=a}for(l=0,h=p.length;l<h;++l)y(p[l]);return b},n._svgPathToAbsolute=function(o){for(var a,l,h,u,c,d,f=o.pathSegList,p=0,x=0,v=f.numberOfItems,m=0;m<v;++m){var b=f.getItem(m),g=b.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(g))"x"in b&&(p=b.x),"y"in b&&(x=b.y);else switch("x1"in b&&(h=p+b.x1),"x2"in b&&(c=p+b.x2),"y1"in b&&(u=x+b.y1),"y2"in b&&(d=x+b.y2),"x"in b&&(p+=b.x),"y"in b&&(x+=b.y),g){case"m":f.replaceItem(o.createSVGPathSegMovetoAbs(p,x),m);break;case"l":f.replaceItem(o.createSVGPathSegLinetoAbs(p,x),m);break;case"h":f.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(p),m);break;case"v":f.replaceItem(o.createSVGPathSegLinetoVerticalAbs(x),m);break;case"c":f.replaceItem(o.createSVGPathSegCurvetoCubicAbs(p,x,h,u,c,d),m);break;case"s":f.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(p,x,c,d),m);break;case"q":f.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(p,x,h,u),m);break;case"t":f.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(p,x),m);break;case"a":f.replaceItem(o.createSVGPathSegArcAbs(p,x,b.r1,b.r2,b.angle,b.largeArcFlag,b.sweepFlag),m);break;case"z":case"Z":p=a,x=l;break}(g=="M"||g=="m")&&(a=p,l=x)}}})()},function(s,e,t){var n={};s.exports=n;var i=t(6),r=t(0);(function(){n.create=i.create,n.add=i.add,n.remove=i.remove,n.clear=i.clear,n.addComposite=i.addComposite,n.addBody=i.addBody,n.addConstraint=i.addConstraint})()}])})});var dr="scriptsLoaded";var Un=class s{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),s.nextNameID=s.nextNameID||0,this.$name.id=`lil-gui-name-${++s.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},ba=class extends Un{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Ea(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}var Gu={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Ea,toHexString:Ea},us={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Wu={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){let n=us.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;let i=s*n<<16^e*n<<8^t*n<<0;return us.toHexString(i)}},Xu={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){let n=us.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;let i=s*n<<16^e*n<<8^t*n<<0;return us.toHexString(i)}},Yu=[Gu,us,Wu,Xu];function qu(s){return Yu.find(e=>e.match(s))}var wa=class extends Un{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=qu(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let r=Ea(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},hs=class extends Un{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Ta=class extends Un{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);let a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},n=b=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._snapClampSetValue(g+b),this.$input.value=this.getValue())},i=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),n(this._step*this._arrowKeyMultiplier(b)*-1))},r=b=>{this._inputFocused&&(b.preventDefault(),n(this._step*this._normalizeMouseWheel(b)))},o=!1,a,l,h,u,c,d=5,f=b=>{a=b.clientX,l=h=b.clientY,o=!0,u=this.getValue(),c=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",x)},p=b=>{if(o){let g=b.clientX-a,_=b.clientY-l;Math.abs(_)>d?(b.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(g)>d&&x()}if(!o){let g=b.clientY-h;c-=g*this._step*this._arrowKeyMultiplier(b),u+c>this._max?c=this._max-u:u+c<this._min&&(c=this._min-u),this._snapClampSetValue(u+c)}h=b.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",x)},v=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let e=(m,b,g,_,E)=>(m-b)/(g-b)*(E-_)+_,t=m=>{let b=this.$slider.getBoundingClientRect(),g=e(m,b.left,b.right,this._min,this._max);this._snapClampSetValue(g)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=m=>{t(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)},o=!1,a,l,h=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):h(m),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",d))},c=m=>{if(o){let b=m.touches[0].clientX-a,g=m.touches[0].clientY-l;Math.abs(b)>Math.abs(g)?h(m):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),p=400,x,v=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();let g=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,p)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Aa=class extends Un{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{let n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},Ca=class extends Un{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},$u=`.lil-gui {
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
}`;function Zu(s){let e=document.createElement("style");e.innerHTML=s;let t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}var fc=!1,fr=class s{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!fc&&a&&(Zu($u),fc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new Aa(this,e,t,n);let o=e[t];switch(typeof o){case"number":return new Ta(this,e,t,n,i,r);case"boolean":return new ba(this,e,t);case"string":return new Ca(this,e,t);case"function":return new hs(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new wa(this,e,t,n)}addFolder(e){let t=new s({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof hs||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof hs)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");let n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);let i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};var po="178",$n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oc=0,hl=1,Bc=2;var ul=1,kc=2,gn=3,Rn=0,Dt=1,jt=2,an=0,oi=1,Js=2,dl=3,fl=4,zc=5,Hn=100,Vc=101,Hc=102,Gc=103,Wc=104,Xc=200,Yc=201,qc=202,$c=203,Fr=204,Or=205,Zc=206,Jc=207,Kc=208,jc=209,Qc=210,eh=211,th=212,nh=213,ih=214,mo=0,go=1,vo=2,ai=3,xo=4,_o=5,yo=6,So=7,pl=0,sh=1,rh=2,In=0,oh=1,ah=2,lh=3,Mo=4,ch=5,hh=6,uh=7;var ml=300,di=301,fi=302,Jn=303,bo=304,Ks=306,Br=1e3,hn=1001,kr=1002,Nt=1003,dh=1004;var js=1005;var Mt=1006,Eo=1007;var Ln=1008;var vn=1009,gl=1010,vl=1011,ji=1012,wo=1013,Kn=1014,Ot=1015,bt=1016,To=1017,Ao=1018,Qi=1020,xl=35902,_l=1021,yl=1022,Qt=1023,Bi=1026,es=1027,Sl=1028,Co=1029,Ml=1030,Ro=1031;var Po=1033,Qs=33776,er=33777,tr=33778,nr=33779,Io=35840,Lo=35841,Do=35842,Uo=35843,No=36196,Fo=37492,Oo=37496,Bo=37808,ko=37809,zo=37810,Vo=37811,Ho=37812,Go=37813,Wo=37814,Xo=37815,Yo=37816,qo=37817,$o=37818,Zo=37819,Jo=37820,Ko=37821,ir=36492,jo=36494,Qo=36495,bl=36283,ea=36284,ta=36285,na=36286;var Ss=2300,zr=2301,Nr=2302,Qa=2400,el=2401,tl=2402;var fh=3200,ph=3201;var El=0,mh=1,Dn="",Lt="srgb",Pn="srgb-linear",Ms="linear",et="srgb";var si=7680;var nl=519,gh=512,vh=513,xh=514,wl=515,_h=516,yh=517,Sh=518,Mh=519,il=35044;var Tl="300 es",un=2e3,bs=2001;var fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=1234567,vs=Math.PI/180,ki=180/Math.PI;function pi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function qe(s,e,t){return Math.max(e,Math.min(t,s))}function Al(s,e){return(s%e+e)%e}function Ju(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ku(s,e,t){return s!==e?(t-s)/(e-s):0}function xs(s,e,t){return(1-t)*s+t*e}function ju(s,e,t,n){return xs(s,e,1-Math.exp(-t*n))}function Qu(s,e=1){return e-Math.abs(Al(s,e*2)-e)}function ed(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function td(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function nd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function id(s,e){return s+Math.random()*(e-s)}function sd(s){return s*(.5-Math.random())}function rd(s){s!==void 0&&(pc=s);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function od(s){return s*vs}function ad(s){return s*ki}function ld(s){return(s&s-1)===0&&s!==0}function cd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ud(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+n)/2),u=o((e+n)/2),c=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*c,l*d,a*h);break;case"YZY":s.set(l*d,a*u,l*c,a*h);break;case"ZXZ":s.set(l*c,l*d,a*u,a*h);break;case"XZX":s.set(a*u,l*p,l*f,a*h);break;case"YXY":s.set(l*f,a*u,l*p,a*h);break;case"ZYZ":s.set(l*p,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var sr={DEG2RAD:vs,RAD2DEG:ki,generateUUID:pi,clamp:qe,euclideanModulo:Al,mapLinear:Ju,inverseLerp:Ku,lerp:xs,damp:ju,pingpong:Qu,smoothstep:ed,smootherstep:td,randInt:nd,randFloat:id,randFloatSpread:sd,seededRandom:rd,degToRad:od,radToDeg:ad,isPowerOfTwo:ld,ceilPowerOfTwo:cd,floorPowerOfTwo:hd,setQuaternionFromProperEuler:ud,normalize:It,denormalize:Ni},ae=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(c!==x||l!==d||h!==f||u!==p){let v=1-a,m=l*d+h*f+u*p+c*x,b=m>=0?1:-1,g=1-m*m;if(g>Number.EPSILON){let E=Math.sqrt(g),M=Math.atan2(E,m*b);v=Math.sin(v*M)/E,a=Math.sin(a*M)/E}let _=a*b;if(l=l*v+d*_,h=h*v+f*_,u=u*v+p*_,c=c*v+x*_,v===1-a){let E=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=E,h*=E,u*=E,c*=E}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*c+l*f-h*d,e[t+1]=l*p+u*d+h*c-a*f,e[t+2]=h*p+u*f+a*d-l*c,e[t+3]=u*p-a*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*c+h*f*p,this._y=h*f*c-d*u*p,this._z=h*u*p+d*f*c,this._w=h*u*c-d*f*p;break;case"YXZ":this._x=d*u*c+h*f*p,this._y=h*f*c-d*u*p,this._z=h*u*p-d*f*c,this._w=h*u*c+d*f*p;break;case"ZXY":this._x=d*u*c-h*f*p,this._y=h*f*c+d*u*p,this._z=h*u*p+d*f*c,this._w=h*u*c-d*f*p;break;case"ZYX":this._x=d*u*c-h*f*p,this._y=h*f*c+d*u*p,this._z=h*u*p-d*f*c,this._w=h*u*c+d*f*p;break;case"YZX":this._x=d*u*c+h*f*p,this._y=h*f*c+d*u*p,this._z=h*u*p-d*f*c,this._w=h*u*c-d*f*p;break;case"XZY":this._x=d*u*c-h*f*p,this._y=h*f*c-d*u*p,this._z=h*u*p+d*f*c,this._w=h*u*c+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+a+c;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>c){let f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>c){let f=2*Math.sqrt(1+a-n-c);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+c-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+o*a+i*h-r*l,this._y=i*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-i*a,this._w=o*u-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=o*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*i-a*n),u=2*(a*t-r*i),c=2*(r*n-o*t);return this.x=t+l*h+o*c-a*u,this.y=n+l*u+a*h-r*c,this.z=i+l*c+r*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ra=new X,mc=new Kt,Ve=class s{constructor(e,t,n,i,r,o,a,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,h)}set(e,t,n,i,r,o,a,l,h){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],p=n[8],x=i[0],v=i[3],m=i[6],b=i[1],g=i[4],_=i[7],E=i[2],M=i[5],w=i[8];return r[0]=o*x+a*b+l*E,r[3]=o*v+a*g+l*M,r[6]=o*m+a*_+l*w,r[1]=h*x+u*b+c*E,r[4]=h*v+u*g+c*M,r[7]=h*m+u*_+c*w,r[2]=d*x+f*b+p*E,r[5]=d*v+f*g+p*M,r[8]=d*m+f*_+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-n*r*u+n*a*l+i*r*h-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=u*o-a*h,d=a*l-u*r,f=h*r-o*l,p=t*c+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=c*x,e[1]=(i*h-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-h*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-i*h,i*l,-i*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new Ve;function Cl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bh(){let s=zi("canvas");return s.style.display="block",s}var gc={};function li(s){s in gc||(gc[s]=!0,console.warn(s))}function Eh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function wh(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Th(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var vc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){let s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===et&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Ms:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return li("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return li("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:e,whitePoint:n,transfer:Ms,toXYZ:vc,fromXYZ:xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:vc,fromXYZ:xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}var Ke=dd();function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Mi,Vr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=zi("canvas")),Mi.width=e.width,Mi.height=e.height;let i=Mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=zi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,Vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ia(i[o].image)):r.push(Ia(i[o]))}else r=Ia(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ia(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Vr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pd=0,La=new X,St=class s extends fn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=hn,i=hn,r=Mt,o=Ln,a=Qt,l=vn,h=s.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=pi(),this.name="",this.source=new Vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=ml;St.DEFAULT_ANISOTROPY=1;var dt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],p=l[9],x=l[2],v=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-x)<.01&&Math.abs(p-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+x)<.1&&Math.abs(p+v)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(h+1)/2,_=(f+1)/2,E=(m+1)/2,M=(u+d)/4,w=(c+x)/4,T=(p+v)/4;return g>_&&g>E?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=M/n,r=w/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=T/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=T/r),this.set(n,i,r,t),this}let b=Math.sqrt((v-p)*(v-p)+(c-x)*(c-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(v-p)/b,this.y=(c-x)/b,this.z=(d-u)/b,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hr=class extends fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new St(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},At=class extends Hr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Es=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gr=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),mr.subVectors(this.max,ds),bi.subVectors(e.a,ds),Ei.subVectors(e.b,ds),wi.subVectors(e.c,ds),Nn.subVectors(Ei,bi),Fn.subVectors(wi,Ei),ei.subVectors(bi,wi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ei.z,ei.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ei.z,0,-ei.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ei.y,ei.x,0];return!Da(t,bi,Ei,wi,mr)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,bi,Ei,wi,mr))?!1:(gr.crossVectors(Nn,Fn),t=[gr.x,gr.y,gr.z],Da(t,bi,Ei,wi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yn=[new X,new X,new X,new X,new X,new X,new X,new X],tn=new X,pr=new Gn,bi=new X,Ei=new X,wi=new X,Nn=new X,Fn=new X,ei=new X,ds=new X,mr=new X,gr=new X,ti=new X;function Da(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ti.fromArray(s,r);let a=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),l=e.dot(ti),h=t.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var md=new Gn,fs=new X,Ua=new X,Hi=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);let t=fs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Ua)),this.expandByPoint(fs.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new X,Na=new X,vr=new X,On=new X,Fa=new X,xr=new X,Oa=new X,Gi=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Na.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Na);let r=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=On.dot(this.direction),l=-On.dot(vr),h=On.lengthSq(),u=Math.abs(1-o*o),c,d,f,p;if(u>0)if(c=o*l-a,d=o*a-l,p=r*u,c>=0)if(d>=-p)if(d<=p){let x=1/u;c*=x,d*=x,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+h}else d=r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-p?(c=Math.max(0,-(-o*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=p?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(o*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=o>0?-r:r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Na).addScaledVector(vr,d),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){Fa.subVectors(t,e),xr.subVectors(n,e),Oa.crossVectors(Fa,xr);let o=this.direction.dot(Oa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);let l=a*this.direction.dot(xr.crossVectors(On,xr));if(l<0)return null;let h=a*this.direction.dot(Fa.cross(On));if(h<0||l+h>o)return null;let u=-a*On.dot(Oa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class s{constructor(e,t,n,i,r,o,a,l,h,u,c,d,f,p,x,v){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,h,u,c,d,f,p,x,v)}set(e,t,n,i,r,o,a,l,h,u,c,d,f,p,x,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=c,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*c,p=a*u,x=a*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+p*h,t[5]=d-x*h,t[9]=-a*l,t[2]=x-d*h,t[6]=p+f*h,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*c,p=h*u,x=h*c;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*h,t[1]=o*c,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*c,p=h*u,x=h*c;t[0]=d-x*a,t[4]=-o*c,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*c,p=a*u,x=a*c;t[0]=l*u,t[4]=p*h-f,t[8]=d*h+x,t[1]=l*c,t[5]=x*h+d,t[9]=f*h-p,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*h,p=a*l,x=a*h;t[0]=l*u,t[4]=x-d*c,t[8]=p*c+f,t[1]=c,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=f*c+p,t[10]=d-x*c}else if(e.order==="XZY"){let d=o*l,f=o*h,p=a*l,x=a*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+x,t[5]=o*u,t[9]=f*c-p,t[2]=p*c-f,t[6]=a*u,t[10]=x*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,vd)}lookAt(e,t,n){let i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Bn.crossVectors(n,Vt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Bn.crossVectors(n,Vt)),Bn.normalize(),_r.crossVectors(Vt,Bn),i[0]=Bn.x,i[4]=_r.x,i[8]=Vt.x,i[1]=Bn.y,i[5]=_r.y,i[9]=Vt.y,i[2]=Bn.z,i[6]=_r.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],p=n[2],x=n[6],v=n[10],m=n[14],b=n[3],g=n[7],_=n[11],E=n[15],M=i[0],w=i[4],T=i[8],y=i[12],S=i[1],A=i[5],N=i[9],B=i[13],z=i[2],G=i[6],H=i[10],q=i[14],V=i[3],ce=i[7],Q=i[11],ue=i[15];return r[0]=o*M+a*S+l*z+h*V,r[4]=o*w+a*A+l*G+h*ce,r[8]=o*T+a*N+l*H+h*Q,r[12]=o*y+a*B+l*q+h*ue,r[1]=u*M+c*S+d*z+f*V,r[5]=u*w+c*A+d*G+f*ce,r[9]=u*T+c*N+d*H+f*Q,r[13]=u*y+c*B+d*q+f*ue,r[2]=p*M+x*S+v*z+m*V,r[6]=p*w+x*A+v*G+m*ce,r[10]=p*T+x*N+v*H+m*Q,r[14]=p*y+x*B+v*q+m*ue,r[3]=b*M+g*S+_*z+E*V,r[7]=b*w+g*A+_*G+E*ce,r[11]=b*T+g*N+_*H+E*Q,r[15]=b*y+g*B+_*q+E*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],p=e[3],x=e[7],v=e[11],m=e[15];return p*(+r*l*c-i*h*c-r*a*d+n*h*d+i*a*f-n*l*f)+x*(+t*l*f-t*h*d+r*o*d-i*o*f+i*h*u-r*l*u)+v*(+t*h*c-t*a*f-r*o*c+n*o*f+r*a*u-n*h*u)+m*(-i*a*u-t*l*c+t*a*d+i*o*c-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],p=e[12],x=e[13],v=e[14],m=e[15],b=c*v*h-x*d*h+x*l*f-a*v*f-c*l*m+a*d*m,g=p*d*h-u*v*h-p*l*f+o*v*f+u*l*m-o*d*m,_=u*x*h-p*c*h+p*a*f-o*x*f-u*a*m+o*c*m,E=p*c*l-u*x*l-p*a*d+o*x*d+u*a*v-o*c*v,M=t*b+n*g+i*_+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=b*w,e[1]=(x*d*r-c*v*r-x*i*f+n*v*f+c*i*m-n*d*m)*w,e[2]=(a*v*r-x*l*r+x*i*h-n*v*h-a*i*m+n*l*m)*w,e[3]=(c*l*r-a*d*r-c*i*h+n*d*h+a*i*f-n*l*f)*w,e[4]=g*w,e[5]=(u*v*r-p*d*r+p*i*f-t*v*f-u*i*m+t*d*m)*w,e[6]=(p*l*r-o*v*r-p*i*h+t*v*h+o*i*m-t*l*m)*w,e[7]=(o*d*r-u*l*r+u*i*h-t*d*h-o*i*f+t*l*f)*w,e[8]=_*w,e[9]=(p*c*r-u*x*r-p*n*f+t*x*f+u*n*m-t*c*m)*w,e[10]=(o*x*r-p*a*r+p*n*h-t*x*h-o*n*m+t*a*m)*w,e[11]=(u*a*r-o*c*r-u*n*h+t*c*h+o*n*f-t*a*f)*w,e[12]=E*w,e[13]=(u*x*i-p*c*i+p*n*d-t*x*d-u*n*v+t*c*v)*w,e[14]=(p*a*i-o*x*i-p*n*l+t*x*l+o*n*v-t*a*v)*w,e[15]=(o*c*i-u*a*i+u*n*l-t*c*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*o,0,h*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,u=o+o,c=a+a,d=r*h,f=r*u,p=r*c,x=o*u,v=o*c,m=a*c,b=l*h,g=l*u,_=l*c,E=n.x,M=n.y,w=n.z;return i[0]=(1-(x+m))*E,i[1]=(f+_)*E,i[2]=(p-g)*E,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(d+m))*M,i[6]=(v+b)*M,i[7]=0,i[8]=(p+g)*w,i[9]=(v-b)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ti.set(i[0],i[1],i[2]).length(),o=Ti.set(i[4],i[5],i[6]).length(),a=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);let h=1/r,u=1/o,c=1/a;return nn.elements[0]*=h,nn.elements[1]*=h,nn.elements[2]*=h,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=c,nn.elements[9]*=c,nn.elements[10]*=c,t.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=un){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),c=(t+e)/(t-e),d=(n+i)/(n-i),f,p;if(a===un)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===bs)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=un){let l=this.elements,h=1/(t-e),u=1/(n-i),c=1/(o-r),d=(t+e)*h,f=(n+i)*u,p,x;if(a===un)p=(o+r)*c,x=-2*c;else if(a===bs)p=r*c,x=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ti=new X,nn=new ft,gd=new X(0,0,0),vd=new X(1,1,1),Bn=new X,_r=new X,Vt=new X,_c=new ft,yc=new Kt,rn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xd=0,Sc=new X,Ai=new Kt,Mn=new ft,yr=new X,ps=new X,_d=new X,yd=new Kt,Mc=new X(1,0,0),bc=new X(0,1,0),Ec=new X(0,0,1),wc={type:"added"},Sd={type:"removed"},Ci={type:"childadded",child:null},Ba={type:"childremoved",child:null},Ft=class s extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new X,t=new rn,n=new Kt,i=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ve}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ps,yr,this.up):Mn.lookAt(yr,ps,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>dc(Ma({},a),{boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>Ma({},a)),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let c=l[h];r(e.shapes,c)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),h=o(e.textures),u=o(e.images),c=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ft.DEFAULT_UP=new X(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new X,bn=new X,ka=new X,En=new X,Ri=new X,Pi=new X,Tc=new X,za=new X,Va=new X,Ha=new X,Ga=new dt,Wa=new dt,Xa=new dt,Vn=class s{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){sn.subVectors(i,t),bn.subVectors(n,t),ka.subVectors(e,t);let o=sn.dot(sn),a=sn.dot(bn),l=sn.dot(ka),h=bn.dot(bn),u=bn.dot(ka),c=o*h-a*a;if(c===0)return r.set(0,0,0),null;let d=1/c,f=(h*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ga.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ga.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ga,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),bn.subVectors(e,t),sn.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ri.subVectors(i,n),Pi.subVectors(r,n),za.subVectors(e,n);let l=Ri.dot(za),h=Pi.dot(za);if(l<=0&&h<=0)return t.copy(n);Va.subVectors(e,i);let u=Ri.dot(Va),c=Pi.dot(Va);if(u>=0&&c<=u)return t.copy(i);let d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ri,o);Ha.subVectors(e,r);let f=Ri.dot(Ha),p=Pi.dot(Ha);if(p>=0&&f<=p)return t.copy(r);let x=f*h-l*p;if(x<=0&&h>=0&&p<=0)return a=h/(h-p),t.copy(n).addScaledVector(Pi,a);let v=u*p-f*c;if(v<=0&&c-u>=0&&f-p>=0)return Tc.subVectors(r,i),a=(c-u)/(c-u+(f-p)),t.copy(i).addScaledVector(Tc,a);let m=1/(v+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Ri,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ya(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Al(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ya(o,r,e+1/3),this.g=Ya(o,r,e),this.b=Ya(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Ah[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ke.workingToColorSpace(wt.copy(this),e),Math.round(qe(wt.r*255,0,255))*65536+Math.round(qe(wt.g*255,0,255))*256+Math.round(qe(wt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(wt.copy(this),t);let n=wt.r,i=wt.g,r=wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let c=o-a;switch(h=u<=.5?c/(o+a):c/(2-o-a),o){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Lt){Ke.workingToColorSpace(wt.copy(this),e);let t=wt.r,n=wt.g,i=wt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Sr);let n=xs(kn.h,Sr.h,t),i=xs(kn.s,Sr.s,t),r=xs(kn.l,Sr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new ze;ze.NAMES=Ah;var Md=0,Wn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=oi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=Or,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fr&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ci=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tn=bd();function bd(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):h<-14?(n[l]=1024>>-h-14,n[l|256]=1024>>-h-14|32768,i[l]=-h-1,i[l|256]=-h-1):h<=15?(n[l]=h+15<<10,n[l|256]=h+15<<10|32768,i[l]=13,i[l|256]=13):h<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[l]=h|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Ed(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=qe(s,-65504,65504),Tn.floatView[0]=s;let e=Tn.uint32View[0],t=e>>23&511;return Tn.baseTable[t]+((e&8388607)>>Tn.shiftTable[t])}function wd(s){let e=s>>10;return Tn.uint32View[0]=Tn.mantissaTable[Tn.offsetTable[e]+(s&1023)]+Tn.exponentTable[e],Tn.floatView[0]}var Xn=class{static toHalfFloat(e){return Ed(e)}static fromHalfFloat(e){return wd(e)}},pt=new X,Mr=new ae,Td=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=Ot,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}};var Ts=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var As=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ad=0,Zt=new ft,qa=new Ft,Ii=new X,Ht=new Gn,ms=new Gn,yt=new X,Wt=class s extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cl(e)?As:Ts)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Ht.min,ms.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,ms.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(ms.min),Ht.expandByPoint(ms.max))}Ht.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)yt.fromBufferAttribute(a,h),l&&(Ii.fromBufferAttribute(e,h),yt.add(Ii)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new X,l[T]=new X;let h=new X,u=new X,c=new X,d=new ae,f=new ae,p=new ae,x=new X,v=new X;function m(T,y,S){h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,S),u.sub(h),c.sub(h),f.sub(d),p.sub(d);let A=1/(f.x*p.y-p.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(c,-f.y).multiplyScalar(A),v.copy(c).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(A),a[T].add(x),a[y].add(x),a[S].add(x),l[T].add(v),l[y].add(v),l[S].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,y=b.length;T<y;++T){let S=b[T],A=S.start,N=S.count;for(let B=A,z=A+N;B<z;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let g=new X,_=new X,E=new X,M=new X;function w(T){E.fromBufferAttribute(i,T),M.copy(E);let y=a[T];g.copy(y),g.sub(E.multiplyScalar(E.dot(y))).normalize(),_.crossVectors(M,y);let A=_.dot(l[T])<0?-1:1;o.setXYZW(T,g.x,g.y,g.z,A)}for(let T=0,y=b.length;T<y;++T){let S=b[T],A=S.start,N=S.count;for(let B=A,z=A+N;B<z;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new X,r=new X,o=new X,a=new X,l=new X,h=new X,u=new X,c=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),u.subVectors(o,r),c.subVectors(i,r),u.cross(c),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),a.add(u),l.add(u),h.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),c.subVectors(i,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){let h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u),f=0,p=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=h[f++]}return new Gt(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],h=e(l,n);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,c=h.length;u<c;u++){let d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let h=n[l];e.data.attributes[l]=h.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){let f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let h in i){let u=i[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let h=0,u=o.length;h<u;h++){let c=o[h];this.addGroup(c.start,c.count,c.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ac=new ft,ni=new Gi,br=new Hi,Cc=new X,Er=new X,wr=new X,Tr=new X,$a=new X,Ar=new X,Rc=new X,Cr=new X,Ct=class extends Ft{constructor(e=new Wt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],c=r[l];u!==0&&($a.fromBufferAttribute(c,e),o?Ar.addScaledVector($a,u):Ar.addScaledVector($a.sub(t),u))}t.add(Ar)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(br.containsPoint(ni.origin)===!1&&(ni.intersectSphere(br,Cc)===null||ni.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Ac.copy(r).invert(),ni.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let v=d[p],m=o[v.materialIndex],b=Math.max(v.start,f.start),g=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=b,E=g;_<E;_+=3){let M=a.getX(_),w=a.getX(_+1),T=a.getX(_+2);i=Rr(this,m,e,n,h,u,c,M,w,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let v=p,m=x;v<m;v+=3){let b=a.getX(v),g=a.getX(v+1),_=a.getX(v+2);i=Rr(this,o,e,n,h,u,c,b,g,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let v=d[p],m=o[v.materialIndex],b=Math.max(v.start,f.start),g=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let _=b,E=g;_<E;_+=3){let M=_,w=_+1,T=_+2;i=Rr(this,m,e,n,h,u,c,M,w,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let v=p,m=x;v<m;v+=3){let b=v,g=v+1,_=v+2;i=Rr(this,o,e,n,h,u,c,b,g,_),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function Cd(s,e,t,n,i,r,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Rn,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(Cr);return h<t.near||h>t.far?null:{distance:h,point:Cr.clone(),object:s}}function Rr(s,e,t,n,i,r,o,a,l,h){s.getVertexPosition(a,Er),s.getVertexPosition(l,wr),s.getVertexPosition(h,Tr);let u=Cd(s,e,t,n,Er,wr,Tr,Rc);if(u){let c=new X;Vn.getBarycoord(Rc,Er,wr,Tr,c),i&&(u.uv=Vn.getInterpolatedAttribute(i,a,l,h,c,new ae)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,a,l,h,c,new ae)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,h,c,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new X,materialIndex:0};Vn.getNormal(Er,wr,Tr,d.normal),u.face=d,u.barycoord=c}return u}var Wi=class s extends Wt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],c=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(c,2));function p(x,v,m,b,g,_,E,M,w,T,y){let S=_/w,A=E/T,N=_/2,B=E/2,z=M/2,G=w+1,H=T+1,q=0,V=0,ce=new X;for(let Q=0;Q<H;Q++){let ue=Q*A-B;for(let Se=0;Se<G;Se++){let Ae=Se*S-N;ce[x]=Ae*b,ce[v]=ue*g,ce[m]=z,h.push(ce.x,ce.y,ce.z),ce[x]=0,ce[v]=0,ce[m]=M>0?1:-1,u.push(ce.x,ce.y,ce.z),c.push(Se/w),c.push(1-Q/T),q+=1}}for(let Q=0;Q<T;Q++)for(let ue=0;ue<w;ue++){let Se=d+ue+G*Q,Ae=d+ue+G*(Q+1),D=d+(ue+1)+G*(Q+1),O=d+(ue+1)+G*Q;l.push(Se,Ae,O),l.push(Ae,D,O),V+=6}a.addGroup(f,V,y),f+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){let e={};for(let t=0;t<s.length;t++){let n=mi(s[t]);for(let i in n)e[i]=n[i]}return e}function Rd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rl(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var gi={clone:mi,merge:Rt},Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gt=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Cs=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new X,Pc=new ae,Ic=new ae,Tt=class extends Cs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Ic),t.subVectors(Ic,Pc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Li=-90,Di=1,Wr=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Tt(Li,Di,e,t);i.layers=this.layers,this.add(i);let r=new Tt(Li,Di,e,t);r.layers=this.layers,this.add(r);let o=new Tt(Li,Di,e,t);o.layers=this.layers,this.add(o);let a=new Tt(Li,Di,e,t);a.layers=this.layers,this.add(a);let l=new Tt(Li,Di,e,t);l.layers=this.layers,this.add(l);let h=new Tt(Li,Di,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let h of t)this.remove(h);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(c,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rs=class extends St{constructor(e=[],t=di,n,i,r,o,a,l,h,u){super(e,t,n,i,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xr=class extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Rs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:an});r.uniforms.tEquirect.value=t;let o=new Ct(i,r),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Mt),new Wr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},ri=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ld={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(let x of e.hand.values()){let v=t.getJointPose(x,n),m=this._getHandJoint(h,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,p=.005;h.inputState.pinching&&d>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ps=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Yr=class extends St{constructor(e=null,t=1,n=1,i,r,o,a,l,h=Nt,u=Nt,c,d){super(null,o,a,l,h,u,i,r,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Za=new X,Dd=new X,Ud=new Ve,Jt=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Za.subVectors(n,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ud.getNormalMatrix(e),i=this.coplanarPoint(Za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Hi,Nd=new ae(.5,.5),Pr=new X,Is=class{constructor(e=new Jt,t=new Jt,n=new Jt,i=new Jt,r=new Jt,o=new Jt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],p=i[9],x=i[10],v=i[11],m=i[12],b=i[13],g=i[14],_=i[15];if(n[0].setComponents(l-r,d-h,v-f,_-m).normalize(),n[1].setComponents(l+r,d+h,v+f,_+m).normalize(),n[2].setComponents(l+o,d+u,v+p,_+b).normalize(),n[3].setComponents(l-o,d-u,v-p,_-b).normalize(),n[4].setComponents(l-a,d-c,v-x,_-g).normalize(),t===un)n[5].setComponents(l+a,d+c,v+x,_+g).normalize();else if(t===bs)n[5].setComponents(a,c,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=Nd.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Pr.x=i.normal.x>0?e.max.x:e.min.x,Pr.y=i.normal.y>0?e.max.y:e.min.y,Pr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ls=class extends St{constructor(e,t,n,i,r,o,a,l,h){super(e,t,n,i,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ds=class extends St{constructor(e,t,n=Kn,i,r,o,a=Nt,l=Nt,h,u=Bi,c=1){if(u!==Bi&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,i,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Xt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ae:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new X,i=[],r=[],o=[],a=new X,l=new ft;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new X)}r[0]=new X,o[0]=new X;let h=Number.MAX_VALUE,u=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),c<=h&&(h=c,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(qe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(qe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yi=class extends Xt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*u-f*c+this.aX,h=d*c+f*u+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qr=class extends Yi{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,c){let d=(o-r)/h-(a-r)/(h+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+c)+(l-a)/c;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ir=new X,Ja=new Pl,Ka=new Pl,ja=new Pl,$r=class extends Xt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new X){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=i[(a-1)%r]:(Ir.subVectors(i[0],i[1]).add(i[0]),h=Ir);let c=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Ir.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(h.distanceToSquared(c),f),x=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),v<1e-4&&(v=x),Ja.initNonuniformCatmullRom(h.x,c.x,d.x,u.x,p,x,v),Ka.initNonuniformCatmullRom(h.y,c.y,d.y,u.y,p,x,v),ja.initNonuniformCatmullRom(h.z,c.z,d.z,u.z,p,x,v)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(h.x,c.x,d.x,u.x,this.tension),Ka.initCatmullRom(h.y,c.y,d.y,u.y,this.tension),ja.initCatmullRom(h.z,c.z,d.z,u.z,this.tension));return n.set(Ja.calc(l),Ka.calc(l),ja.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new X().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lc(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Fd(s,e){let t=1-s;return t*t*e}function Od(s,e){return 2*(1-s)*s*e}function Bd(s,e){return s*s*e}function _s(s,e,t,n){return Fd(s,e)+Od(s,t)+Bd(s,n)}function kd(s,e){let t=1-s;return t*t*t*e}function zd(s,e){let t=1-s;return 3*t*t*s*e}function Vd(s,e){return 3*(1-s)*s*s*e}function Hd(s,e){return s*s*s*e}function ys(s,e,t,n,i){return kd(s,e)+zd(s,t)+Vd(s,n)+Hd(s,i)}var Us=class extends Xt{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,o.x,a.x),ys(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zr=class extends Xt{constructor(e=new X,t=new X,n=new X,i=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new X){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,o.x,a.x),ys(e,i.y,r.y,o.y,a.y),ys(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ns=class extends Xt{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends Xt{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends Xt{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,i.x,r.x,o.x),_s(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Xt{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,i.x,r.x,o.x),_s(e,i.y,r.y,o.y),_s(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Xt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],h=i[o],u=i[o>i.length-2?i.length-1:o+1],c=i[o>i.length-3?i.length-1:o+2];return n.set(Lc(a,l.x,h.x,u.x,c.x),Lc(a,l.y,h.y,u.y,c.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ae().fromArray(i))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:qr,CatmullRomCurve3:$r,CubicBezierCurve:Us,CubicBezierCurve3:Zr,EllipseCurve:Yi,LineCurve:Ns,LineCurve3:Jr,QuadraticBezierCurve:Fs,QuadraticBezierCurve3:Kr,SplineCurve:Os}),jr=class extends Xt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new sl[i.type]().fromJSON(i))}return this}},pn=class extends jr{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ns(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Fs(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Us(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Os(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let h=new Yi(e,t,n,i,r,o,a,l);if(this.curves.length>0){let c=h.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Cn=class extends pn{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new pn().fromJSON(i))}return this}};function Gd(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Ch(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=$d(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let u=-1/0,c=-1/0;for(let d=t;d<i;d+=t){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>c&&(c=p)}h=Math.max(u-a,c-l),h=h!==0?32767/h:0}return Bs(r,o,t,a,l,h,0),o}function Ch(s,e,t,n,i){let r;if(i===of(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Dc(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Dc(o/n|0,s[o],s[o+1],r);return r&&qi(r,r.next)&&(zs(r),r=r.next),r}function hi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(qi(t,t.next)||ht(t.prev,t,t.next)===0)){if(zs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Qd(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,h=s.next;if(r?Xd(s,n,i,r):Wd(s)){e.push(l.i,s.i,h.i),zs(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=Yd(hi(s),e),Bs(s,e,t,n,i,r,2)):o===2&&qd(s,e,t,n,i,r):Bs(hi(s),e,t,n,i,r,1);break}}}function Wd(s){let e=s.prev,t=s,n=s.next;if(ht(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,h=n.y,u=Math.min(i,r,o),c=Math.min(a,l,h),d=Math.max(i,r,o),f=Math.max(a,l,h),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=c&&p.y<=f&&gs(i,a,r,l,o,h,p.x,p.y)&&ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Xd(s,e,t,n){let i=s.prev,r=s,o=s.next;if(ht(i,r,o)>=0)return!1;let a=i.x,l=r.x,h=o.x,u=i.y,c=r.y,d=o.y,f=Math.min(a,l,h),p=Math.min(u,c,d),x=Math.max(a,l,h),v=Math.max(u,c,d),m=rl(f,p,e,t,n),b=rl(x,v,e,t,n),g=s.prevZ,_=s.nextZ;for(;g&&g.z>=m&&_&&_.z<=b;){if(g.x>=f&&g.x<=x&&g.y>=p&&g.y<=v&&g!==i&&g!==o&&gs(a,u,l,c,h,d,g.x,g.y)&&ht(g.prev,g,g.next)>=0||(g=g.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=v&&_!==i&&_!==o&&gs(a,u,l,c,h,d,_.x,_.y)&&ht(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;g&&g.z>=m;){if(g.x>=f&&g.x<=x&&g.y>=p&&g.y<=v&&g!==i&&g!==o&&gs(a,u,l,c,h,d,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=v&&_!==i&&_!==o&&gs(a,u,l,c,h,d,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Yd(s,e){let t=s;do{let n=t.prev,i=t.next.next;!qi(n,i)&&Ph(n,t,t.next,i)&&ks(n,i)&&ks(i,n)&&(e.push(n.i,t.i,i.i),zs(t),zs(t.next),t=s=i),t=t.next}while(t!==s);return hi(t)}function qd(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nf(o,a)){let l=Ih(o,a);o=hi(o,o.next),l=hi(l,l.next),Bs(o,e,t,n,i,r,0),Bs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function $d(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,h=Ch(s,a,l,n,!1);h===h.next&&(h.steiner=!0),i.push(tf(h))}i.sort(Zd);for(let r=0;r<i.length;r++)t=Jd(i[r],t);return t}function Zd(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Jd(s,e){let t=Kd(s,e);if(!t)return e;let n=Ih(t,s);return hi(n,n.next),hi(t,t.next)}function Kd(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(qi(s,t))return t;do{if(qi(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let c=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(c<=n&&c>r&&(r=c,o=t.x<t.next.x?t:t.next,c===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,h=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Rh(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)){let c=Math.abs(i-t.y)/(n-t.x);ks(t,s)&&(c<u||c===u&&(t.x>o.x||t.x===o.x&&jd(o,t)))&&(o=t,u=c)}t=t.next}while(t!==a);return o}function jd(s,e){return ht(s.prev,s,e.prev)<0&&ht(e.next,s,s.next)<0}function Qd(s,e,t,n){let i=s;do i.z===0&&(i.z=rl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ef(i)}function ef(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let h=0;h<t&&(a++,o=o.nextZ,!!o);h++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function rl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function tf(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Rh(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function gs(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Rh(s,e,t,n,i,r,o,a)}function nf(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!sf(s,e)&&(ks(s,e)&&ks(e,s)&&rf(s,e)&&(ht(s.prev,s,e.prev)||ht(s,e.prev,e))||qi(s,e)&&ht(s.prev,s,s.next)>0&&ht(e.prev,e,e.next)>0)}function ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function qi(s,e){return s.x===e.x&&s.y===e.y}function Ph(s,e,t,n){let i=Dr(ht(s,e,t)),r=Dr(ht(s,e,n)),o=Dr(ht(t,n,s)),a=Dr(ht(t,n,e));return!!(i!==r&&o!==a||i===0&&Lr(s,t,e)||r===0&&Lr(s,n,e)||o===0&&Lr(t,s,n)||a===0&&Lr(t,e,n))}function Lr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Dr(s){return s>0?1:s<0?-1:0}function sf(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ph(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ks(s,e){return ht(s.prev,s,s.next)<0?ht(s,e,s.next)>=0&&ht(s,s.prev,e)>=0:ht(s,e,s.prev)<0||ht(s,s.next,e)<0}function rf(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ih(s,e){let t=ol(s.i,s.x,s.y),n=ol(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dc(s,e,t,n){let i=ol(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ol(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function of(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var al=class{static triangulate(e,t,n=2){return Gd(e,t,n)}},dn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Uc(e),Nc(n,e);let o=e.length;t.forEach(Uc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Nc(n,t[l]);let a=al.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Uc(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var $i=class s extends Wt{constructor(e=new Cn([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let h=e[a];o(h)}this.setAttribute("position",new mt(i,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,c=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:af,g,_=!1,E,M,w,T;m&&(g=m.getSpacedPoints(u),_=!0,d=!1,E=m.computeFrenetFrames(u,!1),M=new X,w=new X,T=new X),d||(v=0,f=0,p=0,x=0);let y=a.extractPoints(h),S=y.shape,A=y.holes;if(!dn.isClockWise(S)){S=S.reverse();for(let R=0,j=A.length;R<j;R++){let ee=A[R];dn.isClockWise(ee)&&(A[R]=ee.reverse())}}function B(R){let ee=10000000000000001e-36,ne=R[0];for(let k=1;k<=R.length;k++){let U=k%R.length,te=R[U],me=te.x-ne.x,Fe=te.y-ne.y,F=me*me+Fe*Fe,C=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(ne.x),Math.abs(ne.y)),K=ee*C*C;if(F<=K){R.splice(U,1),k--;continue}ne=te}}B(S),A.forEach(B);let z=A.length,G=S;for(let R=0;R<z;R++){let j=A[R];S=S.concat(j)}function H(R,j,ee){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(j,ee)}let q=S.length;function V(R,j,ee){let ne,k,U,te=R.x-j.x,me=R.y-j.y,Fe=ee.x-R.x,F=ee.y-R.y,C=te*te+me*me,K=te*F-me*Fe;if(Math.abs(K)>Number.EPSILON){let re=Math.sqrt(C),he=Math.sqrt(Fe*Fe+F*F),oe=j.x-me/re,Ie=j.y+te/re,Me=ee.x-F/he,Pe=ee.y+Fe/he,De=((Me-oe)*F-(Pe-Ie)*Fe)/(te*F-me*Fe);ne=oe+te*De-R.x,k=Ie+me*De-R.y;let pe=ne*ne+k*k;if(pe<=2)return new ae(ne,k);U=Math.sqrt(pe/2)}else{let re=!1;te>Number.EPSILON?Fe>Number.EPSILON&&(re=!0):te<-Number.EPSILON?Fe<-Number.EPSILON&&(re=!0):Math.sign(me)===Math.sign(F)&&(re=!0),re?(ne=-me,k=te,U=Math.sqrt(C)):(ne=te,k=me,U=Math.sqrt(C/2))}return new ae(ne/U,k/U)}let ce=[];for(let R=0,j=G.length,ee=j-1,ne=R+1;R<j;R++,ee++,ne++)ee===j&&(ee=0),ne===j&&(ne=0),ce[R]=V(G[R],G[ee],G[ne]);let Q=[],ue,Se=ce.concat();for(let R=0,j=z;R<j;R++){let ee=A[R];ue=[];for(let ne=0,k=ee.length,U=k-1,te=ne+1;ne<k;ne++,U++,te++)U===k&&(U=0),te===k&&(te=0),ue[ne]=V(ee[ne],ee[U],ee[te]);Q.push(ue),Se=Se.concat(ue)}let Ae;if(v===0)Ae=dn.triangulateShape(G,A);else{let R=[],j=[];for(let ee=0;ee<v;ee++){let ne=ee/v,k=f*Math.cos(ne*Math.PI/2),U=p*Math.sin(ne*Math.PI/2)+x;for(let te=0,me=G.length;te<me;te++){let Fe=H(G[te],ce[te],U);le(Fe.x,Fe.y,-k),ne===0&&R.push(Fe)}for(let te=0,me=z;te<me;te++){let Fe=A[te];ue=Q[te];let F=[];for(let C=0,K=Fe.length;C<K;C++){let re=H(Fe[C],ue[C],U);le(re.x,re.y,-k),ne===0&&F.push(re)}ne===0&&j.push(F)}}Ae=dn.triangulateShape(R,j)}let D=Ae.length,O=p+x;for(let R=0;R<q;R++){let j=d?H(S[R],Se[R],O):S[R];_?(w.copy(E.normals[0]).multiplyScalar(j.x),M.copy(E.binormals[0]).multiplyScalar(j.y),T.copy(g[0]).add(w).add(M),le(T.x,T.y,T.z)):le(j.x,j.y,0)}for(let R=1;R<=u;R++)for(let j=0;j<q;j++){let ee=d?H(S[j],Se[j],O):S[j];_?(w.copy(E.normals[R]).multiplyScalar(ee.x),M.copy(E.binormals[R]).multiplyScalar(ee.y),T.copy(g[R]).add(w).add(M),le(T.x,T.y,T.z)):le(ee.x,ee.y,c/u*R)}for(let R=v-1;R>=0;R--){let j=R/v,ee=f*Math.cos(j*Math.PI/2),ne=p*Math.sin(j*Math.PI/2)+x;for(let k=0,U=G.length;k<U;k++){let te=H(G[k],ce[k],ne);le(te.x,te.y,c+ee)}for(let k=0,U=A.length;k<U;k++){let te=A[k];ue=Q[k];for(let me=0,Fe=te.length;me<Fe;me++){let F=H(te[me],ue[me],ne);_?le(F.x,F.y+g[u-1].y,g[u-1].x+ee):le(F.x,F.y,c+ee)}}}L(),P();function L(){let R=i.length/3;if(d){let j=0,ee=q*j;for(let ne=0;ne<D;ne++){let k=Ae[ne];Y(k[2]+ee,k[1]+ee,k[0]+ee)}j=u+v*2,ee=q*j;for(let ne=0;ne<D;ne++){let k=Ae[ne];Y(k[0]+ee,k[1]+ee,k[2]+ee)}}else{for(let j=0;j<D;j++){let ee=Ae[j];Y(ee[2],ee[1],ee[0])}for(let j=0;j<D;j++){let ee=Ae[j];Y(ee[0]+q*u,ee[1]+q*u,ee[2]+q*u)}}n.addGroup(R,i.length/3-R,0)}function P(){let R=i.length/3,j=0;J(G,j),j+=G.length;for(let ee=0,ne=A.length;ee<ne;ee++){let k=A[ee];J(k,j),j+=k.length}n.addGroup(R,i.length/3-R,1)}function J(R,j){let ee=R.length;for(;--ee>=0;){let ne=ee,k=ee-1;k<0&&(k=R.length-1);for(let U=0,te=u+v*2;U<te;U++){let me=q*U,Fe=q*(U+1),F=j+ne+me,C=j+k+me,K=j+k+Fe,re=j+ne+Fe;ge(F,C,K,re)}}}function le(R,j,ee){l.push(R),l.push(j),l.push(ee)}function Y(R,j,ee){ve(R),ve(j),ve(ee);let ne=i.length/3,k=b.generateTopUV(n,i,ne-3,ne-2,ne-1);fe(k[0]),fe(k[1]),fe(k[2])}function ge(R,j,ee,ne){ve(R),ve(j),ve(ne),ve(j),ve(ee),ve(ne);let k=i.length/3,U=b.generateSideWallUV(n,i,k-6,k-3,k-2,k-1);fe(U[0]),fe(U[1]),fe(U[3]),fe(U[1]),fe(U[2]),fe(U[3])}function ve(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function fe(R){r.push(R.x),r.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new sl[i.type]().fromJSON(i)),new s(n,e.options)}},af={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],h=e[i*3],u=e[i*3+1];return[new ae(r,o),new ae(a,l),new ae(h,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],h=e[n*3],u=e[n*3+1],c=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[r*3],v=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new ae(o,1-l),new ae(h,1-c),new ae(d,1-p),new ae(x,1-m)]:[new ae(a,1-l),new ae(u,1-c),new ae(f,1-p),new ae(v,1-m)]}};function lf(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Vs=class s extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=e/a,d=t/l,f=[],p=[],x=[],v=[];for(let m=0;m<u;m++){let b=m*d-o;for(let g=0;g<h;g++){let _=g*c-r;p.push(_,-b,0),x.push(0,0,1),v.push(g/a),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let g=b+h*m,_=b+h*(m+1),E=b+1+h*(m+1),M=b+1+h*m;f.push(g,_,M),f.push(_,E,M)}this.setIndex(f),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qr=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hs=class extends Qr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var eo=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},to=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ur(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function cf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ui=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},no=class extends ui{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qa,endingEnd:Qa}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case el:r=e,a=2*t-n;break;case tl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case el:o=e,l=2*n-t;break;case tl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,v=x*p,m=-d*v+2*d*x-d*p,b=(1+d)*v+(-1.5-2*d)*x+(-.5+d)*p+1,g=(-1-f)*v+(1.5+f)*x+.5*p,_=f*v-f*x;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+b*o[h+E]+g*o[l+E]+_*o[c+E];return r}},io=class extends ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,u=(n-t)/(i-t),c=1-u;for(let d=0;d!==a;++d)r[d]=o[h+d]*c+o[l+d]*u;return r}},so=class extends ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Yt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new no(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Nr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Nr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&cf(i))for(let a=0,l=i.length;a!==l;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=e[a],u=e[a+1];if(h!==u&&(a!==1||h!==e[0]))if(i)l=!0;else{let c=a*n,d=c-n,f=c+n;for(let p=0;p!==n;++p){let x=t[c+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let c=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Yt.prototype.ValueTypeName="";Yt.prototype.TimeBufferType=Float32Array;Yt.prototype.ValueBufferType=Float32Array;Yt.prototype.DefaultInterpolation=zr;var Yn=class extends Yt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=Ss;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}};ro.prototype.ValueTypeName="color";var oo=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}};oo.prototype.ValueTypeName="number";var ao=class extends ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),h=e*a;for(let u=h+a;h!==u;h+=4)Kt.slerpFlat(r,0,o,h-a,o,h,l);return r}},Gs=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Yt{constructor(e,t,n){super(e,t,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Ss;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends Yt{constructor(e,t,n,i){super(e,t,n,i)}};lo.prototype.ValueTypeName="vector";var Oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},co=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){let c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){let f=h[c],p=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},Lh=new co,mn=class{constructor(e){this.manager=e!==void 0?e:Lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};mn.DEFAULT_MATERIAL_NAME="__DEFAULT";var wn={},ll=class extends Error{constructor(e,t){super(e),this.response=t}},Zi=class extends mn{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Oi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:n,onError:i});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||h.body===void 0||h.body.getReader===void 0)return h;let u=wn[e],c=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,v=new ReadableStream({start(m){b();function b(){c.read().then(({done:g,value:_})=>{if(g)m.close();else{x+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let M=0,w=u.length;M<w;M++){let T=u[M];T.onProgress&&T.onProgress(E)}m.enqueue(_),b()}},g=>{m.error(g)})}}});return new Response(v)}else throw new ll(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a==="")return h.text();{let c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(p=>f.decode(p))}}}).then(h=>{Oi.add(`file:${e}`,h);let u=wn[e];delete wn[e];for(let c=0,d=u.length;c<d;c++){let f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{let u=wn[e];if(u===void 0)throw this.manager.itemError(e),h;delete wn[e];for(let c=0,d=u.length;c<d;c++){let f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ui=new WeakMap,ho=class extends mn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Oi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let c=Ui.get(o);c===void 0&&(c=[],Ui.set(o,c)),c.push({onLoad:t,onError:i})}return o}let a=zi("img");function l(){u(),t&&t(this);let c=Ui.get(this)||[];for(let d=0;d<c.length;d++){let f=c[d];f.onLoad&&f.onLoad(this)}Ui.delete(this),r.manager.itemEnd(e)}function h(c){u(),i&&i(c),Oi.remove(`image:${e}`);let d=Ui.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(c)}Ui.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ws=class extends mn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Yr,a=new Zi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let h;try{h=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:hn,o.wrapT=h.wrapT!==void 0?h.wrapT:hn,o.magFilter=h.magFilter!==void 0?h.magFilter:Mt,o.minFilter=h.minFilter!==void 0?h.minFilter:Mt,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=Ln),h.mipmapCount===1&&(o.minFilter=Mt),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,t&&t(o,h)},n,i),o}},Xs=class extends mn{constructor(e){super(e)}load(e,t,n,i){let r=new St,o=new ho(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},uo=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ys=class extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}};var Ji=class extends Cs{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var fo=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},qs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Il="\\[\\]\\.:\\/",hf=new RegExp("["+Il+"]","g"),Ll="[^"+Il+"]",uf="[^"+Il.replace("\\.","")+"]",df=/((?:WC+[\/:])*)/.source.replace("WC",Ll),ff=/(WCOD+)?/.source.replace("WCOD",uf),pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),mf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),gf=new RegExp("^"+df+ff+pf+mf+"$"),vf=["material","materials","bones","map"],cl=class{constructor(e,t,n){let i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hf,"")}static parseTrackName(e){let t=gf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);vf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[i];if(o===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=cl;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vv=new Float32Array(1);var Ki=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fc=new ae,$s=class{constructor(e=new ae(1/0,1/0),t=new ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var on=class{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new pn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){let b=[];for(let g=0,_=m.length;g<_;g++){let E=m[g],M=new Cn;M.curves=E.curves,b.push(M)}return b}function n(m,b){let g=b.length,_=!1;for(let E=g-1,M=0;M<g;E=M++){let w=b[E],T=b[M],y=T.x-w.x,S=T.y-w.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(w=b[M],y=-y,T=b[E],S=-S),m.y<w.y||m.y>T.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{let A=S*(m.x-w.x)-y*(m.y-w.y);if(A===0)return!0;if(A<0)continue;_=!_}}else{if(m.y!==w.y)continue;if(T.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=T.x)return!0}}return _}let i=dn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,h=[];if(r.length===1)return a=r[0],l=new Cn,l.curves=a.curves,h.push(l),h;let u=!i(r[0].getPoints());u=e?!u:u;let c=[],d=[],f=[],p=0,x;d[p]=void 0,f[p]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],x=a.getPoints(),o=i(x),o=e?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new Cn,p:x},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:x[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,b=0;for(let g=0,_=d.length;g<_;g++)c[g]=[];for(let g=0,_=d.length;g<_;g++){let E=f[g];for(let M=0;M<E.length;M++){let w=E[M],T=!0;for(let y=0;y<d.length;y++)n(w.p,d[y].p)&&(g!==y&&b++,T?(T=!1,c[y].push(w)):m=!0);T&&c[g].push(w)}}b>0&&m===!1&&(f=c)}let v;for(let m=0,b=d.length;m<b;m++){l=d[m].s,h.push(l),v=f[m];for(let g=0,_=v.length;g<_;g++)l.holes.push(v[g].h)}return h}},Zs=class extends fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Dl(s,e,t,n){let i=xf(n);switch(t){case _l:return s*e;case Sl:return s*e/i.components*i.byteLength;case Co:return s*e/i.components*i.byteLength;case Ml:return s*e*2/i.components*i.byteLength;case Ro:return s*e*2/i.components*i.byteLength;case yl:return s*e*3/i.components*i.byteLength;case Qt:return s*e*4/i.components*i.byteLength;case Po:return s*e*4/i.components*i.byteLength;case Qs:case er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tr:case nr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Uo:return Math.max(s,16)*Math.max(e,8)/4;case Io:case Do:return Math.max(s,8)*Math.max(e,8)/2;case No:case Fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ir:case jo:case Qo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bl:case ea:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ta:case na:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xf(s){switch(s){case vn:case gl:return{byteLength:1,components:1};case ji:case vl:case bt:return{byteLength:2,components:1};case To:case Ao:return{byteLength:2,components:4};case Kn:case wo:case Ot:return{byteLength:4,components:1};case xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);function nu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _f(s){let e=new WeakMap;function t(a,l){let h=a.array,u=a.usage,c=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&h instanceof Float16Array)f=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){let u=l.array,c=l.updateRanges;if(s.bindBuffer(h,a),c.length===0)s.bufferSubData(h,0,u);else{c.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<c.length;f++){let p=c[d],x=c[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,c[d]=x)}c.length=d+1;for(let f=0,p=c.length;f<p;f++){let x=c[f];s.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:o}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,_p=`
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,qm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:yf,alphahash_pars_fragment:Sf,alphamap_fragment:Mf,alphamap_pars_fragment:bf,alphatest_fragment:Ef,alphatest_pars_fragment:wf,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Cf,batching_vertex:Rf,begin_vertex:Pf,beginnormal_vertex:If,bsdfs:Lf,iridescence_fragment:Df,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:kf,color_pars_fragment:zf,color_pars_vertex:Vf,color_vertex:Hf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:Yf,displacementmap_vertex:qf,emissivemap_fragment:$f,emissivemap_pars_fragment:Zf,colorspace_fragment:Jf,colorspace_pars_fragment:Kf,envmap_fragment:jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:op,gradientmap_pars_fragment:ap,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:_p,lights_fragment_maps:yp,lights_fragment_end:Sp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:wp,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Cp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Lp,morphcolor_vertex:Dp,morphnormal_vertex:Up,morphtarget_pars_vertex:Np,morphtarget_vertex:Fp,normal_fragment_begin:Op,normal_fragment_maps:Bp,normal_pars_fragment:kp,normal_pars_vertex:zp,normal_vertex:Vp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:Yp,opaque_fragment:qp,packing:$p,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:Kp,dithering_pars_fragment:jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:om,skinning_vertex:am,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:vm,worldpos_vertex:xm,background_vert:_m,background_frag:ym,backgroundCube_vert:Sm,backgroundCube_frag:Mm,cube_vert:bm,cube_frag:Em,depth_vert:wm,depth_frag:Tm,distanceRGBA_vert:Am,distanceRGBA_frag:Cm,equirect_vert:Rm,equirect_frag:Pm,linedashed_vert:Im,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Fm,meshmatcap_vert:Om,meshmatcap_frag:Bm,meshnormal_vert:km,meshnormal_frag:zm,meshphong_vert:Vm,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:Ym,points_vert:qm,points_frag:$m,shadow_vert:Zm,shadow_frag:Jm,sprite_vert:Km,sprite_frag:jm},Ee={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},xn={basic:{uniforms:Rt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Rt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Rt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Rt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Rt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Rt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Rt([Ee.points,Ee.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Rt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Rt([Ee.common,Ee.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Rt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Rt([Ee.sprite,Ee.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Rt([Ee.common,Ee.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Rt([Ee.lights,Ee.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};xn.physical={uniforms:Rt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var ia={r:0,b:0,g:0},vi=new rn,Qm=new ft;function eg(s,e,t,n,i,r,o){let a=new ze(0),l=r===!0?0:1,h,u,c=null,d=0,f=null;function p(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_)),_}function x(g){let _=!1,E=p(g);E===null?m(a,l):E&&E.isColor&&(m(E,1),_=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(g,_){let E=p(_);E&&(E.isCubeTexture||E.mapping===Ks)?(u===void 0&&(u=new Ct(new Wi(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:mi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vi.copy(_.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(vi)),u.material.toneMapped=Ke.getTransfer(E.colorSpace)!==et,(c!==E||d!==E.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,c=E,d=E.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Ct(new Vs(2,2),new gt({name:"BackgroundMaterial",uniforms:mi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(E.colorSpace)!==et,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(c!==E||d!==E.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,c=E,d=E.version,f=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function m(g,_){g.getRGB(ia,Rl(s)),n.buffers.color.setClear(ia.r,ia.g,ia.b,_,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:x,addToRenderList:v,dispose:b}}function tg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,A,N,B,z){let G=!1,H=c(B,N,A);r!==H&&(r=H,h(r.object)),G=f(S,B,N,z),G&&p(S,B,N,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(S,A,N,B),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function h(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function c(S,A,N){let B=N.wireframe===!0,z=n[S.id];z===void 0&&(z={},n[S.id]=z);let G=z[A.id];G===void 0&&(G={},z[A.id]=G);let H=G[B];return H===void 0&&(H=d(l()),G[B]=H),H}function d(S){let A=[],N=[],B=[];for(let z=0;z<t;z++)A[z]=0,N[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,A,N,B){let z=r.attributes,G=A.attributes,H=0,q=N.getAttributes();for(let V in q)if(q[V].location>=0){let Q=z[V],ue=G[V];if(ue===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function p(S,A,N,B){let z={},G=A.attributes,H=0,q=N.getAttributes();for(let V in q)if(q[V].location>=0){let Q=G[V];Q===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));let ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),z[V]=ue,H++}r.attributes=z,r.attributesNum=H,r.index=B}function x(){let S=r.newAttributes;for(let A=0,N=S.length;A<N;A++)S[A]=0}function v(S){m(S,0)}function m(S,A){let N=r.newAttributes,B=r.enabledAttributes,z=r.attributeDivisors;N[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),z[S]!==A&&(s.vertexAttribDivisor(S,A),z[S]=A)}function b(){let S=r.newAttributes,A=r.enabledAttributes;for(let N=0,B=A.length;N<B;N++)A[N]!==S[N]&&(s.disableVertexAttribArray(N),A[N]=0)}function g(S,A,N,B,z,G,H){H===!0?s.vertexAttribIPointer(S,A,N,z,G):s.vertexAttribPointer(S,A,N,B,z,G)}function _(S,A,N,B){x();let z=B.attributes,G=N.getAttributes(),H=A.defaultAttributeValues;for(let q in G){let V=G[q];if(V.location>=0){let ce=z[q];if(ce===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){let Q=ce.normalized,ue=ce.itemSize,Se=e.get(ce);if(Se===void 0)continue;let Ae=Se.buffer,D=Se.type,O=Se.bytesPerElement,L=D===s.INT||D===s.UNSIGNED_INT||ce.gpuType===wo;if(ce.isInterleavedBufferAttribute){let P=ce.data,J=P.stride,le=ce.offset;if(P.isInstancedInterleavedBuffer){for(let Y=0;Y<V.locationSize;Y++)m(V.location+Y,P.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Y=0;Y<V.locationSize;Y++)v(V.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Y=0;Y<V.locationSize;Y++)g(V.location+Y,ue/V.locationSize,D,Q,J*O,(le+ue/V.locationSize*Y)*O,L)}else{if(ce.isInstancedBufferAttribute){for(let P=0;P<V.locationSize;P++)m(V.location+P,ce.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let P=0;P<V.locationSize;P++)v(V.location+P);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let P=0;P<V.locationSize;P++)g(V.location+P,ue/V.locationSize,D,Q,ue*O,ue/V.locationSize*P*O,L)}}else if(H!==void 0){let Q=H[q];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(V.location,Q);break;case 3:s.vertexAttrib3fv(V.location,Q);break;case 4:s.vertexAttrib4fv(V.location,Q);break;default:s.vertexAttrib1fv(V.location,Q)}}}}b()}function E(){T();for(let S in n){let A=n[S];for(let N in A){let B=A[N];for(let z in B)u(B[z].object),delete B[z];delete A[N]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;let A=n[S.id];for(let N in A){let B=A[N];for(let z in B)u(B[z].object),delete B[z];delete A[N]}delete n[S.id]}function w(S){for(let A in n){let N=n[A];if(N[S.id]===void 0)continue;let B=N[S.id];for(let z in B)u(B[z].object),delete B[z];delete N[S.id]}}function T(){y(),o=!0,r!==i&&(r=i,h(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:v,disableUnusedAttributes:b}}function ng(s,e,t){let n;function i(h){n=h}function r(h,u){s.drawArrays(n,h,u),t.update(u,n,1)}function o(h,u,c){c!==0&&(s.drawArraysInstanced(n,h,u,c),t.update(u,n,c))}function a(h,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,n,1)}function l(h,u,c,d){if(c===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h.length;p++)o(h[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let p=0;for(let x=0;x<c;x++)p+=u[x]*d[x];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ig(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Qt&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let T=w===bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ot&&!T)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let c=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:b,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:E,maxSamples:M}}function sg(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Jt,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){let p=c.clippingPlanes,x=c.clipIntersection,v=c.clipShadows,m=s.get(c);if(!i||p===null||p.length===0||r&&!v)r?u(null):h();else{let b=r?0:n,g=b*4,_=m.clippingState||null;l.value=_,_=u(p,d,g,f);for(let E=0;E!==g;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,p){let x=c!==null?c.length:0,v=null;if(x!==0){if(v=l.value,p!==!0||v===null){let m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,_=f;g!==x;++g,_+=4)o.copy(c[g]).applyMatrix4(b,a),o.normal.toArray(v,_),v[_+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function rg(s){let e=new WeakMap;function t(o,a){return a===Jn?o.mapping=di:a===bo&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jn||a===bo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Xr(l.height);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,Dh=[.125,.215,.35,.446,.526,.582],yi=20,Ul=new Ji,Uh=new ze,Nl=null,Fl=0,Ol=0,Bl=!1,_i=(1+Math.sqrt(5))/2,ts=1/_i,Nh=[new X(-_i,ts,0),new X(_i,ts,0),new X(-ts,0,_i),new X(ts,0,_i),new X(0,_i,-ts),new X(0,_i,ts),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],og=new X,oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=og}=r;Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Fl,Ol),this._renderer.xr.enabled=Bl,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:bt,format:Qt,colorSpace:Pn,depthBuffer:!1},i=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(r)),this._blurMaterial=lg(r,e,t)}return i}_compileMaterial(e){let t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,n,i,r){let l=new Tt(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Uh),c.toneMapping=In,c.autoClear=!1;let p=new ci({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),x=new Ct(new Wi,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Uh),v=!0);for(let b=0;b<6;b++){let g=b%3;g===0?(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):g===1?(l.up.set(0,0,h[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let _=this._cubeSize;sa(i,g*_,b>2?_:0,_,_),c.setRenderTarget(i),v&&c.render(x,l),c.render(e,l)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===di||e.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nh[(i-r-1)%Nh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new Ct(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),x=r/p,v=isFinite(r)?1+Math.floor(u*x):yi;v>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${yi}`);let m=[],b=0;for(let w=0;w<yi;++w){let T=w/x,y=Math.exp(-T*T/2);m.push(y),w===0?b+=y:w<v&&(b+=2*y)}for(let w=0;w<m.length;w++)m[w]=m[w]/b;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:g}=this;d.dTheta.value=p,d.mipInt.value=g-n;let _=this._sizeLods[i],E=3*_*(i>g-ns?i-g+ns:0),M=4*(this._cubeSize-_);sa(t,E,M,3*_,2*_),l.setRenderTarget(t),l.render(c,Ul)}};function ag(s){let e=[],t=[],n=[],i=s,r=s-ns+1+Dh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ns?l=Dh[o-s+ns-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,p=6,x=3,v=2,m=1,b=new Float32Array(x*p*f),g=new Float32Array(v*p*f),_=new Float32Array(m*p*f);for(let M=0;M<f;M++){let w=M%3*2/3-1,T=M>2?0:-1,y=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];b.set(y,x*p*M),g.set(d,v*p*M);let S=[M,M,M,M,M,M];_.set(S,m*p*M)}let E=new Wt;E.setAttribute("position",new Gt(b,x)),E.setAttribute("uv",new Gt(g,v)),E.setAttribute("faceIndex",new Gt(_,m)),e.push(E),i>ns&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fh(s,e,t){let n=new At(s,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function lg(s,e,t){let n=new Float32Array(yi),i=new X(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$l(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Oh(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Bh(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function cg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===Jn||l===bo,u=l===di||l===fi;if(h||u){let c=e.get(a),d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new oa(s)),c=h?t.fromEquirectangular(a,c):t.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{let f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new oa(s)),c=h?t.fromEquirectangular(a):t.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function i(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ug(s,e,t,n){let i={},r=new WeakMap;function o(c){let d=c.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(c){let d=c.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function h(c){let d=[],f=c.index,p=c.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let g=0,_=b.length;g<_;g+=3){let E=b[g+0],M=b[g+1],w=b[g+2];d.push(E,M,M,w,w,E)}}else if(p!==void 0){let b=p.array;x=p.version;for(let g=0,_=b.length/3-1;g<_;g+=3){let E=g+0,M=g+1,w=g+2;d.push(E,M,M,w,w,E)}}else return;let v=new(Cl(d)?As:Ts)(d,1);v.version=x;let m=r.get(c);m&&e.remove(m),r.set(c,v)}function u(c){let d=r.get(c);if(d){let f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function dg(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function h(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let v=0;for(let m=0;m<p;m++)v+=f[m];t.update(v,n,1)}function c(d,f,p,x){if(p===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<d.length;m++)h(d[m]/o,f[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*x[b];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function fg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pg(s,e,t){let n=new WeakMap,i=new dt;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==c){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],g=0;f===!0&&(g=1),p===!0&&(g=2),x===!0&&(g=3);let _=a.attributes.position.count*g,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*E*4*c),w=new Es(M,_,E,c);w.type=Ot,w.needsUpdate=!0;let T=g*4;for(let S=0;S<c;S++){let A=v[S],N=m[S],B=b[S],z=_*E*4*S;for(let G=0;G<A.count;G++){let H=G*T;f===!0&&(i.fromBufferAttribute(A,G),M[z+H+0]=i.x,M[z+H+1]=i.y,M[z+H+2]=i.z,M[z+H+3]=0),p===!0&&(i.fromBufferAttribute(N,G),M[z+H+4]=i.x,M[z+H+5]=i.y,M[z+H+6]=i.z,M[z+H+7]=0),x===!0&&(i.fromBufferAttribute(B,G),M[z+H+8]=i.x,M[z+H+9]=i.y,M[z+H+10]=i.z,M[z+H+11]=B.itemSize===4?i.w:1)}}d={count:c,texture:w,size:new ae(_,E)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function mg(s,e,t,n){let i=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,c=e.get(l,u);if(i.get(c)!==h&&(e.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function o(){i=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var iu=new St,kh=new Ds(1,1),su=new Es,ru=new Gr,ou=new Rs,zh=[],Vh=[],Hh=new Float32Array(16),Gh=new Float32Array(9),Wh=new Float32Array(4);function ss(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=zh[i];if(r===void 0&&(r=new Float32Array(i),zh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function la(s,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function gg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function vg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function xg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function _g(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function yg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Wh.set(n),s.uniformMatrix2fv(this.addr,!1,Wh),xt(t,n)}}function Sg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Gh.set(n),s.uniformMatrix3fv(this.addr,!1,Gh),xt(t,n)}}function Mg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Hh.set(n),s.uniformMatrix4fv(this.addr,!1,Hh),xt(t,n)}}function bg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Eg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function wg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function Tg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function Ag(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Cg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function Rg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function Pg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function Ig(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(kh.compareFunction=wl,r=kh):r=iu,t.setTexture2D(e||r,i)}function Lg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ru,i)}function Dg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ou,i)}function Ug(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||su,i)}function Ng(s){switch(s){case 5126:return gg;case 35664:return vg;case 35665:return xg;case 35666:return _g;case 35674:return yg;case 35675:return Sg;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Eg;case 35668:case 35672:return wg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Cg;case 36295:return Rg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}function Fg(s,e){s.uniform1fv(this.addr,e)}function Og(s,e){let t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function Bg(s,e){let t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function kg(s,e){let t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function zg(s,e){let t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vg(s,e){let t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hg(s,e){let t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gg(s,e){s.uniform1iv(this.addr,e)}function Wg(s,e){s.uniform2iv(this.addr,e)}function Xg(s,e){s.uniform3iv(this.addr,e)}function Yg(s,e){s.uniform4iv(this.addr,e)}function qg(s,e){s.uniform1uiv(this.addr,e)}function $g(s,e){s.uniform2uiv(this.addr,e)}function Zg(s,e){s.uniform3uiv(this.addr,e)}function Jg(s,e){s.uniform4uiv(this.addr,e)}function Kg(s,e,t){let n=this.cache,i=e.length,r=la(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||iu,r[o])}function jg(s,e,t){let n=this.cache,i=e.length,r=la(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ru,r[o])}function Qg(s,e,t){let n=this.cache,i=e.length,r=la(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ou,r[o])}function e0(s,e,t){let n=this.cache,i=e.length,r=la(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||su,r[o])}function t0(s){switch(s){case 5126:return Fg;case 35664:return Og;case 35665:return Bg;case 35666:return kg;case 35674:return zg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return Yg;case 5125:return qg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return e0}}var zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ng(t.type)}},Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t0(t.type)}},Hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},kl=/(\w+)(\])?(\[|\.)?/g;function Xh(s,e){s.seq.push(e),s.map[e.id]=e}function n0(s,e,t){let n=s.name,i=n.length;for(kl.lastIndex=0;;){let r=kl.exec(n),o=kl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Xh(t,h===void 0?new zl(a,s,e):new Vl(a,s,e));break}else{let c=t.map[a];c===void 0&&(c=new Hl(a),Xh(t,c)),t=c}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);n0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Yh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var i0=37297,s0=0;function r0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var qh=new Ve;function o0(s){Ke._getMatrix(qh,Ke.workingColorSpace,s);let e=`mat3( ${qh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Ms:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $h(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+r0(s.getShaderSource(e),o)}else return i}function a0(s,e){let t=o0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function l0(s,e){let t;switch(e){case oh:t="Linear";break;case ah:t="Reinhard";break;case lh:t="Cineon";break;case Mo:t="ACESFilmic";break;case hh:t="AgX";break;case uh:t="Neutral";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ra=new X;function c0(){Ke.getLuminanceCoefficients(ra);let s=ra.x.toFixed(4),e=ra.y.toFixed(4),t=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function u0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rr(s){return s!==""}function Zh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(s){return s.replace(f0,m0)}var p0=new Map;function m0(s,e){let t=$e[e];if(t===void 0){let n=p0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}var g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(s){return s.replace(g0,v0)}function v0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function x0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function _0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function S0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case sh:e="ENVMAP_BLENDING_MIX";break;case rh:e="ENVMAP_BLENDING_ADD";break}return e}function M0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function b0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=x0(t),h=_0(t),u=y0(t),c=S0(t),d=M0(t),f=h0(t),p=u0(r),x=i.createProgram(),v,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(v=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?$e.tonemapping_pars_fragment:"",t.toneMapping!==In?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),c0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),o=Gl(o),o=Zh(o,t),o=Jh(o,t),a=Gl(a),a=Zh(a,t),a=Jh(a,t),o=Kh(o),a=Kh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=b+v+o,_=b+m+a,E=Yh(i,i.VERTEX_SHADER,g),M=Yh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,E),i.attachShader(x,M),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(A){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x).trim(),B=i.getShaderInfoLog(E).trim(),z=i.getShaderInfoLog(M).trim(),G=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,M);else{let q=$h(i,E,"vertex"),V=$h(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||z==="")&&(H=!1);H&&(A.diagnostics={runnable:G,programLog:N,vertexShader:{log:B,prefix:v},fragmentShader:{log:z,prefix:m}})}i.deleteShader(E),i.deleteShader(M),T=new is(i,x),y=d0(i,x)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,i0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=M,this}var E0=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xl(e),t.set(e,n)),n}},Xl=class{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}};function w0(s,e,t,n,i,r,o){let a=new ws,l=new Wl,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return h.add(y),y===0?"uv":`uv${y}`}function v(y,S,A,N,B){let z=N.fog,G=B.geometry,H=y.isMeshStandardMaterial?N.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),V=q&&q.mapping===Ks?q.image.height:null,ce=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=Q!==void 0?Q.length:0,Se=0;G.morphAttributes.position!==void 0&&(Se=1),G.morphAttributes.normal!==void 0&&(Se=2),G.morphAttributes.color!==void 0&&(Se=3);let Ae,D,O,L;if(ce){let Qe=xn[ce];Ae=Qe.vertexShader,D=Qe.fragmentShader}else Ae=y.vertexShader,D=y.fragmentShader,l.update(y),O=l.getVertexShaderID(y),L=l.getFragmentShaderID(y);let P=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),le=B.isInstancedMesh===!0,Y=B.isBatchedMesh===!0,ge=!!y.map,ve=!!y.matcap,fe=!!q,R=!!y.aoMap,j=!!y.lightMap,ee=!!y.bumpMap,ne=!!y.normalMap,k=!!y.displacementMap,U=!!y.emissiveMap,te=!!y.metalnessMap,me=!!y.roughnessMap,Fe=y.anisotropy>0,F=y.clearcoat>0,C=y.dispersion>0,K=y.iridescence>0,re=y.sheen>0,he=y.transmission>0,oe=Fe&&!!y.anisotropyMap,Ie=F&&!!y.clearcoatMap,Me=F&&!!y.clearcoatNormalMap,Pe=F&&!!y.clearcoatRoughnessMap,De=K&&!!y.iridescenceMap,pe=K&&!!y.iridescenceThicknessMap,Ce=re&&!!y.sheenColorMap,He=re&&!!y.sheenRoughnessMap,ke=!!y.specularMap,be=!!y.specularColorMap,Xe=!!y.specularIntensityMap,W=he&&!!y.transmissionMap,we=he&&!!y.thicknessMap,xe=!!y.gradientMap,Le=!!y.alphaMap,_e=y.alphaTest>0,de=!!y.alphaHash,Ue=!!y.extensions,Ye=In;y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ye=s.toneMapping);let rt={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:Ae,fragmentShader:D,defines:y.defines,customVertexShaderID:O,customFragmentShaderID:L,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Y,batchingColor:Y&&B._colorsTexture!==null,instancing:le,instancingColor:le&&B.instanceColor!==null,instancingMorph:le&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pn,alphaToCoverage:!!y.alphaToCoverage,map:ge,matcap:ve,envMap:fe,envMapMode:fe&&q.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:j,bumpMap:ee,normalMap:ne,displacementMap:d&&k,emissiveMap:U,normalMapObjectSpace:ne&&y.normalMapType===mh,normalMapTangentSpace:ne&&y.normalMapType===El,metalnessMap:te,roughnessMap:me,anisotropy:Fe,anisotropyMap:oe,clearcoat:F,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:C,iridescence:K,iridescenceMap:De,iridescenceThicknessMap:pe,sheen:re,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:ke,specularColorMap:be,specularIntensityMap:Xe,transmission:he,transmissionMap:W,thicknessMap:we,gradientMap:xe,opaque:y.transparent===!1&&y.blending===oi&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:_e,alphaHash:de,combine:y.combine,mapUv:ge&&x(y.map.channel),aoMapUv:R&&x(y.aoMap.channel),lightMapUv:j&&x(y.lightMap.channel),bumpMapUv:ee&&x(y.bumpMap.channel),normalMapUv:ne&&x(y.normalMap.channel),displacementMapUv:k&&x(y.displacementMap.channel),emissiveMapUv:U&&x(y.emissiveMap.channel),metalnessMapUv:te&&x(y.metalnessMap.channel),roughnessMapUv:me&&x(y.roughnessMap.channel),anisotropyMapUv:oe&&x(y.anisotropyMap.channel),clearcoatMapUv:Ie&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Me&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(y.sheenRoughnessMap.channel),specularMapUv:ke&&x(y.specularMap.channel),specularColorMapUv:be&&x(y.specularColorMap.channel),specularIntensityMapUv:Xe&&x(y.specularIntensityMap.channel),transmissionMapUv:W&&x(y.transmissionMap.channel),thicknessMapUv:we&&x(y.thicknessMap.channel),alphaMapUv:Le&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ne||Fe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(ge||Le),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:J,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===et,decodeVideoTextureEmissive:U&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jt,flipSided:y.side===Dt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&y.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=h.has(1),rt.vertexUv2s=h.has(2),rt.vertexUv3s=h.has(3),h.clear(),rt}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)S.push(A),S.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(b(S,y),g(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){let S=p[y.type],A;if(S){let N=xn[S];A=gi.clone(N.uniforms)}else A=y.uniforms;return A}function E(y,S){let A;for(let N=0,B=u.length;N<B;N++){let z=u[N];if(z.cacheKey===S){A=z,++A.usedTimes;break}}return A===void 0&&(A=new b0(s,S,y,r),u.push(A)),A}function M(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function T(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:E,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:T}}function T0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function A0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(c,d,f,p,x,v){let m=s[e];return m===void 0?(m={id:c.id,object:c,geometry:d,material:f,groupOrder:p,renderOrder:c.renderOrder,z:x,group:v},s[e]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=c.renderOrder,m.z=x,m.group=v),e++,m}function a(c,d,f,p,x,v){let m=o(c,d,f,p,x,v);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(c,d,f,p,x,v){let m=o(c,d,f,p,x,v);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function h(c,d){t.length>1&&t.sort(c||A0),n.length>1&&n.sort(d||Qh),i.length>1&&i.sort(d||Qh)}function u(){for(let c=e,d=s.length;c<d;c++){let f=s[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:h}}function C0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new eu,s.set(n,[o])):i>=r.length?(o=new eu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function R0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ze};break;case"SpotLight":t={position:new X,direction:new X,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function P0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var I0=0;function L0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function D0(s){let e=new R0,t=P0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new X);let i=new X,r=new ft,o=new ft;function a(h){let u=0,c=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,p=0,x=0,v=0,m=0,b=0,g=0,_=0,E=0,M=0,w=0;h.sort(L0);for(let y=0,S=h.length;y<S;y++){let A=h[y],N=A.color,B=A.intensity,z=A.distance,G=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*B,c+=N.g*B,d+=N.b*B;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],B);w++}else if(A.isDirectionalLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let q=A.shadow,V=t.get(A);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=A.shadow.matrix,b++}n.directional[f]=H,f++}else if(A.isSpotLight){let H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(N).multiplyScalar(B),H.distance=z,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[x]=H;let q=A.shadow;if(A.map&&(n.spotLightMap[E]=A.map,E++,q.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[x]=q.matrix,A.castShadow){let V=t.get(A);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=G,_++}x++}else if(A.isRectAreaLight){let H=e.get(A);H.color.copy(N).multiplyScalar(B),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=H,v++}else if(A.isPointLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){let q=A.shadow,V=t.get(A);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=A.shadow.matrix,g++}n.point[p]=H,p++}else if(A.isHemisphereLight){let H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(B),H.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[m]=H,m++}}v>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=c,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==p||T.spotLength!==x||T.rectAreaLength!==v||T.hemiLength!==m||T.numDirectionalShadows!==b||T.numPointShadows!==g||T.numSpotShadows!==_||T.numSpotMaps!==E||T.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=v,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,T.directionalLength=f,T.pointLength=p,T.spotLength=x,T.rectAreaLength=v,T.hemiLength=m,T.numDirectionalShadows=b,T.numPointShadows=g,T.numSpotShadows=_,T.numSpotMaps=E,T.numLightProbes=w,n.version=I0++)}function l(h,u){let c=0,d=0,f=0,p=0,x=0,v=u.matrixWorldInverse;for(let m=0,b=h.length;m<b;m++){let g=h[m];if(g.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),c++}else if(g.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(v),f++}else if(g.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),o.identity(),r.copy(g.matrixWorld),r.premultiply(v),o.extractRotation(r),_.halfWidth.set(g.width*.5,0,0),_.halfHeight.set(0,g.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(v),d++}else if(g.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:n}}function tu(s){let e=new D0(s),t=[],n=[];function i(u){h.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function U0(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new tu(s),e.set(i,[a])):r>=o.length?(a=new tu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function O0(s,e,t){let n=new Is,i=new ae,r=new ae,o=new dt,a=new eo({depthPacking:ph}),l=new to,h={},u=t.maxTextureSize,c={[Rn]:Dt,[Dt]:Rn,[jt]:jt},d=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Wt;p.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ct(p,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let m=this.type;this.render=function(M,w,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;let y=s.getRenderTarget(),S=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),N=s.state;N.setBlending(an),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=m!==gn&&this.type===gn,z=m===gn&&this.type!==gn;for(let G=0,H=M.length;G<H;G++){let q=M[G],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ce=V.getFrameExtents();if(i.multiply(ce),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ce.x),i.x=r.x*ce.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ce.y),i.y=r.y*ce.y,V.mapSize.y=r.y)),V.map===null||B===!0||z===!0){let ue=this.type!==gn?{minFilter:Nt,magFilter:Nt}:{};V.map!==null&&V.map.dispose(),V.map=new At(i.x,i.y,ue),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let Q=V.getViewportCount();for(let ue=0;ue<Q;ue++){let Se=V.getViewport(ue);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),N.viewport(o),V.updateMatrices(q,ue),n=V.getFrustum(),_(w,T,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&b(V,T),V.needsUpdate=!1}m=this.type,v.needsUpdate=!1,s.setRenderTarget(y,S,A)};function b(M,w){let T=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new At(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,T,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,T,f,x,null)}function g(M,w,T,y){let S=null,A=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=S.uuid,B=w.uuid,z=h[N];z===void 0&&(z={},h[N]=z);let G=z[B];G===void 0&&(G=S.clone(),z[B]=G,w.addEventListener("dispose",E)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,y===gn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:c[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=s.properties.get(S);N.light=T}return S}function _(M,w,T,y,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===gn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);let B=e.update(M),z=M.material;if(Array.isArray(z)){let G=B.groups;for(let H=0,q=G.length;H<q;H++){let V=G[H],ce=z[V.materialIndex];if(ce&&ce.visible){let Q=g(M,ce,y,S);M.onBeforeShadow(s,M,w,T,B,Q,V),s.renderBufferDirect(T,null,B,Q,M,V),M.onAfterShadow(s,M,w,T,B,Q,V)}}}else if(z.visible){let G=g(M,z,y,S);M.onBeforeShadow(s,M,w,T,B,G,null),s.renderBufferDirect(T,null,B,G,M,null),M.onAfterShadow(s,M,w,T,B,G,null)}}let N=M.children;for(let B=0,z=N.length;B<z;B++)_(N[B],w,T,y,S)}function E(M){M.target.removeEventListener("dispose",E);for(let T in h){let y=h[T],S=M.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}var B0={[mo]:go,[vo]:yo,[xo]:So,[ai]:_o,[go]:mo,[yo]:vo,[So]:xo,[_o]:ai};function k0(s,e){function t(){let W=!1,we=new dt,xe=null,Le=new dt(0,0,0,0);return{setMask:function(_e){xe!==_e&&!W&&(s.colorMask(_e,_e,_e,_e),xe=_e)},setLocked:function(_e){W=_e},setClear:function(_e,de,Ue,Ye,rt){rt===!0&&(_e*=Ye,de*=Ye,Ue*=Ye),we.set(_e,de,Ue,Ye),Le.equals(we)===!1&&(s.clearColor(_e,de,Ue,Ye),Le.copy(we))},reset:function(){W=!1,xe=null,Le.set(-1,0,0,0)}}}function n(){let W=!1,we=!1,xe=null,Le=null,_e=null;return{setReversed:function(de){if(we!==de){let Ue=e.get("EXT_clip_control");de?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),we=de;let Ye=_e;_e=null,this.setClear(Ye)}},getReversed:function(){return we},setTest:function(de){de?P(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(de){xe!==de&&!W&&(s.depthMask(de),xe=de)},setFunc:function(de){if(we&&(de=B0[de]),Le!==de){switch(de){case mo:s.depthFunc(s.NEVER);break;case go:s.depthFunc(s.ALWAYS);break;case vo:s.depthFunc(s.LESS);break;case ai:s.depthFunc(s.LEQUAL);break;case xo:s.depthFunc(s.EQUAL);break;case _o:s.depthFunc(s.GEQUAL);break;case yo:s.depthFunc(s.GREATER);break;case So:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=de}},setLocked:function(de){W=de},setClear:function(de){_e!==de&&(we&&(de=1-de),s.clearDepth(de),_e=de)},reset:function(){W=!1,xe=null,Le=null,_e=null,we=!1}}}function i(){let W=!1,we=null,xe=null,Le=null,_e=null,de=null,Ue=null,Ye=null,rt=null;return{setTest:function(Qe){W||(Qe?P(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(Qe){we!==Qe&&!W&&(s.stencilMask(Qe),we=Qe)},setFunc:function(Qe,en,_n){(xe!==Qe||Le!==en||_e!==_n)&&(s.stencilFunc(Qe,en,_n),xe=Qe,Le=en,_e=_n)},setOp:function(Qe,en,_n){(de!==Qe||Ue!==en||Ye!==_n)&&(s.stencilOp(Qe,en,_n),de=Qe,Ue=en,Ye=_n)},setLocked:function(Qe){W=Qe},setClear:function(Qe){rt!==Qe&&(s.clearStencil(Qe),rt=Qe)},reset:function(){W=!1,we=null,xe=null,Le=null,_e=null,de=null,Ue=null,Ye=null,rt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,h=new WeakMap,u={},c={},d=new WeakMap,f=[],p=null,x=!1,v=null,m=null,b=null,g=null,_=null,E=null,M=null,w=new ze(0,0,0),T=0,y=!1,S=null,A=null,N=null,B=null,z=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=q>=2);let ce=null,Q={},ue=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Ae=new dt().fromArray(ue),D=new dt().fromArray(Se);function O(W,we,xe,Le){let _e=new Uint8Array(4),de=s.createTexture();s.bindTexture(W,de),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<xe;Ue++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(we+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return de}let L={};L[s.TEXTURE_2D]=O(s.TEXTURE_2D,s.TEXTURE_2D,1),L[s.TEXTURE_CUBE_MAP]=O(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[s.TEXTURE_2D_ARRAY]=O(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),L[s.TEXTURE_3D]=O(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(s.DEPTH_TEST),o.setFunc(ai),ee(!1),ne(hl),P(s.CULL_FACE),R(an);function P(W){u[W]!==!0&&(s.enable(W),u[W]=!0)}function J(W){u[W]!==!1&&(s.disable(W),u[W]=!1)}function le(W,we){return c[W]!==we?(s.bindFramebuffer(W,we),c[W]=we,W===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=we),W===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Y(W,we){let xe=f,Le=!1;if(W){xe=d.get(we),xe===void 0&&(xe=[],d.set(we,xe));let _e=W.textures;if(xe.length!==_e.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Ue=_e.length;de<Ue;de++)xe[de]=s.COLOR_ATTACHMENT0+de;xe.length=_e.length,Le=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Le=!0);Le&&s.drawBuffers(xe)}function ge(W){return p!==W?(s.useProgram(W),p=W,!0):!1}let ve={[Hn]:s.FUNC_ADD,[Vc]:s.FUNC_SUBTRACT,[Hc]:s.FUNC_REVERSE_SUBTRACT};ve[Gc]=s.MIN,ve[Wc]=s.MAX;let fe={[Xc]:s.ZERO,[Yc]:s.ONE,[qc]:s.SRC_COLOR,[Fr]:s.SRC_ALPHA,[Qc]:s.SRC_ALPHA_SATURATE,[Kc]:s.DST_COLOR,[Zc]:s.DST_ALPHA,[$c]:s.ONE_MINUS_SRC_COLOR,[Or]:s.ONE_MINUS_SRC_ALPHA,[jc]:s.ONE_MINUS_DST_COLOR,[Jc]:s.ONE_MINUS_DST_ALPHA,[eh]:s.CONSTANT_COLOR,[th]:s.ONE_MINUS_CONSTANT_COLOR,[nh]:s.CONSTANT_ALPHA,[ih]:s.ONE_MINUS_CONSTANT_ALPHA};function R(W,we,xe,Le,_e,de,Ue,Ye,rt,Qe){if(W===an){x===!0&&(J(s.BLEND),x=!1);return}if(x===!1&&(P(s.BLEND),x=!0),W!==zc){if(W!==v||Qe!==y){if((m!==Hn||_!==Hn)&&(s.blendEquation(s.FUNC_ADD),m=Hn,_=Hn),Qe)switch(W){case oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFunc(s.ONE,s.ONE);break;case dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,g=null,E=null,M=null,w.set(0,0,0),T=0,v=W,y=Qe}return}_e=_e||we,de=de||xe,Ue=Ue||Le,(we!==m||_e!==_)&&(s.blendEquationSeparate(ve[we],ve[_e]),m=we,_=_e),(xe!==b||Le!==g||de!==E||Ue!==M)&&(s.blendFuncSeparate(fe[xe],fe[Le],fe[de],fe[Ue]),b=xe,g=Le,E=de,M=Ue),(Ye.equals(w)===!1||rt!==T)&&(s.blendColor(Ye.r,Ye.g,Ye.b,rt),w.copy(Ye),T=rt),v=W,y=!1}function j(W,we){W.side===jt?J(s.CULL_FACE):P(s.CULL_FACE);let xe=W.side===Dt;we&&(xe=!xe),ee(xe),W.blending===oi&&W.transparent===!1?R(an):R(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Le=W.stencilWrite;a.setTest(Le),Le&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),U(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(W){S!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),S=W)}function ne(W){W!==Oc?(P(s.CULL_FACE),W!==A&&(W===hl?s.cullFace(s.BACK):W===Bc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),A=W}function k(W){W!==N&&(H&&s.lineWidth(W),N=W)}function U(W,we,xe){W?(P(s.POLYGON_OFFSET_FILL),(B!==we||z!==xe)&&(s.polygonOffset(we,xe),B=we,z=xe)):J(s.POLYGON_OFFSET_FILL)}function te(W){W?P(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function me(W){W===void 0&&(W=s.TEXTURE0+G-1),ce!==W&&(s.activeTexture(W),ce=W)}function Fe(W,we,xe){xe===void 0&&(ce===null?xe=s.TEXTURE0+G-1:xe=ce);let Le=Q[xe];Le===void 0&&(Le={type:void 0,texture:void 0},Q[xe]=Le),(Le.type!==W||Le.texture!==we)&&(ce!==xe&&(s.activeTexture(xe),ce=xe),s.bindTexture(W,we||L[W]),Le.type=W,Le.texture=we)}function F(){let W=Q[ce];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(W){Ae.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ae.copy(W))}function He(W){D.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),D.copy(W))}function ke(W,we){let xe=h.get(we);xe===void 0&&(xe=new WeakMap,h.set(we,xe));let Le=xe.get(W);Le===void 0&&(Le=s.getUniformBlockIndex(we,W.name),xe.set(W,Le))}function be(W,we){let Le=h.get(we).get(W);l.get(we)!==Le&&(s.uniformBlockBinding(we,Le,W.__bindingPointIndex),l.set(we,Le))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ce=null,Q={},c={},d=new WeakMap,f=[],p=null,x=!1,v=null,m=null,b=null,g=null,_=null,E=null,M=null,w=new ze(0,0,0),T=0,y=!1,S=null,A=null,N=null,B=null,z=null,Ae.set(0,0,s.canvas.width,s.canvas.height),D.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:J,bindFramebuffer:le,drawBuffers:Y,useProgram:ge,setBlending:R,setMaterial:j,setFlipSided:ee,setCullFace:ne,setLineWidth:k,setPolygonOffset:U,setScissorTest:te,activeTexture:me,bindTexture:Fe,unbindTexture:F,compressedTexImage2D:C,compressedTexImage3D:K,texImage2D:De,texImage3D:pe,updateUBOMapping:ke,uniformBlockBinding:be,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:re,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ie,scissor:Ce,viewport:He,reset:Xe}}function z0(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ae,u=new WeakMap,c,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(F){}function p(F,C){return f?new OffscreenCanvas(F,C):zi("canvas")}function x(F,C,K){let re=1,he=Fe(F);if((he.width>K||he.height>K)&&(re=K/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap||typeof VideoFrame!="undefined"&&F instanceof VideoFrame){let oe=Math.floor(re*he.width),Ie=Math.floor(re*he.height);c===void 0&&(c=p(oe,Ie));let Me=C?p(oe,Ie):c;return Me.width=oe,Me.height=Ie,Me.getContext("2d").drawImage(F,0,0,oe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+Ie+")."),Me}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function v(F){return F.generateMipmaps}function m(F){s.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function g(F,C,K,re,he=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let oe=C;if(C===s.RED&&(K===s.FLOAT&&(oe=s.R32F),K===s.HALF_FLOAT&&(oe=s.R16F),K===s.UNSIGNED_BYTE&&(oe=s.R8)),C===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.R8UI),K===s.UNSIGNED_SHORT&&(oe=s.R16UI),K===s.UNSIGNED_INT&&(oe=s.R32UI),K===s.BYTE&&(oe=s.R8I),K===s.SHORT&&(oe=s.R16I),K===s.INT&&(oe=s.R32I)),C===s.RG&&(K===s.FLOAT&&(oe=s.RG32F),K===s.HALF_FLOAT&&(oe=s.RG16F),K===s.UNSIGNED_BYTE&&(oe=s.RG8)),C===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RG8UI),K===s.UNSIGNED_SHORT&&(oe=s.RG16UI),K===s.UNSIGNED_INT&&(oe=s.RG32UI),K===s.BYTE&&(oe=s.RG8I),K===s.SHORT&&(oe=s.RG16I),K===s.INT&&(oe=s.RG32I)),C===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),K===s.UNSIGNED_INT&&(oe=s.RGB32UI),K===s.BYTE&&(oe=s.RGB8I),K===s.SHORT&&(oe=s.RGB16I),K===s.INT&&(oe=s.RGB32I)),C===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),K===s.UNSIGNED_INT&&(oe=s.RGBA32UI),K===s.BYTE&&(oe=s.RGBA8I),K===s.SHORT&&(oe=s.RGBA16I),K===s.INT&&(oe=s.RGBA32I)),C===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),C===s.RGBA){let Ie=he?Ms:Ke.getTransfer(re);K===s.FLOAT&&(oe=s.RGBA32F),K===s.HALF_FLOAT&&(oe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(oe=Ie===et?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(F,C){let K;return F?C===null||C===Kn||C===Qi?K=s.DEPTH24_STENCIL8:C===Ot?K=s.DEPTH32F_STENCIL8:C===ji&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Kn||C===Qi?K=s.DEPTH_COMPONENT24:C===Ot?K=s.DEPTH_COMPONENT32F:C===ji&&(K=s.DEPTH_COMPONENT16),K}function E(F,C){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==Nt&&F.minFilter!==Mt?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function M(F){let C=F.target;C.removeEventListener("dispose",M),T(C),C.isVideoTexture&&u.delete(C)}function w(F){let C=F.target;C.removeEventListener("dispose",w),S(C)}function T(F){let C=n.get(F);if(C.__webglInit===void 0)return;let K=F.source,re=d.get(K);if(re){let he=re[C.__cacheKey];he.usedTimes--,he.usedTimes===0&&y(F),Object.keys(re).length===0&&d.delete(K)}n.remove(F)}function y(F){let C=n.get(F);s.deleteTexture(C.__webglTexture);let K=F.source,re=d.get(K);delete re[C.__cacheKey],o.memory.textures--}function S(F){let C=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(C.__webglFramebuffer[re]))for(let he=0;he<C.__webglFramebuffer[re].length;he++)s.deleteFramebuffer(C.__webglFramebuffer[re][he]);else s.deleteFramebuffer(C.__webglFramebuffer[re]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[re])}else{if(Array.isArray(C.__webglFramebuffer))for(let re=0;re<C.__webglFramebuffer.length;re++)s.deleteFramebuffer(C.__webglFramebuffer[re]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let re=0;re<C.__webglColorRenderbuffer.length;re++)C.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[re]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let K=F.textures;for(let re=0,he=K.length;re<he;re++){let oe=n.get(K[re]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(K[re])}n.remove(F)}let A=0;function N(){A=0}function B(){let F=A;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),A+=1,F}function z(F){let C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function G(F,C){let K=n.get(F);if(F.isVideoTexture&&te(F),F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){let re=F.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(K,F,C);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+C)}function H(F,C){let K=n.get(F);if(F.version>0&&K.__version!==F.version){L(K,F,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+C)}function q(F,C){let K=n.get(F);if(F.version>0&&K.__version!==F.version){L(K,F,C);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+C)}function V(F,C){let K=n.get(F);if(F.version>0&&K.__version!==F.version){P(K,F,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+C)}let ce={[Br]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[kr]:s.MIRRORED_REPEAT},Q={[Nt]:s.NEAREST,[dh]:s.NEAREST_MIPMAP_NEAREST,[js]:s.NEAREST_MIPMAP_LINEAR,[Mt]:s.LINEAR,[Eo]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},ue={[gh]:s.NEVER,[Mh]:s.ALWAYS,[vh]:s.LESS,[wl]:s.LEQUAL,[xh]:s.EQUAL,[Sh]:s.GEQUAL,[_h]:s.GREATER,[yh]:s.NOTEQUAL};function Se(F,C){if(C.type===Ot&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Mt||C.magFilter===Eo||C.magFilter===js||C.magFilter===Ln||C.minFilter===Mt||C.minFilter===Eo||C.minFilter===js||C.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,ce[C.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,ce[C.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,ce[C.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,Q[C.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,Q[C.minFilter]),C.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,ue[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Nt||C.minFilter!==js&&C.minFilter!==Ln||C.type===Ot&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Ae(F,C){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",M));let re=C.source,he=d.get(re);he===void 0&&(he={},d.set(re,he));let oe=z(C);if(oe!==F.__cacheKey){he[oe]===void 0&&(he[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),he[oe].usedTimes++;let Ie=he[F.__cacheKey];Ie!==void 0&&(he[F.__cacheKey].usedTimes--,Ie.usedTimes===0&&y(C)),F.__cacheKey=oe,F.__webglTexture=he[oe].texture}return K}function D(F,C,K){return Math.floor(Math.floor(F/K)/C)}function O(F,C,K,re){let oe=F.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,K,re,C.data);else{oe.sort((pe,Ce)=>pe.start-Ce.start);let Ie=0;for(let pe=1;pe<oe.length;pe++){let Ce=oe[Ie],He=oe[pe],ke=Ce.start+Ce.count,be=D(He.start,C.width,4),Xe=D(Ce.start,C.width,4);He.start<=ke+1&&be===Xe&&D(He.start+He.count-1,C.width,4)===be?Ce.count=Math.max(Ce.count,He.start+He.count-Ce.start):(++Ie,oe[Ie]=He)}oe.length=Ie+1;let Me=s.getParameter(s.UNPACK_ROW_LENGTH),Pe=s.getParameter(s.UNPACK_SKIP_PIXELS),De=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let pe=0,Ce=oe.length;pe<Ce;pe++){let He=oe[pe],ke=Math.floor(He.start/4),be=Math.ceil(He.count/4),Xe=ke%C.width,W=Math.floor(ke/C.width),we=be,xe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,Xe,W,we,xe,K,re,C.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Me),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function L(F,C,K){let re=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(re=s.TEXTURE_3D);let he=Ae(F,C),oe=C.source;t.bindTexture(re,F.__webglTexture,s.TEXTURE0+K);let Ie=n.get(oe);if(oe.version!==Ie.__version||he===!0){t.activeTexture(s.TEXTURE0+K);let Me=Ke.getPrimaries(Ke.workingColorSpace),Pe=C.colorSpace===Dn?null:Ke.getPrimaries(C.colorSpace),De=C.colorSpace===Dn||Me===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let pe=x(C.image,!1,i.maxTextureSize);pe=me(C,pe);let Ce=r.convert(C.format,C.colorSpace),He=r.convert(C.type),ke=g(C.internalFormat,Ce,He,C.colorSpace,C.isVideoTexture);Se(re,C);let be,Xe=C.mipmaps,W=C.isVideoTexture!==!0,we=Ie.__version===void 0||he===!0,xe=oe.dataReady,Le=E(C,pe);if(C.isDepthTexture)ke=_(C.format===es,C.type),we&&(W?t.texStorage2D(s.TEXTURE_2D,1,ke,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,ke,pe.width,pe.height,0,Ce,He,null));else if(C.isDataTexture)if(Xe.length>0){W&&we&&t.texStorage2D(s.TEXTURE_2D,Le,ke,Xe[0].width,Xe[0].height);for(let _e=0,de=Xe.length;_e<de;_e++)be=Xe[_e],W?xe&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,be.width,be.height,Ce,He,be.data):t.texImage2D(s.TEXTURE_2D,_e,ke,be.width,be.height,0,Ce,He,be.data);C.generateMipmaps=!1}else W?(we&&t.texStorage2D(s.TEXTURE_2D,Le,ke,pe.width,pe.height),xe&&O(C,pe,Ce,He)):t.texImage2D(s.TEXTURE_2D,0,ke,pe.width,pe.height,0,Ce,He,pe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){W&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,ke,Xe[0].width,Xe[0].height,pe.depth);for(let _e=0,de=Xe.length;_e<de;_e++)if(be=Xe[_e],C.format!==Qt)if(Ce!==null)if(W){if(xe)if(C.layerUpdates.size>0){let Ue=Dl(be.width,be.height,C.format,C.type);for(let Ye of C.layerUpdates){let rt=be.data.subarray(Ye*Ue/be.data.BYTES_PER_ELEMENT,(Ye+1)*Ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ye,be.width,be.height,1,Ce,rt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,be.width,be.height,pe.depth,Ce,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,ke,be.width,be.height,pe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,be.width,be.height,pe.depth,Ce,He,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,ke,be.width,be.height,pe.depth,0,Ce,He,be.data)}else{W&&we&&t.texStorage2D(s.TEXTURE_2D,Le,ke,Xe[0].width,Xe[0].height);for(let _e=0,de=Xe.length;_e<de;_e++)be=Xe[_e],C.format!==Qt?Ce!==null?W?xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?xe&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,be.width,be.height,Ce,He,be.data):t.texImage2D(s.TEXTURE_2D,_e,ke,be.width,be.height,0,Ce,He,be.data)}else if(C.isDataArrayTexture)if(W){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,ke,pe.width,pe.height,pe.depth),xe)if(C.layerUpdates.size>0){let _e=Dl(pe.width,pe.height,C.format,C.type);for(let de of C.layerUpdates){let Ue=pe.data.subarray(de*_e/pe.data.BYTES_PER_ELEMENT,(de+1)*_e/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,pe.width,pe.height,1,Ce,He,Ue)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ce,He,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,pe.width,pe.height,pe.depth,0,Ce,He,pe.data);else if(C.isData3DTexture)W?(we&&t.texStorage3D(s.TEXTURE_3D,Le,ke,pe.width,pe.height,pe.depth),xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ce,He,pe.data)):t.texImage3D(s.TEXTURE_3D,0,ke,pe.width,pe.height,pe.depth,0,Ce,He,pe.data);else if(C.isFramebufferTexture){if(we)if(W)t.texStorage2D(s.TEXTURE_2D,Le,ke,pe.width,pe.height);else{let _e=pe.width,de=pe.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,ke,_e,de,0,Ce,He,null),_e>>=1,de>>=1}}else if(Xe.length>0){if(W&&we){let _e=Fe(Xe[0]);t.texStorage2D(s.TEXTURE_2D,Le,ke,_e.width,_e.height)}for(let _e=0,de=Xe.length;_e<de;_e++)be=Xe[_e],W?xe&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ce,He,be):t.texImage2D(s.TEXTURE_2D,_e,ke,Ce,He,be);C.generateMipmaps=!1}else if(W){if(we){let _e=Fe(pe);t.texStorage2D(s.TEXTURE_2D,Le,ke,_e.width,_e.height)}xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,He,pe)}else t.texImage2D(s.TEXTURE_2D,0,ke,Ce,He,pe);v(C)&&m(re),Ie.__version=oe.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function P(F,C,K){if(C.image.length!==6)return;let re=Ae(F,C),he=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+K);let oe=n.get(he);if(he.version!==oe.__version||re===!0){t.activeTexture(s.TEXTURE0+K);let Ie=Ke.getPrimaries(Ke.workingColorSpace),Me=C.colorSpace===Dn?null:Ke.getPrimaries(C.colorSpace),Pe=C.colorSpace===Dn||Ie===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let De=C.isCompressedTexture||C.image[0].isCompressedTexture,pe=C.image[0]&&C.image[0].isDataTexture,Ce=[];for(let de=0;de<6;de++)!De&&!pe?Ce[de]=x(C.image[de],!0,i.maxCubemapSize):Ce[de]=pe?C.image[de].image:C.image[de],Ce[de]=me(C,Ce[de]);let He=Ce[0],ke=r.convert(C.format,C.colorSpace),be=r.convert(C.type),Xe=g(C.internalFormat,ke,be,C.colorSpace),W=C.isVideoTexture!==!0,we=oe.__version===void 0||re===!0,xe=he.dataReady,Le=E(C,He);Se(s.TEXTURE_CUBE_MAP,C);let _e;if(De){W&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Xe,He.width,He.height);for(let de=0;de<6;de++){_e=Ce[de].mipmaps;for(let Ue=0;Ue<_e.length;Ue++){let Ye=_e[Ue];C.format!==Qt?ke!==null?W?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue,0,0,Ye.width,Ye.height,ke,Ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue,Xe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue,0,0,Ye.width,Ye.height,ke,be,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue,Xe,Ye.width,Ye.height,0,ke,be,Ye.data)}}}else{if(_e=C.mipmaps,W&&we){_e.length>0&&Le++;let de=Fe(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Xe,de.width,de.height)}for(let de=0;de<6;de++)if(pe){W?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ce[de].width,Ce[de].height,ke,be,Ce[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,Ce[de].width,Ce[de].height,0,ke,be,Ce[de].data);for(let Ue=0;Ue<_e.length;Ue++){let rt=_e[Ue].image[de].image;W?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue+1,0,0,rt.width,rt.height,ke,be,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue+1,Xe,rt.width,rt.height,0,ke,be,rt.data)}}else{W?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke,be,Ce[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,ke,be,Ce[de]);for(let Ue=0;Ue<_e.length;Ue++){let Ye=_e[Ue];W?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue+1,0,0,ke,be,Ye.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue+1,Xe,ke,be,Ye.image[de])}}}v(C)&&m(s.TEXTURE_CUBE_MAP),oe.__version=he.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function J(F,C,K,re,he,oe){let Ie=r.convert(K.format,K.colorSpace),Me=r.convert(K.type),Pe=g(K.internalFormat,Ie,Me,K.colorSpace),De=n.get(C),pe=n.get(K);if(pe.__renderTarget=C,!De.__hasExternalTextures){let Ce=Math.max(1,C.width>>oe),He=Math.max(1,C.height>>oe);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,oe,Pe,Ce,He,C.depth,0,Ie,Me,null):t.texImage2D(he,oe,Pe,Ce,He,0,Ie,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),U(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,he,pe.__webglTexture,0,k(C)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,he,pe.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(F,C,K){if(s.bindRenderbuffer(s.RENDERBUFFER,F),C.depthBuffer){let re=C.depthTexture,he=re&&re.isDepthTexture?re.type:null,oe=_(C.stencilBuffer,he),Ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=k(C);U(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,oe,C.width,C.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,oe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,oe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,F)}else{let re=C.textures;for(let he=0;he<re.length;he++){let oe=re[he],Ie=r.convert(oe.format,oe.colorSpace),Me=r.convert(oe.type),Pe=g(oe.internalFormat,Ie,Me,oe.colorSpace),De=k(C);K&&U(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Pe,C.width,C.height):U(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Pe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Y(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let re=n.get(C.depthTexture);re.__renderTarget=C,(!re.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),G(C.depthTexture,0);let he=re.__webglTexture,oe=k(C);if(C.depthTexture.format===Bi)U(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(C.depthTexture.format===es)U(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ge(F){let C=n.get(F),K=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){let re=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),re){let he=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),C.__depthDisposeCallback=he}C.__boundDepthTexture=re}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");let re=F.texture.mipmaps;re&&re.length>0?Y(C.__webglFramebuffer[0],F):Y(C.__webglFramebuffer,F)}else if(K){C.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[re]),C.__webglDepthbuffer[re]===void 0)C.__webglDepthbuffer[re]=s.createRenderbuffer(),le(C.__webglDepthbuffer[re],F,!1);else{let he=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=C.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,oe)}}else{let re=F.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),le(C.__webglDepthbuffer,F,!1);else{let he=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,oe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(F,C,K){let re=n.get(F);C!==void 0&&J(re.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ge(F)}function fe(F){let C=F.texture,K=n.get(F),re=n.get(C);F.addEventListener("dispose",w);let he=F.textures,oe=F.isWebGLCubeRenderTarget===!0,Ie=he.length>1;if(Ie||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=C.version,o.memory.textures++),oe){K.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[Me]=[];for(let Pe=0;Pe<C.mipmaps.length;Pe++)K.__webglFramebuffer[Me][Pe]=s.createFramebuffer()}else K.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let Me=0;Me<C.mipmaps.length;Me++)K.__webglFramebuffer[Me]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let Me=0,Pe=he.length;Me<Pe;Me++){let De=n.get(he[Me]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}if(F.samples>0&&U(F)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Me=0;Me<he.length;Me++){let Pe=he[Me];K.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Me]);let De=r.convert(Pe.format,Pe.colorSpace),pe=r.convert(Pe.type),Ce=g(Pe.internalFormat,De,pe,Pe.colorSpace,F.isXRRenderTarget===!0),He=k(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ce,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,K.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),le(K.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Se(s.TEXTURE_CUBE_MAP,C);for(let Me=0;Me<6;Me++)if(C.mipmaps&&C.mipmaps.length>0)for(let Pe=0;Pe<C.mipmaps.length;Pe++)J(K.__webglFramebuffer[Me][Pe],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe);else J(K.__webglFramebuffer[Me],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);v(C)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,Pe=he.length;Me<Pe;Me++){let De=he[Me],pe=n.get(De);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),Se(s.TEXTURE_2D,De),J(K.__webglFramebuffer,F,De,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),v(De)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Me=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,re.__webglTexture),Se(Me,C),C.mipmaps&&C.mipmaps.length>0)for(let Pe=0;Pe<C.mipmaps.length;Pe++)J(K.__webglFramebuffer[Pe],F,C,s.COLOR_ATTACHMENT0,Me,Pe);else J(K.__webglFramebuffer,F,C,s.COLOR_ATTACHMENT0,Me,0);v(C)&&m(Me),t.unbindTexture()}F.depthBuffer&&ge(F)}function R(F){let C=F.textures;for(let K=0,re=C.length;K<re;K++){let he=C[K];if(v(he)){let oe=b(F),Ie=n.get(he).__webglTexture;t.bindTexture(oe,Ie),m(oe),t.unbindTexture()}}}let j=[],ee=[];function ne(F){if(F.samples>0){if(U(F)===!1){let C=F.textures,K=F.width,re=F.height,he=s.COLOR_BUFFER_BIT,oe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(F),Me=C.length>1;if(Me)for(let De=0;De<C.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Pe=F.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let De=0;De<C.length;De++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[De]);let pe=n.get(C[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,K,re,0,0,K,re,he,s.NEAREST),l===!0&&(j.length=0,ee.length=0,j.push(s.COLOR_ATTACHMENT0+De),F.depthBuffer&&F.resolveDepthBuffer===!1&&(j.push(oe),ee.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let De=0;De<C.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[De]);let pe=n.get(C[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let C=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function k(F){return Math.min(i.maxSamples,F.samples)}function U(F){let C=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function te(F){let C=o.render.frame;u.get(F)!==C&&(u.set(F,C),F.update())}function me(F,C){let K=F.colorSpace,re=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==Pn&&K!==Dn&&(Ke.getTransfer(K)===et?(re!==Qt||he!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),C}function Fe(F){return typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame!="undefined"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=ve,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=J,this.useMultisampledRTT=U}function V0(s,e){function t(n,i=Dn){let r,o=Ke.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===To)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return s.BYTE;if(n===vl)return s.SHORT;if(n===ji)return s.UNSIGNED_SHORT;if(n===wo)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===Ot)return s.FLOAT;if(n===bt)return s.HALF_FLOAT;if(n===_l)return s.ALPHA;if(n===yl)return s.RGB;if(n===Qt)return s.RGBA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===es)return s.DEPTH_STENCIL;if(n===Sl)return s.RED;if(n===Co)return s.RED_INTEGER;if(n===Ml)return s.RG;if(n===Ro)return s.RG_INTEGER;if(n===Po)return s.RGBA_INTEGER;if(n===Qs||n===er||n===tr||n===nr)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Lo||n===Do||n===Uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===ko||n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===Yo||n===qo||n===$o||n===Zo||n===Jo||n===Ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===jo||n===Qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ir)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===ea||n===ta||n===na)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G0=`
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

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new St,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gt({vertexShader:H0,fragmentShader:G0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends fn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,p=null,x=new Yl,v=t.getContextAttributes(),m=null,b=null,g=[],_=[],E=new ae,M=null,w=new Tt;w.viewport=new dt;let T=new Tt;T.viewport=new dt;let y=[w,T],S=new fo,A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let O=g[D];return O===void 0&&(O=new Xi,g[D]=O),O.getTargetRaySpace()},this.getControllerGrip=function(D){let O=g[D];return O===void 0&&(O=new Xi,g[D]=O),O.getGripSpace()},this.getHand=function(D){let O=g[D];return O===void 0&&(O=new Xi,g[D]=O),O.getHandSpace()};function B(D){let O=_.indexOf(D.inputSource);if(O===-1)return;let L=g[O];L!==void 0&&(L.update(D.inputSource,D.frame,h||o),L.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",G);for(let D=0;D<g.length;D++){let O=_[D];O!==null&&(_[D]=null,g[D].disconnect(O))}A=null,N=null,x.reset(),e.setRenderTarget(m),f=null,d=null,c=null,i=null,b=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(D){h=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",z),i.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,P=null,J=null;v.depth&&(J=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=v.stencil?es:Bi,P=v.stencil?Qi:Kn);let le={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};c=new XRWebGLBinding(i,t),d=c.createProjectionLayer(le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new At(d.textureWidth,d.textureHeight,{format:Qt,type:vn,depthTexture:new Ds(d.textureWidth,d.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let L={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,L),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new At(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(D){for(let O=0;O<D.removed.length;O++){let L=D.removed[O],P=_.indexOf(L);P>=0&&(_[P]=null,g[P].disconnect(L))}for(let O=0;O<D.added.length;O++){let L=D.added[O],P=_.indexOf(L);if(P===-1){for(let le=0;le<g.length;le++)if(le>=_.length){_.push(L),P=le;break}else if(_[le]===null){_[le]=L,P=le;break}if(P===-1)break}let J=g[P];J&&J.connect(L)}}let H=new X,q=new X;function V(D,O,L){H.setFromMatrixPosition(O.matrixWorld),q.setFromMatrixPosition(L.matrixWorld);let P=H.distanceTo(q),J=O.projectionMatrix.elements,le=L.projectionMatrix.elements,Y=J[14]/(J[10]-1),ge=J[14]/(J[10]+1),ve=(J[9]+1)/J[5],fe=(J[9]-1)/J[5],R=(J[8]-1)/J[0],j=(le[8]+1)/le[0],ee=Y*R,ne=Y*j,k=P/(-R+j),U=k*-R;if(O.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(U),D.translateZ(k),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),J[10]===-1)D.projectionMatrix.copy(O.projectionMatrix),D.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let te=Y+k,me=ge+k,Fe=ee-U,F=ne+(P-U),C=ve*ge/me*te,K=fe*ge/me*te;D.projectionMatrix.makePerspective(Fe,F,C,K,te,me),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function ce(D,O){O===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(O.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let O=D.near,L=D.far;x.texture!==null&&(x.depthNear>0&&(O=x.depthNear),x.depthFar>0&&(L=x.depthFar)),S.near=T.near=w.near=O,S.far=T.far=w.far=L,(A!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,N=S.far),w.layers.mask=D.layers.mask|2,T.layers.mask=D.layers.mask|4,S.layers.mask=w.layers.mask|T.layers.mask;let P=D.parent,J=S.cameras;ce(S,P);for(let le=0;le<J.length;le++)ce(J[le],P);J.length===2?V(S,w,T):S.projectionMatrix.copy(w.projectionMatrix),Q(D,S,P)};function Q(D,O,L){L===null?D.matrix.copy(O.matrixWorld):(D.matrix.copy(L.matrixWorld),D.matrix.invert(),D.matrix.multiply(O.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(O.projectionMatrix),D.projectionMatrixInverse.copy(O.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ki*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ue=null;function Se(D,O){if(u=O.getViewerPose(h||o),p=O,u!==null){let L=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let P=!1;L.length!==S.cameras.length&&(S.cameras.length=0,P=!0);for(let Y=0;Y<L.length;Y++){let ge=L[Y],ve=null;if(f!==null)ve=f.getViewport(ge);else{let R=c.getViewSubImage(d,ge);ve=R.viewport,Y===0&&(e.setRenderTargetTextures(b,R.colorTexture,R.depthStencilTexture),e.setRenderTarget(b))}let fe=y[Y];fe===void 0&&(fe=new Tt,fe.layers.enable(Y),fe.viewport=new dt,y[Y]=fe),fe.matrix.fromArray(ge.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ge.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ve.x,ve.y,ve.width,ve.height),Y===0&&(S.matrix.copy(fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),P===!0&&S.cameras.push(fe)}let J=i.enabledFeatures;if(J&&J.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&c){let Y=c.getDepthInformation(L[0]);Y&&Y.isValid&&Y.texture&&x.init(e,Y,i.renderState)}}for(let L=0;L<g.length;L++){let P=_[L],J=g[L];P!==null&&J!==void 0&&J.update(P,O,h||o)}ue&&ue(D,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),p=null}let Ae=new nu;Ae.setAnimationLoop(Se),this.setAnimationLoop=function(D){ue=D},this.dispose=function(){}}},xi=new rn,W0=new ft;function X0(s,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,Rl(s)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function i(v,m,b,g,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(v,m):m.isMeshToonMaterial?(r(v,m),c(v,m)):m.isMeshPhongMaterial?(r(v,m),u(v,m)):m.isMeshStandardMaterial?(r(v,m),d(v,m),m.isMeshPhysicalMaterial&&f(v,m,_)):m.isMeshMatcapMaterial?(r(v,m),p(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),x(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?l(v,m,b,g):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Dt&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Dt&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);let b=e.get(m),g=b.envMap,_=b.envMapRotation;g&&(v.envMap.value=g,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),v.envMapRotation.value.setFromMatrix4(W0.makeRotationFromEuler(xi)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,b,g){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*b,v.scale.value=g*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function c(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function d(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function f(v,m,b){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dt&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function p(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){let b=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y0(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,g){let _=g.program;n.uniformBlockBinding(b,_)}function h(b,g){let _=i[b.id];_===void 0&&(p(b),_=u(b),i[b.id]=_,b.addEventListener("dispose",v));let E=g.program;n.updateUBOMapping(b,E);let M=e.render.frame;r[b.id]!==M&&(d(b),r[b.id]=M)}function u(b){let g=c();b.__bindingPointIndex=g;let _=s.createBuffer(),E=b.__size,M=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,_),_}function c(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let g=i[b.id],_=b.uniforms,E=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let M=0,w=_.length;M<w;M++){let T=Array.isArray(_[M])?_[M]:[_[M]];for(let y=0,S=T.length;y<S;y++){let A=T[y];if(f(A,M,y,E)===!0){let N=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],z=0;for(let G=0;G<B.length;G++){let H=B[G],q=x(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+z,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,g,_,E){let M=b.value,w=g+"_"+_;if(E[w]===void 0)return typeof M=="number"||typeof M=="boolean"?E[w]=M:E[w]=M.clone(),!0;{let T=E[w];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return E[w]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function p(b){let g=b.uniforms,_=0,E=16;for(let w=0,T=g.length;w<T;w++){let y=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,A=y.length;S<A;S++){let N=y[S],B=Array.isArray(N.value)?N.value:[N.value];for(let z=0,G=B.length;z<G;z++){let H=B[z],q=x(H),V=_%E,ce=V%q.boundary,Q=V+ce;_+=ce,Q!==0&&E-Q<q.storage&&(_+=E-Q),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=q.storage}}}let M=_%E;return M>0&&(_+=E-M),b.__size=_,b.__cache={},this}function x(b){let g={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(g.boundary=4,g.storage=4):b.isVector2?(g.boundary=8,g.storage=8):b.isVector3||b.isColor?(g.boundary=16,g.storage=12):b.isVector4?(g.boundary=16,g.storage=16):b.isMatrix3?(g.boundary=48,g.storage=48):b.isMatrix4?(g.boundary=64,g.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),g}function v(b){let g=b.target;g.removeEventListener("dispose",v);let _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function m(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:h,dispose:m}}var aa=class{constructor(e={}){let{canvas:t=bh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),v=null,m=null,b=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,E=!1;this._outputColorSpace=Lt;let M=0,w=0,T=null,y=-1,S=null,A=new dt,N=new dt,B=null,z=new ze(0),G=0,H=t.width,q=t.height,V=1,ce=null,Q=null,ue=new dt(0,0,H,q),Se=new dt(0,0,H,q),Ae=!1,D=new Is,O=!1,L=!1,P=new ft,J=new ft,le=new X,Y=new dt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function fe(){return T===null?V:1}let R=n;function j(I,$){return t.getContext(I,$)}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",de,!1),R===null){let $="webgl2";if(R=j($,I),R===null)throw j($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ee,ne,k,U,te,me,Fe,F,C,K,re,he,oe,Ie,Me,Pe,De,pe,Ce,He,ke,be,Xe,W;function we(){ee=new hg(R),ee.init(),be=new V0(R,ee),ne=new ig(R,ee,e,be),k=new k0(R,ee),ne.reverseDepthBuffer&&d&&k.buffers.depth.setReversed(!0),U=new fg(R),te=new T0,me=new z0(R,ee,k,te,ne,be,U),Fe=new rg(_),F=new cg(_),C=new _f(R),Xe=new tg(R,C),K=new ug(R,C,U,Xe),re=new mg(R,K,C,U),Ce=new pg(R,ne,me),Pe=new sg(te),he=new w0(_,Fe,F,ee,ne,Xe,Pe),oe=new X0(_,te),Ie=new C0,Me=new U0(ee),pe=new eg(_,Fe,F,k,re,f,l),De=new O0(_,re,ne),W=new Y0(R,U,ne,k),He=new ng(R,ee,U),ke=new dg(R,ee,U),U.programs=he.programs,_.capabilities=ne,_.extensions=ee,_.properties=te,_.renderLists=Ie,_.shadowMap=De,_.state=k,_.info=U}we();let xe=new ql(_,R);this.xr=xe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let I=ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(I){I!==void 0&&(V=I,this.setSize(H,q,!1))},this.getSize=function(I){return I.set(H,q)},this.setSize=function(I,$,ie=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,q=$,t.width=Math.floor(I*V),t.height=Math.floor($*V),ie===!0&&(t.style.width=I+"px",t.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(H*V,q*V).floor()},this.setDrawingBufferSize=function(I,$,ie){H=I,q=$,V=ie,t.width=Math.floor(I*ie),t.height=Math.floor($*ie),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(ue)},this.setViewport=function(I,$,ie,se){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,$,ie,se),k.viewport(A.copy(ue).multiplyScalar(V).round())},this.getScissor=function(I){return I.copy(Se)},this.setScissor=function(I,$,ie,se){I.isVector4?Se.set(I.x,I.y,I.z,I.w):Se.set(I,$,ie,se),k.scissor(N.copy(Se).multiplyScalar(V).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(I){k.setScissorTest(Ae=I)},this.setOpaqueSort=function(I){ce=I},this.setTransparentSort=function(I){Q=I},this.getClearColor=function(I){return I.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,ie=!0){let se=0;if(I){let Z=!1;if(T!==null){let ye=T.texture.format;Z=ye===Po||ye===Ro||ye===Co}if(Z){let ye=T.texture.type,Te=ye===vn||ye===Kn||ye===ji||ye===Qi||ye===To||ye===Ao,Ne=pe.getClearColor(),Re=pe.getClearAlpha(),Ge=Ne.r,We=Ne.g,Oe=Ne.b;Te?(p[0]=Ge,p[1]=We,p[2]=Oe,p[3]=Re,R.clearBufferuiv(R.COLOR,0,p)):(x[0]=Ge,x[1]=We,x[2]=Oe,x[3]=Re,R.clearBufferiv(R.COLOR,0,x))}else se|=R.COLOR_BUFFER_BIT}$&&(se|=R.DEPTH_BUFFER_BIT),ie&&(se|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),Ie.dispose(),Me.dispose(),te.dispose(),Fe.dispose(),F.dispose(),re.dispose(),Xe.dispose(),W.dispose(),he.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ic),xe.removeEventListener("sessionend",sc),jn.stop()};function Le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let I=U.autoReset,$=De.enabled,ie=De.autoUpdate,se=De.needsUpdate,Z=De.type;we(),U.autoReset=I,De.enabled=$,De.autoUpdate=ie,De.needsUpdate=se,De.type=Z}function de(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ue(I){let $=I.target;$.removeEventListener("dispose",Ue),Ye($)}function Ye(I){rt(I),te.remove(I)}function rt(I){let $=te.get(I).programs;$!==void 0&&($.forEach(function(ie){he.releaseProgram(ie)}),I.isShaderMaterial&&he.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ie,se,Z,ye){$===null&&($=ge);let Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Au(I,$,ie,se,Z);k.setMaterial(se,Te);let Re=ie.index,Ge=1;if(se.wireframe===!0){if(Re=K.getWireframeAttribute(ie),Re===void 0)return;Ge=2}let We=ie.drawRange,Oe=ie.attributes.position,Ze=We.start*Ge,tt=(We.start+We.count)*Ge;ye!==null&&(Ze=Math.max(Ze,ye.start*Ge),tt=Math.min(tt,(ye.start+ye.count)*Ge)),Re!==null?(Ze=Math.max(Ze,0),tt=Math.min(tt,Re.count)):Oe!=null&&(Ze=Math.max(Ze,0),tt=Math.min(tt,Oe.count));let ut=tt-Ze;if(ut<0||ut===1/0)return;Xe.setup(Z,se,Ne,ie,Re);let ot,it=He;if(Re!==null&&(ot=C.get(Re),it=ke,it.setIndex(ot)),Z.isMesh)se.wireframe===!0?(k.setLineWidth(se.wireframeLinewidth*fe()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(Z.isLine){let Be=se.linewidth;Be===void 0&&(Be=1),k.setLineWidth(Be*fe()),Z.isLineSegments?it.setMode(R.LINES):Z.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else Z.isPoints?it.setMode(R.POINTS):Z.isSprite&&it.setMode(R.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))it.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Be=Z._multiDrawStarts,ct=Z._multiDrawCounts,je=Z._multiDrawCount,kt=Re?C.get(Re).bytesPerElement:1,Si=te.get(se).currentProgram.getUniforms();for(let zt=0;zt<je;zt++)Si.setValue(R,"_gl_DrawID",zt),it.render(Be[zt]/kt,ct[zt])}else if(Z.isInstancedMesh)it.renderInstances(Ze,ut,Z.count);else if(ie.isInstancedBufferGeometry){let Be=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ct=Math.min(ie.instanceCount,Be);it.renderInstances(Ze,ut,ct)}else it.render(Ze,ut)};function Qe(I,$,ie){I.transparent===!0&&I.side===jt&&I.forceSinglePass===!1?(I.side=Dt,I.needsUpdate=!0,ur(I,$,ie),I.side=Rn,I.needsUpdate=!0,ur(I,$,ie),I.side=jt):ur(I,$,ie)}this.compile=function(I,$,ie=null){ie===null&&(ie=I),m=Me.get(ie),m.init($),g.push(m),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),I!==ie&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();let se=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let ye=Z.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let Ne=ye[Te];Qe(Ne,ie,Z),se.add(Ne)}else Qe(ye,ie,Z),se.add(ye)}),m=g.pop(),se},this.compileAsync=function(I,$,ie=null){let se=this.compile(I,$,ie);return new Promise(Z=>{function ye(){if(se.forEach(function(Te){te.get(Te).currentProgram.isReady()&&se.delete(Te)}),se.size===0){Z(I);return}setTimeout(ye,10)}ee.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let en=null;function _n(I){en&&en(I)}function ic(){jn.stop()}function sc(){jn.start()}let jn=new nu;jn.setAnimationLoop(_n),typeof self!="undefined"&&jn.setContext(self),this.setAnimationLoop=function(I){en=I,xe.setAnimationLoop(I),I===null?jn.stop():jn.start()},xe.addEventListener("sessionstart",ic),xe.addEventListener("sessionend",sc),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera($),$=xe.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,$,T),m=Me.get(I,g.length),m.init($),g.push(m),J.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),D.setFromProjectionMatrix(J),L=this.localClippingEnabled,O=Pe.init(this.clippingPlanes,L),v=Ie.get(I,b.length),v.init(),b.push(v),xe.enabled===!0&&xe.isPresenting===!0){let ye=_.xr.getDepthSensingMesh();ye!==null&&xa(ye,$,-1/0,_.sortObjects)}xa(I,$,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ce,Q),ve=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ve&&pe.addToRenderList(v,I),this.info.render.frame++,O===!0&&Pe.beginShadows();let ie=m.state.shadowsArray;De.render(ie,I,$),O===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=v.opaque,Z=v.transmissive;if(m.setupLights(),$.isArrayCamera){let ye=$.cameras;if(Z.length>0)for(let Te=0,Ne=ye.length;Te<Ne;Te++){let Re=ye[Te];oc(se,Z,I,Re)}ve&&pe.render(I);for(let Te=0,Ne=ye.length;Te<Ne;Te++){let Re=ye[Te];rc(v,I,Re,Re.viewport)}}else Z.length>0&&oc(se,Z,I,$),ve&&pe.render(I),rc(v,I,$);T!==null&&w===0&&(me.updateMultisampleRenderTarget(T),me.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(_,I,$),Xe.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?(m=g[g.length-1],O===!0&&Pe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function xa(I,$,ie,se){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ie=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||D.intersectsSprite(I)){se&&Y.setFromMatrixPosition(I.matrixWorld).applyMatrix4(J);let Te=re.update(I),Ne=I.material;Ne.visible&&v.push(I,Te,Ne,ie,Y.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||D.intersectsObject(I))){let Te=re.update(I),Ne=I.material;if(se&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Y.copy(I.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Y.copy(Te.boundingSphere.center)),Y.applyMatrix4(I.matrixWorld).applyMatrix4(J)),Array.isArray(Ne)){let Re=Te.groups;for(let Ge=0,We=Re.length;Ge<We;Ge++){let Oe=Re[Ge],Ze=Ne[Oe.materialIndex];Ze&&Ze.visible&&v.push(I,Te,Ze,ie,Y.z,Oe)}}else Ne.visible&&v.push(I,Te,Ne,ie,Y.z,null)}}let ye=I.children;for(let Te=0,Ne=ye.length;Te<Ne;Te++)xa(ye[Te],$,ie,se)}function rc(I,$,ie,se){let Z=I.opaque,ye=I.transmissive,Te=I.transparent;m.setupLightsView(ie),O===!0&&Pe.setGlobalState(_.clippingPlanes,ie),se&&k.viewport(A.copy(se)),Z.length>0&&hr(Z,$,ie),ye.length>0&&hr(ye,$,ie),Te.length>0&&hr(Te,$,ie),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function oc(I,$,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[se.id]===void 0&&(m.state.transmissionRenderTarget[se.id]=new At(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?bt:vn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let ye=m.state.transmissionRenderTarget[se.id],Te=se.viewport||A;ye.setSize(Te.z*_.transmissionResolutionScale,Te.w*_.transmissionResolutionScale);let Ne=_.getRenderTarget(),Re=_.getActiveCubeFace(),Ge=_.getActiveMipmapLevel();_.setRenderTarget(ye),_.getClearColor(z),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),ve&&pe.render(ie);let We=_.toneMapping;_.toneMapping=In;let Oe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),m.setupLightsView(se),O===!0&&Pe.setGlobalState(_.clippingPlanes,se),hr(I,ie,se),me.updateMultisampleRenderTarget(ye),me.updateRenderTargetMipmap(ye),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let tt=0,ut=$.length;tt<ut;tt++){let ot=$[tt],it=ot.object,Be=ot.geometry,ct=ot.material,je=ot.group;if(ct.side===jt&&it.layers.test(se.layers)){let kt=ct.side;ct.side=Dt,ct.needsUpdate=!0,ac(it,ie,se,Be,ct,je),ct.side=kt,ct.needsUpdate=!0,Ze=!0}}Ze===!0&&(me.updateMultisampleRenderTarget(ye),me.updateRenderTargetMipmap(ye))}_.setRenderTarget(Ne,Re,Ge),_.setClearColor(z,G),Oe!==void 0&&(se.viewport=Oe),_.toneMapping=We}function hr(I,$,ie){let se=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,ye=I.length;Z<ye;Z++){let Te=I[Z],Ne=Te.object,Re=Te.geometry,Ge=Te.group,We=Te.material;We.allowOverride===!0&&se!==null&&(We=se),Ne.layers.test(ie.layers)&&ac(Ne,$,ie,Re,We,Ge)}}function ac(I,$,ie,se,Z,ye){I.onBeforeRender(_,$,ie,se,Z,ye),I.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(_,$,ie,se,I,ye),Z.transparent===!0&&Z.side===jt&&Z.forceSinglePass===!1?(Z.side=Dt,Z.needsUpdate=!0,_.renderBufferDirect(ie,$,se,Z,I,ye),Z.side=Rn,Z.needsUpdate=!0,_.renderBufferDirect(ie,$,se,Z,I,ye),Z.side=jt):_.renderBufferDirect(ie,$,se,Z,I,ye),I.onAfterRender(_,$,ie,se,Z,ye)}function ur(I,$,ie){$.isScene!==!0&&($=ge);let se=te.get(I),Z=m.state.lights,ye=m.state.shadowsArray,Te=Z.state.version,Ne=he.getParameters(I,Z.state,ye,$,ie),Re=he.getProgramCacheKey(Ne),Ge=se.programs;se.environment=I.isMeshStandardMaterial?$.environment:null,se.fog=$.fog,se.envMap=(I.isMeshStandardMaterial?F:Fe).get(I.envMap||se.environment),se.envMapRotation=se.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,Ge===void 0&&(I.addEventListener("dispose",Ue),Ge=new Map,se.programs=Ge);let We=Ge.get(Re);if(We!==void 0){if(se.currentProgram===We&&se.lightsStateVersion===Te)return cc(I,Ne),We}else Ne.uniforms=he.getUniforms(I),I.onBeforeCompile(Ne,_),We=he.acquireProgram(Ne,Re),Ge.set(Re,We),se.uniforms=Ne.uniforms;let Oe=se.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Oe.clippingPlanes=Pe.uniform),cc(I,Ne),se.needsLights=Ru(I),se.lightsStateVersion=Te,se.needsLights&&(Oe.ambientLightColor.value=Z.state.ambient,Oe.lightProbe.value=Z.state.probe,Oe.directionalLights.value=Z.state.directional,Oe.directionalLightShadows.value=Z.state.directionalShadow,Oe.spotLights.value=Z.state.spot,Oe.spotLightShadows.value=Z.state.spotShadow,Oe.rectAreaLights.value=Z.state.rectArea,Oe.ltc_1.value=Z.state.rectAreaLTC1,Oe.ltc_2.value=Z.state.rectAreaLTC2,Oe.pointLights.value=Z.state.point,Oe.pointLightShadows.value=Z.state.pointShadow,Oe.hemisphereLights.value=Z.state.hemi,Oe.directionalShadowMap.value=Z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Oe.spotShadowMap.value=Z.state.spotShadowMap,Oe.spotLightMatrix.value=Z.state.spotLightMatrix,Oe.spotLightMap.value=Z.state.spotLightMap,Oe.pointShadowMap.value=Z.state.pointShadowMap,Oe.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=We,se.uniformsList=null,We}function lc(I){if(I.uniformsList===null){let $=I.currentProgram.getUniforms();I.uniformsList=is.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function cc(I,$){let ie=te.get(I);ie.outputColorSpace=$.outputColorSpace,ie.batching=$.batching,ie.batchingColor=$.batchingColor,ie.instancing=$.instancing,ie.instancingColor=$.instancingColor,ie.instancingMorph=$.instancingMorph,ie.skinning=$.skinning,ie.morphTargets=$.morphTargets,ie.morphNormals=$.morphNormals,ie.morphColors=$.morphColors,ie.morphTargetsCount=$.morphTargetsCount,ie.numClippingPlanes=$.numClippingPlanes,ie.numIntersection=$.numClipIntersection,ie.vertexAlphas=$.vertexAlphas,ie.vertexTangents=$.vertexTangents,ie.toneMapping=$.toneMapping}function Au(I,$,ie,se,Z){$.isScene!==!0&&($=ge),me.resetTextureUnits();let ye=$.fog,Te=se.isMeshStandardMaterial?$.environment:null,Ne=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Pn,Re=(se.isMeshStandardMaterial?F:Fe).get(se.envMap||Te),Ge=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,We=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Oe=!!ie.morphAttributes.position,Ze=!!ie.morphAttributes.normal,tt=!!ie.morphAttributes.color,ut=In;se.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ut=_.toneMapping);let ot=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,it=ot!==void 0?ot.length:0,Be=te.get(se),ct=m.state.lights;if(O===!0&&(L===!0||I!==S)){let Pt=I===S&&se.id===y;Pe.setState(se,I,Pt)}let je=!1;se.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ct.state.version||Be.outputColorSpace!==Ne||Z.isBatchedMesh&&Be.batching===!1||!Z.isBatchedMesh&&Be.batching===!0||Z.isBatchedMesh&&Be.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Be.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Be.instancing===!1||!Z.isInstancedMesh&&Be.instancing===!0||Z.isSkinnedMesh&&Be.skinning===!1||!Z.isSkinnedMesh&&Be.skinning===!0||Z.isInstancedMesh&&Be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Be.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Be.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Be.instancingMorph===!1&&Z.morphTexture!==null||Be.envMap!==Re||se.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Pe.numPlanes||Be.numIntersection!==Pe.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==We||Be.morphTargets!==Oe||Be.morphNormals!==Ze||Be.morphColors!==tt||Be.toneMapping!==ut||Be.morphTargetsCount!==it)&&(je=!0):(je=!0,Be.__version=se.version);let kt=Be.currentProgram;je===!0&&(kt=ur(se,$,Z));let Si=!1,zt=!1,cs=!1,lt=kt.getUniforms(),qt=Be.uniforms;if(k.useProgram(kt.program)&&(Si=!0,zt=!0,cs=!0),se.id!==y&&(y=se.id,zt=!0),Si||S!==I){k.buffers.depth.getReversed()?(P.copy(I.projectionMatrix),wh(P),Th(P),lt.setValue(R,"projectionMatrix",P)):lt.setValue(R,"projectionMatrix",I.projectionMatrix),lt.setValue(R,"viewMatrix",I.matrixWorldInverse);let Ut=lt.map.cameraPosition;Ut!==void 0&&Ut.setValue(R,le.setFromMatrixPosition(I.matrixWorld)),ne.logarithmicDepthBuffer&&lt.setValue(R,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&lt.setValue(R,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,zt=!0,cs=!0)}if(Z.isSkinnedMesh){lt.setOptional(R,Z,"bindMatrix"),lt.setOptional(R,Z,"bindMatrixInverse");let Pt=Z.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),lt.setValue(R,"boneTexture",Pt.boneTexture,me))}Z.isBatchedMesh&&(lt.setOptional(R,Z,"batchingTexture"),lt.setValue(R,"batchingTexture",Z._matricesTexture,me),lt.setOptional(R,Z,"batchingIdTexture"),lt.setValue(R,"batchingIdTexture",Z._indirectTexture,me),lt.setOptional(R,Z,"batchingColorTexture"),Z._colorsTexture!==null&&lt.setValue(R,"batchingColorTexture",Z._colorsTexture,me));let $t=ie.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&Ce.update(Z,ie,kt),(zt||Be.receiveShadow!==Z.receiveShadow)&&(Be.receiveShadow=Z.receiveShadow,lt.setValue(R,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(qt.envMap.value=Re,qt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&$.environment!==null&&(qt.envMapIntensity.value=$.environmentIntensity),zt&&(lt.setValue(R,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&Cu(qt,cs),ye&&se.fog===!0&&oe.refreshFogUniforms(qt,ye),oe.refreshMaterialUniforms(qt,se,V,q,m.state.transmissionRenderTarget[I.id]),is.upload(R,lc(Be),qt,me)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(is.upload(R,lc(Be),qt,me),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&lt.setValue(R,"center",Z.center),lt.setValue(R,"modelViewMatrix",Z.modelViewMatrix),lt.setValue(R,"normalMatrix",Z.normalMatrix),lt.setValue(R,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let Pt=se.uniformsGroups;for(let Ut=0,_a=Pt.length;Ut<_a;Ut++){let Qn=Pt[Ut];W.update(Qn,kt),W.bind(Qn,kt)}}return kt}function Cu(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Ru(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,$,ie){let se=te.get(I);se.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(I.texture).__webglTexture=$,te.get(I.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ie,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){let ie=te.get(I);ie.__webglFramebuffer=$,ie.__useDefaultFramebuffer=$===void 0};let Pu=R.createFramebuffer();this.setRenderTarget=function(I,$=0,ie=0){T=I,M=$,w=ie;let se=!0,Z=null,ye=!1,Te=!1;if(I){let Re=te.get(I);if(Re.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(R.FRAMEBUFFER,null),se=!1;else if(Re.__webglFramebuffer===void 0)me.setupRenderTarget(I);else if(Re.__hasExternalTextures)me.rebindTextures(I,te.get(I.texture).__webglTexture,te.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Oe=I.depthTexture;if(Re.__boundDepthTexture!==Oe){if(Oe!==null&&te.has(Oe)&&(I.width!==Oe.image.width||I.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(I)}}let Ge=I.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);let We=te.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(We[$])?Z=We[$][ie]:Z=We[$],ye=!0):I.samples>0&&me.useMultisampledRTT(I)===!1?Z=te.get(I).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[ie]:Z=We,A.copy(I.viewport),N.copy(I.scissor),B=I.scissorTest}else A.copy(ue).multiplyScalar(V).floor(),N.copy(Se).multiplyScalar(V).floor(),B=Ae;if(ie!==0&&(Z=Pu),k.bindFramebuffer(R.FRAMEBUFFER,Z)&&se&&k.drawBuffers(I,Z),k.viewport(A),k.scissor(N),k.setScissorTest(B),ye){let Re=te.get(I.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re.__webglTexture,ie)}else if(Te){let Re=te.get(I.texture),Ge=$;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.__webglTexture,ie,Ge)}else if(I!==null&&ie!==0){let Re=te.get(I.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,ie)}y=-1},this.readRenderTargetPixels=function(I,$,ie,se,Z,ye,Te,Ne=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){k.bindFramebuffer(R.FRAMEBUFFER,Re);try{let Ge=I.textures[Ne],We=Ge.format,Oe=Ge.type;if(!ne.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-se&&ie>=0&&ie<=I.height-Z&&(I.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels($,ie,se,Z,be.convert(We),be.convert(Oe),ye))}finally{let Ge=T!==null?te.get(T).__webglFramebuffer:null;k.bindFramebuffer(R.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(I,$,ie,se,Z,ye,Te,Ne=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if($>=0&&$<=I.width-se&&ie>=0&&ie<=I.height-Z){k.bindFramebuffer(R.FRAMEBUFFER,Re);let Ge=I.textures[Ne],We=Ge.format,Oe=Ge.type;if(!ne.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.bufferData(R.PIXEL_PACK_BUFFER,ye.byteLength,R.STREAM_READ),I.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ne),R.readPixels($,ie,se,Z,be.convert(We),be.convert(Oe),0);let tt=T!==null?te.get(T).__webglFramebuffer:null;k.bindFramebuffer(R.FRAMEBUFFER,tt);let ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Eh(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ye),R.deleteBuffer(Ze),R.deleteSync(ut),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,ie=0){let se=Math.pow(2,-ie),Z=Math.floor(I.image.width*se),ye=Math.floor(I.image.height*se),Te=$!==null?$.x:0,Ne=$!==null?$.y:0;me.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,ie,0,0,Te,Ne,Z,ye),k.unbindTexture()};let Iu=R.createFramebuffer(),Lu=R.createFramebuffer();this.copyTextureToTexture=function(I,$,ie=null,se=null,Z=0,ye=null){ye===null&&(Z!==0?(li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=Z,Z=0):ye=0);let Te,Ne,Re,Ge,We,Oe,Ze,tt,ut,ot=I.isCompressedTexture?I.mipmaps[ye]:I.image;if(ie!==null)Te=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,Re=ie.isBox3?ie.max.z-ie.min.z:1,Ge=ie.min.x,We=ie.min.y,Oe=ie.isBox3?ie.min.z:0;else{let $t=Math.pow(2,-Z);Te=Math.floor(ot.width*$t),Ne=Math.floor(ot.height*$t),I.isDataArrayTexture?Re=ot.depth:I.isData3DTexture?Re=Math.floor(ot.depth*$t):Re=1,Ge=0,We=0,Oe=0}se!==null?(Ze=se.x,tt=se.y,ut=se.z):(Ze=0,tt=0,ut=0);let it=be.convert($.format),Be=be.convert($.type),ct;$.isData3DTexture?(me.setTexture3D($,0),ct=R.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(me.setTexture2DArray($,0),ct=R.TEXTURE_2D_ARRAY):(me.setTexture2D($,0),ct=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,$.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,$.unpackAlignment);let je=R.getParameter(R.UNPACK_ROW_LENGTH),kt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Si=R.getParameter(R.UNPACK_SKIP_PIXELS),zt=R.getParameter(R.UNPACK_SKIP_ROWS),cs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Oe);let lt=I.isDataArrayTexture||I.isData3DTexture,qt=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){let $t=te.get(I),Pt=te.get($),Ut=te.get($t.__renderTarget),_a=te.get(Pt.__renderTarget);k.bindFramebuffer(R.READ_FRAMEBUFFER,Ut.__webglFramebuffer),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let Qn=0;Qn<Re;Qn++)lt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,te.get(I).__webglTexture,Z,Oe+Qn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,te.get($).__webglTexture,ye,ut+Qn)),R.blitFramebuffer(Ge,We,Te,Ne,Ze,tt,Te,Ne,R.DEPTH_BUFFER_BIT,R.NEAREST);k.bindFramebuffer(R.READ_FRAMEBUFFER,null),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||te.has(I)){let $t=te.get(I),Pt=te.get($);k.bindFramebuffer(R.READ_FRAMEBUFFER,Iu),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,Lu);for(let Ut=0;Ut<Re;Ut++)lt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,Z,Oe+Ut):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$t.__webglTexture,Z),qt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pt.__webglTexture,ye,ut+Ut):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Pt.__webglTexture,ye),Z!==0?R.blitFramebuffer(Ge,We,Te,Ne,Ze,tt,Te,Ne,R.COLOR_BUFFER_BIT,R.NEAREST):qt?R.copyTexSubImage3D(ct,ye,Ze,tt,ut+Ut,Ge,We,Te,Ne):R.copyTexSubImage2D(ct,ye,Ze,tt,Ge,We,Te,Ne);k.bindFramebuffer(R.READ_FRAMEBUFFER,null),k.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else qt?I.isDataTexture||I.isData3DTexture?R.texSubImage3D(ct,ye,Ze,tt,ut,Te,Ne,Re,it,Be,ot.data):$.isCompressedArrayTexture?R.compressedTexSubImage3D(ct,ye,Ze,tt,ut,Te,Ne,Re,it,ot.data):R.texSubImage3D(ct,ye,Ze,tt,ut,Te,Ne,Re,it,Be,ot):I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ye,Ze,tt,Te,Ne,it,Be,ot.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ye,Ze,tt,ot.width,ot.height,it,ot.data):R.texSubImage2D(R.TEXTURE_2D,ye,Ze,tt,Te,Ne,it,Be,ot);R.pixelStorei(R.UNPACK_ROW_LENGTH,je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,kt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Si),R.pixelStorei(R.UNPACK_SKIP_ROWS,zt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,cs),ye===0&&$.generateMipmaps&&R.generateMipmap(ct),k.unbindTexture()},this.copyTextureToTexture3D=function(I,$,ie=null,se=null,Z=0){return li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,$,ie,se,Z)},this.initRenderTarget=function(I){te.get(I).__webglFramebuffer===void 0&&me.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?me.setTextureCube(I,0):I.isData3DTexture?me.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?me.setTexture2DArray(I,0):me.setTexture2D(I,0),k.unbindTexture()},this.resetState=function(){M=0,w=0,T=null,k.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var au={type:"change"},Jl={type:"start"},cu={type:"end"},ca=new Gi,lu=new Jt,$0=Math.cos(70*sr.DEG2RAD),_t=new X,Bt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zl=1e-6,ha=class extends Zs{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Kt,this._lastTargetPosition=new X,this._quat=new Kt().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ki,this._sphericalDelta=new Ki,this._scale=1,this._panOffset=new X,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new X,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J0.bind(this),this._onPointerDown=Z0.bind(this),this._onPointerUp=K0.bind(this),this._onContextMenu=sv.bind(this),this._onMouseWheel=ev.bind(this),this._onKeyDown=tv.bind(this),this._onTouchStart=nv.bind(this),this._onTouchMove=iv.bind(this),this._onMouseDown=j0.bind(this),this._onMouseMove=Q0.bind(this),this._interceptControlDown=rv.bind(this),this._interceptControlUp=ov.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(au),this.update(),this.state=nt.NONE}update(e=null){let t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),i<-Math.PI?i+=Bt:i>Math.PI&&(i-=Bt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=_t.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<$0?this.object.lookAt(this.target):(lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane(lu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zl||this._lastTargetPosition.distanceToSquared(this.target)>Zl?(this.dispatchEvent(au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;_t.copy(i).sub(this.target);let r=_t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Z0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function J0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function K0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cu),this.state=nt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function j0(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=nt.DOLLY;break;case $n.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}break;case $n.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Jl)}function Q0(s){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ev(s){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(s.preventDefault(),this.dispatchEvent(Jl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(cu))}function tv(s){this.enabled!==!1&&this._handleKeyDown(s)}function nv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Zn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=nt.TOUCH_ROTATE;break;case Zn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Zn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=nt.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Jl)}function iv(s){switch(this._trackPointer(s),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=nt.NONE}}function sv(s){this.enabled!==!1&&s.preventDefault()}function rv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ov(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ua=class extends Ws{constructor(e){super(e),this.type=bt}parse(e){let o=function(T,y){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},u=`
`,c=function(T,y,S){y=y||1024;let N=T.pos,B=-1,z=0,G="",H=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));for(;0>(B=H.indexOf(u))&&z<y&&N<T.byteLength;)G+=H,z+=H.length,N+=128,H+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));return-1<B?(S!==!1&&(T.pos+=z+B+1),G+H.slice(0,B)):!1},d=function(T){let y=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},G,H;for((T.pos>=T.byteLength||!(G=c(T)))&&o(1,"no header found"),(H=G.match(y))||o(3,"bad initial token"),z.valid|=1,z.programtype=H[1],z.string+=G+`
`;G=c(T),G!==!1;){if(z.string+=G+`
`,G.charAt(0)==="#"){z.comments+=G+`
`;continue}if((H=G.match(S))&&(z.gamma=parseFloat(H[1])),(H=G.match(A))&&(z.exposure=parseFloat(H[1])),(H=G.match(N))&&(z.valid|=2,z.format=H[1]),(H=G.match(B))&&(z.valid|=4,z.height=parseInt(H[1],10),z.width=parseInt(H[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||o(3,"missing format specifier"),z.valid&4||o(3,"missing image size specifier"),z},f=function(T,y,S){let A=y;if(A<8||A>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);A!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");let N=new Uint8Array(4*y*S);N.length||o(4,"unable to allocate buffer space");let B=0,z=0,G=4*A,H=new Uint8Array(4),q=new Uint8Array(G),V=S;for(;V>0&&z<T.byteLength;){z+4>T.byteLength&&o(1),H[0]=T[z++],H[1]=T[z++],H[2]=T[z++],H[3]=T[z++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=A)&&o(3,"bad rgbe scanline format");let ce=0,Q;for(;ce<G&&z<T.byteLength;){Q=T[z++];let Se=Q>128;if(Se&&(Q-=128),(Q===0||ce+Q>G)&&o(3,"bad scanline data"),Se){let Ae=T[z++];for(let D=0;D<Q;D++)q[ce++]=Ae}else q.set(T.subarray(z,z+Q),ce),ce+=Q,z+=Q}let ue=A;for(let Se=0;Se<ue;Se++){let Ae=0;N[B]=q[Se+Ae],Ae+=A,N[B+1]=q[Se+Ae],Ae+=A,N[B+2]=q[Se+Ae],Ae+=A,N[B+3]=q[Se+Ae],B+=4}V--}return N},p=function(T,y,S,A){let N=T[y+3],B=Math.pow(2,N-128)/255;S[A+0]=T[y+0]*B,S[A+1]=T[y+1]*B,S[A+2]=T[y+2]*B,S[A+3]=1},x=function(T,y,S,A){let N=T[y+3],B=Math.pow(2,N-128)/255;S[A+0]=Xn.toHalfFloat(Math.min(T[y+0]*B,65504)),S[A+1]=Xn.toHalfFloat(Math.min(T[y+1]*B,65504)),S[A+2]=Xn.toHalfFloat(Math.min(T[y+2]*B,65504)),S[A+3]=Xn.toHalfFloat(1)},v=new Uint8Array(e);v.pos=0;let m=d(v),b=m.width,g=m.height,_=f(v.subarray(v.pos),b,g),E,M,w;switch(this.type){case Ot:w=_.length/4;let T=new Float32Array(w*4);for(let S=0;S<w;S++)p(_,S*4,T,S*4);E=T,M=Ot;break;case bt:w=_.length/4;let y=new Uint16Array(w*4);for(let S=0;S<w;S++)x(_,S*4,y,S*4);E=y,M=bt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:g,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:M}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Ot:case bt:o.colorSpace=Pn,o.minFilter=Mt,o.magFilter=Mt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}};var av=Lt,or=class s extends mn{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){let r=this,o=new Zi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t=this;function n(D,O){if(D.nodeType!==1)return;let L=_(D),P=!1,J=null;switch(D.nodeName){case"svg":O=p(D,O);break;case"style":r(D);break;case"g":O=p(D,O);break;case"path":O=p(D,O),D.hasAttribute("d")&&(J=i(D));break;case"rect":O=p(D,O),J=l(D);break;case"polygon":O=p(D,O),J=h(D);break;case"polyline":O=p(D,O),J=u(D);break;case"circle":O=p(D,O),J=c(D);break;case"ellipse":O=p(D,O),J=d(D);break;case"line":O=p(D,O),J=f(D);break;case"defs":P=!0;break;case"use":O=p(D,O);let ge=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ve=D.viewportElement.getElementById(ge);ve?n(ve,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+ge);break;default:}J&&(O.fill!==void 0&&O.fill!=="none"&&J.color.setStyle(O.fill,av),M(J,ue),N.push(J),J.userData={node:D,style:O});let le=D.childNodes;for(let Y=0;Y<le.length;Y++){let ge=le[Y];P&&ge.nodeName!=="style"&&ge.nodeName!=="defs"||n(ge,O)}L&&(z.pop(),z.length>0?ue.copy(z[z.length-1]):ue.identity())}function i(D){let O=new on,L=new ae,P=new ae,J=new ae,le=!0,Y=!1,ge=D.getAttribute("d");if(ge===""||ge==="none")return null;let ve=ge.match(/[a-df-z][^a-df-z]*/ig);for(let fe=0,R=ve.length;fe<R;fe++){let j=ve[fe],ee=j.charAt(0),ne=j.slice(1).trim();le===!0&&(Y=!0,le=!1);let k;switch(ee){case"M":k=v(ne);for(let U=0,te=k.length;U<te;U+=2)L.x=k[U+0],L.y=k[U+1],P.x=L.x,P.y=L.y,U===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),U===0&&J.copy(L);break;case"H":k=v(ne);for(let U=0,te=k.length;U<te;U++)L.x=k[U],P.x=L.x,P.y=L.y,O.lineTo(L.x,L.y),U===0&&Y===!0&&J.copy(L);break;case"V":k=v(ne);for(let U=0,te=k.length;U<te;U++)L.y=k[U],P.x=L.x,P.y=L.y,O.lineTo(L.x,L.y),U===0&&Y===!0&&J.copy(L);break;case"L":k=v(ne);for(let U=0,te=k.length;U<te;U+=2)L.x=k[U+0],L.y=k[U+1],P.x=L.x,P.y=L.y,O.lineTo(L.x,L.y),U===0&&Y===!0&&J.copy(L);break;case"C":k=v(ne);for(let U=0,te=k.length;U<te;U+=6)O.bezierCurveTo(k[U+0],k[U+1],k[U+2],k[U+3],k[U+4],k[U+5]),P.x=k[U+2],P.y=k[U+3],L.x=k[U+4],L.y=k[U+5],U===0&&Y===!0&&J.copy(L);break;case"S":k=v(ne);for(let U=0,te=k.length;U<te;U+=4)O.bezierCurveTo(x(L.x,P.x),x(L.y,P.y),k[U+0],k[U+1],k[U+2],k[U+3]),P.x=k[U+0],P.y=k[U+1],L.x=k[U+2],L.y=k[U+3],U===0&&Y===!0&&J.copy(L);break;case"Q":k=v(ne);for(let U=0,te=k.length;U<te;U+=4)O.quadraticCurveTo(k[U+0],k[U+1],k[U+2],k[U+3]),P.x=k[U+0],P.y=k[U+1],L.x=k[U+2],L.y=k[U+3],U===0&&Y===!0&&J.copy(L);break;case"T":k=v(ne);for(let U=0,te=k.length;U<te;U+=2){let me=x(L.x,P.x),Fe=x(L.y,P.y);O.quadraticCurveTo(me,Fe,k[U+0],k[U+1]),P.x=me,P.y=Fe,L.x=k[U+0],L.y=k[U+1],U===0&&Y===!0&&J.copy(L)}break;case"A":k=v(ne,[3,4],7);for(let U=0,te=k.length;U<te;U+=7){if(k[U+5]==L.x&&k[U+6]==L.y)continue;let me=L.clone();L.x=k[U+5],L.y=k[U+6],P.x=L.x,P.y=L.y,o(O,k[U],k[U+1],k[U+2],k[U+3],k[U+4],me,L),U===0&&Y===!0&&J.copy(L)}break;case"m":k=v(ne);for(let U=0,te=k.length;U<te;U+=2)L.x+=k[U+0],L.y+=k[U+1],P.x=L.x,P.y=L.y,U===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),U===0&&J.copy(L);break;case"h":k=v(ne);for(let U=0,te=k.length;U<te;U++)L.x+=k[U],P.x=L.x,P.y=L.y,O.lineTo(L.x,L.y),U===0&&Y===!0&&J.copy(L);break;case"v":k=v(ne);for(let U=0,te=k.length;U<te;U++)L.y+=k[U],P.x=L.x,P.y=L.y,O.lineTo(L.x,L.y),U===0&&Y===!0&&J.copy(L);break;case"l":k=v(ne);for(let U=0,te=k.length;U<te;U+=2)L.x+=k[U+0],L.y+=k[U+1],P.x=L.x,P.y=L.y,O.lineTo(L.x,L.y),U===0&&Y===!0&&J.copy(L);break;case"c":k=v(ne);for(let U=0,te=k.length;U<te;U+=6)O.bezierCurveTo(L.x+k[U+0],L.y+k[U+1],L.x+k[U+2],L.y+k[U+3],L.x+k[U+4],L.y+k[U+5]),P.x=L.x+k[U+2],P.y=L.y+k[U+3],L.x+=k[U+4],L.y+=k[U+5],U===0&&Y===!0&&J.copy(L);break;case"s":k=v(ne);for(let U=0,te=k.length;U<te;U+=4)O.bezierCurveTo(x(L.x,P.x),x(L.y,P.y),L.x+k[U+0],L.y+k[U+1],L.x+k[U+2],L.y+k[U+3]),P.x=L.x+k[U+0],P.y=L.y+k[U+1],L.x+=k[U+2],L.y+=k[U+3],U===0&&Y===!0&&J.copy(L);break;case"q":k=v(ne);for(let U=0,te=k.length;U<te;U+=4)O.quadraticCurveTo(L.x+k[U+0],L.y+k[U+1],L.x+k[U+2],L.y+k[U+3]),P.x=L.x+k[U+0],P.y=L.y+k[U+1],L.x+=k[U+2],L.y+=k[U+3],U===0&&Y===!0&&J.copy(L);break;case"t":k=v(ne);for(let U=0,te=k.length;U<te;U+=2){let me=x(L.x,P.x),Fe=x(L.y,P.y);O.quadraticCurveTo(me,Fe,L.x+k[U+0],L.y+k[U+1]),P.x=me,P.y=Fe,L.x=L.x+k[U+0],L.y=L.y+k[U+1],U===0&&Y===!0&&J.copy(L)}break;case"a":k=v(ne,[3,4],7);for(let U=0,te=k.length;U<te;U+=7){if(k[U+5]==0&&k[U+6]==0)continue;let me=L.clone();L.x+=k[U+5],L.y+=k[U+6],P.x=L.x,P.y=L.y,o(O,k[U],k[U+1],k[U+2],k[U+3],k[U+4],me,L),U===0&&Y===!0&&J.copy(L)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(L.copy(J),O.currentPath.currentPoint.copy(L),le=!0);break;default:console.warn(j)}Y=!1}return O}function r(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let O=0;O<D.sheet.cssRules.length;O++){let L=D.sheet.cssRules[O];if(L.type!==1)continue;let P=L.selectorText.split(/,/gm).filter(Boolean).map(J=>J.trim());for(let J=0;J<P.length;J++){let le=Object.fromEntries(Object.entries(L.style).filter(([,Y])=>Y!==""));B[P[J]]=Object.assign(B[P[J]]||{},le)}}}function o(D,O,L,P,J,le,Y,ge){if(O==0||L==0){D.lineTo(ge.x,ge.y);return}P=P*Math.PI/180,O=Math.abs(O),L=Math.abs(L);let ve=(Y.x-ge.x)/2,fe=(Y.y-ge.y)/2,R=Math.cos(P)*ve+Math.sin(P)*fe,j=-Math.sin(P)*ve+Math.cos(P)*fe,ee=O*O,ne=L*L,k=R*R,U=j*j,te=k/ee+U/ne;if(te>1){let Me=Math.sqrt(te);O=Me*O,L=Me*L,ee=O*O,ne=L*L}let me=ee*U+ne*k,Fe=(ee*ne-me)/me,F=Math.sqrt(Math.max(0,Fe));J===le&&(F=-F);let C=F*O*j/L,K=-F*L*R/O,re=Math.cos(P)*C-Math.sin(P)*K+(Y.x+ge.x)/2,he=Math.sin(P)*C+Math.cos(P)*K+(Y.y+ge.y)/2,oe=a(1,0,(R-C)/O,(j-K)/L),Ie=a((R-C)/O,(j-K)/L,(-R-C)/O,(-j-K)/L)%(Math.PI*2);D.currentPath.absellipse(re,he,O,L,oe,oe+Ie,le===0,P)}function a(D,O,L,P){let J=D*L+O*P,le=Math.sqrt(D*D+O*O)*Math.sqrt(L*L+P*P),Y=Math.acos(Math.max(-1,Math.min(1,J/le)));return D*P-O*L<0&&(Y=-Y),Y}function l(D){let O=g(D.getAttribute("x")||0),L=g(D.getAttribute("y")||0),P=g(D.getAttribute("rx")||D.getAttribute("ry")||0),J=g(D.getAttribute("ry")||D.getAttribute("rx")||0),le=g(D.getAttribute("width")),Y=g(D.getAttribute("height")),ge=1-.551915024494,ve=new on;return ve.moveTo(O+P,L),ve.lineTo(O+le-P,L),(P!==0||J!==0)&&ve.bezierCurveTo(O+le-P*ge,L,O+le,L+J*ge,O+le,L+J),ve.lineTo(O+le,L+Y-J),(P!==0||J!==0)&&ve.bezierCurveTo(O+le,L+Y-J*ge,O+le-P*ge,L+Y,O+le-P,L+Y),ve.lineTo(O+P,L+Y),(P!==0||J!==0)&&ve.bezierCurveTo(O+P*ge,L+Y,O,L+Y-J*ge,O,L+Y-J),ve.lineTo(O,L+J),(P!==0||J!==0)&&ve.bezierCurveTo(O,L+J*ge,O+P*ge,L,O+P,L),ve}function h(D){function O(le,Y,ge){let ve=g(Y),fe=g(ge);J===0?P.moveTo(ve,fe):P.lineTo(ve,fe),J++}let L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,P=new on,J=0;return D.getAttribute("points").replace(L,O),P.currentPath.autoClose=!0,P}function u(D){function O(le,Y,ge){let ve=g(Y),fe=g(ge);J===0?P.moveTo(ve,fe):P.lineTo(ve,fe),J++}let L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,P=new on,J=0;return D.getAttribute("points").replace(L,O),P.currentPath.autoClose=!1,P}function c(D){let O=g(D.getAttribute("cx")||0),L=g(D.getAttribute("cy")||0),P=g(D.getAttribute("r")||0),J=new pn;J.absarc(O,L,P,0,Math.PI*2);let le=new on;return le.subPaths.push(J),le}function d(D){let O=g(D.getAttribute("cx")||0),L=g(D.getAttribute("cy")||0),P=g(D.getAttribute("rx")||0),J=g(D.getAttribute("ry")||0),le=new pn;le.absellipse(O,L,P,J,0,Math.PI*2);let Y=new on;return Y.subPaths.push(le),Y}function f(D){let O=g(D.getAttribute("x1")||0),L=g(D.getAttribute("y1")||0),P=g(D.getAttribute("x2")||0),J=g(D.getAttribute("y2")||0),le=new on;return le.moveTo(O,L),le.lineTo(P,J),le.currentPath.autoClose=!1,le}function p(D,O){O=Object.assign({},O);let L={};if(D.hasAttribute("class")){let Y=D.getAttribute("class").split(/\s/).filter(Boolean).map(ge=>ge.trim());for(let ge=0;ge<Y.length;ge++)L=Object.assign(L,B["."+Y[ge]])}D.hasAttribute("id")&&(L=Object.assign(L,B["#"+D.getAttribute("id")]));function P(Y,ge,ve){ve===void 0&&(ve=function(R){return R.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),R}),D.hasAttribute(Y)&&(O[ge]=ve(D.getAttribute(Y))),L[Y]&&(O[ge]=ve(L[Y])),D.style&&D.style[Y]!==""&&(O[ge]=ve(D.style[Y]))}function J(Y){return Math.max(0,Math.min(1,g(Y)))}function le(Y){return Math.max(0,g(Y))}return P("fill","fill"),P("fill-opacity","fillOpacity",J),P("fill-rule","fillRule"),P("opacity","opacity",J),P("stroke","stroke"),P("stroke-opacity","strokeOpacity",J),P("stroke-width","strokeWidth",le),P("stroke-linejoin","strokeLineJoin"),P("stroke-linecap","strokeLineCap"),P("stroke-miterlimit","strokeMiterLimit",le),P("visibility","visibility"),O}function x(D,O){return D-(O-D)}function v(D,O,L){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);let P={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},J=0,le=1,Y=2,ge=3,ve=J,fe=!0,R="",j="",ee=[];function ne(me,Fe,F){let C=new SyntaxError('Unexpected character "'+me+'" at index '+Fe+".");throw C.partial=F,C}function k(){R!==""&&(j===""?ee.push(Number(R)):ee.push(Number(R)*Math.pow(10,Number(j)))),R="",j=""}let U,te=D.length;for(let me=0;me<te;me++){if(U=D[me],Array.isArray(O)&&O.includes(ee.length%L)&&P.FLAGS.test(U)){ve=le,R=U,k();continue}if(ve===J){if(P.WHITESPACE.test(U))continue;if(P.DIGIT.test(U)||P.SIGN.test(U)){ve=le,R=U;continue}if(P.POINT.test(U)){ve=Y,R=U;continue}P.COMMA.test(U)&&(fe&&ne(U,me,ee),fe=!0)}if(ve===le){if(P.DIGIT.test(U)){R+=U;continue}if(P.POINT.test(U)){R+=U,ve=Y;continue}if(P.EXP.test(U)){ve=ge;continue}P.SIGN.test(U)&&R.length===1&&P.SIGN.test(R[0])&&ne(U,me,ee)}if(ve===Y){if(P.DIGIT.test(U)){R+=U;continue}if(P.EXP.test(U)){ve=ge;continue}P.POINT.test(U)&&R[R.length-1]==="."&&ne(U,me,ee)}if(ve===ge){if(P.DIGIT.test(U)){j+=U;continue}if(P.SIGN.test(U)){if(j===""){j+=U;continue}j.length===1&&P.SIGN.test(j)&&ne(U,me,ee)}}P.WHITESPACE.test(U)?(k(),ve=J,fe=!1):P.COMMA.test(U)?(k(),ve=J,fe=!0):P.SIGN.test(U)?(k(),ve=le,R=U):P.POINT.test(U)?(k(),ve=Y,R=U):ne(U,me,ee)}return k(),ee}let m=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(D){let O="px";if(typeof D=="string"||D instanceof String)for(let P=0,J=m.length;P<J;P++){let le=m[P];if(D.endsWith(le)){O=le,D=D.substring(0,D.length-le.length);break}}let L;return O==="px"&&t.defaultUnit!=="px"?L=b.in[t.defaultUnit]/t.defaultDPI:(L=b[O][t.defaultUnit],L<0&&(L=b[O].in*t.defaultDPI)),L*parseFloat(D)}function _(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;let O=E(D);return z.length>0&&O.premultiply(z[z.length-1]),ue.copy(O),z.push(O),O}function E(D){let O=new Ve,L=G;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){let P=g(D.getAttribute("x")),J=g(D.getAttribute("y"));O.translate(P,J)}if(D.hasAttribute("transform")){let P=D.getAttribute("transform").split(")");for(let J=P.length-1;J>=0;J--){let le=P[J].trim();if(le==="")continue;let Y=le.indexOf("("),ge=le.length;if(Y>0&&Y<ge){let ve=le.slice(0,Y),fe=v(le.slice(Y+1));switch(L.identity(),ve){case"translate":if(fe.length>=1){let R=fe[0],j=0;fe.length>=2&&(j=fe[1]),L.translate(R,j)}break;case"rotate":if(fe.length>=1){let R=0,j=0,ee=0;R=fe[0]*Math.PI/180,fe.length>=3&&(j=fe[1],ee=fe[2]),H.makeTranslation(-j,-ee),q.makeRotation(R),V.multiplyMatrices(q,H),H.makeTranslation(j,ee),L.multiplyMatrices(H,V)}break;case"scale":if(fe.length>=1){let R=fe[0],j=R;fe.length>=2&&(j=fe[1]),L.scale(R,j)}break;case"skewX":fe.length===1&&L.set(1,Math.tan(fe[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":fe.length===1&&L.set(1,0,0,Math.tan(fe[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":fe.length===6&&L.set(fe[0],fe[2],fe[4],fe[1],fe[3],fe[5],0,0,1);break}}O.premultiply(L)}}return O}function M(D,O){function L(Y){Q.set(Y.x,Y.y,1).applyMatrix3(O),Y.set(Q.x,Q.y)}function P(Y){let ge=Y.xRadius,ve=Y.yRadius,fe=Math.cos(Y.aRotation),R=Math.sin(Y.aRotation),j=new X(ge*fe,ge*R,0),ee=new X(-ve*R,ve*fe,0),ne=j.applyMatrix3(O),k=ee.applyMatrix3(O),U=G.set(ne.x,k.x,0,ne.y,k.y,0,0,0,1),te=H.copy(U).invert(),F=q.copy(te).transpose().multiply(te).elements,C=A(F[0],F[1],F[4]),K=Math.sqrt(C.rt1),re=Math.sqrt(C.rt2);if(Y.xRadius=1/K,Y.yRadius=1/re,Y.aRotation=Math.atan2(C.sn,C.cs),!((Y.aEndAngle-Y.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let oe=H.set(K,0,0,0,re,0,0,0,1),Ie=q.set(C.cs,C.sn,0,-C.sn,C.cs,0,0,0,1),Me=oe.multiply(Ie).multiply(U),Pe=De=>{let{x:pe,y:Ce}=new X(Math.cos(De),Math.sin(De),0).applyMatrix3(Me);return Math.atan2(Ce,pe)};Y.aStartAngle=Pe(Y.aStartAngle),Y.aEndAngle=Pe(Y.aEndAngle),w(O)&&(Y.aClockwise=!Y.aClockwise)}}function J(Y){let ge=y(O),ve=S(O);Y.xRadius*=ge,Y.yRadius*=ve;let fe=ge>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);Y.aRotation+=fe,w(O)&&(Y.aStartAngle*=-1,Y.aEndAngle*=-1,Y.aClockwise=!Y.aClockwise)}let le=D.subPaths;for(let Y=0,ge=le.length;Y<ge;Y++){let fe=le[Y].curves;for(let R=0;R<fe.length;R++){let j=fe[R];j.isLineCurve?(L(j.v1),L(j.v2)):j.isCubicBezierCurve?(L(j.v0),L(j.v1),L(j.v2),L(j.v3)):j.isQuadraticBezierCurve?(L(j.v0),L(j.v1),L(j.v2)):j.isEllipseCurve&&(ce.set(j.aX,j.aY),L(ce),j.aX=ce.x,j.aY=ce.y,T(O)?P(j):J(j))}}}function w(D){let O=D.elements;return O[0]*O[4]-O[1]*O[3]<0}function T(D){let O=D.elements,L=O[0]*O[3]+O[1]*O[4];if(L===0)return!1;let P=y(D),J=S(D);return Math.abs(L/(P*J))>Number.EPSILON}function y(D){let O=D.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function S(D){let O=D.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function A(D,O,L){let P,J,le,Y,ge,ve=D+L,fe=D-L,R=Math.sqrt(fe*fe+4*O*O);return ve>0?(P=.5*(ve+R),ge=1/P,J=D*ge*L-O*ge*O):ve<0?J=.5*(ve-R):(P=.5*R,J=-.5*R),fe>0?le=fe+R:le=fe-R,Math.abs(le)>2*Math.abs(O)?(ge=-2*O/le,Y=1/Math.sqrt(1+ge*ge),le=ge*Y):Math.abs(O)===0?(le=1,Y=0):(ge=-.5*le/O,le=1/Math.sqrt(1+ge*ge),Y=ge*le),fe>0&&(ge=le,le=-Y,Y=ge),{rt1:P,rt2:J,cs:le,sn:Y}}let N=[],B={},z=[],G=new Ve,H=new Ve,q=new Ve,V=new Ve,ce=new ae,Q=new X,ue=new Ve,Se=new DOMParser().parseFromString(e,"image/svg+xml");return n(Se.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:N,xml:Se.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(x,v,m,b){let g=x.x,_=v.x,E=m.x,M=b.x,w=x.y,T=v.y,y=m.y,S=b.y,A=(M-E)*(w-y)-(S-y)*(g-E),N=(_-g)*(w-y)-(T-w)*(g-E),B=(S-y)*(_-g)-(M-E)*(T-w),z=A/B,G=N/B;if(B===0&&A!==0||z<=0||z>=1||G<0||G>1)return null;if(A===0&&B===0){for(let H=0;H<2;H++)if(o(H===0?m:b,x,v),i.loc==n.ORIGIN){let q=H===0?m:b;return{x:q.x,y:q.y,t:i.t}}else if(i.loc==n.BETWEEN){let q=+(g+i.t*(_-g)).toPrecision(10),V=+(w+i.t*(T-w)).toPrecision(10);return{x:q,y:V,t:i.t}}return null}else{for(let V=0;V<2;V++)if(o(V===0?m:b,x,v),i.loc==n.ORIGIN){let ce=V===0?m:b;return{x:ce.x,y:ce.y,t:i.t}}let H=+(g+z*(_-g)).toPrecision(10),q=+(w+z*(T-w)).toPrecision(10);return{x:H,y:q,t:z}}}function o(x,v,m){let b=m.x-v.x,g=m.y-v.y,_=x.x-v.x,E=x.y-v.y,M=b*E-_*g;if(x.x===v.x&&x.y===v.y){i.loc=n.ORIGIN,i.t=0;return}if(x.x===m.x&&x.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(M<-Number.EPSILON){i.loc=n.LEFT;return}if(M>Number.EPSILON){i.loc=n.RIGHT;return}if(b*_<0||g*E<0){i.loc=n.BEHIND;return}if(Math.sqrt(b*b+g*g)<Math.sqrt(_*_+E*E)){i.loc=n.BEYOND;return}let w;b!==0?w=_/b:w=E/g,i.loc=n.BETWEEN,i.t=w}function a(x,v){let m=[],b=[];for(let g=1;g<x.length;g++){let _=x[g-1],E=x[g];for(let M=1;M<v.length;M++){let w=v[M-1],T=v[M],y=r(_,E,w,T);y!==null&&m.find(S=>S.t<=y.t+Number.EPSILON&&S.t>=y.t-Number.EPSILON)===void 0&&(m.push(y),b.push(new ae(y.x,y.y)))}}return b}function l(x,v,m){let b=new ae;v.getCenter(b);let g=[];return m.forEach(_=>{_.boundingBox.containsPoint(b)&&a(x,_.points).forEach(M=>{g.push({identifier:_.identifier,isCW:_.isCW,point:M})})}),g.sort((_,E)=>_.point.x-E.point.x),g}function h(x,v,m,b,g){(g==null||g==="")&&(g="nonzero");let _=new ae;x.boundingBox.getCenter(_);let E=[new ae(m,_.y),new ae(b,_.y)],M=l(E,x.boundingBox,v);M.sort((N,B)=>N.point.x-B.point.x);let w=[],T=[];M.forEach(N=>{N.identifier===x.identifier?w.push(N):T.push(N)});let y=w[0].point.x,S=[],A=0;for(;A<T.length&&T[A].point.x<y;)S.length>0&&S[S.length-1]===T[A].identifier?S.pop():S.push(T[A].identifier),A++;if(S.push(x.identifier),g==="evenodd"){let N=S.length%2===0,B=S[S.length-2];return{identifier:x.identifier,isHole:N,for:B}}else if(g==="nonzero"){let N=!0,B=null,z=null;for(let G=0;G<S.length;G++){let H=S[G];N?(z=v[H].isCW,N=!1,B=H):z!==v[H].isCW&&(z=v[H].isCW,N=!0)}return{identifier:x.identifier,isHole:N,for:B}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let u=999999999,c=-999999999,d=e.subPaths.map(x=>{let v=x.getPoints(),m=-999999999,b=999999999,g=-999999999,_=999999999;for(let E=0;E<v.length;E++){let M=v[E];M.y>m&&(m=M.y),M.y<b&&(b=M.y),M.x>g&&(g=M.x),M.x<_&&(_=M.x)}return c<=g&&(c=g+1),u>=_&&(u=_-1),{curves:x.curves,points:v,isCW:dn.isClockWise(v),identifier:-1,boundingBox:new $s(new ae(_,b),new ae(g,m))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;let f=d.map(x=>h(x,d,u,c,e.userData?e.userData.style.fillRule:void 0)),p=[];return d.forEach(x=>{if(!f[x.identifier].isHole){let m=new Cn;m.curves=x.curves,f.filter(g=>g.isHole&&g.for===x.identifier).forEach(g=>{let _=d[g.identifier],E=new pn;E.curves=_.curves,m.holes.push(E)}),p.push(m)}}),p}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){let r=[],o=[],a=[];if(s.pointsToStrokeWithBuffers(e,t,n,i,r,o,a)===0)return null;let l=new Wt;return l.setAttribute("position",new mt(r,3)),l.setAttribute("normal",new mt(o,3)),l.setAttribute("uv",new mt(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,r,o,a,l){let h=new ae,u=new ae,c=new ae,d=new ae,f=new ae,p=new ae,x=new ae,v=new ae,m=new ae,b=new ae,g=new ae,_=new ae,E=new ae,M=new ae,w=new ae,T=new ae,y=new ae;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=fe(e);let S=e.length;if(S<2)return 0;let A=e[0].equals(e[S-1]),N,B=e[0],z,G=t.strokeWidth/2,H=1/(S-1),q=0,V,ce,Q,ue,Se=!1,Ae=0,D=l*3,O=l*2;L(e[0],e[1],h).multiplyScalar(G),v.copy(e[0]).sub(h),m.copy(e[0]).add(h),b.copy(v),g.copy(m);for(let R=1;R<S;R++){N=e[R],R===S-1?A?z=e[1]:z=void 0:z=e[R+1];let j=h;if(L(B,N,j),c.copy(j).multiplyScalar(G),_.copy(N).sub(c),E.copy(N).add(c),V=q+H,ce=!1,z!==void 0){L(N,z,u),c.copy(u).multiplyScalar(G),M.copy(N).sub(c),w.copy(N).add(c),Q=!0,c.subVectors(z,B),j.dot(c)<0&&(Q=!1),R===1&&(Se=Q),c.subVectors(z,N),c.normalize();let ee=Math.abs(j.dot(c));if(ee>Number.EPSILON){let ne=G/ee;c.multiplyScalar(-ne),d.subVectors(N,B),f.copy(d).setLength(ne).add(c),T.copy(f).negate();let k=f.length(),U=d.length();d.divideScalar(U),p.subVectors(z,N);let te=p.length();switch(p.divideScalar(te),d.dot(T)<U&&p.dot(T)<te&&(ce=!0),y.copy(f).add(N),T.add(N),ue=!1,ce?Q?(w.copy(T),E.copy(T)):(M.copy(T),_.copy(T)):le(),t.strokeLineJoin){case"bevel":Y(Q,ce,V);break;case"round":ge(Q,ce),Q?J(N,_,M,V,0):J(N,w,E,V,1);break;case"miter":case"miter-clip":default:let me=G*t.strokeMiterLimit/k;if(me<1)if(t.strokeLineJoin!=="miter-clip"){Y(Q,ce,V);break}else ge(Q,ce),Q?(p.subVectors(y,_).multiplyScalar(me).add(_),x.subVectors(y,M).multiplyScalar(me).add(M),P(_,V,0),P(p,V,0),P(N,V,.5),P(N,V,.5),P(p,V,0),P(x,V,0),P(N,V,.5),P(x,V,0),P(M,V,0)):(p.subVectors(y,E).multiplyScalar(me).add(E),x.subVectors(y,w).multiplyScalar(me).add(w),P(E,V,1),P(p,V,1),P(N,V,.5),P(N,V,.5),P(p,V,1),P(x,V,1),P(N,V,.5),P(x,V,1),P(w,V,1));else ce?(Q?(P(m,q,1),P(v,q,0),P(y,V,0),P(m,q,1),P(y,V,0),P(T,V,1)):(P(m,q,1),P(v,q,0),P(y,V,1),P(v,q,0),P(T,V,0),P(y,V,1)),Q?M.copy(y):w.copy(y)):Q?(P(_,V,0),P(y,V,0),P(N,V,.5),P(N,V,.5),P(y,V,0),P(M,V,0)):(P(E,V,1),P(y,V,1),P(N,V,.5),P(N,V,.5),P(y,V,1),P(w,V,1)),ue=!0;break}}else le()}else le();!A&&R===S-1&&ve(e[0],b,g,Q,!0,q),q=V,B=N,v.copy(M),m.copy(w)}if(!A)ve(N,_,E,Q,!1,V);else if(ce&&r){let R=y,j=T;Se!==Q&&(R=T,j=y),Q?(ue||Se)&&(j.toArray(r,0*3),j.toArray(r,3*3),ue&&R.toArray(r,1*3)):(ue||!Se)&&(j.toArray(r,1*3),j.toArray(r,3*3),ue&&R.toArray(r,0*3))}return Ae;function L(R,j,ee){return ee.subVectors(j,R),ee.set(-ee.y,ee.x).normalize()}function P(R,j,ee){r&&(r[D]=R.x,r[D+1]=R.y,r[D+2]=0,o&&(o[D]=0,o[D+1]=0,o[D+2]=1),D+=3,a&&(a[O]=j,a[O+1]=ee,O+=2)),Ae+=3}function J(R,j,ee,ne,k){h.copy(j).sub(R).normalize(),u.copy(ee).sub(R).normalize();let U=Math.PI,te=h.dot(u);Math.abs(te)<1&&(U=Math.abs(Math.acos(te))),U/=n,c.copy(j);for(let me=0,Fe=n-1;me<Fe;me++)d.copy(c).rotateAround(R,U),P(c,ne,k),P(d,ne,k),P(R,ne,.5),c.copy(d);P(d,ne,k),P(ee,ne,k),P(R,ne,.5)}function le(){P(m,q,1),P(v,q,0),P(_,V,0),P(m,q,1),P(_,V,0),P(E,V,1)}function Y(R,j,ee){j?R?(P(m,q,1),P(v,q,0),P(_,V,0),P(m,q,1),P(_,V,0),P(T,V,1),P(_,ee,0),P(M,ee,0),P(T,ee,.5)):(P(m,q,1),P(v,q,0),P(E,V,1),P(v,q,0),P(T,V,0),P(E,V,1),P(E,ee,1),P(T,ee,0),P(w,ee,1)):R?(P(_,ee,0),P(M,ee,0),P(N,ee,.5)):(P(E,ee,1),P(w,ee,0),P(N,ee,.5))}function ge(R,j){j&&(R?(P(m,q,1),P(v,q,0),P(_,V,0),P(m,q,1),P(_,V,0),P(T,V,1),P(_,q,0),P(N,V,.5),P(T,V,1),P(N,V,.5),P(M,q,0),P(T,V,1)):(P(m,q,1),P(v,q,0),P(E,V,1),P(v,q,0),P(T,V,0),P(E,V,1),P(E,q,1),P(T,V,0),P(N,V,.5),P(N,V,.5),P(T,V,0),P(w,q,1)))}function ve(R,j,ee,ne,k,U){switch(t.strokeLineCap){case"round":k?J(R,ee,j,U,.5):J(R,j,ee,U,.5);break;case"square":if(k)h.subVectors(j,R),u.set(h.y,-h.x),c.addVectors(h,u).add(R),d.subVectors(u,h).add(R),ne?(c.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(c.toArray(r,1*3),a[3*2+1]===1?d.toArray(r,3*3):c.toArray(r,3*3),d.toArray(r,0*3));else{h.subVectors(ee,R),u.set(h.y,-h.x),c.addVectors(h,u).add(R),d.subVectors(u,h).add(R);let te=r.length;ne?(c.toArray(r,te-1*3),d.toArray(r,te-2*3),d.toArray(r,te-4*3)):(d.toArray(r,te-2*3),c.toArray(r,te-1*3),d.toArray(r,te-4*3))}break;case"butt":default:break}}function fe(R){let j=!1;for(let ne=1,k=R.length-1;ne<k;ne++)if(R[ne].distanceTo(R[ne+1])<i){j=!0;break}if(!j)return R;let ee=[];ee.push(R[0]);for(let ne=1,k=R.length-1;ne<k;ne++)R[ne].distanceTo(R[ne+1])>=i&&ee.push(R[ne]);return ee.push(R[R.length-1]),ee}}};var rs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lv=new Ji(-1,1,1,-1,0,1),Kl=class extends Wt{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}},cv=new Kl,os=class{constructor(e){this._mesh=new Ct(cv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var as=class extends ln{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new os(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ar=class extends ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},da=class extends ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var fa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new At(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new as(rs),this.copyPass.material.blending=an,this.clock=new qs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ar!==void 0&&(o instanceof ar?n=!0:o instanceof da&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pa=class extends ln{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var hu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ls=class s extends ln{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new At(r,o,{type:bt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let c=new At(r,o,{type:bt});c.texture.name="UnrealBloomPass.h"+u,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);let d=new At(r,o,{type:bt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=hu;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(rs.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:rs.vertexShader,fragmentShader:rs.fragmentShader,blending:Js,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new ci,this._fsQuad=new os(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ls.BlurDirectionX=new ae(1,0);ls.BlurDirectionY=new ae(0,1);var lr=!1;window.addEventListener(dr,()=>{let s=new Ps;s.background=new ze(0);let e=new Tt(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.z=3.5;let t=new ae,n=new ae(0,0),i=new ae(0,0),r=.7,o=.05,a={active:!0,rotationFactor:1,mouseTrackingFactor:.3},l=0;function h(Q){t.x=Q.clientX/window.innerWidth*2-1,t.y=-(Q.clientY/window.innerHeight*2-1),n.x=-t.y*r,n.y=t.x*r}window.addEventListener("mousemove",h,!1);let u=new aa({antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(window.devicePixelRatio),u.toneMapping=Mo,u.toneMappingExposure=1,document.getElementById("three-container").appendChild(u.domElement);let c=new ha(e,u.domElement);c.enableDamping=!0,c.enableZoom=!1,c.enablePan=!1;let d=new Ys(11184810,0,.3);s.add(d);let f;lr&&(f=new fr);let p={uniforms:{tDiffuse:{value:null},overlayColor:{value:new ze(1,0,0)},intensity:{value:1},blendMode:{value:1}},vertexShader:`
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
    `},x={roughness:.01,envMapIntensity:1.3},v={rotationY:0};if(lr&&f){let Q=f.addFolder("Environment");Q.add(v,"rotationY",0,360,15).name("Rotate Y (degrees)").onChange(ce),Q.add(x,"envMapIntensity",0,5).name("Env Intensity").onChange(Se=>{E&&E.material&&(E.material.envMapIntensity=Se,E.material.needsUpdate=!0)}),f.addFolder("Material").add(x,"roughness",0,1).onChange(Se=>{E&&E.material&&(E.material.roughness=Se)})}let m=new pa(s,e),b=new ls(new ae(window.innerWidth,window.innerHeight),1.5,.4,.85);b.threshold=.85,b.strength=.56,b.radius=1;let g=new as(p),_=new fa(u);if(_.addPass(m),_.addPass(b),_.addPass(g),lr&&f){let Q=f.addFolder("Bloom"),ue={threshold:b.threshold,strength:b.strength,radius:b.radius};Q.add(ue,"threshold",0,1).onChange(D=>{b.threshold=D}),Q.add(ue,"strength",0,3).onChange(D=>{b.strength=D}),Q.add(ue,"radius",0,1).onChange(D=>{b.radius=D});let Se=f.addFolder("Color Overlay"),Ae={intensity:1,color:{r:1,g:0,b:.17},blendMode:1};Se.add(Ae,"intensity",0,1).onChange(D=>{g.uniforms.intensity.value=D}),Se.addColor(Ae,"color").onChange(D=>{g.uniforms.overlayColor.value.setRGB(D.r,D.g,D.b)}),Se.add(Ae,"blendMode",{Multiply:0,Overlay:1,Screen:2}).onChange(D=>{g.uniforms.blendMode.value=parseInt(D)})}let E;function M(){let Q=document.createElement("canvas");Q.width=256,Q.height=256;let ue=Q.getContext("2d"),Se=ue.createRadialGradient(128,128,0,128,128,128);Se.addColorStop(0,"#ffffff"),Se.addColorStop(.4,"#ff3454"),Se.addColorStop(1,"#330000"),ue.fillStyle=Se,ue.fillRect(0,0,256,256);let Ae=new Ls(Q);return Ae.mapping=Jn,Ae}let w=new ua,T=new Xs,y=null,S;S=M(),w.load("https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr",Q=>{Q.mapping=Jn,y=Q,s.environment=Q,z()},void 0,Q=>{console.error("HDR Load Error:",Q),y=new St,z()}),T.load("https://cdn.prod.website-files.com/66260e4321c76d6302aa74e5/688c5dca05b526050a93354c_crystal_matcap-desat%20(1).png",Q=>{Q.mapping=Jn,E&&E.material?(E.material.envMap=Q,E.material.needsUpdate=!0):S=Q},void 0,Q=>{console.error("matcap load error:",Q)});let A=`<svg width="45" height="161" viewBox="0 0 45 161" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.81272 0.418996C2.6871 0.163431 2.30027 0.283109 2.34092 0.564963L13.0797 75.0285C13.1015 75.1792 12.9846 75.3142 12.8323 75.3142H0.401385C0.216297 75.3142 0.0953853 75.5084 0.177007 75.6745L41.8922 160.574C42.0179 160.83 42.4051 160.71 42.364 160.428L31.5409 86.092C31.5189 85.9412 31.6359 85.806 31.7883 85.806H44.3824C44.5675 85.806 44.6884 85.6118 44.6067 85.4457L2.81272 0.418996Z" fill="black"/>
</svg>
`,N,B={steps:2,depth:11,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelOffset:0,bevelSegments:16};function z(){try{let Se=new or().parse(A).paths[0];N=or.createShapes(Se)[0];let D=new $i(N,B);D.center();let O=.02;if(D.scale(O,-O,O),D.rotateX(Math.PI),lr&&f){let P=f.addFolder("Extrude Settings");P.add(B,"steps",1,10,1).name("Steps").onChange(()=>{G()}),P.add(B,"depth",1,30).name("Depth").onChange(()=>{G()}),P.add(B,"bevelEnabled").name("Bevel Enabled").onChange(()=>{G()}),P.add(B,"bevelThickness",0,10).name("Bevel Thickness").onChange(()=>{G()}),P.add(B,"bevelSize",0,10).name("Bevel Size").onChange(()=>{G()}),P.add(B,"bevelOffset",-5,5).name("Bevel Offset").onChange(()=>{G()}),P.add(B,"bevelSegments",1,32,1).name("Bevel Segments").onChange(()=>{G()})}let L=new Hs({roughness:x.roughness,transparent:!0,envMap:S,envMapIntensity:x.envMapIntensity,side:jt});E=new Ct(D,L),s.add(E),q(),V()}catch(Q){console.error("Error building the scene:",Q)}}function G(){if(!E||!N)return;E.geometry.dispose();let Q=new $i(N,B);Q.center();let ue=.02;Q.scale(ue,-ue,ue),Q.rotateX(Math.PI),E.geometry=Q}window.addEventListener("resize",H,!1);function H(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),_.setSize(window.innerWidth,window.innerHeight)}function q(){a.active&&window.gsap.to({rotation:0},{rotation:Math.PI*2*a.rotationFactor,ease:"none",scrollTrigger:{trigger:"#scroll-container",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:Q=>{l=Math.PI*2*a.rotationFactor*Q.progress}}})}function V(){if(requestAnimationFrame(V),E){i.x+=(n.x-i.x)*o,i.y+=(n.y-i.y)*o;let Q=i.x*(a.active?a.mouseTrackingFactor:1),ue=i.y*(a.active?a.mouseTrackingFactor:1)+l;E.rotation.set(Q,ue,0)}c.update();try{_.render(),window.hasRendered||(window.hasRendered=!0)}catch(Q){console.error("Error in render:",Q)}}function ce(){let Q=sr.degToRad(v.rotationY);s.environment&&s.environment.isTexture&&(s.environment.needsUpdate=!0,E&&E.material&&E.material.envMap&&(E.material.envMap.needsUpdate=!0,E.material.needsUpdate=!0))}if(lr&&f){let Q=f.addFolder("Scroll Control");Q.add(a,"active").name("Scroll Rotation Active").onChange(()=>{window.ScrollTrigger.refresh()}),Q.add(a,"rotationFactor",0,5).name("Rotations per Scroll").onChange(()=>{window.ScrollTrigger.refresh()}),Q.add(a,"mouseTrackingFactor",0,1).name("Mouse Effect During Scroll")}});function jl(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function uu(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Ql(s,e,t){return e&&uu(s.prototype,e),t&&uu(s,t),s}function du(s){return+s.replace(/px/,"")}function hv(s){var e=window.devicePixelRatio,t=getComputedStyle(s),n=du(t.getPropertyValue("width")),i=du(t.getPropertyValue("height"));s.setAttribute("width",(n*e).toString()),s.setAttribute("height",(i*e).toString())}function cn(s,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=Math.random()*(e-s)+s;return Math.floor(n*Math.pow(10,t))/Math.pow(10,t)}function fu(s){return s[cn(0,s.length)]}var uv=.00125,dv=5e-4,fv=9e-4,pv=1e-5,mv=6,gv=80,vv=.9,xv=1.7,_v=.2,yv=.6,Sv=.03,Mv=.07,pu=15,mu=82,bv=150,Ev=100,wv=250,Tv=40,Av=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function gu(s){var e=1920;return Math.log(s)/Math.log(e)}var vu=function(){function s(e){jl(this,s);var t=e.initialPosition,n=e.direction,i=e.confettiRadius,r=e.confettiColors,o=e.emojis,a=e.emojiSize,l=e.canvasWidth,h=cn(vv,xv,3),u=h*gu(l);this.confettiSpeed={x:u,y:u},this.finalConfettiSpeedX=cn(_v,yv,3),this.rotationSpeed=o.length?.01:cn(Sv,Mv,3)*gu(l),this.dragForceCoefficient=cn(dv,fv,6),this.radius={x:i,y:i},this.initialRadius=i,this.rotationAngle=n==="left"?cn(0,.2,3):cn(-.2,0,3),this.emojiSize=a,this.emojiRotationAngle=cn(0,2*Math.PI),this.radiusYUpdateDirection="down";var c=n==="left"?cn(mu,pu)*Math.PI/180:cn(-pu,-mu)*Math.PI/180;this.absCos=Math.abs(Math.cos(c)),this.absSin=Math.abs(Math.sin(c));var d=cn(-bv,0),f={x:t.x+(n==="left"?-d:d)*this.absCos,y:t.y-d*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=o.length?null:fu(r),this.emoji=o.length?fu(o):null,this.createdAt=new Date().getTime(),this.direction=n}return Ql(s,[{key:"draw",value:function(t){var n=this.currentPosition,i=this.radius,r=this.color,o=this.emoji,a=this.rotationAngle,l=this.emojiRotationAngle,h=this.emojiSize,u=window.devicePixelRatio;r?(t.fillStyle=r,t.beginPath(),t.ellipse(n.x*u,n.y*u,i.x*u,i.y*u,a,0,2*Math.PI),t.fill()):o&&(t.font="".concat(h,"px serif"),t.save(),t.translate(u*n.x,u*n.y),t.rotate(l),t.textAlign="center",t.fillText(o,0,0),t.restore())}},{key:"updatePosition",value:function(t,n){var i=this.confettiSpeed,r=this.dragForceCoefficient,o=this.finalConfettiSpeedX,a=this.radiusYUpdateDirection,l=this.rotationSpeed,h=this.createdAt,u=this.direction,c=n-h;if(i.x>o&&(this.confettiSpeed.x-=r*t),this.currentPosition.x+=i.x*(u==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*c+uv*Math.pow(c,2)/2,this.rotationSpeed-=this.emoji?1e-4:pv*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}a==="down"?(this.radius.y-=t*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+Ev}}]),s}();function Cv(){var s=document.createElement("canvas");return s.style.position="fixed",s.style.width="100%",s.style.height="100%",s.style.top="0",s.style.left="0",s.style.zIndex="1000",s.style.pointerEvents="none",document.body.appendChild(s),s}function Rv(s){var e=s.confettiRadius,t=e===void 0?mv:e,n=s.confettiNumber,i=n===void 0?s.confettiesNumber||(s.emojis?Tv:wv):n,r=s.confettiColors,o=r===void 0?Av:r,a=s.emojis,l=a===void 0?s.emojies||[]:a,h=s.emojiSize,u=h===void 0?gv:h;return s.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),s.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:i,confettiColors:o,emojis:l,emojiSize:u}}var Pv=function(){function s(e){var t=this;jl(this,s),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(n){return t.resolvePromise=n})}return Ql(s,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,n,i){var r=this,o=t.timeDelta,a=t.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(o,a),l.draw(r.canvasContext),i?l.getIsVisibleOnCanvas(n):!0})}}]),s}(),Iv=function(){function s(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};jl(this,s),this.activeConfettiBatches=[],this.canvas=e.canvas||Cv(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return Ql(s,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,hv(this.canvas);var t=new Date().getTime(),n=t-this.lastUpdated,i=this.canvas.offsetHeight,r=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(o){return o.processShapes({timeDelta:n,currentTime:t},i,r),r?!o.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Rv(t),i=n.confettiRadius,r=n.confettiNumber,o=n.confettiColors,a=n.emojis,l=n.emojiSize,h=this.canvas.getBoundingClientRect(),u=h.width,c=h.height,d=c*5/7,f={x:0,y:d},p={x:u,y:d},x=new Pv(this.canvasContext),v=0;v<r/2;v++){var m=new vu({initialPosition:f,direction:"right",confettiRadius:i,confettiColors:o,confettiNumber:r,emojis:a,emojiSize:l,canvasWidth:u}),b=new vu({initialPosition:p,direction:"left",confettiRadius:i,confettiColors:o,confettiNumber:r,emojis:a,emojiSize:l,canvasWidth:u});x.addShapes(m,b)}return this.activeConfettiBatches.push(x),this.queueAnimationFrameIfNeeded(),x.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),s}(),ec=Iv;function xu(s){let e=typeof s=="string"?document.querySelector(s):s;if(!e)return console.error("Confetti canvas not found:",s),null;let t=null,n=!1,i=()=>{if(!t)try{console.log("Initializing JSConfetti on demand for canvas:",e),t=new ec({canvas:e})}catch(u){console.error("Error initializing JSConfetti",{error:u},{canvasEl:e});return}t.addConfetti({emojis:["\u{1F60E}","\u26A1\uFE0F","\u{1F389}","\u{1F308}","\u{1F440}","\u{1F984}"],emojiSize:100,confettiNumber:30})},r=()=>{if(!t)try{console.log("Initializing JSConfetti proactively for canvas:",e),t=new ec({canvas:e})}catch(u){console.error("Error initializing JSConfetti",{error:u},{canvasEl:e});return}n?console.log("Confetti listener already active."):(console.log("Activating confetti click listener."),e.addEventListener("click",i),n=!0)},o=()=>{n?(console.log("Deactivating confetti click listener."),e.removeEventListener("click",i),n=!1):console.log("Confetti listener already inactive.")};return{activate:r,deactivate:o,destroy:()=>{console.log("Destroying confetti controller."),o(),t=null},exitEffect:()=>{o()},reenterEffect:()=>{r()}}}var st=Hu(_u(),1);var ma=class{constructor(e=!0){this.autoStart=e;Je(this,"canvas",null);Je(this,"engine",null);Je(this,"render",null);Je(this,"runner",null);Je(this,"mouseCollider",null);Je(this,"ground",null);Je(this,"isInitialized",!1);Je(this,"observer",null);Je(this,"rainTimeout",null);Je(this,"config",{objectSizeHeightBased:window.innerHeight*.1,objectSizeWidthBased:window.innerWidth*.08,colliderScale:.8,rainDuration:1e4,rainIntervalMin:50,rainIntervalMax:300,wallMargin:100,mouseColliderSize:40});Je(this,"textures",["https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc22ca6be309b888b1c855_cash.png","https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e70406bb29f57b2e82d_sales.png","https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e5b406bb29f57b2daea_moneybag.png"]);if(this.canvas=document.querySelector("#matter-canvas-target"),!this.canvas){console.warn("Matter canvas not found for emoji rain");return}this.updateWallMargin(),this.setupIntersectionObserver()}updateWallMargin(){let e=this.config.objectSizeWidthBased*this.config.colliderScale;this.config.wallMargin=Math.max(e,window.innerWidth*.05)}setupIntersectionObserver(){this.canvas&&(this.observer=new IntersectionObserver(e=>{e.forEach(t=>{var n;t.isIntersecting&&!this.isInitialized&&(this.initialize(),(n=this.observer)==null||n.disconnect())})},{threshold:.1}),this.observer.observe(this.canvas))}initialize(){this.canvas&&(this.engine=st.default.Engine.create(),this.render=st.default.Render.create({canvas:this.canvas,engine:this.engine,options:{background:"transparent",wireframes:!1,width:window.innerWidth,height:window.innerHeight}}),this.initializeComponents(),this.isInitialized=!0,this.autoStart&&this.startRain())}initializeComponents(){this.updateConfiguration(),this.createBoundaries(),this.setupMouseInteraction(),this.setupResizeHandler(),!(!this.engine||!this.render)&&(this.runner||(this.runner=st.default.Runner.create()),st.default.Runner.run(this.runner,this.engine),st.default.Render.run(this.render))}createBoundaries(){if(!this.engine)return;let e=st.default.Bodies.rectangle(window.innerWidth/2,window.innerHeight,window.innerWidth,60,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}}),t=st.default.Bodies.rectangle(this.config.wallMargin/2,window.innerHeight/2,60,window.innerHeight,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}}),n=st.default.Bodies.rectangle(window.innerWidth-this.config.wallMargin/2,window.innerHeight/2,60,window.innerHeight,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}});st.default.Composite.add(this.engine.world,[e,t,n]),this.ground=e}setupMouseInteraction(){if(!this.canvas||!this.engine)return;this.mouseCollider=st.default.Bodies.circle(0,0,this.config.mouseColliderSize,{isStatic:!0,friction:.1,restitution:.6,render:{fillStyle:"rgba(255, 0, 0, 0)",visible:!0}}),st.default.Composite.add(this.engine.world,this.mouseCollider);let e=t=>{if(!this.canvas||!this.mouseCollider)return;let n=this.canvas.getBoundingClientRect(),i=this.canvas.width/n.width,r=this.canvas.height/n.height,o=(t.clientX-n.left)*i,a=(t.clientY-n.top)*r;st.default.Body.setPosition(this.mouseCollider,{x:o,y:a})};document.addEventListener("mousemove",e),document.addEventListener("mouseleave",()=>{this.mouseCollider&&st.default.Body.setPosition(this.mouseCollider,{x:-100,y:-100})})}setupResizeHandler(){if(!this.render||!this.engine)return;let e=()=>{!this.render||!this.engine||(this.render.canvas.width=window.innerWidth,this.render.canvas.height=window.innerHeight,this.updateConfiguration(),this.reinitializeComponents(),this.restartRainEffect())};window.addEventListener("resize",e)}updateConfiguration(){this.config.objectSizeHeightBased=window.innerHeight*.1,this.config.objectSizeWidthBased=window.innerWidth*.08,this.updateWallMargin()}reinitializeComponents(){this.engine&&(st.default.World.clear(this.engine.world,!1),this.createBoundaries(),this.setupMouseInteraction())}restartRainEffect(){this.rainTimeout&&(window.clearTimeout(this.rainTimeout),this.rainTimeout=null),this.startRain()}calculateMaxEmojis(){let e=this.config.objectSizeWidthBased*this.config.colliderScale,t=2,n=Math.floor(window.innerWidth/e);return t*n}createObject(){if(!this.engine)return;let e=this.engine.world.bodies.length,t=this.calculateMaxEmojis();if(e>=t)return;let n=this.config.wallMargin+Math.random()*(window.innerWidth-2*this.config.wallMargin),i=this.textures[Math.floor(Math.random()*this.textures.length)],r=st.default.Bodies.circle(n,-100,this.config.objectSizeWidthBased/2*this.config.colliderScale,{restitution:.6,friction:.1,render:{sprite:{texture:i,xScale:this.config.objectSizeWidthBased/100,yScale:this.config.objectSizeWidthBased/100}}});st.default.Composite.add(this.engine.world,r)}recreateFloor(){this.engine&&!this.ground?(this.ground=st.default.Bodies.rectangle(window.innerWidth/2,window.innerHeight,window.innerWidth,60,{isStatic:!0,render:{fillStyle:"transparent",visible:!1}}),st.default.Composite.add(this.engine.world,this.ground),console.debug("Matter.js floor recreated.")):this.ground?console.debug("Floor already exists, not recreating."):console.warn("Could not recreate floor: Engine missing.")}startRain(){if(console.debug("Attempting to start rain..."),this.rainTimeout&&(console.debug("Clearing existing rain timeout:",this.rainTimeout),window.clearTimeout(this.rainTimeout),this.rainTimeout=null),!this.isInitialized||!this.engine){console.warn("Cannot start rain: Not initialized or engine missing.",{isInitialized:this.isInitialized,engineExists:!!this.engine});return}console.debug("Starting emoji rain loop.");let e=Date.now()+this.config.rainDuration;console.debug(`Rain end time calculated: ${new Date(e).toLocaleTimeString()}`);let t=()=>{if(Date.now()>e){console.debug("Rain loop check: Time has ended.");return}this.createObject();let n=Math.random()*(this.config.rainIntervalMax-this.config.rainIntervalMin)+this.config.rainIntervalMin;this.rainTimeout=window.setTimeout(t,n)};t()}stopRain(){this.rainTimeout&&(window.clearTimeout(this.rainTimeout),this.rainTimeout=null,console.debug("Emoji rain stopped."))}removeFloor(){var e;this.engine&&this.ground?(console.debug("Attempting to remove floor. Runner enabled:",(e=this.runner)==null?void 0:e.enabled),st.default.Composite.remove(this.engine.world,this.ground),this.ground=null,console.debug("Matter.js floor removed."),st.default.Composite.allBodies(this.engine.world).forEach(n=>{n.isStatic||st.default.Sleeping.set(n,!1)}),console.debug("Woke up all non-static bodies.")):console.warn("Could not remove floor: Engine or ground body missing.")}clearDynamicBodies(){if(this.engine){let t=st.default.Composite.allBodies(this.engine.world).filter(n=>!n.isStatic);t.length>0&&(st.default.Composite.remove(this.engine.world,t),console.debug(`Cleared ${t.length} dynamic bodies.`))}else console.warn("Could not clear dynamic bodies: Engine missing.")}exitEffect(){this.stopRain(),this.removeFloor()}reenterEffect(){this.recreateFloor(),this.clearDynamicBodies(),this.isInitialized&&this.startRain()}destroy(){this.observer&&(this.observer.disconnect(),this.observer=null),this.rainTimeout&&(window.clearTimeout(this.rainTimeout),this.rainTimeout=null),this.engine&&(st.default.Engine.clear(this.engine),this.engine=null),this.render&&(st.default.Render.stop(this.render),this.render=null),this.runner&&(st.default.Runner.stop(this.runner),this.runner=null),this.isInitialized=!1}};var yu=.6,Su=.03,ga=.5,Mu=.05,bu="expo.inOut",Eu=0,Lv=.1,wu=.3,Dv=.4,Uv=[{name:"leads",effectNames:["emojiRain"]},{name:"delight",effectNames:["confetti"],cursorSelector:"#cursor-delight.cursor-content"},{name:"edit",effectNames:[],cursorSelector:"#cursor-edit.cursor-content"}],nc=class{constructor(e,t,n){Je(this,"cursorEl");Je(this,"cursorContentEl");Je(this,"section");Je(this,"abort");Je(this,"cursorXTo");Je(this,"cursorYTo");Je(this,"listenersAttached",!1);Je(this,"handleMove",e=>{if(!this.cursorEl)return;let t=e.clientX,n=e.clientY;this.cursorXTo(t),this.cursorYTo(n)});Je(this,"hide",()=>{gsap.to([this.cursorEl,this.cursorContentEl],{opacity:0,scale:0,rotationZ:-50,duration:.2}),this.listenersAttached&&(this.section.removeEventListener("mousemove",this.handleMove),this.listenersAttached=!1)});Je(this,"show",()=>{gsap.to([this.cursorEl,this.cursorContentEl],{opacity:1,scale:1,rotationZ:0,duration:.3}),this.listenersAttached||(this.section.addEventListener("mousemove",this.handleMove),this.listenersAttached=!0)});this.section=e,this.cursorEl=n?t.querySelector(n):null,this.cursorContentEl=n?t.querySelector(n+" .cursor_content-wrap"):null,this.abort=new AbortController,this.cursorXTo=gsap.quickTo(this.cursorEl,"x",{duration:.1,ease:"power1.out"}),this.cursorYTo=gsap.quickTo(this.cursorEl,"y",{duration:.1,ease:"power1.out"})}destroy(){this.abort.abort(),this.listenersAttached&&(this.section.removeEventListener("mousemove",this.handleMove),this.listenersAttached=!1)}},va=class{constructor(e=Uv){Je(this,"sectionWrapper");Je(this,"stickyWrapper");Je(this,"sections");Je(this,"effectRegistry",{});Je(this,"scrollTriggers",[]);Je(this,"splitInstances",[]);Je(this,"abortController");Je(this,"cursorAbortControllers",[]);Je(this,"config");Je(this,"sectionControllers",[]);this.config=e,this.sectionWrapper=document.querySelector(".delight_section-wrapper"),this.stickyWrapper=document.querySelector(".delight_sticky-wrapper"),this.sections=this.stickyWrapper?gsap.utils.toArray(":scope > .section_delight_new",this.stickyWrapper):[],this.abortController=new AbortController,this.effectRegistry={confetti:xu("#canvas-target"),emojiRain:new ma(!1)}}createSectionTimelines(e,t,n){let i=gsap.timeline({paused:!0,defaults:{ease:bu}}),r=gsap.timeline({paused:!0,defaults:{ease:bu}}),o={words:null,chars:null};return t&&(t.isContentEditable?(gsap.set(t,{opacity:0,"--pseudo-opacity":0}),i.to(t,{opacity:1,"--pseudo-opacity":1,duration:ga},wu+.2),r.to(t,{opacity:0,"--pseudo-opacity":0,duration:ga},Eu)):(o=new SplitText(t,{type:"words,chars",tag:"span"}),o||(o={words:t,chars:t}),gsap.set(o.words,{overflow:"hidden",display:"inline-block"}),gsap.set(o.chars,{display:"inline-block",yPercent:100}),i.to(o.chars,{yPercent:0,stagger:Su,duration:yu},wu),r.to(o.chars,{yPercent:-100,stagger:Su,duration:yu},Eu))),n.length>0&&(gsap.set(n,{scale:2,opacity:0}),i.to(n,{scale:1,opacity:1,stagger:Mu,duration:ga},Dv),r.to(n,{scale:0,opacity:0,stagger:Mu,duration:ga},Lv)),{inTimeline:i,outTimeline:r,headingSplit:o}}init(){if(!this.sectionWrapper||!this.stickyWrapper){console.error("Required wrapper elements (.delight_section-wrapper, .delight_sticky-wrapper) not found.");return}if(this.sections.length<this.config.length){console.error(`Expected at least ${this.config.length} direct children .section_delight_new elements inside .delight_sticky-wrapper. Found:`,this.sections.length);return}this.sections.forEach((r,o)=>{let a=this.config[o],l=r.querySelector(".heading-style-h1"),h=r.querySelectorAll(".text-style-subtitle, .text-size-large"),{inTimeline:u,outTimeline:c,headingSplit:d}=this.createSectionTimelines(r,l,h);this.splitInstances.push(d instanceof SplitText?d:null);let f=null;a.cursorSelector&&(f=new nc(r,this.stickyWrapper,a.cursorSelector)),this.sectionControllers.push({inTimeline:u,outTimeline:c,cursorController:f})});let e=window.innerHeight,t=this.sections.length*e,n=null;this.sectionWrapper&&this.stickyWrapper&&(n=ScrollTrigger.create({trigger:this.sectionWrapper,pin:this.stickyWrapper,start:"top top",end:()=>`+=${t}`,id:"delight-main-pin",invalidateOnRefresh:!0}),n&&this.scrollTriggers.push(n));let i=t/this.sections.length;this.sectionControllers[0].inTimeline.play(100),this.config.forEach((r,o)=>{let a=o===this.sections.length-1,l=o===0,h=r.name,{inTimeline:u,outTimeline:c,cursorController:d}=this.sectionControllers[o],f=ScrollTrigger.create({trigger:this.sectionWrapper,start:()=>n?n.start+i*o:0,end:()=>n?n.start+i*(o+1):0,id:`delight-section-${h}`,onEnter:()=>{console.log("onEnter",r.name),this.sectionWrapper&&this.sectionWrapper.setAttribute("data-active-section",r.name),this.sections.forEach((p,x)=>{p.style.pointerEvents=x===o?"auto":"none"}),r.effectNames.forEach(p=>{let x=this.effectRegistry[p];x&&x.reenterEffect&&x.reenterEffect()}),l||u.play(0),d==null||d.show()},onLeave:()=>{console.log("onLeave",r.name),this.sectionWrapper&&this.sectionWrapper.setAttribute("data-active-section",r.name),this.sections.forEach((p,x)=>{p.style.pointerEvents=x===o?"auto":"none"}),r.effectNames.forEach(p=>{let x=this.effectRegistry[p];x&&x.exitEffect&&x.exitEffect()}),a||c.play(0),d==null||d.hide()},onEnterBack:()=>{console.log("onEnterBack",r.name),this.sectionWrapper&&this.sectionWrapper.setAttribute("data-active-section",r.name),this.sections.forEach((p,x)=>{p.style.pointerEvents=x===o?"auto":"none"}),r.effectNames.forEach(p=>{let x=this.effectRegistry[p];x&&x.reenterEffect&&x.reenterEffect()}),a||u.play(0),d==null||d.show()},onLeaveBack:()=>{console.log("onLeaveBack",r.name),this.sections.forEach((p,x)=>{p.style.pointerEvents=x===o?"auto":"none"}),r.effectNames.forEach(p=>{let x=this.effectRegistry[p];x&&x.exitEffect&&x.exitEffect()}),l||c.play(0),d==null||d.hide()},invalidateOnRefresh:!0,markers:window.IS_DEBUG_MODE});this.scrollTriggers.push(f)}),this.sectionWrapper&&this.sectionWrapper.setAttribute("data-active-section",this.config[0].name),this.stickyWrapper&&this.config.forEach(r=>{if(r.cursorSelector&&this.stickyWrapper){let o=this.stickyWrapper.querySelector(r.cursorSelector);if(o){gsap.set(o,{scale:0,rotationZ:-50,transformOrigin:"center center",opacity:0});let a=o.querySelector?o.querySelector(".cursor_content-wrap"):null;a&&gsap.set(a,{scale:0});let l=window.innerWidth/2,h=window.innerHeight/2;gsap.set(o,{x:l,y:h})}}})}destroy(){this.sectionControllers.forEach(e=>{var t;e.inTimeline.kill(),e.outTimeline.kill(),(t=e.cursorController)==null||t.destroy()}),this.scrollTriggers.forEach(e=>e.kill()),this.splitInstances.forEach(e=>e==null?void 0:e.revert()),this.abortController.abort(),this.cursorAbortControllers.forEach(e=>e.abort()),Object.values(this.effectRegistry).forEach(e=>e&&e.destroy&&e.destroy())}};function Tu(){let s=document.getElementById("supercharge"),e=document.querySelector(".section-home-hero");if(!s||!e){console.debug("Supercharge button or hero section not found");return}s.addEventListener("click",()=>{let t=e.getAttribute("data-supercharge");!t||t===""?e.setAttribute("data-supercharge","true"):e.removeAttribute("data-supercharge")})}window.addEventListener(dr,()=>{Ov(),Fv(),Nv(),Tu();try{document.fonts.ready.then(()=>{new va().init()})}catch(s){console.error("Error initializing delight section animator",s)}});function Nv(){let s=document.querySelectorAll(".scrub-intro_paragraph-wrapper"),e=document.querySelector(".scrub-intro_scroll-container"),t=document.querySelector(".scrub-intro_image-wrapper");if(!e){console.warn("Scroll container not found for intro scrub text");return}t&&gsap.to(t,{scrollTrigger:{trigger:e,start:"top 20%",end:"top top",scrub:!0},scale:.8,opacity:.5});let n=[],i=0,r=40;s.forEach((l,h)=>{let u=l.querySelector(".scrub-intro_paragraph");if(!u)return;let c=new SplitText(u,{type:"words,chars",tag:"span"}),d=c.chars,f=Math.max(d.length,r);n.push({split:c,paragraph:u,wrapper:l,charCount:d.length,effectiveCharCount:f}),i+=f,gsap.set(d,{opacity:.3}),gsap.set(l,{opacity:h===0?1:0})}),i>0&&(e.children[0].style.height=`${s.length*100}vh`);let o=gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"bottom bottom",scrub:.5}}),a=0;n.forEach(({split:l,paragraph:h,wrapper:u,charCount:c,effectiveCharCount:d},f)=>{let p=l.chars,x=f===n.length-1,v=f===0,m=d/i,b=gsap.timeline(),g=.05,_=.1,E=.7,M=.15,w=.003;v||b.to(u,{opacity:1,duration:m*g,ease:"power1.in"},0),b.to(p,{opacity:1,duration:m*_,stagger:{each:w,from:"start"},ease:"none"},v?0:m*g),b.to({},{duration:m*E},m*(v?_:g+_)),x||b.to(u,{opacity:0,duration:m*M,ease:"power1.out"},m*(v?_+E:g+_+E)),o.add(b,a),a+=m})}function Fv(){let s=".section_reveal-wrapper",e=document.querySelector(s);if(!e){console.warn(`Horizontal scroll section reveal wrapper not found: ${s}`);return}let t=e.children;function n(){gsap.set(e,{height:()=>Array.from(t).reduce((i,r)=>i+r.offsetHeight,0)})}n(),ScrollTrigger.addEventListener("refresh",()=>{gsap.delayedCall(.05,()=>{n()})})}function Ov(){let s="ignitewebsiteleadmagnetform",e='dialog[data-el="form-dialog"][open]',t='[data-form-el="success-message"]',n='[data-form-el="error-message"]';if(typeof MauticFormCallback=="undefined"&&(window.MauticFormCallback={}),window.MauticFormCallback[s]={onResponse:function(o){console.debug("Mautic form callback",{response:o});let a=document.querySelector(e),l=a==null?void 0:a.querySelector("form");if(!a||!l){console.error("Current form element not found in mautic response callback",{response:o});return}let h=a.querySelector(t),u=a.querySelector(n);return o.success&&(console.debug({successEl:h}),h&&(l.style.display="none",h.style.display="block"),setTimeout(()=>{a.close()},5e3)),o.errorMessage&&u&&(u.style.display="block"),!0}},typeof MauticSDKLoaded=="undefined"){window.MauticSDKLoaded=!0;var i=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.src="https://m.igniteagency.com/media/js/mautic-form.js?vd43a7f62",r.onload=function(){MauticSDK.onLoad()},i.appendChild(r),window.MauticDomain="https://m.igniteagency.com",window.MauticLang={submittingMessage:"Please wait..."}}else typeof MauticSDK!="undefined"&&MauticSDK.onLoad()}})();
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

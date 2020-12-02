!function(t){var i={};function e(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(s,o,function(i){return t[i]}.bind(null,o));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=9)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Ellipse=i.Circle=i.Body=void 0;i.Body=class{constructor(){this.kind="",this.mass=0,this.position=[0,0],this.velocity=[0,0],this.acceleration=[0,0],this.attractedTo="any",this.shape=new s}};class s{constructor(t=0){this.radius=0,this.radius=t}}i.Circle=s;i.Ellipse=class{constructor(t=0,i=0){this.horizontalRadius=0,this.verticalRadius=0,this.horizontalRadius=t,this.verticalRadius=i}}},function(t,i,e){"use strict";function s(t,i,e){const s=Math.PI/180*e,o=Math.cos(s),n=Math.sin(s);return[o*(i[0]-t[0])+n*(i[1]-t[1])+t[0],o*(i[1]-t[1])-n*(i[0]-t[0])+t[1]]}Object.defineProperty(i,"__esModule",{value:!0}),i.lineIntersection=i.ellipseCircle=i.ellipseEllipse=i.circleCircle=i.rotate=i.move=void 0,i.move=function(t,i,e,o){if((0!==i[1]||0!==i[0])&&o>0&&0!=e){const n=s([0,0],[0,e*(10/o)],180*Math.atan2(i[0],i[1])/Math.PI);t[0]+=n[0],t[1]+=n[1]}},i.rotate=s,i.circleCircle=function(t,i,e,s,o,n){const h=s-t,a=o-i;return!(Math.sqrt(a*a+h*h)>e+n)};const o=new Array,n=new Array;for(let t=0;t<=10;t++){const i=4<<t;o.push(.5/Math.cos(4*Math.acos(0)/i)),n.push(.5/(Math.cos(2*Math.acos(0)/i)*Math.cos(2*Math.acos(0)/i)))}function h(t,i,e,s,h,a,r){for(let d=1;d<=10;d++){const u=(e+h)*o[d],p=(s+a)*o[d],f=t-u,g=i-p;if(f*f+g*g<=r)return!0;const y=h-u,m=a-p;if(f*y+g*m>=0&&f*y+g*m<=y*y+m*m&&(g*y-f*m>=0||r*(y*y+m*m)>=(g*y-f*m)*(g*y-f*m)))return!0;var l=e-u,c=s-p;if(f*l+g*c>=0&&f*l+g*c<=l*l+c*c&&(g*l-f*c<=0||r*(l*l+c*c)>=(g*l-f*c)*(g*l-f*c)))return!0;const b=(e+u)*n[d],w=(s+p)*n[d];if((b-t)*(b-t)+(w-i)*(w-i)<r){h=u,a=p;continue}const v=u-b+u,_=p-w+p;if((v-t)*(v-t)+(_-i)*(_-i)<r){e=u,s=p;continue}const D=b-u,x=w-p;if(g*D-f*x<=0||r*(D*D+x*x)>(g*D-f*x)*(g*D-f*x))if(f*D+g*x>0){if(Math.abs(f*D+g*x)<=D*D+x*x||(t-b)*(e-b)+(i-w)*(s-w)>=0){h=u,a=p;continue}}else if(-(f*D+g*x)<=D*D+x*x||(t-v)*(h-v)+(i-_)*(a-_)>=0){e=u,s=p;continue}return!1}return!1}i.ellipseEllipse=function(t,i,e,s,o,n,a,r){const l=Math.abs(o-t)*r,c=Math.abs(n-i)*a;e*=r;const d=a*r;return l*l+((s*=a)-c)*(s-c)<=d*d||(e-l)*(e-l)+c*c<=d*d||l*s+c*e<=e*s||(l*s+c*e-e*s)*(l*s+c*e-e*s)<=d*d*(e*e+s*s)&&l*e-c*s>=-s*s&&l*e-c*s<=e*e||((l-e)*(l-e)+(c-s)*(c-s)<=d*d||l<=e&&c-d<=s||c<=s&&l-d<=e)&&h(l,c,e,0,0,s,d*d)},i.ellipseCircle=function(t,i,e,s,o,n,a){const r=Math.abs(o-t),l=Math.abs(n-i);return r*r+(s-l)*(s-l)<=a*a||(e-r)*(e-r)+l*l<=a*a||r*s+l*e<=e*s||(r*s+l*e-e*s)*(r*s+l*e-e*s)<=a*a*(e*e+s*s)&&r*e-l*s>=-s*s&&r*e-l*s<=e*e||((r-e)*(r-e)+(l-s)*(l-s)<=a*a||r<=e&&l-a<=s||l<=s&&r-a<=e)&&h(r,l,e,0,0,s,a*a)},i.lineIntersection=function(t,i,e,s,o,n,h,a){const r={x:null,y:null,onLine1:!1,onLine2:!1},l=(a-n)*(e-t)-(h-o)*(s-i);if(0!==l){let c=i-n,d=t-o;const u=(e-t)*c-(s-i)*d;c=((h-o)*c-(a-n)*d)/l,d=u/l,r.x=t+c*(e-t),r.y=i+c*(s-i),c>0&&c<1&&(r.onLine1=!0),d>0&&d<1&&(r.onLine2=!0)}return r}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Bullet=void 0;const s=e(1),o=e(0);i.Bullet=class{constructor(t,i,e){this.finished=!1,this.body={kind:"Bullet",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:[],shape:new o.Circle(5)},this.speed=10,this.range=150,this.lastUpdated=0,this.game=t,this.startPosition=[i[0],i[1]],this.body.position=[i[0],i[1]],this.direction=[e[0],e[1]]}update(t){s.move(this.body.position,this.direction,this.speed,t-this.lastUpdated),this.lastUpdated=t;Math.abs(Math.hypot(this.body.position[0]-this.startPosition[0],this.body.position[1]-this.startPosition[1]))>this.range&&(this.finished=!0)}render(){const t=this.game.context;t.save(),t.translate(this.body.position[0],this.body.position[1]),t.fillStyle="white",t.fillRect(0,0,5,5),t.restore()}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.moveSound=i.laserSound=i.collisionSound=i.explosionSound=void 0,i.explosionSound=function(){},i.collisionSound=function(){},i.laserSound=function(){};i.moveSound=function(){}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Debris=void 0;const s=e(0),o=e(2),n=e(5),h=e(3);class a{constructor(t,i,e,o){this.game=t,this.finished=!1,this.body={kind:"Debris",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:["Debris"],shape:new s.Circle(10)},this.rotationSpeed=-360/.7,this.magneticRotationSpeed=-900,this.angle=0,this.body.position=[i[0],i[1]],this.body.velocity=[e[0],e[1]],this.color=o,this.lastUpdated=t.now}get isMagnetic(){return this.rotationSpeed===this.magneticRotationSpeed}update(t){const i=(t-this.lastUpdated)/100,e=this.body,r=(Math.abs(e.acceleration[0])+Math.abs(e.acceleration[1]))/2*4;this.angle+=this.rotationSpeed/(10/i)*(1+r);let l=e.shape instanceof s.Circle?4*e.shape.radius:0;const c=this.game.logicalWidth,d=this.game.logicalHeight;if((e.position[0]<-l&&e.velocity[0]<0||e.position[1]<-l&&e.velocity[1]<0||e.position[0]>c+l&&e.velocity[0]>0||e.position[1]>d+l&&e.velocity[1]>0)&&(this.finished=!0),this.collisions&&this.collisions.length&&!this.finished){for(const t of this.collisions){if(t instanceof a&&t.body){t.finished=!0;const i=new n.Explosion(this.game,[t.body.position[0],t.body.position[1]],0,!1,t.color,13,h.collisionSound);i.duration=110,this.game.entities.push(i),e.velocity[0]=(e.velocity[0]+t.body.velocity[0])/2,e.velocity[1]=(e.velocity[1]+t.body.velocity[1])/2}t instanceof o.Bullet&&(this.game.score+=this.isMagnetic?3:1,t.finished=!0,this.finished=!0,this.game.entities.push(new n.Explosion(this.game,[e.position[0],e.position[1]])))}this.rotationSpeed=this.magneticRotationSpeed,e.attractedTo=["Ship"]}this.lastUpdated=t}render(){const t=this.game.context;t.save(),t.translate(this.body.position[0],this.body.position[1]),t.rotate(this.angle*(Math.PI/180)),t.fillStyle=this.color,t.fillRect(-2.5,-12.5,5,25),t.fillRect(-12.5,-2.5,25,5),t.restore()}drawRect(t){this.game.context.fillRect(t[0]-2.5,t[1]-2.5,5.5,5.5)}}i.Debris=a},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Explosion=void 0;const s=e(1),o=e(2),n=e(3);i.Explosion=class{constructor(t,i,e=0,h=!0,a="white",r=24,l=n.explosionSound){this.game=t,this.numberOfPieces=r,this.soundFunction=l,this.finished=!1,this.duration=150,this.pieces=new Array,this.color="white",this.game=t,this.start=t.now+e,this.position=[i[0],i[1]],this.color=a;for(let t=0;t<this.numberOfPieces;t++)this.pieces.push([2*Math.random()-1,2*Math.random()-1]);if(h)for(let t=0;t<3;t++){var c=s.rotate([0,0],[0,-1],120*t+180);this.game.entities.push(new o.Bullet(this.game,[this.position[0],this.position[1]],[c[0],c[1]]))}try{this.soundFunction()}catch(t){}}update(t){t-this.start>this.duration&&(this.finished=!0)}render(){if(this.start<this.game.now){const i=(this.game.now-this.start)/5,e=this.game.context;for(var t of(e.save(),e.translate(this.position[0],this.position[1]),e.fillStyle=this.color,this.pieces))e.fillRect(t[0]*i-5,t[1]*i-5,5,5);e.restore()}}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Ship=void 0;const s=e(1),o=e(2),n=e(0),h=e(4),a=e(5),r=e(3),l=e(7),c=e(8);i.Ship=class{constructor(t){this.game=t,this.body={kind:"Ship",mass:1200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:"none",shape:new n.Circle(10)},this.finished=!1,this.speed=4,this.shieldElements=8,this.gunRotationSpeed=-90,this.depletionDuration=900,this.chargingDuration=600,this.maxBullets=6,this.bulletInterval=75,this.shieldDiameter=32,this.shieldEllipseFactor=1.6,this.bulletsRemaining=0,this.bulletPosition=[0,0],this.bulletDirection=[0,0],this.gunAngle=0,this.windowIndex=0,this.state="Ready",this.buttonDown=!1,this.percentageCharged=100,this.currentDimmedShieldlementIndex=0,this.explosionStart=0,this.timeBulletLastFired=t.now,this.windowIndexLastChangedTime=t.now,this.lastUpdated=t.now,this.buttonDownTime=t.now,this.dimmedShieldlementLastChanged=t.now,this.moveSoundLastInvoke=t.now,this.body.position=[t.logicalWidth/2,t.logicalHeight/2],this.rects=[[-5,-8,10,5],[-10,-3,20,5],[-20,2,40,5],[-10,7,20,5]],this.body.shape=new n.Ellipse(this.shieldDiameter,this.shieldDiameter/this.shieldEllipseFactor)}constrainToScreen(){const t=this.body.position,i=this.game.logicalWidth,e=this.game.logicalHeight;t[0]>i?t[0]=i:t[0]<0&&(t[0]=0),t[1]>e?t[1]=e:t[1]<0&&(t[1]=0)}update(t){const i=this.game.controller;if((0!==i.direction[0]||0!==i.direction[1])&&t-this.moveSoundLastInvoke>200&&(r.moveSound(),this.moveSoundLastInvoke=t),s.move(this.body.position,i.direction,this.speed,t-this.lastUpdated),this.constrainToScreen(),this.bulletsRemaining&&t-this.timeBulletLastFired>this.bulletInterval&&(this.bulletsRemaining--,this.timeBulletLastFired=t,r.laserSound(),this.game.entities.push(new o.Bullet(this.game,[this.bulletPosition[0],this.bulletPosition[1]],[this.bulletDirection[0],this.bulletDirection[1]]))),0===i.direction[1]&&0===i.direction[0]||(this.gunAngle+=this.gunRotationSpeed/(t-this.lastUpdated)),t-this.windowIndexLastChangedTime>100&&(this.windowIndexLastChangedTime=t,this.windowIndex+=1,this.windowIndex>7&&(this.windowIndex=0)),!i.buttonDown||"Ready"!==this.state&&"Charging"!==this.state)if(!i.buttonDown&&this.buttonDown)this.buttonDown=!1;else if("Depleted"===this.state&&t-this.buttonDownTime>this.depletionDuration)this.state="Charging";else if("Charging"===this.state){const i=t-this.buttonDownTime-this.depletionDuration;this.percentageCharged=i/(this.chargingDuration/100),this.percentageCharged>100&&(this.percentageCharged=100,this.state="Ready")}else"Exploding"===this.state&&(this.explosion&&!this.explosion.finished||(this.explosion=new a.Explosion(this.game,[this.body.position[0],this.body.position[1]],0,!1),this.game.entities.push(this.explosion)),this.explosion.body&&(this.explosion.body.position[0]=this.body.position[0],this.explosion.body.position[1]=this.body.position[1]),t-this.explosionStart>5e3&&(this.explosion.duration=400,this.finished=!0,this.game.score>=this.game.hiscore&&(this.game.hiscore=this.game.score,this.game.hiscoreName="??????"),setTimeout(()=>this.game.initializeEntities(),5e3)));else this.buttonDown=!0,this.deplete(t,this.maxBullets);if(t-this.dimmedShieldlementLastChanged>30&&(this.dimmedShieldlementLastChanged=t,this.currentDimmedShieldlementIndex--,this.currentDimmedShieldlementIndex<0&&(this.currentDimmedShieldlementIndex=this.shieldElements)),this.collisions&&this.collisions.length&&"Exploding"!==this.state&&!this.finished)for(const i of this.collisions)(i instanceof h.Debris||i instanceof l.Ufo||i instanceof c.Laser)&&i.body&&("Depleted"===this.state||"Charging"===this.state?(this.state="Exploding",this.explosionStart=t,this.body.mass=0):i instanceof l.Ufo?this.game.score+=10:i instanceof h.Debris&&(this.game.score+=i.isMagnetic?3:1),i.finished=!0,this.game.entities.push(new a.Explosion(this.game,[i.body.position[0],i.body.position[1]])),"Exploding"!==this.state&&this.deplete(t,0));"Depleted"===this.state||"Charging"===this.state?this.body.shape=new n.Ellipse(this.shieldDiameter/2,this.shieldDiameter/2/this.shieldEllipseFactor):this.body.shape=new n.Ellipse(this.shieldDiameter,this.shieldDiameter/this.shieldEllipseFactor),this.lastUpdated=t}deplete(t,i){this.state="Depleted",this.bulletsRemaining=i,this.buttonDownTime=t,this.percentageCharged=0}render(){const t=this.game.context;for(var i of(t.save(),t.translate(this.body.position[0],this.body.position[1]),t.fillStyle="Exploding"===this.state?"white":"red",this.rects))t.fillRect(i[0],i[1],i[2],i[3]+.5);if(t.fillStyle="black",t.fillRect(5*this.windowIndex-20,2,5,5.5),"Exploding"!==this.state){const i=this.shieldElements;let e=[0,this.shieldDiameter];e=s.rotate([0,0],e,this.gunAngle);for(let o=0;o<i;o++)e=s.rotate([0,0],e,360/i),0===o?(t.fillStyle="white",this.bulletDirection=[e[0]-2.5,e[1]/this.shieldEllipseFactor],this.bulletPosition=[this.body.position[0]+e[0]-2.5,this.body.position[1]+e[1]/this.shieldEllipseFactor]):"Charging"===this.state&&(i-o)/(i/100)>this.percentageCharged?t.fillStyle="rgba(128, 128, 128, "+(o===this.currentDimmedShieldlementIndex?"0.3":"1")+")":t.fillStyle="rgba(100, 149, 237, "+(o===this.currentDimmedShieldlementIndex?"1":"0.8")+")",("Depleted"!==this.state||0===o&&this.bulletsRemaining>0)&&t.fillRect(e[0]-2.5,e[1]/this.shieldEllipseFactor,5,5)}t.restore()}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Ufo=void 0;const s=e(0),o=e(2),n=e(5),h=e(3),a=e(4),r=e(8),l=e(1),c=e(6);i.Ufo=class{constructor(t,i,e,o){this.game=t,this.finished=!1,this.body={kind:"Ufo",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:[],shape:new s.Circle(10)},this.rects=[[-20,-4,40,5],[-15,0,30,5]],this.body.position=[i[0],i[1]],this.body.velocity=[e[0]<0?-12:12,e[1]<0?-12:12],this.color=o,this.lastUpdated=t.now,this.timeLastFired=t.now}update(t){this.lastUpdated;const i=this.body,e=Math.sin(t/20/Math.PI)/2;this.body.position[0]+=e;let l=i.shape instanceof s.Circle?4*i.shape.radius:0;const d=this.game.logicalWidth,u=this.game.logicalHeight;if((i.position[0]<-l&&i.velocity[0]<0||i.position[1]<-l&&i.velocity[1]<0||i.position[0]>d+l&&i.velocity[0]>0||i.position[1]>u+l&&i.velocity[1]>0)&&(this.finished=!0),this.collisions&&this.collisions.length&&!this.finished)for(const t of this.collisions){if(t instanceof a.Debris&&t.body){this.finished=!0;const t=new n.Explosion(this.game,[i.position[0],i.position[1]],0,!1,this.color,13,h.collisionSound);t.duration=110,this.game.entities.push(t)}t instanceof o.Bullet&&(this.game.score+=10,t.finished=!0,this.finished=!0,this.game.entities.push(new n.Explosion(this.game,[i.position[0],i.position[1]])))}if(!this.finished&&t-this.timeLastFired>200){const e=this.game.entities.find(t=>t instanceof c.Ship),s=this.shoot(e);if(s[0]||s[1]){this.timeLastFired=t;let o=25;(null==e?void 0:e.body)&&e.body&&this.body.position[0]>e.body.position[0]&&(o=-25),h.laserSound(),this.game.entities.push(new r.Laser(this.game,[i.position[0]+o,i.position[1]],s))}}this.lastUpdated=t}shoot(t){const i=[0,0];if(t&&!t.finished&&t.body){const e=this.body,s=t.body,o=l.lineIntersection(e.position[0],e.position[1],e.position[0]+e.velocity[0],e.position[1]+e.velocity[1],s.position[0],s.position[1],s.position[0]+e.velocity[1],s.position[1]-e.velocity[0]);if(o.x&&o.y){const t=Math.hypot(o.x-e.position[0],o.y-e.position[1]),n=Math.hypot(o.x-s.position[0],o.y-s.position[1]);(t<100||n<20)&&(i[0]=e.position[0]<s.position[0]?1:-1,i[1]=e.position[1]<s.position[1]?1:-1)}}return i}render(){const t=this.game.context;for(var i of(t.save(),t.translate(this.body.position[0],this.body.position[1]),t.fillStyle=this.color,this.rects))t.fillRect(i[0],i[1],i[2],i[3]+.5);t.restore()}drawRect(t){this.game.context.fillRect(t[0]-2.5,t[1]-2.5,5.5,5.5)}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Laser=void 0;const s=e(0),o=e(2),n=e(5),h=e(3),a=e(4);i.Laser=class{constructor(t,i,e){this.game=t,this.finished=!1,this.body={kind:"Laser",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:[],shape:new s.Circle(10)},this.color="white",this.lastUpdated=t.now,this.body.position=[i[0],i[1]];this.body.velocity=[e[0]<0?-36:36,e[1]<0?-36:36]}update(t){this.lastUpdated;const i=this.body;let e=i.shape instanceof s.Circle?4*i.shape.radius:0;const r=this.game.logicalWidth,l=this.game.logicalHeight;if((i.position[0]<-e&&i.velocity[0]<0||i.position[1]<-e&&i.velocity[1]<0||i.position[0]>r+e&&i.velocity[0]>0||i.position[1]>l+e&&i.velocity[1]>0)&&(this.finished=!0),this.collisions&&this.collisions.length&&!this.finished)for(const t of this.collisions){if(t instanceof a.Debris&&t.body){this.finished=!0;const t=new n.Explosion(this.game,[i.position[0],i.position[1]],0,!1,this.color,13,h.collisionSound);t.duration=110,this.game.entities.push(t)}t instanceof o.Bullet&&(t.finished=!0,this.finished=!0,this.game.entities.push(new n.Explosion(this.game,[i.position[0],i.position[1]])))}this.lastUpdated=t}render(){const t=this.game.context,i=this.body.position,e=this.body.velocity,s=e[0]>0?1:-1,o=e[1]>0?1:-1;t.save(),t.translate(i[0],i[1]),t.fillStyle=this.color;for(let i=0;i<6;i++)t.fillRect(i*s*5-2.5,i*o*5-2.5,5,5.5);t.restore()}}},function(t,i,e){t.exports=e(10)},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e(11);new(e(12).Game)(document.body)},function(t,i,e){},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Game=void 0;const s=e(6),o=e(13),n=e(14),h=e(15),a=e(16);i.Game=class{constructor(t){this.logicalWidth=800,this.logicalHeight=600,this.entities=[],this._now=0,this._timePauzed=0,this._totalTimeInPauze=0,this._pauzed=!1,this.score=0,this.hiscore=0,this.hiscoreName="??????",this.canvas=document.createElement("canvas"),document.ontouchmove=function(t){t.preventDefault()},document.body.addEventListener("touchmove",(function(t){t.preventDefault()}),{passive:!1,capture:!1}),t.appendChild(this.canvas),this.context=this.canvas.getContext("2d")||new CanvasRenderingContext2D,this.controller=new o.Controller(this.togglePauze.bind(this)),this.initializeScalingAndPositioning(),this.initializeGame()}get now(){return this._now}initializeScalingAndPositioning(){const t=this;function i(){const i=t.canvas,e=t.logicalHeight,s=t.logicalWidth;i.width=document.body.clientWidth,i.height=document.body.clientHeight;const o=i.width/s,n=i.height/e,h=o<n?o:n;t.context.translate((i.width-s*h)/2,0),t.context.scale(h,h),t.context.beginPath(),t.context.rect(0,0,s,e),t.context.clip()}window.addEventListener("resize",i),i()}initializeGame(){const t=this.context,i=this.logicalHeight,e=this.logicalWidth,s=this.entities,o=this.controller,n=this;this.initializeEntities(),function h(){if(window.requestAnimationFrame(h),t.clearRect(-1,-1,e+2,i+2),n._pauzed)s.forEach(t=>t.render());else{n._now=Date.now()-n._totalTimeInPauze,o.update(n._now),s.forEach(t=>t.update(n._now)),s.forEach(t=>t.render());const t=s.filter(t=>!t.finished);for(;s.pop(););s.push(...t)}}()}togglePauze(){this._pauzed=!this._pauzed,this._pauzed?this._timePauzed=Date.now():this._totalTimeInPauze+=Date.now()-this._timePauzed}initializeEntities(){for(;this.entities.pop(););this._now=Date.now(),this._totalTimeInPauze=0,this._pauzed=!1,this.entities.push(new h.Physics(this)),this.entities.push(new a.Hud(this)),this.entities.push(new s.Ship(this)),this.entities.push(new n.DebrisField(this))}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.GamepadConfiguration=i.Controller=void 0;i.Controller=class{constructor(t){this._direction=[0,0],this._buttonDown=!1,this._upKeyDown=!1,this._downKeyDown=!1,this._leftKeyDown=!1,this._rightKeyDown=!1,this._anyUserInteraction=!1,this._firstInterActionListeners=[],this._keyboardBuffer="",this._activeController="keyboard",this._leftTouchID=-1,this._rightTouchID=-1,this._secondRightTouchID=-1,this._leftTouchPos=[0,0],this._leftTouchStartPos=[0,0],this._leftVector=[0,0],this._touchable="createTouch"in document,this._isMacLike=/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),this.gamepadConfiguration={"USB Gamepad  (STANDARD GAMEPAD Vendor: 0079 Product: 0011)":{steering:"buttons",horizontalAxis:0,verticalAxis:0,leftButton:14,rightButton:15,upButton:12,downButton:13,fireButton:1},"SPEEDLINK COMPETITION PRO (Vendor: 0738 Product: 2217)":{steering:"axes",horizontalAxis:0,verticalAxis:1,leftButton:0,rightButton:0,upButton:0,downButton:0,fireButton:0}},this._pauzeHandler=t,document.addEventListener("keydown",this.keyDownHandler.bind(this)),document.addEventListener("keyup",this.keyUpHandler.bind(this)),this._touchable&&(window.addEventListener("touchstart",this.onTouchStart.bind(this),!1),window.addEventListener("touchmove",this.onTouchMove.bind(this),!1),window.addEventListener("touchend",this.onTouchEnd.bind(this),!1))}onTouchStart(t){let i=!1,e=!1;for(var s=0,o=t.touches.length;s<o;s++)t.touches[s].identifier===this._leftTouchID?i=!0:t.touches[s].identifier===this._rightTouchID&&(e=!0);i||(this._leftTouchID=-1),e||(this._rightTouchID=-1);for(s=0,o=t.changedTouches.length;s<o;s++){var n=t.changedTouches[s];this._leftTouchID<0&&n.clientX<window.innerWidth/2?(this._leftTouchID=n.identifier,this._leftTouchStartPos=[n.clientX,n.clientY],this._leftVector=[0,0]):this._rightTouchID<0&&(this._rightTouchID=n.identifier,this._buttonDown=!0)}this._touches=t.touches}onTouchMove(t){t.preventDefault();for(var i=0,e=t.changedTouches.length;i<e;i++){var s=t.changedTouches[i];if(this._leftTouchID===s.identifier){this._direction=[(s.clientX-this._leftTouchStartPos[0])/100,(s.clientY-this._leftTouchStartPos[1])/100];break}}this._touches=t.touches}onTouchEnd(t){this._touches=t.touches;for(var i=0,e=t.changedTouches.length;i<e;i++){var s=t.changedTouches[i];this._leftTouchID===s.identifier?(this._leftTouchID=-1,this._direction=[0,0]):this._rightTouchID===s.identifier&&(this._rightTouchID=-1,this._buttonDown=!1)}}addFirstInterActionListener(t){this._anyUserInteraction?t():this._firstInterActionListeners.push(t)}handleInterAction(){if(!this._anyUserInteraction){this._anyUserInteraction=!0;for(let t of this._firstInterActionListeners)t()}}update(t){[...navigator.getGamepads()].filter(t=>t&&t.connected).forEach(t=>{if(t&&this.gamepadConfiguration[t.id]){const i=this.gamepadConfiguration[t.id];"buttons"===i.steering?(this._leftKeyDown=t.buttons[i.leftButton].pressed,this._rightKeyDown=t.buttons[i.rightButton].pressed,this._upKeyDown=t.buttons[i.upButton].pressed,this._downKeyDown=t.buttons[i.downButton].pressed):(this._leftKeyDown=-1===t.axes[i.horizontalAxis],this._rightKeyDown=1===t.axes[i.horizontalAxis],this._upKeyDown=-1===t.axes[i.verticalAxis],this._downKeyDown=1===t.axes[i.verticalAxis]),(this._leftKeyDown||this._rightKeyDown||this._upKeyDown||this._downKeyDown||t.buttons[i.fireButton].pressed)&&(this._activeController=t.id),this._activeController===t.id&&(this._buttonDown=t.buttons[i.fireButton].pressed,this.updateDirection())}})}get keyboardBuffer(){const t=this._keyboardBuffer;return this._keyboardBuffer="",t}get direction(){return this._direction}get buttonDown(){return this._buttonDown}keyDownHandler(t){this.handleInterAction(),"ArrowUp"===t.key&&(this._upKeyDown=!0),"ArrowLeft"===t.key&&(this._leftKeyDown=!0),"ArrowDown"===t.key&&(this._downKeyDown=!0),"ArrowRight"===t.key&&(this._rightKeyDown=!0),this._isMacLike||"Control"!==t.key||(this._buttonDown=!0),this._isMacLike&&"Alt"===t.key&&(this._buttonDown=!0),(this._leftKeyDown||this._rightKeyDown||this._upKeyDown||this._downKeyDown||this.buttonDown)&&(this._activeController="keyboard"),this.updateDirection()}keyUpHandler(t){"Escape"===t.key&&this._pauzeHandler(),"ArrowUp"===t.key&&(this._upKeyDown=!1),"ArrowLeft"===t.key&&(this._leftKeyDown=!1),"ArrowDown"===t.key&&(this._downKeyDown=!1),"ArrowRight"===t.key&&(this._rightKeyDown=!1),this._isMacLike||"Control"!==t.key||(this._buttonDown=!1),this._isMacLike&&"Alt"===t.key&&(this._buttonDown=!1),1==t.key.length&&/^[a-z0-9]+$/i.test(t.key)&&(this._keyboardBuffer+=t.key),this.updateDirection()}updateDirection(){this.direction[0]=0,this.direction[1]=0,this._leftKeyDown&&(this.direction[0]=-1),this._rightKeyDown&&(this.direction[0]=1),this._upKeyDown&&(this.direction[1]=-1),this._downKeyDown&&(this.direction[1]=1)}};i.GamepadConfiguration=class{constructor(){this.steering="buttons",this.horizontalAxis=0,this.verticalAxis=0,this.leftButton=0,this.rightButton=0,this.upButton=0,this.downButton=0,this.fireButton=0}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.DebrisField=void 0;const s=e(4),o=e(7);i.DebrisField=class{constructor(t){this.finished=!1,this.minimumInterval=200,this.randomInterval=200,this.colors=["green","yellow","purple","magenta","cyan","blue","red","orange"],this.nextTimeToCreateDebris=0,this.lastUpdated=0,this.game=t}update(t){if(this.nextTimeToCreateDebris<t){this.nextTimeToCreateDebris=t+(Math.random()*this.randomInterval+this.minimumInterval);const i=this.getStartPosition(),e=this.getDirection(i);6!==Math.floor(Math.random()*Math.floor(25))||this.ufo&&!this.ufo.finished?this.game.entities.push(new s.Debris(this.game,i,e,this.colors[Math.floor(Math.random()*this.colors.length)])):(this.ufo=new o.Ufo(this.game,i,e,this.colors[Math.floor(Math.random()*this.colors.length)]),this.game.entities.push(this.ufo))}this.lastUpdated=t}render(){}getDirection(t){let i=[0,0];for(;0===i[0]||0===i[1]||isNaN(i[0])||isNaN(i[1]);){i=this.getStartPosition(),i[0]-=t[0],i[1]-=t[0];let e=Math.abs(i[1])/Math.abs(i[0]);Math.abs(i[0])<Math.abs(i[1])&&(e=Math.abs(i[0])/Math.abs(i[1])),i[0]=i[0]*e/100,i[1]=i[1]*e/100}return i}getStartPosition(){const t=[0,0],i=this.game.logicalWidth+60,e=this.game.logicalHeight+60,s=2*i+2*e,o=Math.floor(Math.random()*s);return o<i?(t[0]=o,t[1]=0):o<i+e?(t[0]=i,t[1]=o-i):o<2*i+e?(t[0]=o-(i+e),t[1]=e):(t[0]=0,t[1]=o-(2*i+e)),t[0]-=30,t[1]-=30,t}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Physics=void 0;const s=e(0),o=e(1);i.Physics=class{constructor(t){this.finished=!1,this.g=1.75,this.softening=.15,this.game=t,this.lastUpdated=t.now}update(t){const i=(t-this.lastUpdated)/100;this.applyGravity(i),this.calculateCollisions(),this.lastUpdated=t}applyGravity(t){for(const i of this.game.entities)if(i.body&&"none"!==i.body.attractedTo){const e=i.body;e.position[0]+=e.velocity[0]*t,e.position[1]+=e.velocity[1]*t,e.velocity[0]+=e.acceleration[0]*t,e.velocity[1]+=e.acceleration[1]*t;let s=0,o=0;for(const t of this.game.entities)if(t!==i&&t.body){const i=t.body;if("any"===e.attractedTo||e.attractedTo.includes&&e.attractedTo.includes(i.kind)){const t=i.position[0]-e.position[0],n=i.position[1]-e.position[1],h=t*t+n*n,a=this.g*i.mass/(h*Math.sqrt(h+this.softening));s+=t*a,o+=n*a}}e.acceleration[0]=s,e.acceleration[1]=o}}calculateCollisions(){for(const t of this.game.entities)t.collisions=this.game.entities.filter(i=>this.collide(t,i))}collide(t,i){let e=!1;if(t!==i&&t.body&&i.body){const n=t.body,h=i.body;n.shape instanceof s.Circle&&h.shape instanceof s.Circle?e=o.circleCircle(n.position[0],n.position[1],n.shape.radius,h.position[0],h.position[1],h.shape.radius):n.shape instanceof s.Ellipse&&h.shape instanceof s.Ellipse?e=o.ellipseEllipse(n.position[0],n.position[1],n.shape.horizontalRadius,n.shape.verticalRadius,h.position[0],h.position[1],h.shape.horizontalRadius,h.shape.verticalRadius):n.shape instanceof s.Circle&&h.shape instanceof s.Ellipse?e=o.ellipseCircle(h.position[0],h.position[1],h.shape.horizontalRadius,h.shape.verticalRadius,n.position[0],n.position[1],n.shape.radius):n.shape instanceof s.Ellipse&&h.shape instanceof s.Circle&&(e=o.ellipseCircle(n.position[0],n.position[1],n.shape.horizontalRadius,n.shape.verticalRadius,h.position[0],h.position[1],h.shape.radius))}return e}render(){}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Hud=void 0;const s=e(17),o=e(6);i.Hud=class{constructor(t){this.finished=!1,this.colorTable=[],this.inputIndex=0,this.animationIndex=5,this.game=t,this.game.score=0,this.inputIndex=5,this.animationLastUpdate=t.now,this.game.hiscoreName.indexOf("?")>-1&&(this.inputIndex=this.game.hiscoreName.indexOf("?")),this.resetColorTable()}resetColorTable(){this.colorTable=new Array(18),this.colorTable[0]="green",this.colorTable[5]="white",this.colorTable[6]="green",this.colorTable[13]="red"}update(t){const i=this.game.controller.keyboardBuffer;if("??????"===this.game.hiscoreName&&(this.inputIndex=0),i){const t=i.substr(i.length-1,1);this.game.hiscoreName=(this.game.hiscoreName.substr(0,this.inputIndex)+t).padEnd(6,"?"),this.inputIndex<5&&this.inputIndex++}this.resetColorTable(),this.game.entities.find(t=>t instanceof o.Ship)||(this.colorTable[this.animationIndex]="transparent",this.colorTable[this.animationIndex+1]="green",t-this.animationLastUpdate>50&&(this.animationLastUpdate=t,this.animationIndex++,this.animationIndex>11&&(this.animationIndex=5)))}render(){const t=this.game.context,i=this.game.logicalHeight,e=(this.game.logicalWidth,i-50),o=`${this.game.hiscore.toString().padStart(5,"0")}>${this.game.hiscoreName} ${this.game.score.toString().padStart(5,"0")}`;s.renderText(o,"green",5,t,[50,e],this.colorTable)}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.renderText=void 0;const s=new Uint8Array([124,198,198,198,198,198,124,0,24,56,24,24,24,24,60,0,120,204,24,48,96,192,252,0,124,198,6,60,6,198,124,0,204,204,204,254,12,12,12,0,254,192,192,124,6,198,124,0,124,198,192,252,198,198,124,0,254,6,12,24,48,96,192,0,124,198,198,124,198,198,124,0,124,198,198,126,6,198,124,0,0,24,12,254,12,24,0,0,60,102,12,24,24,0,24,0,56,108,198,198,254,198,198,0,252,198,198,252,198,198,252,0,124,198,192,192,192,198,124,0,252,198,198,198,198,198,252,0,254,192,192,248,192,192,254,0,254,192,192,248,192,192,192,0,124,198,192,192,206,198,126,0,198,198,198,254,198,198,198,0,60,24,24,24,24,24,60,0,6,6,6,6,6,198,124,0,198,204,216,240,216,204,198,0,192,192,192,192,192,192,254,0,198,238,254,214,198,198,198,0,198,230,246,254,222,206,198,0,124,198,198,198,198,198,124,0,252,198,198,252,192,192,192,0,124,198,198,198,222,204,118,0,252,198,198,252,216,204,198,0,124,198,192,124,6,198,124,0,126,24,24,24,24,24,24,0,198,198,198,198,198,198,124,0,198,198,198,198,198,108,56,0,198,198,198,214,254,238,198,0,198,198,108,56,108,198,198,0,102,102,102,60,24,24,24,0,126,6,12,24,48,96,126,0,0,0,0,126,0,0,0,0,0,0,124,0,124,0,0,0,0,0,0,0,0,56,56,0,0,0,0,0,0,0,0,0,0,24,0,126,0,24,0,0,0,102,60,24,60,102,0,0,0,24,24,126,24,24,0,0]),o={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,">":10,"?":11,a:12,b:13,c:14,d:15,e:16,f:17,g:18,h:19,i:20,j:21,k:22,l:23,m:24,n:25,o:26,p:27,q:28,r:29,s:30,t:31,u:32,v:33,w:34,x:35,y:36,z:37,"-":38,"=":39,".":40," ":41,"/":42,"*":43,"+":44};i.renderText=function(t,i,e,n,h,a){n.save(),n.fillStyle=i,n.translate(Math.floor(h[0]),Math.floor(h[1]));for(let i of Array.from(t).map((t,i)=>[i,o[t]]||!1)){const o=8*i[0]*e;a&&a.length===t.length&&a[i[0]]&&(n.fillStyle=a[i[0]]);for(let t=0;t<8;t++){const h=s[t+8*i[1]];for(let i=0;i<8;i++){const s=i<7&&(h&Math.pow(2,i+1))===Math.pow(2,i+1);(h&Math.pow(2,i))===Math.pow(2,i)&&(n.fillRect((7-i)*e+o-(s?e:0),t*e,e*(s?2:1),e),n.fillRect((7-i)*e+o,t*e,e,e))}}}n.restore()}}]);
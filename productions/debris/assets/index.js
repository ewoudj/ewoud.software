var X=Object.defineProperty;var Y=(r,t,i)=>t in r?X(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var o=(r,t,i)=>Y(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&e(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();function W(r,t,i,e){if((t[1]!==0||t[0]!==0)&&e>0&&i!=0){const s=10/e,n=180*Math.atan2(t[0],t[1])/Math.PI,h=A([0,0],[0,i*s],n);r[0]+=h[0],r[1]+=h[1]}}function A(r,t,i){const e=Math.PI/180*i,s=Math.cos(e),n=Math.sin(e);return[s*(t[0]-r[0])+n*(t[1]-r[1])+r[0],s*(t[1]-r[1])-n*(t[0]-r[0])+r[1]]}function tt(r,t,i,e,s,n){const h=e-r,l=s-t;return!(Math.sqrt(l*l+h*h)>i+n)}const G=10,K=new Array,k=new Array;for(let r=0;r<=G;r++){const t=4<<r;K.push(.5/Math.cos(4*Math.acos(0)/t)),k.push(.5/(Math.cos(2*Math.acos(0)/t)*Math.cos(2*Math.acos(0)/t)))}function q(r,t,i,e,s,n,h){for(let c=1;c<=G;c++){const d=(i+s)*K[c],u=(e+n)*K[c],f=r-d,p=t-u;if(f*f+p*p<=h)return!0;const b=s-d,w=n-u;if(f*b+p*w>=0&&f*b+p*w<=b*b+w*w&&(p*b-f*w>=0||h*(b*b+w*w)>=(p*b-f*w)*(p*b-f*w)))return!0;var l=i-d,a=e-u;if(f*l+p*a>=0&&f*l+p*a<=l*l+a*a&&(p*l-f*a<=0||h*(l*l+a*a)>=(p*l-f*a)*(p*l-f*a)))return!0;const x=(i+d)*k[c],I=(e+u)*k[c];if((x-r)*(x-r)+(I-t)*(I-t)<h){s=d,n=u;continue}const M=d-x+d,L=u-I+u;if((M-r)*(M-r)+(L-t)*(L-t)<h){i=d,e=u;continue}const g=x-d,m=I-u;if(p*g-f*m<=0||h*(g*g+m*m)>(p*g-f*m)*(p*g-f*m)){if(f*g+p*m>0){if(Math.abs(f*g+p*m)<=g*g+m*m||(r-x)*(i-x)+(t-I)*(e-I)>=0){s=d,n=u;continue}}else if(-(f*g+p*m)<=g*g+m*m||(r-M)*(s-M)+(t-L)*(n-L)>=0){i=d,e=u;continue}}return!1}return!1}function it(r,t,i,e,s,n,h,l){const a=Math.abs(s-r)*l,c=Math.abs(n-t)*h;i*=l,e*=h;const d=h*l;return a*a+(e-c)*(e-c)<=d*d||(i-a)*(i-a)+c*c<=d*d||a*e+c*i<=i*e||(a*e+c*i-i*e)*(a*e+c*i-i*e)<=d*d*(i*i+e*e)&&a*i-c*e>=-e*e&&a*i-c*e<=i*i?!0:(a-i)*(a-i)+(c-e)*(c-e)<=d*d||a<=i&&c-d<=e||c<=e&&a-d<=i?q(a,c,i,0,0,e,d*d):!1}function F(r,t,i,e,s,n,h){const l=Math.abs(s-r),a=Math.abs(n-t);return l*l+(e-a)*(e-a)<=h*h||(i-l)*(i-l)+a*a<=h*h||l*e+a*i<=i*e||(l*e+a*i-i*e)*(l*e+a*i-i*e)<=h*h*(i*i+e*e)&&l*i-a*e>=-e*e&&l*i-a*e<=i*i?!0:(l-i)*(l-i)+(a-e)*(a-e)<=h*h||l<=i&&a-h<=e||a<=e&&l-h<=i?q(l,a,i,0,0,e,h*h):!1}function et(r,t,i,e,s,n,h,l){const a={x:null,y:null,onLine1:!1,onLine2:!1},c=(l-n)*(i-r)-(h-s)*(e-t);if(c!==0){let d=t-n,u=r-s;const f=(h-s)*d-(l-n)*u,p=(i-r)*d-(e-t)*u;d=f/c,u=p/c,a.x=r+d*(i-r),a.y=t+d*(e-t),d>0&&d<1&&(a.onLine1=!0),u>0&&u<1&&(a.onLine2=!0)}return a}class y{constructor(t=0){o(this,"radius",0);this.radius=t}}class v{constructor(t=0,i=0){o(this,"horizontalRadius",0);o(this,"verticalRadius",0);this.horizontalRadius=t,this.verticalRadius=i}}class S{constructor(t,i,e){o(this,"finished",!1);o(this,"body",{kind:"Bullet",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:[],shape:new y(5)});o(this,"game");o(this,"speed",10);o(this,"range",150);o(this,"startPosition");o(this,"direction");o(this,"lastUpdated",0);this.game=t,this.startPosition=[i[0],i[1]],this.body.position=[i[0],i[1]],this.direction=[e[0],e[1]]}update(t){W(this.body.position,this.direction,this.speed,t-this.lastUpdated),this.lastUpdated=t,Math.abs(Math.hypot(this.body.position[0]-this.startPosition[0],this.body.position[1]-this.startPosition[1]))>this.range&&(this.finished=!0)}render(){const t=this.game.context;t.save(),t.translate(this.body.position[0],this.body.position[1]),t.fillStyle="white",t.fillRect(0,0,5,5),t.restore()}}let N=!1;function O(){if(!N&&(N=!0,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)))try{$.play(),st.play(),V.play(),j.play(),J.play(),C.play(),P.play(),Q.play()}catch{}}const $=_("audio/start.mp3"),V=_("audio/explosion.mp3"),st=_("audio/appear.mp3"),j=_("audio/laser.mp3"),J=_("audio/laser-ufo.mp3"),C=_("audio/blip-hi.mp3"),P=_("audio/blip-low.mp3"),Q=_("audio/collision.mp3");function ot(r,t,i,e){const s=new XMLHttpRequest;s.open("GET",r,!0),s.responseType="arraybuffer",s.onload=()=>{t.decodeAudioData(s.response,n=>{i(n)},()=>{})},s.send()}function nt(r,t,i=1,e=1){const s=r.createGain();s.gain.value=i,s.connect(r.destination);const n=r.createBufferSource();n.playbackRate.value=e,n.buffer=t,n.connect(s),n.start(0)}function _(r){const t={init:()=>{const i=new(window.AudioContext||window.webkitAudioContext);ot(t.url,i,e=>{t.play=(s=1,n=1)=>{nt(i,e,s,n)}})},play:()=>{},url:r};return t.init(),t}function at(){$.play()}function ht(){V.play()}function E(){Q.play(.6)}function lt(){J.play()}function rt(){j.play()}let R=!1;function ct(){R?C.play(.3):P.play(.3),R=!R}let U=!1;function dt(){U?P.play(1,.2):P.play(1,.3),U=!U}let B=!1;function ut(){B?C.play(.2,.3):C.play(.1,.6),B=!B}class D{constructor(t,i,e=0,s=!0,n="white",h=24,l=ht){o(this,"finished",!1);o(this,"body");o(this,"duration",150);o(this,"pieces",new Array);o(this,"position");o(this,"start");o(this,"color","white");this.game=t,this.numberOfPieces=h,this.soundFunction=l,this.game=t,this.start=t.now+e,this.position=[i[0],i[1]],this.color=n;for(let c=0;c<this.numberOfPieces;c++)this.pieces.push([Math.random()*2-1,Math.random()*2-1]);if(s)for(let c=0;c<3;c++){var a=A([0,0],[0,-1],c*120+180);this.game.entities.push(new S(this.game,[this.position[0],this.position[1]],[a[0],a[1]]))}try{this.soundFunction()}catch{}}update(t){t-this.start>this.duration&&(this.finished=!0)}render(){if(this.start<this.game.now){const i=(this.game.now-this.start)/5,e=this.game.context;e.save(),e.translate(this.position[0],this.position[1]),e.fillStyle=this.color;for(var t of this.pieces)e.fillRect(-5+t[0]*i,-5+t[1]*i,5,5);e.restore()}}}class T{constructor(t,i,e,s){o(this,"finished",!1);o(this,"collisions");o(this,"body",{kind:"Debris",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:["Debris"],shape:new y(10)});o(this,"rotationSpeed",-360/.7);o(this,"magneticRotationSpeed",-360/.4);o(this,"color");o(this,"angle",0);o(this,"lastUpdated");this.game=t,this.body.position=[i[0],i[1]],this.body.velocity=[e[0],e[1]],this.color=s,this.lastUpdated=t.now}get isMagnetic(){return this.rotationSpeed===this.magneticRotationSpeed}update(t){const i=(t-this.lastUpdated)/100,e=this.body,s=(Math.abs(e.acceleration[0])+Math.abs(e.acceleration[1]))/2*4;this.angle+=this.rotationSpeed/(10/i)*(1+s);let n=e.shape instanceof y?e.shape.radius*4:0;const h=this.game.logicalWidth,l=this.game.logicalHeight;if((e.position[0]<-n&&e.velocity[0]<0||e.position[1]<-n&&e.velocity[1]<0||e.position[0]>h+n&&e.velocity[0]>0||e.position[1]>l+n&&e.velocity[1]>0)&&(this.finished=!0),this.collisions&&this.collisions.length&&!this.finished){for(const a of this.collisions){if(a instanceof T&&a.body){a.finished=!0;const c=new D(this.game,[a.body.position[0],a.body.position[1]],0,!1,a.color,13,E);c.duration=110,this.game.entities.push(c),e.velocity[0]=(e.velocity[0]+a.body.velocity[0])/2,e.velocity[1]=(e.velocity[1]+a.body.velocity[1])/2}a instanceof S&&(this.game.score+=this.isMagnetic?3:1,a.finished=!0,this.finished=!0,this.game.entities.push(new D(this.game,[e.position[0],e.position[1]])))}this.rotationSpeed=this.magneticRotationSpeed,e.attractedTo=["Ship"]}this.lastUpdated=t}render(){const t=this.game.context;t.save(),t.translate(this.body.position[0],this.body.position[1]),t.rotate(this.angle*(Math.PI/180)),t.fillStyle=this.color,t.fillRect(-2.5,-12.5,5,25),t.fillRect(-12.5,-2.5,25,5),t.restore()}}class Z{constructor(t,i,e){o(this,"finished",!1);o(this,"collisions");o(this,"body",{kind:"Laser",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:[],shape:new y(10)});o(this,"color","white");this.game=t,this.body.position=[i[0],i[1]];const s=36;this.body.velocity=[e[0]<0?-s:s,e[1]<0?-s:s]}update(){const t=this.body;let i=t.shape instanceof y?t.shape.radius*4:0;const e=this.game.logicalWidth,s=this.game.logicalHeight;if((t.position[0]<-i&&t.velocity[0]<0||t.position[1]<-i&&t.velocity[1]<0||t.position[0]>e+i&&t.velocity[0]>0||t.position[1]>s+i&&t.velocity[1]>0)&&(this.finished=!0),this.collisions&&this.collisions.length&&!this.finished)for(const n of this.collisions){if(n instanceof T&&n.body){this.finished=!0;const h=new D(this.game,[t.position[0],t.position[1]],0,!1,this.color,13,E);h.duration=110,this.game.entities.push(h)}n instanceof S&&(n.finished=!0,this.finished=!0,this.game.entities.push(new D(this.game,[t.position[0],t.position[1]])))}}render(){const t=this.game.context,i=this.body.position,e=this.body.velocity,s=e[0]>0?1:-1,n=e[1]>0?1:-1;t.save(),t.translate(i[0],i[1]),t.fillStyle=this.color;for(let h=0;h<6;h++)t.fillRect(-2.5+5*(h*s),-2.5+5*(h*n),5,5+.5);t.restore()}}class z{constructor(t,i,e,s){o(this,"finished",!1);o(this,"collisions");o(this,"body",{kind:"Ufo",mass:200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:[],shape:new y(10)});o(this,"color");o(this,"timeLastFired");o(this,"timeLastMadeSound");o(this,"rects",[[-20,-4,40,5],[-15,0,30,5]]);this.game=t,this.body.position=[i[0],i[1]],this.body.velocity=[e[0]<0?-12:12,e[1]<0?-12:12],this.color=s,this.timeLastFired=t.now,this.timeLastMadeSound=t.now}update(t){const i=this.body,e=Math.sin(t/20/Math.PI)/2;this.body.position[0]+=e;let s=i.shape instanceof y?i.shape.radius*4:0;const n=this.game.logicalWidth,h=this.game.logicalHeight;if((i.position[0]<-s&&i.velocity[0]<0||i.position[1]<-s&&i.velocity[1]<0||i.position[0]>n+s&&i.velocity[0]>0||i.position[1]>h+s&&i.velocity[1]>0)&&(this.finished=!0),this.collisions&&this.collisions.length&&!this.finished)for(const l of this.collisions){if(l instanceof T&&l.body){this.finished=!0;const a=new D(this.game,[i.position[0],i.position[1]],0,!1,this.color,13,E);a.duration=110,this.game.entities.push(a)}l instanceof S&&(this.game.score+=10,l.finished=!0,this.finished=!0,this.game.entities.push(new D(this.game,[i.position[0],i.position[1]])))}if(!this.finished&&t-this.timeLastFired>200){const l=this.game.entities.find(c=>c instanceof H),a=this.shoot(l);if(a[0]||a[1]){this.timeLastFired=t;let c=25;l!=null&&l.body&&l.body&&this.body.position[0]>l.body.position[0]&&(c=-25),lt(),this.game.entities.push(new Z(this.game,[i.position[0]+c,i.position[1]],a))}}t-this.timeLastMadeSound>200&&(this.timeLastMadeSound=t,ut())}shoot(t){const i=[0,0];if(t&&!t.finished&&t.body){const e=this.body,s=t.body,n=et(e.position[0],e.position[1],e.position[0]+e.velocity[0],e.position[1]+e.velocity[1],s.position[0],s.position[1],s.position[0]+e.velocity[1],s.position[1]-e.velocity[0]);if(n.x&&n.y){const h=Math.hypot(n.x-e.position[0],n.y-e.position[1]),l=Math.hypot(n.x-s.position[0],n.y-s.position[1]);(h<100||l<20)&&(i[0]=e.position[0]<s.position[0]?1:-1,i[1]=e.position[1]<s.position[1]?1:-1)}}return i}render(){const t=this.game.context;t.save(),t.translate(this.body.position[0],this.body.position[1]),t.fillStyle=this.color;for(var i of this.rects)t.fillRect(i[0],i[1],i[2],i[3]+.5);t.restore()}}class H{constructor(t){o(this,"collisions");o(this,"body",{kind:"Ship",mass:1200,position:[0,0],velocity:[0,0],acceleration:[0,0],attractedTo:"none",shape:new y(10)});o(this,"finished",!1);o(this,"rects");o(this,"speed",4);o(this,"shieldElements",8);o(this,"gunRotationSpeed",-360/4);o(this,"depletionDuration",900);o(this,"chargingDuration",600);o(this,"maxBullets",6);o(this,"bulletInterval",75);o(this,"shieldDiameter",32);o(this,"shieldEllipseFactor",1.6);o(this,"bulletsRemaining",0);o(this,"timeBulletLastFired");o(this,"bulletPosition",[0,0]);o(this,"bulletDirection",[0,0]);o(this,"gunAngle",0);o(this,"windowIndexLastChangedTime");o(this,"lastUpdated");o(this,"windowIndex",0);o(this,"state","Ready");o(this,"buttonDown",!1);o(this,"buttonDownTime");o(this,"percentageCharged",100);o(this,"currentDimmedShieldlementIndex",0);o(this,"dimmedShieldlementLastChanged");o(this,"moveSoundLastInvoke");o(this,"explosionStart",0);o(this,"explosion");this.game=t,this.timeBulletLastFired=t.now,this.windowIndexLastChangedTime=t.now,this.lastUpdated=t.now,this.buttonDownTime=t.now,this.dimmedShieldlementLastChanged=t.now,this.moveSoundLastInvoke=t.now,this.body.position=[t.logicalWidth/2,t.logicalHeight/2],this.rects=[[-5,-8,10,5],[-10,-3,20,5],[-20,2,40,5],[-10,7,20,5]],this.body.shape=new v(this.shieldDiameter,this.shieldDiameter/this.shieldEllipseFactor)}constrainToScreen(){const t=this.body.position,i=this.game.logicalWidth,e=this.game.logicalHeight;t[0]>i?t[0]=i:t[0]<0&&(t[0]=0),t[1]>e?t[1]=e:t[1]<0&&(t[1]=0)}update(t){const i=this.game.controller;if((i.direction[0]!==0||i.direction[1]!==0)&&t-this.moveSoundLastInvoke>200&&(ct(),this.moveSoundLastInvoke=t),W(this.body.position,i.direction,this.speed,t-this.lastUpdated),this.constrainToScreen(),this.bulletsRemaining&&t-this.timeBulletLastFired>this.bulletInterval&&(this.bulletsRemaining--,this.timeBulletLastFired=t,rt(),this.game.entities.push(new S(this.game,[this.bulletPosition[0],this.bulletPosition[1]],[this.bulletDirection[0],this.bulletDirection[1]]))),(i.direction[1]!==0||i.direction[0]!==0)&&(this.gunAngle+=this.gunRotationSpeed/(t-this.lastUpdated)),t-this.windowIndexLastChangedTime>100&&(this.windowIndexLastChangedTime=t,this.windowIndex+=1,this.windowIndex>7&&(this.windowIndex=0)),i.buttonDown&&(this.state==="Ready"||this.state==="Charging"))this.buttonDown=!0,this.deplete(t,this.maxBullets);else if(!i.buttonDown&&this.buttonDown)this.buttonDown=!1;else if(this.state==="Depleted"&&t-this.buttonDownTime>this.depletionDuration)this.state="Charging";else if(this.state==="Charging"){const e=t-this.buttonDownTime-this.depletionDuration;this.percentageCharged=e/(this.chargingDuration/100),this.percentageCharged>100&&(this.percentageCharged=100,this.state="Ready")}else this.state==="Exploding"&&((!this.explosion||this.explosion.finished)&&(this.explosion=new D(this.game,[this.body.position[0],this.body.position[1]],0,!1),this.game.entities.push(this.explosion)),this.explosion.body&&(this.explosion.body.position[0]=this.body.position[0],this.explosion.body.position[1]=this.body.position[1]),t-this.explosionStart>5e3&&(this.explosion.duration=400,this.finished=!0,this.game.score>=this.game.hiscore&&(this.game.hiscore=this.game.score,this.game.hiscoreName="??????"),setTimeout(()=>this.game.initializeEntities(),5e3)));if(t-this.dimmedShieldlementLastChanged>30&&(this.dimmedShieldlementLastChanged=t,this.currentDimmedShieldlementIndex--,this.currentDimmedShieldlementIndex<0&&(this.currentDimmedShieldlementIndex=this.shieldElements)),this.collisions&&this.collisions.length&&this.state!=="Exploding"&&!this.finished)for(const e of this.collisions)(e instanceof T||e instanceof z||e instanceof Z)&&e.body&&(this.state==="Depleted"||this.state==="Charging"?(this.state="Exploding",this.explosionStart=t,this.body.mass=0):e instanceof z?this.game.score+=10:e instanceof T&&(this.game.score+=e.isMagnetic?3:1),e.finished=!0,this.game.entities.push(new D(this.game,[e.body.position[0],e.body.position[1]])),this.state!=="Exploding"&&this.deplete(t,0));this.state==="Depleted"||this.state==="Charging"?this.body.shape=new v(this.shieldDiameter/2,this.shieldDiameter/2/this.shieldEllipseFactor):this.body.shape=new v(this.shieldDiameter,this.shieldDiameter/this.shieldEllipseFactor),this.lastUpdated=t}deplete(t,i){this.state="Depleted",this.bulletsRemaining=i,this.buttonDownTime=t,this.percentageCharged=0}render(){const t=this.game.context;t.save(),t.translate(this.body.position[0],this.body.position[1]),t.fillStyle=this.state==="Exploding"?"white":"red";for(var i of this.rects)t.fillRect(i[0],i[1],i[2],i[3]+.5);if(t.fillStyle="black",t.fillRect(-20+this.windowIndex*5,2,5,5.5),this.state!=="Exploding"){const e=this.shieldElements;let s=[0,this.shieldDiameter];s=A([0,0],s,this.gunAngle);for(let n=0;n<e;n++)s=A([0,0],s,360/e),n===0?(t.fillStyle="white",this.bulletDirection=[s[0]-2.5,s[1]/this.shieldEllipseFactor],this.bulletPosition=[this.body.position[0]+s[0]-2.5,this.body.position[1]+s[1]/this.shieldEllipseFactor]):this.state==="Charging"&&(e-n)/(e/100)>this.percentageCharged?t.fillStyle="rgba(128, 128, 128, "+(n===this.currentDimmedShieldlementIndex?"0.3":"1")+")":t.fillStyle="rgba(100, 149, 237, "+(n===this.currentDimmedShieldlementIndex?"1":"0.8")+")",(this.state!=="Depleted"||n===0&&this.bulletsRemaining>0)&&t.fillRect(s[0]-2.5,s[1]/this.shieldEllipseFactor,5,5)}t.restore()}}class ft{constructor(t){o(this,"_direction",[0,0]);o(this,"_buttonDown",!1);o(this,"_upKeyDown",!1);o(this,"_downKeyDown",!1);o(this,"_leftKeyDown",!1);o(this,"_rightKeyDown",!1);o(this,"_anyUserInteraction",!1);o(this,"_firstInterActionListeners",[]);o(this,"_keyboardBuffer","");o(this,"_activeController","keyboard");o(this,"_leftTouchID",-1);o(this,"_rightTouchID",-1);o(this,"_leftTouchStartPos",[0,0]);o(this,"_touchable","createTouch"in document);o(this,"_pauzeHandler");o(this,"_isMacLike",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));o(this,"gamepadConfiguration",{"USB Gamepad  (STANDARD GAMEPAD Vendor: 0079 Product: 0011)":{steering:"buttons",horizontalAxis:0,verticalAxis:0,leftButton:14,rightButton:15,upButton:12,downButton:13,fireButton:1},"SPEEDLINK COMPETITION PRO (Vendor: 0738 Product: 2217)":{steering:"axes",horizontalAxis:0,verticalAxis:1,leftButton:0,rightButton:0,upButton:0,downButton:0,fireButton:0}});this._pauzeHandler=t,document.addEventListener("keydown",this.keyDownHandler.bind(this)),document.addEventListener("keyup",this.keyUpHandler.bind(this)),this._touchable&&(window.addEventListener("touchstart",this.onTouchStart.bind(this),!1),window.addEventListener("touchmove",this.onTouchMove.bind(this),!1),window.addEventListener("touchcancel",this.onTouchEnd.bind(this),!1),window.addEventListener("touchend",this.onTouchEnd.bind(this),!1))}onTouchStart(t){O();let i=!1,e=!1;for(var s=0,n=t.touches.length;s<n;s++)t.touches[s].identifier===this._leftTouchID?i=!0:t.touches[s].identifier===this._rightTouchID&&(e=!0);i||(this._leftTouchID=-1),e||(this._rightTouchID=-1);for(var s=0,n=t.changedTouches.length;s<n;s++){var h=t.changedTouches[s];this._leftTouchID<0&&h.clientX<window.innerWidth/2?(this._leftTouchID=h.identifier,this._leftTouchStartPos=[h.clientX,h.clientY]):this._rightTouchID<0&&(this._rightTouchID=h.identifier,this._buttonDown=!0)}}onTouchMove(t){t.preventDefault();for(var i=0,e=t.changedTouches.length;i<e;i++){var s=t.changedTouches[i];if(this._leftTouchID===s.identifier){this._direction=[(s.clientX-this._leftTouchStartPos[0])/100,(s.clientY-this._leftTouchStartPos[1])/100];break}}}onTouchEnd(t){for(var i=0,e=t.changedTouches.length;i<e;i++){var s=t.changedTouches[i];this._leftTouchID===s.identifier?(this._leftTouchID=-1,this._direction=[0,0]):this._rightTouchID===s.identifier&&(this._rightTouchID=-1,this._buttonDown=!1)}}addFirstInterActionListener(t){this._anyUserInteraction?t():this._firstInterActionListeners.push(t)}handleInterAction(){if(!this._anyUserInteraction){this._anyUserInteraction=!0;for(let t of this._firstInterActionListeners)t()}}update(){[...navigator.getGamepads()].filter(t=>t&&t.connected).forEach(t=>{if(t&&this.gamepadConfiguration[t.id]){const i=this.gamepadConfiguration[t.id];i.steering==="buttons"?(this._leftKeyDown=t.buttons[i.leftButton].pressed,this._rightKeyDown=t.buttons[i.rightButton].pressed,this._upKeyDown=t.buttons[i.upButton].pressed,this._downKeyDown=t.buttons[i.downButton].pressed):(this._leftKeyDown=t.axes[i.horizontalAxis]===-1,this._rightKeyDown=t.axes[i.horizontalAxis]===1,this._upKeyDown=t.axes[i.verticalAxis]===-1,this._downKeyDown=t.axes[i.verticalAxis]===1),(this._leftKeyDown||this._rightKeyDown||this._upKeyDown||this._downKeyDown||t.buttons[i.fireButton].pressed)&&(this._activeController=t.id),this._activeController===t.id&&(this._buttonDown=t.buttons[i.fireButton].pressed,this.updateDirection())}})}get keyboardBuffer(){const t=this._keyboardBuffer;return this._keyboardBuffer="",t}get direction(){return this._direction}get buttonDown(){return this._buttonDown}keyDownHandler(t){O(),this.handleInterAction(),t.key==="ArrowUp"&&(this._upKeyDown=!0),t.key==="ArrowLeft"&&(this._leftKeyDown=!0),t.key==="ArrowDown"&&(this._downKeyDown=!0),t.key==="ArrowRight"&&(this._rightKeyDown=!0),!this._isMacLike&&t.key==="Control"&&(this._buttonDown=!0),this._isMacLike&&t.key==="Alt"&&(this._buttonDown=!0),(this._leftKeyDown||this._rightKeyDown||this._upKeyDown||this._downKeyDown||this.buttonDown)&&(this._activeController="keyboard"),this.updateDirection()}keyUpHandler(t){t.key==="Escape"&&this._pauzeHandler(),t.key==="ArrowUp"&&(this._upKeyDown=!1),t.key==="ArrowLeft"&&(this._leftKeyDown=!1),t.key==="ArrowDown"&&(this._downKeyDown=!1),t.key==="ArrowRight"&&(this._rightKeyDown=!1),!this._isMacLike&&t.key==="Control"&&(this._buttonDown=!1),this._isMacLike&&t.key==="Alt"&&(this._buttonDown=!1),t.key.length==1&&/^[a-z0-9]+$/i.test(t.key)&&(this._keyboardBuffer+=t.key),this.updateDirection()}updateDirection(){this.direction[0]=0,this.direction[1]=0,this._leftKeyDown&&(this.direction[0]=-1),this._rightKeyDown&&(this.direction[0]=1),this._upKeyDown&&(this.direction[1]=-1),this._downKeyDown&&(this.direction[1]=1)}}class pt{constructor(t){o(this,"body");o(this,"finished",!1);o(this,"game");o(this,"minimumInterval",200);o(this,"randomInterval",200);o(this,"colors",["green","yellow","purple","magenta","cyan","blue","red","orange"]);o(this,"nextTimeToCreateDebris",0);o(this,"ufo");this.game=t}update(t){if(this.nextTimeToCreateDebris<t){this.nextTimeToCreateDebris=t+(Math.random()*this.randomInterval+this.minimumInterval);const i=this.getStartPosition(),e=this.getDirection(i);Math.floor(Math.random()*Math.floor(25))===6&&(!this.ufo||this.ufo.finished)?(this.ufo=new z(this.game,i,e,this.colors[Math.floor(Math.random()*this.colors.length)]),this.game.entities.push(this.ufo)):this.game.entities.push(new T(this.game,i,e,this.colors[Math.floor(Math.random()*this.colors.length)]))}}render(){}getDirection(t){let i=[0,0];for(;i[0]===0||i[1]===0||isNaN(i[0])||isNaN(i[1]);){i=this.getStartPosition(),i[0]-=t[0],i[1]-=t[0];let e=Math.abs(i[1])/Math.abs(i[0]);Math.abs(i[0])<Math.abs(i[1])&&(e=Math.abs(i[0])/Math.abs(i[1])),i[0]=i[0]*e/100,i[1]=i[1]*e/100}return i}getStartPosition(){const t=[0,0],i=30,e=this.game.logicalWidth+2*i,s=this.game.logicalHeight+2*i,n=e*2+s*2,h=Math.floor(Math.random()*n);return h<e?(t[0]=h,t[1]=0):h<e+s?(t[0]=e,t[1]=h-e):h<2*e+s?(t[0]=h-(e+s),t[1]=s):(t[0]=0,t[1]=h-(2*e+s)),t[0]-=i,t[1]-=i,t}}class gt{constructor(t){o(this,"body");o(this,"finished",!1);o(this,"game");o(this,"g",3.5*.5);o(this,"softening",.15);o(this,"lastUpdated");this.game=t,this.lastUpdated=t.now}update(t){const i=(t-this.lastUpdated)/100;this.applyGravity(i),this.calculateCollisions(),this.lastUpdated=t}applyGravity(t){for(const i of this.game.entities)if(i.body&&i.body.attractedTo!=="none"){const e=i.body;e.position[0]+=e.velocity[0]*t,e.position[1]+=e.velocity[1]*t,e.velocity[0]+=e.acceleration[0]*t,e.velocity[1]+=e.acceleration[1]*t;let s=0,n=0;for(const h of this.game.entities)if(h!==i&&h.body){const l=h.body;if(e.attractedTo==="any"||e.attractedTo.includes&&e.attractedTo.includes(l.kind)){const a=l.position[0]-e.position[0],c=l.position[1]-e.position[1],d=a*a+c*c,u=this.g*l.mass/(d*Math.sqrt(d+this.softening));s+=a*u,n+=c*u}}e.acceleration[0]=s,e.acceleration[1]=n}}calculateCollisions(){for(const t of this.game.entities)t.collisions=this.game.entities.filter(i=>this.collide(t,i))}collide(t,i){let e=!1;if(t!==i&&t.body&&i.body){const s=t.body,n=i.body;s.shape instanceof y&&n.shape instanceof y?e=tt(s.position[0],s.position[1],s.shape.radius,n.position[0],n.position[1],n.shape.radius):s.shape instanceof v&&n.shape instanceof v?e=it(s.position[0],s.position[1],s.shape.horizontalRadius,s.shape.verticalRadius,n.position[0],n.position[1],n.shape.horizontalRadius,n.shape.verticalRadius):s.shape instanceof y&&n.shape instanceof v?e=F(n.position[0],n.position[1],n.shape.horizontalRadius,n.shape.verticalRadius,s.position[0],s.position[1],s.shape.radius):s.shape instanceof v&&n.shape instanceof y&&(e=F(s.position[0],s.position[1],s.shape.horizontalRadius,s.shape.verticalRadius,n.position[0],n.position[1],n.shape.radius))}return e}render(){}}const mt=new Uint8Array([124,198,198,198,198,198,124,0,24,56,24,24,24,24,60,0,120,204,24,48,96,192,252,0,124,198,6,60,6,198,124,0,204,204,204,254,12,12,12,0,254,192,192,124,6,198,124,0,124,198,192,252,198,198,124,0,254,6,12,24,48,96,192,0,124,198,198,124,198,198,124,0,124,198,198,126,6,198,124,0,0,24,12,254,12,24,0,0,60,102,12,24,24,0,24,0,56,108,198,198,254,198,198,0,252,198,198,252,198,198,252,0,124,198,192,192,192,198,124,0,252,198,198,198,198,198,252,0,254,192,192,248,192,192,254,0,254,192,192,248,192,192,192,0,124,198,192,192,206,198,126,0,198,198,198,254,198,198,198,0,60,24,24,24,24,24,60,0,6,6,6,6,6,198,124,0,198,204,216,240,216,204,198,0,192,192,192,192,192,192,254,0,198,238,254,214,198,198,198,0,198,230,246,254,222,206,198,0,124,198,198,198,198,198,124,0,252,198,198,252,192,192,192,0,124,198,198,198,222,204,118,0,252,198,198,252,216,204,198,0,124,198,192,124,6,198,124,0,126,24,24,24,24,24,24,0,198,198,198,198,198,198,124,0,198,198,198,198,198,108,56,0,198,198,198,214,254,238,198,0,198,198,108,56,108,198,198,0,102,102,102,60,24,24,24,0,126,6,12,24,48,96,126,0,0,0,0,126,0,0,0,0,0,0,124,0,124,0,0,0,0,0,0,0,0,56,56,0,0,0,0,0,0,0,0,0,0,24,0,126,0,24,0,0,0,102,60,24,60,102,0,0,0,24,24,126,24,24,0,0]),yt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,">":10,"?":11,a:12,b:13,c:14,d:15,e:16,f:17,g:18,h:19,i:20,j:21,k:22,l:23,m:24,n:25,o:26,p:27,q:28,r:29,s:30,t:31,u:32,v:33,w:34,x:35,y:36,z:37,"-":38,"=":39,".":40," ":41,"/":42,"*":43,"+":44};function bt(r,t,i,e,s,n){e.save(),e.fillStyle=t,e.translate(Math.floor(s[0]),Math.floor(s[1]));for(let h of Array.from(r).map((l,a)=>[a,yt[l]])){const l=h[0]*8*i;n&&n.length===r.length&&n[h[0]]&&(e.fillStyle=n[h[0]]);for(let a=0;a<8;a++){const c=mt[a+h[1]*8];for(let d=0;d<8;d++){const u=d<7&&(c&Math.pow(2,d+1))===Math.pow(2,d+1);(c&Math.pow(2,d))===Math.pow(2,d)&&(e.fillRect((7-d)*i+l-(u?i:0),a*i,i*(u?2:1),i),e.fillRect((7-d)*i+l,a*i,i,i))}}}e.restore()}class wt{constructor(t){o(this,"body");o(this,"finished",!1);o(this,"game");o(this,"colorTable",[]);o(this,"inputIndex",0);o(this,"animationLastUpdate");o(this,"animationIndex",5);this.game=t,this.game.score=0,this.inputIndex=5,this.animationLastUpdate=t.now,this.game.hiscoreName.indexOf("?")>-1&&(this.inputIndex=this.game.hiscoreName.indexOf("?")),this.resetColorTable()}resetColorTable(){this.colorTable=new Array(18),this.colorTable[0]="green",this.colorTable[5]="white",this.colorTable[6]="green",this.colorTable[13]="red"}update(t){const i=this.game.controller.keyboardBuffer;if(this.game.hiscoreName==="??????"&&(this.inputIndex=0),i){const e=i.substr(i.length-1,1);this.game.hiscoreName=(this.game.hiscoreName.substr(0,this.inputIndex)+e).padEnd(6,"?"),this.inputIndex<5&&this.inputIndex++}this.resetColorTable(),this.game.entities.find(e=>e instanceof H)||(this.colorTable[this.animationIndex]="transparent",this.colorTable[this.animationIndex+1]="green",t-this.animationLastUpdate>50&&(this.animationLastUpdate=t,this.animationIndex++,Math.abs(this.animationIndex%2)==1&&dt(),this.animationIndex>11&&(this.animationIndex=5)))}render(){const t=this.game.context,i=this.game.logicalHeight,e=5,s=e*8,n=10,h=i-(s+n),l=`${this.game.hiscore.toString().padStart(5,"0")}>${this.game.hiscoreName} ${this.game.score.toString().padStart(5,"0")}`;bt(l,"green",e,t,[n+1*s,h],this.colorTable)}}class Dt{constructor(t){o(this,"logicalWidth",800);o(this,"logicalHeight",600);o(this,"canvas");o(this,"context");o(this,"controller");o(this,"entities",[]);o(this,"_now",0);o(this,"_timePauzed",0);o(this,"_totalTimeInPauze",0);o(this,"_pauzed",!1);o(this,"score",0);o(this,"hiscore",0);o(this,"hiscoreName","??????");this.canvas=document.createElement("canvas"),document.ontouchmove=function(i){i.preventDefault()},document.body.addEventListener("touchmove",function(i){i.preventDefault()},{passive:!1,capture:!1}),t.appendChild(this.canvas),this.context=this.canvas.getContext("2d")||new CanvasRenderingContext2D,this.controller=new ft(this.togglePauze.bind(this)),this.initializeScalingAndPositioning(),this.initializeGame()}get now(){return this._now}initializeScalingAndPositioning(){const t=this;function i(){const e=t.canvas,s=t.logicalHeight,n=t.logicalWidth;e.width=document.body.clientWidth,e.height=document.body.clientHeight;const h=e.width/n,l=e.height/s,a=h<l?h:l;t.context.translate((e.width-n*a)/2,0),t.context.scale(a,a),t.context.beginPath(),t.context.rect(0,0,n,s),t.context.clip()}window.addEventListener("resize",i),i()}initializeGame(){const t=this.context,i=this.logicalHeight,e=this.logicalWidth,s=this.entities,n=this.controller,h=this;this.initializeEntities();function l(){if(window.requestAnimationFrame(l),t.clearRect(-1,-1,e+2,i+2),h._pauzed)s.forEach(a=>a.render());else{h._now=Date.now()-h._totalTimeInPauze,n.update(),s.forEach(c=>c.update(h._now)),s.forEach(c=>c.render());const a=s.filter(c=>!c.finished);for(;s.pop(););s.push(...a)}}l()}togglePauze(){this._pauzed=!this._pauzed,this._pauzed?this._timePauzed=Date.now():this._totalTimeInPauze+=Date.now()-this._timePauzed}initializeEntities(){for(;this.entities.pop(););this._now=Date.now(),this._totalTimeInPauze=0,this._pauzed=!1,this.entities.push(new gt(this)),this.entities.push(new wt(this)),this.entities.push(new H(this)),this.entities.push(new pt(this)),at()}}new Dt(document.body);
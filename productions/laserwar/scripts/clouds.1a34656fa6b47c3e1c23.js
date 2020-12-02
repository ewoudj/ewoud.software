!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e,i){"use strict";function s(t,e,i){return t.x>=i.x+e.x&&t.x<=i.x+e.x+i.w&&t.y>=i.y+e.y&&t.y<=i.y+e.y+i.h}Object.defineProperty(e,"__esModule",{value:!0}),e.moveRectangle=e.inflateRectangle=e.lineIntersect=e.pointInRect=e.rectInRect=e.ceilPoint=e.distance=e.rotate=void 0,e.rotate=function(t,e,i){i=i*Math.PI/180;const s=t.x-e.x,n=t.y-e.y,o=Math.atan2(n,s),h=Math.sqrt(s*s+n*n),r=o+i,a=Math.cos(r)*h,l=Math.sin(r)*h;return{x:1.4*a+e.x,y:l+e.y}},e.distance=function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},e.ceilPoint=function(t){return{x:Math.ceil(t.x),y:Math.ceil(t.y)}},e.rectInRect=function(t,e,i,n){if(t&&e&&i&&n){const o={x:e.x+t.x,y:e.y+t.y},h={x:e.x+e.w+t.x,y:e.y+t.y},r={x:e.x+t.x,y:e.y+e.h+t.y},a={x:e.x+e.w+t.x,y:e.y+e.h+t.y};return s(o,i,n)||s(h,i,n)||s(r,i,n)||s(a,i,n)}return!1},e.pointInRect=s,e.lineIntersect=function(t,e){return function(t,e,i,s,n,o,h,r){const a=(r-o)*(i-t)-(h-n)*(s-e),l=(h-n)*(e-o)-(r-o)*(t-n),c=(i-t)*(e-o)-(s-e)*(t-n);if(0!==a){const n=l/a,o=c/a;if(n>=0&&n<=1&&o>=0&&o<=1){return{x:t+n*(i-t),y:e+n*(s-e)}}}}(t[0].x,t[0].y,t[1].x,t[1].y,e[0].x,e[0].y,e[1].x,e[1].y)},e.inflateRectangle=function(t,e){return{h:t.h+2*e,w:t.w+2*e,x:t.x-e,y:t.y-e}},e.moveRectangle=function(t,e){return{h:t.h,w:t.w,x:t.x+e.x,y:t.y+e.y}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.laserAudio=e.changeColorAudio=e.appearAudio=e.explosionAudio=e.afterInput=void 0;let s=!1;function n(t){const e={init:()=>{const t=new(window.AudioContext||window.webkitAudioContext);!function(t,e,i,s){const n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=()=>{e.decodeAudioData(n.response,t=>{i(t)},()=>{s()})},n.send()}(e.url,t,i=>{e.play=()=>{!function(t,e){const i=t.createBufferSource();i.buffer=e,i.connect(t.destination),i.start(0)}(t,i)}},()=>{})},play:()=>{},url:t};return e.init(),e}e.afterInput=function(){if(!s){s=!0;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))try{e.changeColorAudio.play(),e.appearAudio.play(),e.explosionAudio.play(),e.laserAudio.play()}catch(t){}}},e.explosionAudio=n("resources/audio/effects/explosion.mp3"),e.appearAudio=n("resources/audio/effects/appear.mp3"),e.changeColorAudio=n("resources/audio/effects/changecolor.mp3"),e.laserAudio=n("resources/audio/effects/laser.mp3")},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EntityBase=void 0;e.EntityBase=class{constructor(t){this.name="",this.finished=!1,this.initialized=!1,this.mousePosition={x:0,y:0},this.topMost=!1,this.position={x:0,y:0},this.model=[],this.color="rgba(0,0,0,0)",this.texts=[],this.engine=t}render(t){}update(t){}onRemove(){}onMouseUp(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GameEntity=void 0;const s=i(2);class n extends s.EntityBase{constructor(t){super(t),this.type="computer",this.direction=0,this.colorIndex=0,this.evadingTime=0,this.targetVector={x:0,y:0},this.shoot=!1,this.position={x:0,y:0},this.collisions=[],this.collisionRect={x:0,y:0,h:0,w:0}}}e.GameEntity=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Logic=e.colors=void 0;const s=i(2),n=i(0),o=i(17),h=i(18),r=i(19),a=i(20),l=i(21),c=i(6),u=i(22);e.colors=["#F00","#0F0","#0FF","#FF0","#F0F","#00F","#AAA"];class d extends s.EntityBase{constructor(t){super(t),this.playerCount=0,this.barHeight=30,this.previousRightButtonDown=!1,this.previousGameOverState=!1,this.menu=new o.Menu(this.engine,{engine:this.engine,mainMenu:r.mainMenu}),this.engine.add(this.menu),this.menu.setItems(r.mainMenu),this.scoreBar=new a.ScoreBar(this.engine),this.engine.add(this.scoreBar),this.initialized=!1,this.name="rules",this.gameState=this.getDefaultGameState(),t.canvasColor="#000",document.addEventListener("keyup",this.keyboardHandler.bind(this),!1)}update(t){if(this.initialized||this.initialize(),this.gameState.gameOver!==this.previousGameOverState)if(this.previousGameOverState=this.gameState.gameOver,this.gameState.gameOver&&this.playerCount>0)this.showGameOver();else{if(this.gameState.gameOver&&0===this.playerCount)return void(this.menu.finished?this.engine.reset():this.engine.reset(this.menu));this.hideMenu()}this.scoreBar.setScore(this.gameState.player1Score,this.gameState.player2Score),this.previousRightButtonDown!==this.engine.controller.menuButtonDown&&(!1===this.engine.controller.menuButtonDown&&this.toggleMenu(),this.previousRightButtonDown=this.engine.controller.menuButtonDown);this.gameState.gameOver=10===this.gameState.player1Score||10===this.gameState.player2Score,this.gameState.player1Ship=this.ensureUserRespawn(this.gameState.player1Ship,this.engine.controller.mousePosition,this.engine.controller.buttonDown,"Player 1",1,0),this.gameState.player2Ship=this.ensureUserRespawn(this.gameState.player2Ship,{x:0,y:0},!1,"Player 2",-1,3),(!this.gameState.player3||this.gameState.player3&&this.gameState.player3.finished)&&6===Math.floor(200*Math.random())&&this.engine.add(this.gameState.player3=new u.Ufo(this.engine,2,"Player 3",{x:this.engine.width-40,y:10})),(!this.gameState.player4||this.gameState.player4&&this.gameState.player4.finished)&&6===Math.floor(200*Math.random())&&this.engine.add(this.gameState.player4=new u.Ufo(this.engine,4,"Player 4",{x:10,y:this.engine.height-50-this.barHeight}))}startSinglePlayerGame(){this.playerCount=1,this.engine.reset(),this.hideMenu()}keyboardHandler(t){const e=(t=t||window.event).keyCode||t.which;49===e&&this.startSinglePlayerGame(),54===e&&this.startZeroPlayerGame(),77===e&&this.toggleMenu()}getDefaultGameState(){return new h.GameState(new l.Ship(this.engine,0,1,"Player 1",{x:10,y:10},0===this.playerCount?"computer":"player"),new l.Ship(this.engine,3,-1,"Player 2",{x:this.engine.width-40,y:this.engine.height-50-this.barHeight},2!==this.playerCount?"computer":"player"))}initialize(){this.previousRightButtonDown=!1,this.initialized=!0,this.engine.canvasColor="#000",this.gameState=this.getDefaultGameState(),this.scoreBar=new a.ScoreBar(this.engine),this.engine.add(this.scoreBar),this.engine.add(this.gameState.player1Ship),this.engine.add(this.gameState.player2Ship),this.engine.add(new c.Star(this.engine,this.barHeight,0,"Star 1",{x:this.engine.width/2,y:.25*this.engine.height-this.barHeight},0,0)),this.engine.add(new c.Star(this.engine,this.barHeight,3,"Star 2",{x:this.engine.width/2,y:.75*this.engine.height-this.barHeight},5,0))}getStar(t,e,i){for(const s of this.engine.entities)if(s instanceof c.Star&&s.colorIndex===t.colorIndex&&(!e||n.rectInRect(s.position,s.collisionRect,i,{x:-20,y:-20,w:40,h:40})))return s;return null}spawnPlayerShip(t,e,i,s,n,o,h){let r=t;if(t.finished&&(e&&"player"===s||"computer"===s)){const e=this.getStar(t,"player"===s,h);e&&(r=new l.Ship(this.engine,o,n,i,h,s,e),this.engine.add(r))}return r}ensureUserRespawn(t,e,i,s,o,h){let r=t;if(t.finished){let a={x:e.x,y:e.y},l=null;("computer"===t.type||this.engine.touchable)&&(l=this.getStar(t,!1,e),l&&(a=n.ceilPoint({x:l.position.x,y:l.position.y}))),("player"===t.type||"computer"===t.type&&l)&&(r=this.spawnPlayerShip(t,i,s,t.type,o,h,a))}return r}startZeroPlayerGame(){this.playerCount=0,this.engine.reset(),this.hideMenu()}showGameOver(){this.showMenu(r.gameOverMenu)}showMenu(t){return this.menu.show(t)}toggleMenu(){return this.menu.toggle()}hideMenu(){return this.menu.hide()}}e.Logic=d},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LaserBeam=void 0;const s=i(1),n=i(3);class o extends n.GameEntity{constructor(t,e,i,s){super(t),this.audioDone=!1,this.startTime=0,this.startPosition={x:0,y:0},this.owner=i,this.name="laserbeam",this.direction=e,this.color="#FFF",this.position=s,this.model=[{x:-20,y:-5,w:40,h:10}],this.collisionRect=this.model[0],this.audioDone=!1}render(){this.audioDone||(this.audioDone=!0,s.laserAudio.play())}update(t){if(this.finished=this.position.x<-40||this.position.x>this.engine.width+20,this.collisions)for(const t of this.collisions)if(t!==this.owner)return void(this.finished=!0);this.startTime||(this.startTime=t,this.startPosition=this.position),this.position.x=this.startPosition.x+this.direction*(t-this.startTime)/6}}e.LaserBeam=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Star=void 0;const s=i(1),n=i(0),o=i(3),h=i(5),r=i(4);class a extends o.GameEntity{constructor(t,e,i,s,n,o,h,a){super(t),this.bottomOffset=30,this.makeSound=!1,this.bottomOffset=e,this.name=s,this.type="star",this.colorIndex=i,this.color=r.colors[i],this.previousColor=this.color,this.position=n,this.starId=o,this.parent=a,this.angle=h,this.parentCenter={x:this.engine.width/2,y:this.engine.height/2-this.bottomOffset},this.parentOriginalPosition={x:this.engine.width/2,y:.25*this.engine.height-this.bottomOffset},this.collisionRect={x:-15,y:-15,w:30,h:30},this.model=[{x:-10,y:-20,w:20,h:10},{x:-20,y:-10,w:40,h:10},{x:-20,y:0,w:40,h:10},{x:-10,y:10,w:20,h:10}]}render(){this.makeSound&&(s.changeColorAudio.play(),this.makeSound=!1)}update(t){if(!this.initialized){if(!this.parent)for(let t=0;t<4;t++)this.engine.add(new a(this.engine,this.bottomOffset,this.colorIndex,this.name+"."+t,{x:this.position.x-110,y:this.position.y},this.starId+(t+1),90*t,this));this.initialized=!0}if(this.collisions)for(const t of this.collisions)if(t instanceof h.LaserBeam){this.colorIndex++,this.colorIndex===r.colors.length&&(this.colorIndex=0),this.color=r.colors[this.colorIndex],this.makeSound=!0;break}this.position=0===this.starId||5===this.starId?this.calculateParentPosition(this.starId,t):this.calculateSubPosition(this.starId,t)}calculateParentPosition(t,e){let i=-e/40*.3;return 5===t&&(i+=180),n.rotate(this.parentOriginalPosition,this.parentCenter,i)}calculateSubPosition(t,e){let i=-e/40*.5;i+=90*(t%5-1);const s=this.calculateParentPosition(t<5?0:5,e),o={x:s.x-100,y:s.y};return n.rotate(o,s,i)}}e.Star=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.heuristic=void 0;const s=i(0),n=i(3),o=i(5),h=i(6);e.heuristic=function(t){const e=t.position;let i=1/0,r=null,a=1/0,l=null,c=null,u=!1;for(const e of t.engine.entities){const u=e instanceof o.LaserBeam&&e.owner===t;if(e!==t&&!u&&e.position){const o=s.distance(t.position,e.position);o<i&&(i=o,r=e),e instanceof h.Star&&e.colorIndex!==t.colorIndex&&o<a&&(a=o,l=e),e instanceof n.GameEntity&&("player"===e.type||"computer"===e.type)&&(c=e)}}if((t.position&&i<50||t.evadingTime>0)&&null!=r){r.position.x,t.position.x,r.position.y,t.position.y;t.targetVector={x:1,y:1},t.evadingTime||(t.evadingTime=3),t.evadingTime--,t.mousePosition=s.rotate(t.position,r.position,-5),u=!0}let d=null;if(c&&!c.finished&&(d=c),d||(d=l),d){const i=d.position.x-t.position.x,s=d.position.y-t.position.y;if(t.targetVector={x:i<0?-1:1,y:s<0?-1:1},!u){const e=!(s<10&&s>-10),n=!(i<80&&i>-80),o=i<60&&i>-60;t.mousePosition={x:t.position.x+t.targetVector.x*(n?100:o?-100:0),y:t.position.y+t.targetVector.y*(e?100:0)}}t.position.x===e.x&&t.direction!==t.targetVector.x&&(t.direction=t.targetVector.x),t.shoot=s<40&&s>-40&&t.direction===t.targetVector.x}return{mousePosition:t.mousePosition,shoot:t.shoot}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Explosion=void 0;const s=i(1),n=i(2),o=i(0),h={x:-5,y:-5,w:10,h:10};class r extends n.EntityBase{constructor(t,e){super(t),this.duration=0,this.audioDone=!1,this.color="#FFF",this.position=e,this.audioDone=!1}render(){this.renderExplosion(this.duration,!this.audioDone),this.audioDone=!0}update(t){this.duration++,this.duration>10&&(this.finished=!0)}renderExplosion(t,e){if(e&&s.explosionAudio.play(),t%2){const e={x:0-4*t,y:0};this.model=[];for(let t=0;t<4;t++){const i=o.rotate(e,{x:0,y:0},90*t);this.model.push({x:-5+i.x,y:-5+i.y,w:10,h:10})}this.model.push(h)}}}e.Explosion=r},function(t,e,i){t.exports=i(10)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(11);new(i(12).Engine)},function(t,e,i){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Engine=void 0;const s=i(13),n=i(14),o=i(15),h=i(16),r=i(4);e.Engine=class{constructor(){this.width=800,this.height=600,this.canvasColor="#000",this.touchable=!1,this.entities=[],this.pageColor="#000",this.startTime=(new Date).getTime(),document.onselectstart=()=>!1,document.body.oncontextmenu=()=>!1,document.body.style.background=this.pageColor,this.canvas=document.createElement("canvas"),document.body.appendChild(this.canvas),this.canvas.style.position="absolute",this.canvas.style.backgroundColor="#000",this.controller=this.touchable?new h.TouchController(this):new o.MouseController(this),this.renderer=new s.CanvasRenderer(this),this.startTime=(new Date).getTime(),this.logic=new r.Logic(this),this.add(this.logic),this.animate()}add(t){return this.entities.push(t),t.engine=this,t}update(){const t=(new Date).getTime()-this.startTime;n.calculateCollisions(this.entities),this.updateEntities(t)}contains(t){return this.entities.indexOf(t)>-1}reset(t){this.entities=t?[t]:[],this.startTime=(new Date).getTime(),this.add(this.logic),this.logic.initialized=!1}updateEntities(t){for(const e of this.entities)e.update(t);this.removeFinishedEntities()}removeFinishedEntities(){const t=this.entities;this.entities=[];for(const e of t)e.finished?e.finished&&e.onRemove():this.entities.push(e)}animate(){requestAnimationFrame(()=>{this.animate()}),this.update(),this.renderer.render()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasRenderer=void 0;e.CanvasRenderer=class{constructor(t){this.offsetLeft=0,this.offsetTop=0,this.scale=1,this.engine=t,this.context=this.engine.canvas.getContext("2d"),window.onresize=this.resize.bind(this),this.resize()}render(){this.context.fillStyle=this.engine.canvasColor,this.context.fillRect(0,0,window.innerWidth,window.innerHeight);const t=[];this.engine.entities.forEach(e=>{e.topMost?t.push(e):this.renderEntity(e)}),t.forEach(t=>{this.renderEntity(t)}),this.engine.controller.render(this.context)}resize(){const t=this.engine.canvas;t.style.top="0px",t.style.left="0px",t.width=window.innerWidth,t.height=window.innerHeight;const e=t.width/this.engine.width,i=t.height/this.engine.height;this.scale=e<i?e:i,this.offsetTop=Math.ceil((t.height-this.engine.height*this.scale)/2),this.engine.touchable&&this.offsetTop>40&&(this.offsetTop=40),this.offsetLeft=Math.ceil((this.engine.canvas.width-this.engine.width*this.scale)/2),this.engine.controller.resize()}renderEntity(t){if(t.render(this.context),t.model&&this.drawRects({x:t.position.x,y:t.position.y},t.model,t.color,!0),t.texts)for(const e of t.texts)this.context.font=Math.ceil((e.size||50)*this.scale)+"px "+e.font,this.context.textAlign=e.alignment,this.context.fillStyle=e.color,"center"===e.alignment?this.context.fillText(e.text,Math.ceil(this.engine.width/2*this.scale)+this.offsetLeft,Math.ceil(e.position.y*this.scale)+this.offsetTop):this.context.fillText(e.text,Math.ceil(e.position.x*this.scale)+this.offsetLeft,Math.ceil(e.position.y*this.scale)+this.offsetTop)}drawRects(t,e,i,s){e.forEach(e=>this.drawRect(t,e,i,s))}drawRect(t,e,i,s){s?(this.context.fillStyle=i,this.context.fillRect((e.x+t.x)*this.scale+this.offsetLeft,(e.y+t.y)*this.scale+this.offsetTop,e.w*this.scale,(e.h+2)*this.scale)):(this.context.strokeStyle=i,this.context.strokeRect((e.x+t.x)*this.scale,(e.y+t.y)*this.scale,e.w*this.scale,e.h*this.scale))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateCollisions=void 0;const s=i(0);e.calculateCollisions=function(t){const e=function(t){const e=[];for(const s of t)void 0!==(i=s).position&&void 0!==i.collisions&&void 0!==i.collisionRect&&e.push(s);var i;return e}(t);for(const t of e){t.collisions=[];for(const o of e)t!==o&&(i=t,n=o,s.rectInRect(i.position,i.collisionRect,n.position,n.collisionRect))&&(t.collisions.push(o),o.collisions||(o.collisions=[]),o.collisions.push(t))}var i,n}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MouseController=void 0;const s=i(1);e.MouseController=class{constructor(t){this.buttonDown=!1,this.menuButtonDown=!1,this.mousePosition={x:0,y:0},this.absoluteController=!1;let e=[];t.canvas.addEventListener("mousedown",e=>{t.touchable||(this.buttonDown=!0)}),t.canvas.addEventListener("mousemove",i=>{const s=i||window.event,n={x:(s.clientX-t.renderer.offsetLeft)/t.renderer.scale,y:(s.clientY-t.renderer.offsetTop)/t.renderer.scale};t.touchable||(t.canvas===document.pointerLockElement?(this.mousePosition={x:i.movementX,y:i.movementY},this.absoluteController=!1):(this.mousePosition=n,this.absoluteController=!0)),e=[];for(const i of t.entities)i.mousePosition=n,e.push(i)}),t.canvas.addEventListener("mouseup",i=>{t.touchable||(this.buttonDown=!1),e.forEach(t=>t.onMouseUp()),s.afterInput()})}render(t){}resize(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TouchController=void 0;e.TouchController=class{constructor(t){this.buttonDown=!1,this.menuButtonDown=!1,this.mousePosition={x:0,y:0},this.absoluteController=!1,this.halfWidth=0,this.halfHeight=0,this.leftTouchID=-1,this.rightTouchID=-1,this.secondRightTouchID=-1,this.leftTouchPos={x:0,y:0},this.leftTouchStartPos={x:0,y:0},this.leftVector={x:0,y:0},this.engine=t,this.resize(),this.engine.touchable&&(window.addEventListener("touchstart",this.onTouchStart.bind(this),!1),window.addEventListener("touchend",this.onTouchEnd.bind(this),!1))}resize(){this.halfWidth=window.innerWidth/2,this.halfHeight=window.innerHeight/2}render(t){if(this.engine.touchable){const e="rgba(255,255,255,0.18)";let i=!1,s=!1;if(this.touches)for(let n=0,o=this.touches.length;n<o;n++){const o=this.touches[n];o.identifier===this.leftTouchID?(this.drawCircle(t,e,6,this.leftTouchPos,40),this.drawCircle(t,e,2,this.leftTouchStartPos,60),this.drawCircle(t,e,2,this.leftTouchStartPos,40),i=!0):(this.drawCircle(t,e,6,{x:o.clientX,y:o.clientY},50),s=!0)}if(!i){const i={x:70,y:window.innerHeight-70};this.drawCircle(t,e,6,i,40),this.drawCircle(t,e,2,i,60)}s||this.drawCircle(t,e,6,{x:window.innerWidth-70,y:window.innerHeight-70},50),this.drawCircle(t,e,3,{x:window.innerWidth-20,y:40},15),this.drawLine(t,e,3,{x:window.innerWidth-27,y:35},{x:window.innerWidth-13,y:35}),this.drawLine(t,e,3,{x:window.innerWidth-27,y:40},{x:window.innerWidth-13,y:40}),this.drawLine(t,e,3,{x:window.innerWidth-27,y:45},{x:window.innerWidth-13,y:45})}}inMenuArea(t,e){return t>window.innerWidth-45&&e<55}drawLine(t,e,i,s,n){t.beginPath(),t.strokeStyle=e,t.lineWidth=i,t.moveTo(s.x,s.y),t.lineTo(n.x,n.y),t.closePath(),t.stroke()}drawCircle(t,e,i,s,n){t.beginPath(),t.strokeStyle=e,t.lineWidth=i,t.arc(s.x,s.y,n,0,2*Math.PI,!0),t.stroke()}onTouchStart(t){for(let e=0,i=t.changedTouches.length;e<i;e++){const i=t.changedTouches[e];this.leftTouchID<0&&i.clientX<this.halfWidth?(this.leftTouchID=i.identifier,this.leftTouchStartPos={x:i.clientX,y:i.clientY},this.leftTouchPos={x:i.clientX,y:i.clientY},this.leftVector={x:0,y:0}):this.inMenuArea(i.clientX,i.clientY)?(this.secondRightTouchID=i.identifier,this.menuButtonDown=!0):this.rightTouchID<0&&(this.rightTouchID=i.identifier,this.buttonDown=!0)}this.touches=t.touches}onTouchMove(t){t.preventDefault();for(let e=0,i=t.changedTouches.length;e<i;e++){const i=t.changedTouches[e];if(this.leftTouchID===i.identifier){this.leftTouchPos={x:i.clientX,y:i.clientY},this.leftVector={x:i.clientX-this.leftTouchStartPos.x,y:i.clientY-this.leftTouchStartPos.y},this.mousePosition={x:Math.floor(this.leftVector.x/5),y:Math.floor(this.leftVector.y/5)},this.absoluteController=!1;break}}this.touches=t.touches}onTouchEnd(t){this.touches=t.touches;for(let e=0,i=t.changedTouches.length;e<i;e++){const i=t.changedTouches[e];this.leftTouchID===i.identifier?(this.leftTouchID=-1,this.leftVector={x:0,y:0},this.mousePosition=this.leftVector,this.absoluteController=!1):this.rightTouchID===i.identifier?(this.rightTouchID=-1,this.buttonDown=!1):this.secondRightTouchID===i.identifier&&this.inMenuArea(i.clientX,i.clientY)&&(this.secondRightTouchID=-1,this.menuButtonDown=!1)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Menu=void 0;const s=i(2);class n extends s.EntityBase{constructor(t,e){super(t),this.alignment="start",this.color="#AAA",this.font="CBM64",this.fontSize=50,this.lineSpacing=10,this.topMost=!0,this.mainMenu=[],this.selectedColor="#FFF",this.ignoreNextButtonUp=!1,this.selected=null,this.currentItems=[],Object.assign(this,e),this.setItems(this.mainMenu)}onMouseUp(){this.ignoreNextButtonUp?this.ignoreNextButtonUp=!1:this.selected&&this.selected.onClick&&this.selected.onClick(this.engine)}setItems(t){this.engine.controller.buttonDown&&(this.ignoreNextButtonUp=!0),this.currentItems=t,this.texts=[];let e=0;for(const i of t){let t=i.text;i.getText&&(t=i.getText()),this.texts.push({alignment:this.alignment,font:this.font,color:this.color,size:this.fontSize,text:t,onClick:i.onClick,position:{x:0,y:this.engine.height/3+e*(this.fontSize+this.lineSpacing)}}),e++}}show(t){this.finished&&(this.finished=!1,this.engine.contains(this)||this.engine.add(this),this.gotoRoot()),t&&this.setItems(t)}toggle(){this.finished?(this.finished=!1,this.engine.contains(this)||this.engine.add(this),this.gotoRoot()):this.finished=!0}hide(){this.finished=!0}update(t){if(this.mousePosition&&this.texts){const t=Math.floor((this.mousePosition.y-this.engine.height/3)/60)+1;t>-1&&t<this.texts.length&&this.texts[t].onClick?(this.select(this.texts[t]),this.engine.touchable&&(this.onMouseUp(),this.ignoreNextButtonUp=!0)):this.select(null)}}select(t){this.selected!==t&&(this.selected&&(this.selected.color=this.color),this.selected=t,this.selected&&(this.selected.color=this.selectedColor))}gotoRoot(){this.setItems(this.mainMenu)}}e.Menu=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GameState=void 0;e.GameState=class{constructor(t,e){this.player3=null,this.player4=null,this.player1Score=0,this.player2Score=0,this.gameOver=!1,this.player1Ship=t,this.player2Ship=e}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.gameOverMenu=e.mainMenu=void 0,e.mainMenu=[{text:"    SINGLE PLAYER",onClick:t=>{t.logic.startSinglePlayerGame()}},{text:"    MULTI  PLAYER"},{text:""},{text:"    SETTINGS",onClick:t=>{t.logic.menu.setItems(s)}}];const s=[{text:"AUDIO",onClick:t=>{},getText:()=>{let t;return t="      AUDIO:  ON","      AUDIO:  ON"}},{text:"VIDEO",onClick:t=>{},getText:()=>{let t;return t="      VIDEO:  2D","      VIDEO:  2D"}},{text:""},{text:"      MAIN MENU",onClick:t=>{t.logic.menu.setItems(e.mainMenu)}}];e.gameOverMenu=[{text:"      GAME OVER"},{text:""},{text:"      PLAY AGAIN",onClick:t=>{t.logic.startSinglePlayerGame()}},{text:"      MAIN MENU",onClick:t=>{t.logic.menu.setItems(e.mainMenu)}}]},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ScoreBar=void 0;const s=i(2);class n extends s.EntityBase{constructor(t){super(t),this.name="scorebar",this.direction=1,this.finished=!1,this.color="#00F",this.position={x:this.engine.width/2,y:this.engine.height-36},this.model=[{x:-(this.engine.width-30)/2,y:-25,w:this.engine.width-30,h:50}]}setScore(t,e){this.texts.length||(this.texts=[],this.addScoreBarItem("0","#F00",20),this.addScoreBarItem(" 0","#FF0",this.engine.width-95),this.addScoreBarItem("LASER WAR","#FFF",230)),this.texts[0].text=t.toString(),this.texts[1].text=(e<10?" ":"")+e}addScoreBarItem(t,e,i){this.texts.push({alignment:"start",color:e,font:"CBM64",position:{x:i,y:this.engine.height-15},size:50,text:t})}}e.ScoreBar=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Ship=void 0;const s=i(1),n=i(0),o=i(7),h=i(8),r=i(3),a=i(5),l=i(4),c=i(6);class u extends r.GameEntity{constructor(t,e,i,s,n,o,h){super(t),this.collisionRect={x:-15,y:-10,w:30,h:20},this.shoot=!1,this.speed=3,this.invulerability=1e3,this.audioDone=!1,this.gunOffset={x:40,y:0},this.rectsRight=[{x:-20,y:-15,w:20,h:10},{x:-10,y:-5,w:30,h:10},{x:-20,y:5,w:20,h:10}],this.rectsLeft=[{x:0,y:-15,w:20,h:10},{x:-20,y:-5,w:30,h:10},{x:0,y:5,w:20,h:10}],this.lastTimeCalled=0,this.colorIndex=e,this.type=o,this.laserState=300,this.direction=i,this.color=l.colors[e],this.name=s,this.position=n,this.spawnStar=h}update(t){const e=this.getTimeDelta(t);if(this.invulerability&&(this.invulerability-=e,this.invulerability<0&&(this.invulerability=0)),this.collisions)for(const t of this.collisions){const e=t instanceof a.LaserBeam?t.owner:null,i=this.invulerability&&t===this.spawnStar;if(e!==this&&!i){t instanceof c.Star&&t.parent&&t.color!==this.color&&(t.finished=!0),this.finished=!0;break}}this.updateControllerState(),this.move(e),this.updateLaser(e)}render(){if(!this.audioDone){this.audioDone=!0;try{s.appearAudio.play()}catch(t){}}}onRemove(){this.engine.add(new h.Explosion(this.engine,this.position))}getTimeDelta(t){this.lastTimeCalled||(this.lastTimeCalled=t);const e=t-this.lastTimeCalled;return this.lastTimeCalled=t,e}move(t){const e=this.position;this.position=this.calculateMovement(this.position,this.mousePosition,10,t),this.position.x>e.x?this.direction=1:this.position.x<e.x&&(this.direction=-1),this.model=1===this.direction?this.rectsRight:this.rectsLeft}updateLaser(t){this.shoot&&this.laserState>=300?(this.laserState=0,this.gunOffset.x=1===this.direction?40:-40,this.engine.add(new a.LaserBeam(this.engine,this.direction,this,{x:this.position.x+this.gunOffset.x,y:this.position.y+this.gunOffset.y}))):this.laserState<300?this.laserState=this.laserState+t:this.laserState=300}updateControllerState(){if(this.shoot=!1,"computer"!==this.type)this.shoot=this.engine.controller.buttonDown,this.mousePosition=this.correctMousePosition(this.engine.controller.mousePosition,this.engine.controller.absoluteController);else if("computer"===this.type){const t=(this.name,o.heuristic(this));this.mousePosition=t.mousePosition,this.shoot=t.shoot}}correctMousePosition(t,e){return e?t:{x:t.x+this.position.x,y:t.y+this.position.y}}calculateMovement(t,e,i,s){const o=e.x-t.x,h=e.y-t.y,r=n.distance(t,e);let a=.25;const l=i*(s/35);r>l&&(a=l/r);let c=this.position.x+o*a,u=this.position.y+h*a;return c<0&&(c=0),c>this.engine.width&&(c=this.engine.width),u<0&&(u=0),u>this.engine.height&&(u=this.engine.height),{x:c,y:u}}}e.Ship=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Ufo=void 0;const s=i(1),n=i(0),o=i(7),h=i(8),r=i(3),a=i(5),l=i(4),c=[[{x:-10,y:-15,w:20,h:10},{x:-10,y:-5,w:30,h:10},{x:-10,y:5,w:20,h:10}],[{x:-10,y:-15,w:20,h:10},{x:-20,y:-5,w:10,h:10},{x:0,y:-5,w:20,h:10},{x:-10,y:5,w:20,h:10}],[{x:-10,y:-15,w:20,h:10},{x:-20,y:-5,w:20,h:10},{x:10,y:-5,w:10,h:10},{x:-10,y:5,w:20,h:10}],[{x:-10,y:-15,w:20,h:10},{x:-20,y:-5,w:30,h:10},{x:-10,y:5,w:20,h:10}],[{x:-10,y:-15,w:20,h:10},{x:-20,y:-5,w:40,h:10},{x:-10,y:5,w:20,h:10}]];class u extends r.GameEntity{constructor(t,e,i,s){super(t),this.direction=1,this.collisionRect={x:-20,y:-15,w:40,h:30},this.shoot=!1,this.laserState=10,this.audioDone=!1,this.speed=3,this.invulerability=20,this.nextFrame=!1,this.gunOffset={x:40,y:0},this.ufoFrame=0,this.lastTimeCalled=0,this.lastTimeFrameChanged=0,this.colorIndex=e,this.direction=-1,this.name=i,this.type="computer",this.color=l.colors[e],this.position=s}render(){if(!this.audioDone){this.audioDone=!0;try{s.appearAudio.play()}catch(t){}}}update(t){this.handleCollisions();const e=o.heuristic(this);this.mousePosition=e.mousePosition,this.shoot=e.shoot;const i=this.getTimeDelta(t);this.position=this.calculateMovement(this.position,this.mousePosition,10,i),this.handleLaser(t),this.handleAnimation(t)}onRemove(){this.engine.add(new h.Explosion(this.engine,this.position))}getTimeDelta(t){this.lastTimeCalled||(this.lastTimeCalled=t);const e=t-this.lastTimeCalled;return this.lastTimeCalled=t,e}calculateMovement(t,e,i,s){let o=t;if(e){const h=e.x-t.x,r=e.y-t.y,a=n.distance(t,e);let l=.25;const c=i*(s/40);a>c&&(l=c/a),o={x:this.position.x+h*l,y:this.position.y+r*l}}return o}handleCollisions(){if(this.invulerability&&this.invulerability--,this.collisions)for(const t of this.collisions){if(!(t instanceof a.LaserBeam&&t.owner===this)&&!this.invulerability){const e=this.engine.logic.gameState;!e.gameOver&&!this.finished&&t instanceof a.LaserBeam&&(t.owner===e.player1Ship&&e.player1Score++,t.owner===e.player2Ship&&e.player2Score++),this.finished=!0;break}}}handleLaser(t){this.shoot&&10===this.laserState?(this.laserState=-20,this.gunOffset.x=1===this.direction?40:-40,this.engine.add(new a.LaserBeam(this.engine,this.direction,this,{x:this.position.x+this.gunOffset.x,y:this.position.y+this.gunOffset.y}))):10!==this.laserState&&(this.laserState=this.laserState+2)}handleAnimation(t){this.direction=1,this.mousePosition&&this.position.x<this.mousePosition.x&&(this.direction=-1),this.lastTimeFrameChanged||(this.lastTimeFrameChanged=t);t-this.lastTimeFrameChanged>80&&(this.lastTimeFrameChanged=t,this.model=c[this.ufoFrame],this.ufoFrame+=this.direction,this.ufoFrame>=c.length&&(this.ufoFrame=0),this.ufoFrame<0&&(this.ufoFrame=c.length-1)),0===this.ufoFrame||1===this.ufoFrame||2===this.ufoFrame?this.direction=1:(3===this.ufoFrame||4===this.ufoFrame)&&(this.direction=-1)}}e.Ufo=u}]);
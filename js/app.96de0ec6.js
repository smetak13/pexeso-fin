(function(e){function t(t){for(var r,c,s=t[0],p=t[1],o=t[2],l=0,f=[];l<s.length;l++)c=s[l],a[c]&&f.push(a[c][0]),a[c]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);g&&g(t);while(f.length)f.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var p=n[s];0!==a[p]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var g=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"026b":function(e,t,n){e.exports=n.p+"img/7.3a23cf05.png"},"06b1":function(e,t,n){e.exports=n.p+"img/12.30fbfe74.png"},"080e":function(e,t,n){e.exports=n.p+"img/14.3fc9b9b1.png"},"0ad6":function(e,t,n){e.exports=n.p+"img/14.0046d29e.png"},"0f86":function(e,t,n){e.exports=n.p+"img/6.b0a72335.png"},"10f7":function(e,t,n){e.exports=n.p+"img/28.8f9a9b14.png"},"12d9":function(e,t,n){e.exports=n.p+"img/18.efd3052b.png"},"13d2":function(e,t,n){e.exports=n.p+"img/9.15457d9f.png"},1553:function(e,t,n){e.exports=n.p+"img/main.1f70d24f.png"},"1faf":function(e,t,n){e.exports=n.p+"img/back.5d563b57.png"},2878:function(e,t,n){e.exports=n.p+"img/15.f9d242b6.png"},"2c0c":function(e,t,n){e.exports=n.p+"img/19.974e92eb.png"},"2c1c":function(e,t,n){e.exports=n.p+"img/20.98428900.png"},3222:function(e,t,n){e.exports=n.p+"img/13.2883a3a7.png"},3313:function(e,t,n){e.exports=n.p+"img/5.8ca72520.png"},3885:function(e,t,n){e.exports=n.p+"img/1.c5ddccf4.png"},"3ff0":function(e,t,n){e.exports=n.p+"img/13.118e552d.png"},"42de":function(e,t,n){e.exports=n.p+"img/17.aea18231.png"},"466a":function(e,t,n){e.exports=n.p+"img/20.77b47d82.png"},"47cf":function(e,t,n){e.exports=n.p+"img/9.ec4488fe.png"},"47f5":function(e,t,n){e.exports=n.p+"img/3.00e145ac.png"},"4b46":function(e,t,n){e.exports=n.p+"img/1.e7de0383.png"},"4b60":function(e,t,n){e.exports=n.p+"img/10.e9c9c95c.png"},"4ba9":function(e,t,n){e.exports=n.p+"img/11.d7ad020b.png"},5411:function(e,t,n){e.exports=n.p+"img/18.d1ecfd46.png"},5419:function(e,t,n){e.exports=n.p+"img/24.30a81fc6.png"},"545a":function(e,t,n){e.exports=n.p+"img/13.3f7e5059.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("main-menu",{attrs:{selectPage:e.selectPage,pageSelected:e.pageSelected,player1:e.player1,player2:e.player2}}),n("game",{attrs:{selectPage:e.selectPage,pageSelected:e.pageSelected,player1:e.player1,player2:e.player2}}),n("result",{attrs:{pageSelected:e.pageSelected,player1:e.player1,player2:e.player2}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"menu"===e.pageSelected?n("div",{staticClass:"menu text-center"},[n("h1",[e._v("Choose your name")]),n("hr"),n("h2",[e._v("Player 1:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.player1.name,expression:"player1.name"}],attrs:{type:"text",placeholder:"Write your name here..."},domProps:{value:e.player1.name},on:{input:function(t){t.target.composing||e.$set(e.player1,"name",t.target.value)}}}),n("h2",[e._v("Player 2:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.player2.name,expression:"player2.name"}],attrs:{type:"text",placeholder:"Write your name here..."},domProps:{value:e.player2.name},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.selectPage("game")},input:function(t){t.target.composing||e.$set(e.player2,"name",t.target.value)}}}),n("br"),n("br"),n("br"),n("button",{staticClass:"btn btn-lg btn-danger",attrs:{disabled:void 0===e.player1.name||void 0===e.player2.name},on:{click:function(t){e.selectPage("game")}}},[e._v("Next screen")])]):e._e()},s=[],p={props:["selectPage","pageSelected","player1","player2"]},o=p,g=n("2877"),l=Object(g["a"])(o,c,s,!1,null,null,null);l.options.__file="MainMenu.vue";var f=l.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["game"===e.pageSelected?n("div",{staticClass:"game text-center"},[n("h1",[e._v("Select Pexeso")]),n("hr"),n("div",{staticClass:"pexeso-show"},e._l(e.pexesoDecks,function(t,r){return n("div",{key:r,staticClass:"each-pexeso",class:{"pexeso-active":e.activeDeck===e.pexesoDecks[r]},on:{click:function(t){e.selectPexeso(r)}}},[n("h3",{staticClass:"pexeso-header"},[e._v(e._s(t.name))]),n("br"),n("img",{staticClass:"pexeso-main img-fluid",attrs:{src:e.getPexesoImage(r),alt:"pexeso"}})])})),n("button",{staticClass:"btn btn-lg btn-danger margin-top-60",attrs:{disabled:void 0===e.activeDeck},on:{click:function(t){e.selectPage("board")}}},[e._v("Start Game")])]):e._e(),n("board",{attrs:{selectPage:e.selectPage,pageSelected:e.pageSelected,pexesoDecks:e.pexesoDecks,activeDeck:e.activeDeck,player1:e.player1,player2:e.player2}})],1)},u=[],h=(n("ac6a"),n("d4ec")),m=n("bee2"),v=function(){function e(t,n,r){Object(h["a"])(this,e),this.name=t,this.pathName=n,this.numberOfCards=r,this.cards=[]}return Object(m["a"])(e,[{key:"createCards",value:function(){for(var e=1;e<=this.numberOfCards/2;e++)this.cards.push({cardName:e})}},{key:"makePairs",value:function(){var e=this,t=this.cards.slice(0);t.forEach(function(t){e.cards.push(t)})}},{key:"shuffleDeck",value:function(){for(var e=this.cards.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),n=[this.cards[t],this.cards[e]];this.cards[e]=n[0],this.cards[t]=n[1]}}}]),e}(),y=new v("Harry Potter","harryPotter",56),b=new v("Lord of the Rings","lotr",38),x=new v("Stranger Things","strangerThings",40),P=[y,b,x];function _(e){e.forEach(function(e){e.createCards(),e.makePairs(),e.shuffleDeck()})}document.addEventListener("DOMContentLoaded",_(P));var C=P,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"board"===e.pageSelected?n("div",{staticClass:"game"},[n("div",{staticClass:"score text-center"},[n("h3",{class:{active:e.isPlayer1Active,passive:!e.isPlayer1Active}},[e._v(" "+e._s(e.player1.name))]),n("h3",[e._v(e._s(e.player1.score)+" | "+e._s(e.player2.score))]),n("h3",{class:{active:!e.isPlayer1Active,passive:e.isPlayer1Active}},[e._v(" "+e._s(e.player2.name)+" ")])]),n("div",{staticClass:"game-board"},e._l(e.activeDeck.cards,function(t,r){return n("div",{key:r,staticClass:"card"},[n("img",{staticClass:"img-fluid",class:{"card-img-sm":e.activeDeck.numberOfCards>40,"card-img-lg":e.activeDeck.numberOfCards<=40},attrs:{src:e.imgSrc(r)},on:{click:function(t){e.onImgClick(r)}}})])}))]):e._e()},w=[],S=(n("6762"),n("2fdb"),{props:["selectPage","pageSelected","pexesoDecks","activeDeck","player1","player2"],data:function(){return{isPlayer1Active:!0,wasPlayerSuccessful:!1,activeCard:{card1:void 0,card2:void 0},loading:!1,discardedCards:[]}},methods:{imgSrc:function(e){return this.activeCard.card1===e||this.activeCard.card2===e?n("b967")("./"+this.activeDeck.pathName+"/"+this.activeDeck.cards[e].cardName+".png"):this.discardedCards.includes(e)?n("c9db"):n("1faf")},onImgClick:function(e){this.activeCard.card1===e||this.activeCard.card2===e||this.discardedCards.includes(e)||this.flipCard(e)},flipCard:function(e){if(!this.loading)if(void 0===this.activeCard.card1)this.activeCard.card1=e;else{if(this.activeCard.card2=e,this.activeCard.card2===this.activeCard.card1)return;this.evaluate()}},evaluate:function(){var e=this;this.loading=!0,setTimeout(function(){e.countScore(),e.reset()},1500)},countScore:function(){if(this.wasPlayerSuccessful=!1,this.activeDeck.cards[this.activeCard.card1].cardName===this.activeDeck.cards[this.activeCard.card2].cardName&&(this.isPlayer1Active?(this.player1.score+=1,this.wasPlayerSuccessful=!0):(this.player2.score+=1,this.wasPlayerSuccessful=!0),this.discardedCards.push(this.activeCard.card1),this.discardedCards.push(this.activeCard.card2),this.discardedCards.length===this.activeDeck.cards.length))return this.selectPage("result")},switchPlayers:function(){this.isPlayer1Active=!this.isPlayer1Active},reset:function(){this.activeCard.card1=void 0,this.activeCard.card2=void 0,this.loading=!1,this.wasPlayerSuccessful||this.switchPlayers()}}}),D=S,T=Object(g["a"])(D,k,w,!1,null,null,null);T.options.__file="Board.vue";var O=T.exports,j={components:{Board:O},props:["selectPage","pageSelected","player1","player2"],data:function(){return{pexesoDecks:C,activeDeck:void 0}},methods:{getPexesoImage:function(e){return n("d13a")("./"+this.pexesoDecks[e].pathName+"/main.png")},selectPexeso:function(e){this.activeDeck=this.pexesoDecks[e]}}},M=j,N=Object(g["a"])(M,d,u,!1,null,null,null);N.options.__file="Game.vue";var E=N.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"result"===e.pageSelected?n("div",{staticClass:"result text-center"},[n("h1",[e._v("Result")]),n("hr"),e.player1.score>e.player2.score?n("h4",[e._v(e._s(e.player1.name)+" won with a total of "+e._s(e.player1.score)+" points.")]):e.player2.score>e.player1.score?n("h4",[e._v(" "+e._s(e.player2.name)+" won with a total of "+e._s(e.player2.score)+" points.")]):n("h4",[e._v(" Match ended as a draw.")]),n("br"),n("br"),n("button",{staticClass:"btn btn-lg btn-danger",on:{click:function(t){e.newGame()}}},[e._v("Start a new game")])]):e._e()},$=[],G={props:["pageSelected","player1","player2"],data:function(){return{resultMessage:""}},methods:{newGame:function(){location.reload()}}},L=G,I=Object(g["a"])(L,A,$,!1,null,null,null);I.options.__file="Result.vue";var R=I.exports,U={name:"app",components:{MainMenu:f,Game:E,Result:R},data:function(){return{pageSelected:"menu",player1:{name:void 0,score:0},player2:{name:void 0,score:0}}},methods:{selectPage:function(e){this.pageSelected=e}}},B=U,F=Object(g["a"])(B,a,i,!1,null,null,null);F.options.__file="App.vue";var J=F.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(J)}}).$mount("#app")},"57ac":function(e,t,n){e.exports=n.p+"img/19.bf67c6ef.png"},5980:function(e,t,n){e.exports=n.p+"img/1.97465f45.png"},6281:function(e,t,n){e.exports=n.p+"img/14.a30986d1.png"},"67bf":function(e,t,n){e.exports=n.p+"img/6.1c2c2c24.png"},"67ce":function(e,t,n){e.exports=n.p+"img/16.8616b0bd.png"},"68a3":function(e,t,n){e.exports=n.p+"img/15.56deea27.png"},"6cdd":function(e,t,n){e.exports=n.p+"img/10.118d3744.png"},"6cf6":function(e,t,n){e.exports=n.p+"img/15.69e4bbfc.png"},"6f4f":function(e,t,n){e.exports=n.p+"img/7.9c9f4f1c.png"},"72c8":function(e,t,n){e.exports=n.p+"img/16.56944f9f.png"},"762d":function(e,t,n){e.exports=n.p+"img/21.63c19b7b.png"},"77d6":function(e,t,n){e.exports=n.p+"img/4.3e4e6ea8.png"},7956:function(e,t,n){e.exports=n.p+"img/25.96eeb50d.png"},"7a74":function(e,t,n){e.exports=n.p+"img/26.614735d0.png"},"7dfc":function(e,t,n){e.exports=n.p+"img/3.c0edd9de.png"},8201:function(e,t,n){e.exports=n.p+"img/17.90d741fd.png"},8996:function(e,t,n){e.exports=n.p+"img/7.408b78dc.png"},9110:function(e,t,n){e.exports=n.p+"img/12.8e82c0fc.png"},9356:function(e,t,n){e.exports=n.p+"img/18.d760048e.png"},9414:function(e,t,n){e.exports=n.p+"img/2.da40f450.png"},"96b5":function(e,t,n){e.exports=n.p+"img/10.3cd58811.png"},"96fb":function(e,t,n){e.exports=n.p+"img/23.38ee453f.png"},"9c1a":function(e,t,n){e.exports=n.p+"img/11.ec372b5a.png"},"9c4c":function(e,t,n){e.exports=n.p+"img/main.258f2897.png"},a8c9:function(e,t,n){e.exports=n.p+"img/8.8c38f455.png"},b142:function(e,t,n){e.exports=n.p+"img/11.90a83d02.png"},b967:function(e,t,n){var r={"./back.png":"1faf","./end.png":"c9db","./harryPotter/1.png":"3885","./harryPotter/10.png":"96b5","./harryPotter/11.png":"9c1a","./harryPotter/12.png":"9110","./harryPotter/13.png":"3222","./harryPotter/14.png":"080e","./harryPotter/15.png":"6cf6","./harryPotter/16.png":"72c8","./harryPotter/17.png":"d9a9","./harryPotter/18.png":"9356","./harryPotter/19.png":"2c0c","./harryPotter/2.png":"f016","./harryPotter/20.png":"466a","./harryPotter/21.png":"762d","./harryPotter/22.png":"e3e1","./harryPotter/23.png":"96fb","./harryPotter/24.png":"5419","./harryPotter/25.png":"7956","./harryPotter/26.png":"7a74","./harryPotter/27.png":"f57f","./harryPotter/28.png":"10f7","./harryPotter/3.png":"7dfc","./harryPotter/4.png":"bf6c","./harryPotter/5.png":"e6a1","./harryPotter/6.png":"67bf","./harryPotter/7.png":"026b","./harryPotter/8.png":"d5ab","./harryPotter/9.png":"e83a","./harryPotter/main.png":"9c4c","./lotr/1.png":"5980","./lotr/10.png":"4b60","./lotr/11.png":"4ba9","./lotr/12.png":"bf6b","./lotr/13.png":"545a","./lotr/14.png":"0ad6","./lotr/15.png":"2878","./lotr/16.png":"67ce","./lotr/17.png":"8201","./lotr/18.png":"12d9","./lotr/19.png":"57ac","./lotr/2.png":"eaee","./lotr/3.png":"cbf2","./lotr/4.png":"77d6","./lotr/5.png":"3313","./lotr/6.png":"e0ee","./lotr/7.png":"6f4f","./lotr/8.png":"a8c9","./lotr/9.png":"13d2","./lotr/main.png":"1553","./strangerThings/1.png":"4b46","./strangerThings/10.png":"6cdd","./strangerThings/11.png":"b142","./strangerThings/12.png":"06b1","./strangerThings/13.png":"3ff0","./strangerThings/14.png":"6281","./strangerThings/15.png":"68a3","./strangerThings/16.png":"e6b7","./strangerThings/17.png":"42de","./strangerThings/18.png":"5411","./strangerThings/19.png":"d353","./strangerThings/2.png":"9414","./strangerThings/20.png":"2c1c","./strangerThings/3.png":"47f5","./strangerThings/4.png":"f1b7","./strangerThings/5.png":"c8ca","./strangerThings/6.png":"0f86","./strangerThings/7.png":"8996","./strangerThings/8.png":"de83","./strangerThings/9.png":"47cf","./strangerThings/main.png":"ffa8"};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="b967"},bf6b:function(e,t,n){e.exports=n.p+"img/12.10b64f59.png"},bf6c:function(e,t,n){e.exports=n.p+"img/4.0089d665.png"},c8ca:function(e,t,n){e.exports=n.p+"img/5.bd99fa8e.png"},c9db:function(e,t,n){e.exports=n.p+"img/end.0cebf43f.png"},cbf2:function(e,t,n){e.exports=n.p+"img/3.65b24c92.png"},d13a:function(e,t,n){var r={"./harryPotter/main.png":"9c4c","./lotr/main.png":"1553","./strangerThings/main.png":"ffa8"};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="d13a"},d353:function(e,t,n){e.exports=n.p+"img/19.98c450fd.png"},d5ab:function(e,t,n){e.exports=n.p+"img/8.76f2e9a8.png"},d9a9:function(e,t,n){e.exports=n.p+"img/17.030f1fc4.png"},de83:function(e,t,n){e.exports=n.p+"img/8.ab08e66e.png"},e0ee:function(e,t,n){e.exports=n.p+"img/6.81e22098.png"},e3e1:function(e,t,n){e.exports=n.p+"img/22.3f4383a5.png"},e6a1:function(e,t,n){e.exports=n.p+"img/5.531a333f.png"},e6b7:function(e,t,n){e.exports=n.p+"img/16.2376421d.png"},e83a:function(e,t,n){e.exports=n.p+"img/9.87289e89.png"},eaee:function(e,t,n){e.exports=n.p+"img/2.ab38b2ee.png"},f016:function(e,t,n){e.exports=n.p+"img/2.33960ea5.png"},f1b7:function(e,t,n){e.exports=n.p+"img/4.125ded65.png"},f57f:function(e,t,n){e.exports=n.p+"img/27.1e21d948.png"},ffa8:function(e,t,n){e.exports=n.p+"img/main.668e623a.png"}});
//# sourceMappingURL=app.96de0ec6.js.map
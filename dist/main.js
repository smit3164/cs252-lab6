!function(e){function t(t){for(var n,l,i=t[0],c=t[1],s=t[2],m=0,f=[];m<i.length;m++)l=i[m],o[l]&&f.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={0:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/public/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;r.push([534,1]),a()}({353:function(e,t,a){var n=a(354);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(46)(n,o);n.locals&&(e.exports=n.locals)},354:function(e,t,a){(e.exports=a(45)(!1)).push([e.i,".homePage {\n  display: flex; }\n  .homePage .Content {\n    flex: 1;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    height: 30%;\n    width: 50%;\n    margin: -15% 0 0 -25%; }\n  .homePage .flex {\n    display: flex;\n    justify-content: space-around; }\n",""])},508:function(e,t,a){var n=a(509);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(46)(n,o);n.locals&&(e.exports=n.locals)},509:function(e,t,a){(e.exports=a(45)(!1)).push([e.i,".gamePage {\n  display: flex; }\n  .gamePage .Content {\n    flex: 1;\n    margin-top: 24px;\n    margin-left: 24px; }\n  .gamePage .flex {\n    display: flex;\n    justify-content: space-around; }\n\n.container {\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\n.box {\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n  display: inline-block;\n  line-height: 50px;\n  background-color: #FFFFFF; }\n\n.box:hover {\n  background-color: #dddddd; }\n\n/*.box1 {\r\n  width: 80px;\r\n  height: 80px;\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  line-height: 80px;\r\n  background-color: #7FFF00;\r\n}*/\n.board {\n  display: inline-flex;\n  flex-wrap: wrap;\n  width: 400px; }\n",""])},512:function(e,t,a){var n=a(513);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(46)(n,o);n.locals&&(e.exports=n.locals)},513:function(e,t,a){(e.exports=a(45)(!1)).push([e.i,".leaderboardPage .Content {\n  margin-top: 24px;\n  margin-left: 24px; }\n\n.leaderboardPage .flex {\n  display: flex;\n  justify-content: space-around; }\n",""])},514:function(e,t,a){var n=a(515);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(46)(n,o);n.locals&&(e.exports=n.locals)},515:function(e,t,a){(e.exports=a(45)(!1)).push([e.i,".roomsListPage .Content {\n  margin-top: 24px;\n  margin-left: 24px; }\n\n.roomsListPage .table {\n  background-color: #FFFFFF; }\n\n.roomsListPage .flex {\n  display: flex;\n  justify-content: space-around; }\n",""])},516:function(e,t,a){var n=a(517);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(46)(n,o);n.locals&&(e.exports=n.locals)},517:function(e,t,a){var n=a(242);(e.exports=a(45)(!1)).push([e.i,"html, body, #app {\n  height: 100%;\n  margin: 0;\n  background-image: url("+n(a(518))+"); }\n",""])},518:function(e,t,a){e.exports=a.p+"0436a9ab4c9504311cec70dd650944cb.jpg"},534:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),l=a.n(r),i=a(544),c=a(546),s=a(547),u=a(543),m=a(540),f=a(541),p=a(66),d=a(542),h=a(16);function y(){return!!localStorage.getItem("accountToken")}a(353);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var S=new h.auth.GoogleAuthProvider,w=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=v(t).call(this),e=!n||"object"!==b(n)&&"function"!=typeof n?E(a):n,k(E(e),"openModal",function(){e.setState({showLogoutModal:!0})}),k(E(e),"closeModal",function(){e.setState({showLogoutModal:!1})}),k(E(e),"loginProcedure",function(){E(e);var t=h,a=console;h.auth().signInWithPopup(S).then(function(e){a.log("I'm in");var n=e.credential.accessToken;localStorage.setItem("accountToken",n);var o=e.user;localStorage.setItem("user",o);var r=o.uid;localStorage.setItem("uid",r);var l=o.email,i=o.displayName,c="PlayerInfo/listOfPlayers/"+r;t.database().ref("PlayerInfo/listOfPlayers/").once("value",function(e){a.log("hasChild: ",e.hasChild(r)),e.hasChild(r)||t.database().ref(c).set({uid:r,name:i,email:l,wins:0,kills:0}).then(function(e){console.log("data ",e)}).catch(function(e){console.log("error ",e)})})}).catch(function(e){e.code,e.message,e.email,e.credential})}),k(E(e),"logoutProcedure",function(){h.auth().signOut(),localStorage.removeItem("accountToken"),localStorage.removeItem("user"),e.setState({showLogoutModal:!1})}),e.state={showLogoutModal:!1,loggedIn:!1},e}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){var e=this;this.authChecker=h.auth().onAuthStateChanged(function(t){t?(console.log(t),e.setState({loggedIn:!0})):(console.log("not logged in"),e.setState({loggedIn:!1}))})}},{key:"componentWillUnmount",value:function(){this.authChecker()}},{key:"render",value:function(){return y()?o.a.createElement("div",{className:"homePage"},o.a.createElement("div",{className:"Content"},o.a.createElement("center",null,o.a.createElement("h1",null,o.a.createElement("b",null,"Sneaky Strikers")),o.a.createElement(m.a,{to:"/game/someRandomRoomUID"},o.a.createElement(f.a,{size:"big",id:"startButton"},o.a.createElement(p.a,{name:"game"}),"Start a game")),o.a.createElement(m.a,{to:"/rooms"},o.a.createElement(f.a,{size:"big",id:"roomButton"},o.a.createElement(p.a,{name:"group"}),"View Rooms")),o.a.createElement(m.a,{to:"/leaderboard"},o.a.createElement(f.a,{size:"big",id:"leaderboardButton"},o.a.createElement(p.a,{name:"chess king"}),"Leaderboard")),o.a.createElement(f.a,{size:"big",onClick:this.openModal},o.a.createElement(p.a,{name:"log out"}),"Log out"),o.a.createElement(d.a,{open:this.state.showLogoutModal,onClose:this.closeModal,closeIcon:!0},o.a.createElement(d.a.Header,null,"Log out"),o.a.createElement(d.a.Content,null,o.a.createElement("p",null,"Are you sure you want to log out?")),o.a.createElement(d.a.Actions,null,o.a.createElement(f.a,{color:"green",onClick:this.logoutProcedure},o.a.createElement(p.a,{name:"checkmark"})," Yes"),o.a.createElement(f.a,{color:"red",onClick:this.closeModal},o.a.createElement(p.a,{name:"remove"})," No, do not log out")))),o.a.createElement("div",{className:"Flex"}))):o.a.createElement("div",{className:"homePage"},o.a.createElement("div",{className:"Content"},o.a.createElement("center",null,o.a.createElement("h2",null,"Sneaky Strikers"),o.a.createElement(f.a,{id:"loginButton",onClick:this.loginProcedure},o.a.createElement(p.a,{name:"google"}),"Log In with Google"),o.a.createElement(m.a,{to:"/leaderboard"},o.a.createElement(f.a,{id:"leaderboardButton"},o.a.createElement(p.a,{name:"chess king"}),"Leaderboard"))),o.a.createElement("div",{className:"Flex"})))}}])&&g(a.prototype,n),r&&g(a,r),t}();a(508);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var I=["A","B","C","D"],R=[0,7,56,63],N=function(e){function t(e){var a,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=O(t).call(this,e),a=!o||"object"!==C(o)&&"function"!=typeof o?j(n):o,_(j(a),"updateAliveCount",function(e){e?a.setState({aliveCount:a.aliveCount-1}):a.setState({aliveCount:a.AliveCount+1})}),_(j(a),"updatePlayers",function(e){e?a.setState({playerCount:a.playerCount+1}):a.setState({playerCount:a.playerCount-1})}),_(j(a),"updateActivePlayer",function(){}),_(j(a),"openModal",function(){a.setState({showHomeModal:!0})}),_(j(a),"closeModal",function(){a.setState({showHomeModal:!1})}),_(j(a),"goHome",function(){a.props.history.push("/")}),_(j(a),"setRPS",function(e){var t=Array(3).fill(!1);t[e]=!0,a.setState({chosenRPS:t})});var r=Array(64).fill("");return r[0]="A",r[7]="B",r[56]="C",r[63]="D",a.state={showHomeModal:!1,gameID:"someRandomRoomUID",playerTable:null,playerCount:0,aliveCount:0,activePlayer:0,chosenRPS:Array(3).fill(!1),turnCount:3,activePlayerPosition:0,turnTime:60,inventoryVisible:!1,board:r,fbPlayerList:[],playerArray:[]},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,o.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){var e=this;this.setState({gameID:this.props.match.params.gameID});var t=this,a=[];h.database().ref("Rooms/"+this.state.gameID+"/players").once("value",function(n){n.forEach(function(e){a.push(e.toJSON())}),e.setState({fbPlayerList:a});var o=e.state.playerArray;for(var r in t.state.fbPlayerList)o[r]=t.state.fbPlayerList[r],console.log(o[r].isAlive);e.setState({playerArray:o})})}},{key:"movePossible",value:function(e,t){return 4==this.state.fbPlayerList.length&&(this.state.chosenRPS[0]||this.state.chosenRPS[1]||this.state.chosenRPS[2])&&(e-1===t&&e%8!=0&&t%8!=7||e+1===t&&e%8!=7&&t%8!=0||e+8===t||e-8===t)}},{key:"onClick",value:function(e){if(console.log(e),console.log("test: ",this.state.playerArray[0].blockNum),this.movePossible(R[this.state.activePlayer],e)){for(var t=0;t<4;t++)if(e!=R[this.state.activePlayer]&&e==R[t])return void console.log("Fight Clubbbbb");var a=this.state.board;a[e]=I[this.state.activePlayer],null!=R[this.state.activePlayer]&&R[this.state.activePlayer]!=e?a[R[this.state.activePlayer]]=null:console.log("garbage blah blah"),R[this.state.activePlayer]=e;var n=this.state.activePlayer,o=0;if(3==this.state.turnCount)o=2;else if(2==this.state.turnCount)o=1;else if(1==this.state.turnCount){this.state.activePlayer;n=(this.state.activePlayer+1)%4,o=3}else 0==this.state.turnCount?(console.log("not right turn num left"),n=0,o=3):console.log("Invalid activePlayer value");console.log("tc= "+o),this.setState({board:a,activePlayerPosition:e,activePlayer:n,turnCount:o})}else console.log("Not a legal move.")}},{key:"render",value:function(){var e=this;if(!y())return o.a.createElement(u.a,{to:"/"});var t=this.state.board.map(function(t,a){return o.a.createElement("div",{className:"box",onClick:function(){return e.onClick(a)},key:a},t)});return o.a.createElement("div",{className:"gamePage"},o.a.createElement("div",{className:"Content"},o.a.createElement("center",null,o.a.createElement("h1",null,o.a.createElement("b",null,"Game")),o.a.createElement(f.a,{size:"big",id:"homeButton",onClick:this.openModal},o.a.createElement(p.a,{name:"arrow left"}),"Back to Home Page"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"board"},t)),o.a.createElement(f.a.Group,null,o.a.createElement(f.a,{size:"big",toggle:!0,active:this.state.chosenRPS[0],onClick:function(){return e.setRPS(0)}},o.a.createElement(p.a,{name:"hand rock"})),o.a.createElement(f.a.Or,{size:"big"}),o.a.createElement(f.a,{size:"big",toggle:!0,active:this.state.chosenRPS[1],onClick:function(){return e.setRPS(1)}},o.a.createElement(p.a,{name:"hand paper"})),o.a.createElement(f.a.Or,{size:"big"}),o.a.createElement(f.a,{size:"big",toggle:!0,active:this.state.chosenRPS[2],onClick:function(){return e.setRPS(2)}},o.a.createElement(p.a,{name:"hand scissors"}))),o.a.createElement("p",null,"activePlayerPosition: ",this.state.activePlayerPosition),o.a.createElement("p",null,"activePlayer: ",this.state.activePlayer,", ",I[this.state.activePlayer]),o.a.createElement("p",null,"lastPosArray[",this.state.activePlayer,"]: ",R[this.state.activePlayer]),o.a.createElement("p",null,"Number Of Moves Remaining: ",this.state.turnCount),o.a.createElement(d.a,{open:this.state.showHomeModal,onClose:this.closeModal,closeIcon:!0},o.a.createElement(d.a.Header,null,"Leave Game"),o.a.createElement(d.a.Content,null,o.a.createElement("p",null,"Are you sure you want to leave the game and go back to the home page?")),o.a.createElement(d.a.Actions,null,o.a.createElement(f.a,{color:"green",onClick:this.goHome},o.a.createElement(p.a,{name:"checkmark"})," Yes"),o.a.createElement(f.a,{color:"red",onClick:this.closeModal},o.a.createElement(p.a,{name:"remove"})," No, do not leave")))),o.a.createElement("div",{className:"Flex"})))}}])&&x(a.prototype,n),r&&x(a,r),t}(),A=a(64);a(160),a(512);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=F(this,T(t).call(this,e))).state={data:[]},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,o.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=console,a=this,n=[];h.database().ref("PlayerInfo/listOfPlayers").once("value",function(o){o.forEach(function(e){n.push(e.toJSON())}),e.setState({data:n}),t.log("data",a.state.data)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"leaderboardPage"},o.a.createElement("div",{className:"Content"},o.a.createElement("center",null,o.a.createElement("h2",null,"Leaderboard"),o.a.createElement(m.a,{to:"/"},o.a.createElement(f.a,{id:"homeButton"},o.a.createElement(p.a,{name:"arrow left"}),"Back to Home Page")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(A.a,{columns:[{Header:"User",accessor:"email"},{Header:"Kills",accessor:"kills"},{Header:"Wins",accessor:"wins"}],data:this.state.data,filterable:!0,defaultPageSize:10,noDataText:"There is no such data!"})),o.a.createElement("div",{className:"Flex"})))}}])&&H(a.prototype,n),r&&H(a,r),t}();a(514);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var K=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=U(t).call(this,e),a=!o||"object"!==D(o)&&"function"!=typeof o?G(n):o,Y(G(a),"goHome",function(){a.props.history.push("/")}),Y(G(a),"openModal",function(){a.setState({showHomeModal:!0})}),Y(G(a),"closeModal",function(){a.setState({showHomeModal:!1})}),a.state={showHomeModal:!1,data:[]},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,o.a.Component),a=t,(n=[{key:"componentDidMount",value:function(){var e=this;h.database().ref("Rooms").on("value",function(t){var a=[];t.forEach(function(e){a.push(e.toJSON())}),e.setState({data:a}),console.log("data",e.state.data)})}},{key:"handleJoinRoomButton",value:function(e){console.log("row: ",e),console.log("room uid: ",e.original.uid);var t=Number(e.original.playerCount),a=Number(e.original.playerLimit);if(t<a){var n=e.original.uid,o="/Rooms/"+n,r=localStorage.getItem("uid"),l=o+"/players/"+r;console.log("uidPlayer: ",r);var i=0;i=1==t?6:2==t?56:63;var c={playerCount:t+1};h.database().ref(o).update(c);var s={uid:r,blockNum:i,isAlive:!0,isTurn:!1,kills:0,enterOrder:t};if(h.database().ref(l).set(s),t+1>=a){var u=0,m={playerinBlock:""};for(u=0;u<64;u++){var f=o+"/Map"+("block"+u);h.database().ref(f).set(m)}var p=o+"/players";h.database().ref(p).once("value",function(e){e.forEach(function(e){var t=e.child("uid").val(),a=roomLocaton+"/Map/block"+e.child("blockNum").val(),n={playerInBlock:t};h.database().ref(a).update(n)})}),h.database().ref(o).update({isPlaying:!0})}var d="/game/"+n;this.props.history.push(d)}}},{key:"render",value:function(){var e=this;if(!y())return o.a.createElement(u.a,{to:"/"});var t=[{Header:"Name of Room",accessor:"nameOfRoom"},{Header:"Players in Room",accessor:"playerCount"},{Header:"Max Players",accessor:"playerLimit"},{Header:"",id:"joinRoom",aggregate:function(e){},Cell:function(t){return o.a.createElement("div",null,o.a.createElement(f.a,{onClick:function(){return e.handleJoinRoomButton(t)}},"Join Room"))},sortable:!1,filterable:!1,resizable:!1,width:200}];return o.a.createElement("div",{className:"roomsListPage"},o.a.createElement("div",{className:"Content"},o.a.createElement("center",null,o.a.createElement("h2",null,"Rooms"),o.a.createElement(f.a,{id:"homeButton",onClick:this.openModal},o.a.createElement(p.a,{name:"arrow left"}),"Back to Home Page"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"table"},o.a.createElement(A.a,{columns:t,data:this.state.data,filterable:!0,defaultPageSize:10,noDataText:"There are no rooms right now"}),o.a.createElement(d.a,{open:this.state.showHomeModal,onClose:this.closeModal,closeIcon:!0},o.a.createElement(d.a.Header,null,"Leave Waiting Room"),o.a.createElement(d.a.Content,null,o.a.createElement("p",null,"Are you sure you want to leave the waiting room and go back to the home page?")),o.a.createElement(d.a.Actions,null,o.a.createElement(f.a,{color:"green",onClick:this.goHome},o.a.createElement(p.a,{name:"checkmark"})," Yes"),o.a.createElement(f.a,{color:"red",onClick:this.closeModal},o.a.createElement(p.a,{name:"remove"})," No, do not leave"))))),o.a.createElement("div",{className:"Flex"})))}}])&&J(a.prototype,n),r&&J(a,r),t}(),V=function(){return o.a.createElement(i.a,null,o.a.createElement(c.a,null,o.a.createElement(s.a,{exact:!0,path:"/",component:w}),o.a.createElement(s.a,{path:"/rooms",component:K}),o.a.createElement(s.a,{path:"/game/:gameID?",component:N}),o.a.createElement(s.a,{path:"/leaderboard",component:z}),o.a.createElement(s.a,{path:"*",render:function(){return o.a.createElement(u.a,{to:"/"})}})))},X=(a(516),function(){return o.a.createElement(V,null)});a(519),new h.auth.GoogleAuthProvider;h.initializeApp({apiKey:"AIzaSyALA3XU5__hCv9xc0a0siWrdJEdEOU1bzg",authDomain:"sneaky-strikers.firebaseapp.com",databaseURL:"https://sneaky-strikers.firebaseio.com",projectId:"sneaky-strikers",storageBucket:"sneaky-strikers.appspot.com",messagingSenderId:"586549421572"}),l.a.render(o.a.createElement("div",null,o.a.createElement(X,null)),document.getElementById("app"))}});
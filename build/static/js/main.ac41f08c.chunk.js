(this["webpackJsonpCC-Zero"]=this["webpackJsonpCC-Zero"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/close-icon.a464734a.svg"},19:function(e,t,a){e.exports=a.p+"static/media/loader.66e3da26.svg"},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),o=(a(16),a(7)),i=a.n(o),l=a(10),h=a(1),u=a(2),m=a(3),d=a(5),f=a(4),g=a(6),p=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={loaded:!0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.loaded,a=this.props.images;return r.a.createElement("img",{className:"grid-item video ".concat(t&&"loaded"),src:a.web.url,onLoadedData:function(){return e.setState({loaded:!0})}})}}]),t}(n.Component),v=function(e){var t=e.clearSearch,n=e.hasResults;return r.a.createElement("div",{className:"header grid"}," ",n?r.a.createElement("button",null,r.a.createElement("img",{onClick:t,src:a(18),className:"block mx-auto"})):r.a.createElement("h1",{className:"title"},"Cleveland Museum of Art \u2014 open access API Explorer"))},b=function(e){var t=e.loading,n=e.hintText;return r.a.createElement("div",{className:"user-hint"},t?r.a.createElement("img",{src:a(19),className:"block mx-auto"}):n)},x=function(e){return e[Math.floor(Math.random()*e.length)]},E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).searchGiphy=function(e){var t,n,r,c;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return a.setState({loading:!0}),s.prev=1,s.next=4,i.a.awrap(fetch("https://openaccess-api.clevelandart.org/api/artworks/?cc0&q=".concat(e,"&limit=50")));case 4:return t=s.sent,s.next=7,i.a.awrap(t.json());case 7:if(n=s.sent,(r=n.data).length){s.next=11;break}throw"Nothing found for ".concat(e,", please try another search");case 11:c=x(r),a.setState((function(t,a){return Object(h.a)({},t,{gifs:[].concat(Object(l.a)(t.gifs),[c]),hintText:"Press enter for more ".concat(e),loading:!1})})),s.next=18;break;case 15:s.prev=15,s.t0=s.catch(1),a.setState((function(e,t){return Object(h.a)({},e,{loading:!1,hintText:s.t0})}));case 18:case"end":return s.stop()}}),null,null,[[1,15]])},a.handleChange=function(e){var t=e.target.value;a.setState((function(e,a){return Object(h.a)({},e,{searchTerm:t,hintText:t.length>2?"Press enter to search for ".concat(t):""})}))},a.handleKeyPress=function(e){var t=e.target.value;t.length>2&&"Enter"===e.key&&a.searchGiphy(t)},a.clearSearch=function(){a.setState((function(e,t){return Object(h.a)({},e,{searchTerm:"",hintText:"",gifs:[]})})),a.textInput.focus()},a.state={searchTerm:"",hintText:"",gifs:[]},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.searchTerm,n=t.gifs.length;return r.a.createElement("div",{className:"page"},r.a.createElement(v,{clearSearch:this.clearSearch,hasResults:n}),r.a.createElement("div",{className:"search grid"},this.state.gifs.map((function(e){return r.a.createElement(p,e)})),r.a.createElement("input",{ref:function(t){e.textInput=t},className:"input grid-item",placeholder:"Type something!",onChange:this.handleChange,onKeyPress:this.handleKeyPress,value:a})),r.a.createElement(b,this.state))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.ac41f08c.chunk.js.map
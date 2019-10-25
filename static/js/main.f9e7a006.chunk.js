(window["webpackJsonpspotify-browser"]=window["webpackJsonpspotify-browser"]||[]).push([[0],{135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),i=a.n(c),l=(a(64),a(3)),s=a(6),o=a(38),u=(a(70),a(14)),m=a.n(u),f=a(13),p=a(25),v=a(26),d=a.n(v);function E(e){return{type:"SET_ACTIVE_PLAYLIST",playlist:e}}a(89);var b=function(e){var t=e.playlist,a=Object(s.b)(),n=Object(s.c)(function(e){return e.activePlaylist});return r.a.createElement("div",{className:"playlist".concat(n?" playlist-small":"").concat(n&&t.id===n.id?" active":""),onClick:function(){return a(E(t))}},r.a.createElement("img",{src:t.images[0].url,width:"64px",height:"64px",alt:t.name}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",null,"By ",r.a.createElement("span",{className:"owner"},t.owner.display_name)),r.a.createElement("div",null,t.tracks.total," songs")))},y=a(37),O=(a(90),function(e){var t=e.offset,a=e.limit,c=e.total,i=e.setOffset,s=e.setLimit,o=e.small,u=Object(n.useState)(null),m=Object(l.a)(u,2),f=m[0],p=m[1];return r.a.createElement("div",{className:"pagination".concat(o?" small":"")},r.a.createElement(y.a,{onClick:function(){return t>=a-1&&i(t-a)},className:"arrow"+(t<a-1?" inactive":"")}),r.a.createElement("span",{className:"page-info"},"Page",r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",className:"page-number",value:f||Math.ceil(t/a)+1,onChange:function(e){isNaN(parseInt(e.target.value))?p(e.target.value):(i((e.target.value-1)*a),p(null))}}))," of ".concat(Math.ceil(c/a))),r.a.createElement(y.b,{onClick:function(){return t<c-a&&i(t+a)},className:"arrow ".concat(t>=c-a?" inactive":"")}),r.a.createElement("span",{className:"page-limit"}," | ",r.a.createElement("div",{className:"input"},r.a.createElement("select",{value:a,onChange:function(e){return s(e.target.value)}},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"40"},"40"),r.a.createElement("option",{value:"50"},"50")))," ","items per page"))});a(91);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var h=function(e){var t=e.setUnauthorized,a=e.accessToken,c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],u=i[1],f=Object(n.useState)([]),v=Object(l.a)(f,2),E=v[0],y=v[1],g=Object(n.useState)(!1),h=Object(l.a)(g,2),w=h[0],P=h[1],N=Object(n.useState)(5),_=Object(l.a)(N,2),k=_[0],T=_[1],S=Object(n.useState)(0),A=Object(l.a)(S,2),I=A[0],C=A[1],R=Object(n.useState)(0),L=Object(l.a)(R,2),D=L[0],U=L[1],x=Object(s.c)(function(e){return e.activePlaylist}),z=Object(s.c)(function(e){return e.filters});return Object(n.useEffect)(function(){var e=function(){var e=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:P(!0),console.log("running playlists useEffect"),console.log({accessToken:a}),a&&d.a.get("https://api.spotify.com/v1/browse/featured-playlists",{params:j({},z,{offset:I,limit:k}),headers:{Authorization:"Bearer ".concat(a)}}).then(function(e){u(e.data.message),y(e.data.playlists.items),U(e.data.playlists.total)}).catch(function(e){t(!0)}).finally(function(){P(!1)});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e();var n=setInterval(function(){e()},3e4);return function(){return clearInterval(n)}},[z,k,I,t,a]),r.a.createElement("div",{className:"playlist-container".concat(x?" active-playlist":"","\n      ").concat(w?" loading":"")},w&&r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"})),r.a.createElement("div",{className:"title"},o),r.a.createElement(O,{offset:I,limit:k,total:D,setOffset:C,setLimit:T,small:!!x}),E.map(function(e){return r.a.createElement(b,{key:e.id,playlist:e,active:x})}),r.a.createElement(O,{offset:I,limit:k,total:D,setOffset:C,setLimit:T,small:!!x}))},w=function(e){var t=e.id,a=e.values,n=e.value,c=e.onChange;return r.a.createElement("select",{id:t,value:n||"",onChange:c},r.a.createElement("option",{style:{display:"none"},disabled:!0,value:""}),a.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.name)}))},P=a(56),N=a.n(P),_=function(e,t){if("INTEGER"===t.primitiveType){var a=parseInt(e);if(!/^\d*$/.test(e))throw new Error("must be an integer");if(t.min&&a<t.min)throw new Error("must be at least "+t.min);if(t.max&&a>t.max)throw new Error("must be at most "+t.max)}},k=function(e){var t=e.id,a=e.name,n=e.validation,c=e.value,i=e.onChange,l=e.setError;return"entityType"in n&&"DATE_TIME"===n.entityType?r.a.createElement(N.a,{value:c,onChange:function(e){i({target:{id:t,value:e}})}}):r.a.createElement("input",{type:"INTEGER"===n.primitiveType?"number":"text",id:t,value:c||"",onChange:function(e){try{_(e.target.value,n),l(null)}catch(t){l(t.message.replace("{name}",a))}finally{i(e)}}})},T=(a(135),function(e){var t=e.definition,a=e.value,c=e.onChange,i=Object(n.useState)(null),s=Object(l.a)(i,2),o=s[0],u=s[1],m={id:t.id,name:t.name,value:a,onChange:c};return r.a.createElement("div",{key:t.id,className:"filter"},r.a.createElement("div",{className:"filter-name"},t.name,r.a.createElement("span",{className:"error-message"}," ",o)),r.a.createElement("div",{className:"filter-input".concat(o?" error":"")},"values"in t?r.a.createElement(w,Object.assign({values:t.values},m)):r.a.createElement(k,Object.assign({validation:t.validation,setError:u},m))))}),S=a(57);a(136);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var I=function(e){var t=e.visible,a=(e.onChange,Object(s.c)(function(e){return e.filters})),n=Object(s.b)(),c=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a);t[e.target.id]=e.target.value,n(function(e){return{type:"SET_FILTERS",filters:e}}(t))};return r.a.createElement("div",{className:"filter-panel"+(t?" visible":"")},S.filter(function(e){return"offset"!==e.id&&"limit"!==e.id}).map(function(e){return r.a.createElement(T,{key:e.id,definition:e,value:a[e.id],onChange:c})}))},C=a(58),R=(a(137),function(e){var t=e.track&&e.track.id;return t||console.log("Not adding",e),t}),L=function(e){var t=e.setUnauthorized,a=e.accessToken,c=Object(n.useState)([]),i=Object(l.a)(c,2),o=i[0],u=i[1],f=Object(n.useState)(0),v=Object(l.a)(f,2),b=v[0],y=v[1],g=Object(n.useState)(!1),j=Object(l.a)(g,2),h=j[0],w=j[1],P=Object(n.useState)(10),N=Object(l.a)(P,2),_=N[0],k=N[1],T=Object(n.useState)(0),S=Object(l.a)(T,2),A=S[0],I=S[1],L=Object(s.c)(function(e){return e.activePlaylist}),D=Object(s.b)();return console.log({playlist:L}),Object(n.useEffect)(function(){var e=function(){var e=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w(!0),L&&a&&d.a.get(L.tracks.href,{params:{offset:A,limit:_},headers:{Authorization:"Bearer ".concat(a)}}).then(function(e){u(e.data.items),y(e.data.total)}).catch(function(e){401===e.response.status&&t(!0)}).finally(function(){w(!1)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e();var n=setInterval(function(){e()},3e4);return function(){return clearInterval(n)}},[L,t,a,_,A]),L?r.a.createElement("div",{className:"track-container".concat(h?" loading":"")},h&&r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"})),r.a.createElement("div",{className:"playlist-info"},r.a.createElement("img",{src:L.images[0].url,width:"152px",height:"152px",alt:L.name}),r.a.createElement("div",{className:"playlist-details"},r.a.createElement("div",{className:"list-type"},"Playlist"),r.a.createElement("div",{className:"playlist-name"},L.name),r.a.createElement("div",{className:"track-count"},"Created by"," ",r.a.createElement("span",{className:"playlist-owner"},L.owner.display_name)," ","\xb7 ",L.tracks.total," songs")),r.a.createElement(C.a,{className:"close-button",onClick:function(){return D(E(null))}})),r.a.createElement("div",{className:"track-list"},o.filter(R).map(function(e){return r.a.createElement("div",{className:"track",key:e.track.id},r.a.createElement("span",{title:e.track.name},"".concat(e.track.name.substring(0,35)).concat(e.track.name.length>35?"...":""))," \xb7 ",e.track.artists.map(function(t,a){return r.a.createElement("span",{key:t.id,className:"artist"},"".concat(t.name).concat(a<e.track.artists.length-1?", ":""))}))})),r.a.createElement(O,{offset:A,limit:_,total:b,setOffset:I,setLimit:k})):r.a.createElement(r.a.Fragment,null)},D=a(24);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var z={activePlaylist:null,filters:{}};var B=Object(D.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_PLAYLIST":return x({},e,{activePlaylist:t.playlist});case"SET_FILTERS":return x({},e,{filters:t.filters});default:return e}}),F=Object({NODE_ENV:"production",PUBLIC_URL:"/spotibrowser",REACT_APP_SPOTIFY_API_URL:"https://api.spotify.com/v1/browse/featured-playlists",REACT_APP_FILTERS_API_URL:"http://www.mocky.io/v2/5a25fade2e0000213aa90776",REACT_APP_AUTH_API_URL:"https://accounts.spotify.com/authorize",REACT_APP_CLIENT_ID:"335ec69bb5524ecc86cea8963374de22",REACT_APP_URL:"http://localhost:3000"}),M=F.REACT_APP_AUTH_API_URL,G=F.REACT_APP_CLIENT_ID,H=F.REACT_APP_URL,J=function(){window.location="".concat(M,"?client_id=").concat(G,"&response_type=token&redirect_uri=").concat(H)},V=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),m=u[0],f=u[1],p=Object(n.useState)(null),v=Object(l.a)(p,2),d=v[0],E=v[1];return Object(n.useEffect)(function(){if(localStorage.getItem("access_token"))E(localStorage.getItem("access_token"));else{var e=window.location.hash.substr(1).split("&").reduce(function(e,t){var a=t.split("=");return e[a[0]]=a[1],e},{});e.access_token?(localStorage.setItem("access_token",e.access_token),E(e.access_token)):J()}},[]),Object(n.useEffect)(function(){m&&(localStorage.removeItem("access_token"),J())},[m]),r.a.createElement(s.a,{store:B},r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"app-title"},"SpotiBrowser"),r.a.createElement("button",{className:"show-filters",onClick:function(){return c(!a)}},"Filters",r.a.createElement("span",{className:"arrow"},a?r.a.createElement(o.b,null):r.a.createElement(o.a,null)))),r.a.createElement(I,{visible:a}),r.a.createElement("div",{id:"contents"},r.a.createElement(h,{setUnauthorized:f,accessToken:d}),r.a.createElement(L,{setUnauthorized:f,accessToken:d}))))};i.a.render(r.a.createElement(V,null),document.getElementById("root"))},57:function(e){e.exports=JSON.parse('[{"id":"country","name":"Country","values":[{"value":"AU","name":"Australia"},{"value":"DE","name":"Germany"},{"value":"BR","name":"Brazil"},{"value":"PT","name":"Portugal"},{"value":"AR","name":"Argentina"},{"value":"FR","name":"France"},{"value":"US","name":"United States"}]},{"id":"timestamp","name":"Date and Time","validation":{"primitiveType":"STRING","entityType":"DATE_TIME","pattern":"yyyy-MM-ddTHH:mm:ss"}}]')},59:function(e,t,a){e.exports=a(138)},64:function(e,t,a){},70:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.f9e7a006.chunk.js.map
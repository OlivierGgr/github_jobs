(this.webpackJsonpgithub_jobs=this.webpackJsonpgithub_jobs||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),r=a.n(c),l=(a(26),a(2));function i(e){var t="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page="+e;return console.log(t),fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}a(27);var m=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),s=m[0],u=m[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),b=p[0],h=p[1],E=Object(n.useRef)(!1);Object(n.useEffect)((function(){E.current||(E.current=!0)}));var f=function(t){e.dataFromSearch(t)},v=Object(n.useState)(0),j=Object(l.a)(v,2),C=j[0],y=j[1],g=Object(n.useState)(0),N=Object(l.a)(g,2),O=(N[0],N[1]),I=function(){y(window.innerWidth),O(window.innerHeight)};return Object(n.useEffect)((function(){return I(),window.addEventListener("resize",I),function(){return window.removeEventListener("resize",I)}}),[]),C<500?o.a.createElement("div",{className:"smallSearchContainer"},o.a.createElement("div",{className:"smallInputsContainer"},o.a.createElement("div",{className:"smallSearchBarContainer"},o.a.createElement("input",{id:"searchByTerm",type:"text",placeholder:"Search jobs by term",value:c,onChange:function(e){return r(e.target.value)}})),o.a.createElement("div",{className:"smallLocationFulltimeContainer"},o.a.createElement("div",{className:"smallLocationContainer"},o.a.createElement("input",{type:"text",placeholder:"Location",value:s,onChange:function(e){return u(e.target.value)}})),o.a.createElement("div",{className:"smallFullTimeContainer"},o.a.createElement("label",{id:"fulltimeLabel",htmlFor:"fulltime"},"Full time only"),o.a.createElement("input",{type:"checkbox",name:"fulltime",value:b,onClick:function(){return h(!b)}})))),o.a.createElement("div",{className:"smallButtonContainer"},o.a.createElement("button",{onClick:function(){return f([c,s,b])}},"Search"))):o.a.createElement("div",{className:"searchContainer"},o.a.createElement("div",{className:"searchBarContainer"},o.a.createElement("input",{type:"text",placeholder:"Search jobs by term",value:c,onChange:function(e){return r(e.target.value)}})),o.a.createElement("div",{className:"locationContainer"},o.a.createElement("input",{type:"text",placeholder:"Location",value:s,onChange:function(e){return u(e.target.value)}})),o.a.createElement("div",{className:"fullTimeContainer"},o.a.createElement("label",{id:"fulltimeLabel",htmlFor:"fulltime"},"Full time only"),o.a.createElement("input",{type:"checkbox",name:"fulltime",value:b,onClick:function(){return h(!b)}})),o.a.createElement("div",{className:"buttonContainer"},o.a.createElement("button",{onClick:function(){return f([c,s,b])}},"Search")))},s=a(8);a(28);var u=function(e){return o.a.createElement("div",{className:"jobItemContainer"},o.a.createElement("div",{className:"jobCard"},o.a.createElement("div",{className:"jobCardCompanyLogo"},null!==e.logo?o.a.createElement("img",{src:e.logo,alt:e.company,style:{height:"1.6rem"}}):o.a.createElement("img",{src:"http://via.placeholder.com/66x25",alt:e.company,style:{height:"1.6rem"}})),o.a.createElement("div",{className:"jobCardInfo"},o.a.createElement("div",{className:"jobCardTitle"},o.a.createElement(s.b,{style:{textDecoration:"none",color:"inherit"},to:{pathname:"/jobOffer/"+e.id,key:e.id}},e.title)),o.a.createElement("div",{className:"jobCardBody"},o.a.createElement("span",null,e.company),o.a.createElement("span",null,e.location," - ",e.type),o.a.createElement("span",null,function(){var t=e.created_at.split(" ");return"".concat(t[2]," ").concat(t[1]," ").concat(t[5])}())),o.a.createElement("hr",{style:{margin:"8px 10%",border:"1px solid #92BCEA"}}),void e.id)))},d=a(5),p=a(13),b=a.n(p);a(45);var h=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),m=Object(l.a)(i,2),u=m[0],p=m[1],h=Object(d.f)().id;return Object(n.useEffect)((function(){(function(e){return fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/"+e+".json").then((function(e){return e.json()})).catch((function(e){return console.log("err")}))})(h).then((function(e){r(e),p(!1)}))}),[]),console.log(h),console.log(c),u?o.a.createElement("div",{className:"jobItemContainer"},o.a.createElement("h2",null,"Loading")):o.a.createElement("div",{className:"jobItemContainer"},o.a.createElement("div",{className:"jobItemContainerTop"},o.a.createElement("div",{className:"jobItemContainerTopReturn"},o.a.createElement(s.b,{to:"/"},o.a.createElement("button",{className:"jobItemContainerTopReturnBtn"},"Return"))),o.a.createElement("div",{className:"jobItemContainerTopTitle"},c.title)),o.a.createElement("div",{className:"jobItemContainerDate info"},function(){var e=c.created_at.split(" ");return"".concat(e[2]," ").concat(e[1]," ").concat(e[5])}()),o.a.createElement("div",{className:"jobItemContainerCompany"},o.a.createElement("div",{className:"jobItemContainerCompanyLogo"},o.a.createElement("img",{src:c.company_logo,alt:c.company})),o.a.createElement("div",{className:"jobItemContainerCompanyName"},c.company)),o.a.createElement("div",{className:"jobItemContainerInfo info"},o.a.createElement("div",{className:"jobItemContainerInfoLocation"},c.location),o.a.createElement("div",{className:"jobItemContainerInfoType"},c.type)),o.a.createElement("div",{className:"jobItemContainerDescription"},b()(c.description)),o.a.createElement("hr",{id:"jobItemHrToApply"}),o.a.createElement("div",{className:"jobItemContainerApply"},o.a.createElement("p",{id:"howToApply"},"How to apply"),b()(c.how_to_apply)))};a(46);var E=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),p=Object(l.a)(r,2),b=p[0],E=p[1],f=Object(n.useState)(!0),v=Object(l.a)(f,2),j=v[0],C=v[1],y=Object(n.useState)(),g=Object(l.a)(y,2),N=(g[0],g[1],Object(n.useState)(!1)),O=Object(l.a)(N,2),I=(O[0],O[1]);Object(n.useEffect)((function(){i(a).then((function(e){E(e),C(!1)}))}),[]),console.log(b);var w=function(e){var t,a,n;E([]),C(!0),e.forEach((function(e){return""===e&&(e=!1)})),(t=e[0],a=e[2],n=e[1],fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description="+t+"&full_time="+a+"&location="+n).then((function(e){return e.json()})).catch((function(e){return console.log("err")}))).then((function(e){E(e),C(!1)}))};return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"titleContainer"},o.a.createElement("h1",null,"Github Jobs")),o.a.createElement("div",{className:"bodyContainer"},o.a.createElement("div",{className:"searchBodyContainer",style:{marginBottom:"5%"}},o.a.createElement(s.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement(m,{dataFromSearch:function(e){return w(e)}}),o.a.createElement("div",{className:"listResultsContainer"},o.a.createElement("div",{className:"jobContainerTopBlueBar"}),(e=b,j?o.a.createElement("div",{className:"loadingMessageContainer"},"Loading ..."):e!==[]?e.map((function(e,t){return o.a.createElement(u,{title:e.title,location:e.location,company:e.company,created_at:e.created_at,type:e.type,logo:e.company_logo,id:e.id,key:t})})):o.a.createElement("h2",null,"no positions available"))),o.a.createElement("button",{id:"seeMoreBtn",onClick:function(){return c(a+1),i(a+1).then((function(e){Array.prototype.push.apply(b,e)})),void I(!0)}},"See more"));var e}}),o.a.createElement(d.a,{path:"/jobOffer/:id",render:function(){return o.a.createElement("div",{className:"listResultsContainer"},o.a.createElement("div",{className:"jobContainerTopBlueBar"}),o.a.createElement(h,null))}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.30f6b45c.chunk.js.map
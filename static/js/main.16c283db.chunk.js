(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/slider-1.9e53b1f4.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/slider-2.b37af482.jpg"},30:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(14),c=a.n(l),i=a(13),o=a(49),m=a(50),u=a(51),s=a(52),E=a(53),p=a(54),d=a(55);function f(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1];return r.a.createElement(o.a,{color:"inverse",light:!0,expand:"md"},r.a.createElement(m.a,{href:"/BlogTravel"},"Blog"),r.a.createElement(u.a,{onClick:function(){c(!l)}}),r.a.createElement(s.a,{isOpen:l,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(p.a,null,r.a.createElement(d.a,{href:"/components/"},"Inicio")),r.a.createElement(p.a,null,r.a.createElement(d.a,{href:"https://github.com/reactstrap/reactstrap"},"About")))))}function x(e){return r.a.createElement("footer",{className:e.footer},"Follow")}var b=a(15),g=a.n(b),v=a(27),h=a.n(v),T=a(28),j=a(56),k=a(57),O=a(58),B=a(59),S=[{src:g.a,altText:"Aire Fresco",caption:"Slide 1"},{src:h.a,altText:"Buenos Tiempos",caption:"Slide 2"},{src:g.a,altText:"Buenos Tiempos",caption:"Slide 3"}],w=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),u=m[0],s=m[1],E=function(){if(!u){var e=l===S.length-1?0:l+1;c(e)}},p=function(){if(!u){var e=0===l?S.length-1:l-1;c(e)}},d=S.map((function(e){return r.a.createElement(T.a,{className:"custom-tag",onExiting:function(){return s(!0)},onExited:function(){return s(!1)},key:e.src},r.a.createElement("img",{src:e.src,alt:e.altText}),r.a.createElement(j.a,{captionText:e.altText}))}));return r.a.createElement("div",null,r.a.createElement("style",null,".custom-tag {\n              max-width: 100%;\n              height: 500px;\n              background: black;\n            }"),r.a.createElement(k.a,{activeIndex:l,next:E,previous:p},r.a.createElement(O.a,{items:S,activeIndex:l,onClickHandler:function(e){u||c(e)}}),d,r.a.createElement(B.a,{direction:"prev",directionText:"Previous",onClickHandler:p}),r.a.createElement(B.a,{direction:"next",directionText:"Next",onClickHandler:E})))},y=a(6),C=a(60);var I=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Test"),r.a.createElement(C.a,null,r.a.createElement(f,null),r.a.createElement(w,null),r.a.createElement("main",null,r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/Details/:id"},"Details"),r.a.createElement(y.a,{path:"/BlogTravel",exact:!0}))),r.a.createElement(x,null)))},N=(a(47),a(17)),F=a(9),H=Object(F.a)();c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{history:H,basename:"/BlogTravel/#"},r.a.createElement(I,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.16c283db.chunk.js.map
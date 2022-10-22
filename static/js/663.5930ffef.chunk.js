"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[663],{6663:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,o,i,c,u=e(5861),s=e(885),p=e(4687),f=e.n(p),l=e(2791),h=e(7689),d=e(1414),m=e(4373),v=e(8581),x=e(168),g=e(225),w=g.Z.div(r||(r=(0,x.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: ","px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(n){return n.theme.space[4]})),y=g.Z.div(a||(a=(0,x.Z)(["\n  border-radius: ",";\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: ",";\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  > svg {\n    margin-top: 70px;\n    width: 100%;\n    object-fit: cover;\n    fill: ",";\n  }\n  &:hover {\n    transform: scale(1.02);\n  }\n"])),(function(n){return n.theme.radii.large}),(function(n){return n.theme.shadows.middle}),(function(n){return n.theme.colors.secondaryBacground})),Z=g.Z.img(o||(o=(0,x.Z)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n"]))),b=g.Z.div(i||(i=(0,x.Z)(["\n  margin-top: auto;\n  padding: ","px;\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.secondaryText})),k=g.Z.div(c||(c=(0,x.Z)(["\n  padding: ","px;\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.secondaryText})),j=e(184),_=function(){var n=(0,h.UO)().movieId,t=(0,l.useState)(null),e=(0,s.Z)(t,2),r=e[0],a=e[1],o=(0,l.useState)(!1),i=(0,s.Z)(o,2),c=i[0],p=i[1];return(0,l.useEffect)((function(){function t(){return(t=(0,u.Z)(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.y)(n);case 3:e=t.sent,a(e),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),p(!0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,l.useEffect)((function(){window.scroll({top:570,left:0,behavior:"smooth"})}),[r]),r?0===r.length?(0,j.jsx)("div",{children:"Sorry, but we have no information about the actors of this movie."}):(0,j.jsxs)(j.Fragment,{children:[c&&(0,j.jsx)(v.Z,{}),(0,j.jsx)(w,{children:r.map((function(n){var t=n.id,e=n.original_name,r=n.character,a=n.profile_path;return(0,j.jsxs)(y,{children:[a?(0,j.jsx)(Z,{src:"https://www.themoviedb.org/t/p/w200".concat(a),alt:e,loading:"lazy"}):(0,j.jsx)(m.j2T,{size:230}),(0,j.jsx)(b,{children:e}),(0,j.jsxs)(k,{children:["Character: ",r]})]},t)}))})]}):null}},8581:function(n,t,e){e.d(t,{Z:function(){return c}});e(2791);var r,a=e(168),o=e(225).Z.div(r||(r=(0,a.Z)(["\n  font-size: ",";\n  color: ",";\n  padding: ","px;\n  margin: 0 auto;\n"])),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.colors.buttonHoverColor}),(function(n){return n.theme.space[4]})),i=e(184),c=function(){return(0,i.jsx)(o,{children:"Something went wrong. Please, try again later"})}},1414:function(n,t,e){e.d(t,{Bt:function(){return v},Y5:function(){return l},bI:function(){return p},wr:function(){return u},y:function(){return d}});var r=e(5861),a=e(4687),o=e.n(a),i=e(1044);i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var c="76ca17943e227c67de15be6c6d3599fa";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)("/trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)("/search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)("/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.ZP)("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=663.5930ffef.chunk.js.map
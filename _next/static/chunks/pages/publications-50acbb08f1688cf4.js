(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{1564:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return t(3681)}])},3681:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return w}});var n=t(5893),r=t(5115),o=t(4737),s=t(4651),a=t(1277),c=t(3153),l=t(7294),d=t(6723),u=t(7258),p=t(918),m=t(919);function h(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function g(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(i){h(e,i,t[i])}))}return e}function f(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function x(e){var i=e.title,t=e.description,o=e.src,s=e.isActive,a=e.onClick,c=f(e,["title","description","src","isActive","onClick"]);return(0,n.jsx)(m.u,{hasArrow:!0,fontSize:"sm",shadow:"dark-lg",label:t,placement:"bottom",bg:"gray.50",color:"gray.600",children:(0,n.jsx)(r.xu,g({p:3,boxShadow:s?"outline":"base",rounded:"md",background:'linear-gradient(transparent 67%, white 72%), url("'.concat(o,'") -15px -15px no-repeat'),bgSize:"120%",pos:"relative",width:140,height:155,_hover:{boxShadow:"outline"},onClick:a,style:{cursor:"pointer"}},c,{children:(0,n.jsx)(r.xv,{pos:"absolute",bottom:7,display:"block",height:3,fontSize:12,color:s?"gray.900":"gray.700",fontWeight:s?"600":"normal",children:i})}))})}var b=JSON.parse('[{"title":"Species richness","description":"Figure description missing."},{"title":"Population density","description":"Figure description missing."},{"title":"Total population size","description":"Figure description missing."},{"title":"Phylogenetic diversity","description":"Figure description missing."},{"title":"Disturbance","description":"Figure description missing."},{"title":"Mean annual temperature","description":"Figure description missing."},{"title":"Economic loss","description":"Figure description missing."},{"title":"Value and diversity","description":"Figure description missing."},{"title":"Species A","description":"Figure description missing."},{"title":"Species B","description":"Figure description missing."},{"title":"Species C","description":"Figure description missing."},{"title":"Species D","description":"Figure description missing."}]'),v=function(e,i,t){var n=void 0===t?"svg":t;return"/plots/prioritize_species_0_step".concat(e,"_.pkl_p").concat(i,".").concat(n)},j=[0,1,2,3,4,5,6,7,8,9,10,11];function y(){var e=(0,l.useState)(1),i=e[0],t=e[1],a=(0,l.useState)(0),m=a[0],h=a[1],g=(0,l.useState)(!1),f=g[0],y=g[1];(0,l.useEffect)((function(){var e=-1;return f&&(e=window.setInterval((function(){t((function(i){var t,n,r,o=(t=i+1,n=1,r=31,Math.min(Math.max(t,n),r));return 31===o&&(window.clearTimeout(e),y(!1)),o}))}),500)),function(){-1!==e&&window.clearTimeout(e)}}),[f]),(0,l.useEffect)((function(){for(var e=function(e){j.forEach((function(i){var t=new Image;t.src=v(e,i,"jpg"),window[t.src]=t}))},i=1;i<=31;++i)e(i)}),[]);var w=function(e){return t(e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.MI,{spacing:"40px",mb:20,mx:{sm:4,md:4,lg:"auto"},px:10,columns:{sm:1,md:2},maxWidth:1e3,children:[(0,n.jsxs)(r.xu,{children:[(0,n.jsx)(s.Ee,{htmlWidth:400,src:v(i,m)}),(0,n.jsxs)(r.Ug,{width:400,spacing:"24px",children:[(0,n.jsxs)(d.hE,{isAttached:!0,variant:"outline",children:[(0,n.jsx)(d.hU,{colorScheme:"blue","aria-label":"Restart",icon:(0,n.jsx)(o.JO,{as:c.DuK}),fontSize:20,isDisabled:1===i,onClick:function(){y(!1),t(1)}}),(0,n.jsx)(d.hU,{colorScheme:"blue","aria-label":f?"Stop":"Play",icon:(0,n.jsx)(o.JO,{as:f?c.wNq:c.o1U}),isActive:f,fontSize:20,onClick:function(){f||31!==i||t(1),y((function(e){return!e}))}})]}),(0,n.jsxs)(u.Y2,{maxW:"100px",mr:"2rem",inputMode:"numeric",value:i,min:1,max:31,onChange:function(e,i){return w(i)},children:[(0,n.jsx)(u.zu,{}),(0,n.jsxs)(u.Fi,{children:[(0,n.jsx)(u.WQ,{}),(0,n.jsx)(u.Y_,{})]})]}),(0,n.jsxs)(p.iR,{"aria-label":"frame",min:1,max:31,value:i,onChange:w,focusThumbOnChange:!1,children:[(0,n.jsx)(p.Uj,{children:(0,n.jsx)(p.Ms,{})}),(0,n.jsx)(p.gs,{})]})]})]}),(0,n.jsxs)(r.xu,{width:400,children:[(0,n.jsx)(r.X6,{as:"h1",size:"lg",my:4,children:b[m].title}),(0,n.jsx)(r.xv,{children:b[m].description})]})]}),(0,n.jsx)(r.MI,{columns:{sm:3,md:4,lg:6},gap:4,p:10,mb:20,mx:{sm:4,md:4,lg:"auto"},maxWidth:1e3,bgGradient:"linear(to-b, gray.50, gray.100)",boxShadow:"inner",rounded:"md",children:j.map((function(e){return(0,n.jsx)(x,{title:b[e].title,description:b[e].description,src:v(i,e,"jpg"),isActive:m===e,onClick:function(){return function(e){return h(e)}(e)}},e)}))})]})}function w(){return(0,n.jsxs)(r.xu,{as:"main",pt:"200",children:[(0,n.jsxs)(r.W2,{mb:5,children:[(0,n.jsx)(r.X6,{as:"h2",size:"md",mb:4,children:"Supplementary information for"}),(0,n.jsx)(r.xu,{p:8,bgGradient:"linear(to-b, gray.50, gray.100)",boxShadow:"inner",rounded:"sm",children:(0,n.jsxs)(r.Ug,{align:"top",spacing:4,children:[(0,n.jsx)(o.JO,{as:c.plf,w:6,h:6,color:"gray.400",mt:1}),(0,n.jsxs)(r.xv,{fontSize:"sm",children:["Silvestro, D., Goria, S., Sterner, T., and Antonelli, A. (2021),",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Optimising biodiversity protection through artificial intelligence."}),(0,n.jsx)("br",{}),(0,n.jsxs)(r.rU,{href:"papers/Silvestro_et_al_Main_revised_incl_Methods.pdf",isExternal:!0,children:["PDF ",(0,n.jsx)(a.h0,{mx:"2px",mt:"-2px"})]})]})]})})]}),(0,n.jsxs)(r.W2,{pos:"relative",mb:10,children:[(0,n.jsx)(r.X6,{fontFamily:"Georgia, serif",as:"span",fontSize:"120px",bgGradient:"linear(to-tl, #FCE38A, #F38181)",bgClip:"text",position:"absolute",left:"-30px",children:"\u201c"}),(0,n.jsxs)(r.gC,{fontSize:"md",pt:10,px:10,mb:10,children:[(0,n.jsx)(r.xv,{children:"Over a million species face extinction, carrying with them untold options for food medicine, fibre, shelter, ecological resilience, aesthetic and cultural values. There is therefore an urgent need to design conservation policies that maximise the protection of biodiversity and its contributions to people, within the constraints of limited budgets."}),(0,n.jsx)(r.xv,{children:"Here we present a novel framework for spatial conservation prioritisation that combines simulation models, reinforcement learning and ground validation to identify optimal policies. Our methodology, CAPTAIN (Conservation Area Prioritisation Through Artificial Intelligence Networks), quantifies the trade-off between the costs and benefits of area and biodiversity protection, allowing the exploration of multiple biodiversity metrics."}),(0,n.jsx)(r.xv,{children:"Under a fixed budget, our model protects substantially more species from extinction than the random or naively targeted protection of areas. CAPTAIN also outperforms the most widely used software for spatial conservation prioritisation (Marxan) in 97% of cases and reduces species loss by an average of 40% under simulations, besides yielding prioritisation maps at substantially higher spatial resolution using empirical data."}),(0,n.jsx)(r.xv,{children:"We find that regular biodiversity monitoring, even if simple and with a degree of inaccuracy \u2013 characteristic of citizen science surveys \u2013 substantially improves biodiversity outcomes. Given the complexity of people\u2013nature interactions and wealth of associated data, artificial intelligence holds great promise for improving the conservation of biological and ecosystem values in a rapidly changing and resource-limited world."})]}),(0,n.jsx)(r.rU,{href:"/images/RL_framework_researchstat.png",isExternal:!0,children:(0,n.jsx)(s.Ee,{src:"/images/RL_framework_researchstat_thumb.png",alt:"Framework",loading:"eager"})})]}),(0,n.jsx)(y,{})]})}}},function(e){e.O(0,[647,774,888,179],(function(){return i=1564,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
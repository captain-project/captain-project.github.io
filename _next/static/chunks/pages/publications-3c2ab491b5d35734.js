(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{1564:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return t(3022)}])},3022:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return O}});var n=t(5893),s=t(8527),r=t(9876),a=t(7294),o=t(4651),c=t(6723),l=t(894),d=t(5712),u=t(918),h=t(2022),p=t(5256),m=t(6111),f=t(85);function g(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function x(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(i){g(e,i,t[i])}))}return e}function b(e,i){if(null==e)return{};var t,n,s=function(e,i){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(s[t]=e[t]);return s}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function v(e){var i=e.title,t=e.description,r=e.src,a=e.isActive,o=e.onClick,c=b(e,["title","description","src","isActive","onClick"]);return(0,n.jsx)(f.u,{hasArrow:!0,fontSize:"sm",shadow:"dark-lg",label:t,placement:"bottom",bg:"gray.50",color:"gray.600",children:(0,n.jsx)(s.xu,x({p:3,boxShadow:a?"xl":"base",rounded:"sm",background:'url("'.concat(r,'") -15px -15px no-repeat'),bgSize:"100%",pos:"relative",width:"140px",height:"155px",_hover:{boxShadow:"lg"},onClick:o,style:{cursor:"pointer"}},c,{children:(0,n.jsx)(s.xv,{pos:"absolute",bottom:7,display:"block",height:3,fontSize:12,color:a?"gray.900":"gray.700",fontWeight:a?"600":"normal",children:i})}))})}var y=JSON.parse('[{"title":"Species richness","description":"Species richness and its evolution through time. After monitoring the system for 3 iterations CAPTAIN\'s agent establishes protected units (outlined in black) based on a policy optimized to minimize biodiversity loss. The number of protected units is constrained by a predefined budget."},{"title":"Population density","description":"As the anthropogenic disturbance increases in the system and as a consequence of climate change, the natural mortality of individuals changes asa function of species-specific tolerances. As a consequence the absolute number of individuals decreases in cells with high disturbance and the relative abundance of species changes through time."},{"title":"Species rank-abundance","description":"The total population size of species varies through time as a function of species-specific geographic range and tolerance to anthropogenic pressure and climate change."},{"title":"Phylogenetic diversity","description":"A phylogenetic tree shows the relationships among all species in the system. Branches highlighted in red represent species that go extinct throughout the simulation."},{"title":"Anthropogenic disturbance","description":"Anthropogenic pressure on the environment is modeled as affecting both the carrying capacity of a cell and increasing individual mortality rates based on species-specific sensitivity to disturbance."},{"title":"Climate","description":"Climate change and fluctuations can affect the geographic range of species based on species-specific tolerances."},{"title":"Economic loss","description":"Economic loss is simulated as a function of biodiversity loss based on the economic value of species."},{"title":"Variables through time","description":"As disturbance increases and through the effects climate change the model tracks species, phylogenetic diversity, and economic losses."},{"title":"Species A","description":"Example of a widespread species that despite some range contraction survives both within and outside protected areas."},{"title":"Species B","description":"Example of a species whose range becomes fragmented due to expanding disturbance, but with several populations surviving in protected areas."},{"title":"Species C","description":"Example of a species that only survives in protected areas."},{"title":"Species D","description":"Some species, especially narrow endemics might go extinct even within protected areas due to low tolerance to climate change and higher mortality compared with competing species."}]'),j=function(e,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"svg";return"/plots/prioritize_species_0_step".concat(e,"_.pkl_p").concat(i,".").concat(t)},w=[0,1,2,3,4,5,6,7,8,9,10,11];function S(){var e=(0,a.useState)(1),i=e[0],t=e[1],r=(0,a.useState)(0),f=r[0],g=r[1],x=(0,a.useState)(!1),b=x[0],S=x[1];return(0,a.useEffect)((function(){var e=-1;return b&&(e=window.setInterval((function(){t((function(i){var t,n,s,r=(t=i+1,n=1,s=31,Math.min(Math.max(t,n),s));return 31===r&&(window.clearTimeout(e),S(!1)),r}))}),500)),function(){-1!==e&&window.clearTimeout(e)}}),[b]),(0,a.useEffect)((function(){for(var e=function(e){w.forEach((function(i){var t=new Image;t.src=j(e,i,"jpg"),window[t.src]=t}))},i=1;i<=31;++i)e(i)}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.MI,{spacing:"40px",mt:2,mb:10,mx:"auto",p:"1rem",columns:{base:1,md:2},maxWidth:{base:"60ch",lg:"120ch"},children:[(0,n.jsxs)(s.xu,{children:[(0,n.jsx)(o.Ee,{htmlWidth:"100%",src:j(i,f)}),(0,n.jsxs)(s.Ug,{spacing:"24px",children:[(0,n.jsxs)(c.hE,{isAttached:!0,variant:"outline",children:[(0,n.jsx)(c.hU,{colorScheme:"blue","aria-label":"restart",icon:(0,n.jsx)(l.JO,{as:h.Z}),fontSize:20,isDisabled:1===i,onClick:function(){S(!1),t(1)}}),(0,n.jsx)(c.hU,{colorScheme:"blue","aria-label":b?"stop":"play",icon:(0,n.jsx)(l.JO,{as:b?p.Z:m.Z}),isActive:b,fontSize:20,onClick:function(){b||31!==i||t(1),S((function(e){return!e}))}})]}),(0,n.jsxs)(d.Y2,{maxW:"100px",mr:"2rem",inputMode:"numeric",value:i,min:1,max:31,onChange:function(e,i){return t(i)},children:[(0,n.jsx)(d.zu,{}),(0,n.jsxs)(d.Fi,{children:[(0,n.jsx)(d.WQ,{}),(0,n.jsx)(d.Y_,{})]})]}),(0,n.jsxs)(u.iR,{"aria-label":"frame",min:1,max:31,value:i,onChange:t,focusThumbOnChange:!1,children:[(0,n.jsx)(u.Uj,{children:(0,n.jsx)(u.Ms,{})}),(0,n.jsx)(u.gs,{})]})]})]}),(0,n.jsxs)(s.xu,{children:[(0,n.jsx)(s.X6,{as:"h3",size:"md",mt:{base:4,lg:7},children:y[f].title}),(0,n.jsx)(s.xv,{mt:6,children:y[f].description})]})]}),(0,n.jsx)(s.MI,{columns:{sm:3,md:4,lg:6},gap:4,mb:20,mx:"auto",p:"1rem",maxWidth:{base:"60ch",lg:"120ch"},children:w.map((function(e){return(0,n.jsx)(v,{title:y[e].title,description:y[e].description,src:j(i,e,"jpg"),isActive:f===e,onClick:function(){return g(e)}},e)}))})]})}function O(){return(0,n.jsxs)(s.xu,{as:"main",pt:"200",children:[(0,n.jsxs)(s.W2,{as:"article",children:[(0,n.jsx)(s.X6,{as:"h2",size:"xl",children:"Improving biodiversity protection through artificial intelligence"}),(0,n.jsxs)(s.X6,{as:"h3",size:"sm",my:6,children:["Silvestro, D., Goria, S., Sterner, T., and Antonelli, A. (2022) Nature Sustainability, DOI:",(0,n.jsxs)(s.rU,{href:"https://www.nature.com/articles/s41893-022-00851-6",isExternal:!0,children:["10.1038/s41893-022-00851-6 ",(0,n.jsx)(r.h0,{mx:"2px",mt:"-2px"})]})]}),(0,n.jsxs)(s.rU,{href:"papers/Silvestro_et_al_2022_NatSust.pdf",isExternal:!0,children:["Download open access article: ",(0,n.jsx)(r.h0,{mx:"2px",mt:"-2px"})]}),(0,n.jsx)(s.X6,{as:"h3",size:"md",mt:12,children:"A simulated natural system"}),(0,n.jsx)(s.xv,{mt:8,children:"CAPTAIN uses simulations based on an individual-based spatially explicit model of biodiversity to train policies through Reinforcement Learning. The simulations can include hundreds of species and millions of individuals and tracks global and local biodiversity changes resulting from natural processes of mortality, replacement and dispersal and from changes in anthropogenic pressure and climate. Simlated systems are used to train models that can be then applied to empirical data and to becnhmark the outcome of different conservation policies and targets."})]}),(0,n.jsx)(S,{})]})}}},function(e){e.O(0,[394,651,774,888,179],(function(){return i=1564,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
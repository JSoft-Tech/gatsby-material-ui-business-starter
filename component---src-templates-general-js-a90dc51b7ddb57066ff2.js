(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return v});var n=a(0),r=a.n(n),l=a(182),o=a(179),c=a(207),i=a.n(c),u=a(208),s=a.n(u),m=a(215),d=a.n(m),f=a(164),p=a.n(f),E=a(177),h=a(155),v="2169435549";t.default=Object(E.a)(function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=a.title,c=a.image.publicURL,u=t.markdownRemark.html;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:n}),r.a.createElement(i.a,null,r.a.createElement(d.a,{style:{height:"200px"},image:Object(h.c)(c)}),r.a.createElement(s.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h2",component:"h2"},n),r.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:u}}))))})},155:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return c.withPrefix});a(168);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},168:function(e,t,a){var n;e.exports=(n=a(174))&&n.default||n},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},174:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(55),i=a(2),u=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},175:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},176:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},177:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(170),i=a(206),u=a.n(i),s=a(201),m=a.n(s),d=a(178),f=a(167),p=a.n(f);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(u.a,null),o.a.createElement(p.a,{implementation:"css"},o.a.createElement(e,this.props))))},a}(o.a.Component)}},178:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(75),a(54),a(76),a(203);var r=a(185),l=a(170),o=a(204),c=a.n(o),i=a(205),u=a.n(i),s=Object(l.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[500],dark:c.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(l.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(202),a(74))},179:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(169),i=a(155),u=(a(172),a(173),a(175)),s=a(184),m=a.n(s),d=a(171),f=a.n(d),p=a(166),E=function(e){var t=e.data.site.siteMetadata.menuLinks;return o.a.createElement(o.a.Fragment,null,t.map(function(e){return o.a.createElement(i.a,{key:e.name,to:e.link},o.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),o.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(f.a,{style:{color:"#fff"}},o.a.createElement(p.c,null))))},h=function(e){return o.a.createElement(i.b,{query:"240237662",render:function(e){return o.a.createElement(E,{data:e})},data:u})},v=a(176),y=a(194),g=a.n(y),b=a(195),_=a.n(b),M=a(193),k=a.n(M),x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{onClick:this.handleOpen},o.a.createElement(p.a,{style:{color:"#efefef"}})),o.a.createElement(k.a,{onClickAway:this.handleClose},o.a.createElement(g.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return o.a.createElement(i.a,{key:e.name,to:e.link},o.a.createElement(_.a,null,e.name))}),o.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(_.a,null,"Fork me on Github")))))},t}(o.a.Component),C=function(e){return o.a.createElement(i.b,{query:"709782962",render:function(t){return o.a.createElement(x,{active:e.active,data:t})},data:v})},w=a(167),P=a.n(w),j=a(181),N=a.n(j),I=a(197),O=a.n(I),T=a(196),R=a.n(T),q=a(164),S=a.n(q),A=a(189),L=a.n(A),B=a(188),F=a.n(B),U=function(e){return o.a.createElement(R.a,{id:"appBar"},o.a.createElement(O.a,null,o.a.createElement(N.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},o.a.createElement(N.a,{item:!0},o.a.createElement(L.a,{id:"logo",variant:"outlined",avatar:o.a.createElement(F.a,{id:"logoIcon"},o.a.createElement(p.d,null)),label:o.a.createElement(i.a,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),o.a.createElement(N.a,{item:!0},o.a.createElement(P.a,{smDown:!0},o.a.createElement(S.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},o.a.createElement(h,null))),o.a.createElement(P.a,{mdUp:!0},o.a.createElement(C,null)))),o.a.createElement(N.a,{item:!0})))},G=function(e){return o.a.createElement(i.b,{query:"4102418190",render:function(e){return o.a.createElement(U,{data:e})},data:c})},D=a(198),J=a.n(D),z=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,l=n.phone;return o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),o.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},o.a.createElement("span",null,o.a.createElement(S.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",o.a.createElement(P.a,{only:["xs","sm"]},"–"),o.a.createElement(P.a,{only:["xl","lg","md"]},o.a.createElement("br",null))," ",r," – ",l,o.a.createElement("br",null),"·",o.a.createElement("br",null),"Starter created by"," ",o.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))},H=function(e){return o.a.createElement(i.b,{query:"4102418190",render:function(e){return o.a.createElement(z,{data:e})},data:c})},Q=a(199),V=(a(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,null),o.a.createElement(Q.Grid,{style:{marginTop:"94px"}},o.a.createElement(Q.Row,null,o.a.createElement(Q.Col,{xs:12},t?o.a.createElement(S.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,o.a.createElement(H,null)))))},t}(o.a.Component));t.a=V},182:function(e,t,a){"use strict";var n=a(183),r=a(0),l=a.n(r),o=a(209),c=a.n(o),i=a(155),u=function(e){return l.a.createElement(i.b,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},207:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(214))},208:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(217))},214:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(73)),l=n(a(153)),o=n(a(0)),c=(n(a(154)),n(a(157))),i=n(a(187)),u=n(a(156)),s={root:{overflow:"hidden"}};function m(e){var t=e.classes,a=e.className,n=e.raised,u=(0,l.default)(e,["classes","className","raised"]);return o.default.createElement(i.default,(0,r.default)({className:(0,c.default)(t.root,a),elevation:n?8:1},u))}t.styles=s,m.defaultProps={raised:!1};var d=(0,u.default)(s,{name:"MuiCard"})(m);t.default=d},215:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(216))},216:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(34)),l=n(a(73)),o=n(a(153)),c=n(a(0)),i=(n(a(154)),n(a(157))),u=(n(a(165)),a(158),n(a(156))),s={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=s;var m=["video","audio","picture","iframe","img"];function d(e){var t=e.classes,a=e.className,n=e.component,u=e.image,s=e.src,d=e.style,f=(0,o.default)(e,["classes","className","component","image","src","style"]),p=-1!==m.indexOf(n),E=!p&&u?(0,l.default)({backgroundImage:'url("'.concat(u,'")')},d):d;return c.default.createElement(n,(0,l.default)({className:(0,i.default)(t.root,(0,r.default)({},t.media,p),a),style:E,src:p?u||s:void 0},f))}d.defaultProps={component:"div"};var f=(0,u.default)(s,{name:"MuiCardMedia"})(d);t.default=f},217:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(73)),l=n(a(153)),o=n(a(0)),c=(n(a(154)),n(a(157))),i=(a(158),n(a(156))),u={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,a=e.className,n=e.component,i=(0,l.default)(e,["classes","className","component"]);return o.default.createElement(n,(0,r.default)({className:(0,c.default)(t.root,a)},i))}t.styles=u,s.defaultProps={component:"div"};var m=(0,i.default)(u,{name:"MuiCardContent"})(s);t.default=m}}]);
//# sourceMappingURL=component---src-templates-general-js-a90dc51b7ddb57066ff2.js.map
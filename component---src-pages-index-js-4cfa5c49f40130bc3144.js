(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,a){"use strict";a.r(t);var n=a(184),r=a(0),l=a.n(r),c=a(156),i=a(4),o=a.n(i),s=a(188),u=a(200),m=a.n(u),d=a(262),p=a.n(d),f=a(201),E=a.n(f),h=a(263),g=a.n(h),v=a(160),b=a.n(v),y=b()({cardActions:{float:"right"}})(function(e){var t=e.children,a=e.classes,n=e.title,r=e.subheader,c=e.avatar,i=e.action,o=e.style,s=void 0===o?{}:o;return l.a.createElement(m.a,{style:s},l.a.createElement(p.a,{avatar:c||null,title:n,subheader:r||null}),l.a.createElement(E.a,null,t),l.a.createElement(g.a,{className:a.cardActions},i))}),x=a(183),k=a(191),C=a.n(k),M=a(182),N=a.n(M),S=a(187),w=a.n(S),I=a(167),B=function(e){return l.a.createElement(N.a,{spacing:24,container:!0,justify:"center",className:e.classes.featureGrid},l.a.createElement(N.a,{item:!0,md:6},l.a.createElement(C.a,{className:e.classes.featureChipRight,avatar:l.a.createElement(w.a,{className:e.classes.avi},l.a.createElement(I.e,null)),label:"Uses Material UI"})),l.a.createElement(N.a,{item:!0,md:6},l.a.createElement(C.a,{className:e.classes.featureChip,avatar:l.a.createElement(w.a,{className:e.classes.avi},l.a.createElement(I.e,null)),label:"Uses Material Icons"})))};B.propTypes={classes:o.a.object.isRequired};var _=b()(function(e){return{featureChip:{fontSize:"16px",backgroundColor:"#fff",border:"1pt solid #eee"},featureChipRight:{fontSize:"16px",backgroundColor:"#fff",border:"1pt solid #eee",float:"right"},featureGrid:{marginBottom:"25px"},avi:{width:"40px",height:"40px",color:"#fff",backgroundColor:e.palette.secondary.light}}})(B),T=a(180),R=a.n(T),j=a(7),q=a.n(j),A=a(265),U=a.n(A),P=a(186),O=a.n(P),L=a(169),F=a.n(L),G=a(4126),z=a.n(G),V=a(203),D=a.n(V),W=a(4137),H=Object(W.autoPlay)(z.a),J=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeStep:0},t.handleNext=function(){t.setState(function(e){return{activeStep:e.activeStep+1}})},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1}})},t.handleStepChange=function(e){t.setState({activeStep:e})},t}return q()(t,e),t.prototype.render=function(){var e=this.state.activeStep,t=this.props,a=t.classes,n=t.items,r=n.length;return l.a.createElement(O.a,{elevation:0},l.a.createElement("div",null,l.a.createElement(F.a,null,n[e].title),l.a.createElement(H,{axis:"x",index:e,onChangeIndex:this.handleStepChange,enableMouseEvents:!0},n.map(function(t,n){var r=t.node,i=r.excerpt,o=r.frontmatter,s=o.path,u=o.title,d=o.image.publicURL;return l.a.createElement("div",{key:n},Math.abs(e-n)<=2?l.a.createElement(m.a,null,l.a.createElement(D.a,{className:a.cardMedia,image:Object(c.c)(d)}),l.a.createElement(E.a,null,l.a.createElement(F.a,{gutterBottom:!0,variant:"h5",component:"h2"},l.a.createElement(c.a,{to:s},u)),l.a.createElement(F.a,{component:"p"},i))):null)})),l.a.createElement(U.a,{steps:r,position:"static",activeStep:e,nextButton:l.a.createElement(R.a,{size:"small",onClick:this.handleNext,disabled:e===r-1},"Next"),backButton:l.a.createElement(R.a,{size:"small",onClick:this.handleBack,disabled:0===e},"Back")})))},t}(l.a.Component),Q=b()({cardMedia:{height:"200px"}})(J);a.d(t,"query",function(){return K});var Y=function(e){var t=e.data.allMarkdownRemark.edges;return l.a.createElement(x.a,{title:"Gatsby Material UI Business Starter"},l.a.createElement(s.a,{title:"Home"},l.a.createElement("meta",{name:"description",content:"Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."})),l.a.createElement(_,null),l.a.createElement(y,{title:"Our Products",avatar:l.a.createElement(w.a,null,l.a.createElement(I.b,null)),action:l.a.createElement(R.a,{variant:"contained",color:"secondary",className:e.classes.root,component:c.a,to:"/products"},"View All Products"),style:{minHeight:523}},l.a.createElement(Q,{items:t})))},K="2193790950";Y.propTypes={classes:o.a.object.isRequired};t.default=Object(n.a)(b()(function(e){return{root:{fontWeight:"bold"}}})(Y))},156:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(34),o=a.n(i);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return i.withPrefix});a(171);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},171:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"hi@foxandgeese.com",phone:"503-555-1111"}}}}}},177:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return p});a(76),a(55),a(37),a(77),a(208);var r=a(192),l=a(173),c=a(170),i=a(211),o=a.n(i),s=a(212),u=a.n(s),m=Object(l.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function d(){return{theme:m,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(c.c)()}}function p(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=d()),n.__INIT_MATERIAL_UI__):d()}}).call(this,a(207),a(75))},178:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},179:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},181:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},183:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=a(172),o=a(156),s=(a(175),a(176),a(179)),u=a(180),m=a.n(u),d=a(174),p=a.n(d),f=a(167),E=a(160),h=a.n(E),g=h()(function(e){return{menuButton:{color:e.palette.primary.contrastText}}})(function(e){var t=e.classes,a=e.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,a.map(function(e){return c.a.createElement(o.a,{key:e.name,to:e.link},c.a.createElement(m.a,{className:t.menuButton},e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(p.a,{className:t.menuButton},c.a.createElement(f.c,null))))}),v=function(e){return c.a.createElement(o.b,{query:"240237662",render:function(e){return c.a.createElement(g,{data:e})},data:s})},b=a(181),y=a(195),x=a.n(y),k=a(196),C=a.n(k),M=a(194),N=a.n(M),S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props,a=t.classes,n=t.data.site.siteMetadata.menuLinks;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{onClick:this.handleOpen},c.a.createElement(f.a,{className:a.dotsVerticalIcon})),c.a.createElement(N.a,{onClickAway:this.handleClose},c.a.createElement(x.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},n.map(function(e){return c.a.createElement(o.a,{key:e.name,to:e.link},c.a.createElement(C.a,null,e.name))}),c.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(C.a,null,"Fork me on Github")))))},t}(c.a.Component),w=h()({dotsVerticalIcon:{color:"#efefef"}})(S),I=function(e){return c.a.createElement(o.b,{query:"709782962",render:function(t){return c.a.createElement(w,{active:e.active,data:t})},data:b})},B=a(168),_=a.n(B),T=a(182),R=a.n(T),j=a(198),q=a.n(j),A=a(197),U=a.n(A),P=a(169),O=a.n(P),L=a(191),F=a.n(L),G=a(187),z=a.n(G),V=function(e){return c.a.createElement(U.a,{id:"appBar"},c.a.createElement(q.a,null,c.a.createElement(R.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},c.a.createElement(R.a,{item:!0},c.a.createElement(F.a,{id:"logo",variant:"outlined",avatar:c.a.createElement(z.a,{id:"logoIcon"},c.a.createElement(f.d,null)),label:c.a.createElement(o.a,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),c.a.createElement(R.a,{item:!0},c.a.createElement(_.a,{smDown:!0},c.a.createElement(O.a,{component:"span",variant:"caption"},c.a.createElement(v,null))),c.a.createElement(_.a,{mdUp:!0},c.a.createElement(I,null)))),c.a.createElement(R.a,{item:!0})))},D=function(e){return c.a.createElement(o.b,{query:"4102418190",render:function(e){return c.a.createElement(V,{data:e})},data:i})},W=a(199),H=a.n(W),J=h()(function(e){return{divider:{marginTop:6*e.spacing.unit,marginBottom:3*e.spacing.unit},footer:{marginBottom:3*e.spacing.unit,whiteSpace:"nowrap"}}})(function(e){var t=e.classes,a=e.data.site.siteMetadata,n=a.title,r=a.contact,l=r.email,i=r.phone;return c.a.createElement(c.a.Fragment,null,c.a.createElement(H.a,{className:t.divider}),c.a.createElement("footer",{className:t.footer,id:"footer"},c.a.createElement("span",null,c.a.createElement(O.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",n," ",c.a.createElement(_.a,{only:["xs","sm"]},"–"),c.a.createElement(_.a,{only:["xl","lg","md"]},c.a.createElement("br",null))," ",l," – ",i,c.a.createElement("br",null),"·",c.a.createElement("br",null),"Starter created by"," ",c.a.createElement("a",{href:"https://foxandgeese.com"},"Fox and Geese")))))}),Q=function(e){return c.a.createElement(o.b,{query:"4102418190",render:function(e){return c.a.createElement(J,{data:e})},data:i})},Y=a(215),K=(a(214),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.title,n=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(Y.a,{className:t.container,container:!0,direction:"row",justify:"center"},c.a.createElement(Y.a,{className:t.contentBox,item:!0},a?c.a.createElement(Y.b,{className:t.title,variant:"h2",gutterBottom:!0},a):null,n,c.a.createElement(Q,null))))},t}(c.a.Component));t.a=h()({container:{marginTop:94},contentBox:{maxWidth:"calc(1136px - 60px)",width:"calc(100% - 60px)"},title:{textAlign:"center"}})(K)},184:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(170);Object(l.d)();var c=a(0),i=a.n(c),o=a(193),s=a.n(o),u=a(177),m=a(168),d=a.n(m);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(u.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return i.a.createElement(l.a,{generateClassName:this.muiPageContext.generateClassName,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(l.b,{theme:this.muiPageContext.theme},i.a.createElement(s.a,null),i.a.createElement(d.a,{implementation:"css"},i.a.createElement(e,this.props))))},a}(i.a.Component)}},188:function(e,t,a){"use strict";var n=a(189),r=a(0),l=a.n(r),c=a(220),i=a.n(c),o=a(156),s=function(e){return l.a.createElement(o.b,{query:u,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(i.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var u="1175772"},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4cfa5c49f40130bc3144.js.map
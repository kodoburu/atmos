webpackJsonp([6],{GKcl:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("Xxa5"),o=n.n(a),i=n("exGp"),s=n.n(i),c={name:"search",props:{type:String},data:function(){return{search_query:""}},methods:{addSpace:function(){this.search_query+=" "},search:function(){var e=this;return s()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$router.push({name:"search",params:{search_query:e.search_query}});case 1:case"end":return t.stop()}},t,e)}))()}}},u={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",{attrs:{placeholder:"search for an anime","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"space",32,t.key," "))return null;e.addSpace()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}},model:{value:e.search_query,callback:function(t){e.search_query=t},expression:"search_query"}})},staticRenderFns:[]},l={name:"navbar",data:function(){return{current_page:"home"}},methods:{setCurrentPage:function(){this.current_page=this.$route.name},navigateTo:function(e){this.$router.push({name:e})}},components:{SearchInput:n("VU/8")(c,u,!1,null,null,null).exports}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"navbar",attrs:{"default-active":e.current_page,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"home"},on:{click:function(t){e.navigateTo("home")}}},[e._v(" Home ")]),e._v(" "),n("li",{staticClass:"fake-menu-item"},[n("search-input")],1)],1)},staticRenderFns:[]};var p={name:"App",components:{navbar:n("VU/8")(l,h,!1,function(e){n("onSy")},"data-v-10f676be",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navbar"),this._v(" "),t("div",{staticClass:"router-view-container"},[t("router-view"),this._v(" "),this._m(0)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"disclaimer"},[n("div",[e._v(" This is an experimental anime-streaming/mirror service built on EOS by ("),n("a",{attrs:{href:"https://github.com/kodoburu",target:"_blank"}},[e._v("CodeBlue ")]),e._v(" / Tzu Yuan Kao) using eos-forum. ")]),e._v(" "),n("div",[e._v(" Special thanks to the Novusphere community. ")]),e._v(" "),n("div",[e._v(" This site is hosted entirely from "),n("a",{attrs:{href:"https://github.com/kodoburu/atmos",target:"_blank"}},[e._v(" GitHub Pages and is fully open source. ")])]),e._v(" "),n("div",[e._v(" The developers of this software take no responsibility for the content displayed. ")]),e._v(" "),n("div",[e._v(" No images, files or media are hosted by this site, please contact the respective site owners hosting content in breach of DMCA. ")])])}]},m=n("VU/8")(p,d,!1,null,null,null).exports,f=n("/ocq");r.default.use(f.a);var v=new f.a({routes:[{name:"home",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"lO7g")),path:"/"},{name:"content",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"pfgj")),path:"/anime/:content_id",children:[{name:"episode",component:()=>n.e(4).then(n.bind(null,"2E4m")),path:":episode"}]},{name:"search",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"/KFX")),path:"/search/:search_query"}]}),_=n("wUZ8"),b=n.n(_),y=n("zL8q"),g=n.n(y);n("tvR6"),n("GKcl");r.default.use(g.a,{locale:b.a}),r.default.config.productionTip=!1,new r.default({el:"#app",router:v,methods:{},components:{App:m},template:"<App/>"})},onSy:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.95a38e702483dc42d2af.js.map
webpackJsonp([3],{"2E4m":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),i=n("exGp"),o=n.n(i),s=n("mtWM"),c=n.n(s),l={name:"Episode",props:["episode","mirrors","title","max"],data:function(){return{selectedMirrorString:void 0,selectedMirror:void 0,links:{},loading:!1}},computed:{screenWidth:function(){return window.innerWidth}},mounted:function(){var e=this;return o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.getLinks(e.episode);case 1:case"end":return t.stop()}},t,e)}))()},methods:{sanitize:function(e){return e.replace(/ä/g,"a").replace(/Ⅲ/g,"iii").replace(/[^a-zA-Z0-9[\t][-]]*/g,"").replace(/ /g,"-").replace(/[^\u0000-\u007F]+/g,"-").replace(/[:]*[?]*[!]*[(]*[)]*[,]*[.]*[~]*[']*["]*[*]*[@]*[;]*/g,"")},getLinks:function(e){var t=this;return o()(a.a.mark(function n(){var r,i,o,s,l;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.links[e]){n.next=30;break}return t.loading=!0,r=(r=(r=t.title.toLowerCase()).replace("hangyaku no lelouch","lelouch of the rebellion")).replace("kakegurui××","kakegurui xx"),r=t.sanitize(r),n.prev=6,n.next=9,c.a.get("https://cors-anywhere.herokuapp.com/https://gogoanimes.co/"+r+"-episode-"+e);case 9:i=n.sent,o=i.data,!0;case 12:if(-1!==(s=o.indexOf('data-video="'))){n.next=16;break}return n.abrupt("break",21);case 16:o=o.substring(s+12),l=o.indexOf('"'),t.links[e]?t.links[e].push(o.substring(0,l)):(t.links[e]=[],t.links[e].push(o.substring(0,l))),n.next=12;break;case 21:t.loading=!1,t.selectedMirror=t.links[e][0],t.$forceUpdate(),n.next=30;break;case 26:n.prev=26,n.t0=n.catch(6),t.loading=!1,console.log("failed to find mirrors",n.t0);case 30:case"end":return n.stop()}},n,t,[[6,26]])}))()},getBaseLink:function(e){return e.data.json_metadata.attachment.value.match(/^.+?[^\/:](?=[?\/]|$)/)[0]},getMirrorLabel:function(e){return this.getBaseLink(e)+" - "+e.data.poster+" - "+e.up+" upvotes"},updateEpisode:function(e){this.$emit("update",e),this.getLinks(e)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],key:"episode-"+e.episode,staticClass:"episode",attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("div",[n("el-select",{staticClass:"mirror-select",model:{value:e.selectedMirror,callback:function(t){e.selectedMirror=t},expression:"selectedMirror"}},e._l(e.links[e.episode],function(e){return n("el-option",{key:e,attrs:{value:e}})}))],1),e._v(" "),e.selectedMirror?n("div",[n("iframe",{key:e.selectedMirror+"-episode-"+e.episode,attrs:{scrolling:"no",src:e.selectedMirror,allow:"encrypted-media",allowfullscreen:""}})]):e._e(),e._v(" "),n("h4",[n("el-pagination",{staticClass:"pagination",attrs:{background:"","page-size":1,"current-page":e.episode,layout:"pager, jumper",total:e.max},on:{"current-change":e.updateEpisode}})],1),e._v(" "),n("footer",[e._v("\n    It is strongly recommended you use an ad-blocker such as uBlock Origin to avoid potentially malicious ads while viewing content.\n  ")])])},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(e){n("iuNu"),n("wZn2")},"data-v-dc1c3e70",null);t.default=d.exports},iuNu:function(e,t){},wZn2:function(e,t){}});
//# sourceMappingURL=3.3e9e0e769e27db790532.js.map
webpackJsonp([3],{"24SR":function(e,r){},"2E4m":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={name:"Episode",props:["index","maxEpisodes","mirrors"],data:function(){return{selectedMirrorString:void 0,selectedMirror:void 0}},computed:{episode:function(){return this.index+1},screenWidth:function(){return window.innerWidth}},beforeUpdate:function(){this.setSelectedMirror()},methods:{getPagerCount:function(){return console.log(window.innerWidth),window.innerWidth>900?10:5},setSelectedMirrorString:function(){this.selectedMirrorString=this.mirrors[this.index][0]?this.getMirrorLabel(this.mirrors[this.index][0]):[]},setSelectedMirror:function(e){var r=this;this.selectedMirror=this.mirrors[this.index].find(function(e){return r.getMirrorLabel(e)===r.selectedMirrorString})},getBaseLink:function(e){return e.data.json_metadata.attachment.value.match(/^.+?[^\/:](?=[?\/]|$)/)[0]},getMirrorLabel:function(e){return this.getBaseLink(e)+" - "+e.data.poster+" - "+e.up+" upvotes"},updateEpisode:function(e){this.$emit("update",e)}},watch:{episode:{handler:"setSelectedMirrorString",immediate:!0},selectedMirrorString:{handler:"setSelectedMirror",immediate:!0}}},n={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{key:"episode-"+e.index,staticClass:"episode"},[t("div",[t("el-select",{model:{value:e.selectedMirrorString,callback:function(r){e.selectedMirrorString=r},expression:"selectedMirrorString"}},e._l(e.mirrors[e.index],function(r){return t("el-option",{key:r.id,attrs:{value:e.getMirrorLabel(r)}})}))],1),e._v(" "),e.selectedMirror?t("div",[t("iframe",{key:e.selectedMirror.id+"-episode-"+e.index,attrs:{scrolling:"no",src:e.selectedMirror.data.json_metadata.attachment.value,allow:"encrypted-media",allowfullscreen:""}}),e._v(" "),t("div",[t("h4",[e._v(" \n      posted by "+e._s(e.selectedMirror.data.poster)+" \n      "),t("i",{staticClass:"fa fa-thumbs-up green hover",attrs:{"aria-hidden":"true"}}),e._v(": "+e._s(e.selectedMirror.up)+" \n      ")])])]):e._e(),e._v(" "),t("h4",[t("el-pagination",{attrs:{background:"","page-size":1,"pager-count":e.getPagerCount(),"current-page":e.episode,layout:"pager, jumper",total:e.maxEpisodes},on:{"current-change":e.updateEpisode}})],1),e._v(" "),t("footer",[e._v("\n    It is strongly recommended you use an ad-blocker such as uBlock Origin to avoid potentially malicious ads while viewing content.\n  ")])])},staticRenderFns:[]};var o=t("VU/8")(i,n,!1,function(e){t("24SR")},"data-v-418f2465",null);r.default=o.exports}});
//# sourceMappingURL=3.b4d058b6ad5d109e5858.js.map
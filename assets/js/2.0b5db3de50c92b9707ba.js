webpackJsonp([2,4],{"2E4m":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"Episode",props:["index","maxEpisodes","mirrors"],data:function(){return{selectedMirrorString:void 0,selectedMirror:void 0}},computed:{episode:function(){return this.index+1}},beforeUpdate:function(){this.setSelectedMirror()},methods:{setSelectedMirrorString:function(){this.selectedMirrorString=this.mirrors[this.index][0]?this.getMirrorLabel(this.mirrors[this.index][0]):[]},setSelectedMirror:function(e){var t=this;console.log(e),this.selectedMirror=this.mirrors[this.index].find(function(e){return t.getMirrorLabel(e)===t.selectedMirrorString})},getBaseLink:function(e){return e.data.json_metadata.attachment.value.match(/^.+?[^\/:](?=[?\/]|$)/)[0]},getMirrorLabel:function(e){return this.getBaseLink(e)+" - "+e.data.poster+" - "+e.up+" upvotes"}},watch:{episode:{handler:"setSelectedMirrorString",immediate:!0},selectedMirrorString:{handler:"setSelectedMirror",immediate:!0}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:"episode-"+e.index,staticClass:"episode"},[n("div",[n("el-select",{model:{value:e.selectedMirrorString,callback:function(t){e.selectedMirrorString=t},expression:"selectedMirrorString"}},e._l(e.mirrors[e.index],function(t){return n("el-option",{key:t.id,attrs:{value:e.getMirrorLabel(t)}})}))],1),e._v(" "),e.selectedMirror?n("div",[n("iframe",{key:e.selectedMirror.id+"-episode-"+e.index,attrs:{scrolling:"no",src:e.selectedMirror.data.json_metadata.attachment.value,allow:"encrypted-media",allowfullscreen:""}}),e._v(" "),n("div",[n("h4",[e._v(" \n      posted by "+e._s(e.selectedMirror.data.poster)+" \n      "),n("i",{staticClass:"fa fa-thumbs-up green hover",attrs:{"aria-hidden":"true"},on:{click:function(t){e.upvote()}}}),e._v(": "+e._s(e.selectedMirror.up)+" \n      ")])])]):e._e(),e._v(" "),n("h4",[e.episode>1?n("i",{staticClass:"el-icon-caret-left hover",attrs:{"aria-hidden":"true"},on:{click:function(t){e.$emit("prev")}}}):e._e(),e._v(" "),n("span",[e._v(" Episode "+e._s(e.episode)+" ")]),e._v(" "),e.episode<e.maxEpisodes?n("i",{staticClass:"el-icon-caret-right hover",attrs:{"aria-hidden":"true"},on:{click:function(t){e.$emit("next")}}}):e._e()]),e._v(" "),n("footer",[e._v("\n    It is strongly recommended you use an ad-blocker such as uBlock Origin to avoid potentially malicious ads while viewing content.\n  ")])])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(e){n("xRiJ")},"data-v-63156181",null);t.default=r.exports},TBmK:function(e,t){},azDj:function(e,t,n){"use strict";var s={name:"tag",props:{label:String},computed:{color:function(){return"#"+this.intToRGB(this.hashCode(this.label))},textColor:function(){var e=this.color;if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return.299*parseInt(e.slice(0,2),16)+.587*parseInt(e.slice(2,4),16)+.114*parseInt(e.slice(4,6),16)>186?"#000000":"#FFFFFF"}},methods:{hashCode:function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t},intToRGB:function(e){var t=(16777215&e).toString(16).toUpperCase();return"00000".substring(0,6-t.length)+t}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-button",{staticClass:"tag",style:{"background-color":this.color,"border-color":this.color}},[t("div",{style:{color:this.textColor}},[this._v(" "+this._s(this.label)+" ")])])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(e){n("e3Z2")},"data-v-763b7f92",null);t.a=r.exports},e3Z2:function(e,t){},pfgj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Xxa5"),i=n.n(s),r=n("exGp"),o=n.n(r),a=n("89kZ"),c=n("2E4m"),d=n("azDj"),l={name:"Home",data:function(){return{content_id:0,episode:0,episodes:[],loading:!0,content:{type:"",episodes:"",status:"",premiered:"",producers:[],duration:"",genres:[],score:"",popularity:"",category_rank:"",prequel:"",title:"",synopsis:""}}},watch:{"$route.params.content_id":function(){this.load()},"$route.params.episode":function(){this.load()}},mounted:function(){var e=this;return o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:case"end":return t.stop()}},t,e)}))()},computed:{episodesWithMirrors:function(){return this.episodes.filter(function(e){return e.length>0})}},methods:{openMal:function(){window.open("https://myanimelist.net/anime/"+this.$route.params.content_id+"/"+this.replaceSpaces(this.content.title),"_blank")},replaceSpaces:function(e){return console.log(e.replace(/ /g,"_")),e.replace(/ /g,"_")},load:function(){var e=this;return o()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,e.episode=e.$route.params.episode?e.$route.params.episode:0,e.content_id==e.$route.params.content_id){t.next=8;break}return e.content_id=e.$route.params.content_id,t.next=6,e.setAnimeDetails();case 6:return t.next=8,e.setThreadDetails();case 8:e.loading=!1;case 9:case"end":return t.stop()}},t,e)}))()},setThreadDetails:function(){var e=this;return o()(i.a.mark(function t(){var n,s,r,o,c,d,l,p;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.getEpisodeThread(e.content_id);case 2:for(n=t.sent,(s=n.main_post.children.slice()).splice(0,0,n.main_post),r=[],o=e.content.episodes>0?e.content.episodes:50,c=0;c<o;c++)r.push([]);c=0;case 9:if(!(c<s.length)){t.next=26;break}if((d=s[c]).data.tags&&0!=d.data.tags){t.next=13;break}return t.abrupt("continue",23);case 13:l=0;case 14:if(!(l<o)){t.next=23;break}if(!d.data.tags.includes("ep"+(l+1))||!d.data.json_metadata.attachment.isIframe()){t.next=20;break}if((p=n.all_posts.find(function(e){return e.transaction==d.transaction}).data.tags)&&!p.includes("ep"+(l+1))){t.next=20;break}return r[l].push(d),t.abrupt("break",23);case 20:l++,t.next=14;break;case 23:c++,t.next=9;break;case 26:for(c=0;c<r.length;c++)r[c].sort(function(e,t){return t.up-e.up});e.episodes=r;case 28:case"end":return t.stop()}},t,e)}))()},setAnimeDetails:function(){var e=this;return o()(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.getAnimeInfo(e.content_id);case 2:n=t.sent,e.content.title=n.title,e.content.poster=n.image_url,e.content.type=n.type,e.content.episodes=n.episodes?n.episodes:0,e.content.status=n.status,e.content.score=n.score,e.content.synopsis=n.synopsis,e.content.popularity=n.popularity;case 11:case"end":return t.stop()}},t,e)}))()},upvote:function(){},downvote:function(){},prevEpisode:function(){this.selectEpisode(parseInt(this.episode)-1)},nextEpisode:function(){this.selectEpisode(parseInt(this.episode)+1)},selectEpisode:function(e){var t=this;return o()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.episode=e,t.$router.push({name:"episode",params:{episode:e}});case 2:case"end":return n.stop()}},n,t)}))()},goToEpisodes:function(){this.selectedEpisode=null,this.$router.push({name:"content",params:{content_id:this.content_id}})},maxEpisodes:function(){return this.episodesWithMirrors.length}},components:{Episode:c.default,Tag:d.a}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"container",attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e.loading?e._e():n("div",[n("div",{staticClass:"title"},[n("h1",[e._v(" "+e._s(e.content.title)+" ")])]),e._v(" "),n("div",{staticClass:"body"},[n("div",{staticClass:"left-col"},[n("img",{attrs:{src:e.content.poster},on:{click:function(t){e.goToEpisodes()}}}),e._v(" "),n("div",[n("p",[e._v(" Information ")]),e._v(" "),n("p",[e._v(" Type: "),n("tag",{attrs:{label:e.content.type}})],1),e._v(" "),n("p",[e._v(" Episodes: "),n("span",[e._v(" "+e._s(e.content.episodes||"unknown")+" ")])]),e._v(" "),n("p",[e._v(" Status: "),n("span",[e._v(" "+e._s(e.content.status)+" ")])])]),e._v(" "),n("div",[n("p",[e._v(" Statistics\n          ")]),n("p",{staticClass:"score",on:{click:function(t){e.openMal()}}},[e._v(" Score: "),n("span",[e._v(" "+e._s(e.content.score)+" ")])]),e._v(" "),n("p",{staticClass:"popularity",on:{click:function(t){e.openMal()}}},[e._v(" Popularity: "),n("span",[e._v(" #"+e._s(e.content.popularity)+" ")])])])]),e._v(" "),n("div",{staticClass:"right-col"},[n("div",{staticClass:"breadcrumbs"},[n("a",{on:{click:function(t){e.goToEpisodes()}}},[e._v(" "+e._s(e.content.title)+" ")]),e._v(" /\n          "),e.episode>0?n("a",[e._v(" Episode "+e._s(e.episode)+" ")]):e._e()]),e._v(" "),n("div",{staticClass:"stream"},[0===e.episode?[n("div",{staticClass:"episodes"},[e.episodesWithMirrors.length>0?e._l(e.episodesWithMirrors,function(t,s){return n("el-button",{key:t.id,attrs:{type:"info"},on:{click:function(t){e.selectEpisode(s+1)}}},[e._v("\n                  episode "+e._s(s+1)+"\n                ")])}):n("h1",[e._v("\n                No Mirrors found for this series\n              ")])],2),e._v(" "),n("p",[e._v(" Synopsis ")]),e._v(" "),n("div",{staticClass:"flex-center",domProps:{innerHTML:e._s(e.content.synopsis)}})]:e.episodesWithMirrors.length>0?n("episode",{attrs:{mirrors:e.episodesWithMirrors||[],maxEpisodes:e.maxEpisodes(),index:parseInt(e.episode-1)},on:{next:function(t){e.nextEpisode()},prev:function(t){e.prevEpisode()}}}):e._e()],2)])])])])},staticRenderFns:[]};var u=n("VU/8")(l,p,!1,function(e){n("TBmK")},"data-v-a075f02e",null);t.default=u.exports},xRiJ:function(e,t){}});
//# sourceMappingURL=2.0b5db3de50c92b9707ba.js.map
"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[554],{1554:function(t,s,i){i.d(s,{q:function(){return l}});var n=i(8959),e=i(8836),l=((0,n.Z)({},(0,e.Se)(["playing","currentMusic"])),(0,n.Z)((0,n.Z)({selectItem:function(t,s){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:s})}},(0,e.OI)({setPlaying:"SET_PLAYING"})),(0,e.nv)(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,s=this;clearTimeout(t),t=setTimeout((function(){s.mmLoadShow=!1}),200)}}})},139:function(t,s,i){i.d(s,{Z:function(){return r}});var n=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[s("div",{staticClass:"mm-loading-content"},[s("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[s("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},e=[],l={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},a=l,o=i(1068),c=(0,o.Z)(a,n,e,!1,null,null,null),r=c.exports},4015:function(t,s,i){i.d(s,{Z:function(){return r}});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mm-no-result"},[s("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},e=[],l={name:"MmNoResult",props:{title:{type:String,default:""}}},a=l,o=i(1068),c=(0,o.Z)(a,n,e,!1,null,null,null),r=c.exports},4442:function(t,s,i){i.d(s,{Z:function(){return g}});i(6361);var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"music-list flex-col"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(i,n){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){return t.selectItem(i,n,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(n+1)}}),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),s("div",{staticClass:"list-menu"},[s("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(i),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(i,n)}}})],1)]),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t.isDuration?s("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(i.duration%3600))+" "),s("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(n)}}})],1):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])})),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},e=[],l=i(8959),a=(i(1827),i(2554),i(8836)),o=i(503),c=i(4015),r="album",u="duration",m="pullup",d=100,p={name:"MusicList",components:{MmNoResult:c.Z},filters:{format:o.WU},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:r}},data:function(){return{lockUp:!0}},computed:(0,l.Z)({isDuration:function(){return this.listType===u}},(0,a.Se)(["playing","currentMusic"])),watch:{list:function(t,s){this.listType===m&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:(0,l.Z)({listScroll:function(t){var s=t.target.scrollTop;if(this.scrollTop=s,this.listType===m&&!this.lockUp){var i=t.target,n=i.scrollHeight,e=i.offsetHeight;s+e>=n-d&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType:function(t){var s=t.id,i=this.playing,n=this.currentMusic.id;return i&&n===s?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},(0,a.OI)({setPlaying:"SET_PLAYING"}))},f=p,h=i(1068),v=(0,h.Z)(f,n,e,!1,null,"5d4ea0b2",null),g=v.exports},5554:function(t,s,i){i.r(s),i.d(s,{default:function(){return h}});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"details"},[s("mm-loading",{model:{value:t.mmLoadShow,callback:function(s){t.mmLoadShow=s},expression:"mmLoadShow"}}),s("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},e=[],l=i(8959),a=(i(6361),i(8836)),o=i(6623),c=i(139),r=i(4442),u=i(1554),m={name:"Detail",components:{MmLoading:c.Z,MusicList:r.Z},mixins:[u.q],data:function(){return{list:[]}},created:function(){var t=this;(0,o._V)(this.$route.params.id).then((function(s){document.title="".concat(s.name," - 时光の在线音乐播放器"),t.list=s.tracks,t._hideLoad()})).catch((function(){t._hideLoad()}))},methods:(0,l.Z)({selectItem:function(t,s){this.selectPlay({list:this.list,index:s})}},(0,a.nv)(["selectPlay"]))},d=m,p=i(1068),f=(0,p.Z)(d,n,e,!1,null,"433f5f06",null),h=f.exports}}]);
//# sourceMappingURL=554-legacy.80450bef.js.map
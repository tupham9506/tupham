(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{389:function(t,n,o){var content=o(392);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("0539d4c5",content,!0,{sourceMap:!1})},390:function(t,n,o){var content=o(394);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("224406da",content,!0,{sourceMap:!1})},391:function(t,n,o){"use strict";var e=o(389);o.n(e).a},392:function(t,n,o){(n=o(20)(!1)).push([t.i,"",""]),t.exports=n},393:function(t,n,o){"use strict";var e=o(390);o.n(e).a},394:function(t,n,o){(n=o(20)(!1)).push([t.i,"#app-window{width:100%;height:100%}",""]),t.exports=n},395:function(t,n,o){"use strict";o.r(n);var e={name:"computer",components:{},props:[],data:function(){return{isOpen:!0}},computed:{},mounted:function(){},methods:{}},r=(o(391),o(16)),c={components:{Computer:Object(r.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("t-window",[[n("h1",[this._v("Here might be a page title")])]],2)}),[],!1,null,"2a75ba68",null).exports},computed:{shortcutList:function(){return this.$store.state.desktop.shortcutList},runList:function(){return this.$store.state.tasks.runList}},methods:{mounted:function(){},onDragover:function(t){},openProgram:function(t){var n=this.$store.getters["programs/getByName"](t);this.$store.commit("tasks/addProcess",n)}}},l=(o(393),Object(r.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app-window"}},[o("client-only",t._l(t.shortcutList,(function(n,e){return o("div",{key:"shortcut-"+e},[o("shortcut",{attrs:{data:n},on:{"open-program":t.openProgram}})],1)})),0),t._v(" "),t._l(t.runList,(function(t,n){return o("div",{key:"run-"+n},[o(t.component,{tag:"component",attrs:{data:t}})],1)}))],2)}),[],!1,null,null,null));n.default=l.exports}}]);
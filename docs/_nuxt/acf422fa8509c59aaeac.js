(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,i,s){"use strict";s.r(i);var c={data:function(){return{x:!1,y:!1,width:5,color:"black",colors:["#000000","#F44336","#9C27B0","#3F51B5","#03A9F4","#009688","#8BC34A","#FFEB3B","#FF9800","#795548","#9E9E9E"]}},mounted:function(){this.ctx=this.$refs.canvas.getContext("2d"),this.canvas=this.$refs.canvas,this.ctx.beginPath(),this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.closePath()},methods:{clearCanvas:function(){this.ctx.beginPath(),this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.closePath()},touchStart:function(t){},touchMove:function(t){if(t.preventDefault(),1===t.targetTouches.length){var i=t.targetTouches[0],s=t.target.getBoundingClientRect(),c=i.clientX-s.left,n=i.clientY-s.top;this.draw(c,n),this.x=c,this.y=n}},touchEnd:function(t){this.x=!1,this.y=!1},draw:function(t,i){var s=t,c=i,n=this.x||s,e=this.y||c;this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.lineWidth=this.width,this.ctx.strokeStyle=this.color,this.ctx.moveTo(n,e),this.ctx.lineTo(s,c),this.ctx.stroke(),this.ctx.closePath()}}},n=s(18),e=Object(n.a)(c,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[s("canvas",{ref:"canvas",attrs:{width:"512",height:"512",id:"canvas"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}})]),t._v(" "),s("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},t._l(t.colors,function(i,c){return s("v-btn",{key:c,attrs:{fab:"",depressed:"",small:"",color:i},on:{click:function(s){t.color=i}}})})),t._v(" "),s("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[s("v-btn",{attrs:{fab:"",outline:"",small:""},on:{click:function(i){t.color="white"}}},[s("v-icon",[t._v("fa fa-eraser")])],1),t._v(" "),s("v-btn",{attrs:{fab:"",outline:"",small:""},on:{click:function(i){t.color="black"}}},[s("v-icon",[t._v("fa fa-pencil")])],1),t._v(" "),s("v-btn",{attrs:{fab:"",outline:"",small:""},on:{click:t.clearCanvas}},[s("v-icon",[t._v("fa fa-trash")])],1)],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[s("v-slider",{attrs:{"thumb-size":24,min:5,max:50,"thumb-label":""},model:{value:t.width,callback:function(i){t.width=i},expression:"width"}})],1)],1)},[],!1,null,null,null);e.options.__file="index.vue";i.default=e.exports}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/specification/specification"],{"0d16":function(t,e,n){},6250:function(t,e,n){"use strict";var i=n("0d16"),o=n.n(i);o.a},8148:function(t,e,n){"use strict";n.r(e);var i=n("92d3"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"92d3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("c7a2"),o={name:"specification",props:{sizeList:{type:Object,default:function(){return{imageName:"点击自定义",widthpx:"自定义",heightpx:"自定义",width:"自定义",height:"自定义"}}}},data:function(){return{imgUrl:"",maskShow:!0,progressPercent:0}},methods:{toSizeModify:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(n){var o=n.tempFilePaths[0];(0,i.verifyImage)(e.$store.state.ttAppid,o,e.$store.state.clientType).then((function(n){if(n)t.showToast({title:"图片存在风险,请重新上传",duration:2e3,icon:"fail"});else{e.maskShow=!0;var i=setInterval((function(){e.progressPercent>=130&&(clearInterval(i),e.maskShow=!1,e.progressPercent=0,e.imgUrl=o,t.navigateTo({url:"/pages/sub-modify/modifySize/modifySize?imgUrl="+e.imgUrl+"&sizeList="+JSON.stringify(e.sizeList)})),e.progressPercent+=1,e.$emit("transmit",e.maskShow,e.progressPercent)}),30)}})).catch((function(t){console.log(t)}))}})}},onReady:function(){}};e.default=o}).call(this,n("a261")["default"])},"9dfd":function(t,e,n){"use strict";n.r(e);var i=n("cb15"),o=n("8148");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("6250");var s=n("828b"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"c87111f2",null,!1,i["a"],void 0);e["default"]=a.exports},cb15:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/specification/specification-create-component',
    {
        'components/specification/specification-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('a261')['createComponent'](__webpack_require__("9dfd"))
        })
    },
    [['components/specification/specification-create-component']]
]);

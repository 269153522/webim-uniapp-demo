(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["comps/chat/inputbar/suit/image/image"],{"1ca1":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("d98b")["default"],s=a("637f"),o=a("0fac"),c=a("a563"),u={data:function(){return{}},components:{},props:{username:{type:Object,default:function(){return{}}},chatType:{type:String,default:s.chatType.SINGLE_CHAT}},methods:{openCamera:function(){var e=this;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(t){e.upLoadImage(t)}})},sendImage:function(){var e=this;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.upLoadImage(t)}})},isGroupChat:function(){return this.chatType==s.chatType.CHAT_ROOM},getSendToParam:function(){return this.isGroupChat()?this.username.groupId:this.username.your},upLoadImage:function(e){var t=this,a=e.tempFilePaths,c=n.conn.context.accessToken;wx.getImageInfo({src:e.tempFilePaths[0],success:function(e){var u={jpg:!0,gif:!0,png:!0,bmp:!0},i=n.config.appkey.split("#"),r=e.width,p=e.height,f=e.path.lastIndexOf("."),d=~f&&e.path.slice(f+1)||"";d.toLowerCase()in u&&wx.uploadFile({url:"https://a1.easemob.com/"+i[0]+"/"+i[1]+"/chatfiles",filePath:a[0],name:"file",header:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+c},success:function(e){var c=e.data,u=JSON.parse(c),i=n.conn.getUniqueId();console.log("dataObj>>",u);var f=new n.message(s.IMAGE,i),l={type:s.IMAGE,size:{width:r,height:p},url:u.uri+"/"+u.entities[0].uuid,filetype:d,filename:a[0]};f.set({apiUrl:n.config.apiURL,body:l,from:t.username.myName,to:t.getSendToParam(),roomType:!1,chatType:t.chatType,success:function(e){o.fire("em.chat.sendSuccess",i)}}),t.chatType==s.chatType.CHAT_ROOM&&f.setGroup("groupchat"),n.conn.send(f.body);var m={msg:f,type:s.IMAGE};t.saveSendMsg(m)}})}})},saveSendMsg:function(e){c.saveMsg(e.msg,e.type)}}};t.default=u},"1d19":function(e,t,a){"use strict";a.r(t);var n=a("1ca1"),s=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=s.a},"997d":function(e,t,a){"use strict";var n,s=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}))},d7b4:function(e,t,a){"use strict";a.r(t);var n=a("997d"),s=a("1d19");for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);var c,u=a("f0c5"),i=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'comps/chat/inputbar/suit/image/image-create-component',
    {
        'comps/chat/inputbar/suit/image/image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d7b4"))
        })
    },
    [['comps/chat/inputbar/suit/image/image-create-component']]
]);
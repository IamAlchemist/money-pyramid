(this["webpackJsonpmoney-pyramid"]=this["webpackJsonpmoney-pyramid"]||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/MoneyPyramid.a87c224d.jpg"},30:function(e,t,n){e.exports=n.p+"static/media/intern.3f602c7a.png"},31:function(e,t,n){e.exports=n.p+"static/media/public_qr.f635ecc3.png"},32:function(e,t,n){e.exports=n.p+"static/media/wx_qun.1c6fe7cc.jpeg"},34:function(e,t,n){e.exports=n(56)},39:function(e,t,n){},47:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a,l=n(0),c=n.n(l),r=n(13),i=n.n(r),o=(n(39),n(40),n(8)),u=n(9),s=n(11),m=n(10),d=n(12),E=n(58),p=n(59),f=n(62),h=n(60),v=n(61),g=n(17),b=(n(47),n(26)),y=n.n(b),j=n(27),S=n.n(j),N=n(28),O=n(29),x=n.n(O),I=n(30),C=n.n(I),k=n(31),w=n.n(k),D=n(32),T=n.n(D),A=new y.a({serviceId:"tt9rob",baseURL:"https://refer.bytedance.com/api/"}),M=null;a=function(e){var t=document.location.toString().split("?");if(t.length>1)for(var n,a=t[1].split("&"),l=0;l<a.length;l++)if(null!=(n=a[l].split("="))&&n[0]===e)return n[1];return""}("refereeId");var L=function(e){M?e():A.user.isLogin().then((function(t){t?new Promise((function(e,t){A.run("currentUserInfo",{}).then((function(n){n.success?e(n.user):t(n)})).catch((function(e){t(e)}))})).then((function(e){M=e})).catch((function(e){console.log(e)})).finally((function(){e()})):e()}))},B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"Referee"},c.a.createElement("p",null,"----",c.a.createElement("i",null,c.a.createElement("ins",null,c.a.createElement("strong",null,this.props.refereeName))),"\u63a8\u8350\u4e86\u60a8"))}}]),t}(c.a.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"AppInfo",id:"JD"},c.a.createElement("p",null,"\u8fd9\u6b21\u63a8\u8350\u7684\u5b57\u8282\u8df3\u52a8\u5c97\u4f4d\u662f\uff0c",c.a.createElement("ins",null,"\u5f55\u53d6\u6bd4\u4f8b\u66f4\u9ad8"),"\uff0c\u800c\u4e14",c.a.createElement("ins",null,"\u4e0d\u9700\u8981\u4efb\u4f55\u5ba2\u6237\u7aef\u7ecf\u9a8c"),'\u7684"\u5ba2\u6237\u7aef\u5b9e\u4e60\u751f"\uff0c\u5185\u63a8\u5956\u91d1 ',c.a.createElement("strong",null,c.a.createElement("ins",null,c.a.createElement("i",null,"1,000 RMB")))," \u7b49\u5927\u5bb6\u5206"),c.a.createElement("div",{id:"money-pyramid-container",className:"box box-column"}))}}]),t}(c.a.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{height:"10px"}})}}]),t}(c.a.Component),R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).phoneNumberDidChange=function(e){n.setState({phoneNumber:e.target.value})},n.verficationCodeDidChange=function(e){n.setState({verificationNumber:e.target.value})},n.wxIdDidChange=function(e){n.setState({wxId:e.target.value})},n.handleSubmit=function(e){var t,a,l,c;t=n.state.phoneNumber,a=n.state.verificationNumber,l=n.state.wxId,c=function(e,t){null!==e?console.log(e):t.success&&n.props.onSuccess()},A.run("loginByPhone",{phoneNumber:t,code:a,wxId:l}).then((function(e){e.success&&(M=e.userInfo),c(null,e)})).catch((function(e){c(e)})),e.preventDefault()},n.tick=function(){1===n.state.sendingSMS?(n.setState({sendingSMS:0}),clearInterval(n.timerID),n.timerID=null):n.setState({sendingSMS:n.state.sendingSMS-1})},n.countDown=function(){n.setState({sendingSMS:60}),n.timerID=setInterval((function(){n.tick()}),1e3)},n.sendSMSIfNeeded=function(){var e,t;n.state.phoneNumber&&(n.countDown(),e=n.state.phoneNumber,t=function(){},A.run("sendSMS",{phoneNumber:e}).then((function(e){console.log(e),t(null)})).catch((function(e){t(e)})))},n.state={phoneNumber:"",verificationNumber:"",wxId:"",sendingSMS:0},n.timerID=null,n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.timerID&&clearInterval(this.timerID)}},{key:"render",value:function(){var e=0===this.state.sendingSMS?"\u83b7\u53d6\u9a8c\u8bc1\u7801":"\u7b49\u5f85(".concat(this.state.sendingSMS,"s)");return c.a.createElement("div",null,c.a.createElement("div",null,"\u4e3a\u4e86\u53ef\u4ee5\u5151\u6362\u5956\u52b1\uff0c\u8bf7\u8f93\u5165\u5fae\u4fe1\u53f7\u548c\u624b\u673a\u53f7\u767b\u5f55"),c.a.createElement(J,null),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement(E.a,{placeholder:"\u5fae\u4fe1\u53f7",required:!0,onChange:this.wxIdDidChange}),c.a.createElement(J,null),c.a.createElement(E.a,{placeholder:"\u624b\u673a\u53f7\u7801",required:!0,onChange:this.phoneNumberDidChange}),c.a.createElement(J,null),c.a.createElement(p.a,null,c.a.createElement(E.a,{placeholder:"\u9a8c\u8bc1\u7801",required:!0,onChange:this.verficationCodeDidChange}),c.a.createElement(f.a,{addonType:"append"},c.a.createElement(h.a,{color:"secondary",disabled:0!==this.state.sendingSMS,onClick:this.sendSMSIfNeeded},e))),c.a.createElement(J,null),c.a.createElement(h.a,{color:"info",size:"lg",block:!0,type:"submit"},"\u767b\u5f55/\u6ce8\u518c")))}}]),t}(c.a.Component),U=function(e){var t=Object(g.useToasts)().addToast;return c.a.createElement(N.CopyToClipboard,{text:e.copyText,onCopy:function(n,a){t(e.toast,{appearance:a?"success":"error",autoDismiss:!0,autoDismissTimeout:1500})}},c.a.createElement(h.a,{color:e.color,size:"sm",style:e.style?e.style:{}},e.copyText))},q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={url:"temp",pic:"",useImage:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://iamalchemist.github.io/money-pyramid/?refereeId="+(null!==M?M._id:"");this.setState({url:t}),setTimeout((function(){var t=document.getElementsByTagName("canvas")[0];t&&e.setState({pic:t.toDataURL("image/png"),useImage:!0})}),1e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"AppInfo"},c.a.createElement("div",null,c.a.createElement("strong",null,"\u5f15\u8350\u65b9\u5f0f\u4e00")),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement("div",null,"\u70b9\u51fb\u4e13\u5c5e\u94fe\u63a5\u8fdb\u884c"),c.a.createElement(U,{copyText:this.state.url,toast:"\u4e13\u5c5e\u94fe\u63a5\u5df2\u7ecf\u590d\u5236",color:"link",style:{textAlign:"left",padding:"0px"}})),c.a.createElement("li",null,"\u5728\u5fae\u4fe1\u4e2d\u53d1\u9001\u7ed9\u670b\u53cb")),c.a.createElement("div",null,c.a.createElement("strong",null,"\u5f15\u8350\u65b9\u5f0f\u4e8c")),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement("div",null,"\u5fae\u4fe1\u4e2d\u957f\u6309\u4e13\u5c5e\u4e8c\u7ef4\u7801"),c.a.createElement(J,null),this.state.useImage&&c.a.createElement("img",{src:this.state.pic,alt:"",style:{width:"128px",height:"128px",marginBottom:"5px"}}),!this.state.useImage&&c.a.createElement(S.a,{value:this.state.url,fgColor:"#17a2b8"})),c.a.createElement("li",null,"\u5728\u5fae\u4fe1\u4e2d\u53d1\u9001\u7ed9\u670b\u53cb")))}}]),t}(c.a.Component),z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).recommend=function(){L((function(){n.props.onActived(n.props.activeTag)}))},n.loginDidSucceed=function(){n.forceUpdate()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return e=this.props.active?null!==M?c.a.createElement(q,null):c.a.createElement("div",null,c.a.createElement(R,{onSuccess:this.loginDidSucceed}),c.a.createElement(J,null)):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("strong",null,"\u77e5\u8bc6\u70b9")),c.a.createElement("ol",null,c.a.createElement("li",null,"\u5f15\u8350\u7684\u670b\u53cb\u8d8a\u591a\uff0c\u8d8a\u6709\u53ef\u80fd\u53c2\u4e0e\u5e73\u5206\u5956\u91d1"),c.a.createElement("li",null,"\u6ce8\u518c\u540e\u624d\u80fd\u751f\u6210\u81ea\u5df1\u7684\u63a8\u8350\u94fe\u63a5\u548c\u4e8c\u7ef4\u7801"),c.a.createElement("li",null,"\u4e3a\u4fdd\u8bc1\u6bcf\u4e2a\u63a8\u8350\u5956\u91d1\u4e0d\u4f4e\u4e8e100RMB\uff0c\u8f6c\u53d1\u5c42\u6b21\uff08\u4e0d\u662f\u6b21\u6570\uff09\u4e0d\u80fd\u8d85\u8fc78\u5c42")),c.a.createElement(h.a,{color:"primary",size:"lg",disabled:this.props.refereeLevel>=8,block:!0,onClick:this.recommend},"\u6211\u8981\u63a8\u8350")),c.a.createElement("div",null,c.a.createElement(K,null),c.a.createElement("h6",null,"\u6211\u8ba4\u8bc6\u91d1\u5b50"),e)}}]),t}(c.a.Component),_=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).apply=function(){L((function(){n.props.onActived(n.props.activeTag)}))},n.loginDidSucceed=function(){n.forceUpdate()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=null;return e=this.props.active?null!==M?c.a.createElement("div",{className:"AppInfo",style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"}},c.a.createElement("div",null,c.a.createElement("strong",null,"\u6295\u9012\u65b9\u5f0f\u4e00")),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement("div",null,c.a.createElement("div",null,"\u70b9\u51fb\u590d\u5236\u5b57\u8282\u8df3\u52a8\u6821\u62db\u5185\u63a8\u7801:"),c.a.createElement(U,{copyText:"NNQVZ4E",toast:"\u5185\u63a8\u7801\u5df2\u7ecf\u590d\u5236",color:"info"}))),c.a.createElement("li",null,c.a.createElement("div",null,c.a.createElement("div",null,"\u6253\u5f00\u5c97\u4f4d\u94fe\u63a5\u6295\u9012:"),c.a.createElement("a",{href:"https://job.toutiao.com/s/tK371o",rel:"noopener noreferrer",target:"_blank"},"https://job.toutiao.com/s/tK371o")))),c.a.createElement("div",null,c.a.createElement("strong",null,"\u6295\u9012\u65b9\u5f0f\u4e8c")),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement("div",null,c.a.createElement("div",null,"\u5fae\u4fe1\u4e2d\u957f\u6309\u4e8c\u7ef4\u7801\u6253\u5f00\u6295\u9012\u9875\u9762"),c.a.createElement("img",{src:C.a,style:{width:"150px"},alt:"img"}))))):c.a.createElement("div",null,c.a.createElement(R,null)):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("strong",null,"\u77e5\u8bc6\u70b9")),c.a.createElement("ol",null,c.a.createElement("li",null,"2019\u5e74\u5b9e\u4e60\u751f\u901a\u8fc7\u7b54\u8fa9\u51e0\u4e4e\u5168\u90e8\u8f6c\u6b63"),c.a.createElement("li",null,"\u5ba2\u6237\u7aef\u5c97\u4f4d\u6bd4\u5176\u4ed6\u5c97\u4f4d\u901a\u8fc7\u7387\u9ad8")),c.a.createElement("div",null,c.a.createElement("strong",null,"\u5c97\u4f4d\u8981\u6c42")),c.a.createElement("ol",null,c.a.createElement("li",null,"2021\u5c4a\u83b7\u5f97\u672c\u79d1\u53ca\u4ee5\u4e0a\u5b66\u5386\uff0c\u8f6f\u4ef6\u5de5\u7a0b\u3001\u8ba1\u7b97\u673a\u7b49\u76f8\u5173\u4e13\u4e1a"),c.a.createElement("li",null,"\u70ed\u7231\u8ba1\u7b97\u673a\u79d1\u5b66\u548c\u4e92\u8054\u7f51\u6280\u672f\uff0c\u5bf9\u79fb\u52a8\u4ea7\u54c1\u6709\u6d53\u539a\u5174\u8da3\uff0c\u65e0\u76f8\u5173\u7ecf\u9a8c\u4ea6\u53ef")),c.a.createElement(h.a,{color:"success",size:"lg",block:!0,onClick:this.apply},"\u6211\u8981\u6295\u9012")),c.a.createElement("div",null,c.a.createElement(K,null),c.a.createElement("h6",null,"\u6211\u5c31\u662f\u5019\u9009\u4eba"),e)}}]),t}(c.a.Component),H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).onActived=function(e){n.setState({activeTag:e})},n.state={activeTag:0,refereeName:"...",refereeLevel:8},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=a,new Promise((function(t,n){A.run("id2name",{refereeId:e}).then((function(e){t(e)})).catch((function(e){console.log(e)}))}))).then((function(e){var n=e.refereeName,a=e.refereeLevel;t.setState({refereeName:n,refereeLevel:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v.a,null,c.a.createElement("h1",null,"\u5b57\u8282\u5185\u63a8\u91d1\u5b50\u5854"),c.a.createElement("p",null,"\u63a8\u8350\u4f60\u670b\u53cb\uff0c\u4f60\u4e5f\u6709\u5185\u63a8\u5956\u91d1\uff01"),c.a.createElement(B,{refereeName:this.state.refereeName}),c.a.createElement(J,null),c.a.createElement(P,null)),c.a.createElement("div",{id:"MainPage",className:"container"},c.a.createElement(g.ToastProvider,null,c.a.createElement(z,{active:1===this.state.activeTag,activeTag:1,onActived:this.onActived,refereeLevel:this.state.refereeLevel}),c.a.createElement(_,{active:2===this.state.activeTag,activeTag:2,onActived:this.onActived}))),c.a.createElement(W,null),c.a.createElement(Q,null),c.a.createElement(V,null),c.a.createElement(J,null))}}]),t}(c.a.Component);function K(){return c.a.createElement("div",null,c.a.createElement("hr",null))}function W(){return c.a.createElement("div",{className:"container"},c.a.createElement(K,null),c.a.createElement("h6",null,"\u5185\u63a8\u6e38\u620f\u89c4\u5219"),c.a.createElement("div",null,c.a.createElement("div",{className:"AppInfo"},"\u4e00\u56fe\u80dc\u5343\u8a00\uff0c\u5982\u679c\u9ec4\u8272\u7684\u5956\u676f\u5165\u804c\u4e86\uff0c\u90a3\u4e48\u6240\u6709\u7eff\u8272\u7684\u76f8\u5173\u63a8\u8350\u4eba\u548c\u9ec4\u8272\u7684\u5956\u676f\u90fd\u53ef\u4ee5\u5e73\u5747\u5206\u5185\u63a8\u5956\u91d1"),c.a.createElement("img",{src:x.a,alt:"img"}),c.a.createElement("h6",null,"\u77e5\u8bc6\u70b9"),c.a.createElement("div",{className:"AppInfo"},c.a.createElement("ol",null,c.a.createElement("li",null,"\u9ed1\u8272\u7684\u662f\u5b57\u8282\u7684\u540c\u5b66\u6765\u5f53\u201c\u5ba2\u670d\u201d\uff0cTA\u4f1a\u628a\u5927\u5bb6\u62c9\u5165\u7fa4\u4e2d\uff0c\u8d1f\u8d23\u7ef4\u62a4\u597d\u7fa4\u5185\u5173\u7cfb\uff0c\u56de\u7b54\u95ee\u9898\uff0c\u544a\u8bc9\u5927\u5bb6\u5185\u63a8\u8fdb\u5ea6\uff0c\u5305\u62ec",c.a.createElement("span",{className:"text-danger"},c.a.createElement("ins",null,"\u6307\u5bfc\u65b0\u4eba\u9762\u8bd5")),"\u7b49"),c.a.createElement("li",null,'\u4e00\u65e6"\u5956\u676f"\u5165\u804c\uff0c\u201c\u5ba2\u670d\u201d\u8d1f\u8d23\u8054\u7cfb\u6240\u6709\u7eff\u8272\u8282\u70b9\uff0c\u5e76',c.a.createElement("span",{className:"text-danger"},c.a.createElement("ins",null,"\u901a\u8fc7\u5fae\u4fe1\u5e73\u5206")),"\u5185\u63a8\u5956\u91d1"),c.a.createElement("li",null,"\u4e3a\u4e86\u4fdd\u8bc1\u6bcf\u4e2a\u4eba\u63a8\u8350\u4eba\u53ef\u4ee5\u62ff\u5230\u7684\u5956\u91d1\u4e0d\u4f1a\u592a\u5c11\uff0c\u6bcf\u4e2a",c.a.createElement("span",{className:"text-danger"},c.a.createElement("ins",null,"\u63a8\u8350\u94fe\u7684\u6df1\u5ea6\u4e0d\u4f1a\u8d85\u8fc78\u5c42"))),c.a.createElement("li",null,"\u7528\u6237\u53ef\u4ee5",c.a.createElement("span",{className:"text-danger"},c.a.createElement("ins",null,"\u5173\u6ce8\u4e0b\u65b9\u516c\u4f17\u53f7")),"\u4e0a\uff0c\u5982\u679c\u53d1\u73b0\u6709\u8fdd\u53cd\u5b57\u8282\u8303\uff0c",c.a.createElement("span",{className:"text-danger"},c.a.createElement("ins",null,"\u53ef\u4ee5\u8fdb\u884c\u6295\u8bc9")),"\uff0c\u4f1a\u76f4\u63a5\u53cd\u9988\u7ed9HR\u548c\u76f8\u5173Leader\uff0c\u4fdd\u8bc1\u63a8\u8350\u4eba\u7684\u5229\u76ca"),c.a.createElement("li",null,"\u66f4\u8be6\u7ec6\u7684\u89c4\u5219\u8bf7\u53c2\u8003",c.a.createElement("span",{className:"text-danger"},c.a.createElement("ins",null,"\u9875\u9762\u5e95\u90e8\u7684\u94fe\u63a5")))))))}function Q(){return c.a.createElement("div",{className:"container"},c.a.createElement(K,null),c.a.createElement("h6",null,"\u516c\u4f17\u53f7"),c.a.createElement("div",{className:"AppInfo"},"\u53ef\u4ee5\u5728\u516c\u4f17\u53f7\u7559\u8a00\u8fdb\u884c\u8fdb\u5ea6\u67e5\u8be2\uff0c\u95ee\u9898\u53cd\u9988\uff0c\u6295\u8bc9\u7b49"),c.a.createElement("img",{src:w.a,alt:""}),c.a.createElement(K,null),c.a.createElement("h6",null,"\u5185\u63a8\u5ba2\u670d\u7fa4"),c.a.createElement("div",{className:"AppInfo"},"\u52a0\u5165\u5b57\u8282\u5ba2\u670d\u7fa4\uff0c\u4e86\u89e3\u66f4\u591a\u4fe1\u606f"),c.a.createElement("img",{src:T.a,alt:"",style:{width:"200px"}}))}function V(){return c.a.createElement("div",{className:"container"},c.a.createElement(K,null),c.a.createElement("h6",null,"\u5173\u4e8e"),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://bytedance.feishu.cn/docs/doccniJHKFfh2kHt1j6J2TV2PIh"},"\u5b57\u8282\u5185\u63a8\u91d1\u5b50\u5854\u7ec6\u5219")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://bytedance.feishu.cn/docs/doccnN0CZOycd2340CY3CJESbxh"},"\u5173\u4e8e\u8be5\u5c97\u4f4d\u7684\u4e00\u4e9bQ&A"))))}var Z=function(){return c.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.60ba60aa.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{345:function(e,r,t){"use strict";t.r(r);var n=t(8),c=(t(19),t(65),t(51),{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.$content,r.next=3,t("hello").fetch();case 3:return n=r.sent,r.abrupt("return",{page:n});case 5:case"end":return r.stop()}}),r)})))()},data:function(){return{loading:!1,success:!1,errored:!1,name:"",email:"",phone:"",desc:"",password:""}},methods:{signIn:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$supabase.auth.signUp({email:e.email,password:e.password});case 2:t=r.sent,n=t.user,c=t.error,console.log(n,c);case 6:case"end":return r.stop()}}),r)})))()},order:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data,t,n,c,o,l,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return data={name:e.name,email:e.email,phone:e.phone,desc:e.desc},r.next=3,e.$supabase.from("orders").insert(data);case 3:return t=r.sent,n=t.resp,c=t.error,console.log(n,c),r.next=9,e.$supabase.rpc("telegram",{msg:"".concat(data.desc," Name :  ").concat(data.name," Phone :  ").concat(data.phone," Email :  ").concat(data.email)});case 9:o=r.sent,l=o.res,m=o.err,console.log(l,m);case 13:case"end":return r.stop()}}),r)})))()}}}),o=t(50),component=Object(o.a)(c,(function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("main",[t("div",{staticClass:"hero contactHero"},[t("div"),e._v(" "),t("div",{staticClass:"hero__center"},[t("div",{staticClass:"hero__center-title"},[e._v("این صفحه به زودی راه اندازی می شود")]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"hero__center-sub-title"},[e._v("...")])]),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("div",{staticClass:"hero__bg"})])])}],!1,null,null,null);r.default=component.exports}}]);
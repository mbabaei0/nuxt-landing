(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{332:function(t,e,n){t.exports=n.p+"img/about.8c8828c.webp"},337:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about__photo"},[e("img",{attrs:{src:n(332),alt:""}})])}],o={data:function(){return{content:[]}}},c=n(52),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"about"},[n("div",{staticClass:"about__desc"},[n("h3",{staticClass:"heading-2"},[t._v("دربـاره مــن")]),t._v(" "),n("p",[t._v("\n            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\n            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله\n            در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد\n            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.\n            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان\n            جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای\n            طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان\n            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری\n            موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد\n            نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل\n            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n          ")]),t._v(" "),n("div",{staticClass:"about__desc-actions"},[n("button",{staticClass:"btn-s"},[t._v("ریافت رزومه")]),t._v(" "),n("button",{staticClass:"btn-p boxShadowAnimation"},[n("NuxtLink",{attrs:{to:"/order"}},[t._v(" سفارش پروژه")])],1)])]),t._v(" "),t._m(0)])])}),r,!1,null,null,null);e.default=component.exports},372:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(53),n(21),n(70),{data:function(){return{loading:!1,success:!1,errored:!1,name:"",email:"",phone:"",desc:"",password:""}},methods:{order:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n,r,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={name:t.name,email:t.email,phone:t.phone,desc:t.desc},e.next=3,t.$supabase.from("orders").insert(data);case 3:return n=e.sent,r=n.resp,o=n.error,console.log(r,o),e.next=9,t.$supabase.rpc("telegram",{msg:"".concat(data.desc,"   Name: ").concat(data.name,"  Phone : ").concat(data.phone,"   Email: ").concat(data.email)});case 9:c=e.sent,l=c.res,d=c.err,console.log(l,d),t.$router.push("/");case 14:case"end":return e.stop()}}),e)})))()}}}),c=n(52),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"main"},[n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("About")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{About:n(337).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{712:function(t,n,e){var content=e(894);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("0046eead",content,!0,{sourceMap:!1})},893:function(t,n,e){"use strict";var c=e(712);e.n(c).a},894:function(t,n,e){(n=e(17)(!1)).push([t.i,".type-button[data-v-c3e86c2c]{width:150px}.button[data-v-c3e86c2c]{margin-top:20px;margin-bottom:20px}@media screen and (max-width:640px){.standings-card[data-v-c3e86c2c]{margin-left:5%}}.selected[data-v-c3e86c2c]{color:#bd3734}.unSelected[data-v-c3e86c2c]{color:#ff726f}.loser[data-v-c3e86c2c]{opacity:.4}.dark-bkg[data-v-c3e86c2c],.light-bkg[data-v-c3e86c2c]{background-color:#1a212e}",""]),t.exports=n},954:function(t,n,e){"use strict";e.r(n);e(392),e(35);var c=e(20),o=e.n(c),l={name:"skinWeapon",props:{type:String},data:function(){return{skinWeapon:[],skinBundle:[],skinLevel:0}},asyncData:function(t){var n=t.params;return console.log(void 0+"api/skinWeapons/"+n.id),o.a.all([o.a.get(void 0+"api/skinWeapons/"+n.id),o.a.get(void 0+"api/skinBundles/")]).then(o.a.spread((function(t,n){return console.log("res4",t.data),console.log("res5",n.data.data),{skinWeapon:t.data,skinBundle:n.data.data.find((function(n){return n._id===t.data.bundleId})).name}}))).catch((function(t){return console.log(t)}))},methods:{getImgUrl:function(t){return void 0+"api/uploads/skins/".concat(this.skinWeapon.imgs[t])},navBundle:function(t){this.$router.push({path:"/skins/".concat(this.skinWeapon.bundleId)})},changeLevel:function(t){this.skinLevel=t}},components:{}},d=(e(893),e(6)),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.skinWeapon?e("div",{staticClass:"hello",staticStyle:{height:"100%"}},[e("h1",{staticStyle:{"font-size":"50px","margin-bottom":"20px"}},[t._v(t._s(t.skinWeapon.name))]),t._v(" "),e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-narrow"},[e("div",{style:{width:t.$device.isMobile?"":"800px"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-6"},[e("img",{attrs:{src:t.getImgUrl(t.skinLevel),width:"500px"}}),t._v(" "),t._l(t.skinWeapon.imgs,(function(n){return e("div",{key:t.skinWeapon.imgs.indexOf(n),staticClass:"button",on:{click:function(e){t.changeLevel(t.skinWeapon.imgs.indexOf(n))}}},[t.skinWeapons.imgs.length>1?e("div",[t._v("\n                  Level "+t._s(t.skinWeapon.imgs.indexOf(n))+"\n                  ")]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"column is-6",staticStyle:{"text-align":"left"}},[e("div",[e("span",[e("p",{staticStyle:{display:"inline-block"}},[t._v(t._s(t.skinWeapon.description))])])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"button",on:{click:function(n){return t.navBundle()}}},[e("p",{staticClass:"title",staticStyle:{display:"inline-block","font-size":"25px"}},[t._v("Part of the "+t._s(t.skinBundle)+" Bundle")])]),t._v(" "),e("div",[e("span",[e("p",{staticClass:"title",staticStyle:{display:"inline-block",color:"#ff726f","text-align":"left","font-size":"25px"}},[t._v("Price:")]),t._v(" "),e("p",{staticClass:"title",staticStyle:{display:"inline-block","font-size":"25px"}},[t._v(t._s(t.skinWeapon.price))])])])])])])]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"title",staticStyle:{"text-align":"left"}})])])])]):t._e()}),[],!1,null,"c3e86c2c",null);n.default=component.exports}}]);
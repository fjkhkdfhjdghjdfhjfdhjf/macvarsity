(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{924:function(t,e,n){"use strict";var o=n(13),r=n(393)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),o(o.P+o.F*l,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(115)(c)},967:function(t,e,n){"use strict";n.r(e);n(109),n(49),n(45),n(79);var o=n(48),r=(n(924),n(35),n(44),n(9)),c=(n(46),n(47),n(19),n(20)),l=n.n(c),m=n(43),d={data:function(){return{searchData:[],fetching:!1,typingData:""}},methods:{getTeamSearchResults:n.n(m)()((function(t){var e=this;t.length?(this.fetchingPlayer=!0,this.$axios("https://valorantify.com/"+"api/teams?name[$search]=".concat(t),{method:"get",headers:{"content-type":"application/json"}}).then((function(t){return t.data})).then((function(t){e.searchData=[],t.data.forEach((function(t){return e.searchData.push(t)}))})).catch((function(t){throw e.searchData=[],t})).finally((function(){e.fetching=!1}))):this.searchData=[]}),500),onFocus:function(t){t.stopPropagation()},getTeamImgUrl:function(img){return"https://valorantify.com/"+"api/uploads/teams/".concat(img)},selectTeam:function(option){this.$emit("selected",option._id)}}},v=n(6),f={props:["headToHeadData"]};function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={watchQuery:!0,asyncData:function(t){return l.a.all([l.a.post("https://valorantify.com/api/db/teamstats",{filters:"team_oids=>'{".concat(t.query.team1,",").concat(t.query.team2,"}'")}),l.a.post("https://valorantify.com/api/db/mapstats",{filters:"team_oids=>'{".concat(t.query.team1,"}'")}),l.a.post("https://valorantify.com/api/db/mapstats",{filters:"team_oids=>'{".concat(t.query.team2,"}'")}),l.a.get("https://valorantify.com/api/gamemaps"),l.a.get("https://valorantify.com/"+"api/matches?active=false&$or[0][$and][0][teamOneId]=".concat(t.query.team1,"&$or[0][$and][1][teamTwoId]=").concat(t.query.team2,"&$or[0][$and][2][dateTime][$lt]=").concat((new Date).toString(),"&$or[1][$and][0][teamOneId]=").concat(t.query.team2,"&$or[1][$and][1][teamTwoId]=").concat(t.query.team1,"&$or[1][$and][2][dateTime][$lt]=").concat((new Date).toString(),"&populatemapsonly=true")),l.a.post("https://valorantify.com/api/db/compostats",{filters:"team_oids=>'{".concat(t.query.team1,"}'")}),l.a.post("https://valorantify.com/api/db/compostats",{filters:"team_oids=>'{".concat(t.query.team2,"}'")})]).then(l.a.spread(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,o,r,c,m,d,v){var f,_,h,y,x,C,S,P,i,w,k,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(f=c.data.data,_=[],h=o.data,y=r.data,x=void 0,C=void 0,d.data.forEach((function(t){(void 0===x||t.Pickrate>x.Pickrate)&&(x=t)})),v.data.forEach((function(t){(void 0===C||t.Pickrate>C.Pickrate)&&(C=t)})),S=f.map((function(map){return map._id})),P=[],i=0;i<S.length;i++)w=l()({method:"post",url:"https://valorantify.com/api/db/playerstats",data:{filters:"team_oids=>'{".concat(t.query.team1,"}',gamemap_oids=>'{").concat(S[i],"}'")}}),P.push(w),k=l()({method:"post",url:"https://valorantify.com/api/db/playerstats",data:{filters:"team_oids=>'{".concat(t.query.team2,"}',gamemap_oids=>'{").concat(S[i],"}'")}}),P.push(k);return e.next=13,l.a.all([].concat(P)).then(l.a.spread((function(){for(var t=[],e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];for(var r=0;r<n.length-1;r+=2)t.push({team1:n[r].data,team2:n[r+1].data});return t})));case 13:return data=e.sent,f.forEach((function(map,t){var e=void 0,n=void 0;_.push({name:map.name,image:map.img,team1:-1!=h.findIndex((function(element){return element.Map==map.name}))?h[h.findIndex((function(element){return element.Map==map.name}))]:void 0,team2:-1!=y.findIndex((function(element){return element.Map==map.name}))?y[y.findIndex((function(element){return element.Map==map.name}))]:void 0}),void 0!==_[t].team1&&(data[t].team1.forEach((function(t){(void 0===e||t.ValRating>e.ValRating)&&(e=t)})),_[t].team1.bestPlayer=e),void 0!==_[t].team2&&(data[t].team2.forEach((function(t){(void 0===n||t.ValRating>n.ValRating)&&(n=t)})),_[t].team2.bestPlayer=n)})),e.abrupt("return",{teamStats:n.data.reverse(),mapStats:_,headToHeadData:m.data.data,compStats1:d.data,compStats2:v.data,favoriteComp1:x,favoriteComp2:C});case 16:case"end":return e.stop()}}),e)})));return function(t,n,o,r,c,l,m){return e.apply(this,arguments)}}()))},created:function(){},methods:{getTeamImg:function(img){return"https://valorantify.com/"+"api/uploads/teams/".concat(img)},removeTeamOne:function(){this.teamStats.length>1?(this.$router.push({query:h(h({},this.$route.query),{},{team1:this.teamStats[1].team_oid,team2:void 0})}),this.teamStats[0]=[this.teamStats[1]]):(this.$router.push({query:h(h({},this.$route.query),{},{team1:void 0})}),this.teamStats=[])},removeTeamTwo:function(){this.$router.push({query:h(h({},this.$route.query),{},{team2:void 0})}),this.teamStats=[this.teamStats[0]]},fetchTeam:function(t,option){0===t?this.$router.push({query:h(h({},this.$route.query),{},{team1:option})}):this.$router.push({query:h(h({},this.$route.query),{},{team2:option})})},getMapImg:function(t){return"https://valorantify.com/"+"api/uploads/maps/".concat(t)},getAgent:function(img){return"https://valorantify.com/"+"api/uploads/agents/".concat(img)},getPlayerImgUrl:function(t){return"https://valorantify.com/"+"api/uploads/players/".concat(t)}},components:{TeamSearch:Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",[n("b-autocomplete",{staticStyle:{width:"230px","border-bottom-color":"#171e29","border-bottom-height":"1px"},attrs:{"max-height":"400px",rounded:"",icon:"magnify",data:t.searchData,placeholder:"Search...",field:"name",loading:t.fetching},on:{typing:function(e){return t.getTeamSearchResults(e)},select:function(option){return t.selectTeam(option)}},nativeOn:{click:function(e){return t.onFocus(e)}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticStyle:{width:"100%",height:"50px"}},[n("img",{staticStyle:{"vertical-align":"middle",width:"40px"},attrs:{src:t.getTeamImgUrl(e.option.img)}}),t._v(" "),n("span",{staticStyle:{"margin-left":"80px",color:"white"}},[t._v(t._s(e.option.name))])])]}}]),model:{value:t.typingData,callback:function(e){t.typingData=e},expression:"typingData"}},[t._v(" "),n("template",{slot:"empty"},[t._v("No results found")])],2)],1)}),[],!1,null,null,null).exports,HeadToHeadCard:Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":"contentIdForA11y3"},scopedSlots:t._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"contentIdForA11y3"}},[n("div",{staticClass:"is-flex",staticStyle:{"flex-direction":"row"}},[n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])])}}])},[t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\n              "),n("a",[t._v("#buefy")]),t._v(".\n          ")])]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item"},[t._v("Save")]),t._v(" "),n("a",{staticClass:"card-footer-item"},[t._v("Edit")]),t._v(" "),n("a",{staticClass:"card-footer-item"},[t._v("Delete")])])])}),[],!1,null,null,null).exports}},x=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-content",staticStyle:{"margin-top":"20px"}},[n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column"},[t.teamStats[0]?n("div",[n("img",{staticStyle:{"border-radius":"50%","max-width":"100px","max-height":"100px"},attrs:{src:t.getTeamImg(t.teamStats[0].team_img)}}),t._v(" "),n("div",[n("p",{staticClass:"title is-3"},[t._v(t._s(t.teamStats?t.teamStats[0].Team:"Invalid team"))]),n("p",{staticStyle:{"font-weight":"bold","margin-top":"-30px",color:"#ff4653","font-size":"14px",cursor:"pointer"},on:{click:t.removeTeamOne}},[t._v("X")])])]):n("TeamSearch",{on:{selected:function(e){return t.fetchTeam(0,e)}}})],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"column"},[t.teamStats[1]?n("div",[n("img",{staticStyle:{"border-radius":"50%","max-width":"100px","max-height":"100px"},attrs:{src:t.getTeamImg(t.teamStats[1].team_img)}}),t._v(" "),n("div",[n("p",{staticClass:"title is-3"},[t._v(t._s(t.teamStats?t.teamStats[1].Team:"Invalid team"))]),n("p",{staticStyle:{"font-weight":"bold","margin-top":"-30px",color:"#ff4653","font-size":"14px",cursor:"pointer"},on:{click:t.removeTeamTwo}},[t._v("X")])])]):n("TeamSearch",{on:{selected:function(e){return t.fetchTeam(1,e)}}})],1)]),t._v(" "),n("div",{staticClass:"columns is-mobile"},t._l(t.teamStats,(function(e){return n("div",{key:e._id,staticClass:"column",staticStyle:{"background-color":"#273142"}},[n("div",[n("small",[t._v("ValRating")]),t._v(" "),n("div",[n("p",{staticClass:"title is-4"},[t._v(t._s(e.ValRating.toFixed(2)))])]),t._v(" "),n("small",[t._v("K/D")]),t._v(" "),n("div",[n("p",{staticClass:"title is-4"},[t._v(t._s(e["K/D"].toFixed(2)))])])])])})),0),t._v(" "),n("div",{staticClass:"columns is-mobile"},[void 0!==t.favoriteComp1?n("div",{staticClass:"column has-text-left",staticStyle:{"background-color":"#273142"}},[n("p",[t._v("Favorite Comp")]),t._v(" "),t._l(t.favoriteComp1.Composition,(function(e){return n("img",{key:e.agent_oid,staticStyle:{width:"30px",height:"30px","border-radius":"50%"},attrs:{src:t.getAgent(e.agent_img),alt:"Agent Img"}})})),t._v(" "),n("p",[t._v("Pickrate")]),t._v(" "),n("p",{staticClass:"title is-3"},[t._v(t._s((100*t.favoriteComp1.Pickrate).toFixed(2))+"%")])],2):t._e(),t._v(" "),void 0!==t.favoriteComp1?n("div",{staticClass:"column is-flex",staticStyle:{"background-color":"#273142","align-items":"center","justify-content":"center","flex-direction":"column"}},[n("p",[t._v("Winrate")]),t._v(" "),n("p",{staticClass:"title is-3"},[t._v(t._s((100*t.favoriteComp1["Win %"]).toFixed(1))+"%")])]):t._e(),t._v(" "),void 0!==t.favoriteComp2?n("div",{staticClass:"column is-flex",staticStyle:{"background-color":"#273142","align-items":"center","justify-content":"center","flex-direction":"column"}},[n("p",[t._v("Winrate")]),t._v(" "),n("p",{staticClass:"title is-3"},[t._v(t._s((100*t.favoriteComp2["Win %"]).toFixed(1))+"%")])]):t._e(),t._v(" "),void 0!==t.favoriteComp2?n("div",{staticClass:"column has-text-right",staticStyle:{"background-color":"#273142"}},[n("p",[t._v("Favorite Comp")]),t._v(" "),t._l(t.favoriteComp2.Composition,(function(e){return n("img",{key:e.agent_oid,staticStyle:{width:"30px",height:"30px","border-radius":"50%"},attrs:{src:t.getAgent(e.agent_img)}})})),t._v(" "),n("p",[t._v("Pickrate")]),t._v(" "),n("p",{staticClass:"title is-3"},[t._v(t._s((100*t.favoriteComp2.Pickrate).toFixed(2))+"%")])],2):t._e()]),t._v(" "),t._l(t.mapStats,(function(map){return n("div",{key:map.name,staticStyle:{"min-height":"150px",width:"100%","padding-left":"0.5em","padding-right":"0.5em"},style:{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("+t.getMapImg(map.image)+") no-repeat center center","background-size":"cover"}},[n("div",{staticClass:"columns is-mobile",staticStyle:{"max-height":"100%","margin-top":"0.25em","margin-bottom":"0.25em"}},[n("div",{staticClass:"column has-text-left"},[map.team1?n("div",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("p",[t._v("ValRating")]),t._v(" "),n("p",{staticClass:"title is-5"},[t._v(t._s(map.team1.ValRating.toFixed(2)))]),t._v(" "),n("p",[t._v("Pickrate")]),t._v(" "),n("p",{staticClass:"title is-5",staticStyle:{margin:"0"}},[t._v(t._s((100*map.team1.Pickrate).toFixed(2))+"%")]),t._v(" "),n("small",[t._v(t._s(map.team1["Maps Played"])+" times played")])]),t._v(" "),n("div",{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center","flex-direction":"column"}},[n("p",[t._v("Winrate")]),t._v(" "),n("p",{staticClass:"title is-3"},[t._v(t._s((100*map.team1["Win %"]).toFixed(1))+"%")])])])]):n("div",[n("p",{staticClass:"title is-5"},[t._v("No data")])])]),t._v(" "),n("div",{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center","flex-direction":"column"}},[n("p",{staticClass:"title is-4"},[t._v(t._s(map.name))])]),t._v(" "),n("div",{staticClass:"column has-text-right"},[map.team2?n("div",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center","flex-direction":"column"}},[n("p",[t._v("Winrate")]),t._v(" "),n("p",{staticClass:"title is-3"},[t._v(t._s((100*map.team2["Win %"]).toFixed(1))+"%")])]),t._v(" "),n("div",{staticClass:"column"},[n("p",[t._v("ValRating")]),t._v(" "),n("p",{staticClass:"title is-5"},[t._v(t._s(map.team2.ValRating.toFixed(2)))]),t._v(" "),n("p",[t._v("Pickrate")]),t._v(" "),n("p",{staticClass:"title is-5",staticStyle:{margin:"0"}},[t._v(t._s((100*map.team2.Pickrate).toFixed(2))+"%")]),t._v(" "),n("small",{staticStyle:{"font-size":"10pt"}},[t._v(t._s(map.team2["Maps Played"])+" times played")])])])]):n("div",[n("p",{staticClass:"title is-5"},[t._v("No data")])])])]),t._v(" "),n("b-collapse",{attrs:{open:!1,position:"is-bottom","aria-id":"contentIdForA11y1"},scopedSlots:t._u([{key:"trigger",fn:function(e){return n("a",{attrs:{"aria-controls":"contentIdForA11y1"}},[n("b-icon",{staticStyle:{"vertical-align":"bottom"},attrs:{icon:e.open?"menu-up":"menu-down"}}),t._v("\n                  "+t._s(e.open?"Hide Details":"View Details")+"\n              ")],1)}}],null,!0)},[t._v(" "),n("div",{staticClass:"columns"},[void 0!==map.team1?n("div",{staticClass:"column"},[n("p",[t._v("Best Player")]),t._v(" "),n("nuxt-link",{attrs:{to:"/players/"+map.team1.bestPlayer.player_oid}},[n("img",{staticStyle:{height:"100px",width:"100px","border-radius":"50%"},attrs:{src:t.getPlayerImgUrl(map.team1.bestPlayer.player_img)}}),t._v(" "),n("p",{staticClass:"title is-4"},[t._v(t._s(map.team1.bestPlayer.Player))])])],1):t._e(),t._v(" "),void 0!==map.team1?n("div",{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center","flex-direction":"column"}},[n("p",[t._v("ValRating")]),t._v(" "),n("p",{staticClass:"title is-4"},[t._v(t._s(map.team1.bestPlayer.ValRating.toFixed(2)))])]):t._e(),t._v(" "),void 0!==map.team2?n("div",{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center","flex-direction":"column"}},[n("p",[t._v("ValRating")]),t._v(" "),n("p",{staticClass:"title is-4"},[t._v(t._s(map.team2.bestPlayer.ValRating.toFixed(2)))])]):t._e(),t._v(" "),void 0!==map.team2?n("div",{staticClass:"column"},[n("p",[t._v("Best Player")]),t._v(" "),n("nuxt-link",{attrs:{to:"/players/"+map.team2.bestPlayer.player_oid}},[n("img",{staticStyle:{height:"100px",width:"100px","border-radius":"50%"},attrs:{src:t.getPlayerImgUrl(map.team2.bestPlayer.player_img)}}),t._v(" "),n("p",{staticClass:"title is-4"},[t._v(t._s(map.team2.bestPlayer.Player))])])],1):t._e()])])],1)}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center"}},[e("p",{staticClass:"title is-1"},[this._v("VS")])])}],!1,null,null,null);e.default=x.exports}}]);
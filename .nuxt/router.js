import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _782c78d6 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _1510f257 = () => interopDefault(import('..\\pages\\Admin.vue' /* webpackChunkName: "pages/Admin" */))
const _3ae5beea = () => interopDefault(import('..\\pages\\adstest.vue' /* webpackChunkName: "pages/adstest" */))
const _6e06802c = () => interopDefault(import('..\\pages\\agents\\index.vue' /* webpackChunkName: "pages/agents/index" */))
const _3f12081a = () => interopDefault(import('..\\pages\\Brackets.vue' /* webpackChunkName: "pages/Brackets" */))
const _2f8c0f7e = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _45868048 = () => interopDefault(import('..\\pages\\forums\\index.vue' /* webpackChunkName: "pages/forums/index" */))
const _a56d7d1e = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _4e5adbbf = () => interopDefault(import('..\\pages\\Maps.vue' /* webpackChunkName: "pages/Maps" */))
const _fef7f472 = () => interopDefault(import('..\\pages\\matches\\index.vue' /* webpackChunkName: "pages/matches/index" */))
const _19e436f2 = () => interopDefault(import('..\\pages\\mystats\\index.vue' /* webpackChunkName: "pages/mystats/index" */))
const _7c6e6743 = () => interopDefault(import('..\\pages\\mystats\\index\\_id.vue' /* webpackChunkName: "pages/mystats/index/_id" */))
const _7f709a47 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _e737e752 = () => interopDefault(import('..\\pages\\Reset.vue' /* webpackChunkName: "pages/Reset" */))
const _4838d9c0 = () => interopDefault(import('..\\pages\\Signup.vue' /* webpackChunkName: "pages/Signup" */))
const _1040d484 = () => interopDefault(import('..\\pages\\skins\\index.vue' /* webpackChunkName: "pages/skins/index" */))
const _7dc92a4a = () => interopDefault(import('..\\pages\\stats\\index.vue' /* webpackChunkName: "pages/stats/index" */))
const _291758a1 = () => interopDefault(import('..\\pages\\Verify.vue' /* webpackChunkName: "pages/Verify" */))
const _0ce8a630 = () => interopDefault(import('..\\pages\\Writers.vue' /* webpackChunkName: "pages/Writers" */))
const _da045914 = () => interopDefault(import('..\\pages\\forums\\create.vue' /* webpackChunkName: "pages/forums/create" */))
const _04219b8e = () => interopDefault(import('..\\pages\\skins\\media.js' /* webpackChunkName: "pages/skins/media" */))
const _6cb3df94 = () => interopDefault(import('..\\pages\\stats\\compare\\index.vue' /* webpackChunkName: "pages/stats/compare/index" */))
const _53d6dd77 = () => interopDefault(import('..\\pages\\teams\\compare.vue' /* webpackChunkName: "pages/teams/compare" */))
const _7d42768a = () => interopDefault(import('..\\pages\\stats\\events\\_id.vue' /* webpackChunkName: "pages/stats/events/_id" */))
const _54305799 = () => interopDefault(import('..\\pages\\skins\\weapons\\_id\\_slug.vue' /* webpackChunkName: "pages/skins/weapons/_id/_slug" */))
const _11427ec4 = () => interopDefault(import('..\\pages\\agents\\_name.vue' /* webpackChunkName: "pages/agents/_name" */))
const _2f7bb028 = () => interopDefault(import('..\\pages\\skins\\_id.vue' /* webpackChunkName: "pages/skins/_id" */))
const _609beccc = () => interopDefault(import('..\\pages\\teams\\_id.vue' /* webpackChunkName: "pages/teams/_id" */))
const _bbe68f12 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _b4f112e2 = () => interopDefault(import('..\\pages\\events\\_id\\bracket.vue' /* webpackChunkName: "pages/events/_id/bracket" */))
const _1964979e = () => interopDefault(import('..\\pages\\events\\_id\\_slug.vue' /* webpackChunkName: "pages/events/_id/_slug" */))
const _2488188a = () => interopDefault(import('..\\pages\\forums\\_id\\_slug.vue' /* webpackChunkName: "pages/forums/_id/_slug" */))
const _0ced2a6b = () => interopDefault(import('..\\pages\\matches\\_id\\_slug.vue' /* webpackChunkName: "pages/matches/_id/_slug" */))
const _2dad342a = () => interopDefault(import('..\\pages\\news\\_id\\_slug.vue' /* webpackChunkName: "pages/news/_id/_slug" */))
const _3e3884ea = () => interopDefault(import('..\\pages\\players\\_id\\_slug.vue' /* webpackChunkName: "pages/players/_id/_slug" */))
const _6c2f7e7a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _782c78d6,
    name: "About"
  }, {
    path: "/Admin",
    component: _1510f257,
    name: "Admin"
  }, {
    path: "/adstest",
    component: _3ae5beea,
    name: "adstest"
  }, {
    path: "/agents",
    component: _6e06802c,
    name: "agents"
  }, {
    path: "/Brackets",
    component: _3f12081a,
    name: "Brackets"
  }, {
    path: "/events",
    component: _2f8c0f7e,
    name: "events"
  }, {
    path: "/forums",
    component: _45868048,
    name: "forums"
  }, {
    path: "/Login",
    component: _a56d7d1e,
    name: "Login"
  }, {
    path: "/Maps",
    component: _4e5adbbf,
    name: "Maps"
  }, {
    path: "/matches",
    component: _fef7f472,
    name: "matches"
  }, {
    path: "/mystats",
    component: _19e436f2,
    name: "mystats",
    children: [{
      path: ":id?",
      component: _7c6e6743,
      name: "mystats-index-id"
    }]
  }, {
    path: "/news",
    component: _7f709a47,
    name: "news"
  }, {
    path: "/Reset",
    component: _e737e752,
    name: "Reset"
  }, {
    path: "/Signup",
    component: _4838d9c0,
    name: "Signup"
  }, {
    path: "/skins",
    component: _1040d484,
    name: "skins"
  }, {
    path: "/stats",
    component: _7dc92a4a,
    name: "stats"
  }, {
    path: "/Verify",
    component: _291758a1,
    name: "Verify"
  }, {
    path: "/Writers",
    component: _0ce8a630,
    name: "Writers"
  }, {
    path: "/forums/create",
    component: _da045914,
    name: "forums-create"
  }, {
    path: "/skins/media",
    component: _04219b8e,
    name: "skins-media"
  }, {
    path: "/stats/compare",
    component: _6cb3df94,
    name: "stats-compare"
  }, {
    path: "/teams/compare",
    component: _53d6dd77,
    name: "teams-compare"
  }, {
    path: "/stats/events/:id?",
    component: _7d42768a,
    name: "stats-events-id"
  }, {
    path: "/skins/weapons/:id?/:slug?",
    component: _54305799,
    name: "skins-weapons-id-slug"
  }, {
    path: "/agents/:name",
    component: _11427ec4,
    name: "agents-name"
  }, {
    path: "/skins/:id",
    component: _2f7bb028,
    name: "skins-id"
  }, {
    path: "/teams/:id?",
    component: _609beccc,
    name: "teams-id"
  }, {
    path: "/user/:id?",
    component: _bbe68f12,
    name: "user-id"
  }, {
    path: "/events/:id/bracket",
    component: _b4f112e2,
    name: "events-id-bracket"
  }, {
    path: "/events/:id/:slug?",
    component: _1964979e,
    name: "events-id-slug"
  }, {
    path: "/forums/:id/:slug?",
    component: _2488188a,
    name: "forums-id-slug"
  }, {
    path: "/matches/:id/:slug?",
    component: _0ced2a6b,
    name: "matches-id-slug"
  }, {
    path: "/news/:id/:slug?",
    component: _2dad342a,
    name: "news-id-slug"
  }, {
    path: "/players/:id?/:slug?",
    component: _3e3884ea,
    name: "players-id-slug"
  }, {
    path: "/",
    component: _6c2f7e7a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

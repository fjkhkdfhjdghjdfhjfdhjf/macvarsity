import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_axios_3327896c from 'nuxt_plugin_axios_3327896c' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_nuxtdevicedetectplugin09ef4cac_3d138594 from 'nuxt_plugin_nuxtdevicedetectplugin09ef4cac_3d138594' // Source: .\\nuxt-device-detect.plugin.09ef4cac.js (mode: 'all')
import nuxt_plugin_buefy_15f2ee86 from 'nuxt_plugin_buefy_15f2ee86' // Source: .\\buefy.js (mode: 'all')
import nuxt_plugin_myplugin_3118ec82 from 'nuxt_plugin_myplugin_3118ec82' // Source: ..\\plugins\\myplugin.js (mode: 'client')
import nuxt_plugin_ga_fb0a2534 from 'nuxt_plugin_ga_fb0a2534' // Source: ..\\plugins\\ga.js (mode: 'client')
import nuxt_plugin_chart_223dba6a from 'nuxt_plugin_chart_223dba6a' // Source: ..\\plugins\\chart (mode: 'client')
import nuxt_plugin_jquerybracket_b511d126 from 'nuxt_plugin_jquerybracket_b511d126' // Source: ..\\plugins\\jquery-bracket (mode: 'client')
import nuxt_plugin_jsoncsv_0f8cfbaa from 'nuxt_plugin_jsoncsv_0f8cfbaa' // Source: ..\\plugins\\jsoncsv (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"macvarsity","script":[{"src":"https:\u002F\u002Fhb.vntsm.com\u002Fv3\u002Flive\u002Fad-manager.min.js","type":"text\u002Fjavascript","data-site-id":"5ed7746cb519801b8a4d515b","data-mode":"scan","async":"true","data-cfasync":"false"},{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js","type":"text\u002Fjavascript"}],"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"A website that offers the most up to date news, stats, events and matches for anything Valorant related. This includes professional Valorant matches, events and more!"},{"hid":"keywords","name":"keywords","content":"valorant, events, statistics, news, pro valorant, riot, operator, odin, valorantwiki, sage"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Flogofinal.png"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Titillium+Web&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.2.0\u002Fcss\u002Fall.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.materialdesignicons.com\u002F2.5.94\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fcdn.materialdesignicons.com\u002F5.0.45\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_axios_3327896c === 'function') {
    await nuxt_plugin_axios_3327896c(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtdevicedetectplugin09ef4cac_3d138594 === 'function') {
    await nuxt_plugin_nuxtdevicedetectplugin09ef4cac_3d138594(app.context, inject)
  }

  if (typeof nuxt_plugin_buefy_15f2ee86 === 'function') {
    await nuxt_plugin_buefy_15f2ee86(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_myplugin_3118ec82 === 'function') {
    await nuxt_plugin_myplugin_3118ec82(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_fb0a2534 === 'function') {
    await nuxt_plugin_ga_fb0a2534(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_chart_223dba6a === 'function') {
    await nuxt_plugin_chart_223dba6a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_jquerybracket_b511d126 === 'function') {
    await nuxt_plugin_jquerybracket_b511d126(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_jsoncsv_0f8cfbaa === 'function') {
    await nuxt_plugin_jsoncsv_0f8cfbaa(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }

exports.ids = [11];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sova.d273dae.png";

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("66ddaeec", content, true, context)
};

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/credits.79a559f.svg";

/***/ }),

/***/ 191:
/***/ (function(module) {

module.exports = JSON.parse("{\"sage\":[{\"type\":\"Ability\",\"title\":\"Barrier Orb\",\"cost\":\"300\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=490\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A barrier orb.\"},{\"title\":\"FIRE\",\"details\":\"Places a solid wall.\"},{\"title\":\"ALT FIRE\",\"details\":\"Rotates the targeter.\"}]},{\"type\":\"Ability\",\"title\":\"Slow Orb\",\"cost\":\"100\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=490\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A slowing orb.\"},{\"title\":\"FIRE\",\"details\":\"To throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.\"}]},{\"type\":\"Ability\",\"title\":\"Heal Orb\",\"cost\":\"Free\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=490\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A healing orb.\"},{\"title\":\"FIRE\",\"details\":\"With your crosshairs over a damaged ally to activate a heal-over-time on them.\"},{\"title\":\"ALT FIRE\",\"details\":\"While Sage is damaged to activate a self heal-over-time.\"}]},{\"type\":\"Resurrection\",\"title\":\"Rolling Thunder\",\"cost\":\"7 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=490\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A resurrection ability.\"},{\"title\":\"FIRE\",\"details\":\"With your crosshairs placed over a deal ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.\"}]}],\"breach\":[{\"type\":\"Ability\",\"title\":\"Aftershock\",\"cost\":\"100\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=754\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A fusion charge\"},{\"title\":\"FIRE\",\"details\":\"The charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.\"}]},{\"type\":\"Ability\",\"title\":\"Flashpoint\",\"cost\":\"200\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=754\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A blind charge\"},{\"title\":\"FIRE\",\"details\":\"The charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.\"}]},{\"type\":\"Ability\",\"title\":\"Fault Line\",\"cost\":\"Free\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=754\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A seismic blast\"},{\"title\":\"HOLD FIRE\",\"details\":\"To increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.\"},{\"title\":\"RELEASE\",\"details\":\"To set off the quake, dazing all players in its zone and in a line up to the zone.\"}]},{\"type\":\"Ultimate\",\"title\":\"Rolling Thunder\",\"cost\":\"7 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=754\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A seismic charge\"},{\"title\":\"FIRE\",\"details\":\"To send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.\"}]}],\"brimstone\":[{\"type\":\"Ability\",\"title\":\"Stim Beacon\",\"cost\":\"100\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=145\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"Stim beacon.\"},{\"title\":\"FIRE\",\"details\":\"To toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.\"}]},{\"type\":\"Ability\",\"title\":\"Incendiary\",\"cost\":\"200\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=145\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"An incendiary grenade launcher.\"},{\"title\":\"FIRE\",\"details\":\"To launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damage players within the zone.\"}]},{\"type\":\"Ability\",\"title\":\"Sky Smoke\",\"cost\":\"100\",\"use\":\"3\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=145\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A tactical map.\"},{\"title\":\"FIRE\",\"details\":\"To set locations where Brimstone's smoke clouds will land.\"},{\"title\":\"ALTERNATE FIRE\",\"details\":\"To confirm, launching long-lasting smoke clouds that block vision in the selected area.\"}]},{\"type\":\"Ultimate\",\"title\":\"Orbital Strike\",\"cost\":\"6 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=145\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A tactical map.\"},{\"title\":\"FIRE\",\"details\":\"To launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.\"}]}],\"cypher\":[{\"type\":\"Ability\",\"title\":\"Trapwire\",\"cost\":\"200\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=848\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A trapwire.\"},{\"title\":\"FIRE\",\"details\":\"To place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.\"}]},{\"type\":\"Ability\",\"title\":\"Cyber Cage\",\"cost\":\"100\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=848\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A cyber cage.\"},{\"title\":\"FIRE\",\"details\":\"To toss the cyber cage in front of Cypher.\"},{\"title\":\"ACTIVATE\",\"details\":\"To create a zone that blocks vision and slows enemies who pass through it.\"}]},{\"type\":\"Ability\",\"title\":\"Spycam\",\"cost\":\"Free\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=848\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A spycam.\"},{\"title\":\"FIRE\",\"details\":\"To place the spycam at the targeted location.\"},{\"title\":\"RE-USE\",\"details\":\"This ability to take control of the camera's view. While in control of the camera.\"},{\"title\":\"FIRE\",\"details\":\"To shoot a marking dart. This dart will reveal the location of any player struck by the dart.\"}]},{\"type\":\"Ultimate\",\"title\":\"Neural Theft\",\"cost\":\"7 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=848\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.\"}]}],\"jett\":[{\"type\":\"Ability\",\"title\":\"Cloudburst\",\"cost\":\"100\",\"use\":\"3\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=257\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Throw a projectile that expands into a brief vision-blocking cloud on impact with a surface.\"},{\"title\":\"HOLD\",\"details\":\"The ability key to curve the smoke in the direction of your crosshair.\"}]},{\"type\":\"Ability\",\"title\":\"Updraft\",\"cost\":\"200\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=257\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Propel Jett high in the air.\"}]},{\"type\":\"Ability\",\"title\":\"Tailwind\",\"cost\":\"Free\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=257\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.\"}]},{\"type\":\"Ultimate\",\"title\":\"Blade Storm\",\"cost\":\"6 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=257\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A set of highly accurate throwing knives that recharge on killing an opponent.\"},{\"title\":\"FIRE\",\"details\":\"To throw a single knive at your target.\"},{\"title\":\"ALTERNATE FIRE\",\"details\":\"To throw all remaining daggers at your target.\"}]}],\"omen\":[{\"type\":\"Ability\",\"title\":\"Shrouded Step\",\"cost\":\"100\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=1005\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A shadow walk ability and see its range indicator.\"},{\"title\":\"FIRE\",\"details\":\"To begin a brief channel, then teleport to the marked location.\"}]},{\"type\":\"Ability\",\"title\":\"Paranoia\",\"cost\":\"200\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=1005\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.\"}]},{\"type\":\"Ability\",\"title\":\"Dark Cover\",\"cost\":\"Free\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=1005\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A shadow orb and see its range indicator.\"},{\"title\":\"FIRE\",\"details\":\"To throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision.\"},{\"title\":\"HOLD ALTERNATE FIRE\",\"details\":\"While targeting to move the marker further away.\"},{\"title\":\"HOLD\",\"details\":\"The ability key while targeting to move the marker closer.\"}]},{\"type\":\"Ultimate\",\"title\":\"From the Shadows\",\"cost\":\"7 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=1005\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A tactical map.\"},{\"title\":\"FIRE\",\"details\":\"To begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.\"}]}],\"phoenix\":[{\"type\":\"Ability\",\"title\":\"Blaze\",\"cost\":\"200\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"To create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it.\"},{\"title\":\"HOLD FIRE\",\"details\":\"To bend the wall in the direction of your crosshair.\"}]},{\"type\":\"Ability\",\"title\":\"Curveball\",\"cost\":\"200\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A flare orb that takes a curving path and detonates shortly after throwing.\"},{\"title\":\"FIRE\",\"details\":\"To curve the flare orb to the left, detonating and blinding any player who sees the orb.\"},{\"title\":\"ALTERNATE EQUIP\",\"details\":\"To curve the flare orb to the right.\"}]},{\"type\":\"Ability\",\"title\":\"Hot Hands\",\"cost\":\"Free\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A fireball.\"},{\"title\":\"FIRE\",\"details\":\"To throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damage enemies.\"}]},{\"type\":\"Ultimate\",\"title\":\"Run it Back\",\"cost\":\"6 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.\"}]}],\"viper\":[{\"type\":\"Ability\",\"title\":\"Snakebite\",\"cost\":\"100\",\"use\":\"2\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A chemical launcher.\"},{\"title\":\"FIRE\",\"details\":\"To launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.\"}]},{\"type\":\"Ability\",\"title\":\"Poison Cloud\",\"cost\":\"200\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A gas emitter.\"},{\"title\":\"FIRE\",\"details\":\"To throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.\"}]},{\"type\":\"Ability\",\"title\":\"Toxic Screen\",\"cost\":\"Free\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A gas emitter launcher.\"},{\"title\":\"FIRE\",\"details\":\"To deploy a long line of gas emitters.\"},{\"title\":\"REUSE\",\"details\":\"The ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.\"}]},{\"type\":\"Ultimate\",\"title\":\"Viper's Pi\",\"cost\":\"7 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=364\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A chemical sprayer.\"},{\"title\":\"FIRE\",\"details\":\"To spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.\"}]}],\"sova\":[{\"type\":\"Ability\",\"title\":\"Owl Drone\",\"cost\":\"300\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=604\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"An owl drone.\"},{\"title\":\"FIRE\",\"details\":\"To deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.\"}]},{\"type\":\"Ability\",\"title\":\"Shock Bolt\",\"cost\":\"200\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=604\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A bow with a shock bolt.\"},{\"title\":\"FIRE\",\"details\":\"To send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile.\"},{\"title\":\"ALTERNATE FIRE\",\"details\":\"To add up to two bounces to this arrow.\"}]},{\"type\":\"Ability\",\"title\":\"Recon Bolt\",\"cost\":\"Free\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=604\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A bow with recon bolt.\"},{\"title\":\"FIRE\",\"details\":\"To send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt.\"},{\"title\":\"HOLD FIRE\",\"details\":\"To extend the range of the projectile.\"},{\"title\":\"ALTERNATE FIRE\",\"details\":\"To add up to two bounces to this arrow.\"}]},{\"type\":\"Ultimate\",\"title\":\"Hunter's Fury\",\"cost\":\"7 ULT Meter\",\"use\":\"1\",\"demo\":\"https://youtu.be/-7JhCvmEzaw?t=604\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A bow with three long-range, wall-piercing energy blasts.\"},{\"title\":\"FIRE\",\"details\":\"To release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.\"}]}],\"raze\":[{\"type\":\"Ability\",\"title\":\"Boom Bot\",\"cost\":\"200\",\"use\":\"1\",\"demo\":\"https://www.youtube.com/watch?v=KRcFWFuyLGk\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A Boom Bot.\"},{\"title\":\"FIRE\",\"details\":\"Will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.\"}]},{\"type\":\"Ability\",\"title\":\"Blast Pack\",\"cost\":\"100\",\"use\":\"2\",\"demo\":\"https://www.youtube.com/watch?v=KRcFWFuyLGk\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Throw a Blast Pack that will stick to surfaces.\"},{\"title\":\"RE-USE\",\"details\":\"The ability after deployment to detonate, damaging and moving anything hit.\"}]},{\"type\":\"Ability\",\"title\":\"Paint Shells\",\"cost\":\"200\",\"use\":\"2\",\"demo\":\"https://www.youtube.com/watch?v=KRcFWFuyLGk\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A cluster grenade.\"},{\"title\":\"FIRE\",\"details\":\"To throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.\"}]},{\"type\":\"Ultimate\",\"title\":\"Showstopper\",\"cost\":\"6 ULT Meter\",\"use\":\"1\",\"demo\":\"https://www.youtube.com/watch?v=KRcFWFuyLGk\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"A rocket launcher.\"},{\"title\":\"FIRE\",\"details\":\"Shoots a rocket that does massive area damage on contact with anything.\"}]}],\"reyna\":[{\"type\":\"Ability\",\"title\":\"DEVOUR\",\"cost\":\"200\",\"use\":\"2\",\"demo\":\"https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"Consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time.\"},{\"title\":\"EMPRESS\",\"details\":\"is active, this skill will automatically cast and not consume the orb.\"}]},{\"type\":\"Ability\",\"title\":\"DISMISS\",\"cost\":\"Free\",\"use\":\"-\",\"demo\":\"https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"consume a nearby soul orb, becoming intangible for a short duration.\"},{\"title\":\"EMPRESS\",\"details\":\"is active, also become invisible.\"}]},{\"type\":\"Ability\",\"title\":\"LEER\",\"cost\":\"200\",\"use\":\"2\",\"demo\":\"https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4\",\"info\":[{\"title\":\"EQUIP\",\"details\":\"an ethereal destructible eye.\"},{\"title\":\"ACTIVATE\",\"details\":\"To cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.\"}]},{\"type\":\"Ultimate\",\"title\":\"EMPRESS\",\"cost\":\"6 ULT Meter\",\"use\":\"1\",\"demo\":\"https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4\",\"info\":[{\"title\":\"INSTANTLY\",\"details\":\"enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.\"}]}]}");

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_0e911bba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_0e911bba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_0e911bba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_0e911bba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_0e911bba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_name_vue_vue_type_style_index_0_id_0e911bba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-0e911bba]{width:150px}.button[data-v-0e911bba]{margin-bottom:20px}.button[data-v-0e911bba],.skills[data-v-0e911bba]{margin-top:20px}@media screen and (min-width:640px){.stick[data-v-0e911bba]{position:-webkit-sticky;position:sticky;top:0}}@media screen and (max-width:640px){.char-card[data-v-0e911bba]{margin-left:25%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/agents/_name.vue?vue&type=template&id=0e911bba&scoped=true&style=height%3A100%25&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home",staticStyle:{"height":"100%"}},[_vm._ssrNode("<div class=\"columns is-centered\" data-v-0e911bba>","</div>",[_vm._ssrNode("<div class=\"column is-one-fifth is-centered stick\" data-v-0e911bba><div class=\"column is-half stick\" data-v-0e911bba><section class=\"info-tiles char-card\" style=\"margin-top:22px;width:220px;height:266px\" data-v-0e911bba><div class=\"char-img\" data-v-0e911bba><article class=\"tile is-child box\" data-v-0e911bba><div style=\"width:180px;height:180px;overflow: hidden;\" data-v-0e911bba><img"+(_vm._ssrAttr("src",_vm.getImgUrl()))+" style=\"width:180px;\" data-v-0e911bba></div></article></div></section></div></div> "),_vm._ssrNode("<span data-v-0e911bba>","</span>",_vm._l((_vm.info[_vm.$route.params.name]),function(ability){return _vm._ssrNode("<div data-v-0e911bba>","</div>",[_vm._ssrNode("<div class=\"column is-vcentered skills\" data-v-0e911bba>","</div>",[_vm._ssrNode("<div class=\"card\" style=\"width:600px\" data-v-0e911bba>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-0e911bba>","</div>",[_vm._ssrNode("<p class=\"title\" data-v-0e911bba>"+_vm._ssrEscape(_vm._s(ability.title))+"</p> "+((ability.type!='Ultimate')?("<div data-v-0e911bba><img"+(_vm._ssrAttr("src",__webpack_require__(190)))+" style=\"width:15px;height:15px;\" data-v-0e911bba> <span data-v-0e911bba>"+_vm._ssrEscape(_vm._s(ability.cost)+" | "+_vm._s(ability.use)+" "+_vm._s(ability.use>1?'uses':'use'))+"</span></div>"):"<!---->")+" "+((ability.type=='Ultimate')?("<div data-v-0e911bba><span data-v-0e911bba>"+_vm._ssrEscape(_vm._s(ability.cost))+"</span></div>"):"<!---->")+" "),_vm._ssrNode("<div style=\"text-align: left;\" data-v-0e911bba>","</div>",_vm._l((ability.info),function(desc){return _vm._ssrNode("<span data-v-0e911bba>","</span>",[_c('B',[_vm._v(_vm._s(desc.title))]),_vm._ssrNode(_vm._ssrEscape("\n                  "+_vm._s(desc.details)+"\n                  ")+"<br data-v-0e911bba>")],2)}),0)],2),_vm._ssrNode(" <footer class=\"card-footer\" data-v-0e911bba><p class=\"card-footer-item\" data-v-0e911bba><span data-v-0e911bba>"+_vm._ssrEscape(_vm._s(ability.type))+"</span></p> <p class=\"card-footer-item\" data-v-0e911bba><span data-v-0e911bba><a style=\"color:#ff726f\" data-v-0e911bba>Demo</a></span></p></footer>")],2)])])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/agents/_name.vue?vue&type=template&id=0e911bba&scoped=true&style=height%3A100%25&

// EXTERNAL MODULE: ./pages/agents/Characters.JSON
var Characters = __webpack_require__(191);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/agents/_name.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _namevue_type_script_lang_js_ = ({
  name: "Characters",
  props: {
    type: String
  },

  data() {
    return {
      info: Characters
    };
  },

  mounted() {},

  methods: {
    openDemo(demo) {
      window.open(demo, "_blank");
    },

    getImgUrl() {
      if (this.$route.params.name === "sova") {
        return __webpack_require__(82)("./" + this.$route.params.name + ".webp");
      }

      return __webpack_require__(83)("./" + this.$route.params.name + ".png");
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/agents/_name.vue?vue&type=script&lang=js&
 /* harmony default export */ var agents_namevue_type_script_lang_js_ = (_namevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/agents/_name.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(192)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  agents_namevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0e911bba",
  "983bb280"
  
)

/* harmony default export */ var _name = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reyna.e3a8623.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sage.8f93a1f.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/breach.46d22b6.png";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brimstone.d1a65cc.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cypher.ad3f545.png";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jett.6c48861.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/omen.16f4170.png";

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/phoenix.b0202e8.png";

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/viper.ace7eee.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sova.4831eea.webp";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/raze.3abeb50.webp";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./raze.webp": 76,
	"./sova.webp": 75
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 82;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./breach.png": 68,
	"./brimstone.png": 69,
	"./cypher.png": 70,
	"./jett.png": 71,
	"./omen.png": 72,
	"./phoenix.png": 73,
	"./raze.png": 99,
	"./reyna.png": 66,
	"./sage.png": 67,
	"./sova.png": 100,
	"./viper.png": 74
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 83;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/raze.98f4e2c.png";

/***/ })

};;
//# sourceMappingURL=_name.js.map
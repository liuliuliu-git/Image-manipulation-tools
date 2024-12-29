(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/uview-ui/components/u-button/u-button"],{

/***/ 252:
/*!**************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/uni_modules/uview-ui/components/u-button/u-button.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-button.vue?vue&type=template&id=2bf0e569&scoped=true& */ 253);
/* harmony import */ var _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-button.vue?vue&type=script&lang=js& */ 255);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& */ 260);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2bf0e569",
  null,
  false,
  _u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/uview-ui/components/u-button/u-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 253:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=template&id=2bf0e569&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-button.vue?vue&type=template&id=2bf0e569&scoped=true& */ 254);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_template_id_2bf0e569_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 254:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dell/Desktop/ms_stu_pro_lrb/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=template&id=2bf0e569&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uLoadingIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-loading-icon/u-loading-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue */ 368))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 311))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.baseColor, _vm.$u.addStyle(_vm.customStyle)])
  var m0 = Number(_vm.hoverStartTime)
  var m1 = Number(_vm.hoverStayTime)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        m0: m0,
        m1: m1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 255:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-button.vue?vue&type=script&lang=js& */ 256);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 256:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dell/Desktop/ms_stu_pro_lrb/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _button = _interopRequireDefault(__webpack_require__(/*! ../../libs/mixin/button.js */ 257));
var _openType = _interopRequireDefault(__webpack_require__(/*! ../../libs/mixin/openType.js */ 258));
var _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 259));
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
/**
 * button 按钮
 * @description Button 按钮
 * @tutorial https://www.uviewui.com/components/button.html
 *
 * @property {Boolean}			hairline				是否显示按钮的细边框 (默认 true )
 * @property {String}			type					按钮的预置样式，info，primary，error，warning，success (默认 'info' )
 * @property {String}			size					按钮尺寸，large，normal，mini （默认 normal）
 * @property {String}			shape					按钮形状，circle（两边为半圆），square（带圆角） （默认 'square' ）
 * @property {Boolean}			plain					按钮是否镂空，背景色透明 （默认 false）
 * @property {Boolean}			disabled				是否禁用 （默认 false）
 * @property {Boolean}			loading					按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈) （默认 false）
 * @property {String | Number}	loadingText				加载中提示文字
 * @property {String}			loadingMode				加载状态图标类型 （默认 'spinner' ）
 * @property {String | Number}	loadingSize				加载图标大小 （默认 15 ）
 * @property {String}			openType				开放能力，具体请看uniapp稳定关于button组件部分说明
 * @property {String}			formType				用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
 * @property {String}			appParameter			打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）
 * @property {Boolean}			hoverStopPropagation	指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true ）
 * @property {String}			lang					指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文（默认 en ）
 * @property {String}			sessionFrom				会话来源，openType="contact"时有效
 * @property {String}			sendMessageTitle		会话内消息卡片标题，openType="contact"时有效
 * @property {String}			sendMessagePath			会话内消息卡片点击跳转小程序路径，openType="contact"时有效
 * @property {String}			sendMessageImg			会话内消息卡片图片，openType="contact"时有效
 * @property {Boolean}			showMessageCard			是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效（默认false）
 * @property {String}			dataName				额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
 * @property {String | Number}	throttleTime			节流，一定时间内只能触发一次 （默认 0 )
 * @property {String | Number}	hoverStartTime			按住后多久出现点击态，单位毫秒 （默认 0 )
 * @property {String | Number}	hoverStayTime			手指松开后点击态保留时间，单位毫秒 （默认 200 )
 * @property {String | Number}	text					按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
 * @property {String}			icon					按钮图标
 * @property {String}			iconColor				按钮图标颜色
 * @property {String}			color					按钮颜色，支持传入linear-gradient渐变色
 * @property {Object}			customStyle				定义需要用到的外部样式
 *
 * @event {Function}	click			非禁止并且非加载中，才能点击
 * @event {Function}	getphonenumber	open-type="getPhoneNumber"时有效
 * @event {Function}	getuserinfo		用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo
 * @event {Function}	error			当使用开放能力时，发生错误的回调
 * @event {Function}	opensetting		在打开授权设置页并关闭后回调
 * @event {Function}	launchapp		打开 APP 成功的回调
 * @event {Function}	agreeprivacyauthorization	用户同意隐私协议事件回调
 * @example <u-button>月落</u-button>
 */
var _default = {
  name: "u-button",
  mixins: [uni.$u.mpMixin, uni.$u.mixin, _button.default, _openType.default, _props.default],
  data: function data() {
    return {};
  },
  computed: {
    // 生成bem风格的类名
    bemClass: function bemClass() {
      // this.bem为一个computed变量，在mixin中
      if (!this.color) {
        return this.bem("button", ["type", "shape", "size"], ["disabled", "plain", "hairline"]);
      } else {
        // 由于nvue的原因，在有color参数时，不需要传入type，否则会生成type相关的类型，影响最终的样式
        return this.bem("button", ["shape", "size"], ["disabled", "plain", "hairline"]);
      }
    },
    loadingColor: function loadingColor() {
      if (this.plain) {
        // 如果有设置color值，则用color值，否则使用type主题颜色
        return this.color ? this.color : uni.$u.config.color["u-".concat(this.type)];
      }
      if (this.type === "info") {
        return "#c9c9c9";
      }
      return "rgb(200, 200, 200)";
    },
    iconColorCom: function iconColorCom() {
      // 如果是镂空状态，设置了color就用color值，否则使用主题颜色，
      // u-icon的color能接受一个主题颜色的值
      if (this.iconColor) return this.iconColor;
      if (this.plain) {
        return this.color ? this.color : this.type;
      } else {
        return this.type === "info" ? "#000000" : "#ffffff";
      }
    },
    baseColor: function baseColor() {
      var style = {};
      if (this.color) {
        // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色
        style.color = this.plain ? this.color : "white";
        if (!this.plain) {
          // 非镂空，背景色使用自定义的颜色
          style["background-color"] = this.color;
        }
        if (this.color.indexOf("gradient") !== -1) {
          // 如果自定义的颜色为渐变色，不显示边框，以及通过backgroundImage设置渐变色
          // weex文档说明可以写borderWidth的形式，为什么这里需要分开写？
          // 因为weex是阿里巴巴为了部门业绩考核而做的你懂的东西，所以需要这么写才有效
          style.borderTopWidth = 0;
          style.borderRightWidth = 0;
          style.borderBottomWidth = 0;
          style.borderLeftWidth = 0;
          if (!this.plain) {
            style.backgroundImage = this.color;
          }
        } else {
          // 非渐变色，则设置边框相关的属性
          style.borderColor = this.color;
          style.borderWidth = "1px";
          style.borderStyle = "solid";
        }
      }
      return style;
    },
    // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
    nvueTextStyle: function nvueTextStyle() {
      var style = {};
      // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色
      if (this.type === "info") {
        style.color = "#323233";
      }
      if (this.color) {
        style.color = this.plain ? this.color : "white";
      }
      style.fontSize = this.textSize + "px";
      return style;
    },
    // 字体大小
    textSize: function textSize() {
      var fontSize = 14,
        size = this.size;
      if (size === "large") fontSize = 16;
      if (size === "normal") fontSize = 14;
      if (size === "small") fontSize = 12;
      if (size === "mini") fontSize = 10;
      return fontSize;
    }
  },
  methods: {
    clickHandler: function clickHandler() {
      var _this = this;
      // 非禁止并且非加载中，才能点击
      if (!this.disabled && !this.loading) {
        // 进行节流控制，每this.throttle毫秒内，只在开始处执行
        uni.$u.throttle(function () {
          _this.$emit("click");
        }, this.throttleTime);
      }
    },
    // 下面为对接uniapp官方按钮开放能力事件回调的对接
    getphonenumber: function getphonenumber(res) {
      this.$emit("getphonenumber", res);
    },
    getuserinfo: function getuserinfo(res) {
      this.$emit("getuserinfo", res);
    },
    error: function error(res) {
      this.$emit("error", res);
    },
    opensetting: function opensetting(res) {
      this.$emit("opensetting", res);
    },
    launchapp: function launchapp(res) {
      this.$emit("launchapp", res);
    },
    agreeprivacyauthorization: function agreeprivacyauthorization(res) {
      this.$emit("agreeprivacyauthorization", res);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 260:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& */ 261);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_button_vue_vue_type_style_index_0_id_2bf0e569_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 261:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dell/Desktop/ms_stu_pro_lrb/uni_modules/uview-ui/components/u-button/u-button.vue?vue&type=style&index=0&id=2bf0e569&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlPzZlZTAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL2RlbGwvRGVza3RvcC9tc19zdHVfcHJvX2xyYi91bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtYnV0dG9uL3UtYnV0dG9uLnZ1ZT8zNjEyIiwid2VicGFjazovLy9DOi9Vc2Vycy9kZWxsL0Rlc2t0b3AvbXNfc3R1X3Byb19scmIvdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWU/NTA5OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlPzlhY2UiLCJ1bmktYXBwOi8vL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy9kZWxsL0Rlc2t0b3AvbXNfc3R1X3Byb19scmIvdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWJ1dHRvbi91LWJ1dHRvbi52dWU/NjY1OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlPzRjMDAiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsImJlbUNsYXNzIiwibG9hZGluZ0NvbG9yIiwidW5pIiwiaWNvbkNvbG9yQ29tIiwiYmFzZUNvbG9yIiwic3R5bGUiLCJudnVlVGV4dFN0eWxlIiwidGV4dFNpemUiLCJzaXplIiwibWV0aG9kcyIsImNsaWNrSGFuZGxlciIsImdldHBob25lbnVtYmVyIiwiZ2V0dXNlcmluZm8iLCJlcnJvciIsIm9wZW5zZXR0aW5nIiwibGF1bmNoYXBwIiwiYWdyZWVwcml2YWN5YXV0aG9yaXphdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpSTtBQUNqSTtBQUM0RDtBQUNMO0FBQ3NDOzs7QUFHN0Y7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpVkFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsaVNBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQWttQixDQUFnQiw0bkJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0h0bkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQSxlQTRDQTtFQUNBQTtFQUVBQztFQUtBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQSxnQkFDQSxVQUNBLDJCQUNBLGtDQUNBO01BQ0E7UUFDQTtRQUNBLGdCQUNBLFVBQ0EsbUJBQ0Esa0NBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQTtRQUNBLG9CQUNBLGFBQ0FDO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO1FBQ0FDO1FBQ0E7VUFDQTtVQUNBQTtRQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtZQUNBQTtVQUNBO1FBQ0E7VUFDQTtVQUNBQTtVQUNBQTtVQUNBQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7UUFDQUQ7TUFDQTtNQUNBO1FBQ0FBO01BQ0E7TUFDQUE7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtRQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQ0E7UUFDQVI7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FTO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCOzs7Ozs7Ozs7Ozs7O0FDdFNBO0FBQUE7QUFBQTtBQUFBO0FBQXFxQyxDQUFnQiwyb0NBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F6ckM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJ1bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtYnV0dG9uL3UtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91LWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJmMGU1Njkmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91LWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91LWJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmYwZTU2OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYmYwZTU2OVwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtYnV0dG9uL3UtYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNy0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjBlNTY5JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdUxvYWRpbmdJY29uOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInVuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1sb2FkaW5nLWljb24vdS1sb2FkaW5nLWljb25cIiAqLyBcIkAvdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRpbmctaWNvbi91LWxvYWRpbmctaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdUljb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uXCIgKi8gXCJAL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICB2YXIgczAgPSBfdm0uX19nZXRfc3R5bGUoW192bS5iYXNlQ29sb3IsIF92bS4kdS5hZGRTdHlsZShfdm0uY3VzdG9tU3R5bGUpXSlcbiAgdmFyIG0wID0gTnVtYmVyKF92bS5ob3ZlclN0YXJ0VGltZSlcbiAgdmFyIG0xID0gTnVtYmVyKF92bS5ob3ZlclN0YXlUaW1lKVxuICBfdm0uJG1wLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgICRyb290OiB7XG4gICAgICAgIHMwOiBzMCxcbiAgICAgICAgbTA6IG0wLFxuICAgICAgICBtMTogbTEsXG4gICAgICB9LFxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTMtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEzLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuICAgIDwhLS0gI2lmbmRlZiBBUFAtTlZVRSAtLT5cclxuICAgIDxidXR0b25cclxuICAgICAgICA6aG92ZXItc3RhcnQtdGltZT1cIk51bWJlcihob3ZlclN0YXJ0VGltZSlcIlxyXG4gICAgICAgIDpob3Zlci1zdGF5LXRpbWU9XCJOdW1iZXIoaG92ZXJTdGF5VGltZSlcIlxyXG4gICAgICAgIDpmb3JtLXR5cGU9XCJmb3JtVHlwZVwiXHJcbiAgICAgICAgOm9wZW4tdHlwZT1cIm9wZW5UeXBlXCJcclxuICAgICAgICA6YXBwLXBhcmFtZXRlcj1cImFwcFBhcmFtZXRlclwiXHJcbiAgICAgICAgOmhvdmVyLXN0b3AtcHJvcGFnYXRpb249XCJob3ZlclN0b3BQcm9wYWdhdGlvblwiXHJcbiAgICAgICAgOnNlbmQtbWVzc2FnZS10aXRsZT1cInNlbmRNZXNzYWdlVGl0bGVcIlxyXG4gICAgICAgIDpzZW5kLW1lc3NhZ2UtcGF0aD1cInNlbmRNZXNzYWdlUGF0aFwiXHJcbiAgICAgICAgOmxhbmc9XCJsYW5nXCJcclxuICAgICAgICA6ZGF0YS1uYW1lPVwiZGF0YU5hbWVcIlxyXG4gICAgICAgIDpzZXNzaW9uLWZyb209XCJzZXNzaW9uRnJvbVwiXHJcbiAgICAgICAgOnNlbmQtbWVzc2FnZS1pbWc9XCJzZW5kTWVzc2FnZUltZ1wiXHJcbiAgICAgICAgOnNob3ctbWVzc2FnZS1jYXJkPVwic2hvd01lc3NhZ2VDYXJkXCJcclxuICAgICAgICBAZ2V0cGhvbmVudW1iZXI9XCJnZXRwaG9uZW51bWJlclwiXHJcbiAgICAgICAgQGdldHVzZXJpbmZvPVwiZ2V0dXNlcmluZm9cIlxyXG4gICAgICAgIEBlcnJvcj1cImVycm9yXCJcclxuICAgICAgICBAb3BlbnNldHRpbmc9XCJvcGVuc2V0dGluZ1wiXHJcbiAgICAgICAgQGxhdW5jaGFwcD1cImxhdW5jaGFwcFwiXHJcbiAgICAgICAgQGFncmVlcHJpdmFjeWF1dGhvcml6YXRpb249XCJhZ3JlZXByaXZhY3lhdXRob3JpemF0aW9uXCJcclxuICAgICAgICA6aG92ZXItY2xhc3M9XCIhZGlzYWJsZWQgJiYgIWxvYWRpbmcgPyAndS1idXR0b24tLWFjdGl2ZScgOiAnJ1wiXHJcbiAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvbiB1LXJlc2V0LWJ1dHRvblwiXHJcbiAgICAgICAgOnN0eWxlPVwiW2Jhc2VDb2xvciwgJHUuYWRkU3R5bGUoY3VzdG9tU3R5bGUpXVwiXHJcbiAgICAgICAgQHRhcD1cImNsaWNrSGFuZGxlclwiXHJcbiAgICAgICAgOmNsYXNzPVwiYmVtQ2xhc3NcIlxyXG4gICAgPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICA8dS1sb2FkaW5nLWljb25cclxuICAgICAgICAgICAgICAgIDptb2RlPVwibG9hZGluZ01vZGVcIlxyXG4gICAgICAgICAgICAgICAgOnNpemU9XCJsb2FkaW5nU2l6ZSAqIDEuMTVcIlxyXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwibG9hZGluZ0NvbG9yXCJcclxuICAgICAgICAgICAgPjwvdS1sb2FkaW5nLWljb24+XHJcbiAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInUtYnV0dG9uX19sb2FkaW5nLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwiW3sgZm9udFNpemU6IHRleHRTaXplICsgJ3B4JyB9XVwiXHJcbiAgICAgICAgICAgICAgICA+e3sgbG9hZGluZ1RleHQgfHwgdGV4dCB9fTwvdGV4dFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICA8dS1pY29uXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICA6bmFtZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwiaWNvbkNvbG9yQ29tXCJcclxuICAgICAgICAgICAgICAgIDpzaXplPVwidGV4dFNpemUgKiAxLjM1XCJcclxuICAgICAgICAgICAgICAgIDpjdXN0b21TdHlsZT1cInsgbWFyZ2luUmlnaHQ6ICcycHgnIH1cIlxyXG4gICAgICAgICAgICA+PC91LWljb24+XHJcbiAgICAgICAgICAgIDxzbG90PlxyXG4gICAgICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInUtYnV0dG9uX190ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJbeyBmb250U2l6ZTogdGV4dFNpemUgKyAncHgnIH1dXCJcclxuICAgICAgICAgICAgICAgICAgICA+e3sgdGV4dCB9fTwvdGV4dFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPCEtLSAjZW5kaWYgLS0+XHJcblxyXG4gICAgPCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XHJcbiAgICA8dmlld1xyXG4gICAgICAgIDpob3Zlci1zdGFydC10aW1lPVwiTnVtYmVyKGhvdmVyU3RhcnRUaW1lKVwiXHJcbiAgICAgICAgOmhvdmVyLXN0YXktdGltZT1cIk51bWJlcihob3ZlclN0YXlUaW1lKVwiXHJcbiAgICAgICAgY2xhc3M9XCJ1LWJ1dHRvblwiXHJcbiAgICAgICAgOmhvdmVyLWNsYXNzPVwiXHJcbiAgICAgICAgICAgICFkaXNhYmxlZCAmJiAhbG9hZGluZyAmJiAhY29sb3IgJiYgKHBsYWluIHx8IHR5cGUgPT09ICdpbmZvJylcclxuICAgICAgICAgICAgICAgID8gJ3UtYnV0dG9uLS1hY3RpdmUtLXBsYWluJ1xyXG4gICAgICAgICAgICAgICAgOiAhZGlzYWJsZWQgJiYgIWxvYWRpbmcgJiYgIXBsYWluXHJcbiAgICAgICAgICAgICAgICA/ICd1LWJ1dHRvbi0tYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIFwiXHJcbiAgICAgICAgQHRhcD1cImNsaWNrSGFuZGxlclwiXHJcbiAgICAgICAgOmNsYXNzPVwiYmVtQ2xhc3NcIlxyXG4gICAgICAgIDpzdHlsZT1cIltiYXNlQ29sb3IsICR1LmFkZFN0eWxlKGN1c3RvbVN0eWxlKV1cIlxyXG4gICAgPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICA8dS1sb2FkaW5nLWljb25cclxuICAgICAgICAgICAgICAgIDptb2RlPVwibG9hZGluZ01vZGVcIlxyXG4gICAgICAgICAgICAgICAgOnNpemU9XCJsb2FkaW5nU2l6ZSAqIDEuMTVcIlxyXG4gICAgICAgICAgICAgICAgOmNvbG9yPVwibG9hZGluZ0NvbG9yXCJcclxuICAgICAgICAgICAgPjwvdS1sb2FkaW5nLWljb24+XHJcbiAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInUtYnV0dG9uX19sb2FkaW5nLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwiW252dWVUZXh0U3R5bGVdXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIltwbGFpbiAmJiBgdS1idXR0b25fX3RleHQtLXBsYWluLS0ke3R5cGV9YF1cIlxyXG4gICAgICAgICAgICAgICAgPnt7IGxvYWRpbmdUZXh0IHx8IHRleHQgfX08L3RleHRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgPHUtaWNvblxyXG4gICAgICAgICAgICAgICAgdi1pZj1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgIDpjb2xvcj1cImljb25Db2xvckNvbVwiXHJcbiAgICAgICAgICAgICAgICA6c2l6ZT1cInRleHRTaXplICogMS4zNVwiXHJcbiAgICAgICAgICAgID48L3UtaWNvbj5cclxuICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidS1idXR0b25fX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwiW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaWNvbiA/ICcycHgnIDogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG52dWVUZXh0U3R5bGUsXHJcbiAgICAgICAgICAgICAgICBdXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIltwbGFpbiAmJiBgdS1idXR0b25fX3RleHQtLXBsYWluLS0ke3R5cGV9YF1cIlxyXG4gICAgICAgICAgICAgICAgPnt7IHRleHQgfX08L3RleHRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8IS0tICNlbmRpZiAtLT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBidXR0b24gZnJvbSBcIi4uLy4uL2xpYnMvbWl4aW4vYnV0dG9uLmpzXCI7XHJcbmltcG9ydCBvcGVuVHlwZSBmcm9tIFwiLi4vLi4vbGlicy9taXhpbi9vcGVuVHlwZS5qc1wiO1xyXG5pbXBvcnQgcHJvcHMgZnJvbSBcIi4vcHJvcHMuanNcIjtcclxuLyoqXHJcbiAqIGJ1dHRvbiDmjInpkq5cclxuICogQGRlc2NyaXB0aW9uIEJ1dHRvbiDmjInpkq5cclxuICogQHR1dG9yaWFsIGh0dHBzOi8vd3d3LnV2aWV3dWkuY29tL2NvbXBvbmVudHMvYnV0dG9uLmh0bWxcclxuICpcclxuICogQHByb3BlcnR5IHtCb29sZWFufVx0XHRcdGhhaXJsaW5lXHRcdFx0XHTmmK/lkKbmmL7npLrmjInpkq7nmoTnu4bovrnmoYYgKOm7mOiupCB0cnVlIClcclxuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0dHlwZVx0XHRcdFx0XHTmjInpkq7nmoTpooTnva7moLflvI/vvIxpbmZv77yMcHJpbWFyee+8jGVycm9y77yMd2FybmluZ++8jHN1Y2Nlc3MgKOm7mOiupCAnaW5mbycgKVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRzaXplXHRcdFx0XHRcdOaMiemSruWwuuWvuO+8jGxhcmdl77yMbm9ybWFs77yMbWluaSDvvIjpu5jorqQgbm9ybWFs77yJXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdHNoYXBlXHRcdFx0XHRcdOaMiemSruW9oueKtu+8jGNpcmNsZe+8iOS4pOi+ueS4uuWNiuWchu+8ie+8jHNxdWFyZe+8iOW4puWchuinku+8iSDvvIjpu5jorqQgJ3NxdWFyZScg77yJXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRwbGFpblx0XHRcdFx0XHTmjInpkq7mmK/lkKbplYLnqbrvvIzog4zmma/oibLpgI/mmI4g77yI6buY6K6kIGZhbHNl77yJXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRkaXNhYmxlZFx0XHRcdFx05piv5ZCm56aB55SoIO+8iOm7mOiupCBmYWxzZe+8iVxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0bG9hZGluZ1x0XHRcdFx0XHTmjInpkq7lkI3np7DliY3mmK/lkKbluKYgbG9hZGluZyDlm77moIcoQXBwLW52dWUg5bmz5Y+w77yM5ZyoIGlvcyDkuIrkuLrpm6roirHvvIxBbmRyb2lk5LiK5Li65ZyG5ZyIKSDvvIjpu5jorqQgZmFsc2XvvIlcclxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRsb2FkaW5nVGV4dFx0XHRcdFx05Yqg6L295Lit5o+Q56S65paH5a2XXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGxvYWRpbmdNb2RlXHRcdFx0XHTliqDovb3nirbmgIHlm77moIfnsbvlnosg77yI6buY6K6kICdzcGlubmVyJyDvvIlcclxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRsb2FkaW5nU2l6ZVx0XHRcdFx05Yqg6L295Zu+5qCH5aSn5bCPIO+8iOm7mOiupCAxNSDvvIlcclxuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0b3BlblR5cGVcdFx0XHRcdOW8gOaUvuiDveWKm++8jOWFt+S9k+ivt+eci3VuaWFwcOeos+WumuWFs+S6jmJ1dHRvbue7hOS7tumDqOWIhuivtOaYjlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRmb3JtVHlwZVx0XHRcdFx055So5LqOIDxmb3JtPiDnu4Tku7bvvIzngrnlh7vliIbliKvkvJrop6blj5EgPGZvcm0+IOe7hOS7tueahCBzdWJtaXQvcmVzZXQg5LqL5Lu2XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGFwcFBhcmFtZXRlclx0XHRcdOaJk+W8gCBBUFAg5pe277yM5ZCRIEFQUCDkvKDpgJLnmoTlj4LmlbDvvIxvcGVuLXR5cGU9bGF1bmNoQXBw5pe25pyJ5pWIIO+8iOazqO+8muWPquW+ruS/oeWwj+eoi+W6j+OAgVFR5bCP56iL5bqP5pyJ5pWI77yJXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRob3ZlclN0b3BQcm9wYWdhdGlvblx05oyH5a6a5piv5ZCm6Zi75q2i5pys6IqC54K555qE56WW5YWI6IqC54K55Ye6546w54K55Ye75oCB77yM5b6u5L+h5bCP56iL5bqP5pyJ5pWI77yI6buY6K6kIHRydWUg77yJXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGxhbmdcdFx0XHRcdFx05oyH5a6a6L+U5Zue55So5oi35L+h5oGv55qE6K+t6KiA77yMemhfQ04g566A5L2T5Lit5paH77yMemhfVFcg57mB5L2T5Lit5paH77yMZW4g6Iux5paH77yI6buY6K6kIGVuIO+8iVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRzZXNzaW9uRnJvbVx0XHRcdFx05Lya6K+d5p2l5rqQ77yMb3BlblR5cGU9XCJjb250YWN0XCLml7bmnInmlYhcclxuICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0c2VuZE1lc3NhZ2VUaXRsZVx0XHTkvJror53lhoXmtojmga/ljaHniYfmoIfpopjvvIxvcGVuVHlwZT1cImNvbnRhY3RcIuaXtuacieaViFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRzZW5kTWVzc2FnZVBhdGhcdFx0XHTkvJror53lhoXmtojmga/ljaHniYfngrnlh7vot7PovazlsI/nqIvluo/ot6/lvoTvvIxvcGVuVHlwZT1cImNvbnRhY3RcIuaXtuacieaViFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRzZW5kTWVzc2FnZUltZ1x0XHRcdOS8muivneWGhea2iOaBr+WNoeeJh+WbvueJh++8jG9wZW5UeXBlPVwiY29udGFjdFwi5pe25pyJ5pWIXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRzaG93TWVzc2FnZUNhcmRcdFx0XHTmmK/lkKbmmL7npLrkvJror53lhoXmtojmga/ljaHniYfvvIzorr7nva7mraTlj4LmlbDkuLogdHJ1Ze+8jOeUqOaIt+i/m+WFpeWuouacjeS8muivneS8muWcqOWPs+S4i+inkuaYvuekulwi5Y+v6IO96KaB5Y+R6YCB55qE5bCP56iL5bqPXCLmj5DnpLrvvIznlKjmiLfngrnlh7vlkI7lj6/ku6Xlv6vpgJ/lj5HpgIHlsI/nqIvluo/mtojmga/vvIxvcGVuVHlwZT1cImNvbnRhY3RcIuaXtuacieaViO+8iOm7mOiupGZhbHNl77yJXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGRhdGFOYW1lXHRcdFx0XHTpop3lpJbkvKDlj4Llj4LmlbDvvIznlKjkuo7lsI/nqIvluo/nmoRkYXRhLXh4eOWxnuaAp++8jOmAmui/h3RhcmdldC5kYXRhc2V0Lm5hbWXojrflj5ZcclxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHR0aHJvdHRsZVRpbWVcdFx0XHToioLmtYHvvIzkuIDlrprml7bpl7TlhoXlj6rog73op6blj5HkuIDmrKEg77yI6buY6K6kIDAgKVxyXG4gKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdGhvdmVyU3RhcnRUaW1lXHRcdFx05oyJ5L2P5ZCO5aSa5LmF5Ye6546w54K55Ye75oCB77yM5Y2V5L2N5q+r56eSIO+8iOm7mOiupCAwIClcclxuICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRob3ZlclN0YXlUaW1lXHRcdFx05omL5oyH5p2+5byA5ZCO54K55Ye75oCB5L+d55WZ5pe26Ze077yM5Y2V5L2N5q+r56eSIO+8iOm7mOiupCAyMDAgKVxyXG4gKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdHRleHRcdFx0XHRcdFx05oyJ6ZKu5paH5a2X77yM5LmL5omA5Lul6YCa6L+HcHJvcHPkvKDlhaXvvIzmmK/lm6DkuLpzbG905Lyg5YWl55qE6K+d77yI5rOo77yabnZ1ZeS4reaXoOazleaOp+WItuaWh+Wtl+eahOagt+W8j++8iVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRpY29uXHRcdFx0XHRcdOaMiemSruWbvuagh1xyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRpY29uQ29sb3JcdFx0XHRcdOaMiemSruWbvuagh+minOiJslxyXG4gKiBAcHJvcGVydHkge1N0cmluZ31cdFx0XHRjb2xvclx0XHRcdFx0XHTmjInpkq7popzoibLvvIzmlK/mjIHkvKDlhaVsaW5lYXItZ3JhZGllbnTmuJDlj5joibJcclxuICogQHByb3BlcnR5IHtPYmplY3R9XHRcdFx0Y3VzdG9tU3R5bGVcdFx0XHRcdOWumuS5iemcgOimgeeUqOWIsOeahOWklumDqOagt+W8j1xyXG4gKlxyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0Y2xpY2tcdFx0XHTpnZ7npoHmraLlubbkuJTpnZ7liqDovb3kuK3vvIzmiY3og73ngrnlh7tcclxuICogQGV2ZW50IHtGdW5jdGlvbn1cdGdldHBob25lbnVtYmVyXHRvcGVuLXR5cGU9XCJnZXRQaG9uZU51bWJlclwi5pe25pyJ5pWIXHJcbiAqIEBldmVudCB7RnVuY3Rpb259XHRnZXR1c2VyaW5mb1x0XHTnlKjmiLfngrnlh7vor6XmjInpkq7ml7bvvIzkvJrov5Tlm57ojrflj5bliLDnmoTnlKjmiLfkv6Hmga/vvIzku47ov5Tlm57lj4LmlbDnmoRkZXRhaWzkuK3ojrflj5bliLDnmoTlgLzlkIx1bmkuZ2V0VXNlckluZm9cclxuICogQGV2ZW50IHtGdW5jdGlvbn1cdGVycm9yXHRcdFx05b2T5L2/55So5byA5pS+6IO95Yqb5pe277yM5Y+R55Sf6ZSZ6K+v55qE5Zue6LCDXHJcbiAqIEBldmVudCB7RnVuY3Rpb259XHRvcGVuc2V0dGluZ1x0XHTlnKjmiZPlvIDmjojmnYPorr7nva7pobXlubblhbPpl63lkI7lm57osINcclxuICogQGV2ZW50IHtGdW5jdGlvbn1cdGxhdW5jaGFwcFx0XHTmiZPlvIAgQVBQIOaIkOWKn+eahOWbnuiwg1xyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufVx0YWdyZWVwcml2YWN5YXV0aG9yaXphdGlvblx055So5oi35ZCM5oSP6ZqQ56eB5Y2P6K6u5LqL5Lu25Zue6LCDXHJcbiAqIEBleGFtcGxlIDx1LWJ1dHRvbj7mnIjokL08L3UtYnV0dG9uPlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ1LWJ1dHRvblwiLFxyXG4gICAgLy8gI2lmZGVmIE1QXHJcbiAgICBtaXhpbnM6IFt1bmkuJHUubXBNaXhpbiwgdW5pLiR1Lm1peGluLCBidXR0b24sIG9wZW5UeXBlLCBwcm9wc10sXHJcbiAgICAvLyAjZW5kaWZcclxuICAgIC8vICNpZm5kZWYgTVBcclxuICAgIG1peGluczogW3VuaS4kdS5tcE1peGluLCB1bmkuJHUubWl4aW4sIHByb3BzXSxcclxuICAgIC8vICNlbmRpZlxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAvLyDnlJ/miJBiZW3po47moLznmoTnsbvlkI1cclxuICAgICAgICBiZW1DbGFzcygpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5iZW3kuLrkuIDkuKpjb21wdXRlZOWPmOmHj++8jOWcqG1peGlu5LitXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVtKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widHlwZVwiLCBcInNoYXBlXCIsIFwic2l6ZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICBbXCJkaXNhYmxlZFwiLCBcInBsYWluXCIsIFwiaGFpcmxpbmVcIl1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDnlLHkuo5udnVl55qE5Y6f5Zug77yM5Zyo5pyJY29sb3Llj4LmlbDml7bvvIzkuI3pnIDopoHkvKDlhaV0eXBl77yM5ZCm5YiZ5Lya55Sf5oiQdHlwZeebuOWFs+eahOexu+Wei++8jOW9seWTjeacgOe7iOeahOagt+W8j1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVtKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wic2hhcGVcIiwgXCJzaXplXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRpc2FibGVkXCIsIFwicGxhaW5cIiwgXCJoYWlybGluZVwiXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZGluZ0NvbG9yKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGFpbikge1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ6K6+572uY29sb3LlgLzvvIzliJnnlKhjb2xvcuWAvO+8jOWQpuWImeS9v+eUqHR5cGXkuLvpopjpopzoibJcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgOiB1bmkuJHUuY29uZmlnLmNvbG9yW2B1LSR7dGhpcy50eXBlfWBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwiaW5mb1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjYzljOWM5XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwicmdiKDIwMCwgMjAwLCAyMDApXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uQ29sb3JDb20oKSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+mVguepuueKtuaAge+8jOiuvue9ruS6hmNvbG9y5bCx55SoY29sb3LlgLzvvIzlkKbliJnkvb/nlKjkuLvpopjpopzoibLvvIxcclxuICAgICAgICAgICAgLy8gdS1pY29u55qEY29sb3Log73mjqXlj5fkuIDkuKrkuLvpopjpopzoibLnmoTlgLxcclxuXHRcdFx0aWYgKHRoaXMuaWNvbkNvbG9yKSByZXR1cm4gdGhpcy5pY29uQ29sb3I7XHJcblx0XHRcdGlmICh0aGlzLnBsYWluKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xvciA/IHRoaXMuY29sb3IgOiB0aGlzLnR5cGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBcImluZm9cIiA/IFwiIzAwMDAwMFwiIDogXCIjZmZmZmZmXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2VDb2xvcigpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDpkojlr7noh6rlrprkuYnkuoZjb2xvcuminOiJsueahOaDheWGte+8jOmVguepuueKtuaAgeS4i++8jOWwseaYr+eUqOiHquWumuS5ieeahOminOiJslxyXG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGlzLnBsYWluID8gdGhpcy5jb2xvciA6IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wbGFpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmdnumVguepuu+8jOiDjOaZr+iJsuS9v+eUqOiHquWumuS5ieeahOminOiJslxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvci5pbmRleE9mKFwiZ3JhZGllbnRcIikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6Ieq5a6a5LmJ55qE6aKc6Imy5Li65riQ5Y+Y6Imy77yM5LiN5pi+56S66L655qGG77yM5Lul5Y+K6YCa6L+HYmFja2dyb3VuZEltYWdl6K6+572u5riQ5Y+Y6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2VleOaWh+aho+ivtOaYjuWPr+S7peWGmWJvcmRlcldpZHRo55qE5b2i5byP77yM5Li65LuA5LmI6L+Z6YeM6ZyA6KaB5YiG5byA5YaZ77yfXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Zug5Li6d2VleOaYr+mYv+mHjOW3tOW3tOS4uuS6humDqOmXqOS4mue7qeiAg+aguOiAjOWBmueahOS9oOaHgueahOS4nOilv++8jOaJgOS7pemcgOimgei/meS5iOWGmeaJjeacieaViFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmJvcmRlclRvcFdpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYm9yZGVyTGVmdFdpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGxhaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmdnua4kOWPmOiJsu+8jOWImeiuvue9rui+ueahhuebuOWFs+eahOWxnuaAp1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5ib3JkZXJXaWR0aCA9IFwiMXB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYm9yZGVyU3R5bGUgPSBcInNvbGlkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gbnZ1ZeeJiOacrOaMiemSrueahOWtl+S9k+S4jeS8mue7p+aJv+eItue7hOS7tueahOminOiJsu+8jOmcgOimgeWvueavj+S4gOS4qnRleHTnu4Tku7bov5vooYzljZXni6znmoTorr7nva5cclxuICAgICAgICBudnVlVGV4dFN0eWxlKCkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgLy8g6ZKI5a+56Ieq5a6a5LmJ5LqGY29sb3LpopzoibLnmoTmg4XlhrXvvIzplYLnqbrnirbmgIHkuIvvvIzlsLHmmK/nlKjoh6rlrprkuYnnmoTpopzoibJcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJpbmZvXCIpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gXCIjMzIzMjMzXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhpcy5wbGFpbiA/IHRoaXMuY29sb3IgOiBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3R5bGUuZm9udFNpemUgPSB0aGlzLnRleHRTaXplICsgXCJweFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlrZfkvZPlpKflsI9cclxuICAgICAgICB0ZXh0U2l6ZSgpIHtcclxuICAgICAgICAgICAgbGV0IGZvbnRTaXplID0gMTQsXHJcbiAgICAgICAgICAgICAgICB7IHNpemUgfSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChzaXplID09PSBcImxhcmdlXCIpIGZvbnRTaXplID0gMTY7XHJcbiAgICAgICAgICAgIGlmIChzaXplID09PSBcIm5vcm1hbFwiKSBmb250U2l6ZSA9IDE0O1xyXG4gICAgICAgICAgICBpZiAoc2l6ZSA9PT0gXCJzbWFsbFwiKSBmb250U2l6ZSA9IDEyO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZSA9PT0gXCJtaW5pXCIpIGZvbnRTaXplID0gMTA7XHJcbiAgICAgICAgICAgIHJldHVybiBmb250U2l6ZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIC8vIOmdnuemgeatouW5tuS4lOmdnuWKoOi9veS4re+8jOaJjeiDveeCueWHu1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZykge1xyXG5cdFx0XHRcdC8vIOi/m+ihjOiKgua1geaOp+WItu+8jOavj3RoaXMudGhyb3R0bGXmr6vnp5LlhoXvvIzlj6rlnKjlvIDlp4vlpITmiafooYxcclxuXHRcdFx0XHR1bmkuJHUudGhyb3R0bGUoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcImNsaWNrXCIpO1xyXG5cdFx0XHRcdH0sIHRoaXMudGhyb3R0bGVUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5LiL6Z2i5Li65a+55o6ldW5pYXBw5a6Y5pa55oyJ6ZKu5byA5pS+6IO95Yqb5LqL5Lu25Zue6LCD55qE5a+55o6lXHJcbiAgICAgICAgZ2V0cGhvbmVudW1iZXIocmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJnZXRwaG9uZW51bWJlclwiLCByZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0dXNlcmluZm8ocmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJnZXR1c2VyaW5mb1wiLCByZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IocmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJlcnJvclwiLCByZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BlbnNldHRpbmcocmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJvcGVuc2V0dGluZ1wiLCByZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGF1bmNoYXBwKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwibGF1bmNoYXBwXCIsIHJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZ3JlZXByaXZhY3lhdXRob3JpemF0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiYWdyZWVwcml2YWN5YXV0aG9yaXphdGlvblwiLCByZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuQGltcG9ydCBcIi4uLy4uL2xpYnMvY3NzL2NvbXBvbmVudHMuc2Nzc1wiO1xyXG5cclxuLyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5AaW1wb3J0IFwiLi92dWUuc2Nzc1wiO1xyXG4vKiAjZW5kaWYgKi9cclxuXHJcbi8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5AaW1wb3J0IFwiLi9udnVlLnNjc3NcIjtcclxuLyogI2VuZGlmICovXHJcblxyXG4kdS1idXR0b24tdS1idXR0b24taGVpZ2h0OiA0MHB4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tdGV4dC1mb250LXNpemU6IDE1cHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1sb2FkaW5nLXRleHQtZm9udC1zaXplOiAxNXB4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tbG9hZGluZy10ZXh0LW1hcmdpbi1sZWZ0OiA0cHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1sYXJnZS13aWR0aDogMTAwJSAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWxhcmdlLWhlaWdodDogNTBweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLW5vcm1hbC1wYWRkaW5nOiAwIDEycHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1sYXJnZS1wYWRkaW5nOiAwIDE1cHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1ub3JtYWwtZm9udC1zaXplOiAxNHB4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tc21hbGwtbWluLXdpZHRoOiA2MHB4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tc21hbGwtaGVpZ2h0OiAzMHB4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tc21hbGwtcGFkZGluZzogMHB4IDhweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLW1pbmktcGFkZGluZzogMHB4IDhweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMTJweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLW1pbmktaGVpZ2h0OiAyMnB4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tbWluaS1mb250LXNpemU6IDEwcHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1taW5pLW1pbi13aWR0aDogNTBweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWRpc2FibGVkLW9wYWNpdHk6IDAuNSAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWluZm8tY29sb3I6ICMzMjMyMzMgIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1pbmZvLWJhY2tncm91bmQtY29sb3I6ICNmZmYgIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1pbmZvLWJvcmRlci1jb2xvcjogI2ViZWRmMCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWluZm8tYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1pbmZvLWJvcmRlci1zdHlsZTogc29saWQgIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1zdWNjZXNzLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xyXG4kdS1idXR0b24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAkdS1zdWNjZXNzICFkZWZhdWx0O1xyXG4kdS1idXR0b24tc3VjY2Vzcy1ib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1zdWNjZXNzLWJhY2tncm91bmQtY29sb3IgIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1zdWNjZXNzLWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tc3VjY2Vzcy1ib3JkZXItc3R5bGU6IHNvbGlkICFkZWZhdWx0O1xyXG4kdS1idXR0b24tcHJpbWFyeS1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogJHUtcHJpbWFyeSAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXByaW1hcnktYm9yZGVyLWNvbG9yOiAkdS1idXR0b24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kdS1idXR0b24tcHJpbWFyeS1ib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXByaW1hcnktYm9yZGVyLXN0eWxlOiBzb2xpZCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWVycm9yLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xyXG4kdS1idXR0b24tZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogJHUtZXJyb3IgIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1lcnJvci1ib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kdS1idXR0b24tZXJyb3ItYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1lcnJvci1ib3JkZXItc3R5bGU6IHNvbGlkICFkZWZhdWx0O1xyXG4kdS1idXR0b24td2FybmluZy1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogJHUtd2FybmluZyAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXdhcm5pbmctYm9yZGVyLWNvbG9yOiAkdS1idXR0b24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kdS1idXR0b24td2FybmluZy1ib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXdhcm5pbmctYm9yZGVyLXN0eWxlOiBzb2xpZCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWJsb2NrLXdpZHRoOiAxMDAlICFkZWZhdWx0O1xyXG4kdS1idXR0b24tY2lyY2xlLWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDBweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweCAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLXNxdWFyZS1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4ICFkZWZhdWx0O1xyXG4kdS1idXR0b24tc3F1YXJlLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHggIWRlZmF1bHQ7XHJcbiR1LWJ1dHRvbi1pY29uLW1pbi13aWR0aDogMWVtICFkZWZhdWx0O1xyXG4kdS1idXR0b24tcGxhaW4tYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcclxuJHUtYnV0dG9uLWhhaXJsaW5lLWJvcmRlci13aWR0aDogMC41cHggIWRlZmF1bHQ7XHJcblxyXG4udS1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiAkdS1idXR0b24tdS1idXR0b24taGVpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgQGluY2x1ZGUgZmxleDtcclxuICAgIC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tdGV4dC1mb250LXNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbG9hZGluZy10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6ICR1LWJ1dHRvbi1sb2FkaW5nLXRleHQtZm9udC1zaXplO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkdS1idXR0b24tbG9hZGluZy10ZXh0LW1hcmdpbi1sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgICYtLWxhcmdlIHtcclxuICAgICAgICAvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcbiAgICAgICAgd2lkdGg6ICR1LWJ1dHRvbi1sYXJnZS13aWR0aDtcclxuICAgICAgICAvKiAjZW5kaWYgKi9cclxuICAgICAgICBoZWlnaHQ6ICR1LWJ1dHRvbi1sYXJnZS1oZWlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogJHUtYnV0dG9uLWxhcmdlLXBhZGRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tbm9ybWFsIHtcclxuICAgICAgICBwYWRkaW5nOiAkdS1idXR0b24tbm9ybWFsLXBhZGRpbmc7XHJcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tbm9ybWFsLWZvbnQtc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1zbWFsbCB7XHJcbiAgICAgICAgLyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogJHUtYnV0dG9uLXNtYWxsLW1pbi13aWR0aDtcclxuICAgICAgICAvKiAjZW5kaWYgKi9cclxuICAgICAgICBoZWlnaHQ6ICR1LWJ1dHRvbi1zbWFsbC1oZWlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogJHUtYnV0dG9uLXNtYWxsLXBhZGRpbmc7XHJcbiAgICAgICAgZm9udC1zaXplOiAkdS1idXR0b24tc21hbGwtZm9udC1zaXplO1xyXG4gICAgfVxyXG5cclxuICAgICYtLW1pbmkge1xyXG4gICAgICAgIGhlaWdodDogJHUtYnV0dG9uLW1pbmktaGVpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHUtYnV0dG9uLW1pbmktZm9udC1zaXplO1xyXG4gICAgICAgIC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuICAgICAgICBtaW4td2lkdGg6ICR1LWJ1dHRvbi1taW5pLW1pbi13aWR0aDtcclxuICAgICAgICAvKiAjZW5kaWYgKi9cclxuICAgICAgICBwYWRkaW5nOiAkdS1idXR0b24tbWluaS1wYWRkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAkdS1idXR0b24tZGlzYWJsZWQtb3BhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1pbmZvIHtcclxuICAgICAgICBjb2xvcjogJHUtYnV0dG9uLWluZm8tY29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHUtYnV0dG9uLWluZm8tYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1pbmZvLWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItd2lkdGg6ICR1LWJ1dHRvbi1pbmZvLWJvcmRlci13aWR0aDtcclxuICAgICAgICBib3JkZXItc3R5bGU6ICR1LWJ1dHRvbi1pbmZvLWJvcmRlci1zdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1zdWNjZXNzIHtcclxuICAgICAgICBjb2xvcjogJHUtYnV0dG9uLXN1Y2Nlc3MtY29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHUtYnV0dG9uLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1zdWNjZXNzLWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItd2lkdGg6ICR1LWJ1dHRvbi1zdWNjZXNzLWJvcmRlci13aWR0aDtcclxuICAgICAgICBib3JkZXItc3R5bGU6ICR1LWJ1dHRvbi1zdWNjZXNzLWJvcmRlci1zdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1wcmltYXJ5IHtcclxuICAgICAgICBjb2xvcjogJHUtYnV0dG9uLXByaW1hcnktY29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHUtYnV0dG9uLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1wcmltYXJ5LWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItd2lkdGg6ICR1LWJ1dHRvbi1wcmltYXJ5LWJvcmRlci13aWR0aDtcclxuICAgICAgICBib3JkZXItc3R5bGU6ICR1LWJ1dHRvbi1wcmltYXJ5LWJvcmRlci1zdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1lcnJvciB7XHJcbiAgICAgICAgY29sb3I6ICR1LWJ1dHRvbi1lcnJvci1jb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdS1idXR0b24tZXJyb3ItYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR1LWJ1dHRvbi1lcnJvci1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAkdS1idXR0b24tZXJyb3ItYm9yZGVyLXdpZHRoO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogJHUtYnV0dG9uLWVycm9yLWJvcmRlci1zdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS13YXJuaW5nIHtcclxuICAgICAgICBjb2xvcjogJHUtYnV0dG9uLXdhcm5pbmctY29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHUtYnV0dG9uLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR1LWJ1dHRvbi13YXJuaW5nLWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItd2lkdGg6ICR1LWJ1dHRvbi13YXJuaW5nLWJvcmRlci13aWR0aDtcclxuICAgICAgICBib3JkZXItc3R5bGU6ICR1LWJ1dHRvbi13YXJuaW5nLWJvcmRlci1zdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1ibG9jayB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleDtcclxuICAgICAgICB3aWR0aDogJHUtYnV0dG9uLWJsb2NrLXdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWNpcmNsZSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR1LWJ1dHRvbi1jaXJjbGUtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItdG9wLWxlZnQtcmFkaXVzO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR1LWJ1dHRvbi1jaXJjbGUtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cztcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHUtYnV0dG9uLWNpcmNsZS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICAmLS1zcXVhcmUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdS1idXR0b24tc3F1YXJlLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR1LWJ1dHRvbi1zcXVhcmUtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgLyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG4gICAgICAgIG1pbi13aWR0aDogJHUtYnV0dG9uLWljb24tbWluLXdpZHRoO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAvKiAjZW5kaWYgKi9cclxuICAgIH1cclxuXHJcbiAgICAmLS1wbGFpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHUtYnV0dG9uLXBsYWluLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJi0taGFpcmxpbmUge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogJHUtYnV0dG9uLWhhaXJsaW5lLWJvcmRlci13aWR0aCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdS1idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmJmMGU1NjkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3UtYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiZjBlNTY5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE3MjQ5MTgzMTUxNzZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-button/u-button-create-component',
    {
        'uni_modules/uview-ui/components/u-button/u-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(252))
        })
    },
    [['uni_modules/uview-ui/components/u-button/u-button-create-component']]
]);

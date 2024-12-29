(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/sub-modify/modifyDpi/modifyDpi"],{

/***/ 220:
/*!**********************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/main.js?{"page":"pages%2Fsub-modify%2FmodifyDpi%2FmodifyDpi"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _modifyDpi = _interopRequireDefault(__webpack_require__(/*! ./pages/sub-modify/modifyDpi/modifyDpi.vue */ 221));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_modifyDpi.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 221:
/*!*************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/pages/sub-modify/modifyDpi/modifyDpi.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyDpi.vue?vue&type=template&id=6ce0af88&scoped=true& */ 222);
/* harmony import */ var _modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifyDpi.vue?vue&type=script&lang=js& */ 224);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _modifyDpi_vue_vue_type_style_index_0_id_6ce0af88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifyDpi.vue?vue&type=style&index=0&id=6ce0af88&scoped=true&lang=scss& */ 226);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ce0af88",
  null,
  false,
  _modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/sub-modify/modifyDpi/modifyDpi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 222:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/pages/sub-modify/modifyDpi/modifyDpi.vue?vue&type=template&id=6ce0af88&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./modifyDpi.vue?vue&type=template&id=6ce0af88&scoped=true& */ 223);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_template_id_6ce0af88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 223:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dell/Desktop/ms_stu_pro_lrb/pages/sub-modify/modifyDpi/modifyDpi.vue?vue&type=template&id=6ce0af88&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 252))
    },
    uModal: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-modal/u-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-modal/u-modal.vue */ 262))
    },
    mask: function () {
      return __webpack_require__.e(/*! import() | components/mask/mask */ "components/mask/mask").then(__webpack_require__.bind(null, /*! @/components/mask/mask.vue */ 270))
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
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      this.modalShow = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 224:
/*!**************************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/pages/sub-modify/modifyDpi/modifyDpi.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./modifyDpi.vue?vue&type=script&lang=js& */ 225);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 225:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dell/Desktop/ms_stu_pro_lrb/pages/sub-modify/modifyDpi/modifyDpi.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 35));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 37));
var _compress = __webpack_require__(/*! @/api/compress.js */ 169);
var _env = _interopRequireDefault(__webpack_require__(/*! @/utils/env.js */ 168));
var _tools = __webpack_require__(/*! @/api/tools.js */ 30);
var _index = _interopRequireDefault(__webpack_require__(/*! @/components/RewardedAd/index.js */ 177));
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
var mask = function mask() {
  __webpack_require__.e(/*! require.ensure | components/mask/mask */ "components/mask/mask").then((function () {
    return resolve(__webpack_require__(/*! @/components/mask/mask.vue */ 270));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      // 图片数组
      imageUrls: [],
      // dpi初始值
      dpi: 150,
      // dpi最大值
      max_input: 300,
      // 控制遮罩层的出现
      maskShow: false,
      // 总数组
      allContent: [],
      // 控制模态框的出现
      modalShow: false,
      // 模态框的头部
      title: '修改dpi',
      // 模态框的内容
      content: '观看广告，解锁功能',
      //第一次返回的结果
      outcome: [],
      // 第二次返回的结果
      result: [],
      loading: true,
      progressPercent: 0,
      // 激励广告实例
      rewardAd: null,
      baseUrl: ''
    };
  },
  components: {
    mask: mask
  },
  onLoad: function onLoad() {
    this.baseUrl = _env.default.baseUrl;
    this.rewardAd = new _index.default(this.getJli, this.customRewardUser);
  },
  computed: {
    getJli: function getJli() {
      return this.$store.state.jLiId ? this.$store.state.jLiId : "";
    }
  },
  methods: {
    change: function change(e) {
      this.dpi = e.detail.value;
    },
    // 选择图片
    ChooseImage: function ChooseImage() {
      var _this = this;
      this.imageUrls = [];
      this.allContent = [];
      uni.chooseImage({
        count: 5,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success: function success(res) {
          _this.maskShow = true;
          _this.imageUrls = res.tempFilePaths;
          var interval = setInterval(function () {
            if (_this.progressPercent >= 130) {
              clearInterval(interval);
              _this.maskShow = false;
              _this.progressPercent = 0;
            }
            _this.progressPercent += 1;
          }, 20);
          var promises = _this.imageUrls.map(function (url) {
            return _this.getImageInfo(url);
          });
          _this.allContent = promises;
          // Promise.all(promises).then(results => {
          // 	this.allContent = results;
          // });
        }
      });
    },
    // 开始修改
    uploadImages: function uploadImages(imageUrls) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var outcome, i, res, file;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                outcome = [];
                uni.showLoading({
                  title: '上传中'
                });
                i = 0;
              case 3:
                if (!(i < imageUrls.length)) {
                  _context.next = 17;
                  break;
                }
                _context.prev = 4;
                _context.next = 7;
                return uni.uploadFile({
                  url: _env.default.baseUrl + '/ms111/compress/ms111/postImage',
                  filePath: imageUrls[i],
                  name: 'multipartFiles',
                  formData: {
                    "width": _this2.allContent[i].width,
                    "height": _this2.allContent[i].height
                  }
                });
              case 7:
                res = _context.sent;
                if (res.statusCode == 200) {
                  file = {
                    fileImage: JSON.parse(res.data).msg,
                    heightpx: _this2.allContent[i].height,
                    widthpx: _this2.allContent[i].width
                  };
                  outcome.push(file);
                }
                _context.next = 14;
                break;
              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                console.log('上传失败:', _context.t0);
              case 14:
                i++;
                _context.next = 3;
                break;
              case 17:
                uni.hideLoading();
                return _context.abrupt("return", outcome);
              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11]]);
      }))();
    },
    // 点击开始修改
    ModifyImage: function ModifyImage() {
      this.modalShow = true;
    },
    getImageInfo: function getImageInfo(url) {
      // return new Promise((resolve, reject) => {
      var imageInfo = {
        url: url,
        size: 0,
        width: 0,
        height: 0
      };
      uni.getFileInfo({
        filePath: url,
        success: function success(fileRes) {
          imageInfo.size = Math.ceil(fileRes.size / 1024 * 10) / 10;
          uni.getImageInfo({
            src: url,
            success: function success(imageRes) {
              imageInfo.width = imageRes.width;
              imageInfo.height = imageRes.height;
              // resolve(imageInfo);
            },

            fail: function fail(error) {
              console.log(error);
              return;
              // reject(error);
            }
          });
        },

        fail: function fail(error) {
          console.log(error);
          return;
          // reject(error);
        }
      });
      // });
      return imageInfo;
    },
    // 消息提示事件
    confirm: function confirm() {
      if (this.imageUrls == '') {
        uni.showToast({
          title: '请先选择图片',
          icon: 'error',
          duration: 2000
        });
      } else {
        // this.customRewardUser()
        this.rewardAd.init();
      }
      this.modalShow = false;
    },
    // 修改dpi
    putDpiApi: function putDpiApi(dpi) {
      var _this3 = this;
      (0, _compress.putDpi)(dpi).then(function (res) {
        if (res.code == 200) {
          _this3.result = res.data;
          var _loop = function _loop(i) {
            uni.downloadFile({
              url: _env.default.baseUrl + _this3.result[i],
              success: function success(res) {
                var imgUrl = res.tempFilePath;
                if (res.statusCode == 200) {
                  _this3.getSet(imgUrl, _this3.result[i]);
                }
              },
              fail: function fail(err) {
                console.log(err);
              }
            });
          };
          for (var i = 0; i < _this3.result.length; i++) {
            _loop(i);
          }
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    // 删除图片
    deleteImageApi: function deleteImageApi(filePath) {
      (0, _compress.deleteImage)(filePath).then(function (res) {}).catch(function (err) {
        console.log(err, 111);
      });
    },
    saveImage: function saveImage(url, filePath) {
      var _this4 = this;
      uni.saveImageToPhotosAlbum({
        //图片路径，不支持网络图片路径
        filePath: url,
        success: function success(res) {
          _this4.deleteImageApi(filePath);
          uni.hideLoading();
          return uni.showToast({
            title: "保存成功！",
            duration: 2000
          });
        },
        fail: function fail(res) {
          console.log(res.errMsg);
          return uni.showToast({
            title: "请重新保存",
            icon: "error",
            duration: 2000
          });
        },
        complete: function complete(res) {
          uni.hideLoading();
        }
      });
    },
    // 下载文件
    downloadFileApi: function downloadFileApi() {
      downloadFile().then(function (res) {}).catch(function (err) {
        console.log(err);
      });
    },
    getSet: function getSet(imgUrl, filePath) {
      var _this5 = this;
      uni.getSetting({
        success: function success(res) {
          if (!res.authSetting["scope.writePhotosAlbum"]) {
            //向用户发起授权请求
            uni.authorize({
              scope: "scope.writePhotosAlbum",
              success: function success() {
                _this5.saveImage(imgUrl, filePath);
              },
              //授权失败
              fail: function fail() {
                uni.hideLoading();
                uni.showModal({
                  title: "您已拒绝获取相册权限",
                  content: "是否进入权限管理，调整授权？",
                  success: function success(res) {
                    if (res.confirm) {
                      //调起客户端小程序设置界面，返回用户设置的操作结果。（重新让用户授权）
                      uni.openSetting({
                        success: function success(res) {
                          console.log(res.authSetting);
                        }
                      });
                    } else if (res.cancel) {
                      return uni.showToast({
                        title: "已取消！",
                        icon: "error",
                        duration: 2000
                      });
                    }
                  }
                });
              }
            });
          }

          // 存在授权
          else {
            _this5.saveImage(imgUrl, filePath);
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },
    customRewardUser: function customRewardUser() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this6.uploadImages(_this6.imageUrls);
              case 2:
                _this6.outcome = _context2.sent;
                _this6.putDpiApi(JSON.stringify({
                  'dpi': _this6.dpi,
                  "files": _this6.outcome
                }));
                uni.showLoading({
                  title: '正在保存图片...'
                });
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  onUnload: function onUnload() {
    this.rewardAd.destroyAllAd();
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 226:
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/dell/Desktop/ms_stu_pro_lrb/pages/sub-modify/modifyDpi/modifyDpi.vue?vue&type=style&index=0&id=6ce0af88&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_style_index_0_id_6ce0af88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./modifyDpi.vue?vue&type=style&index=0&id=6ce0af88&scoped=true&lang=scss& */ 227);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_style_index_0_id_6ce0af88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_style_index_0_id_6ce0af88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_style_index_0_id_6ce0af88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_style_index_0_id_6ce0af88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_modifyDpi_vue_vue_type_style_index_0_id_6ce0af88_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 227:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/dell/Desktop/ms_stu_pro_lrb/pages/sub-modify/modifyDpi/modifyDpi.vue?vue&type=style&index=0&id=6ce0af88&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[220,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3BhZ2VzL3N1Yi1tb2RpZnkvbW9kaWZ5RHBpL21vZGlmeURwaS52dWU/YTYxYyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3BhZ2VzL3N1Yi1tb2RpZnkvbW9kaWZ5RHBpL21vZGlmeURwaS52dWU/YWNmNSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3BhZ2VzL3N1Yi1tb2RpZnkvbW9kaWZ5RHBpL21vZGlmeURwaS52dWU/ZTRiZCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3BhZ2VzL3N1Yi1tb2RpZnkvbW9kaWZ5RHBpL21vZGlmeURwaS52dWU/Yjc3NCIsInVuaS1hcHA6Ly8vcGFnZXMvc3ViLW1vZGlmeS9tb2RpZnlEcGkvbW9kaWZ5RHBpLnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3BhZ2VzL3N1Yi1tb2RpZnkvbW9kaWZ5RHBpL21vZGlmeURwaS52dWU/ZWM5MiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL21zX3N0dV9wcm9fbHJiL3BhZ2VzL3N1Yi1tb2RpZnkvbW9kaWZ5RHBpL21vZGlmeURwaS52dWU/OThlYyJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSIsImRhdGEiLCJpbWFnZVVybHMiLCJkcGkiLCJtYXhfaW5wdXQiLCJtYXNrU2hvdyIsImFsbENvbnRlbnQiLCJtb2RhbFNob3ciLCJ0aXRsZSIsImNvbnRlbnQiLCJvdXRjb21lIiwicmVzdWx0IiwibG9hZGluZyIsInByb2dyZXNzUGVyY2VudCIsInJld2FyZEFkIiwiYmFzZVVybCIsImNvbXBvbmVudHMiLCJtYXNrIiwib25Mb2FkIiwiY29tcHV0ZWQiLCJnZXRKbGkiLCJtZXRob2RzIiwiY2hhbmdlIiwiQ2hvb3NlSW1hZ2UiLCJ1bmkiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJjbGVhckludGVydmFsIiwidXBsb2FkSW1hZ2VzIiwiaSIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwicmVzIiwiZmlsZSIsImZpbGVJbWFnZSIsImhlaWdodHB4Iiwid2lkdGhweCIsImNvbnNvbGUiLCJNb2RpZnlJbWFnZSIsImdldEltYWdlSW5mbyIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlSW5mbyIsInNyYyIsImZhaWwiLCJjb25maXJtIiwiaWNvbiIsImR1cmF0aW9uIiwicHV0RHBpQXBpIiwiY2F0Y2giLCJkZWxldGVJbWFnZUFwaSIsInNhdmVJbWFnZSIsImNvbXBsZXRlIiwiZG93bmxvYWRGaWxlQXBpIiwiZG93bmxvYWRGaWxlIiwiZ2V0U2V0Iiwic2NvcGUiLCJpbWdVcmwiLCJsb2ciLCJhdXRoU2V0dGluZyIsImNhbmNlbCIsInNob3dUb2FzdCIsImN1c3RvbVJld2FyZFVzZXIiLCJvblVubG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUhBO0FBQ0FBLEVBQUUsQ0FBQ0MsaUNBQWlDLEdBQUdDLG1CQUFtQjtBQUcxREMsVUFBVSxDQUFDQyxrQkFBSSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUNMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtJO0FBQ2xJO0FBQzZEO0FBQ0w7QUFDc0M7OztBQUc5RjtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9HQUFVO0FBQ1o7QUFDQTs7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LDRvQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTFyQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL3N1Yi1tb2RpZnkvbW9kaWZ5RHBpL21vZGlmeURwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvc3ViLW1vZGlmeS9tb2RpZnlEcGkvbW9kaWZ5RHBpLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21vZGlmeURwaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNlMGFmODgmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb2RpZnlEcGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZnlEcGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21vZGlmeURwaS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Y2UwYWY4OCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2Y2UwYWY4OFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zdWItbW9kaWZ5L21vZGlmeURwaS9tb2RpZnlEcGkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE3LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tb2RpZnlEcGkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjZTBhZjg4JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdUJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtYnV0dG9uL3UtYnV0dG9uXCIgKi8gXCJAL3VuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1idXR0b24vdS1idXR0b24udnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVNb2RhbDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtbW9kYWwvdS1tb2RhbFwiICovIFwiQC91bmlfbW9kdWxlcy91dmlldy11aS9jb21wb25lbnRzL3UtbW9kYWwvdS1tb2RhbC52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgbWFzazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL21hc2svbWFza1wiICovIFwiQC9jb21wb25lbnRzL21hc2svbWFzay52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICBpZiAoIV92bS5faXNNb3VudGVkKSB7XG4gICAgX3ZtLmUwID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgdGhpcy5tb2RhbFNob3cgPSBmYWxzZVxuICAgIH1cbiAgfVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTMtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vbW9kaWZ5RHBpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMy0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tb2RpZnlEcGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJwaG90by1jb250YWluZXJcIj5cclxuXHRcdFx0PCEtLSDmsqHmnInkuIrkvKDmlofku7YgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicGhvdG8tbnVsbFwiIHYtaWY9XCJpbWFnZVVybHM9PScnXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwaG90b051bGxcIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHRleHQ+6K+36YCJ5oup5Zu+54mHPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0PuaUr+aMgeaJuemHj+S/ruaUuTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOS4iuS8oOS6huS4gOW8oOWbvueJhyAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwaG90by1zaW5nbGUtYWxsQ29udGFpbmVyXCIgdi1lbHNlLWlmPVwiaW1hZ2VVcmxzLmxlbmd0aD09MVwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1hZ2VVcmxzXCIgY2xhc3M9XCJwaG90by1zaW5nbGVcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwhLS0g5Zu+54mH5bC65a+45Yy6IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGhvdG8tcGFyYW1ldGVyXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0XHTlpKflsI86e3thbGxDb250ZW50WzBdLnNpemV9fWtiXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0XHTlrr3pq5g6e3thbGxDb250ZW50WzBdLndpZHRofX0qe3thbGxDb250ZW50WzBdLmhlaWdodH19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5LiK5Lyg5LqG5aSa5byg5Zu+54mHIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBob3RvLW11bHRpcGxlLWFsbENvbnRhaW5lclwiIHYtZWxzZT5cclxuXHRcdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgY2xhc3M9J3Njcm9sbC12aWV3Jz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGhvdG8tbXVsdGlwbGUtc2luZ2xlQ29udGFpbmVyXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gYWxsQ29udGVudFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBob3RvLW11bHRpcGxlLXByZXZpZXdDb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udXJsXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjAwcnB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwaG90by1tdWx0aXBsZS1wYXJhbWV0ZXJDb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx05YiG6L6o546HOnt7aXRlbS53aWR0aH19Knt7aXRlbS5oZWlnaHR9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx05aSn5bCPOnt7aXRlbS5zaXplfX1rYlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtb2RpZnlEcGktY29udGFpbmVyIFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImRwaS1saW5lXCI+XHJcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW4tbGVmdDogOHB4OyBtYXJnaW4tdG9wOiAyNXB4OyB3aGl0ZS1zcGFjZTogbm93cmFwO1wiPlxyXG5cdFx0XHRcdFx05YiG6L6p546HZHBpXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2xpZGUtZHBpXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IHdpZHRoOiBpbmhlcml0O3dpZHRoOiA1MDBycHg7XCI+XHJcblx0XHRcdFx0XHRcdDxzbGlkZXIgdmFsdWU9XCIxNTBcIiBibG9jay1jb2xvcj1cIiNmZmZmZmZcIiBibG9jay1zaXplPVwiMTVcIiBtaW49XCIwXCIgbWF4PVwiMzAwXCIgc2hvdy12YWx1ZVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDUwMHJweDtcIiBhY3RpdmVDb2xvcj0nIzI5NzlmZicgQGNoYW5nZT1cImNoYW5nZVwiIC8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cIndpZHRoOiA0NyU7XCI+XHJcblx0XHRcdFx0PHUtYnV0dG9uIHNoYXBlPVwiY2lyY2xlXCIgQGNsaWNrPVwiQ2hvb3NlSW1hZ2VcIiBjbGFzcz1cImNob29zZVwiIDpwbGFpbj1cInRydWVcIlxyXG5cdFx0XHRcdFx0dHlwZT1cInByaW1hcnlcIj7pgInmi6nlm77niYc8L3UtYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJ3aWR0aDogNDclO1wiPlxyXG5cdFx0XHRcdDx1LWJ1dHRvbiBzaGFwZT1cImNpcmNsZVwiIEBjbGljaz1cIk1vZGlmeUltYWdlXCIgdHlwZT1cInByaW1hcnlcIj7lvIDlp4vkv67mlLk8L3UtYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldz5cclxuXHRcdFx0PHUtbW9kYWwgOnNob3c9XCJtb2RhbFNob3dcIiA6dGl0bGU9XCJ0aXRsZVwiIDpjb250ZW50PSdjb250ZW50JyBzaG93Q2FuY2VsQnV0dG9uIEBjYW5jZWw9XCJ0aGlzLm1vZGFsU2hvdz1mYWxzZVwiXHJcblx0XHRcdFx0QGNvbmZpcm09XCJjb25maXJtXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzbG90LWNvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogMjBycHg7cGFkZGluZy10b3A6IDEwcnB4O1wiPlxyXG5cdFx0XHRcdFx0PHJpY2gtdGV4dCA6bm9kZXM9XCJjb250ZW50XCIgY2xhc3M9XCJyaWNoLXRleHRcIj48L3JpY2gtdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdS1tb2RhbD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g6YGu572p5bGCIC0tPlxyXG5cdFx0PG1hc2sgOm1hc2stc2hvdz1cIm1hc2tTaG93XCIgOnByb2dyZXNzLXBlcmNlbnQ9XCJwcm9ncmVzc1BlcmNlbnRcIiB2LWlmPVwibWFza1Nob3dcIj48L21hc2s+XHJcblx0XHQ8IS0tICNpZmRlZiBNUC1UT1VUSUFPIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsaW5lLXByb2dyZXNzLWNvbnRhaW5lclwiIHYtaWY9XCJtYXNrU2hvd1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAzMHJweDtcIj5cclxuXHRcdFx0XHQ8IS0tIOeZvuWIhuavlOaYvuekuiAtLT5cclxuXHRcdFx0XHTlpITnkIblm77niYfkuK0s6K+356iN562JXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9ncmVzcy1ib3hcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcnB4O1wiPlxyXG5cdFx0XHRcdDxwcm9ncmVzcyA6cGVyY2VudD1cInByb2dyZXNzUGVyY2VudFwiIHNob3ctaW5mbyBzdHJva2Utd2lkdGg9XCI0XCIgYWN0aXZlQ29sb3I9JyMxOWJlNmInIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdHB1dERwaSxcclxuXHRcdHBvc3RJbWFnZSxcclxuXHRcdGRlbGV0ZUltYWdlXHJcblx0fSBmcm9tICdAL2FwaS9jb21wcmVzcy5qcydcclxuXHRpbXBvcnQgZW52IGZyb20gJ0AvdXRpbHMvZW52LmpzJztcclxuXHRpbXBvcnQgbWFzayBmcm9tICdAL2NvbXBvbmVudHMvbWFzay9tYXNrLnZ1ZSdcclxuXHRpbXBvcnQge1xyXG5cdFx0Z2V0YWRwaWQsXHJcblx0XHRjaGVja1NlY3VyaXR5XHJcblx0fSBmcm9tICdAL2FwaS90b29scy5qcydcclxuXHRpbXBvcnQgUmV3YXJkZWRBZCBmcm9tICdAL2NvbXBvbmVudHMvUmV3YXJkZWRBZC9pbmRleC5qcyc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyDlm77niYfmlbDnu4RcclxuXHRcdFx0XHRpbWFnZVVybHM6IFtdLFxyXG5cdFx0XHRcdC8vIGRwaeWIneWni+WAvFxyXG5cdFx0XHRcdGRwaTogMTUwLFxyXG5cdFx0XHRcdC8vIGRwaeacgOWkp+WAvFxyXG5cdFx0XHRcdG1heF9pbnB1dDogMzAwLFxyXG5cdFx0XHRcdC8vIOaOp+WItumBrue9qeWxgueahOWHuueOsFxyXG5cdFx0XHRcdG1hc2tTaG93OiBmYWxzZSxcclxuXHRcdFx0XHQvLyDmgLvmlbDnu4RcclxuXHRcdFx0XHRhbGxDb250ZW50OiBbXSxcclxuXHRcdFx0XHQvLyDmjqfliLbmqKHmgIHmoYbnmoTlh7rnjrBcclxuXHRcdFx0XHRtb2RhbFNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdC8vIOaooeaAgeahhueahOWktOmDqFxyXG5cdFx0XHRcdHRpdGxlOiAn5L+u5pS5ZHBpJyxcclxuXHRcdFx0XHQvLyDmqKHmgIHmoYbnmoTlhoXlrrlcclxuXHRcdFx0XHRjb250ZW50OiAn6KeC55yL5bm/5ZGK77yM6Kej6ZSB5Yqf6IO9JyxcclxuXHRcdFx0XHQvL+esrOS4gOasoei/lOWbnueahOe7k+aenFxyXG5cdFx0XHRcdG91dGNvbWU6IFtdLFxyXG5cdFx0XHRcdC8vIOesrOS6jOasoei/lOWbnueahOe7k+aenFxyXG5cdFx0XHRcdHJlc3VsdDogW10sXHJcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRwcm9ncmVzc1BlcmNlbnQ6IDAsXHJcblx0XHRcdFx0Ly8g5r+A5Yqx5bm/5ZGK5a6e5L6LXHJcblx0XHRcdFx0cmV3YXJkQWQ6IG51bGwsXHJcblx0XHRcdFx0YmFzZVVybDogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0bWFza1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5iYXNlVXJsID0gZW52LmJhc2VVcmxcclxuXHRcdFx0dGhpcy5yZXdhcmRBZCA9IG5ldyBSZXdhcmRlZEFkKHRoaXMuZ2V0SmxpLCB0aGlzLmN1c3RvbVJld2FyZFVzZXIpO1xyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGdldEpsaSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuakxpSWQgPyB0aGlzLiRzdG9yZS5zdGF0ZS5qTGlJZCA6IFwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHJcblx0XHRcdGNoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5kcGkgPSBlLmRldGFpbC52YWx1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInmi6nlm77niYdcclxuXHRcdFx0Q2hvb3NlSW1hZ2UoKSB7XHJcblx0XHRcdFx0dGhpcy5pbWFnZVVybHMgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmFsbENvbnRlbnQgPSBbXTtcclxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0Y291bnQ6IDUsXHJcblx0XHRcdFx0XHRzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcblx0XHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vICAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcy50ZW1wRmlsZVBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrU2VjdXJpdHkocmVzLnRlbXBGaWxlUGF0aHNbaV0pXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1hc2tTaG93ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VVcmxzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucHJvZ3Jlc3NQZXJjZW50ID49IDEzMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubWFza1Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvZ3Jlc3NQZXJjZW50ID0gMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvZ3Jlc3NQZXJjZW50ICs9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9LCAyMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgcHJvbWlzZXMgPSB0aGlzLmltYWdlVXJscy5tYXAodXJsID0+IHRoaXMuZ2V0SW1hZ2VJbmZvKHVybCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hbGxDb250ZW50ID0gcHJvbWlzZXM7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXN1bHRzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0dGhpcy5hbGxDb250ZW50ID0gcmVzdWx0cztcclxuXHRcdFx0XHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdC8vICNpZm5kZWYgTVAtVE9VVElBT1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5tYXNrU2hvdyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VVcmxzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnByb2dyZXNzUGVyY2VudCA+PSAxMzApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5tYXNrU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb2dyZXNzUGVyY2VudCA9IDBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9ncmVzc1BlcmNlbnQgKz0gMTtcclxuXHRcdFx0XHRcdFx0fSwgMjApO1xyXG5cdFx0XHRcdFx0XHRsZXQgcHJvbWlzZXMgPSB0aGlzLmltYWdlVXJscy5tYXAodXJsID0+IHRoaXMuZ2V0SW1hZ2VJbmZvKHVybCkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFsbENvbnRlbnQgPSBwcm9taXNlcztcclxuXHRcdFx0XHRcdFx0Ly8gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzdWx0cyA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGhpcy5hbGxDb250ZW50ID0gcmVzdWx0cztcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5byA5aeL5L+u5pS5XHJcblx0XHRcdGFzeW5jIHVwbG9hZEltYWdlcyhpbWFnZVVybHMpIHtcclxuXHRcdFx0XHRsZXQgb3V0Y29tZSA9IFtdO1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+S4iuS8oOS4rSdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlVXJscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgdW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogZW52LmJhc2VVcmwgKyAnL21zMTExL2NvbXByZXNzL21zMTExL3Bvc3RJbWFnZScsXHJcblx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IGltYWdlVXJsc1tpXSxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAnbXVsdGlwYXJ0RmlsZXMnLFxyXG5cdFx0XHRcdFx0XHRcdGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcIndpZHRoXCI6IHRoaXMuYWxsQ29udGVudFtpXS53aWR0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6IHRoaXMuYWxsQ29udGVudFtpXS5oZWlnaHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGZpbGUgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWxlSW1hZ2U6IEpTT04ucGFyc2UocmVzLmRhdGEpLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodHB4OiB0aGlzLmFsbENvbnRlbnRbaV0uaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGhweDogdGhpcy5hbGxDb250ZW50W2ldLndpZHRoXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG91dGNvbWUucHVzaChmaWxlKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5LiK5Lyg5aSx6LSlOicsIGVycik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0cmV0dXJuIG91dGNvbWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+W8gOWni+S/ruaUuVxyXG5cdFx0XHRNb2RpZnlJbWFnZSgpIHtcclxuXHRcdFx0XHR0aGlzLm1vZGFsU2hvdyA9IHRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEltYWdlSW5mbyh1cmwpIHtcclxuXHRcdFx0XHQvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGltYWdlSW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdFx0XHRcdHNpemU6IDAsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAwLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dW5pLmdldEZpbGVJbmZvKHtcclxuXHRcdFx0XHRcdFx0ZmlsZVBhdGg6IHVybCxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKGZpbGVSZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpbWFnZUluZm8uc2l6ZSA9IE1hdGguY2VpbCgoZmlsZVJlcy5zaXplIC8gMTAyNCkgKiAxMCkgLyAxMDtcclxuXHRcdFx0XHRcdFx0XHR1bmkuZ2V0SW1hZ2VJbmZvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHNyYzogdXJsLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogKGltYWdlUmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGltYWdlSW5mby53aWR0aCA9IGltYWdlUmVzLndpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWFnZUluZm8uaGVpZ2h0ID0gaW1hZ2VSZXMuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyByZXNvbHZlKGltYWdlSW5mbyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFpbDogKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmVqZWN0KGVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZmFpbDogKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdFx0Ly8gcmVqZWN0KGVycm9yKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0cmV0dXJuIGltYWdlSW5mb1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmtojmga/mj5DnpLrkuovku7ZcclxuXHRcdFx0Y29uZmlybSgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5pbWFnZVVybHMgPT0gJycpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+WFiOmAieaLqeWbvueJhycsXHJcblx0XHRcdFx0XHRcdGljb246ICdlcnJvcicsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmN1c3RvbVJld2FyZFVzZXIoKVxyXG5cdFx0XHRcdFx0dGhpcy5yZXdhcmRBZC5pbml0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5tb2RhbFNob3cgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLlkcGlcclxuXHRcdFx0cHV0RHBpQXBpKGRwaSkge1xyXG5cdFx0XHRcdHB1dERwaShkcGkpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXN1bHQgPSByZXMuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5kb3dubG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IGVudi5iYXNlVXJsICsgdGhpcy5yZXN1bHRbaV0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgaW1nVXJsID0gcmVzLnRlbXBGaWxlUGF0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0U2V0KGltZ1VybCwgdGhpcy5yZXN1bHRbaV0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliKDpmaTlm77niYdcclxuXHRcdFx0ZGVsZXRlSW1hZ2VBcGkoZmlsZVBhdGgpIHtcclxuXHRcdFx0XHRkZWxldGVJbWFnZShcclxuXHRcdFx0XHRcdGZpbGVQYXRoXHJcblx0XHRcdFx0KS50aGVuKHJlcyA9PiB7fSkuY2F0Y2goKGVyciA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIsIDExMSk7XHJcblx0XHRcdFx0fSkpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNhdmVJbWFnZSh1cmwsIGZpbGVQYXRoKSB7XHJcblx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG5cdFx0XHRcdFx0Ly/lm77niYfot6/lvoTvvIzkuI3mlK/mjIHnvZHnu5zlm77niYfot6/lvoRcclxuXHRcdFx0XHRcdGZpbGVQYXRoOiB1cmwsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVsZXRlSW1hZ2VBcGkoZmlsZVBhdGgpXHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5L+d5a2Y5oiQ5Yqf77yBXCIsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+mHjeaWsOS/neWtmFwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246IFwiZXJyb3JcIixcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDkuIvovb3mlofku7ZcclxuXHRcdFx0ZG93bmxvYWRGaWxlQXBpKCkge1xyXG5cdFx0XHRcdGRvd25sb2FkRmlsZSgpLnRoZW4ocmVzID0+IHt9KS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2V0U2V0KGltZ1VybCwgZmlsZVBhdGgpIHtcclxuXHRcdFx0XHR1bmkuZ2V0U2V0dGluZyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vICAjaWZuZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHRcdFx0aWYgKCFyZXMuYXV0aFNldHRpbmdbXHJcblx0XHRcdFx0XHRcdFx0XHRcInNjb3BlLndyaXRlUGhvdG9zQWxidW1cIl0pIHtcclxuXHRcdFx0XHRcdFx0XHQvL+WQkeeUqOaIt+WPkei1t+aOiOadg+ivt+axglxyXG5cdFx0XHRcdFx0XHRcdHVuaS5hdXRob3JpemUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0c2NvcGU6IFwic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVJbWFnZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbWdVcmwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsZVBhdGgpXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly/mjojmnYPlpLHotKVcclxuXHRcdFx0XHRcdFx0XHRcdGZhaWw6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuaCqOW3suaLkue7neiOt+WPluebuOWGjOadg+mZkFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwi5piv5ZCm6L+b5YWl5p2D6ZmQ566h55CG77yM6LCD5pW05o6I5p2D77yfXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/osIPotbflrqLmiLfnq6/lsI/nqIvluo/orr7nva7nlYzpnaLvvIzov5Tlm57nlKjmiLforr7nva7nmoTmk43kvZznu5PmnpzjgILvvIjph43mlrDorqnnlKjmiLfmjojmnYPvvIlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLm9wZW5TZXR0aW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmxvZyhyZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYXV0aFNldHRpbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuY2FuY2VsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5bey5Y+W5raI77yBXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcImVycm9yXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHRcdGlmICghcmVzLmF1dGhTZXR0aW5nW1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJzY29wZS5hbGJ1bVwiXSkge1xyXG5cdFx0XHRcdFx0XHRcdC8v5ZCR55So5oi35Y+R6LW35o6I5p2D6K+35rGCXHJcblx0XHRcdFx0XHRcdFx0dW5pLmF1dGhvcml6ZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRzY29wZTogXCJzY29wZS5hbGJ1bVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVJbWFnZShpbWdVcmwsIGZpbGVQYXRoKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdC8v5o6I5p2D5aSx6LSlXHJcblx0XHRcdFx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLmgqjlt7Lmi5Lnu53ojrflj5bnm7jlhozmnYPpmZBcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIuaYr+WQpui/m+WFpeadg+mZkOeuoeeQhu+8jOiwg+aVtOaOiOadg++8n1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+iwg+i1t+WuouaIt+err+Wwj+eoi+W6j+iuvue9rueVjOmdou+8jOi/lOWbnueUqOaIt+iuvue9rueahOaTjeS9nOe7k+aenOOAgu+8iOmHjeaWsOiuqeeUqOaIt+aOiOadg++8iVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkub3BlblNldHRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYXV0aFNldHRpbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXMuY2FuY2VsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuW3suWPlua2iO+8gVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwiZXJyb3JcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdC8vIOWtmOWcqOaOiOadg1xyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVJbWFnZShpbWdVcmwsXHJcblx0XHRcdFx0XHRcdFx0XHRmaWxlUGF0aClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjdXN0b21SZXdhcmRVc2VyKCkge1xyXG5cdFx0XHRcdHRoaXMub3V0Y29tZSA9IGF3YWl0IHRoaXMudXBsb2FkSW1hZ2VzKHRoaXMuaW1hZ2VVcmxzKTtcclxuXHRcdFx0XHR0aGlzLnB1dERwaUFwaShKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0XHQnZHBpJzogdGhpcy5kcGksXHJcblx0XHRcdFx0XHRcImZpbGVzXCI6IHRoaXMub3V0Y29tZVxyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmraPlnKjkv53lrZjlm77niYcuLi4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdC8vI2lmbmRlZiBNUC1RUVxyXG5cdFx0XHR0aGlzLnJld2FyZEFkLmRlc3Ryb3lBbGxBZCgpO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG5cdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHJcblx0XHQvLyDlvIDlp4vlm77niYfpooTop4hcclxuXHRcdC5waG90by1jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogOTUlO1xyXG5cdFx0XHRoZWlnaHQ6IDYwMHJweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogMXJweCAzMnJweCAxMDBycHggMjBycHggcmdiYSg3OSwgNzksIDc5LCAwLjEpO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR0b3A6IC02MHJweDtcclxuXHRcdFx0Ly8gI2lmZGVmIE1QLUtVQUlTSE9VXHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0LnBob3RvLW51bGwge1xyXG5cdFx0XHRcdHdpZHRoOiAzMDBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA1MDBycHg7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIOS4gOW8oOWbvueJh+aXtueahOWuueWZqFxyXG5cdFx0XHQucGhvdG8tc2luZ2xlLWFsbENvbnRhaW5lciB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiA2MDBycHg7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDk5OTtcclxuXHJcblx0XHRcdFx0LnBob3RvLXNpbmdsZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzAwcnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0NTBycHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IDQ1JTtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnBob3RvLXBhcmFtZXRlciB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5Mzk5O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g5aSa5byg5Zu+54mH5pe255qE5a655ZmoXHJcblx0XHRcdC5waG90by1tdWx0aXBsZS1hbGxDb250YWluZXIge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogNjAwcnB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHRcdFx0LnNjcm9sbC12aWV3IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA2MDBycHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG5cdFx0XHRcdFx0Ly8g5aSa5byg5Zu+54mH5Lit55qE5q+P5Liq5a655ZmoXHJcblx0XHRcdFx0XHQucGhvdG8tbXVsdGlwbGUtc2luZ2xlQ29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0XHRcdFx0XHQvLyDmqKrlkJHnmoTmu5HliqjmoYbmiY3pnIDopoFcclxuXHRcdFx0XHRcdFx0Ly8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMTZweCA1MHB4IHJnYmEoNzksIDc5LCA3OSwgMC4xKTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAgNDBycHggNDBycHggMDtcclxuXHJcblx0XHRcdFx0XHRcdC5waG90by1tdWx0aXBsZS1wcmV2aWV3Q29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucGhvdG8tbXVsdGlwbGUtcGFyYW1ldGVyQ29udGFpbmVyIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5MDkzOTk7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwMHJweDtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDAlO1xyXG5cdFx0XHRcdFx0XHRcdC8vICNpZmRlZiBNUC1LVUFJU0hPVVxyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAtMjUwJTtcclxuXHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Lm1vZGlmeURwaS1jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogOTUlO1xyXG5cdFx0XHRoZWlnaHQ6IDE1MHJweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAxNnB4IDUwcHggcmdiYSg3OSwgNzksIDc5LCAwLjEpO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzMHJweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblxyXG5cdFx0XHQuZHBpLWxpbmUge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTUwcnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cclxuXHRcdFx0XHQuc2xpZGUtZHBpIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDM1cnB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQwMHJweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuYnV0dG9uLWNvbnRhaW5lciB7XHJcblx0XHRcdHdpZHRoOiA5NSU7XHJcblx0XHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQucGhvdG8ge1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdH1cclxuXHJcblx0Ojp2LWRlZXAgLnUtbW9kYWxfX2NvbnRlbnQge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHR9XHJcblxyXG5cdC5saW5lLXByb2dyZXNzLWNvbnRhaW5lciB7XHJcblx0XHR3aWR0aDogNzAlO1xyXG5cdFx0aGVpZ2h0OiAxNTBycHg7XHJcblx0XHRib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdHotaW5kZXg6IDEwMDcxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMzBycHg7XHJcblxyXG5cdFx0LmxpbmUtcHJvZ3Jlc3Mge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHRcdFx0d2lkdGg6IDYwJTtcclxuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0XHR0b3A6IDMwJTtcclxuXHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQucmljaC10ZXh0IHtcclxuXHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHRcdC8vICNlbmRpZiBcclxuXHRcdC8vICNpZmRlZiBNUC1LVUFJU0hPVVxyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdC8vICNlbmRpZiBcclxuXHR9XHJcblxyXG5cdC5waG90b051bGwge1xyXG5cdFx0d2lkdGg6IDEwMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vbWFzaGFuZy5laWNwLnZpcDo1NTU1L21zX3N0dV9wcm8xNzMvcHJvZmlsZS91cGxvYWQvMjAyNC8wNy8zMC8xOWIxZjIwYzQ4YTk0NGUyYWRmMTIzMjRhN2UyZDFkMF8yMDI0MDczMDE0MDQwMkEwMTMucG5nKTtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9tb2RpZnlEcGkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmNlMGFmODgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL21vZGlmeURwaS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Y2UwYWY4OCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzI0NDYxMjczNjE5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
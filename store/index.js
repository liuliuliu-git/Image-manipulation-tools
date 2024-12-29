import Vue from 'vue'
import VueX from 'vuex'
import {
	getadpid,
} from '@/api/tools.js'
Vue.use(VueX)
export default new VueX.Store({
	state: {
		// 开发者姓名列表
		developers: ["倪志杰(后端)", "林炳成(前端)"],
		// 横幅广告
		bannerId: "",
		//  激励广告
		jLiId: '',
		// 插屏广告
		InterstitialId: '',
		// 小程序名称(由于抖音自定义导航栏限制，无法全局配置titleText，改为Vuex存储)
		navigationBarTitleText: "浩瀚图片压缩神器",
		wxAppid: '',
		ttAppid: '',
		ksAppid: '',
		qqAppid: '',
		clientType: null,
		baseUrl: ''
	},
	getters: {
		getBannerId(state) {
			console.log(state);
			return state.bannerId;
		},
		getJliId(state) {
			return state.jLiId;
		}
	},
	mutations: {
		setbannerId(state, payload) {
			state.bannerId = payload
		},
		setjLiId(state, payload) {
			state.jLiId = payload
		},
		setClientType(state, payload) {
			state.clientType = payload
		},
		setBaseUrl(state, payload) {
			state.baseUrl = payload
		},

	},
	actions: {
		async getAdIds(content) {

			// TODO:发送获取广告id的请求,并设置到state里
			return new Promise((resolve, reject) => {
				//  #ifdef MP-WEIXIN
				getadpid(content.state.wxAppid).then(res => {
					content.commit('setbannerId', content.state.bannerId)
					content.commit('setjLiId', content.state.jLiId)
					resolve()
				}).catch(err => {
					reject(err)
				})
				// #endif
				//  #ifdef MP-KUAISHOU
				getadpid(content.state.ksAppid).then(res => {
					console.log(res);
					content.commit('setbannerId', content.state.bannerId)
					content.commit('setjLiId', content.state.jLiId)

					resolve()
				}).catch(err => {
					reject(err)
				})
				// #endif
				//  #ifdef MP-TOUTIAO
				getadpid(content.state.ttAppid).then(res => {
					content.commit('setbannerId', content.state.bannerId)
					content.commit('setjLiId', content.state.jLiId)
					content.commit('setClientType', 0)
					resolve()
				}).catch(err => {
					reject(err)
				})
				// #endif
				//  #ifdef MP-QQ
				getadpid(content.state.qqAppid).then(res => {
					content.commit('setbannerId', content.state.bannerId)
					content.commit('setjLiId', content.state.jLiId)
					content.commit('setClientType', 1)
					resolve()
				}).catch(err => {
					reject(err)
				})
				// #endif
			})
		}

	}
})
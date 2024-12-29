<script>
	import InterstitialAd from '@/components/InterstitialAd/InterstitialAd.js';
	import {
		getadpid
	} from '@/api/tools.js'
	import env from '@/utils/env.js';
	export default {
		data() {
			return {
				InterstitialAd: {},
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			this.$store.commit('setBaseUrl', env.baseUrl)
			this.getAppId()
			//  #ifdef MP-WEIXIN
			getadpid(this.$store.state.wxAppid).then(res => {
				this.chooseType(res)
				setTimeout(() => {
					this.InterstitialAd = new InterstitialAd({
						adUnitId: this.$store.state.InterstitialId,
						delay: 5,
						intervalTime: 30,
						onClose(res) {
							console.log('关插屏');
						}
					})
				}, 1000 * 5)
			})
			// #endif
			//  #ifdef MP-TOUTIAO
			getadpid(this.$store.state.ttAppid).then(res => {
				this.chooseType(res)
				setTimeout(() => {
					this.InterstitialAd = new InterstitialAd({
						adUnitId: this.$store.state.InterstitialId,
						delay: 5,
						intervalTime: 30,
						onClose(res) {
							console.log('关插屏');
						}
					})
				}, 1000 * 5)
			})
			// #endif
			//  #ifdef MP-QQ
			getadpid(this.$store.state.qqAppid).then(res => {
				this.chooseType(res)
				setTimeout(() => {
					this.InterstitialAd = new InterstitialAd({
						adUnitId: this.$store.state.InterstitialId,
						delay: 40,
						intervalTime: 30,
						onClose(res) {
							console.log('关插屏');
						}
					})
				}, 1000 * 5)
			})
			// #endif
			//  #ifdef MP-KUAISHOU
			getadpid(this.$store.state.ksAppid).then(res => {
				this.chooseType(res)
				setTimeout(() => {
					this.InterstitialAd = new InterstitialAd({
						adUnitId: this.$store.state.InterstitialId,
						delay: 5,
						intervalTime: 30,
						onClose(res) {
							console.log('关插屏');
						}
					})
				}, 1000 * 5)
			})
			// #endif
		},
		methods: {
			getAppId() {
				//  #ifdef MP-WEIXIN
				const accountInfo = uni.getAccountInfoSync();
				if (accountInfo.miniProgram.appId) {
					this.$store.state.wxAppid = accountInfo.miniProgram.appId
				}
				// #endif
				//  #ifdef MP-KUAISHOU
				const accountInfo = uni.getAccountInfoSync();
				if (accountInfo.miniProgram.appId) {
					this.$store.state.ksAppid = accountInfo.miniProgram.appId
				}
				// #endif
				//  #ifdef MP-QQ
				const accountInfo = uni.getAccountInfoSync();
				if (accountInfo.miniProgram.appId) {
					this.$store.state.qqAppid = accountInfo.miniProgram.appId
				}
				// #endif
				//  #ifdef MP-TOUTIAO
				let ttInfo = tt.getEnvInfoSync()
				if(ttInfo.microapp.appId){
					this.$store.state.ttAppid = ttInfo.microapp.appId
				}
				// #endif
			},
			chooseType(arr) {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].type == 2) {
						this.$store.state.bannerId = arr[i].adpositionId
					} else if (arr[i].type == 4) {
						this.$store.state.jLiId = arr[i].adpositionId
					} else if (arr[i].type == 6) {
						this.$store.state.InterstitialId = arr[i].adpositionId
					}
				}
			}

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 引入uviewUI */
	@import "@/uni_modules/uview-ui/index.scss";

	/*每个页面公共css */
	/* 去除scroll滚动条 */
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}
</style>
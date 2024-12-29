/**
 * 初始化插屏广告实例。
 * @class
 * @classdesc 插屏广告类提供了一个简单的接口来管理和展示插屏广告。
 * @param {Object} [options={}] - 可选配置对象。
 * @param {string} [options.adUnitId] - 必需的广告单元 ID。
 * @param {number} [options.delay=30] - 首次自动显示广告的延迟时间（秒），默认30s。
 * @param {number} [options.intervalTime=60] - 每次唤起广告的间隔时间（秒），默认60s。
 * @param {Function} [options.onClose] - 广告关闭时的回调函数。
 * @throws {Error} 如果未提供有效的广告单元 ID 或者尝试重复创建广告实例。
 * @example 在app.vue中
 引入组件
 import InterstitialAd from '@/components/InterstitialAd/InterstitialAd.js'
 onLaunch: function() {
 			setTimeout(() => {
 				this.InterstitialAd = new InterstitialAd({
 					adUnitId: adUnitId,
 					delay: 30,
 					intervalTime: 30,
 					onClose(res) {
 						console.log('关闭插屏');
 					}
 				})
 			}, 1000 * 5)
 		},
		 目前微信、抖音、快手、QQ中，【快手】不支持插屏广告 
		 QQ在小程序启动的一段时间内不允许跳广告,建议delay设置的时间长一点
 */
class InterstitialAd {
	adInstance = null;
	adUnitId = ""; // 广告ID
	delay = 30; // 首次自动显示广告的延迟(秒)
	intervalTime = 60; // 每次唤起广告的间隔(秒)

	isShowing = false;

	timerId = null;

	counter = 0;

	constructor(options = {}) {
		const {
			adUnitId,
			delay = 30,
			intervalTime = 60,
			onClose
		} = options


		this.adUnitId = adUnitId;
		this.delay = delay;
		this.intervalTime = intervalTime;
		this.closeHandler = onClose

		this.create(adUnitId);

		this.init()

		if (this.adInstance == null) throw new Error('暂不支持此小程序')
	}


	create(adUnitId = this.adUnitId) {
		if (this.adInstance !== null) throw new Error("已创建广告实例，勿重复创建！")

		/* 目前微信、抖音、快手、QQ中，【快手】不支持插屏广告 */
		// #ifdef MP-WEIXIN
		this.adInstance = wx.createInterstitialAd({
			adUnitId
		});
		// #endif


		// #ifdef MP-TOUTIAO
		this.adInstance = tt.createInterstitialAd({
			adUnitId
		});
		// #endif


		// #ifdef MP-QQ
		this.adInstance = qq.createInterstitialAd({
			adUnitId
		});
		// #endif

		// #ifdef MP-KUAISHOU
		this.adInstance = ks.createInterstitialAd({
			type: 100033847,
			unitId: Number(adUnitId.trim()),
		});
		// #endif

	}


	init() {
		this.adInstance.onLoad(() => {
			console.log('onLoad event emit');
			if (this.counter == 0) this.delayPlay(this.delay)
		});

		this.adInstance.onError((err) => {
			console.error('onError event emit', err);
			this.delayPlay()
		});

		this.adInstance.onClose((res) => {
			console.log('onClose event emit', res);

			this.delayPlay()
			if (typeof this.closeHandler === 'function') this.closeHandler(res)
		});
	}


	play() {
		// 非暂停状态
		this.isPause = false;

		// 显示弹窗
		this.adInstance.show().catch(err => {
			console.error(err);
			this.delayPlay()
		});

		this.counter++;
	}


	delayPlay(delay = this.intervalTime) {
		setTimeout(this.play.bind(this), 1000 * delay)
	}


	pause() {
		// 处于暂停状态
		this.isPause = true

		clearTimeout(this.timerId)
		this.timerId = null;
	}

	closeHandler = function() {}
}

export default InterstitialAd;
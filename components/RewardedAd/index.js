/**
 * 使用方式：
 * 1.仅能在微信平台和抖音平台和快手平台使用该激励广告。
 * 2.引入
 * 在页面引入组件
 * 	import RewardedAd from '@/components/RewardedAd/index.js'
 * 3.创建激励广告（onload中）
 * RewardedAd= new RewardedAd(RewardedAdUnitId,customRewardUser);
 * 参数说明：
 * RewardedAdUnitId：激励广告的广告位
 * customRewardUser：用户观看完广告后的回调函数
 * 注意：请在页面加载完成前完成创建
 * 4.调用激励广告
 * rewardedAd.init()
 * 请根据小程序需要调用激励广告
 * 5.销毁广告
 * 在页面关闭的时候，请调用destroyAllAd方法销毁广告，QQ平台是页面全局单例，无需销毁
 * RewardedAd.destroyAllAd()
 */
// 激励广告
class RewardedAd {
	// 激励广告的实例
	adRewarded = null;
	// 打开平台是否正确
	createSuccess = true;
	// 广告单元的 ID
	adUnitId = '';
	// 激励广告的回调函数
	rewardCallback;
	// 快手激励广告的type
	type = 100011056;
	// 构造器
	constructor(RewardedAdUnitId, rewardCallback) {
		this.adUnitId = RewardedAdUnitId;
		this.rewardCallback = rewardCallback;
		// 根据不同平台创建相应的激励广告实例
		// #ifdef MP-WEIXIN
		this.createAd()
		// #endif
		// #ifdef MP-TOUTIAO
		this.createAd()
		// #endif
		// #ifdef MP-KUAISHOU
		this.createAd()
		// #endif
		// #ifdef MP-QQ
		this.createAd()
		// #endif
		
		// 不是抖音和微信和快手和QQ弹出错误
		// #ifndef MP-QQ
		// #ifndef MP-KUAISHOU
		// #ifndef MP-WEIXIN
		// #ifndef MP-TOUTIAO
		this.createSuccess = false;
		console.error('暂不支持此小程序');
		// #endif
		// #endif
		// #endif
		// #endif
	}

	// 检察是否是正确平台
	_check() {
		if (!this.createSuccess) {
			throw new Error('请检查是否引入了广告模块');
			return
		}
	}
	// 创建微信小程序的激励视频广告实例
	createAd(adUnitId = this.adUnitId, type = this.type) {
		this._check();
		// eslint-disable-next-line no-undef
		
		// #ifdef MP-WEIXIN
		this.adRewarded = wx.createRewardedVideoAd({
			adUnitId
		})
		// #endif
		
		// #ifdef MP-TOUTIAO
		this.adRewarded = tt.createRewardedVideoAd({
			adUnitId
		})
		// #endif

		// #ifdef MP-KUAISHOU
		this.adRewarded = ks.createRewardedVideoAd({
			unitId: Number(adUnitId),
			type
		})
		// #endif
		
		// #ifdef MP-QQ
		this.adRewarded = qq.createRewardedVideoAd({
			adUnitId
		})
		// #endif
		
		this.adRewarded.onError((err) => {
			console.log('onError event emit', err);
		});
	}

	// 绑定广告实例的事件处理器
	init() {
		// 展示广告
		this.showRewardedAd();
		// 关闭广告
		this.adRewarded.onClose((res) => {
			// 观看完广告，可以发放奖励
			if (res && res.isEnded || res === undefined) {
				if (typeof this.rewardCallback === 'function') {
					// 发放奖励
					this.rewardCallback();
					// 清除关闭事件
					this.adRewarded.offClose()
				}
			} else {
				// 广告未正常结束的处理逻辑
				console.log('广告未正常结束', res);
				// 清除关闭事件
				this.adRewarded.offClose()
			}
		})

	}
	// 展示激励视频广告
	showRewardedAd() {
		if (this.adRewarded) {
			// 加载并展示激励视频广告
			this.adRewarded.show()
				.then(() => {
					console.log('激励视频广告展示成功');
				})
				.catch((err) => {
					console.error('激励视频广告展示失败', err);
				});

		} else {
			console.error('广告实例未初始化');
			return;
		}
	}

	// 关闭页面时销毁激励广告和插屏广告,QQ平台是全局单例，无需销毁
	destroyAllAd() {
		// #ifndef MP-QQ
		// 激励广告
		if (this.adRewarded) {
			// 销毁广告
			this.adRewarded.destroy()
			// 销毁广告实例
			this.adRewarded = null;
		}
		// #endif

	}


}

export default RewardedAd;
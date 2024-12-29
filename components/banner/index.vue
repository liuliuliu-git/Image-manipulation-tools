<!-- 使用方式：
1.引入组件：
将组件文件引入在项目的组件目录中，例如@/components/banner/index.vue。
2.在页面中使用：
在需要展示广告的页面的<template>标签中，引入并使用<banner>组件。
3.传递参数：
通过props传递adUnitId和adTimer参数到组件中。
参数说明：
adUnitId：广告位id
adTimer：广告刷新时间
例:	<banner adUnitId="adunit-6aa1c2c13fc02c6a" ad-timer="30"></banner> 
注意，快手平台无ad-timer，请做条件编译，快手平台不传ad-timer，不然会报错
4.注意事项：
仅能在微信平台和快手平台和QQ平台使用该banner组件。(快手没有) -->
<template>
	<view class="banner-ad-bg">
		<view class="banner-ad-view">
			<!--#ifdef MP-WEIXIN-->
			<ad :unit-id="adUnitId" @error="onerror" @load="onload" :ad-intervals="adTimer" v-if="!error"></ad>
			<!--#endif-->
			<!--#ifdef MP-QQ-->
			<ad :unit-id="adUnitId" @error="onerror" @load="onload" :ad-height="160" v-if="!error"></ad>
			<!--#endif-->
			<!-- #ifdef MP-TOUTIAO -->
			<ad :unit-id="adUnitId" @error="onerror" @load="onload" :ad-height="160" v-if="!error" ></ad>
			<!--#endif-->
			<!--#ifdef MP-KUAISHOU-->
			<ad :unit-id="adUnitId" @error="onerror" :type="100033797" v-if="!error"></ad>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				error: false
			};
		},
		props: {
			adUnitId: {
				type: String,
				default: 'adunit-6aa1c2c13fc02c6a'
			},
			// 广告刷新时间
			adTimer: {
				type: Number,
				default: 60
			}
		},
		methods: {

			onload(e) {
				console.log("广告加载成功");
				this.error = false
			},
			onclose(e) {
				console.log("关闭广告 ");
			},
			onerror(e) {
				console.log("广告加载失败 ");
				this.error = true
			},
		},
		onReady() {}
	}
</script>

<style>
	.banner-ad-bg {
		padding: 20rpx;
		width: 90%;
	}

	.banner-ad-view {
		min-width: 600rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		position: relative;
	}
</style>
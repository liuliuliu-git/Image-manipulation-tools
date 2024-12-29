<!-- 关于页面  pages/about/about -->
<template>
	<view class="app-container">
		<!-- 广告位 -->
		<!-- 除抖音和快手 -->
		<!--#ifdef MP-WEIXIN -->
		<banner :ad-unit-id="getId" ad-timer="30" v-if="getId!=''"></banner>
		<!-- #endif -->
		<!--#ifdef MP-QQ -->
		<banner :ad-unit-id="getId" v-if="getId!=''"></banner>
		<!-- #endif -->
		<!--#ifdef MP-TOUTIAO -->
		<banner :ad-unit-id="getId" v-if="getId!=''"></banner>
		<!-- #endif -->
		<!--#ifdef MP-KUAISHOU -->
		<banner :ad-unit-id="getId" v-if="getId!=''"></banner>
		<!-- #endif -->
		<view class="about-list w100">
			<view class="about-item flex-jc_between flex-ai_center"
				@click="navTo('/pages/sub-about/copyRight/copyRight')"
				style="display: flex;justify-content: space-between;">
				<view>版权说明</view>
				<u-icon name="arrow-right" color="#a8a8a8" size="20"></u-icon>
			</view>
			<view class="about-item flex-jc_between flex-ai_center"
				@click="navTo('/pages/sub-about/developers/developers')"
				style="display: flex;justify-content: space-between;">
				<view>开发者介绍</view>
				<u-icon name="arrow-right" color="#a8a8a8" size="20"></u-icon>
			</view>
			<view class="about-item flex-jc_between flex-ai_center"
				@click="navTo('/pages/sub-about/disclaimer/disclaimer')"
				style="display: flex;justify-content: space-between;">
				<view>免责声明</view>
				<u-icon name="arrow-right" color="#a8a8a8" size="20"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {};
		},
		methods: {
			navTo(url) {
				uni.navigateTo({
					url
				})
			},

		},
		components: {
			banner
		},
		computed: {
			getId() {
				return this.$store.state.bannerId ? this.$store.state.bannerId : ""
			},
		},
		//  #ifdef MP-QQ
		onShareAppMessage: function() {
			qq.showShareMenu({
				showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
			})
		},
		// #endif
	}
</script>

<style lang="scss">
	.app-container {
		padding: 20rpx;


	}

	.about-list {
		.about-item {
			padding: 20rpx;

			&:nth-last-child(n+2) {
				border-bottom: 2rpx solid #f8f8f8;
			}
		}
	}
</style>
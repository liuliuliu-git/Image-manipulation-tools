<!-- 版权页面  pages/sub-about/copyRight -->
<template>
	<view class="app-container">
		<!-- 广告 -->
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
		<view>客服联系方式：luobr63@gamil.com</view>
		<view>ICP备案号：闽ICP备2023013305号-1</view>
		<view>福州佚名良品贸易有限公司 版权所有</view>
	</view>
</template>

<script>
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {};
		},
		methods: {

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
		width: 100%;
		color: gray;
		text-align: center;
	}
</style>
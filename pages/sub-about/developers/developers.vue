<!-- 开发者页面  pages/sub-about/developers/developers -->
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
		<view class="dev-list w100">
			<view class="dev-item" v-for="devName in developers">
				<u-icon name="account" size="25"></u-icon>
				<text>{{devName}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {};
		},
		computed: {
			...mapState(["developers"]),
			getId() {
				return this.$store.state.bannerId ? this.$store.state.bannerId : ""
			},
		},
		methods: {

		},
		components: {
			banner
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

<style lang="scss" scoped>
	.dev-list {
		margin-top: 20px;
		margin-left: 10px;

		.dev-item {
			display: flex;
			margin-bottom: 20px;
		}

	}
</style>
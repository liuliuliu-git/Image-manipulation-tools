<!-- 免责声明页面  pages/sub-about/disclaimer/disclaimer-->
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
		<view class="h1">小程序免责声明</view>

		<view class="h2">尊敬的用户：</view>

		<view>欢迎使用转盘小游戏！在您开始使用本小程序前，请仔细阅读以下免责声明。一旦您开始使用本小程序，即表示您已同意本声明的所有条款。</view>

		<view>
			<b>1.数据安全与隐私：</b>
			我们尊重并保护用户的个人隐私。使用本小程序时，您同意我们按照隐私政策收集、使用及披露您的个人信息。我们建议您详细阅读并理解我们的隐私政策。
		</view>

		<view>
			<b>2.第三方链接与内容：</b>
			本小程序可能包含指向第三方网站或资源的链接。我们对这些第三方的内容、隐私政策或行为不承担任何责任。请您自行判断并承担访问第三方链接的风险。
		</view>

		<view>
			<b>3.免责声明：</b>
			本小程序按“现状”及“可用”基础提供，不提供任何形式的明示或暗示保证，包括但不限于对适销性、特定用途的适用性或不侵权的保证。在任何情况下，对于因使用或无法使用本小程序而引起的任何直接、间接、特殊、附带或后果性损失，包括但不限于利润损失、数据丢失、业务中断等，我们及我们的合作伙伴均不承担责任。
		</view>

		<view><b>4.修改权：</b>我们保留随时修改本免责声明的权利，任何修改将在小程序内公布后立即生效。继续使用本小程序即视为接受修改后的条款。</view>

		<view style="margin-toview: 20rviewx;">请在充分理解上述条款后使用本小程序。如果您不同意本免责声明的任何部分，您应立即停止使用本小程序。</view>

		<view style="margin-toview: 20rviewx;">请根据实际情况调整上述模板内容，特别是服务范围、数据安全政策、适用法律管辖区域等关键信息。</view>
	</view>
</template>

<script>
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {};
		},
		methods: {
			//  #ifdef MP-QQ
			onShareAppMessage: function() {
				qq.showShareMenu({
					showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
				})
			}
			// #endif
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
	.h1 {
		font-size: 48rpx;
		font-weight: bold;
	}

	.h2 {
		font-size: 40rpx;
	}
</style>
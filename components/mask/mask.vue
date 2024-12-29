<template>
	<view class="content">
		<!-- 选择图片后的等待 -->
		<u-overlay :show="maskShow" style="position: relative;">
			<view class="line-progress-container">
				<view class="" style="text-align: center; margin-top: 30rpx;">
					<!-- 百分比显示 -->
					处理图片中,请稍等
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<view class="" style="margin-top: 20rpx;">
					<u-line-progress active-color="#19be6b" :percentage="progressPercent" :showText="true"
						class="line-progress"></u-line-progress>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP-KUAISHOU -->
				<view class="" style="margin-top: 50rpx;">
					<u-line-progress active-color="#19be6b" :percentage="progressPercent" :showText="true"
						class="line-progress"></u-line-progress>
				</view>
				<!-- #endif -->
				<!-- #ifdef MP-QQ -->
				<view class="progress-box" style="margin-top: 20rpx;">
					<progress :percent="progressPercent" show-info stroke-width="4" activeColor='#19be6b' />
				</view>
				<!-- #endif -->
			</view>
		</u-overlay>
	</view>

</template>

<script>
	export default {
		name: 'mask',
		props: {
			maskShow: {
				type: Boolean,
				default: false
			},
			progressPercent: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			}
		},
		methods: {


		},
		onReady() {

		}
	}
</script>
<style lang="scss" scoped>
	.content {
		position: relative;
		width: 100%;
		height: 180rpx;

		.line-progress-container {
			width: 70%;
			height: 150rpx;
			box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
			z-index: 10071;
			background-color: white;
			border-radius: 20rpx;
			padding: 0 30rpx;

			.line-progress {
				margin-top: 30rpx;
				width: 60%;
				position: absolute;
				top: 30%;
				left: 50%;
				transform: translateY(-50%) translateX(-50%);
				// #ifdef MP-KUAISHOU
				margin-top: 60rpx;
				// #endif 
			}

		}
	}
</style>
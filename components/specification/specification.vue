<template>
	<view class="content" @click="toSizeModify">
		<view class="single-sizeContainer">
			<view class="single-title" v-if="sizeList.imageName=='点击自定义'">
				点击自定义
			</view>
			<view class="single-title" v-else>
				{{sizeList.imageName}}
			</view>
			<view class="single-decoration">
				<view class="fontClass">
					<view>
						像素:
					</view>
					<view v-if="sizeList.imageName=='点击自定义'">
						自定义
					</view>
					<view v-else>
						{{sizeList.widthpx}}*{{sizeList.heightpx}}&nbsp;px
					</view>
				</view>
				<view class=""
					style="background-color: #b7b7b7; width: 1px; height: 28rpx;margin-left: 15rpx;margin-top: 5rpx;">
				</view>
				<view class="fontClass">
					<view>
						冲印:
					</view>
					<view v-if="sizeList.imageName=='点击自定义'">
						自定义
					</view>
					<view v-else>
						{{sizeList.width}}*{{sizeList.height}}&nbsp;mm
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		verifyImage
	}
	from '@/api/tools.js'
	export default {
		name: 'specification',
		props: {
			sizeList: {
				type: Object,
				default: () => {
					return {
						imageName: '点击自定义',
						widthpx: '自定义',
						heightpx: '自定义',
						width: '自定义',
						height: '自定义',
					};
				},
			}

		},
		data() {
			return {
				imgUrl: '',
				maskShow: true,
				progressPercent: 0,
			}
		},
		methods: {
			// 跳转到修改照片尺寸界面并携带一张图片
			toSizeModify() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						let img = res.tempFilePaths[0]
						//  #ifdef MP-TOUTIAO
						verifyImage(this.$store.state.ttAppid, img, this.$store.state
							.clientType).then(res => {
							if (!res) {
								this.maskShow = true
								const interval = setInterval(() => {
									if (this.progressPercent >= 130) {
										clearInterval(interval);
										this.maskShow = false
										this.progressPercent = 0
										this.imgUrl = img
										uni.navigateTo({
											url: '/pages/sub-modify/modifySize/modifySize?imgUrl=' +
												this.imgUrl +
												'&sizeList=' +
												JSON.stringify(
													this
													.sizeList)
										});
									}
									this.progressPercent += 1;
									this.$emit('transmit', this
										.maskShow, this
										.progressPercent)
								}, 30);

							} else {
								uni.showToast({
									title: '图片存在风险,请重新上传',
									duration: 2000,
									icon: "fail"
								});
							}
						}).catch(err => {
							console.log(err);
						})

						// #endif
						//  #ifdef MP-QQ
						verifyImage(this.$store.state.qqAppid, img, this.$store.state
							.clientType).then(res => {
							if (!res) {
								this.maskShow = true
								const interval = setInterval(() => {
									if (this.progressPercent >= 130) {
										clearInterval(interval);
										this.maskShow = false
										this.progressPercent = 0
										this.imgUrl = img
										uni.navigateTo({
											url: '/pages/sub-modify/modifySize/modifySize?imgUrl=' +
												this.imgUrl +
												'&sizeList=' +
												JSON.stringify(
													this
													.sizeList)
										});
									}
									this.progressPercent += 1;
									this.$emit('transmit', this
										.maskShow, this
										.progressPercent)
								}, 30);

							} else {
								uni.showToast({
									title: '图片存在风险,请重新上传',
									duration: 2000,
									icon: "fail"
								});
							}
						}).catch(err => {
							console.log(err);
						})
						// #endif
						// #ifdef MP-WEIXIN || MP-KUAISHOU
						this.maskShow = true
						const interval = setInterval(() => {
							if (this.progressPercent >= 130) {
								clearInterval(interval);
								this.maskShow = false
								this.progressPercent = 0
								this.imgUrl = res.tempFilePaths[0]
								uni.navigateTo({
									url: '/pages/sub-modify/modifySize/modifySize?imgUrl=' +
										this.imgUrl + '&sizeList=' + JSON.stringify(this
											.sizeList)
								});
							}
							this.progressPercent += 1;
							this.$emit('transmit', this.maskShow, this.progressPercent)

						}, 30);
						// #endif


					}
				})
			}
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

		.single-sizeContainer {
			width: 100%;
			height: 140rpx;
			box-shadow: 0 32rpx 100rpx rgba(79, 79, 79, 0.1);
			border-radius: 30rpx;

			.single-title {
				padding: 20rpx 0 20rpx 40rpx;
				font-size: 30rpx;
			}

			.single-decoration {
				padding-left: 20rpx;
				display: flex;

				.fontClass {
					display: flex;
					margin-left: 20rpx;
					color: #b7b7b7;
					font-size: 24rpx;
				}
			}
		}

		.line-progress-container {
			width: 90%;
			height: 150rpx;
			box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
			z-index: 10071;
			background-color: white;

			.line-progress {
				width: 90%;
				position: absolute;
				top: 67%;
				left: 50%;
				transform: translateY(-50%) translateX(-50%);
			}

		}
	}
</style>
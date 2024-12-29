<template>
	<view class="content">
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
		<view class="photo-container">
			<!-- 没有上传文件 -->
			<view class="photo-null" v-if="imageUrls==''">
				<view class="photoNull" :style="{ 'background-image': 'url(' + fullImageUrl + ')' }">
				</view>
				<text>请选择图片</text>
				<text>支持批量修改</text>
			</view>
			<!-- 上传了一张图片 -->
			<view class="photo-single-allContainer" v-else-if="imageUrls.length==1">
				<image :src="imageUrls" class="photo-single"></image>
				<!-- 图片尺寸区 -->
				<view class="photo-parameter">
					<view class="">
						大小:{{allContent[0].size}}kb
					</view>
					<view class="">
						宽高:{{allContent[0].width}}*{{allContent[0].height}}
					</view>
				</view>
			</view>
			<!-- 上传了多张图片 -->
			<view class="photo-multiple-allContainer" v-else>
				<scroll-view scroll-y class='scroll-view'>
					<view class="photo-multiple-singleContainer" v-for="(item,index) in allContent" :key="index">
						<view class="photo-multiple-previewContainer">
							<image :src="item.url" style="width: 200rpx;
							height: 200rpx;">
							</image>
						</view>
						<view class="photo-multiple-parameterContainer">
							<view class="">
								分辨率:{{item.width}}*{{item.height}}
							</view>
							<view class="">
								大小:{{item.size}}kb
							</view>
						</view>

					</view>
				</scroll-view>

			</view>
		</view>
		<view class="modifyDpi-container ">
			<view class="dpi-line">
				<view style="margin-left: 8px; margin-top: 25px; white-space: nowrap;">
					分辩率dpi
				</view>
				<view class="slide-dpi">
					<view style="display: flex; width: inherit;width: 500rpx;">
						<slider value="150" block-color="#ffffff" block-size="15" min="0" max="300" show-value
							style="width: 500rpx;" activeColor='#2979ff' @change="change" />
					</view>
				</view>
			</view>
		</view>
		<view class="button-container">
			<view class="" style="width: 47%;">
				<u-button shape="circle" @click="ChooseImage" class="choose" :plain="true"
					type="primary">选择图片</u-button>
			</view>
			<view class="" style="width: 47%;">
				<u-button shape="circle" @click="ModifyImage" type="primary">开始修改</u-button>
			</view>
		</view>
		<view>
			<u-modal :show="modalShow" :title="title" :content='content' showCancelButton @cancel="this.modalShow=false"
				@confirm="confirm">
				<view class="slot-content" style="padding-left: 20rpx;padding-top: 10rpx;">
					<rich-text :nodes="content" class="rich-text"></rich-text>
				</view>
			</u-modal>
		</view>
		<!-- 遮罩层 -->
		<mask :mask-show="maskShow" :progress-percent="progressPercent" v-if="maskShow"></mask>
		<!-- #ifdef MP-TOUTIAO -->
		<view class="line-progress-container" v-if="maskShow">
			<view class="" style="text-align: center; margin-top: 30rpx;">
				<!-- 百分比显示 -->
				处理图片中,请稍等
			</view>
			<view class="progress-box" style="margin-top: 20rpx;">
				<progress :percent="progressPercent" show-info stroke-width="4" activeColor='#19be6b' />
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		putDpi,
		postImage,
		deleteImage
	} from '@/api/compress.js'
	import mask from '@/components/mask/mask.vue'
	import {
		verifyImage
	} from '@/api/tools.js'
	import RewardedAd from '@/components/RewardedAd/index.js';
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {
				imgUrl: "/profile/upload/2024/07/30/19b1f20c48a944e2adf12324a7e2d1d0_20240730140402A013.png",
				// 图片数组
				imageUrls: [],
				// dpi初始值
				dpi: 150,
				// dpi最大值
				max_input: 300,
				// 控制遮罩层的出现
				maskShow: false,
				// 总数组
				allContent: [],
				// 控制模态框的出现
				modalShow: false,
				// 模态框的头部
				title: '修改dpi',
				// 模态框的内容
				content: '观看广告，解锁功能',
				//第一次返回的结果
				outcome: [],
				// 第二次返回的结果
				result: [],
				loading: true,
				progressPercent: 0,
				// 激励广告实例
				rewardAd: null,

			}
		},
		components: {
			mask,
			banner
		},
		onLoad() {
			this.rewardAd = new RewardedAd(this.getJli, this.customRewardUser);
		},
		computed: {
			getId() {
				return this.$store.state.bannerId ? this.$store.state.bannerId : ""
			},
			getJli() {
				return this.$store.state.jLiId ? this.$store.state.jLiId : ""
			},
			fullImageUrl() {
				return this.$store.state.baseUrl + this.imgUrl;
			}
		},
		//  #ifdef MP-QQ
		onShareAppMessage: function() {
			qq.showShareMenu({
				showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
			})
		},
		// #endif
		methods: {
			change(e) {
				this.dpi = e.detail.value
			},
			// 选择图片
			ChooseImage() {
				this.imageUrls = [];
				this.allContent = [];
				uni.chooseImage({
					count: 5,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: async (res) => {
						let img = res.tempFilePaths
						this.imageUrls = img
						//  #ifdef MP-TOUTIAO
						for (let i = 0; i < res.tempFilePaths.length; i++) {
							await verifyImage(this.$store.state.ttAppid, res.tempFilePaths[i], this.$store
								.state
								.clientType).then(res => {
								if (!res) {
									return;
								} else {
									this.imageUrls.splice(i, 1)
									uni.showToast({
										title: '图片存在风险,请重新上传',
										duration: 2000,
										icon: "fail"
									});
								}
							}).catch(err => {
								console.log(err);
							})
						}
						this.maskShow = true;
						const interval = setInterval(() => {
							if (this.progressPercent >=
								130) {
								clearInterval(interval);
								this.maskShow = false
								this.progressPercent = 0
							}
							this.progressPercent += 1;
						}, 20);
						let promises = this.imageUrls.map(url =>
							this.getImageInfo(url));
						Promise.all(promises).then(results => {
							this.allContent = results;
						});
						// #endif
						//  #ifdef MP-QQ
						for (let i = 0; i < res.tempFilePaths.length; i++) {
							await verifyImage(this.$store.state.qqAppid, res.tempFilePaths[i], this.$store
								.state
								.clientType).then(res => {
								if (!res) {
									return;
								} else {
									this.imageUrls.splice(i, 1)
									uni.showToast({
										title: '图片存在风险,请重新上传',
										duration: 2000,
										icon: "fail"
									});
								}
							}).catch(err => {
								console.log(err);
							})
						}
						this.maskShow = true;
						const interval = setInterval(() => {
							if (this.progressPercent >=
								130) {
								clearInterval(interval);
								this.maskShow = false
								this.progressPercent = 0
							}
							this.progressPercent += 1;
						}, 20);
						let promises = this.imageUrls.map(url =>
							this.getImageInfo(url));
						Promise.all(promises).then(results => {
							this.allContent = results;
						});
						// #endif
						// #ifdef MP-WEIXIN || MP-KUAISHOU
						this.maskShow = true;
						this.imageUrls = res.tempFilePaths;
						const interval = setInterval(() => {
							if (this.progressPercent >= 130) {
								clearInterval(interval);
								this.maskShow = false
								this.progressPercent = 0
							}
							this.progressPercent += 1;
						}, 20);
						let promises = this.imageUrls.map(url => this.getImageInfo(url));
						Promise.all(promises).then(results => {
							this.allContent = results;
						});
						// #endif
					},
				});
			},
			// 开始修改
			async uploadImages(imageUrls) {
				let arr = [];
				uni.showLoading({
					title: '上传中'
				});
				for (let i = 0; i < imageUrls.length; i++) {
					try {
						const res = await uni.uploadFile({
							url: this.$store.state.baseUrl + '/ms111/compress/ms111/postImage',
							filePath: imageUrls[i],
							name: 'multipartFiles',
							formData: {
								"width": this.allContent[i].width,
								"height": this.allContent[i].height
							}
						});
						if (res.statusCode == 200) {
							let file = {
								fileImage: JSON.parse(res.data).msg,
								heightpx: this.allContent[i].height,
								widthpx: this.allContent[i].width
							}
							arr.push(file);
						}
					} catch (err) {
						console.log('上传失败:', err);
					}
				}
				uni.hideLoading()
				return arr;
			},
			// 点击开始修改
			ModifyImage() {
				this.modalShow = true;
			},
			getImageInfo(url) {
				return new Promise((resolve, reject) => {
					let imageInfo = {
						url: url,
						size: 0,
						width: 0,
						height: 0,
					};
					uni.getFileInfo({
						filePath: url,
						success: (fileRes) => {
							imageInfo.size = Math.ceil((fileRes.size / 1024) * 10) / 10;
							uni.getImageInfo({
								src: url,
								success: (imageRes) => {
									imageInfo.width = imageRes.width;
									imageInfo.height = imageRes.height;
									resolve(imageInfo);
								},
								fail: (error) => {
									reject(error);
								}
							});
						},
						fail: (error) => {
							reject(error);
						}
					});
				});

			},
			// 消息提示事件
			confirm() {
				if (this.imageUrls == '') {
					uni.showToast({
						title: '请先选择图片',
						icon: 'error',
						duration: 2000
					})
				} else {
					this.rewardAd.init()
				}
				this.modalShow = false
			},
			// 修改dpi
			putDpiApi(dpi) {
				putDpi(dpi).then((res) => {
						if (res.code == 200) {
							this.result = res.data
							for (let i = 0; i < this.result.length; i++) {
								uni.downloadFile({
									url: this.$store.state.baseUrl + this.result[i],
									success: (res) => {
										let imgUrl = res.tempFilePath
										if (res.statusCode == 200) {
											this.getSet(imgUrl, this.result[i])
										}
									},
									fail: (err) => {
										console.log(err);
									}
								})
							}

						}
					})
					.catch((err) => {
						console.log(err);
					});
				// 删除修改后数组
				this.result = []
			},
			// 删除图片
			deleteImageApi(filePath) {
				deleteImage(
					filePath
				).then(res => {}).catch((err => {
					console.log(err, 111);
				}))
			},
			saveImage(url, filePath) {
				uni.saveImageToPhotosAlbum({
					//图片路径，不支持网络图片路径
					filePath: url,
					success: (res) => {
						this.deleteImageApi(filePath)
						uni.hideLoading();
						return uni.showToast({
							title: "保存成功！",
							duration: 2000
						});
					},
					fail: (res) => {
						console.log(res.errMsg);
						return uni.showToast({
							title: "请重新保存",
							icon: "error",
							duration: 2000
						});
					},
					complete: (res) => {
						uni.hideLoading();
					},
				});
			},

			getSet(imgUrl, filePath) {
				uni.getSetting({
					success: (res) => {
						//  #ifndef MP-TOUTIAO
						if (!res.authSetting[
								"scope.writePhotosAlbum"]) {
							//向用户发起授权请求
							uni.authorize({
								scope: "scope.writePhotosAlbum",
								success: () => {
									this.saveImage(
										imgUrl,
										filePath)
								},
								//授权失败
								fail: () => {
									uni.hideLoading();
									uni.showModal({
										title: "您已拒绝获取相册权限",
										content: "是否进入权限管理，调整授权？",
										success: (
											res
										) => {
											if (res.confirm) {
												//调起客户端小程序设置界面，返回用户设置的操作结果。（重新让用户授权）
												uni.openSetting({
													success: (
														res
													) => {
														console
															.log(
																res
																.authSetting
															);
													},
												});
											} else if (
												res
												.cancel
											) {
												return uni
													.showToast({
														title: "已取消！",
														icon: "error",
														duration: 2000
													});
											}
										},
									});
								},
							});

						}
						// #endif
						// #ifdef MP-TOUTIAO
						if (!res.authSetting[
								"scope.album"]) {
							//向用户发起授权请求
							uni.authorize({
								scope: "scope.album",
								success: () => {
									this.saveImage(imgUrl, filePath)
								},
								//授权失败
								fail: () => {
									uni.hideLoading();
									uni.showModal({
										title: "您已拒绝获取相册权限",
										content: "是否进入权限管理，调整授权？",
										success: (res) => {
											if (res.confirm) {
												//调起客户端小程序设置界面，返回用户设置的操作结果。（重新让用户授权）
												uni.openSetting({
													success: (
														res
													) => {
														console
															.log(
																res
																.authSetting
															);
													},
												});
											} else if (
												res.cancel
											) {
												return uni.showToast({
													title: "已取消！",
													icon: "error",
													duration: 2000
												});
											}
										},
									});
								},
							});
						}
						// #endif
						// 存在授权
						else {
							this.saveImage(imgUrl,
								filePath)
						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			async customRewardUser() {
				this.outcome = await this.uploadImages(this.imageUrls);
				this.putDpiApi(JSON.stringify({
					'dpi': this.dpi,
					"files": this.outcome
				}));
				uni.showLoading({
					title: '正在保存图片...'
				});
				this.outcome = []
			}

		},
		onUnload() {
			//#ifndef MP-QQ
			this.rewardAd.destroyAllAd();
			// #endif

		}

	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #F8F8F8;
		height: 100vh;

		// 开始图片预览
		.photo-container {
			width: 95%;
			height: 600rpx;
			margin-bottom: 40px;
			box-shadow: 1rpx 32rpx 100rpx 20rpx rgba(79, 79, 79, 0.1);
			border-radius: 30rpx;
			position: relative;
			top: -60rpx;
			// #ifdef MP-KUAISHOU
			margin-bottom: 0;
			// #endif

			.photo-null {
				width: 300rpx;
				height: 500rpx;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

			}

			// 一张图片时的容器
			.photo-single-allContainer {
				width: 100%;
				height: 600rpx;
				position: relative;
				z-index: 999;

				.photo-single {
					width: 300rpx;
					height: 450rpx;
					position: absolute;
					top: 45%;
					left: 50%;
					transform: translateX(-50%) translateY(-50%);
				}

				.photo-parameter {
					width: 100%;
					height: 80rpx;
					background-color: #909399;
					position: absolute;
					bottom: 0;
					color: white;
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					border-radius: 30rpx;
				}
			}

			// 多张图片时的容器
			.photo-multiple-allContainer {
				width: 100%;
				height: 600rpx;
				position: relative;

				.scroll-view {
					width: 100%;
					height: 600rpx;
					display: flex;
					white-space: nowrap;
					position: relative;


					// 多张图片中的每个容器
					.photo-multiple-singleContainer {
						width: 100%;
						height: 200rpx;
						// 横向的滑动框才需要
						// display: inline-block;
						position: relative;
						box-shadow: 0 16px 50px rgba(79, 79, 79, 0.1);
						margin-bottom: 40rpx;
						border-radius: 0 40rpx 40rpx 0;

						.photo-multiple-previewContainer {
							width: 200rpx;
							height: 200rpx;
						}

						.photo-multiple-parameterContainer {

							color: #909399;
							width: 300rpx;
							position: absolute;
							top: 50%;
							transform: translateY(-50%) translateX(-50%);
							right: 0%;
							// #ifdef MP-KUAISHOU
							right: -250%;
							// #endif
						}
					}
				}

			}

		}

		.modifyDpi-container {
			width: 95%;
			height: 150rpx;
			box-shadow: 0 16px 50px rgba(79, 79, 79, 0.1);
			border-radius: 30rpx;
			margin-bottom: 40rpx;

			.dpi-line {
				display: flex;
				justify-content: space-between;
				margin-right: 150rpx;
				margin-bottom: 40rpx;

				.slide-dpi {
					margin-top: 35rpx;
					width: 400rpx;
					position: relative;
				}
			}
		}

		.button-container {
			width: 95%;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
		}
	}

	.photo {
		width: 200rpx;
		height: 200rpx;
	}

	::v-deep .u-modal__content {
		padding: 0;
	}

	.line-progress-container {
		width: 70%;
		height: 150rpx;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
		position: fixed;
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
			position: fixed;
			top: 30%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
		}

	}

	.rich-text {
		// #ifdef MP-TOUTIAO
		margin-bottom: 30rpx;
		// #endif 
		// #ifdef MP-KUAISHOU
		margin-bottom: 0;
		// #endif 
	}

	.photoNull {
		width: 100px;
		height: 100px;
		background-position: 0px 0px;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
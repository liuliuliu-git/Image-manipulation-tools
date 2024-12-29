<template>
	<view class="content">
		<!-- #ifndef MP-TOUTIAO -->
		<my-navbar :ad-unit-id="getId" class="navBar" v-if="getId!=''"></my-navbar>
		<!-- #endif -->
		<view style="height:88rpx; width: 94%;">
			<!-- #ifndef MP-TOUTIAO -->
			<text style="font-weight: bolder;">压缩图片尺寸修改</text>
			<view class="line">
			</view>
			<!-- #endif -->
		</view>
		<view class="photo-container">
			<!-- 没有上传图片 -->
			<view class="photo-null" v-if="imageUrls==''">
				<view class="photoNull" :style="{ 'background-image': 'url(' + fullImageUrl + ')' }">
				</view>
				<text style=" font-size: 22px;">可压缩图片</text>
				<text style="margin-top: 10px;color: darkgray;">支持批量压缩</text>
			</view>
			<!-- 上传了一张图片 -->
			<view class="photo-single-allContainer" v-else-if="imageUrls.length==1">
				<image :src="imageUrls" class="photo-single"></image>
				<!-- 图片尺寸区 -->
				<view class="photo-single-parameterContainer"
					style="display: flex; flex-direction: column;font-size: 24rpx;">
					<view class="photo-single-parameterBefore">
						<view class="before-size" style="">
							压缩前大小:{{allContent[0].size}}kb
						</view>
						<view class="before-dimension" style="">
							压缩前尺寸:{{allContent[0].width}}*{{allContent[0].height}}
						</view>
					</view>
					<view class="photo-single-parameterAfter">
						<view class="after-size" style="">
							压缩后预估:{{mergedContent[0].compressSize}}kb
						</view>
						<view class="after-dimension">
							压缩后尺寸:{{mergedContent[0].compressWidth}}* {{mergedContent[0].compressHeight}}
						</view>
					</view>
				</view>
			</view>
			<!-- 上传了多张图片 -->
			<view class="photo-multiple-allContainer" v-else>
				<scroll-view scroll-y class='scroll-view'>
					<view class="photo-multiple-singleContainer" v-for="(item,index) in mergedContent" :key="index">
						<view class="" style="position: relative;">
							<image :src="item.url" class="photo-multiple"></image>
						</view>
						<view class="beforeCompress">
							<view class="">
								压缩前:
							</view>
							<view class="">
								分辨率:{{item.width}}*{{item.height}}&nbsp;大小:{{item.size}}kb
							</view>
						</view>
						<view class="afterCompress">
							<view class="">
								压缩后预估:
							</view>
							<view class="">
								分辨率:{{item.compressWidth}}*{{item.compressHeight}}&nbsp;大小:{{item.compressSize}}kb
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<view class="remind">
			注意:压缩后大小可能与实际大小有所出入，请以实际压缩大小为准
		</view>
		<!-- 广告 -->
		<!-- 除抖音和快手 -->
		<!--#ifdef MP-WEIXIN -->
		<banner :ad-unit-id="getId" ad-timer="30" v-if="getId!=''"></banner>
		<!-- #endif -->
		<!--#ifdef MP-QQ -->
		<banner :ad-unit-id="getId" v-if="getId!=''"></banner>
		<!-- #endif -->
		<!--#ifdef MP-TOUTIAO -->
		<banner :ad-unit-id="getId"  v-if="getId!=''" ></banner>
		<!-- #endif -->
		<!--#ifdef MP-KUAISHOU -->
		<banner :ad-unit-id="getId" v-if="getId!=''"></banner>
		<!-- #endif -->
		<view class="slide-wrap">
			<!-- 第一行 -->
			<view class="first-line">
				<view style="margin-left: 20rpx;">
					压缩格式
				</view>
				<view class="format-container">
					<view :class="{'click':isClick == false,'unclick':isClick==true}" @click="jpgClick">
						jpg
					</view>
					<view :class="{'click':isClick == true,'unclick':isClick==false}" @click="pngClick">
						png
					</view>
				</view>
			</view>
			<view class="second-line">
				<view style="margin-left: 20rpx;margin-top: 12rpx;font-size: 30rpx;">
					图片质量
				</view>
				<view class="slide-quality">
					<view style="display: flex; width:inherit;">
						<u-slider v-model="quality"
							style="width: inherit; position: relative;top: 10rpx; margin-bottom: 4rpx;"
							@change='handleParameter' min='1'></u-slider>
						<view style="position: relative; top: 8px;right: -20px;color: gray;">
							{{quality}}
						</view>
					</view>
				</view>
			</view>
			<view class="third-line">
				<view style="margin-left: 20rpx;margin-top: 12rpx; font-size: 30rpx;margin-bottom: 20px;">
					尺寸大小
				</view>
				<view class="slide-dimensions">
					<view style="display: flex; width: inherit; ">
						<u-slider v-model="dimensions" class="dimensionSlide" @change='handleParameter'
							min='1'></u-slider>
						<view style="position: relative; top: 4px;right: -17px;color: gray;">
							{{dimensions}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="button-container">
			<view class="" style="width: 47%;">
				<u-button shape="circle" @click="ChooseImage" class="choose" text="选择图片" :plain="true"
					type="primary"></u-button>
			</view>
			<view class="" style="width: 47%;">
				<u-button type="primary" text="开始压缩" shape="circle" @click="Compress"></u-button>
			</view>
		</view>
		<!-- 开始压缩的模态框 -->
		<view>
			<u-modal :show="modalShow" :title="title" :content='content' showCancelButton @cancel="this.modalShow=false"
				@confirm="upload">
				<view class="slot-content" style="padding-left: 20rpx;padding-top: 20rpx;">
					<rich-text :nodes="content"></rich-text>
				</view>
			</u-modal>
		</view>
		<!-- 遮罩层 -->
		<mask :mask-show="maskShow" :progress-percent="progressPercent" v-if="maskShow"></mask>
		<ll-compress-img ref="llImg"></ll-compress-img>
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
	import myNavbar from '@/components/ms-navbar/index.vue'
	import mask from '@/components/mask/mask.vue'
	import {
		putQuality,
		postImage,
		deleteImage
	} from '@/api/compress.js'
	import {
		format
	} from 'util';
	import {
		verifyImage
	} from '@/api/tools.js'
	import banner from '@/components/banner/index.vue'
	import RewardedAd from '@/components/RewardedAd/index.js';
	export default {
		data() {
			return {
				imgUrl: "/profile/upload/2024/07/30/19b1f20c48a944e2adf12324a7e2d1d0_20240730140402A013.png",
				ctx: null,
				// 图片数组
				imageUrls: [],
				// 总的数组
				allContent: [],
				// 格式转化数组
				transformContent: [],
				// 质量初始值
				quality: 70,
				// 尺寸初始值
				dimensions: 100,
				// 控制模态框的出现
				modalShow: false,
				// 控制遮罩层的出现
				maskShow: false,
				// 模态框的内容
				content: '观看广告，解锁功能',
				format: 'jpg',
				isClick: false,
				title: '压缩图片',
				// 合并后的数组
				mergedContent: [],
				progressPercent: 0,
				//输出结果
				outcome: [],
				formatNew: 1,
				result: [],
				// 激励广告实例
				rewardAd: null,
			}
		},
		components: {
			mask,
			myNavbar,
			banner
		},
		async onLoad() {
			await this.$store.dispatch('getAdIds')
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
			// 跳转到首页压缩
			download() {
				uni.redirectTo({
					url: '/pages/index/index'
				})
			},
			// 跳转到图片修改
			cut() {
				uni.redirectTo({
					url: '/pages/modify/modify'
				})
			},
			chooseImageWithPermission() {
				uni.chooseImage({
					count: 5, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: async (res) => {
						let img = res.tempFilePaths
						this.imageUrls = img
						//  #ifdef MP-TOUTIAO
						for (let i = 0; i < res.tempFilePaths.length; i++) {
							await verifyImage(this.$store.state.ttAppid, res.tempFilePaths[i], this.$store
								.state
								.clientType).then(res => {
								if (!res) {
									return
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
							this.handleParameter()
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
							this.handleParameter()
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
							this.handleParameter()
						});
						// #endif
					},
					fail: (err) => {
						console.log(err);
					}
				});
			},
			// 选择图片
			ChooseImage() {
				//  #ifdef MP-QQ
				uni.getSetting({
					withSubscriptions: true,
					success: (res) => {
						const canChooseImage = res.authSetting?.['scope.chooseImage']
						if (canChooseImage) {
							this.chooseImageWithPermission()
						} else {
							uni.authorize({
								scope: 'chooseImage',
								success: this.chooseImageWithPermission,
								fail: (e) => {
									uni.showModal({
										title: '需要授权',
										content: '请同意授权',
										success: function(res) {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									});
								}
							})
						}
					}
				})
				// #endif
				// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-KUAISHOU
				this.chooseImageWithPermission()
				// #endif
			},
			async confirm() {
				this.modalShow = false;
				if (this.imageUrls == '') {
					uni.showToast({
						title: '请先选择图片',
						duration: 2000,
						icon: 'error'
					})
				} else {
					uni.showLoading({
						title: "上传中"
					})
					const uploadPromises = this.mergedContent.map((content, i) => {
						return new Promise((resolve, reject) => {
							uni.uploadFile({
								url: this.$store.state.baseUrl +
									'/ms111/compress/ms111/postImage',
								filePath: content.url,
								name: 'multipartFiles',
								formData: {
									"height": content.height,
									"width": content.width
								},
								success: (res) => {
									let url = JSON.parse(res.data).msg;
									let widthpx = JSON.stringify(this.mergedContent[i]
										.compressWidth);
									let heightpx = JSON.stringify(this.mergedContent[i]
										.compressHeight);
									let outObj = {
										file: url,
										widthpx,
										heightpx
									};
									this.outcome.push(outObj);
									if (this.format == 'jpg') {
										this.formatNew = 1;
									} else {
										this.formatNew = 2;
									}
									// #ifndef MP-TOUTIAO
									resolve();
									// #endif
									// #ifdef MP-TOUTIAO
									resolve();
									// #endif
								},
								fail: (err) => {
									console.log(err);
									reject(err);
								},
								complete: () => {
									uni.hideLoading()
								}
							});
						});
					});
					await Promise.all(uploadPromises);
				}
			},
			upload() {
				if (this.imageUrls.length == 0) {
					uni.showToast({
						title: '请先选择图片',
						icon: 'error',
						duration: 2000
					})
					this.modalShow = false
				} else {
					this.rewardAd.init()
				}
			},
			// 点击jpg格式
			jpgClick() {
				this.isClick = false
				this.format = 'jpg'
				if (this.allContent.length == 0) {
					uni.showToast({
						title: '请先选择图片',
						duration: 2000,
						icon: 'error'
					})
				} else {
					this.handleParameter()
				}
			},
			// 点击png格式
			pngClick() {
				this.isClick = true
				this.format = 'png'
				if (this.allContent.length == 0) {
					uni.showToast({
						title: '请先选择图片',
						duration: 2000,
						icon: 'error'
					})
					this.isClick = false
					this.format = 'jpg'
				} else {
					this.handleParameter()
				}
			},
			// 开始压缩
			Compress() {
				this.modalShow = true
			},
			// 获取图片信息
			getImageInfo(url) {
				return new Promise((resolve, reject) => {
					let imageInfo = {
						url: url,
						width: 0,
						height: 0,
					};
					uni.getFileInfo({
						filePath: url,
						success: (fileRes) => {
							// 图片大小
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
				return imageInfo;
			},
			// 修改压缩格式、图片质量、尺寸大小时获取压缩文件大小
			handleParameter() {
				// 选择图片时不会跳出等待
				if (this.maskShow == true) {

				} else {
					if (this.allContent.length != 0) {
						uni.showLoading({
							title: '重新计算信息中'
						});
					}
				}
				// #ifndef MP-MP-TOUTIAO
				// 每次调用前清空
				this.mergedContent = []
				// #endif
				//  #ifndef MP-KUAISHOU
				this.$refs.llImg.multiple_format_img(this.imageUrls, this.quality / 100, this.format, this.dimensions)
					.then(res => {
						this.transformContent = res
						for (let i = 0; i < this.allContent.length; i++) {
							uni.compressImage({
								src: this.transformContent[i],
								quality: this.quality,
								compressedWidth: this.allContent[i].width * (this.dimensions / 100),
								compressedHeight: this.allContent[i].height * (this.dimensions / 100),
								success: (res) => {
									uni.getFileInfo({
										filePath: res.tempFilePath,
										success: (fileRes) => {
											//  #ifdef MP-TOUTIAO
											// 每次调用前清空
											this.mergedContent = []
											// #endif
											let Content = {
												url: '',
												width: 0,
												height: 0,
												size: 0,
												compressWidth: 0,
												compressHeight: 0,
												compressSize: 0
											}
											Content.compressWidth = Math.ceil(this
												.allContent[i]
												.width * (this.dimensions / 100));
											Content.compressHeight = Math.ceil(this
												.allContent[i]
												.height * (this.dimensions / 100));
											Content.compressSize = Math.ceil((
												fileRes.size / 1024) * 10) / 10;
											Content.width = this.allContent[i].width
											Content.size = this.allContent[i].size
											Content.height = this.allContent[i].height
											Content.url = this.allContent[i].url
											this.mergedContent.push(Content);
										},
										fail: (err) => {
											console.log(err);
										}
									})
								},
								fail: (err) => {
									console.log(err);
								}
							})
						}
						uni.hideLoading();
					}).catch(err => {
						console.log(err);
					})
				// #endif
				//  #ifdef MP-KUAISHOU
				for (let i = 0; i < this.allContent.length; i++) {
					uni.compressImage({
						src: this.allContent[i].url,
						quality: this.quality,
						compressedWidth: this.allContent[i].width * (this.dimensions / 100),
						compressedHeight: this.allContent[i].height * (this.dimensions / 100),
						success: (res) => {
							uni.getFileInfo({
								filePath: res.tempFilePath,
								success: (fileRes) => {
									let Content = {
										url: '',
										width: 0,
										height: 0,
										size: 0,
										compressWidth: 0,
										compressHeight: 0,
										compressSize: 0
									}
									Content.compressWidth = Math.ceil(this
										.allContent[i]
										.width * (this.dimensions / 100));
									Content.compressHeight = Math.ceil(this
										.allContent[i]
										.height * (this.dimensions / 100));
									Content.compressSize = Math.ceil((
										fileRes.size / 1024) * 10) / 10;
									Content.width = this.allContent[i].width
									Content.size = this.allContent[i].size
									Content.height = this.allContent[i].height
									Content.url = this.allContent[i].url
									this.mergedContent.push(Content);
								},
								fail: (err) => {
									console.log(err);
								}
							})
						},
						fail: (err) => {
							console.log(err);
						}
					})
				}
				uni.hideLoading();
				// #endif

			},
			// 压缩图片
			putQualityApi(quality) {
				putQuality(quality).then(res => {
					console.log(res, 111);
					this.result = res.data
					for (let i = 0; i < this.result.length; i++) {
						uni.downloadFile({
							url:  this.$store.state.baseUrl + this.result[i],
							success: (res) => {
								console.log(res);
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
				}).catch(err => {
					console.log(err);
				})
				this.result = []
			},
			// 删除图片
			deleteImageApi(filePath) {
				deleteImage(filePath).then(res => {
					console.log(res);
				}).catch((err => {
					console.log(err, 111);
				}))
			},
			saveImage(url, filePath) {
				console.log(333);
				uni.saveImageToPhotosAlbum({
					//图片路径，不支持网络图片路径
					filePath: url,
					success: (res) => {
						console.log(res, "save");
						this.deleteImageApi(filePath)
						uni.hideLoading();
						uni.showToast({
							title: "保存成功！",
							duration: 2000
						});
					},
					fail: (res) => {

						console.log(res.errMsg);
						uni.showToast({
							title: "请重新保存",
							icon: 'error',
							duration: 2000
						});
					},
					complete: (res) => {
						console.log(res);
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
													success: (res) => {
														console.log(res
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
						// #ifdef MP-TOUTIAO
						console.log(res.authSetting);
						if (!res.authSetting[
								"scope.album"]) {
							//向用户发起授权请求
							uni.authorize({
								scope: "scope.album",
								success: () => {
									console.log(222);
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
													success: (res) => {
														console.log(res
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
							console.log(222);
							console.log(imgUrl, filePath);
							this.saveImage(imgUrl, filePath)
						}

					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			// 激励广告成功后调用的方法
			async customRewardUser() {
				await this.confirm();
				this.putQualityApi(JSON.stringify({
					"qualitySizes": this.outcome,
					"format": this.formatNew,
					"quality": this.quality / 100
				}));
				uni.showLoading({
					title: '正在保存图片...'
				});
				this.outcome = []
			},
		},
		onUnload() {
			//  #ifndef MP-QQ
			this.rewardAd.destroyAllAd();
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.line {
			background-color: #ABD6FC;
			height: 22rpx;
			border-radius: 22rpx;
			margin-left: 30rpx;
			width: 230rpx;
			margin-top: 6rpx;
			margin-bottom: 4rpx;
		}

		.photo-container {
			width: 95%;
			height: 600rpx;
			box-shadow: 1rpx 32rpx 100rpx 20rpx rgba(79, 79, 79, 0.1);
			border-radius: 30rpx;
			position: relative;
			margin-top: 10rpx;
			margin-bottom: 30rpx;

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
		}

		.slide-wrap {
			width: 95%;
			height: 300rpx;
			border: 1px solid white;
			margin-bottom: 50rpx;
			box-shadow: 0 32rpx 100rpx rgba(79, 79, 79, 0.1);
			border-radius: 30rpx;

			/* 参数区域第一行 */
			.first-line {
				display: flex;
				justify-content: space-between;
				margin-top: 40rpx;
				margin-bottom: 15px;

				.format-container {
					display: flex;
					justify-content: space-between;

				}

			}

			/* 第二行 */
			.second-line {
				display: flex;
				justify-content: space-between;
				margin-right: 150rpx;
				margin-bottom: 40rpx;
			}

			.slide-quality {
				width: 400rpx;
				position: relative;
			}

			/* 第三行 */
			.third-line {
				display: flex;
				justify-content: space-between;
				margin-right: 150rpx;
			}

			.slide-dimensions {
				width: 400rpx;
				position: relative;

				.dimensionSlide {
					width: inherit;
					position: relative;
					top: 1.4rpx;
					// #ifdef MP-KUAISHOU
					top: 5.4rpx;
					// #endif
					// #ifdef MP-QQ
					top: -0.4rpx;
					// #endif
				}
			}

		}

		.button-container {
			width: 95%;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			margin-bottom: 15px;
		}

	}

	// 图片的样式
	.photo {
		width: 200rpx;
		height: 200rpx;
	}

	.photo-single-allContainer {
		width: 100%;
		height: 100%;
		position: relative;
	}


	.photo-single {
		width: 300rpx;
		height: 420rpx;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	.photo-single-parameterContainer {
		width: 100%;
		height: 80rpx;
		background-color: gray;
		position: absolute;
		bottom: 0;
		color: white;
		border-radius: 30rpx;

	}

	// 点击jpg和png时的样式切换
	.click {
		margin-right: 16rpx;
		width: 80rpx;
		height: 60rpx;
		color: white;
		background-color: #3c9cff;
		text-align: center;
		line-height: 60rpx;
		box-sizing: border-box;
		// #ifdef MP-TOUTIAO
		height: 72rpx;
		line-height: 66rpx;
		// #endif
	}

	.unclick {
		margin-right: 16rpx;
		width: 80rpx;
		height: 30px;
		color: #3c9cff;
		border: 1px solid #9acafc;
		text-align: center;
		line-height: 27px;
		box-sizing: border-box;
		// #ifdef MP-TOUTIAO
		height: 72rpx;
		line-height: 66rpx;
		// #endif
	}

	.photo-single-parameterBefore {
		display: flex;
		width: 100%;

		.before-size {
			margin-right: 40rpx;
			width: 300rpx;
			height: 40rpx;
			margin-left: 40rpx;
		}

		.before-dimension {
			width: 400rpx;
			height: 40rpx;
		}
	}

	.photo-single-parameterAfter {
		display: flex;
		width: 100%;

		.after-size {
			width: 300rpx;
			height: 40rpx;
			margin-left: 40rpx;
		}


		.after-dimension {
			margin-left: 65rpx;
			width: 450rpx;
			height: 40rpx;
		}
	}

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

			.photo-multiple-singleContainer {
				width: 100%;
				height: 200rpx;
				// 横向的滑动框才需要
				// display: inline-block;
				position: relative;
				box-shadow: 1rpx 32rpx 100rpx 20rpx rgba(79, 79, 79, 0.1);
				margin-bottom: 40rpx;
				border-radius: 0 40rpx 40rpx 0;

				.photo-multiple {
					width: 200rpx;
					height: 200rpx;
				}

				.beforeCompress {
					position: absolute;
					top: 30rpx;
					left: 220rpx;
					font-size: 32rpx;
				}

				.afterCompress {
					position: absolute;
					top: 100rpx;
					left: 220rpx;
					margin-top: 10rpx;
					font-size: 32rpx;
				}


			}
		}
	}

	::v-deep .u-slider {
		width: 400rpx;
		margin-bottom: -20rpx;
	}

	::v-deep .u-modal__content {
		padding-left: 80rpx;
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

	.remind {
		width: 95%;
		font-size: 20rpx;
		text-align: center;
		margin-top: 10rpx;
	}

	.photoNull {
		width: 100px;
		height: 100px;
		background-position: 0px 0px;
		background-size: cover;
		background-repeat: no-repeat;
	}

	// #ifdef MP-TOUTIAO
	.navBar {
		position: absolute;
		top: 0rpx;
		right: -60rpx;
	}

	//#endif
</style>
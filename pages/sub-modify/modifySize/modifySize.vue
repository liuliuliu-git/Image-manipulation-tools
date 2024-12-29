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
		<!-- 图片裁剪区 -->
		<view class="settingHeadImage" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
			@touchend="handleTouchEnd">
			<canvas canvas-id="myCanvas" style="width: 100%; height: 400px; " class="canvas">
			</canvas>
			<!-- 蒙层 -->
			<canvas class="pre-canvas" canvas-id="firstCanvas">
			</canvas>
		</view>
		<view class="remind">
			注意:如因网络问题加载不出图片，可点击下方规格尝试重新加载
		</view>
		<view class="button-container">
			<view class="left-button-container">
				<view style="width: 40%;">
					<u-button :plain="true" shape="circle" type="primary" @click="set">设置</u-button>
				</view>
				<view class="left-button-functionContainer">
					<u-button shape="circle" size="mini" type="primary" @click="magnify">放大</u-button>
					<u-button shape="circle" size="mini" type="primary" @click="shrink">缩小</u-button>
				</view>
			</view>
			<view class="right-button-container" style="width: 200rpx;">
				<u-button :plain="true" shape="circle" type="primary" @click="toChooseSize">搜索规格</u-button>
			</view>
		</view>
		<!-- 设置图片参数栏 -->
		<scroll-view scroll-x class='scroll-view'>
			<view class="single-sizeContainer" v-for="(item,index) in sizeArr" :key="index"
				@click="changeChecked(item,index)">
				<sizeSpecification :size-list="item" :is-checked="item.isChecked"></sizeSpecification>
			</view>
		</scroll-view>
		<view class="button-bottomContainer">
			<view class="" style="width: 45%;">
				<u-button @click="replace" :plain="true" type="success">更换图片</u-button>
			</view>
			<view class="" style="width: 45%;">
				<u-button type="success" @click="clipSize">确定</u-button>
			</view>
		</view>
		<u-overlay :show="setShow" mask-click-able=false>
			<view class="device">
				<view class="device-contentContainer">
					<view class="device-content">
						<u-form :model="form" :rules="rules" ref="uForm">
							<!--#ifndef MP-KUAISHOU -->
							<u-form-item label="宽" prop="form.width" borderBottom style="display: flex;width: 400rpx;">
								<view class="form-single">
									<u--input v-model="form.width" border="none" placeholder="请输入宽"
										class="uform-input"></u--input>
									<view class="gap">
										像素(px)
									</view>
								</view>
							</u-form-item>
							<!-- #endif -->
							<!--#ifdef MP-KUAISHOU -->
							<u-form-item label="宽(px)" prop="form.width" borderBottom
								style="display: flex;width: 400rpx;">
								<view class="form-single">
									<u--input v-model="form.width" border="none" placeholder="请输入宽"
										class="uform-input"></u--input>
								</view>
							</u-form-item>
							<!-- #endif -->
							<!--#ifndef MP-KUAISHOU -->
							<u-form-item label="高" prop="form.height" borderBottom style="display: flex;width: 400rpx;">
								<view class="form-single">
									<u--input v-model="form.height" border="none" placeholder="请输入高"
										class="uform-input"></u--input>

									<view class="gap">
										像素(px)
									</view>
								</view>
							</u-form-item>
							<!-- #endif -->
							<!--#ifdef MP-KUAISHOU -->
							<u-form-item label="高(px)" prop="form.height" borderBottom
								style="display: flex;width: 400rpx;">
								<view class="form-single">
									<u--input v-model="form.height" border="none" placeholder="请输入高"
										class="uform-input"></u--input>
								</view>
							</u-form-item>
							<!-- #endif -->

							<!--#ifndef MP-KUAISHOU -->
							<u-form-item label="dpi" prop="form.dpi" borderBottom style="display: flex;width: 400rpx;">
								<view class="form-single">
									<u--input v-model="form.dpi" border="none" placeholder="请输入dpi"
										class="uform-input"></u--input>

									<view class="gap">
										分辨率
									</view>
								</view>
							</u-form-item>
							<!-- #endif -->
							<!--#ifdef MP-KUAISHOU -->
							<u-form-item label="dpi" prop="form.dpi" borderBottom style="display: flex;width: 400rpx;">
								<view class="form-single">
									<u--input v-model="form.dpi" border="none" placeholder="请输入dpi"
										class="uform-input"></u--input>
								</view>
							</u-form-item>
							<!-- #endif -->
						</u-form>
						<view class="device-single">
							<view class="">
								图片格式
							</view>
							<view class="device-format">
								<view :class="{'click':isClick == false,'unclick':isClick==true}" @click="jpgClick">
									jpg
								</view>
								<view :class="{'click':isClick == true,'unclick':isClick==false}" @click="pngClick">
									png
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="buttonContent">
					<view style="width: 47%;">
						<u-button shape="square" @click="cancel" style="width: 40%;" type="primary"
							:plain="true">取消</u-button>
					</view>
					<view style="width: 47%;">
						<u-button shape="square" type="primary" @click="submit" style="width: 40%;">确定</u-button>
					</view>
				</view>
			</view>
		</u-overlay>
	</view>

</template>

<script>
	import {
		getData,
		putSize,
		deleteImage,
		postImage
	} from '@/api/compress.js'
	import env from '@/utils/env.js';
	import sizeSpecification from '@/components/sizeSpecification/sizeSpecification.vue'
	import {
		verifyImage
	} from '@/api/tools.js'
	import RewardedAd from '@/components/RewardedAd/index.js';
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {
				defineIndex: 0,
				ctx: null, // 添加一个新的数据属性来存储 Canvas 上下文
				// 传入图像地址
				imgUrl: '',
				// 截取图像地址
				clipUrl: '',
				result: '',
				// dpi默认值
				dpi: 150,
				// 热门规格数据
				sizeArr: [],
				// 模态框的内容
				content: '观看广告，解锁功能',
				setShow: false,
				isClick: false,
				// 裁剪的大小区域
				cropWidth: 150,
				cropHeight: 150,
				form: {
					width: 295,
					height: 413,
					dpi: 150,
				},
				fileType: 'jpg',
				formatNew: 1,
				startX: 0,
				startY: 0,
				rules: {
					'form.width': {
						type: 'string',
						trigger: ['blur', 'change'],
					},
					'form.height': {
						type: 'string',
						trigger: ['blur', 'change'],
					},
					'form.dpi': {
						type: 'string',
						trigger: ['blur', 'change'],
					},
				},
				imgWidth: 250, // 图片宽度
				imgHeight: 250, // 图片高度
				screenWidth: 0, // 屏幕宽度
				screenHeight: 400, //屏幕高度
				imgX: 0, // 图片的x坐标
				imgY: 0, // 图片的y坐标
				isMoving: false, // 是否正在移动图片
				currentNumber: 1,
				// 最大移动范围
				cropX: 0,
				cropY: 0,
				// 激励广告实例
				rewardAd: null,
			}
		},
		components: {
			banner,
			sizeSpecification
		},
		onReady: function(e) {
			//  #ifdef MP-WEIXIN
			this.$refs.uForm.setRules(this.rules)
			// #endif
			this.initCanvas();
			this.drawImage(this.imgUrl);
			this.setBgBox()

		},
		async onLoad(option) {
			this.form.width = JSON.parse(option.sizeList).widthpx
			this.form.height = JSON.parse(option.sizeList).heightpx
			this.form.dpi = JSON.parse(option.sizeList).dpi
			this.rewardAd = new RewardedAd(this.getJli, this.customRewardUser);
			// 获取上个页面传递的参数。
			this.imgUrl = option.imgUrl

			// 等待getDataApi执行完毕
			await this.getDataApi();
			let item = JSON.parse(option.sizeList)
			if (item.imageName == "点击自定义") {
				this.setShow = true
			}
			let define = {
				imageName: '点击自定义',
				widthpx: this.form.width,
				heightpx: this.form.height,
				width: "",
				height: "",
			}
			this.sizeArr.unshift(define)
			this.sizeArr.unshift(JSON.parse(option.sizeList));
			// 数组去重
			let map = new Map();
			for (let i = 0; i < this.sizeArr.length; i++) {
				if (this.sizeArr[0].imageName == '点击自定义') {
					this.defineIndex = 0
				} else {
					this.defineIndex = 1
				}
				this.sizeArr[i].isChecked = false
				if (!map.has(this.sizeArr[i].imageName)) {
					map.set(this.sizeArr[i].imageName, this.sizeArr[i]);
				}
			}
			this.sizeArr = [...map.values()];
			this.$set(this.sizeArr, 0, {
				...this.sizeArr[0],
				isChecked: true
			})
		},
		computed: {
			getId() {
				return this.$store.state.bannerId ? this.$store.state.bannerId : ""
			},
			getJli() {
				return this.$store.state.jLiId ? this.$store.state.jLiId : ""
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

			// 处理裁剪框样式
			handleCrop(widthpx, heightpx) {
				if (heightpx >= this.imgHeight && widthpx >= this.imgWidth) {
					this.cropHeight = this.imgHeight
					this.cropWidth = this.imgWidth
				} else if (heightpx >= this.imgHeight) {
					this.cropHeight = this.imgHeight
					this.cropWidth = widthpx
				} else if (widthpx >= this.imgWidth) {
					this.cropHeight = heightpx
					this.cropWidth = this.imgWidth
				} else {
					this.cropHeight = heightpx
					this.cropWidth = widthpx
				}
			},
			initCanvas() {
				this.ctx = uni.createCanvasContext('myCanvas'); // 初始化 Canvas 上下文
			},
			// 跳转到选择照片尺寸
			toChooseSize() {
				uni.navigateTo({
					url: '/pages/sub-modify/chooseSize/chooseSize'
				});
			},
			// 更换图片
			replace() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						let img = res.tempFilePaths[0]
						// #ifdef MP-TOUTIAO
						verifyImage(this.$store.state.ttAppid, img, this.$store.state
							.clientType).then(res => {
							if (!res) {
								this.imgUrl = img
								this.currentNumber = 1
								this.drawImage(this.imgUrl)
								this.setBgBox()
							} else {
								uni.showToast({
									title: '图片存在风险,请重新上传',
									duration: 2000,
									icon: "fail"
								});
							}
						}).catch(err => {})
						// #endif
						// #ifdef MP-QQ
						verifyImage(this.$store.state.qqAppid, img, this.$store.state
							.clientType).then(res => {
							if (!res) {
								this.imgUrl = img
								this.currentNumber = 1
								this.drawImage(this.imgUrl)
								this.setBgBox()
							} else {
								uni.showToast({
									title: '图片存在风险,请重新上传',
									duration: 2000,
									icon: "fail"
								});
							}
						}).catch(err => {})
						// #endif
						// #ifdef MP-WEIXIN || MP-KUAISHOU
						this.imgUrl = res.tempFilePaths[0]
						this.currentNumber = 1
						this.drawImage(this.imgUrl)
						this.setBgBox()
						// #endif

					}
				})
			},
			magnify() {
				if (this.currentNumber <= 1.4) {
					this.currentNumber += 0.05;
				} else {
					this.currentNumber = 1;
				}
				this.ctx.drawImage(this.imgUrl, this.imgX, this.imgY, this.imgWidth * this.currentNumber, this
					.imgHeight * this.currentNumber)
				this.ctx.draw() //绘制
				this.setBgBox()
			},
			shrink() {
				if (this.currentNumber >= 0.7) {
					this.currentNumber -= 0.05;
				} else {
					this.currentNumber = 1;
				}
				this.ctx.drawImage(this.imgUrl, this.imgX, this.imgY, this.imgWidth * this.currentNumber, this
					.imgHeight * this.currentNumber)
				this.ctx.draw() //绘制
				this.setBgBox()
			},
			// 控制宽高设置栏的出现
			set() {
				this.setShow = true
			},
			// 确定压缩尺寸
			clipImage() {
				uni.showModal({
					title: '修改尺寸',
					content: '观看广告，解锁修改尺寸功能',
					success: (res) => {
						if (res.confirm) {
							// this.customRewardUser()
							this.rewardAd.init()
						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			async clipSize() {
				await this.clipImage()
			},
			customRewardUser() {
				return new Promise((resolve, reject) => {
					uni.showLoading({
						title: '保存中'
					});
					uni.canvasToTempFilePath({
						canvasId: 'myCanvas',
						x: this.cropX,
						y: this.cropY,
						width: this.cropWidth,
						height: this.cropHeight,
						fileType: this.fileType,
						success: (res) => {
							uni.showLoading({
								title: "上传中"
							})
							uni.uploadFile({
								url: this.$store.state.baseUrl +
									'/ms111/compress/ms111/postImage',
								filePath: res.tempFilePath,
								name: 'multipartFiles',
								formData: {
									"height": this.imgHeight,
									"width": this.imgWidth
								},
								success: (res) => {
									this.clipUrl = JSON.parse(
										res.data).msg;
									this.putSizeApi(JSON
										.stringify({
											"dpi": this
												.form.dpi,
											"format": this
												.formatNew,
											"heightpx": this
												.form
												.height,
											"imagePath": this
												.clipUrl,
											"widthpx": this
												.form.width
										}))
									resolve()
								},
								fail: (err) => {
									console.log(err);
								}
							})
						},
						fail: (err) => {
							console.error(err);
						},
						complete: () => {
							uni.hideLoading()
						}
					});
				})
			},
			// 点击jpg格式
			jpgClick() {
				this.isClick = false
				this.fileType = 'jpg'
				this.formatNew = 1
			},
			// 点击png格式
			pngClick() {
				this.isClick = true
				this.fileType = 'png'
				this.formatNew = 2
			},
			// 获取热门规格
			getDataApi() {
				return new Promise((resolve, reject) => {
					getData({
						isHot: 1
					}).then((res) => {
						this.sizeArr = res.data.map(i => ({
							...i,
							isChecked: false,
						}));
						resolve();
					}).catch((err) => {
						reject(err);
					});
				});
			},
			// 点击单个
			changeChecked(item, index) {
				if (item.imageName == "点击自定义") {
					this.setShow = true
					this.form.width = ''
					this.form.height = ''
					this.form.dpi = ''

				} else {
					this.form.width = item.widthpx
					this.form.height = item.heightpx
					this.form.dpi = item.dpi
				}
				for (let i = 0; i < this.sizeArr.length; i++) {
					this.$set(this.sizeArr, i, {
						...this.sizeArr[i],
						isChecked: false
					})
				}
				//修改裁剪框大小
				this.handleCrop(item.widthpx, item.heightpx)
				this.setBgBox()
				this.$set(this.sizeArr, index, {
					...this.sizeArr[index],
					isChecked: true
				})
			},
			// 宽高设置的取消按钮
			cancel() {
				this.setShow = false
			},
			// 宽高设置的确定按钮
			submit() {
				const widthInput = this.form.width;
				const heightInput = this.form.height;
				const dpiInput = this.form.dpi;
				if (widthInput == "" || heightInput == "" || dpiInput == "") {
					uni.showToast({
						title: "请输入正确值",
						icon: 'error',
						duration: 2000
					});
				} else {
					const numberPattern = /^\d+$/;
					if (!numberPattern.test(widthInput) || !numberPattern.test(heightInput) || !numberPattern.test(
							dpiInput)) {
						uni.showToast({
							title: "请只输入数字",
							icon: 'error',
							duration: 2000
						});
					} else {
						this.setShow = false
						this.$refs.uForm.validate().then(res => {
							console.log('验证通过');
							this.handleCrop(Number(this.form.width), Number(this.form.height))
							this.setBgBox()
							for (let i = 0; i < this.sizeArr.length; i++) {
								if (i == this.defineIndex) {
									this.sizeArr.splice(this.defineIndex, 1, {
										imageName: '点击自定义',
										widthpx: Number(this.form.width),
										heightpx: Number(this.form.height),
										width: "",
										height: "",
									})
									this.$set(this.sizeArr, this.defineIndex, {
										...this.sizeArr[this.defineIndex],
										isChecked: true,
									})
								} else {
									this.$set(this.sizeArr, i, {
										...this.sizeArr[i],
										isChecked: false
									})
								}
							}

						}).catch(errors => {
							console.log('验证失败');
						})
					}
				}
			},
			// 修改规格尺寸
			putSizeApi(size) {
				putSize(size).then((res) => {
					this.result = res.data
					uni.downloadFile({
						url: this.$store.state.baseUrl + this.result,
						success: (res) => {
							let imgUrl = res.tempFilePath
							if (res.statusCode == 200) {
								this.getSet(imgUrl, this.result)
							}
						},
						fail: (err) => {
							console.log(err);
						}
					})
				}).catch((err) => {
					console.log(err);
				})
			},

			deleteImageApi(filePath) {
				deleteImage(filePath).then(res => {}).catch((err => {
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
					},
					fail: (res) => {
						console.log(res.errMsg);
						return uni.showToast({
							title: "请重新保存",
							icon: 'error',
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
									uni.showToast({
										title: "保存成功！",
									});
									this.saveImage(imgUrl, filePath)
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
											if (res
												.confirm
											) {
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
							this.saveImage(imgUrl, filePath)
						}

					},
					fail: (err) => {
						console.log(err);
					}
				})
			},

			// 设置蒙层
			setBgBox() {
				uni.getSystemInfo({
					success: (res) => {
						this.screenWidth = res.windowWidth;
						const ctx = uni.createCanvasContext('firstCanvas');
						this.handleCrop(this.cropWidth, this.cropHeight)
						this.cropX = (this.screenWidth - this.cropWidth) / 2
						this.cropY = (this.screenHeight - this.cropHeight) / 2
						// 先清除矩形
						ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
						//  #ifdef MP-KUAISHOU
						ctx.textBaseline = 'normal'
						// #endif
						// 设置canvas透明度
						//  #ifndef MP-KUAISHOU
						ctx.setGlobalAlpha(0.7);
						// #endif
						// #ifdef MP-KUAISHOU
						ctx.globalAlpha = 0.5;
						// #endif
						// 设置蒙层颜色
						//  #ifndef MP-KUAISHOU
						ctx.setFillStyle('#000000');
						// #endif
						// #ifdef MP-KUAISHOU
						ctx.fillStyle = 'black';
						// #endif
						// 绘制蒙层 
						ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
						// 基准框留白
						ctx.clearRect(this.cropX, this.cropY, this.cropWidth, this
							.cropHeight);
						// 绘制基准框
						ctx.beginPath();
						//  #ifndef MP-KUAISHOU
						ctx.setStrokeStyle('#FFFFFF');
						// #endif
						// #ifdef MP-KUAISHOU
						ctx.strokeStyle = 'white';
						// #endif
						ctx.strokeRect(this.cropX, this.cropY, this.cropWidth, this
							.cropHeight);
						ctx.closePath();
						ctx.draw();
					}
				});

			},
			// 绘图方法
			drawImage(url) {
				const that = this
				uni.getImageInfo({
					src: url,
					success(res) {
						that.imgWidth = res.width;
						that.imgHeight = res.height;
						// 判断图片的宽与高
						// 宽边大
						if (that.imgWidth >= that.imgHeight) {
							if (that.imgWidth >= that.screenWidth) {
								let scale = that.imgWidth / that.screenWidth
								that.imgWidth = that.screenWidth
								that.imgHeight = Math.ceil(that.imgHeight / scale)
								that.imgX = 0
								that.imgY = (that.screenHeight - that.imgHeight) / 2
							} else {
								that.imgX = (that.screenWidth - that.imgWidth) / 2
								that.imgY = (that.screenHeight - that.imgHeight) / 2
							}
						}
						// 高边大
						else {
							if (that.imgHeight >= that.screenHeight) {
								let scale = that.imgHeight / that.screenHeight
								that.imgHeight = that.screenHeight
								that.imgWidth = Math.ceil(that.imgWidth / scale)
								that.imgX = (that.screenWidth - that.imgWidth) / 2
								that.imgY = 0
							} else {
								that.imgX = (that.screenWidth - that.imgWidth) / 2
								that.imgY = (that.screenHeight - that.imgHeight) / 2
							}
						}
						that.ctx.drawImage(res.path, that.imgX, that.imgY, that.imgWidth * that.currentNumber,
							that.imgHeight * that.currentNumber)
						that.ctx.draw() //绘制
					}
				})
			},

			handleTouchStart(e) {
				if (!this.isMoving) {
					this.startX = e.touches[0].pageX;
					this.startY = e.touches[0].pageY;
					this.isMoving = true;
				}
			},

			handleTouchMove(e) {
				if (this.isMoving) {
					const moveX = e.touches[0].pageX - this.startX;
					const moveY = e.touches[0].pageY - this.startY;
					this.imgX += moveX;
					this.imgY += moveY;
					this.startX = e.touches[0].pageX;
					this.startY = e.touches[0].pageY;
					if (this.imgX >= this.cropX) {
						this.imgX = this.cropX
					}
					if (this.imgY >= this.cropY) {
						this.imgY = this.cropY
					}
					if (this.imgX <= this.cropWidth + this.cropX - this.imgWidth * this.currentNumber) {
						this.imgX = this.cropWidth + this.cropX - this.imgWidth * this.currentNumber
					}
					if (this.imgY <= this.cropHeight + this.cropY - this.imgHeight * this.currentNumber) {
						this.imgY = this.cropHeight + this.cropY - this.imgHeight * this.currentNumber
					}
					this.ctx.drawImage(this.imgUrl, this.imgX, this.imgY, this.imgWidth * this.currentNumber, this
						.imgHeight * this.currentNumber)
					this.ctx.draw() //绘制
				}
			},
			handleTouchEnd() {
				this.isMoving = false;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;


		.button-container {
			width: 90%;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 30rpx 0;
			// #ifdef MP-KUAISHOU
			margin: 10rpx 0;
			// #endif
		}
	}

	.left-button-container {
		display: flex;
		align-items: center;
		width: 60%;
		justify-content: space-between;
	}

	.left-button-functionContainer {
		width: 55%;
		display: flex;
		justify-content: space-between;
	}

	// 滚动事件
	// 容器
	.scroll-view {
		width: 95%;
		display: flex;
		white-space: nowrap;
		height: 200rpx;
		position: relative;
		margin-bottom: 30rpx;
		// #ifdef MP-KUAISHOU
		height: 200rpx;
		margin-bottom: 0;

		// #endif
		.single-sizeContainer {
			width: 230rpx;
			height: 200rpx;
			display: inline-block;
			position: relative;
			margin-right: 30rpx;
			background-color: #dddfe2;
			border-radius: 15rpx;
		}
	}

	.button-bottomContainer {
		width: 95%;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		margin-top: 30rpx;
		margin-bottom: 50rpx;
	}

	.device {
		width: 90%;
		height: 500rpx;
		background-color: #ffffff;
		top: 62%;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 20rpx;
		position: fixed;

		.device-contentContainer {
			width: 100%;
			height: 400rpx;
			position: relative;

			.device-content {
				width: 80%;
				height: 400rpx;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				background-color: white;
				position: absolute;
				border-radius: 30rpx;

				.device-single {
					height: 50rpx;
					line-height: 50rpx;
					width: 100%;
					position: relative;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					justify-content: space-between;
					margin-top: 30rpx;
					// #ifdef MP-KUAISHOU
					margin-top: 10rpx;
					// #endif

					.device-format {
						display: flex;
						height: 60rpx;
						position: relative;
						top: 50%;
						transform: translateY(-50%);
					}
				}
			}
		}
	}

	// 点击jpg和png时的样式切换
	.click {
		margin-left: 30rpx;
		width: 70rpx;
		height: 60rpx;
		color: white;
		background-color: #3c9cff;
		text-align: center;
		line-height: 60rpx;
		box-sizing: border-box;
		// #ifdef MP-TOUTIAO
		width: 86rpx;
		height: 76rpx;
		line-height: 68rpx;
		// #endif
	}

	.unclick {
		width: 70rpx;
		height: 60rpx;
		color: #3c9cff;
		border: 2rpx solid #9acafc;
		box-sizing: border-box;
		text-align: center;
		line-height: 55rpx;
		margin-left: 30rpx;
		// #ifdef MP-TOUTIAO
		width: 86rpx;
		height: 76rpx;
		line-height: 68rpx;
		// #endif
	}

	.buttonContent {
		display: flex;
		position: absolute;
		width: 90%;
		justify-content: space-between;
		transform: translateX(-50%);
		left: 50%;
		bottom: 2%;
	}

	::v-deep .u-form-item__body {
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.settingHeadImage {
		width: 100%;
		height: 100%;
		position: relative; // 确保裁剪框相对于父元素定位
		background-color: #000000;
		overflow: hidden;


		.pre-canvas {
			width: 100%;
			height: 400px;
			position: absolute; // 使用绝对定位
			top: 0;
			left: 0;
			z-index: 15;
		}

	}

	.form-single {
		display: flex;
		position: relative;
		// #ifdef MP-KUAISHOU
		width: 440rpx;
		// #endif

		.gap {

			//#ifdef MP-TOUTIAO
			position: absolute;
			right: -126rpx;
			// #endif
		}

	}

	.remind {
		width: 95%;
		font-size: 20rpx;
		text-align: center;
		margin-top: 10rpx;
	}

	::v-deep .u-form-item__body {
		padding: 12rpx 0;
	}
</style>
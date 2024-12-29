<template>
	<view>
		<view v-for="(item,index) in num" :key="index">
			<canvas :canvas-id="Canvas+index" :style="style"
				style="visibility: hidden; position: relative;left: -1000rpx;"></canvas>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style: null,
				Canvas: 'll_canvas_img',
				type: null,
				num: 0,
				count: -1
			}
		},
		methods: {
			//格式转换
			process_img(src, quality = 0.9, type = 'jpg', ratio = 1) {
				return new Promise((resolve, reject) => {
					this.count++;
					this.num++;
					let Canvas = this.Canvas + this.count;
					uni.getImageInfo({
						src: src,
						success: (res) => {
							let width = res.width;
							let height = res.height;
							this.style =
								`margin-top: -${height}px; margin-left: -${width}px; width: ${width}px; height: ${height}px;`;
							setTimeout(() => {
								const ctx = uni.createCanvasContext(Canvas, this);
								ctx.clearRect(0, 0, width, height)
								ctx.drawImage(src, 0, 0, width, height);
								ctx.draw(false, () => {
									uni.canvasToTempFilePath({
										width: width,
										height: height,
										destWidth: width * ratio,
										destHeight: height * ratio,
										canvasId: Canvas,
										fileType: type,
										quality: quality,
										success: (res) => {
											// #ifdef H5 
											// 在H5平台下，tempFilePath 为 base64
											let base = res.tempFilePath;
											let arr = base.split(','),
												mime = arr[0].match(
													/:(.*?);/)[1],
												bstr = atob(arr[1]),
												n = bstr.length,
												u8arr = new Uint8Array(n);
											while (n--) {
												u8arr[n] = bstr.charCodeAt(
													n);
											}
											let blob = new Blob([u8arr], {
												type: mime
											});
											let blobUrl = URL
												.createObjectURL(blob);
											console.log("格式转换成功");
											resolve(blobUrl);
											return
											// #endif
											console.log("格式转换成功");
											resolve(res.tempFilePath);
										},
										fail: (err) => {
											console.log("格式转换失败");
											reject(err);
										}
									}, this);
								});
							}, 100);
						}
					})
				})
			},
			//多张格式转换
			multiple_format_img(list, quality = 1, type = 'jpg', ratio = 1) {
				return new Promise((resolve, reject) => {
					let List = [];
					let count = 0;
					let num = list.length;
					for (let src of list) {
						this.process_img(src, quality, type).then(res => {
							List.push(res);
							count++;
							if (count == num) {
								resolve(List);
							}
						}).catch(err => {
							reject(err);
						})
					}
				})
			},
			//图片压缩
			compress_img(src, size = 500, type = 'jpg', ratio = 0.9) {
				return new Promise((resolve, reject) => {
					this.type = type;
					this.process_img(src, 0.9, type).then(res => {
						src = res;
						this.compress(src, size, type).then(res => {
							console.log('压缩成功', res); // 输出压缩后的图片路径
							resolve(res);
						}).catch(err => {
							reject(err);
						})
					})
				})
			},
			//多张图片压缩
			multiple_compress_img(list, size = 500, type = 'jpg', ratio = 0.9) {
				return new Promise((resolve, reject) => {
					let List = [];
					let count = 0;
					let num = list.length;
					for (let src of list) {
						this.compress_img(src, size, type).then(res => {
							List.push(res);
							count++;
							if (count == num) {
								resolve(List);
							}
						}).catch(err => {
							reject(err);
						})
					}
				})
			},
			compress(src, size = 500, type, ratio = 0.9) {
				return new Promise((resolve, reject) => {
					uni.getFileInfo({
						filePath: src,
						success: (fileInfoRes) => {
							let fileSize = fileInfoRes.size / 1024; // 转换为KB 	
							console.log('图片大小', fileSize);
							if (fileSize > size) {
								// #ifndef H5
								this.process_img(src, 0.9, type, ratio).then(res => {
									src = res;
									this.compress(src, size).then(res => {
										resolve(res);
									}).catch(err => {
										reject(err)
									})
								}).catch(err => {
									reject(err)
								})
								// #endif
								// #ifdef H5
								uni.getImageInfo({
									src: src,
									success: (res) => {
										//console.log('压缩前信息', res);
										let canvasWidth = res.width; // 图片原始宽度
										let canvasHeight = res.height; // 图片原始高度
										//console.log('宽度-',canvasWidth,'高度-',canvasHeight);
										let img = new Image();
										img.src = res.path;
										let canvas = document.createElement('canvas');
										let ctx = canvas.getContext('2d');
										// 这里根据要求限制图片宽高
										canvas.width = canvasWidth * ratio;
										canvas.height = canvasHeight * ratio;
										//console.log('压缩尺寸',canvas.width,canvas.height)
										ctx.drawImage(img, 0, 0, canvas.width, canvas
											.height);
										//toBlob()方法创造Blob对象，用以展示canvas上的图片
										let type_h5;
										if (this.type == 'jpg') type_h5 = 'image/jpeg';
										else if (this.type == 'png') type_h5 = 'image/png';
										else if (this.type == 'webp') type_h5 =
											'image/webp';
										canvas.toBlob((fileSrc) => {
											let imgSrc = window.URL
												.createObjectURL(fileSrc);
											//console.log('压缩后的blob路径', imgSrc);
											this.compress(imgSrc, size).then(
											res => {
												resolve(res);
											})
										}, type_h5,
										0.9); //默认'image/png' 建议'image/jpeg' 扩展image/webp(大部分浏览器支持),其他未知
									}
								});
								// #endif
							} else {
								resolve(src);
							}
						}
					});
				})
			}
		}
	}
</script>

<style>
</style>
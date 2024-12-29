<template>
	<view class="content">
		<!-- #ifndef MP-TOUTIAO -->
		<my-navbar :ad-unit-id="getId" class="navBar" v-if="getId!=''"></my-navbar>
		<!-- #endif -->
		<view style="height:88rpx; width: 94%; ">
			<!-- #ifndef MP-TOUTIAO -->
			<text style="font-weight: bolder;">照片尺寸修改</text>
			<view class="line">
			</view>
			<!-- #endif -->
		</view>
		<!-- 除抖音、快手外没有 -->
		<!-- 	#ifdef MP-WEIXIN -->
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
		<view class="modifySize-container" @click="toModifyDpi">
			<view class="modifySize">
				<view class="photoNull" :style="{ 'background-image': 'url(' + fullImageUrl + ')' }">
				</view>
				<text style="font-size: 28px;">修改dpi</text>
			</view>
		</view>
		<!-- 热门规格 -->
		<view class="size-nav">
			<view style="display: flex; align-items: center;">
				<text style="font-weight: bolder; font-size: 33rpx; line-height: 50rpx;">热门规格</text>
				<uni-icons type="fire-filled" size="25" color="red"></uni-icons>
			</view>
			<view @click="toChooseSize" style="line-height: 50rpx;">
				<text>查看全部</text>
				<uni-icons type="right" size="15"></uni-icons>
			</view>
		</view>
		<view class="size-allcontainer">
			<specification @transmit='getMaskShow(arguments)' style="height: 150rpx;"></specification>
			<view class="size-singleContainer" v-for="(item,index) in sizeList" :key="index">
				<specification :size-list="item" @transmit='getMaskShow(arguments)'></specification>
			</view>
		</view>
		<!-- 搜索证件照规格 -->
		<view class="search">
			<uni-icons type="search" size="25" class="search-icon" color="white" @click="toChooseSize"></uni-icons>
			<u-button shape="circle" @click="toChooseSize" type="primary">
				搜索证件照规格
			</u-button>

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
	import myNavbar from '@/components/ms-navbar/index.vue'
	import mask from '@/components/mask/mask.vue'
	import specification from '@/components/specification/specification.vue'
	import {
		getData
	} from '@/api/compress.js'
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {
				imgUrl: "/profile/upload/2024/07/30/19b1f20c48a944e2adf12324a7e2d1d0_20240730140402A013.png",
				sizeList: [],
				maskShow: false,
				// 传入头部组件
				title: '照片尺寸修改',
				progressPercent: 0,
				isHot: 1,
			}
		},
		onLoad() {
			this.getDataApi()
			uni.showLoading({
				title: '加载中'
			});
		},
		components: {
			specification,
			mask,
			myNavbar,
			banner
		},
		computed: {
			getId() {
				return this.$store.state.bannerId ? this.$store.state.bannerId : ""
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
			// 跳转到选择尺寸规模界面
			toChooseSize() {
				uni.navigateTo({
					url: '/pages/sub-modify/chooseSize/chooseSize'
				});
			},
			// 跳转到修改dpi界面
			toModifyDpi() {
				uni.navigateTo({
					url: '/pages/sub-modify/modifyDpi/modifyDpi'
				});
			},
			// 接收specification发送来的信息
			getMaskShow(data) {
				// data即子组件发送来的数据
				this.maskShow = data[0]
				this.progressPercent = data[1]
			},
			getDataApi() {
				getData({
					isHot: 1
				}).then((res) => {
					this.sizeList = res.data
					uni.hideLoading();
				}).catch((err) => {
					console.log(err);
				});
			}
		},


	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.line {
			background-color: #F3E7AB;
			height: 22rpx;
			border-radius: 22rpx;
			margin-left: 30rpx;
			width: 170rpx;
		}

		.modifySize-container {
			width: 95%;
			height: 400rpx;
			box-shadow: 1rpx 32rpx 100rpx 20rpx rgba(79, 79, 79, 0.1);
			border-radius: 30rpx;
			position: relative;
			margin-bottom: 40rpx;

			.modifySize {
				width: inherit;
				height: 250rpx;
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

		.size-nav {
			width: 90%;
			height: 50rpx;
			display: flex;
			justify-content: space-between;
			margin-bottom: 40rpx;
		}

		.size-allcontainer {
			width: 90%;
			display: grid;
			grid-template-columns: 1fr;
			margin-bottom: 40rpx;
			gap: 40rpx;

			.size-singleContainer {
				width: 100%;
				height: 150rpx;
			}
		}

		.search {
			width: 90%;
			height: 80rpx;
			position: relative;
			margin-bottom: 40rpx;

			.search-icon {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				z-index: 999;
				left: 180rpx;
			}
		}

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

	::v-deep .u-tabbar {
		width: 100%;
	}

	.tabbarView {
		width: 100%;
		// #ifdef MP-TOUTIAO
		display: flex;
		justify-content: space-evenly;
		// #endif
	}

	.tabbarContent {
		width: 100%;
	}

	::v-deep .u-tabbar__content__item-wrapper {
		width: 100%;
		justify-content: space-evenly;
	}

	.photoNull {
		width: 100px;
		height: 100px;
		background-position: 0px -10px;
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
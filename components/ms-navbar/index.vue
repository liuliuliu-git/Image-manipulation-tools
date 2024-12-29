<template>
	<view class="navbar-container">
		<!-- 状态栏 -->
		<!--#ifndef MP-TOUTIAO  -->
		<view class="status-bar" :style="{height: statusBarHeight}"></view>
		<!-- #endif  -->
		<view class="nav-row">
			<view class="layer">
				<view class="menu-button" @click="popupVisible=true" :style="{height: menuBtnH}">
					<u-icon name="grid" size="20" color="#000000"></u-icon>
				</view>
				<!--#ifndef MP-TOUTIAO  -->
				<text class="program-title">{{navigationBarTitleText}}</text>
				<!-- #endif  -->
			</view>
		</view>

		<u-popup :show="popupVisible" @close="popupVisible=false" mode="top" safeAreaInsetTop>
			<view class="pop-container">
				<!-- 广告 -->
				<!-- 除抖音、快手外没有 -->
				<!-- #ifdef MP-WEIXIN -->
				<ad :unit-id="adUnitId" @load="onload" @error="onerror" v-if="!error"></ad>
				<!-- #endif  -->
				<!-- #ifdef MP-QQ -->
				<ad :unit-id="adUnitId" @load="onload" @error="onerror" v-if="!error"></ad>
				<!-- #endif  -->
				<!-- #ifdef MP-KUAISHOU -->
				<ad :unit-id="adUnitId" @load="onload" @error="onerror" v-if="!error" :type="100011054"></ad>
				<!-- #endif -->
				<view class="more-list">
					<view class="more-item flex-ai_center">
						<u-icon name="share" size="30rpx"></u-icon>
						<button open-type="share" class="share-btn"
							hover-class="none">分享{{navigationBarTitleText}}</button>
					</view>
					<view class="more-item flex-ai_center" @click="navTo('/pages/sub-about/index/index')">
						<u-icon name="info-circle" size="30rpx"></u-icon>
						<text>关于我们</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>


<script>
	import {
		getadpid
	} from '@/api/tools.js'
	import banner from '@/components/banner/index.vue'
	import {
		mapState
	} from 'vuex';
	export default {
		name: "ms-navbar",
		props: {
			// banner广告id
			adUnitId: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				// 系统信息
				systemInfo: null,
				menuButtonInfo: null,
				popupVisible: false,
				error: false
			};
		},
		computed: {
			...mapState(['navigationBarTitleText']),
			// 状态栏高度
			statusBarHeight() {
				return this.systemInfo && this.systemInfo.statusBarHeight + 'px'
			},
			menuBtnH() {
				const {
					height = 20
				} = this.menuButtonInfo || {}
				return height + 'px'
			},
		},
		mounted() {
			/* 获取系统信息 */
			this.systemInfo = uni.getSystemInfoSync()
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
		methods: {
			navTo(url) {
				this.popupVisible = false
				uni.navigateTo({
					url
				})
			},
			share() {
				this.popupVisible = false
				// TODO 开启分享
			},
			onload(e) {
				this.error = false
				console.log("广告加载成功");
			},
			onerror(e) {
				console.log("广告加载失败 ");
				this.error = true
			},

		},
		components: {
			banner
		}
	}
</script>

<style lang="scss">
	$bk: #F8F8F8;
	$navrowH: 88rpx;

	.navbar-container {
		width: 100vw;
		position: relative;
		z-index: 2;

		.status-bar {
			width: 100%;
			background-color: $bk;
		}


		.nav-row {
			width: 100%;
			height: $navrowH;
			position: relative;
			z-index: 10075;

			.layer {
				position: absolute;
				top: 0;
				left: 0;
				//#ifdef MP-TOUTIAO
				width: 85%;
				left: -70rpx;
				// #endif
				// #ifndef MP-TOUTIAO
				width: 100%;
				// #endif
				height: $navrowH;
				background-color: $bk;
				border-bottom: 2rpx solid #f2f2f2;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;

				/* #ifdef MP-TOUTIAO */
				padding-left: calc(40 * 2rpx);
				padding-right: calc(150 * 2rpx);
				padding-top: 14rpx;
				/* #endif */


				.program-title {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}


		}
	}


	.nav-row {

		.menu-button {
			cursor: pointer;
			padding: 0 40rpx;
			margin-left: 10rpx;
			border-radius: 100rpx;
			border: 2rpx solid #E7E7E7;
			background-color: #FEFEFE;

			display: flex;
			justify-content: center;
			align-items: center;

			&:active {
				background-color: #ffffff;
			}
		}
	}

	.pop-container {
		// #ifndef MP-TOUTIAO
		margin-top: $navrowH;
		// #endif
		margin-top: 0;
		padding: 40rpx;

		.more-list {

			.more-item {
				padding: 20rpx;
				display: flex;
				align-items: center;
				gap: 10rpx;

				&:nth-last-child(n+2) {
					border-bottom: 2px solid #f2f2f2f2;
				}
			}
		}
	}

	.share-btn {
		background-color: transparent;
		padding: 0;
		margin: 0;
		border: none;
		width: 100%;
		// #ifndef MP-KUAISHOU
		height: fit-content;
		border-radius: none;
		// #endif
		font-size: inherit;
		display: inline;
		text-align: left;

		&::after {
			content: none;
		}
	}
</style>
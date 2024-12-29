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
		<!-- 搜索区域 -->
		<view class="search">
			<view class="search-form" style="display: flex;">
				<u--form :model="form" :rules="rules" ref="uForm" style="overflow: hidden;" borderBottom>
					<u-form-item prop="form.specification" borderBottom ref="item1"
						style="display: flex;width: 400rpx;justify-content: space-between; ">
						<!-- #ifndef MP-KUAISHOU -->
						<uni-icons type="search" size="20" class="uni-icon-search"></uni-icons>
						<u--input v-model="form.specification" border="none" placeholder="请输入规格"
							style="white-space: nowrap;"></u--input>
						<!-- #endif -->
						<!-- #ifdef MP-KUAISHOU -->
						<uni-icons type="search" size="20"></uni-icons>
						<input
							style="position: absolute;top: 50%; transform: translateY(-50%);left: 23px;width: 300rpx;"
							type='text' v-model="form.specification" placeholder="请输入规格" maxlength="10" />
						<!-- #endif -->
					</u-form-item>
				</u--form>
				<view class="" style="width: 200rpx;margin-left: 60rpx;">
					<view class="sousuo" @click="submit">
						查找规格
					</view>
				</view>
			</view>
		</view>
		<view class="size-nav">
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
				activeColor="#2979ff" style='margin-bottom: 50rpx;'></uni-segmented-control>
			<view class="size-allContainer">
				<view v-if="current === 0" class="size-first">
					<view class="size-singleContainer " v-for="item in itemList " :key="item.specificationId">
						<specification :size-list="item" @transmit='getMaskShow(arguments)'></specification>
					</view>
				</view>
				<view v-if="current === 1" class="size-first">
					<view class="size-singleContainer " v-for="item in itemList " :key="item.specificationId">
						<specification :size-list="item" @transmit='getMaskShow(arguments)'></specification>
					</view>
				</view>
				<view v-if="current === 2" class="size-first">
					<view class="size-singleContainer " v-for="item in itemList " :key="item.specificationId">
						<specification :size-list="item" @transmit='getMaskShow(arguments)'></specification>
					</view>
				</view>
				<view v-if="current === 3" class="size-first">
					<view class="size-singleContainer " v-for="item in itemList " :key="item.specificationId">
						<specification :size-list="item" @transmit='getMaskShow(arguments)'></specification>
					</view>
				</view>
				<view v-if="current === 4" class="size-first">
					<view class="size-singleContainer " v-for="item in itemList " :key="item.specificationId">
						<specification :size-list="item" @transmit='getMaskShow(arguments)'></specification>
					</view>
				</view>
				<view v-if="current === 5" class="size-first">
					<view class="size-singleContainer " v-for="item in itemList " :key="item.specificationId">
						<specification :size-list="item" @transmit='getMaskShow(arguments)'></specification>
					</view>
				</view>
			</view>
		</view>
		<!-- 遮罩层 -->
		<mask :mask-show="maskShow" v-if="maskShow" :progress-percent="progressPercent"></mask>
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
		getData,
		getSpecificationStyleIds
	} from '@/api/compress.js'
	import specification from '@/components/specification/specification.vue'
	import mask from '@/components/mask/mask.vue'
	import banner from '@/components/banner/index.vue'
	export default {
		data() {
			return {
				form: {
					specification: ''
				},
				value: '',
				// 列表项
				items: ['全部'],
				current: 0,
				itemList: [],
				maskShow: false,
				headerTitle: '照片尺寸修改',
				idMap: {
					0: 0,
					1: 109,
					2: 110,
					3: 111,
					4: 112,
					5: 113
				},
				id: 0,
				rules: {
					'form.specification': {
						type: 'string',
						trigger: ['blur', 'change']
					},
				},
				progressPercent: 0,
			}

		},
		onReady() {
			//  #ifdef MP-WEIXIN
			this.$refs.uForm.setRules(this.rules)
			// #endif
		},

		onLoad() {
			uni.showLoading({
				title: '加载中'
			});
			this.getSpecificationStyleIdsApi()
			this.getDataApi('', 0)
		},
		components: {
			specification,
			mask,
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
		methods: {

			submit() {
				uni.showLoading({
					title: '加载中'
				});
				this.$refs.uForm.validate().then(res => {
					this.getDataApi(this.form.specification, this.id)
					this.form.specification = ''
					uni.showToast({
						title: '搜索完成',
					});
				}).catch(errors => {
					console.log('验证失败');
				})
			},
			// 点击分段器
			onClickItem(e) {
				uni.showLoading({
					title: '加载中'
				});
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
					// 根据索引值修改id
					this.id = this.idMap[this.current] || 0
				}
				this.getDataApi('', this.id)
			},

			// 接收specification发送来的信息
			getMaskShow(data) {
				// data即子组件发送来的数据
				this.maskShow = data[0]
				this.progressPercent = data[1]
			},
			// 获取列表项
			getSpecificationApi() {
				getSpecification().then((res) => {
						if (res.code == 200) {
							for (let i = 0; i < res.data.length; i++) {
								this.items.push(res.data[i].dictLabel)
							}
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
			// 获取全部数据
			getDataApi(nameKey, specificationStyleId) {
				getData({
						isHot: 0,
						nameKey: nameKey,
						specificationStyleId: specificationStyleId
					}).then((res) => {
						if (res.code == 200) {
							this.itemList = res.data
							uni.hideLoading();
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
			getSpecificationStyleIdsApi() {
				getSpecificationStyleIds().then((res) => {
					if (res.code == 200) {
						for (let i = 0; i < res.data.length; i++) {
							this.items.push(res.data[i].dictLabel)
						}
					}
				}).catch((err) => {
					console.log(err);
				})
			},

		}

	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;

		.search {
			width: 95%;
			height: 80rpx;
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 30rpx;

			.search-form {
				left: 30rpx;
				width: 90%;
				height: 80rpx;
				position: relative;


				.uni-icon-search {
					// #ifdef MP-TOUTIAO
					font-size: 20px;
					// #endif
					// #ifdef MP-QQ
					position: relative;
					bottom: -6rpx;
					// #endif
				}

			}
		}

		/* 选择照片尺寸开始 */
		.size-nav {
			width: 95%;
			height: 100rpx;
			margin-top: 30rpx;

			.size-allContainer {
				width: 100%;
				margin-top: 30rpx;

				.size-first {
					width: 100%;
					display: grid;
					grid-template-columns: 1fr;
					gap: 40rpx;

				}

				.size-singleContainer {
					width: 710rpx;
					height: 150rpx;
				}
			}
		}

	}

	.search-button::after {
		border: 0;
	}

	::v-deep .u-button--primary {
		width: 200rpx;
	}

	::v-deep .u-form-item__body__right__content__slot {
		flex-direction: row;
	}

	::v-deep .u-form {
		width: 400rpx;
	}

	.sousuo {
		width: 200rpx;
		border-radius: 20px;
		color: #fff;
		background-color: #3c9cff;
		border-color: #3c9cff;
		border-width: 1px;
		border-style: solid;
		text-align: center;
		height: 40px;
		line-height: 40px;
		box-sizing: border-box;
		font-size: 26rpx;
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
</style>
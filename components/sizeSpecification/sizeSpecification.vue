<template>
	<view class="content">
		<view class="single-sizeContainer" >
			<view class="single-title" v-if="sizeList.imageName=='点击自定义'">
				点击自定义
			</view>
			<view class="single-title" v-else>
				{{sizeList.imageName}}
			</view>
			<view class="single-decoration">
				<view style="" class="single-decoration-top">
					<view >
						{{sizeList.widthpx}}*{{sizeList.heightpx}}&nbsp;px
					</view>
				</view>
				<view class="single-decoration-bottom">
					<view v-if="sizeList.imageName=='点击自定义'">
						自定义
					</view>
					<view v-else>
						{{sizeList.width}}*{{sizeList.height}}&nbsp;mm
					</view>
				</view>
			</view>
			<view :class="{ 'check': isChecked, 'noChecked': !isChecked }">
				<uni-icons type="checkbox-filled" size="25" color="#398ade"></uni-icons>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'sizeSpecification',
		props: {
			sizeList: {
				type: Object,
				default: () => {
					return {
						imageName: '点击自定义',
						widthpx: '150',
						heightpx: '150',
						width: '自定义',
						height: '自定义',
					};
				},
			},
			isChecked: {
				type: Boolean,
				default: false
			}

		},
		
		data() {
			return {
				imgUrl: '',
				maskShow: true,
			}
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
			height: 180rpx;
			position: relative;
			overflow: hidden;

			.single-title {
				width: 87%;
				color: black;
				font-size: 30rpx;
				margin-top: 10rpx;
				margin-left: 20rpx;
				overflow: hidden;
				height: 40rpx;
			}

			.single-decoration {
				margin-top: 10rpx;
				display: flex;
				flex-direction: column;
				font-size: 25rpx;

				.single-decoration-top {
					display: flex;
					margin-left: 20rpx;
					color: white;
					margin-bottom: 10rpx;
				}

				.single-decoration-bottom {
					display: flex;
					margin-left: 20rpx;
					color: white;
				}
			}

			.check {
				display: block;
				position: absolute;
				right: 0;
				top: 0;
			}

			.noChecked {
				display: none;
				position: absolute;
				right: 0;
				top: 0;
			}


		}
	}
</style>
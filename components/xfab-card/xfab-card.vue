<template>
	<view class="xfab-card">
		<slot>
			<view class="xfab-card-header" :class="{'xfab-header-line':header.line}"
				:style="{background:header.bgcolor || '#fff'}">
				<text class="xfab-header-title"
					:style="{fontSize:(title.size || 30)+'rpx',color:(title.color || '#7A7A7A')}"
					v-if="title.text">{{title.text}}</text>
			</view>
		</slot>
		<view class="xfab-card-body">
			<slot name="body"></slot>
		</view>
		<view class="xfab-card-footer">
			<slot name="footer"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "xfab-card",
		props: {
			//标题
			title: {
				type: Object,
				default: function() {
					return {
						text: "", //标题文字
						size: 30, //字体大小
						color: "#7A7A7A" //字体颜色
					}
				}
			},
			header: {
				type: Object,
				default: function() {
					return {
						bgcolor: "#fff", //背景颜色
						line: false //是否去掉底部线条
					}
				}
			},
			//是否设置外边框
			border: {
				type: Boolean,
				default: false
			},
			// index: {
			// 	type: Number,
			// 	default: 0
			// }
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.xfab-card {
		margin: 0 30rpx;
		padding: 30rpx;
		font-size: 28rpx;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 0 8rpx 12rpx -2rpx rgba(0, 0, 0, .1), 0 4rpx 8rpx -4rpx rgba(0, 0, 0, .1);
		box-sizing: border-box;
		overflow: hidden;
	}

	.xfab-card-header {
		width: 100%;
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}

	//header底部线条
	.xfab-card-header::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #0000001a;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
		pointer-events: none;
	}

	.xfab-header-line::after {
		border-bottom: 0 !important;
	}


	.xfab-header-title {
		display: inline-block;
		font-size: 30rpx;
		color: #7a7a7a;
		vertical-align: middle;
		max-width: 460rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.xfab-card-body {
		font-size: 32rpx;
		// color: #262b3a;
		color: #596d96;
		box-sizing: border-box;
	}

	.xfab-card-footer {
		font-size: 28rpx;
		color: #596d96;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		box-sizing: border-box;
	}
</style>

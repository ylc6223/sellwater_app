<template>
	<view class="container">
		<view class="content flex-col">
			<view class="ic-card"></view>
			<view class="action">
				<tui-button shape="circle" width="100%">读卡</tui-button>
			</view>

		</view>
		<tui-tabbar></tui-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 2
			}
		},
		computed: {

		},
		onLoad() {
			uni.hideTabBar()
			this.initBluetooth()
		},
		methods: {
			//开启
			initBluetooth() {
				const that = this
				uni.openBluetoothAdapter({
					success(res) {
						console.log('蓝牙适配器已打开');
						that.searchAroundBluetooth()
					},
					fail(e) {
						console.log('蓝牙适配器打开失败', e);
					}
				})
			},
			//判断当前设备是否支持蓝牙功能
			//开启蓝牙搜索
			searchAroundBluetooth(){
				uni.startBluetoothDevicesDiscovery({
				  success: function(res) {
				    console.log('开始搜索周围的蓝牙设备', res);
				  },
				  fail: function(res) {
				    console.log('搜索周围的蓝牙设备失败', res);
				  }
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding-top: 50rpx;
	}

	.content {
		position: relative;
		height: calc(100vh - 150rpx);

		.action {
			position: absolute;
			bottom: 11%;
			left: 50%;
			transform: translateX(-50%);
			width: 50%;
			margin: 0 auto;
		}
	}

	.ic-card {
		position: relative;
		width: 408rpx;
		height: 626rpx;
		margin: 0 auto;
	}

	.ic-card::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 200%;
		border: 1px solid #eee;
		border-radius: 40rpx;
		box-shadow: 0 0 5rpx 5rpx #eee;
		color: red;
		height: 200%;
		-webkit-transform-origin: left top;
		transform-origin: left top;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		pointer-events: none;
		/* 防止点击触发 */
		box-sizing: border-box;
		background: #2193b0;
		/* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
		/* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #6dd5ed, #2193b0);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	}
</style>

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
				index: 2,
				blueDeviceList: [],
				deviceId: "", //将要连接的蓝牙设备id
			}
		},
		computed: {

		},
		onLoad() {
			uni.hideTabBar()
			this.openBluetoothAdapterBefore()
		},
		methods: {
			openBluetoothAdapterBefore() {
				var that = this;
				if (!uni.openBluetoothAdapter) {
					this.$g.tui.modal({
						title: '提示',
						showCancel: false,
						content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
					})
					return;
				}
				// 初始化小程序蓝牙模块
				uni.openBluetoothAdapter({
					success(res) {
						console.log("蓝牙初始化成功", res);
						//开始搜索附近蓝牙设备
						that.startDiscovery()
					},
					fail(err) {
						if (err.errCode === 10001) {
							console.log(err);
							that.$g.tui.toast({
								text: '请开启手机蓝牙',
								duration: 5000
							})
							// 监听蓝牙适配器状态变化事件
							uni.onBluetoothAdapterStateChange(function(res) {
								if (res.available) {
									that.startDiscovery()
								}
							})
						}

					}
				})
			},
			//搜索附近蓝牙设备
			startDiscovery() {
				const that = this
				uni.startBluetoothDevicesDiscovery({
					success(res) {
						console.log('开始搜索')
						// 开启监听回调
						uni.onBluetoothDeviceFound(that.found)
					},
					fail(err) {
						console.log('搜索失败')
						console.error(err)
					}
				})
			},
			//连接蓝牙设备
			createConnected(data) {
				const that = this
				console.log(data)
				this.deviceId = data.deviceId
				uni.createBLEConnection({
					deviceId: this.deviceId,
					success(res) {
						console.log('连接成功', res)
						// 停止搜索
						that.stopDiscovery()
					},
					fail(err) {
						console.log('连接失败', err)
					}
				})
			},
			// 停止搜索蓝牙设备
			stopDiscovery() {
				uni.stopBluetoothDevicesDiscovery({
					success(res) {
						console.log('停止成功')
						console.log(res)
					},
					fail(err) {
						console.log('停止失败')
						console.error(err)
					}
				})
			},
			// 找到新设备就触发该方法
			found(res) {
				this.blueDeviceList.push(res.devices[0])
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

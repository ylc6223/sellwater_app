<template>
	<view class="container relative">
		<tui-navigation-bar splitLine @init="initNavigation" @change="opacityChange" :scrollTop="scrollTop"
			title="NavBar自定义导航栏" backgroundColor="#fff" color="#333">
			<!-- #ifndef MP-ALIPAY || MP-BAIDU -->
			<view class="tui-header-icon" :style="{ marginTop: 24 + 'px' }">
				<tui-icon name="arrowleft" :color="opacity > 0.85 ? '#333' : '#fff'" @click="back"></tui-icon>
			</view>
			<!-- #endif -->
		</tui-navigation-bar>
		<view class="tui-header-bg">
			<image src="/static/images/my/mine_bg_3x.png" class="tui-header-img" />
			<view class="header-info relative z-999">
				<view class="flex flex-col justify-center items-center">
					<image class="avatar" src="/static/images/avatar.svg" />
					<view v-if="isLogin" class="flex flex-col">
						<text class="username">John Doe</text>
						<text class="email">johndoe@example.com</text>
					</view>
					<view v-else class="flex justify-center items-center">
						<text>立即登录</text>
					</view>
				</view>
			</view>
			<view class="menu-list flex justify-center flex-wrap">
				<view class="menu-item flex flex-col items-center">
					<view class="menu-item_box flex items-center justify-evenly">
						<tui-icon name="friendadd" color="#FFF"></tui-icon>
					</view>
					<text>开户</text>
				</view>
				<view class="menu-item flex flex-col items-center">
					<view class="menu-item_box flex items-center justify-evenly">
						<tui-icon name="delete" color="#FFF"></tui-icon>
					</view>
					<text>销户</text>
				</view>
				<view class="menu-item flex flex-col items-center">
					<view class="menu-item_box flex items-center justify-evenly">
						<tui-icon name="evaluate" color="#FFF"></tui-icon>
					</view>
					<text>补卡</text>
				</view>
			</view>
		</view>
		<!-- <view class="header-bg">
			<view class="header flex justify-center">
				<image class="avatar" src="/static/images/avatar.svg" />
				<view v-if="isLogin" class="flex flex-col">
					<text class="username">John Doe</text>
					<text class="email">johndoe@example.com</text>
				</view>
				<view v-else class="flex justify-center items-center">
					<text>立即登录</text>
				</view>
			</view>
			<view class="menu-list flex justify-center flex-wrap">
				<view class="menu-item flex flex-col items-center">
					<view class="menu-item_box flex items-center justify-evenly">
						<tui-icon name="friendadd" color="#FFF"></tui-icon>
					</view>
					<text>开户</text>
				</view>
				<view class="menu-item flex flex-col items-center">
					<view class="menu-item_box flex items-center justify-evenly">
						<tui-icon name="delete" color="#FFF"></tui-icon>
					</view>
					<text>销户</text>
				</view>
				<view class="menu-item flex flex-col items-center">
					<view class="menu-item_box flex items-center justify-evenly">
						<tui-icon name="evaluate" color="#FFF"></tui-icon>
					</view>
					<text>补卡</text>
				</view>
			</view>
		</view> -->
		<xfab-card class="absolute w-full" style="margin-top: -40rpx;">
			<tui-list-view>
				<tui-list-cell :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="people" :size="24" color="#ff7900"></tui-icon>
						<text class="tui-list-cell_name">用户管理</text>
					</view>
				</tui-list-cell>
				<tui-list-cell :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="service-fill" :size="24" color="#5677fc"></tui-icon>
						<view class="tui-list-cell_name">用户类型</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="setup" :size="24" color="#19be6b"></tui-icon>
						<view class="tui-list-cell_name">系统设置</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="histogram" :size="23" color="#ed3f14"></tui-icon>
						<view class="tui-list-cell_name">表计管理</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="about" :size="23" color="#ed3f14"></tui-icon>
						<view class="tui-list-cell_name">关于我们</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :arrow="true" @click="detail">
					<view class="tui-item-box">
						<tui-icon name="kefu" :size="23" color="#19be6b"></tui-icon>
						<view class="tui-list-cell_name">联系我们</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</xfab-card>

		<tui-tabbar></tui-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false
			};
		},
		methods: {
			detail() {
				uni.navigateTo({
					url: "/pages/chat/chat"
				})
			},
			navigateTo(route) {
				uni.navigateTo({
					url: `/pages/${route}/${route}`,
				});
			},
			initNavigation() {

			},
			back(){
				
			}
		},
		onLoad() {
			uni.hideTabBar()
		},
	}
</script>

<style lang="scss">
	.tui-header-bg {
		width: 100%;
		margin: 0;
		position: relative;
		height: 440rpx;
		// overflow: hidden;
	}

	.tui-header-img {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		// height: 440rpx;
		// display: block;
	}

	.tui-header-icon {
		width: 100%;
		position: fixed;
		top: 0;
		padding: 0 12rpx;
		display: flex;
		align-items: center;
		height: 32px;
		transform: translateZ(0);
		z-index: 99999;
		box-sizing: border-box;
	}

	.header-info {
		position: absolute;
		left: 50%;
		top: 35%;
		transform: translate(-50%, -35%);
	}

	.menu-list {
		position: absolute;
		top: 55%;
		width: 100%;
		z-index: 999;
	}

	.menu-item {
		width: 25%;
	}

	.menu-item_box {
		width: 100rpx;
		height: 100rpx;
		border-radius: 10rpx;
		background-color: transparent;
		color: #FFF;
		margin: 10rpx;
		margin-bottom: 0;
	}

	.tui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.tui-list-cell_name {
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		// padding: 20rpx;
		padding-top: 0;
		padding-bottom: env(safe-area-inset-bottom);
		background-color: #F9FAFB;
		height: 100%;
	}

	.header {
		display: flex;
		align-items: center;
		padding-top: 20rpx;
		margin-bottom: 40rpx;
	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.username {
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
		color: #202124;
	}

	.email {
		font-size: 28rpx;
		color: #999;
	}
</style>

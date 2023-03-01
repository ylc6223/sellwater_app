<template>
	<view class="container">
		<view class="header-bg">
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
		</view>
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
		}
	}
</script>

<style lang="scss">
	.menu-item {
		width: 25%;
	}

	.menu-item_box {
		width: 100rpx;
		height: 100rpx;
		border-radius: 10rpx;
		background-color: #707070;
		color: #FFF;
		margin: 10rpx;
	}

	.header-bg{
		background-color: #6F8AFB;
		opacity: .8;
		padding-bottom: 40rpx;
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
		margin-right: 30rpx;
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

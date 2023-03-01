<template>
	<view class="container">
		<view class="tui-header" :style="{opacity:maxOpacity,backgroundColor: bgColor}">
			<view class="tui-rolling-search">
				<tui-icon name="search-2" :size="32" unit="rpx"></tui-icon>
				<swiper vertical autoplay circular interval="8000" class="tui-swiper">
					<swiper-item v-for="(item, index) in hotSearch" :key="index" class="tui-swiper-item" @tap="search">
						<view class="tui-hot-item">{{ item }}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<view class="tui-header-banner">
			<view class="tui-banner-bg">
				<view class="tui-primary-bg tui-route-left"></view>
				<view class="tui-primary-bg tui-route-right"></view>
				<!--banner-->
				<view class="tui-banner-box">
					<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="150"
						class="tui-banner-swiper" :circular="true" indicator-color="rgba(255, 255, 255, 0.8)"
						indicator-active-color="#5677fc99">
						<swiper-item v-for="(item, index) in banner" :key="index" @tap.stop="detail">
							<image :src="'https://thorui.cn/images/mall/banner/' + item" class="tui-slide-image"
								mode="scaleToFill"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class="mt-120">
			<xfab-card :title="title">
				<template v-slot:body>
					<view>
						<view class="menu-list flex flex-wrap">
							<view class="menu-item flex flex-col items-center" v-for="(item,index) in menuItems"
								:key="index">
								<view class="menu-item_box flex items-center justify-evenly">
									<tui-icon name="about" color="#FFF"></tui-icon>
								</view>
								<text>{{item.text}}</text>
							</view>
						</view>
					</view>
				</template>
			</xfab-card>
		</view>

		<tui-tabbar></tui-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgColor: 'rgba(86, 119, 252, 0.6)', // 搜索框背景色的透明度初始为0
				maxOpacity: 1, // 搜索框背景色的最大透明度
				banner: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
				title: {
					text: "基本管理", //标题文字
					size: 32, //字体大小
					color: "#262b3a" //字体颜色
				},
				menuItems: [{
						text: "蓝牙充值"
					},
					{
						text: "IC卡充值"
					},
					{
						text: "开户"
					},
					{
						text: "发卡"
					},
					{
						text: "报表"
					},
					{
						text: "水价"
					},
					{
						text: "补卡"
					},
					{
						text: "升级权益"
					},
					{
						text: "删除团队"
					},
				]

			}
		},
		computed: {},
		onLoad() {
			uni.hideTabBar()
		},
		methods: {
			// 监听页面滚动事件
			onPageScroll(event) {
				const scrollTop = event.scrollTop;
				const maxScrollTop = 50; // 页面滚动到50px时搜索框的背景色透明度为最大值
				const opacity = Math.min(scrollTop / maxScrollTop, this.maxOpacity); // 计算当前背景色的透明度

				// 更新搜索框背景色的透明度
				this.bgColor = `rgba(86, 119, 252, ${opacity})`;
			},
		},
		onShow() {
			// 监听页面显示事件
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			// 将页面滚动到顶部，并设置滚动时间为0ms
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 300
			});
			// 将页面滚动到顶部，并设置滚动时间为300ms
		},
		onReady() {
			// 监听页面初次渲染完成事件
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			// 将页面滚动到顶部，并设置滚动时间为0ms
		},
		mounted() {
			// 监听页面组件挂载完成事件
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			// 将页面滚动到顶部，并设置滚动时间为0ms
			uni.showNavigationBarLoading();
			// 显示页面导航栏的加载动画
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		padding-bottom: 100rpx;
		color: #333;
	}

	.tui-header {
		width: 100%;
		height: 100rpx;
		padding: 0 30rpx 0 20rpx;
		box-sizing: border-box;
		// background-color: $uni-bg-color-blue;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 999;
		transition: all .4s ease-out;
	}

	.tui-rolling-search {
		width: 100%;
		height: 60rpx;
		border-radius: 35rpx;
		padding: 0 40rpx 0 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		color: #999;
	}

	.tui-swiper {
		font-size: 26rpx;
		height: 60rpx;
		flex: 1;
		padding-left: 12rpx;
	}

	.tui-swiper-item {
		display: flex;
		align-items: center;
	}

	.tui-hot-item {
		line-height: 26rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-header-banner {
		padding-top: 100rpx;
		box-sizing: border-box;
		background: #5677fc99;
	}

	.tui-banner-bg {
		display: flex;
		height: 180rpx;
		background-color: #5677fc99;
		position: relative;
	}

	.tui-primary-bg {
		width: 50%;
		display: inline-block;
		height: 224rpx;
		border: 1px solid transparent;
		position: relative;
		z-index: 1;
		background-color: #5677fc99;
	}

	.tui-route-left {
		transform: skewY(8deg);
	}

	.tui-route-right {
		transform: skewY(-8deg);
	}

	.tui-banner-box {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		position: absolute;
		/* overflow: hidden; */
		z-index: 99;
		bottom: -80rpx;
		left: 0;
	}

	.tui-banner-swiper {
		width: 100%;
		height: 240rpx;
		border-radius: 20rpx;
		overflow: hidden;
		transform: translateY(0);
		background-color: #f8f8f8;
	}

	.tui-slide-image {
		width: 100%;
		height: 240rpx;
		display: block;
	}

	/* #ifdef MP-WEIXIN */
	.tui-banner-swiper .wx-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	.tui-banner-swiper .wx-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}

	.tui-banner-swiper .wx-swiper-dot-active::before {
		background-color: #fff;
	}

	.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 16rpx;
	}

	/* #endif */
	.menu-item {
		width: 25%;
	}

	.menu-item_box {
		width: 100rpx;
		height: 100rpx;
		border-radius: 10rpx;
		background-color: #1890FF;
		margin: 10rpx;
	}
</style>

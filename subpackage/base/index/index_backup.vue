<template>
	<view class="container">
		<view>
			<xfab-card :title="title">
				<template v-slot:body>
					<view>
						<view class="menu-list flex flex-wrap">
							<view class="menu-item flex flex-col items-center" v-for="(item,index) in menuItems" :key="index">
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
		
		<view class="mt-30">
			<xfab-card :title="title">
				<template v-slot:body>
					<view>
						<view class="menu-list flex flex-wrap">
							<view class="menu-item flex flex-col items-center" v-for="(item,index) in menuItems" :key="index">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: {
					text: "基本管理", //标题文字
					size: 32, //字体大小
					color: "#262b3a" //字体颜色
				},
				menuItems: [{
						text: "打卡设置"
					},
					{
						text: "成员管理"
					},
					{
						text: "数据统计"
					},
					{
						text: "考勤确认"
					},
					{
						text: "打卡路线"
					},
					{
						text: "空间管理"
					},
					{
						text: "审批申请"
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
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.menu-item{
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

<template>
	<view class="container">
		<view>
			<tui-grid>
				<block v-for="(item,index) in items" :key="index">
					<tui-grid-item :cell="3" @click="detail">
						<view class="flex justify-center items-center">
							<tui-icon :name="item.name"></tui-icon>
						</view>
						<text class="flex justify-center items-center">{{item.text}}</text>
					</tui-grid-item>
				</block>
			</tui-grid>
		</view>
		<tui-tabbar></tui-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						name: "nodata",
						text: "读卡"
					},
					{

						name: "delete",
						text: "清卡"

					},
					{

						name: "deletekey",
						text: "清零卡"

					},
					{

						name: "setup",
						text: "设置卡"

					},
					{
					
						name: "search",
						text: "查询卡"
					
					},
				]
			}
		},
		computed: {

		},
		onLoad() {
			uni.hideTabBar()
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>

</style>

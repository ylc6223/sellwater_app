<template>
	<view class="container">
		充值
		<!-- 		<tui-tabbar :current="tabBarIndex" backdropFilter :tabBar="tabBar" color="#34495e" selectedColor="#3498db"
			@click="switchTabBar"></tui-tabbar> -->
		<tui-tabbar></tui-tabbar>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				index: 2
			}
		},
		computed: {
			...mapState(['tabBar', 'tabBarIndex']),
		},
		onLoad() {
			uni.hideTabBar()
		},
		methods: {
			switchTabBar(params) {
				this.changeTabBar(params)
			},
			...mapMutations(['changeTabBar']),
		}
	}
</script>

<style lang="scss" scoped>

</style>

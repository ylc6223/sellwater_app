<template>
	<view>
		<xfab-card :title="title">
			<template v-slot:body>
				<view>
					<view class="flex">
						
					</view>
				</view>
			</template>
			<template v-slot:footer>
				<view>
					footer
				</view>
			</template>
		</xfab-card>

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
				}
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>

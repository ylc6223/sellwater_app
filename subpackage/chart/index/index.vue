<template>
	<view class="container">
        <dynamic-form @submit="submit" @uploadMedia="uploadMedia" :formData="formData" @updateValue="updateValue" :config="config">
        </dynamic-form>
		<tui-tabbar></tui-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 3,
				formData: {},
				config: [{
						label: '输入框',
						placeholder: '请输入',
						key: 'temperature',
						type: 'input',
						unit: '℃',
						inputType: 'text'
					},
					{
						label: '单选',
						placeholder: '请选择',
						key: 'age',
						type: 'picker',
						options: [{
							label: '1岁',
							value: '1'
						}, {
							label: '2岁',
							value: '2'
						}],
					},
					{
						label: '多选',
						key: 'bloodPressure',
						options: [{
							label: '看电影',
							value: '1'
						}, {
							label: '下棋',
							value: '2'
						}],
						type: 'multipleChoice'
					},
					{
						label: '文本框',
						placeholder: '请输入',
						key: 'remark',
						type: 'textarea'
					},
					{
						label: '图片/视频',
						placeholder: '请上传图片',
						key: 'images',
						type: 'uploadMedia'
					},
					{
						label: '日期',
						placeholder: '请选择日期',
						key: 'date',
						type: 'date'
					},
					{
						label: '时间',
						placeholder: '请选择时间',
						key: 'time',
						type: 'time'
					},
					{
						label: '多图上传',
						placeholder: '请上传图片',
						key: 'picture',
						type: 'pictureGroup',
						max: 2
					}
				]
			}
		},
		computed: {},
		onLoad() {
			uni.hideTabBar()
		},
		methods: {
			// 更新数据
			updateValue(val) {
				this.formData = val
			},

			// 提交数据
			submit(val) {
				console.log(val)
				console.log(this.formData)
			},

			// 图片/视频上传
			uploadMedia(e) {
				// 如果 在formData中没有定义该字段，则需要进行深拷贝
				const data = JSON.parse(JSON.stringify(this.formData))
				data[e.key] = e.tempFiles
				this.formData = JSON.parse(JSON.stringify(data))

				/* 如果定义了formData: {images: ''}，则不需要进行深拷贝 
				this.formData[e.key] = e.tempFiles
				*/
			},

			// 多图上传
			uploadPicture(e) {
				// 如果 在formData中没有定义该字段，则需要进行深拷贝
				const data = JSON.parse(JSON.stringify(this.formData))
				if (data[e.key] && data[e.key].length) {
					data[e.key] = [...data[e.key], e.tempFiles[0].tempFilePath]
				} else {
					data[e.key] = [e.tempFiles[0].tempFilePath]
				}
				this.formData = JSON.parse(JSON.stringify(data))
				/* 如果定义了formData: {images: ''}，则不需要进行深拷贝 
				this.formData[e.key] = [...this.formData[e.key], ...e.tempFiles[0].tempFilePath]
				*/
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>

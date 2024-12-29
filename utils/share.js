import store from "./../store";
export default {
	//1.配置发送给朋友
	onShareAppMessage() {
		return {
			title: store.state.navigationBarTitleText, //分享的标题
			path: 'pages/index/index', //点击分享链接之后进入的页面路径
			imageUrl: '/static/logo.png' //分享发送的链接图片地址
		};
	},
	//2.配置分享到朋友圈
	onShareTimeline() {
		return {
			title: store.state.navigationBarTitleText, //分享的标题
			query: 'pages/index/index', //点击分享链接之后进入的页面路径
			imageUrl: '/static/logo.png' //分享发送的链接图片地址
		}
	},
}
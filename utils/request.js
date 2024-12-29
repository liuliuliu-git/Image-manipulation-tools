import {
	getToken,
	removeToken
} from './auth';
import env from './env';

function service(options = {}) {
	options.url = `${env.baseUrl}${options.url}`;
	// 判断本地是否存在token，如果存在则带上请求头
	if (options.headers.isToken) {
		options.header = {
			'content-type': 'application/json',
			'Authorization': getToken() ? `Bearer ${getToken()}` :
				'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjI0MjIzZjhjLTEyMmMtNGYwZC1hMmExLWFlNWZhZWE1ZmZkYSJ9.oQIBVdN0828KM8siQjz4vHkzK2N7UC6g7rGm1lPF9bicSmLFw8flavgQWwIgxiIZMmaVU4AUBC6FkhwmRyxtNQ'
		};
	}

	return new Promise((resolved, rejected) => {
		options.success = (res) => {
			// 如果请求回来的状态码不是200则执行以下操作
			if (res.data.code !== 200) {
				if (res.data.data[0].code != 0) {
					// 非成功状态码弹窗
					uni.showToast({
						icon: 'none',
						duration: 3000,
						title: `${res.msg}`
					});
				}
				// 登陆失效
				if (res.data.code === 403) {
					// 清除本地token
					removeToken()
					// 关闭所有页面返回到登录页
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
				// 返回错误信息
				rejected(res)
			} else {
				// 请求回来的状态码为200则返回内容
				resolved(res.data)
			}
		};
		options.fail = (err) => {
			// 请求失败弹窗
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: '服务器错误,请稍后再试'
			});
			rejected(err);
		};
		uni.request(options);
	});
}

export default service;
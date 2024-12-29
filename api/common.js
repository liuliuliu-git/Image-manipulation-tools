import request from '@/utils/request'

// 输入值内容过滤，TODO：需要后端对接各小程序的输入值过滤校验
export function testFilter(text) {
	return request({
		url: `/test/test/${text}`,
		headers: {
			isToken: true
		},
		method: 'GET'
	})
}
"use strict";
// 变量可自行添加修改
let options = {}
if (process.env.NODE_ENV === 'development') {
	options = {
		baseUrl: 'http://mashang.eicp.vip:5555/ms_stu_pro173'
	}
} else {
	options = {
		baseUrl: 'https://fzhhwy.cn/mini_program_server'
	}
}
export default options
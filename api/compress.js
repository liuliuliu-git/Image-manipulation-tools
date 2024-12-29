import request from '@/utils/request'

/**查询尺寸数据
 * 
 * @param {*} params 
 * @returns 
 */
export function getData(data) {
	return request({
		url: '/ms111/specification/ms111/getListAll',
		method: 'GET',
		headers: {
			isToken: false
		},
		data
	});
}


/**提交dpi
 * 
 * @param {*} params 
 * @returns 
 */
export function putDpi(data) {
	return request({
		url: '/ms111/compress/ms111/putDPI',
		method: 'POST',
		headers: {
			isToken: false
		},
		data
	});
}

/**
 *压缩图片 
 * 
 * @param {*} params 
 * @returns 
 */
export function putQuality(data) {
	return request({
		url: '/ms111/compress/ms111/putQuality',
		method: 'POST',
		headers: {
			isToken: false
		},
		data
	});
}
/**尺寸修改
 * 
 * @param {*} params 
 * @returns 
 */
export function putSize(data) {
	return request({
		url: '/ms111/compress/ms111/putSize',
		method: 'POST',
		headers: {
			isToken: false
		},
		data
	});
}
/**提交图片
 * 
 * @param {*} params 
 * @returns 
 */
export function postImage(data) {
	return request({
		url: '/ms111/compress/ms111/postImage',
		method: 'POST',
		headers: {
			isToken: false
		},
		data
	});
}
/**删除图片
 * 
 * @param {*} params 
 * @returns 
 */
export function deleteImage(data) {
	return request({
		url: '/ms111/compress/ms111/deleteImage?filePath=' + data,
		method: 'POST',
		headers: {
			isToken: false
		},
	});
}
/**规格列表
 * 
 * @param {*} params 
 * @returns 
 */
export function getSpecificationStyleIds(data) {
	return request({
		url: '/ms111/specification/ms111/getSpecificationStyleIds',
		method: 'GET',
		headers: {
			isToken: false
		},
		data
	});
}

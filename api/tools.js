//校验文本
export function checkText(appid, text, clientType) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `https://czw.ssken.cn/drifting/checkText`,
			method: 'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			data: {
				appid,
				text,
				clientType
			},
			success: res => {
				if (res.statusCode == 200) {
					resolve(res); // 成功时返回res
				}
			},
			fail: err => {
				console.log(err);
				uni.showToast({
					title: "文字错误",
					icon: 'error'
				});
				reject(err); // 失败时返回错误信息
			}
		});
	});
}

// 获取广告apdid接口
export function getadpid(appid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `https://anjiko.cn/advert/query`,
			method: 'GET',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			data: {
				appCode: appid

			},
			success: res => {
				// 广告列表
				if (res.statusCode == 200) {
					resolve(res.data.rows)
				}
			},
			fail: err => {
				console.log(err)

			}
		})
	})

}

export function getAccessToken(appid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `https://developer.toutiao.com/api/apps/v2/token`,
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			data: {
				"appid": appid,
				"grant_type": "client_credential",
				"secret": "0e0802cd97a11f0bbdc2313360601d08ba11f8a5"
			},
			success: res => {
				resolve(res.data.data.access_token)
			},
			fail: err => {
				console.log(err)

			}
		})
	})
}
export function checkImage(appid, accessToken, image) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `https://developer.toutiao.com/api/apps/censor/image`,
			method: 'POST',
			header: {
				'Content-Type': 'application/json'
			},
			data: {
				"app_id": appid,
				"access_token": accessToken,
				"image_data": image
			},
			success: res => {
				resolve(res.data.predicts)
			},
			fail: err => {
				console.log(err)

			}
		})
	})
}
export function convertImageToBase64(tempFiles) {
	return new Promise((resolve, reject) => {
		// 转base64
		uni.getFileSystemManager().readFile({
			filePath: tempFiles,
			encoding: "base64",
			success: function(res) {
				resolve(res)
			}
		})
	});
}
export function checkFalse(predicts) {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < predicts.length; i++) {
			if (predicts[i].hit) {
				resolve(true);
				return; // 如果有一个为true，立即返回true
			}
		}
		resolve(false); // 循环结束后都没有返回true，则返回false
	});
}

export function verifyImage(appid, image, clientType) {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: `https://czw.ssken.cn/check/upload`,
			filePath: image,
			name: "file",
			method: 'POST',
			header: {
				'Content-Type': 'multipart/form-data',
				"appid": appid,
				"clientType": clientType
			},
			success: res => {
				console.log(JSON.parse(res.data).result);
				resolve(JSON.parse(res.data).result)
			},
			fail: err => {
				console.log(err)
			}
		})
	})
}
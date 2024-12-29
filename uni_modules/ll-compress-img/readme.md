# ll-compress-img

```
图片压缩 图片格式转换🙂
支持小程序、app、H5
效果比官方uni.compressImage好，目前没测出bug
可限制图片大小 同时处理多张图片
基于canvas组件，借用了uv组件进行展示
```

# 食用方法：
```
食用方法：
1.在<template>添加<ll-compress-img>组件，并设置ref 例:<ll-compress-img ref="abc1"></ll-compress-img>
2.使用时直接调用组件内方法
	this.$refs.abc1.format_img	参数(src,quality = 0.9,type = 'jpg',ratio = 1)图片地址，质量，转换后图片类型，比例
	this.$refs.abc1.multiple_format_img	参数(list,quality = 0.9,type = 'jpg',ratio = 1)图片地址列表，质量，转换后图片类型，比例
	this.$refs.abc1.compress_img	参数(src,size = 500,type,ratio = 0.9)图片地址，压缩后最大大小（单位：KB），压缩后图片类型（h5还支持webp等格式），比例
	this.$refs.abc1.multiple_compress_img	参数(list,size = 500,type,ratio = 0.9)图片地址，压缩后最大大小（单位：KB），压缩后图片类型（h5还支持webp等格式），比例
3.用.then和.catch获取返回值（参照下面用例）
	format_img和compress_img返回图片地址
	multiple_format_img和multiple_compress_img返回图片地址列表
```

## 注意：

```
1.压缩时比例不要设置为1，否则可能会导致压缩失败
2.比例越小压缩越快，但质量可能参差不齐
3.h5使用不一样压缩方式，速度更快
4.输入格式支持jpg、png、gif，输出格式支持jpg、png、（H5支持webp等格式，具体未知）
```


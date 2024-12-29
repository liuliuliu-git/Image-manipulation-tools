// 插屏广告
class InterstitialAd {
  adInstance = null;
  createSuccess = true;
  adUnitId = '';

  constructor(adUnitId) {
    this.adUnitId = adUnitId;
    // #ifdef MP-WEIXIN
    this.createWX();
    // #endif
    // #ifndef MP-WEIXIN
    this.createSuccess = false;
    console.error('暂不支持此小程序');
    // #endif
  }

  _check() {
    if (!this.createSuccess) {
      throw new Error('请检查是否引入了广告模块');
    }
  }

  createWX(adUnitId = this.adUnitId) {
    this._check();

    // eslint-disable-next-line no-undef
    this.adInstance = wx.createInterstitialAd({
      adUnitId
    });
  }

  init() {
    this.adInstance.onLoad(() => {
      console.log('onLoad event emit');
      this.adInstance.show();
    });
    this.adInstance.onError((err) => {
      console.log('onError event emit', err);
    });
    this.adInstance.onClose((res) => {
      console.log('onClose event emit', res);
    });
  }
}

export default InterstitialAd;

<view class="content data-v-7c09139c"><block qq:if="{{getId!=''}}"><my-navbar class="navBar data-v-7c09139c" vue-id="164d94d0-1" ad-unit-id="{{getId}}" bind:__l="__l"></my-navbar></block><view style="height:88rpx;width:94%;" class="data-v-7c09139c"><text style="font-weight:bolder;" class="data-v-7c09139c">照片尺寸修改</text><view class="line data-v-7c09139c"></view></view><block qq:if="{{getId!=''}}"><banner vue-id="164d94d0-2" ad-unit-id="{{getId}}" class="data-v-7c09139c" bind:__l="__l"></banner></block><view data-event-opts="{{[['tap',[['toModifyDpi',['$event']]]]]}}" class="modifySize-container data-v-7c09139c" bindtap="__e"><view class="modifySize data-v-7c09139c"><view class="photoNull data-v-7c09139c" style="{{'background-image:'+('url('+fullImageUrl+')')+';'}}"></view><text style="font-size:28px;" class="data-v-7c09139c">修改dpi</text></view></view><view class="size-nav data-v-7c09139c"><view style="display:flex;align-items:center;" class="data-v-7c09139c"><text style="font-weight:bolder;font-size:33rpx;line-height:50rpx;" class="data-v-7c09139c">热门规格</text><uni-icons vue-id="164d94d0-3" type="fire-filled" size="25" color="red" class="data-v-7c09139c" bind:__l="__l"></uni-icons></view><view data-event-opts="{{[['tap',[['toChooseSize',['$event']]]]]}}" style="line-height:50rpx;" bindtap="__e" class="data-v-7c09139c"><text class="data-v-7c09139c">查看全部</text><uni-icons vue-id="164d94d0-4" type="right" size="15" class="data-v-7c09139c" bind:__l="__l"></uni-icons></view></view><view class="size-allcontainer data-v-7c09139c"><specification style="height:150rpx;" bind:transmit="__e" vue-id="164d94d0-5" data-event-opts="{{[['^transmit',[['getMaskShow',['$0'],['arguments']]]]]}}" class="data-v-7c09139c" bind:__l="__l"></specification><block qq:for="{{sizeList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="size-singleContainer data-v-7c09139c"><specification vue-id="{{'164d94d0-6-'+index}}" size-list="{{item}}" data-event-opts="{{[['^transmit',[['getMaskShow',['$0'],['arguments']]]]]}}" bind:transmit="__e" class="data-v-7c09139c" bind:__l="__l"></specification></view></block></view><view class="search data-v-7c09139c"><uni-icons class="search-icon data-v-7c09139c" vue-id="164d94d0-7" type="search" size="25" color="white" data-event-opts="{{[['^click',[['toChooseSize']]]]}}" bind:click="__e" bind:__l="__l"></uni-icons><u-button vue-id="164d94d0-8" shape="circle" type="primary" data-event-opts="{{[['^click',[['toChooseSize']]]]}}" bind:click="__e" class="data-v-7c09139c" bind:__l="__l" vue-slots="{{['default']}}">搜索证件照规格</u-button></view><block qq:if="{{maskShow}}"><mask vue-id="164d94d0-9" mask-show="{{maskShow}}" progress-percent="{{progressPercent}}" class="data-v-7c09139c" bind:__l="__l"></mask></block></view>